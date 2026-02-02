#!/usr/bin/env node

/**
 * Batch populate neighborhood page content with locally-accurate information
 */

const fs = require('fs');
const path = require('path');

const neighborhoodsDir = path.join(process.cwd(), 'content/neighborhoods');

// Comprehensive neighborhood content with real local information
const neighborhoodContent = {
  'green-valley': {
    neighborhood: {
      name: 'Green Valley',
      city: 'Henderson',
      state: 'Nevada',
      description: 'One of Henderson\'s first and most established master-planned communities, known for family-friendly atmosphere and excellent amenities.',
      population: 60000,
      medianHomePrice: '$425,000',
      yearEstablished: 1978,
      keyAmenities: [
        'Green Valley Ranch Resort & Casino',
        'The District at Green Valley Ranch shopping center',
        'Sunset Station Hotel & Casino',
        'Multiple championship golf courses',
        'Excellent Clark County School District schools',
        'Henderson Pavilion outdoor amphitheater'
      ]
    },
    intro: {
      heading: 'Why Green Valley Homeowners Choose Alchemy Investments RE',
      content: 'Green Valley is one of Henderson\'s most desirable and well-established master-planned communities. Since its development began in 1978, Green Valley has become synonymous with quality family living, excellent schools, and a strong sense of community. Whether you own a home in the original Green Valley area near Sunset Station or in one of the newer sections, this neighborhood offers the perfect blend of suburban tranquility and urban convenience.\n\nAt Alchemy Investments RE, we\'ve helped dozens of Green Valley homeowners sell their properties quickly for cash. From families relocating for work to retirees downsizing to smaller homes, we understand the unique reasons why Green Valley residents need to sell fast. Maybe you\'re moving to another part of the Las Vegas Valley, dealing with an inherited property, or simply need to access your home equity quickly.\n\nUnlike traditional real estate sales that can take 60-90 days in Green Valley\'s competitive market, we make you a fair cash offer within 24 hours and can close in as little as 7 days. No repairs needed, no open houses, no waiting for buyer financing—just a straightforward transaction that respects your timeline and your property\'s value in this established Henderson community.'
    },
    richtext: [
      {
        heading: 'About Green Valley, Henderson',
        html: '<h3>History and Development</h3><p>Green Valley was the first master-planned community in Henderson, with development beginning in 1978 by American Nevada Corporation. What started as raw desert has transformed into one of Southern Nevada\'s most successful planned communities, encompassing thousands of homes and establishing the template for future master-planned communities in the Las Vegas Valley.</p><h3>Location and Access</h3><p>Green Valley is located in the heart of Henderson, roughly bounded by Interstate 215 to the north, Horizon Ridge Parkway to the south, Green Valley Parkway to the east, and Eastern Avenue to the west. Residents enjoy quick access to:</p><ul><li><strong>Las Vegas Strip</strong> – 15-20 minutes via I-215</li><li><strong>Harry Reid International Airport</strong> – 15 minutes</li><li><strong>Downtown Henderson</strong> – 10 minutes</li><li><strong>Lake Las Vegas</strong> – 15 minutes</li></ul><h3>Housing and Real Estate</h3><p>Green Valley offers diverse housing options ranging from condos and townhomes to single-family homes and custom estates. The original areas feature homes from the 1980s and 1990s, while newer sections include modern construction. Home sizes typically range from 1,200 to 4,000+ square feet, with prices from the high $300,000s to over $1 million for luxury properties.</p><p>Popular neighborhoods within Green Valley include:</p><ul><li>Green Valley Estates</li><li>Green Valley South</li><li>Green Valley Ranch (adjacent upscale community)</li><li>Mission Hills</li><li>The Fountains</li></ul><h3>Amenities and Recreation</h3><p><strong>Shopping and Dining:</strong> The District at Green Valley Ranch is the area\'s premier shopping destination, featuring over 50 retail stores, restaurants, and entertainment venues. Sunset Galleria offers additional shopping options.</p><p><strong>Golf:</strong> Green Valley is a golfer\'s paradise with several courses including Legacy Golf Club, Wildhorse Golf Club, and nearby access to DragonRidge Country Club.</p><p><strong>Parks and Trails:</strong> The community features numerous parks, green spaces, and walking trails. Sunset Park, one of Henderson\'s largest parks, is just north of Green Valley.</p><p><strong>Entertainment:</strong> Green Valley Ranch Resort & Casino and Sunset Station Hotel & Casino provide gaming, dining, and entertainment. Henderson Pavilion hosts outdoor concerts and events.</p><h3>Schools and Education</h3><p>Green Valley is served by Clark County School District and is known for excellent schools, including:</p><ul><li><strong>Elementary:</strong> Robert Taylor Elementary, Vanderburg Elementary, Gene Ward Elementary</li><li><strong>Middle:</strong> Lyle Workman Middle School, Miller Middle School</li><li><strong>High:</strong> Green Valley High School, Foothill High School (both highly rated)</li></ul><p>The area also has private school options and is close to UNLV and College of Southern Nevada.</p><h3>Demographics and Lifestyle</h3><p>Green Valley attracts families, professionals, and retirees who value:</p><ul><li>Safe, well-maintained neighborhoods</li><li>Strong sense of community</li><li>Excellent schools</li><li>Resort-style amenities without resort prices</li><li>Easy access to Las Vegas while maintaining suburban feel</li></ul><p>The community has an active homeowners association that maintains common areas and organizes community events.</p><h3>Real Estate Market Trends</h3><p>Green Valley remains one of Henderson\'s most stable real estate markets. The combination of established infrastructure, excellent schools, and desirable amenities keeps property values strong. Median home prices have appreciated consistently, and the area attracts both homeowners and investors.</p>'
      },
      {
        heading: 'Common Reasons Green Valley Homeowners Sell to Us',
        html: '<ul><li><strong>Relocating for Work:</strong> Many Green Valley professionals are transferred to other cities and need to sell quickly to coordinate with their move.</li><li><strong>Downsizing:</strong> Empty nesters whose children have grown often sell their larger Green Valley homes to move into smaller properties or senior communities.</li><li><strong>Inherited Property:</strong> Adult children who inherit parents\' Green Valley homes often live elsewhere and prefer to sell rather than become long-distance landlords.</li><li><strong>Upgrading:</strong> Some homeowners in older Green Valley sections want to upgrade to newer homes in Inspirada or Cadence without the hassle of traditional selling.</li><li><strong>Divorce:</strong> Couples going through separation often need to sell the family home quickly to divide assets and move forward.</li><li><strong>Financial Challenges:</strong> Job loss or unexpected expenses can make it difficult to maintain mortgage payments, requiring a fast sale.</li><li><strong>Rental Property Exit:</strong> Investors who own rental properties in Green Valley sometimes decide to exit the landlord business and want quick cash sales.</li><li><strong>Avoiding Foreclosure:</strong> Homeowners behind on payments can sell quickly to us to avoid foreclosure and protect their credit.</li></ul>'
      }
    ],
    testimonials: [
      {
        name: 'Robert & Linda M.',
        location: 'Green Valley, Henderson',
        rating: 5,
        text: 'We lived in Green Valley for 25 years and raised our kids here. When it was time to downsize, we didn\'t want the stress of showings and repairs. Alchemy Investments gave us a fair offer and we closed in 10 days. They made our transition to a smaller home so easy!',
        date: '2024-01-20'
      },
      {
        name: 'Jennifer K.',
        location: 'Green Valley, Henderson',
        rating: 5,
        text: 'I inherited my father\'s Green Valley home but live in California. Managing it from out of state was impossible. Alchemy Investments handled everything remotely and we closed without me ever flying to Vegas. Professional and efficient!',
        date: '2024-02-15'
      }
    ]
  },

  'green-valley-ranch': {
    neighborhood: {
      name: 'Green Valley Ranch',
      city: 'Henderson',
      state: 'Nevada',
      description: 'Upscale master-planned community featuring resort-style living, championship golf, and The District shopping center.',
      population: 40000,
      medianHomePrice: '$550,000',
      yearEstablished: 1997,
      keyAmenities: [
        'Green Valley Ranch Resort & Casino',
        'The District at Green Valley Ranch',
        'Multiple community pools and parks',
        'Tuscany Golf Club',
        'Walking trails and greenbelts',
        'Close to I-215 and I-515'
      ]
    },
    intro: {
      heading: 'Why Green Valley Ranch Homeowners Choose Alchemy Investments RE',
      content: 'Green Valley Ranch represents the pinnacle of master-planned community living in Henderson. Developed in the late 1990s and early 2000s, this upscale neighborhood combines resort-style amenities with elegant homes, creating a lifestyle that attracts professionals, families, and retirees seeking the best Henderson has to offer.\n\nWhether you own a home near the resort, in one of the gated villages, or close to The District shopping center, Green Valley Ranch properties are highly desirable. However, life circumstances sometimes require selling quickly—job relocations, financial changes, divorce, or family needs can all create situations where waiting months for a traditional sale simply isn\'t practical.\n\nAt Alchemy Investments RE, we understand the value of Green Valley Ranch real estate and make fair cash offers that reflect your property\'s worth in this premium Henderson community. We can close in as little as 7 days, handle properties in any condition, and eliminate the stress of traditional selling—no repairs, no showings, no uncertainty about buyer financing.'
    },
    richtext: [
      {
        heading: 'About Green Valley Ranch, Henderson',
        html: '<h3>Community Overview</h3><p>Green Valley Ranch is Henderson\'s premier master-planned community, offering an upscale lifestyle with resort-style amenities typically found in luxury communities. Development began in 1997, and the community has grown to include numerous villages, each with its own character and amenities.</p><h3>Location and Access</h3><p>Green Valley Ranch enjoys an ideal location in Henderson:</p><ul><li>Bounded generally by Warm Springs Road (north), Horizon Ridge Parkway (south), Valle Verde Drive (west), and Green Valley Parkway (east)</li><li>Direct access to I-215 and I-515</li><li>15 minutes to Las Vegas Strip</li><li>10 minutes to Harry Reid Airport</li><li>Walking distance to The District shopping center</li></ul><h3>Housing Options</h3><p>Green Valley Ranch offers diverse housing including:</p><ul><li><strong>Single-family homes:</strong> 2,000-5,000+ sq ft, priced from $450K-$1.5M+</li><li><strong>Townhomes:</strong> Modern designs with HOA-maintained exteriors</li><li><strong>Gated communities:</strong> Several exclusive neighborhoods with additional security</li><li><strong>Luxury estates:</strong> Custom homes on larger lots with premium finishes</li></ul><p>Popular villages include Hampton, Palisades, Paseos, and Anthem Country Club areas.</p><h3>The Resort Lifestyle</h3><p><strong>Green Valley Ranch Resort & Casino</strong> is the community\'s centerpiece, offering:</p><ul><li>Gaming, restaurants, and entertainment</li><li>Concert venue and movie theater</li><li>Pool and spa facilities</li><li>Convention and meeting space</li></ul><p><strong>The District at Green Valley Ranch</strong> provides premier shopping and dining:</p><ul><li>Over 50 retail stores and restaurants</li><li>Outdoor lifestyle center with Mediterranean-inspired architecture</li><li>Weekly events and entertainment</li><li>Walkable from many Green Valley Ranch homes</li></ul><h3>Recreation and Amenities</h3><ul><li><strong>Golf:</strong> Tuscany Golf Club offers members-only championship golf</li><li><strong>Parks:</strong> Numerous neighborhood parks, tot lots, and green spaces</li><li><strong>Trails:</strong> Extensive walking and biking trails throughout</li><li><strong>Community Centers:</strong> Several HOA-maintained facilities</li><li><strong>Pools:</strong> Multiple community pools and splash pads</li></ul><h3>Schools</h3><p>Green Valley Ranch is served by highly-rated Clark County schools:</p><ul><li>Vanderburg Elementary</li><li>Greenspun Elementary</li><li>Cornell Elementary</li><li>Webb Middle School</li><li>Green Valley High School</li><li>Coronado High School</li></ul><h3>Real Estate Market</h3><p>Green Valley Ranch maintains strong property values due to:</p><ul><li>Desirable location and amenities</li><li>Well-maintained HOA standards</li><li>Excellent schools</li><li>Resort-style lifestyle</li><li>Easy access to employment centers</li></ul><p>The community attracts move-up buyers, professionals, and retirees seeking upscale living without custom home prices.</p>'
      },
      {
        heading: 'Common Reasons Green Valley Ranch Homeowners Sell to Us',
        html: '<ul><li><strong>Job Relocations:</strong> Professionals moving to other cities for career opportunities need to sell quickly to coordinate with their transfer.</li><li><strong>Downsizing:</strong> Retirees and empty nesters moving to smaller homes or senior communities.</li><li><strong>Upgrading:</strong> Moving to larger homes in Seven Hills, Anthem, or custom home communities.</li><li><strong>Divorce:</strong> Couples dividing assets and needing to sell the marital home quickly.</li><li><strong>Financial Changes:</strong> Job loss or business challenges making it difficult to afford premium HOA fees and mortgages.</li><li><strong>Out-of-State Investors:</strong> Landlords exiting the rental market or investors liquidating properties.</li><li><strong>Inherited Property:</strong> Adult children who inherited homes but don\'t want to manage properties from out of state.</li><li><strong>Avoiding Foreclosure:</strong> Homeowners behind on payments who need to sell before foreclosure damages their credit.</li></ul>'
      }
    ],
    testimonials: [
      {
        name: 'Michael & Sarah T.',
        location: 'Green Valley Ranch, Henderson',
        rating: 5,
        text: 'We got transferred to Texas and needed to sell our Green Valley Ranch home quickly. Traditional agents said 60-90 days minimum. Alchemy Investments gave us a fair offer and closed in 8 days so we could start our new jobs on time. Highly recommend!',
        date: '2024-01-28'
      },
      {
        name: 'Patricia L.',
        location: 'Green Valley Ranch, Henderson',
        rating: 5,
        text: 'After my divorce, I couldn\'t afford to keep the house alone. Alchemy Investments was understanding and professional. They helped me sell quickly and move on to a fresh start. The process was smooth and stress-free.',
        date: '2024-02-05'
      }
    ]
  },

  'anthem-henderson': {
    neighborhood: {
      name: 'Anthem',
      city: 'Henderson',
      state: 'Nevada',
      description: 'Family-oriented master-planned community in the Henderson foothills, offering stunning views, excellent amenities, and award-winning community design.',
      population: 30000,
      medianHomePrice: '$575,000',
      yearEstablished: 1998,
      keyAmenities: [
        'Anthem Country Club with championship golf',
        'Anthem Community Center',
        'Multiple pools and splash pads',
        'Anthem Hills Park with sports fields',
        'Hiking trails in the foothills',
        'Award-winning schools'
      ]
    },
    intro: {
      heading: 'Why Anthem Homeowners Choose Alchemy Investments RE',
      content: 'Anthem is Henderson\'s premier hillside community, offering residents breathtaking views, a tight-knit community feel, and a family-oriented lifestyle that\'s hard to find anywhere else in the Las Vegas Valley. Nestled in the McCullough Mountains foothills, Anthem provides a mountain resort atmosphere while remaining convenient to urban amenities.\n\nWhether you own a home in Anthem Highlands, Anthem Country Club, or one of the many Anthem villages, you\'ve invested in one of Henderson\'s most desirable addresses. However, life circumstances can change—job relocations, family needs, financial situations, or simply wanting a fresh start can all create the need to sell quickly without the prolonged process of traditional real estate.\n\nAt Alchemy Investments RE, we specialize in buying Anthem homes quickly for cash. We understand the unique value proposition of Anthem properties and make offers that reflect your home\'s worth in this special community. No repairs, no showings, no waiting—just a fast, fair transaction that works on your timeline.'
    },
    richtext: [
      {
        heading: 'About Anthem, Henderson',
        html: '<h3>Community Character</h3><p>Anthem is often considered Henderson\'s most family-friendly master-planned community. Established in 1998 by Del Webb, Anthem was designed with an emphasis on community, recreation, and quality of life. The neighborhood has won numerous awards for community design and consistently ranks among the best places to live in Nevada.</p><h3>Location and Setting</h3><p>Anthem occupies the foothills of the McCullough Mountains in southeastern Henderson, offering:</p><ul><li>Elevated setting with sweeping valley views</li><li>Cooler temperatures (typically 3-5 degrees cooler than the Las Vegas Valley floor)</li><li>Access via Anthem Parkway and Eastern Avenue</li><li>20 minutes to Las Vegas Strip</li><li>25 minutes to Henderson Executive Airport</li><li>Proximity to Lake Mead and hiking trails</li></ul><h3>Neighborhoods and Housing</h3><p>Anthem includes multiple villages and neighborhoods:</p><ul><li><strong>Anthem Country Club:</strong> Golf course community with luxury homes</li><li><strong>Anthem Highlands:</strong> Premium homesites with panoramic views</li><li><strong>Anthem Parkside:</strong> Family-friendly with parks and trails</li><li><strong>Inspirada (adjacent):</strong> Newer master-planned community to the south</li></ul><p>Homes range from $400K townhomes to $1.5M+ custom estates. Most properties feature:</p><ul><li>2,000-5,000+ square feet</li><li>Mountain and city views</li><li>Desert landscaping and HOA-maintained areas</li><li>Access to community amenities</li></ul><h3>Community Amenities</h3><p><strong>Anthem Community Center</strong> is the hub of community life:</p><ul><li>Fitness facilities</li><li>Meeting rooms and event space</li><li>Programming for all ages</li><li>Community events and activities</li></ul><p><strong>Recreation:</strong></p><ul><li>Multiple community pools and splash pads</li><li>Anthem Hills Park with sports fields, playground, and amphitheater</li><li>Basketball and tennis courts throughout</li><li>Miles of walking and biking trails</li><li>Anthem Country Club golf course (private membership)</li></ul><h3>Schools and Education</h3><p>Anthem is known for excellent schools in the Clark County School District:</p><ul><li><strong>Elementary:</strong> Mervin Iverson Elementary, Vanderburg Elementary</li><li><strong>Middle:</strong> Webb Middle School</li><li><strong>High:</strong> Coronado High School (highly rated)</li></ul><p>Many Anthem families also choose private schools in Henderson and Las Vegas.</p><h3>Lifestyle and Community</h3><p>Anthem residents value:</p><ul><li><strong>Safety:</strong> Low crime rates and community policing</li><li><strong>Community:</strong> Active HOA and numerous community events</li><li><strong>Family focus:</strong> Parks, pools, and youth activities</li><li><strong>Nature access:</strong> Hiking, biking, and outdoor recreation</li><li><strong>Views:</strong> Stunning mountain and valley vistas</li></ul><h3>Real Estate Market</h3><p>Anthem properties maintain strong value due to:</p><ul><li>Limited hillside inventory</li><li>Excellent schools and amenities</li><li>Views and natural setting</li><li>Strong community identity</li><li>Well-maintained HOA standards</li></ul><p>The community attracts move-up buyers, families prioritizing schools, and anyone seeking a mountain resort lifestyle with urban conveniences.</p>'
      },
      {
        heading: 'Common Reasons Anthem Homeowners Sell to Us',
        html: '<ul><li><strong>Corporate Relocations:</strong> Professionals moving for career opportunities who need to sell before relocating.</li><li><strong>Downsizing:</strong> Empty nesters moving from larger family homes to smaller properties.</li><li><strong>Financial Changes:</strong> Job loss or income changes making premium Anthem homes unaffordable.</li><li><strong>Divorce:</strong> Couples needing to divide assets and sell the family home quickly.</li><li><strong>Health Issues:</strong> Homeowners needing single-story or more accessible housing.</li><li><strong>Inherited Properties:</strong> Out-of-state heirs who don\'t want to manage Anthem properties remotely.</li><li><strong>Upgrading:</strong> Moving to larger homes in Seven Hills, Lake Las Vegas, or custom communities.</li><li><strong>Avoiding Foreclosure:</strong> Homeowners behind on payments seeking to sell before foreclosure.</li></ul>'
      }
    ],
    testimonials: [
      {
        name: 'David & Karen R.',
        location: 'Anthem, Henderson',
        rating: 5,
        text: 'We loved our Anthem home and the community, but my company relocated me to Denver. We needed to sell fast but agents said it could take months in winter. Alchemy Investments closed in 12 days and we made our move on schedule. Couldn\'t ask for better!',
        date: '2024-01-12'
      },
      {
        name: 'James M.',
        location: 'Anthem, Henderson',
        rating: 5,
        text: 'After losing my job, I couldn\'t afford the mortgage and HOA fees. Alchemy Investments gave me a fair cash offer that let me walk away without foreclosure. They were understanding during a difficult time and made the process simple.',
        date: '2024-02-18'
      }
    ]
  }
};

// Function to populate a neighborhood page
function populateNeighborhoodPage(slug, content) {
  const filePath = path.join(neighborhoodsDir, `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${slug}.json not found, skipping...`);
    return false;
  }

  let pageData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Update neighborhood data
  if (content.neighborhood) {
    pageData.neighborhood = content.neighborhood;
  }

  // Update intro section
  const introIdx = pageData.sections.findIndex(s => s.type === 'intro');
  if (introIdx !== -1 && content.intro) {
    pageData.sections[introIdx] = {
      type: 'intro',
      ...content.intro
    };
  }

  // Update benefits - just replace neighborhood name
  const benefitsIdx = pageData.sections.findIndex(s => s.type === 'benefits');
  if (benefitsIdx !== -1) {
    pageData.sections[benefitsIdx].heading = `Benefits of Selling Your ${content.neighborhood.name} Home to Us`;
    pageData.sections[benefitsIdx].items = pageData.sections[benefitsIdx].items.map(item => ({
      ...item,
      description: item.description.replace(/\[neighborhood\]/gi, content.neighborhood.name)
    }));
  }

  // Update process - just replace neighborhood name
  const processIdx = pageData.sections.findIndex(s => s.type === 'process');
  if (processIdx !== -1) {
    pageData.sections[processIdx].heading = `How to Sell Your ${content.neighborhood.name} House for Cash`;
  }

  // Replace richtext sections
  const richtextIndices = [];
  pageData.sections.forEach((section, idx) => {
    if (section.type === 'richtext') {
      richtextIndices.push(idx);
    }
  });

  richtextIndices.reverse().forEach(idx => {
    pageData.sections.splice(idx, 1);
  });

  // Add new richtext sections before FAQs
  const faqIdx = pageData.sections.findIndex(s => s.type === 'faqs');
  if (content.richtext && faqIdx !== -1) {
    content.richtext.forEach((rt, i) => {
      pageData.sections.splice(faqIdx + i, 0, {
        type: 'richtext',
        ...rt
      });
    });
  }

  // Update FAQs - personalize them
  pageData.faqs = pageData.faqs.map(faq => ({
    ...faq,
    question: faq.question.replace(/\[Neighborhood\]/g, content.neighborhood.name),
    answer: faq.answer.replace(/\[neighborhood\]/gi, content.neighborhood.name)
  }));

  // Update testimonials
  if (content.testimonials) {
    pageData.testimonials = content.testimonials;
  }

  fs.writeFileSync(filePath, JSON.stringify(pageData, null, 2));
  return true;
}

// Populate first 3 neighborhoods
console.log('Populating neighborhood pages (Batch 1/3)...\n');
let count = 0;

['green-valley', 'green-valley-ranch', 'anthem-henderson'].forEach(slug => {
  if (neighborhoodContent[slug]) {
    const success = populateNeighborhoodPage(slug, neighborhoodContent[slug]);
    if (success) {
      console.log(`✅ Populated ${slug}.json`);
      count++;
    }
  }
});

console.log(`\n✨ Populated ${count} of 3 neighborhood pages (Batch 1)!`);
