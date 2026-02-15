# Solution Planner v2 — Specification

*Created: 15 Feb 2026*
*Based on: Andrew's direction + 8 discipline deep-dives*

---

## Design Principles

1. **Mobile-first.** Andrew uses this on-site, phone in hand. Every decision starts with "how does this work on a 6-inch screen?"
2. **Glanceable.** Infographics > text. If you can understand it while holding a plank of wood, we've won.
3. **Depth on demand.** Visual summary first, tap to expand, 📋 copy for Speechify on text-heavy sections.
4. **Cross-business.** The 8 questions work across all businesses. One view, multiple businesses.
5. **Easy and joyful.** Andrew's north star. Not a corporate dashboard — a tool you actually want to open.

---

## Architecture: Hybrid "Today + 8 Questions"

### Landing Screen: TODAY

The first thing you see. No tapping required. Three sections, stacked vertically, big and bold.

```
┌──────────────────────────┐
│  SOLUTION PLANNER        │
│  Good morning, Andrew    │
├──────────────────────────┤
│                          │
│  🔴 NEEDS ATTENTION (3)  │
│  ┌────────────────────┐  │
│  │ ⚠️ Invoice #47 due  │  │
│  │   tomorrow — £2,400 │  │
│  ├────────────────────┤  │
│  │ 📋 Skylight decision │  │
│  │   blocking James    │  │
│  ├────────────────────┤  │
│  │ 📅 Sarah visiting   │  │
│  │   Sunday 10am       │  │
│  └────────────────────┘  │
│                          │
│  🤖 JAMES                │
│  ┌────────────────────┐  │
│  │ Working on:         │  │
│  │ Business OS research│  │
│  │ ████████░░ 80%      │  │
│  │                     │  │
│  │ Needs from you:     │  │
│  │ • Triangle OSB      │  │
│  │   cutting decision  │  │
│  └────────────────────┘  │
│                          │
│  💰 MONEY                │
│  ┌────────────────────┐  │
│  │ 🟢 £4,200 in        │  │
│  │    this month       │  │
│  │ 🔴 £1,800 overdue   │  │
│  │ ⚪ £12,400 pipeline │  │
│  └────────────────────┘  │
│                          │
├══════════════════════════┤
│  ❓ Questions  ☰ More    │
└──────────────────────────┘
```

**Key features:**
- Big tap targets (min 48px)
- Traffic light colours (🟢🟡🔴) for instant status
- Progress bars, not percentages
- Greeting changes by time of day
- Items are tappable → expands detail inline or navigates to relevant question

### Navigation: THE 8 QUESTIONS

Below Today, or via a bottom nav / tab bar. Each question is a full-width card that expands.

```
┌──────────────────────────┐
│  ❓ THE QUESTIONS         │
├──────────────────────────┤
│                          │
│  📋 What am I working on?│
│  ▸ 3 active · 12 backlog│
│                          │
│  💰 How's my money?      │
│  ▸ £4.2k in · £1.8k due │
│                          │
│  👥 Who are my customers?│
│  ▸ 2 leads · 1 quoting  │
│                          │
│  📦 What do I need?      │
│  ▸ 3 orders pending      │
│                          │
│  🧭 Where am I heading?  │
│  ▸ 4 OKRs active        │
│                          │
│  🤝 Who's helping?       │
│  ▸ 2 contractors · CIS ✓│
│                          │
│  ♻️ What am I wasting?   │
│  ▸ 6h idle last week     │
│                          │
│  💡 What's new?          │
│  ▸ 8 ideas · 2 sprouting│
│                          │
└──────────────────────────┘
```

**Each question shows:**
- One-line summary stat (glanceable)
- Tap to expand → full infographic view
- Data pulled from ALL businesses (with business filter toggle)
- 📋 Copy button on text-heavy sections inside

---

## The 8 Questions — Detail Views

### 1. 📋 What am I working on?
**Sources:** All dashboard Kanbans (shed-project-board, forge-ai, whelpley-farm)
**Infographics:**
- Kanban mini-board (3 columns: doing / next / done this week)
- Progress rings per project
- "Completed this week" counter (dopamine hit)
**Drill-in:** Tap a task → see detail, move status
**Cross-business:** Filter by business or see all

### 2. 💰 How's my money?
**Sources:** Financial data from each dashboard
**Infographics:**
- Cash in / Cash out / Net — big bold numbers with trend arrows
- Overdue invoices (red, tappable)
- Pipeline value (what's quoted but not won)
- Simple bar chart: income by month (last 6)
**Drill-in:** Tap overdue → see who owes what

### 3. 👥 Who are my customers?
**Sources:** Customer/lead data, enquiries
**Infographics:**
- Funnel graphic (leads → quoted → won → delivered)
- Recent enquiries list
- Repeat customer flag
**Drill-in:** Tap a customer → history, quotes, notes

### 4. 📦 What do I need?
**Sources:** BOM data, supplier orders, stock
**Infographics:**
- Orders pending (supplier, ETA, status)
- Low stock warnings
- BOM for active jobs (what timber to order)
**Drill-in:** Tap a material → supplier details, alternatives

### 5. 🧭 Where am I heading?
**Sources:** Strategy pages, OKRs, goals
**Infographics:**
- Top 3 objectives with progress bars
- "Big picture" one-liner (current strategic focus)
- Key results checklist
**Text-heavy → 📋 Copy for Speechify**
**Drill-in:** Tap an objective → see linked projects/jobs

### 6. 🤝 Who's helping?
**Sources:** Contractor data, certifications, compliance
**Infographics:**
- Active contractors with CIS status
- Certification expiry warnings
- H&S checklist status
**Drill-in:** Tap a person → contact, certs, history

### 7. ♻️ What am I wasting?
**Sources:** Time tracking, material waste, efficiency metrics
**Infographics:**
- Time allocation pie (productive / admin / idle)
- Material waste % vs target
- "Biggest time sink this week" callout
**Drill-in:** Tap for breakdown by job

### 8. 💡 What's new?
**Sources:** Incubator, ideas from all dashboards, R&D
**Infographics:**
- Idea pipeline (seeds → sprouts → saplings)
- Recently added ideas
- "Ready to graduate" callout
**Drill-in:** Tap an idea → detail, promote to task/job/project
**Text-heavy descriptions → 📋 Copy for Speechify**

---

## Cross-Cutting Features

### Business Filter
- Top of screen: pill toggles for each business
- `[All] [🏠 Sheds] [🌿 Farm] [☕ Forge] [🌱 Grow]`
- Default: All (cross-business view)
- Tap one → filters everything to that business
- Remembered between sessions

### Speechify Workflow
- 📋 button on text-heavy sections (strategy, research, Our Story, idea descriptions)
- Tap → copies clean text to clipboard (strips HTML, formats for reading aloud)
- Brief toast: "Copied to clipboard"
- NOT on infographic/status sections (those are visual-first)

### James Section (kept)
- Our Story timeline (updated regularly)
- Current capabilities
- Working patterns
- This is a showcase piece — keep it polished

### Mobile Layout
- Split-screen pattern (from Whelpley Farm) adapted for this
- Bottom: quick nav (Today | Questions | James | Settings)
- Top: content area, scrollable
- No pinch-to-zoom needed — everything sized for thumbs
- Min touch target: 48px
- Font: minimum 16px body, 20px headings

---

## Data Architecture

### Work Hierarchy Integration
Every item in the system has:
```
type: task | job | project | business | idea
parent: reference to containing item (or null)
business: which business it belongs to
status: appropriate status for its type
```

Questions pull from this hierarchy:
- "What am I working on?" → tasks and jobs with status=in-progress
- "Where am I heading?" → projects and their child jobs/tasks
- "What's new?" → ideas at any level

### Data Sources (Current)
| Source | Format | Location |
|--------|--------|----------|
| Shed Kanban | cards.json | shed-project-board/data/ |
| Whelpley Farm | app.js data | whelpley-farm-dashboard/ |
| Forge AI | data/ | forge-ai/data/ |
| James | james.json | command-center/docs/data/ |
| Ideas | localStorage + JSON | Various |

### Data Sources (Needed)
| Source | For Question | Priority |
|--------|-------------|----------|
| Financial data | How's my money? | HIGH |
| Customer/lead list | Who are my customers? | MEDIUM |
| Supplier/order data | What do I need? | MEDIUM |
| Time tracking | What am I wasting? | LOW |
| Contractor data | Who's helping? | LOW |

---

## Implementation Phases

### Phase 1: Mobile Shell + Today (This week)
- Mobile-first layout (split-screen pattern)
- Today view with 3 sections (urgent, James, money)
- Bottom nav (Today | Questions | James)
- Pulls existing data from current dashboards
- 📋 Copy buttons wired up

### Phase 2: First 3 Questions (Next week)
- "What am I working on?" — wired to Kanban data
- "How's my money?" — placeholder until financial data exists
- "What's new?" — wired to existing ideas/incubator

### Phase 3: Remaining Questions + Polish
- Remaining 5 questions (some placeholder until data exists)
- Business filter toggle
- Infographic refinement
- Cross-business aggregation

### Phase 4: Data Integration
- Real financial data (Xero/QuickBooks integration or manual)
- Customer list
- Supplier/order tracking
- Time tracking

---

## What This Replaces

The current Solution Planner (command-center) becomes v2. Same repo, same URL, complete rebuild.

Current structure (Today / per-dashboard / James / Personal / Ideas) → replaced with (Today / 8 Questions / James). Personal gets absorbed into the questions. Ideas becomes Question 8.

---

*This spec is a living document. Update as we build and learn.*
