# Google APIs Integration - Implementation Checklist

## ✅ Completed

### Dependencies
- [x] Installed `googleapis` package
- [x] Installed `@google-analytics/data` package
- [x] Installed `dotenv` package

### API Client Libraries
- [x] Created `src/lib/integrations/google-api-types.ts` (TypeScript types)
- [x] Created `src/lib/integrations/gsc-client.ts` (Google Search Console)
- [x] Created `src/lib/integrations/ga4-client.ts` (Google Analytics 4)

### Command-Line Scripts
- [x] Created `scripts/google-auth.js` (OAuth authentication)
- [x] Created `scripts/gsc-export-urls.js` (Export indexed URLs)
- [x] Created `scripts/performance-tracker.js` (Unified performance tracking)
- [x] Created `scripts/gsc-check-indexing.js` (Indexing status monitor)
- [x] Created `scripts/gsc-submit-sitemap.js` (Sitemap submission)
- [x] Updated `scripts/migrate-pages.js` (Added --from-gsc flag)

### Configuration
- [x] Updated `config/integrations.config.json` (Added GSC & GA4 sections)
- [x] Created `.env.example` (Environment variable template)
- [x] Updated `.gitignore` (Added credential files)

### Documentation
- [x] Created `docs/GOOGLE-APIS-SETUP.md` (Complete setup guide)
- [x] Created `scripts/README.md` (Scripts usage documentation)
- [x] Created `README-GOOGLE-APIS.md` (Quick start guide)
- [x] Created this checklist

## ⏳ Remaining Steps (Your Action Required)

### 1. Google Cloud Setup (10 minutes)
- [ ] Create Google Cloud project
- [ ] Enable Google Search Console API
- [ ] Enable Google Analytics Data API (GA4)
- [ ] Create OAuth 2.0 credentials (Desktop app)
- [ ] Download credentials JSON file
- [ ] Get GA4 Property ID from Analytics dashboard

**Guide:** [docs/GOOGLE-APIS-SETUP.md](docs/GOOGLE-APIS-SETUP.md) - Step 1-4

### 2. Environment Configuration (2 minutes)
- [ ] Copy `.env.example` to `.env.local`
- [ ] Add `GOOGLE_CLIENT_ID` from OAuth credentials
- [ ] Add `GOOGLE_CLIENT_SECRET` from OAuth credentials
- [ ] Add `GOOGLE_PROPERTY_URL` (https://alchemyinvestmentsre.com)
- [ ] Add `GOOGLE_ANALYTICS_PROPERTY_ID` from GA4

**Guide:** [docs/GOOGLE-APIS-SETUP.md](docs/GOOGLE-APIS-SETUP.md) - Step 5

### 3. Authentication (2 minutes)
```bash
node scripts/google-auth.js
```
- [ ] Browser opens for OAuth consent
- [ ] Approve all requested permissions
- [ ] Copy authorization code
- [ ] Paste code into terminal
- [ ] Verify refresh token saved to `.env.local`

**Guide:** [docs/GOOGLE-APIS-SETUP.md](docs/GOOGLE-APIS-SETUP.md) - Step 6

### 4. Verification (2 minutes)

Test GSC:
```bash
node scripts/gsc-export-urls.js
```
- [ ] Script runs without errors
- [ ] Displays indexed URLs
- [ ] Creates `scripts/urls.csv`

Test GA4:
```bash
node scripts/performance-tracker.js --before
```
- [ ] Script runs without errors
- [ ] Shows GSC and GA4 metrics
- [ ] Creates reports in `seo/reports/`

**Guide:** [docs/GOOGLE-APIS-SETUP.md](docs/GOOGLE-APIS-SETUP.md) - Step 7

## Migration Workflow Checklist

### Phase 1: Pre-Migration
- [ ] Export indexed URLs: `node scripts/gsc-export-urls.js`
- [ ] Capture baseline: `node scripts/performance-tracker.js --before`
- [ ] Review baseline report in `seo/reports/PERFORMANCE-BASELINE.md`

### Phase 2: Content Migration
- [ ] Generate placeholders: `node scripts/migrate-pages.js --from-gsc`
- [ ] Use `/scrape-site` skill for each page
- [ ] Use `/analyze-seo` skill for optimization
- [ ] Use `/generate-keyword-plan` skill for keywords
- [ ] Review and enhance generated JSON files

### Phase 3: Deployment
- [ ] Build site: `npm run build`
- [ ] Deploy: `vercel --prod`
- [ ] Submit sitemap: `node scripts/gsc-submit-sitemap.js`
- [ ] Verify sitemap submission in GSC

### Phase 4: Monitoring (Weeks 5-10)
- [ ] Week 5: Daily indexing checks
- [ ] Weeks 6-10: Weekly indexing checks
- [ ] Track progress: `node scripts/gsc-check-indexing.js`
- [ ] Fix any indexing errors identified

### Phase 5: Results (Week 12+)
- [ ] Capture post-migration: `node scripts/performance-tracker.js --after`
- [ ] Compare results: `node scripts/performance-tracker.js --compare`
- [ ] Review `seo/reports/PERFORMANCE-COMPARISON.md`
- [ ] Document lessons learned

## Quick Reference

### Essential Commands

**Setup:**
```bash
node scripts/google-auth.js
```

**Pre-Migration:**
```bash
node scripts/gsc-export-urls.js
node scripts/performance-tracker.js --before
```

**Migration:**
```bash
node scripts/migrate-pages.js --from-gsc
```

**Post-Migration:**
```bash
node scripts/gsc-submit-sitemap.js
node scripts/gsc-check-indexing.js
```

**Results:**
```bash
node scripts/performance-tracker.js --after
node scripts/performance-tracker.js --compare
```

### File Locations

**Configuration:**
- Environment variables: `.env.local`
- Integration config: `config/integrations.config.json`

**Scripts:**
- All scripts: `scripts/`
- URL export: `scripts/urls.csv`
- Migration log: `scripts/migration-log.json`

**Reports:**
- All reports: `seo/reports/`
- Performance baseline: `seo/reports/PERFORMANCE-BASELINE.md`
- Performance after: `seo/reports/PERFORMANCE-AFTER.md`
- Comparison: `seo/reports/PERFORMANCE-COMPARISON.md`
- Indexing status: `seo/reports/INDEXING-STATUS.md`

**Content:**
- JSON files: `content/{category}/{slug}.json`
- Categories: locations, services, neighborhoods, blog

### Documentation

- **Quick Start:** [README-GOOGLE-APIS.md](README-GOOGLE-APIS.md)
- **Setup Guide:** [docs/GOOGLE-APIS-SETUP.md](docs/GOOGLE-APIS-SETUP.md)
- **Scripts Reference:** [scripts/README.md](scripts/README.md)
- **Environment Template:** [.env.example](.env.example)

## Success Criteria

### ✅ Implementation Complete When:
- All scripts run without errors
- GSC returns indexed URLs
- GA4 returns analytics data
- Reports generate successfully
- Environment variables configured
- Authentication working

### ✅ Migration Complete When:
- All 110+ pages migrated
- Sitemap submitted
- 100% pages indexed in GSC
- Performance metrics improved
- Comparison report shows positive results

## Troubleshooting

### Common Issues

**Authentication Failed**
- Check client ID and secret in `.env.local`
- Revoke and re-run: `node scripts/google-auth.js`

**No Indexed Pages Found**
- Verify property URL matches GSC exactly
- Check property is verified in GSC
- Wait 1-2 weeks for initial indexing

**No Analytics Data**
- Verify GA4 property ID is correct
- Check property is receiving data
- Ensure account has access

**Rate Limit Errors**
- Wait a few minutes and retry
- Scripts include automatic retry logic

See full troubleshooting: [docs/GOOGLE-APIS-SETUP.md](docs/GOOGLE-APIS-SETUP.md#troubleshooting)

## Next Steps

1. **Today:** Complete Google Cloud setup
2. **Today:** Configure environment variables
3. **Today:** Run authentication
4. **Today:** Test both APIs
5. **This Week:** Export URLs and capture baseline
6. **Next 3-4 Weeks:** Migrate content
7. **Week 4:** Deploy and submit sitemap
8. **Weeks 5-10:** Monitor indexing
9. **Week 12+:** Measure and compare results

## Support Resources

- Setup Guide: [docs/GOOGLE-APIS-SETUP.md](docs/GOOGLE-APIS-SETUP.md)
- Scripts Documentation: [scripts/README.md](scripts/README.md)
- Quick Start: [README-GOOGLE-APIS.md](README-GOOGLE-APIS.md)
- GSC API Docs: https://developers.google.com/webmaster-tools/v1
- GA4 API Docs: https://developers.google.com/analytics/devguides/reporting/data/v1

---

**Status:** Ready for Google Cloud setup and authentication

**Next Action:** Follow [docs/GOOGLE-APIS-SETUP.md](docs/GOOGLE-APIS-SETUP.md) to complete setup
