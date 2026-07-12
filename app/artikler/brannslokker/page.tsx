import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Har du riktig brannslokkeapparat? | Brannkonsult AS',
  description:
    'Hvilken type brannslokker trenger du? Vi gjennomgår krav til brannslokking i boliger, forskjellen mellom pulver og skum, og riktig bruk. Råd fra Brannkonsult AS.',
  alternates: { canonical: 'https://narvikbrannkonsult.no/artikler/brannslokker' },
}

const breadcrumbItems = [
  { name: 'Hjem', path: '/' },
  { name: 'Artikler' },
  { name: 'Riktig brannslokker', path: '/artikler/brannslokker' },
]

export default function BrannslokkePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }}
      />
      <section className="peak-clip-hero-sm relative min-h-[35vh] flex items-end">
        <Image src="/images/hero.webp" alt="Narvik by sett fra fjorden" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black/90" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-20 text-center">
          <div className="hero-1 flex items-center justify-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <Link href="/" className="hover:underline">Artikler</Link>
            <span>/</span>
            <span>Riktig brannslokker</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl mx-auto">
            Har du riktig brannslokkeapparat i boligen?
          </h1>
        </div>
      </section>

      <article className="py-16 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal variant="scale">
              <div className="relative rounded-[30px] overflow-hidden h-72 lg:h-96 mb-10">
                <Image
                  src="/images/article-brannslukker.jpg"
                  alt="Brannslokkeapparat"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </ScrollReveal>

            <div className="prose prose-lg max-w-none text-brand-darkgray">
              <ScrollReveal>
                <p className="text-lg leading-relaxed mb-6">
                  Visste du at de fleste boligbranner slukkes av beboerne selv — med riktig slokkeutstyr? Korrekt brannslokker på riktig sted kan utgjøre forskjellen mellom en liten ulykke og en katastrofe. I denne artikkelen ser vi nærmere på krav til brannslokking i norske boliger og hvordan du velger riktig apparat.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Hva sier loven?</h2>
                <p className="leading-relaxed mb-6">
                  Forskrift om brannforebygging stiller krav om at alle boliger skal ha slokkeutstyr som rekker over alle rom. I praksis betyr dette at du trenger minst ett brannslokkeapparat (eller brannslange) som er lett tilgjengelig. Røykvarsler er i tillegg obligatorisk i alle etasjer og utenfor soverom.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Typer brannslokkeapparater</h2>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">Pulverapparat</h3>
                <p className="leading-relaxed mb-4">
                  Pulverapparater er de mest vanlige i norske hjem. De er effektive mot de fleste typer branner (klasse A, B og C) og er rimelige i innkjøp. Ulempen er at pulveret er svært vanskelig å rense opp etter bruk — det kan ødelegge elektronikk og skade overflater. Et pulverapparat på 6 kg er et godt valg for de fleste boliger.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">Skumapparat</h3>
                <p className="leading-relaxed mb-4">
                  Skumapparater (AFFF) er ideelle mot branner i faste stoffer (klasse A) og væsker (klasse B). De er skånsomme mot overflater og etterlater mindre skade enn pulver. Mange foretrekker skumapparater i kjøkken og stue. Pass på at apparatet er egnet for brann i fett/olje dersom du ønsker kjøkkenbeskyttelse.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">CO₂-apparat</h3>
                <p className="leading-relaxed mb-6">
                  CO₂-apparater etterlater ingen rester og er ideelle for elektriske installasjoner og elektronikk. De er imidlertid ikke like effektive mot vanlige branner i faste stoffer. Passer godt i serverrom, laboratorier og arkiver.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">Brannteppe</h3>
                <p className="leading-relaxed mb-6">
                  Et brannteppe er enkelt å bruke og effektivt mot mindre branner, særlig kjøkkenbranner i gryte og panne. Heng det på et lett tilgjengelig sted i nærheten av komfyren — men ikke rett over den.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
                  <h3 className="font-bold text-brand-black text-lg mb-3">Anbefalt slokkeutstyr for en vanlig bolig</h3>
                  <ul className="space-y-2 text-brand-darkgray text-sm list-none pl-0">
                    {[
                      'Kjøkken: Brannteppe + 6 kg pulver- eller skumapparat',
                      'Gang/entre: 6 kg pulveraparat (lett tilgjengelig)',
                      'Garasje (hvis aktuelt): 6 kg pulverapparat',
                      'Alle etasjer: Røykvarsler',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand-orange">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Slik bruker du brannslokker</h2>
                <p className="leading-relaxed mb-4">Husk forkortelsen <strong>PASS</strong>:</p>
                <ol className="space-y-3 mb-8 list-decimal list-inside text-brand-darkgray">
                  <li><strong>P</strong>inn — trekk ut sikringspinnen</li>
                  <li><strong>A</strong>im — rett dysen mot bunnen av flammen</li>
                  <li><strong>S</strong>queeze — klem inn håndtaket</li>
                  <li><strong>S</strong>weep — sveip fra side til side</li>
                </ol>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Vedlikehold og kontroll</h2>
                <p className="leading-relaxed mb-6">
                  Et brannslokkeapparat som ikke virker er verre enn ingen apparat — det gir deg en falsk trygghet. Kontroller apparatet visuelt minst én gang per år: sjekk at trykkmåleren viser i det grønne feltet, at sikringspinnen er på plass, og at dyse og slange ikke er skadet. Ettersyn og reparasjon bør utføres av godkjent servicefirma hvert femte år.
                </p>
                <p className="leading-relaxed">
                  Trenger du hjelp med brannteknisk rådgivning for din eiendom?{' '}
                  <Link href="/kontakt-oss" className="text-brand-orange font-bold hover:underline">
                    Kontakt Brannkonsult AS
                  </Link>{' '}
                  for en uforpliktende vurdering.
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
