import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from './ContactForm'

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
              <ContactForm />
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
