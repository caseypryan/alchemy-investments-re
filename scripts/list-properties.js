#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' });
const { google } = require('googleapis');

async function listProperties() {
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'http://localhost:8080'
  );

  auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

  const webmasters = google.webmasters({ version: 'v3', auth });

  try {
    const response = await webmasters.sites.list();
    console.log('\n📋 Your Google Search Console Properties:\n');
    if (response.data.siteEntry && response.data.siteEntry.length > 0) {
      response.data.siteEntry.forEach(site => {
        console.log(`  - ${site.siteUrl} (Permission: ${site.permissionLevel})`);
      });
    } else {
      console.log('  No properties found.');
    }
    console.log();
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response?.data) {
      console.error('Response:', JSON.stringify(error.response.data, null, 2));
    }
  }
}

listProperties();
