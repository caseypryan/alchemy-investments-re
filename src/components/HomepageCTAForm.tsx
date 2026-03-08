'use client'

import { useState } from 'react'

export default function HomepageCTAForm() {
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errors, setErrors] = useState<{ address?: string; phone?: string }>({})

  const validate = () => {
    const e: { address?: string; phone?: string } = {}
    if (!address.trim()) e.address = 'Property address is required'
    if (!phone.trim()) e.phone = 'Phone number is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    try {
      await fetch('https://workflow-automation.podio.com/catch/z1d60g243a5ygwz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: 'cta_form',
          property_address: address,
          phone_number: phone,
          submitted_at: new Date().toISOString(),
          page_url: window.location.href,
        }),
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
        setAddress('')
        setPhone('')
        setErrors({})
        setSubmitSuccess(false)
      }, 8000)
    } catch {
      alert('There was an error. Please call us at (702) 718-6934.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-[#0f1f2e] py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-green/20 border border-brand-green/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                <span className="text-brand-green text-sm font-semibold">Available 7 Days a Week</span>
              </div>
              <h2 className="text-[38px] font-extrabold text-white leading-tight mb-5">
                Ready to Get Your
                <br />
                <span className="text-brand-green">Free Cash Offer?</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Join hundreds of Las Vegas homeowners who sold their house fast, hassle-free, and without leaving money on the table.
              </p>
              <ul className="space-y-3">
                {[
                  'Cash offer within 24 hours',
                  'Close in as little as 7 days',
                  'No repairs or cleaning needed',
                  'Zero fees or commissions',
                  'You choose your closing date',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-200">
                    <div className="w-5 h-5 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Form Card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {submitSuccess ? (
                <div className="py-8 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">You're All Set!</h3>
                  <p className="text-gray-500">Our team will contact you within 5 minutes during business hours.</p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-400 mb-2">Or call us right now:</p>
                    <a href="tel:702-718-6934" className="text-brand-green font-bold text-xl hover:underline">
                      (702) 718-6934
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-navy mb-1">Get Your Free Cash Offer</h3>
                  <p className="text-gray-500 text-sm mb-6">No obligation. Takes 30 seconds.</p>
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Property Address *
                      </label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => { setAddress(e.target.value); if (errors.address) setErrors(p => ({ ...p, address: undefined })) }}
                        placeholder="123 Main St, Las Vegas, NV"
                        className={`w-full px-4 py-3.5 border-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-colors text-sm ${errors.address ? 'border-red-400' : 'border-gray-200 focus:border-brand-green'}`}
                      />
                      {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value); if (errors.phone) setErrors(p => ({ ...p, phone: undefined })) }}
                        placeholder="(702) 123-4567"
                        className={`w-full px-4 py-3.5 border-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-colors text-sm ${errors.phone ? 'border-red-400' : 'border-gray-200 focus:border-brand-green'}`}
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-green hover:bg-[#16a34a] text-white font-bold py-4 rounded-lg text-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Get My Free Cash Offer →'}
                    </button>
                  </form>
                  <div className="mt-5 pt-5 border-t border-gray-100 text-center">
                    <p className="text-sm text-gray-400 mb-1">Prefer to talk? Call us now:</p>
                    <a href="tel:702-718-6934" className="text-brand-green font-bold text-xl hover:underline">
                      (702) 718-6934
                    </a>
                  </div>
                  <p className="mt-4 text-xs text-gray-400 text-center leading-relaxed">
                    By submitting you agree to receive calls, emails, and SMS. Msg & data rates may apply. Text STOP to cancel.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
