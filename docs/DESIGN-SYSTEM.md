# Arduino Starter Co — Design System

> **Version 1.0** | Created 2026-03-31 | Owned by UI Designer
> Derived from [BRAND-IDENTITY.md](./BRAND-IDENTITY.md). When conflicts exist, brand identity wins.

---

## 1. Color Tokens

### Palette

| Token               | Hex       | RGB                  | Name            |
|---------------------|-----------|----------------------|-----------------|
| `color-primary`     | `#0D7ECD` | rgb(13, 126, 205)    | Circuit Blue    |
| `color-secondary`   | `#FF6B2B` | rgb(255, 107, 43)    | Builder Orange  |
| `color-accent`      | `#00C896` | rgb(0, 200, 150)     | Spark Green     |
| `color-neutral-50`  | `#F5F7FA` | rgb(245, 247, 250)   | Cloud           |
| `color-neutral-100` | `#EDF2F7` | rgb(237, 242, 247)   | —               |
| `color-neutral-200` | `#E2E8F0` | rgb(226, 232, 240)   | Mist            |
| `color-neutral-400` | `#A0AEC0` | rgb(160, 174, 192)   | —               |
| `color-neutral-500` | `#718096` | rgb(113, 128, 150)   | Slate           |
| `color-neutral-700` | `#4A5568` | rgb(74, 85, 104)     | —               |
| `color-neutral-800` | `#2D3748` | rgb(45, 55, 72)      | Ink             |
| `color-neutral-900` | `#1A202C` | rgb(26, 32, 44)      | Midnight        |
| `color-error`       | `#E53E3E` | rgb(229, 62, 62)     | Alert Red       |
| `color-warning`     | `#D69E2E` | rgb(214, 158, 46)    | Caution Amber   |
| `color-success`     | `#00C896` | rgb(0, 200, 150)     | Spark Green     |

### Semantic Aliases

| Semantic Token              | Resolves To             | Purpose                       |
|-----------------------------|-------------------------|-------------------------------|
| `color-text-primary`        | `color-neutral-800`     | Body text                     |
| `color-text-secondary`      | `color-neutral-500`     | Helper text, captions         |
| `color-text-heading`        | `color-neutral-900`     | Headings                      |
| `color-text-inverse`        | `color-neutral-50`      | Text on dark backgrounds      |
| `color-text-link`           | `color-primary`         | Hyperlinks                    |
| `color-bg-page`             | `color-neutral-50`      | Page background                |
| `color-bg-card`             | `#FFFFFF`               | Card / surface background     |
| `color-bg-code`             | `color-neutral-900`     | Code block background         |
| `color-border`              | `color-neutral-200`     | Default borders, dividers     |
| `color-border-focus`        | `color-primary`         | Focus rings                   |
| `color-interactive-primary` | `color-primary`         | Primary buttons, CTAs         |
| `color-interactive-hover`   | `#0A6DB0`               | Primary button hover state    |
| `color-feedback-success-bg` | `#E6FFF8`               | Success message background    |
| `color-feedback-error-bg`   | `#FFF5F5`               | Error message background      |
| `color-feedback-warning-bg` | `#FFFFF0`               | Warning message background    |

### Hero Gradient

```css
background: linear-gradient(135deg, #0D7ECD 0%, #00C896 100%);
```

Used exclusively in hero sections and marketing banners.

### Contrast Requirements

- Body text on backgrounds: **≥ 4.5:1** (WCAG AA)
- Large text (≥ 18px bold / ≥ 24px regular): **≥ 3:1** (WCAG AA)
- Interactive elements (focus ring, button borders): **≥ 3:1** against adjacent color

---

## 2. Typography

### Type Scale

| Token           | Typeface       | Weight | Size (desktop) | Size (mobile) | Line Height | Letter Spacing |
|-----------------|----------------|--------|----------------|---------------|-------------|----------------|
| `type-display`  | Space Grotesk  | 700    | 64px           | 40px          | 1.15        | -0.02em        |
| `type-h1`       | Space Grotesk  | 700    | 36px           | 28px          | 1.2         | -0.02em        |
| `type-h2`       | Space Grotesk  | 600    | 28px           | 22px          | 1.25        | -0.01em        |
| `type-h3`       | Space Grotesk  | 600    | 22px           | 18px          | 1.3         | 0              |
| `type-body-lg`  | Inter          | 400    | 18px           | 16px          | 1.6         | 0              |
| `type-body`     | Inter          | 400    | 16px           | 15px          | 1.5         | 0              |
| `type-body-sm`  | Inter          | 400    | 14px           | 13px          | 1.5         | 0              |
| `type-label`    | Inter          | 600    | 13px           | 13px          | 1.4         | 0.01em         |
| `type-code`     | JetBrains Mono | 400    | 14px           | 13px          | 1.6         | 0              |

### Font Loading (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?
  family=Space+Grotesk:wght@600;700&
  family=Inter:wght@400;600&
  family=JetBrains+Mono:wght@400&
  display=swap" rel="stylesheet">
```

### Typography Rules

- Max 2 typefaces in any single layout.
- Use `type-code` for all pin numbers, variable names, filenames, and CLI commands.
- Tutorial step headings follow: **"Step N — [Verb] the [Component]"**

---

## 3. Spacing Scale

Base unit: `4px`

| Token        | Value  | Use Case                                        |
|--------------|--------|-------------------------------------------------|
| `space-1`    | 4px    | Icon padding, tight inline gaps                 |
| `space-2`    | 8px    | Between label and input, icon + label gap       |
| `space-3`    | 12px   | Internal card padding (compact)                 |
| `space-4`    | 16px   | Standard component padding, section gaps (sm)   |
| `space-5`    | 20px   | Card padding, list item spacing                 |
| `space-6`    | 24px   | Section internal spacing                        |
| `space-8`    | 32px   | Section-to-section gap, modal padding           |
| `space-10`   | 40px   | Large section gap                               |
| `space-12`   | 48px   | Page section separation                         |
| `space-16`   | 64px   | Hero vertical padding                           |
| `space-20`   | 80px   | Page-level vertical rhythm (desktop)            |

### Layout Grid

| Breakpoint | Name     | Min Width | Columns | Gutter | Margin |
|------------|----------|-----------|---------|--------|--------|
| `bp-sm`    | Mobile   | 0px       | 4       | 16px   | 16px   |
| `bp-md`    | Tablet   | 768px     | 8       | 24px   | 32px   |
| `bp-lg`    | Desktop  | 1024px    | 12      | 24px   | 48px   |
| `bp-xl`    | Wide     | 1280px    | 12      | 32px   | auto   |

Max content width: **1200px**, centered.

---

## 4. Border Radius

| Token       | Value  | Usage                                    |
|-------------|--------|------------------------------------------|
| `radius-sm` | 4px    | Badges, tags, code block corners         |
| `radius-md` | 8px    | Buttons, inputs, cards                   |
| `radius-lg` | 12px   | Modals, drawers, large cards             |
| `radius-xl` | 16px   | Feature panels, hero containers          |
| `radius-pill`| 9999px| Pills, step badges, toggle switches      |

---

## 5. Elevation (Shadows)

| Token          | Value                                              | Usage                   |
|----------------|----------------------------------------------------|-------------------------|
| `shadow-sm`    | `0 1px 3px rgba(0,0,0,0.08)`                       | Cards at rest           |
| `shadow-md`    | `0 4px 12px rgba(0,0,0,0.10)`                      | Dropdowns, popovers     |
| `shadow-lg`    | `0 8px 24px rgba(0,0,0,0.12)`                      | Modals                  |
| `shadow-focus` | `0 0 0 3px rgba(13,126,205,0.35)`                  | Focus state ring        |

---

## 6. Component Patterns

### 6.1 Buttons

#### Primary Button

```
Background:   color-primary (#0D7ECD)
Text:         #FFFFFF, type-label (Inter 600, 13px)
Padding:      12px 24px
Border-radius: radius-md (8px)
Min-height:   44px  (touch target)
Hover:        background color-interactive-hover (#0A6DB0)
Active:       background #085E99
Disabled:     background color-neutral-200, text color-neutral-500
Focus:        shadow-focus
```

#### Secondary Button

```
Background:   transparent
Border:       2px solid color-primary
Text:         color-primary, type-label
Padding:      10px 22px
Border-radius: radius-md (8px)
Min-height:   44px
Hover:        background #EBF5FF
Active:       background #D6EEFF
Disabled:     border color-neutral-200, text color-neutral-500
```

#### Destructive Button

```
Background:   color-error (#E53E3E)
Text:         #FFFFFF, type-label
Padding:      12px 24px
Border-radius: radius-md (8px)
Min-height:   44px
Hover:        background #C53030
```

#### Ghost / Icon Button

```
Background:   transparent
Text/Icon:    color-neutral-700
Padding:      8px
Border-radius: radius-md (8px)
Min touch target: 44×44px
Hover:        background color-neutral-100
```

---

### 6.2 Inputs

#### Text Input

```
Background:   #FFFFFF
Border:       1px solid color-border (color-neutral-200)
Border-radius: radius-md (8px)
Padding:      10px 14px
Font:         type-body (Inter 400, 16px)
Color:        color-text-primary

Focus:
  Border:     color-border-focus (color-primary)
  Shadow:     shadow-focus

Error state:
  Border:     color-error
  Helper text: color-error, type-body-sm

Disabled:
  Background: color-neutral-100
  Text:       color-neutral-400
  Cursor:     not-allowed
```

#### Select / Dropdown

Same dimensions as text input. Uses a custom chevron icon (Lucide `ChevronDown`, 16px, color-neutral-500) replacing the native arrow.

#### Checkbox

```
Size:         18×18px
Border:       2px solid color-border
Border-radius: radius-sm (4px)
Checked:
  Background: color-primary
  Checkmark:  #FFFFFF Lucide `Check` icon
Focus:        shadow-focus
```

#### Radio Button

```
Size:         18×18px (circle)
Border:       2px solid color-border
Selected:
  Outer ring: color-primary
  Inner dot:  color-primary, 8px dia
```

#### Form Label

```
Font:       type-label (Inter 600, 13px)
Color:      color-text-primary
Gap to input: space-2 (8px)
```

#### Helper / Error Text

```
Font:   type-body-sm (Inter 400, 14px)
Gap above: space-2 (8px)
```

---

### 6.3 Cards

#### Standard Card

```
Background:   color-bg-card (#FFFFFF)
Border:       1px solid color-border
Border-radius: radius-lg (12px)
Shadow:       shadow-sm
Padding:      space-6 (24px)

Hover (interactive cards):
  Shadow:     shadow-md
  Border:     color-primary (1px)
```

#### Feature Card (Kit Component Highlight)

```
Background:   color-neutral-50
Border:       none
Border-radius: radius-xl (16px)
Padding:      space-8 (32px)
```

#### Step Card (Tutorial Step)

```
Background:   #FFFFFF
Border-left:  4px solid color-primary
Border-radius: 0 radius-md radius-md 0
Padding:      space-5 (20px) space-6 (24px)
Step number:  type-h3, color-primary
```

---

### 6.4 Badges & Tags

#### Step Completion Badge

```
Background:   color-feedback-success-bg (#E6FFF8)
Border:       1px solid color-accent (#00C896)
Text:         #00A077, type-label (13px)
Icon:         Lucide `CheckCircle`, 14px, color-accent
Padding:      4px 10px
Border-radius: radius-pill
```

#### Category Tag

```
Background:   color-neutral-100
Text:         color-neutral-700, type-label (13px)
Padding:      4px 8px
Border-radius: radius-pill
```

#### Alert Badge (Sale / New)

```
Background:   color-secondary (#FF6B2B)
Text:         #FFFFFF, type-label (13px)
Padding:      3px 8px
Border-radius: radius-pill
```

---

### 6.5 Code Block

```
Background:   color-bg-code (color-neutral-900 / #1A202C)
Text:         color-neutral-200 (#E2E8F0), type-code (JetBrains Mono 400, 14px)
Border-left:  4px solid color-primary
Padding:      space-4 (16px) space-5 (20px)
Border-radius: 0 radius-md radius-md 0
Overflow:     horizontal scroll on mobile
```

Syntax highlighting palette (minimal):
- Keywords: `#9DECF9` (cyan)
- Strings: `#68D391` (green)
- Numbers / literals: `#FBD38D` (amber)
- Comments: `color-neutral-500` (Slate)

---

### 6.6 Navigation

#### Top Nav Bar

```
Background:   #FFFFFF
Height:       64px (desktop), 56px (mobile)
Border-bottom: 1px solid color-border
Shadow:       shadow-sm (on scroll)
Logo:         left-aligned, 120px wide lockup
Nav links:    type-label, color-text-primary, spacing-4 gap
CTA Button:   Primary button "Get the Kit" (right-aligned)
```

#### Mobile Nav (Hamburger Drawer)

```
Trigger:      Lucide `Menu` icon, 24px, color-neutral-800
Drawer:       full-width, slides from top, background #FFFFFF
Links:        stacked, type-body-lg, 56px min-height touch rows
CTA:          full-width Primary button at bottom of drawer
```

---

### 6.7 Alerts / Feedback Messages

| Type    | Background             | Border Left         | Icon                     | Text Color          |
|---------|------------------------|---------------------|--------------------------|---------------------|
| Success | `#E6FFF8`              | 4px `color-accent`  | `CheckCircle` (green)    | `#276749`           |
| Error   | `#FFF5F5`              | 4px `color-error`   | `XCircle` (red)          | `#9B2C2C`           |
| Warning | `#FFFFF0`              | 4px `color-warning` | `AlertTriangle` (amber)  | `#744210`           |
| Info    | `#EBF5FF`              | 4px `color-primary` | `Info` (blue)            | `#1A365D`           |

Padding: `space-4 (16px)`. Border-radius: `radius-md (8px)`. Font: `type-body`.

---

### 6.8 Progress Indicator (Tutorial Progress Bar)

```
Track:        Background color-neutral-200, height 8px, border-radius radius-pill
Fill:         Background color-primary (or gradient), animated via CSS width transition
Step dots:    16px circles, filled color-primary (completed), color-neutral-200 (upcoming)
Step labels:  type-body-sm below dots
```

---

## 7. Iconography

- **Library**: Lucide Icons (`lucide-react` or CDN SVG)
- **Style**: Outline, rounded terminals, 1.5px stroke
- **Sizes**: 16px (inline), 20px (default), 24px (prominent), 32px (feature)
- **Color**: Inherits from text or set explicitly to a brand color token
- **Touch targets**: Minimum 44×44px for interactive icons (use transparent padding)
- **Do NOT mix** with Material Icons, Heroicons, or FontAwesome in the same view

### Custom Electronics Icons (required spec for illustrator)

Each custom icon follows the same 24×24px grid and 1.5px stroke rules:

| Icon        | Depicts                                           |
|-------------|---------------------------------------------------|
| breadboard  | Rectangular grid with rows of holes, DIP notch    |
| resistor    | Zig-zag (ANSI) with 2 leads                       |
| led         | Triangle + bar (diode symbol) with light rays     |
| sensor      | Chip with 6 legs and a small sensor aperture      |
| motor       | Circle with M, two leads                          |
| usb-port    | Rectangle with USB trident                        |

---

## 8. Motion & Animation

| Property     | Value                                              | Usage                         |
|--------------|----------------------------------------------------|-------------------------------|
| Duration SM  | 100ms                                              | State changes (hover, active) |
| Duration MD  | 200ms                                              | Entering elements (tooltips)  |
| Duration LG  | 300ms                                              | Modals, drawers, slide-ins    |
| Easing       | `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out)      | All transitions               |
| No motion    | Respect `prefers-reduced-motion: reduce` — disable all transitions except opacity-only |

---

## 9. Dark Mode

Dark mode is defined as a CSS media query layer. Token overrides:

| Light Token            | Dark Override             |
|------------------------|---------------------------|
| `color-bg-page`        | `color-neutral-900`       |
| `color-bg-card`        | `color-neutral-800`       |
| `color-text-primary`   | `color-neutral-100`       |
| `color-text-secondary` | `color-neutral-400`       |
| `color-text-heading`   | `color-neutral-50`        |
| `color-border`         | `color-neutral-700`       |

Primary, Secondary, and Accent colors remain unchanged in dark mode.

---

## 10. Responsive Behavior Rules

- Mobile-first CSS: base styles target `bp-sm`, override up.
- Tap targets: all interactive elements ≥ 44×44px.
- Images: use `width: 100%; height: auto;` with `max-width` where needed.
- Typography: use fluid sizing between breakpoints (clamp preferred for display/H1).
- Touch devices: remove `:hover` styles that cause sticky states; use `:active` instead.

---

## 11. Accessibility Checklist

- [ ] All color pairs meet WCAG AA contrast (4.5:1 body, 3:1 large text).
- [ ] All interactive elements are keyboard focusable with visible focus ring (`shadow-focus`).
- [ ] Form inputs have associated `<label>` elements (not just placeholders).
- [ ] Images have descriptive `alt` text (empty alt for decorative images).
- [ ] Icons used alone have `aria-label` or are `aria-hidden` with adjacent text.
- [ ] Modals trap focus and have `role="dialog"`, `aria-modal="true"`.
- [ ] Error messages are associated with inputs via `aria-describedby`.
- [ ] Color is never the sole means of conveying information.

---

## 12. Document Governance

| Field        | Value                                           |
|--------------|-------------------------------------------------|
| Owner        | UI Designer                                     |
| Reviewers    | CEO                                             |
| Version      | 1.0                                             |
| Last Updated | 2026-03-31                                      |
| Location     | `docs/DESIGN-SYSTEM.md`                         |
| Derived from | `docs/BRAND-IDENTITY.md`                        |

Updates require a comment in [ARD-8](/ARD/issues/ARD-8) before merging.

---

_Arduino Starter Co — Design System v1.0_
