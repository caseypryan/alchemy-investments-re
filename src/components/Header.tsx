import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo and License */}
          <div>
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <h1 className="text-2xl font-heading">Alchemy Investments RE</h1>
              <p className="text-xs text-gray-300">License: S.0184768</p>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-secondary-light transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-secondary-light transition-colors">
              About
            </Link>
            <Link href="/how-it-works" className="hover:text-secondary-light transition-colors">
              How It Works
            </Link>
            <Link href="/faq" className="hover:text-secondary-light transition-colors">
              FAQ
            </Link>
            <Link href="/blog" className="hover:text-secondary-light transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-secondary-light transition-colors">
              Contact
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="text-right">
            <a
              href="tel:702-718-6934"
              className="text-xl font-bold hover:text-secondary-light transition-colors block"
            >
              702-718-6934
            </a>
            <p className="text-xs text-gray-300">Mon-Fri: 9am - 6pm</p>
          </div>
        </div>
      </div>
    </header>
  )
}
