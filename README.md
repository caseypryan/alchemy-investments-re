# Alchemy Investments RE Website

Modern Next.js website for Alchemy Investments RE - Licensed Las Vegas cash home buyers.

## Features

- ✅ Next.js 14+ with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Comprehensive SEO optimization
- ✅ Schema markup (LocalBusiness, RealEstateAgent, FAQPage)
- ✅ Mobile-responsive design
- ✅ Multiple conversion funnels
- ✅ Blog with SEO-optimized content
- ✅ FAQ with accordion interface

## Pages

- **Homepage** - Hero section, value propositions, testimonials, comparison table
- **About Us** - Company story, values, credentials
- **Contact** - Multiple contact methods, detailed form
- **FAQ** - 20+ questions with schema markup
- **Blog** - SEO-optimized articles

## SEO Features

- Primary keyword targeting: "sell house fast Las Vegas"
- Complete schema markup for rich snippets
- Optimized meta titles and descriptions
- Sitemap.xml and robots.txt
- Internal linking structure
- Mobile-first design
- Fast page load times

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository: `caseypryan/alchemy-investments-re`
4. Vercel will auto-detect Next.js configuration
5. Click "Deploy"
6. Your site will be live at `https://alchemy-investments-re.vercel.app`

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Custom Domain Setup

Once deployed on Vercel:

1. Go to Project Settings > Domains
2. Add your custom domain: `alchemyinvestmentsre.com`
3. Follow Vercel's DNS configuration instructions
4. Update your domain registrar with the provided nameservers

## Environment Variables

No environment variables required for basic deployment. Add these if implementing forms:

- `NEXT_PUBLIC_FORM_ENDPOINT` - Form submission endpoint
- `GOOGLE_ANALYTICS_ID` - Google Analytics tracking ID

## License & Credits

- Real Estate License: S.0184768 (Nevada)
- Built with Next.js, React, and Tailwind CSS
- Co-developed with Claude Sonnet 4.5

## Contact

- Phone: 702-718-6934
- Email: Casey@AlchemyInvestmentsRE.com
- Address: 8978 Spanish Ridge, Las Vegas, NV 89148
