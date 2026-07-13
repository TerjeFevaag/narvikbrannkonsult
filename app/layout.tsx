import type { Metadata } from 'next'
import { Lato, Dancing_Script } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://narvikbrannkonsult.no'),
  title: 'Brannrådgiver i Narvik | Brannkonsult AS',
  description:
    'Brannkonsult AS er sentralt godkjent brannrådgiver i Narvik og Ofoten. Brannkonsept, brannprosjektering, branninspeksjon og uavhengig kontroll — til fast pris.',
  alternates: {
    canonical: 'https://narvikbrannkonsult.no',
  },
  openGraph: {
    title: 'Brannrådgiver i Narvik | Brannkonsult AS',
    description:
      'Brannkonsult AS er sentralt godkjent brannrådgiver i Narvik og Ofoten. Brannkonsept, brannprosjektering, branninspeksjon og uavhengig kontroll.',
    url: 'https://narvikbrannkonsult.no',
    siteName: 'Brannkonsult AS',
    locale: 'nb_NO',
    type: 'website',
    images: [
      {
        url: '/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Brannkonsult AS',
      },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Brannkonsult AS',
  description: 'Brannprosjektering og brannkonsept i Narvik',
  telephone: '+47 400 51 437',
  email: 'post@narvikbrannkonsult.no',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Narvik',
    addressCountry: 'NO',
  },
  areaServed: ['Narvik', 'Harstad', 'Tromsø', 'Bodø', 'Mo i Rana', 'Lofoten', 'Vesterålen'],
  url: 'https://narvikbrannkonsult.no',
  priceRange: 'Fra kr 15 000',
  hasCredential: 'Sentralt godkjent tiltaksklasse 1 og 2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className={`${lato.variable} ${dancing.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={lato.className}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
