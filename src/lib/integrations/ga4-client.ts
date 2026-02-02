import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { google } from 'googleapis';
import type {
  PageMetrics,
  TrafficSource,
  Demographics,
  ConversionData,
  TopPage,
  AnalyticsOptions,
} from './google-api-types';

export class GoogleAnalyticsClient {
  private analyticsData: BetaAnalyticsDataClient;
  private propertyId: string;

  constructor(refreshToken?: string, clientId?: string, clientSecret?: string, propertyId?: string) {
    // Get credentials from environment or parameters
    const token = refreshToken || process.env.GOOGLE_REFRESH_TOKEN;
    const id = clientId || process.env.GOOGLE_CLIENT_ID;
    const secret = clientSecret || process.env.GOOGLE_CLIENT_SECRET;
    this.propertyId = propertyId || process.env.GOOGLE_ANALYTICS_PROPERTY_ID || '';

    if (!token || !id || !secret) {
      throw new Error(
        'Missing Google API credentials. Please set GOOGLE_REFRESH_TOKEN, GOOGLE_CLIENT_ID, and GOOGLE_CLIENT_SECRET environment variables.'
      );
    }

    if (!this.propertyId) {
      throw new Error('Missing Google Analytics Property ID. Please set GOOGLE_ANALYTICS_PROPERTY_ID environment variable.');
    }

    // Initialize OAuth2 client
    const auth = new google.auth.OAuth2(id, secret, 'http://localhost:8080');
    auth.setCredentials({ refresh_token: token });

    // Initialize Analytics Data API client
    this.analyticsData = new BetaAnalyticsDataClient({
      authClient: auth as any,
    });
  }

  /**
   * Get page-level metrics including views, sessions, bounce rate
   */
  async getPageMetrics(options: AnalyticsOptions = {}): Promise<PageMetrics> {
    try {
      const { days = 90, limit = 100 } = options;
      const dateRange = this.getDateRange(days);

      console.log('Fetching page metrics from Google Analytics...');

      // Get overall metrics
      const [overallResponse] = await this.analyticsData.runReport({
        property: `properties/${this.propertyId}`,
        dateRanges: [dateRange],
        metrics: [
          { name: 'sessions' },
          { name: 'screenPageViews' },
          { name: 'totalUsers' },
          { name: 'newUsers' },
          { name: 'bounceRate' },
          { name: 'averageSessionDuration' },
        ],
      });

      // Get page-level metrics
      const [pageResponse] = await this.analyticsData.runReport({
        property: `properties/${this.propertyId}`,
        dateRanges: [dateRange],
        dimensions: [{ name: 'pagePath' }],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'sessions' },
          { name: 'bounceRate' },
          { name: 'averageSessionDuration' },
        ],
        limit,
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      });

      const overallMetrics = overallResponse.rows?.[0]?.metricValues || [];
      const pageRows = pageResponse.rows || [];

      return {
        sessions: parseInt(overallMetrics[0]?.value || '0'),
        pageViews: parseInt(overallMetrics[1]?.value || '0'),
        users: parseInt(overallMetrics[2]?.value || '0'),
        newUsers: parseInt(overallMetrics[3]?.value || '0'),
        bounceRate: parseFloat(overallMetrics[4]?.value || '0'),
        avgSessionDuration: parseFloat(overallMetrics[5]?.value || '0'),
        pagesByUrl: pageRows.map((row) => ({
          url: row.dimensionValues?.[0]?.value || '',
          views: parseInt(row.metricValues?.[0]?.value || '0'),
          sessions: parseInt(row.metricValues?.[1]?.value || '0'),
          bounceRate: parseFloat(row.metricValues?.[2]?.value || '0'),
          avgDuration: parseFloat(row.metricValues?.[3]?.value || '0'),
        })),
      };
    } catch (error: any) {
      console.error('Error fetching page metrics:', error.message);
      throw error;
    }
  }

  /**
   * Get traffic sources (organic, direct, referral, social, etc.)
   */
  async getTrafficSources(options: AnalyticsOptions = {}): Promise<TrafficSource[]> {
    try {
      const { days = 90 } = options;
      const dateRange = this.getDateRange(days);

      console.log('Fetching traffic sources from Google Analytics...');

      const [response] = await this.analyticsData.runReport({
        property: `properties/${this.propertyId}`,
        dateRanges: [dateRange],
        dimensions: [{ name: 'sessionSource' }, { name: 'sessionMedium' }],
        metrics: [{ name: 'sessions' }, { name: 'totalUsers' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 50,
      });

      const rows = response.rows || [];
      const totalSessions = rows.reduce((sum, row) => sum + parseInt(row.metricValues?.[0]?.value || '0'), 0);

      return rows.map((row) => {
        const sessions = parseInt(row.metricValues?.[0]?.value || '0');
        return {
          source: row.dimensionValues?.[0]?.value || 'unknown',
          medium: row.dimensionValues?.[1]?.value || 'unknown',
          sessions,
          users: parseInt(row.metricValues?.[1]?.value || '0'),
          percentage: totalSessions > 0 ? (sessions / totalSessions) * 100 : 0,
        };
      });
    } catch (error: any) {
      console.error('Error fetching traffic sources:', error.message);
      throw error;
    }
  }

  /**
   * Get user demographics (location, age, gender if available)
   */
  async getUserDemographics(options: AnalyticsOptions = {}): Promise<Demographics> {
    try {
      const { days = 90, limit = 20 } = options;
      const dateRange = this.getDateRange(days);

      console.log('Fetching user demographics from Google Analytics...');

      // Get country data
      const [countryResponse] = await this.analyticsData.runReport({
        property: `properties/${this.propertyId}`,
        dateRanges: [dateRange],
        dimensions: [{ name: 'country' }],
        metrics: [{ name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit,
      });

      // Get city data
      const [cityResponse] = await this.analyticsData.runReport({
        property: `properties/${this.propertyId}`,
        dateRanges: [dateRange],
        dimensions: [{ name: 'city' }],
        metrics: [{ name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit,
      });

      const countryRows = countryResponse.rows || [];
      const cityRows = cityResponse.rows || [];
      const totalCountrySessions = countryRows.reduce((sum, row) => sum + parseInt(row.metricValues?.[0]?.value || '0'), 0);
      const totalCitySessions = cityRows.reduce((sum, row) => sum + parseInt(row.metricValues?.[0]?.value || '0'), 0);

      const demographics: Demographics = {
        countries: countryRows.map((row) => {
          const sessions = parseInt(row.metricValues?.[0]?.value || '0');
          return {
            country: row.dimensionValues?.[0]?.value || 'unknown',
            sessions,
            percentage: totalCountrySessions > 0 ? (sessions / totalCountrySessions) * 100 : 0,
          };
        }),
        cities: cityRows.map((row) => {
          const sessions = parseInt(row.metricValues?.[0]?.value || '0');
          return {
            city: row.dimensionValues?.[0]?.value || 'unknown',
            sessions,
            percentage: totalCitySessions > 0 ? (sessions / totalCitySessions) * 100 : 0,
          };
        }),
      };

      // Try to get age and gender data (may not be available for all properties)
      try {
        const [demographicResponse] = await this.analyticsData.runReport({
          property: `properties/${this.propertyId}`,
          dateRanges: [dateRange],
          dimensions: [{ name: 'userAgeBracket' }, { name: 'userGender' }],
          metrics: [{ name: 'activeUsers' }],
        });

        if (demographicResponse.rows && demographicResponse.rows.length > 0) {
          const totalUsers = demographicResponse.rows.reduce(
            (sum, row) => sum + parseInt(row.metricValues?.[0]?.value || '0'),
            0
          );

          const ageGroups = new Map<string, number>();
          const genderCounts = { male: 0, female: 0, unknown: 0 };

          demographicResponse.rows.forEach((row) => {
            const age = row.dimensionValues?.[0]?.value || 'unknown';
            const gender = row.dimensionValues?.[1]?.value || 'unknown';
            const users = parseInt(row.metricValues?.[0]?.value || '0');

            ageGroups.set(age, (ageGroups.get(age) || 0) + users);

            if (gender === 'male') genderCounts.male += users;
            else if (gender === 'female') genderCounts.female += users;
            else genderCounts.unknown += users;
          });

          demographics.ageGroups = Array.from(ageGroups.entries()).map(([age, count]) => ({
            age,
            percentage: totalUsers > 0 ? (count / totalUsers) * 100 : 0,
          }));

          demographics.gender = genderCounts;
        }
      } catch (error) {
        // Age and gender data may not be available, continue without it
        console.log('Note: Age and gender data not available for this property');
      }

      return demographics;
    } catch (error: any) {
      console.error('Error fetching user demographics:', error.message);
      throw error;
    }
  }

  /**
   * Get conversion events and metrics
   */
  async getConversions(options: AnalyticsOptions = {}): Promise<ConversionData> {
    try {
      const { days = 90 } = options;
      const dateRange = this.getDateRange(days);

      console.log('Fetching conversion data from Google Analytics...');

      const [response] = await this.analyticsData.runReport({
        property: `properties/${this.propertyId}`,
        dateRanges: [dateRange],
        dimensions: [{ name: 'eventName' }],
        metrics: [{ name: 'conversions' }, { name: 'eventValue' }],
        dimensionFilter: {
          filter: {
            fieldName: 'eventName',
            stringFilter: {
              matchType: 'CONTAINS' as const,
              value: 'form',
              caseSensitive: false,
            },
          },
        },
        orderBys: [{ metric: { metricName: 'conversions' }, desc: true }],
        limit: 20,
      });

      const rows = response.rows || [];
      const totalConversions = rows.reduce((sum, row) => sum + parseInt(row.metricValues?.[0]?.value || '0'), 0);

      // Get total sessions for conversion rate
      const [sessionsResponse] = await this.analyticsData.runReport({
        property: `properties/${this.propertyId}`,
        dateRanges: [dateRange],
        metrics: [{ name: 'sessions' }],
      });

      const totalSessions = parseInt(sessionsResponse.rows?.[0]?.metricValues?.[0]?.value || '1');

      return {
        totalConversions,
        conversionRate: totalSessions > 0 ? (totalConversions / totalSessions) * 100 : 0,
        events: rows.map((row) => ({
          name: row.dimensionValues?.[0]?.value || 'unknown',
          count: parseInt(row.metricValues?.[0]?.value || '0'),
          value: parseFloat(row.metricValues?.[1]?.value || '0'),
        })),
      };
    } catch (error: any) {
      console.error('Error fetching conversion data:', error.message);
      throw error;
    }
  }

  /**
   * Get top pages by page views
   */
  async getTopPages(limit: number = 20): Promise<TopPage[]> {
    try {
      const dateRange = this.getDateRange(90);

      console.log('Fetching top pages from Google Analytics...');

      const [response] = await this.analyticsData.runReport({
        property: `properties/${this.propertyId}`,
        dateRanges: [dateRange],
        dimensions: [{ name: 'pagePath' }],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'sessions' },
          { name: 'totalUsers' },
          { name: 'bounceRate' },
          { name: 'averageSessionDuration' },
        ],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit,
      });

      const rows = response.rows || [];

      return rows.map((row) => ({
        url: row.dimensionValues?.[0]?.value || '',
        pageViews: parseInt(row.metricValues?.[0]?.value || '0'),
        sessions: parseInt(row.metricValues?.[1]?.value || '0'),
        users: parseInt(row.metricValues?.[2]?.value || '0'),
        bounceRate: parseFloat(row.metricValues?.[3]?.value || '0'),
        avgDuration: parseFloat(row.metricValues?.[4]?.value || '0'),
      }));
    } catch (error: any) {
      console.error('Error fetching top pages:', error.message);
      throw error;
    }
  }

  /**
   * Get date range for queries
   */
  private getDateRange(days: number) {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    return {
      startDate: this.formatDate(startDate),
      endDate: this.formatDate(endDate),
    };
  }

  /**
   * Format date as YYYY-MM-DD
   */
  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
}

// Export a convenience function to create a client with env vars
export function createGA4Client(): GoogleAnalyticsClient {
  return new GoogleAnalyticsClient();
}
