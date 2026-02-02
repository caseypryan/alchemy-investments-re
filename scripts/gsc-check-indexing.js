#!/usr/bin/env node

/**
 * Google Search Console Indexing Status Monitor
 *
 * Check indexing status of all migrated pages and track progress over time.
 *
 * Features:
 * - Check all pages from content/ directory
 * - Show indexing progress (e.g., "67/110 indexed")
 * - Identify pages with errors
 * - Track crawl dates
 * - Save historical reports
 * - Suggest fixes for unindexed pages
 *
 * Usage:
 *   node scripts/gsc-check-indexing.js [options]
 *
 * Options:
 *   --category <name>  Only check specific category (locations, services, etc.)
 *   --verbose         Show detailed information for each URL
 */

require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');

async function main() {
  try {
    const args = process.argv.slice(2);
    const category = getArg(args, '--category', null);
    const verbose = args.includes('--verbose');

    console.log('\n🔍 Checking indexing status in Google Search Console...\n');

    // Import GSC client
    const { createGSCClient } = await import('../src/lib/integrations/gsc-client.js');
    const gscClient = createGSCClient();

    // Load all content pages
    const pages = await loadAllContentPages(category);

    if (pages.length === 0) {
      console.log('⚠️  No pages found to check.');
      console.log('Make sure you have content files in the content/ directory.\n');
      process.exit(0);
    }

    console.log(`📊 Checking ${pages.length} pages${category ? ` in category: ${category}` : ''}...\n`);

    // Check indexing status for each page (with rate limiting)
    const results = [];
    const batchSize = 10; // Process in batches to avoid rate limits

    for (let i = 0; i < pages.length; i += batchSize) {
      const batch = pages.slice(i, i + batchSize);
      console.log(`Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(pages.length / batchSize)}...`);

      const batchResults = await Promise.all(
        batch.map(async page => {
          const url = `https://alchemyinvestmentsre.com/${page.category}/${page.slug}`;

          try {
            const status = await gscClient.inspectUrl(url);

            return {
              url,
              category: page.category,
              slug: page.slug,
              indexed: status.indexed,
              lastCrawled: status.lastCrawled,
              coverageState: status.coverageState,
              reason: status.reason,
              mobileUsable: status.mobileUsable,
            };
          } catch (error) {
            return {
              url,
              category: page.category,
              slug: page.slug,
              indexed: false,
              coverageState: 'Error',
              reason: error.message,
            };
          }
        })
      );

      results.push(...batchResults);

      // Rate limiting delay between batches
      if (i + batchSize < pages.length) {
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
      }
    }

    // Generate summary
    const summary = {
      total: results.length,
      indexed: results.filter(r => r.indexed).length,
      notIndexed: results.filter(r => !r.indexed).length,
      errors: results.filter(r => r.coverageState === 'Error').length,
      warnings: results.filter(r => r.coverageState === 'Excluded').length,
      timestamp: new Date().toISOString(),
      results,
    };

    // Display summary
    console.log('\n📊 Indexing Status Summary:\n');
    console.log(`Total Pages: ${summary.total}`);
    console.log(`✅ Indexed: ${summary.indexed} (${((summary.indexed / summary.total) * 100).toFixed(1)}%)`);
    console.log(`⏳ Not Indexed: ${summary.notIndexed}`);
    console.log(`❌ Errors: ${summary.errors}`);
    console.log(`⚠️  Warnings: ${summary.warnings}\n`);

    // Progress bar
    displayProgressBar(summary.indexed, summary.total);

    // Save detailed report
    const reportFile = `seo/reports/indexing-status-${Date.now()}.json`;
    saveJSON(reportFile, summary);
    console.log(`\n✅ Saved detailed report to ${reportFile}\n`);

    // Show unindexed pages
    if (summary.notIndexed > 0) {
      showUnindexedPages(results, verbose);
    }

    // Show pages with errors
    if (summary.errors > 0) {
      showErrorPages(results, verbose);
    }

    // Generate markdown report
    const mdFile = 'seo/reports/INDEXING-STATUS.md';
    generateMarkdownReport(summary, mdFile);
    console.log(`✅ Generated report: ${mdFile}\n`);

    // Suggestions
    if (summary.notIndexed > 0 || summary.errors > 0) {
      showSuggestions(summary);
    }

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
 * Load all content pages from content/ directory
 */
async function loadAllContentPages(categoryFilter) {
  const pages = [];
  const contentDir = path.join(process.cwd(), 'content');

  if (!fs.existsSync(contentDir)) {
    return pages;
  }

  const categories = fs.readdirSync(contentDir);

  for (const category of categories) {
    // Skip if filtering by category
    if (categoryFilter && category !== categoryFilter) {
      continue;
    }

    const categoryPath = path.join(contentDir, category);

    if (!fs.statSync(categoryPath).isDirectory()) {
      continue;
    }

    const files = fs.readdirSync(categoryPath);

    for (const file of files) {
      if (file.endsWith('.json')) {
        const slug = file.replace('.json', '');
        pages.push({ category, slug });
      }
    }
  }

  return pages;
}

/**
 * Display progress bar
 */
function displayProgressBar(current, total) {
  const percentage = (current / total) * 100;
  const barLength = 40;
  const filledLength = Math.round((barLength * current) / total);
  const bar = '█'.repeat(filledLength) + '░'.repeat(barLength - filledLength);

  console.log(`Progress: [${bar}] ${percentage.toFixed(1)}%`);
}

/**
 * Show unindexed pages
 */
function showUnindexedPages(results, verbose) {
  const unindexed = results.filter(r => !r.indexed && r.coverageState !== 'Error');

  console.log(`\n⏳ Not Indexed Pages (${unindexed.length}):\n`);

  if (verbose) {
    unindexed.forEach((page, i) => {
      console.log(`${i + 1}. ${page.url}`);
      console.log(`   Category: ${page.category}`);
      console.log(`   Status: ${page.coverageState}`);
      if (page.reason) console.log(`   Reason: ${page.reason}`);
      if (page.lastCrawled) console.log(`   Last Crawled: ${new Date(page.lastCrawled).toLocaleString()}`);
      console.log();
    });
  } else {
    // Show just URLs in compact format
    unindexed.slice(0, 20).forEach((page, i) => {
      console.log(`   ${i + 1}. ${page.url} (${page.coverageState})`);
    });
    if (unindexed.length > 20) {
      console.log(`   ... and ${unindexed.length - 20} more`);
    }
    console.log('\n💡 Use --verbose flag to see detailed information');
  }
}

/**
 * Show pages with errors
 */
function showErrorPages(results, verbose) {
  const errors = results.filter(r => r.coverageState === 'Error');

  console.log(`\n❌ Pages with Errors (${errors.length}):\n`);

  errors.forEach((page, i) => {
    console.log(`${i + 1}. ${page.url}`);
    if (verbose) {
      console.log(`   Category: ${page.category}`);
      console.log(`   Error: ${page.reason || 'Unknown error'}`);
      console.log();
    }
  });

  if (!verbose && errors.length > 0) {
    console.log('\n💡 Use --verbose flag to see error details');
  }
}

/**
 * Show suggestions for improving indexing
 */
function showSuggestions(summary) {
  console.log('\n💡 Suggestions:\n');

  if (summary.notIndexed > 0) {
    console.log('To improve indexing:');
    console.log('1. Submit sitemap: node scripts/gsc-submit-sitemap.js');
    console.log('2. Wait 1-2 weeks for Google to crawl new pages');
    console.log('3. Check again: node scripts/gsc-check-indexing.js');
    console.log('4. Request indexing for important pages in GSC');
  }

  if (summary.errors > 0) {
    console.log('\nTo fix errors:');
    console.log('1. Review error messages in verbose mode');
    console.log('2. Fix any technical issues (404s, redirects, robots.txt)');
    console.log('3. Verify pages are accessible and have valid content');
    console.log('4. Request re-indexing in Google Search Console');
  }

  console.log();
}

/**
 * Generate markdown report
 */
function generateMarkdownReport(summary, filename) {
  const md = [];

  md.push('# Indexing Status Report\n');
  md.push(`**Date:** ${new Date(summary.timestamp).toLocaleDateString()}`);
  md.push(`**Time:** ${new Date(summary.timestamp).toLocaleTimeString()}\n`);

  md.push('## Summary\n');
  md.push(`- **Total Pages:** ${summary.total}`);
  md.push(`- **Indexed:** ${summary.indexed} (${((summary.indexed / summary.total) * 100).toFixed(1)}%)`);
  md.push(`- **Not Indexed:** ${summary.notIndexed}`);
  md.push(`- **Errors:** ${summary.errors}`);
  md.push(`- **Warnings:** ${summary.warnings}\n`);

  // Indexed pages
  const indexed = summary.results.filter(r => r.indexed);
  if (indexed.length > 0) {
    md.push('## Indexed Pages\n');
    md.push('| URL | Category | Last Crawled | Mobile Usable |');
    md.push('|-----|----------|--------------|---------------|');
    indexed.forEach(page => {
      const crawled = page.lastCrawled ? new Date(page.lastCrawled).toLocaleDateString() : 'N/A';
      const mobile = page.mobileUsable ? '✅' : '❌';
      md.push(`| ${page.url} | ${page.category} | ${crawled} | ${mobile} |`);
    });
    md.push('');
  }

  // Not indexed pages
  const notIndexed = summary.results.filter(r => !r.indexed && r.coverageState !== 'Error');
  if (notIndexed.length > 0) {
    md.push('## Not Indexed Pages\n');
    md.push('| URL | Category | Status | Reason |');
    md.push('|-----|----------|--------|--------|');
    notIndexed.forEach(page => {
      md.push(`| ${page.url} | ${page.category} | ${page.coverageState} | ${page.reason || 'N/A'} |`);
    });
    md.push('');
  }

  // Error pages
  const errors = summary.results.filter(r => r.coverageState === 'Error');
  if (errors.length > 0) {
    md.push('## Pages with Errors\n');
    md.push('| URL | Category | Error |');
    md.push('|-----|----------|-------|');
    errors.forEach(page => {
      md.push(`| ${page.url} | ${page.category} | ${page.reason || 'Unknown'} |`);
    });
    md.push('');
  }

  saveFile(filename, md.join('\n'));
}

/**
 * Save JSON file
 */
function saveJSON(filename, data) {
  const dir = path.dirname(filename);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filename, JSON.stringify(data, null, 2), 'utf8');
}

/**
 * Save text file
 */
function saveFile(filename, content) {
  const dir = path.dirname(filename);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filename, content, 'utf8');
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
