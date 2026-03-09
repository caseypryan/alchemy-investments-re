'use client'

import { useState } from 'react'
import AddressAutocompleteInput from '@/components/AddressAutocompleteInput'

interface FieldErrors {
  address?: string
  fullName?: string
  phone?: string
  email?: string
}

export default function HomepageHeroForm() {
  const [activeTab, setActiveTab] = useState('sell')
  const [formExpanded, setFormExpanded] = useState(false)
  const [address, setAddress] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errors, setErrors] = useState<FieldErrors>({})

  const validate = (): boolean => {
    const newErrors: FieldErrors = {}
    if (!address.trim()) newErrors.address = 'Property address is required'
    if (!fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!phone.trim()) newErrors.phone = 'Phone number is required'
    if (!email.trim()) newErrors.email = 'Email address is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleHeroFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)

    const formData = {
      form_type: 'hero_form',
      property_address: address,
      full_name: fullName,
      phone_number: phone,
      email_address: email,
      submitted_at: new Date().toISOString(),
      page_url: window.location.href,
    }

    try {
      await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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
        setFullName('')
        setPhone('')
        setEmail('')
        setErrors({})
        setFormExpanded(false)
        setSubmitSuccess(false)
      }, 6000)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your form. Please call us at (702) 718-6934.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = (error?: string) =>
    `w-full px-4 py-3 border-2 rounded focus:outline-none transition-colors ${
      error ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-brand-blue'
    }`

  return (
    <section className="relative min-h-[550px] flex items-center">
      {/* Background drone image */}
      <div className="absolute inset-0 bg-[url('/hero-drone.jpg')] bg-cover bg-center" />

      {/* White gradient overlay on left */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/60 to-white/10" />

      <div className="container mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="max-w-2xl">
          {/* Tab Navigation */}
          <div className="flex gap-8 mb-8">
            <button
              onClick={() => setActiveTab('sell')}
              className={`text-[13px] font-semibold tracking-wider pb-2 transition-all ${
                activeTab === 'sell' ? 'text-[#333] border-b-3 border-brand-green' : 'text-[#888]'
              }`}
              style={{ borderBottomWidth: activeTab === 'sell' ? '3px' : '0' }}
            >
              SELLING A HOME
            </button>
            <button
              onClick={() => setActiveTab('buy')}
              className={`text-[13px] font-semibold tracking-wider pb-2 transition-all ${
                activeTab === 'buy' ? 'text-[#333] border-b-3 border-brand-green' : 'text-[#888]'
              }`}
              style={{ borderBottomWidth: activeTab === 'buy' ? '3px' : '0' }}
            >
              BUYING A HOME
            </button>
          </div>

          {/* Main Headline */}
          <h1 className="text-[44px] font-extrabold text-[#1a1a1a] leading-[1.2] mb-8">
            Sell Your Las Vegas House Fast
            <br />
            - Cash Offers or Top 1% Agents
          </h1>

          {/* Search/Form Bar */}
          <div className="bg-white rounded-lg shadow-xl mb-6 border-4 border-white">
            {!formExpanded ? (
              <div className="flex">
                <div className="flex-1 relative bg-white">
                  <AddressAutocompleteInput
                    value={address}
                    onChange={setAddress}
                    placeholder="Enter your address"
                    className="w-full px-5 py-4 text-base focus:outline-none border-none bg-transparent"
                  />
                  <svg
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <button
                  onClick={() => setFormExpanded(true)}
                  className="bg-brand-green hover:bg-[#16a34a] text-white font-semibold px-8 py-4 text-base transition-colors border-l-0"
                >
                  Get Started
                </button>
              </div>
            ) : submitSuccess ? (
              <div className="p-8 text-center animate-in fade-in duration-300">
                <div className="mb-4">
                  <svg
                    className="w-16 h-16 text-brand-green mx-auto"
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
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">Thank You!</h3>
                <p className="text-gray-600">We&apos;ll be in touch with you shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={handleHeroFormSubmit}
                className="p-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500"
                noValidate
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Property Address *
                  </label>
                  <AddressAutocompleteInput
                    value={address}
                    onChange={(val) => { setAddress(val); if (errors.address) setErrors(p => ({ ...p, address: undefined })) }}
                    className={inputClass(errors.address)}
                    placeholder="123 Main St, Las Vegas, NV"
                  />
                  {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => { setFullName(e.target.value); if (errors.fullName) setErrors(p => ({ ...p, fullName: undefined })) }}
                      className={inputClass(errors.fullName)}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => { setPhone(e.target.value); if (errors.phone) setErrors(p => ({ ...p, phone: undefined })) }}
                      className={inputClass(errors.phone)}
                      placeholder="(702) 123-4567"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors(p => ({ ...p, email: undefined })) }}
                    className={inputClass(errors.email)}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setFormExpanded(false)}
                    className="px-6 py-3 text-gray-600 hover:text-gray-800 font-semibold transition-colors"
                    disabled={isSubmitting}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-brand-green hover:bg-[#16a34a] text-white font-semibold px-8 py-3 rounded text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Subtext */}
          <p className="text-[15px] text-[#555] leading-[1.6] max-w-[520px] mb-6">
            Sell your house as-is with no repairs needed. Get a fair cash offer in 24 hours and
            close in 7-14 days, or work with top 1% Las Vegas agents. No fees, no commissions, no
            obligations.
          </p>

          {/* Trust Badges */}
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-lg">
                ✓
              </div>
              <span className="text-[#333] font-semibold text-sm">Licensed Brokerage</span>
            </div>
            <div className="h-10 w-px bg-gray-300" />
            <div className="text-[#333]">
              <div className="font-bold text-base">10+ Years</div>
              <div className="text-xs text-gray-600">In Las Vegas</div>
            </div>
            <div className="h-10 w-px bg-gray-300" />
            <div className="text-[#333]">
              <div className="font-bold text-base">7-14 Days</div>
              <div className="text-xs text-gray-600">To Close</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
