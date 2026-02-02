#!/usr/bin/env node

/**
 * Google Search Console Sitemap Submission Script
 *
 * Automatically submit sitemap to Google Search Console and check status.
 *
 * Features:
 * - Validate sitemap before submission
 * - Submit to GSC programmatically
 * - Check submission status
 * - Display errors and warnings
 * - Save submission log
 *
 * Usage:
 *   node scripts/gsc-submit-sitemap.js [sitemap-url]
 *
 * Examples:
 *   node scripts/gsc-submit-sitemap.js
 *   node scripts/gsc-submit-sitemap.js https://alchemyinvestmentsre.com/sitemap.xml
 */

require('dotenv').config({ path: '.env.local' });
const https = require('https');
const fs = require('fs');
const path = require('path');

async function main() {
  try {
    const args = process.argv.slice(2);
    const sitemapUrl = args[0] || 'https://alchemyinvestmentsre.com/sitemap.xml';

    console.log('\n🗺️  Sitemap Submission to Google Search Console\n');
    console.log(`Sitemap URL: ${sitemapUrl}\n`);

    // Step 1: Validate sitemap exists and is accessible
    console.log('1️⃣  Validating sitemap...');
    const isValid = await validateSitemap(sitemapUrl);

    if (!isValid) {
      console.error('❌ Sitemap validation failed. Please fix the sitemap and try again.\n');
      process.exit(1);
    }

    console.log('✅ Sitemap is valid and accessible\n');

    // Step 2: Import GSC client and submit
    console.log('2️⃣  Submitting sitemap to Google Search Console...');
    const { createGSCClient } = await import('../src/lib/integrations/gsc-client.js');
    const gscClient = createGSCClient();

    await gscClient.submitSitemap(sitemapUrl);
    console.log('✅ Sitemap submitted successfully\n');

    // Step 3: Wait a moment and check status
    console.log('3️⃣  Checking sitemap status...');
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds

    const status = await gscClient.getSitemapStatus(sitemapUrl);

    // Display status
    console.log('\n📊 Sitemap Status:\n');
    console.log(`Path: ${status.path}`);
    if (status.lastSubmitted) {
      console.log(`Last Submitted: ${new Date(status.lastSubmitted).toLocaleString()}`);
    }
    if (status.lastDownloaded) {
      console.log(`Last Downloaded: ${new Date(status.lastDownloaded).toLocaleString()}`);
    }

    if (status.contents && status.contents.length > 0) {
      console.log('\nURLs by Type:');
      status.contents.forEach(content => {
        console.log(`  ${content.type}: ${content.submitted} submitted, ${content.indexed} indexed`);
      });
    }

    if (status.errors && status.errors > 0) {
      console.log(`\n⚠️  Errors: ${status.errors}`);
    }

    if (status.warnings && status.warnings > 0) {
      console.log(`⚠️  Warnings: ${status.warnings}`);
    }

    // Step 4: List all sitemaps for the property
    console.log('\n4️⃣  Listing all sitemaps for this property...');
    const sitemaps = await gscClient.listSitemaps();

    if (sitemaps.length > 0) {
      console.log(`\nFound ${sitemaps.length} sitemap(s):\n`);
      sitemaps.forEach((sitemap, i) => {
        console.log(`${i + 1}. ${sitemap.path}`);
        if (sitemap.lastSubmitted) {
          console.log(`   Last Submitted: ${new Date(sitemap.lastSubmitted).toLocaleString()}`);
        }
        if (sitemap.contents && sitemap.contents.length > 0) {
          const total = sitemap.contents.reduce((sum, c) => sum + c.submitted, 0);
          const indexed = sitemap.contents.reduce((sum, c) => sum + c.indexed, 0);
          console.log(`   URLs: ${total} submitted, ${indexed} indexed`);
        }
        console.log();
      });
    }

    // Save submission log
    const log = {
      timestamp: new Date().toISOString(),
      sitemapUrl,
      status,
      allSitemaps: sitemaps,
    };

    const logFile = `seo/reports/sitemap-submission-${Date.now()}.json`;
    saveJSON(logFile, log);
    console.log(`✅ Saved submission log to ${logFile}\n`);

    // Next steps
    console.log('💡 Next Steps:\n');
    console.log('1. Monitor indexing progress:');
    console.log('   node scripts/gsc-check-indexing.js\n');
    console.log('2. Check sitemap status in Google Search Console:');
    console.log('   https://search.google.com/search-console/sitemaps\n');
    console.log('3. Note: It may take several days for Google to process the sitemap\n');

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
 * Validate sitemap is accessible and valid XML
 */
async function validateSitemap(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`❌ Sitemap returned status code: ${res.statusCode}`);
        resolve(false);
        return;
      }

      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Basic XML validation
        if (!data.includes('<?xml') || !data.includes('<urlset') || !data.includes('</urlset>')) {
          console.error('❌ Sitemap does not appear to be valid XML');
          resolve(false);
          return;
        }

        // Count URLs
        const urlMatches = data.match(/<url>/g);
        const urlCount = urlMatches ? urlMatches.length : 0;

        console.log(`   Found ${urlCount} URLs in sitemap`);

        if (urlCount === 0) {
          console.error('❌ Sitemap contains no URLs');
          resolve(false);
          return;
        }

        resolve(true);
      });
    }).on('error', (err) => {
      console.error(`❌ Failed to fetch sitemap: ${err.message}`);
      resolve(false);
    });
  });
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

// Run main function
main();
