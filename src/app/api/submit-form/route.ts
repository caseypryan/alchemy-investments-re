import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

const WEBHOOK_URL = 'https://workflow-automation.podio.com/catch/z1d60g243a5ygwz'

export async function POST(request: NextRequest) {
  const body = await request.json()

  // Save to Neon — isolated so a DB error never blocks the response
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

  // Forward to Podio webhook
  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch (webhookError) {
    console.error('Webhook error:', webhookError)
  }

  return NextResponse.json({ success: true })
}
