'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const [activeTab, setActiveTab] = useState('sell')
  const [formExpanded, setFormExpanded] = useState(false)
  const [address, setAddress] = useState('')

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[550px] flex items-center">
          {/* Background drone image */}
          <div className="absolute inset-0 bg-[url('/hero-drone.jpg')] bg-cover bg-center" />

          {/* White gradient overlay on left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />

          <div className="container mx-auto px-6 md:px-12 py-20 relative z-10">
            <div className="max-w-2xl">
              {/* Tab Navigation */}
              <div className="flex gap-8 mb-8">
                <button
                  onClick={() => setActiveTab('sell')}
                  className={`text-[13px] font-semibold tracking-wider pb-2 transition-all ${
                    activeTab === 'sell'
                      ? 'text-[#333] border-b-3 border-[#22c55e]'
                      : 'text-[#888]'
                  }`}
                  style={{ borderBottomWidth: activeTab === 'sell' ? '3px' : '0' }}
                >
                  SELLING A HOME
                </button>
                <button
                  onClick={() => setActiveTab('buy')}
                  className={`text-[13px] font-semibold tracking-wider pb-2 transition-all ${
                    activeTab === 'buy'
                      ? 'text-[#333] border-b-3 border-[#22c55e]'
                      : 'text-[#888]'
                  }`}
                  style={{ borderBottomWidth: activeTab === 'buy' ? '3px' : '0' }}
                >
                  BUYING A HOME
                </button>
              </div>

              {/* Main Headline */}
              <h1 className="text-[44px] font-extrabold text-[#1a1a1a] leading-[1.2] mb-8">
                Sell Your Las Vegas House Fast.
                <br />
                Compare Top Agents & Cash Offers.
              </h1>

              {/* Search/Form Bar */}
              <div className="bg-white rounded-lg shadow-xl mb-6 overflow-hidden border-4 border-white">
                {!formExpanded ? (
                  <div className="flex">
                    <div className="flex-1 relative bg-white">
                      <input
                        type="text"
                        placeholder="Enter your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-5 py-4 text-base focus:outline-none border-none bg-transparent"
                      />
                      <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <button
                      onClick={() => setFormExpanded(true)}
                      className="bg-[#12C190] hover:bg-[#10a87a] text-white font-semibold px-8 py-4 text-base transition-colors border-l-0"
                    >
                      Get Started
                    </button>
                  </div>
                ) : (
                  <div className="p-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Property Address</label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[#4A90E2] focus:outline-none"
                        placeholder="123 Main St, Las Vegas, NV"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[#4A90E2] focus:outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[#4A90E2] focus:outline-none"
                          placeholder="(702) 123-4567"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[#4A90E2] focus:outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => setFormExpanded(false)}
                        className="px-6 py-3 text-gray-600 hover:text-gray-800 font-semibold transition-colors"
                      >
                        Back
                      </button>
                      <button className="flex-1 bg-[#12C190] hover:bg-[#10a87a] text-white font-semibold px-8 py-3 rounded text-base transition-colors">
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Subtext */}
              <p className="text-[15px] text-[#555] leading-[1.6] max-w-[520px] mb-6">
                No fees. No commissions. No repairs needed. Get a fair cash offer in 24 hours and close in as little as 7 days. Free, no-obligation offer.
              </p>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#22c55e] flex items-center justify-center text-white font-bold text-lg">
                    A+
                  </div>
                  <span className="text-[#333] font-semibold text-sm">BBB Rated</span>
                </div>
                <div className="h-10 w-px bg-gray-300" />
                <div className="text-[#333]">
                  <div className="font-bold text-base">15+ Years</div>
                  <div className="text-xs text-gray-600">In Business</div>
                </div>
                <div className="h-10 w-px bg-gray-300" />
                <div className="text-[#333]">
                  <div className="font-bold text-base">2,000+</div>
                  <div className="text-xs text-gray-600">Properties Sold</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Logos Bar */}
        <section className="bg-white py-12 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap opacity-60 grayscale">
              <div className="text-[#7c7c7c] font-bold text-sm">YAHOO! FINANCE</div>
              <div className="text-[#7c7c7c] font-bold text-sm">REALTOR®</div>
              <div className="text-[#7c7c7c] font-bold text-sm">Forbes</div>
              <div className="text-[#7c7c7c] font-bold text-sm">NBC</div>
              <div className="text-[#7c7c7c] font-bold text-sm">USA TODAY</div>
              <div className="text-[#7c7c7c] font-bold text-sm">NEW YORK POST</div>
              <div className="text-[#7c7c7c] font-bold text-sm">FOX BUSINESS</div>
            </div>
          </div>
        </section>

        {/* Better Agents Section */}
        <section className="bg-[#f8f9fb] py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-[42px] font-bold text-[#2b3d4f] text-center mb-16 leading-tight">
              Better Agents. Better Rates. Zero Hassle.
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white p-10 rounded-lg shadow-sm">
                <div className="mb-6">
                  <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" fill="#e3f2fd" />
                    <path d="M50 30v40M30 50h40" stroke="#4A90E2" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="50" cy="35" r="8" fill="#4A90E2" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-bold text-[#2b3d4f] mb-4">
                  Top Las Vegas agents & cash buyers
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Compare offers from experienced local agents and trusted cash buyers. Get multiple options and choose the best path forward for your unique situation.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-10 rounded-lg shadow-sm">
                <div className="mb-6">
                  <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" fill="#e3f2fd" />
                    <path d="M35 55l10 10 20-25" stroke="#4A90E2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-bold text-[#2b3d4f] mb-4">
                  The best rates in real estate
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  These agents have agreed to offer our customers competitive rates. You get top-producers for less than half their typical fee, saving thousands on average!
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-10 rounded-lg shadow-sm">
                <div className="mb-6">
                  <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" fill="#e3f2fd" />
                    <rect x="30" y="30" width="40" height="30" rx="3" stroke="#4A90E2" strokeWidth="3" fill="none" />
                    <path d="M40 50v-8M50 50v-12M60 50v-6" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-bold text-[#2b3d4f] mb-4">
                  Free with no obligation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sign up and compare agent matches in minutes. Choose the best fit, request more matches, or walk away at any time. Our service is completely free for you to use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trustpilot Section */}
        <section className="bg-white py-16 border-y border-gray-200">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-10 h-10 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-3xl font-bold text-[#2b3d4f]">Trustpilot</span>
            </div>
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-[#00b67a] fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-lg text-gray-600">
              Rated <strong>"Excellent"</strong> with <strong>3,500+ reviews</strong>
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-[#f8f9fb] py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-[42px] font-bold text-[#2b3d4f] text-center mb-20">
              How It Works
            </h2>

            <div className="max-w-6xl mx-auto space-y-24">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#4A90E2] text-white mb-6 shadow-lg">
                    <span className="font-bold text-2xl">1</span>
                  </div>
                  <h3 className="text-[32px] font-bold text-[#2b3d4f] mb-6 leading-tight">
                    Enter a few details to get started
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our Concierge Team will reach out within 5 minutes to answer your questions, offer advice, and learn exactly what you're looking for in an agent. You can also call us directly at{' '}
                    <a href="tel:702-718-6934" className="text-[#4A90E2] font-semibold hover:underline">
                      (702) 718-6934
                    </a>{' '}
                    7 days a week.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 h-80 flex items-center justify-center">
                  <svg className="w-32 h-32 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="md:order-2">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#4A90E2] text-white mb-6 shadow-lg">
                    <span className="font-bold text-2xl">2</span>
                  </div>
                  <h3 className="text-[32px] font-bold text-[#2b3d4f] mb-6 leading-tight">
                    We negotiate better rates on your behalf
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    These aren't discount agents. We bring you the best, full-service agents from major brands and brokerages nationwide. Since we send these agents more business at zero upfront cost to them, they're willing to pass part of that savings along to you.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 h-80 flex items-center justify-center md:order-1">
                  <svg className="w-32 h-32 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#4A90E2] text-white mb-6 shadow-lg">
                    <span className="font-bold text-2xl">3</span>
                  </div>
                  <h3 className="text-[32px] font-bold text-[#2b3d4f] mb-6 leading-tight">
                    Compare agents and cash offers
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Review your personalized agent matches and compare them with instant cash offers from trusted buyers. Choose the option that works best for you - whether that's working with a top agent or getting a fast cash sale.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 h-80 flex items-center justify-center">
                  <svg className="w-32 h-32 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="bg-[#f8f9fb] py-20">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-[38px] font-bold text-[#2b3d4f] mb-4">
              Our team of licensed real estate experts is ready to help
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re here to answer your questions, offer advice, and help you find the perfect solution.
              Our team is available 7 days a week.
            </p>

            {/* Countdown Timer - static for now */}
            <div className="text-[#4A90E2] text-4xl font-bold mb-8" id="countdown">
              --
            </div>

            {/* Contact Form */}
            <div className="flex gap-3 max-w-2xl mx-auto mb-6">
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="flex-1 px-5 py-4 rounded border-2 border-gray-300 focus:border-[#4A90E2] focus:outline-none"
              />
              <button className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold px-8 py-4 rounded transition-colors">
                Contact Us Now
              </button>
            </div>

            {/* Phone Number */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-gray-600">or call us at</span>
              <a href="tel:702-718-6934" className="text-[#4A90E2] font-bold text-xl flex items-center gap-2 hover:underline">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
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
      </main>

      <Footer />
    </>
  )
}
