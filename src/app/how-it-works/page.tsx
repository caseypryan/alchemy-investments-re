import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CheckIcon from '@/components/icons/CheckIcon'

export const metadata: Metadata = {
  title: 'How It Works | Sell Your Las Vegas House Fast in 3 Steps',
  description:
    'See exactly how our simple 3-step process works. Get a cash offer in 24 hours, choose your closing date, and close in as little as 7 days. No repairs, no fees, no hassle.',
  alternates: {
    canonical: 'https://alchemyinvestmentsre.com/how-it-works',
  },
  openGraph: {
    title: 'How It Works — Sell Your Las Vegas House in 3 Simple Steps',
    description:
      'Our process is simple: tell us about your property, get a cash offer in 24 hours, and close on your timeline. No repairs, no commissions.',
    url: 'https://alchemyinvestmentsre.com/how-it-works',
    type: 'website',
  },
}

const howItWorksSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Sell Your Las Vegas House Fast for Cash',
  description:
    'A simple 3-step process to sell your Las Vegas home fast for cash with no fees, no repairs, and no hassle.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Tell Us About Your Property',
      text: 'Fill out our short form or call (702) 718-6934. Our team will reach out within 5 minutes to ask a few questions about your home and your situation.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Receive Your Cash Offer',
      text: 'We schedule a quick 15–30 minute walkthrough of your property. Within 24 hours of the visit, you receive a written, no-obligation cash offer.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Close on Your Timeline',
      text: 'Accept the offer, pick your closing date, and close in as little as 7 days. We handle all paperwork. You get paid via wire transfer, cashier\'s check, or direct deposit.',
    },
  ],
}

const steps = [
  {
    number: 1,
    title: 'Tell Us About Your Property',
    description:
      'Fill out our short form with your property address, or call us directly at (702) 718-6934. Our team will reach out within 5 minutes to ask a few questions about your home and your goals.',
    details: [
      'Takes less than 60 seconds',
      'No obligation whatsoever',
      'Available 7 days a week',
      'We respond within 5 minutes',
    ],
  },
  {
    number: 2,
    title: 'Receive Your Cash Offer',
    description:
      'We schedule a quick 15–30 minute walkthrough of your property at your convenience. There\'s no pressure, no judgment about condition, and no obligation. Within 24 hours of the visit, you receive a written cash offer.',
    details: [
      'Quick, pressure-free walkthrough',
      'We buy in any condition',
      'Written offer within 24 hours',
      'Full transparency on how we calculated your offer',
    ],
  },
  {
    number: 3,
    title: 'Close on Your Timeline',
    description:
      'Accept the offer, pick your closing date, and we handle the rest. We work with a licensed Nevada title company to ensure everything is legally sound. You can close in as little as 7 days or take up to several months — it\'s your call.',
    details: [
      'Close in as little as 7 days',
      'You choose the closing date',
      'Licensed title company handles paperwork',
      'Get paid via wire, cashier\'s check, or direct deposit',
    ],
  },
]

const comparisonData = [
  { item: 'Time to close', cash: '7–14 days', traditional: '60–90+ days' },
  { item: 'Agent commissions', cash: '$0', traditional: '5–6% ($15k–$30k+)' },
  { item: 'Repairs required', cash: 'None', traditional: 'Often $10k–$50k+' },
  { item: 'Closing costs', cash: 'We cover them', traditional: '$5k–$10k' },
  { item: 'Showings', cash: 'None', traditional: 'Multiple' },
  { item: 'Sale certainty', cash: 'Guaranteed', traditional: '30% fall through' },
  { item: 'Timeline control', cash: 'You decide', traditional: 'Buyer dictates' },
]

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howItWorksSchema) }}
      />

      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#2b3d4f] to-[#4A90E2] text-white py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Selling your Las Vegas house is simple. Three steps, no surprises, and you stay in
              control the entire time.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="bg-white/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">7 Days</div>
                <div className="text-sm opacity-80">Fastest close</div>
              </div>
              <div className="bg-white/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">$0</div>
                <div className="text-sm opacity-80">Fees or commissions</div>
              </div>
              <div className="bg-white/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">24 Hours</div>
                <div className="text-sm opacity-80">To receive your offer</div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="space-y-20">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4A90E2] text-white font-bold text-2xl mb-6 shadow-lg">
                      {step.number}
                    </div>
                    <h2 className="text-[32px] font-bold text-[#2b3d4f] mb-4">{step.title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3 text-gray-700">
                          <CheckIcon className="w-5 h-5 text-brand-green flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`bg-navy-light rounded-2xl p-10 flex flex-col items-center justify-center gap-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}
                  >
                    <div className="w-20 h-20 rounded-full bg-brand-blue/10 border-2 border-brand-blue/20 flex items-center justify-center">
                      <span className="text-3xl font-black text-brand-blue">0{step.number}</span>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-navy text-lg leading-snug">{step.title}</p>
                      <div className="mt-3 flex justify-center gap-1.5">
                        {step.details.slice(0, 2).map((d) => (
                          <span key={d} className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded-full">{d}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-[#f8f9fb]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-[38px] font-bold text-[#2b3d4f] text-center mb-4">
              Cash Sale vs. Traditional Listing
            </h2>
            <p className="text-gray-600 text-center mb-12 text-lg">
              See how selling to Alchemy Investments RE compares to listing with an agent
            </p>
            <div className="overflow-x-auto">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden min-w-[480px]">
              <div className="grid grid-cols-3 bg-[#2b3d4f] text-white text-center py-4 px-6 font-bold">
                <div className="text-left text-sm uppercase tracking-wide opacity-70">Factor</div>
                <div className="text-[#12C190]">Alchemy Cash Sale</div>
                <div className="opacity-70">Traditional Listing</div>
              </div>
              {comparisonData.map((row, i) => (
                <div
                  key={row.item}
                  className={`grid grid-cols-3 text-center py-4 px-6 border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <div className="text-left text-gray-700 font-medium">{row.item}</div>
                  <div className="text-[#12C190] font-semibold">{row.cash}</div>
                  <div className="text-gray-500">{row.traditional}</div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#2b3d4f] text-white text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-[38px] font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl opacity-80 mb-10">
              Get your no-obligation cash offer in 24 hours. No repairs, no fees, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-brand-green hover:bg-[#16a34a] text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
              >
                Get My Cash Offer
              </Link>
              <a
                href="tel:702-718-6934"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2b3d4f] font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
              >
                Call (702) 718-6934
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
