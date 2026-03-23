

# Capabilities Deck — Responsiveness & Font Audit

## Current State

The deck uses a **correct scaling approach**: all slides render at a fixed 1920x1080 and scale via CSS `transform: scale()` to fit any viewport. This means responsiveness is handled — content won't break at different screen sizes. However, there are font-related issues.

## Issues Found

### 1. No explicit font-family on slides
The `slide-content` class wrapper exists in `SlideLayout.tsx` but has **zero CSS rules**. Slides inherit whatever Tailwind's base sets, which may not match the intended presentation look. Inter is imported in `index.css` but not explicitly applied to slides.

### 2. Font sizes too small on several slides
At 1920x1080, some text is already small — and when scaled down to a 1110px viewport (current preview), these become nearly unreadable:

| Slide | Element | Current Size | Problem |
|-------|---------|-------------|---------|
| Competencies | Method tags | **11px** | Unreadable when scaled |
| Competencies | Subtitle | **13px** | Too small for presentation |
| Competencies | Years text | **13px** | Barely visible |
| CaseStudy | Metric labels | **14px** | Borderline |
| WebPortfolio | "View live site" | **14px** | Borderline |
| CaseStudy | Quote attribution | **14px** | Borderline |

### 3. Inconsistent heading hierarchy
- Title slide: `80px` name
- Impact slide: `56px` heading
- Most other slides: `52px` heading
- Case study: `44px` heading (noticeably smaller)
- Closing: `64px` heading

### 4. No font-weight variation for readability
All body text uses default weight. Presentation slides benefit from slightly heavier body text (weight 500) for projection/screen readability.

## Plan

### A. Add `.slide-content` CSS rules to `src/index.css`
- Set `font-family: 'Inter', sans-serif` explicitly
- Set minimum font floor: nothing below **14px** at 1920x1080
- Set base `font-weight: 500` for better screen readability
- Add `letter-spacing: 0.01em` for cleaner presentation text
- Add `-webkit-font-smoothing: antialiased`

### B. Fix small font sizes across slides (6 files)
Bump all sub-14px text to at least 14px, and adjust cramped elements:

| File | Change |
|------|--------|
| `CompetenciesSlide.tsx` | Method tags: 11px → 13px, subtitle: 13px → 15px, years: 13px → 14px |
| `CaseStudySlide.tsx` | Metric labels: 14px → 15px, quote attribution: 14px → 15px |
| `WebPortfolioSlide.tsx` | "View live" text: 14px → 15px |
| `CertificationsSlide.tsx` | Meta text: 15px → 16px |

### C. Standardize heading sizes
- Section labels (uppercase): **20px** across all slides (already consistent)
- Slide headings: **52px** standard, **44px** for case studies (keep — longer titles need smaller size), **80px** for title slide (keep), **64px** for closing (keep)
- No changes needed here — the variance is intentional based on content length

### Files Modified
- `src/index.css` — add `.slide-content` rules
- `src/components/deck/slides/CompetenciesSlide.tsx` — bump small font sizes
- `src/components/deck/slides/CaseStudySlide.tsx` — bump metric/quote sizes
- `src/components/deck/slides/WebPortfolioSlide.tsx` — bump link text
- `src/components/deck/slides/CertificationsSlide.tsx` — bump meta text

