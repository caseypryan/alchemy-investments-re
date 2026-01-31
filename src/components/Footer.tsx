import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo-white.png"
                alt="Alchemy Investments"
                width={180}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <div className="text-sm text-gray-400 space-y-1">
              <p>Alchemy Investments</p>
              <p>8978 Spanish Ridge</p>
              <p>Las Vegas, NV 89148</p>
              <p className="mt-3">
                <a href="tel:702-718-6934" className="text-[#22c55e] hover:text-white font-semibold">
                  (702) 718-6934
                </a>
              </p>
              <p>
                <a href="mailto:Casey@AlchemyInvestmentsRE.com" className="text-gray-400 hover:text-[#22c55e]">
                  Casey@AlchemyInvestmentsRE.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#how-it-works" className="text-gray-400 hover:text-[#22c55e] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-[#22c55e] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-[#22c55e] transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-[#22c55e] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="font-bold text-lg mb-4">We Buy Houses In</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Las Vegas</li>
              <li>Henderson</li>
              <li>North Las Vegas</li>
              <li>Summerlin</li>
              <li>Boulder City</li>
            </ul>
          </div>

          {/* License Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Licensed & Insured</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>Nevada Real Estate License</p>
              <p className="font-semibold text-white">S.0184768</p>
              <p className="mt-4">BBB Accredited Business</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-yellow-500">★★★★★</span>
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Alchemy Investments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
