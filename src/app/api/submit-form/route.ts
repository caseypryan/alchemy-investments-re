import { NextRequest, NextResponse } from 'next/server'

const WEBHOOK_URL = 'https://workflow-automation.podio.com/catch/z1d60g243a5ygwz'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 })
  }
}
