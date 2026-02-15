# 05 — Deep Dive: Supply Chain & Materials

*"What do I need?" — the disciplines that get materials to where they're needed, when they're needed.*

Covers: Supply Chain Management, Procurement, Material/Inventory Management, Logistics

---

## Why This Matters for a Builder

A garden building business lives and dies by materials. You can't build without timber. You can't clad without boards. You can't roof without felt or tiles. And unlike a factory with steady demand, a bespoke builder orders different materials for every job. The supply chain is where money gets committed, delays happen, and waste accumulates.

Andrew sources Douglas fir from **East Bros Timber Ltd** (family-run sawmill since 1886, specialising in large cross-section graded beams). This isn't buying standard CLS from Wickes — it's a relationship-based, specialist supply chain.

---

## 1. Procurement

### What It Is
The process of finding, evaluating, and purchasing the materials and services needed to deliver jobs.

### Procurement for a Bespoke Builder

Unlike manufacturing (buying the same components every month), bespoke building procurement is **job-driven** — each build needs a specific set of materials calculated from the design.

**The Procurement Cycle:**
```
Job confirmed (customer order)
        │
        ▼
Generate material list from configurator BOM
        │
        ▼
Check existing stock (do we already have some of this?)
        │
        ▼
Identify what needs ordering
        │
        ├──→ Timber → East Bros (specialist, lead time)
        ├──→ Fixings/hardware → Builder's merchant (same day?)
        ├──→ Roofing → Roofing supplier
        ├──→ Doors/windows → Joinery supplier or self-made
        └──→ Cladding → Timber merchant or specialist
        │
        ▼
Place orders with lead time awareness
        │
        ▼
Track deliveries
        │
        ▼
Receive, check, store
        │
        ▼
Issue to job
```

### Supplier Relationships — The Spectrum

| Type | Example | Relationship | Ordering |
|------|---------|-------------|----------|
| **Strategic partner** | East Bros (Douglas fir) | Deep, long-term, negotiated pricing | Regular, planned, may hold stock for you |
| **Regular supplier** | Local builder's merchant | Familiar, trade account | Ad-hoc or weekly runs |
| **Specialist** | Roofing supplier, glass merchant | Project-specific | Per-job basis |
| **Commodity** | Fixings, consumables (screws, glue, sandpaper) | Transactional | Bulk buy or as needed |

### What the System Should Track Per Supplier

- Contact details, account numbers
- What they supply (categories)
- Lead times (typical and current)
- Pricing (negotiated rates, last prices paid)
- Quality history (have they sent the wrong thing before?)
- Payment terms (30 days? Pay on collection?)
- Minimum order quantities

---

## 2. Material Management / Inventory

### What It Is
Knowing what materials you have, where they are, and what you need.

### The Bespoke Builder's Inventory Challenge

A factory knows: "we use 1000 units of Part X per month." A bespoke builder's reality:

- "I've got some 6×2 Douglas fir left from the last job — is it enough for the next one?"
- "There's a half-sheet of OSB in the workshop somewhere"
- "Did I use the last of the stainless screws on the Mitchell job?"

**The fundamental tension:** 
- Too much stock = money tied up, storage problems, waste (timber can warp, degrade)
- Too little stock = delays, emergency purchases at retail prices, wasted travel time

### Inventory Strategies

| Strategy | How It Works | Fit for Builder |
|----------|-------------|-----------------|
| **Just-in-Time (JIT)** | Order materials right before you need them | **Risky** — lead times are unpredictable, weather delays builds |
| **Buffer stock** | Keep common items on hand (fixings, standard timbers) | **Good** — avoids trips to merchant for every job |
| **Job-based ordering** | Order everything per-job from the BOM | **Good for timber** — custom lengths, specific species |
| **Hybrid** | JIT for custom items + buffer for consumables | **Best fit** — matches reality |

### Bill of Materials (BOM) — The Configurator's Secret Weapon

The parametric configurator already calculates a cutting list. This IS a Bill of Materials:

```json
{
  "job": "Smith Garden Office",
  "materials": [
    { "item": "Douglas fir 6×2", "length": "3600mm", "qty": 12, "use": "wall studs" },
    { "item": "Douglas fir 6×2", "length": "2400mm", "qty": 8, "use": "floor joists" },
    { "item": "Douglas fir 4×2", "length": "1800mm", "qty": 6, "use": "roof purlins" },
    { "item": "OSB 18mm", "sheets": 4, "use": "roof deck" },
    { "item": "Featheredge 150×22", "length": "2400mm", "qty": 45, "use": "cladding" },
    ...
  ]
}
```

**From BOM to purchase orders:**
1. Configurator generates BOM
2. System checks stock (do we have any of these?)
3. Net requirement = BOM - stock on hand
4. Group by supplier (timber to East Bros, fixings to merchant, etc.)
5. Generate purchase orders
6. Track delivery status

This is **MRP (Material Requirements Planning)** — a core ERP function — but calculated from parametric design data. No one else in the garden buildings market has this pipeline.

### What Inventory Tracking Needs to Be

For a small builder, this doesn't need barcode scanners and warehouse management systems. It needs:

- **Know what you've got** — simple stock list (timber rack: X lengths of 6×2, Y sheets of OSB)
- **Know what's on order** — outstanding purchase orders
- **Know what's coming** — delivery dates
- **Know what's allocated** — "those 12 studs are for the Smith job"
- **Flag shortages** — "You need 4 more sheets of OSB for next week's job"

### Waste Tracking (connects to Andrew's "wasted time AND materials" insight)

**Material waste:**
- Offcuts from cutting to length
- Damaged materials
- Over-ordering (what's left over after the job?)

**Tracking waste per job shows patterns:**
- "We always over-order cladding by 10% — can we tighten that?"
- "Offcut from the Jones job could have been used on the Smith job if we'd planned ahead"
- "That supplier's timber is consistently 2% shorter than ordered"

---

## 3. Logistics

### What It Is
Getting materials from supplier to workshop to site, and getting people and equipment to where they need to be.

### Logistics for a Garden Building Business

| Logistics Activity | Challenges | System Needs |
|-------------------|------------|-------------|
| **Supplier → Workshop** | Lead times, delivery scheduling, unloading, checking | Track delivery dates, match to jobs |
| **Workshop → Site** | Van capacity, route planning, multiple trips, access | Know what fits in one load, plan trips |
| **Equipment to site** | Tools, generators, scaffolding | Checklist per job type |
| **Waste from site** | Skip hire, offcuts, packaging | Track waste disposal costs per job |

### Transport Costs

Often overlooked in job costing but significant:
- Fuel costs per trip
- Time spent driving (Andrew's time = money)
- Number of trips per job (can you do it in fewer loads?)
- Supplier delivery charges vs collection

The system should capture transport costs per job — even if just "2 trips × £X estimated cost."

---

## 4. Supplier Price Management

### The Pricing Problem

Material prices fluctuate. Timber prices have been volatile since 2020. A quote generated today uses today's prices, but materials might be ordered weeks later.

**What the system needs:**
- **Price list per supplier** — last known prices
- **Price history** — track changes over time
- **Quote validity** — "this quote is valid for 30 days because material prices may change"
- **Margin buffer** — build in a small materials contingency (3-5%)
- **Alert on significant changes** — "Douglas fir has gone up 15% since you quoted the Smith job"

### Supplier Price Integration

Ideally, the system could:
1. Store current prices per material per supplier
2. Auto-calculate BOM cost from these prices
3. Flag when prices are stale (not updated in >30 days)
4. Compare prices across suppliers for the same material
5. Track spend per supplier over time (negotiation leverage)

---

## Software Landscape — Supply Chain Tools

### Small Business Inventory / Procurement
| Tool | Cost | Focus | Notes |
|------|------|-------|-------|
| **Tradify** | ~£30/mo | Materials within job management | Basic but integrated with quoting |
| **inFlow** | £0-90/mo | Inventory management | Small business focused, barcode support |
| **Sortly** | £0-50/mo | Visual inventory | Photo-based, good for workshop tracking |
| **Craftybase** | £20-50/mo | Maker/artisan inventory | Tracks materials → products |
| **Cin7** | £300+/mo | Full inventory management | Too complex for small builder |

### Construction-Specific
| Tool | Focus | Notes |
|------|-------|-------|
| **Buildertrend** | Construction procurement | Purchase orders, material tracking |
| **Procore** | Large construction supply chain | Enterprise-level, way too much |
| **PlanSwift** | Construction takeoff/estimating | BOM from blueprints — we do this parametrically |

### ERP with Inventory
| Tool | Focus | Notes |
|------|-------|-------|
| **ERPNext** | Full MRP/inventory/procurement | Open source, powerful, complex |
| **Odoo** | Modular inventory + purchasing | Open source, can start small |

---

## What This Means for Our Universal Business OS

### Key Insights

1. **The BOM is the bridge between design and supply chain.** The configurator generates the cutting list → that drives procurement → which drives cost estimation → which drives quoting. This single data flow connects the 3D model to cash flow. No other system does this.

2. **Procurement is job-driven, not forecast-driven.** Unlike manufacturing, a bespoke builder doesn't forecast demand for standard components. Each job is unique. The system should generate purchase requirements from confirmed (or anticipated) jobs, not from historical averages.

3. **Supplier relationships matter more than procurement algorithms.** East Bros isn't a commodity supplier — it's a partner. The system should help nurture these relationships (track orders, communications, pricing agreements, quality) not just automate purchase orders.

4. **Inventory should be lightweight.** A small builder doesn't need a warehouse management system. They need to know: what's in the timber rack, what's on order, what's needed for the next job. A simple, visual stock overview is enough.

5. **Material waste tracking is a Lean discipline.** Connecting this to Andrew's "waste isn't just materials, it's time" insight. Tracking waste per job, identifying patterns, reducing over-ordering — this is continuous improvement in action.

### Architecture Principle: BOM as the Supply Chain Trigger

```
CONFIGURATOR (design)
        │
        ▼
    BOM (what materials)
        │
        ├──→ COST ESTIMATE (how much £)
        │         │
        │         ▼
        │     QUOTE (what to charge)
        │
        ├──→ PROCUREMENT (what to order)
        │         │
        │         ▼
        │     PURCHASE ORDERS (to which suppliers)
        │         │
        │         ▼
        │     DELIVERIES (track arrival)
        │
        └──→ STOCK CHECK (what we already have)
                  │
                  ▼
              NET REQUIREMENT (BOM - stock = what to buy)
```

The BOM is the universal data object that connects design → supply chain → finance. In the Solution Planner, the BOM concept should be generalised: any business template can define its own "bill of materials" (for a farm: seed quantities; for a coaching business: workshop materials; for a restaurant: ingredient lists).

---

*Research date: 15 Feb 2026 (00:30)*
*Next: Deep-dive Strategy disciplines or remaining groups — whichever flows best*
