import { google } from 'googleapis';
import type {
  IndexedPage,
  PerformanceData,
  SearchAnalyticsOptions,
  InspectionResult,
  SitemapStatus,
} from './google-api-types';

export class GoogleSearchConsoleClient {
  private auth: any;
  private webmasters: any;
  private propertyUrl: string;

  constructor(refreshToken?: string, clientId?: string, clientSecret?: string, propertyUrl?: string) {
    // Get credentials from environment or parameters
    const token = refreshToken || process.env.GOOGLE_REFRESH_TOKEN;
    const id = clientId || process.env.GOOGLE_CLIENT_ID;
    const secret = clientSecret || process.env.GOOGLE_CLIENT_SECRET;
    this.propertyUrl = propertyUrl || process.env.GOOGLE_PROPERTY_URL || 'https://alchemyinvestmentsre.com';

    if (!token || !id || !secret) {
      throw new Error(
        'Missing Google API credentials. Please set GOOGLE_REFRESH_TOKEN, GOOGLE_CLIENT_ID, and GOOGLE_CLIENT_SECRET environment variables.'
      );
    }

    // Initialize OAuth2 client
    this.auth = new google.auth.OAuth2(id, secret, 'urn:ietf:wg:oauth:2.0:oob');
    this.auth.setCredentials({ refresh_token: token });

    // Initialize Search Console API client
    this.webmasters = google.webmasters({ version: 'v3', auth: this.auth });
  }

  /**
   * Get all indexed URLs from Google Search Console
   * Uses the searchanalytics query API to find pages with impressions
   */
  async getIndexedUrls(): Promise<IndexedPage[]> {
    try {
      console.log('Fetching indexed URLs from Google Search Console...');

      const response = await this.webmasters.searchanalytics.query({
        siteUrl: this.propertyUrl,
        requestBody: {
          startDate: this.formatDate(90), // Last 90 days
          endDate: this.formatDate(0), // Today
          dimensions: ['page'],
          rowLimit: 25000, // Maximum allowed
        },
      });

      const rows = response.data.rows || [];
      console.log(`Found ${rows.length} indexed pages with data`);

      const pages: IndexedPage[] = rows.map((row: any) => ({
        url: row.keys[0],
        clicks: row.clicks || 0,
        impressions: row.impressions || 0,
        position: row.position || 0,
        ctr: row.ctr || 0,
      }));

      return pages;
    } catch (error: any) {
      console.error('Error fetching indexed URLs:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
      throw error;
    }
  }

  /**
   * Get search analytics data with flexible options
   */
  async getSearchAnalytics(options: SearchAnalyticsOptions): Promise<PerformanceData> {
    try {
      const { startDate, endDate, dimensions = ['page'], rowLimit = 25000, dimensionFilterGroups } = options;

      const requestBody: any = {
        startDate,
        endDate,
        dimensions,
        rowLimit,
      };

      if (dimensionFilterGroups) {
        requestBody.dimensionFilterGroups = dimensionFilterGroups;
      }

      const response = await this.webmasters.searchanalytics.query({
        siteUrl: this.propertyUrl,
        requestBody,
      });

      return {
        rows: response.data.rows || [],
      };
    } catch (error: any) {
      console.error('Error fetching search analytics:', error.message);
      throw error;
    }
  }

  /**
   * Inspect a specific URL to check its indexing status
   * Note: This uses the URL Inspection API which may have different quota limits
   */
  async inspectUrl(url: string): Promise<InspectionResult> {
    try {
      const response = await this.webmasters.urlInspection.index.inspect({
        requestBody: {
          inspectionUrl: url,
          siteUrl: this.propertyUrl,
        },
      });

      const result = response.data.inspectionResult;
      const indexStatus = result?.indexStatusResult;

      return {
        indexed: indexStatus?.coverageState === 'Submitted and indexed',
        coverageState: indexStatus?.coverageState || 'Unknown',
        lastCrawled: indexStatus?.lastCrawlTime,
        reason: indexStatus?.verdict,
        mobileUsable: result?.mobileUsabilityResult?.verdict === 'PASS',
        indexingState: indexStatus?.indexingState,
        crawledAs: indexStatus?.crawledAs,
      };
    } catch (error: any) {
      console.error(`Error inspecting URL ${url}:`, error.message);
      // Return a default result instead of throwing to allow batch processing to continue
      return {
        indexed: false,
        coverageState: 'Error',
        reason: error.message,
      };
    }
  }

  /**
   * Submit a sitemap to Google Search Console
   */
  async submitSitemap(sitemapUrl: string): Promise<void> {
    try {
      console.log(`Submitting sitemap: ${sitemapUrl}`);

      await this.webmasters.sitemaps.submit({
        siteUrl: this.propertyUrl,
        feedpath: sitemapUrl,
      });

      console.log('Sitemap submitted successfully');
    } catch (error: any) {
      console.error('Error submitting sitemap:', error.message);
      throw error;
    }
  }

  /**
   * Get the status of a submitted sitemap
   */
  async getSitemapStatus(sitemapUrl?: string): Promise<SitemapStatus> {
    try {
      const feedpath = sitemapUrl || `${this.propertyUrl}/sitemap.xml`;

      const response = await this.webmasters.sitemaps.get({
        siteUrl: this.propertyUrl,
        feedpath,
      });

      const data = response.data;

      return {
        path: data.path || feedpath,
        lastSubmitted: data.lastSubmitted,
        lastDownloaded: data.lastDownloaded,
        errors: data.errors,
        warnings: data.warnings,
        contents: data.contents,
      };
    } catch (error: any) {
      console.error('Error getting sitemap status:', error.message);
      throw error;
    }
  }

  /**
   * List all sitemaps for the property
   */
  async listSitemaps(): Promise<SitemapStatus[]> {
    try {
      const response = await this.webmasters.sitemaps.list({
        siteUrl: this.propertyUrl,
      });

      const sitemaps = response.data.sitemap || [];

      return sitemaps.map((sitemap: any) => ({
        path: sitemap.path,
        lastSubmitted: sitemap.lastSubmitted,
        lastDownloaded: sitemap.lastDownloaded,
        errors: sitemap.errors,
        warnings: sitemap.warnings,
        contents: sitemap.contents,
      }));
    } catch (error: any) {
      console.error('Error listing sitemaps:', error.message);
      throw error;
    }
  }

  /**
   * Format a date for GSC API (YYYY-MM-DD)
   * @param daysAgo Number of days ago from today
   */
  private formatDate(daysAgo: number): string {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString().split('T')[0];
  }

  /**
   * Helper to implement exponential backoff retry logic
   */
  private async retryWithBackoff<T>(
    fn: () => Promise<T>,
    maxRetries: number = 3,
    baseDelay: number = 1000
  ): Promise<T> {
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await fn();
      } catch (error: any) {
        if (i === maxRetries - 1) throw error;

        // Only retry on rate limit errors
        if (error.code === 429 || error.code === 'RATE_LIMIT_EXCEEDED') {
          const delay = baseDelay * Math.pow(2, i);
          console.log(`Rate limited, retrying in ${delay}ms...`);
          await new Promise((resolve) => setTimeout(resolve, delay));
        } else {
          throw error;
        }
      }
    }
    throw new Error('Max retries exceeded');
  }
}

// Export a convenience function to create a client with env vars
export function createGSCClient(): GoogleSearchConsoleClient {
  return new GoogleSearchConsoleClient();
}
