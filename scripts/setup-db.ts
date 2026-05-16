/**
 * Database setup script for Neon (via Vercel Marketplace).
 *
 * Run once after provisioning the database:
 *   npx tsx scripts/setup-db.ts
 *
 * Also called automatically via the "prebuild" npm script on every deploy.
 * Exits gracefully if DATABASE_URL is not set.
 */

import { neon } from '@neondatabase/serverless'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// Load .env.local manually
try {
  const envFile = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8')
  for (const line of envFile.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIdx = trimmed.indexOf('=')
    if (eqIdx === -1) continue
    const key = trimmed.slice(0, eqIdx)
    const val = trimmed.slice(eqIdx + 1).replace(/^["']|["']$/g, '')
    if (!process.env[key]) process.env[key] = val
  }
} catch {
  // .env.local not found — rely on env vars already being set
}

async function setup() {
  if (!process.env.DATABASE_URL) {
    console.log('DATABASE_URL not set — skipping DB setup.')
    process.exit(0)
  }

  const sql = neon(process.env.DATABASE_URL)

  console.log('Setting up leads table...')

  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id               SERIAL PRIMARY KEY,
      form_type        TEXT,
      step             TEXT,
      property_address TEXT,
      full_name        TEXT,
      first_name       TEXT,
      last_name        TEXT,
      phone_number     TEXT,
      email_address    TEXT,
      property_condition TEXT,
      situation        TEXT,
      ideal_timeline   TEXT,
      additional_details TEXT,
      utm_source       TEXT,
      utm_medium       TEXT,
      utm_campaign     TEXT,
      utm_term         TEXT,
      utm_content      TEXT,
      page_url         TEXT,
      submitted_at     TIMESTAMPTZ,
      created_at       TIMESTAMPTZ DEFAULT NOW()
    )
  `

  await sql`CREATE INDEX IF NOT EXISTS idx_leads_email       ON leads(email_address)`
  await sql`CREATE INDEX IF NOT EXISTS idx_leads_phone       ON leads(phone_number)`
  await sql`CREATE INDEX IF NOT EXISTS idx_leads_form_type   ON leads(form_type)`
  await sql`CREATE INDEX IF NOT EXISTS idx_leads_created_at  ON leads(created_at)`

  console.log('Database setup complete.')
}

setup().catch((err) => {
  console.error('DB setup failed:', err)
  process.exit(1)
})
