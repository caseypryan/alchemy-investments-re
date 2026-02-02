#!/usr/bin/env node

/**
 * Google OAuth Authentication Script
 *
 * One-time setup script to authenticate with Google Search Console and Google Analytics APIs.
 * This script will:
 * 1. Open a browser for OAuth consent
 * 2. Request necessary scopes for both GSC and GA4
 * 3. Exchange authorization code for refresh token
 * 4. Save refresh token to .env.local
 *
 * Usage: node scripts/google-auth.js
 */

const { google } = require('googleapis');
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

// OAuth2 configuration
const SCOPES = [
  'https://www.googleapis.com/auth/webmasters.readonly', // Google Search Console
  'https://www.googleapis.com/auth/analytics.readonly',   // Google Analytics
];

const REDIRECT_URI = 'http://localhost:8080';

async function authenticate() {
  console.log('\n🔐 Google API Authentication Setup\n');
  console.log('This script will help you authenticate with Google APIs.\n');

  // Check for required environment variables
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error('❌ Error: Missing required environment variables\n');
    console.log('Please set the following in your .env.local file:');
    console.log('  GOOGLE_CLIENT_ID=your_client_id');
    console.log('  GOOGLE_CLIENT_SECRET=your_client_secret\n');
    console.log('Get these credentials from:');
    console.log('  https://console.cloud.google.com/apis/credentials\n');
    process.exit(1);
  }

  // Create OAuth2 client
  const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    REDIRECT_URI
  );

  // Generate authorization URL
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent', // Force to get refresh token
  });

  console.log('📋 Required Scopes:');
  SCOPES.forEach(scope => console.log(`   - ${scope}`));
  console.log();

  console.log('🌐 Opening authorization URL in your browser...\n');
  console.log('If the browser does not open automatically, visit this URL:\n');
  console.log(authUrl);
  console.log();

  // Create local server to receive OAuth callback
  const code = await new Promise((resolve, reject) => {
    const server = http.createServer(async (req, res) => {
      try {
        const queryParams = url.parse(req.url, true).query;

        if (queryParams.code) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end('<h1>✅ Authentication successful!</h1><p>You can close this window and return to the terminal.</p>');
          server.close();
          resolve(queryParams.code);
        } else if (queryParams.error) {
          res.writeHead(400, { 'Content-Type': 'text/html' });
          res.end(`<h1>❌ Authentication failed</h1><p>Error: ${queryParams.error}</p>`);
          server.close();
          reject(new Error(queryParams.error));
        }
      } catch (error) {
        reject(error);
      }
    });

    server.listen(8080, () => {
      console.log('🔄 Waiting for authorization...\n');
    });

    // Try to open browser
    import('open').then(open => {
      open.default(authUrl);
    }).catch(() => {
      console.log('Could not open browser automatically. Please visit the URL above manually.');
    });
  });

  if (!code) {
    console.error('❌ No authorization code provided');
    process.exit(1);
  }

  console.log('\n🔄 Exchanging code for tokens...');

  try {
    // Exchange code for tokens
    const { tokens } = await oauth2Client.getToken(code);

    if (!tokens.refresh_token) {
      console.error('❌ Error: No refresh token received');
      console.log('This can happen if you have already authorized this app.');
      console.log('Try revoking access at: https://myaccount.google.com/permissions');
      console.log('Then run this script again.');
      process.exit(1);
    }

    console.log('✅ Successfully obtained refresh token!\n');

    // Update .env.local file
    const envPath = path.join(process.cwd(), '.env.local');
    let envContent = '';

    if (fs.existsSync(envPath)) {
      envContent = fs.readFileSync(envPath, 'utf8');
    }

    // Remove existing GOOGLE_REFRESH_TOKEN if present
    envContent = envContent
      .split('\n')
      .filter(line => !line.startsWith('GOOGLE_REFRESH_TOKEN='))
      .join('\n');

    // Add new refresh token
    if (envContent && !envContent.endsWith('\n')) {
      envContent += '\n';
    }
    envContent += `GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}\n`;

    fs.writeFileSync(envPath, envContent);

    console.log('✅ Saved refresh token to .env.local\n');
    console.log('📝 Next steps:\n');
    console.log('1. Add your property URL to .env.local:');
    console.log('   GOOGLE_PROPERTY_URL=https://alchemyinvestmentsre.com\n');
    console.log('2. Add your Google Analytics Property ID to .env.local:');
    console.log('   GOOGLE_ANALYTICS_PROPERTY_ID=your_property_id');
    console.log('   (Find this in Google Analytics → Admin → Property Settings)\n');
    console.log('3. Test the connection:');
    console.log('   node scripts/gsc-export-urls.js\n');

  } catch (error) {
    console.error('❌ Error exchanging code for tokens:', error.message);
    process.exit(1);
  }
}

// Run authentication
authenticate().catch(error => {
  console.error('❌ Authentication failed:', error.message);
  process.exit(1);
});
