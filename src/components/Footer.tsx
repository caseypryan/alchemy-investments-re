import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading mb-4">Alchemy Investments RE</h3>
            <p className="text-sm text-gray-300 mb-2">
              Licensed Real Estate Investment Brokerage
            </p>
            <p className="text-sm text-gray-300">License: S.0184768</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-secondary-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-secondary-light transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-secondary-light transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-secondary-light transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg mb-4">We Buy Houses In</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Las Vegas</li>
              <li>Henderson</li>
              <li>North Las Vegas</li>
              <li>Boulder City</li>
              <li>Pahrump</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">8978 Spanish Ridge</p>
              <p className="text-gray-300">Las Vegas, NV 89148</p>
              <p className="mt-3">
                <a
                  href="tel:702-718-6934"
                  className="text-secondary-light hover:text-white transition-colors font-semibold"
                >
                  702-718-6934
                </a>
              </p>
              <p>
                <a
                  href="mailto:Casey@AlchemyInvestmentsRE.com"
                  className="text-gray-300 hover:text-secondary-light transition-colors"
                >
                  Casey@AlchemyInvestmentsRE.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Alchemy Investments RE. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-secondary-light transition-colors">
              Privacy Policy
            </Link>
            {' | '}
            <Link href="/terms" className="hover:text-secondary-light transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
