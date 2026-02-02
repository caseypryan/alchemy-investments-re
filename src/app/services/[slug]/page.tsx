/**
 * Dynamic service pages
 * Generates static pages for all services at build time
 */

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ContentBlock from '@/components/ContentBlock'
import { getPageData, getAllPageSlugs } from '@/lib/content'
import { generateMetadata as genMeta, generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, generateSchemaScript } from '@/lib/seo'

interface Props {
  params: Promise<{ slug: string }>
}

// Generate static params for all service pages
export async function generateStaticParams() {
  const slugs = await getAllPageSlugs('services')
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const pageData = await getPageData('services', slug)

  if (!pageData) {
    return {
      title: 'Page Not Found',
    }
  }

  return genMeta(pageData)
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const pageData = await getPageData('services', slug)

  if (!pageData) {
    notFound()
  }

  // Generate schema markup
  const schemas = [
    generateServiceSchema(pageData),
    generateBreadcrumbSchema(`/services/${slug}`, pageData.seo.title),
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
