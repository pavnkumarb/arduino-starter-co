# QR Code & Video Tutorial Strategy
# Arduino Starter Co — Kit Packaging & Printed Guide

> **Version 1.0** | Created 2026-03-31 | Owned by CMO
> Related: [ARD-40](/ARD/issues/ARD-40) | [ARD-23](/ARD/issues/ARD-23)

---

## Executive Summary

No competitor in our category currently executes in-box video tutorial links well. SparkFun has dead links; budget competitors (Elegoo, Freenove) rely on PDFs; Arduino Official has no video integration. This is a genuine first-mover opportunity at no meaningful added cost — QR codes are free to generate and a hosted video infrastructure costs under $50/month at launch scale.

**Goal:** Place QR codes at every critical learning moment in the printed guide and on box packaging, linking to hosted 60–90 second video clips that mirror each tutorial step. The result is a hybrid print + video experience that no competitor offers.

---

## QR Code Design Specifications

### Visual Style

- **Shape**: Rounded corner QR module style (consistent with brand's "rounded outline" iconography principle)
- **Colors**: Dark modules in **Midnight (#1A202C)**, light modules in **Cloud (#F5F7FA)**
- **Size**: Minimum 2.5cm × 2.5cm in print (anything smaller degrades scan reliability)
- **Error correction level**: Q (25% restoration capacity — allows logo overlay)
- **Logo overlay**: Arduino Starter Co icon-only variant, centered at 20% of QR size
- **Border**: 4-module quiet zone on all sides (required for scanning)

### QR Code Label Anatomy

Each QR code appears with:
```
[ QR Code image ]
 ▶  Watch: Step 3 video  (Inter 600, 11pt, Circuit Blue #0D7ECD)
     scan or go to arduinostarter.co/v/p1s3  (Inter 400, 9pt, Slate #718096)
```

The short URL doubles as a manual fallback for users who can't scan (older devices, poor lighting). Short URL format: `arduinostarter.co/v/p{project-number}s{step-number}`

---

## Packaging QR Code Placements

### Box Front Panel

| Placement | QR Destination | Label Text |
|-----------|---------------|------------|
| Bottom-right corner (3cm × 3cm) | Kit unboxing + setup overview video (~3 min) | "▶ Watch: Kit overview" |

**Rationale**: First touchpoint before unboxing. Sets expectations and builds excitement. Scan rate is highest here — the customer is still in "buying mode" engagement.

### Box Back Panel

| Placement | QR Destination | Label Text |
|-----------|---------------|------------|
| Below "What's in the box" component list | Component identification walkthrough (~2 min) | "▶ Watch: What's in your kit" |
| Above the "30 minutes to first project" claim | Project 1 trailer / hype clip (~60 sec) | "▶ See it in action" |

### Inside Box Lid (Insert Card)

A dedicated **Welcome Card** (postcard-sized, 4" × 6", full-color) inside the lid with:

| Element | Content |
|---------|---------|
| Headline | "You're 30 minutes from your first working project." |
| QR Code 1 | Getting Started video (full kit intro, 5 min) |
| QR Code 2 | Online tutorial hub: `arduinostarter.co/start` |
| Short URL | Printed below each QR as manual fallback |
| Brand gradient strip | `135deg, #0D7ECD → #00C896` across top edge |

---

## Printed Guide QR Code Placements

### Global Placement Rules

1. **Every project has a QR code at the project title page** — links to a full project walkthrough video.
2. **Every wiring diagram step has a QR code** — links to the specific step video segment.
3. **Every troubleshooting section has a QR code** — links to a "common mistakes" video.
4. QR codes are right-aligned in the margin on right-hand pages; left-aligned margin on left-hand pages.
5. QR codes never interrupt body text flow — they live in the gutter margin or a dedicated sidebar block.
6. A **"Video Index" page** at the back of the guide lists every QR destination with short URLs as a reference.

### Project 1 — LED Blink (The 30-Minute Win)

This is the most critical project in the guide. Full video coverage is mandatory for launch.

| Guide Section | QR Placement | Video Content | Duration |
|---------------|-------------|---------------|----------|
| Project 1 title page | Full-width banner block, centered | Project 1 overview: what you'll build and why it matters | 90 sec |
| Step 1 — Gather components | Right margin | Component identification: spotting the right LED, resistor, and jumper wires | 60 sec |
| Step 2 — Wire the breadboard | Right margin (large, 3cm) | Wiring walkthrough: exact placement, camera zoomed on breadboard | 90 sec |
| Step 3 — Upload the code | Right margin | IDE setup + code upload: screen recording with voiceover | 2 min |
| Step 4 — Test and verify | Right margin | Expected result: LED blinking, what to do if it doesn't | 60 sec |
| Troubleshooting section | Left margin, red-bordered block | Top 5 Project 1 mistakes (compiled from user testing) | 3 min |

### Project 2+ — Subsequent Projects

Each subsequent project (minimum at launch):
- 1× project overview QR (project title page)
- 1× wiring QR (most complex wiring step)
- 1× troubleshooting QR

Detailed per-step QR coverage can be added post-launch based on user support ticket patterns.

---

## Video Production Plan

### Project 1 Video Suite (Launch-Critical)

These videos must be produced and hosted **before kit ships**.

| Video ID | Title | Duration | Format | Priority |
|----------|-------|----------|--------|----------|
| P1-OVERVIEW | "Build Your First Circuit in 30 Minutes" | 90 sec | Talking head + hands-on | P0 |
| P1-COMPONENTS | "What's in the Box: Finding Your Parts" | 60 sec | Close-up hands on table | P0 |
| P1-WIRING | "Step 2: Wiring the Breadboard" | 90 sec | Overhead + isometric shot | P0 |
| P1-CODE | "Step 3: Uploading Your First Code" | 2 min | Screen recording + PIP hands | P0 |
| P1-VERIFY | "Step 4: Testing — Did It Work?" | 60 sec | Hands + board close-up | P0 |
| P1-TROUBLE | "Top 5 Project 1 Mistakes (And Fixes)" | 3 min | Scripted walkthrough, multiple angles | P0 |
| KIT-OVERVIEW | "Your Arduino Starter Kit: A First Look" | 3 min | Unboxing format, all components | P0 |
| KIT-COMPONENTS | "Identify Every Part in Your Kit" | 2 min | Component close-ups with labels | P1 |

### Video Production Specifications

**Format:**
- Resolution: 1080p minimum (4K preferred for future-proofing)
- Frame rate: 30fps
- Aspect ratio: 16:9 (primary), vertical 9:16 crop available for social

**Shot types required per step video:**
1. Overhead/bird's-eye of breadboard (for wiring steps)
2. Isometric 45° angle (shows component depth)
3. Close-up macro (for small components — resistor bands, pin numbers)
4. Screen recording (for software steps — Arduino IDE)

**Audio:**
- Voiceover: Brand voice — warm, direct, encouraging (see BRAND-IDENTITY.md tone guidelines)
- No background music during instruction steps (distracting for learners)
- Optional ambient music for intro/outro (5 sec bumper only)

**Accessibility:**
- Closed captions on all videos (auto-generated + human-reviewed)
- High-contrast on-screen labels (white text, dark background, minimum 14pt equivalent)

### Hosting Recommendations

| Option | Cost | Pros | Cons |
|--------|------|------|------|
| YouTube (unlisted) | Free | Zero CDN cost, reliable playback, analytics | Ads may appear; competitor videos in sidebar |
| YouTube (public) | Free | SEO benefit, discovery | Same cons |
| Vimeo Pro | ~$20/mo | Clean player, no ads, password protection | Cost; no organic discovery |
| Custom hosted (Cloudflare Stream) | ~$5–15/mo at launch volume | Full control, branded player | Requires dev integration |

**Recommendation for launch:** YouTube (unlisted links via QR codes) for zero infrastructure cost, with plan to migrate to branded player post-Series A if user experience warrants it. YouTube analytics also provide free engagement data (drop-off points, rewatch rates) that directly inform tutorial improvement.

---

## URL Architecture

All QR codes should resolve through a redirect layer at `arduinostarter.co/v/` so destination URLs can be updated without reprinting packaging.

```
arduinostarter.co/v/kit         → Kit overview video
arduinostarter.co/v/p1          → Project 1 full walkthrough
arduinostarter.co/v/p1s1        → Project 1, Step 1
arduinostarter.co/v/p1s2        → Project 1, Step 2
arduinostarter.co/v/p1s3        → Project 1, Step 3
arduinostarter.co/v/p1s4        → Project 1, Step 4
arduinostarter.co/v/p1help      → Project 1 troubleshooting
arduinostarter.co/v/start       → Getting started hub (text + video)
```

**Critical implementation note:** The redirect layer must be live before any QR codes go to print. Dead QR codes destroy brand trust instantly.

---

## Success Metrics

| Metric | Definition | Target (90 days post-launch) |
|--------|-----------|------------------------------|
| QR scan rate | Unique scans / kits shipped | > 40% |
| Video completion rate | P1-OVERVIEW full views / total views | > 60% |
| Project 1 video engagement | P1-WIRING + P1-CODE combined views / kits shipped | > 30% |
| Support ticket reduction | Tickets tagged "wiring confusion" after video launch vs. before | -25% |
| NPS correlation | NPS score delta: video watchers vs. non-watchers | +10 NPS points |

---

## Implementation Checklist

- [ ] Register `arduinostarter.co/v/` redirect infrastructure (Engineering)
- [ ] Produce all P0 video suite (Production / CMO)
- [ ] Upload and generate final QR codes with correct redirect URLs
- [ ] Test QR codes at print scale (2.5cm) on physical paper stock
- [ ] Design Welcome Card insert (UI Designer)
- [ ] Integrate QR blocks into printed guide layout (UI Designer)
- [ ] Integrate QR codes into box packaging dielines (UI Designer / Packaging)
- [ ] Validate all QR codes scan before print final approval
- [ ] Set up analytics tracking on all redirect URLs

---

## Document Governance

| Field | Value |
|-------|-------|
| Owner | CMO |
| Reviewers | CEO, UI Designer |
| Version | 1.0 |
| Last Updated | 2026-03-31 |
| Location | `docs/QR-CODE-VIDEO-STRATEGY.md` |

_Arduino Starter Co — QR Code & Video Tutorial Strategy v1.0_
