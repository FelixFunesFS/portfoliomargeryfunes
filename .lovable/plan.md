

# Remove Journey Timeline Line & Improve Text Contrast

## What's Changing

Two focused changes to the "Journey: Bridging the Gap" section on the homepage:

1. **Remove the vertical timeline line** connecting the journey step icons
2. **Improve paragraph text contrast** against the parallax map background

---

## Current Issues

- The vertical gradient line (`from-primary via-accent to-primary`) adds visual clutter without providing meaningful navigation value -- the step icons alone communicate progression
- Paragraph text uses `text-muted-foreground` (a medium gray at ~50% lightness) which competes with the parallax background image for readability
- The section header subtitle also uses `text-muted-foreground`, which may lack sufficient contrast

## Proposed Changes

### 1. Remove Timeline Line

**File:** `src/pages/Home.tsx` (line 496)

Remove the continuous vertical gradient line element:
```
<div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
```

The circular icon nodes for each step will remain -- they provide sufficient visual structure without the connecting line.

### 2. Improve Text Contrast

**File:** `src/pages/Home.tsx` (Journey section, lines ~457-745)

**Strategy:** Rather than switching all text to white (which would break light mode), enhance the background overlay to ensure the parallax image doesn't compete with text, and strengthen text color:

- **Increase parallax overlay opacity** from `opacity-20` to `opacity-10` (reduce background image visibility) so text remains readable
- **Add a semi-transparent backdrop** behind the left column content area using `bg-background/70 backdrop-blur-sm rounded-xl p-6` to create a frosted glass effect that guarantees text readability regardless of the parallax image underneath
- **Upgrade paragraph text** from `text-muted-foreground` to `text-foreground/80` for stronger contrast while maintaining visual hierarchy below headings
- **Upgrade section subtitle** from `text-muted-foreground` to `text-foreground/70`

This approach:
- Maintains WCAG AA contrast (4.5:1 minimum for body text)
- Works in both light and dark modes
- Keeps the parallax effect visible but not competing with content
- Preserves responsive behavior since no layout changes are made

### Files Modified

| File | Change |
|------|--------|
| `src/pages/Home.tsx` | Remove timeline line div, reduce parallax opacity, add backdrop blur to content, upgrade text colors from `text-muted-foreground` to `text-foreground/80` on journey step paragraphs |

### Accessibility

- Body text will meet WCAG AA 4.5:1 contrast ratio against the frosted backdrop
- No changes to font sizes, touch targets, or keyboard navigation
- Reduced motion preferences already handled by existing global CSS

