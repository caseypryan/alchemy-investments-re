import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Alchemy Investments RE | Licensed Las Vegas Cash Home Buyers',
  description: 'Learn about Alchemy Investments RE. Licensed real estate investment brokerage serving Las Vegas since 2010. Over 500 homes purchased with fair, transparent cash offers.',
  alternates: {
    canonical: 'https://alchemyinvestmentsre.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
          <div className="container-custom">
            <h1 className="text-5xl font-heading mb-6">About Alchemy Investments RE</h1>
            <p className="text-xl max-w-3xl">
              Your trusted partner for fast, fair cash home sales in Las Vegas since 2010
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-4xl font-heading mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Founded in 2010, Alchemy Investments RE was born from a simple mission: to provide homeowners
                in Las Vegas with a fast, fair, and transparent alternative to traditional home sales.
              </p>
              <p>
                Over the past 15+ years, we've helped over 500 homeowners sell their houses quickly for cash,
                regardless of condition or circumstances. Whether facing foreclosure, going through a divorce,
                dealing with an inherited property, or simply needing to relocate quickly, we've been there to help.
              </p>
              <p>
                As a licensed real estate investment brokerage (License: S.0184768), we operate with the highest
                standards of professionalism and integrity. Our team understands that selling your home is a
                significant decision, and we're committed to making the process as smooth and stress-free as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-4xl font-heading text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-heading mb-4 text-primary">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-heading text-center mb-12">Why Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center text-xl font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-heading mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary text-white">
          <div className="container-custom">
            <h2 className="text-4xl font-heading text-center mb-12">Our Track Record</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-lg">Years in Business</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-lg">Homes Purchased</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">$50M+</div>
                <div className="text-lg">Paid to Homeowners</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">4.9★</div>
                <div className="text-lg">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Licensed & Insured */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom max-w-4xl">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-heading mb-6 text-center">Licensed & Professional</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-center text-lg">
                  <strong>Nevada Real Estate License:</strong> S.0184768
                </p>
                <p>
                  Unlike many "we buy houses" companies, Alchemy Investments RE is a fully licensed
                  real estate brokerage in the state of Nevada. This means we operate under strict
                  regulatory oversight and adhere to the highest ethical standards in the industry.
                </p>
                <p>
                  Our license ensures that every transaction is conducted legally, ethically, and
                  in your best interest. You can verify our license status with the Nevada Real
                  Estate Division at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get your free, no-obligation cash offer today. Find out why hundreds of Las Vegas
              homeowners have trusted us with their home sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#valuation" className="btn-primary">
                Get Your Cash Offer
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

const values = [
  {
    icon: '🤝',
    title: 'Transparency',
    description: 'No hidden fees, no surprises. We provide clear, upfront cash offers and explain every step of the process.',
  },
  {
    icon: '⚡',
    title: 'Speed',
    description: 'We understand urgency. From initial contact to cash in hand, we move quickly to meet your timeline.',
  },
  {
    icon: '💎',
    title: 'Fairness',
    description: 'Every offer we make is fair and based on current market conditions. Your satisfaction is our priority.',
  },
]

const benefits = [
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed real estate brokerage operating under Nevada law (License: S.0184768)',
  },
  {
    title: 'Local Expertise',
    description: 'Deep knowledge of Las Vegas neighborhoods and market conditions',
  },
  {
    title: 'Fast Closings',
    description: 'Close in as little as 7 days or on your preferred timeline',
  },
  {
    title: 'No Fees or Commissions',
    description: 'The offer we make is what you get - no deductions, no hidden costs',
  },
  {
    title: 'Any Condition',
    description: 'We buy houses as-is - no repairs, cleaning, or staging required',
  },
  {
    title: 'Flexible Solutions',
    description: 'Every situation is unique. We tailor our approach to your specific needs',
  },
]
