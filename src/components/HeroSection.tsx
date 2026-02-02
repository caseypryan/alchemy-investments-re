/**
 * Hero section component for location/service pages
 */

import { HeroContent } from '@/types/content'

interface HeroSectionProps {
  hero: HeroContent
}

export default function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
      <div className="container-custom max-w-5xl text-center">
        <h1 className="text-5xl md:text-6xl font-heading mb-6">
          {hero.heading}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          {hero.subheading}
        </p>
        <a
          href={hero.ctaLink || '/#hero-form'}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
        >
          {hero.cta}
        </a>
      </div>
    </section>
  )
}
