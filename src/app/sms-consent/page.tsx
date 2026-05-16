import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmsConsentForm from './SmsConsentForm'

export const metadata: Metadata = {
  title: 'Get a Cash Offer | Alchemy Investments RE',
  description: 'Request a no-obligation cash offer for your Las Vegas home. Sell as-is in 7-14 days.',
  alternates: {
    canonical: 'https://alchemyinvestmentsre.com/sms-consent',
  },
}

export default function SmsConsentPage() {
  return (
    <>
      <Header />
      <main className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-6 max-w-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#2b3d4f] mb-3">Get Your Free Cash Offer</h1>
            <p className="text-gray-600">
              Fill out the form below and we&apos;ll contact you within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <SmsConsentForm />
          </div>

          <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
            SMS consent and phone numbers collected for SMS purposes are not shared with third
            parties or affiliates for marketing purposes.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
