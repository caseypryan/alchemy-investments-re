import { MetadataRoute } from 'next'
import { getAllPageSlugs, getAllBlogSlugs } from '@/lib/content'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://alchemyinvestmentsre.com'

  // Static pages — lastModified reflects actual last meaningful content change
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-03-09'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-03-09'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date('2026-03-09'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-agents`,
      lastModified: new Date('2026-03-09'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date('2026-03-09'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/get-started`,
      lastModified: new Date('2026-03-09'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/speak-to-an-expert`,
      lastModified: new Date('2026-03-09'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // privacy-policy and terms are noindex — excluded from sitemap intentionally
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Dynamic location pages
  const locationSlugs = await getAllPageSlugs('locations')
  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: new Date('2026-03-09'),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Dynamic service pages
  const serviceSlugs = await getAllPageSlugs('services')
  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date('2026-03-09'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Dynamic neighborhood pages
  const neighborhoodSlugs = await getAllPageSlugs('neighborhoods')
  const neighborhoodPages: MetadataRoute.Sitemap = neighborhoodSlugs.map((slug) => ({
    url: `${baseUrl}/neighborhoods/${slug}`,
    lastModified: new Date('2026-03-09'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic blog pages
  const blogSlugs = await getAllBlogSlugs()
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2026-03-26'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...locationPages,
    ...servicePages,
    ...neighborhoodPages,
    ...blogPages,
  ]
}
