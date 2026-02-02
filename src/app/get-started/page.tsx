import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Get Started - Sell Your Las Vegas House Fast | Free Cash Offer',
  description: 'Start selling your Las Vegas house today. Get a free cash offer in 24 hours. Simple 3-step process. No repairs, no fees. Call (702) 718-6934 or request your offer online.',
  alternates: {
    canonical: 'https://alchemyinvestmentsre.com/get-started',
  },
}

export default function GetStartedPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-[#4A90E2] to-[#357ABD] text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-extrabold mb-6">Ready to Sell Your House Fast?</h1>
              <p className="text-2xl mb-10">Get started in 3 simple steps. Free cash offer in 24 hours.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#22c55e] text-white text-3xl font-bold flex items-center justify-center mx-auto mb-6">1</div>
                <h3 className="text-2xl font-bold mb-4">Tell Us About Your Property</h3>
                <p className="text-gray-600">Fill out our simple form with your property details. Takes less than 2 minutes.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#22c55e] text-white text-3xl font-bold flex items-center justify-center mx-auto mb-6">2</div>
                <h3 className="text-2xl font-bold mb-4">Get Your Cash Offer</h3>
                <p className="text-gray-600">We'll evaluate your property and send you a fair cash offer within 24 hours.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#22c55e] text-white text-3xl font-bold flex items-center justify-center mx-auto mb-6">3</div>
                <h3 className="text-2xl font-bold mb-4">Close in 7-14 Days</h3>
                <p className="text-gray-600">Choose your closing date. Get paid and move on with your life.</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/#hero-form" className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-12 py-5 rounded-lg text-xl transition-colors mb-6">
                Get Your Free Cash Offer
              </Link>
              <p className="text-gray-600">Or call us at <a href="tel:702-718-6934" className="text-[#4A90E2] font-bold hover:underline">(702) 718-6934</a></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
