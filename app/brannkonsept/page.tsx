import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FileText, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import { faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Brannkonsept i Narvik | Brannkonsult AS',
  description:
    'Brannkonsult AS utarbeider brannkonsept i Narvik og Ofoten. Sentralt godkjent TKL 1+2. Fra ca. 15 000 kr inkl. branntegninger. Fastpris alltid — ta kontakt i dag.',
  alternates: { canonical: 'https://narvikbrannkonsult.no/brannkonsept' },
}

const faqItems = [
  {
    question: 'Trenger jeg brannkonsept, eller holder det med et enklere notat?',
    answer: (
      <>
        Det avhenger av hvor omfattende tiltaket er. Skal du bygge nytt eller gjøre en større ombygging, er det som regel brannkonsept kommunen ber om. Gjelder det derimot en mindre jobb — for eksempel å bytte planløsning i én leilighet — holder det ofte med et enklere brannteknisk notat. Vi ser gjennom prosjektet ditt gratis og sier ifra hva som faktisk trengs. Brannkonsult AS har også skrevet{' '}
        <a
          href="https://www.brannkonsult.no/brannkonsept/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-orange hover:underline"
        >
          en grundigere fagartikkel om brannkonsept
        </a>{' '}
        for deg som vil sette deg enda mer inn i temaet.
      </>
    ),
    answerText:
      'Det avhenger av hvor omfattende tiltaket er. Skal du bygge nytt eller gjøre en større ombygging, er det som regel brannkonsept kommunen ber om. Gjelder det derimot en mindre jobb — for eksempel å bytte planløsning i én leilighet — holder det ofte med et enklere brannteknisk notat. Vi ser gjennom prosjektet ditt gratis og sier ifra hva som faktisk trengs. Brannkonsult AS har også skrevet en grundigere fagartikkel om brannkonsept for deg som vil sette deg enda mer inn i temaet.',
  },
  {
    question: 'Må dere befare bygget først?',
    answer:
      'Sjelden. De fleste prosjekter i Narvik lar seg løse med situasjonsplan, plantegninger og bilder sendt digitalt. Er bygget uoversiktlig, eller mangler det oppdaterte tegninger — noe som ikke er uvanlig i eldre bygg i sentrum — avtaler vi en befaring.',
  },
  {
    question: 'Hva koster et brannkonsept, og hva er inkludert?',
    answer:
      'Et brannkonsept i tiltaksklasse 2 starter normalt på rundt 15 000 kr ekskl. mva., og inkluderer branntegninger. Vi oppgir alltid fastpris skriftlig før arbeidet starter, uansett hvor omfattende prosjektet er.',
  },
  {
    question: 'Krever rehabilitering av et eldre bygg i Narvik brannkonsept?',
    answer:
      'Ofte, ja. Eldre bygg skal som minimum oppfylle kravene som gjaldt for nybygg i 1985 (BF85), og en rehabilitering eller bruksendring vil derfor gjerne utløse krav om brannkonsept som del av byggesaken — særlig i den eldre bygningsmassen i og rundt sentrum.',
  },
  {
    question: 'Hva må jeg sende for å få et pristilbud?',
    answer:
      'Adresse eller matrikkelnummer, plantegninger (situasjonsplan og planløsning), og en kort beskrivelse av hva som skal gjøres. Med det på plass sender vi som regel et fastpristilbud innen 24 timer.',
  },
  {
    question: 'Hvor lang tid tar det å få et ferdig brannkonsept?',
    answer:
      'For de fleste prosjekter regner vi 5–10 virkedager fra vi mottar bestilling og fullstendig underlag. Har du en konkret frist, oppgi den når du sender forespørselen, så planlegger vi leveransen deretter.',
  },
  {
    question: 'Tilbyr dere brannkonsept utenfor Narvik?',
    answer:
      'Ja. I tillegg til Narvik og Ofoten tar vi oppdrag i store deler av Nordland — blant annet Ballangen, Evenes, Tjeldsund, Hamarøy, Lofoten og Vesterålen. Ta kontakt uansett hvor prosjektet ditt befinner seg, så finner vi en løsning.',
  },
]

const breadcrumbItems = [
  { name: 'Hjem', path: '/' },
  { name: 'Brannkonsept', path: '/brannkonsept' },
]

export default function BrannkonseptPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }}
      />
      {/* Hero — tall image band, bottom-anchored, small angled clip */}
      <section className="peak-clip-hero-sm relative min-h-[45vh] flex items-end">
        <Image src="/images/hero.webp" alt="Narvik by — brannkonsept i Narvik og Ofoten" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black/90" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-24 text-center">
          <div className="hero-1 flex items-center justify-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Brannkonsept</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black">
            Brannkonsept i Narvik
          </h1>
        </div>
      </section>

      {/* Single centered column */}
      <section className="pt-14 pb-16 lg:pb-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              Et brannkonsept er en skriftlig rapport som viser hvordan bygget ditt ivaretar brannsikkerheten — både for det du skal bygge, og for resten av bygningsmassen det inngår i. De fleste byggesaker i Narvik kommune krever et slikt dokument før søknaden kan behandles, enten det gjelder et nytt boligfelt i fjellsiden eller et tilbygg til et eldre hus i sentrum. Vi utarbeider brannkonsept for private, arkitekter, entreprenører og utbyggere i hele Ofoten.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Dette inngår i et brannkonsept</h2>
            <p className="text-brand-darkgray leading-relaxed mb-6">
              Et komplett brannkonsept fra Brannkonsult AS inneholder:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Fastsettelse av risikoklasse (RKL) for alle bygningsdeler',
                'Fastsettelse av brannklasse (BKL)',
                'Oppdeling i brannceller og brannseksjoner',
                'Beskrivelse av rømningsveier og røykventilasjon',
                'Branntekniske tegninger (plantegninger med brannceller, rømning m.m.)',
                'Vurdering av bærende og skille konstruksjoner',
                'Krav til branntekniske installasjoner',
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
                src="/images/service-brannkonsept.jpg"
                alt="Brannkonsept og branntegninger under utarbeidelse"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Brannklasser og risikoklasser</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Alle bygninger i Norge klassifiseres etter risikoklasse (RKL 1–6) og brannklasse (BKL 1–4). Risikoklassen bestemmes av hva bygget brukes til og hvilke konsekvenser en brann kan ha. Brannklassen fastsettes ut fra risikoklasse og antall etasjer.
            </p>
            <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
              <h3 className="font-bold text-brand-black mb-3">Eksempler på risikoklasser:</h3>
              <ul className="space-y-2 text-brand-darkgray text-sm">
                <li><strong>RKL 1:</strong> Garasjer, lager (ingen personopphold)</li>
                <li><strong>RKL 2:</strong> Boliger med evakueringsmulighet fra egen enhet</li>
                <li><strong>RKL 4:</strong> Kontorbygg, undervisningsbygg</li>
                <li><strong>RKL 5:</strong> Hoteller, sykehjem (sover/overnatting)</li>
                <li><strong>RKL 6:</strong> Sykehus (svekkede beboere)</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Pull-quote break */}
          <ScrollReveal variant="fade" className="my-14 text-center">
            <p className="font-accent text-brand-orange text-3xl lg:text-4xl leading-snug">
              &ldquo;Vi har ingen produkter å selge — bare uavhengig, faglig rådgivning du kan stole på.&rdquo;
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Dette får du fra oss</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Komplett brannkonsept, klart for byggesøknaden',
                'Branntegninger med brannceller og rømningsveier',
                'Ansvarsrett i tiltaksklasse 1 og 2',
                'Fastpris avtalt skriftlig på forhånd',
                '5–10 virkedagers leveringstid',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                  <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-brand-lightgray rounded-[20px] p-6 mb-14">
              <div className="flex items-start gap-4">
                <FileText size={32} className="text-brand-orange shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-black text-lg mb-2">Pris</h3>
                  <p className="text-brand-darkgray">
                    Et brannkonsept i tiltaksklasse 2 starter fra ca. <strong className="text-brand-black">15 000 kr</strong>, ekskl. mva. og inkl. branntegninger — alltid til fastpris, uansett hvor i Ofoten prosjektet ligger.
                  </p>
                </div>
              </div>
            </div>
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
                  { href: '/brannprosjektering', label: 'Brannprosjektering' },
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

      {/* Bottom CTA */}
      <ScrollReveal variant="fade">
        <section className="peak-clip-top bg-brand-orange pt-16 pb-14 -mt-6">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-4">
              Kontakt oss for uforpliktende tilbud på brannkonsept i Narvik
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
