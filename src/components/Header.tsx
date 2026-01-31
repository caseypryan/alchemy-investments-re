import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div>
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <h1 className="text-2xl font-bold text-blue-600">Alchemy Investments</h1>
              <p className="text-xs text-gray-500">Licensed RE Broker</p>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              FAQ
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Contact Button */}
          <div>
            <a
              href="tel:702-718-6934"
              className="hidden md:inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              702-718-6934
            </a>
            <a
              href="tel:702-718-6934"
              className="md:hidden text-blue-600 font-bold text-lg"
            >
              Call
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
