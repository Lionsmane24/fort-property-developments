import { NextRequest, NextResponse } from 'next/server'

const GHL_API_TOKEN = process.env.GHL_API_TOKEN!
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!
const GHL_CONTACTS_URL = 'https://services.leadconnectorhq.com/contacts/'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, source, tags = [] } = body

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const [firstName = '', ...lastParts] = (name ?? '').trim().split(' ')
    const lastName = lastParts.join(' ')

    const payload = {
      locationId: GHL_LOCATION_ID,
      email,
      firstName,
      lastName,
      source: source ?? 'Website',
      tags,
    }

    const res = await fetch(GHL_CONTACTS_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_TOKEN}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error('GHL error:', data)
      return NextResponse.json({ error: 'GHL submission failed', detail: data }, { status: 502 })
    }

    return NextResponse.json({ success: true, contactId: data.contact?.id })
  } catch (err) {
    console.error('capture-lead error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
