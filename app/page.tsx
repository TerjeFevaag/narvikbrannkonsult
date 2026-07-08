import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ReviewCard from '@/components/ReviewCard'
import ScrollReveal from '@/components/ScrollReveal'
import MountainDivider from '@/components/MountainDivider'

export const metadata: Metadata = {
  title: 'Brannprosjektering i Narvik | Narvik Brannkonsult',
  description:
    'Narvik Brannkonsult tilbyr brannkonsept, brannprosjektering og branntilsyn i Narvik og Ofoten. Sentralt godkjent foretak. Få uforpliktende tilbud i dag.',
  alternates: { canonical: 'https://www.narvikbrannkonsult.no' },
}

const services = [
  {
    iconImage: '/images/icon-brannkonsept.gif',
    title: 'Brannkonsept',
    description:
      'Kommunen krever et brannkonsept ved de fleste byggesaker. Vi utarbeider helhetlige brannkonsept som ivaretar brannsikkerheten i ditt prosjekt — fra garasjer til leilighetsbygg.',
    href: '/brannkonsept',
  },
  {
    iconImage: '/images/icon-brannprosjektering.gif',
    title: 'Brannprosjektering',
    description:
      'Vi sørger for at bygget ditt oppfyller alle krav til brannsikkerhet, og finner praktiske løsninger som sparer både tid og kostnader. Fast pris der det er mulig.',
    href: '/brannprosjektering',
  },
  {
    iconImage: '/images/icon-branntilsyn.png',
    title: 'Branntilsyn',
    description:
      'Har du fått pålegg etter branntilsyn, eller ønsker du en grundig gjennomgang av byggets brannsikkerhet? Vi inspiserer hele bygningen og utarbeider tilstandsrapport.',
    href: '/branntilsyn',
  },
  {
    iconImage: '/images/icon-uavhengig-kontroll.png',
    title: 'Uavhengig kontroll',
    description:
      'I mange byggeprosjekter er det krav om uavhengig kontroll av brannsikkerheten. Vi sikrer at brannkonseptet er i tråd med gjeldende forskrifter.',
    href: '/uavhengig-kontroll',
  },
]

const stats = [
  { number: '1200+', label: 'Prosjekter gjennomført' },
  { number: 'TKL 1+2', label: 'Sentralt godkjent' },
  { number: 'Fast pris', label: 'Der det er mulig' },
  { number: 'Hele landet', label: 'Vi tar oppdrag overalt' },
]

const reviews = [
  {
    quote:
      'Jeg fikk hjelp med en ny boenhet i Bergen Sentrum. Rask tilbakemelding og grundig rapport. Anbefaler andre å bruke Brannkonsult AS!',
    author: 'Jan-David Antonsen',
    company: 'Anton Arkitekt AS',
  },
  {
    quote:
      'Raskt svar, relevant og grundig rapport, kommunen likte måten det var gjort på. Ny oppdatert rapport innen kort tid. Alt til bra priser.',
    author: 'Vegard Hals',
  },
  {
    quote:
      'Narvik Brannkonsult er lette å samarbeide med, de svarer raskt, finner gode løsninger og leverer arbeid av jevnt høy kvalitet. Brannotatene deres er praktiske og enkle å bruke.',
    author: 'Daniel Hagelin',
    company: 'Hagelin Byggservice',
  },
  {
    quote:
      'Brannkonsult AS er faglig dyktige, ryddige og løsningsorienterte. Det er viktig for oss som arkitekter og for våre kunder.',
    author: 'Jon Cederbrand',
    company: 'Jon Cederbrand Arkitektur AS',
  },
]

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Narvik?',
    answer:
      'Prisen varierer etter omfang og kompleksitet. Et brannkonsept i tiltaksklasse 2 starter hos oss fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris.',
  },
  {
    question: 'Trenger jeg brannprosjektering for mitt prosjekt?',
    answer:
      'De fleste byggesaker krever brannprosjektering — tilbygg, bruksendring, ny boenhet, påbygg. Ta kontakt for en gratis vurdering av ditt prosjekt.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer:
      'For nybygg og enklere saker er det ofte ikke nødvendig. Takket være digitale verktøy og kartdata kan vi i mange tilfeller jobbe uten fysisk befaring.',
  },
  {
    question: 'Er dere sentralt godkjent?',
    answer:
      'Ja, vi har sentral godkjenning for brannprosjektering i tiltaksklasse 1 og 2. Dette er en garanti for at vi er seriøse, godt forsikret og har dokumenterte referanseprosjekter.',
  },
  {
    question: 'Tar dere oppdrag utenfor Narvik?',
    answer:
      'Vi hjelper kunder i Narvik, Ofoten og hele Nordland, og tar oppdrag over hele landet.',
  },
]

const articles = [
  {
    href: '/artikler/pipebrann',
    image: '/images/article-pipebrann.jpg',
    title: 'Forebygg pipebrann med enkle grep',
    excerpt:
      'Er du i faresonen for å kunne få brann i skorsteinen? Les om hva som forårsaker pipebrann og enkle tiltak for å redusere risikoen.',
  },
  {
    href: '/artikler/brannslokker',
    image: '/images/article-brannslukker.jpg',
    title: 'Har du riktig brannslokkeapparat?',
    excerpt:
      'Vet du hvilken type brannslokker du trenger i hjemmet? Vi gjennomgår krav og forskjellen mellom pulver- og skumapparater.',
  },
  {
    href: '/artikler/roykvarsler',
    image: '/images/article-roykvarsler.jpg',
    title: 'Riktig røykvarsler redder liv',
    excerpt:
      'Er du godt nok sikret hvis det oppstår brann om natten? Vi forklarer krav til røykvarslere og riktig plassering.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO — tall, bottom-anchored, mountain-silhouette divider ── */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <Image
          src="/images/hero.webp"
          alt="Narvik by med fjell og fjord"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-brand-black/55 to-brand-black/90" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pb-24 lg:pb-32 pt-32 text-center">
          <p className="hero-1 font-accent text-brand-orange text-xl lg:text-2xl mb-4">
            Vi hjelper deg med brannprosjektering i Narvik og Ofoten
          </p>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6 max-w-3xl mx-auto">
            Brannprosjektering i Narvik
          </h1>
          <p className="hero-3 text-brand-white/80 text-base lg:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Sentralt godkjent foretak med over 1200 gjennomførte prosjekter. Fast pris, rask
            levering og personlig oppfølging — fra enkle tilbygg til store leilighetsbygg.
          </p>
          <div className="hero-4 flex flex-wrap justify-center gap-4 mb-10">
            <Link
              href="/kontakt-oss"
              className="bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
            >
              Få gratis tilbud
            </Link>
            <Link
              href="/om-oss"
              className="border-2 border-brand-white text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200"
            >
              Om oss
            </Link>
          </div>
          <div className="hero-5 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-brand-orange shrink-0" />
              Sentralt godkjent TKL 1+2
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-brand-orange shrink-0" />
              Fast pris
            </div>
          </div>
        </div>
        <MountainDivider className="h-16 lg:h-24" fillClassName="fill-brand-lightgray" />
      </section>

      {/* ── SERVICES — alternating zigzag trail ── */}
      <section className="pt-16 pb-16 lg:pt-24 lg:pb-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="font-accent text-brand-orange text-xl mb-2">Våre tjenester</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">
              Hva kan vi hjelpe deg med?
            </h2>
          </ScrollReveal>

          <div className="relative">
            <div
              className="hidden lg:block absolute top-2 bottom-2 left-1/2 -translate-x-1/2 w-0.5 bg-brand-orange/30"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-6 lg:gap-10">
              {services.map((service, i) => {
                const isEven = i % 2 === 0
                return (
                  <div key={service.href} className="relative lg:flex lg:items-center">
                    <div
                      className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-orange border-4 border-brand-lightgray z-10"
                      aria-hidden="true"
                    />
                    <ScrollReveal
                      delay={i * 100}
                      className={`lg:w-[46%] ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'}`}
                    >
                      <Link
                        href={service.href}
                        className="group flex items-center gap-6 bg-brand-white rounded-[30px] p-6 lg:p-7 shadow-sm border border-brand-gray hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                      >
                        <img
                          src={service.iconImage}
                          alt={service.title}
                          width={64}
                          height={64}
                          className="object-contain w-16 h-16 shrink-0 group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-brand-black text-lg lg:text-xl mb-1">{service.title}</h3>
                          <p className="text-brand-darkgray text-sm leading-relaxed">{service.description}</p>
                        </div>
                        <ArrowRight size={20} className="text-brand-orange shrink-0 hidden sm:block group-hover:translate-x-1.5 transition-transform duration-200" />
                      </Link>
                    </ScrollReveal>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP — dark band, angled top edge ── */}
      <section className="peak-clip-top bg-brand-dark pt-16 pb-12 -mt-6">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 80} variant="scale" className="text-center">
                <div className="text-brand-orange font-black text-3xl lg:text-4xl mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-white text-sm lg:text-base">{stat.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PULL-QUOTE ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <ScrollReveal variant="fade" className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-accent text-brand-orange text-3xl lg:text-5xl leading-snug">
            &ldquo;Narvik Brannkonsult er lette å samarbeide med, de svarer raskt, finner gode
            løsninger og leverer arbeid av jevnt høy kvalitet.&rdquo;
          </p>
          <p className="mt-6 text-brand-darkgray font-bold">Daniel Hagelin — Hagelin Byggservice</p>
        </ScrollReveal>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="font-accent text-brand-orange text-xl mb-2">Kundene våre sier</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Hva sier kundene?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <ReviewCard {...r} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — centered single column ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">
              Ofte stilte spørsmål
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80} variant="fade">
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex items-end justify-between mb-10">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Nyttige artikler</h2>
            <Link
              href="/artikler/pipebrann"
              className="text-brand-orange font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
            >
              Se alle <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <ScrollReveal key={a.href} delay={i * 80}>
                <Link
                  href={a.href}
                  className="group bg-brand-white rounded-[30px] overflow-hidden border border-brand-gray hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-brand-black text-lg mb-2 group-hover:text-brand-orange transition-colors duration-200">
                      {a.title}
                    </h3>
                    <p className="text-brand-darkgray text-sm leading-relaxed mb-4 flex-1">{a.excerpt}</p>
                    <span className="text-brand-orange font-bold text-sm flex items-center gap-1">
                      Les mer <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA — angled top edge ── */}
      <section className="peak-clip-top bg-brand-orange pt-20 pb-16 lg:pb-20 -mt-6">
        <ScrollReveal variant="fade" className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-brand-white text-3xl lg:text-4xl font-black mb-4">
            Klar for å komme i gang?
          </h2>
          <p className="text-brand-white/80 text-lg mb-8 max-w-xl mx-auto">
            Ta kontakt i dag for et uforpliktende tilbud på brannprosjektering i Narvik.
            Vi svarer innen 24 timer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt-oss"
              className="bg-brand-white text-brand-black font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
            >
              Få gratis tilbud
            </Link>
            <a
              href="tel:+4740051437"
              className="border-2 border-brand-white text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200 flex items-center gap-2"
            >
              <Phone size={16} /> Ring oss
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
