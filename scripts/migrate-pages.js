#!/usr/bin/env node

/**
 * Content Migration Script
 *
 * This script automates the migration of 110 pages from the old site to JSON format.
 * It uses Claude Code skills: scrape-site, analyze-seo, and generate-keyword-plan
 *
 * Usage:
 *   1. Manual: Create a CSV file with old URLs: urls.csv
 *      node scripts/migrate-pages.js
 *
 *   2. Automatic (from GSC): Fetch URLs from Google Search Console
 *      node scripts/migrate-pages.js --from-gsc
 *
 *   3. Script will generate JSON files in content/
 *
 * CSV Format:
 *   url,category,slug,priority
 *   https://old-site.com/henderson,locations,henderson,0.9
 *   https://old-site.com/stop-foreclosure,services,stop-foreclosure,0.8
 */

const fs = require('fs')
const path = require('path')
const readline = require('readline')

// Configuration
const CONFIG = {
  urlsFile: path.join(__dirname, 'urls.csv'),
  contentDir: path.join(__dirname, '..', 'content'),
  outputLog: path.join(__dirname, 'migration-log.json'),
}

// Template for page content
const PAGE_TEMPLATE = {
  slug: '',
  type: '',
  seo: {
    title: '',
    description: '',
    keywords: [],
    canonical: '',
  },
  hero: {
    heading: '',
    subheading: '',
    cta: 'Get Your Cash Offer',
    ctaLink: '/#hero-form',
  },
  sections: [],
  faqs: [],
  testimonials: [],
  migration: {
    oldUrl: '',
    redirectFrom: [],
    lastModified: new Date().toISOString().split('T')[0],
    priority: 0.7,
    changeFrequency: 'monthly',
  },
}

// Read CSV file
function readCSV(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ URLs file not found: ${filePath}`)
    console.log('\n📝 Create a CSV file with this format:')
    console.log('url,category,slug,priority')
    console.log('https://old-site.com/henderson,locations,henderson,0.9')
    process.exit(1)
  }

  const content = fs.readFileSync(filePath, 'utf-8')
  const lines = content.trim().split('\n')
  const headers = lines[0].split(',')

  return lines.slice(1).map(line => {
    const values = line.split(',')
    return headers.reduce((obj, header, index) => {
      obj[header.trim()] = values[index]?.trim() || ''
      return obj
    }, {})
  })
}

// Create directory if it doesn't exist
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

// Generate JSON content file
async function generateContentFile(pageData) {
  const { url, category, slug, priority } = pageData

  console.log(`\n📄 Processing: ${slug} (${category})`)
  console.log(`   URL: ${url}`)

  const content = { ...PAGE_TEMPLATE }
  content.slug = slug
  content.type = category.replace('s', '') // locations -> location
  content.migration.oldUrl = url
  content.migration.priority = parseFloat(priority) || 0.7
  content.seo.canonical = `https://alchemyinvestmentsre.com/${category}/${slug}`

  // TODO: Add scrape-site integration here
  // This requires Claude Code skills which can't be called directly from Node.js
  // Instead, this script generates placeholder JSON files that you'll enhance with Claude

  console.log(`   ⚠️  Generated placeholder - needs SEO optimization`)

  // Save JSON file
  const outputPath = path.join(CONFIG.contentDir, category, `${slug}.json`)
  ensureDir(path.dirname(outputPath))
  fs.writeFileSync(outputPath, JSON.stringify(content, null, 2))

  console.log(`   ✅ Saved: ${outputPath}`)

  return {
    slug,
    category,
    status: 'placeholder',
    file: outputPath,
  }
}

// Main migration function
async function migrate() {
  console.log('🚀 Starting Content Migration\n')

  // Check if --from-gsc flag is present
  if (process.argv.includes('--from-gsc')) {
    console.log('🔍 Fetching URLs from Google Search Console...\n')

    try {
      // Run gsc-export-urls.js to generate urls.csv
      const { execSync } = require('child_process')
      execSync('node scripts/gsc-export-urls.js', { stdio: 'inherit' })
      console.log('\n✅ URLs exported from GSC successfully\n')
    } catch (error) {
      console.error('❌ Failed to export URLs from GSC:', error.message)
      console.log('\nFalling back to manual URLs file...\n')
    }
  }

  console.log('📋 Reading URLs file...')

  const pages = readCSV(CONFIG.urlsFile)
  console.log(`   Found ${pages.length} pages to migrate\n`)

  // Group pages by category
  const categories = {}
  pages.forEach(page => {
    if (!categories[page.category]) {
      categories[page.category] = []
    }
    categories[page.category].push(page)
  })

  console.log('📊 Pages by category:')
  Object.entries(categories).forEach(([cat, items]) => {
    console.log(`   ${cat}: ${items.length} pages`)
  })
  console.log('')

  // Ensure content directories exist
  Object.keys(categories).forEach(category => {
    ensureDir(path.join(CONFIG.contentDir, category))
  })

  // Generate placeholder JSON files
  const migrationLog = []
  for (const page of pages) {
    const result = await generateContentFile(page)
    migrationLog.push(result)
  }

  // Save migration log
  fs.writeFileSync(CONFIG.outputLog, JSON.stringify(migrationLog, null, 2))

  console.log('\n✅ Migration complete!')
  console.log(`\n📊 Summary:`)
  console.log(`   Total pages: ${migrationLog.length}`)
  console.log(`   Locations: ${categories.locations?.length || 0}`)
  console.log(`   Services: ${categories.services?.length || 0}`)
  console.log(`   Neighborhoods: ${categories.neighborhoods?.length || 0}`)
  console.log(`   Blog posts: ${categories['blog/posts']?.length || 0}`)
  console.log(`\n📝 Log saved: ${CONFIG.outputLog}`)

  console.log('\n⚠️  NEXT STEPS:')
  console.log('   1. Use Claude Code /scrape-site skill to extract content from old URLs')
  console.log('   2. Use Claude Code /analyze-seo skill to optimize each page')
  console.log('   3. Use Claude Code /generate-keyword-plan skill for titles/descriptions')
  console.log('   4. Manually review and enhance the generated JSON files')
  console.log('   5. Run npm run build to verify all pages generate correctly')
}

// Interactive setup
async function setup() {
  console.log('🔧 Content Migration Setup\n')

  if (!fs.existsSync(CONFIG.urlsFile)) {
    console.log('Creating example urls.csv file...\n')

    const exampleCSV = `url,category,slug,priority
https://old-site.com/las-vegas,locations,las-vegas,0.9
https://old-site.com/henderson,locations,henderson,0.9
https://old-site.com/north-las-vegas,locations,north-las-vegas,0.9
https://old-site.com/summerlin,locations,summerlin,0.9
https://old-site.com/stop-foreclosure,services,stop-foreclosure,0.8
https://old-site.com/inherited-property,services,inherited-property,0.8
https://old-site.com/green-valley,neighborhoods,green-valley,0.7`

    fs.writeFileSync(CONFIG.urlsFile, exampleCSV)
    console.log(`✅ Created example file: ${CONFIG.urlsFile}`)
    console.log('\n📝 Edit this file with your actual URLs, then run the script again.')
    console.log('\nCSV Format:')
    console.log('  url: Full URL of the old page')
    console.log('  category: locations, services, neighborhoods, or blog/posts')
    console.log('  slug: URL-friendly slug for the new page')
    console.log('  priority: Sitemap priority (0.0 to 1.0)\n')
    process.exit(0)
  }

  migrate()
}

// Run setup
setup()
