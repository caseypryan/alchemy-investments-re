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
      // Allow AI search crawlers for citation visibility
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      // Block Gemini training (does NOT affect Google Search or AI Overviews)
      { userAgent: 'Google-Extended', disallow: '/' },
    ],
    sitemap: 'https://alchemyinvestmentsre.com/sitemap.xml',
  }
}
