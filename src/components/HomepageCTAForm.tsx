'use client'

import { useState } from 'react'

export default function HomepageCTAForm() {
  const [ctaPhone, setCtaPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [phoneError, setPhoneError] = useState('')

  const handleCTAFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!ctaPhone.trim()) {
      setPhoneError('Phone number is required')
      return
    }
    setPhoneError('')
    setIsSubmitting(true)

    const formData = {
      form_type: 'cta_form',
      phone_number: ctaPhone,
      submitted_at: new Date().toISOString(),
      page_url: window.location.href,
    }

    try {
      await fetch('https://workflow-automation.podio.com/catch/z1d60g243a5ygwz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', 'form_submission', {
          form_type: 'cta_form',
          event_category: 'engagement',
          event_label: 'CTA Form Submission',
        })
      }

      setSubmitSuccess(true)
      setTimeout(() => {
        setCtaPhone('')
        setSubmitSuccess(false)
      }, 6000)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your form. Please call us at (702) 718-6934.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-navy-light py-20">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-[38px] font-bold text-navy mb-4">
          Our team of licensed real estate experts is ready to help
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We&apos;re here to answer your questions, offer advice, and help you find the perfect
          solution. Our team is available 7 days a week.
        </p>

        {/* Contact Form */}
        {submitSuccess ? (
          <div className="max-w-2xl mx-auto mb-6 p-6 bg-white rounded-lg animate-in fade-in duration-300">
            <div className="text-center">
              <svg
                className="w-12 h-12 text-brand-green mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold text-navy">Thank You!</h3>
              <p className="text-gray-600">We&apos;ll contact you shortly.</p>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto mb-6">
            <form onSubmit={handleCTAFormSubmit} className="flex gap-3" noValidate>
              <div className="flex-1">
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={ctaPhone}
                  onChange={(e) => { setCtaPhone(e.target.value); if (phoneError) setPhoneError('') }}
                  className={`w-full px-5 py-4 rounded border-2 focus:outline-none transition-colors ${
                    phoneError ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-brand-blue'
                  }`}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-green hover:bg-[#16a34a] text-white font-semibold px-8 py-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Submitting...' : 'Contact Us Now'}
              </button>
            </form>
            {phoneError && <p className="mt-2 text-sm text-red-500 text-left">{phoneError}</p>}
          </div>
        )}

        {/* Phone Number */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-gray-600">or call us at</span>
          <a
            href="tel:702-718-6934"
            className="text-brand-blue font-bold text-xl flex items-center gap-2 hover:underline"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (702) 718-6934
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-500 leading-relaxed max-w-3xl mx-auto">
          By clicking &quot;Contact Us Now&quot; you agree to receive calls, emails, and SMS.
          Message and data rates may apply. Text STOP to cancel.
        </p>
      </div>
    </section>
  )
}
