

# Interactive Capabilities Deck — Web-Based Slides

## Overview

Build a fullscreen, keyboard-navigable slide presentation at `/capabilities` that synthesizes the portfolio data into a concise, visually compelling deck for stakeholders, collaborators, and recruiters. Uses the fixed-resolution scaling pattern (1920x1080) with arrow key / swipe navigation.

## Strategic Thinking

A capabilities deck is not a portfolio tour — it is a persuasion tool. The framing should answer: **"What can this person do for me?"** Every slide should lead with outcome, not process. The narrative arc:

1. Hook (who you are, one-line value prop)
2. Proof (aggregate impact numbers)
3. Capability domains (research, design, dev, AI — with evidence)
4. Case study highlights (problem → outcome, 2-3 slides max)
5. Technical toolkit (visual matrix)
6. Credentials (certs + career arc)
7. Close (CTA, contact, availability)

## Slide Structure (10-12 slides)

| # | Slide | Content Source |
|---|-------|---------------|
| 1 | **Title** | Name, title ("UX Researcher & Human-Centered Designer"), tagline ("Bridging Military Precision and User-Centered Innovation"), brand logos marquee strip |
| 2 | **Impact Overview** | 3 hero metrics from UnifiedImpactMetrics: 26,000+ hrs saved, 90% error reduction, 5,200% avg ROI — large stat callouts |
| 3 | **Core Competencies** | 6-card grid from CoreCompetenciesGrid data: UX Research, Systems Analysis, UI/UX Design, Data Analysis, Strategic Planning, Leadership — icon + years + highlight metric |
| 4 | **UX Research & Design** | Skills from UX Research + UX Design categories — visual proficiency bars, expert/advanced badges |
| 5 | **Case Study: Boeing F117** | CS1 — problem, solution, 45% faster reporting + 65% manual reduction, stakeholder quote |
| 6 | **Case Study: Data Entry Automation** | CS5 — 26,000 hrs/year saved, 90% error reduction, 80% time saved — the showstopper ROI story |
| 7 | **Case Study: Soul Train's** | CS6 — event management app, 83% faster response, quote from owner, live demo link |
| 8 | **Web Development Portfolio** | 5 live projects grid (Soul Train's, El Salvador, Visions of Hope, BBVAW, Souls Feeding Souls) — screenshot thumbnails + key metric per project |
| 9 | **Technical Stack & AI** | Full Stack + AI/Automation skills, tool logos, low-code/AI-augmented development positioning |
| 10 | **Certifications & Career** | Google UX (x2), IBM Full Stack, IBM AI, career timeline 2016→Present |
| 11 | **Close / CTA** | "Let's Build Something Together" — contact info, resume download, calendar link |

## Technical Implementation

### New Files

| File | Purpose |
|------|---------|
| `src/pages/CapabilitiesDeck.tsx` | Main deck page with slide renderer, keyboard nav, progress bar |
| `src/components/deck/SlideLayout.tsx` | 1920x1080 scaled container component |
| `src/components/deck/DeckNavigation.tsx` | Arrow keys, dots, swipe, fullscreen button |
| `src/components/deck/slides/TitleSlide.tsx` | Slide 1 |
| `src/components/deck/slides/ImpactSlide.tsx` | Slide 2 |
| `src/components/deck/slides/CompetenciesSlide.tsx` | Slide 3 |
| `src/components/deck/slides/ResearchSkillsSlide.tsx` | Slide 4 |
| `src/components/deck/slides/CaseStudySlide.tsx` | Slides 5-7 (reusable, data-driven) |
| `src/components/deck/slides/WebPortfolioSlide.tsx` | Slide 8 |
| `src/components/deck/slides/TechStackSlide.tsx` | Slide 9 |
| `src/components/deck/slides/CertificationsSlide.tsx` | Slide 10 |
| `src/components/deck/slides/ClosingSlide.tsx` | Slide 11 |

### Modified Files

| File | Change |
|------|--------|
| `src/App.tsx` | Add route `/capabilities` |

### Scaling Pattern

```text
┌─────────────────────────────┐
│  Browser viewport (any size)│
│  ┌───────────────────────┐  │
│  │ 1920x1080 slide       │  │
│  │ scaled via transform  │  │
│  │ centered in viewport  │  │
│  └───────────────────────┘  │
│  [● ● ● ○ ○ ○ ○ ○ ○ ○ ○]  │  ← dot navigation
└─────────────────────────────┘
```

### Design System

- Dark background throughout (`bg-slate-950`) for premium feel
- Primary accent from existing theme (`hsl(var(--primary))`)
- Large stat callouts: 60-72pt bold
- Body text: 18-20pt
- Brand logos from existing `/assets/brands/` directory
- Framer Motion slide transitions (fade + slight horizontal shift)
- Progress bar at top showing current slide position

### Navigation

- Arrow keys (left/right) + Space for next
- Click/tap side regions
- Dot indicators at bottom
- Escape to exit fullscreen
- Touch swipe on mobile
- Keyboard shortcut `F` for fullscreen (Fullscreen API)

### Data Flow

All content is pulled from existing data sources — no hardcoded content:
- Case study data from `src/data/caseStudies/`
- Skills data from Home.tsx skill categories
- Certifications from TrainingCertifications component data
- Impact metrics from UnifiedImpactMetrics
- Career data from CareerProgression
- Brand logos from `/assets/brands/`

