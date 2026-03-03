# Pepa Vejlupek — Design System

Version 1.0 · Vanilla HTML / CSS / JS

---

## Overview

This design system documents the visual language, tokens, and component patterns for [vejlupek.cz](../../index.html) — a personal handyman service site for Prague.

**Aesthetic direction:** *Craftsman Workshop* — warm, honest, and capable. Orange-led palette, slab-serif headings, clean card-based layouts.

---

## Files in This Directory

| File | Purpose |
|------|---------|
| [`tokens.css`](./tokens.css) | All CSS custom properties — source of truth for every value |
| [`style-guide.md`](./style-guide.md) | Color system, typography, spacing, motion, accessibility |
| [`components.md`](./components.md) | Component specs, HTML patterns, interaction states |
| [`references/01.png`](./references/01.png) | Reference: Handy — bold hero layout, trust bar pattern |
| [`references/02.png`](./references/02.png) | Reference: Renova — orange/navy split, booking form |
| [`references/03.png`](./references/03.png) | Reference: AHS — illustration style, future icon set direction |

---

## Quick Start

### 1. Link tokens before your stylesheet

```html
<head>
  <!-- Google Fonts — Bitter (display) + Source Sans 3 (body) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@700;800;900&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- Design tokens (must come before main CSS) -->
  <link rel="stylesheet" href="docs/design/tokens.css">

  <!-- Your stylesheet -->
  <link rel="stylesheet" href="style.css">
</head>
```

### 2. Migrate existing CSS variables

The current `index.html` uses inline `:root` variables. Map them to design tokens:

| Old variable | New token |
|-------------|-----------|
| `--primary` | `--color-brand` |
| `--primary-dark` | `--color-brand-hover` |
| `--text` | `--color-text-primary` |
| `--text-light` | `--color-text-secondary` |
| `--bg` | `--color-bg-page` |
| `--card-bg` | `--color-bg-surface` |
| `--border` | `--color-border-default` |
| `--shadow` | `--shadow-md` |

### 3. Upgrade typography (optional)

Replace the current system font stack with the design system fonts:

```css
/* In your main stylesheet */
body {
  font-family: var(--font-body);   /* Source Sans 3 */
}

h1, h2 {
  font-family: var(--font-display); /* Bitter */
}
```

---

## Design Tokens at a Glance

```css
/* Brand */
--color-brand:        #e67e22
--color-brand-hover:  #cf6d17
--color-brand-subtle: #fff8f0

/* Text */
--color-text-primary:   #2c2c2c
--color-text-secondary: #666666

/* Backgrounds */
--color-bg-page:    #fafaf8
--color-bg-surface: #ffffff
--color-bg-inverse: #1a1a1a

/* Borders */
--color-border-default: #e8e8e4
--color-border-brand:   #e67e22

/* Key shadows */
--shadow-md:    0 4px 20px rgba(0,0,0,0.08)
--shadow-brand: 0 6px 24px rgba(230,126,34,0.30)

/* Key radii */
--radius-md: 10px   (buttons)
--radius-lg: 14px   (cards)
--radius-xl: 20px   (pricing, about)

/* Transitions */
--transition-base: 200ms cubic-bezier(0.4,0,0.2,1)
```

---

## Design Principles

1. **Warm authority** — Orange commands attention; every CTA should feel confident, not pushy.
2. **Readable at a glance** — Section headings answer the visitor's question before they scroll.
3. **Human scale** — This is one person's business. Avoid corporate coldness.

---

## Accessibility Checklist

- [ ] All interactive elements have visible focus indicators
- [ ] Touch targets ≥ 44 × 44px
- [ ] Color is never the sole means of conveying information
- [ ] `prefers-reduced-motion` respected
- [ ] Form inputs have associated `<label>` elements
- [ ] Images / icon-only elements have `alt` / `aria-label`

---

## Contribution Notes

- **Never hardcode hex values** in component CSS — always use a token from `tokens.css`.
- **Never add a new token** without documenting it in `style-guide.md`.
- **Component additions** should be spec'd in `components.md` before implementation.
- The alternating section background rhythm (`page-bg → white → page-bg → …`) must be maintained when adding new sections.
