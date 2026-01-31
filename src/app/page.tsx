import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { localBusinessSchema, organizationSchema, aggregateRatingSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Sell Your House Fast in Las Vegas | Cash Offer in 24 Hours | Alchemy Investments RE',
  description: 'Get a fair cash offer on your Las Vegas home within 24 hours. No fees, no commissions, close in 7 days. Licensed real estate investment brokerage. Call 702-718-6934 for free valuation.',
  keywords: 'sell house fast Las Vegas, we buy houses Las Vegas, cash home buyers Las Vegas, sell my house fast Las Vegas NV, real estate investors Las Vegas, sell house as is Las Vegas',
  openGraph: {
    title: 'Sell Your House Fast in Las Vegas | Cash Offer in 24 Hours',
    description: 'Get a fair cash offer on your Las Vegas home within 24 hours. No fees, no commissions, close in 7 days.',
    type: 'website',
    locale: 'en_US',
    url: 'https://alchemyinvestmentsre.com',
    siteName: 'Alchemy Investments RE',
  },
  alternates: {
    canonical: 'https://alchemyinvestmentsre.com',
  },
}

export default function Home() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary text-white py-20 md:py-32">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div>
                <h1 className="text-4xl md:text-6xl font-heading mb-6 leading-tight">
                  Sell Your House Fast in Las Vegas
                </h1>
                <p className="text-xl md:text-2xl mb-6 text-gray-100">
                  Get a <span className="font-bold text-secondary-light">fair cash offer within 24 hours</span>.
                  No fees, no commissions, no hassle.
                </p>
                <ul className="space-y-3 mb-8 text-lg">
                  <li className="flex items-start">
                    <span className="text-secondary-light mr-2 text-2xl">✓</span>
                    <span>Close in as little as 7 days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-light mr-2 text-2xl">✓</span>
                    <span>We buy houses in any condition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-light mr-2 text-2xl">✓</span>
                    <span>No repairs, no cleaning required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-light mr-2 text-2xl">✓</span>
                    <span>Licensed & trusted since 2010</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#valuation" className="btn-primary text-center">
                    Get Free Cash Offer
                  </a>
                  <a href="tel:702-718-6934" className="btn-outline text-center">
                    Call: 702-718-6934
                  </a>
                </div>
              </div>

              {/* Quick Form */}
              <div className="bg-white rounded-lg shadow-2xl p-8 text-gray-900">
                <h2 className="text-2xl font-heading mb-2 text-primary">Get Your Cash Offer Now</h2>
                <p className="text-sm text-gray-600 mb-6">Fill out the form below for a free, no-obligation cash offer</p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Property Address *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                  <button type="submit" className="w-full btn-primary">
                    Get My Cash Offer Today
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our privacy policy. We respect your privacy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-gray-100 py-8 border-b border-gray-200">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-gray-600">Years in Business</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-gray-600">Houses Purchased</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">4.9★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">7 Days</div>
                <div className="text-sm text-gray-600">Average Close Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* We Buy Houses In Any Situation */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-heading text-center mb-4">
              We Buy Houses in Las Vegas in Any Situation
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              No matter your circumstances, we can help. Get a fair cash offer regardless of your situation.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {situations.map((situation, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{situation.icon}</div>
                  <h3 className="text-xl font-heading mb-3 text-primary">{situation.title}</h3>
                  <p className="text-gray-600">{situation.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-4xl font-heading text-center mb-4">
              Our Simple 3-Step Process
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              Selling your house for cash has never been easier
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-white text-2xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-heading mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-secondary-light opacity-30" style={{ width: 'calc(100% - 4rem)' }} />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="#valuation" className="btn-primary">
                Start The Process Now
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us vs Traditional */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-heading text-center mb-12">
              Cash Offer vs. Traditional Listing
            </h2>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left font-heading">Feature</th>
                    <th className="p-4 text-center font-heading bg-secondary text-white">Cash Offer (Us)</th>
                    <th className="p-4 text-center font-heading">Traditional Listing</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 font-medium">{item.feature}</td>
                      <td className="p-4 text-center text-green-600 font-semibold">{item.cashOffer}</td>
                      <td className="p-4 text-center text-gray-600">{item.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-4xl font-heading text-center mb-12">
              What Our Clients Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex mb-4 text-yellow-400">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-heading text-center mb-4">
              We Buy Houses Throughout Las Vegas Metro
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              Serving homeowners across the greater Las Vegas area
            </p>

            <div className="grid md:grid-cols-5 gap-6 text-center">
              {areas.map((area, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <h3 className="font-heading text-lg">{area}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="valuation" className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-heading mb-6">
              Ready to Sell Your House Fast?
            </h2>
            <p className="text-xl mb-8">
              Get your free, no-obligation cash offer today. No pressure, no hassle.
            </p>
            <div className="bg-white rounded-lg shadow-2xl p-8 text-gray-900">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Property Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
                <textarea
                  placeholder="Tell us about your property and situation (optional)"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button type="submit" className="w-full btn-primary text-lg py-4">
                  Get My Free Cash Offer Now
                </button>
                <p className="text-sm text-gray-600 text-center">
                  Or call us directly at <a href="tel:702-718-6934" className="text-secondary font-semibold">702-718-6934</a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

// Data
const situations = [
  {
    icon: '⚡',
    title: 'Facing Foreclosure',
    description: 'Stop foreclosure fast. We can close before your foreclosure date and help you move on with dignity.',
  },
  {
    icon: '💔',
    title: 'Going Through Divorce',
    description: 'Sell quickly and split the proceeds fairly. We make the process simple during a difficult time.',
  },
  {
    icon: '🏚️',
    title: 'Inherited Property',
    description: 'Don\'t want to deal with repairs or property management? Sell your inherited house as-is for cash.',
  },
  {
    icon: '🔧',
    title: 'Needs Major Repairs',
    description: 'Don\'t spend thousands on repairs. We buy houses in any condition - no repairs needed.',
  },
  {
    icon: '📍',
    title: 'Relocating',
    description: 'Moving for work? Need to sell fast? We can close on your timeline and help you relocate stress-free.',
  },
  {
    icon: '🏦',
    title: 'Behind on Payments',
    description: 'Avoid foreclosure and protect your credit. Get cash and move forward with a fresh start.',
  },
]

const steps = [
  {
    title: 'Contact Us',
    description: 'Fill out our form or call us at 702-718-6934. Tell us about your property and situation.',
  },
  {
    title: 'Get Your Offer',
    description: 'We\'ll evaluate your property and present a fair, no-obligation cash offer within 24 hours.',
  },
  {
    title: 'Close Fast',
    description: 'Choose your closing date. We can close in as little as 7 days or on your preferred timeline.',
  },
]

const comparisons = [
  { feature: 'Time to Close', cashOffer: '7-14 Days', traditional: '60-90+ Days' },
  { feature: 'Commissions', cashOffer: '$0', traditional: '5-6% ($15k-$30k+)' },
  { feature: 'Repairs Needed', cashOffer: 'None', traditional: 'Often Required' },
  { feature: 'Closing Costs', cashOffer: 'We Pay', traditional: 'You Pay ($5k-$10k)' },
  { feature: 'Showings', cashOffer: 'None', traditional: 'Multiple' },
  { feature: 'Contingencies', cashOffer: 'None', traditional: 'Inspection, Financing' },
  { feature: 'Certainty', cashOffer: '100% Guaranteed', traditional: '30% Fall Through' },
]

const testimonials = [
  {
    text: 'Alchemy Investments made selling my house so easy. I was facing foreclosure and they closed in just 10 days. Casey was professional and compassionate throughout the entire process.',
    name: 'Jennifer M.',
    location: 'Henderson, NV',
  },
  {
    text: 'I inherited a house that needed major repairs. Instead of dealing with contractors, I sold to Alchemy for cash. Fair offer, fast closing, zero hassle. Highly recommend!',
    name: 'Robert K.',
    location: 'Las Vegas, NV',
  },
  {
    text: 'After my divorce, I needed to sell quickly and split the proceeds. Alchemy Investments gave me a fair offer and closed in 2 weeks. They made a difficult time much easier.',
    name: 'Sarah T.',
    location: 'North Las Vegas, NV',
  },
]

const areas = [
  'Las Vegas',
  'Henderson',
  'North Las Vegas',
  'Summerlin',
  'Green Valley',
  'Boulder City',
  'Pahrump',
  'Spring Valley',
  'Paradise',
  'Enterprise',
]
