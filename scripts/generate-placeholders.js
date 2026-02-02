#!/usr/bin/env node

/**
 * Generate placeholder JSON files for service and neighborhood pages
 * Based on the expansion plans in docs/
 */

const fs = require('fs');
const path = require('path');

// Ensure content directories exist
const contentDir = path.join(process.cwd(), 'content');
const servicesDir = path.join(contentDir, 'services');
const neighborhoodsDir = path.join(contentDir, 'neighborhoods');

[servicesDir, neighborhoodsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Service pages to create (from SERVICE-PAGES-EXPANSION-PLAN.md Tier 1)
const servicePagesToCreate = [
  {
    slug: 'sell-house-divorce',
    title: 'Sell Your House During Divorce in Las Vegas | Fast & Fair Division',
    heading: 'Sell Your House Fast During Divorce',
    subheading: 'Make a difficult situation easier. Get a fair cash offer and divide assets quickly.',
    keywords: [
      'sell house during divorce Las Vegas',
      'divorce house sale Nevada',
      'split home equity divorce',
      'sell marital property fast'
    ],
    priority: 0.8
  },
  {
    slug: 'sell-inherited-house',
    title: 'Sell Inherited House Fast in Las Vegas | Quick Probate Property Sale',
    heading: 'Sell Your Inherited House Fast for Cash',
    subheading: 'Inherited a property? Get a fair cash offer and close quickly. No repairs needed.',
    keywords: [
      'sell inherited house Las Vegas',
      'inherited property Nevada',
      'sell house after death',
      'probate property sale'
    ],
    priority: 0.8
  },
  {
    slug: 'sell-house-probate',
    title: 'Sell House in Probate Las Vegas | Fast Probate Property Buyers',
    heading: 'Sell Your House in Probate Fast',
    subheading: 'We buy probate properties and work with executors. Fast closing, fair offers.',
    keywords: [
      'sell house in probate Nevada',
      'probate property sale Las Vegas',
      'buy probate house',
      'executor property sale'
    ],
    priority: 0.8
  },
  {
    slug: 'sell-house-relocation',
    title: 'Sell House Fast for Relocation Las Vegas | Quick Job Transfer Sale',
    heading: 'Relocating? Sell Your House Fast',
    subheading: 'Moving for work? Get a cash offer and close before your start date.',
    keywords: [
      'sell house fast relocation',
      'job transfer house sale Las Vegas',
      'military PCS Las Vegas',
      'corporate relocation home sale'
    ],
    priority: 0.7
  },
  {
    slug: 'sell-rental-property-tenants',
    title: 'Sell Rental Property with Tenants Las Vegas | Buy Occupied Properties',
    heading: 'Sell Your Rental Property Fast',
    subheading: 'Tired of being a landlord? We buy rental properties with tenants in place.',
    keywords: [
      'sell rental property Las Vegas',
      'sell house with tenants Nevada',
      'buy occupied property',
      'tired of landlord'
    ],
    priority: 0.7
  },
  {
    slug: 'sell-fixer-upper-as-is',
    title: 'Sell Fixer-Upper House As-Is Las Vegas | Buy Houses Needing Repairs',
    heading: 'Sell Your Fixer-Upper As-Is',
    subheading: 'No repairs needed. We buy houses in any condition for cash.',
    keywords: [
      'sell fixer upper Las Vegas',
      'sell house as-is needs repairs',
      'buy house needs work',
      'sell property any condition'
    ],
    priority: 0.7
  },
  {
    slug: 'sell-house-behind-property-taxes',
    title: 'Sell House Behind on Property Taxes Las Vegas | Stop Tax Lien Foreclosure',
    heading: 'Behind on Property Taxes? We Can Help',
    subheading: 'Avoid tax lien foreclosure. Get a cash offer and pay off back taxes at closing.',
    keywords: [
      'sell house behind on property taxes',
      'property tax lien Nevada',
      'stop tax foreclosure',
      'back taxes home sale'
    ],
    priority: 0.7
  },
  {
    slug: 'sell-house-financial-hardship',
    title: 'Sell House Due to Financial Hardship Las Vegas | Fast Cash Relief',
    heading: 'Sell Your House Due to Financial Hardship',
    subheading: 'Can\'t afford your mortgage? Get a fair cash offer and avoid foreclosure.',
    keywords: [
      'sell house can\'t afford mortgage',
      'financial hardship house sale',
      'job loss sell house',
      'medical bills sell property'
    ],
    priority: 0.7
  }
];

// Neighborhood pages to create (from LAS-VEGAS-NEIGHBORHOODS-PLAN.md Tier 1)
const neighborhoodPagesToCreate = [
  {
    slug: 'green-valley',
    name: 'Green Valley',
    city: 'Henderson',
    title: 'Sell Your House Fast in Green Valley, Henderson | Cash Offers in 24 Hours',
    heading: 'Sell Your Green Valley Home Fast for Cash',
    keywords: [
      'sell house fast Green Valley',
      'cash home buyers Green Valley',
      'we buy houses Green Valley',
      'sell house as-is Green Valley Henderson'
    ],
    medianHomePrice: '$425,000',
    priority: 0.7
  },
  {
    slug: 'green-valley-ranch',
    name: 'Green Valley Ranch',
    city: 'Henderson',
    title: 'Sell Your House Fast in Green Valley Ranch | Henderson Cash Buyers',
    heading: 'Sell Your Green Valley Ranch Home Fast for Cash',
    keywords: [
      'sell house fast Green Valley Ranch',
      'Green Valley Ranch cash buyers',
      'we buy houses Green Valley Ranch',
      'sell home Green Valley Ranch Henderson'
    ],
    medianHomePrice: '$550,000',
    priority: 0.7
  },
  {
    slug: 'anthem-henderson',
    name: 'Anthem',
    city: 'Henderson',
    title: 'Sell Your House Fast in Anthem, Henderson | Cash Home Buyers',
    heading: 'Sell Your Anthem Home Fast for Cash',
    keywords: [
      'sell house fast Anthem',
      'Anthem Henderson cash home buyers',
      'we buy houses Anthem',
      'sell house Anthem Nevada'
    ],
    medianHomePrice: '$575,000',
    priority: 0.7
  },
  {
    slug: 'lake-las-vegas',
    name: 'Lake Las Vegas',
    city: 'Henderson',
    title: 'Sell Luxury Home Fast in Lake Las Vegas | Cash Buyers',
    heading: 'Sell Your Lake Las Vegas Home Fast for Cash',
    keywords: [
      'sell luxury home Lake Las Vegas',
      'Lake Las Vegas cash buyers',
      'we buy houses Lake Las Vegas',
      'sell property Lake Las Vegas'
    ],
    medianHomePrice: '$750,000',
    priority: 0.7
  },
  {
    slug: 'summerlin-centre',
    name: 'Summerlin Centre',
    city: 'Summerlin',
    title: 'Sell Your House Fast in Summerlin Centre | Cash Home Buyers',
    heading: 'Sell Your Summerlin Centre Home Fast for Cash',
    keywords: [
      'sell house fast Summerlin Centre',
      'Summerlin Centre cash buyers',
      'we buy houses Summerlin Centre',
      'sell home Summerlin'
    ],
    medianHomePrice: '$525,000',
    priority: 0.7
  },
  {
    slug: 'the-ridges',
    name: 'The Ridges',
    city: 'Summerlin',
    title: 'Sell Luxury Home Fast in The Ridges Summerlin | Cash Buyers',
    heading: 'Sell Your Ridges Home Fast for Cash',
    keywords: [
      'sell luxury home The Ridges',
      'The Ridges Summerlin cash buyers',
      'we buy houses The Ridges',
      'luxury home sale Summerlin'
    ],
    medianHomePrice: '$1,200,000',
    priority: 0.7
  },
  {
    slug: 'red-rock-country-club',
    name: 'Red Rock Country Club',
    city: 'Summerlin',
    title: 'Sell Luxury Home Fast in Red Rock Country Club | Cash Buyers',
    heading: 'Sell Your Red Rock Country Club Home Fast',
    keywords: [
      'sell luxury home Red Rock Country Club',
      'Red Rock cash buyers',
      'we buy houses Red Rock Country Club',
      'luxury home sale Summerlin'
    ],
    medianHomePrice: '$1,500,000',
    priority: 0.7
  },
  {
    slug: 'aliante',
    name: 'Aliante',
    city: 'North Las Vegas',
    title: 'Sell Your House Fast in Aliante, North Las Vegas | Cash Buyers',
    heading: 'Sell Your Aliante Home Fast for Cash',
    keywords: [
      'sell house fast Aliante',
      'Aliante North Las Vegas cash buyers',
      'we buy houses Aliante',
      'sell home North Las Vegas'
    ],
    medianHomePrice: '$425,000',
    priority: 0.7
  }
];

// Template for service pages
function createServicePageTemplate(service) {
  return {
    slug: service.slug,
    type: 'service',
    seo: {
      title: service.title,
      description: `${service.subheading} Get a fair cash offer in 24 hours. Close in as little as 7 days. No repairs, no fees, no commissions.`,
      keywords: service.keywords,
      canonical: `https://alchemyinvestmentsre.com/services/${service.slug}`
    },
    hero: {
      heading: service.heading,
      subheading: service.subheading,
      cta: 'Get Your Cash Offer',
      ctaLink: '/#hero-form'
    },
    sections: [
      {
        type: 'intro',
        heading: `[PLACEHOLDER] ${service.heading}`,
        content: '[PLACEHOLDER] Add 2-3 paragraphs introducing this service and explaining how we help homeowners in this situation. Be empathetic and solution-focused.'
      },
      {
        type: 'benefits',
        heading: 'Why Choose Us',
        items: [
          {
            icon: 'Clock',
            title: 'Fast Cash Offers',
            description: 'Receive a fair, no-obligation cash offer within 24 hours of contacting us.'
          },
          {
            icon: 'Home',
            title: 'Sell As-Is',
            description: 'No need to make repairs, clean, or stage your home. We buy it exactly as it is.'
          },
          {
            icon: 'DollarSign',
            title: 'No Fees or Commissions',
            description: 'Save thousands on realtor commissions, closing costs, and other hidden fees.'
          },
          {
            icon: 'Calendar',
            title: 'Close on Your Timeline',
            description: 'Choose your closing date. We can close in as little as 7 days or wait until you\'re ready.'
          }
        ]
      },
      {
        type: 'process',
        heading: 'How It Works',
        items: [
          {
            step: 1,
            title: 'Tell Us About Your Situation',
            description: 'Fill out our simple form or give us a call. Tell us about your property and your situation.'
          },
          {
            step: 2,
            title: 'Get Your Cash Offer',
            description: 'We\'ll evaluate your property and present you with a fair, no-obligation cash offer within 24 hours.'
          },
          {
            step: 3,
            title: 'Choose Your Closing Date',
            description: 'If you accept our offer, pick a closing date that works for you. We\'re flexible with your timeline.'
          },
          {
            step: 4,
            title: 'Get Paid and Move On',
            description: 'Close at a local title company and receive your cash. It\'s that simple.'
          }
        ]
      },
      {
        type: 'richtext',
        heading: '[PLACEHOLDER] Additional Information',
        html: '<p>[PLACEHOLDER] Add situation-specific information here. Include Nevada laws, timelines, common scenarios, etc. Aim for 500-1000 words.</p>'
      },
      {
        type: 'faqs',
        heading: 'Frequently Asked Questions'
      },
      {
        type: 'cta',
        heading: 'Ready to Get Started?',
        content: 'Get your fair cash offer today. No obligation, no pressure—just a simple solution.',
        cta: 'Get Started Now',
        ctaLink: '/#hero-form'
      }
    ],
    faqs: [
      {
        question: '[PLACEHOLDER] How quickly can you help with my situation?',
        answer: '[PLACEHOLDER] Add situation-specific answer here.'
      },
      {
        question: '[PLACEHOLDER] What documents do I need?',
        answer: '[PLACEHOLDER] Add situation-specific answer here.'
      },
      {
        question: '[PLACEHOLDER] How do you determine your offer price?',
        answer: '[PLACEHOLDER] Add answer here.'
      },
      {
        question: 'Will I have to pay any fees or commissions?',
        answer: 'No! Unlike selling with a real estate agent (which typically costs 6% in commissions), there are no fees, commissions, or closing costs when you sell to us. The cash offer we make is the amount you\'ll receive at closing.'
      }
    ],
    testimonials: [
      {
        name: '[PLACEHOLDER]',
        location: 'Las Vegas, NV',
        rating: 5,
        text: '[PLACEHOLDER] Add situation-specific testimonial here.',
        date: '2024-01-31'
      }
    ],
    migration: {
      oldUrl: '',
      redirectFrom: [],
      lastModified: '2024-01-31',
      priority: service.priority,
      changeFrequency: 'monthly'
    }
  };
}

// Template for neighborhood pages
function createNeighborhoodPageTemplate(neighborhood) {
  return {
    slug: neighborhood.slug,
    type: 'neighborhood',
    parentLocation: neighborhood.city.toLowerCase(),
    seo: {
      title: neighborhood.title,
      description: `Get a fair cash offer for your ${neighborhood.name} home in 24 hours. We buy houses as-is in any condition. No repairs, no fees, no commissions. Close in as little as 7 days.`,
      keywords: neighborhood.keywords,
      canonical: `https://alchemyinvestmentsre.com/neighborhoods/${neighborhood.slug}`
    },
    hero: {
      heading: neighborhood.heading,
      subheading: `Get a fair, no-obligation cash offer in 24 hours for your ${neighborhood.name} property.`,
      cta: 'Get Your Cash Offer',
      ctaLink: '/#hero-form'
    },
    neighborhood: {
      name: neighborhood.name,
      city: neighborhood.city,
      state: 'Nevada',
      description: `[PLACEHOLDER] Brief description of ${neighborhood.name}`,
      medianHomePrice: neighborhood.medianHomePrice,
      keyAmenities: [
        '[PLACEHOLDER] Amenity 1',
        '[PLACEHOLDER] Amenity 2',
        '[PLACEHOLDER] Amenity 3'
      ]
    },
    sections: [
      {
        type: 'intro',
        heading: `Why ${neighborhood.name} Homeowners Choose Alchemy Investments RE`,
        content: `[PLACEHOLDER] Add 2-3 paragraphs about ${neighborhood.name}. Include neighborhood history, characteristics, why people love living here, and why we're the best choice for selling quickly.`
      },
      {
        type: 'benefits',
        heading: `Benefits of Selling Your ${neighborhood.name} Home to Us`,
        items: [
          {
            icon: 'Clock',
            title: 'Fast Cash Offers',
            description: 'Receive a fair, no-obligation cash offer within 24 hours of contacting us.'
          },
          {
            icon: 'Home',
            title: 'Sell As-Is',
            description: `No need to make repairs, clean, or stage your ${neighborhood.name} home. We buy it exactly as it is.`
          },
          {
            icon: 'DollarSign',
            title: 'No Fees or Commissions',
            description: 'Save thousands on realtor commissions, closing costs, and other hidden fees.'
          },
          {
            icon: 'Calendar',
            title: 'Close on Your Timeline',
            description: 'Choose your closing date. We can close in as little as 7 days or wait until you\'re ready.'
          },
          {
            icon: 'ShieldCheck',
            title: 'No Contingencies',
            description: 'Our cash offers aren\'t contingent on financing, appraisals, or inspections.'
          },
          {
            icon: 'Users',
            title: `Local ${neighborhood.city} Experts`,
            description: `We know ${neighborhood.name}'s market, property values, and trends inside and out.`
          }
        ]
      },
      {
        type: 'process',
        heading: `How to Sell Your ${neighborhood.name} House for Cash`,
        items: [
          {
            step: 1,
            title: 'Tell Us About Your Property',
            description: `Fill out our simple form or give us a call. Tell us about your ${neighborhood.name} home and your situation.`
          },
          {
            step: 2,
            title: 'Get Your Cash Offer',
            description: 'We\'ll evaluate your property and present you with a fair, no-obligation cash offer within 24 hours.'
          },
          {
            step: 3,
            title: 'Choose Your Closing Date',
            description: 'If you accept our offer, pick a closing date that works for you. We\'re flexible with your timeline.'
          },
          {
            step: 4,
            title: 'Get Paid and Move On',
            description: 'Close at a local title company and receive your cash. It\'s that simple.'
          }
        ]
      },
      {
        type: 'richtext',
        heading: `About ${neighborhood.name}, ${neighborhood.city}`,
        html: `<p>[PLACEHOLDER] Add detailed neighborhood information here:</p><ul><li>History and establishment</li><li>Demographics and population</li><li>Schools and education</li><li>Parks and recreation</li><li>Shopping and dining</li><li>Transportation and access</li><li>Real estate market trends</li></ul><p>Aim for 800-1,200 words of unique, valuable content.</p>`
      },
      {
        type: 'richtext',
        heading: `Common Reasons ${neighborhood.name} Homeowners Sell to Us`,
        html: '<p>[PLACEHOLDER] Add localized scenarios:</p><ul><li><strong>Avoiding Foreclosure</strong></li><li><strong>Inherited Property</strong></li><li><strong>Divorce or Separation</strong></li><li><strong>Relocation</strong></li><li><strong>Costly Repairs</strong></li><li><strong>Downsizing</strong></li></ul>'
      },
      {
        type: 'faqs',
        heading: `${neighborhood.name} Home Selling FAQs`
      },
      {
        type: 'cta',
        heading: `Ready to Sell Your ${neighborhood.name} Home?`,
        content: 'Get your fair cash offer today. No obligation, no pressure—just a simple solution.',
        cta: 'Get Started Now',
        ctaLink: '/#hero-form'
      }
    ],
    faqs: [
      {
        question: `How quickly can you buy my ${neighborhood.name} house?`,
        answer: 'We can close in as little as 7 days, though we\'re flexible with your timeline. Some sellers need to close immediately, while others prefer to wait a few weeks or even months. You choose the closing date that works best for you.'
      },
      {
        question: 'Do you really buy houses in any condition?',
        answer: `Yes! We buy houses in ${neighborhood.name} in any condition—from move-in ready homes to properties that need significant repairs. Whether your home has foundation issues, needs a new roof, has outdated interiors, or has fire or water damage, we'll make you a fair cash offer.`
      },
      {
        question: 'How do you determine your offer price?',
        answer: `We evaluate your ${neighborhood.name} property based on its location, size, condition, and recent comparable sales in your neighborhood. Our goal is to make a fair offer that reflects the current market while factoring in any repairs or updates needed.`
      },
      {
        question: 'Will I have to pay any fees or commissions?',
        answer: 'No! Unlike selling with a real estate agent (which typically costs 6% in commissions), there are no fees, commissions, or closing costs when you sell to us. The cash offer we make is the amount you\'ll receive at closing.'
      }
    ],
    testimonials: [
      {
        name: '[PLACEHOLDER]',
        location: `${neighborhood.name}, ${neighborhood.city}`,
        rating: 5,
        text: `[PLACEHOLDER] Add neighborhood-specific testimonial here for ${neighborhood.name}.`,
        date: '2024-01-31'
      }
    ],
    migration: {
      oldUrl: '',
      redirectFrom: [],
      lastModified: '2024-01-31',
      priority: neighborhood.priority,
      changeFrequency: 'monthly'
    }
  };
}

// Generate service page JSON files
console.log('Generating service page placeholders...\n');
let serviceCount = 0;

servicePagesToCreate.forEach(service => {
  const filePath = path.join(servicesDir, `${service.slug}.json`);

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`⏭️  Skipping ${service.slug}.json (already exists)`);
    return;
  }

  const template = createServicePageTemplate(service);
  fs.writeFileSync(filePath, JSON.stringify(template, null, 2));
  console.log(`✅ Created ${service.slug}.json`);
  serviceCount++;
});

// Generate neighborhood page JSON files
console.log('\nGenerating neighborhood page placeholders...\n');
let neighborhoodCount = 0;

neighborhoodPagesToCreate.forEach(neighborhood => {
  const filePath = path.join(neighborhoodsDir, `${neighborhood.slug}.json`);

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`⏭️  Skipping ${neighborhood.slug}.json (already exists)`);
    return;
  }

  const template = createNeighborhoodPageTemplate(neighborhood);
  fs.writeFileSync(filePath, JSON.stringify(template, null, 2));
  console.log(`✅ Created ${neighborhood.slug}.json`);
  neighborhoodCount++;
});

console.log('\n' + '='.repeat(60));
console.log(`✨ Generation complete!`);
console.log(`   Service pages created: ${serviceCount}`);
console.log(`   Neighborhood pages created: ${neighborhoodCount}`);
console.log(`   Total: ${serviceCount + neighborhoodCount}`);
console.log('='.repeat(60));
console.log('\n📝 Next steps:');
console.log('   1. Review generated JSON files in content/services/ and content/neighborhoods/');
console.log('   2. Replace [PLACEHOLDER] markers with real content');
console.log('   3. Use /analyze-seo to research keywords for each page');
console.log('   4. Add unique, valuable content (1,500-2,000 words per page)');
console.log('   5. Test the pages locally');
console.log('   6. Deploy to production\n');
