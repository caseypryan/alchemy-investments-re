import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { input } = await request.json()
    if (!input || input.length < 2) {
      return NextResponse.json({ suggestions: [] })
    }

    const response = await fetch('https://places.googleapis.com/v1/places:autocomplete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY!,
      },
      body: JSON.stringify({
        input,
        languageCode: 'en',
        regionCode: 'US',
        locationBias: {
          circle: {
            center: { latitude: 36.1699, longitude: -115.1398 },
            radius: 50000.0,
          },
        },
      }),
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Places autocomplete error:', error)
    return NextResponse.json({ suggestions: [] }, { status: 500 })
  }
}
