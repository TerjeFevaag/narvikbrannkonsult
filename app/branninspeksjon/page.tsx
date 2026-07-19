import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import { faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Branntilsyn og branninspeksjon i Narvik | Brannkonsult AS',
  description:
    'Branntilsyn og branninspeksjon i Narvik. Fått pålegg fra brannvesenet? Vi inspiserer bygningen og utarbeider tilstandsrapport og handlingsplan. Sentralt godkjent — kontakt oss.',
  alternates: { canonical: 'https://narvikbrannkonsult.no/branninspeksjon' },
}

const faqItems = [
  {
    question: 'Hva er forskjellen på branntilsyn og branninspeksjon?',
    answer: (
      <>
        Branntilsyn er en kontroll utført av kommunens brann- og redningsetat. Branninspeksjon er en frivillig, grundigere gjennomgang du kan bestille fra en privat brannrådgiver som oss. Vi gir en uavhengig vurdering av byggets brannsikkerhet og konkrete anbefalinger. Vil du lese mer generelt om temaet, har Brannkonsult AS satt sammen{' '}
        <a
          href="https://www.brannkonsult.no/branninspeksjon/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-orange hover:underline"
        >
          en samleartikkel om branninspeksjon
        </a>
        .
      </>
    ),
    answerText:
      'Branntilsyn er en kontroll utført av kommunens brann- og redningsetat. Branninspeksjon er en frivillig, grundigere gjennomgang du kan bestille fra en privat brannrådgiver som oss. Vi gir en uavhengig vurdering av byggets brannsikkerhet og konkrete anbefalinger. Vil du lese mer generelt om temaet, har Brannkonsult AS satt sammen en samleartikkel om branninspeksjon.',
  },
  {
    question: 'Hvem er ansvarlig for brannsikkerheten i et sameie?',
    answer:
      'Styret i sameiet er ansvarlig for at fellesarealene oppfyller brannkravene. Beboere er ansvarlige for sine egne enheter. Vi hjelper sameier og borettslag med å kartlegge status og utarbeide en handlingsplan for nødvendige utbedringer.',
  },
  {
    question: 'Hva skjer hvis bygget ikke oppfyller kravene?',
    answer:
      'Brannvesenet kan gi pålegg om utbedring med frist. Dersom pålegg ikke etterkommes, kan brannvesenet i ytterste konsekvens stenge bygget. Vi hjelper deg med å forstå pålegget og utarbeide en kostnadseffektiv plan for å lukke avvikene.',
  },
  {
    question: 'Hva koster en branninspeksjon?',
    answer:
      'Kostnaden avhenger av byggets størrelse og kompleksitet. Vi gir et fastpristilbud etter å ha mottatt informasjon om bygget. Ta kontakt for en uforpliktende prat og estimat.',
  },
  {
    question: 'Gjelder oppgraderingskravet for alle eldre bygninger?',
    answer:
      'Ja — alle eksisterende bygninger skal oppgraderes til et minimum tilsvarende det som gjaldt for nybygg i 1985 (BF85). For mange eldre bygg i Narvik og Ofoten betyr dette at det er behov for tiltak. Vi hjelper deg med å vurdere hva som er nødvendig.',
  },
  {
    question: 'Tilbyr dere branninspeksjon utenfor Narvik?',
    answer:
      'Ja. I tillegg til Narvik og Ofoten tar vi oppdrag i store deler av Nord-Norge — blant annet Harstad, Tromsø, Bodø, Mo i Rana, Lofoten og Vesterålen. Ta kontakt uansett hvor bygget ditt befinner seg, så finner vi en løsning.',
  },
]

const breadcrumbItems = [
  { name: 'Hjem', path: '/' },
  { name: 'Branninspeksjon', path: '/branninspeksjon' },
]

export default function BranninspeksjonPage() {
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
      <section className="peak-clip-hero-sm relative min-h-[45vh] flex items-end">
        <Image src="/images/hero.webp" alt="Narvik by — branninspeksjon i Narvik og Ofoten" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black/90" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-24 text-center">
          <div className="hero-1 flex items-center justify-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Branninspeksjon</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black">
            Branntilsyn og branninspeksjon i Narvik
          </h1>
        </div>
      </section>

      <section className="pt-14 pb-16 lg:pb-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              Har kommunen vært på branntilsyn, eller lurer du på tilstanden i en eldre bygård i sentrum eller en hytte lenger opp i fjellsiden? Vi hjelper borettslag, sameier, næringsbygg og private eiendomseiere i Narvik med branninspeksjon og en reell vurdering av byggets brannsikkerhet.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Krav til oppgradering</h2>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Alle bygninger i Norge skal tilfredsstille et minimum brannsikkerhetsnivå tilsvarende det som gjaldt for nybygg i 1985 (BF85). Eldre bygg som ikke oppfyller dette kravet skal utbedres. Narvik har mange eldre bygninger, samt hytter og boliger i krevende fjellterreng, som kan ha behov for branntekniske tiltak.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="scale" className="mb-10">
            <div className="relative h-64 lg:h-80 rounded-[20px] overflow-hidden">
              <Image
                src="/images/service-branntilsyn.jpg"
                alt="Kontroll av brannslukkere under branntilsyn"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva inngår i vår branninspeksjon?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Inspeksjon', desc: 'Grundig gjennomgang av hele bygningen — fellesarealer, rømningsveier, tekniske installasjoner og konstruksjoner.' },
                { title: 'Tilstandsrapport', desc: 'Skriftlig rapport med oversikt over avvik og mangler, rangert etter alvorlighetsgrad.' },
                { title: 'Handlingsplan', desc: 'Konkrete anbefalinger for utbedring, med kostnadsestimat og prioritering av tiltak.' },
                { title: 'Internkontrollrutiner', desc: 'Hjelp til å etablere gode rutiner for løpende brannforebygging og dokumentasjon.' },
              ].map((item, i) => (
                <div key={i} className="bg-brand-lightgray rounded-[20px] p-5">
                  <h3 className="font-bold text-brand-black mb-2">{item.title}</h3>
                  <p className="text-brand-darkgray text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Pull-quote break */}
          <ScrollReveal variant="fade" className="my-14 text-center">
            <p className="font-accent text-brand-orange text-3xl lg:text-4xl leading-snug">
              &ldquo;Det er eier som har ansvaret for brannsikkerheten — vi hjelper deg med å ta det på alvor.&rdquo;
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-l-4 border-brand-orange bg-brand-lightgray rounded-r-[20px] p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle size={20} className="text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-brand-black mb-2">Typisk ordlyd fra brannvesenet ved pålegg</h3>
                  <p className="text-brand-darkgray text-sm italic leading-relaxed">
                    «Det er avdekket mangler ved brannsikkerheten i bygget. Eier pålegges å utbedre disse innen [dato]. Dokumentasjon på gjennomførte tiltak skal oversendes brannvesenet.»
                  </p>
                </div>
              </div>
            </div>
            <p className="text-brand-darkgray leading-relaxed mb-14">
              Dersom du har mottatt et slikt pålegg, er det viktig å handle raskt. Vi hjelper deg med å forstå hva som kreves og utarbeider nødvendig dokumentasjon.
            </p>
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
                  { href: '/brannprosjektering', label: 'Brannprosjektering' },
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
              Kontakt oss for hjelp etter branntilsyn i Narvik
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
