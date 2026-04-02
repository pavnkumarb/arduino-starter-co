# Arduino Starter Co — Kit Packaging & Unboxing Design

> **Version 1.0** | Created 2026-04-01 | Owned by UI Designer
> Depends on: [BRAND-IDENTITY.md](./BRAND-IDENTITY.md), [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)
> Related issues: [ARD-63](/ARD/issues/ARD-63), [ARD-42](/ARD/issues/ARD-42), [ARD-44](/ARD/issues/ARD-44)

---

## Overview

The packaging system is the first physical brand touchpoint. It must make a beginner feel **confident and excited — not overwhelmed** the moment they hold the box. Every element is designed to reduce anxiety and accelerate time-to-first-blink.

**Packaging System Components:**
1. **Outer retail box** — dieline + full print artwork (front, back, 2 sides, top, bottom)
2. **Quick-Start card** — folded A5 card inserted on top
3. **Component checklist card** — flat A5 card for verifying kit contents on arrival
4. **Inner layout guide** — placement diagram for components inside box

---

## 1. Outer Retail Box

### 1.1 Box Dimensions

| Dimension | Measurement | Notes |
|-----------|-------------|-------|
| Width | 240 mm | Fits storage case + breadboard side by side |
| Height | 180 mm | Portrait orientation on shelf |
| Depth | 70 mm | Accommodates storage case + cable coil |
| Board thickness | 1.5 mm | E-flute corrugated or solid bleached sulfate (SBS) 350gsm |

**Dieline format:** Adobe Illustrator `.ai` + PDF/X-4. All cut lines on a separate "Dieline" layer. All artwork on "Print" layer. 3mm bleed on all edges. Crop marks included.

**Print spec:**
- Process: CMYK 4-color offset
- Finish (exterior): Matte laminate overall + spot UV gloss on logo and headline
- Finish (interior): Uncoated kraft (natural)
- Resolution: 300 DPI minimum for raster assets; all type and vectors at native resolution

---

### 1.2 Box Front Panel (240 × 180 mm)

**Layout (top to bottom):**

```
┌──────────────────────────────────────────┐
│  [LOGO: reversed white, top-left, 100px]  │  ← 16mm top margin
│                                           │
│     [HERO ILLUSTRATION: isometric kit]   │  ← 90mm tall area
│     (breadboard + LED circuit in action) │
│                                           │
│  Arduino Starter Kit                      │  ← H1, Space Grotesk 700 28pt, White
│  Build your first circuit in 15 minutes   │  ← Body, Inter 400 12pt, White/80%
│                                           │
│  ┌──────────────────────────────────┐     │  ← Builder Orange badge pill
│  │  Beginner · Ages 14+  · 5 Projects │   │    FF6B2B bg, White Inter 600 11pt
│  └──────────────────────────────────┘     │
└──────────────────────────────────────────┘
```

**Background:** Brand gradient `135deg, #0D7ECD → #00C896` (Circuit Blue to Spark Green), applied full-bleed.

**Hero illustration:** Isometric view of a half-size breadboard with a lit LED connected to the Arduino board. Illustration style: flat with soft depth shadows (brand illustration rules). Circuit traces use brand colors — Circuit Blue for power lines, Builder Orange for signal, Spark Green at the LED output node. Clean white background with soft drop shadow beneath components.

**Logo:** Reversed (white) variant, lockup format (symbol left + wordmark right), positioned top-left with 16mm margin from edges.

**Typography — Front Panel:**

| Element | Font | Size | Color | Notes |
|---------|------|------|-------|-------|
| Product name | Space Grotesk 700 | 28pt | #FFFFFF | "Arduino Starter Kit" |
| Tagline | Inter 400 | 12pt | rgba(255,255,255,0.85) | "Build your first circuit in 15 minutes." |
| Badge text | Inter 600 | 11pt | #FFFFFF | "Beginner · Ages 14+ · 5 Projects" |

**Badge spec:**
```
Background:   #FF6B2B (Builder Orange)
Border-radius: 20px (pill)
Padding:      5px 14px
Text:         White, Inter 600, 11pt, 0.01em tracking
```

---

### 1.3 Box Back Panel (240 × 180 mm)

**Layout:**

```
┌─────────────────────────────────────────────┐
│  What's in the box?          [component grid]│
│  ─────────────────                          │
│  ✦ Arduino Uno (USB-C)                      │
│  ✦ Half-size breadboard                     │
│  ✦ 65× jumper wires                         │
│  ✦ 25× LEDs (5 colors)                      │
│  ✦ 100× resistors (10 values)               │
│  ✦ 4× push buttons                          │
│  ✦ SG90 servo motor                         │
│  ✦ 16×2 LCD display + I2C module            │
│  ✦ Sensors: DHT11 temp, HC-SR04 ultrasonic, │
│    IR receiver                               │
│  ✦ USB-A to USB-C cable (1m)                │
│  ✦ Parts organizer case                     │
│                                             │
│  ─────────────────────────────────────────  │
│  "Everything is tested and ready. Plug in   │
│   and follow Step 1."                       │
│                                             │
│  [QR code: tutorial site]  arduinostarter.co│
│  [Barcode / UPC]            [Legal text]    │
└─────────────────────────────────────────────┘
```

**Background:** #FFFFFF (white)

**Section header "What's in the box?":**
- Space Grotesk 600, 16pt, #1A202C (Midnight)
- Underline: 2px Circuit Blue (#0D7ECD), 32px wide

**Component list:**
- Bullet marker: Circuit Blue circle (6px, filled) — not a checkmark (avoid implying verification before unbox)
- Font: Inter 400, 11pt, #2D3748 (Ink)
- Line height: 1.6

**Tagline callout:**
- Italic, Inter 400 11pt, #718096 (Slate)
- Surrounded by 1px #E2E8F0 border, 8px radius, 12px padding

**QR code spec:**
- 28mm × 28mm minimum size
- 4mm quiet zone
- Links to: `https://arduinostarter.co/start` (tutorial landing page)
- Label below QR: `arduinostarter.co/start`, Inter 600 9pt, #718096

**Barcode:**
- EAN-13 or UPC-A
- Position: bottom-right corner, 40mm × 28mm reserved area
- 5mm white margin around barcode

**Legal / regulatory block:**
- Inter 400, 7pt, #A0AEC0 (Neutral 400)
- Include: country of manufacture, CE/FCC/RoHS marks (placeholder boxes), recycling symbol, age rating icon (14+)
- Age rating icon: circle with "14+" in Inter 700 9pt, #FF6B2B border

---

### 1.4 Left Side Panel (70 × 180 mm)

**Content:** Feature callouts — vertical stack of 3 icons + text pairs.

```
[Circuit icon]      5 Guided
                    Projects

[Lightning icon]    No experience
                    required

[Star icon]         Video tutorials
                    included
```

**Background:** Circuit Blue (#0D7ECD)

**Icon:** Lucide rounded outline, 24px, white, centered above text

**Feature headline:** Space Grotesk 600, 11pt, White

**Feature body:** Inter 400, 9pt, rgba(255,255,255,0.8)

**Stack spacing:** 24px between items; vertically centered in panel.

---

### 1.5 Right Side Panel (70 × 180 mm)

**Content:** Tutorial URL + QR code + component count badge.

```
         [QR code — 36mm]

    Start building at:
    arduinostarter.co/start

    ┌──────────────────────┐
    │  11 components       │
    │  5 projects          │
    │  1 kit               │
    └──────────────────────┘
```

**Background:** #1A202C (Midnight)

**QR code:** 36mm × 36mm, white modules on Midnight background (invert), 4mm quiet zone

**URL text:** Inter 600, 9pt, #00C896 (Spark Green)

**Stats card:**
```
Background:   rgba(255,255,255,0.08)
Border:       1px solid rgba(255,255,255,0.15)
Border-radius: 8px
Padding:      10px 14px
Text:         Inter 600 10pt, White — numbers bold (Space Grotesk 700 14pt)
```

---

### 1.6 Top Panel (240 × 70 mm)

**Content:** Minimal — logo centered (reversed white) on Circuit Blue. Tagline below.

**Background:** Circuit Blue (#0D7ECD)

**Logo:** Reversed white lockup, centered. 120px wide.

**Tagline:** "Plug in. Build something." — Inter 400 10pt, rgba(255,255,255,0.75), centered below logo, 8px gap.

---

### 1.7 Bottom Panel (240 × 70 mm)

**Content:** Regulatory / compliance block + website.

**Background:** #FFFFFF

**Layout:** Three columns — compliance icons (left), URL (center), barcode (right). All elements vertically centered.

---

## 2. Quick-Start Card

### 2.1 Dimensions & Format

| Property | Value |
|----------|-------|
| Flat size | A5 (148 × 210 mm) |
| Folded size | A6 (148 × 105 mm) — horizontal fold |
| Stock | 350gsm silk coated, matte laminate |
| Print | CMYK 4-color both sides |
| Fold | Single score + fold, opens top-to-bottom |

**Placement:** Inserted face-up on top of all components inside box. First thing the buyer sees upon opening.

---

### 2.2 Quick-Start Card — Front (outer when folded)

**Background:** Brand gradient `135deg, #0D7ECD → #00C896`, full-bleed.

**Content:**

```
[Logo — reversed white, top-left]

Plug in. Open the tutorial.
Build your first circuit
in 15 minutes.

[Large QR code — 45mm]
arduinostarter.co/start

Step 1 is waiting for you →
```

**Typography:**

| Element | Font | Size | Color |
|---------|------|------|-------|
| Main headline | Space Grotesk 700 | 22pt | #FFFFFF |
| Sub-line | Inter 400 | 11pt | rgba(255,255,255,0.85) |
| URL | Inter 600 | 10pt | #FFFFFF |
| CTA line | Inter 600 | 10pt | #FFFFFF with → |

**QR code:** 45mm × 45mm, white modules, centered below headline. Quiet zone 4mm. Links to `https://arduinostarter.co/start`.

---

### 2.3 Quick-Start Card — Inside (open)

**Background:** #FFFFFF

**Layout:** Two columns (left panel: steps; right panel: what-you'll-build image)

**Left column — Steps:**

```
Get started in 3 steps

① Connect the USB cable
  Plug the USB-C end into your Arduino board
  and USB-A into your computer.

② Open the tutorial
  Scan the QR code or go to:
  arduinostarter.co/start

③ Follow Step 1 — Blink an LED
  The first project takes ~15 minutes.
  No experience needed.

─────────────────────────────
Stuck? We're here.
arduinostarter.co/support
```

**Step number style:**
```
Circle: 20px dia, Circuit Blue fill (#0D7ECD)
Number: Space Grotesk 700, 11pt, White, centered
```

**Step headline:** Inter 600, 11pt, #1A202C (Midnight)

**Step body:** Inter 400, 10pt, #2D3748 (Ink), line height 1.5

**Support line:**
```
Background:   #F5F7FA
Border-left:  3px solid #00C896
Padding:      8px 12px
Font:         Inter 600, 9pt, #4A5568 (Neutral 700)
Border-radius: 0 4px 4px 0
```

**Right column — What you'll build:**

Illustration panel showing 5 mini project icons stacked vertically with project names:

| # | Project | Icon |
|---|---------|------|
| 1 | Blink an LED | LED icon |
| 2 | Read a button | button icon |
| 3 | Spin a servo | motor icon |
| 4 | Measure temperature | sensor icon |
| 5 | Display text on LCD | LCD icon |

**Panel background:** #F5F7FA (Cloud)
**Panel border-radius:** 8px
**Project label:** Inter 600, 9pt, #2D3748
**Icon:** Custom electronics icon set, 20px, Circuit Blue

---

## 3. Component Checklist Card

### 3.1 Dimensions & Format

| Property | Value |
|----------|-------|
| Size | A5 (148 × 210 mm) — single flat card, no fold |
| Stock | 250gsm silk coated |
| Print | CMYK 4-color, single side (back plain white or brand footer) |
| Placement | Inserted behind Quick-Start card, face-up |

---

### 3.2 Checklist Card — Front

**Purpose:** Buyer confirms all components arrived before discarding packaging. Reduces support tickets.

**Header:**

```
[Logo lockup, left — 80px wide, color variant]

Check everything's here

"Open each bag and tick off the list.
 Everything was tested before packing."
```

**Header background:** #F5F7FA (Cloud)
**Header border-bottom:** 2px solid #E2E8F0

**Headline:** Space Grotesk 700, 18pt, #1A202C
**Sub-line:** Inter 400, 10pt, #718096 (Slate), italic

---

**Component grid — 2-column checklist:**

Each row:
```
□  [component illustration]  Component name         Qty
                              Short description
```

| Component | Qty | Short description |
|-----------|-----|-------------------|
| Arduino Uno board (USB-C) | 1 | The brain of your kit |
| Half-size breadboard | 1 | For wiring without solder |
| Jumper wires (assorted) | 65 | Colored, pre-cut M-M |
| LEDs (5mm, 5 colors) | 25 | Red · Yellow · Green · Blue · White, 5 each |
| Resistors (assorted) | 100 | 10 values, 1/4W — see color code on back |
| Push buttons | 4 | 12mm tactile momentary |
| SG90 servo motor | 1 | With 3 horn attachments |
| 16×2 LCD + I2C module | 1 | Pre-assembled, ready to wire |
| DHT11 temperature sensor | 1 | Temp + humidity |
| HC-SR04 ultrasonic sensor | 1 | Distance measurement |
| IR receiver + remote | 1 | Remote control projects |
| USB-A to USB-C cable (1m) | 1 | For power + programming |
| Parts organizer case | 1 | 16 compartments with labels |

**Checkbox spec:**
```
Size:         16 × 16px
Border:       2px solid #A0AEC0 (Neutral 400)
Border-radius: 4px (radius-sm)
Unchecked bg: #FFFFFF
```

**Component name:** Inter 600, 11pt, #1A202C
**Description:** Inter 400, 9pt, #718096 (Slate)
**Qty:** Inter 700, 11pt, #0D7ECD (Circuit Blue), right-aligned in column

**Divider between rows:** 1px solid #E2E8F0

---

**Card footer:**

```
Missing something? We'll make it right.
arduinostarter.co/support  |  support@arduinostarter.co

[Logo icon-only, 24px, Circuit Blue]
```

**Footer background:** #1A202C (Midnight)
**Footer text:** Inter 400, 9pt, #E2E8F0 (Mist)
**Footer link:** Inter 600, 9pt, #00C896 (Spark Green)

---

### 3.3 Checklist Card — Back (optional print)

If printing back side:
- Resistor color code chart (quick reference)
- Background: #F5F7FA
- Typography: Inter 400 9pt, #2D3748
- Resistor band color table with Circuit Blue accent on header row

---

## 4. Inner Layout Guide

### 4.1 Format

**Type:** Printed diagram on inside base flap of outer box (or on separate flat insert sheet)
**Preferred:** Print on inside of box base flap — saves insert cost, always visible during unpack

**If separate insert:**
| Property | Value |
|----------|-------|
| Size | A5 (148 × 210 mm) |
| Stock | 120gsm uncoated |
| Print | 1-color Circuit Blue + Black, one side |

---

### 4.2 Component Arrangement Inside Box

**Box interior: 234 × 174 × 67 mm (usable after board walls)**

```
Top layer (visible on open):
┌────────────────────────────────────────────┐
│  [Quick-Start card — landscape, full width] │  ← face up, first visible
│  [Checklist card — landscape, below]        │
└────────────────────────────────────────────┘

Middle layer:
┌──────────────┬─────────────────────────────┐
│              │                             │
│   Arduino    │    Half-size breadboard     │
│   board in   │    (in anti-static wrap)    │
│   anti-static│                             │
│   bag        │    Jumper wire bag          │
│              │    (sealed labeled bag)     │
│              │                             │
└──────────────┴─────────────────────────────┘

Bottom layer (beneath middle layer):
┌────────────────────────────────────────────┐
│  Parts organizer case (full width)          │
│  (pre-loaded with: LEDs, resistors,         │
│   buttons, servo, LCD, sensors)             │
│                                             │
│  USB cable coiled in anti-static bag        │
│  tucked beside organizer (right side)       │
└────────────────────────────────────────────┘
```

---

### 4.3 Layout Diagram Artwork Spec

**Style:** Top-down isometric-adjacent flat diagram. Components drawn as simplified silhouettes in Circuit Blue (#0D7ECD) outlines on white. Labels in Inter 600 9pt, Midnight.

**Annotations:**
- Numbered callout circles (1–13) linking to component names
- Callout circle: 14px dia, Circuit Blue fill, White number, Space Grotesk 700 9pt

**Header on diagram:**
```
How your kit is packed

"Components are arranged for easy access —
 storage case on the bottom, board on top."

Space Grotesk 600, 12pt / Inter 400 9pt
```

**Bag labeling visual:**
Each labeled bag illustrated with visible label text matching the labels spec from [ARD-42](/ARD/issues/ARD-42):
- Font on label: Inter 600 8pt
- Label background: matching component category color (from ARD-42 spec)

---

## 5. Print File Checklist

Before sending to printer, verify all files:

| File | Format | Notes |
|------|--------|-------|
| `BOX-DIELINE.ai` | AI (CC 2025) + PDF/X-4 | Dieline on separate layer, 3mm bleed |
| `BOX-FRONT.pdf` | PDF/X-4, 300 DPI | CMYK, spot UV layer separated |
| `BOX-BACK.pdf` | PDF/X-4, 300 DPI | Includes barcode placeholder |
| `BOX-SIDE-LEFT.pdf` | PDF/X-4, 300 DPI | Circuit Blue bg |
| `BOX-SIDE-RIGHT.pdf` | PDF/X-4, 300 DPI | Midnight bg |
| `BOX-TOP.pdf` | PDF/X-4, 300 DPI | Circuit Blue bg |
| `BOX-BOTTOM.pdf` | PDF/X-4, 300 DPI | White bg |
| `QUICKSTART-CARD.ai` | AI + PDF/X-4 | Both sides, fold mark on dieline layer |
| `CHECKLIST-CARD.ai` | AI + PDF/X-4 | Front (+ back if printing both sides) |
| `INNER-LAYOUT-DIAGRAM.ai` | AI + PDF/X-4 | 1-color or full-color |

**QR code validation:** All QR codes must be tested to resolve correctly before file delivery.

**Bleed & safety margins:**
- Bleed: 3mm all sides
- Safety margin (keep text/logos inside): 5mm from trim edge
- Barcode quiet zone: 5mm white minimum

---

## 6. Brand Compliance Checklist

- [ ] Logo uses only approved reversed-white or color variants per brand identity
- [ ] Only Circuit Blue, Builder Orange, Spark Green, Midnight, and neutrals used
- [ ] Space Grotesk for all headlines; Inter for all body copy
- [ ] Maximum 2 typefaces per panel
- [ ] Builder Orange used sparingly (only badge and age indicator)
- [ ] All QR codes resolve to correct URLs
- [ ] Tone of voice: no "simple", "easy", "just" — check all copy
- [ ] Age indicator visible on front and back
- [ ] CE/FCC/RoHS placeholders included on back and bottom
- [ ] Barcode area reserved (do not artwork over barcode zone)
- [ ] Inner layout matches actual component arrangement (verify with ops before print)
- [ ] Component list on back matches final BOM from [ARD-55](/ARD/issues/ARD-55)

---

## 7. Document Governance

| Field | Value |
|-------|-------|
| Owner | UI Designer |
| Reviewers | CEO, Operations |
| Version | 1.0 |
| Last Updated | 2026-04-01 |
| Location | `docs/PACKAGING-DESIGN.md` |
| Depends on | `docs/BRAND-IDENTITY.md`, `docs/DESIGN-SYSTEM.md` |
| Related issues | [ARD-63](/ARD/issues/ARD-63), [ARD-42](/ARD/issues/ARD-42), [ARD-44](/ARD/issues/ARD-44) |

---

_Arduino Starter Co — Packaging Design Spec v1.0_
