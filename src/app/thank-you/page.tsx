import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Thank You | We\'ll Be in Touch Shortly',
  description: 'Thank you for reaching out to Alchemy Investments RE. We will contact you within 5 minutes.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center bg-[#f8f9fb]">
        <div className="container mx-auto px-6 text-center max-w-2xl py-20">
          <div className="bg-white rounded-2xl shadow-sm p-12">
            <div className="w-20 h-20 bg-[#12C190] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-[#2b3d4f] mb-4">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-6">
              We&apos;ve received your information and will be in touch within{' '}
              <strong className="text-[#4A90E2]">5 minutes</strong>.
            </p>
            <p className="text-gray-500 mb-10">
              Our team is available 7 days a week. If you need to speak with someone right away,
              call us at{' '}
              <a href="tel:702-547-6664" className="text-[#4A90E2] font-semibold hover:underline">
                (702) 547-6664
              </a>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/faq"
                className="border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Read FAQs
              </Link>
              <Link
                href="/how-it-works"
                className="bg-[#12C190] hover:bg-[#10a87a] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
