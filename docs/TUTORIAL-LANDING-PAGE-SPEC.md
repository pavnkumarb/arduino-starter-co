# Tutorial Site Landing Page Spec — `/learn`

> **Version 1.0** | Created 2026-04-02 | Owned by UX Researcher
> **Parent task:** [ARD-90](/ARD/issues/ARD-90)
> **Status:** Ready for Engineer implementation

---

## Overview

The tutorial site at `/learn` currently shows a minimal list of tutorials. This spec replaces `src/app/learn/page.tsx` with a proper landing page that:

- Ranks for **"arduino tutorial for beginners"** (and long-tail variants)
- Converts organic visitors who arrive without context into kit buyers
- Serves as the content hub that links out to all 5 tutorial pages and the blog

---

## SEO Requirements

### Meta Tags

```html
<title>Arduino Tutorial for Beginners — 5 Free Projects | Arduino Starter Co</title>
<meta name="description" content="Learn Arduino from scratch with 5 free step-by-step tutorials. No coding experience needed. Build your first circuit in 30 minutes with our beginner kit." />
<link rel="canonical" href="https://arduinostarterco.com/learn" />

<!-- Open Graph -->
<meta property="og:title" content="Arduino Tutorial for Beginners — 5 Free Projects" />
<meta property="og:description" content="Learn Arduino from scratch with 5 free step-by-step tutorials. No coding experience needed. Build your first circuit in 30 minutes." />
<meta property="og:url" content="https://arduinostarterco.com/learn" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://arduinostarterco.com/og/learn.jpg" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Arduino Tutorial for Beginners — 5 Free Projects" />
<meta name="twitter:description" content="No coding experience needed. Build your first circuit in 30 minutes." />
```

### Schema Markup

Two schema types required:

**1. HowTo Schema** (applied to the "How It Works" section):

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Learn Arduino for Beginners",
  "description": "Start learning Arduino with no prior experience in three steps.",
  "totalTime": "PT30M",
  "supply": [
    { "@type": "HowToSupply", "name": "Arduino Starter Kit" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Get the Kit",
      "text": "Order the Arduino Starter Co kit. Everything you need — board, components, and guide — arrives in one box."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Follow the Tutorials",
      "text": "Open any of the 5 free step-by-step tutorials on this site. Each one is self-contained with wiring diagrams, code, and video walkthroughs."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Build Real Things",
      "text": "Complete all 5 projects and you'll know how to wire circuits, read sensors, control motors, and write Arduino code from scratch."
    }
  ]
}
```

**2. Product Schema** (linked to the kit product page):

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Arduino Starter Co Beginner Kit",
  "description": "Everything you need to complete 5 beginner Arduino projects — board, sensors, motors, breadboard, and a printed quick-start guide.",
  "brand": { "@type": "Brand", "name": "Arduino Starter Co" },
  "offers": {
    "@type": "Offer",
    "price": "59.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/PreOrder",
    "url": "https://arduinostarterco.com/#waitlist"
  }
}
```

### Target Keywords

| Keyword | Intent | Where it appears |
|---------|--------|-----------------|
| arduino tutorial for beginners | Informational | H1, meta title, hero body |
| arduino projects for beginners | Informational | Project grid H2 |
| learn arduino | Navigational | Hero body, FAQ |
| how to use arduino | Informational | How It Works section |
| arduino for beginners | Informational | FAQ, project descriptions |
| free arduino tutorials | Informational | Hero badge |
| arduino beginner kit | Commercial | Footer CTA, kit section |

---

## Page Architecture

```
/learn
├── [Nav] — minimal sticky nav (Arduino Starter Co logo → /, "All Tutorials" → /learn)
├── [Hero] — keyword-rich H1, benefit statement, primary + secondary CTAs
├── [Trust Bar] — 3 social proof stats (no sign-up required)
├── [Project Grid] — all 5 tutorials with difficulty, time, skill tags
├── [How It Works] — 3-step numbered section
├── [Social Proof] — reviews carousel (ReviewsSection component)
├── [FAQ] — accordion (FaqAccordion component)
├── [Footer CTA] — buy the kit + newsletter
└── [Footer] — links to blog, product page, tutorial pages
```

The existing `learn/layout.tsx` provides the outer chrome (header + max-w-2xl container). The new landing page must break out of that constraint — the layout should be replaced or the landing page should use `layout: false` to allow full-width sections.

**Recommendation for Engineer:** Replace `learn/layout.tsx` with a layout that conditionally applies the sidebar constraint only on `/learn/[tutorialSlug]` routes, allowing `/learn` itself to be full-width. Or render the landing page as a standalone page that doesn't use the tutorial layout.

---

## Section Specs & Full Copy

### Section 1 — Hero

**Component:** New `<TutorialHero />` or inline JSX in `page.tsx`
**Layout:** Full-width, dark background (use `bg-brand-gradient` or `bg-midnight`)
**Height:** Min-height `80vh` on desktop, auto on mobile

**Content:**

```
[Badge — small pill, white/20 bg]
Free · No sign-up required

[H1 — text-display, white, max-w-3xl centered]
Learn Arduino in a weekend.
No experience needed.

[Body — text-body-lg, white/90, max-w-xl centered]
Five free step-by-step tutorials take you from "what is this board?"
to controlling motors and reading sensors — with wiring diagrams,
code, and video walkthroughs included.

[Primary CTA button — builder-orange]
Start Tutorial 1 — It's Free
→ href="/learn/project-1/1-whats-in-the-box"

[Secondary CTA button — ghost/white border]
Get the Kit ($59)
→ href="/#waitlist"

[Micro-stat below CTAs — white/70, body-sm]
5 projects · ~3 hours total · Works on Mac, Windows & Linux
```

**SEO notes:** H1 must include "arduino tutorial for beginners" naturally. Exact match preferred but close variant acceptable.

---

### Section 2 — Trust Bar

**Component:** Inline — 3-column flex row
**Layout:** White background, `py-6 border-b border-mist`

**Content:**

```
[Col 1 — icon: users]
"2,400+ builders" on the waitlist

[Col 2 — icon: star]
4.9 / 5 from early testers

[Col 3 — icon: clock]
"First circuit in 30 min — or your money back"
```

**Notes:** Keep this concise. Shown to reinforce trust before the project grid. No heading needed.

---

### Section 3 — Project Grid

**Component:** New `<TutorialGrid />` or reuse Card layout from main page
**Layout:** 2-column grid on ≥ md, 1-column on mobile. `py-16 px-6 bg-white`

**Section heading:**

```
[H2 — text-h1, text-midnight, centered, mb-2]
5 free beginner Arduino projects

[Subheading — text-body-lg, text-slate, centered, mb-12]
Each tutorial is self-contained. Start with Project 1 or jump to whichever
sounds most interesting — everything you need is explained along the way.
```

**Project cards (5 total):**

Each card links to `/learn/{slug}/{first-step-slug}` and includes:
- Project number badge
- Title + tagline
- Difficulty badge + time estimate
- 3 skill tags
- "Start →" link

| # | Title | Tagline | Difficulty | Time | Skills |
|---|-------|---------|------------|------|--------|
| 1 | Blink | Your first LED, blinking in under 5 minutes | Starter | 30 min | pinMode, digitalWrite, delay |
| 2 | Traffic Light | Wire three LEDs and write your first loop | Beginner | 45 min | Arrays, for loops, State machines |
| 3 | Temperature Monitor | Read a sensor and print live data | Beginner | 60 min | Libraries, Serial.print, DHT11 |
| 4 | Distance Alarm | Build a proximity sensor that beeps | Intermediate | 60 min | pulseIn, Conditionals, HC-SR04 |
| 5 | Motor Controller | Spin a motor forward, backward, and at speed | Intermediate | 75 min | PWM, analogWrite, L298N |

**Card copy template:**

```
[Badge] Project {N}    [Difficulty badge]  [Time]

[H3 — text-h3, font-heading, text-midnight]
{Title}

[Tagline — text-body-sm, text-slate]
{Tagline}

[Skill tags — 3 inline pills]
{Skill 1}  {Skill 2}  {Skill 3}

[Link — text-circuit-blue, text-sm, font-semibold]
Start tutorial →
```

---

### Section 4 — How It Works

**Component:** Existing pattern from main `page.tsx` `#how-it-works` section — adapt for `/learn`
**Layout:** `py-16 px-6 bg-cloud`

**Section heading:**

```
[H2 — text-h1, text-midnight, centered]
How it works

[Subheading — text-body-lg, text-slate, centered, mb-12]
Three steps from zero to working project.
```

**Steps:**

```
[Step 1 — icon: shopping-bag or box]
Heading: Get the Kit
Copy: Order the Arduino Starter Co kit. Everything arrives in one box —
board, sensors, motors, breadboard, jumper wires, and a printed
quick-start guide. No hunting for parts.
→ Link: "See what's in the kit" → /#kit-contents

[Step 2 — icon: book-open or monitor]
Heading: Follow the Tutorials
Copy: Open any tutorial on this page. Each one walks you through the
wiring diagram, explains the code line by line, and includes a video
clip for the trickiest parts. No prior experience needed.
→ No external link (drives to project grid above)

[Step 3 — icon: wrench or lightning]
Heading: Build Real Things
Copy: Finish all five projects and you'll know how to wire circuits,
read sensors, control motors, and write Arduino code. Skills you can
apply to any maker project after this.
→ Link: "Start with Project 1 →" → /learn/project-1/1-whats-in-the-box
```

**Schema note:** Engineer should inject the HowTo JSON-LD script in this section or in the page `<head>`.

---

### Section 5 — Social Proof

**Component:** `<ReviewsSection />` (already exists in `src/components/ReviewsSection.tsx`)
**Layout:** `py-16 px-6 bg-white`

**Section heading (inject above component):**

```
[H2 — text-h1, text-midnight, centered, mb-2]
What early builders are saying

[Subheading — text-body-lg, text-slate, centered, mb-10]
From our waitlist community and early tester program.
```

**Notes:** The `ReviewsSection` component can be used as-is. The heading copy above is new. Add a `Show Your Build` callout at the bottom of this section:

```
[CTA box — bg-cloud, rounded-xl, p-6, text-center, mt-10]
Heading (text-h3): Built something cool?
Copy: Tag us @ArduinoStarterCo on Instagram or X and we'll feature
      your project right here.
Link: Share your build →  (href to Instagram profile)
```

---

### Section 6 — FAQ

**Component:** `<FaqAccordion />` (already exists in `src/components/FaqAccordion.tsx`)
**Layout:** `py-16 px-6 bg-cloud`

**Section heading:**

```
[H2 — text-h1, text-midnight, centered, mb-2]
Frequently asked questions

[Subheading — text-body-lg, text-slate, centered, mb-10]
The most common questions from beginners, answered honestly.
```

**FAQ items (7 questions — tutorial-focused, different from product page FAQ):**

| Q | A |
|---|---|
| Do I need any coding experience? | None at all. Every tutorial starts from a blank file and explains each line of code as you write it. If you can read and copy carefully, you'll finish Project 1 in under 30 minutes. |
| Do I need the Arduino Starter Co kit to follow these tutorials? | The tutorials are written for our kit, so all component references match exactly what's in the box. You can follow along with any Arduino Uno-compatible board and the listed parts, but you'll need to source each component separately. |
| What if I get stuck? | Every tutorial includes a Troubleshooting section with the most common wiring mistakes and error messages. If you're still stuck, email support@arduinostarterco.com and we'll help you through it. |
| Can I do these tutorials on a Mac? | Yes. The tutorials cover setup on Mac, Windows, and Linux. All software used is free. |
| How long does each tutorial take? | Project 1 takes about 30 minutes. Projects 2–3 are 45–60 minutes. Projects 4–5 are 60–75 minutes each. Most beginners complete all five over a weekend. |
| What do I learn by the end? | You'll know how to wire a breadboard circuit, write and upload Arduino code, read sensor data, control outputs like LEDs and motors, and debug common beginner mistakes. That foundation applies to any hardware project. |
| Are the tutorials free? | Yes, completely free — no sign-up, no paywall. The tutorials will always be free. We make money when you buy the kit, which includes all the components you need to follow along. |

---

### Section 7 — Footer CTA

**Component:** New `<TutorialFooterCta />` or inline JSX
**Layout:** Full-width, `bg-brand-gradient text-white py-16 px-6 text-center`

**Content:**

```
[H2 — text-h1, white, centered]
Ready to build your first circuit?

[Body — text-body-lg, white/90, max-w-xl, centered, mb-8]
Get the kit with every component pre-selected. Or start Tutorial 1
right now — it's completely free.

[Button row — flex, justify-center, gap-4]
[Primary — builder-orange bg, white text]
Get the Kit — $59
→ href="/#waitlist"

[Secondary — white/15 bg, border white/40]
Start Tutorial 1 — Free
→ href="/learn/project-1/1-whats-in-the-box"

[Newsletter signup — mt-10]
[Label — white/80, text-sm]
Get a new project idea each week:
[Input — placeholder "you@example.com"] [Button "Subscribe"]
→ POST /api/waitlist (reuse WaitlistForm component or inline)
```

---

### Section 8 — Footer Links

**Component:** New `<LearnFooter />` or inline
**Layout:** `bg-midnight text-white/60 py-10 px-6`

```
[Logo/name — white, font-heading]
Arduino Starter Co

[4-column link grid on desktop, 2-col on mobile]

Col 1 — Tutorials
- Project 1: Blink → /learn/project-1/1-whats-in-the-box
- Project 2: Traffic Light → /learn/project-2/...
- Project 3: Temperature Monitor → /learn/project-3/...
- Project 4: Distance Alarm → /learn/project-4/...
- Project 5: Motor Controller → /learn/project-5/...

Col 2 — Learn More
- How to Get Started with Arduino → /blog/how-to-get-started-with-arduino
- Arduino Projects for Beginners → /blog/arduino-projects-for-beginners
- What's in an Arduino Kit → /blog/what-is-in-an-arduino-kit
- Arduino vs Raspberry Pi → /blog/arduino-vs-raspberry-pi-for-beginners

Col 3 — Product
- Buy the Kit ($59) → /#waitlist
- Kit Contents → /#kit-contents
- Amazon Store → [Amazon listing URL]
- Support → mailto:support@arduinostarterco.com

Col 4 — Company
- Home → /
- Privacy Policy → /privacy
- Terms → /terms

[Bottom row — border-t border-white/10, mt-8, pt-6]
© 2026 Arduino Starter Co. All rights reserved.
```

---

## Internal Link Map

This map defines all links entering and leaving the `/learn` landing page. The Engineer should implement these as `<Link>` (Next.js) or `<a>` tags as appropriate.

### Inbound Links to `/learn`

| Source page | Link text | Notes |
|------------|-----------|-------|
| `/` (main page) | "Free tutorials" in nav | Add to NavBar |
| `/` hero section | "Follow the tutorials" | Update CTA in "How it works" on main page |
| Blog post 2 (`/blog/how-to-get-started-with-arduino`) | "our free tutorial series" | Already planned in blog CTA |
| Blog post 3 (`/blog/arduino-projects-for-beginners`) | "try these tutorials" | Already planned in blog CTA |
| All 5 tutorial pages (`/learn/[slug]/[step]`) | "All tutorials" in header | Already in `learn/layout.tsx` |

### Outbound Links from `/learn`

| Destination | Link text | Location on page |
|------------|-----------|-----------------|
| `/learn/project-1/1-whats-in-the-box` | "Start Tutorial 1 — It's Free" | Hero CTA, How It Works Step 3, Footer CTA |
| `/learn/project-2/...` | "Start tutorial →" | Project 2 card |
| `/learn/project-3/...` | "Start tutorial →" | Project 3 card |
| `/learn/project-4/...` | "Start tutorial →" | Project 4 card |
| `/learn/project-5/...` | "Start tutorial →" | Project 5 card |
| `/#waitlist` | "Get the Kit ($59)" | Hero CTA, Footer CTA |
| `/#kit-contents` | "See what's in the kit" | How It Works Step 1 |
| `/blog/how-to-get-started-with-arduino` | Blog post title | Footer Col 2 |
| `/blog/arduino-projects-for-beginners` | Blog post title | Footer Col 2 |
| `/blog/what-is-in-an-arduino-kit` | Blog post title | Footer Col 2 |
| `/blog/arduino-vs-raspberry-pi-for-beginners` | Blog post title | Footer Col 2 |
| `/blog/best-arduino-starter-kit-for-beginners` | Blog post title | (optional — add if space) |
| `mailto:support@arduinostarterco.com` | "support@arduinostarterco.com" | FAQ answer + Footer |

### Cross-Page Keyword Linking (for SEO)

These pages should link to each other to reinforce topic authority:

```
/learn ←→ /blog/how-to-get-started-with-arduino
/learn ←→ /blog/arduino-projects-for-beginners
/learn/project-1/... → / (product page) via "Get the Kit" CTA
/ (main page) → /learn via "Free tutorials" in nav
```

---

## Component Inventory

| Component | Status | Action |
|-----------|--------|--------|
| `NavBar` | Exists | Update to add "Tutorials" link → /learn |
| `ReviewsSection` | Exists (`src/components/ReviewsSection.tsx`) | Reuse as-is |
| `FaqAccordion` | Exists (`src/components/FaqAccordion.tsx`) | Reuse with new FAQ data (see above) |
| `WaitlistForm` | Exists (`src/components/WaitlistForm.tsx`) | Reuse in footer newsletter section |
| `TutorialHero` | **New** | Create in `src/components/tutorial/TutorialHero.tsx` |
| `TutorialGrid` | **New** | Create in `src/components/tutorial/TutorialGrid.tsx` |
| `TrustBar` | **New** | Inline JSX in page, or `src/components/TrustBar.tsx` |
| `TutorialFooterCta` | **New** | Create in `src/components/tutorial/TutorialFooterCta.tsx` |
| `LearnFooter` | **New** | Create in `src/components/tutorial/LearnFooter.tsx` |

---

## Layout Change Required

The current `learn/layout.tsx` wraps everything in `max-w-2xl` — too narrow for a marketing landing page.

**Recommended implementation:**

Replace `src/app/learn/layout.tsx` so it only applies the narrow container on sub-routes:

```tsx
// src/app/learn/layout.tsx
import type { Metadata } from "next";

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cloud">
      {children}
    </div>
  );
}
```

Move the tutorial-specific header (logo + "All tutorials" link) into the `[tutorialSlug]` sub-layout or individual tutorial pages, not the top-level learn layout.

The `/learn` landing page handles its own nav via `NavBar` component (same as main page).

---

## Performance Requirements

- Page load target: **< 2s** on a 4G connection
- No blocking JavaScript in the critical render path
- Schema JSON-LD injected server-side via Next.js `<Script strategy="beforeInteractive">` or inline `<script type="application/ld+json">`
- Images: use `next/image` with `priority` on hero image (if any), lazy-load project card thumbnails
- The existing `ReviewsSection` and `FaqAccordion` components must not block LCP

---

## Acceptance Criteria

- [ ] `/learn` renders the full landing page with all 7 sections
- [ ] `<title>` and `<meta name="description">` match SEO spec above
- [ ] HowTo + Product JSON-LD present in page `<head>`
- [ ] All 5 project cards render with correct links, difficulty, time, and skill tags
- [ ] `ReviewsSection` renders in Social Proof section
- [ ] `FaqAccordion` renders 7 FAQ items (tutorial-focused, different from main page)
- [ ] Footer links to all 5 tutorials + 4 blog posts + product page
- [ ] Main site `NavBar` includes "Tutorials" link → `/learn`
- [ ] Page passes Lighthouse Performance ≥ 90 / SEO ≥ 95
- [ ] No TypeScript errors (`npm run build` passes)

---

## Files to Create / Modify

| File | Action |
|------|--------|
| `src/app/learn/page.tsx` | **Replace** with full landing page |
| `src/app/learn/layout.tsx` | **Modify** — remove `max-w-2xl` constraint (move to sub-layout) |
| `src/app/learn/[tutorialSlug]/layout.tsx` | **Create** — narrow sidebar layout for tutorial pages |
| `src/components/tutorial/TutorialHero.tsx` | **Create** |
| `src/components/tutorial/TutorialGrid.tsx` | **Create** |
| `src/components/tutorial/TutorialFooterCta.tsx` | **Create** |
| `src/components/tutorial/LearnFooter.tsx` | **Create** |
| `src/components/NavBar.tsx` | **Modify** — add "Tutorials" nav link |

---

*Spec authored by UX Researcher · [ARD-90](/ARD/issues/ARD-90)*
