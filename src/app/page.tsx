'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const [activeTab, setActiveTab] = useState('sell')

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
              <div className="bg-white rounded-lg shadow-xl flex mb-6 overflow-hidden border-4 border-white">
                <div className="flex-1 relative bg-white">
                  <input
                    type="text"
                    placeholder="Enter your zip code"
                    className="w-full px-5 py-4 text-base focus:outline-none border-none bg-transparent"
                  />
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <button className="bg-[#5fba7d] hover:bg-[#4fa86b] text-white font-semibold px-8 py-4 text-base transition-colors border-l-0">
                  Get Started
                </button>
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
                  <div className="font-bold text-base">500+ Homes</div>
                  <div className="text-xs text-gray-600">Purchased</div>
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
                  A nationwide network of 14,000 top agents
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We partner with top-producing agents from all the major brands, like RE/MAX, eXp, and more. Agents have to maintain exceptional reviews to stay in our network.
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-[#4A90E2] mb-6">
                    <span className="text-[#4A90E2] font-bold text-xl">STEP 1</span>
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
                  <div className="text-center text-gray-400">
                    <div className="text-6xl mb-4">📋</div>
                    <p className="text-sm">Form preview placeholder</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="md:order-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-[#4A90E2] mb-6">
                    <span className="text-[#4A90E2] font-bold text-xl">STEP 2</span>
                  </div>
                  <h3 className="text-[32px] font-bold text-[#2b3d4f] mb-6 leading-tight">
                    We negotiate better rates on your behalf
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    These aren't discount agents. We bring you the best, full-service agents from major brands and brokerages nationwide. Since we send these agents more business at zero upfront cost to them, they're willing to pass part of that savings along to you.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 h-80 flex items-center justify-center md:order-1">
                  <div className="text-center text-gray-400">
                    <div className="text-6xl mb-4">🤝</div>
                    <p className="text-sm">Negotiation visual placeholder</p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-[#4A90E2] mb-6">
                    <span className="text-[#4A90E2] font-bold text-xl">STEP 3</span>
                  </div>
                  <h3 className="text-[32px] font-bold text-[#2b3d4f] mb-6 leading-tight">
                    Compare agents and cash offers
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Review your personalized agent matches and compare them with instant cash offers from trusted buyers. Choose the option that works best for you - whether that's working with a top agent or getting a fast cash sale.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 h-80 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="text-6xl mb-4">⚖️</div>
                    <p className="text-sm">Comparison chart placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="bg-[#22c55e] text-white py-20">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-[40px] font-bold mb-4">Ready to sell your Las Vegas house?</h2>
            <p className="text-xl mb-8">Get your free, no-obligation cash offer today</p>

            <button className="bg-white text-[#22c55e] hover:bg-gray-100 font-bold px-10 py-4 rounded text-lg transition-colors mb-6 inline-block">
              Get Started
            </button>

            <p className="text-lg">
              Or call us: <a href="tel:702-718-6934" className="font-bold hover:underline">(702) 718-6934</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
