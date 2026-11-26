# Keywords and shared-text rules: Alchemy Investments RE and We Buy Any Vegas House

As of 2026-11-25. Owner: Casey.

## The goal (changed 2026-11-25)

Casey's decision, 2026-11-25: Alchemy **may target the same Google searches** as We Buy Any Vegas House (WBAVH). The aim is for Casey's sites to hold more than one of the top spots (WBAVH first, Alchemy in the #2 or #3 spot) for cash-buyer searches such as "sell my house fast las vegas" and "we buy houses las vegas".

The one hard rule: **no copied or closely reworded text between the sites.** Google can treat near-identical pages on related sites as duplicates and push them down, and that could hurt WBAVH, the priority site. This happened before with 702 Cash Offer.

An earlier version of this file (same day) said Alchemy must avoid WBAVH's searches. That rule is withdrawn. The agent-focused homepage built under it (PR #9) was undone in PR #11, and the 32 location, neighborhood and service pages were never changed.

## Rules for every Alchemy page, post and article

1. Write new copy. Never paste from webuyanyvegashouse.com, 702cashoffer.com or their code folders, and never rewrite one of their articles sentence by sentence or reuse its outline.
2. The same subject is fine (foreclosure, probate, selling as-is, a city page). The wording, structure, examples and questions must be Alchemy's own.
3. Lean on what only Alchemy can say: it is a licensed Nevada brokerage (S.0184768), so a seller can list with an agent or take a cash offer. That difference also makes the pages less alike.
4. Before publishing new or rewritten text, run the overlap check below against both sister sites and fix anything above stock-phrase level.
5. WBAVH stays the priority. If the two sites ever start trading places for a search WBAVH holds at #1, stop and ask Casey before pushing Alchemy further on that search.

## Claims rules (Casey, 2026-11-25)

- "Top 1% agents" may be used.
- No "$0 fees" / "no fees" / "no commissions" wording on the homepage. Pages that are only about the cash offer may say Alchemy does not charge fees on a cash sale.
- No years-in-business wording anywhere on the site ("10+ years", "since 2018" and so on), in page text or in the hidden data Google reads (schema).
- No Google review count or star rating anywhere, including schema.
- Homes bought: may use the WBAVH homes-bought figure, rounded, taken from a real source (QuickBooks, Podio or WBAVH's own site), with the source noted. Done 2026-11-25 (PR #13): the site says "2,000+", from WBAVH's `src/lib/company-facts.ts`.
- Agent photo spots: leave as they are for now.

## Overlap check (run 2026-11-25)

Method: every text file under `content/` and `src/` in this repo was compared with the WBAVH code folder (`~/webuyanyvegashouse`) and both 702 Cash Offer folders (`~/702 Cash Offer`, `~/702-Cash-Offer`), counting runs of 8 words in a row that appear in both.

Result: no copied articles. The highest overlap on a real page was about 4% of its 8-word runs (`content/blog/posts/sell-house-fast-las-vegas.json`, against a 702 Cash Offer post); most pages were 1–3%. The matches were stock phrases such as "close in as little as 7 days" and "cash offer within 24 hours", not paragraphs.

Limits: this catches word-for-word copying. It does not catch an article reworded sentence by sentence with the same outline, and it compared the code folders, not the live 702 Cash Offer website.

Pages with the most shared phrasing, to rewrite first if any are refreshed:

| Alchemy file | Share of 8-word runs also on a sister site | Closest sister page |
|---|---|---|
| `content/blog/posts/sell-house-fast-las-vegas.json` | 4.0% | 702 Cash Offer: how-to-sell-your-house-fast-for-cash-in-las-vegas |
| `content/locations/las-vegas.json` | 3.7% | WBAVH: static page defaults |
| `content/blog/posts/avoid-foreclosure-las-vegas.json` | 3.1% | 702 Cash Offer: how-to-avoid-foreclosure-las-vegas |
| `src/app/blog/sell-house-fast-las-vegas/page.tsx` | 2.9% | 702 Cash Offer: sell-my-house-fast-las-vegas |
| `content/locations/boulder-city.json` | 2.8% | WBAVH: we-buy-houses-boulder-city |

## Where the two sites stand (DataForSEO, United States, pulled 2026-11-25)

- webuyanyvegashouse.com ranks in Google's top 30 for 148 searches, including "we buy houses las vegas" (position 2), "we buy any vegas house" (2), "las vegas cash home buyers" (4), "sell my las vegas house" (6).
- alchemyinvestmentsre.com ranks for 3 searches, all brand names ("alchemy investments" at position 2).
- Monthly Google searches, national counts for the exact phrase: sell my house fast las vegas 260, we buy houses las vegas 210, cash home buyers las vegas 110, sell my house las vegas 110.

So Alchemy is starting from zero on these searches. Getting it into the top spots will take stronger pages and links from other sites, not only wording.

## Searches only Alchemy can go after (optional extra)

WBAVH is not a brokerage and does not target these, so they are free ground: real estate agent las vegas (2,400 a month), realtor las vegas (2,400), top real estate agents las vegas (480), best realtor las vegas (480), realtor henderson nv (480), how to choose a listing agent (1,600), home value las vegas (590), las vegas housing market (1,300).
