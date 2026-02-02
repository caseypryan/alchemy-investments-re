import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Las Vegas Properties for Sale & Rent | Investment Properties | Alchemy Investments',
  description: 'Browse 50+ properties for sale and rent in Las Vegas, Henderson, and Summerlin. Single-family homes, investment properties, condos, and luxury homes. We buy houses for cash.',
  keywords: 'las vegas properties for sale, las vegas investment properties, henderson homes for sale, summerlin real estate, las vegas rental properties, buy houses las vegas, real estate investment las vegas',
  openGraph: {
    title: 'Browse Las Vegas Properties - For Sale & Rent',
    description: 'Find single-family homes, investment properties, and rental homes in Las Vegas. We buy houses for cash and connect investors with quality properties.',
    type: 'website',
    url: 'https://alchemyinvestmentsre.com/properties',
  },
  alternates: {
    canonical: 'https://alchemyinvestmentsre.com/properties',
  },
}

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
