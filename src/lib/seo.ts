/**
 * SEO utility functions for metadata generation
 */

import { Metadata } from 'next'
import { PageContent, SEOMetadata, BlogPost } from '@/types/content'
import { getSiteConfig } from './content'

/**
 * Generate complete metadata object from page data
 */
export function generateMetadata(pageData: PageContent | BlogPost): Metadata {
  const siteConfig = getSiteConfig()
  const baseUrl = siteConfig.siteUrl

  return {
    title: pageData.seo.title,
    description: pageData.seo.description,
    keywords: pageData.seo.keywords,
    authors: 'author' in pageData && pageData.author ? [{ name: pageData.author }] : undefined,
    openGraph: {
      title: pageData.seo.title,
      description: pageData.seo.description,
      url: pageData.seo.canonical || `${baseUrl}/${pageData.slug}`,
      siteName: siteConfig.siteName,
      images: [
        {
          url: pageData.seo.ogImage || siteConfig.seo.ogImage,
          width: 1200,
          height: 630,
          alt: pageData.seo.title,
        },
      ],
      locale: 'en_US',
      type: (pageData.seo.ogType as 'article' | 'website') || ('type' in pageData && pageData.type === 'blog' ? 'article' : 'website'),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.seo.title,
      description: pageData.seo.description,
      images: [pageData.seo.ogImage || siteConfig.seo.ogImage],
    },
    alternates: {
      canonical: pageData.seo.canonical || `${baseUrl}/${pageData.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

/**
 * Generate canonical URL
 */
export function getCanonicalUrl(path: string): string {
  const siteConfig = getSiteConfig()
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, '')
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${cleanPath}`
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(path: string, title: string) {
  const siteConfig = getSiteConfig()
  const baseUrl = siteConfig.siteUrl

  const pathParts = path.split('/').filter(Boolean)
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl,
    },
  ]

  let currentPath = ''
  pathParts.forEach((part, index) => {
    currentPath += `/${part}`
    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: index === pathParts.length - 1 ? title : part.charAt(0).toUpperCase() + part.slice(1),
      item: `${baseUrl}${currentPath}`,
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}

/**
 * Generate LocalBusiness schema for location pages
 */
export function generateLocalBusinessSchema(pageData: PageContent) {
  const siteConfig = getSiteConfig()
  const businessConfig = require('../../config/business.config.json')

  if (!pageData.location) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: businessConfig.name,
    description: pageData.seo.description,
    url: getCanonicalUrl(`/locations/${pageData.slug}`),
    telephone: businessConfig.contact.phone,
    email: businessConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.state,
      postalCode: businessConfig.address.zip,
      addressCountry: businessConfig.address.country,
    },
    areaServed: {
      '@type': 'City',
      name: pageData.location.city,
      addressRegion: pageData.location.stateAbbr,
    },
    geo: pageData.location.coordinates ? {
      '@type': 'GeoCoordinates',
      latitude: pageData.location.coordinates.latitude,
      longitude: pageData.location.coordinates.longitude,
    } : undefined,
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  }
}

/**
 * Generate Article schema for blog posts
 */
export function generateArticleSchema(post: BlogPost) {
  const siteConfig = getSiteConfig()

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.seo.ogImage || siteConfig.seo.ogImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.siteUrl}${siteConfig.logo.src}`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getCanonicalUrl(`/blog/${post.slug}`),
    },
  }
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate Service schema
 */
export function generateServiceSchema(pageData: PageContent) {
  const siteConfig = getSiteConfig()
  const businessConfig = require('../../config/business.config.json')

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: pageData.seo.title,
    provider: {
      '@type': 'RealEstateAgent',
      name: businessConfig.name,
      telephone: businessConfig.contact.phone,
      url: siteConfig.siteUrl,
    },
    areaServed: businessConfig.geo.serviceArea.map((area: string) => ({
      '@type': 'City',
      name: area,
    })),
    description: pageData.seo.description,
  }
}

/**
 * Combine multiple schemas into one script tag
 */
export function generateSchemaScript(schemas: any[]): string {
  const validSchemas = schemas.filter(Boolean)

  if (validSchemas.length === 0) return ''

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': validSchemas,
  }

  return JSON.stringify(schemaGraph)
}
