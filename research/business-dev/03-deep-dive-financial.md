# 03 — Deep Dive: Financial Management

*"Is the money working?" — the disciplines that keep the business alive and profitable.*

Covers: Financial Management, Accounting, Cost Accounting / Job Costing, Investment Decisions, Cash Flow

---

## Why This Matters Critically

More small businesses fail from **cash flow problems** than from lack of customers. You can be profitable on paper and still go bust because the money isn't in your account when the bills are due. For a bespoke builder, where each job ties up thousands in materials before the customer pays, financial management isn't a nice-to-have — it's survival.

---

## 1. Financial Management (The Big Picture)

### What It Is
The overall function of managing money: profitability, expenses, cash, credit, and capital allocation. The helicopter view of "is the business financially healthy?"

### Key Questions for a Small Builder
- **Am I making money?** (profit/loss per month, per quarter, per year)
- **Do I have money?** (cash in the bank right now)
- **Will I have money?** (cash flow forecast — next 30/60/90 days)
- **Where is the money going?** (expense breakdown)
- **Where is the money coming from?** (revenue by source/customer)
- **Can I afford to take on this job?** (will I have cash to buy materials?)
- **Am I charging enough?** (margins — the gap between cost and price)

### The Three Financial Statements
Every business ultimately comes down to three documents:

| Statement | What It Shows | Time Frame | Key Question |
|-----------|-------------|------------|-------------|
| **Profit & Loss (P&L)** | Revenue minus costs = profit (or loss) | Period (month/quarter/year) | "Am I profitable?" |
| **Balance Sheet** | What you own (assets) minus what you owe (liabilities) = net worth | Snapshot (a moment in time) | "Am I solvent?" |
| **Cash Flow Statement** | Money in minus money out = net cash change | Period | "Do I have cash?" |

**The critical distinction:** Profit ≠ Cash. You can invoice £50k in January (profit!) but not receive payment until March (no cash!). Meanwhile, you need to pay East Bros for timber in February. This gap kills businesses.

---

## 2. Cost Accounting / Job Costing

### What It Is
Tracking costs at the individual job level so you know exactly how much each shed costs to build, and therefore whether you made money on it.

### Why It's THE Key Financial Discipline for a Builder

Andrew builds bespoke buildings. Every one is different. Without job costing, he's guessing:
- "I think that shed cost me about £3,000 in materials"
- "I reckon I spent 4 days on it"
- "I charged £6,000 so I probably made money?"

With job costing, he KNOWS:
- "Materials: £2,847.50 (from purchase orders linked to this job)"
- "Labour: 4.5 days × £250/day = £1,125"
- "Overhead allocation: £450 (van, tools, insurance, workshop)"
- "Total cost: £4,422.50"
- "Charged: £6,000"
- "**Gross profit: £1,577.50 (26.3% margin)**"

### The Three Cost Elements

| Element | What It Includes | How to Track |
|---------|-----------------|-------------|
| **Direct Materials** | Timber (Douglas fir), fixings, roofing, cladding, doors, windows, glass, hardware | Purchase orders tagged to job. The configurator's BOM/cutting list feeds this directly. |
| **Direct Labour** | Time spent on this specific job — design, cutting, transport, site build, finishing | Timesheet or day-tracking per job |
| **Overhead** | Van costs, tool depreciation, insurance, workshop rent, marketing, admin | Allocated as a percentage or fixed rate per job |

### Overhead Allocation Methods

| Method | How It Works | Pros | Cons |
|--------|------------|------|------|
| **% of direct costs** | "Add 30% to material+labour for overhead" | Simple | Inaccurate if jobs vary a lot in material vs labour intensity |
| **Fixed rate per day** | "£100/day overhead on every build day" | Simple, predictable | Doesn't capture material-heavy vs labour-heavy differences |
| **Activity-based costing (ABC)** | Allocate specific overheads to activities that cause them | Most accurate | Complex to set up and maintain |
| **Simple annual allocation** | Total overhead ÷ number of jobs = overhead per job | Very simple | Only works if jobs are roughly similar size |

**Recommendation for a small builder:** Start with **fixed rate per day** (£X overhead per build day). It's simple, close enough, and you can refine later. The configurator can calculate an estimated overhead when generating quotes.

### The Configurator's Superpower: Automated BOM → Job Cost Estimate

This is where our existing work becomes incredibly valuable:

```
Customer configures shed in 3D
         │
         ▼
Parametric engine calculates cutting list (BOM)
         │
         ▼
BOM × material prices = estimated material cost
         │
         ▼
Estimated build time (based on complexity) × day rate = labour cost
         │
         ▼
Overhead rate × estimated build days = overhead
         │
         ▼
TOTAL ESTIMATED JOB COST
         │
         ▼
Add margin → QUOTE PRICE
```

Most builders quote from experience and gut feel. A parametric job costing system is **years** ahead of the competition. Nobody else in the UK garden building market has this.

---

## 3. Cash Flow Management

### What It Is
Ensuring you have enough cash to pay bills when they're due. The #1 killer of small businesses.

### The Cash Flow Problem for Builders

Typical cash flow timeline for a single job:

```
Week 0:  Customer enquiry (no cash movement)
Week 2:  Quote accepted, deposit received (+£2,000)
Week 3:  Order materials from East Bros (-£2,500)
Week 4:  Buy hardware/fixings (-£400)
Week 5:  Build on site (labour cost: -£1,000)
Week 6:  Job complete, invoice final payment
Week 8:  Customer pays final invoice (+£4,000)

CASH FLOW:
  Week 2: +£2,000 (positive)
  Week 3: -£500 (negative — you've spent more than received)
  Week 4: -£900 (deeper negative)
  Week 5: -£1,900 (deepest point — "the cash trough")
  Week 8: +£2,100 (positive again — job profitable!)
```

**The danger:** If you're running 3 jobs with overlapping cash troughs, you might need £5,000+ of working capital just to stay afloat — even though all three jobs are profitable.

### Cash Flow Forecasting

The system should be able to:
1. Look at all active/upcoming jobs
2. Estimate when cash goes OUT (material orders, labour)
3. Estimate when cash comes IN (deposits, stage payments, final invoices)
4. Show a forward-looking cash position: "In 3 weeks you'll be £2,000 short"
5. Alert early: "Take that deposit before ordering materials for Job #17"

### Payment Structure Best Practices for Builders

| Stage | Typical % | When |
|-------|----------|------|
| **Deposit** | 30-50% | On order confirmation |
| **Stage payment** | 25-30% | When materials arrive on site / frame complete |
| **Completion** | 20-45% | On handover |
| **Retention** | 0-5% | 30-90 days after completion (snagging) |

A good system would enforce these as configurable payment milestones tied to workflow stages.

---

## 4. Quoting & Pricing

### The Pricing Problem

Price too high → lose the customer
Price too low → lose money on the job
Price right → make money AND win the work

### Pricing Methods

| Method | How | Risk |
|--------|-----|------|
| **Cost-plus** | Calculate costs, add margin (e.g., 30%) | Safe but may over/under-price vs market |
| **Market-based** | Price similar to competitors | May not cover YOUR costs if less efficient |
| **Value-based** | Price based on perceived value to customer | Requires understanding what customer values (bespoke! craftsmanship! parametric design!) |
| **Hybrid** | Cost-plus as floor, value-based as ceiling | Best approach for bespoke builders |

### The Quote-to-Cash Pipeline

```
Configure shed (3D) → Auto-generate BOM → Calculate cost estimate
    → Apply margin → Generate quote document
    → Customer negotiates/approves
    → Deposit invoice → Collect deposit
    → [Build happens]
    → Progress invoices → Collect payments
    → Completion invoice → Final payment
    → Job profitability report (actual vs estimated)
```

**The feedback loop is crucial:** After each job, compare actual costs to estimated costs. If materials cost more than estimated, update the material prices. If the build took longer, update the time estimates. The system gets smarter with every job.

---

## 5. Tax & Compliance (UK-Specific)

### Key Requirements for a Small UK Builder
- **VAT** — threshold currently £90k turnover. Once registered: charge VAT, reclaim VAT on purchases, quarterly returns
- **Self-Assessment / Corporation Tax** — depending on business structure (sole trader vs limited company)
- **Making Tax Digital (MTD)** — HMRC requirement for digital record-keeping
- **Construction Industry Scheme (CIS)** — applies if using subcontractors. Deduct tax at source.
- **R&D Tax Credits** — the configurator development could potentially qualify

### What This Means for the System
- Must track VAT on purchases and sales
- Must produce reports compatible with MTD
- Should flag CIS obligations when subcontractors are used
- Should track R&D-eligible spending separately

---

## Software Landscape — Financial Tools

### UK Small Business Accounting
| Tool | Cost | Strengths | Weaknesses |
|------|------|----------|-----------|
| **Xero** | £15-50/mo | Clean UI, strong UK/NZ heritage, huge app ecosystem, MTD compliant | No job costing built-in (needs add-ons) |
| **QuickBooks** | £12-35/mo | Widely used, decent job costing, MTD compliant | US-centric design, UK version is a port |
| **FreeAgent** | £20-35/mo | Designed for UK freelancers/microbusinesses, very simple | Limited for growing business, basic job costing |
| **Sage** | £12-40/mo | UK heritage, strong with accountants, MTD compliant | Dated UI, complex, multiple confusing products |
| **Wave** | Free | Free accounting + invoicing | US-based, limited UK features, no job costing |

### Job Costing / Construction Finance
| Tool | Cost | Focus |
|------|------|-------|
| **Tradify** | ~£30/mo | Quote → job → invoice, built-in job costing |
| **Fergus** | ~£40/mo | Similar to Tradify, stronger costing |
| **Xero + WorkflowMax** | ~£65/mo | Xero accounting + WorkflowMax job management (now BlueRock) |
| **QuickBooks + Method CRM** | ~£50/mo | Accounting + CRM/job tracking integration |

### Open Source
| Tool | Focus |
|------|-------|
| **ERPNext** | Full ERP including accounting, manufacturing, job costing |
| **Odoo CE** | Modular ERP — accounting, invoicing, manufacturing |
| **GnuCash** | Basic double-entry accounting |
| **Invoice Ninja** | Invoicing + basic accounting |

---

## What This Means for Our Universal Business OS

### Key Insights

1. **Job costing is the killer feature for trades/construction.** Most small builders DON'T do proper job costing. They quote from gut feel and hope for the best. A system that automatically costs jobs from the configurator BOM is genuinely revolutionary for this market.

2. **Cash flow forecasting is the life-saving feature.** Show a builder their cash position 4 weeks out, tied to their active jobs, and you've given them something no spreadsheet easily provides.

3. **Don't build accounting software.** Integrate with Xero/QuickBooks instead. Accounting is heavily regulated (MTD, tax law) and constantly changing. Let the specialists handle that. OUR value is in the layer ABOVE accounting — job costing, quoting, cash flow visibility, profitability analysis.

4. **The quote-to-cash feedback loop is unique.** Configurator → BOM → cost estimate → quote → actual costs → variance analysis → better estimates. This learning loop doesn't exist in any off-the-shelf tool.

5. **Payment milestones tied to workflow stages.** When the workflow engine (from the operations deep-dive) hits a certain stage, it triggers a payment milestone. Operations and finance are deeply linked — the system must model this connection.

### Architecture Principle: Financial Layer

The Solution Planner doesn't need to BE an accounting system. It needs to:
- **Track costs per job** (materials, labour, overhead)
- **Generate quotes** from parametric data
- **Forecast cash flow** from active/upcoming jobs
- **Compare actual vs estimated** for continuous improvement
- **Integrate with accounting** (Xero/QuickBooks API) for invoicing, VAT, P&L

This is the **management accounting** layer — internal decision-making, not external reporting. The accounting software handles the external stuff.

---

*Research date: 14 Feb 2026*
*Next: Deep-dive Customer & Market disciplines (Sales, Marketing, CRM, Product Management)*
