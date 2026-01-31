import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-[60px]">
          {/* Logo */}
          <div>
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-[#333] hover:text-[#22c55e] transition-colors font-normal text-[15px]">
              How It Works
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
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold px-6 py-2.5 rounded text-[15px] transition-colors"
            >
              Get Cash Offer
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
