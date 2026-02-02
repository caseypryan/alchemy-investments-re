'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PropertiesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const webhookData = {
      form_type: 'property_inquiry',
      ...formData,
      submitted_at: new Date().toISOString(),
      page_url: window.location.href
    }

    try {
      await fetch('https://workflow-automation.podio.com/catch/z1d60g243a5ygwz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(webhookData)
      })

      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submission', {
          form_type: 'property_inquiry',
          event_category: 'engagement'
        })
      }

      setSubmitSuccess(true)
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', propertyType: '', message: '' })
        setSubmitSuccess(false)
      }, 3000)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error. Please call us at (702) 718-6934.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const propertyTypes = [
    {
      title: 'Single Family Homes',
      count: '10+',
      description: 'Spacious family homes in prime Las Vegas neighborhoods',
      icon: '🏠'
    },
    {
      title: 'Investment Properties',
      count: '20+',
      description: 'Cash-flowing rental properties and fix-and-flip opportunities',
      icon: '💰'
    },
    {
      title: 'Condos & Townhomes',
      count: '15+',
      description: 'Low-maintenance properties perfect for first-time buyers',
      icon: '🏢'
    },
    {
      title: 'Luxury Homes',
      count: '5+',
      description: 'Premium properties in Summerlin, Henderson, and Las Vegas',
      icon: '✨'
    }
  ]

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#f8f9fb] to-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[48px] font-extrabold text-[#2b3d4f] mb-6 leading-tight">
                Browse Las Vegas Properties for Sale & Rent
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Find your next investment property, rental home, or primary residence in the Las Vegas Valley.
                We buy houses and connect investors with quality properties.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="tel:702-718-6934"
                  className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  Call (702) 718-6934
                </a>
                <a
                  href="#inquiry-form"
                  className="bg-white hover:bg-gray-50 text-[#2b3d4f] font-bold px-8 py-4 rounded-lg text-lg border-2 border-[#2b3d4f] transition-colors"
                >
                  Request Property Info
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-[42px] font-bold text-[#2b3d4f] text-center mb-16">
              Available Property Types
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {propertyTypes.map((type, index) => (
                <div key={index} className="bg-[#f8f9fb] rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">{type.icon}</div>
                  <div className="text-[#22c55e] font-bold text-2xl mb-2">{type.count}</div>
                  <h3 className="text-xl font-bold text-[#2b3d4f] mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* We Buy Houses Section */}
        <section className="py-20 bg-[#f8f9fb]">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-[42px] font-bold text-[#2b3d4f] mb-6 leading-tight">
                    Have a Property to Sell?
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    We buy houses in Las Vegas for cash in any condition. Whether you're an investor looking to offload a property
                    or a homeowner who needs to sell fast, we make fair offers and close quickly.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      'Cash offers in 24 hours',
                      'Close in 7-14 days',
                      'No repairs needed - buy as-is',
                      'No fees or commissions',
                      'All property types accepted'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/"
                    className="inline-block bg-[#4A90E2] hover:bg-[#3a7bc8] text-white font-bold px-8 py-4 rounded-lg transition-colors"
                  >
                    Get Your Cash Offer
                  </Link>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#22c55e] text-white mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#2b3d4f]">Property Inventory</h3>
                    <p className="text-gray-600 mt-2">Our inventory changes daily</p>
                  </div>
                  <div className="space-y-4 text-center">
                    <div className="border-t border-gray-200 pt-4">
                      <div className="text-3xl font-bold text-[#2b3d4f]">50+</div>
                      <div className="text-sm text-gray-600">Active Listings</div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="text-3xl font-bold text-[#2b3d4f]">$200K-$2M</div>
                      <div className="text-sm text-gray-600">Price Range</div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="text-3xl font-bold text-[#2b3d4f]">24 Hours</div>
                      <div className="text-sm text-gray-600">Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Inquiry Form */}
        <section id="inquiry-form" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-[42px] font-bold text-[#2b3d4f] mb-4">
                  Request Property Information
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll send you our current inventory of available properties in Las Vegas.
                </p>
              </div>

              {submitSuccess ? (
                <div className="bg-white rounded-lg shadow-xl p-12 text-center animate-in fade-in duration-300">
                  <svg className="w-20 h-20 text-[#22c55e] mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-3xl font-bold text-[#2b3d4f] mb-3">Thank You!</h3>
                  <p className="text-xl text-gray-600 mb-2">We've received your inquiry.</p>
                  <p className="text-gray-600">Our team will contact you within 24 hours with available properties.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4A90E2] focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4A90E2] focus:outline-none"
                        placeholder="(702) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4A90E2] focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Property Type Interest</label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4A90E2] focus:outline-none"
                    >
                      <option value="">Select property type...</option>
                      <option value="single-family">Single Family Home</option>
                      <option value="investment">Investment Property</option>
                      <option value="condo">Condo/Townhome</option>
                      <option value="luxury">Luxury Home</option>
                      <option value="any">Any Type</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Additional Details</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4A90E2] focus:outline-none"
                      placeholder="Tell us about your property needs, budget, timeline, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Property List'}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to receive calls, emails, and SMS from Alchemy Investments RE.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-20 bg-[#f8f9fb]">
          <div className="container mx-auto px-6">
            <h2 className="text-[42px] font-bold text-[#2b3d4f] text-center mb-12">
              Las Vegas Valley Areas We Serve
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto text-center">
              {[
                'Las Vegas',
                'Henderson',
                'North Las Vegas',
                'Summerlin',
                'Green Valley',
                'Paradise',
                'Spring Valley',
                'Enterprise',
                'Anthem',
                'Boulder City'
              ].map((area, i) => (
                <div key={i} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-semibold text-[#2b3d4f]">{area}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
