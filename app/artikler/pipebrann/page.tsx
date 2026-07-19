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
                  I Narvik og Ofoten er vedovn fortsatt den vanligste oppvarmingskilden i mange boliger og hytter, særlig i fjellsiden og på steder uten fjernvarme. Lange, kalde vintre betyr lang fyringssesong — og dermed mer beksot i pipeløpet enn i landsdeler med kortere sesong. De fleste pipebranner kunne vært unngått med noen enkle vaner. Her går vi gjennom hva en pipebrann faktisk er, hva som øker risikoen, og hva du kan gjøre for å forebygge den.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Hva er det egentlig som brenner?</h2>
                <p className="leading-relaxed mb-6">
                  Det er ikke pipa selv som tar fyr, men beksoten (kreosoten) som legger seg på innsiden av den — et svart, tjæreaktig belegg som dannes ved ufullstendig forbrenning. Fuktig ved, lav temperatur i ildstedet og dårlig trekk gir mer beksot. Blir laget tykt nok og temperaturen i pipa stiger, kan det ta fyr.
                </p>
                <p className="leading-relaxed mb-6">
                  En pipebrann kan bli svært varm — over 1000 grader er ikke uvanlig — og kan spre seg til bjelkelag og takkonstruksjon på kort tid. Noen pipebranner slukner av seg selv, men risikoen for at den sprer seg videre i huset er reell nok til at den aldri bør ignoreres.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Hva øker risikoen?</h2>
                <p className="leading-relaxed mb-4">De vanligste årsakene til pipebrann er:</p>
                <ul className="space-y-3 mb-6 list-none pl-0">
                  {[
                    'Fuktig eller ikke godt nok tørket ved, som gir kaldere og mer røykfull forbrenning',
                    'For lav temperatur og ulming i ildstedet over lang tid',
                    'For sjelden feiing, slik at beksot bygger seg opp over flere sesonger',
                    'Sprekker eller andre skader i en gammel skorstein',
                    'Feil brensel, som behandlet trevirke, hageavfall eller plast',
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
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">1. Kjøp ved tidlig, og la den tørke lenge</h3>
                <p className="leading-relaxed mb-6">
                  Sesongert ved med under 20 % fuktinnhold gir langt renere forbrenning enn fersk ved. Kjøp gjerne inn til neste vinter allerede nå, og lagre den under tak med luft på alle sider. Med de fuktige høstene vi ofte har langs Ofotfjorden, er minst ett års tørketid en fornuftig tommelfingerregel.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">2. Fyr varmt, ikke svakt</h3>
                <p className="leading-relaxed mb-6">
                  Fyr med god lufttilgang og synlige flammer, særlig ved opptenning. Det er fristende å dempe ned ilden for å strekke veden lenger utover kvelden, men det er nettopp langsom, ulmende fyring som bygger opp mest beksot i pipa.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">3. Bestill feiing — og ikke skyv på den</h3>
                <p className="leading-relaxed mb-6">
                  Brannloven krever at ildsteder og skorsteiner i boligbygg feies og kontrolleres jevnlig av kommunens feievesen. Sørg for at boligen er registrert hos kommunen og at feieren har adkomst til skorsteinen. Fyrer du mye gjennom vinteren, kan det være grunn til å be om hyppigere feiing enn standardintervallet.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">4. Se etter tegn på skade</h3>
                <p className="leading-relaxed mb-6">
                  Sjekk pipa for sprekker eller skader, både innvendig og utvendig. Lukt av røyk inne i huset utenom fyring kan tyde på sprekker i røykkanalen — ta kontakt med en fagperson før neste fyringssesong hvis du er i tvil.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">5. Monter røykvarsler</h3>
                <p className="leading-relaxed mb-8">
                  Norsk lov krever at alle boliger har røykvarsler. Sørg for at du har røykvarslere i alle etasjer og utenfor soverom, også på hytta. Test dem jevnlig og bytt batteri én gang i året.
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
                  Lurer du på brannsikkerheten i en enebolig, hytte eller et større bygg i Narvik-området? Brannkonsult AS er sentralt godkjente brannrådgivere og bistår gjerne med brannkonsept, brannprosjektering og branninspeksjon.{' '}
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
