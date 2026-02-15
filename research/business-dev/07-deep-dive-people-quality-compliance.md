# 07 — Deep Dive: People, Quality & Compliance

*"Who does the work?" + "Am I doing it right?" — the disciplines that keep people safe, work excellent, and the business legal.*

Covers: HR/People Management, Skills Development, Health & Safety, Quality Management, Regulatory Compliance, Government Regulations, Environmental Management

---

## Why These Are Combined

For a small builder, these overlap heavily. The person who manages the team IS the person who manages quality IS the person who ensures compliance. In an enterprise they're separate departments; in a 1-5 person business they're the same brain.

---

## PART A: PEOPLE

### 1. HR / People Management

#### What It Is
Managing the people who do the work — whether that's just Andrew, Andrew + a labourer, or eventually a small team.

#### The Solo Builder → Small Team Transition

This is a critical strategic inflection point. Andrew is currently a one-person operation (with James as AI support). Scaling means hiring. The system should anticipate this transition:

| Stage | People | HR Needs |
|-------|--------|----------|
| **Solo** | Just Andrew | Time management, self-scheduling, skill development |
| **Solo + casual help** | Andrew + day-rate labourer(s) | Tracking who worked when, payment records, CIS compliance |
| **Small team** | Andrew + 1-2 employees | Employment contracts, PAYE, holiday tracking, training records |
| **Growing team** | 3-5+ people | Roles, responsibilities, performance, scheduling, delegation |

#### What the System Needs (Even for Solo)
- **Time tracking** — how many hours/days on each job? (feeds into job costing)
- **Skills register** — what can each person do? What training is needed?
- **CIS records** — if using subcontractors, track payments and deductions
- **Availability** — who's available when? (feeds into scheduling)

#### Construction Industry Scheme (CIS) — UK Specific
If Andrew uses subcontractors (even occasionally):
- Must register as a contractor with HMRC
- Verify each subcontractor before paying them
- Deduct tax from payments (20% for verified, 30% for unverified)
- File monthly CIS returns
- Keep records for 3 years

**The system should make CIS compliance easy** — verify subcontractors, calculate deductions, generate returns. This is a real pain point for small builders.

### 2. Skills Development

#### What It Is
Ensuring people have (and develop) the skills needed to do excellent work.

#### Skills Tracking for a Small Builder
- **Core trade skills:** Framing, roofing, cladding, glazing, electrics (to what level?)
- **Equipment competency:** Particular saws, nail guns, scaffolding
- **Certifications:** CSCS card, first aid, scaffolding ticket, asbestos awareness
- **Expiry dates:** Many certifications expire — the system should alert before they lapse
- **Training log:** What training has been completed and when

#### Andrew's Unique Skills Asset
Andrew's knowledge of how to build bespoke garden buildings is an **intellectual asset**. The configurator encodes some of this (correct stud spacing, roof geometry, timber sections). But much remains tacit — in his head, not in the system. Knowledge management (capturing this expertise) is strategically important for:
- Training future employees
- Creating Forge AI content
- Business continuity (what if Andrew's ill for a month?)

### 3. Health & Safety

#### What It Is
Keeping people alive and uninjured at work. Construction is a high-risk industry — this isn't optional.

#### UK Construction H&S Requirements
| Requirement | What It Means | Applies When |
|------------|--------------|-------------|
| **Health & Safety at Work Act 1974** | General duty of care | Always |
| **CDM Regulations 2015** | Construction (Design & Management) — specific duties for construction projects | All construction projects, scaled by complexity |
| **Risk assessments** | Identify hazards, assess likelihood/severity, implement controls | Before every job |
| **Method statements** | Step-by-step safe procedures for high-risk activities | Working at height, using power tools, etc. |
| **COSHH** | Control of Substances Hazardous to Health — wood dust, adhesives, treatments | When using chemicals or generating dust |
| **PPE** | Personal Protective Equipment provision and use | Always on site |
| **First aid** | Provision of first aid facilities | Always |
| **Insurance** | Employer's liability (if employees), public liability, professional indemnity | Always |

#### CDM 2015 — Simplified for Small Projects
For most garden buildings (single contractor, small project):
- Andrew is likely **client, designer, AND contractor** for many jobs
- Still needs: risk assessments, method statements, and to ensure the structure is safe
- For larger or more complex projects: formal CDM duties apply (principal designer, principal contractor)

#### What the System Should Provide
- **Risk assessment templates** — per building type / activity
- **Method statement templates** — reusable, pre-filled
- **H&S checklist per job** — have risk assessments been done? PPE available?
- **Incident log** — record any near-misses or incidents (legal requirement)
- **Insurance tracker** — policies, renewal dates, coverage amounts
- **CSCS / certification expiry alerts**

---

## PART B: QUALITY

### 4. Quality Management

#### What It Is
Ensuring the buildings meet or exceed the standard the customer expects, consistently.

#### The Four Components of Quality Management

| Component | What It Means | For a Builder |
|-----------|-------------|---------------|
| **Quality Planning** | Decide the quality standard before you start | "This shed will use dried Douglas fir, SS grading, all joints glued AND screwed" |
| **Quality Assurance** | Processes that PREVENT quality problems | Using the parametric model (correct dimensions every time), buying from trusted suppliers |
| **Quality Control** | CHECKING work meets the standard | Inspection at each build stage, snagging before handover |
| **Quality Improvement** | Learning from experience to do better next time | "The felt kept lifting on the last three jobs — switch to EPDM membrane" |

#### Quality Checkpoints for a Shed Build

| Stage | What to Check |
|-------|-------------|
| **Materials received** | Correct species, grade, dimensions? Any defects? |
| **Foundations** | Level? Adequate bearing? Correct dimensions? |
| **Floor frame** | Square? Level? Correct joist spacing? |
| **Wall frames** | Plumb? Correct stud spacing? Openings in right place? |
| **Roof structure** | Correct pitch? Ridge straight? Purlins aligned? |
| **Weatherproofing** | Membrane lapped correctly? Flashings sealed? |
| **Cladding** | Even gaps? Fixings adequate? Expansion joints? |
| **Doors/windows** | Opening freely? Weathersealed? Locks working? |
| **Finish** | Clean? Touch-ups done? Customer items removed? |
| **Handover** | Customer walkthrough, snag list, sign-off |

**The system should offer a configurable quality checklist per building type** — generated from the configurator spec (if it has skylights, include skylight checks).

#### Customer Satisfaction
- Post-completion follow-up (7 days, 30 days, 6 months)
- Request photos (with permission → portfolio/marketing)
- Request reviews (Google, Checkatrade)
- Warranty tracking — what was the warranty period? Any claims?

---

## PART C: COMPLIANCE & ENVIRONMENT

### 5. Regulatory Compliance

#### Building Regulations (UK)
| Scenario | Regulations Apply? |
|----------|-------------------|
| Outbuilding <15m², no sleeping | Usually exempt |
| Outbuilding 15-30m², >1m from boundary | May need notification |
| Any building with sleeping accommodation | Full building regs apply |
| Any building with fixed electrics | Part P compliance needed |
| Any building in conservation area | Planning permission likely needed |
| Any building >2.5m at eaves (near boundary) | Planning constraints |

**The system should help Andrew determine** (from the configurator spec) whether building regs or planning permission are likely needed — and flag this to the customer early.

#### Planning Permission
- Most garden buildings under 2.5m eaves height and within specific size limits are **permitted development**
- But: conservation areas, listed buildings, AONBs have different rules
- **Post-code-based planning check** could be a killer feature for the configurator

#### Data Protection (GDPR)
- Customer data must be handled lawfully
- Privacy policy on the website
- Consent for marketing communications
- Data retention limits (don't keep customer data forever)

### 6. Environmental Management

#### What It Matters
- **Customer expectation:** Increasingly, people want sustainable choices
- **Material sourcing:** FSC-certified timber, sustainable supply chains
- **Waste:** Construction waste has specific disposal regulations
- **Andrew's values:** Untreated Douglas fir IS a sustainability choice (no chemical treatment needed)

#### What the System Could Track
- Waste per job (weight/volume by type: timber offcuts, packaging, other)
- Material origin (FSC status, UK-grown vs imported)
- Carbon footprint estimates per build (aspirational but differentiating)
- Environmental certifications held

---

## Software Landscape — People, Quality & Compliance

### HR / People
| Tool | Cost | Focus |
|------|------|-------|
| **BrightHR** | £3-6/employee/mo | UK SME HR — holiday, sickness, documents |
| **Breathe** | £2-6/employee/mo | UK SME HR — simple, clean |
| **CharlieHR** | £4-7/employee/mo | UK startup HR |
| **Sage HR** | £5/employee/mo | Part of Sage ecosystem |
| **Peninsula** | Varies | HR + H&S combined advisory (popular with trades) |

### H&S / Compliance
| Tool | Cost | Focus |
|------|------|-------|
| **HASpod** | Free templates | Risk assessments, method statements for construction |
| **CITB resources** | Free-low | Construction industry training board resources |
| **Procore Safety** | Enterprise | Construction safety management (overkill) |

### Quality
| Tool | Cost | Focus |
|------|------|-------|
| **Snag lists (various apps)** | £0-10/mo | Snagging / inspection checklists |
| **iAuditor (SafetyCulture)** | Free-£20/mo | Inspection checklists, photos, reports |
| **Tradify** | ~£30/mo | Basic quality notes within job management |

---

## What This Means for Our Universal Business OS

### Key Insights

1. **For a solo/small builder, People + Quality + Compliance = one integrated view.** Don't create separate "HR module" + "quality module" + "compliance module." Create a single "Am I doing it right?" lens that covers all three.

2. **Templates are the answer to compliance burden.** Risk assessments, method statements, quality checklists — these are largely the same for every similar job. The system should auto-generate them from the building type/spec, not require manual creation each time.

3. **Certification and insurance tracking with expiry alerts** is a simple feature with outsized value. A lapsed CSCS card or expired insurance is a serious problem — the system should prevent this.

4. **Quality checklists generated from the configurator spec** is another unique-to-us feature. If the shed has a hipped roof, include hipped-roof-specific checks. If it has skylights, include skylight checks. Parametric quality management.

5. **CIS compliance is a genuine pain point** for small builders using subcontractors. Making it easy = real value.

6. **Knowledge capture (Andrew's expertise → system/documentation) is strategically critical** for scaling, training, and Forge AI content.

### Architecture Principle: "Am I Doing It Right?" as a Unified Lens

```
"Am I doing it right?"
        │
        ├── QUALITY
        │     ├── Checklist per job (auto-generated from spec)
        │     ├── Snagging / inspection records
        │     └── Customer satisfaction follow-up
        │
        ├── COMPLIANCE
        │     ├── Building regs applicability (from spec)
        │     ├── Planning permission status
        │     ├── CDM duties and documentation
        │     └── Data protection (GDPR)
        │
        ├── H&S
        │     ├── Risk assessments (templated per job type)
        │     ├── Method statements
        │     ├── Incident log
        │     └── PPE and equipment checks
        │
        ├── PEOPLE
        │     ├── Skills / certifications (with expiry alerts)
        │     ├── Training log
        │     ├── Time tracking → job costing
        │     └── CIS compliance (if subcontractors)
        │
        └── INSURANCE
              ├── Policies and coverage
              ├── Renewal dates and alerts
              └── Certificates for customers
```

All of this feeds into the job record. When you open a job, you can see: quality status, compliance status, H&S documentation, who worked on it, and whether everything's in order.

---

*Research date: 15 Feb 2026 (03:00)*
*Next: Resource & Waste deep-dive (final topic), then cross-discipline interconnection model*
