# Alchemy Investments RE — Website Project

Real estate marketing website for cash home buyers in the Las Vegas metropolitan area.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Content**: MDX blog files, config-driven settings
- **Analytics**: GA4, Google Places
- **Deployment**: Vercel

## Project Structure

```
├── .claude/
│   ├── commands/         # Custom slash commands
│   └── settings.json     # Claude Code settings
├── config/
│   ├── site.config.json      # Branding, theme, SEO defaults
│   └── business.config.json  # Contact, hours, service areas
├── content/              # Blog and page content
├── docs/                 # Setup documentation
├── public/               # Static assets
├── seo/                  # SEO research and keyword plans
├── scripts/              # Build and utility scripts
└── src/
    ├── app/              # Next.js App Router pages
    ├── components/
    │   ├── layout/       # Header, Footer
    │   ├── sections/     # Page sections
    │   ├── seo/          # Schema components
    │   ├── templates/    # Page templates
    │   └── ui/           # Reusable UI
    └── lib/              # Utilities and constants
```

## Key Files

| File | Purpose |
|------|---------|
| `config/site.config.json` | Theme colors, fonts, SEO defaults |
| `config/business.config.json` | Phone, address, hours, service areas |

## Business Info

- **Name**: Alchemy Investments RE
- **Domain**: alchemyinvestmentsre.com
- **Phone**: (702) 547-6664
- **Email**: info@alchemyinvestmentsre.com
- **Service Areas**: Las Vegas, Henderson, North Las Vegas, Summerlin, Enterprise, Paradise, Pahrump, Boulder City, Green Valley, Spring Valley
- **License**: Nevada Real Estate License S.0184768

## Code Style

- TypeScript for all code
- Functional components with hooks
- Tailwind CSS for all styling — use `cn()` for conditional classes
- Named exports over default exports
- Keep components small and focused

## SEO Requirements

Every page must have:
- Unique title tag (50-60 chars) and meta description (150-160 chars)
- Open Graph tags and canonical URL
- Structured data (JSON-LD) via schema components

## MCP Servers

| Server | Purpose |
|--------|---------|
| `firecrawl` | Web scraping and crawling |
| `dataforseo` | Keyword research, rank tracking, SERP analysis |
| `ahrefs` | Backlink analysis, domain health, competitor research (global) |
| `gsc` | Google Search Console — clicks, impressions, rankings |
| `gtm` | Google Tag Manager (global) |

## SEO Research Workflow

All SEO analysis MUST use DataForSEO MCP tools, never web search estimates.

**Required DataForSEO API calls:**
1. `dataforseo_labs_google_ranked_keywords` — current rankings
2. `dataforseo_labs_google_keywords_for_site` — keyword opportunities
3. `dataforseo_labs_google_competitors_domain` — competitor analysis
4. `backlinks_summary` — backlink health

Save raw responses to `seo/*.json`.

## Custom Commands

| Command | Description |
|---------|-------------|
| `/analyze-seo [domain]` | Keyword research + competitor analysis via DataForSEO |
| `/seo-technical [url]` | Technical SEO audit (9 categories) |
| `/seo-local [url]` | Local SEO + GBP optimization analysis |
| `/seo-content [url]` | E-E-A-T + content quality audit |
| `/seo-geo [url]` | AI Overviews / GEO optimization |
| `/seo-schema [url]` | Schema markup detection and generation |
| `/generate-keyword-plan` | Create keyword strategy from research |
| `/build-page [name]` | Generate page from content |
| `/scrape-site [url]` | Scrape website content and metadata |
| `/voice-dna` | Generate brand voice profile |

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4
- `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY` — Address autocomplete
- `LEADS_WEBHOOK_URL` — Lead submission webhook

## Build & Deploy

```bash
npm run dev      # Development
npm run build    # Build
vercel           # Deploy
```
