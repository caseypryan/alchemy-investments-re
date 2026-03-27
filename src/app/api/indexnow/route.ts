import { NextResponse } from 'next/server'

const INDEXNOW_KEY = '8b021c71fe3f6870d6736aeaf671aaff'
const HOST = 'alchemyinvestmentsre.com'

// Submit URLs to IndexNow (Bing, Yandex, Naver)
// Call this route after publishing new or updated content:
// POST /api/indexnow  { urls: ['https://alchemyinvestmentsre.com/...'] }
export async function POST(request: Request) {
  const { urls } = await request.json()

  if (!Array.isArray(urls) || urls.length === 0) {
    return NextResponse.json({ error: 'urls array required' }, { status: 400 })
  }

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  }

  const res = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  })

  return NextResponse.json({ status: res.status, ok: res.ok })
}
