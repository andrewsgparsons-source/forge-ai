# 02 — Deep Dive: Operations & Delivery

*"How do I deliver?" — the disciplines that turn promises into real things.*

Covers: Operations Management, Project Management, Production Management, Workflow Management, Scheduling

---

## Why Operations First?

Andrew builds bespoke garden buildings. The **core of his business is delivery** — taking a customer's vision and physically constructing it. Everything else (marketing, finance, sales) exists to feed and support this. If we get the operations model right, the rest has something solid to connect to.

---

## 1. Operations Management

### What It Is
The design, control, and improvement of the processes that create and deliver products/services. Transforms inputs (materials, labour, time, energy) into outputs (finished buildings).

### Key Concepts

**Process Design** — How does a shed actually get built?
- What are the steps, in what order?
- Where are the dependencies (can't tile the roof before the trusses are up)?
- Where are the bottlenecks (waiting for concrete to cure, waiting for materials)?

**Capacity Planning** — How much can you build at once?
- One shed at a time? Two? Three?
- What limits capacity: labour? Equipment? Weather? Site access?

**Quality Control** — Is it built right?
- Inspection points during construction
- Snagging before handover
- Customer sign-off

### Methodologies

| Method | Origin | Core Idea | Relevance to Small Builder |
|--------|--------|-----------|---------------------------|
| **Lean** | Toyota, 1950s | Eliminate waste (7 types: overproduction, waiting, transport, over-processing, inventory, motion, defects) | **Very high.** A solo builder's biggest enemy is wasted time and materials. Every offcut, every trip to the merchant, every re-do. |
| **Six Sigma** | Motorola, 1986 | Reduce variation using data. DMAIC cycle (Define, Measure, Analyse, Improve, Control) | **Moderate.** The statistical rigour is overkill for 50 builds/year, but the mindset of measuring and reducing variation is gold. |
| **Lean Six Sigma** | Combines both | Eliminate waste AND reduce variation | **The sweet spot.** Lean's waste elimination + Six Sigma's "measure everything" = powerful for a small operation. |
| **Theory of Constraints (TOC)** | Goldratt, 1984 | Find the bottleneck, everything else waits | **High.** What's THE thing slowing down each build? Fix that, everything speeds up. |
| **TQM (Total Quality Management)** | Deming, 1950s | Quality is everyone's job, continuous improvement, customer focus | **High.** The philosophy that quality isn't an inspection at the end — it's built in at every step. |

### The 7 Wastes Applied to Garden Buildings

| Lean Waste | In Andrew's Context |
|-----------|-------------------|
| **Overproduction** | Cutting timber before confirming spec. Pre-building components that change. |
| **Waiting** | Waiting for concrete to cure. Waiting for deliveries. Weather delays. |
| **Transport** | Trips to timber merchants. Moving materials around the workshop. Driving to site. |
| **Over-processing** | Finishing details the customer didn't ask for. Over-engineering hidden structure. |
| **Inventory** | Excess timber stock tying up cash. Obsolete fittings. |
| **Motion** | Walking back and forth for tools. Poor workshop layout. Searching for things. |
| **Defects** | Mis-cuts. Wrong dimensions. Rework. Customer complaints. |

**Andrew's addition — the 8th waste: WASTED TIME.** Not just idle time, but time spent on things that don't add value. Admin, searching for info, redoing work because of poor records.

---

## 2. Project Management

### What It Is
Each shed build IS a project — unique, temporary, with a defined start and end. Project management is how you plan, execute, and close it.

### Methodologies

| Method | Best For | How It Works | Fit for Garden Buildings |
|--------|----------|-------------|------------------------|
| **Waterfall** | Predictable, sequential work | Plan everything upfront → execute in phases → deliver | **Partial fit.** A build IS sequential (foundations → frame → roof → clad → fit-out), but requirements often change mid-build. |
| **Agile/Scrum** | Changing requirements, iterative delivery | Work in sprints, adapt as you go, deliver incrementally | **Partial fit.** Great for the configurator/software work, less natural for physical construction. |
| **Kanban** | Continuous flow, visual management | Visualise work, limit WIP, pull system | **Good fit.** A Kanban board for tracking which stage each build is at — we're already doing this! |
| **PRINCE2** | Governed, stage-gate projects | Defined stages, tolerances, management by exception | **Overkill** for a small builder, but the principles (stage gates, defined roles, exception management) are sound. |
| **Critical Path Method (CPM)** | Complex scheduling with dependencies | Map all tasks, find the longest path = project duration | **Useful concept.** What's the critical path for a shed build? Foundations → frame → roof is usually it. Anything else can run in parallel. |
| **Hybrid** | Mix-and-match | Take what works from each | **Best fit.** Kanban board + critical path awareness + agile flexibility. |

### The "Good Enough" Project Management for a Builder

You don't need Gantt charts and earned value analysis. You need:
1. **A clear list of what needs doing** (work breakdown)
2. **What order** (dependencies — can't roof before framing)
3. **Who's doing it** (if you have a team)
4. **When** (scheduling — considering weather, material delivery, other jobs)
5. **Is it on track?** (simple status: not started / in progress / done / blocked)

That's it. Everything else is noise for a small operation.

---

## 3. Production Management

### What It Is
Specifically about the manufacturing/build process — the physical transformation of materials into finished product.

### Key Concepts for Bespoke Builders

**Bill of Materials (BOM)** — What materials does this specific shed need?
- This is EXACTLY what the configurator's cutting list does
- BOM links directly to procurement and cost accounting
- A parametric BOM (calculated from dimensions) is enormously powerful

**Work Breakdown Structure (WBS)** — Breaking a build into phases:
1. Site preparation (levelling, base)
2. Foundation (concrete pads, bearers)
3. Floor frame (joists, boarding)
4. Wall frames (studs, plates, openings)
5. Roof structure (trusses, purlins, ridge)
6. Roof covering (OSB, membrane, tiles/felt)
7. Cladding (external finish)
8. Doors & windows (install, glaze, hardware)
9. Internal fit-out (insulation, lining, electrics)
10. Finishing (trim, paint, guttering)
11. Snagging & handover

**Standard vs Bespoke** — The tension:
- Standardised processes = efficiency, consistency
- Bespoke builds = flexibility, customer delight
- The configurator resolves this tension — parametric = standard process, bespoke output

---

## 4. Workflow Management

### What It Is
The end-to-end business process from first enquiry to final handover (and beyond).

### Andrew's Workflow (as-is, inferred)

```
Customer sees website/configurator
         │
         ▼
    Enquiry (email/phone/configurator link)
         │
         ▼
    Initial conversation — understand needs
         │
         ▼
    Site visit? (if needed)
         │
         ▼
    Quote — based on configurator spec + site factors
         │
         ▼
    Negotiation / revision
         │
         ▼
    Order confirmation + deposit
         │
         ▼
    Material ordering (East Bros, hardware suppliers)
         │
         ▼
    Schedule build date
         │
         ▼
    Build on site (1-5 days depending on complexity)
         │
         ▼
    Snagging / customer walkthrough
         │
         ▼
    Final payment
         │
         ▼
    Follow-up / warranty
```

### Where Workflow Software Helps
- **Automated status updates** — customer knows where their order is
- **Trigger-based actions** — order confirmed → generate material list → send to supplier
- **Nothing falls through cracks** — every enquiry tracked, every follow-up scheduled
- **Templates** — same workflow pattern for every build, less cognitive load

---

## 5. Scheduling

### What It Is
Putting work into time — when does each thing happen, given constraints?

### Constraints for a Builder
- **Weather** — can't pour concrete in frost, can't clad in heavy rain
- **Material lead times** — Douglas fir from East Bros: how many days?
- **Customer availability** — site access, presence for decisions
- **Own capacity** — how many builds can run in parallel?
- **Sequential dependencies** — foundations before frame before roof
- **Seasonal demand** — spring/summer = peak, winter = quieter

### Tools People Use
- **Google Calendar** — simple but no project awareness
- **Gantt charts** — good for visualising overlapping projects, overkill to maintain manually
- **Kanban columns with dates** — lightweight, visual, what we have now
- **Dedicated scheduling software** — Tradify, Fergus, ServiceM8 (construction-specific)

---

## Software Landscape — Operations Tools

### Enterprise (£50k+/year — too big, but worth knowing)
| Tool | Focus | Notes |
|------|-------|-------|
| SAP | Full ERP | The 800lb gorilla. Covers everything. Costs a fortune. |
| Oracle | Full ERP | Similar to SAP. Enterprise-only. |
| Microsoft Dynamics 365 | ERP + CRM | More accessible than SAP/Oracle, still enterprise-focused. |

### Mid-Market (£500-5000/year — potentially relevant)
| Tool | Focus | Notes |
|------|-------|-------|
| **Monday.com** | Work management | Visual, flexible, good for project/workflow. Not construction-specific. |
| **Asana** | Project/task management | Clean UI, good for team coordination. Task-centric. |
| **ClickUp** | Everything | Tries to be docs + tasks + chat + goals. Feature-heavy. |
| **Notion** | Flexible workspace | Databases + docs + Kanban. Very flexible, requires setup. |
| **Airtable** | Database + views | Spreadsheet-meets-database. Good for custom workflows. |

### Construction-Specific (£20-200/month — directly relevant)
| Tool | Focus | Notes |
|------|-------|-------|
| **Tradify** | Trade business management | NZ-based. Quotes, scheduling, invoicing, timesheets. Popular with UK trades. |
| **Fergus** | Trade job management | NZ-based. Similar to Tradify. Job costing focus. |
| **ServiceM8** | Field service management | AU-based. Quote → job → invoice. Mobile-first. |
| **Buildertrend** | Construction project mgmt | US-based. Residential construction focus. Scheduling, budgeting, client portal. |
| **CoConstruct** | Custom home builders | US-based. Spec management, selections, budgeting. |
| **Knowify** | Subcontractor/small builder | Budgeting, change orders, AIA billing. |

### Free / Open Source
| Tool | Focus | Notes |
|------|-------|-------|
| **Kanboard** | Kanban | Simple, self-hosted. What we have is similar. |
| **OpenProject** | Project management | Full PM suite. Self-hosted. Can be complex. |
| **ERPNext** | Full ERP | Open-source ERP. Manufacturing + accounting + CRM. Impressive but complex. |

---

## What This Means for Our Universal Business OS

### Key Insights

1. **We already have the hardest piece** — the parametric BOM. Most small builders can't auto-generate a cutting list from a 3D spec. We can. This is the unfair advantage.

2. **The workflow is the backbone** — not the Kanban board, not the dashboard. The FLOW from enquiry to handover is what the system needs to model first.

3. **Lean thinking is the design philosophy** — every screen, every click, every data entry should add value. If it doesn't, it's waste. This aligns perfectly with Andrew's "easy and joyful" north star.

4. **Construction-specific tools exist but are generic** — Tradify/Fergus are for plumbers, electricians, builders, everyone. None of them have a parametric configurator feeding into them. That's our unique value.

5. **Don't replicate enterprise ERP** — the disciplines are the same but the SCALE is completely different. A solo builder doesn't need resource levelling algorithms. They need to know: what am I building this week, do I have the timber, and is the weather OK?

### Architecture Principle: The Workflow Engine

The Solution Planner's core should be a **configurable workflow engine** — you define the stages (enquiry → quote → order → build → deliver), and the system manages items flowing through those stages. Different businesses template different workflows, but the engine is universal.

This is what connects ALL the operations disciplines:
- **Project Mgmt** = tracking items through the workflow
- **Production** = the build-specific stages within the workflow
- **Scheduling** = placing workflow items into time
- **Quality** = checkpoints within the workflow
- **Workflow Mgmt** = the workflow itself

---

*Research date: 14 Feb 2026*
*Next: Deep-dive Financial disciplines (cost accounting, job costing, cash flow)*
