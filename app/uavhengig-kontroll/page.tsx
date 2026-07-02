import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ShieldCheck } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Uavhengig kontroll av brann i Narvik | Narvik Brannkonsult',
  description:
    'Uavhengig kontroll (UK) av brannkonsept i Narvik. Sentralt godkjent foretak. Vi gjennomgår brannkonsept, branntegninger og løsningsvalg mot TEK17. Fast pris — kontakt oss.',
  alternates: { canonical: 'https://www.narvikbrannkonsult.no/uavhengig-kontroll' },
}

const faqItems = [
  {
    question: 'Hva er uavhengig kontroll av brann?',
    answer:
      'Uavhengig kontroll (UK) er en obligatorisk kvalitetssikring der en uavhengig part kontrollerer at brannprosjekteringen er utført i henhold til gjeldende forskrifter. Kontrollen utføres av et firma uten tilknytning til det som har prosjektert.',
  },
  {
    question: 'Når er det krav om uavhengig kontroll av brann?',
    answer:
      'Det er krav om UK brann når prosjekteringen av brann utføres i tiltaksklasse 2 (TKL 2) eller høyere, i henhold til SAK10. Dette gjelder de fleste næringsbygg, boligblokker og bygninger med mer enn 2 etasjer.',
  },
  {
    question: 'Hva koster uavhengig kontroll?',
    answer:
      'Kostnaden avhenger av prosjektets omfang og kompleksitet. Vi gir fastpristilbud etter gjennomgang av brannkonseptet. Ta kontakt med oss for et uforpliktende estimat.',
  },
  {
    question: 'Kan dere ta UK selv om dere ikke har prosjektert brannkonseptet?',
    answer:
      'Ja — det er faktisk et krav at den som utfører UK ikke er den samme som har prosjektert. Vi kan ta på oss uavhengig kontroll av brannkonsept utarbeidet av andre rådgivere.',
  },
]

export default function UavhengigKontrollPage() {
  return (
    <>
      <section className="peak-clip-hero-sm relative min-h-[45vh] flex items-end">
        <Image src="/images/hero.webp" alt="Narvik by" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black/90" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-24 text-center">
          <div className="hero-1 flex items-center justify-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Uavhengig kontroll</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black">
            Uavhengig kontroll av brannkonsept i Narvik
          </h1>
        </div>
      </section>

      <section className="pt-14 pb-16 lg:pb-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              I mange byggeprosjekter er det krav om uavhengig kontroll (UK) av brannsikkerheten. Kontrollen skal sikre at brannkonseptet er i tråd med gjeldende forskrifter og at prosjekteringen holder nødvendig kvalitet. Dette gir økt trygghet, reduserer risiko for feil og bidrar til en mer forutsigbar byggeprosess.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Når er det krav om uavhengig kontroll?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              I henhold til SAK10 § 14-2 er det krav om uavhengig kontroll av prosjektering av brann når tiltaket er i tiltaksklasse 2 (TKL 2) eller høyere. Dette gjelder de fleste næringsbygg, boligblokker og bygninger med særskilte krav til brannsikkerhet.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva kontrolleres?</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Brannkonseptets overensstemmelse med TEK17 og Veiledning til TEK17',
                'Valg av risikoklasse og brannklasse',
                'Branncelleinndeling og seksjoneringer',
                'Rømningsveier og røykventilasjon',
                'Krav til branntekniske installasjoner',
                'Branntegningenes nøyaktighet og fullstendighet',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                  <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Pull-quote break */}
          <ScrollReveal variant="fade" className="my-14 text-center">
            <p className="font-accent text-brand-orange text-3xl lg:text-4xl leading-snug">
              &ldquo;Vi er en nøytral part og har ingen interesser i valg av løsning.&rdquo;
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi tilbyr</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
              {[
                { icon: ShieldCheck, title: 'Uavhengig gjennomgang', desc: 'Grundig kontroll av hele brannkonseptet av en erfaren brannrådgiver.' },
                { icon: CheckCircle, title: 'Skriftlig kontrollrapport', desc: 'Detaljert rapport med funn, avvik og anbefalinger.' },
                { icon: ShieldCheck, title: 'Erklæring om ansvarsrett', desc: 'Vi erklærer ansvarsrett som uavhengig kontrollerende for brann.' },
                { icon: CheckCircle, title: 'Nøytral part', desc: 'Vi selger ingen produkter og har ingen interesser i valg av løsning.' },
              ].map((item, i) => (
                <div key={i} className="bg-brand-lightgray rounded-[20px] p-5 flex items-start gap-3">
                  <item.icon size={20} className="text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-brand-black mb-1 text-sm">{item.title}</h3>
                    <p className="text-brand-darkgray text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
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
                  { href: '/brannkonsept', label: 'Brannkonsept' },
                  { href: '/brannprosjektering', label: 'Brannprosjektering' },
                  { href: '/branntilsyn', label: 'Branntilsyn' },
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
              Kontakt oss for uavhengig kontroll i Narvik
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
