import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

const PODIO_URL = 'https://workflow-automation.podio.com/catch/z1d60g243a5ygwz'
const N8N_URL = process.env.LEADS_WEBHOOK_URL || ''

// ── Address parsing ──────────────────────────────────────────────────────────
// Handles Google Places format: "123 Main St, Las Vegas, NV 89101, USA"
function parseAddress(full: string) {
  const parts = full.split(',').map(s => s.trim())

  // Drop trailing "USA" / "US" / "United States"
  if (parts.length > 0 && /^(USA?|United States)$/i.test(parts[parts.length - 1])) {
    parts.pop()
  }

  let street = parts[0] || ''
  let unit = ''

  // Extract unit/apt/suite from street
  const unitMatch = street.match(/^(.+?)\s+(?:apt\.?|unit|suite|ste\.?|#)\s*(\S+)$/i)
  if (unitMatch) {
    street = unitMatch[1].trim()
    unit = unitMatch[2]
  }

  const city = parts[1] || ''

  let state = ''
  let zip = ''
  const stateZip = (parts[2] || '').trim()
  const stateZipMatch = stateZip.match(/^([A-Z]{2})\s+(\d{5}(?:-\d{4})?)$/)
  if (stateZipMatch) {
    state = stateZipMatch[1]
    zip = stateZipMatch[2]
  } else {
    state = stateZip
  }

  return { street, unit, city, state, zip, country: 'US' }
}

// ── Name splitting ───────────────────────────────────────────────────────────
function splitName(full: string): { first: string; last: string } {
  const parts = full.trim().split(/\s+/)
  if (parts.length === 1) return { first: parts[0], last: '' }
  return { first: parts[0], last: parts.slice(1).join(' ') }
}

// ── Traffic source classification ─────────────────────────────────────────────
function classifyTrafficSource(medium: string, source: string): string {
  const m = medium.toLowerCase()
  const s = source.toLowerCase()
  if (['cpc', 'ppc', 'paid', 'paidsearch', 'paid_search', 'paid-search', 'search'].includes(m)) return 'Paid Search'
  if (m === 'organic' || s === 'organic') return 'Organic Search'
  if (['social', 'social-media', 'social_media', 'paid-social', 'paid_social'].includes(m)) return 'Social'
  if (['email', 'newsletter'].includes(m)) return 'Email'
  if (['display', 'banner', 'remarketing', 'retargeting'].includes(m)) return 'Display'
  if (m === 'referral') return 'Referral'
  if (!medium && !source) return 'Direct'
  return medium || 'Direct'
}

// ── Form name + submission type mapping ──────────────────────────────────────
function mapFormMeta(formType: string, step: string): { formName: string; submissionType: string } {
  if (formType === 'hero_form') return { formName: 'Hero Form', submissionType: 'Full Form Submitted' }
  if (formType === 'hero_form_partial') {
    if (step === 'address_autocomplete') return { formName: 'Address Only (Hero)', submissionType: 'Address Selected' }
    if (step === 'address_submitted') return { formName: 'Address Only (Hero)', submissionType: 'Address Submitted' }
    return { formName: 'Hero Form', submissionType: 'Partial Entry' }
  }
  if (formType === 'cta_form') return { formName: 'CTA Form', submissionType: 'Full Form Submitted' }
  if (formType === 'contact_form') return { formName: 'Contact Form', submissionType: 'Full Form Submitted' }
  if (formType === 'sms_consent_form') return { formName: 'SMS Consent Form', submissionType: 'Full Form Submitted' }
  return { formName: formType || 'Unknown', submissionType: step || 'Unknown' }
}

// ── n8n payload builder ──────────────────────────────────────────────────────
function buildN8nPayload(body: Record<string, string>, ip: string, userAgent: string) {
  const addr = parseAddress(body.property_address || '')
  const fullName = body.full_name || `${body.first_name || ''} ${body.last_name || ''}`.trim()
  const { first, last } = fullName
    ? splitName(fullName)
    : { first: body.first_name || '', last: body.last_name || '' }

  const phone = (body.phone_number || '').replace(/\D/g, '')

  const utmSrc = body.utm_source || ''
  const utmMed = body.utm_medium || ''
  const trafficSource = classifyTrafficSource(utmMed, utmSrc)
  const firstTrafficSource = classifyTrafficSource(body.first_utm_medium || '', body.first_utm_source || '')

  const { formName, submissionType } = mapFormMeta(body.form_type || '', body.step || '')

  const entryDate = body.submitted_at
    ? new Date(body.submitted_at).toISOString().replace('T', ' ').slice(0, 19)
    : new Date().toISOString().replace('T', ' ').slice(0, 19)

  return {
    'Property Address': body.property_address || '',
    'Property (str)': addr.street,
    'Property (Unit)': addr.unit,
    'Property (City)': addr.city,
    'Property (State)': addr.state,
    'Property (Zip / Postal)': addr.zip,
    'Property (Country)': addr.country,
    'Name (First)': first,
    'Name (Last)': last,
    'Phone': phone,
    'Email': body.email_address || '',
    'UTM Source': utmSrc,
    'UTM Medium': utmMed,
    'UTM Campaign': body.utm_campaign || '',
    'UTM Term': body.utm_term || '',
    'UTM Content': body.utm_content || '',
    'UTM Campaign ID': '',
    'UTM Source (First)': body.first_utm_source || '',
    'UTM Medium (First)': body.first_utm_medium || '',
    'UTM Campaign (First)': body.first_utm_campaign || '',
    'UTM Term (First)': body.first_utm_term || '',
    'UTM Content (First)': body.first_utm_content || '',
    'traffic_source': trafficSource,
    'first_traffic_source': firstTrafficSource,
    'Landing Page': body.landing_page || body.page_url || '',
    'Original Referrer': body.original_referrer || '',
    'Referrer': body.referrer || '',
    'Form URL': body.page_url || '',
    'Source Url': body.landing_page || body.page_url || '',
    'gaclientid': body.ga_client_id || '',
    'Organic Source': utmMed === 'organic' ? utmSrc : '',
    'Organic Source String': utmMed === 'organic' ? `${utmSrc} / ${utmMed}` : '',
    'User Agent': userAgent,
    'User IP': ip,
    'Unique ID': body.session_token || '',
    'Partial Entry ID': body.form_type?.includes('partial') ? body.session_token || '' : '',
    'session_token': body.session_token || '',
    'Form Name': formName,
    'Entry Date': entryDate,
    'Submission Type': submissionType,
  }
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  const body = await request.json()

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    ''
  const userAgent = request.headers.get('user-agent') || ''

  // Save to Neon
  try {
    const sql = getDb()
    await sql`
      INSERT INTO leads (
        form_type, step, property_address, full_name, first_name, last_name,
        phone_number, email_address, property_condition, situation,
        ideal_timeline, additional_details,
        utm_source, utm_medium, utm_campaign, utm_term, utm_content,
        page_url, submitted_at
      ) VALUES (
        ${body.form_type ?? null}, ${body.step ?? null},
        ${body.property_address ?? null}, ${body.full_name ?? null},
        ${body.first_name ?? null}, ${body.last_name ?? null},
        ${body.phone_number ?? null}, ${body.email_address ?? null},
        ${body.property_condition ?? null}, ${body.situation ?? null},
        ${body.ideal_timeline ?? null}, ${body.additional_details ?? null},
        ${body.utm_source ?? null}, ${body.utm_medium ?? null},
        ${body.utm_campaign ?? null}, ${body.utm_term ?? null},
        ${body.utm_content ?? null},
        ${body.page_url ?? null},
        ${body.submitted_at ? new Date(body.submitted_at) : new Date()}
      )
    `
  } catch (dbError) {
    console.error('DB insert error:', dbError)
  }

  // Send to n8n with structured payload
  if (N8N_URL) {
    try {
      await fetch(N8N_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildN8nPayload(body, ip, userAgent)),
      })
    } catch (n8nError) {
      console.error('n8n webhook error:', n8nError)
    }
  }

  // Forward raw body to Podio (legacy)
  try {
    await fetch(PODIO_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch (podioError) {
    console.error('Podio webhook error:', podioError)
  }

  return NextResponse.json({ success: true })
}
