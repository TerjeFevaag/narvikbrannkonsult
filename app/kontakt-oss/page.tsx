import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Kontakt Brannkonsult AS | Få uforpliktende tilbud',
  description:
    'Kontakt Brannkonsult AS for uforpliktende tilbud på brannkonsept og brannprosjektering i Narvik og Ofoten. Sentralt godkjent. Vi svarer innen 24 timer.',
  alternates: { canonical: 'https://www.narvikbrannkonsult.no/kontakt-oss' },
}

export default function KontaktOssPage() {
  return (
    <>
      <section className="peak-clip-hero-sm relative min-h-[45vh] flex items-end">
        <Image src="/images/hero.webp" alt="Narvik by" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black/90" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-24 text-center">
          <div className="hero-1 flex items-center justify-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Kontakt oss</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black">
            Kontakt Brannkonsult AS
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Ta kontakt for et uforpliktende tilbud. Vi svarer innen 24 timer.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Form */}
            <ScrollReveal className="lg:w-[60%]">
              <h2 className="text-brand-black text-2xl font-black mb-6">Send oss en forespørsel</h2>
              <ContactForm />
            </ScrollReveal>

            {/* Contact info */}
            <ScrollReveal delay={150} className="lg:w-[40%]">
              <div className="bg-brand-lightgray rounded-[30px] p-8 mb-6">
                <h3 className="font-bold text-brand-black text-lg mb-6">Kontaktinformasjon</h3>
                <div className="space-y-5">
                  {[
                    { icon: Phone, label: 'Telefon', value: '+47 400 51 437', href: 'tel:+4740051437' },
                    { icon: Mail, label: 'E-post', value: 'post@narvikbrannkonsult.no', href: 'mailto:post@narvikbrannkonsult.no' },
                    {
                      icon: MapPin,
                      label: 'Postadresse',
                      value: 'Grønnegate 78/88, 9008 Tromsø',
                      subtext: 'Administreres av Tromsø Brannkonsult AS',
                      href: null,
                    },
                    { icon: Clock, label: 'Åpningstider', value: 'Man–Fre 08:00–16:00', href: null },
                  ].map(({ icon: Icon, label, value, href, subtext }, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-brand-orange" />
                      </div>
                      <div>
                        <p className="text-brand-darkgray text-xs mb-1">{label}</p>
                        {href ? (
                          <a href={href} className="font-bold text-brand-black hover:text-brand-orange transition-colors text-sm">
                            {value}
                          </a>
                        ) : (
                          <p className="font-bold text-brand-black text-sm">{value}</p>
                        )}
                        {subtext && <p className="text-brand-darkgray text-xs mt-1">{subtext}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-lightgray rounded-[30px] h-52 flex items-center justify-center">
                <p className="text-brand-darkgray text-sm">Kart kommer snart</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
