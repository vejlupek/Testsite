# Pepa Vejlupek — Component Specifications

Design System v1.0 · Vanilla HTML / CSS / JS

---

## Component Index

1. [Navigation](#1-navigation)
2. [Hero Section](#2-hero-section)
3. [Trust Bar](#3-trust-bar)
4. [Buttons](#4-buttons)
5. [Service Card](#5-service-card)
6. [Review Card](#6-review-card)
7. [Pricing Card](#7-pricing-card)
8. [About Section](#8-about-section)
9. [Contact Item](#9-contact-item)
10. [Contact Form](#10-contact-form)
11. [Form Controls](#11-form-controls)
12. [Section Layout](#12-section-layout)
13. [Footer](#13-footer)

---

## 1. Navigation

**Purpose:** Persistent wayfinding; primary conversion point (phone / contact CTA).

### Structure

```
nav
└── .nav-inner  (max-width: 1100px, height: 64px)
    ├── a.nav-logo  → "Pepa Vejlupek – prostě to opravím"
    └── ul.nav-links
        ├── li > a  (Služby, O mně, Reference, Ceník)
        └── li > a.nav-cta  (Kontakt — orange pill button)
```

### Spec

| Property | Value | Token |
|----------|-------|-------|
| Height | 64px | `--nav-height` |
| Background | rgba(255,255,255,0.95) + backdrop-filter blur(8px) | `--nav-bg` |
| Border-bottom | 1px solid `#e8e8e4` | `--nav-border` |
| Position | sticky, top: 0, z-index: 100 | `--z-sticky` |
| Logo font-size | 1.15rem, weight 700 | `--font-body`, `--font-weight-bold` |
| Link font-size | 0.95rem | — |
| Link color | `#666` → `#e67e22` on hover | `--nav-link-color`, `--nav-link-hover` |
| CTA padding | 0.45rem 1.1rem | `--btn-padding-y-sm` |
| CTA radius | 8px | `--radius-md` |
| Logo accent color | `#e67e22` (on "prostě to opravím") | `--nav-logo-accent` |

### Responsive

- **≤ 768px**: `.nav-links` hidden (`display: none`). Add a hamburger button in future iterations.
- Logo remains visible always.

### CSS Snippet

```css
nav {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background: var(--nav-bg);
  backdrop-filter: var(--nav-backdrop);
  border-bottom: 1px solid var(--nav-border);
  padding: 0 var(--section-padding-x);
}

.nav-cta {
  background: var(--color-brand);
  color: var(--color-text-on-brand) !important;
  padding: var(--btn-padding-y-sm) var(--btn-padding-x-sm);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-semibold);
  transition: background var(--transition-base) !important;
}
.nav-cta:hover {
  background: var(--color-brand-hover) !important;
}
```

---

## 2. Hero Section

**Purpose:** Immediate brand communication. Answer: "What is this? Can you help me?" in under 3 seconds.

### Structure

```
section.hero
├── span.hero-emoji        → 🔧 (3.5rem)
├── h1                     → "Ahoj! Jsem Pepa Vejlupek a prostě to opravím"
│   └── span (branded)     → "prostě to opravím" in orange
├── p.lead                 → sub-headline, max 560px
└── .hero-buttons
    ├── a.btn.btn-primary  → 📞 Zavolat
    └── a.btn.btn-outline  → ✉️ Napsat zprávu
```

### Spec

| Property | Value | Token |
|----------|-------|-------|
| Background | gradient `#fff8f2 → #fff3e6` at 135° | `--hero-gradient` |
| Padding | 5rem top, 4rem bottom, 1.5rem sides | — |
| Text alignment | center | — |
| H1 font | Bitter | `--font-display` |
| H1 size | clamp(2rem, 5vw, 3rem) | `--text-3xl` / `--text-5xl` |
| H1 weight | 900 | `--font-weight-black` |
| Sub-headline | 1.15rem, `#666`, max-width 560px | `--text-lg`, `--color-text-secondary` |
| Button gap | 1rem | `--space-4` |

---

## 3. Trust Bar

**Purpose:** Immediate credibility reinforcement directly below the hero fold.

### Structure

```
div.trust-bar
└── .trust-bar-inner  (max-width: 900px, flex, justify: center)
    └── div.trust-item × 5
        ├── span.icon  → emoji
        └── text       → label
```

### Trust Items (current)

| Icon | Label |
|------|-------|
| ⭐ | Hodnocení 4.9/5 |
| 🏠 | 500+ zakázek |
| ⚡ | Odezva do 2 hodin |
| 📍 | Celá Praha |
| 💳 | Platba hotově i převodem |

### Spec

| Property | Value | Token |
|----------|-------|-------|
| Background | `#ffffff` | `--trust-bar-bg` |
| Padding | 1.2rem 1.5rem | — |
| Item gap | 2.5rem | `--space-10` |
| Font size | 0.9rem, weight 500 | `--text-sm`, `--font-weight-medium` |
| Icon size | 1.2rem | — |
| Color | `#666` | `--color-text-secondary` |

### Responsive

- Wraps to 2–3 rows on mobile; gap reduces to `1.2rem`.

---

## 4. Buttons

**Purpose:** Primary conversion actions and secondary navigation choices.

### Variants

#### `btn-primary` — Primary CTA

```html
<a href="tel:+420777000000" class="btn btn-primary">📞 Zavolat</a>
```

| State | Background | Shadow | Transform |
|-------|-----------|--------|-----------|
| Rest | `#e67e22` | none | — |
| Hover | `#cf6d17` | `--shadow-brand` | `translateY(-1px)` |
| Active | `#b05a0d` | none | `translateY(0)` |
| Focus | `#e67e22` | outline 3px `#e67e22` + offset 2px | — |

#### `btn-outline` — Secondary action

```html
<a href="#kontakt" class="btn btn-outline">✉️ Napsat zprávu</a>
```

| State | Background | Border | Color |
|-------|-----------|--------|-------|
| Rest | `#ffffff` | 2px `#e8e8e4` | `#2c2c2c` |
| Hover | `#ffffff` | 2px `#e67e22` | `#e67e22` |
| Active | `#fff8f0` | 2px `#cf6d17` | `#cf6d17` |

### Shared Button Base

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--btn-padding-y) var(--btn-padding-x);
  border-radius: var(--btn-radius);
  font-family: var(--font-body);
  font-size: var(--btn-font-size);
  font-weight: var(--btn-font-weight);
  line-height: var(--leading-none);
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: all var(--transition-base);
  min-height: 44px;  /* accessibility touch target */
}
```

### Nav CTA variant (`btn-sm`)

Smaller size used inside the navigation bar:

```css
padding: var(--btn-padding-y-sm) var(--btn-padding-x-sm);
border-radius: var(--radius-md);
font-size: var(--text-sm);
```

---

## 5. Service Card

**Purpose:** Communicate service breadth at a glance; scannable icon + name format.

### Structure

```
div.service-card
├── span.service-icon   → emoji (2.2rem)
├── h3                  → service name
└── p                   → 1-sentence description
```

### Spec

| Property | Value | Token |
|----------|-------|-------|
| Background | `#ffffff` | `--card-bg` |
| Border | 1px solid `#e8e8e4` | `--card-border` |
| Border-radius | 14px | `--card-radius` / `--radius-lg` |
| Padding | 1.6rem | ~`--space-6` |
| Icon size | 2.2rem, margin-bottom 0.8rem | — |
| H3 size | 1rem, weight 700 | `--text-base`, `--font-weight-bold` |
| P size | 0.88rem, color `#666` | `--text-sm`, `--color-text-secondary` |
| Grid min-width | 240px | — |

### Interaction

| State | Border | Shadow | Transform |
|-------|--------|--------|-----------|
| Rest | `#e8e8e4` | none | — |
| Hover | `#e67e22` | `--shadow-md` | `translateY(-3px)` |

```css
.service-card {
  transition: all var(--transition-base);
}
.service-card:hover {
  border-color: var(--color-border-brand);
  box-shadow: var(--card-shadow);
  transform: translateY(-3px);
}
```

### Current Service Set

| Icon | Name (cs) | Description (cs) |
|------|-----------|------------------|
| 🛋️ | Montáž nábytku | Složení IKEA, Jysk a dalšího nábytku rychle a správně. |
| 🎨 | Malířské práce | Malování stěn, lakování, opravy omítek – čistě a precizně. |
| 🔨 | Drobné opravy | Opravy dveří, oken, podlah, skříní a vše co doma skřípe. |
| 🚿 | Instalatérské práce | Výměna kohoutků, splachovadel, sifonů a drobné úniky vody. |
| 🪛 | Vrtání a věšení | Věšení obrazů, poliček, zrcadel, TV držáků – vše na milimetr. |
| 🔐 | Výměna zámků | Výměna a seřízení zámků, bezpečnostní kování, cylindrické vložky. |
| 💡 | Výměna osvětlení | Výměna žárovek, svítidel, lustrů a instalace LED osvětlení. |
| 🔌 | Zásuvky a vypínače | Výměna elektroinstalačních prvků – zásuvky, vypínače, kryty. |
| 🌿 | Zahrada a okolí domu | Drobné práce na zahradě, úpravy, montáže venkovního vybavení. |

---

## 6. Review Card

**Purpose:** Social proof — real customer words carry more weight than claims.

### Structure

```
div.review-card
├── .review-stars        → ★★★★★ (5 filled stars)
├── p.review-text        → quote in italic (1–2 sentences)
├── .review-author       → customer name
└── .review-location     → city + district
```

### Spec

| Property | Value | Token |
|----------|-------|-------|
| Background | `#ffffff` | `--card-bg` |
| Border | 1px solid `#e8e8e4` | `--card-border` |
| Border-radius | 14px | `--radius-lg` |
| Padding | 1.6rem | — |
| Stars color | `#f39c12` | `--color-rating` |
| Stars font-size | 1rem | — |
| Quote font-size | 0.95rem, italic | `--text-base` |
| Quote color | `#666` | `--color-text-secondary` |
| Author weight | 700, 0.9rem | `--font-weight-bold` |
| Location size | 0.82rem, `#666` | `--text-xs` |

Review cards are static — no hover interaction.

---

## 7. Pricing Card

**Purpose:** Transparent pricing removes hesitation and pre-qualifies enquiries.

### Variants

- **Standard** — hourly rate, full-day
- **Featured** — half-day, most popular package (orange border + badge)

### Structure

```
div.pricing-card  [.featured]
├── div.pricing-badge  (featured only) → "Nejoblíbenější"
├── h3                → package name
├── .pricing-price    → "1 600 Kč" + span "/ 4 hod"
└── p                 → one-line description
```

### Spec

| Property | Standard | Featured |
|----------|----------|----------|
| Border | 2px `#e8e8e4` | 2px `#e67e22` |
| Border-radius | 16px | 16px |
| Padding | 2rem | 2rem |
| Price color | `#e67e22` | `#e67e22` |
| Price size | 2rem, weight 800 | 2rem, weight 800 |

### Pricing Badge

```css
.pricing-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--pricing-badge-bg);
  color: var(--color-text-on-brand);
  font-size: 0.78rem;
  font-weight: var(--font-weight-bold);
  padding: 0.25rem 0.9rem;
  border-radius: var(--radius-pill);
  white-space: nowrap;
}
```

### Current Pricing Data

| Package | Price | Unit | Featured |
|---------|-------|------|----------|
| Hodinová sazba | 450 Kč | / hod | No |
| Půldenní balíček | 1 600 Kč | / 4 hod | Yes |
| Celodenní balíček | 2 800 Kč | / 8 hod | No |

*Cena materiálu zvlášť. Výjezd po Praze zdarma.*

---

## 8. About Section

**Purpose:** Build the personal connection that converts a visitor into a caller.

### Structure

```
section#o-mne
└── .section-inner
    └── .about-grid  (1fr 1fr, gap: 4rem)
        ├── .about-visual   → emoji placeholder / future photo
        └── .about-text
            ├── h2
            ├── p × 2
            └── ul.about-list
                └── li × 5  → ✓ checkmark bullet
```

### About Visual Spec

| Property | Value |
|----------|-------|
| Background | `linear-gradient(135deg, #fff3e6, #ffe0b8)` |
| Border-radius | 20px (`--radius-xl`) |
| Aspect ratio | 1:1 |
| Font-size | 6rem (emoji) |
| When photo used | object-fit: cover, same radius |

### Checklist Items

1. Více než 10 let praxe v oboru
2. Vlastní nářadí a vybavení
3. Přesné dodržení domluveného termínu
4. Čistá práce – uklidím po sobě
5. Transparentní cena předem

---

## 9. Contact Item

**Purpose:** Scannable contact details per channel.

### Structure

```
div.contact-item
├── span.contact-item-icon   → emoji (1.5rem)
└── .contact-item-text
    ├── strong               → channel label (uppercase, tracked)
    └── a | p                → value (weight 600)
```

### Spec

| Property | Value |
|----------|-------|
| Background | `#ffffff` |
| Border | 1px solid `#e8e8e4` |
| Border-radius | 12px |
| Padding | 1rem 1.2rem |
| Label | uppercase, 0.82rem, letter-spacing 0.05em, `#666` |
| Value | `#2c2c2c`, weight 600 |
| Value hover | `#e67e22` |

### Current Contact Data

| Icon | Label | Value |
|------|-------|-------|
| 📞 | Telefon | +420 777 000 000 |
| ✉️ | E-mail | pepa@vejlupek.cz |
| 🕐 | Pracovní doba | Po–Pá: 7:00–20:00 · So: 8:00–16:00 |
| 📍 | Oblast působení | Praha a blízké okolí |

---

## 10. Contact Form

**Purpose:** Low-friction enquiry capture. Name + phone is the minimum viable lead.

### Structure

```
div.contact-form
├── h3                          → "Nezávazná poptávka"
└── form#contactForm
    ├── .form-row               (2 columns: name + phone)
    ├── .form-group > label + select[service]
    ├── .form-group > label + textarea[message]
    └── button.btn.btn-primary.form-submit
```

### Success State

Form hides; `.form-success` shows:
- ✅ icon (3rem), "Zpráva odeslána!", confirmation message

---

## 11. Form Controls

### Input / Textarea / Select

```css
input, textarea, select {
  width: 100%;
  padding: var(--input-padding-y) var(--input-padding-x);
  border: var(--input-border);
  border-radius: var(--input-radius);
  font-size: var(--input-font-size);
  font-family: var(--font-body);
  background: var(--input-bg);
  color: var(--color-text-primary);
  transition: border-color var(--transition-fast),
              background var(--transition-fast);
  outline: none;
}
input:focus, textarea:focus, select:focus {
  border: var(--input-border-focus);
  background: var(--input-bg-focus);
}
```

- Textarea: `resize: vertical`, `min-height: 110px`
- Label: 0.88rem, weight 600, margin-bottom 0.35rem

---

## 12. Section Layout

### Shell Pattern

```html
<section id="section-id">
  <div class="section-inner">
    <div class="section-header">
      <h2>Section Title</h2>
      <p>Supporting subtitle</p>
    </div>
    <!-- content -->
  </div>
</section>
```

### Background Alternation

| Section | Background |
|---------|-----------|
| `.hero` | `--hero-gradient` |
| `.trust-bar` | `--color-bg-surface` |
| `#sluzby` | `--color-bg-page` |
| `#o-mne` | `--color-bg-surface` + borders |
| `#reference` | `--color-bg-page` |
| `#cenik` | `--color-bg-surface` + borders |
| `#kontakt` | `--color-bg-page` |
| `footer` | `--color-bg-inverse` |

---

## 13. Footer

### Structure

```
footer
└── .footer-inner  (max-width: 700px, centered)
    ├── .footer-logo     → "Pepa Vejlupek – prostě to opravím"
    ├── p                → "Hodinový manžel pro celou Prahu"
    ├── .footer-links    → Služby · Ceník · Kontakt
    └── p.copyright      → © 2024 Josef Vejlupek.
```

### Spec

| Property | Value | Token |
|----------|-------|-------|
| Background | `#1a1a1a` | `--footer-bg` |
| Text color | `#cccccc` | `--footer-text` |
| Logo color | `#ffffff` | `--footer-logo` |
| Logo accent | `#e67e22` | `--footer-logo-accent` |
| Link color | `#999` → `#e67e22` hover | — |

---

## Component Relationship Map

```
PAGE
├── nav
├── section.hero → btn-primary, btn-outline
├── div.trust-bar → trust-item × 5
├── section#sluzby → service-card × 9
├── section#o-mne → about-visual, about-list
├── section#reference → review-card × 3
├── section#cenik → pricing-card × 3 (1 featured)
├── section#kontakt
│   ├── contact-item × 4
│   └── contact-form → input, select, textarea, btn-primary
└── footer
```

---

## Future Components (Backlog)

| Component | Priority |
|-----------|----------|
| Mobile hamburger menu | High |
| Photo gallery / before-after | Medium |
| FAQ accordion | Medium |
| Cookie banner (GDPR) | Medium |
| Dark CTA section (navy bg) | Low |
| Testimonial slider | Low |
| Map embed | Low |
