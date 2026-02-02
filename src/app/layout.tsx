import type { Metadata } from 'next'
import { Nunito, Quicksand } from 'next/font/google'
import './globals.css'

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
  title: 'Sell My House Fast Las Vegas | Cash Offers in 24 Hours | Top 1% Agents',
  description: 'Sell your Las Vegas house fast for cash OR with top 1% agents. Get fair offers in 24 hours. No repairs needed. Close in 7-14 days. Licensed brokerage with 10+ years experience. Call (702) 718-6934.',
  keywords: 'sell my house fast las vegas, cash home buyers las vegas, we buy houses las vegas, sell house as-is las vegas, las vegas real estate investors, quick cash offers las vegas, sell house fast nevada, henderson cash buyers, summerlin home buyers',
  openGraph: {
    title: 'Sell My House Fast Las Vegas | Cash Offers or Top Agents',
    description: 'Two ways to sell: Get a cash offer in 24 hours OR work with top 1% Las Vegas agents. No repairs, no fees. Close in 7-14 days.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Alchemy Investments RE',
    url: 'https://alchemyinvestmentsre.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell Your Las Vegas House Fast - Cash or Top Agents',
    description: 'Get a fair cash offer in 24 hours. No repairs needed. Close in 7-14 days.',
  },
  alternates: {
    canonical: 'https://alchemyinvestmentsre.com',
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
