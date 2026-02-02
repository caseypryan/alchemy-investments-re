/**
 * Content type definitions for dynamic page generation
 */

export interface SEOMetadata {
  title: string
  description: string
  keywords: string[]
  canonical?: string
  ogImage?: string
  ogType?: string
}

export interface HeroContent {
  heading: string
  subheading: string
  cta: string
  ctaLink?: string
  backgroundImage?: string
}

export interface LocationData {
  city: string
  state: string
  stateAbbr: string
  zipCodes?: string[]
  neighborhoods?: string[]
  population?: number
  medianHomePrice?: string
  coordinates?: {
    latitude: number
    longitude: number
  }
}

export interface NeighborhoodData {
  name: string
  city: string
  state: string
  description?: string
  population?: number
  medianHomePrice?: string
  yearEstablished?: number
  keyAmenities?: string[]
  boundaries?: {
    north?: string
    south?: string
    east?: string
    west?: string
  }
  demographics?: {
    medianAge?: number
    medianIncome?: string
    homeownershipRate?: string
  }
}

export interface BenefitItem {
  icon?: string
  title: string
  description: string
}

export interface TestimonialItem {
  name: string
  location?: string
  rating: number
  text: string
  date?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ContentSection {
  type: 'intro' | 'benefits' | 'neighborhoods' | 'process' | 'testimonials' | 'faqs' | 'cta' | 'richtext'
  heading?: string
  subheading?: string
  content?: string
  items?: any[]
  html?: string
  neighborhoods?: Array<{
    name: string
    description: string
  }>
}

export interface SchemaMarkup {
  type: string
  [key: string]: any
}

export interface MigrationData {
  oldUrl?: string
  redirectFrom?: string[]
  lastModified?: string
  priority?: number
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

export interface PageContent {
  slug: string
  type: 'location' | 'service' | 'neighborhood' | 'blog'
  seo: SEOMetadata
  hero?: HeroContent
  location?: LocationData
  neighborhood?: NeighborhoodData
  parentLocation?: string
  sections: ContentSection[]
  testimonials?: TestimonialItem[]
  faqs?: FAQItem[]
  schema?: SchemaMarkup[]
  migration?: MigrationData
  publishedAt?: string
  updatedAt?: string
  author?: string
  category?: string
  featured?: boolean
  readTime?: string
  nearbyAreas?: Array<{
    name: string
    slug: string
    type: string
  }>
  relatedServices?: Array<{
    name: string
    slug: string
  }>
}

export interface PageIndex {
  slug: string
  title: string
  type: string
  priority: number
  lastModified: string
}

export interface ContentCategory {
  name: string
  slug: string
  pages: PageIndex[]
}

export interface SitePages {
  categories: ContentCategory[]
  totalPages: number
  lastUpdated: string
}

// Blog post specific types
export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  publishedAt: string
  updatedAt: string
  readTime: string
  featured: boolean
  content: string
  seo: SEOMetadata
}

export interface BlogIndex {
  posts: Array<{
    slug: string
    title: string
    excerpt: string
    category: string
    publishedAt: string
    featured: boolean
  }>
  categories: string[]
  totalPosts: number
}
