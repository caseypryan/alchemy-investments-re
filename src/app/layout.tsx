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
  title: 'Alchemy Investments RE | Sell Your House Fast in Las Vegas',
  description: 'Get top dollar for your Las Vegas home. Licensed real estate investment brokerage specializing in fast, fair cash offers. Call 702-718-6934 for a free home valuation.',
  keywords: 'sell house fast Las Vegas, cash home buyers Las Vegas, real estate investment Las Vegas, sell my house, home valuation Las Vegas',
  openGraph: {
    title: 'Alchemy Investments RE | Sell Your House Fast in Las Vegas',
    description: 'Get top dollar for your Las Vegas home. Licensed real estate investment brokerage.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Alchemy Investments RE',
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
