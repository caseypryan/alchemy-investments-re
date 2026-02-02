# SEO Migration Scripts - Google APIs Integration

Automated scripts for SEO migration using Google Search Console and Google Analytics 4 APIs.

## Overview

These scripts automate the entire SEO migration workflow:
1. Discover all indexed URLs from Google Search Console
2. Track baseline performance (search + analytics)
3. Migrate content with automatic categorization
4. Submit sitemap to Google
5. Monitor indexing progress
6. Compare before/after performance

## Prerequisites

- Node.js installed
- Google Cloud project with GSC and GA4 APIs enabled
- OAuth credentials configured
- Authenticated access (see [Setup Guide](../docs/GOOGLE-APIS-SETUP.md))

## Quick Start

### 1. One-Time Setup (10 minutes)

```bash
# Authenticate with Google APIs
node scripts/google-auth.js
```

This will:
- Open browser for OAuth consent
- Request GSC and GA4 permissions
- Save refresh token to `.env.local`

**Required Environment Variables** (`.env.local`):
```bash
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REFRESH_TOKEN=auto_generated
GOOGLE_PROPERTY_URL=https://alchemyinvestmentsre.com
GOOGLE_ANALYTICS_PROPERTY_ID=your_property_id
```

See [Google APIs Setup Guide](../docs/GOOGLE-APIS-SETUP.md) for detailed instructions.

### 2. Pre-Migration Workflow

#### Export Indexed URLs from GSC

```bash
node scripts/gsc-export-urls.js
```

**What it does:**
- Fetches all indexed URLs from Google Search Console
- Automatically categorizes pages (locations, services, neighborhoods, blog)
- Extracts slugs from old URLs
- Calculates priority based on performance data (clicks, impressions, position)
- Generates `scripts/urls.csv` ready for migration

**Output:**
- `scripts/urls.csv` - CSV file with categorized URLs
- Console summary with statistics

**Options:**
```bash
# Save to custom location
node scripts/gsc-export-urls.js --output data/urls.csv

# Filter by minimum clicks
node scripts/gsc-export-urls.js --min-clicks 10
```

#### Capture Baseline Performance

```bash
node scripts/performance-tracker.js --before
```

**What it does:**
- Fetches last 90 days of search performance from GSC
  - Total clicks, impressions, average position, CTR
  - Top queries and pages
- Fetches visitor analytics from GA4
  - Sessions, page views, users, bounce rate
  - Traffic sources (organic, direct, referral, social)
  - Demographics (countries, cities)
  - Conversions and events
- Combines data into unified report
- Identifies top performing pages across both platforms

**Output:**
- `seo/reports/performance-before.json` - Raw data snapshot
- `seo/reports/PERFORMANCE-BASELINE.md` - Human-readable report

### 3. Migration Workflow

#### Option A: Automatic (from GSC)

```bash
node scripts/migrate-pages.js --from-gsc
```

This will:
1. Run `gsc-export-urls.js` to fetch indexed URLs
2. Generate placeholder JSON files for each page
3. Organize by category (locations/, services/, etc.)

#### Option B: Manual (from CSV)

```bash
# 1. Create or edit scripts/urls.csv manually
# 2. Run migration
node scripts/migrate-pages.js
```

**CSV Format:**
```csv
url,category,slug,priority,clicks,impressions,position,ctr
https://old-site.com/henderson,locations,henderson,95,150,2500,3.2,6.0%
https://old-site.com/stop-foreclosure,services,stop-foreclosure,88,120,1800,5.1,6.7%
```

#### Fill in Content

After generating placeholders, use Claude Code skills to enhance content:

```bash
# For each page, use Claude Code:
# /scrape-site [old-url]         - Extract content from old site
# /analyze-seo [page-path]       - Optimize SEO elements
# /generate-keyword-plan [topic] - Generate keyword strategy
```

### 4. Post-Migration Workflow

#### Submit Sitemap to GSC

```bash
node scripts/gsc-submit-sitemap.js
```

**What it does:**
- Validates sitemap is accessible (fetches and checks XML)
- Submits sitemap to Google Search Console
- Checks submission status
- Lists all sitemaps for the property
- Saves submission log

**Output:**
- Console confirmation with URL counts
- `seo/reports/sitemap-submission-[timestamp].json` - Submission log

**Custom sitemap:**
```bash
node scripts/gsc-submit-sitemap.js https://alchemyinvestmentsre.com/custom-sitemap.xml
```

#### Monitor Indexing Progress

```bash
node scripts/gsc-check-indexing.js
```

**What it does:**
- Reads all pages from `content/` directory
- Checks indexing status in GSC for each URL
- Shows progress (e.g., "67/110 pages indexed")
- Identifies pages with errors or warnings
- Tracks last crawl dates
- Provides suggestions for improving indexing

**Output:**
- Console progress bar and summary
- `seo/reports/indexing-status-[timestamp].json` - Detailed results
- `seo/reports/INDEXING-STATUS.md` - Human-readable report

**Options:**
```bash
# Check specific category only
node scripts/gsc-check-indexing.js --category locations

# Show detailed information for each URL
node scripts/gsc-check-indexing.js --verbose
```

**Recommended Schedule:**
- Run daily for first week
- Run weekly for next 4-6 weeks
- Run monthly thereafter

#### Track Post-Migration Performance

```bash
node scripts/performance-tracker.js --after
```

**When to run:**
- Wait 4-8 weeks after migration
- Allows time for Google to index and rank new pages
- Ensures statistically significant data

**What it does:**
- Same as `--before` mode, but saves to different files
- Captures current search and analytics performance
- Ready for comparison

**Output:**
- `seo/reports/performance-after.json` - Post-migration snapshot
- `seo/reports/PERFORMANCE-AFTER.md` - Readable report

#### Compare Before vs After

```bash
node scripts/performance-tracker.js --compare
```

**What it does:**
- Loads both "before" and "after" snapshots
- Calculates percentage changes for all metrics
- Identifies top gaining and losing pages
- Shows traffic source changes
- Highlights successful optimizations

**Output:**
- `seo/reports/PERFORMANCE-COMPARISON.md` - Detailed comparison report
- Console summary with key metrics

**Metrics Compared:**

Search Performance (GSC):
- Total clicks (± %)
- Total impressions (± %)
- Average position (± %)
- Average CTR (± %)

Visitor Analytics (GA4):
- Sessions (± %)
- Page views (± %)
- Users (± %)
- Bounce rate (± %)
- Conversions (± %)

Page-Level Analysis:
- Top 10 pages with biggest gains
- Top 10 pages with losses
- Score based on combined GSC + GA4 data

## Complete Migration Timeline

### Week 0: Setup & Baseline
```bash
# Day 1: Setup
node scripts/google-auth.js

# Day 2: Export & Baseline
node scripts/gsc-export-urls.js
node scripts/performance-tracker.js --before
```

### Weeks 1-4: Content Migration
```bash
# Generate placeholders
node scripts/migrate-pages.js --from-gsc

# Use Claude Code to fill in content for each page:
# /scrape-site, /analyze-seo, /generate-keyword-plan
```

### Week 4: Deploy & Submit
```bash
# Build and deploy
npm run build
vercel --prod

# Submit sitemap
node scripts/gsc-submit-sitemap.js
```

### Weeks 5-10: Monitor
```bash
# Daily for week 5
node scripts/gsc-check-indexing.js

# Weekly for weeks 6-10
node scripts/gsc-check-indexing.js
```

### Week 12+: Measure Results
```bash
# After 8-12 weeks
node scripts/performance-tracker.js --after
node scripts/performance-tracker.js --compare
```

## Script Reference

### google-auth.js
**Purpose:** One-time OAuth authentication for GSC and GA4

**Usage:**
```bash
node scripts/google-auth.js
```

**When to run:**
- Initial setup
- If refresh token expires
- When adding new scopes

**Prerequisites:**
- Google Cloud project created
- APIs enabled (GSC + GA4)
- OAuth credentials downloaded
- Environment variables set (CLIENT_ID, CLIENT_SECRET)

---

### gsc-export-urls.js
**Purpose:** Export all indexed URLs from Google Search Console

**Usage:**
```bash
node scripts/gsc-export-urls.js [options]
```

**Options:**
- `--output <file>` - Custom output path (default: scripts/urls.csv)
- `--min-clicks <n>` - Minimum clicks to include (default: 0)

**Output:**
- CSV file with: url, category, slug, priority, clicks, impressions, position, CTR
- Console summary with statistics

**When to run:**
- Before starting migration
- To discover all indexed pages automatically
- When updating migration list

---

### performance-tracker.js
**Purpose:** Track unified GSC + GA4 performance metrics

**Usage:**
```bash
node scripts/performance-tracker.js --before   # Capture baseline
node scripts/performance-tracker.js --after    # Capture post-migration
node scripts/performance-tracker.js --compare  # Compare results
```

**Data Collected:**

GSC Metrics:
- Total clicks, impressions, avg position, avg CTR
- Top 50 queries by clicks
- Top 50 pages by clicks
- Page-level: clicks, impressions, position, CTR

GA4 Metrics:
- Sessions, page views, users, new users
- Bounce rate, avg session duration
- Traffic sources (source/medium breakdown)
- Demographics (countries, cities, age, gender)
- Conversions (events and rates)
- Page-level: views, sessions, bounce rate, duration

**Output Files:**
- `seo/reports/performance-{mode}.json` - Raw data
- `seo/reports/PERFORMANCE-{MODE}.md` - Readable report

**When to run:**
- `--before`: Before migration (capture baseline)
- `--after`: 4-8 weeks after migration
- `--compare`: After running both --before and --after

---

### gsc-check-indexing.js
**Purpose:** Monitor indexing status of migrated pages

**Usage:**
```bash
node scripts/gsc-check-indexing.js [options]
```

**Options:**
- `--category <name>` - Check specific category only (locations, services, etc.)
- `--verbose` - Show detailed information for each URL

**What it checks:**
- Indexed status (yes/no)
- Coverage state (indexed, excluded, error)
- Last crawl date
- Mobile usability
- Specific issues/reasons

**Output:**
- Progress bar showing X/total indexed
- Summary statistics
- List of unindexed pages
- Pages with errors
- Suggestions for fixes
- `seo/reports/indexing-status-[timestamp].json`
- `seo/reports/INDEXING-STATUS.md`

**When to run:**
- Daily for first week post-migration
- Weekly for 4-6 weeks
- Monthly thereafter
- When investigating indexing issues

---

### gsc-submit-sitemap.js
**Purpose:** Submit sitemap to Google Search Console

**Usage:**
```bash
node scripts/gsc-submit-sitemap.js [sitemap-url]
```

**Default:** https://alchemyinvestmentsre.com/sitemap.xml

**What it does:**
1. Validates sitemap (fetches and checks XML format)
2. Counts URLs in sitemap
3. Submits to GSC
4. Checks submission status
5. Lists all sitemaps for property

**Output:**
- Console confirmation
- Sitemap statistics (submitted, indexed)
- Any errors or warnings
- `seo/reports/sitemap-submission-[timestamp].json`

**When to run:**
- After deploying migrated site
- When adding new pages
- If sitemap structure changes

---

### migrate-pages.js
**Purpose:** Generate placeholder JSON files for migration

**Usage:**
```bash
# Automatic (from GSC)
node scripts/migrate-pages.js --from-gsc

# Manual (from CSV)
node scripts/migrate-pages.js
```

**What it does:**
- Reads URLs from CSV (auto-generated or manual)
- Creates directory structure (content/locations/, content/services/, etc.)
- Generates placeholder JSON for each page
- Logs migration progress

**Next steps after running:**
- Use Claude Code skills to fill in content
- Review and enhance generated files
- Run `npm run build` to verify

## Tips & Best Practices

### Rate Limiting
- GSC API: 600 queries per minute
- GA4 API: 1,000 queries per day (default)
- Scripts include automatic rate limiting
- If you hit limits, wait and retry

### Data Freshness
- GSC data: 1-2 days delay
- GA4 data: Real-time to 24 hours
- For comparisons, ensure sufficient time has passed

### Baseline Timing
- Capture baseline BEFORE making any changes
- Wait 4-8 weeks after migration for meaningful comparison
- Avoid comparing during seasonal traffic changes

### Indexing Timeline
- New pages: 1-2 weeks to be discovered
- Full indexing: 4-6 weeks typical
- Some pages may take longer
- Regular sitemap submission helps

### Data Interpretation
- Consider external factors (seasonality, market changes)
- Look for trends, not just absolute numbers
- Focus on high-priority pages first
- Small sample sizes may have high variance

### Security
- Never commit `.env.local` to git
- Keep OAuth credentials secure
- Use read-only API scopes
- Rotate credentials periodically

## Troubleshooting

### Script Errors

**"Missing Google API credentials"**
- Check `.env.local` has all required variables
- Run `node scripts/google-auth.js` if missing refresh token

**"Property not verified" (GSC)**
- Verify property in Google Search Console
- Check GOOGLE_PROPERTY_URL matches exactly

**"Property not found" (GA4)**
- Verify GA4 property ID is correct
- Check account has access to property

**Rate limit errors**
- Wait a few minutes
- Scripts will retry automatically
- Reduce batch sizes if persistent

### Data Issues

**"No indexed pages found"**
- Wait 1-2 weeks for Google to index
- Submit sitemap: `node scripts/gsc-submit-sitemap.js`
- Verify property is correct in GSC

**"No analytics data"**
- Check GA4 property is receiving data
- Verify date range includes traffic
- Ensure property ID is correct

**Missing comparison data**
- Run both `--before` and `--after` modes
- Check files exist in `seo/reports/`

## Advanced Usage

### Custom Date Ranges

Edit script parameters to change date ranges:

```javascript
// In performance-tracker.js
const days = 90; // Change to 30, 60, 180, etc.
```

### Batch Processing

Process pages in batches to avoid rate limits:

```javascript
// In gsc-check-indexing.js
const batchSize = 10; // Adjust batch size
```

### Custom Categorization

Edit category detection in `gsc-export-urls.js`:

```javascript
function detectCategory(url) {
  // Add custom rules here
  if (url.includes('/custom-category/')) {
    return 'custom';
  }
  // ...existing rules
}
```

## File Outputs

All scripts save outputs to organized directories:

```
seo/
└── reports/
    ├── performance-before.json
    ├── performance-after.json
    ├── PERFORMANCE-BASELINE.md
    ├── PERFORMANCE-AFTER.md
    ├── PERFORMANCE-COMPARISON.md
    ├── indexing-status-[timestamp].json
    ├── INDEXING-STATUS.md
    └── sitemap-submission-[timestamp].json

scripts/
├── urls.csv                    # Exported URLs from GSC
└── migration-log.json          # Migration progress log
```

## Support & Documentation

- [Google APIs Setup Guide](../docs/GOOGLE-APIS-SETUP.md)
- [GSC API Docs](https://developers.google.com/webmaster-tools/v1)
- [GA4 Data API Docs](https://developers.google.com/analytics/devguides/reporting/data/v1)
- [OAuth 2.0 Guide](https://developers.google.com/identity/protocols/oauth2)

## Summary

These scripts provide a complete automated workflow for SEO migration:

1. **Discover**: Automatically find all indexed pages
2. **Baseline**: Capture current performance (GSC + GA4)
3. **Migrate**: Generate and fill content
4. **Deploy**: Submit sitemap to Google
5. **Monitor**: Track indexing progress
6. **Measure**: Compare before/after results

All data is saved and can be reviewed at any time. Reports are generated in both JSON (for analysis) and Markdown (for reading).
