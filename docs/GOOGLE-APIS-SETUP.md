# Google APIs Setup Guide

Complete guide for setting up Google Search Console and Google Analytics 4 API integration for automated SEO migration tracking.

## Overview

This integration allows you to:
- **Google Search Console**: Automatically discover all indexed URLs, track search performance, monitor indexing status, and submit sitemaps
- **Google Analytics 4**: Track visitor metrics, traffic sources, demographics, and conversions
- **Unified Reports**: Combine GSC and GA4 data for comprehensive performance analysis

## Prerequisites

- Google account with access to:
  - Google Search Console (with verified property for alchemyinvestmentsre.com)
  - Google Analytics 4 (with property configured for your site)
- Node.js and npm installed
- Access to Google Cloud Console

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Click "Select a project" → "New Project"
3. Enter project name: "Alchemy Investments SEO"
4. Click "Create"
5. Wait for project creation, then select it

## Step 2: Enable Required APIs

### Enable Google Search Console API

1. In Google Cloud Console, go to "APIs & Services" → "Library"
2. Search for "Google Search Console API"
3. Click on it and press "Enable"
4. Wait for API to be enabled

### Enable Google Analytics Data API

1. Still in the API Library, search for "Google Analytics Data API"
2. Click on it and press "Enable"
3. This is the API for GA4 (not the older Analytics Reporting API)

## Step 3: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. If prompted to configure OAuth consent screen:
   - Click "Configure Consent Screen"
   - Choose "External" user type
   - Fill in required fields:
     - App name: "Alchemy Investments SEO Tools"
     - User support email: your email
     - Developer contact: your email
   - Click "Save and Continue"
   - Skip "Scopes" for now (click "Save and Continue")
   - Add your email as a test user
   - Click "Save and Continue"

4. Back on the Credentials page, click "Create Credentials" → "OAuth client ID"
5. Application type: "Desktop app"
6. Name: "SEO Migration Scripts"
7. Click "Create"
8. A dialog will show your Client ID and Client Secret
9. Click "Download JSON" to download credentials file
10. **IMPORTANT**: Keep this file secure, do not commit to git

## Step 4: Get Google Analytics Property ID

1. Go to [Google Analytics](https://analytics.google.com)
2. Select your property (alchemyinvestmentsre.com)
3. Click "Admin" (gear icon in bottom left)
4. Under "Property" column, click "Property Settings"
5. Copy the "Property ID" (format: 123456789)
6. Note: This must be a GA4 property, not Universal Analytics

## Step 5: Set Up Environment Variables

1. In your project root, create or edit `.env.local` file:

```bash
# Google OAuth Credentials
GOOGLE_CLIENT_ID=your_client_id_here.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_client_secret_here

# Google Search Console
GOOGLE_PROPERTY_URL=https://alchemyinvestmentsre.com

# Google Analytics 4
GOOGLE_ANALYTICS_PROPERTY_ID=your_property_id_here

# Refresh token (will be added by authentication script)
# GOOGLE_REFRESH_TOKEN=will_be_set_automatically
```

2. Replace the placeholder values with your actual credentials:
   - `GOOGLE_CLIENT_ID`: From the OAuth credentials download
   - `GOOGLE_CLIENT_SECRET`: From the OAuth credentials download
   - `GOOGLE_PROPERTY_URL`: Your verified GSC property URL
   - `GOOGLE_ANALYTICS_PROPERTY_ID`: From GA4 Property Settings

3. Save the file

## Step 6: Run Authentication Script

1. Install dependencies (if not already done):
```bash
npm install
```

2. Run the authentication script:
```bash
node scripts/google-auth.js
```

3. The script will:
   - Open your browser automatically
   - Ask you to sign in to Google
   - Request permission to access GSC and Analytics
   - Display an authorization code

4. Copy the authorization code from the browser

5. Paste it into the terminal when prompted

6. The script will:
   - Exchange the code for a refresh token
   - Save the refresh token to `.env.local`
   - Confirm successful authentication

7. Check your `.env.local` file - you should now see:
```bash
GOOGLE_REFRESH_TOKEN=your_refresh_token_here
```

## Step 7: Verify Setup

Test that everything works:

### Test GSC Connection

```bash
node scripts/gsc-export-urls.js
```

Expected output:
- List of indexed URLs from Google Search Console
- Summary statistics
- Generated `scripts/urls.csv` file

### Test GA4 Connection

```bash
node scripts/performance-tracker.js --before
```

Expected output:
- GSC search performance metrics
- GA4 visitor analytics
- Generated report files in `seo/reports/`

## Troubleshooting

### "Missing Google API credentials" Error

**Solution**: Check that all environment variables are set in `.env.local`:
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- GOOGLE_REFRESH_TOKEN
- GOOGLE_PROPERTY_URL (for GSC)
- GOOGLE_ANALYTICS_PROPERTY_ID (for GA4)

### "No refresh token received" Error

**Solution**:
1. Revoke access at: https://myaccount.google.com/permissions
2. Run `node scripts/google-auth.js` again
3. Make sure to approve all requested permissions

### "Property not verified" Error (GSC)

**Solution**:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Verify your property (alchemyinvestmentsre.com)
3. Make sure GOOGLE_PROPERTY_URL matches exactly (include https://)

### "Property not found" Error (GA4)

**Solution**:
1. Verify you're using a GA4 property (not Universal Analytics)
2. Check the Property ID is correct (9-digit number)
3. Ensure your Google account has access to this GA4 property

### Rate Limit Errors

**Solution**:
- GSC API has quota limits (600 queries per minute)
- If you hit limits, wait a few minutes and try again
- The scripts include automatic retry logic

### Authentication Expired

**Solution**:
- Refresh tokens should not expire if used regularly
- If authentication fails, run `node scripts/google-auth.js` again

## Security Best Practices

1. **Never commit credentials**:
   - `.env.local` should be in `.gitignore`
   - Never commit OAuth credentials JSON file

2. **Restrict API access**:
   - Only enable read-only scopes
   - Don't grant write permissions unless needed

3. **Rotate credentials periodically**:
   - Create new OAuth credentials every 6-12 months
   - Revoke old credentials

4. **Limit access**:
   - Only add necessary test users to OAuth consent screen
   - Keep credentials file secure

## Next Steps

Once setup is complete:

1. **Export indexed URLs**:
   ```bash
   node scripts/gsc-export-urls.js
   ```

2. **Capture baseline performance**:
   ```bash
   node scripts/performance-tracker.js --before
   ```

3. **Begin migration**:
   ```bash
   node scripts/migrate-pages.js --from-gsc
   ```

4. **Monitor progress** (after migration):
   ```bash
   node scripts/gsc-check-indexing.js
   ```

5. **Compare results** (4-8 weeks later):
   ```bash
   node scripts/performance-tracker.js --after
   node scripts/performance-tracker.js --compare
   ```

## Useful Links

- [Google Cloud Console](https://console.cloud.google.com)
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [GSC API Documentation](https://developers.google.com/webmaster-tools/v1)
- [GA4 Data API Documentation](https://developers.google.com/analytics/devguides/reporting/data/v1)
- [OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)

## Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review error messages carefully
3. Verify all environment variables are set correctly
4. Ensure APIs are enabled in Google Cloud Console
5. Check that your Google account has proper permissions

For persistent issues, review the Google API documentation or check the script logs for detailed error messages.
