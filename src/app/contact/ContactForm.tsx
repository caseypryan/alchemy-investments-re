'use client'

import { useState } from 'react'
import AddressAutocompleteInput from '@/components/AddressAutocompleteInput'

const WEBHOOK_URL = '/api/submit-form'

interface FieldErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  address?: string
}

export default function ContactForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [condition, setCondition] = useState('')
  const [situation, setSituation] = useState('')
  const [timeline, setTimeline] = useState('')
  const [details, setDetails] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validate = (): boolean => {
    const newErrors: FieldErrors = {}
    if (!firstName.trim()) newErrors.firstName = 'First name is required'
    if (!lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!email.trim()) newErrors.email = 'Email address is required'
    if (!phone.trim()) newErrors.phone = 'Phone number is required'
    if (!address.trim()) newErrors.address = 'Property address is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)

    const formData = {
      form_type: 'contact_form',
      first_name: firstName,
      last_name: lastName,
      full_name: `${firstName} ${lastName}`.trim(),
      email_address: email,
      phone_number: phone,
      property_address: address,
      property_condition: condition,
      situation,
      ideal_timeline: timeline,
      additional_details: details,
      submitted_at: new Date().toISOString(),
      page_url: window.location.href,
    }

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', 'form_submission', {
          form_type: 'contact_form',
          event_category: 'engagement',
          event_label: 'Contact Form Submission',
        })
      }

      setSubmitSuccess(true)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your form. Please call us at (702) 547-6664.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = (error?: string) =>
    `w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-secondary transition-colors ${
      error ? 'border-red-400 focus:border-red-500' : 'border-gray-300'
    }`

  if (submitSuccess) {
    return (
      <div className="bg-white rounded-lg shadow-xl p-12 border-2 border-gray-100 text-center">
        <svg
          className="w-20 h-20 text-green-500 mx-auto mb-6"
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
        <h3 className="text-3xl font-heading mb-4">Thank You!</h3>
        <p className="text-xl text-gray-600">
          We&apos;ve received your request and will contact you within 24 hours with a
          no-obligation cash offer.
        </p>
        <p className="text-gray-500 mt-4">
          Need to reach us sooner? Call{' '}
          <a href="tel:702-547-6664" className="text-secondary font-bold hover:text-primary">
            (702) 547-6664
          </a>
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-gray-100">
      <h2 className="text-3xl font-heading mb-2 text-center">Get Your Free Cash Offer</h2>
      <p className="text-center text-gray-600 mb-8">
        Fill out the form below and we&apos;ll contact you within 24 hours with a no-obligation
        offer
      </p>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
                if (errors.firstName) setErrors((p) => ({ ...p, firstName: undefined }))
              }}
              className={inputClass(errors.firstName)}
              required
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
                if (errors.lastName) setErrors((p) => ({ ...p, lastName: undefined }))
              }}
              className={inputClass(errors.lastName)}
              required
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (errors.email) setErrors((p) => ({ ...p, email: undefined }))
              }}
              className={inputClass(errors.email)}
              required
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
                if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }))
              }}
              className={inputClass(errors.phone)}
              placeholder="(702) 123-4567"
              required
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Property Address *
          </label>
          <AddressAutocompleteInput
            value={address}
            onChange={(val) => {
              setAddress(val)
              if (errors.address) setErrors((p) => ({ ...p, address: undefined }))
            }}
            className={inputClass(errors.address)}
            placeholder="123 Main St, Las Vegas, NV 89101"
          />
          {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Property Condition
          </label>
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
          >
            <option value="">Select condition...</option>
            <option value="excellent">Excellent - Move-in ready</option>
            <option value="good">Good - Minor repairs needed</option>
            <option value="fair">Fair - Moderate repairs needed</option>
            <option value="poor">Poor - Major repairs needed</option>
            <option value="uninhabitable">Uninhabitable</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Situation (Optional)
          </label>
          <select
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
          >
            <option value="">Select one...</option>
            <option value="foreclosure">Facing Foreclosure</option>
            <option value="divorce">Going Through Divorce</option>
            <option value="inherited">Inherited Property</option>
            <option value="relocating">Relocating</option>
            <option value="downsizing">Downsizing</option>
            <option value="behind-payments">Behind on Payments</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Ideal Timeline
          </label>
          <select
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
          >
            <option value="">Select timeline...</option>
            <option value="asap">As soon as possible (7-14 days)</option>
            <option value="1-month">Within 1 month</option>
            <option value="2-3-months">2-3 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Additional Details (Optional)
          </label>
          <textarea
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Tell us more about your property and situation..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request - Get My Cash Offer'}
        </button>

        <p className="text-sm text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy. We will never share your
          information with third parties.
        </p>
      </form>
    </div>
  )
}
