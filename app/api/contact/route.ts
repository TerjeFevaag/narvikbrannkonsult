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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Ugyldig forespørsel.' }, { status: 400 })
  }

  const navn = typeof body.navn === 'string' ? body.navn.trim() : ''
  const epost = typeof body.epost === 'string' ? body.epost.trim() : ''
  const telefon = typeof body.telefon === 'string' ? body.telefon.trim() : ''
  const prosjekttype = typeof body.prosjekttype === 'string' ? body.prosjekttype.trim() : ''
  const melding = typeof body.melding === 'string' ? body.melding.trim() : ''

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
    '',
    'Melding:',
    melding,
  ]

  const htmlLines = [
    `<p><strong>Navn:</strong> ${escapeHtml(navn)}</p>`,
    `<p><strong>E-post:</strong> ${escapeHtml(epost)}</p>`,
    `<p><strong>Telefon:</strong> ${escapeHtml(telefon || 'Ikke oppgitt')}</p>`,
    ...(prosjekttypeLabel ? [`<p><strong>Prosjekttype:</strong> ${escapeHtml(prosjekttypeLabel)}</p>`] : []),
    `<p><strong>Melding:</strong></p>`,
    `<p>${escapeHtml(melding).replace(/\n/g, '<br>')}</p>`,
  ]

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
