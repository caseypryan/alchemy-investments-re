import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Speak to a Las Vegas Real Estate Expert | Free Consultation | (702) 718-6934',
  description: 'Get expert advice on selling your Las Vegas home. Free consultation with licensed real estate professionals. Call (702) 718-6934 or request a callback.',
  keywords: 'speak to real estate expert las vegas, real estate consultation las vegas, sell house expert advice, las vegas real estate advisor',
  alternates: {
    canonical: 'https://alchemyinvestmentsre.com/speak-to-an-expert',
  },
}

export default function SpeakToExpertPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-extrabold mb-6">Speak to a Real Estate Expert</h1>
              <p className="text-xl mb-8">
                Get personalized advice from licensed Las Vegas real estate professionals with 10+ years of experience.
              </p>
              <a href="tel:702-718-6934" className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-10 py-5 rounded-lg text-xl transition-colors">
                Call Now: (702) 718-6934
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-2xl font-bold mb-4">Call Us</h3>
                <a href="tel:702-718-6934" className="text-2xl text-[#4A90E2] font-bold hover:underline">
                  (702) 718-6934
                </a>
                <p className="text-gray-600 mt-2">Mon-Fri: 9am - 6pm</p>
              </div>

              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="text-2xl font-bold mb-4">Email Us</h3>
                <a href="mailto:Casey@AlchemyInvestmentsRE.com" className="text-lg text-[#4A90E2] hover:underline">
                  Casey@AlchemyInvestmentsRE.com
                </a>
                <p className="text-gray-600 mt-2">24-hour response time</p>
              </div>

              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
                <address className="text-gray-700 not-italic">
                  8978 Spanish Ridge<br />Las Vegas, NV 89148
                </address>
                <p className="text-gray-600 mt-2">By appointment</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
