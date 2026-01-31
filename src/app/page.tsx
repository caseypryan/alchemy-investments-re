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
        <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary text-white py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div>
                <h1 className="text-4xl md:text-6xl font-heading mb-6 leading-tight">
                  Get a Fair Cash Offer on Your Las Vegas Home
                </h1>
                <p className="text-xl md:text-2xl mb-4 text-gray-100">
                  <span className="font-bold text-secondary-light">Save $7,000-$15,000</span> in fees, commissions, and repairs.
                </p>
                <p className="text-lg mb-8 text-gray-100">
                  Cash offer in 24 hours • Close in 7 days • Zero fees or commissions
                </p>
                <ul className="space-y-3 mb-8 text-lg">
                  <li className="flex items-start">
                    <span className="text-secondary-light mr-3 text-2xl">✓</span>
                    <span><strong>No fees, no commissions</strong> - You keep 100% of our offer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-light mr-3 text-2xl">✓</span>
                    <span><strong>Any condition</strong> - No repairs or cleaning needed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-light mr-3 text-2xl">✓</span>
                    <span><strong>Your timeline</strong> - Close in 7 days or longer if needed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-light mr-3 text-2xl">✓</span>
                    <span><strong>Free, no-obligation</strong> - Walk away anytime</span>
                  </li>
                </ul>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-secondary-light flex items-center justify-center font-bold">
                      A+
                    </div>
                    <span>BBB Rated</span>
                  </div>
                  <div className="border-l border-gray-400 h-8"></div>
                  <div>
                    <div className="font-bold">15+ Years</div>
                    <div className="text-xs text-gray-300">In Business</div>
                  </div>
                  <div className="border-l border-gray-400 h-8"></div>
                  <div>
                    <div className="font-bold">500+ Homes</div>
                    <div className="text-xs text-gray-300">Purchased</div>
                  </div>
                </div>
              </div>

              {/* Quick Form */}
              <div className="bg-white rounded-xl shadow-2xl p-8 text-gray-900">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-heading mb-2 text-primary">Get Your Cash Offer</h2>
                  <p className="text-sm text-gray-600">Free, no-obligation offer in 24 hours</p>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="font-semibold">4.9/5</span>
                    <span className="text-gray-500">from 127 reviews</span>
                  </div>
                </div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Property Address *"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-lg"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone *"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                    required
                  />
                  <button type="submit" className="w-full btn-primary text-lg py-4 font-bold">
                    Get My Cash Offer Now →
                  </button>
                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    🔒 100% secure and confidential. No spam, ever.<br/>
                    Free with no obligation - you can walk away at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-white py-12 border-y border-gray-200">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading mb-2">
                More than <strong className="text-primary">500 homeowners</strong> have sold their homes with Alchemy Investments RE
              </h3>
              <p className="text-xl text-gray-600">
                We've helped them save over <strong className="text-secondary">$4 million</strong> in fees and repairs
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600 font-semibold">Years in Business</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600 font-semibold">Homes Purchased</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">$50M+</div>
                <div className="text-sm text-gray-600 font-semibold">Paid to Homeowners</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">7 Days</div>
                <div className="text-sm text-gray-600 font-semibold">Average Close Time</div>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-sm font-semibold text-gray-600">LICENSED & INSURED</div>
              <div className="text-sm font-semibold text-gray-600">NV LICENSE: S.0184768</div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">★★★★★</span>
                <span className="text-sm font-semibold text-gray-600">4.9 / 5 (127 reviews)</span>
              </div>
            </div>
          </div>
        </section>

        {/* We Buy Houses In Any Situation */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading mb-4">
                We Buy Houses in Any Situation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Life happens. Whatever your circumstances, we're here to help with a <strong>fair, fast cash offer</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {situations.map((situation, index) => (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-secondary group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{situation.icon}</div>
                  <h3 className="text-2xl font-heading mb-4 text-primary group-hover:text-secondary transition-colors">{situation.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{situation.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                <strong>No matter your situation</strong>, we've seen it all and helped hundreds of homeowners like you.
                There's no judgment, no pressure — just a fair cash offer and a solution that works for you.
              </p>
              <a href="#valuation" className="btn-primary text-lg px-8">
                Get Your Free Cash Offer
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get from "I need to sell" to "cash in hand" in as little as <strong>7 days</strong>
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12 relative">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%+1.5rem)] h-1 bg-gradient-to-r from-secondary via-secondary-light to-secondary opacity-20" />
                    )}

                    <div className="text-center relative z-10">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary-light text-white text-3xl font-bold mb-6 shadow-lg">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-heading mb-3 text-primary">{step.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">{step.description}</p>
                      <div className="inline-block bg-secondary/10 text-secondary font-bold text-sm px-4 py-2 rounded-full">
                        {step.timeline}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-heading mb-4">Ready to get started?</h3>
                <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                  Join the 500+ homeowners who've sold their Las Vegas homes with us.
                  <strong> Free, no-obligation offer</strong> in 24 hours.
                </p>
                <a href="#valuation" className="btn-primary text-lg px-10 py-4">
                  Get My Cash Offer Now →
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  Or call us directly: <a href="tel:702-718-6934" className="text-secondary font-semibold hover:underline">702-718-6934</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Savings Calculator Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading mb-4">
                See How Much You Could Save
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compare what you'd net from a traditional sale vs. our cash offer
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Traditional Sale */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-heading mb-2">Traditional Listing</h3>
                    <p className="text-sm text-gray-500">Average 90+ days to close</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-gray-700">Sale Price</span>
                      <span className="font-bold text-lg">$400,000</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-red-600">
                        <span>Agent Commission (6%)</span>
                        <span className="font-semibold">-$24,000</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Closing Costs (2%)</span>
                        <span className="font-semibold">-$8,000</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Repairs & Staging</span>
                        <span className="font-semibold">-$12,000</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Holding Costs (3 months)</span>
                        <span className="font-semibold">-$6,000</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t-2 border-gray-300">
                      <span className="font-bold text-lg">Your Net Proceeds</span>
                      <span className="font-bold text-2xl text-gray-700">$350,000</span>
                    </div>
                  </div>
                </div>

                {/* Cash Offer */}
                <div className="bg-gradient-to-br from-secondary to-secondary-light rounded-xl p-8 shadow-xl text-white relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold">
                      SAVE $7,000+
                    </span>
                  </div>
                  <div className="text-center mb-6 mt-2">
                    <h3 className="text-2xl font-heading mb-2">Cash Offer (Alchemy)</h3>
                    <p className="text-sm text-blue-100">Close in 7-14 days</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-blue-300">
                      <span>Our Cash Offer</span>
                      <span className="font-bold text-lg">$357,000</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-green-200">
                        <span>Agent Commission</span>
                        <span className="font-semibold">$0</span>
                      </div>
                      <div className="flex justify-between text-green-200">
                        <span>Closing Costs (We Pay)</span>
                        <span className="font-semibold">$0</span>
                      </div>
                      <div className="flex justify-between text-green-200">
                        <span>Repairs Needed</span>
                        <span className="font-semibold">$0</span>
                      </div>
                      <div className="flex justify-between text-green-200">
                        <span>Holding Costs</span>
                        <span className="font-semibold">$0</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t-2 border-blue-300">
                      <span className="font-bold text-lg">Your Net Proceeds</span>
                      <span className="font-bold text-3xl">$357,000</span>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 mt-6">
                      <p className="text-sm text-center">
                        <strong>You save $7,000</strong> and get your cash in days, not months!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6 text-lg">
                  <strong>Numbers based on:</strong> $400,000 home, 6% agent commission, 2% closing costs, $12,000 average repairs
                </p>
                <a href="#valuation" className="btn-primary text-lg px-8 py-4">
                  Get My Free Cash Offer →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us vs Traditional - Quick Comparison */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-heading text-center mb-4">
              Cash Offer vs. Traditional Listing
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">See the difference at a glance</p>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left font-heading text-lg">Feature</th>
                    <th className="p-4 text-center font-heading bg-secondary text-white text-lg">Cash Offer (Us)</th>
                    <th className="p-4 text-center font-heading text-lg">Traditional Listing</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 font-medium">{item.feature}</td>
                      <td className="p-4 text-center text-green-600 font-bold text-lg">{item.cashOffer}</td>
                      <td className="p-4 text-center text-gray-600">{item.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary text-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading mb-4">
                Real Stories from Real Homeowners
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                See why hundreds of Las Vegas homeowners have trusted us with their home sales
              </p>
              <div className="mt-6 inline-flex items-center gap-3 bg-white/20 backdrop-blur px-6 py-3 rounded-full">
                <span className="text-yellow-400 text-2xl">★★★★★</span>
                <span className="font-bold text-lg">4.9 / 5.0</span>
                <span className="text-blue-100">from 127 reviews</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-2xl p-8 text-gray-900 hover:scale-105 transition-transform">
                  <div className="flex mb-4 text-yellow-400 text-xl">
                    {Array(5).fill('★').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a href="#valuation" className="inline-block bg-white text-primary hover:bg-gray-100 font-bold text-lg px-10 py-4 rounded-full transition-colors shadow-xl">
                Get Your Cash Offer Like They Did →
              </a>
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
    description: `Fill out our simple form or call us at 702-718-6934. Tell us about your property and situation.`,
    timeline: 'Takes 2 minutes',
  },
  {
    title: 'Get Your Offer',
    description: `We'll evaluate your property and present a fair, no-obligation cash offer.`,
    timeline: 'Within 24 hours',
  },
  {
    title: 'Close & Get Cash',
    description: `Choose your closing date. We can close in as little as 7 days or wait as long as you need.`,
    timeline: '7-14 days (your choice)',
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
