import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          // Orphan/demo pages from previous site template — not part of current site
          '/about-this-demo/',
          '/homepage-1/',
          '/homepage-2/',
          '/homepage-3/',
          '/compare-properties/',
          '/feature/',
          '/category/',
          '/property-type/',
          '/label/',
          '/property/',
          '/agent/',
        ],
      },
      // Allow AI citation crawlers (real-time browsing/search — drives brand visibility)
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      // Block AI training crawlers (no citation benefit, just model training)
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'ClaudeBot', disallow: '/' },
      { userAgent: 'Google-Extended', disallow: '/' },
      { userAgent: 'Bytespider', disallow: '/' },
      { userAgent: 'CCBot', disallow: '/' },
    ],
    sitemap: 'https://alchemyinvestmentsre.com/sitemap.xml',
  }
}
