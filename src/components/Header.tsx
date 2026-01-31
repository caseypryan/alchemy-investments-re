import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div>
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <span className="text-2xl font-bold text-gray-900">Alchemy Investments</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-base">
              How It Works
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-base">
              FAQ
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-base">
              Reviews
            </Link>
          </nav>

          {/* Contact Button */}
          <div>
            <a
              href="tel:702-718-6934"
              className="hidden md:inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2.5 rounded-md transition-colors text-sm"
            >
              (702) 718-6934
            </a>
            <a
              href="tel:702-718-6934"
              className="md:hidden text-cyan-600 font-semibold"
            >
              Call
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
