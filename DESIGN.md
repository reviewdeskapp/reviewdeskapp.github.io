---
name: ReviewDesk for macOS — Landing Page
description: The reviews that need you, always in sight — a native Mac app landing page for developers.
colors:
  bg: "#0a0c10"
  surface: "#10131a"
  surface-2: "#161a22"
  line: "#232a34"
  line-soft: "#1b212b"
  ink: "#e7edf4"
  muted: "#8b98a9"
  faint: "#5c6672"
  merge: "#3fb950"
  merge-dim: "#2ea043"
  stat-done: "#3fb950"
  stat-progress: "#d29922"
  stat-idle: "#6e7681"
  stat-open: "#539bf5"
  age-warn: "#d29922"
  age-stale: "#e5534b"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 6vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 2.7rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: "0.18em"
rounded:
  pill: "9999px"
  lg: "8px"
  xl: "12px"
  panel: "14px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "56px"
  3xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.merge}"
    textColor: "#04140a"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#4cc766"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  badge-merge:
    backgroundColor: "{colors.merge}"
    textColor: "#04140a"
    rounded: "{rounded.pill}"
    typography: "{typography.label}"
    padding: "4px 10px"
  card-panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "28px"
---

# Design System: ReviewDesk for macOS — Landing Page

## 1. Overview

**Creative North Star: "The Merge Signal"**

The whole page is built around one idea the product itself lives by: a single green signal means "ready," and it only fires when it's actually true. Everything else — the near-black surfaces, the monospace micro-labels, the quiet borders — exists to make that one accent legible the instant it appears. This is a page for developers, built like a well-made developer tool: dark by default, technically specific in its copy, allergic to filler adjectives.

Depth is atmospheric, not architectural. There is no stack of drop shadows implying layers; instead a radial merge-green glow sits behind hero and feature panels, and a 1px light gradient traces the top edge of card rims, like light catching a bezel. The page explicitly rejects the SaaS-dashboard playbook: no gradient hero-metrics, no bright generic cards, no telling-not-showing. Every screenshot in the page is the real app UI.

**Key Characteristics:**
- One dark theme, one accent — merge green (#3fb950) — used identically in every section
- Monospace, uppercase, wide-tracked micro-labels for meta text (kickers, badges, timestamps)
- Glow + edge-highlight for depth, not conventional box-shadow stacks
- Real product screenshots as proof, never illustrations or mockups
- Restrained motion: opacity + 18px lift reveals, a slow logo marquee, a soft badge pulse — nothing bouncy

## 2. Colors

A near-black, cool-neutral base with exactly one saturated accent; every other color (the status hues used inside UI mockups) is scoped to illustrating the product, never used to decorate the marketing chrome itself.

### Primary
- **Merge Green** (#3fb950): The one accent. Primary CTA fill, active states, icon accents, the MERGE? badge, focus rings, glow effects. Never diluted into a second "friendly" tint — one hue, one meaning: ready / done / go.

### Neutral
- **Void** (#0a0c10): Page background.
- **Surface** (#10131a): Card and panel background, one step up from Void.
- **Surface Raised** (#161a22): Secondary panel fill (e.g. the "Aging" stat cell), a further step up for cells that need to read as elevated within a panel.
- **Hairline** (#232a34): Default border color for cards, dividers, the nav underline.
- **Hairline Soft** (#1b212b): Softer section dividers (the logo marquee band, FAQ divider).
- **Ink** (#e7edf4): Primary text — headings, nav labels, body emphasis.
- **Muted** (#8b98a9): Secondary body text, descriptions, nav links at rest.
- **Faint** (#5c6672): Tertiary text — timestamps, footnotes, the mono copyright line.

### Named Rules
**The One Voice Rule.** Merge Green is the only saturated color the marketing chrome uses. The status palette (stat-done, stat-progress, stat-idle, stat-open, age-warn, age-stale) exists solely to render inside product-mockup UI (the aging legend, workspace chips) — it never leaks into buttons, links, or page-level accents.

## 3. Typography

**Display / Body Font:** Geist (with ui-sans-serif, system-ui fallback)
**Label / Mono Font:** Geist Mono (with ui-monospace fallback)

**Character:** One geometric-leaning grotesk carries every weight from hero to caption, paired against its own monospace sibling for anything that reads as data or meta — ticket keys, timestamps, kickers, badges. The contrast axis is proportional-vs-mono, not two different sans families.

### Hierarchy
- **Display** (600, `clamp(2.7rem, 6vw, 3.4rem)`, line-height 1.05, tracking -0.02em): Hero H1 only, `text-wrap: balance`.
- **Headline** (600, `clamp(2rem, 4vw, 2.7rem)`, line-height 1.15, tracking -0.015em): Section H2s (Bento, MergeFeature, JiraSteps, Workspaces, Security, FAQ, DownloadCta).
- **Title** (600, 1.2rem–1.35rem, line-height 1.3): Card headings inside feature panels (H3).
- **Body** (400, 0.95rem–1.06rem, line-height 1.65, color Muted): Supporting paragraphs, capped conversationally around 60–65ch via `max-w-md`/`max-w-lg`/`max-w-xl` containers.
- **Label** (500, 10px–13px, tracking 0.16em–0.2em, uppercase, mono, color Faint or Merge Green): Kickers ("What you see", "The Jira link"), nav-adjacent meta ("Connects to the tools you already use"), timestamps inside mockups.

### Named Rules
**The Mono-Meta Rule.** Anything that is data, not prose — a timestamp, a ticket key, a badge, a kicker — renders in Geist Mono, uppercase, tracked wide. Anything that is a sentence renders in Geist proportional. The switch itself signals "this is a fact" vs. "this is copy."

## 4. Elevation

The page carries almost no traditional drop shadows. Depth reads as atmosphere: a soft radial merge-green glow (`.glow-merge`) sits behind hero art and feature panels, a 1px top-edge light gradient (`.edge-hl`) traces card rims like a bezel catching ambient light, and a single cool-tinted compound shadow (`.shadow-panel`) grounds only the large product screenshots — never ordinary cards.

### Shadow Vocabulary
- **Panel Shadow** (`0 30px 80px -32px rgba(6,12,22,0.9), 0 2px 8px -4px rgba(63,185,80,0.12)`): Reserved for the large hero/feature product screenshots — a deep cool drop plus a faint merge-tinted glow underneath.
- **Edge Highlight** (`.edge-hl`, 1px top gradient mask, white 8% → transparent): Applied to bordered image panels and security cards to suggest a lit bezel, not a raised surface.
- **Ambient Glow** (`.glow-merge`, radial merge-green at 22% opacity, 60% × 60% ellipse): Positioned behind hero art, feature sections, and the download CTA to imply light, not lift.

### Named Rules
**The No-Stack Rule.** Never combine more than one elevation device on a single element. A card gets a border, or a glow, or an edge-highlight — not a pile of all three. Depth stays legible because it stays singular.

## 5. Components

Every interactive element is a pill or a hairline-bordered rectangle at the panel radius (14px) — restrained and technical, confident but never loud. The one exception allowed to be visually loud is the MERGE? badge itself, because its entire job is to be noticed.

### Buttons
- **Shape:** Full pill (`rounded-full`, 9999px) for every CTA, both primary and secondary.
- **Primary:** Merge Green fill (#3fb950), near-black text (#04140a) for AA contrast, `px-6 py-3` (large) or `px-4 py-2` (nav), font-semibold. Shadow: a merge-tinted glow beneath (`shadow-[0_16px_40px_-16px_rgba(63,185,80,0.7)]`) on hero/download CTAs only.
- **Secondary / Ghost:** Transparent-to-Surface fill (`bg-surface/50`), Hairline border, Ink text. Border brightens to Muted on hover; no fill change.
- **Hover / Focus:** `translateY(-2px)` lift on hover (`.cta` class, 0.18s ease-out-quart-ish cubic-bezier), returns to 0 on active. Focus-visible gets a 2px Merge Green ring (80% mixed with white) with 2px offset and an 8px radius, regardless of the element's own corner radius.

### Chips / Badges
- **MERGE? badge:** Solid Merge Green pill, near-black mono uppercase text, the one element allowed a pulse animation (soft box-shadow ring expanding on a 2.6s loop) — signals "this is live and worth noticing."
- **Neutral chip (e.g. workspace "active," time-ago "5h"):** Hairline-bordered pill, transparent or Surface fill, Muted or mono Faint text, no shadow.

### Cards / Containers
- **Corner Style:** 14px (`var(--radius)`) for feature/bento panels; 12px for smaller nested elements (icon tiles); full pill for chips and CTAs.
- **Background:** Surface (#10131a) as the default panel fill, Surface Raised (#161a22) for a panel that needs to read as "one level up" within a section (e.g. the Aging stat cell, the mockup row background).
- **Shadow Strategy:** None by default. Only image-bearing hero/feature panels get Panel Shadow + Edge Highlight (see Elevation).
- **Border:** 1px Hairline (#232a34) on every card; the "My Open PRs" bento cell uses a Merge Green border at 40% opacity instead, marking it as the section's featured cell.
- **Internal Padding:** 28px (`p-7`) standard for feature cards; 12px (`px-3 py-2`) for compact mock-UI rows.

### Inputs / Fields
- Not present on this page (no forms) — if added, inherit the Hairline-border, Surface-fill, pill-or-14px-radius language above, with a Merge Green focus ring matching the global focus-visible rule.

### Navigation
- **Style:** Sticky top bar, `bg-bg/80` with `backdrop-blur-xl`, 1px Hairline-soft bottom border. Logo + wordmark left, text links center (Muted → Ink on hover, no underline), primary CTA pill right.
- **Typography:** 13.5px Geist for links, 15px semibold for the wordmark.
- **Mobile:** Center nav links hide below `md`; logo and CTA remain.

### MERGE? Signal (signature component)
The badge, its pulse animation, and the three-condition checklist it represents (ticket done / not draft / branch open) are the page's one recurring motif — it appears in the nav-adjacent hero mock, the Bento "My Open PRs" cell, and its own dedicated full-width section. Every appearance uses the identical Merge Green fill and near-black text; never a variant color or shape.

## 6. Do's and Don'ts

### Do:
- **Do** keep Merge Green (#3fb950) as the only saturated color outside product-mockup UI — buttons, badges, glows, focus rings, nothing else.
- **Do** use real product screenshots for every proof point; PRODUCT.md's "show, don't tell" principle is load-bearing here.
- **Do** render meta/data text (timestamps, ticket keys, kickers, badges) in Geist Mono, uppercase, tracked wide; render prose in Geist proportional.
- **Do** build depth with glow (`.glow-merge`) and edge-highlight (`.edge-hl`), reserving the compound Panel Shadow for large screenshots only.
- **Do** keep every animation inside the `prefers-reduced-motion` fallback already defined in `globals.css` (reveal, marquee, merge-pulse all degrade to instant/static).

### Don't:
- **Don't** introduce a second accent color, a gradient fill, or a "friendly" secondary hue — PRODUCT.md names this directly: not SaaS-cream, no gradient-hero-metric template.
- **Don't** stack more than one elevation device (border + glow + edge-highlight) on the same element — pick one.
- **Don't** use `background-clip: text` gradient headings, glassmorphism as decoration, or bouncy/elastic easing — all explicitly out per PRODUCT.md's anti-references.
- **Don't** add more uppercase tracked eyebrow kickers than the page already has (currently two, "What you see" and "The Jira link"); it is a deliberate rare accent, not a per-section default — watch this on future sections so it doesn't drift into the AI-eyebrow tell.
- **Don't** illustrate with abstract mockups or icons where a real app screenshot would do the job.
