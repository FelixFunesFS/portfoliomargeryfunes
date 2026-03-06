

# Data Inconsistency Audit & Fix Plan

## Issues Found

### 1. Duplicate Soul Train's Eatery Entries (Critical)
Three separate case studies all cover Soul Train's Eatery:
- **CS6** (id:6) — "Event Management App for Soul Train's Eatery" in `caseStudy6.ts`
- **CS7** (id:7) — "Improving Customer Communication for Catering Events" in `caseStudy7.ts`
- **CS8** (id:8) — "Soul Train's Eatery Website & App" in `webDevelopmentStudies.ts`

CS7 is specifically about the intake form (a subset of CS6's quote wizard). CS8 covers ordering/kitchen ops. These create confusion when viewed together on the Case Studies page and dilute the impact of each.

**Recommendation:** Merge CS7's unique content (intake form iteration, 60→95% completion rate insight, conditional fields strategy) into CS6's reflection and research process, then remove CS7 as a standalone entry. Keep CS8 separate since it focuses on a different angle (ordering/kitchen operations vs. event management).

### 2. CS6 Reflection Contradicts Its Own Data
The `reflection.wouldDoDifferently` says: *"Add automated email notifications for new event requests instead of manual checking"* — but `automatedWorkflows` already documents 8 automated email workflows including quote confirmation emails.

**Fix:** Update the reflection to reference a future improvement that doesn't conflict, such as *"Add SMS notifications alongside email for time-sensitive updates like same-day event changes."*

### 3. CS6 Missing userVoice, stakeholderQuote, userProblem
Every other case study (CS1–CS5) includes these three narrative fields. CS6 — the most comprehensive study — is missing all three. This means the `ProcessStoryCard` component won't render the quote blocks for Soul Train's.

**Fix:** Add:
- `userVoice`: Quote from a customer about the old manual process
- `stakeholderQuote`: Quote from Soul Train's owner about the impact
- `userProblem`: One-sentence summary of the core problem

### 4. CS7 Missing Multiple Fields
CS7 lacks: `researchScale`, `artifacts`, `userVoice`, `stakeholderQuote`, `userProblem`. If CS7 is kept as standalone (not merged), these need to be populated. If merged into CS6, this becomes moot.

### 5. CS1 Missing researchScale
CS1 (Boeing F117) has detailed research process (12 analysts shadowed, 8 usability tests) but no `researchScale` object. The `ResearchMethodsBadges` component won't show participant counts.

**Fix:** Add `researchScale: { interviews: 12, testSessions: 8, participants: 12, artifacts: 5 }`

### 6. CS2 Missing researchScale
CS2 (OQAR) documents 50+ sample files tested but has no `researchScale`.

**Fix:** Add `researchScale: { testSessions: 50, participants: 8, artifacts: 4 }`

### 7. Videos in CS6 All Have Empty URLs
All 5 video entries have `url: ""`. The `VideoShowcase` component will render cards that can't play anything.

**Fix:** Either add actual Loom/YouTube URLs, or temporarily remove the `videos` array until recordings are ready (the section won't render if no videos exist).

### 8. Inconsistent Research Phase Naming
- CS1: Discovery → Synthesis → Design & Development → Validation
- CS2: Discovery → Design → Development → Testing & Refinement
- CS4: Discovery → Synthesis → Design → Validation
- CS6: Discovery → Definition → Design → Development → Testing → Launch & Iteration
- CS7: Discovery → Design → Development → Iteration

This isn't necessarily wrong (different projects have different processes), but the variation may look unintentional rather than purposeful.

**Recommendation:** No change needed — different project scopes justify different phase structures. CS6 having 6 phases vs CS3 having 4 phases reflects real complexity differences.

---

## Proposed Changes

| File | Change |
|------|--------|
| `src/data/caseStudies/caseStudy6.ts` | Add `userVoice`, `stakeholderQuote`, `userProblem`; fix contradictory reflection item; remove empty `videos` array until real URLs are available |
| `src/data/caseStudies/caseStudy1.ts` | Add `researchScale` |
| `src/data/caseStudies/caseStudy2.ts` | Add `researchScale` |
| `src/data/caseStudies/caseStudy7.ts` | Merge unique insights into CS6's research process/reflection, then remove from index |
| `src/data/caseStudies/index.ts` | Remove `caseStudy7` import after merge |

The CS7→CS6 merge specifically:
- Move CS7's "completion rate 60→95%" insight into CS6's reflection `whatWorkedWell`
- Move CS7's conditional fields strategy into CS6's research process activities
- Move CS7's "forms as conversation" lesson into CS6's `lessonsLearned` or add as a research artifact

