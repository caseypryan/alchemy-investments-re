import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomepageHeroForm from '@/components/HomepageHeroForm'
import HomepageCTAForm from '@/components/HomepageCTAForm'

export const metadata: Metadata = {
  title: 'Sell My House Fast Las Vegas | Cash Offers in 24 Hours | Alchemy Investments RE',
  description:
    'Sell your Las Vegas house fast for cash. Get a fair cash offer in 24 hours. No repairs, no fees, no commissions. Close in 7–14 days. Licensed NV brokerage (S.0184768). Call (702) 718-6934.',
  keywords:
    'sell my house fast las vegas, cash home buyers las vegas, we buy houses las vegas, sell house as-is las vegas, cash offer las vegas, sell house fast nevada, henderson cash buyers, foreclosure las vegas, sell inherited house las vegas',
  openGraph: {
    title: 'Sell Your Las Vegas House Fast For Cash | Alchemy Investments RE',
    description:
      'Get a fair cash offer in 24 hours. No repairs, no fees. Close in 7–14 days. Licensed Las Vegas cash home buyers.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Alchemy Investments RE',
    url: 'https://alchemyinvestmentsre.com',
    images: [
      {
        url: 'https://alchemyinvestmentsre.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sell My House Fast Las Vegas - Alchemy Investments RE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell Your Las Vegas House Fast For Cash',
    description: 'Get a fair cash offer in 24 hours. No repairs needed. Close in 7–14 days.',
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
    'Licensed Las Vegas cash home buying company. We buy houses in any condition throughout the Las Vegas Valley with cash offers in 24 hours and closings in 7–14 days.',
  url: 'https://alchemyinvestmentsre.com',
  telephone: '(702) 718-6934',
  email: 'Casey@AlchemyInvestmentsRE.com',
  license: 'S.0184768',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8978 Spanish Ridge',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89148',
    addressCountry: 'US',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
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
    opens: '08:00',
    closes: '20:00',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How fast can you buy my house in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can close in as little as 7 days. Our team provides a written cash offer within 24 hours of evaluating your property. You choose the closing date that works best for you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to make repairs before selling my house for cash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We buy houses in any condition, completely as-is. No repairs, cleaning, painting, or staging required. We handle everything after closing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any fees or commissions when selling to Alchemy Investments RE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zero fees or commissions. The cash offer we make is the amount you receive at closing. We even cover all standard closing costs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of situations do you help with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We help homeowners in all situations including foreclosure, divorce, inherited property, probate, job loss, relocation, rental property issues, and homes needing major repairs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas of Las Vegas do you buy houses in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We buy houses throughout the Las Vegas Valley including Henderson, North Las Vegas, Summerlin, Spring Valley, Paradise, Boulder City, Pahrump, Enterprise, and Green Valley.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is your cash offer calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our offers are based on the current market value of your home, its condition, and comparable sales in your neighborhood. We aim to give you the fairest possible offer so you can make an informed decision.',
      },
    },
  ],
}

const situations = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Facing Foreclosure',
    description: 'Stop foreclosure in its tracks. A fast cash sale can help you avoid damage to your credit and walk away with equity intact.',
    color: 'text-red-500 bg-red-50',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Going Through Divorce',
    description: 'Simplify a difficult time. Sell quickly, split the proceeds fairly, and both parties can move forward without delay.',
    color: 'text-purple-500 bg-purple-50',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Inherited Property',
    description: "Dealing with a probate property or inherited home? We make it simple — no court delays, no rehab required. We handle everything.",
    color: 'text-blue-500 bg-blue-50',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: 'Needs Major Repairs',
    description: 'Roof damage, foundation issues, fire or flood damage — we buy houses in any condition, no matter how much work they need.',
    color: 'text-orange-500 bg-orange-50',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Relocating Quickly',
    description: "Job transfer or life change forcing a quick move? We work around your schedule and close when you're ready to go.",
    color: 'text-teal-500 bg-teal-50',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Problem Rental Property',
    description: "Tired of difficult tenants, vacancies, or maintenance headaches? We buy occupied rentals and deal with everything ourselves.",
    color: 'text-indigo-500 bg-indigo-50',
  },
]

const testimonials = [
  {
    name: 'Maria T.',
    location: 'Henderson, NV',
    stars: 5,
    text: "I needed to sell my mom's house after she passed away. The property needed a lot of work and I didn't have the money or time for repairs. Alchemy gave me a fair offer within 24 hours and we closed in 10 days. They made a really hard time so much easier.",
    tag: 'Inherited Property',
  },
  {
    name: 'James & Sandra K.',
    location: 'Las Vegas, NV',
    stars: 5,
    text: "We were behind on mortgage payments and getting close to foreclosure. Casey and his team were honest, fast, and got us out of a really bad situation. We closed in 8 days and avoided foreclosure entirely. Can't recommend them enough.",
    tag: 'Foreclosure',
  },
  {
    name: 'Robert M.',
    location: 'Summerlin, NV',
    stars: 5,
    text: "I was relocating for work and had to sell in a hurry. I didn't have time for the traditional market. Alchemy offered me a fair price, handled all the paperwork, and I was out in 12 days. Zero hassle, zero fees. Exactly what I needed.",
    tag: 'Relocation',
  },
]

const comparisonRows = [
  { feature: 'Cash offer timeline', cash: '24 hours', traditional: '2–6 weeks' },
  { feature: 'Closing timeframe', cash: '7–14 days', traditional: '30–60 days' },
  { feature: 'Repairs required', cash: 'None — as-is', traditional: 'Usually required' },
  { feature: 'Agent commissions', cash: '$0', traditional: '5–6% of price' },
  { feature: 'Closing costs', cash: 'We pay them', traditional: 'Seller typically pays' },
  { feature: 'Showings & open houses', cash: 'None', traditional: 'Multiple required' },
  { feature: 'Sale fall-through risk', cash: 'Very low', traditional: 'Up to 30% fall through' },
  { feature: 'Stress level', cash: 'Minimal', traditional: 'High' },
]

const serviceAreas = [
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
  { name: 'Whitney Ranch', href: '/locations/henderson' },
  { name: 'Mountains Edge', href: '/locations/las-vegas' },
]

const faqs = [
  {
    q: 'How fast can you buy my house in Las Vegas?',
    a: 'We can close in as little as 7 days. Our team provides a written cash offer within 24 hours of evaluating your property. You choose the closing date that works best for you — whether that\'s 7 days or 60 days.',
  },
  {
    q: 'Do I need to make any repairs before selling?',
    a: 'Absolutely not. We buy houses completely as-is, in any condition. Roof damage, foundation issues, outdated kitchens, hoarder homes — we\'ve seen it all and we still make fair offers. You don\'t need to clean, repair, or even remove your belongings.',
  },
  {
    q: 'Are there any fees or commissions?',
    a: 'Zero. There are no real estate agent commissions, no transaction fees, and no hidden charges. The cash offer we present is exactly what you receive at closing. We even cover the standard closing costs.',
  },
  {
    q: 'How is the cash offer calculated?',
    a: 'We analyze current market conditions, recent comparable sales in your neighborhood, and your home\'s condition. Our goal is to give you the most competitive offer possible so you can make a confident decision. There\'s never any pressure to accept.',
  },
  {
    q: 'What if my house is in foreclosure or I\'m behind on payments?',
    a: 'We specialize in helping homeowners avoid foreclosure. A fast cash sale can halt the foreclosure process, protect your credit, and let you walk away with whatever equity remains. The sooner you act, the more options you have — contact us today.',
  },
  {
    q: 'Do you buy houses in all Las Vegas neighborhoods?',
    a: 'Yes. We buy houses throughout the entire Las Vegas Valley including Henderson, North Las Vegas, Summerlin, Spring Valley, Paradise, Boulder City, Pahrump, Enterprise, Green Valley, and all surrounding areas.',
  },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main>
        {/* ── Hero ── */}
        <HomepageHeroForm />

        {/* ── Trust Bar ── */}
        <section className="bg-white py-10 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                { value: '500+', label: 'Homes Purchased', icon: '🏠' },
                { value: '10+ Yrs', label: 'Serving Las Vegas', icon: '📅' },
                { value: '7–14 Days', label: 'Average Close Time', icon: '⚡' },
                { value: '$0', label: 'Fees or Commissions', icon: '💰' },
                { value: '4.9 ★', label: 'Customer Rating', icon: '⭐' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-[22px] font-extrabold text-navy">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Situations We Help ── */}
        <section id="situations" className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <span className="inline-block bg-brand-blue/10 text-brand-blue font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                No Situation Is Too Complex
              </span>
              <h2 className="text-[40px] font-extrabold text-navy leading-tight mb-4">
                We Buy Houses In Any Situation
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Whether you&apos;re facing financial hardship, a life change, or simply want a fast, hassle-free sale — we have a solution for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {situations.map((s) => (
                <div
                  key={s.title}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className={`inline-flex p-3 rounded-xl mb-5 ${s.color}`}>
                    {s.icon}
                  </div>
                  <h3 className="text-[18px] font-bold text-navy mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="#contact"
                className="inline-block bg-brand-green hover:bg-[#16a34a] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get Your Free Cash Offer Today →
              </a>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="how-it-works" className="bg-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <span className="inline-block bg-brand-green/10 text-brand-green font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Simple 3-Step Process
              </span>
              <h2 className="text-[40px] font-extrabold text-navy leading-tight mb-4">
                How Our Cash Home Buying Process Works
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Selling your Las Vegas house for cash has never been easier. No repairs, no showings, no waiting.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  step: '01',
                  title: 'Tell Us About Your Property',
                  desc: 'Fill out our quick form or call us at (702) 718-6934. Our team will reach out within 5 minutes to learn about your home and situation.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
                {
                  step: '02',
                  title: 'Receive Your Cash Offer',
                  desc: 'We schedule a quick 30-minute walkthrough (or virtual tour) and deliver your written, no-obligation cash offer within 24 hours.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
                {
                  step: '03',
                  title: 'Close & Get Paid',
                  desc: "Accept the offer, pick your closing date, and collect your cash. We handle all the paperwork and even cover closing costs. As simple as that.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-brand-green/30 hover:shadow-md transition-all duration-200"
                >
                  <div className="absolute -top-4 left-8 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full">
                    Step {item.step}
                  </div>
                  <div className="text-brand-blue mb-5 mt-2">{item.icon}</div>
                  <h3 className="text-[18px] font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cash vs Traditional Comparison ── */}
        <section className="bg-navy py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <span className="inline-block bg-white/10 text-white font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                See the Difference
              </span>
              <h2 className="text-[40px] font-extrabold text-white leading-tight mb-4">
                Cash Sale vs. Traditional Listing
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Understand exactly what you&apos;re getting — and saving — when you choose a direct cash sale.
              </p>
            </div>

            <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/10">
              {/* Header */}
              <div className="grid grid-cols-3 bg-white/10">
                <div className="px-6 py-4 text-gray-300 text-sm font-semibold">Feature</div>
                <div className="px-6 py-4 text-brand-green font-bold text-center text-sm bg-brand-green/10 border-l border-r border-white/10">
                  ✓ Cash Sale (Us)
                </div>
                <div className="px-6 py-4 text-gray-400 font-semibold text-center text-sm">Traditional Listing</div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 border-t border-white/10 ${i % 2 === 0 ? 'bg-white/5' : ''}`}
                >
                  <div className="px-6 py-4 text-gray-200 text-sm font-medium">{row.feature}</div>
                  <div className="px-6 py-4 text-brand-green font-bold text-center text-sm bg-brand-green/5 border-l border-r border-white/10">
                    {row.cash}
                  </div>
                  <div className="px-6 py-4 text-gray-400 text-center text-sm">{row.traditional}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="#contact"
                className="inline-block bg-brand-green hover:bg-[#16a34a] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get My Cash Offer Now →
              </a>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <span className="inline-block bg-yellow-100 text-yellow-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Real Las Vegas Homeowners
              </span>
              <h2 className="text-[40px] font-extrabold text-navy leading-tight mb-4">
                What Our Customers Say
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 font-semibold">4.9/5 from 127+ reviews</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex">
                      {[...Array(t.stars)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-full">
                      {t.tag}
                    </span>
                  </div>
                  <blockquote className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-navy text-sm">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About / Trust Section ── */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block bg-navy/10 text-navy font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
                  Licensed Las Vegas Cash Home Buyers
                </span>
                <h2 className="text-[36px] font-extrabold text-navy leading-tight mb-6">
                  Why Las Vegas Homeowners Choose Alchemy Investments RE
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  We&apos;re a Nevada-licensed real estate brokerage (S.0184768) that has been buying homes throughout the Las Vegas Valley for over 10 years. Unlike national iBuyers, we&apos;re a local company — you&apos;ll always speak directly with our team, never an automated system.
                </p>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Our goal is simple: make selling your home as fast, easy, and fair as possible. We&apos;ve purchased 500+ homes across Las Vegas, Henderson, Summerlin, and beyond — in every condition and every situation imaginable.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Local Las Vegas Company', detail: 'Not a national franchise' },
                    { label: 'Licensed Brokerage', detail: 'NV License S.0184768' },
                    { label: '500+ Homes Purchased', detail: 'In the Las Vegas Valley' },
                    { label: '10+ Years Experience', detail: 'Trusted by the community' },
                  ].map((item) => (
                    <div key={item.label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <p className="font-bold text-navy text-sm">{item.label}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{item.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {/* Phone CTA Card */}
                <div className="bg-navy rounded-2xl p-7 text-white">
                  <p className="text-gray-300 text-sm font-semibold mb-2">Call Us Directly — 7 Days a Week</p>
                  <a href="tel:702-718-6934" className="text-3xl font-extrabold text-white hover:text-brand-green transition-colors block mb-4">
                    (702) 718-6934
                  </a>
                  <p className="text-gray-400 text-sm">Mon–Sun, 8am–8pm. Emergencies (foreclosure, etc.) answered 24/7.</p>
                </div>
                {/* Quick form prompt */}
                <div className="bg-brand-green/5 border border-brand-green/20 rounded-2xl p-7">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-lg mb-1">Cash Offer in 24 Hours</h4>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        Submit your address now and our team will have a written cash offer ready for you within one business day.
                      </p>
                      <a
                        href="#contact"
                        className="inline-block bg-brand-green hover:bg-[#16a34a] text-white font-bold px-6 py-3 rounded-lg text-sm transition-all duration-200"
                      >
                        Get My Cash Offer →
                      </a>
                    </div>
                  </div>
                </div>
                {/* Service area */}
                <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                  <h4 className="font-bold text-navy mb-1">Serving the Entire Las Vegas Valley</h4>
                  <p className="text-gray-400 text-sm">Henderson · North Las Vegas · Summerlin · Spring Valley · Paradise · Boulder City · Pahrump · and more</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <span className="inline-block bg-brand-blue/10 text-brand-blue font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Got Questions?
              </span>
              <h2 className="text-[40px] font-extrabold text-navy leading-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Everything you need to know about selling your Las Vegas house for cash.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
                  <h3 className="font-bold text-navy text-[15px] mb-3 flex items-start gap-2">
                    <span className="w-6 h-6 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      Q
                    </span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed pl-8">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline"
              >
                View all FAQs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Service Areas ── */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-[32px] font-extrabold text-navy mb-3">
                We Buy Houses Throughout Las Vegas Valley
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                From Summerlin to Henderson, North Las Vegas to Boulder City — we purchase homes in every neighborhood, any condition, any situation.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {serviceAreas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="px-5 py-2.5 bg-gray-50 rounded-full border border-gray-200 text-navy font-medium text-sm hover:border-brand-green hover:text-brand-green hover:bg-brand-green/5 transition-all duration-200"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <HomepageCTAForm />

        {/* ── SEO Content ── */}
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-gray">
              <h2 className="text-[28px] font-extrabold text-navy mb-4">
                Sell My House Fast Las Vegas — Your Complete Guide
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                If you&apos;re searching for ways to &quot;sell my house fast Las Vegas,&quot; you have several options. The traditional route — listing with a real estate agent — can take 30 to 90 days and requires repairs, staging, multiple showings, and paying 5–6% in commissions. For many homeowners, that process is too slow or too costly.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Alchemy Investments RE offers a faster alternative: a direct cash purchase. We evaluate your Las Vegas property and deliver a written, no-obligation cash offer within 24 hours. If you accept, we close in as little as 7 days — on your schedule. There are no repairs to make, no fees to pay, and no showings to deal with.
              </p>
              <h3 className="text-[22px] font-bold text-navy mb-3">
                Cash Home Buyers Las Vegas — What to Expect
              </h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                We buy houses Las Vegas in every condition: from move-in ready homes to properties needing extensive repairs. Our team has purchased hundreds of homes throughout Henderson, North Las Vegas, Summerlin, Spring Valley, Paradise, Boulder City, and surrounding communities. Whether you&apos;re dealing with foreclosure, divorce, an inherited property, or simply want to move quickly, we can help.
              </p>
              <p className="text-gray-500 leading-relaxed">
                As a Nevada-licensed brokerage (S.0184768), we operate with full transparency and professionalism. You&apos;ll always deal directly with our team — no middlemen, no call centers. Contact us today at (702) 718-6934 or fill out the form above for your free, no-obligation cash offer.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
