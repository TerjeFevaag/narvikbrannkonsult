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
                  Med til dels lang vei til nærmeste brannstasjon flere steder i Ofoten, kan de første minuttene etter at det begynner å brenne bety mye. De fleste boligbranner slukkes faktisk av beboerne selv — forutsatt at riktig slokkeutstyr er lett tilgjengelig. Her ser vi nærmere på kravene til brannslokking i norske boliger, og hvordan du velger riktig apparat til hjemmet eller hytta.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Hva sier loven?</h2>
                <p className="leading-relaxed mb-6">
                  Forskrift om brannforebygging krever at alle boliger har slokkeutstyr som dekker alle rom. I praksis betyr det minst ett brannslokkeapparat eller en brannslange som er lett tilgjengelig, i tillegg til røykvarsler i alle etasjer og utenfor soverom.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Typer brannslokkeapparater</h2>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">Pulverapparat</h3>
                <p className="leading-relaxed mb-4">
                  Det klart vanligste apparatet i norske hjem. Effektivt mot de fleste branntyper (klasse A, B og C) og rimelig i innkjøp. Ulempen er at pulveret er vanskelig å rengjøre etter bruk, og kan skade elektronikk og overflater. Et 6 kg-apparat dekker de fleste boliger.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">Skumapparat</h3>
                <p className="leading-relaxed mb-4">
                  Godt egnet mot branner i faste stoffer (klasse A) og væsker (klasse B), og skånsommere mot overflater enn pulver. Mange velger skum på kjøkken og i stue av den grunn. Sjekk at apparatet er godkjent for fett- og oljebranner dersom det skal henge i nærheten av komfyren.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">CO₂-apparat</h3>
                <p className="leading-relaxed mb-6">
                  Etterlater ingen rester og passer godt til elektriske installasjoner og elektronikk, men er mindre effektivt mot vanlige branner i faste stoffer. Naturlig valg i for eksempel hjemmekontor med mye utstyr.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">Brannteppe</h3>
                <p className="leading-relaxed mb-6">
                  Enkelt i bruk og effektivt mot mindre branner, særlig kjøkkenbranner i gryte og panne. Bør henge lett tilgjengelig i nærheten av komfyren, men ikke rett over den.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
                  <h3 className="font-bold text-brand-black text-lg mb-3">Anbefalt slokkeutstyr for bolig og hytte</h3>
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
                  Et brannslokkeapparat som ikke virker er verre enn ingen apparat — det gir deg en falsk trygghet. Kontroller apparatet visuelt minst én gang per år: sjekk at trykkmåleren viser i det grønne feltet, at sikringspinnen er på plass, og at dyse og slange ikke er skadet. Er apparatet oppbevart kaldt, slik som i en uisolert hytte eller bod, er det ekstra grunn til å sjekke at det ikke har tatt skade over vinteren. Ettersyn og reparasjon bør utføres av godkjent servicefirma hvert femte år.
                </p>
                <p className="leading-relaxed">
                  Har du en eiendom i Narvik eller Ofoten der du er usikker på brannsikkerheten for øvrig?{' '}
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
