/**
 * Dynamic neighborhood pages
 * Generates static pages for all neighborhoods at build time
 */

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ContentBlock from '@/components/ContentBlock'
import { getPageData, getAllPageSlugs } from '@/lib/content'
import { generateMetadata as genMeta, generateLocalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema, generateSchemaScript } from '@/lib/seo'

interface Props {
  params: Promise<{ slug: string }>
}

// Generate static params for all neighborhood pages
export async function generateStaticParams() {
  const slugs = await getAllPageSlugs('neighborhoods')
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const pageData = await getPageData('neighborhoods', slug)

  if (!pageData) {
    return {
      title: 'Page Not Found',
    }
  }

  return genMeta(pageData)
}

export default async function NeighborhoodPage({ params }: Props) {
  const { slug } = await params
  const pageData = await getPageData('neighborhoods', slug)

  if (!pageData) {
    notFound()
  }

  // Generate schema markup
  const schemas = [
    generateLocalBusinessSchema(pageData),
    generateBreadcrumbSchema(`/neighborhoods/${slug}`, pageData.seo.title),
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

        {/* Neighborhood Info Card */}
        {pageData.neighborhood && (
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-5xl">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  About {pageData.neighborhood.name}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Location</h3>
                    <p className="text-gray-600">
                      {pageData.neighborhood.city}, {pageData.neighborhood.state}
                    </p>
                  </div>
                  {pageData.neighborhood.medianHomePrice && (
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Median Home Price</h3>
                      <p className="text-gray-600">{pageData.neighborhood.medianHomePrice}</p>
                    </div>
                  )}
                  {pageData.neighborhood.description && (
                    <div className="md:col-span-2">
                      <h3 className="font-semibold text-gray-700 mb-2">Description</h3>
                      <p className="text-gray-600">{pageData.neighborhood.description}</p>
                    </div>
                  )}
                  {pageData.neighborhood.keyAmenities && pageData.neighborhood.keyAmenities.length > 0 && (
                    <div className="md:col-span-2">
                      <h3 className="font-semibold text-gray-700 mb-2">Key Amenities</h3>
                      <ul className="list-disc list-inside text-gray-600">
                        {pageData.neighborhood.keyAmenities.map((amenity: string, idx: number) => (
                          <li key={idx}>{amenity}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
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
