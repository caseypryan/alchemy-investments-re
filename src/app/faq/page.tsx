'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // FAQ Schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
          <div className="container-custom">
            <h1 className="text-5xl font-heading mb-6">Frequently Asked Questions</h1>
            <p className="text-xl max-w-3xl">
              Everything you need to know about selling your house fast for cash in Las Vegas
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="container-custom max-w-4xl">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-secondary transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-heading pr-8">{faq.question}</h3>
                    <span className="text-2xl text-secondary flex-shrink-0">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Give us a call or fill out our contact form. We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:702-718-6934" className="btn-primary">
                Call: 702-718-6934
              </a>
              <a href="/contact" className="btn-outline">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

const faqs = [
  {
    question: 'How fast can you buy my house?',
    answer: 'We can close on your house in as little as 7 days. However, we work on YOUR timeline. If you need more time to move or make arrangements, we can accommodate closing dates up to several months out. The speed is entirely up to you.',
  },
  {
    question: 'Do I have to pay any fees or commissions?',
    answer: 'No! Unlike traditional real estate sales where you typically pay 5-6% in agent commissions plus closing costs, with us there are ZERO fees or commissions. The cash offer we make is the amount you receive at closing. We even cover the closing costs.',
  },
  {
    question: 'What condition does my house need to be in?',
    answer: 'We buy houses in ANY condition. Whether your home is pristine and move-in ready, or needs major repairs, we'll make you a fair cash offer. You don't need to do any repairs, cleaning, or staging. We buy houses as-is.',
  },
  {
    question: 'How do you determine your cash offer?',
    answer: 'Our offers are based on several factors including: current market conditions in your area, the condition of your property, recent comparable sales, and current repair costs. We provide a fair, transparent offer based on these market factors. We're always happy to explain how we arrived at our offer.',
  },
  {
    question: 'Is this a scam? How do I know you're legitimate?',
    answer: 'We are a fully licensed real estate brokerage in Nevada (License: S.0184768). You can verify our license with the Nevada Real Estate Division at any time. We've been in business for over 15 years and have purchased 500+ homes. All transactions are conducted through licensed title companies with full legal protection for both parties.',
  },
  {
    question: 'Will you lowball me on the offer?',
    answer: 'No. We make fair market offers based on your home's condition and current market data. While our cash offers are typically below retail value (because we're buying as-is and taking on all risks and costs), they're competitive with what you'd net after paying agent commissions, repairs, and closing costs in a traditional sale.',
  },
  {
    question: 'Do I have to accept your offer?',
    answer: 'Absolutely not! Our cash offer is completely no-obligation. You're free to consider our offer, get other offers, or pursue a traditional listing. We won't pressure you or use any high-pressure sales tactics. Take all the time you need to make the best decision for your situation.',
  },
  {
    question: 'What areas do you buy houses in?',
    answer: 'We buy houses throughout the greater Las Vegas metropolitan area including: Las Vegas, Henderson, North Las Vegas, Summerlin, Green Valley, Boulder City, Pahrump, Spring Valley, Paradise, and Enterprise. If you're in the area, we're interested in making you an offer.',
  },
  {
    question: 'Can you help if I'm behind on payments or facing foreclosure?',
    answer: 'Yes! We specialize in helping homeowners who are facing foreclosure or behind on mortgage payments. We can often close quickly enough to stop the foreclosure process and help you avoid the negative credit impact. Even if your foreclosure date is approaching, contact us immediately - we may still be able to help.',
  },
  {
    question: 'What if my house has liens or back taxes?',
    answer: 'Not a problem. We regularly purchase houses with liens, back taxes, or other title issues. Our team works with title companies to resolve these issues as part of the closing process. The costs are typically deducted from the purchase price, but we handle all the paperwork and coordination.',
  },
  {
    question: 'Do I need to move out before you buy my house?',
    answer: 'You'll need to move out by the closing date we agree upon. We can be very flexible with this timeline. If you need extra time after closing to move, we may be able to arrange a rent-back agreement where you stay in the house for a short period after closing.',
  },
  {
    question: 'What happens after I contact you?',
    answer: 'Here's our simple 3-step process:\n\n1. Contact Us - Call or fill out our form. We'll ask some basic questions about your property.\n\n2. Property Evaluation - We'll schedule a time to see your property (usually within 24-48 hours). This is a quick, no-pressure visit.\n\n3. Cash Offer - Within 24 hours of seeing your property, we'll present you with a fair cash offer. If you accept, we can close in as little as 7 days.',
  },
  {
    question: 'Can I sell if I'm going through a divorce?',
    answer: 'Yes. We've helped many divorcing couples sell their homes quickly and fairly. A fast cash sale can help you both move on with your lives. We work professionally with both parties and can coordinate with attorneys to ensure everything is handled properly.',
  },
  {
    question: 'What about inherited properties?',
    answer: 'We frequently purchase inherited properties. Whether you've inherited a house you don't want to maintain, live too far away to manage, or need to split proceeds with siblings, we can help. We understand probate processes and can work within those timelines.',
  },
  {
    question: 'Do you buy rental properties with tenants?',
    answer: 'Yes, we buy rental properties even with tenants in place. We can work around the tenants' lease agreements. This is especially helpful if you have problem tenants you'd like to avoid dealing with.',
  },
  {
    question: 'How is selling to you different from listing with a realtor?',
    answer: 'Key differences:\n\nCash Sale (Us):\n• Close in 7-14 days\n• No fees or commissions\n• No repairs needed\n• No showings\n• Guaranteed closing\n• You choose the date\n\nTraditional Listing:\n• 60-90+ days average\n• 5-6% commission ($15k-$30k+)\n• Often requires repairs/staging\n• Multiple showings\n• 30% of sales fall through\n• Buyer dictates timeline',
  },
  {
    question: 'What if I owe more than the house is worth?',
    answer: 'If you're underwater on your mortgage, we may still be able to help through a short sale. This requires working with your lender to accept less than what's owed. While we can't guarantee the lender will approve, we have experience with short sales and can guide you through the process.',
  },
  {
    question: 'Are there any hidden costs or surprises?',
    answer: 'No. We believe in complete transparency. The offer we make is what you'll receive (minus any agreed-upon costs like existing liens or property taxes). There are no hidden fees, no last-minute price reductions, and no surprises. Everything is clearly outlined in writing before closing.',
  },
  {
    question: 'Can I get multiple offers from you?',
    answer: 'We'll provide you with our best and fairest offer upfront. However, if your situation or the property changes, or if you receive other offers you'd like us to consider, we're always willing to review and potentially adjust our offer.',
  },
  {
    question: 'What happens at closing?',
    answer: 'Closing is simple. We use licensed, reputable title companies. You'll sign the necessary paperwork (usually takes 15-30 minutes), hand over the keys, and receive your payment. You can choose to receive funds via wire transfer, cashier's check, or direct deposit - whatever you prefer.',
  },
]
