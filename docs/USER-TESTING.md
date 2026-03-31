# Arduino Starter Co — Usability Evaluation

> **Version 1.0** | Conducted 2026-03-31 | Owned by UX Researcher
> Related issue: [ARD-14](/ARD/issues/ARD-14)

---

## Overview

This document captures the initial usability evaluation of the Arduino Starter Co product website and unboxing/onboarding experience. The evaluation is anchored to the company's core goal:

> **"Every curious beginner can unbox our kit and build their first working project in under 30 minutes."**

---

## Target User Personas

### Persona 1 — "First-Timer Frannie"

| Attribute       | Detail                                                                 |
|-----------------|------------------------------------------------------------------------|
| Age             | 14                                                                     |
| Role            | High school student, curious about electronics                        |
| Tech literacy   | Comfortable with phones and tablets; no coding or electronics background |
| Motivation      | Wants to make something cool for a school project or to impress friends |
| Fear            | "I'll mess something up and break it"                                  |
| Success metric  | Completes Project 1 independently, feels proud                         |

### Persona 2 — "Gift-Giver Gary"

| Attribute       | Detail                                                                 |
|-----------------|------------------------------------------------------------------------|
| Age             | 42                                                                     |
| Role            | Parent buying for a 13-year-old child                                  |
| Tech literacy   | Moderate consumer tech user; no electronics background                 |
| Motivation      | Wants an educational gift that will actually get used, not shelved     |
| Fear            | "The kid will open it, get confused, and give up"                      |
| Success metric  | Confidently purchases; reads enough to feel the kit is appropriate     |

### Persona 3 — "Dropout Dave"

| Attribute       | Detail                                                                 |
|-----------------|------------------------------------------------------------------------|
| Age             | 27                                                                     |
| Role            | Software developer who tried an Elegoo kit 6 months ago and gave up    |
| Tech literacy   | High on software; zero practical electronics knowledge                 |
| Motivation      | Wants to revisit hardware, needs better guidance than last time        |
| Fear            | "The documentation will be just as bad as the last kit"                |
| Success metric  | Believes this experience will be meaningfully different within 5 minutes of landing |

---

## Test Plan

### Goals

1. Assess whether the homepage communicates the core value proposition within 5 seconds.
2. Evaluate the "30-minute first project" promise — does the product experience structurally support this claim?
3. Identify friction points in the critical path: **Land → Understand → Buy → Unbox → Build → Succeed**.
4. Audit the current UI against accessibility and brand standards.

### Scenarios

| # | Scenario | Persona | Success Criteria |
|---|----------|---------|-----------------|
| S1 | Land on homepage; within 5 seconds describe what this product does and who it's for | Frannie, Gary | Accurate description without prompting |
| S2 | Decide whether to buy based on landing page alone | Gary | Reaches intent to purchase or identifies missing info |
| S3 | Find the tutorial/project guide from the homepage | Frannie | Locates without needing back navigation |
| S4 | Complete Step 1 of Project 1 using the kit documentation | Frannie, Dave | Correct wiring setup within 10 minutes |
| S5 | Recover from a wiring error using provided guidance | Frannie | Self-corrects without external search |

### Methods

- **Heuristic analysis**: Apply Nielsen's 10 usability heuristics to the current homepage and projected tutorial flow.
- **Task flow walkthrough**: Simulate the critical user path as each persona.
- **Accessibility audit**: Check against WCAG AA and Design System requirements.

---

## Evaluation Findings

### 1. Heuristic Analysis

Evaluated against Nielsen's 10 Usability Heuristics applied to the current homepage (`src/app/page.tsx`) and the brand/design system.

#### H1 — Visibility of System Status

**Finding**: The homepage has a single hero section with no navigation, progress indicators, or feedback mechanisms. Users cannot tell where they are in a funnel, whether a purchase is in progress, or how many steps a tutorial has.

- **Severity**: Major
- **Affected scenario**: S3, S4, S5
- **Recommendation**: Add a progress indicator to tutorial flows (Design System §6.8 already defines this component — implement it). Add a persistent nav with clear section anchors.

#### H2 — Match Between System and Real World

**Finding**: Hero copy ("Build your first circuit") is strong and on-brand. The "Get the Kit" CTA is clear. However, `#kit` is a dead anchor — clicking it does not scroll to any kit section, suggesting the product page is incomplete.

- **Severity**: Critical
- **Affected scenario**: S2
- **Recommendation**: Implement the kit section below the hero. This is the primary conversion surface and is currently missing.

#### H3 — User Control and Freedom

**Finding**: No navigation or back links exist on the current page. Users who land mid-funnel (e.g., from a social ad) have no way to explore other sections.

- **Severity**: Major
- **Affected scenario**: S1, S2
- **Recommendation**: Implement the Top Nav Bar defined in Design System §6.6. Include logo (home link), "How it works", "Projects", "Get the Kit" CTA.

#### H4 — Consistency and Standards

**Finding**: The design system and brand identity are well-defined and internally consistent. The homepage correctly uses brand fonts (Space Grotesk, Inter), the hero gradient, and Builder Orange for the primary CTA. Consistency is strong for what exists.

- **Severity**: Minor (no current violation — proactive note)
- **Recommendation**: Maintain adherence as more pages are added. Flag for re-audit at each major feature addition.

#### H5 — Error Prevention

**Finding**: Tutorial content does not yet exist to evaluate. Based on competitor analysis, the highest error rate for beginners occurs at wiring steps — particularly polarity (LED orientation) and resistor value selection.

- **Severity**: Major (projected, not observed)
- **Recommendation**: All wiring diagrams must include polarity callouts. Resistors should show color-band identification alongside ohm values. Pre-empt the top-3 errors in each project step with an inline "Common mistake" callout.

#### H6 — Recognition Over Recall

**Finding**: The "Get the Kit" CTA requires users to recall intent and scroll. There is no persistent CTA visible when scrolling. For Gift-Giver Gary who may read for several minutes, the purchase action is easily lost.

- **Severity**: Major
- **Affected scenario**: S2
- **Recommendation**: Add a sticky "Get the Kit" button in the nav bar (already specified in Design System §6.6). Consider a secondary CTA in every major content section.

#### H7 — Flexibility and Efficiency of Use

**Finding**: No accelerator paths exist for users like Dropout Dave who want to skip introductory content. No "I already know the basics" mode or section jump.

- **Severity**: Minor
- **Recommendation**: On the tutorial page, add a "Jump to project" link above the introductory text for returning or advanced users.

#### H8 — Aesthetic and Minimalist Design

**Finding**: The homepage is admirably minimal. The hero is clean, uncluttered, and communicates a single message. The brand gradient is appropriately used (hero only, per brand rules).

- **Severity**: No issue — positive finding.
- **Recommendation**: Maintain this discipline as the page grows. Resist pressure to add social proof widgets, chat bubbles, and banners that compete with the hero message.

#### H9 — Help Users Recognize, Diagnose, and Recover from Errors

**Finding**: No error states, recovery flows, or support links are visible anywhere. In a tutorial context, when a beginner's LED doesn't light up, the current experience provides zero in-context help.

- **Severity**: Critical (projected for tutorial phase)
- **Recommendation**: Every project step should have an expandable "It's not working?" section with the 3 most common failure modes and fixes. This is the single highest-leverage UX investment for the "30-minute first project" promise.

#### H10 — Help and Documentation

**Finding**: No FAQ, help section, or documentation links are surfaced anywhere on the page.

- **Severity**: Major
- **Affected scenario**: S5
- **Recommendation**: Add a "Need help?" footer link and a contextual help anchor on each tutorial step. A simple FAQ covering the top-5 beginner questions would reduce support volume and increase first-success rate.

---

### 2. Task Flow Evaluation

**Simulated critical path**: Land → Understand → Buy → Unbox → Build → Succeed

#### Land

**Current state**: Homepage exists with hero, headline, and single CTA.

**Observations**:
- 5-second test (S1): The headline "Build your first circuit" and subheading clearly communicate the product type. "Under 30 minutes" is visible and differentiating. Passes for Frannie and Gary.
- Dropout Dave will need a second signal ("Better than the kit that confused you") — current copy doesn't address the "returning failure" persona.
- **Finding**: Landing communicates what (Arduino kit) and the promise (30 min), but not *why this one is different* from Elegoo, Arduino Official, etc.
- **Severity**: Major — differentiation gap for the most valuable persona (Dropout Dave).
- **Recommendation**: Add a single line below the hero subheading: "Unlike kits that ship a manual, we guide you step by step — from unboxing to your first blinking LED."

#### Understand

**Current state**: No content exists below the hero. The `#kit` anchor leads nowhere.

**Observations**:
- Gary cannot evaluate whether this kit is age-appropriate, what's included, or why it's worth $95+.
- Frannie cannot preview the projects to decide if it looks interesting.
- **Finding**: The "Understand" phase is completely absent. This is the most critical gap between current state and launch readiness.
- **Severity**: Critical
- **Recommendation**: Prioritize building these three sections in order: (1) "What's in the box" component list with icons, (2) "What you'll build" — 3 project preview cards, (3) "How it works" — 3-step onboarding process. These three sections are the minimum viable landing page for conversion.

#### Buy

**Current state**: "Get the Kit" CTA exists but leads to `#kit` (no destination).

**Observations**:
- No pricing is visible. Gary's primary qualification question ("Is this worth it?") is unanswered.
- No trust signals: no reviews, no "100% happiness guarantee", no return policy mention.
- **Severity**: Critical
- **Recommendation**: Wire the CTA to a Shopify product page. Above the CTA, add price and one trust signal ("Free returns within 30 days" or similar).

#### Unbox → Build → Succeed

**Current state**: No tutorial content exists to evaluate.

**Observations**:
- Competitor analysis confirms this is the most common failure point for all comparable kits.
- The Design System already defines Step Cards (§6.3), Progress Indicators (§6.8), Code Blocks (§6.5), and Alert/Feedback patterns (§6.7) — all the components needed for a world-class tutorial exist in spec but not in code.
- **Finding**: Tutorial infrastructure is well-designed on paper. The gap is implementation.
- **Severity**: Critical (blocks the core product promise)
- **Recommendation**: First tutorial (Project 1 — blink an LED) must be delivered before any paid acquisition. It is the product's primary proof point.

---

### 3. Accessibility Audit

Evaluated against Design System §11 Accessibility Checklist and WCAG AA.

| Check | Status | Detail |
|-------|--------|--------|
| Color contrast — body text on backgrounds | Pass | Ink (#2D3748) on Cloud (#F5F7FA): ratio ~10.3:1. Exceeds AA. |
| Color contrast — white text on hero gradient | Needs verification | White on Circuit Blue (#0D7ECD): ~4.6:1 (passes AA). White at gradient endpoint Spark Green (#00C896): ~2.0:1. **Fails AA for body text.** |
| Color contrast — "Get the Kit" button | Fail | White on Builder Orange (#FF6B2B): ~3.1:1. Passes AA for large text (≥18px bold) but fails for the current 14px label text (requires 4.5:1). |
| Keyboard navigation | Not testable (no interactive elements beyond one link) | Implement focus ring (`shadow-focus`) on all interactive elements when added. |
| Images have alt text | N/A — no images yet | Required rule: establish alt text policy before adding product photos. |
| `<html lang="en">` | Pass | Set correctly in `layout.tsx`. |
| Semantic heading structure | Partial | `<h1>` present. No `<h2>`+ yet — ensure logical hierarchy when sections are added. |
| Reduced motion | Not implemented | Add `prefers-reduced-motion: reduce` handling per Design System §8 before tutorial animations ship. |
| Font loading | Pass | `display: swap` used correctly in `layout.tsx`. |
| Touch target sizes | Not testable | CTA appears to be ≥44px based on padding (py-3 = 12px + text height ≈ 44px). Verify with DevTools. |

**Critical accessibility fix required before launch:**
- The hero gradient end-color (Spark Green `#00C896`) produces insufficient contrast for white text. Either end the gradient before it reaches full Spark Green, or ensure white text is never displayed over the green portion of the gradient.
- The "Get the Kit" button fails contrast at 14px label size. Either increase text to ≥18px bold (large text threshold) or darken Builder Orange to ~`#D45A20` (preserves hue while achieving 4.5:1 against white).

---

## Findings Summary

### Critical Findings (blocks task completion or has legal/compliance risk)

| ID | Finding | Heuristic / Area | Recommendation |
|----|---------|-----------------|----------------|
| C1 | `#kit` anchor is dead — primary CTA leads nowhere | H2 | Implement kit section or wire to Shopify product page |
| C2 | "Understand" phase entirely absent — no product details, no project previews | Task Flow | Build "What's in the box", "What you'll build", "How it works" sections |
| C3 | No tutorial content — core "30-minute" promise cannot be experienced | Task Flow | Ship Project 1 (blink LED) tutorial before paid acquisition |
| C4 | In-context error recovery absent — when LED doesn't light, user is on their own | H9 | Add "It's not working?" step-level help to every tutorial step |
| C5 | Hero gradient contrast failure — white text on Spark Green end ≈ 2.0:1 (WCAG fail) | Accessibility | Fix gradient or restrict text to portion meeting 4.5:1 |
| C6 | CTA button contrast failure — white on Builder Orange at 14px ≈ 3.1:1 | Accessibility | Darken button color or increase text size to large-text threshold |

### Major Findings (significant friction; degrades conversion or completion)

| ID | Finding | Area | Recommendation |
|----|---------|------|----------------|
| M1 | No navigation — users can't explore or return | H3 | Implement Top Nav Bar (Design System §6.6) |
| M2 | No progress indicator in tutorial flows | H1 | Implement progress bar (Design System §6.8) |
| M3 | No persistent CTA when scrolling | H6 | Sticky nav with "Get the Kit" button |
| M4 | No pricing visible | Task Flow — Buy | Show price near CTA with a trust signal |
| M5 | Differentiation gap for "Dropout Dave" persona | Task Flow — Land | Add copy distinguishing from guide-poor competitors |
| M6 | No FAQ or help documentation | H10 | Add "Need help?" footer + FAQ covering top-5 beginner questions |
| M7 | No error prevention in wiring steps | H5 | Add polarity callouts and "Common mistake" inline warnings |

### Minor Findings (low friction; cosmetic or nice-to-have)

| ID | Finding | Area | Recommendation |
|----|---------|------|----------------|
| m1 | No "skip to content" link for keyboard users | Accessibility | Add visually-hidden skip link before `<nav>` |
| m2 | No `prefers-reduced-motion` implementation | Accessibility | Add before tutorial animations ship |
| m3 | No accelerator path for experienced users | H7 | "Jump to project" link in tutorial intros |
| m4 | No heading hierarchy below `<h1>` | Accessibility | Ensure logical `<h2>` / `<h3>` structure as sections are added |

---

## Prioritized Recommendations

**P0 — Pre-launch blockers (fix before any paid acquisition):**
1. Fix CTA destination (C1) — wire "Get the Kit" to product page.
2. Fix hero contrast (C5, C6) — WCAG compliance is non-negotiable.
3. Build Understand sections (C2) — without these, conversion is impossible.
4. Ship Project 1 tutorial (C3) — the product exists to deliver this experience.

**P1 — Launch quality (fix within first 2 weeks):**
5. Add in-context error recovery to all tutorial steps (C4).
6. Implement Top Nav Bar (M1).
7. Add pricing + trust signal near CTA (M4).
8. Add differentiation copy for returning-failure persona (M5).

**P2 — Post-launch improvements:**
9. Sticky nav CTA (M3).
10. FAQ / help documentation (M6).
11. Tutorial progress indicator (M2).
12. Wiring error prevention callouts (M7).
13. Accessibility polish: skip link, reduced-motion (m1, m2).

---

## Follow-Up Issues to Create

Based on critical and major findings, the following issues should be created:

| Priority | Title | Finding Refs |
|----------|-------|-------------|
| Critical | Fix hero gradient contrast for WCAG AA compliance | C5 |
| Critical | Fix "Get the Kit" CTA button contrast at 14px | C6 |
| Critical | Wire "Get the Kit" CTA to Shopify product page | C1 |
| Critical | Build homepage product sections: "What's in the box", "What you'll build", "How it works" | C2 |
| Critical | Author and publish Project 1 tutorial: Blink an LED | C3 |
| Critical | Design and implement in-context error recovery for tutorial steps | C4 |
| High | Implement Top Nav Bar per Design System §6.6 | M1 |
| High | Add pricing visibility and trust signal to homepage | M4 |
| High | Add differentiation copy targeting "returned failure" persona | M5 |

---

## Document Governance

| Field       | Value                            |
|-------------|----------------------------------|
| Owner       | UX Researcher                    |
| Reviewers   | CEO                              |
| Version     | 1.0                              |
| Last Updated| 2026-03-31                       |
| Location    | `docs/USER-TESTING.md`           |
| Source task | [ARD-14](/ARD/issues/ARD-14)     |

_Update this document after each significant product change or new round of user interviews._
