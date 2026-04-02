# Arduino Starter Co — Social Media Visual Template Kit

> **Version 1.0** | Created 2026-04-02 | Owned by UI Designer
> For use with the 30-day social content calendar (see `docs/SOCIAL-CONTENT-CALENDAR.md`)
> Brand note: Uses placeholder brand name per [ARD-113](/ARD/issues/ARD-113) — update all templates once rebrand is confirmed.

---

## Overview

This kit provides 9 branded, reusable visual templates covering all launch social channels. Each template is an editable SVG file in `assets/social-media-templates/`. All designs apply the brand palette and typography from `docs/BRAND-IDENTITY.md` and `docs/DESIGN-SYSTEM.md`.

### Template Inventory

| # | File | Format | Dimensions | Use Case |
|---|------|--------|------------|----------|
| 1 | `ig-square-product-hero.svg` | Instagram / TikTok | 1080×1080 | Product feature, hero shot |
| 2 | `ig-square-tutorial-card.svg` | Instagram / TikTok | 1080×1080 | Step-by-step tutorial |
| 3 | `ig-square-quote-tip.svg` | Instagram / TikTok | 1080×1080 | Quote, tip, or community post |
| 4 | `ig-story-kit-reveal.svg` | Instagram Stories / Reels cover | 1080×1920 | Kit launch reveal |
| 5 | `ig-story-countdown.svg` | Instagram Stories / Reels cover | 1080×1920 | Pre-launch countdown |
| 6 | `twitter-launch-announcement.svg` | Twitter/X Banner | 1200×628 | Launch day announcement |
| 7 | `twitter-feature-highlight.svg` | Twitter/X Banner | 1200×628 | Component / feature call-out |
| 8 | `youtube-thumbnail.svg` | YouTube Thumbnail | 1280×720 | Tutorial video cover |
| 9 | `email-header.svg` | Email Header | 600×200 | Klaviyo email series header |

---

## Brand Token Reference

All templates use these values. Do not deviate from them.

### Colors

| Role | Name | Hex |
|------|------|-----|
| Primary | Circuit Blue | `#0D7ECD` |
| Secondary / Accent | Builder Orange | `#FF6B2B` |
| Accent / Success | Spark Green | `#00C896` |
| Background (light) | Cloud | `#F5F7FA` |
| Background (dark) | Midnight | `#1A202C` |
| Body text | Ink | `#2D3748` |
| Secondary text | Slate | `#718096` |
| Borders | Mist | `#E2E8F0` |
| White | — | `#FFFFFF` |

**Hero gradient** (for hero sections and marketing banners only):
```
linear-gradient(135deg, #0D7ECD 0%, #00C896 100%)
```

### Typography

| Role | Typeface | Weight | Approx. social size |
|------|----------|--------|---------------------|
| Headline / Display | Space Grotesk | 700 | 48–80px depending on format |
| Sub-heading | Space Grotesk | 600 | 28–40px |
| Body copy | Inter | 400 | 18–28px |
| Labels / CTA | Inter | 600 | 16–24px |

**Font loading:** Google Fonts — `Space Grotesk:wght@600;700` + `Inter:wght@400;600`

---

## Template Specifications

### 1. `ig-square-product-hero.svg` — Product Hero (1080×1080)

**Purpose:** Feature the kit or a hero product photo. Primary use: launch day, new product drop, weekly feature.

**Layout zones:**
| Zone | Position | Spec |
|------|----------|------|
| Background | Full bleed | Hero gradient (Circuit Blue → Spark Green) |
| Logo | Top-left, 32px margin | Reversed (white) lockup, 200px wide |
| Handle | Top-right | `@handle`, Inter 400, 22px, white 70% |
| Product image | 90,120 → 990,820 | 900×700px, dashed placeholder |
| Headline | Bottom overlay, y=790 | Space Grotesk 700, ~60–72px, white |
| Sub-copy | y=868 | Inter 400, 28px, white |
| CTA button | y=932, left | Builder Orange (#FF6B2B), 260×64, radius 8px |
| Logo (bottom) | Bottom-right | Reversed lockup |

**Usage:** Announce the kit, run as a product feature post, or use for paid social creative. Swap the product image zone with a high-res hero or flat-lay photo. Update the headline with launch messaging ("Your first Arduino kit is here.").

---

### 2. `ig-square-tutorial-card.svg` — Tutorial Step Card (1080×1080)

**Purpose:** Share individual tutorial steps as carousel slides or standalone posts.

**Layout zones:**
| Zone | Position | Spec |
|------|----------|------|
| Background | Full | Cloud (#F5F7FA) |
| Left accent bar | x=0, full height | 8px Circuit Blue |
| Header bar | Top, 148px tall | Circuit Blue gradient |
| Step badge | Top-left, circle 88px | Builder Orange circle, step number in white |
| Step title | Header, right of badge | Space Grotesk 700, ~48px, white |
| Illustration zone | 40,172 → 1040,752 | 1000×580px on white card |
| Instruction text | y=796 | Inter 400, 28px, Ink |
| Progress dots | Bottom-left, y=964 | 5 dots: Circuit Blue (current), Mist (upcoming) |
| Component badge | Bottom-right | Spark Green pill "COMPONENT NAME" |
| Logo | Bottom-right, y=1000 | Color lockup |

**Usage:** Post as a carousel (1 card per step). Keep illustration zone to a single wiring diagram, breadboard photo, or labeled component image. Step badge number matches the tutorial step. Duplicate the file for each step in the series.

**Tutorial step heading convention:** "Step N — [Verb] the [Component]" (e.g. "Step 2 — Wire the LED")

---

### 3. `ig-square-quote-tip.svg` — Quote / Tip Card (1080×1080)

**Purpose:** Share maker tips, beginner insights, community quotes, or engagement-driving content.

**Layout zones:**
| Zone | Position | Spec |
|------|----------|------|
| Background | Full | White (#FFFFFF) |
| Left accent bar | x=0, full height | 10px Circuit Blue |
| Corner accents | Top-right / Bottom-left | Subtle gradient triangles |
| TIP badge | Top-right, 48px pill | Spark Green, can change to "QUOTE" / "#PRO TIP" etc. |
| Opening quotation mark | Decorative, x=80 y=260 | Circuit Blue, 280px, 12% opacity |
| Quote text | 80,220 → 1000,640 | Space Grotesk 700, ~48–60px, Midnight |
| Attribution | y=700 | Inter 400, 28px, Slate — "— Source Name" |
| Channel handle | y=824 | Inter 400, Spark Green |
| Logo | Bottom-right, y=880 | Color lockup, 320×60 |

**Usage:** Great for engagement-focused posts. Quote can be a maker tip, a beginner encouragement line, or a customer quote. Keep to max 3 lines / 120 characters. Change the badge label to match content type (TIP / QUOTE / DID YOU KNOW?).

---

### 4. `ig-story-kit-reveal.svg` — Kit Reveal Story (1080×1920)

**Purpose:** Announce the kit launch in a full-screen Story. Primary use: launch day, new kit drop.

**Layout zones:**
| Zone | Position | Spec |
|------|----------|------|
| Background | Full bleed | Hero gradient (Circuit Blue → Spark Green) |
| Safe zone top | 0–200px | Instagram UI area — keep logo and handle within |
| Logo | Top-center, y=56 | Reversed (white), 360px wide |
| Kit image | 60,240 → 1020,1200 | 960×960px zone, full bleed kit or flat-lay photo |
| White card | y=1240 → bottom | Rounded top corners (40px radius), white bg |
| Headline | y=1308 | Space Grotesk 700, ~56px, Midnight |
| Sub-headline | y=1412 | Inter 400, 28px, Ink |
| Feature bullets | y=1516–1700 | 3 items, Circuit Blue dot, Inter 400 |
| CTA button | y=1732, full width | Builder Orange, 984×88, "GET YOURS NOW →" |
| Swipe up | y=1864 | Inter 400, Slate |

**Usage:** Use on launch day. The product image should fill most of the visible top 2/3. Feature bullets should list the 3 most compelling kit contents (e.g. "Arduino Uno R3", "40-piece component set", "QR code video guides"). Update CTA copy and destination URL.

---

### 5. `ig-story-countdown.svg` — Countdown Story (1080×1920)

**Purpose:** Build pre-launch hype. Use daily in the countdown period (Days 7–1 before launch).

**Layout zones:**
| Zone | Position | Spec |
|------|----------|------|
| Background | Full | Midnight (#1A202C) with subtle circuit traces in Circuit Blue |
| Logo | Top-center, y=56 | Reversed (white) |
| "LAUNCHING IN" label | y=420 | Inter 400, 28px, Slate, 6px letter-spacing |
| Countdown number | y=460–840 | Space Grotesk 700, 360px, Builder Orange — replace "XX" with actual number |
| "DAYS" label | y=920 | Space Grotesk 600, 96px, white |
| "UNTIL [EVENT]" | y=1004 | Inter 400, 26px, Slate |
| Event description box | y=1100–1380 | Circuit Blue, 920×280 rounded box |
| "MARK YOUR CALENDAR" | y=1500 | Space Grotesk 600, 36px, white |
| Date pill | y=1528 | Circuit Blue, "[Month DD, YYYY]" |
| URL placeholder | y=1628 | Midnight card, link in bio reference |

**Usage:** Duplicate once per countdown day. Change only the large "XX" number each day. Update the date pill for the launch date. Keep the event description consistent across all countdown posts.

---

### 6. `twitter-launch-announcement.svg` — Twitter/X Launch Banner (1200×628)

**Purpose:** Launch announcement or promoted tweet creative. Left text / right image split layout.

**Layout zones:**
| Zone | Position | Spec |
|------|----------|------|
| Background | Full | Hero gradient (Circuit Blue → Spark Green) |
| Product image zone | x=540, right 55% | 620×548px, dashed placeholder |
| Logo | Top-left, x=40 y=36 | Reversed (white), 220×48 |
| "WE'RE LIVE" badge | y=108, Builder Orange pill | 160×40, "🚀 WE'RE LIVE" label — edit text |
| Headline | y=172, left column | Space Grotesk 700, ~56–64px, white |
| Sub-copy | y=288, left column | Inter 400, ~22–24px, white |
| CTA button | y=436 | Builder Orange, 240×60, "SHOP NOW →" |
| URL / tagline | y=546 | Inter 400, 18px, white 50% |

**Usage:** The right-side image zone should contain a high-quality product photo or a clean kit flat-lay. Left column text should be punchy and scannable — 1 headline, 1–2 lines of copy, 1 CTA. Twitter/X recommends keeping text under 20% of total image area for promoted content.

---

### 7. `twitter-feature-highlight.svg` — Twitter/X Feature Banner (1200×628)

**Purpose:** Highlight a specific kit component or feature. Works as organic post image or ad creative.

**Layout zones:**
| Zone | Position | Spec |
|------|----------|------|
| Background | Full | Cloud (#F5F7FA) |
| Top accent bar | Full width, y=0, 6px | Circuit Blue |
| Bottom accent bar | Full width, y=622, 6px | Spark Green |
| Product image zone | x=480, right 60% | 640×548px, component close-up |
| Logo | Top-left, x=40 y=32 | Color lockup, 220×48 |
| Feature icon | x=100 y=192, circle 120px | Circuit Blue circle, custom electronics icon inside |
| Feature name | y=316, left column | Space Grotesk 700, ~36–40px, Midnight |
| Feature description | y=400 | Inter 400, 20px, Slate — 2 lines max |
| "INCLUDED IN KIT" tag | y=476, pill | Spark Green, 240×44 |

**Usage:** Use one card per kit component or feature. Rotate weekly during pre-launch period. The component image (right side) should be a macro shot of the specific component (e.g. a close-up of the sensor, the breadboard, the LED strip). Pair with content copy that calls out why this component matters for a beginner.

---

### 8. `youtube-thumbnail.svg` — YouTube Tutorial Thumbnail (1280×720)

**Purpose:** Tutorial video cover image. Split layout: dark left (text/presenter) / light right (project).

**Layout zones:**
| Zone | Position | Spec |
|------|----------|------|
| Left half | 0–640px | Midnight → dark gradient background |
| Right half | 640–1280px | Light (#E2E8F0) for project/product image |
| Episode badge | Top-left, y=32 | Builder Orange, "EP. 01" — update per episode |
| Presenter circle | x=120 y=280, 176px dia | Optional presenter face, circle crop |
| Tutorial title | y=140–260, left column | Space Grotesk 700, 60–80px, white — 2 lines max |
| Channel name | y=480 | Inter 400, 24px, Spark Green |
| Topic tag | y=520 | Inter 400, 18px, white 35% |
| Logo (bottom) | x=400 y=644 | Reversed, 220×44 |
| Center overlap badge | x=548 y=316 | Builder Orange, "BUILD / ALONG" — customize per video |
| Project image | x=660 y=20, right half | 600×680px, finished project or product |

**Usage:** Strong thumbnails use high contrast. Keep the title to 2 lines, 5–7 words max. The presenter face is optional — if used, make sure the face is clearly lit and cropped tightly. The right-side image should show the finished build or the most visually exciting outcome of the tutorial.

---

### 9. `email-header.svg` — Klaviyo Email Header (600×200)

**Purpose:** Top-of-email header banner for all Klaviyo sequences. Works across welcome series, launch sequence, and educational drip.

**Layout zones:**
| Zone | Position | Spec |
|------|----------|------|
| Background | Full | Hero gradient (Circuit Blue → Spark Green) |
| Logo | Center, y=28 | Reversed (white), 250px wide, 60px tall |
| Divider | y=104 | White 30% opacity, 200–400px centered |
| Campaign tagline | y=116 | Inter 400, 16px, white 65% — series name or campaign name |

**Usage:** Use one header design per email sequence (e.g. "Welcome Series", "Launch Countdown", "Tutorial Tips"). Change only the tagline zone to identify the series. Export at 2× (1200×400) for retina display. The template label bar at the bottom must be removed before export.

---

## Working With These Templates

### In Figma

1. Import the SVG file into a new Figma frame.
2. Each dashed zone is a named layer — expand the layers panel to find "PRODUCT IMAGE PLACEHOLDER", "HEADLINE TEXT PLACEHOLDER", etc.
3. Replace dashed zones by placing your content inside the layer group.
4. Update text by selecting the text layer and typing replacement copy.
5. Remove the bottom "TEMPLATE:" label bar before exporting.
6. Export at 1× (the SVG dimensions are already at full resolution).

### As Editable SVGs

1. Open the SVG in any vector editor (Inkscape, Affinity Designer, Sketch, etc.).
2. Each placeholder zone is a `<rect>` with `stroke-dasharray` styling.
3. Replace or layer over the placeholder rects with your actual images/content.
4. Text nodes are labeled and positioned for direct editing.
5. Delete the bottom "TEMPLATE:" `<rect>` + `<text>` elements before export.

### Exporting for Social

| Platform | Format | Resolution |
|----------|--------|------------|
| Instagram feed | JPG or PNG | Export at 1× (1080×1080) |
| Instagram Stories | PNG | Export at 1× (1080×1920) |
| Twitter/X | JPG | Export at 1× (1200×628) |
| YouTube | JPG | Export at 1× (1280×720) |
| Email (Klaviyo) | PNG | Export at 2× (→ 1200×400) for retina |

**Recommended image quality:** JPG 85% quality for photos; PNG for graphics with transparency.

---

## Placeholder Zones Reference

All placeholder zones share these visual conventions in the SVG files:

| Visual | Meaning |
|--------|---------|
| `stroke-dasharray` dashed border | Editable placeholder — replace with your content |
| Label text in center of zone | Zone purpose and recommended spec |
| `rgba` fill at low opacity | Background tint to make placeholder visible — disappears when replaced |
| Builder Orange fill (solid) | Fixed brand element — keep as-is or adjust text only |
| Circuit Blue fill (solid) | Fixed brand element — do not recolor |

---

## Brand Note: Placeholder Name

Per [ARD-113](/ARD/issues/ARD-113), the brand name may change. All templates use "Arduino Starter Co" as a placeholder in the logo zones and any text references. When the rebrand is confirmed:

1. Update all logo placeholder zones with the new logo asset.
2. Find/replace "Arduino Starter Co" in all SVG text nodes.
3. Update this document and increment the version number.

---

## File Index

```
assets/social-media-templates/
├── ig-square-product-hero.svg       — 1080×1080, Instagram/TikTok, product hero
├── ig-square-tutorial-card.svg      — 1080×1080, Instagram/TikTok, tutorial step
├── ig-square-quote-tip.svg          — 1080×1080, Instagram/TikTok, quote or tip
├── ig-story-kit-reveal.svg          — 1080×1920, Stories/Reels, kit reveal
├── ig-story-countdown.svg           — 1080×1920, Stories/Reels, countdown
├── twitter-launch-announcement.svg  — 1200×628, Twitter/X, launch announcement
├── twitter-feature-highlight.svg    — 1200×628, Twitter/X, feature highlight
├── youtube-thumbnail.svg            — 1280×720, YouTube, tutorial cover
└── email-header.svg                 — 600×200, Klaviyo email header
```

---

## Document Governance

| Field | Value |
|-------|-------|
| Owner | UI Designer |
| Reviewers | CEO, Content/Social team |
| Version | 1.0 |
| Last Updated | 2026-04-02 |
| Location | `docs/SOCIAL-MEDIA-TEMPLATE-KIT.md` |
| Assets | `assets/social-media-templates/` |
| Related | `docs/SOCIAL-CONTENT-CALENDAR.md`, `docs/BRAND-IDENTITY.md`, `docs/DESIGN-SYSTEM.md` |

---

_Arduino Starter Co — Social Media Visual Template Kit v1.0_
