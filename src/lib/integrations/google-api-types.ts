// Google Search Console API Types

export interface IndexedPage {
  url: string;
  clicks?: number;
  impressions?: number;
  position?: number;
  ctr?: number;
  lastCrawled?: string;
}

export interface PerformanceData {
  rows: Array<{
    keys: string[];
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
  }>;
}

export interface SearchAnalyticsOptions {
  startDate: string;
  endDate: string;
  dimensions?: string[];
  rowLimit?: number;
  dimensionFilterGroups?: any[];
}

export interface InspectionResult {
  indexed: boolean;
  coverageState: 'Submitted and indexed' | 'Excluded' | 'Error' | string;
  lastCrawled?: string;
  reason?: string;
  mobileUsable?: boolean;
  indexingState?: string;
  crawledAs?: string;
}

export interface SitemapStatus {
  path: string;
  lastSubmitted?: string;
  lastDownloaded?: string;
  discoveredUrls?: number;
  errors?: number;
  warnings?: number;
  contents?: Array<{
    type: string;
    submitted: number;
    indexed: number;
  }>;
}

// Google Analytics 4 API Types

export interface PageMetrics {
  sessions: number;
  pageViews: number;
  users: number;
  newUsers: number;
  bounceRate: number;
  avgSessionDuration: number;
  pagesByUrl: Array<{
    url: string;
    views: number;
    sessions: number;
    bounceRate: number;
    avgDuration: number;
  }>;
}

export interface TrafficSource {
  source: string;
  medium: string;
  sessions: number;
  users: number;
  percentage: number;
}

export interface Demographics {
  countries: Array<{
    country: string;
    sessions: number;
    percentage: number;
  }>;
  cities: Array<{
    city: string;
    sessions: number;
    percentage: number;
  }>;
  ageGroups?: Array<{
    age: string;
    percentage: number;
  }>;
  gender?: {
    male: number;
    female: number;
    unknown: number;
  };
}

export interface ConversionData {
  totalConversions: number;
  conversionRate: number;
  events: Array<{
    name: string;
    count: number;
    value?: number;
  }>;
}

export interface TopPage {
  url: string;
  pageViews: number;
  sessions: number;
  users: number;
  bounceRate: number;
  avgDuration: number;
}

export interface AnalyticsOptions {
  startDate?: string;
  endDate?: string;
  days?: number;
  limit?: number;
}

// Combined Report Types

export interface UnifiedPerformanceReport {
  timestamp: string;
  dateRange: {
    start: string;
    end: string;
  };
  search: {
    totalClicks: number;
    totalImpressions: number;
    avgPosition: number;
    avgCTR: number;
    topQueries: Array<{
      query: string;
      clicks: number;
      impressions: number;
      position: number;
      ctr: number;
    }>;
    topPages: Array<{
      url: string;
      clicks: number;
      impressions: number;
      position: number;
      ctr: number;
    }>;
  };
  analytics: {
    sessions: number;
    pageViews: number;
    users: number;
    newUsers: number;
    bounceRate: number;
    avgSessionDuration: number;
    trafficSources: TrafficSource[];
    demographics: Demographics;
    conversions: ConversionData;
  };
  pages: Array<{
    url: string;
    // GSC data
    clicks: number;
    impressions: number;
    position: number;
    ctr: number;
    // GA4 data
    pageViews: number;
    sessions: number;
    bounceRate: number;
    avgDuration: number;
    // Combined score
    combinedScore?: number;
  }>;
  topPerforming: Array<{
    url: string;
    clicks: number;
    impressions: number;
    pageViews: number;
    sessions: number;
    combinedScore: number;
  }>;
}

export interface PerformanceComparison {
  search: {
    clicks: {
      before: number;
      after: number;
      change: number;
      percentChange: number;
    };
    impressions: {
      before: number;
      after: number;
      change: number;
      percentChange: number;
    };
    avgPosition: {
      before: number;
      after: number;
      change: number;
      percentChange: number;
    };
    avgCTR: {
      before: number;
      after: number;
      change: number;
      percentChange: number;
    };
  };
  analytics: {
    sessions: {
      before: number;
      after: number;
      change: number;
      percentChange: number;
    };
    pageViews: {
      before: number;
      after: number;
      change: number;
      percentChange: number;
    };
    users: {
      before: number;
      after: number;
      change: number;
      percentChange: number;
    };
    bounceRate: {
      before: number;
      after: number;
      change: number;
      percentChange: number;
    };
    conversions: {
      before: number;
      after: number;
      change: number;
      percentChange: number;
    };
  };
  topGainers: Array<{
    url: string;
    metric: string;
    beforeValue: number;
    afterValue: number;
    percentChange: number;
  }>;
  topLosers: Array<{
    url: string;
    metric: string;
    beforeValue: number;
    afterValue: number;
    percentChange: number;
  }>;
}

// Exported URL Data

export interface ExportedUrl {
  url: string;
  category: string;
  slug: string;
  priority: number;
  clicks: number;
  impressions: number;
  position: number;
  ctr: number;
}

// Indexing Status

export interface IndexingStatusResult {
  url: string;
  indexed: boolean;
  lastCrawled?: string;
  coverageState: string;
  reason?: string;
  mobileUsable?: boolean;
}

export interface IndexingStatusSummary {
  total: number;
  indexed: number;
  notIndexed: number;
  errors: number;
  warnings: number;
  timestamp: string;
  results: IndexingStatusResult[];
}
