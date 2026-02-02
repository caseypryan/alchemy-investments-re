# Content Architecture Documentation

## Overview

This project uses a JSON-based content management system for scalable SEO-optimized page generation. Instead of creating 110+ individual page files, we use:

- **JSON content files** - Structured page data
- **Dynamic routing** - Next.js `[slug]` patterns
- **Automated sitemap** - Generated from content files
- **Reusable components** - Template-based rendering

## Directory Structure

```
alchemy_investments_re/
├── .claude/                      # Claude Code configuration
│   ├── agents/                   # Custom agents
│   └── commands/                 # Custom commands
│
├── config/                       # Site configuration
│   ├── business.config.json      # Business information
│   ├── integrations.config.json  # Third-party integrations
│   ├── onboarding-checklist.json # Project progress tracking
│   └── site.config.json          # Site-level settings
│
├── content/                      # JSON content files
│   ├── blog/
│   │   ├── index.json           # Blog post index
│   │   └── posts/               # Individual blog posts
│   │       └── *.json
│   ├── locations/               # Location pages
│   │   └── *.json               # henderson.json, las-vegas.json, etc.
│   ├── services/                # Service pages
│   │   └── *.json               # stop-foreclosure.json, etc.
│   ├── neighborhoods/           # Neighborhood pages
│   │   └── *.json
│   └── data/                    # Shared data
│       ├── keywords.json        # SEO keywords
│       ├── navigation.json      # Site navigation
│       └── site-config.json     # Additional config
│
├── docs/                        # Documentation
│   ├── screenshots/             # Screenshots for reference
│   └── *.md                     # Documentation files
│
├── scripts/                     # Utility scripts
│   └── migrate-pages.js         # Content migration script
│
├── seo/                         # SEO planning documents
│   └── pages/                   # Per-page SEO plans
│
├── src/
│   ├── app/
│   │   ├── locations/[slug]/    # Dynamic location pages
│   │   ├── services/[slug]/     # Dynamic service pages
│   │   ├── neighborhoods/[slug]/ # Dynamic neighborhood pages
│   │   ├── blog/[slug]/         # Dynamic blog pages (to be converted)
│   │   ├── sitemap.ts           # Dynamic sitemap generation
│   │   └── ...                  # Static pages
│   │
│   ├── components/              # React components
│   │   ├── ContentBlock.tsx     # Generic content renderer
│   │   ├── HeroSection.tsx      # Hero sections
│   │   ├── BenefitsList.tsx     # Benefits grid
│   │   ├── ProcessSteps.tsx     # Process steps
│   │   ├── NeighborhoodList.tsx # Neighborhood listings
│   │   ├── TestimonialCard.tsx  # Testimonials
│   │   ├── LocalFAQ.tsx         # FAQ accordion
│   │   └── LocationInfo.tsx     # Location info cards
│   │
│   ├── lib/
│   │   ├── content.ts           # Content loading utilities
│   │   ├── seo.ts              # SEO metadata generators
│   │   └── schema.ts           # Schema.org markup
│   │
│   └── types/
│       └── content.ts           # TypeScript type definitions
```

## Content File Structure

### Location Page Example

```json
{
  "slug": "henderson",
  "type": "location",
  "seo": {
    "title": "Sell Your House Fast in Henderson, NV | Cash Offers",
    "description": "Get a fair cash offer for your Henderson home...",
    "keywords": ["sell house fast Henderson", "..."],
    "canonical": "https://alchemyinvestmentsre.com/locations/henderson"
  },
  "hero": {
    "heading": "Sell Your Henderson Home Fast for Cash",
    "subheading": "Get a cash offer in 24 hours...",
    "cta": "Get Your Cash Offer",
    "ctaLink": "/#hero-form"
  },
  "location": {
    "city": "Henderson",
    "state": "Nevada",
    "stateAbbr": "NV",
    "zipCodes": ["89002", "89009", "..."],
    "neighborhoods": ["Green Valley", "..."],
    "population": 320189,
    "medianHomePrice": "$475,000",
    "coordinates": {
      "latitude": 36.0395,
      "longitude": -114.9817
    }
  },
  "sections": [
    {
      "type": "intro",
      "heading": "Why Choose Us",
      "content": "Long form content..."
    },
    {
      "type": "benefits",
      "heading": "Benefits",
      "items": [
        {
          "icon": "Clock",
          "title": "Fast Cash Offers",
          "description": "Get an offer in 24 hours"
        }
      ]
    },
    {
      "type": "process",
      "heading": "How It Works",
      "items": [
        {
          "step": 1,
          "title": "Contact Us",
          "description": "Tell us about your property"
        }
      ]
    },
    {
      "type": "neighborhoods",
      "heading": "We Buy in All Neighborhoods",
      "neighborhoods": [
        {
          "name": "Green Valley",
          "description": "Master-planned community..."
        }
      ]
    },
    {
      "type": "faqs",
      "heading": "Frequently Asked Questions"
    },
    {
      "type": "richtext",
      "heading": "Additional Information",
      "html": "<p>HTML content here...</p>"
    },
    {
      "type": "cta",
      "heading": "Ready to Sell?",
      "content": "Get started today",
      "items": [
        {
          "cta": "Get Your Offer",
          "ctaLink": "/#hero-form"
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "How quickly can you buy my house?",
      "answer": "We can close in as little as 7 days..."
    }
  ],
  "testimonials": [
    {
      "name": "John Doe",
      "location": "Henderson, NV",
      "rating": 5,
      "text": "Great experience!",
      "date": "2024-01-15"
    }
  ],
  "migration": {
    "oldUrl": "https://old-site.com/henderson",
    "redirectFrom": ["/old-henderson-url"],
    "lastModified": "2024-01-31",
    "priority": 0.9,
    "changeFrequency": "monthly"
  }
}
```

### Service Page Example

Similar structure but focused on a specific service (e.g., stop-foreclosure.json):

```json
{
  "slug": "stop-foreclosure",
  "type": "service",
  "seo": { ... },
  "hero": { ... },
  "sections": [ ... ],
  "faqs": [ ... ],
  "testimonials": [ ... ],
  "migration": { ... }
}
```

### Blog Post Example

```json
{
  "slug": "sell-house-fast-las-vegas",
  "title": "How to Sell Your House Fast in Las Vegas",
  "excerpt": "Complete guide...",
  "category": "Selling a Home",
  "author": "Alchemy Investments RE",
  "publishedAt": "2026-01-31T00:00:00",
  "updatedAt": "2026-01-31T00:00:00",
  "readTime": "10 min read",
  "featured": true,
  "content": "<h2>HTML content here...</h2>",
  "seo": { ... }
}
```

## Content Section Types

The `sections` array supports these types:

- **intro** - Introductory text with heading and content
- **benefits** - Grid of benefits with icons
- **process** - Numbered process steps
- **neighborhoods** - List of neighborhoods served
- **testimonials** - Customer testimonials
- **faqs** - Expandable FAQ items
- **richtext** - Custom HTML content
- **cta** - Call-to-action section

## How Dynamic Pages Work

### 1. generateStaticParams()

Next.js generates static pages at build time:

```typescript
export async function generateStaticParams() {
  const slugs = await getAllPageSlugs('locations')
  return slugs.map((slug) => ({ slug }))
}
```

This reads all JSON files in `content/locations/` and creates a static page for each.

### 2. generateMetadata()

SEO metadata is generated from the JSON file:

```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pageData = await getPageData('locations', params.slug)
  return genMeta(pageData) // Generates title, description, OG tags, etc.
}
```

### 3. Page Component

The page component loads the JSON and renders it:

```typescript
export default async function LocationPage({ params }: Props) {
  const pageData = await getPageData('locations', params.slug)

  return (
    <>
      {pageData.hero && <HeroSection hero={pageData.hero} />}
      {pageData.sections.map((section, idx) => (
        <ContentBlock key={idx} section={section} faqs={pageData.faqs} testimonials={pageData.testimonials} />
      ))}
    </>
  )
}
```

## Content Loading Functions

Located in `src/lib/content.ts`:

- `getPagesByCategory(category)` - Load all pages in a category
- `getPageData(category, slug)` - Load a specific page
- `getAllPageSlugs(category)` - Get all slugs for static generation
- `getAllPages()` - Get all pages across all categories (for sitemap)
- `getBlogPosts()` - Load all blog posts
- `getBlogPost(slug)` - Load a specific blog post
- `getBusinessConfig()` - Load business config
- `getSiteConfig()` - Load site config

## SEO Utilities

Located in `src/lib/seo.ts`:

- `generateMetadata(pageData)` - Complete metadata object
- `getCanonicalUrl(path)` - Generate canonical URLs
- `generateBreadcrumbSchema(path, title)` - Breadcrumb schema
- `generateLocalBusinessSchema(pageData)` - LocalBusiness schema
- `generateArticleSchema(post)` - Article schema for blog posts
- `generateFAQSchema(faqs)` - FAQ schema
- `generateServiceSchema(pageData)` - Service schema
- `generateSchemaScript(schemas)` - Combine schemas into one script

## Migration Workflow

### Step 1: Prepare URLs List

Create `scripts/urls.csv`:

```csv
url,category,slug,priority
https://old-site.com/henderson,locations,henderson,0.9
https://old-site.com/summerlin,locations,summerlin,0.9
https://old-site.com/stop-foreclosure,services,stop-foreclosure,0.8
```

### Step 2: Generate Placeholder JSON Files

```bash
node scripts/migrate-pages.js
```

This creates placeholder JSON files for all pages.

### Step 3: Enhance with Claude Code Skills

For each page:

```bash
# Scrape old site content
/scrape-site https://old-site.com/henderson

# Analyze SEO for target keywords
/analyze-seo "sell house fast Henderson"

# Generate optimized titles and descriptions
/generate-keyword-plan "sell house fast Henderson"
```

### Step 4: Manually Refine

- Review generated JSON files
- Add unique content (min 1,500 words per page)
- Include local data, testimonials, FAQs
- Verify all fields are populated

### Step 5: Build and Test

```bash
npm run build
# Verify all 110+ pages generated successfully
```

## Sitemap Generation

The sitemap is automatically generated from all JSON files:

```typescript
// src/app/sitemap.ts
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locationSlugs = await getAllPageSlugs('locations')
  const serviceSlugs = await getAllPageSlugs('services')
  const neighborhoodSlugs = await getAllPageSlugs('neighborhoods')
  const blogSlugs = await getAllBlogSlugs()

  // Returns URLs for all pages
}
```

Sitemap URL: `https://alchemyinvestmentsre.com/sitemap.xml`

## Adding a New Page

### Method 1: Manual Creation

1. Create JSON file in appropriate category:
   ```
   content/locations/boulder-city.json
   ```

2. Use the template structure (see examples above)

3. Build will automatically include the new page

### Method 2: Using Migration Script

1. Add URL to `scripts/urls.csv`
2. Run `node scripts/migrate-pages.js`
3. Enhance the generated JSON file

## Schema Markup

Every page includes structured data:

- **Location pages**: LocalBusiness + Breadcrumb + FAQ
- **Service pages**: Service + Breadcrumb + FAQ
- **Blog posts**: Article + Breadcrumb
- **All pages**: Open Graph + Twitter Cards

## Performance Considerations

- All pages are **statically generated** at build time
- No runtime database queries
- Fast page loads (pre-rendered HTML)
- Excellent SEO (crawlers see complete HTML)

## SEO Best Practices

1. **Unique content**: Each page has 1,500+ unique words
2. **Optimized metadata**: Titles (50-60 chars), descriptions (150-160 chars)
3. **Keyword targeting**: Each page targets specific keywords
4. **Internal linking**: Related pages link to each other
5. **Schema markup**: Structured data on every page
6. **Canonical URLs**: Prevent duplicate content issues
7. **Mobile-friendly**: Responsive design
8. **Fast loading**: Static pages, optimized images

## Monitoring

After deployment:

1. Submit sitemap to Google Search Console
2. Request indexing for top 20 priority pages
3. Monitor "Coverage" report in GSC
4. Track keyword rankings with `/analyze-seo`
5. Monitor organic traffic in Google Analytics
6. Fix any crawl errors or 404s

## Next Steps

- [ ] Export 110 URLs from old site's GSC
- [ ] Create urls.csv file
- [ ] Run migration script
- [ ] Scrape content with /scrape-site
- [ ] Optimize with /analyze-seo and /generate-keyword-plan
- [ ] Manually enhance JSON files
- [ ] Test build locally
- [ ] Deploy to staging
- [ ] Deploy to production
- [ ] Submit sitemap to GSC
