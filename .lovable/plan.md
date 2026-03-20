

# Spanish-Language Services Landing Page (`/es` or `/servicios`)

## Strategic Thinking

This is not just a translation — it's a **market positioning tool** for the Latin American and US Hispanic professional market. The best way to think about this:

1. **Audience**: Spanish-speaking business owners, startups, NGOs (like the El Salvador and veteran orgs you've already served) who need UX research, web development, or digital transformation services
2. **Framing**: Position as a bilingual consultant who understands both US enterprise standards and Latin American business culture — this is a competitive advantage most UX researchers don't have
3. **Content**: Services-first (not portfolio-first). Lead with what you can do for them, then prove it with select case studies they'd relate to (El Salvador tourism, Soul Train's, Visions of Hope)
4. **Standalone page**: Not a full site translation — a focused landing page at `/servicios` with its own navbar, hero, services grid, social proof, and CTA

## Page Structure

| Section | Content |
|---------|---------|
| **Hero** | "Diseño Centrado en el Usuario & Desarrollo Web" — bilingual value prop, professional headshot area, CTA button |
| **Services Grid** | 4-6 service cards: Investigación UX, Diseño de Interfaces, Desarrollo Web, Automatización de Procesos, Consultoría Digital, Estrategia de Producto |
| **Why Work With Me** | 3 differentiators: Bilingüe, Military precision methodology, Measurable ROI (with stats) |
| **Selected Projects** | 3-4 relevant case studies with Spanish descriptions (El Salvador, Soul Train's, Visions of Hope, BBVAW) |
| **Certifications** | Google UX, IBM badges — universal credibility |
| **CTA / Contact** | "Hablemos" section with email, scheduling link |
| **Footer** | Simplified Spanish footer |

## Technical Implementation

### New Files
| File | Purpose |
|------|---------|
| `src/pages/Servicios.tsx` | Main Spanish services landing page — standalone scrollable page (not deck format) |
| `src/components/servicios/ServiciosHero.tsx` | Hero section with Spanish copy |
| `src/components/servicios/ServiciosGrid.tsx` | Services offering cards |
| `src/components/servicios/ServiciosProjects.tsx` | Selected project showcases |
| `src/components/servicios/ServiciosNavbar.tsx` | Simplified navbar with Spanish labels + language toggle link back to English site |

### Modified Files
| File | Change |
|------|--------|
| `src/App.tsx` | Add `/servicios` route |

### Design Approach
- Same dark premium aesthetic as the capabilities deck for brand consistency
- All copy in Spanish — no auto-translation, hand-crafted professional copy
- Responsive scrollable page (not slide deck) — better for SEO and mobile sharing
- Language toggle in navbar linking between `/` (English) and `/servicios` (Spanish)
- Reuse existing project images and brand assets

