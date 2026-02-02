/**
 * Local FAQ component with expandable questions
 */

'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface LocalFAQProps {
  faqs: FAQ[]
}

export default function LocalFAQ({ faqs }: LocalFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
          >
            <span className="font-semibold text-lg pr-8">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 flex-shrink-0 transition-transform ${
                openIndex === idx ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4 text-gray-600">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
