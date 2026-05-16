'use client'

import { useState } from 'react'
import AddressAutocompleteInput from '@/components/AddressAutocompleteInput'

interface FieldErrors {
  name?: string
  phone?: string
  address?: string
  consent?: string
}

export default function SmsConsentForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const e: FieldErrors = {}
    if (!name.trim()) e.name = 'Full name is required'
    if (!phone.trim()) e.phone = 'Phone number is required'
    if (!address.trim()) e.address = 'Property address is required'
    if (!consent) e.consent = 'You must agree to receive SMS messages to continue'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)

    try {
      await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: 'sms_consent_form',
          step: 'completed',
          full_name: name,
          phone_number: phone,
          property_address: address,
          sms_consent: true,
          submitted_at: new Date().toISOString(),
          page_url: window.location.href,
        }),
      })

      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', 'form_submission', {
          form_type: 'sms_consent_form',
          event_category: 'engagement',
          event_label: 'SMS Consent Form',
        })
      }

      setSubmitted(true)
    } catch {
      alert('There was an error submitting your form. Please call us at (702) 547-6664.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = (error?: string) =>
    `w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
      error ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-brand-blue'
    }`

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#2b3d4f] mb-2">You&apos;re all set!</h2>
        <p className="text-gray-600">We&apos;ll be in touch shortly about your property.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); if (errors.name) setErrors(p => ({ ...p, name: undefined })) }}
          className={inputClass(errors.name)}
          placeholder="John Doe"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => { setPhone(e.target.value); if (errors.phone) setErrors(p => ({ ...p, phone: undefined })) }}
          className={inputClass(errors.phone)}
          placeholder="(702) 123-4567"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Property Address *</label>
        <AddressAutocompleteInput
          value={address}
          onChange={(val) => { setAddress(val); if (errors.address) setErrors(p => ({ ...p, address: undefined })) }}
          className={inputClass(errors.address)}
          placeholder="123 Main St, Las Vegas, NV 89101"
        />
        {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
      </div>

      <div className={`p-4 rounded-lg border-2 ${errors.consent ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}>
        <label className="flex gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => { setConsent(e.target.checked); if (errors.consent) setErrors(p => ({ ...p, consent: undefined })) }}
            className="mt-1 w-4 h-4 accent-brand-green flex-shrink-0"
          />
          <span className="text-sm text-gray-700 leading-relaxed">
            I agree to receive SMS messages from Alchemy Investments RE LLC regarding my property
            inquiry. Messaging frequency may vary. Message and data rates may apply. Reply STOP to
            opt out. Reply HELP for help. View our{' '}
            <a href="/privacy-policy" className="text-brand-blue underline hover:text-brand-green">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms" className="text-brand-blue underline hover:text-brand-green">
              Terms of Service
            </a>
            .
          </span>
        </label>
        {errors.consent && <p className="mt-2 text-sm text-red-500">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-green hover:bg-[#16a34a] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Get My Cash Offer'}
      </button>
    </form>
  )
}
