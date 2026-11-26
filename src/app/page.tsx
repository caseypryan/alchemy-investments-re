import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomepageHeroForm from '@/components/HomepageHeroForm'
import HomepageCTAForm from '@/components/HomepageCTAForm'

// Search targets for this page follow docs/keyword-split.md: the brokerage /
// agent angle only. Do not aim this page at "sell my house fast", "we buy
// houses" or "cash home buyers" — those belong to We Buy Any Vegas House.
export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Agents | Alchemy Investments RE',
  description:
    'Sell your Las Vegas home with a licensed local real estate agent. Alchemy Investments RE is a Nevada brokerage (S.0184768). List your home or compare a cash offer.',
  keywords:
    'las vegas real estate agents, real estate agent las vegas, listing agent las vegas, real estate brokerage las vegas, realtor henderson nv, summerlin real estate agent, list my home las vegas',
  openGraph: {
    title: 'Las Vegas Real Estate Agents | Alchemy Investments RE',
    description:
      'List your Las Vegas home with a licensed local agent, or compare that with a cash offer. Nevada brokerage, license S.0184768.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Alchemy Investments RE',
    url: 'https://alchemyinvestmentsre.com',
    images: [
      {
        url: 'https://alchemyinvestmentsre.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alchemy Investments RE - Las Vegas real estate agents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Real Estate Agents | Alchemy Investments RE',
    description:
      'List your Las Vegas home with a licensed local agent, or compare that with a cash offer.',
    images: ['https://alchemyinvestmentsre.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://alchemyinvestmentsre.com',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Alchemy Investments RE',
  description:
    'Licensed Las Vegas real estate brokerage (Nevada license S.0184768). Our agents list and sell homes across the Las Vegas Valley, and sellers can also ask about a cash offer.',
  url: 'https://alchemyinvestmentsre.com',
  telephone: '(702) 718-6934',
  email: 'offers@alchemyinvestmentsre.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8978 Spanish Ridge Ave',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89148',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Las Vegas', addressRegion: 'NV' },
    { '@type': 'City', name: 'Henderson', addressRegion: 'NV' },
    { '@type': 'City', name: 'North Las Vegas', addressRegion: 'NV' },
    { '@type': 'City', name: 'Summerlin', addressRegion: 'NV' },
    { '@type': 'City', name: 'Spring Valley', addressRegion: 'NV' },
    { '@type': 'City', name: 'Paradise', addressRegion: 'NV' },
    { '@type': 'City', name: 'Boulder City', addressRegion: 'NV' },
    { '@type': 'City', name: 'Pahrump', addressRegion: 'NV' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '$$',
  sameAs: [
    'https://www.google.com/maps/place/Alchemy+Investments+RE/@36.0895442,-115.2877868,17z/data=!3m1!4b1!4m6!3m5!1s0x80c8b9fffe2cda59:0x7210cdf4a1cd30d8',
    'https://maps.app.goo.gl/LXhYrCer66FACynU9',
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Alchemy Investments RE',
  url: 'https://alchemyinvestmentsre.com',
  logo: 'https://alchemyinvestmentsre.com/logo.png',
  telephone: '(702) 718-6934',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '(702) 718-6934',
    contactType: 'customer service',
    availableLanguage: 'English',
    areaServed: 'US',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Header />

      <main>
        {/* Hero Section — client component for form interactivity */}
        <HomepageHeroForm />

        {/* Trust Bar */}
        <section className="bg-white py-10 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2b3d4f]">500+</div>
                <div className="text-sm text-gray-500">Homes Purchased</div>
              </div>
              <div className="h-10 w-px bg-gray-200 hidden md:block" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2b3d4f]">10+ Years</div>
                <div className="text-sm text-gray-500">Serving Las Vegas</div>
              </div>
              <div className="h-10 w-px bg-gray-200 hidden md:block" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2b3d4f]">2 Ways to Sell</div>
                <div className="text-sm text-gray-500">List With an Agent or Cash Offer</div>
              </div>
              <div className="h-10 w-px bg-gray-200 hidden md:block" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2b3d4f]">7 Days</div>
                <div className="text-sm text-gray-500">A Week by Phone</div>
              </div>
              <div className="h-10 w-px bg-gray-200 hidden md:block" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2b3d4f]">NV Lic.</div>
                <div className="text-sm text-gray-500">S.0184768</div>
              </div>
            </div>
          </div>
        </section>

        {/* Two Ways to Sell Section */}
        <section className="bg-[#f8f9fb] py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-[42px] font-bold text-[#2b3d4f] text-center mb-16 leading-tight">
              Two Ways to Sell Your Las Vegas Home
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-10 rounded-lg shadow-sm">
                <div className="mb-6">
                  <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" fill="#e3f2fd" />
                    <path d="M50 30v40M30 50h40" stroke="#4A90E2" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="50" cy="35" r="8" fill="#4A90E2" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-bold text-[#2b3d4f] mb-4">
                  Option 1: List With a Local Agent
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A licensed agent who knows your part of the valley prices your home from recent
                  sales, puts it on the MLS, handles showings and negotiates the offers. This is
                  the route for sellers who want the open market to set the price.
                </p>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-sm">
                <div className="mb-6">
                  <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" fill="#e3f2fd" />
                    <path
                      d="M35 55l10 10 20-25"
                      stroke="#4A90E2"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-[22px] font-bold text-[#2b3d4f] mb-4">
                  Option 2: Ask About a Cash Offer
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  If the house needs work, or you would rather skip showings and repairs, ask us
                  for a cash offer too. Your agent can lay both options out next to each other so
                  you can see what each one would leave you with.
                </p>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-sm">
                <div className="mb-6">
                  <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" fill="#e3f2fd" />
                    <rect x="30" y="30" width="40" height="30" rx="3" stroke="#4A90E2" strokeWidth="3" fill="none" />
                    <path d="M40 50v-8M50 50v-12M60 50v-6" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-bold text-[#2b3d4f] mb-4">
                  Licensed &amp; Experienced Brokerage
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Alchemy Investments RE is a Nevada licensed real estate brokerage (S.0184768)
                  based in Las Vegas. From Henderson to Summerlin, our agents work under a
                  licensed broker and Nevada&apos;s real estate rules.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-[42px] font-bold text-[#2b3d4f] text-center mb-20">
              How It Works
            </h2>

            <div className="max-w-6xl mx-auto space-y-24">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#4A90E2] text-white mb-6 shadow-lg">
                    <span className="font-bold text-2xl">1</span>
                  </div>
                  <h3 className="text-[32px] font-bold text-[#2b3d4f] mb-6 leading-tight">
                    Enter a few details to get started
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our Concierge Team will reach out within 5 minutes to answer your questions,
                    offer advice, and learn exactly what you&apos;re looking for. You can also call
                    us directly at{' '}
                    <a href="tel:702-718-6934" className="text-[#4A90E2] font-semibold hover:underline">
                      (702) 718-6934
                    </a>{' '}
                    7 days a week.
                  </p>
                </div>
                <div className="bg-[#f8f9fb] rounded-lg p-8 h-64 flex items-center justify-center">
                  <svg className="w-28 h-28 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="md:order-2">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#4A90E2] text-white mb-6 shadow-lg">
                    <span className="font-bold text-2xl">2</span>
                  </div>
                  <h3 className="text-[32px] font-bold text-[#2b3d4f] mb-6 leading-tight">
                    An agent walks your home &amp; shows you the numbers
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We set up a walkthrough at a time that suits you. Your agent then shares a
                    suggested list price based on recent nearby sales, and a cash offer if you
                    asked for one. No pressure and no obligation to go ahead.
                  </p>
                </div>
                <div className="bg-[#f8f9fb] rounded-lg p-8 h-64 flex items-center justify-center md:order-1">
                  <svg className="w-28 h-28 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#4A90E2] text-white mb-6 shadow-lg">
                    <span className="font-bold text-2xl">3</span>
                  </div>
                  <h3 className="text-[32px] font-bold text-[#2b3d4f] mb-6 leading-tight">
                    Choose your option &amp; close on your timeline
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    List with your agent and let buyers compete, or take the cash offer if speed
                    and simplicity matter more to you. Either way, you stay in control of the
                    timeline.
                  </p>
                </div>
                <div className="bg-[#f8f9fb] rounded-lg p-8 h-64 flex items-center justify-center">
                  <svg className="w-28 h-28 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-[#f8f9fb] py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-[32px] font-bold text-[#2b3d4f] mb-4">
              Local Agents Across the Las Vegas Valley
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Pick your area to see how our agents help homeowners there list and sell.
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                { name: 'Las Vegas', href: '/locations/las-vegas' },
                { name: 'Henderson', href: '/locations/henderson' },
                { name: 'North Las Vegas', href: '/locations/north-las-vegas' },
                { name: 'Summerlin', href: '/locations/summerlin' },
                { name: 'Spring Valley', href: '/locations/spring-valley' },
                { name: 'Paradise', href: '/locations/paradise' },
                { name: 'Boulder City', href: '/locations/boulder-city' },
                { name: 'Pahrump', href: '/locations/pahrump' },
                { name: 'Enterprise', href: '/locations/enterprise' },
                { name: 'Green Valley', href: '/locations/green-valley' },
              ].map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="px-5 py-2 bg-white rounded-full border border-gray-200 text-[#4A90E2] font-medium text-sm hover:border-[#4A90E2] hover:shadow-sm transition-all"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section — client component for form interactivity */}
        <HomepageCTAForm />
      </main>

      <Footer />
    </>
  )
}
