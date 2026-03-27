import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service and conditions for using the Alchemy Investments RE website.',
  alternates: {
    canonical: 'https://alchemyinvestmentsre.com/terms',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#2b3d4f] mb-4">Terms of Service</h1>
          <p className="text-gray-500 mb-10">Last updated: March 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#2b3d4f] mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Alchemy Investments RE website
                (alchemyinvestmentsre.com), you agree to be bound by these Terms of Service. If
                you do not agree with any part of these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2b3d4f] mb-3">2. Services Described</h2>
              <p>
                Alchemy Investments RE is a Nevada licensed real estate brokerage (License:
                S.0184768). Our website provides information about our cash home buying services
                and licensed agent services. No information on this website constitutes a binding
                offer to purchase real estate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2b3d4f] mb-3">3. No Obligation</h2>
              <p>
                Submitting a form on our website does not create a binding agreement. Any cash
                offer made after evaluation of your property is non-binding until both parties
                execute a formal purchase agreement through a licensed title company.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2b3d4f] mb-3">4. Communications Consent</h2>
              <p>
                By submitting your contact information, you consent to receive calls, emails, and
                SMS messages from Alchemy Investments RE. You may opt out of SMS communications at
                any time by replying STOP. Message and data rates may apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2b3d4f] mb-3">5. Accuracy of Information</h2>
              <p>
                We strive to provide accurate information on our website. However, market
                conditions, laws, and regulations change frequently. We make no guarantees
                regarding the accuracy, completeness, or timeliness of any information on this
                site. Do not rely solely on this website for legal or financial decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2b3d4f] mb-3">6. Intellectual Property</h2>
              <p>
                All content on this website, including text, images, logos, and code, is the
                property of Alchemy Investments RE and may not be reproduced without written
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2b3d4f] mb-3">7. Limitation of Liability</h2>
              <p>
                Alchemy Investments RE shall not be liable for any indirect, incidental, or
                consequential damages arising from your use of this website or our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2b3d4f] mb-3">8. Governing Law</h2>
              <p>
                These terms are governed by the laws of the State of Nevada. Any disputes shall be
                resolved in Clark County, Nevada.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2b3d4f] mb-3">9. Contact</h2>
              <p>
                Questions about these terms? Contact us at{' '}
                <a href="tel:702-547-6664" className="text-[#4A90E2] hover:underline">
                  (702) 547-6664
                </a>{' '}
                or visit our{' '}
                <a href="/contact" className="text-[#4A90E2] hover:underline">
                  contact page
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
