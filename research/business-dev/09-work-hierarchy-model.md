# Work Hierarchy Model — Tasks, Jobs, Projects, Businesses & Ideas

*Established: 15 Feb 2026, from conversation with Andrew.*

---

## The Hierarchy

Andrew defined a clear work hierarchy that must be consistent across all dashboards, the Solution Planner, and the interruption workflow:

```
Idea
  └── can become any of the below ↓

Business        (an operating entity — garden buildings, Whelpley Farm, Forge AI)
  └── Project   (a large initiative with defined scope — "build the configurator")
       └── Job  (a discrete engagement or deliverable — "customer shed order #47")
            └── Task  (a single actionable item — "cut the Douglas fir beams")
```

### Definitions

| Level | What it is | Examples |
|-------|-----------|----------|
| **Task** | A single action. Has a doer, a status, and ideally a time estimate. | "Update the Kanban", "Cut timber to length", "Send invoice" |
| **Job** | A collection of related tasks that together deliver something. Often has a customer or deadline. | "Mrs Smith's garden office", "February accounts", "Research financial management" |
| **Project** | A larger initiative containing multiple jobs. Has a goal and a timeline. | "Build the 3D configurator", "Launch Forge AI", "Whelpley Farm field drainage" |
| **Business** | An operating entity with its own identity, finances, and purpose. Contains projects. | Andrew's garden buildings, Whelpley Farm partnership, Forge AI |

### Ideas — The Special Case

An **idea** is not a level in the hierarchy — it's a **pre-classification state**. An idea can mature into any level:

- "What if we added a colour picker?" → becomes a **task**
- "We should offer a design consultation service" → becomes a **job** (or multiple)
- "Build an automated quoting system" → becomes a **project**
- "What about a timber supply side-business?" → becomes a **business**

This is why the Incubator exists — it's where ideas live until they're classified and promoted into the hierarchy.

### The Recursive Nature

Critically, ideas don't just exist at the top level. They can emerge at any level:

- While doing a **task**, you might have an idea for a better process
- While running a **job**, you might spot a new opportunity
- While managing a **project**, you might see a spin-off business

The system must allow ideas to be captured at any level and linked to their context of origin.

---

## Implications for the Solution Planner

### 1. Universal Data Model
Every work item in the system has:
- **Type:** task | job | project | business | idea
- **Parent:** what it belongs to (or null for top-level)
- **Status:** backlog | in-progress | done (or idea-specific: seed | sprout | sapling)
- **Context:** which business/project it relates to

### 2. Navigation
The Solution Planner should let you zoom in and out:
- **Business level:** "How are all my businesses doing?"
- **Project level:** "What projects are active in the garden buildings business?"
- **Job level:** "What jobs are in progress?"
- **Task level:** "What do I need to do today?"

### 3. Ideas Everywhere
Ideas shouldn't be siloed into one "ideas section." They should be attachable to any entity:
- An idea attached to a project
- An idea attached to a business
- A free-floating idea (not yet connected to anything)

### 4. Cross-Business Visibility
Andrew runs multiple businesses. The Solution Planner must give a unified view across all of them while maintaining clear boundaries (especially for Whelpley Farm confidentiality).

---

## Implications for James's Interruption Workflow

The interruption workflow document should use this same terminology:

| Old term | Correct term | When to use |
|----------|-------------|-------------|
| "Quick answer" | Still just a quick answer | No work item needed |
| "Small task" | **Task** | Single action, <15 min |
| "Medium task" | **Job** | Multiple related tasks, 15-60 min |
| "Large task" | **Project** | Multi-phase work, 1+ hours |

This keeps the language consistent between how Andrew thinks about work and how James classifies interruptions.

---

## Implications for Existing Dashboards

### Garden Buildings Dashboard
- Cards are currently flat — need to support the hierarchy
- A customer order = **job** (contains tasks)
- "Build the configurator" = **project** (contains jobs like "animation system", "UI redesign")
- Ideas section should feed into the Incubator

### Whelpley Farm Dashboard  
- Business areas map to **projects** within the Whelpley Farm **business**
- Field work, accounts, etc. = **jobs**
- Individual to-dos = **tasks**

### Forge AI
- The whole thing is a **business** containing **projects** (the OS platform, templates, marketing)

---

## Key Design Decision

**The hierarchy is the skeleton of the entire system.** Every dashboard, every view, every workflow should understand and respect this model. It's not just naming — it's the fundamental data architecture.

---

*Captured from Andrew's direction, 15 Feb 2026.*
*This feeds directly into the cross-discipline interconnection model (next research phase).*
