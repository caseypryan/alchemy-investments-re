import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Alchemy Investments RE',
  description: 'Privacy policy for Alchemy Investments RE. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://alchemyinvestmentsre.com/privacy-policy',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#2b3d4f] mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-10">Last updated: March 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#2b3d4f] mb-3">1. Information We Collect</h2>
              <p>
                When you submit a form on our website, we collect personal information including
                your name, email address, phone number, and property address. We also collect
                standard website usage data such as IP address, browser type, and pages visited via
                Google Analytics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2b3d4f] mb-3">2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your inquiry about selling your property</li>
                <li>Prepare and deliver a cash offer for your home</li>
                <li>Contact you via phone, email, or SMS as authorized</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2b3d4f] mb-3">3. Sharing Your Information</h2>
              <p>
                We do not sell your personal information to third parties. We may share your
                information with our affiliated real estate agents and licensed title companies
                solely for the purpose of completing a transaction you have initiated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2b3d4f] mb-3">4. SMS Communications</h2>
              <p>
                By submitting your phone number, you consent to receive SMS messages from Alchemy
                Investments RE regarding your property inquiry. Message and data rates may apply.
                You may opt out at any time by replying STOP to any SMS message.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2b3d4f] mb-3">5. Cookies & Analytics</h2>
              <p>
                Our website uses Google Analytics to understand how visitors use our site. This
                data is aggregated and does not personally identify you. You can opt out of Google
                Analytics tracking by using the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  className="text-[#4A90E2] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2b3d4f] mb-3">6. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal
                information. Our website uses HTTPS encryption for all data transmission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2b3d4f] mb-3">7. Your Rights</h2>
              <p>
                You have the right to request access to, correction of, or deletion of your
                personal information. To exercise these rights, contact us at{' '}
                <a href="tel:702-718-6934" className="text-[#4A90E2] hover:underline">
                  (702) 718-6934
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2b3d4f] mb-3">8. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact Alchemy Investments
                RE at{' '}
                <a href="tel:702-718-6934" className="text-[#4A90E2] hover:underline">
                  (702) 718-6934
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
