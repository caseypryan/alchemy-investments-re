# Quick Start Guide: SEO Migration

## Overview

This guide walks you through migrating all 110 pages from your old site to the new Next.js architecture.

## Prerequisites

- Node.js installed
- Access to old site's Google Search Console
- Claude Code with these skills enabled:
  - `/scrape-site` (FireCrawl MCP)
  - `/analyze-seo` (DataForSEO MCP)
  - `/generate-keyword-plan` (DataForSEO MCP)

## Step-by-Step Migration

### Step 1: Export URLs from Google Search Console (30 minutes)

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your old site property
3. Navigate to **Indexing → Pages**
4. Click **Export** → Download as CSV
5. Open the CSV and extract the URLs

### Step 2: Create URLs CSV File (1 hour)

Create `scripts/urls.csv` with this format:

```csv
url,category,slug,priority
https://old-site.com/las-vegas,locations,las-vegas,0.9
https://old-site.com/henderson,locations,henderson,0.9
https://old-site.com/north-las-vegas,locations,north-las-vegas,0.9
https://old-site.com/summerlin,locations,summerlin,0.9
https://old-site.com/enterprise,locations,enterprise,0.8
https://old-site.com/stop-foreclosure,services,stop-foreclosure,0.8
https://old-site.com/inherited-property,services,inherited-property,0.8
https://old-site.com/divorce-property,services,divorce-property,0.8
https://old-site.com/green-valley,neighborhoods,green-valley,0.7
```

**Categories:**
- `locations` - City/area pages (e.g., henderson, las-vegas, summerlin)
- `services` - Service pages (e.g., stop-foreclosure, inherited-property)
- `neighborhoods` - Neighborhood pages (e.g., green-valley, anthem)
- `blog/posts` - Blog posts

**Priority values:**
- `1.0` - Homepage (don't include in CSV)
- `0.9` - High priority (major locations, top services)
- `0.8` - Medium-high priority (other locations, services)
- `0.7` - Medium priority (neighborhoods, blog posts)

### Step 3: Generate Placeholder JSON Files (5 minutes)

```bash
cd /Users/caseyryan/alchemy_investments_re
node scripts/migrate-pages.js
```

This creates placeholder JSON files in:
- `content/locations/*.json`
- `content/services/*.json`
- `content/neighborhoods/*.json`
- `content/blog/posts/*.json`

### Step 4: Content Migration (Per Page)

For each of the 110 pages, follow this process:

#### 4a. Scrape Old Content

```bash
/scrape-site https://old-site.com/henderson
```

This extracts:
- All text content
- Headings structure
- Images
- Metadata

#### 4b. SEO Analysis

```bash
/analyze-seo "sell house fast Henderson"
```

This provides:
- Keyword search volume
- Keyword difficulty
- Competitor analysis
- SERP features
- Related keywords

#### 4c. Generate Keyword Plan

```bash
/generate-keyword-plan "sell house fast Henderson"
```

This generates:
- Optimized title (50-60 chars)
- Optimized meta description (150-160 chars)
- H1, H2, H3 recommendations
- Content structure
- Internal linking suggestions

#### 4d. Update JSON File

Open the placeholder JSON file (e.g., `content/locations/henderson.json`) and fill in:

1. **SEO Section**
   ```json
   "seo": {
     "title": "From keyword plan",
     "description": "From keyword plan",
     "keywords": ["From SEO analysis"],
     "canonical": "https://alchemyinvestmentsre.com/locations/henderson"
   }
   ```

2. **Hero Section**
   ```json
   "hero": {
     "heading": "From keyword plan (H1)",
     "subheading": "Compelling subheading",
     "cta": "Get Your Cash Offer",
     "ctaLink": "/#hero-form"
   }
   ```

3. **Location Data** (for location pages)
   ```json
   "location": {
     "city": "Henderson",
     "state": "Nevada",
     "stateAbbr": "NV",
     "zipCodes": ["89002", "89009", "89011", "89012", "89014", "89015", "89052", "89074", "89077"],
     "neighborhoods": ["Green Valley", "Anthem", "Lake Las Vegas"],
     "population": 320189,
     "medianHomePrice": "$475,000",
     "coordinates": {
       "latitude": 36.0395,
       "longitude": -114.9817
     }
   }
   ```

4. **Content Sections**

   Use scraped content and SEO recommendations to create sections:

   **Intro section:**
   ```json
   {
     "type": "intro",
     "heading": "Why Henderson Homeowners Choose Us",
     "content": "1-2 paragraphs of unique content (300-500 words)"
   }
   ```

   **Benefits section:**
   ```json
   {
     "type": "benefits",
     "heading": "Benefits of Selling to Us",
     "items": [
       {
         "icon": "Clock",
         "title": "Fast Cash Offers",
         "description": "Get an offer in 24 hours"
       }
     ]
   }
   ```

   **Process section:**
   ```json
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
   }
   ```

   **Rich text section** (for detailed content):
   ```json
   {
     "type": "richtext",
     "heading": "About Henderson Real Estate Market",
     "html": "<p>Long form HTML content here (500-1000 words)</p>"
   }
   ```

   **FAQs section:**
   ```json
   {
     "type": "faqs",
     "heading": "Frequently Asked Questions"
   }
   ```

5. **FAQs Array**
   ```json
   "faqs": [
     {
       "question": "How quickly can you buy my Henderson house?",
       "answer": "Detailed answer here (50-100 words)"
     }
   ]
   ```

6. **Testimonials Array**
   ```json
   "testimonials": [
     {
       "name": "John Doe",
       "location": "Henderson, NV",
       "rating": 5,
       "text": "Great experience working with them!",
       "date": "2024-01-15"
     }
   ]
   ```

7. **Migration Data**
   ```json
   "migration": {
     "oldUrl": "https://old-site.com/henderson",
     "redirectFrom": ["/old-henderson-url"],
     "lastModified": "2024-01-31",
     "priority": 0.9,
     "changeFrequency": "monthly"
   }
   ```

### Step 5: Content Quality Checklist

For each page, ensure:

- [ ] Minimum 1,500 words of unique content
- [ ] SEO title is 50-60 characters
- [ ] Meta description is 150-160 characters
- [ ] Target keyword appears in title, H1, first paragraph
- [ ] At least 5-8 FAQs
- [ ] 2-3 testimonials
- [ ] Location-specific data (for location pages)
- [ ] Internal links to related pages
- [ ] No duplicate content from other pages

### Step 6: Batch Processing Strategy

To efficiently handle 110 pages:

**Week 1: Locations (~50 pages)**
- Day 1-2: Las Vegas, Henderson, North Las Vegas (top 3)
- Day 3-4: Summerlin, Enterprise, Paradise, Pahrump (next 4)
- Day 5: Boulder City, Green Valley, Spring Valley (next 3)
- Day 6-7: Remaining smaller locations

**Week 2: Services (~20 pages)**
- Day 1: Stop foreclosure, inherited property (top 2)
- Day 2: Divorce property, sell as-is, cash buyers (next 3)
- Day 3-4: Remaining services

**Week 3: Neighborhoods & Blog (~40 pages)**
- Day 1-2: Major neighborhoods (Green Valley, Anthem, etc.)
- Day 3-5: Blog posts

### Step 7: Test Locally (1-2 hours)

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit test pages
open http://localhost:3000/locations/henderson
open http://localhost:3000/services/stop-foreclosure

# Build for production
npm run build

# Check for errors
# All 110+ pages should generate successfully
```

### Step 8: Verify Build Output

After `npm run build`, check:

```
Route (app)                                Size
...
/locations/henderson                       XX kB
/locations/las-vegas                       XX kB
/services/stop-foreclosure                 XX kB
...
```

You should see all 110+ dynamic routes listed.

### Step 9: Setup Redirects

In Vercel dashboard or `next.config.js`:

```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: '/old-henderson',
        destination: '/locations/henderson',
        permanent: true, // 301 redirect
      },
      // Add all 110 redirects from migration.redirectFrom
    ]
  },
}
```

### Step 10: Deploy to Staging

```bash
# Push to git
git add .
git commit -m "Add 110 SEO-optimized pages"
git push origin main

# Vercel will auto-deploy
```

Visit staging URL and spot-check 10-15 pages.

### Step 11: Production Checklist

Before deploying to production:

- [ ] All 110 pages built successfully
- [ ] Spot-checked 10-15 pages on staging
- [ ] Verified metadata in page source
- [ ] Checked schema markup (view source, search for "application/ld+json")
- [ ] Tested mobile responsiveness
- [ ] Ran Lighthouse audit (target 90+ SEO score)
- [ ] Verified sitemap.xml includes all pages
- [ ] Set up 301 redirects from old URLs
- [ ] Added Google Search Console verification

### Step 12: Deploy to Production

1. Merge to production branch
2. Vercel deploys automatically
3. Verify deployment at https://alchemyinvestmentsre.com

### Step 13: Post-Launch

1. **Submit Sitemap to GSC**
   - Go to GSC → Sitemaps
   - Submit: `https://alchemyinvestmentsre.com/sitemap.xml`

2. **Request Indexing for Top Pages**
   - In GSC, manually request indexing for top 20 pages
   - Focus on: homepage, major locations, key services

3. **Monitor**
   - GSC → Coverage report (expect 2-4 weeks for full indexing)
   - Check for crawl errors
   - Track keyword rankings
   - Monitor organic traffic

## Time Estimates

- **Setup (Steps 1-3):** 2 hours
- **Content migration (110 pages):** 3-4 weeks
  - 5-10 pages per day
  - 30-45 minutes per page
- **Testing (Steps 7-9):** 4 hours
- **Deployment (Steps 10-13):** 2 hours

**Total:** 3-4 weeks for complete migration

## Tips for Efficiency

1. **Batch similar pages**: Do all location pages together, all service pages together
2. **Reuse structure**: Copy successful JSON files and modify
3. **Save snippets**: Keep reusable content blocks (benefits, process steps)
4. **Use AI assistance**: Claude can help generate unique content variations
5. **Parallel work**: Have multiple people work on different categories

## Common Issues

### Build fails with "Page not found"
- Check JSON file exists in correct directory
- Verify slug matches filename (without .json)
- Ensure JSON is valid (no syntax errors)

### Page shows 404
- Run `npm run build` to regenerate static pages
- Check that slug is in `generateStaticParams()` output

### Metadata not showing
- Verify SEO section in JSON file
- Check `generateMetadata()` function is called
- Clear browser cache

### Schema markup missing
- Check page source for `<script type="application/ld+json">`
- Verify schema functions return valid data
- Test with [Schema Markup Validator](https://validator.schema.org/)

## Resources

- Full documentation: `docs/CONTENT-ARCHITECTURE.md`
- Implementation summary: `docs/IMPLEMENTATION-SUMMARY.md`
- Example JSON files: `content/locations/henderson.json`, `content/services/stop-foreclosure.json`
- Migration script: `scripts/migrate-pages.js`

## Support

Questions? Review the documentation files in `docs/` or check the example content files in `content/`.
