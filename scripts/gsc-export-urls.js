#!/usr/bin/env node

/**
 * Google Search Console URL Export Script
 *
 * Automatically fetches all indexed URLs from Google Search Console and generates
 * a CSV file for use with the migration script.
 *
 * Features:
 * - Automatic URL discovery (no manual export needed)
 * - Smart categorization (locations, services, blog, neighborhoods)
 * - Slug extraction from old URLs
 * - Priority calculation based on performance data
 * - CSV generation for migrate-pages.js
 * - Summary statistics
 *
 * Usage: node scripts/gsc-export-urls.js [options]
 * Options:
 *   --output <file>  Output CSV file path (default: scripts/urls.csv)
 *   --min-clicks <n> Minimum clicks to include (default: 0)
 */

require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');

// Import the GSC client (using dynamic import since it's TypeScript)
async function main() {
  try {
    // Parse command line arguments
    const args = process.argv.slice(2);
    const outputFile = getArg(args, '--output', 'scripts/urls.csv');
    const minClicks = parseInt(getArg(args, '--min-clicks', '0'), 10);

    console.log('\n🔍 Fetching indexed URLs from Google Search Console...\n');

    // Dynamically import the GSC client
    const gscModule = await import('../src/lib/integrations/gsc-client.ts');
    const createGSCClient = gscModule.createGSCClient || gscModule.default?.createGSCClient;
    const gscClient = createGSCClient();

    // Fetch all indexed URLs
    const pages = await gscClient.getIndexedUrls();
    console.log(`✅ Found ${pages.length} indexed pages\n`);

    if (pages.length === 0) {
      console.log('⚠️  No indexed pages found. This could mean:');
      console.log('   - Your site is not yet indexed in Google Search Console');
      console.log('   - The property URL is incorrect');
      console.log('   - There was an authentication issue');
      process.exit(1);
    }

    // Filter by minimum clicks if specified
    const filteredPages = pages.filter(page => (page.clicks || 0) >= minClicks);
    console.log(`📊 Processing ${filteredPages.length} pages (min ${minClicks} clicks)...\n`);

    // Categorize and process URLs
    const categorized = filteredPages.map(page => {
      const url = page.url;
      const category = detectCategory(url);
      const slug = extractSlug(url);
      const priority = calculatePriority(page);

      return {
        url,
        category,
        slug,
        priority,
        clicks: page.clicks || 0,
        impressions: page.impressions || 0,
        position: page.position ? page.position.toFixed(1) : 'N/A',
        ctr: page.ctr ? (page.ctr * 100).toFixed(2) + '%' : 'N/A',
      };
    });

    // Sort by priority (high to low)
    categorized.sort((a, b) => b.priority - a.priority);

    // Generate summary statistics
    const summary = generateSummary(categorized);
    displaySummary(summary);

    // Write to CSV
    writeCSV(outputFile, categorized);
    console.log(`\n✅ Exported ${categorized.length} URLs to ${outputFile}\n`);

    // Display top performers
    console.log('🏆 Top 10 Pages by Performance:\n');
    categorized.slice(0, 10).forEach((page, i) => {
      console.log(`${i + 1}. ${page.slug} (${page.category})`);
      console.log(`   Clicks: ${page.clicks} | Impressions: ${page.impressions} | Position: ${page.position}`);
    });
    console.log();

    // Display recommendations
    console.log('💡 Next Steps:\n');
    console.log('1. Review the generated CSV file: ' + outputFile);
    console.log('2. Run migration script: node scripts/migrate-pages.js --from-gsc');
    console.log('3. Or manually edit URLs/categories in the CSV before migrating\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.message.includes('credentials')) {
      console.log('\n💡 Tip: Run authentication first:');
      console.log('   node scripts/google-auth.js\n');
    }
    process.exit(1);
  }
}

/**
 * Detect page category from URL
 */
function detectCategory(url) {
  const urlLower = url.toLowerCase();

  // Location pages
  if (urlLower.includes('/sell-my-house-') ||
      urlLower.includes('/we-buy-houses-') ||
      urlLower.includes('/cash-home-buyers-') ||
      urlLower.includes('-nv') ||
      urlLower.includes('-nevada')) {
    return 'locations';
  }

  // Service pages
  if (urlLower.includes('/foreclosure') ||
      urlLower.includes('/probate') ||
      urlLower.includes('/divorce') ||
      urlLower.includes('/inherited') ||
      urlLower.includes('/behind-payments') ||
      urlLower.includes('/tax-lien') ||
      urlLower.includes('/bankruptcy') ||
      urlLower.includes('/fire-damage') ||
      urlLower.includes('/hoarder') ||
      urlLower.includes('/tenant-occupied')) {
    return 'services';
  }

  // Neighborhood pages
  if (urlLower.includes('/neighborhood') ||
      urlLower.includes('/summerlin') ||
      urlLower.includes('/downtown') ||
      urlLower.includes('/enterprise')) {
    return 'neighborhoods';
  }

  // Blog pages
  if (urlLower.includes('/blog') ||
      urlLower.includes('/article') ||
      urlLower.includes('/news') ||
      urlLower.includes('/guide')) {
    return 'blog';
  }

  // Default to services for most cash buyer related pages
  return 'services';
}

/**
 * Extract slug from URL
 */
function extractSlug(url) {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;

    // Remove leading/trailing slashes
    let slug = pathname.replace(/^\/+|\/+$/g, '');

    // If empty, use homepage
    if (!slug) {
      return 'home';
    }

    // Remove common prefixes
    slug = slug.replace(/^(sell-my-house-|we-buy-houses-|cash-home-buyers-)/, '');

    // Replace slashes with hyphens
    slug = slug.replace(/\//g, '-');

    // Clean up
    slug = slug.toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    return slug || 'unknown';
  } catch (error) {
    return 'unknown';
  }
}

/**
 * Calculate priority score (0-100)
 */
function calculatePriority(page) {
  const clicks = page.clicks || 0;
  const impressions = page.impressions || 0;
  const position = page.position || 100;

  // Weight factors
  const clickWeight = 0.5;
  const impressionWeight = 0.3;
  const positionWeight = 0.2;

  // Normalize values
  const clickScore = Math.min(clicks / 10, 100); // 10+ clicks = max score
  const impressionScore = Math.min(impressions / 100, 100); // 100+ impressions = max score
  const positionScore = Math.max(0, 100 - position * 5); // Position 1 = 95, Position 10 = 50

  // Calculate weighted score
  const score = (
    clickScore * clickWeight +
    impressionScore * impressionWeight +
    positionScore * positionWeight
  );

  return Math.round(score);
}

/**
 * Generate summary statistics
 */
function generateSummary(pages) {
  const summary = {
    total: pages.length,
    byCategory: {},
    totalClicks: 0,
    totalImpressions: 0,
    avgPosition: 0,
  };

  let positionSum = 0;
  let positionCount = 0;

  pages.forEach(page => {
    // Count by category
    summary.byCategory[page.category] = (summary.byCategory[page.category] || 0) + 1;

    // Sum metrics
    summary.totalClicks += page.clicks || 0;
    summary.totalImpressions += page.impressions || 0;

    if (page.position !== 'N/A') {
      positionSum += parseFloat(page.position);
      positionCount++;
    }
  });

  summary.avgPosition = positionCount > 0 ? (positionSum / positionCount).toFixed(1) : 'N/A';

  return summary;
}

/**
 * Display summary statistics
 */
function displaySummary(summary) {
  console.log('📈 Summary Statistics:\n');
  console.log(`Total Pages: ${summary.total}`);
  console.log(`Total Clicks: ${summary.totalClicks.toLocaleString()}`);
  console.log(`Total Impressions: ${summary.totalImpressions.toLocaleString()}`);
  console.log(`Average Position: ${summary.avgPosition}\n`);

  console.log('📂 Pages by Category:');
  Object.entries(summary.byCategory)
    .sort((a, b) => b[1] - a[1])
    .forEach(([category, count]) => {
      console.log(`   ${category}: ${count}`);
    });
}

/**
 * Write data to CSV file
 */
function writeCSV(filename, data) {
  // Ensure directory exists
  const dir = path.dirname(filename);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // CSV header
  const header = 'url,category,slug,priority,clicks,impressions,position,ctr\n';

  // CSV rows
  const rows = data.map(row =>
    `"${row.url}","${row.category}","${row.slug}",${row.priority},${row.clicks},${row.impressions},"${row.position}","${row.ctr}"`
  ).join('\n');

  // Write file
  fs.writeFileSync(filename, header + rows, 'utf8');
}

/**
 * Get command line argument value
 */
function getArg(args, flag, defaultValue) {
  const index = args.indexOf(flag);
  if (index !== -1 && index + 1 < args.length) {
    return args[index + 1];
  }
  return defaultValue;
}

// Run main function
main();
