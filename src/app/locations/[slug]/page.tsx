/**
 * Dynamic location pages
 * Generates static pages for all locations at build time
 */

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ContentBlock from '@/components/ContentBlock'
import LocationInfo from '@/components/LocationInfo'
import { getPageData, getAllPageSlugs } from '@/lib/content'
import { generateMetadata as genMeta, generateLocalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema, generateSchemaScript } from '@/lib/seo'

interface Props {
  params: Promise<{ slug: string }>
}

// Generate static params for all location pages
export async function generateStaticParams() {
  const slugs = await getAllPageSlugs('locations')
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const pageData = await getPageData('locations', slug)

  if (!pageData) {
    return {
      title: 'Page Not Found',
    }
  }

  return genMeta(pageData)
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const pageData = await getPageData('locations', slug)

  if (!pageData) {
    notFound()
  }

  // Generate schema markup
  const schemas = [
    generateLocalBusinessSchema(pageData),
    generateBreadcrumbSchema(`/locations/${slug}`, pageData.seo.title),
    pageData.faqs && pageData.faqs.length > 0 ? generateFAQSchema(pageData.faqs) : null,
  ].filter(Boolean)

  return (
    <>
      {/* Schema Markup */}
      {schemas.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateSchemaScript(schemas) }}
        />
      )}

      <Header />

      <main className="bg-white">
        {/* Hero Section */}
        {pageData.hero && <HeroSection hero={pageData.hero} />}

        {/* Location Info */}
        {pageData.location && (
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-5xl">
              <LocationInfo location={pageData.location} />
            </div>
          </section>
        )}

        {/* Dynamic Content Sections */}
        {pageData.sections.map((section, idx) => (
          <ContentBlock
            key={idx}
            section={section}
            faqs={pageData.faqs}
            testimonials={pageData.testimonials}
          />
        ))}
      </main>

      <Footer />
    </>
  )
}
