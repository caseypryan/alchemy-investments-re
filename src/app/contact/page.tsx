import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us | Alchemy Investments RE | Call 702-718-6934 for Cash Offer',
  description: 'Contact Alchemy Investments RE for a free cash offer on your Las Vegas home. Call 702-718-6934 or fill out our form. Licensed real estate investment brokerage.',
  alternates: {
    canonical: 'https://alchemyinvestmentsre.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
          <div className="container-custom">
            <h1 className="text-5xl font-heading mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl">
              Ready to sell your house fast? Get in touch today for a free, no-obligation cash offer.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-2xl font-heading mb-4">Call Us</h3>
                <a href="tel:702-718-6934" className="text-2xl text-secondary font-bold hover:text-primary">
                  702-718-6934
                </a>
                <p className="text-gray-600 mt-2">Mon-Fri: 9am - 6pm</p>
              </div>

              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="text-2xl font-heading mb-4">Email Us</h3>
                <a
                  href="mailto:Casey@AlchemyInvestmentsRE.com"
                  className="text-lg text-secondary hover:text-primary break-all"
                >
                  Casey@AlchemyInvestmentsRE.com
                </a>
                <p className="text-gray-600 mt-2">We respond within 24 hours</p>
              </div>

              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-2xl font-heading mb-4">Visit Us</h3>
                <p className="text-gray-700">
                  8978 Spanish Ridge<br />
                  Las Vegas, NV 89148
                </p>
                <p className="text-gray-600 mt-2">By appointment only</p>
              </div>
            </div>

            {/* Form */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-gray-100">
                <h2 className="text-3xl font-heading mb-2 text-center">Get Your Free Cash Offer</h2>
                <p className="text-center text-gray-600 mb-8">
                  Fill out the form below and we'll contact you within 24 hours with a no-obligation offer
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      placeholder="123 Main St, Las Vegas, NV 89101"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Property Condition
                    </label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary">
                      <option value="">Select condition...</option>
                      <option value="excellent">Excellent - Move-in ready</option>
                      <option value="good">Good - Minor repairs needed</option>
                      <option value="fair">Fair - Moderate repairs needed</option>
                      <option value="poor">Poor - Major repairs needed</option>
                      <option value="uninhabitable">Uninhabitable</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Situation (Optional)
                    </label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary">
                      <option value="">Select one...</option>
                      <option value="foreclosure">Facing Foreclosure</option>
                      <option value="divorce">Going Through Divorce</option>
                      <option value="inherited">Inherited Property</option>
                      <option value="relocating">Relocating</option>
                      <option value="downsizing">Downsizing</option>
                      <option value="behind-payments">Behind on Payments</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Ideal Timeline
                    </label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary">
                      <option value="">Select timeline...</option>
                      <option value="asap">As soon as possible (7-14 days)</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us more about your property and situation..."
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                    />
                  </div>

                  <button type="submit" className="w-full btn-primary text-lg py-4">
                    Submit Request - Get My Cash Offer
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy. We will never share
                    your information with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-4xl font-heading text-center mb-12">Visit Our Office</h2>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-600">
                  Map placeholder - Integrate Google Maps here
                </p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading mb-4">Alchemy Investments RE</h3>
                <div className="space-y-2 text-gray-700">
                  <p>8978 Spanish Ridge</p>
                  <p>Las Vegas, NV 89148</p>
                  <p className="pt-4">
                    <strong>Phone:</strong>{' '}
                    <a href="tel:702-718-6934" className="text-secondary hover:text-primary">
                      702-718-6934
                    </a>
                  </p>
                  <p>
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:Casey@AlchemyInvestmentsRE.com"
                      className="text-secondary hover:text-primary"
                    >
                      Casey@AlchemyInvestmentsRE.com
                    </a>
                  </p>
                  <p>
                    <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
                  </p>
                  <p>
                    <strong>License:</strong> S.0184768
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16 bg-white">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-4xl font-heading mb-6">Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Check out our frequently asked questions for quick answers
            </p>
            <a href="/faq" className="btn-outline">
              View FAQ
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
