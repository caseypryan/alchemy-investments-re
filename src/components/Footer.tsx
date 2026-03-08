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
                <Link href="/how-it-works" className="text-gray-400 hover:text-[#22c55e] transition-colors">
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
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#22c55e] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#22c55e] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-[#22c55e] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-[#22c55e] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="font-bold text-lg mb-4">We Buy Houses In</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Las Vegas', href: '/locations/las-vegas' },
                { name: 'Henderson', href: '/locations/henderson' },
                { name: 'North Las Vegas', href: '/locations/north-las-vegas' },
                { name: 'Summerlin', href: '/locations/summerlin' },
                { name: 'Spring Valley', href: '/locations/spring-valley' },
                { name: 'Boulder City', href: '/locations/boulder-city' },
                { name: 'Pahrump', href: '/locations/pahrump' },
              ].map((area) => (
                <li key={area.name}>
                  <Link href={area.href} className="text-gray-400 hover:text-[#22c55e] transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
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
          <p>
            &copy; {currentYear} Alchemy Investments RE. All rights reserved. | Nevada RE License
            S.0184768 |{' '}
            <Link href="/privacy-policy" className="hover:text-[#22c55e] transition-colors">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href="/terms" className="hover:text-[#22c55e] transition-colors">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
