# Alchemy site audit: status

Last updated 2026-11-25 (evening). Topic tag: `alchemy-site-audit`. Keyword and shared-text rules: [keyword-split.md](keyword-split.md).

**Goal changed on 2026-11-25:** Alchemy may target the same searches as WBAVH (aim: #2 and #3 spots). The hard rule is no copied text between the sites. The "re-aim at the brokerage angle" plan is cancelled.

## Status table

| Part | PR | Merged? | Live? | Checked live? | Next step |
|---|---|---|---|---|---|
| Phone and email click tracking | #6 | yes, 2026-11-25 | yes | yes: tapping the header number on the live site sent `phone_clicked` to Google Analytics | Done 2026-11-25: `phone_clicked` and `form_submission` are marked as key events in GA4 (no dollar value, counted once per event). Check the Key events report in a day or two for the first counts |
| Keyword doc + this status file | #7, #8, and the PR that adds this line | yes | n/a | n/a | Keep current |
| Agent-focused homepage rewrite | #9 | yes, then undone by #11 | undone | yes: old title is back | None |
| Remove years-in-business wording and unused review-count data | #10 | yes, 2026-11-25 | yes | yes: 5 live pages checked | None |
| Undo homepage rewrite; keep "$0 fees" and years off the homepage | #11 | yes, 2026-11-25 | yes | yes: title, no fee or years wording | None |
| Re-aim the 32 location, neighborhood and service pages | none | cancelled, pages unchanged | | | None |
| Copied-text check against WBAVH and 702 Cash Offer | n/a | n/a | n/a | n/a | Done 2026-11-25: no copied articles (see keyword-split.md). Re-run `scripts/text-overlap-check.py` before publishing new text |
| Homes-bought figure: "500+" → "2,000+" (source: WBAVH `src/lib/company-facts.ts`); unverified About stats removed | #13 | yes, 2026-11-25 | yes | yes: homepage, About and FAQ show 2,000+ and no "500+", "since 2010", "4.9★" or "$50M+" | None |
| Footer "BBB Accredited Business" and "4.9/5 Rating"; agents' own stats on Our Agents | question open | | | | Ask Casey whether these are true and should stay |
| "No fees" wording on non-cash pages | not started | | | | Homepage is done; check other general pages. Cash-offer pages may keep it |
| Share image `/og-image.jpg` was missing (404) | #18 | yes, 2026-11-25 | yes | yes: the address returns the 1200x630 picture and the homepage points to it | Facebook and others may show the old blank preview for a while until they re-read the page |
| Agent photo spots | on hold | | | | Casey: leave alone for now |
| Customer testimonials on 32 pages | question open | | | | Ask Casey whether they are real customers |
| Speed: shrink the 8.4 MB homepage background photo | #16 | yes, 2026-11-25 | yes | yes: live homepage serves about 62 KB to a phone-width screen and 252 KB at 1,920 px wide (was 8.4 MB for everyone) | Run Google PageSpeed when its daily quota resets, to get a before/after score |
| Speed: load Analytics and Tag Manager after the first scroll or tap (or 12 seconds) | #21 | yes, 2026-11-25 | yes | yes: on the live site no Google requests before a tap; after a phone tap, `page_view` and `phone_clicked` were sent | Visitors who leave within 12 seconds without scrolling or tapping are no longer counted. Run Google PageSpeed when its quota resets for a score |
| Tag Manager connector on this Mac | fixed 2026-11-25 | n/a | n/a | yes, 2026-11-26: works in a new session | Its Google login (`search-console@inherit-cash-now.iam.gserviceaccount.com`) only sees the 702 Cash Offer and Inherit Cash Now accounts, not Alchemy or WBAVH. Add it as a user in Tag Manager only if Casey asks |
| Tag Manager container GTM-WH595W73 checked | no code change | n/a | n/a | yes, 2026-11-26: read in Tag Manager and on the live site | Casey 2026-11-26: keep both tags. Holds 2 tags on every page (Microsoft Clarity project `u14pbv4lhn`, Ahrefs Analytics), live version 2, nothing unpublished. One visit sends 1 page view (no double counting). The Analytics script downloads twice (183 KB each, once by the site and once by Tag Manager); optional speed fix, not done |
## What the audit found (all checked 2026-11-25)

**Tracking**
- Google Analytics (property 479587121, tag G-5Q1HZBGB8V) received data from February 2025 to January 2026 (about 160–175 visits a month at the end), then nothing until today. The live site was stuck on an old build; since the build was promoted on 2026-11-25 page views arrive again (seen in GA4 realtime and in the browser).
- Forms already send a `form_submission` event. Phone taps were not tracked (fixed by PR #6).
- Tag Manager container GTM-WH595W73 loads on every page. Corrected 2026-11-26: it is not empty; it holds two tags, Microsoft Clarity (session recordings) and Ahrefs Analytics. It has no Google Analytics or ad tags.
- The site shows a fixed phone number, (702) 718-6934, with no CallRail number-swap script. That is fine for a search-only tracking number.

**Search**
- Google ranks the site for 3 searches, all brand names (DataForSEO, 2026-11-25).
- The homepage, 10 location pages, 12 neighborhood pages, 10 service pages and 6 blog posts aim at the same searches WBAVH holds. As of 2026-11-25 Casey wants that (see [keyword-split.md](keyword-split.md)); the rule is no copied text.
- The basics are in place: every page checked has a title, description, canonical address and hidden search data (schema); `sitemap.xml`, `robots.txt` and `llms.txt` return 200.
- The sitemap gives almost every page the same "last changed" date (2026-03-09).

**Broken or risky things on the live site**
- The share image `/og-image.jpg` returns 404, so links shared on Facebook, iMessage and so on show no picture.
- Agent photos return 404 (`/agents/casey-ryan.jpg`); the `/public/agents` folder does not exist.
- The top menu item "Reviews" opens the blog.
- `src/lib/schema.ts` held a hard-coded "4.9 stars, 127 reviews" rating that no page used. Removed in PR #10; Casey wants no review count anywhere.
- Claims that need Casey to confirm with real numbers: "500+ homes purchased", "Top 1% agents", "10+ years", "$0 fees or commissions", "offer in 24 hours", agent stats (500+ / 300+ homes sold). WBAVH removed "offer in 24 hours" and "no fees" wording from its titles (WBAVH PR #543).
- `public/hero-drone.jpg` is 8.4 MB and is the homepage's background photo (`src/components/HomepageHeroForm.tsx`). It is in use, so do not delete it; it needs to be shrunk and served in phone and desktop sizes. This is likely the biggest speed problem on the site.

**Not measured**
- Google's PageSpeed test was out of daily quota on 2026-11-25, so there is no speed score yet.
- Search Console could not be read (the connector failed with a file-system error).

## WBAVH lessons that carry over

Full list with proof: `wbavh-wins-2026-11-25.md` in the shared session notes. Short version:

1. One strong page per search topic (WBAVH PRs #363, #370: clicks per day +21%).
2. Make things that look clickable actually clickable, such as review badges (PRs #348, #340: useless taps fell from 56% to 10%).
3. Load tracking scripts after the visitor's first tap or scroll (PR #600: phone speed score 68 to 80).
4. One honest business record in the hidden search data, and the same rating and review count everywhere (PRs #399, #389).
5. Tell Google and IndexNow about changes after each deploy, with real "last changed" dates (PR #629).
6. Same event names on both sites (`phone_clicked`).

Not copied: WBAVH's page text, its keyword targets, and anything specific to its ad accounts.

## Deploy note

Vercel has not been moving the live domain to new builds by itself. After each merge run `vercel inspect alchemyinvestmentsre.com --scope casey-ryans-projects`; if it does not show the new build, run `vercel promote <build-url> --scope casey-ryans-projects`.
