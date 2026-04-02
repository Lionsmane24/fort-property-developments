# Notion Content Hub — Setup Guide

## Step 1: Create a New Notion Database

Go to Notion → New Page → Full-page database (Table view)

### Database Name: `Fort Content Engine`

### Properties (Columns)

| Property | Type | Options |
|----------|------|---------|
| Title | Title | (default — the content headline/hook) |
| Status | Select | `Idea`, `Drafting`, `In Review`, `Approved`, `Scheduled`, `Published`, `Rejected` |
| Pillar | Select | `Multiplex Development`, `BC Zoning & Bylaws`, `Market Intel`, `Behind the Build`, `Curated News` |
| Platform | Multi-select | `LinkedIn`, `Twitter/X`, `Instagram`, `TikTok`, `Facebook` |
| Format | Select | `Text Post`, `Thread`, `Carousel`, `Reel/Video`, `Story`, `Poll`, `Curated Share` |
| Content Type | Select | `Original`, `Repurposed`, `Curated` |
| Pillar Piece | Relation | (self-relation — links derivatives back to their source) |
| Publish Date | Date | (scheduled date) |
| Day of Week | Formula | `formatDate(prop("Publish Date"), "dddd")` |
| Post Time | Select | `7:00 AM`, `7:30 AM`, `8:00 AM`, `9:00 AM`, `10:00 AM`, `12:00 PM`, `2:00 PM`, `3:00 PM`, `5:00 PM`, `6:00 PM`, `7:00 PM` |
| Body | Text | (full post copy — long text) |
| Hook | Text | (first line / opening) |
| CTA | Text | (call to action) |
| Visual Notes | Text | (description for Canva asset needed) |
| Hashtags | Text | (platform-specific hashtags) |
| Link | URL | (if linking to blog/site) |
| Buffer ID | Text | (for tracking after scheduling) |
| Performance | Select | `Top Performer`, `Average`, `Underperformed`, `Not Yet Measured` |
| Notes | Text | (revision notes, ideas, feedback) |

## Step 2: Create Views

### View 1: Review Queue (Board)
- Group by: `Status`
- Filter: Status is not `Published`
- Sort: Publish Date ascending

### View 2: Calendar
- Calendar by: `Publish Date`
- Filter: Status is `Approved` or `Scheduled` or `Published`

### View 3: By Platform (Table)
- Group by: `Platform`
- Filter: Status is `Approved` or `Scheduled`
- Sort: Publish Date ascending

### View 4: By Pillar (Table)
- Group by: `Pillar`
- Sort: Publish Date descending

### View 5: Analytics (Table)
- Filter: Status is `Published`
- Sort: Publish Date descending
- Show: Title, Platform, Format, Pillar, Performance, Notes

### View 6: This Week (Gallery)
- Filter: Publish Date is within `This Week` AND Status is not `Rejected`
- Sort: Publish Date ascending

## Step 3: Create Templates (Notion Database Templates)

### Template: "New Pillar Piece"
- Status: Idea
- Content Type: Original
- Format: Text Post
- Body: [pre-filled structure from prompts]

### Template: "Repurposed Derivative"
- Status: Drafting
- Content Type: Repurposed
- Pillar Piece: [link to source]

### Template: "Curated Share"
- Status: Drafting
- Content Type: Curated
- Pillar: Curated News
- Body: "SOURCE: \nKEY INSIGHT: \nFORT TAKE: \nCTA: "

## Step 4: Import Starter Content

Import `.content-engine/notion/starter-content.csv` into the database to pre-populate your first 2 weeks of content ideas.
