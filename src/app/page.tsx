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
        <section className="relative bg-gradient-to-br from-[#4A90E2] via-[#5B9FE3] to-[#7CB3E8] min-h-[550px] flex items-center">
          {/* Background houses image at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80')] bg-cover bg-bottom opacity-80" />

          {/* White gradient overlay on left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />

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
                  SELL YOUR HOUSE
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
                  HOW IT WORKS
                </button>
              </div>

              {/* Main Headline */}
              <h1 className="text-[44px] font-extrabold text-[#1a1a1a] leading-[1.2] mb-8">
                Sell your Las Vegas house fast.
                <br />
                Get a fair cash offer today.
              </h1>

              {/* Search/Form Bar */}
              <div className="bg-white rounded-md shadow-xl flex mb-6 overflow-hidden">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Enter your property address"
                    className="w-full px-5 py-4 text-base focus:outline-none border-none"
                  />
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <button className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold px-8 py-4 text-base transition-colors">
                  Get My Cash Offer
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

        {/* Stats Bar */}
        <section className="bg-[#166534] text-white py-5">
          <div className="container mx-auto px-6 text-center">
            <p className="text-[16px]">
              We've helped over <strong>500 Las Vegas homeowners</strong> sell their houses fast. More than <strong>$50M</strong> in homes purchased.
            </p>
          </div>
        </section>

        {/* Trust Logos Bar */}
        <section className="bg-[#f8f8f8] py-12">
          <div className="container mx-auto px-6">
            <p className="text-center text-gray-600 text-lg mb-8">Trusted by 500+ Las Vegas Homeowners</p>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              <div className="text-gray-500 font-bold">BBB ACCREDITED</div>
              <div className="text-gray-500 font-bold flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span>GOOGLE REVIEWS</span>
              </div>
              <div className="text-gray-500 font-bold">NV LICENSE: S.0184768</div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-4">How It Works</h2>
              <p className="text-[18px] text-gray-600">Sell your house in 3 simple steps</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {/* Card 1 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#22c55e] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  1
                </div>
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-3">Tell Us About Your Property</h3>
                <p className="text-gray-600">
                  Fill out our simple form or give us a call. Tell us about your Las Vegas property - any condition, any situation.
                </p>
              </div>

              {/* Card 2 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#22c55e] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  2
                </div>
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">Get Your Cash Offer</h3>
                <p className="text-gray-600">
                  We'll evaluate your property and present you with a fair, no-obligation cash offer within 24 hours.
                </p>
              </div>

              {/* Card 3 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#22c55e] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  3
                </div>
                <div className="text-5xl mb-4">🔑</div>
                <h3 className="text-xl font-bold mb-3">Close On Your Timeline</h3>
                <p className="text-gray-600">
                  Accept our offer and choose your closing date. Close in as little as 7 days or whenever works for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Sell To Us Section */}
        <section className="bg-[#f5f7fa] py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-[36px] font-bold text-center mb-12">Why Sell to Alchemy Investments?</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-[#22c55e] text-3xl mb-3">✓</div>
                <h3 className="font-bold text-xl mb-2">No Fees or Commissions</h3>
                <p className="text-gray-600">Keep 100% of our offer. No agent fees, no hidden costs.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-[#22c55e] text-3xl mb-3">✓</div>
                <h3 className="font-bold text-xl mb-2">Any Condition - No Repairs Needed</h3>
                <p className="text-gray-600">We buy houses as-is. No need to fix, clean, or stage.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-[#22c55e] text-3xl mb-3">✓</div>
                <h3 className="font-bold text-xl mb-2">Fast Closing - 7 Days or Less</h3>
                <p className="text-gray-600">Choose your closing date. We can close in as little as 7 days.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-[#22c55e] text-3xl mb-3">✓</div>
                <h3 className="font-bold text-xl mb-2">No Obligation - Walk Away Anytime</h3>
                <p className="text-gray-600">Free offer with no pressure. Accept only if it works for you.</p>
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
              Get My Cash Offer →
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
