import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Forebygg pipebrann med enkle grep | Brannkonsult AS',
  description:
    'Lær hvordan du forebygger pipebrann. Regelmessig feieservice, riktig ved og god trekk er nøkkelen. Råd fra sentralt godkjente brannrådgivere i Narvik.',
  alternates: { canonical: 'https://narvikbrannkonsult.no/artikler/pipebrann' },
}

const breadcrumbItems = [
  { name: 'Hjem', path: '/' },
  { name: 'Artikler' },
  { name: 'Forebygg pipebrann', path: '/artikler/pipebrann' },
]

export default function PipebrannPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }}
      />
      <section className="peak-clip-hero-sm relative min-h-[35vh] flex items-end">
        <Image src="/images/hero.webp" alt="Narvik by om vinteren" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black/90" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-20 text-center">
          <div className="hero-1 flex items-center justify-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <Link href="/" className="hover:underline">Artikler</Link>
            <span>/</span>
            <span>Forebygg pipebrann</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl mx-auto">
            Forebygg pipebrann med enkle grep
          </h1>
        </div>
      </section>

      <article className="py-16 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal variant="scale">
              <div className="relative rounded-[30px] overflow-hidden h-72 lg:h-96 mb-10">
                <Image
                  src="/images/article-pipebrann.jpg"
                  alt="Forebygg pipebrann"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </ScrollReveal>

            <div className="prose prose-lg max-w-none text-brand-darkgray">
              <ScrollReveal>
                <p className="text-lg leading-relaxed mb-6">
                  Er du i faresonen for å kunne få brann i skorsteinen? Hvert år oppstår det dessverre mange pipebranner i Norge, og de fleste av dem kunne vært unngått med enkle forebyggende tiltak. I denne artikkelen forklarer vi hva en pipebrann er, hva som forårsaker den, og hva du kan gjøre for å redusere risikoen.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Hva er en pipebrann?</h2>
                <p className="leading-relaxed mb-6">
                  En pipebrann oppstår når beksot (kreosot) — et svart, tjæreaktig stoff som samler seg på innsiden av skorsteinen — antennes. Beksot er et biprodukt av ufullstendig forbrenning og dannes særlig ved bruk av fuktig ved, lav temperatur i ildstedet eller dårlig trekk i pipa. Når beksotlaget blir tykt nok og temperaturen stiger, kan det ta fyr.
                </p>
                <p className="leading-relaxed mb-6">
                  En pipebrann er svært varm — temperaturen i skorsteinen kan overstige 1000 grader — og kan raskt spre seg til omliggende konstruksjoner. Selv om mange pipebranner slukner av seg selv, er faren for at brannen sprer seg til resten av huset overhengende.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Hva forårsaker pipebrann?</h2>
                <p className="leading-relaxed mb-4">De vanligste årsakene til pipebrann er:</p>
                <ul className="space-y-3 mb-6 list-none pl-0">
                  {[
                    'Bruk av fuktig eller useasongert ved — dette gir røykere og kaldere forbrenning',
                    'For lav temperatur i ovnen — pyroteknisk forbrenning produserer mer beksot',
                    'Mangelfull feieservice — beksot og sot hoper seg opp over tid',
                    'Gamle eller skadede skorsteiner med sprekker',
                    'Feil type brensel (f.eks. behandlet tre, hageavfall, plast)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <span className="text-brand-orange mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Slik forebygger du pipebrann</h2>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">1. Bruk tørr ved</h3>
                <p className="leading-relaxed mb-6">
                  Bruk alltid tørr, sesongert ved med under 20% fuktinnhold. Fuktig ved gir dårligere forbrenning, mer røyk og langt mer beksotavleiring. Kjøp ved i god tid og la det tørke minst ett år under tak med god luftsirkulasjon.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">2. Fyr riktig</h3>
                <p className="leading-relaxed mb-6">
                  Fyr med høy temperatur og god lufttilgang, særlig ved opptenning. Unngå å dempe ned ilden for mye — langsom, ulmende ild gir mye beksot. En god tommelfingerregel er å alltid ha synlige flammer i ovnen.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">3. Regelmessig feieservice</h3>
                <p className="leading-relaxed mb-6">
                  Brannloven krever at alle ildsteder og skorsteiner i boligbygg feies og kontrolleres jevnlig av kommunens feietjeneste. Sørg for at du er registrert hos din kommune og at du ikke hindrer adkomst til skorsteinen. Dersom du fyrer mye, kan det være aktuelt med hyppigere feieservice enn det kommunen tilbyr.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">4. Kontroller pipa jevnlig</h3>
                <p className="leading-relaxed mb-6">
                  Sjekk at det ikke er sprekker eller skader i pipa, verken innvendig eller utvendig. Legg merke til om det lukter røyk i huset — dette kan indikere sprekker i røykkanalen. Ta kontakt med en fagperson dersom du er i tvil om tilstanden på pipa di.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">5. Monter røykvarsler</h3>
                <p className="leading-relaxed mb-8">
                  Norsk lov krever at alle boliger har røykvarsler. Sørg for at du har røykvarslere i alle etasjer og utenfor soverom. Test dem jevnlig og bytt batteri én gang i året.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
                  <h3 className="font-bold text-brand-black text-lg mb-2">Hva gjør du hvis det begynner å brenne i pipa?</h3>
                  <ol className="space-y-2 text-brand-darkgray text-sm list-decimal list-inside">
                    <li>Ring brannvesenet (110) umiddelbart</li>
                    <li>Lukk trekkspjeldet og alle luftventiler på ovnen</li>
                    <li>Evakuer huset</li>
                    <li>Hold øye med pipa utenfra — sjekk om det er gnister</li>
                    <li>Ikke forsøk å slukke pipebrann selv med vann</li>
                  </ol>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p className="leading-relaxed">
                  Har du spørsmål om brannsikkerhet i din bolig eller ditt bygg? Brannkonsult AS er sentralt godkjente brannrådgivere og hjelper deg gjerne med brannkonsept, brannprosjektering og branntilsyn.{' '}
                  <Link href="/kontakt-oss" className="text-brand-orange font-bold hover:underline">
                    Ta kontakt med oss her.
                  </Link>
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </article>

      <ScrollReveal variant="fade">
        <section className="peak-clip-top bg-brand-orange pt-14 pb-12 -mt-6">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-white text-2xl font-black mb-4">
              Trenger du hjelp med brannsikkerheten?
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-white text-brand-black font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Kontakt oss
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
