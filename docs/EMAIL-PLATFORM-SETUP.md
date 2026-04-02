# Email Marketing Platform Setup — Arduino Starter Co

> **Task:** [ARD-103](/ARD/issues/ARD-103) | **Deadline:** May 15, 2026 | **Platform:** Klaviyo (Mailchimp fallback)
>
> This document is the canonical configuration spec for all email sequences and automation flows. Use it as the step-by-step guide when setting up Klaviyo before launch.

---

## Table of Contents

1. [Account Setup](#1-account-setup)
2. [Shopify Integration](#2-shopify-integration)
3. [Audience & List Setup](#3-audience--list-setup)
4. [Sequence Overview](#4-sequence-overview)
5. [Sequence 1 — Launch Announcement](#5-sequence-1--launch-announcement)
6. [Sequence 2 — Non-Buyer Nurture](#6-sequence-2--non-buyer-nurture)
7. [Sequence 3 — Post-Purchase Onboarding](#7-sequence-3--post-purchase-onboarding)
8. [Sequence 4 — NPS Trigger Emails](#8-sequence-4--nps-trigger-emails)
9. [Sequence 5 — Review Request](#9-sequence-5--review-request)
10. [Global Suppression Rules](#10-global-suppression-rules)
11. [UTM Parameters](#11-utm-parameters)
12. [Testing Checklist](#12-testing-checklist)
13. [Launch Day Checklist](#13-launch-day-checklist)
14. [Blockers & Dependencies](#14-blockers--dependencies)

---

## 1. Account Setup

**Action required:** Board must create the Klaviyo account. This step cannot be performed by agents.

### Steps

1. Go to [klaviyo.com](https://www.klaviyo.com) and create a new account.
2. Account name: **Arduino Starter Co**
3. Primary domain: `arduinostarterco.com`
4. From address: `hello@arduinostarterco.com`
5. From name: **Team at Arduino Starter Co** (use "Arduino Starter Co" as default sender name fallback)
6. Set timezone: **America/Los_Angeles (PT)** — all scheduled sends use PT unless specified
7. Enable double opt-in: **No** — waitlist subscribers are already opted in via the signup form

### DNS / Deliverability Setup

Before sending any email, complete these in your domain registrar (Cloudflare or similar):

| Record | Type | Purpose |
|--------|------|---------|
| `klaviyo._domainkey.arduinostarterco.com` | CNAME | DKIM signing (Klaviyo provides the value) |
| `_dmarc.arduinostarterco.com` | TXT | `v=DMARC1; p=none; rua=mailto:hello@arduinostarterco.com` |
| SPF record update | TXT | Add `include:klaviyo.com` to existing SPF record |

Klaviyo's UI will show a "Deliverability" panel with exact values — use those.

---

## 2. Shopify Integration

> **Blocker:** [ARD-29](/ARD/issues/ARD-29) (Shopify storefront) is pending credentials. The Klaviyo ↔ Shopify integration requires the store to be live with API access. Complete steps 1–3 and 5 independently; return to this section when ARD-29 is unblocked.

### When ARD-29 is unblocked

1. In Klaviyo: Go to **Integrations → Shopify**
2. Enter Shopify store URL: `arduinostarterco.myshopify.com` (or custom domain)
3. Authorize the Klaviyo app from Shopify admin
4. Enable these sync settings:
   - ✅ Sync customers to Klaviyo lists
   - ✅ Track Shopify events (placed order, fulfilled order, cancelled order)
   - ✅ Back-fill historical customer data
5. Verify that these Klaviyo metrics are populating:
   - `Placed Order`
   - `Fulfilled Order` (delivery confirmation trigger)
   - `Ordered Product`
   - `Refunded Order`

### Purchase suppression

Once Shopify is connected, create a **Klaviyo Segment** called `Purchased — Any`:

```
Any time Placed Order → count → at least 1 → over all time
```

This segment is used to suppress non-buyer nurture and launch re-engagement emails.

---

## 3. Audience & List Setup

### Lists

| List Name | Source | Use |
|-----------|--------|-----|
| `Waitlist — Pre-Launch` | Import from [ARD-59](/ARD/issues/ARD-59) | Launch announcement sequence |
| `Customers` | Shopify sync (auto-managed) | Post-purchase onboarding, NPS, review request |
| `Newsletter` | Signup form on site | General marketing |

### Waitlist Import (ARD-59)

1. Export the waitlist CSV from the source referenced in [ARD-59](/ARD/issues/ARD-59)
2. Required columns: `email`, `first_name` (fallback: "there"), `signup_date`
3. Import to the `Waitlist — Pre-Launch` list in Klaviyo
4. Tag all imported records: `waitlist-original`
5. Segment post-import: create a segment `Waitlist — Converted` for anyone who later places an order (used for reporting)

### Segments to Create

| Segment | Definition | Used In |
|---------|------------|---------|
| `Purchased — Any` | Placed Order ≥ 1 | Suppress from nurture sequences |
| `Non-buyer — Day 3+` | Waitlist + no purchase after Day 3 | Nurture enrollment |
| `Tutorial — Project 1 Completed` | Custom event `project_completed` where `projectNumber = 1` | Onboarding Email 2 suppress |
| `Tutorial — Any Page Visited` | Custom event `tutorial_page_viewed` | Onboarding Email 4 suppress |
| `NPS Detractors` | Custom event `nps_submitted` where score 0–6 | Detractor routing |
| `Nurture Enrolled 2026` | Tagged `nurture-sequence-2026` | Reporting |

---

## 4. Sequence Overview

| # | Sequence | Emails | Trigger | Source |
|---|----------|--------|---------|--------|
| 1 | Launch Announcement | 3 | Manual — May 15, 9 AM PT | [ARD-68](/ARD/issues/ARD-68) |
| 2 | Non-Buyer Nurture | 4 | 48h post-launch + no purchase | [ARD-88](/ARD/issues/ARD-88) |
| 3 | Post-Purchase Onboarding | 5 | Order confirmation | [ARD-28](/ARD/issues/ARD-28) |
| 4 | NPS Triggers | 3 | Day 14 delivery / Project 3 complete / Day 60 purchase | [ARD-100](/ARD/issues/ARD-100) |
| 5 | Review Request | 1 | Day 14 post-delivery | Written below |

**Total:** 16 emails across 5 automated or manually triggered flows.

---

## 5. Sequence 1 — Launch Announcement

**Source:** [ARD-68](/ARD/issues/ARD-68)
**Type:** Campaign (manually scheduled, not a flow)
**Audience:** `Waitlist — Pre-Launch` list
**Send from:** `hello@arduinostarterco.com` / "Team at Arduino Starter Co"

### Campaign Setup in Klaviyo

1. Create a **Campaign** called `Launch Announcement — May 2026`
2. Segment: `Waitlist — Pre-Launch`
3. Create 3 sub-campaigns (one per email) — each is a separate Klaviyo campaign with its own scheduled send

### Email 1 — "It's here"

| Field | Value |
|-------|-------|
| Campaign name | `Launch - Email 1 - It's here` |
| Send date | May 15, 2026 — **9:00 AM PT** |
| Audience | Full `Waitlist — Pre-Launch` list |
| Subject A | `Your Arduino kit is live — first batch available now` |
| Subject B | `We built this for you. It's finally here.` |
| A/B split | 50/50 |
| Preview text | `The wait is over. Here's how to get yours.` |

**Body:** See [ARD-68 Email 1](/ARD/issues/ARD-68) for full copy.

Key elements:
- CTA button: "Get your kit — $59 →" linking to `https://arduinostarterco.com/shop`
- UTM: `utm_source=email&utm_medium=launch&utm_campaign=launch-2026&utm_content=email1`

### Email 2 — "In case you missed it"

| Field | Value |
|-------|-------|
| Campaign name | `Launch - Email 2 - In Case You Missed It` |
| Send date | May 18, 2026 — **10:00 AM PT** |
| Audience | `Waitlist — Pre-Launch` **minus** `Purchased — Any` |
| Subject A | `First kits are out in the world — here's what's happening` |
| Subject B | `[First Name], did you see this?` |
| A/B split | 50/50 |
| Preview text | `Real builders, real results — here's what happened in the first 72 hours.` |

**Body:** See [ARD-68 Email 2](/ARD/issues/ARD-68) for full copy.

Key CTA: "Get your kit — $59 →" with UTM `utm_content=email2`

### Email 3 — "Last chance"

| Field | Value |
|-------|-------|
| Campaign name | `Launch - Email 3 - Last Chance` |
| Send date | May 22, 2026 — **9:00 AM PT** |
| Audience | `Waitlist — Pre-Launch` **minus** `Purchased — Any` |
| Subject A | `First batch is almost gone` |
| Subject B | `Last call, [First Name] — first run closes soon` |
| A/B split | 50/50 |
| Preview text | `Down to the last units. Here's what to know before they're gone.` |

**Body:** See [ARD-68 Email 3](/ARD/issues/ARD-68) for full copy (includes FAQ section).

---

## 6. Sequence 2 — Non-Buyer Nurture

**Source:** [ARD-88](/ARD/issues/ARD-88)
**Type:** Flow (automated)
**Flow name in Klaviyo:** `Non-Buyer Nurture — Launch 2026`

### Enrollment Trigger

```
Flow trigger: Metric → "Received Email" (Launch Email 1)
  AND Profile property: Not in segment "Purchased — Any"
  Delay: 48 hours after trigger
```

### Exit Condition

```
Exit immediately if: Placed Order (any) — check at each step before sending
```

### Flow Structure

```
[Trigger: Received Launch Email 1 + 48h delay]
  └─ Email 1 "What are people building?" (Day 3)
       └─ [Check: Placed Order? → Yes: EXIT] → 4-day delay
            └─ Email 2 "Still on the fence?" (Day 7)
                 └─ [Check: Placed Order? → Yes: EXIT] → 7-day delay
                      └─ Email 3 "Here's exactly what week 1 looks like" (Day 14)
                           └─ [Check: Placed Order? → Yes: EXIT] → 7-day delay
                                └─ Email 4 "A quick inventory update" (Day 21)
                                     └─ [EXIT]
```

### Email Specs

| Email | Day | Subject A | Subject B | Preview Text |
|-------|-----|-----------|-----------|--------------|
| 1 | Day 3 | `First projects are in — here's what people built this week` | `Your kit is still here. Here's what it looks like in action.` | `Real builds from the first 48 hours — you're up next.` |
| 2 | Day 7 | `Still on the fence? Let's clear that up.` | `The most common question we get — answered` | `No experience needed. Here's everything you actually need to know.` |
| 3 | Day 14 | `Here's what you'll actually learn in week 1` | `A sneak peek at Project 2 — Button + LED` | `We pulled out a page from the tutorials so you can see exactly what you're getting into.` |
| 4 | Day 21 | `First batch update: [X] kits remaining` | `We're getting close — a note on inventory and pricing` | `The first batch is nearly gone. Here's where things stand.` |

**Email 4 note:** Requires a dynamic inventory field from Shopify. In Klaviyo, use: `{{ event.extra.inventory_remaining }}` or a static placeholder if not yet available.

**UTM for all nurture emails:** `utm_source=email&utm_medium=nurture&utm_campaign=launch-2026&utm_content=email[1-4]`

Tag all enrolled subscribers: `nurture-sequence-2026`

Full copy: [ARD-88 Email Nurture Sequence](/ARD/issues/ARD-88)

---

## 7. Sequence 3 — Post-Purchase Onboarding

**Source:** [ARD-28](/ARD/issues/ARD-28)
**Type:** Flow (automated)
**Flow name in Klaviyo:** `Post-Purchase Onboarding — 5-Email Drip`

### Enrollment Trigger

```
Flow trigger: Metric → "Placed Order" (Shopify)
```

> Requires Shopify integration ([ARD-29](/ARD/issues/ARD-29)). Load content now; activate trigger after integration is live.

### Suppression Rules

| Email | Suppress If |
|-------|-------------|
| Email 2 (Day 3) | Profile in segment `Tutorial — Project 1 Completed` |
| Email 3 (Day 7) | Apply variant A/B based on completion signal |
| Email 4 (Day 14) | Profile in segment `Tutorial — Any Page Visited` OR `Tutorial — Project 1 Completed` |
| Email 5 (Day 30) | Unsubscribed only |

### Flow Structure

```
[Trigger: Placed Order]
  └─ 1-hour delay
       └─ Email 1 "Your 30-minute first project is waiting" (Day 1)
            └─ 2-day delay
                 └─ [Check: Project 1 complete? → Yes: SKIP Email 2] → Email 2 "The mistake most beginners make" (Day 3)
                      └─ 4-day delay
                           └─ Email 3 "Ready for Project 2?" (Day 7)
                                └─ [Variant: A (completed) / B (not completed)]
                                     └─ 7-day delay
                                          └─ [Check: Tutorial visited? → Yes: SKIP Email 4] → Email 4 "Still in the box?" (Day 14)
                                               └─ 16-day delay
                                                    └─ Email 5 "You're not a beginner anymore" (Day 30)
                                                         └─ [EXIT]
```

### Email Specs

| Email | Day | Send Timing | Subject | Preview Text |
|-------|-----|-------------|---------|--------------|
| 1 | Day 1 | 1h post-order | `Your 30-minute first project is waiting` | `Everything you need is in the box. Here's where to start.` |
| 2 | Day 3 | Scheduled | `The mistake most beginners make (and how to avoid it)` | `If your LED didn't light up, this is probably why.` |
| 3A | Day 7 | Scheduled | `You built something. Here's what comes next.` | `Project 2 is a temperature-controlled fan. Here's the preview.` |
| 3B | Day 7 | Scheduled | `Ready when you are.` | `Project 1 takes 30 minutes. Tonight might be the night.` |
| 4 | Day 14 | Scheduled | `Still in the box? Here's a 10-minute version.` | `No pressure. But here's the easiest possible way to start.` |
| 5 | Day 30 | Scheduled | `One month in — you're not a beginner anymore.` | `Tell us how it went. Also: what's next for you.` |

**Open questions before activating (from ARD-28):**
- [ ] Does tutorial platform emit `project_completed` events? (Required for Email 2 & 3 suppression)
- [ ] Does a 10-minute quickstart page exist at `/learn/quickstart`? (Required for Email 4)
- [ ] Is NPS survey live before Day 30 emails begin? (Coordinate with [ARD-37](/ARD/issues/ARD-37))
- [ ] Early access list URL for intermediate kit (Email 5)

Full copy: [ARD-28 Onboarding Sequence](/ARD/issues/ARD-28)

---

## 8. Sequence 4 — NPS Trigger Emails

**Source:** [ARD-100](/ARD/issues/ARD-100)
**Type:** 3 separate flows
**Flow names:** `NPS — T1 Delivery Check`, `NPS — T2 Tutorial Milestone`, `NPS — T3 Retention Check`

### T1 — Delivery Check

| Field | Value |
|-------|-------|
| Trigger | `Fulfilled Order` metric (Shopify) |
| Delay | 14 days after fulfilled |
| Audience | All customers |
| Subject | `Quick question about your Arduino kit` |
| Preview text | `Takes 60 seconds. Helps us make it better.` |
| Survey URL | `https://arduinostarterco.com/nps` |

### T2 — Tutorial Milestone

| Field | Value |
|-------|-------|
| Trigger | Custom event `project_completed` where `projectNumber = 3` |
| Delay | 0 (send same day) |
| Audience | Active learners (event-triggered) |
| Subject | `Quick question about your Arduino kit` |
| Preview text | `Three projects in — we'd love to hear how it's going.` |
| Survey URL | `https://arduinostarterco.com/nps?source=milestone` |

### T3 — Retention Check

| Field | Value |
|-------|-------|
| Trigger | `Placed Order` metric |
| Delay | 60 days after order |
| Audience | All customers |
| Subject | `Quick question about your Arduino kit` |
| Preview text | `Two months in — quick question about your experience.` |
| Survey URL | `https://arduinostarterco.com/nps?source=day60` |

### Email Body (all three NPS emails)

```
Hey [First Name],

Quick question — takes about 60 seconds.

[How likely are you to recommend Arduino Starter Kit to a friend or colleague? →]
(0 = Not at all likely, 10 = Extremely likely)

Your answer helps us improve the kit for the next person who opens the box.

— The Arduino Starter Co Team

P.S. Whatever your score — if anything went wrong or felt unfair, reply here. We read every one.
```

### Detractor Automation (Score 0–6)

When an NPS response comes in with score 0–6:
1. Tag customer record: `nps-detractor`
2. Suppress from all promotional emails for 30 days
3. Route to Customer Success queue (via Klaviyo → Gorgias webhook or Slack notification)
4. Trigger: automated email from CS within 24h

---

## 9. Sequence 5 — Review Request

**Type:** Flow (automated)
**Flow name in Klaviyo:** `Review Request — Post-Delivery`

### Trigger

```
Flow trigger: Metric → "Fulfilled Order" (Shopify)
Delay: 14 days
```

### Suppression

- Do not send if tagged `nps-detractor` (score 0–6 within prior 30 days)
- Do not send if customer has already left a review (track via custom event `review_submitted`)

### Email Spec

| Field | Value |
|-------|-------|
| Subject | `How's your Arduino kit going? (Quick question)` |
| Preview text | `Takes 2 minutes. And it helps other beginners find what you found.` |
| CTA | "Leave a review →" → product review page |

### Email Body

```
Hey [First Name],

It's been two weeks since your kit arrived — we hope you've had a chance to
build something.

If you have, we'd love to hear about it. A quick review helps other beginners
figure out if this is the right kit for them.

[Leave a review →]  (link to review platform — Shopify, Google, or Amazon depending on where they purchased)

Takes about 2 minutes. And if you ran into any issues at all — a missing
component, a confusing step, anything — just reply here instead. We'd rather
hear it directly.

— The Arduino Starter Co Team
```

**Design notes:**
- If purchased on Amazon (tracked via order tag), link to Amazon review page
- If purchased on Shopify directly, link to Shopify review app (e.g., Judge.me)
- Do not use "simple" or "easy" per brand voice guidelines

---

## 10. Global Suppression Rules

Configure these in Klaviyo's **Suppression Lists** and **Flow Filters**:

| Condition | Action |
|-----------|--------|
| Unsubscribed | Suppress from all flows and campaigns (Klaviyo handles automatically) |
| Hard bounce | Suppress immediately; do not retry |
| `nps-detractor` tag + <30 days | Suppress from all promotional campaigns |
| `Purchased — Any` | Suppress from launch announcement Emails 2 & 3, all nurture emails |
| `Tutorial — Project 1 Completed` | Suppress onboarding Email 2 and Email 4 |
| `Tutorial — Any Page Visited` | Suppress onboarding Email 4 |

---

## 11. UTM Parameters

Apply these UTM parameters to all links in every email:

| Sequence | `utm_medium` | `utm_campaign` | `utm_content` |
|----------|-------------|----------------|---------------|
| Launch Announcement | `launch` | `launch-2026` | `email1`, `email2`, `email3` |
| Non-Buyer Nurture | `nurture` | `launch-2026` | `email1`–`email4` |
| Post-Purchase Onboarding | `onboarding` | `post-purchase-2026` | `day1`, `day3`, `day7`, `day14`, `day30` |
| NPS Emails | `nps` | `feedback-2026` | `t1-delivery`, `t2-milestone`, `t3-retention` |
| Review Request | `review` | `review-2026` | `day14` |

All emails use: `utm_source=email`

---

## 12. Testing Checklist

Complete before activating any sequence:

### Account & Deliverability
- [ ] Klaviyo account created and verified
- [ ] DKIM, SPF, DMARC records live and validated in Klaviyo's deliverability panel
- [ ] From address `hello@arduinostarterco.com` verified
- [ ] Test email sends from Klaviyo to internal addresses succeed

### Sequence 1 — Launch Announcement
- [ ] All 3 emails loaded into Klaviyo campaigns
- [ ] A/B subject lines configured (50/50 split)
- [ ] Audience segments applied (Email 2 & 3 exclude buyers)
- [ ] Send dates and times set (May 15 / 18 / 22 at 9–10 AM PT)
- [ ] Test send to 5 internal addresses; check mobile rendering (iPhone 13 + Samsung Galaxy)
- [ ] CTA buttons link to correct URLs with UTM params
- [ ] Unsubscribe link working

### Sequence 2 — Non-Buyer Nurture
- [ ] Flow created with correct trigger (48h after launch email, no purchase)
- [ ] Exit condition active (purchase = exit immediately)
- [ ] All 4 emails loaded with correct delays (Day 3, 7, 14, 21)
- [ ] `nurture-sequence-2026` tag applied on enrollment
- [ ] Test flow with internal test profile; verify send order and timing
- [ ] Mobile rendering check on all 4 emails

### Sequence 3 — Post-Purchase Onboarding
- [ ] Flow created (trigger: Placed Order — hold until Shopify live)
- [ ] All 5 emails loaded with correct delays
- [ ] Suppression filters active for Emails 2 and 4
- [ ] Variant A/B set up for Email 3
- [ ] Test order placed through Shopify test mode triggers flow
- [ ] All emails tested on mobile

### Sequence 4 — NPS Triggers
- [ ] 3 separate flows created (T1 Delivery, T2 Tutorial, T3 Retention)
- [ ] T1 and T3 trigger on `Fulfilled Order` with correct delay
- [ ] T2 trigger on `project_completed` custom event (confirm engineering emits this)
- [ ] NPS survey link live and loading correctly
- [ ] Detractor webhook or Slack notification active

### Sequence 5 — Review Request
- [ ] Flow created with correct trigger (14d post-Fulfilled Order)
- [ ] Suppression filter: skip `nps-detractor` tagged customers
- [ ] Review platform URL confirmed (Shopify, Google, or Amazon routing)
- [ ] Test send and mobile render check

---

## 13. Launch Day Checklist

**May 15, 2026 — 9:00 AM PT**

- [ ] Klaviyo account active with sending reputation established (send 1 week of warmup)
- [ ] Shopify integration live and event sync verified
- [ ] Waitlist imported to `Waitlist — Pre-Launch` list
- [ ] All 5 sequences loaded and tested
- [ ] Launch Email 1 campaign set to send at 9:00 AM PT — verify scheduled send in Klaviyo 24h before
- [ ] Monitor Klaviyo dashboard from 9 AM: open rate, click rate, bounce rate (target: <2% bounce)
- [ ] Post-purchase onboarding flow active (will fire as soon as first orders come in)
- [ ] Non-buyer nurture flow on standby — will begin enrolling 48h after Email 1 sends (May 17)

---

## 14. Blockers & Dependencies

| Blocker | Depends On | Status |
|---------|-----------|--------|
| Klaviyo account creation | Board action | **Pending — requires board** |
| Shopify ↔ Klaviyo integration | [ARD-29](/ARD/issues/ARD-29) Shopify credentials | **Blocked on ARD-29** |
| Waitlist import | [ARD-59](/ARD/issues/ARD-59) waitlist export | Confirm ARD-59 status |
| Tutorial completion events | Engineering to emit `project_completed` events | Confirm with CTO |
| NPS survey URL live | [ARD-37](/ARD/issues/ARD-37) | Verify ARD-37 status |
| Review platform (Judge.me or equivalent) | Engineering setup | Confirm with CTO |
| 10-minute quickstart page | Engineering to build `/learn/quickstart` | Reference ARD-28 |

---

*Last updated: 2026-04-02 | Owner: CMO | Source issues: [ARD-28](/ARD/issues/ARD-28), [ARD-68](/ARD/issues/ARD-68), [ARD-88](/ARD/issues/ARD-88), [ARD-100](/ARD/issues/ARD-100)*
