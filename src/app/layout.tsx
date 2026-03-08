import type { Metadata } from 'next'
import { Nunito, Quicksand } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  weight: ['700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://alchemyinvestmentsre.com'),
  title: {
    default: 'Sell My House Fast Las Vegas | Cash Offers in 24 Hours | Alchemy Investments RE',
    template: '%s | Alchemy Investments RE',
  },
  description: 'Sell your Las Vegas house fast for cash OR with top 1% agents. Get fair offers in 24 hours. No repairs needed. Close in 7-14 days. Licensed brokerage (NV S.0184768). Call (702) 718-6934.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Alchemy Investments RE',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alchemy Investments RE - Sell Your Las Vegas House Fast',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${quicksand.variable}`}>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
