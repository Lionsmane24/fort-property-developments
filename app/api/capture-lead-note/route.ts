import { NextRequest, NextResponse } from 'next/server'

const GHL_API_TOKEN = process.env.GHL_API_TOKEN!
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!
const GHL_CONTACTS_URL = 'https://services.leadconnectorhq.com/contacts/'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      address,
      verdict,
      totalCost,
      totalRevenue,
      profit,
      marginPct,
      cashOnCash,
      equityUplift,
      totalUnits,
      netProfit,
    } = body

    // Look up the most recent contact by checking localStorage email
    // Since we can't access localStorage server-side, we search by recent tag
    // The note will be attached to the most recent calculator-lead contact

    // Build the feasibility note
    const note = [
      `📊 AskMultiPlex Feasibility Report`,
      `─────────────────────────`,
      `Property: ${address}`,
      `Verdict: ${verdict}`,
      `Units: ${totalUnits}`,
      ``,
      `PRO FORMA`,
      `Total Cost: $${Number(totalCost).toLocaleString('en-CA')}`,
      `Total Revenue: $${Number(totalRevenue).toLocaleString('en-CA')}`,
      `Gross Profit: $${Number(profit).toLocaleString('en-CA')}`,
      `Net Profit: $${Number(netProfit).toLocaleString('en-CA')}`,
      ``,
      `RETURNS`,
      `Margin: ${marginPct}%`,
      `Cash-on-Cash: ${cashOnCash}%`,
      `Equity Uplift: ${equityUplift}%`,
      ``,
      `Generated: ${new Date().toISOString().split('T')[0]}`,
      `Source: AskMultiPlex Calculator`,
    ].join('\n')

    // Search for the most recent contact with calculator-lead tag
    const searchRes = await fetch(
      `${GHL_CONTACTS_URL}?locationId=${GHL_LOCATION_ID}&query=calculator-lead&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${GHL_API_TOKEN}`,
          Version: '2021-07-28',
        },
      }
    )

    const searchData = await searchRes.json()
    const contactId = searchData?.contacts?.[0]?.id

    if (!contactId) {
      return NextResponse.json({ error: 'No recent calculator lead found' }, { status: 404 })
    }

    // Add note to the contact
    const noteRes = await fetch(
      `${GHL_CONTACTS_URL}${contactId}/notes`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GHL_API_TOKEN}`,
          Version: '2021-07-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: note }),
      }
    )

    const noteData = await noteRes.json()

    if (!noteRes.ok) {
      console.error('GHL note error:', noteData)
      return NextResponse.json({ error: 'Failed to add note', detail: noteData }, { status: 502 })
    }

    // Also update the contact with custom fields for the feasibility data
    await fetch(`${GHL_CONTACTS_URL}${contactId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${GHL_API_TOKEN}`,
        Version: '2021-07-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tags: ['calculator-lead', `verdict-${verdict.toLowerCase()}`],
        customFields: [
          { key: 'feasibility_address', field_value: address },
          { key: 'feasibility_verdict', field_value: verdict },
          { key: 'feasibility_profit', field_value: `$${Number(profit).toLocaleString('en-CA')}` },
          { key: 'feasibility_margin', field_value: `${marginPct}%` },
        ],
      }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('capture-lead-note error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
