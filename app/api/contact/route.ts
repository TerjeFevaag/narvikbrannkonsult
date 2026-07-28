import { NextResponse } from 'next/server'

const TO_EMAIL = 'post@narvikbrannkonsult.no'
const FROM_EMAIL = 'post@narvikbrannkonsult.no'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const PROSJEKTTYPE_LABELS: Record<string, string> = {
  brannkonsept: 'Brannkonsept',
  brannprosjektering: 'Brannprosjektering',
  branninspeksjon: 'Branninspeksjon',
  'uavhengig-kontroll': 'Uavhengig kontroll',
  annet: 'Annet',
}

const MAX_FILES = 3
const MAX_FILE_SIZE = 4 * 1024 * 1024 // 4 MB
const MAX_TOTAL_SIZE = 4 * 1024 * 1024 // 4 MB
const ACCEPTED_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp', 'image/gif']

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function POST(request: Request) {
  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Ugyldig forespørsel.' }, { status: 400 })
  }

  const getStr = (key: string) => {
    const value = formData.get(key)
    return typeof value === 'string' ? value.trim() : ''
  }

  const navn = getStr('navn')
  const epost = getStr('epost')
  const telefon = getStr('telefon')
  const prosjekttype = getStr('prosjekttype')
  const melding = getStr('melding')

  if (!navn || navn.length > 200) {
    return NextResponse.json({ error: 'Vennligst oppgi et gyldig navn.' }, { status: 400 })
  }
  if (!epost || epost.length > 320 || !EMAIL_RE.test(epost)) {
    return NextResponse.json({ error: 'Vennligst oppgi en gyldig e-postadresse.' }, { status: 400 })
  }
  if (telefon.length > 40) {
    return NextResponse.json({ error: 'Telefonnummeret er for langt.' }, { status: 400 })
  }
  if (!melding || melding.length > 5000) {
    return NextResponse.json({ error: 'Vennligst skriv en melding (maks 5000 tegn).' }, { status: 400 })
  }

  const files = formData.getAll('vedlegg').filter((f): f is File => f instanceof File && f.size > 0)

  if (files.length > MAX_FILES) {
    return NextResponse.json({ error: `Maks ${MAX_FILES} vedlegg tillatt.` }, { status: 400 })
  }
  for (const file of files) {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: `Filtypen til "${file.name}" støttes ikke. Bruk PDF, JPG, PNG, WEBP eller GIF.` }, { status: 400 })
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: `"${file.name}" er for stor. Maks 4 MB per fil.` }, { status: 400 })
    }
  }
  const totalSize = files.reduce((sum, f) => sum + f.size, 0)
  if (totalSize > MAX_TOTAL_SIZE) {
    return NextResponse.json({ error: 'Vedleggene er til sammen for store. Maks 4 MB totalt.' }, { status: 400 })
  }

  const apiKey = process.env.MAILERSEND_API_KEY
  if (!apiKey) {
    console.error('MAILERSEND_API_KEY er ikke satt')
    return NextResponse.json(
      { error: 'Skjemaet er midlertidig utilgjengelig. Ring oss i stedet på +47 400 51 437.' },
      { status: 500 }
    )
  }

  const prosjekttypeLabel = PROSJEKTTYPE_LABELS[prosjekttype] ?? null

  const textLines = [
    `Navn: ${navn}`,
    `E-post: ${epost}`,
    `Telefon: ${telefon || 'Ikke oppgitt'}`,
    ...(prosjekttypeLabel ? [`Prosjekttype: ${prosjekttypeLabel}`] : []),
    ...(files.length ? [`Vedlegg: ${files.map((f) => f.name).join(', ')}`] : []),
    '',
    'Melding:',
    melding,
  ]

  const htmlLines = [
    `<p><strong>Navn:</strong> ${escapeHtml(navn)}</p>`,
    `<p><strong>E-post:</strong> ${escapeHtml(epost)}</p>`,
    `<p><strong>Telefon:</strong> ${escapeHtml(telefon || 'Ikke oppgitt')}</p>`,
    ...(prosjekttypeLabel ? [`<p><strong>Prosjekttype:</strong> ${escapeHtml(prosjekttypeLabel)}</p>`] : []),
    ...(files.length ? [`<p><strong>Vedlegg:</strong> ${escapeHtml(files.map((f) => f.name).join(', '))}</p>`] : []),
    `<p><strong>Melding:</strong></p>`,
    `<p>${escapeHtml(melding).replace(/\n/g, '<br>')}</p>`,
  ]

  let attachments: { content: string; filename: string; disposition: string }[] = []
  try {
    attachments = await Promise.all(
      files.map(async (file) => ({
        content: Buffer.from(await file.arrayBuffer()).toString('base64'),
        filename: file.name,
        disposition: 'attachment',
      }))
    )
  } catch (err) {
    console.error('Feil ved lesing av vedlegg:', err)
    return NextResponse.json({ error: 'Kunne ikke lese vedleggene. Prøv igjen.' }, { status: 400 })
  }

  try {
    const res = await fetch('https://api.mailersend.com/v1/email', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: { email: FROM_EMAIL, name: 'Brannkonsult AS — nettside' },
        to: [{ email: TO_EMAIL }],
        reply_to: { email: epost, name: navn },
        subject: `Ny henvendelse fra ${navn}`,
        text: textLines.join('\n'),
        html: htmlLines.join('\n'),
        ...(attachments.length ? { attachments } : {}),
      }),
    })

    if (!res.ok) {
      const errorBody = await res.text().catch(() => '')
      console.error('MailerSend feilet:', res.status, errorBody)
      return NextResponse.json(
        { error: 'Kunne ikke sende henvendelsen. Prøv igjen, eller ring oss på +47 400 51 437.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Feil ved sending til MailerSend:', err)
    return NextResponse.json(
      { error: 'Kunne ikke sende henvendelsen. Prøv igjen, eller ring oss på +47 400 51 437.' },
      { status: 500 }
    )
  }
}
