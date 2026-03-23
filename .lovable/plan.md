

# Adding Detail to Core Competencies

## The Problem

Right now each competency shows: name, years, one vague metric ("15+ studies", "10k+ users"). A recruiter or collaborator sees "Systems Analysis — 10 years" and thinks "so what?" There is no explanation of **what you actually did**, **what methods you used**, or **why it matters to them**.

## How to Think About This

Each competency card should answer three questions in under 5 seconds of reading:

1. **What is this?** — A plain-language subtitle (not jargon)
2. **What did you actually do?** — 2-3 concrete activities/methods as small tags
3. **Why should I care?** — The impact statement (already exists, but needs sharpening)

The key insight: competencies are not skills — they are **value propositions**. "UX Research" means nothing. "I talk to your users, find where they get stuck, and fix it before you waste dev cycles" means everything.

## Proposed Data Structure Changes

Add two new fields to each competency:

- **`subtitle`**: One plain-English sentence explaining what this competency means in practice
- **`methods`**: 2-3 short tags showing concrete activities (these act as proof points)

### Example Data (both components + deck slide):

| Competency | Subtitle | Methods |
|---|---|---|
| UX Research | "Uncovering user needs through structured interviews, testing, and behavioral analysis" | `User Interviews` · `Usability Testing` · `Journey Mapping` |
| Systems Analysis | "Mapping complex workflows to find inefficiencies and design better processes" | `Workflow Analysis` · `Requirements Gathering` · `Process Mapping` |
| UI/UX Design | "Translating research insights into intuitive interfaces people actually want to use" | `Wireframing` · `Prototyping` · `Design Systems` |
| Data Analysis | "Turning raw user behavior data into actionable insights that drive decisions" | `Behavioral Analytics` · `Pattern Recognition` · `Statistical Analysis` |
| Strategic Planning | "Aligning product roadmaps with business goals and user needs across teams" | `Roadmap Development` · `Stakeholder Alignment` · `OKR Frameworks` |
| Leadership | "Building and guiding cross-functional teams through ambiguity to deliver results" | `Team Building` · `Mentorship` · `Cross-functional Coordination` |

## Changes

### 1. `src/components/CoreCompetenciesGrid.tsx` (Home page)
- Add `subtitle` and `methods` fields to the data array
- Render subtitle below the name (small muted text)
- Render methods as small badges/tags below the impact statement
- Keep the existing card layout — just add two lines of content per card

### 2. `src/components/deck/slides/CompetenciesSlide.tsx` (Deck)
- Same data additions
- Render subtitle as a one-liner under the competency name
- Render methods as inline dot-separated text (compact for slide format)
- Keep the existing 3x2 grid layout

### 3. No new files needed
Both components are self-contained. The data stays inline (matching existing pattern).

