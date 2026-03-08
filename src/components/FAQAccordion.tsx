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
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-brand-blue transition-colors"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
              aria-expanded={isOpen}
            >
              <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
              <svg
                className={`w-5 h-5 text-brand-blue flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
              <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
