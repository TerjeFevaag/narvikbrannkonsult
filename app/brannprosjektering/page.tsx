import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Brannprosjektering i Narvik | Brannkonsult AS',
  description:
    'Profesjonell brannprosjektering i Narvik og Ofoten. Sentralt godkjent TKL 1+2. Fast pris fra ca. 15 000 kr. Tilbygg, bruksendring, nybygg — ta kontakt for tilbud.',
  alternates: { canonical: 'https://www.narvikbrannkonsult.no/brannprosjektering' },
}

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Narvik?',
    answer:
      'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris. Send oss tegninger og prosjektbeskrivelse for et nøyaktig tilbud.',
  },
  {
    question: 'Trenger jeg brannprosjektering for tilbygg eller bruksendring?',
    answer:
      'Ja, de fleste tiltak som krever søknad til kommunen utløser også krav om brannprosjektering — dette gjelder tilbygg, påbygg, bruksendring, ny boenhet i eksisterende bygg og bytte av vinduer i brannvegg. Ta kontakt for en gratis vurdering.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer:
      'I de fleste saker er befaring ikke nødvendig. Med digitale kartdata, tegningsunderlag og bilder kan vi utarbeide god brannprosjektering uten å besøke bygget. Vi gir beskjed hvis vi ser behov for befaring.',
  },
  {
    question: 'Tilbyr dere håndverkertjenester?',
    answer:
      'Nei — vi er en nøytral brannrådgiver og selger ingen produkter eller håndverkertjenester. Dette sikrer at rådgivningen alltid er i ditt beste interesse.',
  },
  {
    question: 'Hva trengs fra deg for å gi et pristilbud?',
    answer:
      'Vi trenger adresse, antall etasjer og bruksareal, plantegninger og en kort prosjektbeskrivelse. Jo mer informasjon vi får, jo mer presist kan vi prise oppdraget. Send det til oss på e-post eller via kontaktskjemaet.',
  },
]

export default function BrannprosjekteringPage() {
  return (
    <>
      <section className="peak-clip-hero-sm relative min-h-[45vh] flex items-end">
        <Image src="/images/hero.webp" alt="Narvik by" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black/90" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-24 text-center">
          <div className="hero-1 flex items-center justify-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Brannprosjektering</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black">
            Brannprosjektering i Narvik
          </h1>
        </div>
      </section>

      <section className="pt-14 pb-16 lg:pb-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              Brannprosjektering betyr skriftlig planlegging av nødvendig brannsikring i og rundt bygningen. Vi sørger for at ditt bygg i Narvik oppfyller alle krav i plan- og bygningsloven og brann- og eksplosjonsvernloven — til fast pris.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Når er det behov for brannprosjektering?</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Bytte av vinduer eller dører i brannvegg/seksjoneringsvegg',
                'Tilbygg eller påbygg på eksisterende bygg',
                'Bruksendring (f.eks. garasje til boenhet)',
                'Etablering av ny selvstendig boenhet (utleieenhet)',
                'Nybygg — boliger, næringsbygg, fritidsboliger',
                'Rehabilitering av eldre bygg med branntekniske mangler',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                  <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal variant="scale" className="mb-10">
            <div className="relative h-64 lg:h-80 rounded-[20px] overflow-hidden">
              <Image
                src="/images/service-brannprosjektering.jpg"
                alt="Brannrådgiver ser gjennom branntegninger"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Risikoklasser, brannklasser og tiltaksklasser</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Risikoklasse (RKL 1–6) beskriver konsekvensen av en brann ut fra bygningens bruk, mens brannklasse (BKL 1–4) fastsettes ut fra risikoklasse og antall etasjer. Tiltaksklasse (TKL 1–3) beskriver kompleksiteten i selve prosjekteringsoppgaven og bestemmer hvilke krav som stilles til foretaket som utfører arbeidet.
            </p>
          </ScrollReveal>

          {/* Pull-quote break */}
          <ScrollReveal variant="fade" className="my-14 text-center">
            <p className="font-accent text-brand-orange text-3xl lg:text-4xl leading-snug">
              &ldquo;Jo tidligere du involverer en brannrådgiver, desto enklere og billigere er det å finne gode løsninger.&rdquo;
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi tilbyr</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Brannkonsept og brannteknisk notat',
                'Branntegninger (brannceller, rømningsveier, seksjoneringer)',
                'Ansvarsrett overfor kommunen i tiltaksklasse 1 og 2',
                'Fastpris — ingen overraskelser',
                'Levering innen 5–10 virkedager',
                'God oppfølging gjennom hele byggesaken',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                  <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi trenger fra deg</h2>
            <ul className="space-y-3 mb-14">
              {[
                'Situasjonsplan / adresse',
                'Byggesakstegninger (plan, snitt, fasade)',
                'Kort prosjektbeskrivelse',
                'Eventuelle forhåndsuttalelser fra kommunen',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                  <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-2 text-center">Ofte stilte spørsmål</h2>
          </ScrollReveal>
          <ScrollReveal delay={80} variant="fade">
            <FAQAccordion items={faqItems} />
          </ScrollReveal>

          <ScrollReveal className="mt-10">
            <div className="bg-brand-lightgray rounded-[30px] p-8">
              <h3 className="font-bold text-brand-black text-lg mb-4">Andre tjenester</h3>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {[
                  { href: '/brannkonsept', label: 'Brannkonsept' },
                  { href: '/branninspeksjon', label: 'Branninspeksjon' },
                  { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="text-brand-darkgray hover:text-brand-orange transition-colors text-sm font-medium">
                    → {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal variant="fade">
        <section className="peak-clip-top bg-brand-orange pt-16 pb-14 -mt-6">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-4">
              Be om tilbud på brannprosjektering i Narvik
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-white text-brand-black font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Få tilbud nå
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
