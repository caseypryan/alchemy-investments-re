'use client'

import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
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
  )
}
