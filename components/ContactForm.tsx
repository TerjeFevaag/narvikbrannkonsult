'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { upload } from '@vercel/blob/client'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const MAX_FILES = 4
const MAX_FILE_SIZE = 20 * 1024 * 1024 // 20 MB
const ACCEPTED_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp', 'image/gif']

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [fileError, setFileError] = useState('')
  const [uploadLabel, setUploadLabel] = useState('')

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? [])
    e.target.value = '' // allow re-opening the picker to add more files afterwards
    if (selected.length === 0) return
    setFileError('')

    const invalidType = selected.find((f) => !ACCEPTED_TYPES.includes(f.type))
    if (invalidType) {
      setFileError(`"${invalidType.name}" er ikke en støttet filtype. Bruk PDF, JPG, PNG, WEBP eller GIF.`)
      return
    }
    const tooBig = selected.find((f) => f.size > MAX_FILE_SIZE)
    if (tooBig) {
      setFileError(`"${tooBig.name}" er for stor. Maks 20 MB per fil.`)
      return
    }

    setFiles((prev) => {
      const existingKeys = new Set(prev.map((f) => `${f.name}-${f.size}`))
      const merged = [...prev, ...selected.filter((f) => !existingKeys.has(`${f.name}-${f.size}`))]
      if (merged.length > MAX_FILES) {
        setFileError(`Du kan laste opp maks ${MAX_FILES} filer. Fjern en fil for å legge til en ny.`)
        return prev
      }
      return merged
    })
  }

  function removeFile(index: number) {
    setFileError('')
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const vedlegg: { url: string; filename: string }[] = []
      for (let i = 0; i < files.length; i++) {
        setUploadLabel(`Laster opp fil ${i + 1} av ${files.length}...`)
        const blob = await upload(files[i].name, files[i], {
          access: 'public',
          handleUploadUrl: '/api/upload',
        })
        vedlegg.push({ url: blob.url, filename: files[i].name })
      }
      setUploadLabel('')

      const payload = {
        navn: data.get('navn'),
        epost: data.get('epost'),
        telefon: data.get('telefon'),
        prosjekttype: data.get('prosjekttype'),
        melding: data.get('melding'),
        vedlegg,
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await res.json().catch(() => null)

      if (!res.ok) {
        setErrorMessage(result?.error || 'Noe gikk galt. Prøv igjen, eller ring oss på +47 400 51 437.')
        setStatus('error')
        return
      }

      setStatus('success')
      form.reset()
      setFiles([])
    } catch {
      setUploadLabel('')
      setErrorMessage('Kunne ikke nå serveren. Sjekk internettforbindelsen og prøv igjen.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-brand-lightgray rounded-[20px] p-8 text-center">
        <p className="font-bold text-brand-black text-lg mb-2">Takk for din henvendelse!</p>
        <p className="text-brand-darkgray text-sm">
          Vi har mottatt meldingen din og svarer innen 24 timer.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="navn" className="block text-sm font-bold text-brand-black mb-1.5">
          Navn *
        </label>
        <input
          type="text"
          id="navn"
          name="navn"
          required
          maxLength={200}
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
          placeholder="Ditt fulle navn"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="epost" className="block text-sm font-bold text-brand-black mb-1.5">
            E-post *
          </label>
          <input
            type="email"
            id="epost"
            name="epost"
            required
            className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
            placeholder="din@epost.no"
          />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-bold text-brand-black mb-1.5">
            Telefon
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            maxLength={40}
            className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
            placeholder="+47 400 51 437"
          />
        </div>
      </div>

      <div>
        <label htmlFor="prosjekttype" className="block text-sm font-bold text-brand-black mb-1.5">
          Prosjekttype
        </label>
        <select
          id="prosjekttype"
          name="prosjekttype"
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black focus:outline-none focus:border-brand-orange transition-colors bg-brand-white"
        >
          <option value="">Velg type</option>
          <option value="brannkonsept">Brannkonsept</option>
          <option value="brannprosjektering">Brannprosjektering</option>
          <option value="branninspeksjon">Branninspeksjon</option>
          <option value="uavhengig-kontroll">Uavhengig kontroll</option>
          <option value="annet">Annet</option>
        </select>
      </div>

      <div>
        <label htmlFor="melding" className="block text-sm font-bold text-brand-black mb-1.5">
          Melding *
        </label>
        <textarea
          id="melding"
          name="melding"
          required
          maxLength={5000}
          rows={5}
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors resize-none"
          placeholder="Beskriv prosjektet ditt kort..."
        />
      </div>

      <div>
        <label htmlFor="vedlegg" className="block text-sm font-bold text-brand-black mb-1.5">
          Vedlegg (tegninger, bilder)
        </label>
        <input
          type="file"
          id="vedlegg"
          name="vedlegg"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.webp,.gif"
          onChange={handleFileChange}
          className="w-full text-sm text-brand-darkgray file:mr-4 file:py-2.5 file:px-4 file:rounded-[8px] file:border-0 file:bg-brand-orange/10 file:text-brand-orange file:font-bold file:cursor-pointer hover:file:bg-brand-orange/20 border border-brand-gray rounded-[10px] px-2 py-1.5"
        />
        <p className="text-xs text-brand-darkgray mt-1.5">
          PDF eller bilder, maks {MAX_FILES} filer og 20 MB per fil.
        </p>
        {fileError && (
          <p className="text-xs font-bold text-red-600 mt-1.5" role="alert">
            {fileError}
          </p>
        )}
        {files.length > 0 && (
          <ul className="mt-2 space-y-1">
            {files.map((f, i) => (
              <li key={`${f.name}-${f.size}`} className="flex items-center justify-between gap-2 text-xs text-brand-darkgray bg-brand-lightgray rounded-[6px] px-3 py-1.5">
                <span className="truncate">{f.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="text-brand-orange font-bold shrink-0 hover:underline"
                  aria-label={`Fjern ${f.name}`}
                >
                  Fjern
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {status === 'error' && (
        <p className="text-sm font-bold text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (uploadLabel || 'Sender...') : 'Send forespørsel'}
      </button>
    </form>
  )
}
