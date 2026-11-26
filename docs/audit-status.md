# Alchemy site audit: status

Last updated 2026-11-25. Topic tag: `alchemy-site-audit`. Keyword rules: [keyword-split.md](keyword-split.md).

## Status table

| Part | PR | Merged? | Live? | Checked live? | Next step |
|---|---|---|---|---|---|
| Phone and email click tracking | #6 | yes, 2026-11-25 | yes | yes: tapping the header number on the live site sent `phone_clicked` to Google Analytics | In GA4 Admin, mark `phone_clicked` and `form_submission` as key events (needs Casey's GA sign-in) |
| Keyword split doc + this status file | #7 | yes, 2026-11-25 | n/a | n/a | Keep this table current |
| Fix broken images (share image, agent photos) | not started | | | | Needs real agent photos from Casey, or remove the photo slots |
| Trust signals: real review count, clickable Google reviews | not started | | | | Needs Casey's real numbers |
| Re-aim homepage title and headings at the brokerage angle | not started | | | | Waiting on Casey's OK |
| Re-aim or remove the 32 cash-buyer pages (locations, neighborhoods, services) | not started | | | | Waiting on Casey's choice |
| New agent / listing guides | not started | | | | After the re-aim |
| Speed: load tracking scripts after first tap or scroll | not started | | | | After tracking is confirmed |

## What the audit found (all checked 2026-11-25)

**Tracking**
- Google Analytics (property 479587121, tag G-5Q1HZBGB8V) received data from February 2025 to January 2026 (about 160–175 visits a month at the end), then nothing until today. The live site was stuck on an old build; since the build was promoted on 2026-11-25 page views arrive again (seen in GA4 realtime and in the browser).
- Forms already send a `form_submission` event. Phone taps were not tracked (fixed by PR #6).
- Tag Manager container GTM-WH595W73 loads on every page but is reported empty. Microsoft Clarity (session recordings) is loading.
- The site shows a fixed phone number, (702) 718-6934, with no CallRail number-swap script. That is fine for a search-only tracking number.

**Search**
- Google ranks the site for 3 searches, all brand names (DataForSEO, 2026-11-25).
- The homepage, 10 location pages, 12 neighborhood pages, 10 service pages and 6 blog posts aim at the same searches WBAVH owns. See [keyword-split.md](keyword-split.md).
- The basics are in place: every page checked has a title, description, canonical address and hidden search data (schema); `sitemap.xml`, `robots.txt` and `llms.txt` return 200.
- The sitemap gives almost every page the same "last changed" date (2026-03-09).

**Broken or risky things on the live site**
- The share image `/og-image.jpg` returns 404, so links shared on Facebook, iMessage and so on show no picture.
- Agent photos return 404 (`/agents/casey-ryan.jpg`); the `/public/agents` folder does not exist.
- The top menu item "Reviews" opens the blog.
- `src/lib/schema.ts` holds a hard-coded "4.9 stars, 127 reviews" rating. It is not used on any page today. It must not be switched on unless the numbers are real.
- Claims that need Casey to confirm with real numbers: "500+ homes purchased", "Top 1% agents", "10+ years", "$0 fees or commissions", "offer in 24 hours", agent stats (500+ / 300+ homes sold). WBAVH removed "offer in 24 hours" and "no fees" wording from its titles (WBAVH PR #543).
- `public/hero-drone.jpg` is 8.4 MB and not used anywhere.

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
