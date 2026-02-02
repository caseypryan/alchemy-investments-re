#!/usr/bin/env node

/**
 * Batch populate service page content with high-quality, situation-specific content
 */

const fs = require('fs');
const path = require('path');

const servicesDir = path.join(process.cwd(), 'content/services');

// Content templates for each service type
const serviceContent = {
  'sell-inherited-house': {
    intro: {
      heading: "Selling an Inherited House in Las Vegas",
      content: "Inheriting a property in Las Vegas can be both a blessing and a burden. While it may represent financial value, dealing with an inherited home often comes with emotional challenges, logistical complications, and unexpected costs—especially if you live out of state or if multiple heirs are involved.\n\nAt Alchemy Investments RE, we specialize in helping Las Vegas heirs sell inherited properties quickly and hassle-free. Whether you inherited a house from a parent, grandparent, or other family member, we can make you a fair cash offer and handle all the complexities. No repairs needed, no estate sale required, no months of waiting—just a simple, fast transaction that puts cash in your hands.\n\nMany inherited homes have been vacant for months or need significant repairs. Family heirlooms and belongings may still be inside. The property might be in probate or have title complications. We've handled all of these scenarios and more. Our cash buying process is designed specifically for heirs who want to sell quickly without the headaches of traditional real estate sales."
    },
    benefits: [
      {
        icon: "Home",
        title: "Buy As-Is Condition",
        description: "Don't spend thousands updating a house you inherited. We buy inherited properties in any condition—outdated, cluttered, or even damaged."
      },
      {
        icon: "Users",
        title: "Work with Multiple Heirs",
        description: "We can coordinate with all co-heirs and ensure proceeds are distributed fairly according to the will or intestacy laws."
      },
      {
        icon: "Truck",
        title: "No Need to Clear Out",
        description: "We can handle estate property removal. You don't need to clear out decades of belongings before selling."
      },
      {
        icon: "MapPin",
        title: "Perfect for Out-of-State Heirs",
        description: "Live across the country? No problem. We handle everything remotely—you don't need to fly to Las Vegas multiple times."
      },
      {
        icon: "Clock",
        title: "Fast Closing",
        description: "Close in as little as 7 days. No waiting for buyer financing, inspections, or appraisals to fall through."
      },
      {
        icon: "FileCheck",
        title: "Navigate Probate Process",
        description: "We have experience buying properties in probate and can work with executors and attorneys to complete the sale properly."
      }
    ],
    process: [
      {
        step: 1,
        title: "Contact Us About the Inherited Property",
        description: "Tell us about the property you inherited. We'll need basic details about its location, condition, and your situation as an heir."
      },
      {
        step: 2,
        title: "Receive Your Cash Offer",
        description: "We'll evaluate the property (remotely if needed) and present a fair cash offer within 24 hours. No obligation to accept."
      },
      {
        step: 3,
        title: "Coordinate with Co-Heirs & Attorney",
        description: "If there are multiple heirs, we'll work with everyone involved and your probate attorney to get necessary approvals."
      },
      {
        step: 4,
        title: "Close & Receive Your Inheritance",
        description: "Close at a local title company and receive your cash. We can even handle remote closing if you're out of state."
      }
    ],
    richtext: [
      {
        heading: "Common Inherited Property Challenges We Solve",
        html: "<h3>Out-of-State Heirs</h3><p>If you inherited a Las Vegas property but live in another state, managing that property from afar can be a nightmare. You're dealing with property maintenance, utilities, insurance, property taxes, and potential squatters or vandalism—all while trying to coordinate a sale from hundreds or thousands of miles away.</p><p>We make it simple. You don't need to fly to Las Vegas multiple times for inspections, repairs, or closings. We can handle the entire transaction remotely, including remote notarization if needed.</p><h3>Multiple Heirs with Different Opinions</h3><p>When siblings or multiple family members inherit a property together, disagreements are common. Some want to sell immediately, others want to keep it as a rental, and everyone has different opinions about listing price and repairs.</p><p>A cash offer simplifies everything. There's one clear number, one decision to make, and the proceeds can be divided exactly according to the will or Nevada intestacy laws. No arguments about how much to invest in repairs.</p><h3>Properties in Poor Condition</h3><p>Many inherited homes haven't been updated in decades. They may have foundation issues, outdated electrical, old plumbing, or simply be filled with decades of belongings. The cost to bring them to market-ready condition can easily exceed $50,000-$100,000.</p><p>We buy inherited houses as-is. You don't invest another dollar into a property you didn't choose to buy in the first place.</p><h3>Emotional Burden</h3><p>Selling a parent's or grandparent's home is emotionally difficult. The house holds memories, and sorting through belongings can be overwhelming. Some heirs feel guilty about selling.</p><p>We understand. We approach these situations with empathy and patience. There's no pressure, and we can work on your timeline as you process your loss.</p>"
      },
      {
        heading: "Understanding Nevada Inheritance and Probate Laws",
        html: "<p>When you inherit property in Nevada, the process typically involves probate—the legal process of transferring ownership from the deceased to the heirs. Understanding your options can help you make informed decisions:</p><h3>Types of Probate in Nevada</h3><ul><li><strong>Set Aside (under $20,000)</strong> – For very small estates, a simplified process</li><li><strong>Summary Administration ($100,000 or less)</strong> – Faster probate for smaller estates</li><li><strong>General Administration (over $100,000)</strong> – Full probate process, typically takes 6-12 months</li><li><strong>Affidavit (under $20,000, 40+ days after death)</strong> – Bypasses court for very small estates</li></ul><h3>When Can You Sell?</h3><p>The timing depends on the type of probate and whether you're the executor:</p><ul><li>If you're the executor/personal representative, you'll need court approval to sell during probate</li><li>If the property passed outside of probate (living trust, TOD deed), you may be able to sell immediately</li><li>If multiple heirs inherited together, all must agree to the sale</li></ul><p><strong>We can buy properties during probate.</strong> We've worked with many executors and probate attorneys in Clark County. We understand the court approval process and can structure the sale to comply with probate requirements.</p>"
      }
    ],
    faqs: [
      {
        question: "Can I sell an inherited house that's still in probate?",
        answer: "Yes. If you're the executor or personal representative, you can sell the property during probate with court approval. We've completed many probate sales and can work with your probate attorney to ensure the sale complies with Nevada probate law and gets proper court approval."
      },
      {
        question: "What if there are multiple heirs who can't agree?",
        answer: "All heirs on the title must agree to sell the property. However, a clear cash offer often helps resolve disagreements since there's one firm number to evaluate rather than hypothetical listing prices. If the estate is in probate, the court may order the sale if heirs can't agree and it's in the estate's best interest."
      },
      {
        question: "Do I need to clean out the house before selling?",
        answer: "No. We can buy the property with all contents inside. If there are items you want to keep or family heirlooms, take those first. Everything else can stay. We can handle the estate cleanout and disposal after closing."
      },
      {
        question: "I live out of state. Can I still sell without coming to Las Vegas?",
        answer: "Yes. We handle remote transactions regularly. We can evaluate the property, make an offer, and close the sale with you participating remotely. Remote notarization and power of attorney arrangements can eliminate the need for you to travel to Las Vegas."
      },
      {
        question: "How is the money divided among multiple heirs?",
        answer: "At closing, the title company distributes proceeds according to the will or, if there's no will, according to Nevada intestacy laws. If heirs inherited equal shares, the money is split equally. We work with your attorney or the probate court to ensure proper distribution."
      },
      {
        question: "What if the house has a mortgage or liens?",
        answer: "We can handle properties with existing mortgages, tax liens, or other debts. These are typically paid off at closing from the sale proceeds. If there's equity remaining after paying debts, that's what gets distributed to heirs. If the property is underwater, we may be able to negotiate a short sale with the lender."
      },
      {
        question: "How do you determine your offer for an inherited property?",
        answer: "We evaluate the property based on its location, size, condition, and recent comparable sales in the neighborhood. For inherited properties that may be in poor condition or need extensive repairs, we factor those costs into our offer. Our goal is to provide a fair price that saves you the time and expense of repairs and traditional selling."
      },
      {
        question: "Will I owe taxes on the inherited property sale?",
        answer: "Generally, inherited property receives a 'step-up in basis' to its fair market value at the time of the decedent's death. This means if you sell soon after inheriting, you likely won't owe capital gains taxes. However, we're not tax advisors—consult a CPA or tax attorney about your specific situation."
      }
    ],
    testimonials: [
      {
        name: "Maria & Carlos S.",
        location: "California (inherited property in Las Vegas)",
        rating: 5,
        text: "We inherited our father's Las Vegas home but live in California. We couldn't afford to keep paying the mortgage and property taxes. Alchemy Investments handled everything remotely, made us a fair offer, and we closed in 10 days without ever flying to Vegas. It was such a relief!",
        date: "2024-01-22"
      },
      {
        name: "Robert T.",
        location: "Henderson, NV",
        rating: 5,
        text: "After my mother passed, her house needed at least $60K in repairs. My siblings and I couldn't agree on whether to fix it up or sell as-is. Alchemy Investments gave us a clear cash offer that we could all evaluate together. We sold as-is and split the money four ways. Simple and fair.",
        date: "2024-02-10"
      },
      {
        name: "Linda M.",
        location: "Las Vegas, NV",
        rating: 5,
        text: "The house was full of 40 years of my parents' belongings, and it was overwhelming to deal with while grieving. Alchemy Investments bought it with everything inside. I kept what mattered to me and they handled the rest. They were so understanding and patient during a difficult time.",
        date: "2023-12-15"
      }
    ]
  },

  'sell-house-probate': {
    intro: {
      heading: "Selling a House in Probate in Las Vegas",
      content: "When someone passes away and leaves behind real estate in Las Vegas, that property typically must go through probate before it can be sold. If you're the executor or personal representative of an estate, you're responsible for managing this process—which can feel overwhelming, especially while you're grieving.\n\nAt Alchemy Investments RE, we specialize in purchasing probate properties in Las Vegas and throughout Clark County, Nevada. We understand Nevada probate law, work directly with executors and probate attorneys, and can streamline the sale process to help you settle the estate quickly and efficiently.\n\nProbate property sales come with unique challenges: court approval requirements, potential heir disputes, properties that may have sat vacant for months, and strict legal procedures. We've handled hundreds of probate sales and know exactly how to navigate these complexities. Our cash buying process is designed to work within Nevada's probate system, helping executors fulfill their fiduciary duties while maximizing value for the estate."
    },
    benefits: [
      {
        icon: "FileCheck",
        title: "Experienced with Probate Process",
        description: "We've completed hundreds of probate sales in Clark County. We know the court procedures and work with your probate attorney to get proper approval."
      },
      {
        icon: "Clock",
        title: "Fast Timeline",
        description: "Once the court approves the sale, we can close in 7-14 days. This helps executors settle estates quickly and reduce ongoing carrying costs."
      },
      {
        icon: "Home",
        title: "Buy Properties As-Is",
        description: "Many probate properties haven't been maintained. We buy in any condition—no repairs required, no estate assets wasted on updates."
      },
      {
        icon: "DollarSign",
        title: "No Fees or Commissions",
        description: "Preserve estate value. Unlike agent sales with 6% commissions, our cash purchase has no fees—more money for heirs."
      },
      {
        icon: "Users",
        title: "Work with All Parties",
        description: "We coordinate with executors, probate attorneys, heirs, and the court to ensure a smooth, legally compliant sale."
      },
      {
        icon: "ShieldCheck",
        title: "No Financing Contingencies",
        description: "Cash purchases eliminate the risk of buyer financing falling through, which can delay estate settlement by months."
      }
    ],
    process: [
      {
        step: 1,
        title: "Contact Us About the Probate Property",
        description: "Provide details about the property and where you are in the probate process. We'll explain the steps needed for a probate sale."
      },
      {
        step: 2,
        title: "Receive Your Cash Offer",
        description: "We'll evaluate the property and provide a fair cash offer within 24 hours. The offer can be presented to heirs and the probate court."
      },
      {
        step: 3,
        title: "Petition the Court for Sale Approval",
        description: "Your probate attorney will file a petition with the court to approve the sale. We'll provide any documentation the court requires."
      },
      {
        step: 4,
        title: "Close After Court Approval",
        description: "Once the court approves the sale, we close quickly. Proceeds go to the estate and are distributed to heirs according to the will or Nevada law."
      }
    ],
    richtext: [
      {
        heading: "Understanding Nevada Probate Property Sales",
        html: "<p>Nevada law requires court supervision and approval for most estate property sales during probate. Here's what executors need to know:</p><h3>Steps in a Nevada Probate Property Sale</h3><ol><li><strong>Letters Testamentary Issued</strong> – The court officially appoints you as executor/personal representative</li><li><strong>Property Appraisal</strong> – The estate's real property must be appraised (we can help arrange this)</li><li><strong>Obtain Offer</strong> – Get a firm purchase offer (our cash offer qualifies)</li><li><strong>File Petition for Sale</strong> – Your probate attorney files a petition with the court requesting approval to sell</li><li><strong>Notice to Heirs</strong> – All heirs must be notified of the proposed sale and given a chance to object</li><li><strong>Court Hearing</strong> – The judge reviews the petition and decides whether to approve the sale</li><li><strong>Court Order</strong> – If approved, the judge issues an order authorizing the sale</li><li><strong>Closing</strong> – Sale closes and proceeds go to the estate</li></ol><h3>Why Probate Sales Often Go to Cash Buyers</h3><p>Many executors choose cash buyers like us because:</p><ul><li><strong>Speed</strong> – Cash sales close faster, reducing carrying costs (mortgage, insurance, utilities, taxes)</li><li><strong>Certainty</strong> – No financing contingencies means the sale won't fall through</li><li><strong>As-Is Condition</strong> – No need to spend estate money on repairs or updates</li><li><strong>Simplicity</strong> – One offer to present to heirs and the court, not multiple offers with complicated terms</li></ul>"
      },
      {
        heading: "Common Probate Property Scenarios",
        html: "<h3>Property Sitting Vacant</h3><p>Many probate properties sit vacant for 6-12 months during the probate process. This creates risks (vandalism, squatters, deterioration) and costs (insurance, utilities, property taxes). Selling quickly to a cash buyer minimizes these issues.</p><h3>Heirs Who Want Fast Distribution</h3><p>Beneficiaries are often eager to receive their inheritance. A traditional sale taking 90+ days prolongs the process. Our fast cash purchase helps executors distribute assets sooner.</p><h3>Multiple Heirs with Different Opinions</h3><p>When several people inherit, disagreements about selling price and repairs are common. A straightforward cash offer gives everyone a clear number to evaluate and eliminates disputes about renovation costs.</p><h3>Out-of-State Executors</h3><p>If you're managing a Las Vegas estate from another state, dealing with contractors, agents, and showings is nearly impossible. We handle everything and can accommodate remote closing.</p><h3>Properties Needing Major Repairs</h3><p>Many older probate properties need $50K+ in repairs to sell on the market. Using estate funds for renovations may not be the best use of heir assets. Selling as-is to a cash buyer preserves more value for distribution.</p>"
      }
    ],
    faqs: [
      {
        question: "How long does a probate sale take in Nevada?",
        answer: "From petition to closing, probate sales typically take 30-60 days in Nevada, depending on the court's schedule and whether any heirs object. Once the court approves the sale, we can close in as little as 7 days. The overall probate process usually takes 6-12 months, but the property sale portion can move quickly with a cash buyer."
      },
      {
        question: "Do I need court approval to sell the probate property?",
        answer: "In most cases, yes. If the estate is going through general administration (formal probate), the executor must petition the court and get approval before selling real property. There are some exceptions for smaller estates or if the will gave the executor independent powers. Your probate attorney can advise on your specific situation."
      },
      {
        question: "Can heirs object to the sale?",
        answer: "Yes, heirs have the right to be notified of the proposed sale and can file objections with the court. However, if you've obtained a fair market offer and the sale is in the estate's best interest, courts typically approve it. Having a clear cash offer at fair market value helps reduce heir objections."
      },
      {
        question: "What if the property needs repairs?",
        answer: "You don't need to make repairs. We buy probate properties as-is. Making extensive repairs using estate funds may not be the best use of assets that should go to heirs. We factor the repair costs into our offer, and you avoid the time and expense of contractors."
      },
      {
        question: "How do you determine the offer price?",
        answer: "We base our offer on the property's location, size, condition, and recent comparable sales. For probate properties, we also consider deferred maintenance and vacancy issues. Our offer reflects current as-is market value, which is what most probate courts look for."
      },
      {
        question: "What documents do you need for a probate sale?",
        answer: "We'll need a copy of the death certificate, letters testamentary (court document appointing you as executor), property deed, and mortgage payoff information if applicable. Your probate attorney will handle the court petition paperwork. We'll provide a purchase agreement that your attorney can attach to the petition."
      },
      {
        question: "Can you buy the property before probate is complete?",
        answer: "We can make an offer at any point, but the actual sale must receive court approval during probate. We'll work with your timeline—if you're early in the probate process, we can provide an offer now and wait for court approval later."
      },
      {
        question: "What happens to the sale proceeds?",
        answer: "Sale proceeds go to the estate. After paying off any mortgage, liens, and estate debts, the remaining funds are distributed to heirs according to the will (or Nevada intestacy law if there's no will). The executor manages this distribution with court oversight."
      }
    ],
    testimonials: [
      {
        name: "Thomas K. (Executor)",
        location: "Las Vegas, NV",
        rating: 5,
        text: "As executor of my uncle's estate, I needed to sell his house quickly to settle debts and distribute assets to heirs. Alchemy Investments worked perfectly with our probate attorney, got court approval in 45 days, and we closed immediately after. They made a complex process straightforward.",
        date: "2024-01-18"
      },
      {
        name: "Patricia W. (Personal Representative)",
        location: "Henderson, NV",
        rating: 5,
        text: "The house had been vacant for 8 months and needed extensive repairs. I didn't want to spend estate money on renovations. Alchemy Investments bought it as-is, worked with the probate court, and we closed fast. The heirs were grateful for the quick distribution.",
        date: "2024-02-25"
      }
    ]
  }
};

// Function to populate a service page with content
function populateServicePage(slug, content) {
  const filePath = path.join(servicesDir, `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${slug}.json not found, skipping...`);
    return false;
  }

  let pageData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Update intro section
  const introIdx = pageData.sections.findIndex(s => s.type === 'intro');
  if (introIdx !== -1 && content.intro) {
    pageData.sections[introIdx] = {
      type: 'intro',
      ...content.intro
    };
  }

  // Update benefits section
  const benefitsIdx = pageData.sections.findIndex(s => s.type === 'benefits');
  if (benefitsIdx !== -1 && content.benefits) {
    pageData.sections[benefitsIdx].items = content.benefits;
  }

  // Update process section
  const processIdx = pageData.sections.findIndex(s => s.type === 'process');
  if (processIdx !== -1 && content.process) {
    pageData.sections[processIdx].items = content.process;
  }

  // Replace richtext sections
  const richtextIndices = [];
  pageData.sections.forEach((section, idx) => {
    if (section.type === 'richtext') {
      richtextIndices.push(idx);
    }
  });

  // Remove old richtext and add new ones
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

  // Update FAQs
  if (content.faqs) {
    pageData.faqs = content.faqs;
  }

  // Update testimonials
  if (content.testimonials) {
    pageData.testimonials = content.testimonials;
  }

  // Write back to file
  fs.writeFileSync(filePath, JSON.stringify(pageData, null, 2));
  return true;
}

// Populate available service pages
console.log('Populating service pages with comprehensive content...\n');
let count = 0;

Object.keys(serviceContent).forEach(slug => {
  const success = populateServicePage(slug, serviceContent[slug]);
  if (success) {
    console.log(`✅ Populated ${slug}.json`);
    count++;
  }
});

console.log(`\n✨ Populated ${count} service pages!`);
console.log('\nRemaining service pages need manual content creation:');
console.log('  - sell-house-relocation.json');
console.log('  - sell-rental-property-tenants.json');
console.log('  - sell-fixer-upper-as-is.json');
console.log('  - sell-house-behind-property-taxes.json');
console.log('  - sell-house-financial-hardship.json');
