/**
 * Generic content block renderer
 * Renders different content section types based on the section.type
 */

import { ContentSection } from '@/types/content'
import HeroSection from './HeroSection'
import BenefitsList from './BenefitsList'
import ProcessSteps from './ProcessSteps'
import NeighborhoodList from './NeighborhoodList'
import LocalFAQ from './LocalFAQ'
import TestimonialCard from './TestimonialCard'

interface ContentBlockProps {
  section: ContentSection
  faqs?: Array<{ question: string; answer: string }>
  testimonials?: Array<{
    name: string
    location?: string
    rating: number
    text: string
  }>
}

export default function ContentBlock({ section, faqs, testimonials }: ContentBlockProps) {
  switch (section.type) {
    case 'intro':
      return (
        <section className="py-16">
          <div className="container-custom max-w-5xl">
            {section.heading && (
              <h2 className="text-4xl font-heading mb-6">{section.heading}</h2>
            )}
            {section.subheading && (
              <p className="text-xl text-gray-600 mb-8">{section.subheading}</p>
            )}
            {section.content && (
              <div className="prose prose-lg max-w-none">
                {section.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </section>
      )

    case 'benefits':
      return (
        <section className="py-16 bg-gray-50">
          <div className="container-custom max-w-6xl">
            {section.heading && (
              <h2 className="text-4xl font-heading mb-12 text-center">{section.heading}</h2>
            )}
            <BenefitsList items={section.items || []} />
          </div>
        </section>
      )

    case 'process':
      return (
        <section className="py-16">
          <div className="container-custom max-w-5xl">
            {section.heading && (
              <h2 className="text-4xl font-heading mb-12 text-center">{section.heading}</h2>
            )}
            <ProcessSteps steps={section.items || []} />
          </div>
        </section>
      )

    case 'neighborhoods':
      return (
        <section className="py-16 bg-gray-50">
          <div className="container-custom max-w-6xl">
            {section.heading && (
              <h2 className="text-4xl font-heading mb-6 text-center">{section.heading}</h2>
            )}
            {section.content && (
              <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                {section.content}
              </p>
            )}
            <NeighborhoodList neighborhoods={section.neighborhoods || []} />
          </div>
        </section>
      )

    case 'testimonials':
      return (
        <section className="py-16">
          <div className="container-custom max-w-6xl">
            {section.heading && (
              <h2 className="text-4xl font-heading mb-12 text-center">{section.heading}</h2>
            )}
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials?.map((testimonial, idx) => (
                <TestimonialCard key={idx} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )

    case 'faqs':
      return (
        <section className="py-16 bg-gray-50">
          <div className="container-custom max-w-4xl">
            {section.heading && (
              <h2 className="text-4xl font-heading mb-12 text-center">{section.heading}</h2>
            )}
            <LocalFAQ faqs={faqs || []} />
          </div>
        </section>
      )

    case 'richtext':
      return (
        <section className="py-16">
          <div className="container-custom max-w-5xl">
            {section.heading && (
              <h2 className="text-4xl font-heading mb-8">{section.heading}</h2>
            )}
            {section.html && (
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: section.html }}
              />
            )}
          </div>
        </section>
      )

    case 'cta':
      return (
        <section className="py-16 bg-blue-600 text-white">
          <div className="container-custom max-w-4xl text-center">
            {section.heading && (
              <h2 className="text-4xl font-heading mb-6">{section.heading}</h2>
            )}
            {section.content && <p className="text-xl mb-8">{section.content}</p>}
            {section.items && section.items[0] && (
              <a
                href={section.items[0].ctaLink || '/#hero-form'}
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
              >
                {section.items[0].cta || 'Get Started'}
              </a>
            )}
          </div>
        </section>
      )

    default:
      return null
  }
}
