#!/usr/bin/env node

/**
 * Unified Performance Tracking Script (GSC + GA4)
 *
 * Track complete performance metrics combining Google Search Console and Google Analytics data.
 *
 * Modes:
 * - --before: Capture baseline performance before migration
 * - --after: Capture performance after migration
 * - --compare: Compare before vs after performance
 *
 * Features:
 * - GSC data: clicks, impressions, positions, CTR, top queries
 * - GA4 data: page views, sessions, users, bounce rate, traffic sources
 * - Combined page-level metrics from both sources
 * - Demographics and conversions
 * - Unified markdown reports
 *
 * Usage:
 *   node scripts/performance-tracker.js --before
 *   node scripts/performance-tracker.js --after
 *   node scripts/performance-tracker.js --compare
 */

require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');

async function main() {
  try {
    const args = process.argv.slice(2);
    const mode = getMode(args);

    if (!mode) {
      console.error('❌ Error: Please specify a mode: --before, --after, or --compare');
      console.log('\nUsage:');
      console.log('  node scripts/performance-tracker.js --before   # Capture baseline');
      console.log('  node scripts/performance-tracker.js --after    # Capture post-migration');
      console.log('  node scripts/performance-tracker.js --compare  # Compare results');
      process.exit(1);
    }

    if (mode === 'compare') {
      await comparePerformance();
    } else {
      await trackPerformance(mode);
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
 * Track performance and save snapshot
 */
async function trackPerformance(mode) {
  console.log(`\n📊 Tracking ${mode === 'before' ? 'baseline' : 'post-migration'} performance...\n`);

  // Import clients
  const gscModule = await import('../src/lib/integrations/gsc-client.ts');
  const createGSCClient = gscModule.createGSCClient || gscModule.default?.createGSCClient;
  const ga4Module = await import('../src/lib/integrations/ga4-client.ts');
  const createGA4Client = ga4Module.createGA4Client || ga4Module.default?.createGA4Client;

  const gscClient = createGSCClient();
  const ga4Client = createGA4Client();

  // Fetch GSC data (search performance)
  console.log('🔍 Fetching Google Search Console data...');
  const gscData = await gscClient.getSearchAnalytics({
    startDate: formatDate(90), // Last 90 days
    endDate: formatDate(0), // Today
    dimensions: ['page', 'query'],
    rowLimit: 25000,
  });

  // Fetch GA4 data (visitor analytics)
  console.log('📈 Fetching Google Analytics data...');
  const [pageMetrics, trafficSources, demographics, conversions] = await Promise.all([
    ga4Client.getPageMetrics({ days: 90 }),
    ga4Client.getTrafficSources({ days: 90 }),
    ga4Client.getUserDemographics({ days: 90 }),
    ga4Client.getConversions({ days: 90 }),
  ]);

  // Process GSC data
  const searchMetrics = processGSCData(gscData);

  // Combine page-level data
  const combinedPages = mergePageData(searchMetrics.pageData, pageMetrics.pagesByUrl);

  // Create unified report
  const report = {
    timestamp: new Date().toISOString(),
    dateRange: {
      start: formatDate(90),
      end: formatDate(0),
    },
    search: {
      totalClicks: searchMetrics.totalClicks,
      totalImpressions: searchMetrics.totalImpressions,
      avgPosition: searchMetrics.avgPosition,
      avgCTR: searchMetrics.avgCTR,
      topQueries: searchMetrics.topQueries,
      topPages: searchMetrics.topPages,
    },
    analytics: {
      sessions: pageMetrics.sessions,
      pageViews: pageMetrics.pageViews,
      users: pageMetrics.users,
      newUsers: pageMetrics.newUsers,
      bounceRate: pageMetrics.bounceRate,
      avgSessionDuration: pageMetrics.avgSessionDuration,
      trafficSources,
      demographics,
      conversions,
    },
    pages: combinedPages,
    topPerforming: identifyTopPages(combinedPages, 20),
  };

  // Save snapshot
  const filename = `seo/reports/performance-${mode}.json`;
  saveJSON(filename, report);
  console.log(`\n✅ Saved performance snapshot to ${filename}`);

  // Generate markdown report
  const mdFilename = `seo/reports/PERFORMANCE-${mode.toUpperCase()}.md`;
  generateMarkdownReport(report, mode, mdFilename);
  console.log(`✅ Generated report: ${mdFilename}\n`);

  // Display summary
  displaySummary(report, mode);
}

/**
 * Compare before and after performance
 */
async function comparePerformance() {
  console.log('\n📊 Comparing performance: Before vs After\n');

  // Load snapshots
  const beforeFile = 'seo/reports/performance-before.json';
  const afterFile = 'seo/reports/performance-after.json';

  if (!fs.existsSync(beforeFile) || !fs.existsSync(afterFile)) {
    console.error('❌ Error: Missing performance snapshots');
    console.log('\nYou need to capture both baseline and post-migration data first:');
    console.log('  node scripts/performance-tracker.js --before');
    console.log('  node scripts/performance-tracker.js --after\n');
    process.exit(1);
  }

  const before = JSON.parse(fs.readFileSync(beforeFile, 'utf8'));
  const after = JSON.parse(fs.readFileSync(afterFile, 'utf8'));

  // Calculate comparisons
  const comparison = {
    search: {
      clicks: calculateChange(before.search.totalClicks, after.search.totalClicks),
      impressions: calculateChange(before.search.totalImpressions, after.search.totalImpressions),
      avgPosition: calculateChange(before.search.avgPosition, after.search.avgPosition, true), // Lower is better
      avgCTR: calculateChange(before.search.avgCTR, after.search.avgCTR),
    },
    analytics: {
      sessions: calculateChange(before.analytics.sessions, after.analytics.sessions),
      pageViews: calculateChange(before.analytics.pageViews, after.analytics.pageViews),
      users: calculateChange(before.analytics.users, after.analytics.users),
      bounceRate: calculateChange(before.analytics.bounceRate, after.analytics.bounceRate, true), // Lower is better
      conversions: calculateChange(before.analytics.conversions.totalConversions, after.analytics.conversions.totalConversions),
    },
    topGainers: findTopChanges(before.pages, after.pages, 'gain', 10),
    topLosers: findTopChanges(before.pages, after.pages, 'loss', 10),
  };

  // Display comparison
  displayComparison(comparison);

  // Generate comparison report
  const mdFilename = 'seo/reports/PERFORMANCE-COMPARISON.md';
  generateComparisonReport(before, after, comparison, mdFilename);
  console.log(`\n✅ Generated comparison report: ${mdFilename}\n`);
}

/**
 * Process GSC data into summary metrics
 */
function processGSCData(data) {
  const rows = data.rows || [];

  // Aggregate by page
  const pageMap = new Map();
  const queryMap = new Map();

  rows.forEach(row => {
    const page = row.keys[0];
    const query = row.keys[1];

    // Aggregate page data
    if (!pageMap.has(page)) {
      pageMap.set(page, { url: page, clicks: 0, impressions: 0, positions: [], ctr: 0 });
    }
    const pageData = pageMap.get(page);
    pageData.clicks += row.clicks;
    pageData.impressions += row.impressions;
    pageData.positions.push(row.position);

    // Aggregate query data
    if (!queryMap.has(query)) {
      queryMap.set(query, { query, clicks: 0, impressions: 0, position: 0, ctr: 0 });
    }
    const queryData = queryMap.get(query);
    queryData.clicks += row.clicks;
    queryData.impressions += row.impressions;
    queryData.position = row.position; // Use latest position
    queryData.ctr = row.ctr;
  });

  // Calculate averages for pages
  const pageData = Array.from(pageMap.values()).map(page => ({
    url: page.url,
    clicks: page.clicks,
    impressions: page.impressions,
    position: page.positions.reduce((a, b) => a + b, 0) / page.positions.length,
    ctr: page.impressions > 0 ? page.clicks / page.impressions : 0,
  }));

  // Get top queries
  const topQueries = Array.from(queryMap.values())
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 50);

  // Get top pages
  const topPages = pageData
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 50);

  // Calculate totals
  const totalClicks = pageData.reduce((sum, p) => sum + p.clicks, 0);
  const totalImpressions = pageData.reduce((sum, p) => sum + p.impressions, 0);
  const avgPosition = pageData.reduce((sum, p) => sum + p.position, 0) / pageData.length;
  const avgCTR = totalImpressions > 0 ? totalClicks / totalImpressions : 0;

  return {
    totalClicks,
    totalImpressions,
    avgPosition,
    avgCTR,
    topQueries,
    topPages,
    pageData,
  };
}

/**
 * Merge GSC and GA4 page data
 */
function mergePageData(gscPages, ga4Pages) {
  const merged = [];
  const ga4Map = new Map(ga4Pages.map(p => [normalizeUrl(p.url), p]));

  gscPages.forEach(gscPage => {
    const normalizedUrl = normalizeUrl(gscPage.url);
    const ga4Page = ga4Map.get(normalizedUrl);

    merged.push({
      url: gscPage.url,
      // GSC data
      clicks: gscPage.clicks || 0,
      impressions: gscPage.impressions || 0,
      position: gscPage.position || 0,
      ctr: gscPage.ctr || 0,
      // GA4 data
      pageViews: ga4Page?.views || 0,
      sessions: ga4Page?.sessions || 0,
      bounceRate: ga4Page?.bounceRate || 0,
      avgDuration: ga4Page?.avgDuration || 0,
      // Combined score
      combinedScore: calculateCombinedScore(gscPage, ga4Page),
    });
  });

  return merged.sort((a, b) => b.combinedScore - a.combinedScore);
}

/**
 * Normalize URL for comparison
 */
function normalizeUrl(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.pathname.replace(/\/$/, ''); // Remove trailing slash
  } catch {
    return url;
  }
}

/**
 * Calculate combined performance score
 */
function calculateCombinedScore(gscPage, ga4Page) {
  const clicks = gscPage?.clicks || 0;
  const impressions = gscPage?.impressions || 0;
  const position = gscPage?.position || 100;
  const pageViews = ga4Page?.views || 0;
  const sessions = ga4Page?.sessions || 0;

  // Weighted score
  return (
    clicks * 5 +
    impressions * 0.1 +
    Math.max(0, 100 - position) * 2 +
    pageViews * 3 +
    sessions * 4
  );
}

/**
 * Identify top performing pages
 */
function identifyTopPages(pages, limit) {
  return pages
    .sort((a, b) => b.combinedScore - a.combinedScore)
    .slice(0, limit)
    .map(p => ({
      url: p.url,
      clicks: p.clicks,
      impressions: p.impressions,
      pageViews: p.pageViews,
      sessions: p.sessions,
      combinedScore: p.combinedScore,
    }));
}

/**
 * Calculate change between two values
 */
function calculateChange(before, after, lowerIsBetter = false) {
  const change = after - before;
  const percentChange = before !== 0 ? (change / before) * 100 : 0;

  return {
    before,
    after,
    change,
    percentChange,
    improved: lowerIsBetter ? change < 0 : change > 0,
  };
}

/**
 * Find pages with biggest changes
 */
function findTopChanges(beforePages, afterPages, type, limit) {
  const afterMap = new Map(afterPages.map(p => [normalizeUrl(p.url), p]));
  const changes = [];

  beforePages.forEach(beforePage => {
    const url = normalizeUrl(beforePage.url);
    const afterPage = afterMap.get(url);

    if (afterPage) {
      const scoreChange = afterPage.combinedScore - beforePage.combinedScore;
      const percentChange = beforePage.combinedScore !== 0
        ? (scoreChange / beforePage.combinedScore) * 100
        : 0;

      if ((type === 'gain' && scoreChange > 0) || (type === 'loss' && scoreChange < 0)) {
        changes.push({
          url: beforePage.url,
          metric: 'combinedScore',
          beforeValue: beforePage.combinedScore,
          afterValue: afterPage.combinedScore,
          change: scoreChange,
          percentChange,
        });
      }
    }
  });

  return changes
    .sort((a, b) => type === 'gain' ? b.change - a.change : a.change - b.change)
    .slice(0, limit);
}

/**
 * Display summary in console
 */
function displaySummary(report, mode) {
  console.log(`📊 ${mode === 'before' ? 'Baseline' : 'Post-Migration'} Performance Summary:\n`);
  console.log('🔍 Search Performance (GSC):');
  console.log(`   Clicks: ${report.search.totalClicks.toLocaleString()}`);
  console.log(`   Impressions: ${report.search.totalImpressions.toLocaleString()}`);
  console.log(`   Avg Position: ${report.search.avgPosition.toFixed(1)}`);
  console.log(`   Avg CTR: ${(report.search.avgCTR * 100).toFixed(2)}%\n`);

  console.log('📈 Visitor Analytics (GA4):');
  console.log(`   Sessions: ${report.analytics.sessions.toLocaleString()}`);
  console.log(`   Page Views: ${report.analytics.pageViews.toLocaleString()}`);
  console.log(`   Users: ${report.analytics.users.toLocaleString()}`);
  console.log(`   Bounce Rate: ${report.analytics.bounceRate.toFixed(2)}%`);
  console.log(`   Conversions: ${report.analytics.conversions.totalConversions}\n`);

  console.log('🏆 Top Traffic Sources:');
  report.analytics.trafficSources.slice(0, 5).forEach((source, i) => {
    console.log(`   ${i + 1}. ${source.source} / ${source.medium}: ${source.sessions.toLocaleString()} sessions`);
  });
  console.log();
}

/**
 * Display comparison in console
 */
function displayComparison(comparison) {
  console.log('📊 Performance Comparison:\n');

  console.log('🔍 Search Performance (GSC):');
  displayMetric('Clicks', comparison.search.clicks);
  displayMetric('Impressions', comparison.search.impressions);
  displayMetric('Avg Position', comparison.search.avgPosition);
  displayMetric('Avg CTR', comparison.search.avgCTR);

  console.log('\n📈 Visitor Analytics (GA4):');
  displayMetric('Sessions', comparison.analytics.sessions);
  displayMetric('Page Views', comparison.analytics.pageViews);
  displayMetric('Users', comparison.analytics.users);
  displayMetric('Bounce Rate', comparison.analytics.bounceRate);
  displayMetric('Conversions', comparison.analytics.conversions);

  console.log('\n🚀 Top Gainers:');
  comparison.topGainers.slice(0, 5).forEach((page, i) => {
    console.log(`   ${i + 1}. ${page.url}`);
    console.log(`      Change: ${page.percentChange.toFixed(1)}%`);
  });

  console.log('\n📉 Top Losers:');
  comparison.topLosers.slice(0, 5).forEach((page, i) => {
    console.log(`   ${i + 1}. ${page.url}`);
    console.log(`      Change: ${page.percentChange.toFixed(1)}%`);
  });
}

/**
 * Display a single metric comparison
 */
function displayMetric(name, metric) {
  const arrow = metric.improved ? '📈' : '📉';
  const sign = metric.change >= 0 ? '+' : '';
  console.log(`   ${arrow} ${name}: ${metric.before.toLocaleString()} → ${metric.after.toLocaleString()} (${sign}${metric.percentChange.toFixed(1)}%)`);
}

/**
 * Generate markdown report
 */
function generateMarkdownReport(report, mode, filename) {
  const md = [];

  md.push(`# Performance Report - ${mode === 'before' ? 'Baseline' : 'Post-Migration'}\n`);
  md.push(`**Date:** ${new Date(report.timestamp).toLocaleDateString()}`);
  md.push(`**Period:** ${report.dateRange.start} to ${report.dateRange.end}\n`);

  md.push('## Search Performance (Google Search Console)\n');
  md.push(`- **Total Clicks:** ${report.search.totalClicks.toLocaleString()}`);
  md.push(`- **Total Impressions:** ${report.search.totalImpressions.toLocaleString()}`);
  md.push(`- **Average Position:** ${report.search.avgPosition.toFixed(1)}`);
  md.push(`- **Average CTR:** ${(report.search.avgCTR * 100).toFixed(2)}%\n`);

  md.push('### Top Queries\n');
  md.push('| Query | Clicks | Impressions | Position | CTR |');
  md.push('|-------|--------|-------------|----------|-----|');
  report.search.topQueries.slice(0, 20).forEach(q => {
    md.push(`| ${q.query} | ${q.clicks} | ${q.impressions} | ${q.position.toFixed(1)} | ${(q.ctr * 100).toFixed(2)}% |`);
  });
  md.push('');

  md.push('## Visitor Analytics (Google Analytics 4)\n');
  md.push(`- **Sessions:** ${report.analytics.sessions.toLocaleString()}`);
  md.push(`- **Page Views:** ${report.analytics.pageViews.toLocaleString()}`);
  md.push(`- **Users:** ${report.analytics.users.toLocaleString()}`);
  md.push(`- **New Users:** ${report.analytics.newUsers.toLocaleString()}`);
  md.push(`- **Bounce Rate:** ${report.analytics.bounceRate.toFixed(2)}%`);
  md.push(`- **Avg Session Duration:** ${report.analytics.avgSessionDuration.toFixed(0)}s`);
  md.push(`- **Total Conversions:** ${report.analytics.conversions.totalConversions}\n`);

  md.push('### Traffic Sources\n');
  md.push('| Source | Medium | Sessions | Users | % of Total |');
  md.push('|--------|--------|----------|-------|------------|');
  report.analytics.trafficSources.slice(0, 10).forEach(s => {
    md.push(`| ${s.source} | ${s.medium} | ${s.sessions.toLocaleString()} | ${s.users.toLocaleString()} | ${s.percentage.toFixed(1)}% |`);
  });
  md.push('');

  md.push('## Top Performing Pages\n');
  md.push('| Page | Clicks | Impressions | Page Views | Sessions | Score |');
  md.push('|------|--------|-------------|------------|----------|-------|');
  report.topPerforming.forEach(p => {
    md.push(`| ${p.url} | ${p.clicks} | ${p.impressions} | ${p.pageViews} | ${p.sessions} | ${p.combinedScore.toFixed(0)} |`);
  });
  md.push('');

  saveFile(filename, md.join('\n'));
}

/**
 * Generate comparison markdown report
 */
function generateComparisonReport(before, after, comparison, filename) {
  const md = [];

  md.push('# Performance Comparison Report\n');
  md.push(`**Before:** ${new Date(before.timestamp).toLocaleDateString()}`);
  md.push(`**After:** ${new Date(after.timestamp).toLocaleDateString()}\n`);

  md.push('## Overview\n');
  md.push('### Search Performance (GSC)\n');
  md.push('| Metric | Before | After | Change | % Change |');
  md.push('|--------|--------|-------|--------|----------|');
  md.push(formatComparisonRow('Clicks', comparison.search.clicks));
  md.push(formatComparisonRow('Impressions', comparison.search.impressions));
  md.push(formatComparisonRow('Avg Position', comparison.search.avgPosition));
  md.push(formatComparisonRow('Avg CTR', comparison.search.avgCTR));
  md.push('');

  md.push('### Visitor Analytics (GA4)\n');
  md.push('| Metric | Before | After | Change | % Change |');
  md.push('|--------|--------|-------|--------|----------|');
  md.push(formatComparisonRow('Sessions', comparison.analytics.sessions));
  md.push(formatComparisonRow('Page Views', comparison.analytics.pageViews));
  md.push(formatComparisonRow('Users', comparison.analytics.users));
  md.push(formatComparisonRow('Bounce Rate', comparison.analytics.bounceRate));
  md.push(formatComparisonRow('Conversions', comparison.analytics.conversions));
  md.push('');

  md.push('## Top Gainers\n');
  md.push('| Page | Before Score | After Score | % Change |');
  md.push('|------|-------------|-------------|----------|');
  comparison.topGainers.forEach(p => {
    md.push(`| ${p.url} | ${p.beforeValue.toFixed(0)} | ${p.afterValue.toFixed(0)} | +${p.percentChange.toFixed(1)}% |`);
  });
  md.push('');

  md.push('## Top Losers\n');
  md.push('| Page | Before Score | After Score | % Change |');
  md.push('|------|-------------|-------------|----------|');
  comparison.topLosers.forEach(p => {
    md.push(`| ${p.url} | ${p.beforeValue.toFixed(0)} | ${p.afterValue.toFixed(0)} | ${p.percentChange.toFixed(1)}% |`);
  });
  md.push('');

  saveFile(filename, md.join('\n'));
}

/**
 * Format comparison row for markdown table
 */
function formatComparisonRow(name, metric) {
  const sign = metric.change >= 0 ? '+' : '';
  const arrow = metric.improved ? '↑' : '↓';
  return `| ${name} | ${metric.before.toLocaleString()} | ${metric.after.toLocaleString()} | ${sign}${metric.change.toLocaleString()} | ${arrow} ${sign}${metric.percentChange.toFixed(1)}% |`;
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
 * Format date as YYYY-MM-DD
 */
function formatDate(daysAgo) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split('T')[0];
}

/**
 * Get mode from command line args
 */
function getMode(args) {
  if (args.includes('--before')) return 'before';
  if (args.includes('--after')) return 'after';
  if (args.includes('--compare')) return 'compare';
  return null;
}

// Run main function
main();
