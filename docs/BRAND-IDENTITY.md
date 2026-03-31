# Arduino Starter Co — Brand Identity

> **Version 1.0** | Created 2026-03-31 | Owned by UI Designer

---

## Brand Vision

Arduino Starter Co exists to remove every barrier between "I want to try this" and "I built something that works." Our brand radiates encouragement and competence — we're the knowledgeable friend who sits next to you, says "you can totally do this," and stays with you until the LED blinks.

**Brand Promise:** Every curious beginner can unbox our kit and build their first working project in under 30 minutes.

**Brand Personality Traits:**
- **Encouraging** — We celebrate every small win. First blink? Huge deal.
- **Clear** — Plain language, no jargon, no prerequisites assumed.
- **Energetic** — Making things is exciting. Our brand matches that energy.
- **Trustworthy** — We've done the research so beginners don't have to.
- **Maker-spirited** — We respect the hands-on, build-it-yourself ethos.

---

## Color Palette

| Role        | Name            | Hex       | RGB                  | Usage                                              |
|-------------|-----------------|-----------|----------------------|----------------------------------------------------|
| Primary     | Circuit Blue    | `#0D7ECD` | rgb(13, 126, 205)    | Primary CTAs, links, key UI elements, headings     |
| Secondary   | Builder Orange  | `#FF6B2B` | rgb(255, 107, 43)    | Accents, highlights, secondary CTAs, badges        |
| Accent      | Spark Green     | `#00C896` | rgb(0, 200, 150)     | Success states, completion indicators, tags        |
| Neutral 50  | Cloud           | `#F5F7FA` | rgb(245, 247, 250)   | Page backgrounds, card backgrounds                 |
| Neutral 200 | Mist            | `#E2E8F0` | rgb(226, 232, 240)   | Borders, dividers, input backgrounds               |
| Neutral 500 | Slate           | `#718096` | rgb(113, 128, 150)   | Secondary text, placeholders, captions             |
| Neutral 800 | Ink             | `#2D3748` | rgb(45, 55, 72)      | Body text, primary text                            |
| Neutral 900 | Midnight        | `#1A202C` | rgb(26, 32, 44)      | Headings, nav backgrounds                          |
| Error       | Alert Red       | `#E53E3E` | rgb(229, 62, 62)     | Error states, destructive actions                  |
| Success     | Spark Green     | `#00C896` | rgb(0, 200, 150)     | Success messages, completion states                |
| Warning     | Caution Amber   | `#D69E2E` | rgb(214, 158, 46)    | Warning states, cautionary notices                 |

### Color Usage Rules

- **Circuit Blue** is the brand anchor. Use it for primary actions and navigation.
- **Builder Orange** is the energizer — use it sparingly to draw attention to key moments (e.g., "Add to Cart", sale badges, step completions).
- **Spark Green** is exclusively for positive/success states and completion milestones.
- Never use more than two brand colors in a single UI section.
- Maintain a minimum contrast ratio of **4.5:1** for body text (WCAG AA compliance).
- Dark mode: Invert Neutral scale (use Midnight as background, Cloud as text). Primary/Secondary/Accent remain the same.

### Brand Gradient

For hero sections and marketing materials only:

```
Linear gradient: 135deg, #0D7ECD → #00C896
```

---

## Typography

| Role         | Typeface         | Weight       | Size (desktop) | Size (mobile) | Usage                                    |
|--------------|------------------|--------------|----------------|---------------|------------------------------------------|
| Display      | Space Grotesk    | 700 (Bold)   | 48–72px        | 36–48px       | Hero headlines, landing page H1          |
| Heading 1    | Space Grotesk    | 700 (Bold)   | 36px           | 28px          | Page titles, section headers             |
| Heading 2    | Space Grotesk    | 600 (SemiBold)| 28px          | 22px          | Sub-section titles                       |
| Heading 3    | Space Grotesk    | 600 (SemiBold)| 22px          | 18px          | Card titles, feature labels              |
| Body Large   | Inter            | 400 (Regular)| 18px           | 16px          | Lead paragraphs, feature descriptions    |
| Body         | Inter            | 400 (Regular)| 16px           | 15px          | General body copy                        |
| Body Small   | Inter            | 400 (Regular)| 14px           | 13px          | Captions, helper text, metadata          |
| Label        | Inter            | 600 (SemiBold)| 13px          | 13px          | Button text, form labels, tags           |
| Code         | JetBrains Mono   | 400 (Regular)| 14px           | 13px          | Code snippets, terminal output, pinouts  |

### Typography Rules

- **Space Grotesk** is for all headings — it's geometric and technical yet warm.
- **Inter** is for all body copy — maximum readability across screen sizes.
- **JetBrains Mono** is required for any code, pin numbers, file names, or command-line content.
- Line height: 1.5× for body, 1.2× for headings.
- Letter spacing: -0.02em for Display/H1, 0.01em for Labels.
- Never use more than two typefaces in a single layout.
- Font loading: serve via Google Fonts with `display=swap`.

---

## Logo Usage

### Logo Variants

| Variant         | Usage                                                               |
|-----------------|---------------------------------------------------------------------|
| Primary (color) | Default usage on white/light backgrounds                            |
| Reversed (white)| On Circuit Blue, dark, or photographic backgrounds                  |
| Monochrome dark | Single-color print, emboss, silk-screen applications                |
| Icon-only       | App icons, favicons, social avatars — minimum 32×32px               |
| Wordmark-only   | Horizontal layouts where the icon would be too small                |

### Logo Construction

- **Symbol**: A stylized circuit-path forming an "A" — six nodes connected by traces, representing the kit's core components (power, sensor, LED, motor, logic, output). The traces terminate in rounded nodes to feel approachable rather than harsh.
- **Wordmark**: "Arduino Starter Co" in Space Grotesk 700, all sentence case.
- **Lockup**: Symbol left, wordmark right. Minimum clear space = 1× the height of the symbol on all sides.

### Logo Do's

- Use the approved color variant on matching backgrounds.
- Maintain minimum clear space at all times.
- Minimum display size: 80px wide for the full lockup, 24px for the icon-only.
- Use the reversed variant when the background contrast requires it.

### Logo Don'ts

- Do NOT recolor the logo with non-brand colors.
- Do NOT stretch, skew, rotate, or add drop shadows to the logo.
- Do NOT place the logo on busy backgrounds without a clear-space container.
- Do NOT recreate the logo in different typefaces.
- Do NOT combine the logo with other brand names or symbols.
- Do NOT use the full lockup below 80px — switch to icon-only.

---

## Iconography

### Style: Rounded Outline

- **Style**: Outline icons with rounded corners and terminals (not sharp).
- **Stroke weight**: 1.5px at 24px grid, scaled proportionally.
- **Grid**: 24×24px base grid with 2px padding inset (20px effective draw area).
- **Corner radius**: 2px minimum on all rectangular paths.
- **Alignment**: Icons are always optically centered within their bounding box.

### Icon Sets

- **Primary set**: Lucide Icons (open-source, consistent rounded-outline style).
- **Supplementary**: Custom electronics/Arduino-specific icons (breadboard, resistor, LED, sensor, motor, USB port) — same style rules apply.
- **Never mix** Lucide with Material, Heroicons, or other icon sets in the same UI.

### Icon Usage Rules

- Use icons to support text, not replace it. Always pair with a label unless space-constrained AND the icon is universally understood (e.g., close ×).
- Icon color inherits from surrounding text or explicitly set to a brand color.
- Never resize icons below 16×16px.
- Interactive icons (buttons) must have a touch target minimum of 44×44px.

---

## Tone of Voice

### Brand Voice Pillars

| Pillar           | What it means                                          | Example                                                     |
|------------------|--------------------------------------------------------|-------------------------------------------------------------|
| **Encouraging**  | Celebrate curiosity. Normalize not knowing.            | "You've never done this before — that's exactly the point." |
| **Clear**        | One idea per sentence. No jargon without explanation.  | "A resistor limits current. Think of it like a water valve." |
| **Direct**       | Get to the point. Respect the reader's time.           | "Open the kit. Plug in the board. Follow Step 1."           |
| **Warm**         | Human, not corporate. Conversational, not dry.         | "Nice work — that LED just blinked because of *your* code." |
| **Precise**      | Accurate about electronics. Never hand-wavy.           | "Use the 220Ω resistor (red-red-brown bands) for this step."|

### Vocabulary Guidelines

**Use:**
- "build", "make", "create", "wire up" — active maker language
- "let's", "you'll", "you've" — inclusive second person
- "step", "project", "circuit" — clear, neutral technical terms
- "beginner", "first-timer", "curious" — normalizing language

**Avoid:**
- "simple", "easy", "just" — condescending and sets up failure anxiety
- "obviously", "clearly", "of course" — implies knowledge the reader may not have
- "utilize", "leverage", "synergy" — corporate buzzwords
- "hack", "rig", "kluge" — sounds risky to a beginner

### On-Brand vs. Off-Brand Examples

| Situation         | Off-Brand                                              | On-Brand                                                     |
|-------------------|--------------------------------------------------------|--------------------------------------------------------------|
| Tutorial step     | "Simply connect the LED to pin 13."                    | "Connect the long leg of the LED to pin 13."                 |
| Error message     | "Invalid configuration."                               | "Something's off with your wiring — double-check Step 3."   |
| Success state     | "Operation completed."                                 | "It works! Your first circuit is live."                      |
| Product copy      | "Leverage our curated component ecosystem."            | "Everything you need is in the box — tested and ready."      |
| Support message   | "Please consult documentation for assistance."         | "Stuck? We're here. Hit reply and we'll figure it out."      |

### Content Formatting Rules

- Use numbered lists for sequential steps, bullet lists for options/features.
- Bold **key component names** on first use in a tutorial.
- Use code formatting for `pin numbers`, `code variables`, and `file names`.
- Diagrams always accompany wiring instructions — text alone is insufficient.
- Tutorial section headers follow the pattern: "Step N — [Action Verb] the [Component]" (e.g., "Step 3 — Wire the Sensor").

---

## Photography & Illustration Style

### Photography

- **Subject focus**: Hands building, components in context, finished projects glowing/running.
- **Lighting**: Bright, natural or warm studio light. No harsh shadows.
- **Background**: Clean white or neutral. Avoid clutter.
- **People**: Diverse ages 14-35, casual clothing. Show genuine focus and delight — no forced smiles.
- **Components**: Hero shots of components should be macro, sharp, on white with soft shadow.

### Illustration

- Flat-style with slight depth cues (soft shadows, layered components).
- Circuit diagrams use the brand color palette: Circuit Blue for power lines, Builder Orange for signal lines, Spark Green for ground.
- Breadboard diagrams are isometric, with component color matching real-world appearance.
- Avoid photorealistic renders — they're harder to update and can overwhelm beginners.

---

## Brand Application Examples

### Primary CTA Button
```
Background: #0D7ECD (Circuit Blue)
Text: #FFFFFF, Inter 600, 14px, 0.01em tracking
Padding: 12px 24px
Border radius: 8px
Hover: #0A6DB0 (10% darker)
```

### Secondary CTA Button
```
Background: transparent
Border: 2px solid #0D7ECD
Text: #0D7ECD, Inter 600, 14px
Padding: 10px 22px
Border radius: 8px
Hover: background #EBF5FF
```

### Step Completion Badge
```
Background: #E6FFF8 (Spark Green 10%)
Border: 1px solid #00C896
Text: #00A077, Inter 600, 13px
Icon: check circle (Lucide), #00C896
Padding: 4px 10px
Border radius: 20px (pill)
```

### Code Block
```
Background: #1A202C (Midnight)
Text: #E2E8F0 (Mist), JetBrains Mono 400, 14px
Border-left: 4px solid #0D7ECD
Padding: 16px 20px
Border radius: 0 8px 8px 0
```

---

## Document Governance

| Field       | Value                            |
|-------------|----------------------------------|
| Owner       | UI Designer (ARD agent)          |
| Reviewers   | CEO                              |
| Version     | 1.0                              |
| Last Updated| 2026-03-31                       |
| Location    | `docs/BRAND-IDENTITY.md`         |
| Related     | `docs/DESIGN-SYSTEM.md` (TBD)    |

All updates to this document require a comment in [ARD-3](/ARD/issues/ARD-3) before merging.

---

_Arduino Starter Co — Brand Identity v1.0_
