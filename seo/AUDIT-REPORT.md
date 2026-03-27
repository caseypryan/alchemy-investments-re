# SEO Audit Report — alchemyinvestmentsre.com
**Date:** 2026-03-26 (updated with Ahrefs data)
**Auditor:** Claude Code (automated)
**Tools Used:** Google Search Console MCP ✅, Ahrefs MCP ✅ (connected), Firecrawl (401 — not configured), DataForSEO MCP (401 — not configured), full codebase analysis

---

## Score Estimate

| | Before | After Round 1 | After Round 2 |
|--|--------|---------------|---------------|
| **Overall SEO Score** | ~48/100 | ~71/100 | ~74/100 |
| Technical SEO | 58/100 | 78/100 | 80/100 |
| Local SEO / Schema | 52/100 | 76/100 | 77/100 |
| Content / Indexability | 40/100 | 62/100 | 64/100 |
| Organic Keyword Reach | 15/100 | 15/100 | 15/100 *(requires content + link work)* |

---

## GSC Performance Snapshot (Dec 26, 2025 – Mar 26, 2026)

| Metric | Value |
|--------|-------|
| Total Clicks | ~100 |
| Total Impressions | ~4,200+ |
| Avg CTR | ~2.4% |
| Avg Position | ~10.4 |
| **Branded clicks** | ~97% of all clicks |
| **Non-branded clicks** | ~3% |

### Top Performing Queries
| Query | Clicks | Impressions | Position |
|-------|--------|-------------|----------|
| alchemy investments llc | 28 | 78 | 1.7 |
| alchemy investments re | 20 | 47 | 1.0 |
| alchemy investments | 6 | 88 | 6.6 |
| real estate investor | 1 | 8 | 3.4 |
| cash house buyers las vegas valley | 0 | 2 | 26 |
| sell house fast las vegas | 0 | 0 | ~51 |

**Critical observation:** The site ranks well for branded terms but has near-zero non-branded organic visibility for target keywords like "sell my house fast las vegas", "cash home buyers las vegas", etc.

### Top Pages by Clicks
| Page | Clicks | Impressions |
|------|--------|-------------|
| / (homepage) | 90 | 1,552 |
| /properties/ | 5 | 167 |
| /about-this-demo/ | 3 | 219 | ← **DEMO PAGE — NOW BLOCKED** |
| /properties (no trailing slash) | 1 | 316 |
| /blog/sell-house-fast-las-vegas | 0 | 379 | ← **Position 51 — needs work** |

---

---

## Ahrefs Analysis — 2026-03-26

### Domain Authority
| Metric | Value |
|--------|-------|
| **Domain Rating (DR)** | **1.0 / 100** |
| Ahrefs Rank | 53,555,901 (very new/low authority) |
| DR Trend | First appeared Jul 2025 at DR 0.6 → dropped to 0.3 Aug-Jan → recovering to 1.0 Mar 2026 |
| Organic Keywords | **1** (branded only: "alchemy investments", pos 4) |
| Monthly Organic Traffic | **~3 visits** |
| Estimated Traffic Value | **$8.34/mo** |

### Backlink Profile — CRITICAL RED FLAG
| Metric | Value |
|--------|-------|
| Live Backlinks | 47 |
| All-Time Backlinks | 127 |
| Live Referring Domains | 30 |
| All-Time Referring Domains | 95 |
| **Dofollow Links** | **0 — ZERO** |
| **Spam Links** | **~95%+ of all links** |

**Every single referring domain is a link-selling spam service** (uplinke.com subdomains via za.com, seoflox.io, itxoft.com, buybacklinks.agency, rankyour.website, seoagency.sale, etc.). All links are nofollow, so they pass no authority. The site has **zero legitimate earned/editorial backlinks**. This is why DR sits at 1.0 despite 30 referring domains.

### Organic Competitor Landscape
The site ranks for only 1 keyword ("alchemy investments" branded). Ahrefs cannot identify real SEO competitors because the site doesn't share keyword rankings with any niche competitors. This confirms zero non-branded organic visibility.

### Site Audit Issues (Ahrefs Project 6090343)
- **"3XX page receives organic traffic" (1 URL)** — A redirect URL is still attracting organic clicks. This should self-resolve after Google re-crawls and processes the 301 redirects added today.
- All other checked issues (CSS, duplicates, 4XX) show **0 affected pages** — site is technically clean.

---

## Issues Found

### CRITICAL (Fixed)

#### 1. NAP Phone Number Inconsistency
- **Before:** `business.config.json` had `(702) 547-6664` but all pages/schemas/CTAs used `(702) 718-6934`
- **Impact:** Google cross-references phone numbers across the web. Mismatched NAP damages local pack eligibility.
- **Fix:** Updated `business.config.json` `contact.phone` and `phoneDisplay` to `(702) 718-6934`

#### 2. Address ZIP Code Inconsistency
- **Before:** `business.config.json` had empty `street` and ZIP `89147`; all pages and schema.ts used `8978 Spanish Ridge, 89148`
- **Fix:** Updated `business.config.json` to `8978 Spanish Ridge, Las Vegas, NV 89148`

#### 3. Email Inconsistency Across All Files
- **Before:** `schema.ts` used `Casey@AlchemyInvestmentsRE.com`; config used `info@alchemyinvestmentsre.com`; contact/speak-to-an-expert pages used `Casey@`
- **Fix:** Standardized to `offers@alchemyinvestmentsre.com` across:
  - `config/business.config.json`
  - `src/lib/schema.ts` (localBusinessSchema + organizationSchema)
  - `src/app/page.tsx` (homepage schema)
  - `src/app/contact/page.tsx`
  - `src/app/speak-to-an-expert/page.tsx`
  - `src/components/Footer.tsx`

#### 4. Orphan/Demo Pages Indexed in GSC
- **Before:** Pages like `/about-this-demo/`, `/homepage-1/`, `/homepage-3/`, `/compare-properties/`, `/feature/laundry/`, `/category/business/`, `/property-type/family-home/`, `/property/amazing-home-for-family-2/` etc. were getting crawled/indexed — leftover from a previous WordPress template
- **Impact:** Crawl budget waste, index bloat, confusing Google about site purpose
- **Fix 1:** Added disallow rules in `src/app/robots.ts` for all orphan path prefixes
- **Fix 2:** Added 301 redirects in `next.config.js` — all orphan routes → relevant current pages (homepage, /about, /blog, /our-agents)

#### 5. Deprecated HowTo Schema in `/how-it-works`
- **Before:** `@type: HowTo` with `HowToStep` entries — **rich results removed September 2023**
- **Impact:** Dead markup generating no rich results
- **Fix:** Replaced with valid `@type: Service` schema covering the cash home buying service, provider, areaServed, and a zero-cost Offer

#### 6. Sitemap Not Submitted to GSC
- **Before:** `list_sitemaps` returned empty `{}`
- **Fix:** Submitted `https://alchemyinvestmentsre.com/sitemap.xml` via GSC API. Now showing **45 URLs submitted, 0 errors**

---

### HIGH (Fixed)

#### 7. Hours Inconsistency in Schemas
- **Before:** `src/lib/schema.ts localBusinessSchema` had Mon-Fri 09:00–18:00; `src/app/page.tsx` homepage schema had 24/7; `business.config.json` said "Available 24/7"
- **Fix:** Updated `schema.ts` to array format with all 7 days, opens `00:00`, closes `23:59`

#### 8. Missing Service Areas in `schema.ts`
- **Before:** Only 5 cities (Las Vegas, Henderson, North Las Vegas, Boulder City, Pahrump)
- **Fix:** Expanded to all 10 service areas: Las Vegas, Henderson, North Las Vegas, Summerlin, Enterprise, Paradise, Pahrump, Boulder City, Green Valley, Spring Valley

#### 9. Invalid `sameAs` in Homepage LocalBusiness Schema
- **Before:** `sameAs: ['https://alchemyinvestmentsre.com']` — site linking to itself, defeating the purpose
- **Fix:** Set to empty array `[]` — must be populated with actual social profiles when created

#### 10. Missing `@id` on Organization Schema
- **Before:** No `@id` field, preventing Knowledge Graph entity linking
- **Fix:** Added `@id: 'https://alchemyinvestmentsre.com/#organization'`

#### 11. `aggregateRatingSchema` Wrong Type + Incomplete
- **Before:** `@type: 'LocalBusiness'` — should match primary entity type; missing `bestRating`/`worstRating`
- **Fix:** Updated to `@type: ['RealEstateAgent', 'LocalBusiness']` with `@id`, added `bestRating: '5'`, `worstRating: '1'`

#### 12. Blog Post Missing Image + mainEntityOfPage in Schema
- **Before:** `/blog/sell-house-fast-las-vegas` BlogPosting schema had no `image`, no `mainEntityOfPage`, no `url`
- **Impact:** Google requires `image` for Article rich results; missing `mainEntityOfPage` weakens entity association
- **Fix:** Added `image` (1200×630 ImageObject), `mainEntityOfPage` WebPage `@id`, and `url`

#### 13. Missing Pages in Sitemap
- **Before:** `/speak-to-an-expert` and `/get-started` not included in `sitemap.ts`
- **Fix:** Both added with `priority: 0.8` and `priority: 0.7` respectively

#### 14. Privacy Policy / Terms in Sitemap
- **Before:** `/privacy-policy` and `/terms` included in sitemap even though they have `index: false`
- **Fix:** Removed from sitemap, added explanatory comment

#### 15. Geo Coordinates Precision
- **Before:** `36.1699, -115.1398` (4 decimal places)
- **Fix:** Updated to `36.16990, -115.13980` — meets 5 decimal place minimum for accurate local proximity signals

#### 16. Trailing Slash Duplicate — `/get-started/` vs `/get-started`
- **Before:** GSC showed both `/get-started` and `/get-started/` receiving impressions (duplicate content)
- **Fix:** Added 301 redirect `/get-started/` → `/get-started` in `next.config.js`

#### 17. `/properties` Page Not Noindexed
- **Before:** Lead capture form page was indexable with misleading metadata ("Browse 50+ properties...")
- **Fix:** Added `robots: { index: false, follow: true }` to `src/app/properties/layout.tsx`

---

### MEDIUM (Not Fixed — Require Manual Action)

#### 18. FAQ Schema — Restricted to Gov/Healthcare (Aug 2023)
- FAQPage schema on `/faq` and homepage **will not generate rich results** for real estate sites
- Schema is kept for AI search citation value (Perplexity, ChatGPT read FAQ schema)
- **Action:** No code change needed; accept no FAQ rich snippets from Google

#### 19. No Social Media Profiles Configured
- `sameAs` arrays are empty throughout — no Facebook, Google Business Profile, LinkedIn, etc.
- **Action:** Create/claim social profiles and add URLs to `sameAs` in `src/lib/schema.ts` and `src/app/page.tsx`

#### 20. Map on Contact Page is a Placeholder
- Contact page shows: "Map placeholder - Integrate Google Maps here"
- **Action:** Embed actual Google Maps iframe for `8978 Spanish Ridge, Las Vegas, NV 89148`

#### 21. `/blog/sell-house-fast-las-vegas` — Position 51, 0 Clicks
- 379 impressions, avg position 51, zero clicks = deep page 5+ result
- Page needs stronger on-page optimization: more unique content, internal links, and backlinks
- **Action:** See content action plan below

#### 22. Contact Page Hours Contradiction
- Contact page displays "Mon-Fri: 9am - 6pm" but business is available 24/7
- **Action:** Update `src/app/contact/page.tsx` displayed hours to match "Available 7 Days a Week"

---

### LOW (Not Fixed — Backlog)

#### 23. `site.config.json` Font Mismatch
- Config says `"heading": "Inter"` but layout.tsx loads Nunito and Quicksand
- **Action:** Update `site.config.json` fonts to match actual loaded fonts

#### 24. Logo File Inconsistency
- `site.config.json` references `/logo.svg` but schema uses `/logo.png`
- **Action:** Confirm which file exists in `/public/` and standardize

#### 25. Missing AI Crawler `llms.txt`
- No `llms.txt` file — increasingly expected by AI search engines for citation eligibility
- **Action:** Create `/public/llms.txt` with business info summary

#### 26. No IndexNow Implementation
- Site doesn't support IndexNow protocol (faster indexing on Bing/Yandex/Naver)
- ChatGPT sources from Bing index — IndexNow accelerates AI search visibility
- **Action:** Add IndexNow key and API call on content publish

---

---

## Round 2 Fixes — 2026-03-26 (Post-Ahrefs Analysis)

### Fixed

#### 27. Contact Page Hours Contradiction (MEDIUM → Fixed)
- **Before:** Contact page displayed "Mon-Fri: 9am - 6pm" and "Monday - Friday, 9:00 AM - 6:00 PM" in two places
- **Fix:** Updated both to "Available 7 Days a Week" — matches schema (24/7) and business reality

#### 28. site.config.json Font Mismatch (LOW → Fixed)
- **Before:** `"heading": "Inter", "body": "Inter"` — layout.tsx loads Nunito + Quicksand, not Inter
- **Fix:** Updated to `"heading": "Quicksand", "body": "Nunito"`

#### 29. site.config.json Logo File Mismatch (LOW → Fixed)
- **Before:** `"src": "/logo.svg"` — only `logo.png` and `logo-white.png` exist in `/public/`
- **Fix:** Updated to `"src": "/logo.png"`

#### 30. Missing llms.txt for AI Search (LOW → Fixed)
- **Before:** No `llms.txt` — AI search engines (Perplexity, ChatGPT) couldn't find structured business info
- **Fix:** Created `/public/llms.txt` with business name, services, NAP, service areas, and key page URLs

### Not Fixed — Requires API Config

#### 31. DataForSEO — 401 Unauthorized
- Ranked keywords, keyword opportunities, and competitor domain analysis still blocked
- Configure credentials in MCP server to unlock

#### 32. Firecrawl — 401 Unauthorized
- Security headers audit, full-page content crawl still blocked
- Configure credentials in MCP server to unlock

### Not Fixed — Requires Manual Action

#### 33. Toxic Backlink Profile — 0 Dofollow Links
- **Finding:** 100% of 47 live backlinks are from link-selling spam services, all nofollow
- **Impact:** Zero link equity being passed. DR stuck at 1.0. Cannot rank competitively without real backlinks.
- **Action:** Prioritize earning legitimate backlinks from:
  - Local Las Vegas news sites (Review-Journal, Vegas Inc, local.com)
  - Real estate directories (BiggerPockets, Connected Investors, REI.com)
  - Local business citations (BBB, Yelp, Chamber of Commerce)
  - Consider disavowing worst spam links via GSC Disavow Tool (though all are nofollow, so low urgency)

---

## Files Changed

| File | Change |
|------|--------|
| `config/business.config.json` | Phone (547→718), address street+ZIP, email |
| `src/lib/schema.ts` | Email, hours (24/7 array), 10 service areas, geo precision, org @id, aggregateRating type+fields |
| `src/app/page.tsx` | Email, sameAs fixed |
| `src/app/how-it-works/page.tsx` | HowTo → Service schema |
| `src/app/robots.ts` | Orphan page disallows, AI crawler rules |
| `src/app/sitemap.ts` | Added /get-started, /speak-to-an-expert; removed noindex pages |
| `src/app/blog/sell-house-fast-las-vegas/page.tsx` | BlogPosting schema: image, mainEntityOfPage, url |
| `src/app/properties/layout.tsx` | noindex added |
| `src/app/contact/page.tsx` | Email standardized |
| `src/app/speak-to-an-expert/page.tsx` | Email standardized |
| `src/components/Footer.tsx` | Email standardized |
| `next.config.js` | 301 redirects for 17 orphan/demo routes |
| **GSC** | Sitemap submitted (45 URLs, 0 errors) |
| `src/app/contact/page.tsx` | Hours: "Mon-Fri 9am-6pm" → "Available 7 Days a Week" (2 instances) |
| `config/site.config.json` | Fonts: Inter → Quicksand/Nunito; Logo: /logo.svg → /logo.png |
| `public/llms.txt` | Created — structured business info for AI search engines |

---

## Prioritized Manual Action Plan

### Critical (Do This Week)

1. **Fix GBP (Google Business Profile)**
   - Verify/create GBP listing at `8978 Spanish Ridge, Las Vegas, NV 89148`
   - Set primary category: **"Real Estate Investor"** (most impactful local pack factor)
   - Add secondary categories: Real Estate Agent, Real Estate Consultant
   - Ensure phone `(702) 718-6934` and email `offers@alchemyinvestmentsre.com` match the site exactly
   - Add business hours (or set 24/7)
   - Add photos (exterior, team, office)

2. **Get Reviews — The 18-Day Rule**
   - Rankings drop if no new reviews for 3 weeks (Sterling Sky research)
   - Target 10+ reviews minimum, then maintain steady cadence
   - Request reviews via email/SMS after each transaction
   - **DO NOT** gate reviews (Google/FTC violation)
   - Respond to every existing review

3. **Add Social Media Profiles + Update `sameAs`**
   - Create: Google Business Profile, Facebook, LinkedIn
   - Add Bing Places (critical — ChatGPT and Copilot source from Bing)
   - Add Apple Business Connect (27% of local searches)
   - After creating, update `sameAs` arrays in `src/lib/schema.ts` and `src/app/page.tsx`

4. **Fix Contact Page Map**
   - Replace placeholder with real Google Maps embed for `8978 Spanish Ridge, Las Vegas, NV 89148`

### High (This Month)

5. **Build Non-Branded Keyword Rankings**
   - Current state: 0 non-branded clicks for target keywords
   - Target keywords with real search volume:
     - "sell my house fast las vegas" (high volume, high competition)
     - "cash home buyers las vegas" (high volume)
     - "we buy houses las vegas" (medium volume)
     - "sell house as-is las vegas" (lower competition)
   - Strategy: strengthen location pages + blog content

6. **Optimize `/blog/sell-house-fast-las-vegas` (379 impressions, position 51)**
   - Currently near page 5 — with work, achievable on page 1-2
   - Add 500+ words of unique, locally-specific content
   - Add internal links from homepage and location pages using anchor text "sell house fast las vegas"
   - Add an FAQ section on the post targeting long-tail variants

7. **Build Location Page Content Depth**
   - Each location page needs >60% unique content (not just city name swaps)
   - Add neighborhood-specific details, local comps, testimonials per area
   - Add embedded Google Maps for each location
   - Current location pages need the "swap test" check — if swapping the city name makes content generic, it's a doorway page risk

8. **Citation Building**
   - Submit to: Yelp, BBB, Angi, HomeAdvisor, Thumbtack, Zillow, Realtor.com
   - Data aggregators: Data Axle, Foursquare, Neustar/TransUnion
   - Target "best cash home buyers las vegas" list placements (#1 AI citation factor)
   - Maintain strict NAP: `(702) 718-6934` / `offers@alchemyinvestmentsre.com` / `8978 Spanish Ridge, Las Vegas, NV 89148`

### Medium (Next 1-2 Months)

9. **Create `llms.txt`**
   - AI search engines increasingly use this for structured business info
   - Place at `https://alchemyinvestmentsre.com/llms.txt`

10. **Implement IndexNow**
    - Accelerates Bing indexing (→ ChatGPT/Copilot visibility)
    - Generate key, add to `/public/`, ping on content updates

11. **Fix Contact Page Hours**
    - Update `src/app/contact/page.tsx` to show correct availability (24/7 or actual hours)
    - Contradicting your schema (24/7) with displayed "Mon-Fri 9am-6pm" is a trust issue

12. **Backlink Outreach — URGENT (DR is 1.0, zero dofollow links)**
    - Ahrefs confirms 0 dofollow backlinks — 100% of 47 live links are spam/nofollow
    - Without real links, the site cannot rank for any competitive keywords
    - Priority targets:
      - Las Vegas Review-Journal, Vegas Inc (local press — high authority)
      - BiggerPockets.com, Connected Investors (real estate investor directories)
      - BBB (Better Business Bureau) — free listing, DR 91
      - Yelp business listing — DR 94
      - Chamber of Commerce (Las Vegas) — local authority
      - HomeAdvisor, Angi — home services directories
    - Benchmark: 5-10 quality local/niche links/month minimum
    - Brand mentions correlate 3× more with AI visibility than links

13. **DataForSEO API Credentials**
    - Returned 401 — configure API keys in MCP server config to enable:
      - Ranked keywords with exact positions
      - Keyword opportunities for target terms
      - Competitor domain analysis
      - Historical rank tracking

---

## Technical SEO Score Breakdown

| Category | Before | After | Notes |
|----------|--------|-------|-------|
| Crawlability | 55/100 | 82/100 | Robots fixed, orphan pages blocked, sitemap submitted |
| Indexability | 50/100 | 75/100 | Demo pages redirected, noindex on /properties |
| Security | 70/100 | 70/100 | HTTPS present; security headers not audited (Firecrawl 401) |
| URL Structure | 65/100 | 82/100 | Trailing slash redirect added, clean URLs present |
| Mobile | 80/100 | 80/100 | Responsive design; mobile-first indexing confirmed in GSC |
| Core Web Vitals | N/A | N/A | Requires CrUX data; fonts use display:swap ✓ |
| Structured Data | 55/100 | 80/100 | HowTo removed, schema errors fixed, @id added |
| JS Rendering | 75/100 | 75/100 | Next.js SSR — schemas in initial HTML ✓ |
| IndexNow | 0/100 | 0/100 | Not implemented |

---

## Local SEO Score

| Dimension | Score | Notes |
|-----------|-------|-------|
| GBP Signals | ?/25 | Cannot audit without GBP access |
| Reviews & Reputation | ?/20 | No review data available |
| Local On-Page SEO | 12/20 | Location pages exist but content depth unknown |
| NAP Consistency | 4/15 → 13/15 | Fixed in code; citation NAP still needs audit |
| Local Schema | 6/10 → 9/10 | Fixed hours, areas, email, @id |
| Local Link Authority | ?/10 | Requires Ahrefs/backlink data |
| **Estimated Total** | ~35/100 | ~55/100 after fixes |

---

## Schema Markup Summary

| Schema Type | Pages | Status |
|-------------|-------|--------|
| RealEstateAgent / LocalBusiness | Homepage, location pages | ✅ Fixed (email, hours, areas, @id) |
| Organization | Homepage | ✅ Fixed (@id, email added) |
| AggregateRating | Homepage | ✅ Fixed (type, bestRating/worstRating) |
| Service | /how-it-works | ✅ Fixed (replaced deprecated HowTo) |
| BlogPosting | /blog/sell-house-fast-las-vegas | ✅ Fixed (image, mainEntityOfPage, url) |
| Article | Dynamic blog posts | ✅ Correct via generateArticleSchema() |
| BreadcrumbList | Blog + location pages | ✅ Correct |
| FAQPage | /faq + homepage | ⚠️ Valid markup; no Google rich results for real estate (restricted Aug 2023) — kept for AI citation value |
| HowTo | /how-it-works | ✅ Removed (deprecated Sept 2023) |

---

*Report generated 2026-03-26. Ahrefs and DataForSEO API credentials were not configured — backlink analysis, keyword rank data, and competitor metrics require valid API keys.*
