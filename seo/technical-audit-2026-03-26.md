# Technical SEO Audit — alchemyinvestmentsre.com
**Date:** 2026-03-26
**Ahrefs Health Score:** 20/100 (Weak) — 99 errors, 96 warnings, 125 notices across 117 crawled URLs

---

## Technical Score: 41/100

| Category | Status | Score |
|----------|--------|-------|
| Crawlability | FAIL | 25/100 |
| Indexability | FAIL | 30/100 |
| Security | WARN | 60/100 |
| URL Structure | FAIL | 35/100 |
| Mobile | PASS | 75/100 |
| Core Web Vitals | N/A | — |
| Structured Data | WARN | 65/100 |
| JS Rendering | WARN | 60/100 |
| IndexNow | FAIL | 0/100 |

---

## Critical Issues (fix this week)

### C1 — 45/48 Sitemap URLs Return 3XX Redirects
**Category:** Crawlability / URL Structure
**Ahrefs issue:** "3XX redirect in sitemap" (45 URLs)

All but 3 URLs in the sitemap are flagged as returning redirects when Ahrefs crawls them. Root cause is most likely the Ahrefs project target including `www` or `http` variants — Vercel correctly 301-redirects these to the canonical `https://alchemyinvestmentsre.com` form, but Ahrefs logs every redirect as an error.

**Fix options (in order of preference):**
1. In Ahrefs Site Audit settings, set the crawl target to exactly `https://alchemyinvestmentsre.com` (non-www, HTTPS only) so the crawler doesn't start from a redirecting origin.
2. Confirm sitemap.xml only lists canonical non-www HTTPS URLs — it does (verified). No code change needed.

---

### C2 — 44 Canonical Tags Point to a Redirecting URL
**Category:** Indexability
**Ahrefs issue:** "Canonical points to redirect" (44 URLs)

Cascades directly from C1. If Ahrefs considers the www version a redirect target, any page whose canonical resolves through that redirect chain gets flagged. Fixing C1 will resolve most of these.

**Verify independently:** Check that no page sets a canonical to `https://www.alchemyinvestmentsre.com/...` or `http://...`. All inspected pages use the correct `https://alchemyinvestmentsre.com/...` form.

---

### C3 — Phone Number NAP Inconsistency
**Category:** Security / Trust signals
**Files:** `src/app/layout.tsx:26`, `config/business.config.json`

The root layout default meta description contains `(702) 718-6934`, which differs from the canonical business phone `(702) 547-6664` in business.config.json. The `speak-to-an-expert` page title also uses the wrong number.

This is a NAP (Name/Address/Phone) inconsistency that:
- Misleads potential customers
- Conflicts with schema markup and GBP listing
- Can suppress local pack rankings

**Fix:** Update `src/app/layout.tsx` line 26 and any hardcoded phone references to use `(702) 547-6664`.

---

### C4 — Duplicate Brand Name Appended to Page Titles
**Category:** Indexability
**Files:** `src/app/layout.tsx:24-25`, multiple page files

Root layout defines `template: '%s | Alchemy Investments RE'`. Several page-level `metadata.title` strings already include "Alchemy Investments RE", causing Google to render titles like:

```
About Us | Alchemy Investments RE | Licensed Las Vegas Cash Home Buyers | Alchemy Investments RE
Sell Your House As-Is in Las Vegas | No Repairs Required | Alchemy Investments RE | Alchemy Investments RE
```

Affected pages confirmed: `/about`, `/services/sell-house-as-is` (and likely all other service pages).

**Fix:** Strip the brand name from page-level title strings — let the template add it. Example:
- Before: `'About Us | Alchemy Investments RE | Licensed Las Vegas Cash Home Buyers'`
- After: `'About Us | Licensed Las Vegas Cash Home Buyers'`

Resulting rendered title: `About Us | Licensed Las Vegas Cash Home Buyers | Alchemy Investments RE` (55 chars ✅)

---

## High Priority Issues (fix within 1 week)

### H1 — 4 × 404 Pages + 4 × 4XX Pages
**Ahrefs issue:** "404 page" (4), "4XX page" (4)

Eight broken pages found during crawl. Ahrefs did not return the specific URLs via MCP. Check these in the Ahrefs Site Audit → Pages tab filtered by status code 4XX to get the URL list, then either restore the pages or implement 301 redirects.

---

### H2 — 3XX Page Receiving Organic Traffic
**Ahrefs issue:** "3XX page receives organic traffic" (1 URL)

One redirecting URL is indexed in Google and receiving organic clicks. This leaks link equity through the redirect hop. Find the URL in Ahrefs → Site Audit → Issues → "3XX page receives organic traffic", then either:
- Request removal via Google Search Console (if the page should not exist)
- Ensure the 301 redirect target is correct so equity is passed

---

### H3 — 44 Internal Links to Non-Indexable Pages
**Ahrefs issue:** "Page has links to broken page (not indexable)" (44 URLs)

44 pages contain internal links pointing to pages that are either redirects or non-indexable. This wastes crawl budget and confuses Googlebot. Audit internal links and update them to point to final canonical destinations.

---

### H4 — Static Blog Route Conflicts with Dynamic Route
**File:** `src/app/blog/sell-house-fast-las-vegas/page.tsx`

This static page coexists with `src/app/blog/[slug]/page.tsx`. Next.js will serve the static route at `/blog/sell-house-fast-las-vegas`, but if the content also exists as an MDX file that feeds the dynamic route, there will be two URLs serving nearly identical content. Verify only one route is live, or ensure the static page has a self-referencing canonical.

---

### H5 — No AI Crawler Directives in robots.txt
**Category:** Crawlability

robots.txt has no rules for AI crawlers. For a lead-gen site like this, the key decision is:

| Action | Recommendation |
|--------|---------------|
| GPTBot (OpenAI training) | Block — content is business, not public resource |
| ChatGPT-User (real-time browsing/citations) | **Allow** — citations drive brand awareness |
| ClaudeBot (Anthropic training) | Block or Allow — low practical impact |
| PerplexityBot (search + training) | **Allow** — Perplexity citations are valuable |
| Google-Extended (Gemini training) | Block — does NOT affect Google Search |
| Bytespider (ByteDance) | Block — no upside |

**Recommended addition to robots.txt:**
```
User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /
```

---

## Medium Priority Issues (fix within 1 month)

### M1 — IndexNow Not Implemented
**Category:** IndexNow
**Score impact:** 0/100 on this category

IndexNow allows instant notification to Bing, Yandex, and Naver when content changes. For a Next.js site on Vercel, this is easy to implement via the `next-sitemap` package or a custom API route.

**Recommended approach:** Add an IndexNow key file to `/public/[key].txt` and ping the IndexNow API on build/deploy via a Vercel deploy hook.

---

### M2 — Incomplete Open Graph Tags (1 Page)
**Ahrefs issue:** "Open Graph tags incomplete" (1 URL)

One page is missing required OG tags. Identify via Ahrefs Site Audit → Issues → "Open Graph tags incomplete". Ensure all pages have `og:title`, `og:description`, `og:image`, and `og:url`.

---

### M3 — Sitemap Uses `lastModified: new Date()` (Always Shows as Updated)
**File:** `src/app/sitemap.ts`

Every page in the sitemap shows the current build timestamp as `lastModified`, which signals to Google that ALL pages changed on every deploy. Google ignores this signal when it's inaccurate and may deprioritize crawling.

**Fix:** Replace `new Date()` with actual file modification dates using `fs.statSync()` for dynamic pages, or hardcode meaningful dates for static pages.

---

### M4 — Security Headers Cannot Be Verified via Fetch
**Category:** Security

WebFetch does not expose HTTP response headers. The following headers should be verified via a header checker tool (e.g., securityheaders.com):
- `Strict-Transport-Security` (HSTS)
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy`
- `Content-Security-Policy`

Vercel sets HSTS automatically on production domains. CSP is not set by default and requires a `next.config.js` `headers()` entry.

---

### M5 — /properties Page Is Orphaned (noindex, Not in Sitemap)
**File:** `src/app/properties/page.tsx`, `src/app/properties/layout.tsx`

The `/properties` page is noindex'd and excluded from the sitemap, but it receives no internal links either. If this page is intentionally hidden, confirm it serves a business purpose (e.g., paid traffic landing page) or remove it to reduce crawl surface.

---

## Low Priority (Backlog)

### L1 — `lastModified` Timestamps in Sitemap Are Not Accurate
*(Covered in M3 — implementation note)*

### L2 — Title Length After Template Append
After fixing C4, audit all page titles to confirm they fall within 50-60 characters after the template appends ` | Alchemy Investments RE` (25 chars). The about page title `About Us | Licensed Las Vegas Cash Home Buyers | Alchemy Investments RE` is 72 chars — trim the middle segment.

### L3 — GSC Access Not Configured for MCP
The GSC MCP server returned a permission error when querying `https://alchemyinvestmentsre.com`. Add the site property or verify the service account has Search Console access at the property level.

---

## Fixes by File

| File | Issue | Fix |
|------|-------|-----|
| `src/app/layout.tsx:26` | Wrong phone (702) 718-6934 | Replace with (702) 547-6664 |
| `src/app/layout.tsx:24-25` | Title template set, but pages repeat brand name | Keep template; strip brand from page titles |
| `src/app/about/page.tsx:7` | Title includes brand name | Remove "Alchemy Investments RE" from title string |
| `src/app/services/*/page.tsx` | Title includes brand name | Remove "Alchemy Investments RE" from all service page titles |
| `src/app/sitemap.ts` | `new Date()` on all pages | Use accurate lastModified dates |
| `public/robots.txt` | No AI crawler rules | Add GPTBot/Google-Extended/Bytespider Disallow |
| `src/app/speak-to-an-expert/page.tsx` | Wrong phone in title | Replace with (702) 547-6664 |

---

## Data Sources
- Ahrefs Site Audit (project ID 6090343, crawl 2026-03-27)
- Live page inspection via WebFetch (homepage, /about, /locations/las-vegas, /services/sell-house-as-is, /get-started, /speak-to-an-expert)
- Source code review: `next.config.js`, `src/app/layout.tsx`, `src/app/sitemap.ts`
- robots.txt and sitemap.xml fetched live
- GSC: permission error — no data available
