# Google APIs Integration - Quick Start

Automated SEO migration tracking using Google Search Console and Google Analytics 4 APIs.

## What's New

You now have complete integration with Google APIs to automate your SEO migration:

### Google Search Console Integration
- ✅ Automatically discover all 110+ indexed URLs
- ✅ Track search performance (clicks, impressions, rankings)
- ✅ Monitor indexing status of migrated pages
- ✅ Automate sitemap submission
- ✅ Export performance data for analysis

### Google Analytics 4 Integration
- ✅ Track visitor metrics (page views, sessions, users)
- ✅ Monitor traffic sources (organic, direct, referral, social)
- ✅ Capture user demographics (location, age, gender)
- ✅ Track conversion events
- ✅ Export analytics data for comparison

### Unified Performance Tracking
- ✅ Combined GSC + GA4 reports
- ✅ Before/after migration comparison
- ✅ Automated report generation
- ✅ Page-level performance scoring

## Files Created

### API Clients
- `src/lib/integrations/gsc-client.ts` - Google Search Console API client
- `src/lib/integrations/ga4-client.ts` - Google Analytics 4 API client
- `src/lib/integrations/google-api-types.ts` - TypeScript type definitions

### Command-Line Scripts
- `scripts/google-auth.js` - One-time OAuth authentication
- `scripts/gsc-export-urls.js` - Export indexed URLs from GSC
- `scripts/performance-tracker.js` - Unified GSC + GA4 performance tracking
- `scripts/gsc-check-indexing.js` - Monitor indexing progress
- `scripts/gsc-submit-sitemap.js` - Submit sitemap to Google
- `scripts/migrate-pages.js` - Updated with --from-gsc flag

### Documentation
- `docs/GOOGLE-APIS-SETUP.md` - Complete setup guide
- `scripts/README.md` - Scripts usage documentation
- `.env.example` - Environment variable template

### Configuration
- `config/integrations.config.json` - Updated with GSC and GA4 settings
- `.gitignore` - Updated to exclude credentials

## Quick Start (5 Steps)

### Step 1: Install Dependencies ✅

Already done! The following packages were installed:
- `googleapis` - Google APIs Node.js client
- `@google-analytics/data` - Google Analytics Data API
- `dotenv` - Environment variable management

### Step 2: Set Up Google Cloud Project (10 minutes)

Follow the detailed guide: [docs/GOOGLE-APIS-SETUP.md](docs/GOOGLE-APIS-SETUP.md)

Quick checklist:
1. ✅ Create Google Cloud project
2. ✅ Enable "Google Search Console API"
3. ✅ Enable "Google Analytics Data API"
4. ✅ Create OAuth 2.0 credentials (Desktop app)
5. ✅ Download credentials JSON
6. ✅ Get GA4 Property ID from Analytics dashboard

### Step 3: Configure Environment Variables

1. Copy the example file:
```bash
cp .env.example .env.local
```

2. Edit `.env.local` with your credentials:
```bash
GOOGLE_CLIENT_ID=your_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_PROPERTY_URL=https://alchemyinvestmentsre.com
GOOGLE_ANALYTICS_PROPERTY_ID=your_property_id
```

### Step 4: Authenticate with Google

```bash
node scripts/google-auth.js
```

This will:
- Open your browser for OAuth consent
- Request GSC and Analytics permissions
- Save refresh token to `.env.local`

### Step 5: Test the Integration

#### Test GSC Connection
```bash
node scripts/gsc-export-urls.js
```

Expected: List of indexed URLs and generated `scripts/urls.csv`

#### Test GA4 Connection
```bash
node scripts/performance-tracker.js --before
```

Expected: Performance report with GSC and GA4 data

## Complete Migration Workflow

### Phase 1: Pre-Migration (Week 0)

#### 1. Export All Indexed URLs
```bash
node scripts/gsc-export-urls.js
```

**Output:**
- `scripts/urls.csv` with all indexed URLs
- Automatic categorization (locations, services, neighborhoods)
- Performance data (clicks, impressions, position)

#### 2. Capture Baseline Performance
```bash
node scripts/performance-tracker.js --before
```

**Output:**
- `seo/reports/performance-before.json` - Raw data
- `seo/reports/PERFORMANCE-BASELINE.md` - Readable report

**Metrics captured:**
- Search: clicks, impressions, avg position, CTR, top queries
- Analytics: sessions, page views, users, bounce rate, conversions
- Traffic sources, demographics, top pages

### Phase 2: Content Migration (Weeks 1-4)

#### 1. Generate Placeholder Files
```bash
node scripts/migrate-pages.js --from-gsc
```

This automatically:
1. Runs `gsc-export-urls.js` to fetch URLs
2. Generates JSON files for each page
3. Organizes by category

#### 2. Fill in Content with Claude Code

For each page, use Claude Code skills:
```bash
# Extract content from old site
/scrape-site [old-url]

# Optimize SEO elements
/analyze-seo [page-path]

# Generate keyword strategy
/generate-keyword-plan [topic]
```

### Phase 3: Deploy (Week 4)

#### 1. Build and Deploy
```bash
npm run build
vercel --prod
```

#### 2. Submit Sitemap
```bash
node scripts/gsc-submit-sitemap.js
```

**Output:**
- Validates sitemap
- Submits to Google
- Shows submission status

### Phase 4: Monitor (Weeks 5-10)

#### Check Indexing Progress
```bash
# Daily for week 5
node scripts/gsc-check-indexing.js

# Weekly for weeks 6-10
node scripts/gsc-check-indexing.js
```

**Output:**
- Progress bar (e.g., "67/110 indexed")
- List of unindexed pages
- Pages with errors
- Suggestions for fixes

**Options:**
```bash
# Check specific category
node scripts/gsc-check-indexing.js --category locations

# Show detailed info
node scripts/gsc-check-indexing.js --verbose
```

### Phase 5: Measure Results (Week 12+)

#### 1. Capture Post-Migration Performance
```bash
node scripts/performance-tracker.js --after
```

**When to run:** 8-12 weeks after migration

#### 2. Compare Before vs After
```bash
node scripts/performance-tracker.js --compare
```

**Output:**
- `seo/reports/PERFORMANCE-COMPARISON.md`
- Shows % changes for all metrics
- Top gaining and losing pages
- Traffic source shifts

**Metrics compared:**
- Search clicks: ±X%
- Impressions: ±X%
- Page views: ±X%
- Sessions: ±X%
- Conversions: ±X%

## Script Reference

### google-auth.js
One-time OAuth setup for GSC and GA4 APIs.
```bash
node scripts/google-auth.js
```

### gsc-export-urls.js
Export all indexed URLs from Google Search Console.
```bash
node scripts/gsc-export-urls.js [--output file] [--min-clicks n]
```

### performance-tracker.js
Track unified GSC + GA4 performance.
```bash
node scripts/performance-tracker.js --before   # Baseline
node scripts/performance-tracker.js --after    # Post-migration
node scripts/performance-tracker.js --compare  # Comparison
```

### gsc-check-indexing.js
Monitor indexing status of migrated pages.
```bash
node scripts/gsc-check-indexing.js [--category name] [--verbose]
```

### gsc-submit-sitemap.js
Submit sitemap to Google Search Console.
```bash
node scripts/gsc-submit-sitemap.js [sitemap-url]
```

### migrate-pages.js
Generate placeholder JSON files for migration.
```bash
node scripts/migrate-pages.js --from-gsc  # Automatic
node scripts/migrate-pages.js             # Manual from CSV
```

## Example Outputs

### GSC URL Export
```
🔍 Fetching indexed URLs from Google Search Console...

✅ Found 110 indexed pages

📊 Processing 110 pages (min 0 clicks)...

📈 Summary Statistics:

Total Pages: 110
Total Clicks: 15,240
Total Impressions: 245,800
Average Position: 8.3

📂 Pages by Category:
   locations: 45
   services: 38
   neighborhoods: 22
   blog: 5

✅ Exported 110 URLs to scripts/urls.csv
```

### Performance Comparison
```
📊 Performance Comparison:

🔍 Search Performance (GSC):
   📈 Clicks: 12,450 → 18,060 (+45.1%)
   📈 Impressions: 198,600 → 321,780 (+62.0%)
   📈 Avg Position: 12.3 → 8.7 (+29.3%)
   📈 Avg CTR: 6.27% → 5.61% (-10.5%)

📈 Visitor Analytics (GA4):
   📈 Sessions: 8,340 → 11,508 (+38.0%)
   📈 Page Views: 15,780 → 23,890 (+51.4%)
   📈 Users: 7,120 → 9,824 (+38.0%)
   📉 Bounce Rate: 68.4% → 58.2% (+14.9%)
   📈 Conversions: 184 → 267 (+45.1%)
```

### Indexing Status
```
🔍 Checking indexing status in Google Search Console...

📊 Checking 110 pages...

📊 Indexing Status Summary:

Total Pages: 110
✅ Indexed: 87 (79.1%)
⏳ Not Indexed: 19
❌ Errors: 4
⚠️  Warnings: 0

Progress: [████████████████████████████░░░░░░░░] 79.1%
```

## Key Benefits

### Automated Discovery
- No manual URL export needed
- Automatic categorization
- Priority calculation based on performance

### Data-Driven Decisions
- Performance data informs content optimization
- Identify high-value pages
- Track what's working

### Trackable Progress
- See indexing status in real-time
- Monitor week-over-week improvements
- Know exactly when to take action

### Historical Comparison
- Before/after snapshots
- Percentage changes for all metrics
- Identify successful optimizations

### Reusable Scripts
- Version controlled
- Can be run anytime
- Repeatable process

### No UI Needed
- Simple command-line tools
- Easy to automate
- Perfect for CI/CD integration

## Troubleshooting

### Authentication Issues

**"Missing Google API credentials"**
```bash
# Solution: Run authentication
node scripts/google-auth.js
```

**"No refresh token received"**
```bash
# Solution: Revoke and re-authenticate
# 1. Visit: https://myaccount.google.com/permissions
# 2. Revoke "SEO Migration Scripts"
# 3. Run: node scripts/google-auth.js
```

### Data Issues

**"No indexed pages found"**
- Check property URL is correct
- Verify property in Google Search Console
- Wait 1-2 weeks for initial indexing

**"No analytics data"**
- Verify GA4 property is receiving data
- Check property ID is correct
- Ensure date range includes traffic

### Rate Limits

**"Rate limit exceeded"**
- Scripts include automatic retry logic
- Wait a few minutes
- GSC: 600 queries/minute
- GA4: 1,000 queries/day

## Documentation

- **Setup Guide:** [docs/GOOGLE-APIS-SETUP.md](docs/GOOGLE-APIS-SETUP.md)
- **Scripts Reference:** [scripts/README.md](scripts/README.md)
- **Environment Template:** [.env.example](.env.example)

## API Documentation

- [Google Search Console API](https://developers.google.com/webmaster-tools/v1)
- [Google Analytics Data API (GA4)](https://developers.google.com/analytics/devguides/reporting/data/v1)
- [OAuth 2.0](https://developers.google.com/identity/protocols/oauth2)

## Success Metrics

After implementing this workflow, you should achieve:

### GSC Integration
- ✅ All 110+ URLs automatically discovered
- ✅ Sitemap submitted programmatically
- ✅ Indexing progress trackable (X/110 indexed)
- ✅ Keyword rankings tracked per page
- ✅ Search performance measured

### GA4 Integration
- ✅ Visitor analytics captured
- ✅ Traffic sources identified
- ✅ User demographics tracked
- ✅ Conversion events monitored

### Combined Results
- ✅ Baseline performance captured
- ✅ Post-migration tracked
- ✅ Before/after comparison generated
- ✅ Top performers identified
- ✅ Migration impact fully measurable

## Next Steps

1. **Complete Setup** (Today)
   - Follow [docs/GOOGLE-APIS-SETUP.md](docs/GOOGLE-APIS-SETUP.md)
   - Run `node scripts/google-auth.js`
   - Test both APIs

2. **Export & Baseline** (This Week)
   - Run `node scripts/gsc-export-urls.js`
   - Run `node scripts/performance-tracker.js --before`

3. **Migrate Content** (Next 3-4 Weeks)
   - Run `node scripts/migrate-pages.js --from-gsc`
   - Use Claude Code skills to fill content

4. **Deploy & Monitor** (Week 4+)
   - Deploy site
   - Run `node scripts/gsc-submit-sitemap.js`
   - Run `node scripts/gsc-check-indexing.js` weekly

5. **Measure Results** (Week 12+)
   - Run `node scripts/performance-tracker.js --after`
   - Run `node scripts/performance-tracker.js --compare`

## Support

For issues or questions:
1. Check [Troubleshooting](#troubleshooting) section
2. Review [docs/GOOGLE-APIS-SETUP.md](docs/GOOGLE-APIS-SETUP.md)
3. Check script output for detailed error messages
4. Review Google API documentation

## Summary

You now have a complete, automated SEO migration workflow powered by Google APIs. These scripts eliminate manual work, provide data-driven insights, and make the entire migration process measurable and repeatable.

**Total automation achieved:**
- URL discovery: 100% automated
- Performance tracking: 100% automated
- Indexing monitoring: 100% automated
- Sitemap submission: 100% automated
- Report generation: 100% automated

**Manual steps remaining:**
- One-time Google Cloud setup (10 min)
- One-time OAuth authentication (2 min)
- Content creation (using Claude Code skills)
- Decision-making based on data

Get started now: [docs/GOOGLE-APIS-SETUP.md](docs/GOOGLE-APIS-SETUP.md)
