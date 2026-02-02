# Google Search Console Setup Guide

## Overview

This guide explains how to add Google Search Console verification to your site and set up GSC for SEO monitoring.

## Step 1: Create Google Search Console Property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add Property**
3. Enter your domain: `alchemyinvestmentsre.com`
4. Choose verification method (see Step 2)

## Step 2: Verification Methods

You have 3 options to verify ownership:

### Option A: Meta Tag Verification (Recommended for Next.js)

1. In GSC, select **HTML tag** verification method
2. Copy the verification code (looks like: `<meta name="google-site-verification" content="abc123..." />`)
3. Add it to your site's layout.tsx:

```typescript
// src/app/layout.tsx

export const metadata: Metadata = {
  // ... existing metadata
  verification: {
    google: 'abc123...', // Your verification code (just the content value)
  },
}
```

4. Deploy your site
5. Click **Verify** in GSC

### Option B: HTML File Verification

1. Download the HTML verification file from GSC
2. Place it in `/public/` directory:
   ```
   /public/google1234567890abcdef.html
   ```
3. Deploy your site
4. Verify the file is accessible:
   ```
   https://alchemyinvestmentsre.com/google1234567890abcdef.html
   ```
5. Click **Verify** in GSC

### Option C: DNS TXT Record (Best for Long-term)

1. In GSC, select **DNS record** verification
2. Copy the TXT record value
3. Log in to your domain registrar (e.g., GoDaddy, Namecheap)
4. Add a TXT record:
   - **Type:** TXT
   - **Name:** @ (or leave blank)
   - **Value:** The verification string from GSC
   - **TTL:** 3600 (or default)
5. Wait 1-24 hours for DNS propagation
6. Click **Verify** in GSC

## Step 3: Submit Sitemap

Once verified:

1. In GSC, go to **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml`
3. Click **Submit**
4. Your sitemap URL is: `https://alchemyinvestmentsre.com/sitemap.xml`

GSC will now crawl and index all pages in your sitemap.

## Step 4: Request Indexing for Priority Pages

For immediate indexing of important pages:

1. Go to **URL Inspection** in GSC
2. Enter a URL (e.g., `https://alchemyinvestmentsre.com/locations/henderson`)
3. Click **Request Indexing**
4. Repeat for top 20 priority pages:
   - Homepage
   - Top 3-5 location pages (Las Vegas, Henderson, North Las Vegas)
   - Top 3-5 service pages (stop-foreclosure, inherited-property)
   - Featured blog posts

**Note:** You can only request ~10-20 URLs per day, so prioritize your most important pages.

## What Gets Automatically Indexed

Once your sitemap is submitted, Google will automatically:

- Crawl your sitemap periodically (every few days to weeks)
- Discover and index all 110+ pages
- Re-crawl pages when they change (based on `lastModified` in sitemap)

**Expected timeline:**
- High priority pages: 1-7 days
- Medium priority pages: 1-4 weeks
- All 110 pages: 2-6 weeks

## Monitoring Your Site

### Pages Report

Go to **Indexing → Pages** to see:
- How many pages are indexed
- Any crawl errors
- Pages excluded from indexing

### Performance Report

Go to **Performance** to track:
- Total clicks and impressions
- Average position
- Click-through rate (CTR)
- Top performing queries and pages

### Coverage Report

Go to **Indexing → Pages** to see:
- Pages successfully indexed
- Pages with errors
- Pages excluded

## Verifying Implementation

### Check Verification Status

After adding verification:

```bash
# View your site's <head> section
curl -s https://alchemyinvestmentsre.com | grep 'google-site-verification'

# Should show:
# <meta name="google-site-verification" content="abc123..." />
```

### Check Sitemap

```bash
# View sitemap
curl -s https://alchemyinvestmentsre.com/sitemap.xml

# Should show all pages:
# - Static pages (/, /about, /contact, etc.)
# - Dynamic locations (/locations/henderson, /locations/las-vegas, etc.)
# - Dynamic services (/services/stop-foreclosure, etc.)
# - Blog posts (/blog/sell-house-fast-las-vegas, etc.)
```

## Troubleshooting

### Verification Failed

**Meta Tag Method:**
- Ensure the meta tag is in the `<head>` section
- Verify it's deployed to production (not just localhost)
- Check view-source to confirm it's there
- Try the HTML file method instead

**HTML File Method:**
- Ensure file is in `/public/` directory
- Verify it's accessible at the URL
- Don't rename or modify the file

**DNS Method:**
- DNS changes can take 1-24 hours
- Use [DNS checker](https://dnschecker.org/) to verify propagation
- Make sure TXT record is added correctly

### Sitemap Not Found

- Verify sitemap.ts exports a valid sitemap function
- Check that sitemap.xml is accessible
- Run `npm run build` to regenerate
- Clear your browser cache

### Pages Not Indexing

- Check GSC Coverage report for errors
- Verify pages return 200 status code
- Ensure robots.txt doesn't block pages
- Check that pages have unique titles and descriptions
- Wait 2-4 weeks for initial indexing

## Next Steps After Setup

1. **Week 1:** Submit sitemap, request indexing for top 20 pages
2. **Week 2-4:** Monitor indexing status in Coverage report
3. **Week 4+:** Track performance, optimize underperforming pages
4. **Monthly:** Review top queries, update content accordingly

## GSC Features to Use

- **Performance:** Track keyword rankings and traffic
- **URL Inspection:** Check indexing status of specific pages
- **Coverage:** Monitor crawl errors
- **Sitemaps:** Verify sitemap processing
- **Mobile Usability:** Check mobile-friendliness
- **Core Web Vitals:** Monitor page speed and UX

## Need Help?

- [GSC Help Center](https://support.google.com/webmasters)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- Check `docs/QUICK-START.md` for migration workflow
