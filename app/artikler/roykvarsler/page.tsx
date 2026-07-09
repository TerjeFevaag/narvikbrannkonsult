import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Riktig røykvarsler redder liv | Brannkonsult AS',
  description:
    'Krav til røykvarslere i norske boliger, forskjell mellom ionisasjon og optisk varsler, og anbefalt plassering. Råd fra sentralt godkjente brannrådgivere i Narvik.',
  alternates: { canonical: 'https://www.narvikbrannkonsult.no/artikler/roykvarsler' },
}

export default function RoykVarslerPage() {
  return (
    <>
      <section className="peak-clip-hero-sm relative min-h-[35vh] flex items-end">
        <Image src="/images/hero.webp" alt="Narvik by" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black/90" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-20 text-center">
          <div className="hero-1 flex items-center justify-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <Link href="/" className="hover:underline">Artikler</Link>
            <span>/</span>
            <span>Riktig røykvarsler</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl mx-auto">
            Riktig røykvarsler redder liv
          </h1>
        </div>
      </section>

      <article className="py-16 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal variant="scale">
              <div className="relative rounded-[30px] overflow-hidden h-72 lg:h-96 mb-10">
                <Image
                  src="/images/article-roykvarsler.jpg"
                  alt="Røykvarsler"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </ScrollReveal>

            <div className="prose prose-lg max-w-none text-brand-darkgray">
              <ScrollReveal>
                <p className="text-lg leading-relaxed mb-6">
                  Er du godt nok sikret hvis det oppstår en brann om natten? De fleste dødsbranner skjer mens beboerne sover, og uten røykvarsler som vekker deg i tide kan konsekvensene bli fatale. En god røykvarsler gir deg verdifull tid til å evakuere. Men ikke alle røykvarslere er like — og riktig plassering er avgjørende.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Lovkrav til røykvarslere i Norge</h2>
                <p className="leading-relaxed mb-6">
                  Forskrift om brannforebygging krever at alle boliger skal ha minst én røykvarsler per etasje, og at det skal være røykvarsler utenfor soverom. I praksis betyr dette at du bør ha røykvarsler i alle rom der det er naturlig opphold, samt i korridorer og trapper.
                </p>
                <p className="leading-relaxed mb-6">
                  Røykvarsleren skal varsle med lydsignal på minimum 85 dB(A) ved soveromsdøren. Alarmen skal være sterk nok til å vekke en sovende person.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Ionisasjon vs. optisk røykvarsler</h2>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">Ionisasjonsvarsler</h3>
                <p className="leading-relaxed mb-6">
                  Ionisasjonsvarslere bruker en liten mengde radioaktivt materiale for å registrere røykpartikler. De er svært raskest til å oppdage hurtigbrennende branner med lite synlig røyk, men kan gi falske alarmer fra matlaging og damp. De er vanligst i eldre boliger, men anbefales ikke lenger av norske myndigheter.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">Optisk (fotoelektrisk) røykvarsler</h3>
                <p className="leading-relaxed mb-6">
                  Optiske røykvarslere bruker lysstråler for å oppdage røykpartikler. De er bedre til å oppdage ulmebranner — den vanligste typen boligbrann — som produserer mye tykk røyk. Optiske varslere gir færre falske alarmer fra matlaging. Disse anbefales av Direktoratet for samfunnssikkerhet og beredskap (DSB).
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
                  <h3 className="font-bold text-brand-black text-lg mb-3">Anbefaling fra Brannkonsult AS</h3>
                  <p className="text-brand-darkgray text-sm leading-relaxed">
                    Velg optiske røykvarslere for boliger. De oppdager ulmebranner — den vanligste typen — raskere og gir færre falske alarmer. Sørg for at alle varslere er koblet sammen (radio- eller kabelforbundet) slik at alle alarmer går av samtidig.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Riktig plassering av røykvarsler</h2>
                <p className="leading-relaxed mb-4">Røykvarsler bør plasseres:</p>
                <ul className="space-y-3 mb-6 list-none pl-0">
                  {[
                    'I taket, minst 50 cm fra vegger og hjørner',
                    'Utenfor hvert soverom (i gangen utenfor)',
                    'I alle etasjer inkl. kjeller',
                    'I stue og oppholdsrom',
                    'Ikke direkte på kjøkken — røyk fra matlaging gir falsk alarm (bruk varme-/komfyrvakt i stedet)',
                    'Ikke i fuktige bad eller garasje',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <span className="text-brand-orange mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Vedlikehold og batteriskift</h2>
                <p className="leading-relaxed mb-6">
                  Test røykvarsleren minst én gang per måned ved å trykke på testknappen. Bytt batteri én gang i året — en god huskeregel er å gjøre det når klokkene skrus tilbake om høsten. De fleste varslere har en levetid på 8–10 år — etter dette bør de byttes selv om de fortsatt fungerer.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Koblet system — den beste løsningen</h2>
                <p className="leading-relaxed mb-6">
                  Dersom én røykvarsler oppdager røyk, er det avgjørende at alle varslerne i huset aktiveres. Et koblet system — enten via kabel eller trådløst — sikrer at hele familien varsles uavhengig av hvor i huset brannen oppstår. Dette er spesielt viktig i store boliger og fleretasjesbygg.
                </p>
                <p className="leading-relaxed">
                  Trenger du brannteknisk vurdering av en eiendom i Narvik?{' '}
                  <Link href="/kontakt-oss" className="text-brand-orange font-bold hover:underline">
                    Ta kontakt med Brannkonsult AS
                  </Link>{' '}
                  for en uforpliktende prat.
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
