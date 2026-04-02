# Fort Content Super Engine — Master Runbook

## Overview

This runbook is the operating manual for Fort Property Developments' content engine. Follow it weekly to produce 15-18 posts/day across 5 platforms with ~4 hours of weekly effort.

---

## Tool Stack Quick Reference

| Tool | Purpose | URL | Cost |
|------|---------|-----|------|
| **Notion** | Content hub, review queue, calendar | notion.so | Free / $10/mo |
| **Buffer** | Schedule: LinkedIn, Facebook, Twitter/X | buffer.com | $6/mo (Essentials) |
| **Typefully** | Twitter/X threads + LinkedIn drafts | typefully.com | $12.50/mo (Pro) |
| **Later** | Instagram scheduling + link-in-bio | later.com | $25/mo (Starter) |
| **Canva Pro** | Visual content (carousels, covers) | canva.com | $16.99/mo |
| **CapCut** | Video editing (Reels, TikToks) | capcut.com | Free |
| **Feedly** | Content curation | feedly.com | Free / $8/mo (Pro) |
| **Google Alerts** | News monitoring | google.com/alerts | Free |
| **Claude** | Content generation + repurposing | claude.ai | Existing |

**Total monthly cost: ~$70-80/mo**

---

## Account Setup Checklist

- [ ] **Buffer:** Create account → Connect LinkedIn, Twitter/X, Facebook pages
- [ ] **Typefully:** Create account → Connect Twitter/X + LinkedIn
- [ ] **Later:** Create account → Connect Instagram (+ TikTok if supported)
- [ ] **Canva Pro:** Upgrade → Set up Brand Kit (see `templates/canva-templates.md`)
- [ ] **Feedly:** Create account → Set up 5 boards (see `curation/feedly-boards.md`)
- [ ] **Google Alerts:** Create 10 alerts (see `curation/google-alerts.md`)
- [ ] **Notion:** Create Content Engine database (see `notion/SETUP.md`)
- [ ] **TikTok:** Note — most TikTok scheduling still requires manual upload for best algorithm treatment

---

## Weekly Workflow (4 hours total)

### MONDAY — Content Generation Day (2 hours)

#### Step 1: Choose 3 Pillar Topics (10 min)
1. Check Feedly for starred articles from the week
2. Check content calendar for any planned themes
3. Pick 3 topics across different pillars:
   - 1 × Zoning/Bylaws education
   - 1 × Market intel or development insight
   - 1 × Behind the build / personal story

#### Step 2: Generate Pillar Content (30 min)
For each topic:
1. Open Claude
2. Use the relevant pillar prompt from `.content-engine/prompts/pillar-[name].md`
3. Generate a LinkedIn-length pillar piece (300-500 words)
4. Review and edit for accuracy and voice

#### Step 3: Repurpose into All Platforms (45 min)
For each pillar piece:
1. Use the **Repurposing Engine** prompt (`.content-engine/prompts/repurpose-engine.md`)
2. Paste the pillar piece → get 8 platform-specific derivatives
3. Review each derivative for platform fit
4. Copy all outputs into Notion database with correct tags

#### Step 4: Generate Curated Content (15 min)
1. Pick 2-3 best articles from Feedly/Google Alerts this week
2. Use **Curated News** prompts to create reaction posts
3. Add to Notion with `Curated News` pillar tag

#### Step 5: Fill Gaps (20 min)
1. Review Notion calendar view — any empty slots?
2. Generate engagement-only posts: polls, questions, hot takes
3. Create 2-3 Instagram Story concepts
4. Total in Notion should be: 50-60 pieces for the week

---

### TUESDAY — Visual Creation + Review (1.5 hours)

#### Step 1: Create Visual Assets (45 min)
1. Open Canva → duplicate relevant templates
2. Create carousels (LinkedIn + Instagram): ~3-4 this week
3. Create Reel/TikTok covers: ~3-4 this week
4. Create Story slides: ~4-6 this week
5. Export all as PNG/JPG

#### Step 2: Review Queue (30 min)
1. Open Notion → Review Queue (Board view)
2. Read every piece in "Drafting" status
3. Move to "Approved" or "Rejected" with notes
4. For rejected: note what to fix → Claude revision if needed

#### Step 3: Schedule Everything (15 min)
1. **Buffer:** Upload approved LinkedIn, Twitter/X, Facebook posts → set times
2. **Typefully:** Upload Twitter/X threads → set publish dates
3. **Later:** Upload Instagram posts + Stories → set times + first comment (hashtags)
4. **TikTok:** Save drafts in app for manual posting (best for algorithm)
5. Move all scheduled posts to "Scheduled" status in Notion

---

### DAILY — Engagement (15 min/day × 5 days = 1.25 hours)

#### Morning Routine (10 min)
1. Check notifications across all platforms
2. Reply to every comment on your posts (genuine responses, not "thanks!")
3. Check Feedly → star any breaking news worth reacting to

#### Midday Engagement (5 min)
1. Comment on 3-5 posts from target accounts:
   - Other BC developers
   - Real estate investors/influencers
   - Municipal councilors and housing advocates
   - Real estate agents in target markets
2. Share 1 curated piece with your commentary (if not already scheduled)

#### Reactive Content (as needed)
If big news breaks (rate decision, major policy change, competitor announcement):
1. Use Curated News prompt → generate quick reaction posts
2. Post immediately on Twitter/X (most time-sensitive)
3. Schedule LinkedIn + Facebook for next available slot

---

### FRIDAY — Analytics Review (15 min)

#### Step 1: Check Performance (10 min)
| Platform | Where to Check | Key Metrics |
|----------|---------------|-------------|
| LinkedIn | Analytics → Posts | Impressions, engagement rate, followers gained |
| Twitter/X | Analytics or Typefully | Impressions, engagements, profile visits |
| Instagram | Insights → Content | Reach, saves, shares, follower growth |
| TikTok | Analytics | Views, watch time, followers |
| Facebook | Page Insights | Reach, engagement, page followers |

#### Step 2: Update Notion (5 min)
1. Tag top 3 performers as "Top Performer"
2. Tag bottom 3 as "Underperformed"
3. Note in each: what worked / what didn't
4. Use insights to inform next Monday's topic selection

---

## Monthly Tasks

### Month-End Review (30 min)
1. Export Notion data → count posts by pillar, platform, performance
2. Calculate: total posts, engagement rate trend, follower growth
3. Identify: best pillar, best platform, best format, best day/time
4. Adjust: next month's pillar percentages based on data

### Content Audit (15 min)
1. Review rejected/underperforming content — any patterns?
2. Check if any pillar is over/under-represented
3. Update prompt files if voice or topics need refinement

### Tool Check (10 min)
1. Verify all Buffer/Typefully/Later connections are working
2. Check Feedly boards for dead feeds — replace if needed
3. Review Google Alerts — any generating too much noise? Refine queries

---

## File Reference

```
.content-engine/
├── RUNBOOK.md              ← You are here
├── prompts/
│   ├── pillar-multiplex-development.md
│   ├── pillar-bc-zoning-bylaws.md
│   ├── pillar-market-intel.md
│   ├── pillar-behind-the-build.md
│   ├── pillar-curated-news.md
│   └── repurpose-engine.md
├── templates/
│   └── canva-templates.md
├── curation/
│   ├── feedly-boards.md
│   └── google-alerts.md
├── notion/
│   ├── SETUP.md
│   └── starter-content.csv
└── scripts/
    └── (future: automation scripts)
```

---

## Quick Start — Your First Week

**Day 1 (Setup — 2 hours):**
1. Set up Notion database (follow `notion/SETUP.md`)
2. Import `starter-content.csv` into Notion
3. Set up Canva Brand Kit
4. Create Buffer + Typefully + Later accounts
5. Set up Feedly boards + Google Alerts

**Day 2 (First Batch — 2 hours):**
1. Pick 3 topics from the starter content in Notion
2. Generate pillar content using prompts
3. Run through repurposing engine
4. Create 2-3 carousels in Canva
5. Load everything into scheduling tools

**Day 3+ (Operate):**
Follow the weekly workflow above. It gets faster each week as you build muscle memory with the prompts and tools.

---

## Scaling Up

Once the engine is running smoothly (week 3-4), consider:

1. **Video production day:** Batch-film 5-10 Reels/TikToks in one session
2. **Guest content:** Interview other developers, agents, or policy makers
3. **User-generated content:** Repost and comment on follower content
4. **Paid amplification:** Boost top-performing organic posts ($5-10/post)
5. **Email integration:** Turn top social posts into weekly newsletter
6. **Blog integration:** Expand best-performing threads/carousels into blog posts for SEO
