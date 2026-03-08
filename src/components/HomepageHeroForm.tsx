'use client'

import { useState } from 'react'

export default function HomepageHeroForm() {
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
          form_type: 'hero_form',
          property_address: address,
          phone_number: phone,
          submitted_at: new Date().toISOString(),
          page_url: window.location.href,
        }),
      })
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', 'form_submission', {
          form_type: 'hero_form',
          event_category: 'engagement',
          event_label: 'Hero Form Submission',
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
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/hero-drone.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f2e]/96 via-[#0f1f2e]/80 to-[#0f1f2e]/30" />

      <div className="container mx-auto px-6 md:px-12 py-24 relative z-10">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-brand-green/20 border border-brand-green/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
            <span className="text-brand-green text-sm font-semibold tracking-wide">
              Responding to inquiries within 5 minutes
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[48px] md:text-[58px] font-extrabold text-white leading-[1.1] mb-5">
            Sell Your Las Vegas
            <br />
            House Fast For Cash
          </h1>

          {/* Sub-headline */}
          <p className="text-[18px] text-gray-200 leading-relaxed mb-8 max-w-xl">
            Get a <strong className="text-white">fair cash offer in 24 hours</strong>. No repairs, no fees, no showings.
            Close in as little as <strong className="text-white">7 days</strong> — on your timeline.
          </p>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6 max-w-xl">
            {submitSuccess ? (
              <div className="py-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-1">We'll be in touch shortly!</h3>
                <p className="text-gray-500 text-sm">Expect a call within 5 minutes during business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <p className="text-navy font-bold text-lg mb-4">Get Your Free Cash Offer</p>
                <div className="space-y-3">
                  <div>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => { setAddress(e.target.value); if (errors.address) setErrors(p => ({ ...p, address: undefined })) }}
                      placeholder="Property address (e.g. 123 Main St, Las Vegas)"
                      className={`w-full px-4 py-3.5 border-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-colors text-sm ${errors.address ? 'border-red-400' : 'border-gray-200 focus:border-brand-green'}`}
                    />
                    {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => { setPhone(e.target.value); if (errors.phone) setErrors(p => ({ ...p, phone: undefined })) }}
                      placeholder="Your phone number"
                      className={`w-full px-4 py-3.5 border-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-colors text-sm ${errors.phone ? 'border-red-400' : 'border-gray-200 focus:border-brand-green'}`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-green hover:bg-[#16a34a] text-white font-bold py-4 rounded-lg text-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get My Free Cash Offer →'}
                  </button>
                </div>
                <p className="mt-3 text-xs text-gray-400 text-center">
                  No obligation. No fees. 100% free.
                </p>
              </form>
            )}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-200 text-sm font-medium">4.9/5 Rating</span>
            </div>
            <span className="text-gray-500 hidden md:block">•</span>
            <span className="text-gray-200 text-sm">500+ Homes Purchased</span>
            <span className="text-gray-500 hidden md:block">•</span>
            <span className="text-gray-200 text-sm">NV License S.0184768</span>
          </div>
        </div>
      </div>
    </section>
  )
}
