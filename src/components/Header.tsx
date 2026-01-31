'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-[60px]">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-4">
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
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

            {/* Logo */}
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <Image
                src="/logo.png"
                alt="Alchemy Investments"
                width={180}
                height={50}
                priority
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-[#333] hover:text-[#22c55e] transition-colors font-normal text-[15px]">
              How It Works
            </Link>
            <Link href="/our-agents" className="text-[#333] hover:text-[#22c55e] transition-colors font-normal text-[15px]">
              Our Agents
            </Link>
            <Link href="/faq" className="text-[#333] hover:text-[#22c55e] transition-colors font-normal text-[15px]">
              FAQ
            </Link>
            <Link href="/blog" className="text-[#333] hover:text-[#22c55e] transition-colors font-normal text-[15px]">
              Reviews
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:702-718-6934"
              className="hidden md:inline-block text-[#22c55e] font-semibold text-[15px] hover:text-[#16a34a] transition-colors"
            >
              (702) 718-6934
            </a>
            <a
              href="#contact"
              className="bg-[#4A90E2] hover:bg-[#3A80D2] text-white font-semibold px-6 py-2.5 rounded text-[15px] transition-colors"
            >
              Find Agents
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 overflow-y-auto">
          <div className="px-6 py-8">
            {/* HOME SELLING */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('selling')}
                className="w-full flex justify-between items-center text-[#4A90E2] uppercase text-sm font-semibold tracking-wider mb-4"
              >
                HOME SELLING
                <svg
                  className={`w-5 h-5 transition-transform ${openSection === 'selling' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'selling' && (
                <div className="pl-4 space-y-4">
                  <Link href="/#how-it-works" className="block text-gray-700 hover:text-[#22c55e]" onClick={() => setMobileMenuOpen(false)}>
                    Compare ways to sell
                  </Link>
                  <Link href="/sell-guide" className="block text-gray-700 hover:text-[#22c55e]" onClick={() => setMobileMenuOpen(false)}>
                    Get guidance
                  </Link>
                  <Link href="/selling-costs" className="block text-gray-700 hover:text-[#22c55e]" onClick={() => setMobileMenuOpen(false)}>
                    Home selling costs
                  </Link>
                </div>
              )}
            </div>

            {/* HOME BUYING */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('buying')}
                className="w-full flex justify-between items-center text-[#4A90E2] uppercase text-sm font-semibold tracking-wider mb-4"
              >
                HOME BUYING
                <svg
                  className={`w-5 h-5 transition-transform ${openSection === 'buying' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'buying' && (
                <div className="pl-4 space-y-4">
                  <Link href="/buying-guide" className="block text-gray-700 hover:text-[#22c55e]" onClick={() => setMobileMenuOpen(false)}>
                    Get guidance
                  </Link>
                  <Link href="/invest" className="block text-gray-700 hover:text-[#22c55e]" onClick={() => setMobileMenuOpen(false)}>
                    Invest in real estate
                  </Link>
                </div>
              )}
            </div>

            {/* ABOUT */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('about')}
                className="w-full flex justify-between items-center text-[#4A90E2] uppercase text-sm font-semibold tracking-wider mb-4"
              >
                ABOUT
                <svg
                  className={`w-5 h-5 transition-transform ${openSection === 'about' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'about' && (
                <div className="pl-4 space-y-4">
                  <Link href="/about" className="block text-gray-700 hover:text-[#22c55e]" onClick={() => setMobileMenuOpen(false)}>
                    About
                  </Link>
                  <Link href="/our-agents" className="block text-gray-700 hover:text-[#22c55e]" onClick={() => setMobileMenuOpen(false)}>
                    Our Agents
                  </Link>
                </div>
              )}
            </div>

            {/* FOR PROFESSIONALS */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('professionals')}
                className="w-full flex justify-between items-center text-[#4A90E2] uppercase text-sm font-semibold tracking-wider mb-4"
              >
                FOR PROFESSIONALS
                <svg
                  className={`w-5 h-5 transition-transform ${openSection === 'professionals' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'professionals' && (
                <div className="pl-4 space-y-4">
                  <Link href="/for-agents" className="block text-gray-700 hover:text-[#22c55e]" onClick={() => setMobileMenuOpen(false)}>
                    For agents
                  </Link>
                  <Link href="/for-lenders" className="block text-gray-700 hover:text-[#22c55e]" onClick={() => setMobileMenuOpen(false)}>
                    For lenders
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
