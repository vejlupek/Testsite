# Pepa Vejlupek — Style Guide

Design System v1.0 · Vanilla HTML / CSS / JS

---

## Design Philosophy

**"Craftsman Workshop"** — the aesthetic direction for this site.

This is the website of a skilled tradesperson, not a corporation. Every design decision should feel *honest, capable, and trustworthy* — like a well-maintained workbench: functional, well-organised, with every tool in its place. Not flashy, not minimal to the point of coldness. Warm, confident, and direct.

**Three guiding principles:**

1. **Warm authority** — Orange commands attention without aggression. It says "I know what I'm doing" not "buy now."
2. **Readable at a glance** — Home repair customers are task-focused. Headlines answer "can you do X?" before they scroll.
3. **Human scale** — This is one person's business. Design should feel personal, not like a franchise.

---

## Brand Identity

| Element | Value |
|---------|-------|
| Brand name | Pepa Vejlupek |
| Tagline | *prostě to opravím* ("I'll just fix it") |
| Locale | Czech (cs-CZ) |
| Domain | Home services / handyman, Prague |
| Audience | Prague homeowners and renters, 25–60, needing reliable, fairly-priced repairs |

---

## Color System

### Color Roles

| Token | Hex | Use |
|-------|-----|-----|
| `--color-brand` | `#e67e22` | Primary actions, accents, highlights |
| `--color-brand-hover` | `#cf6d17` | Hover state of branded elements |
| `--color-brand-subtle` | `#fff8f0` | Tinted section backgrounds, badges |
| `--color-bg-page` | `#fafaf8` | Page canvas (warm off-white) |
| `--color-bg-surface` | `#ffffff` | Cards, nav, panels |
| `--color-bg-inverse` | `#1a1a1a` | Footer |
| `--color-bg-dark` | `#16192a` | High-contrast dark CTA sections (future use) |
| `--color-text-primary` | `#2c2c2c` | Body copy, headings |
| `--color-text-secondary` | `#666666` | Captions, subtitles, labels |
| `--color-border-default` | `#e8e8e4` | All borders at rest |
| `--color-border-brand` | `#e67e22` | Focused inputs, hovered cards |

### Colour Pairing Rules

- **Orange on white**: always sufficient contrast for large text/icons; do NOT use orange text on yellow or orange backgrounds.
- **White on orange**: use for button labels and badges only.
- **Orange on dark (`#1a1a1a`)**: passes AA for large text — use sparingly for footer accents.
- **Avoid**: purple, blue-purple, or cool-grey palettes. They clash with the warm amber brand.

### Section Backgrounds — Alternating Rhythm

```
HERO          → gradient: #fff8f2 → #fff3e6  (warm cream)
TRUST BAR     → #ffffff  (white)
SERVICES      → #fafaf8  (page bg)
ABOUT         → #ffffff
REVIEWS       → #fafaf8
PRICING       → #ffffff
CONTACT       → #fafaf8
FOOTER        → #1a1a1a  (near-black)
```

This alternating pattern creates visual rhythm without needing colour variety.

### Reference Palette Influence

| Reference | Key takeaway applied |
|-----------|---------------------|
| `01.png` (Handy) | Bold hero with large type + trust stat bar below fold |
| `02.png` (Renova) | Orange primary validated; dark section for final CTA (future) |
| `03.png` (AHS) | Illustration colour palette: deep blue + coral accent for future icon set |

---

## Typography

### Font Families

#### Display — Bitter (slab serif)
**Personality:** Craftsman authority. Slab serifs suggest precision, durability, and reliability — the same qualities a good handyman projects.

```html
<!-- Add to <head> before your stylesheet -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bitter:wght@700;800;900&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">
```

```css
font-family: var(--font-display);  /* 'Bitter', Georgia, serif */
```

Use for: `h1`, `h2`, `h3`, `.hero h1`, `.section-header h2`, `.about-text h2`

#### Body — Source Sans 3 (humanist sans)
**Personality:** Warm and legible. Humanist proportions feel approachable and honest — not corporate-cool.

```css
font-family: var(--font-body);  /* 'Source Sans 3', 'Segoe UI', system-ui */
```

Use for: all body text, form labels, nav links, captions, cards

### Type Scale

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `--text-2xs` | 11px | 1.4 | Legal, copyright |
| `--text-xs` | 12px | 1.4 | Timestamps, tiny labels |
| `--text-sm` | 14px | 1.5 | Card body, captions, form hints |
| `--text-base` | 16px | 1.6 | Primary body copy |
| `--text-lg` | 18px | 1.6 | Lead paragraphs, hero sub |
| `--text-xl` | 20px | 1.5 | Small headings, feature labels |
| `--text-2xl` | 24px | 1.35 | `h3`, card titles |
| `--text-3xl` | 30px | 1.25 | `h2` section headings |
| `--text-4xl` | 36px | 1.2 | Large `h2` on desktop |
| `--text-5xl` | 48px | 1.15 | `h1` hero title on desktop |

### Heading Styles

```css
/* Hero H1 */
h1 {
  font-family: var(--font-display);
  font-size: clamp(var(--text-3xl), 5vw, var(--text-5xl));
  font-weight: var(--font-weight-black);       /* 900 */
  line-height: var(--leading-tight);           /* 1.2 */
  letter-spacing: var(--tracking-tight);       /* –0.02em */
  color: var(--color-text-primary);
}

/* Section H2 */
h2 {
  font-family: var(--font-display);
  font-size: clamp(var(--text-2xl), 3vw, var(--text-4xl));
  font-weight: var(--font-weight-extrabold);   /* 800 */
  line-height: var(--leading-snug);            /* 1.35 */
  color: var(--color-text-primary);
}

/* Card / subsection H3 */
h3 {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-weight-bold);        /* 700 */
  line-height: var(--leading-snug);
  color: var(--color-text-primary);
}
```

### Body Text Styles

```css
/* Standard paragraph */
p {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-weight-regular);
  line-height: var(--leading-normal);          /* 1.6 */
  color: var(--color-text-secondary);
}

/* Lead / hero sub-headline */
.lead {
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  max-width: var(--max-w-sm);
}

/* Label (form, card metadata) */
.label {
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-secondary);
}
```

---

## Spacing

The spacing scale uses a **4 px base grid**. Token name maps to `N × 4px`.

```
space-1   =  4px   — icon gaps, fine adjustments
space-2   =  8px   — tight internal padding
space-3   = 12px   — inline gaps
space-4   = 16px   — default padding unit
space-6   = 24px   — card padding, form group gap
space-8   = 32px   — between medium elements
space-10  = 40px   — section sub-element gap
space-12  = 48px   — vertical spacing between major groups
space-16  = 64px   — nav height, hero top padding
space-18  = 72px   — section vertical padding (top + bottom)
space-20  = 80px   — hero top padding mobile
space-24  = 96px   — hero padding desktop
```

### Layout Guidelines

- **Container max-width**: `1100px` (`--max-w-xl`) — narrow enough to read comfortably, wide enough for 4-column service grids.
- **Section horizontal gutter**: `1.5rem` (`24px`) left/right on mobile; auto at desktop.
- **Section vertical rhythm**: `4.5rem` (`72px`) top and bottom for all major sections.
- **Card gap**: `1.2rem` (`~19px`) — close enough to read as a group, spaced enough to breathe.

---

## Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--radius-xs` | 4px | Tiny badges, inline chips |
| `--radius-sm` | 6px | Form inputs, dropdowns |
| `--radius-md` | 10px | Buttons |
| `--radius-lg` | 14px | Service cards, review cards, contact items |
| `--radius-xl` | 20px | Pricing cards, about visual, larger panels |
| `--radius-2xl` | 28px | Full-bleed feature panels |
| `--radius-pill` | 999px | Badges (e.g. "Nejoblíbenější"), nav CTA |

**Rule:** Never mix very round and very square elements on the same card.

---

## Shadows

| Token | Usage |
|-------|-------|
| `--shadow-xs` | Hairline lift on tiny elements |
| `--shadow-sm` | Subtle card lift on white-on-white |
| `--shadow-md` | Default card shadow (at rest) |
| `--shadow-lg` | Hover state on interactive cards |
| `--shadow-brand` | Orange glow — CTA button hover, featured card hover |
| `--shadow-brand-lg` | Strong brand glow — hero CTA, featured pricing card |

**Rule:** Only one shadow tier per elevation level. Cards at rest use `--shadow-md`; on hover they jump to `--shadow-lg` or `--shadow-brand` depending on whether they are branded.

---

## Motion & Transitions

### Principles

- **Purposeful, not decorative** — every animation must communicate a state change or aid spatial understanding.
- **Fast hover feedback** (`--transition-fast`, 120ms) — form fields, nav links.
- **Standard interactions** (`--transition-base`, 200ms) — buttons, card lifts.
- **Entrances / reveals** (`--transition-slow`, 350ms) — page load, section reveals.
- **Spring animations** (`--ease-spring`) — used only for card hover lift (slight overshoot creates physical quality).

### Recommended Patterns

```css
/* Card hover lift */
.service-card {
  transition: transform var(--transition-base),
              box-shadow var(--transition-base),
              border-color var(--transition-base);
}
.service-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-brand);
  border-color: var(--color-border-brand);
}

/* Button press */
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-brand);
  transition: all var(--transition-base);
}
.btn-primary:active {
  transform: translateY(0);
  box-shadow: none;
}

/* Link colour transition */
a { transition: color var(--transition-fast); }
```

### Reduced Motion

Always respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Iconography

The current site uses **emoji** as icons throughout (🔧, 🛋️, 🎨, etc.). This works well for a personal, approachable brand.

### Emoji Usage Guidelines

- **Service icons**: 2.2rem, displayed as `display: block` above the card title
- **Hero icon**: 3.5rem — immediately signals the topic before reading a word
- **Trust bar icons**: 1.2rem inline — reinforce the text with a quick visual cue
- **Contact icons**: 1.5rem — large enough to scan without dominating

### Future: SVG Icon Set (inspired by ref 03.png)

If the site evolves to need a custom icon set, adopt the **American Home Shield** illustration style observed in `03.png`:

- **Style**: Blueprint line-art, dual-weight strokes (2px outline + 4px accent)
- **Palette**: Deep blue `#3D4EAC` outlines + coral accent `#E86C5D` for hotspots
- **Categories needed**: Computer (online booking), House (location), Worker/person, Door (on-site service), Toolbox

---

## Illustration & Visual Language

### About Section — Avatar Placeholder
Current: `🧑‍🔧` emoji in a gradient circle. Intended to be replaced with a real photo.

**Photo direction (when available):**
- Natural light, indoor or outdoor Prague setting
- Subject wearing work clothes (not suit, not ultra-casual)
- Candid-style, not staged — builds the personal brand
- Crop: portrait, 1:1 ratio, rounded (match `--radius-xl`)

### Hero Background
- Current: linear gradient `#fff8f2 → #fff3e6`
- Intent: warm, diffuse light that sets a friendly, inviting tone
- Do NOT replace with stock imagery of power tools or construction sites — too generic

---

## Accessibility

| Requirement | Implementation |
|-------------|---------------|
| Colour contrast — body text on bg | `#2c2c2c` on `#fafaf8` → **15.5:1** ✅ AAA |
| Colour contrast — secondary text | `#666` on `#fafaf8` → **5.7:1** ✅ AA |
| Colour contrast — white on orange | `#fff` on `#e67e22` → **3.1:1** ✅ AA Large |
| Focus indicator | Use `border-color: var(--color-brand)` on focus, never remove outline without replacement |
| Touch target minimum | 44 × 44px — apply `min-height: 44px` to all interactive elements |
| Link vs button | Use `<a>` for navigation, `<button>` for actions |
| ARIA labels | All icon-only elements need `aria-label` |

**Note on white-on-orange**: The `#fff` on `#e67e22` combination achieves 3.1:1 — it passes AA for *large text* (≥18px or ≥14px bold) and UI components. Do not use it for body-sized text. Darken to `--color-brand-hover` (`#cf6d17`) if AA at small sizes is needed.

---

## Responsive Design

| Breakpoint | Width | Notes |
|------------|-------|-------|
| Mobile (default) | < 480px | Single column, stacked nav, condensed padding |
| Tablet | 480–768px | Two columns on grids, trust bar wraps |
| Desktop | 768–1100px | Full nav, multi-column grids, side-by-side layouts |
| Wide | > 1100px | Container fixed at 1100px, centred |

### Mobile-first rules

```css
/* Mobile hidden nav */
@media (max-width: 768px) {
  .nav-links { display: none; }            /* add hamburger menu in future */
  .about-grid, .contact-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .about-visual { max-width: 200px; margin: 0 auto; }
  .trust-bar-inner { gap: var(--space-4); }
}
```

### Grid Patterns

```css
/* Service cards — adaptive fill */
.services-grid {
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

/* Review cards — adaptive fill */
.reviews-grid {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

/* Pricing cards — constrained */
.pricing-cards {
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  max-width: var(--max-w-lg);
}

/* Two-column feature layouts */
.about-grid    { grid-template-columns: 1fr 1fr; gap: var(--space-16); }
.contact-grid  { grid-template-columns: 1fr 1.2fr; gap: var(--space-12); }
```
