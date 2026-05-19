import { NextResponse } from 'next/server'

export async function GET() {
  const hasUrl = !!process.env.DATABASE_URL
  const urlPreview = process.env.DATABASE_URL?.slice(0, 40) + '...' || 'NOT SET'

  let dbResult: string
  try {
    const { neon } = await import('@neondatabase/serverless')
    const sql = neon(process.env.DATABASE_URL!)
    const rows = await sql`SELECT COUNT(*) as count FROM leads`
    dbResult = `OK — ${rows[0].count} rows`
  } catch (err) {
    dbResult = `ERROR: ${String(err)}`
  }

  return NextResponse.json({ hasUrl, urlPreview, dbResult })
}
