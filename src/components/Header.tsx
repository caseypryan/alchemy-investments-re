'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <Link href="/" className="hover:opacity-90 transition-opacity flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Alchemy Investments RE - Cash Home Buyers Las Vegas"
              width={180}
              height={50}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            <Link href="#how-it-works" className="text-gray-600 hover:text-navy transition-colors font-medium text-[14px]">
              How It Works
            </Link>
            <Link href="#situations" className="text-gray-600 hover:text-navy transition-colors font-medium text-[14px]">
              Situations We Help
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-navy transition-colors font-medium text-[14px]">
              FAQ
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-navy transition-colors font-medium text-[14px]">
              About
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-navy transition-colors font-medium text-[14px]">
              Blog
            </Link>
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="tel:702-718-6934"
              className="hidden md:flex items-center gap-2 text-navy font-bold text-[15px] hover:text-brand-green transition-colors"
            >
              <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (702) 718-6934
            </a>
            <a
              href="#contact"
              className="bg-brand-green hover:bg-[#16a34a] text-white font-bold px-5 py-2.5 rounded-lg text-[14px] transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
            >
              Get Cash Offer
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900 p-1 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-6 space-y-4">
            <Link href="#how-it-works" className="block text-gray-700 font-medium py-2 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>
              How It Works
            </Link>
            <Link href="#situations" className="block text-gray-700 font-medium py-2 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>
              Situations We Help
            </Link>
            <Link href="/faq" className="block text-gray-700 font-medium py-2 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            <Link href="/about" className="block text-gray-700 font-medium py-2 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/blog" className="block text-gray-700 font-medium py-2 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <div className="pt-2 space-y-3">
              <a href="tel:702-718-6934" className="flex items-center gap-2 text-navy font-bold text-lg">
                <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (702) 718-6934
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-brand-green text-white font-bold py-3 rounded-lg text-center text-base"
              >
                Get My Free Cash Offer
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
