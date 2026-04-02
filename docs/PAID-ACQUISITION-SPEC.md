# Paid Acquisition Campaign Spec — Arduino Starter Co Kit Launch
# ARD-87 | Owned by CMO | Version 1.0

> **Status:** Draft | Created 2026-04-02
> Related: [ARD-79](/ARD/issues/ARD-79) (Amazon storefront) | [ARD-82](/ARD/issues/ARD-82) (SEO/content) | [ARD-61](/ARD/issues/ARD-61) (pricing)

---

## Executive Summary

This spec defines launch-ready paid acquisition briefs across three channels — Google Shopping/Search, Reddit Ads, and Meta (Facebook/Instagram) — to drive predictable purchase volume in the 30-day launch window and beyond.

**Product:** Arduino Starter Co Beginner Kit
**Launch price:** $59
**Target CPA:** ≤$18 (blended, all channels)
**Total recommended launch month ad budget:** $6,000
**Primary conversion goal:** Direct-to-site purchase (Shopify); secondary: Amazon listing

---

## Channel 1 — Google Shopping & Search

### Targeting & Keywords

**Shopping campaign — keyword signals for feed optimization:**

| Match Type | Keyword                          | Estimated CPC | Intent Level |
|------------|----------------------------------|---------------|--------------|
| Broad match | arduino starter kit             | $0.60–1.10   | High         |
| Broad match | arduino beginner kit            | $0.55–0.95   | High         |
| Exact match | buy arduino kit                 | $0.70–1.20   | Purchase      |
| Exact match | arduino kit for beginners       | $0.60–1.00   | High         |
| Exact match | arduino uno starter kit         | $0.65–1.10   | High         |
| Phrase match | learn arduino electronics      | $0.40–0.75   | Research     |
| Phrase match | arduino kit gift kids          | $0.50–0.85   | Purchase     |
| Phrase match | arduino project kit             | $0.55–0.90   | High         |
| Negative   | elegoo, freenove, free, pdf, download, cheap | — | Exclude low-intent |

**Search campaign — ad groups:**
1. **Core Product** — "arduino starter kit", "arduino beginner kit", "buy arduino kit"
2. **Gift Intent** — "arduino kit gift", "electronics kit for kids", "stem gift for teens"
3. **Competitor Conquest** — "arduino official kit", "elegoo starter kit" (bid carefully; keep CPA gated)

---

### Google Shopping Feed Requirements

| Field              | Value                                                                                      |
|--------------------|-------------------------------------------------------------------------------------------|
| **Title**          | Arduino Starter Kit for Beginners — Build 5 Real Projects in 30 Min \| UNO R3 + Video Tutorials |
| **Description**    | Complete Arduino beginner kit with UNO R3 board, sensors, servo, motor, 200+ components, and step-by-step video tutorials. Build your first circuit in 30 minutes — no experience needed. $59. |
| **Product type**   | Electronics > Educational Electronics > Arduino Kits                                      |
| **Google category**| Electronics > Electronics Accessories > Electronics Components > Circuit Boards & Components |
| **GTIN**           | Assign a real UPC barcode before launch — required for Shopping eligibility and buy box    |
| **MPN**            | ARDSCO-KIT-V1                                                                              |
| **Brand**          | Arduino Starter Co                                                                         |
| **Price**          | 59.00 USD                                                                                  |
| **Availability**   | in_stock                                                                                   |
| **Condition**      | new                                                                                        |
| **Image**          | Hero unboxing image at minimum 800×800px on white background; secondary lifestyle image (child/teen building project) |
| **Custom label 0** | launch-2026 (for budget segmentation in campaign)                                         |

**Image requirements for Shopping:**
- Image 1: White background product shot, full kit contents displayed. 1200×1200px preferred.
- Image 2: Lifestyle — teen at desk, kit assembled, LED circuit lit up. Warm, encouraging.
- Image 3: Close-up of video tutorial QR code being scanned on phone.
- Image 4: Completed Project 1 circuit (LED + breadboard) — the "first win" moment.

---

### Search Ad Creative — Core Product Group

**Ad 1 — Outcome-led**
```
Headline 1: Build Your First Arduino Project
Headline 2: In Under 30 Minutes — Guaranteed
Headline 3: Video Tutorials at Every Step
Description 1: No electronics background needed. Step-by-step video guides walk you through wiring, code & debugging. Kit includes everything.
Description 2: 200+ quality components. 5 real projects. US-based support. $59 with free shipping. Start building today.
Final URL: [shopify store URL]/products/arduino-starter-kit
Display URL: ArduinoStarterCo.com/Kit
```

**Ad 2 — Beginner reassurance**
```
Headline 1: Arduino Kit for Total Beginners
Headline 2: Skip the Confusing PDF Tutorials
Headline 3: QR Videos Explain Every Step
Description 1: Unlike Elegoo, our kit has video tutorials at every single step. Scan a QR code — watch the wiring. No guesswork.
Description 2: UNO R3 board + sensors + servo + motor. Everything in one box. Builds real skills fast. Ships free from the US.
Final URL: [shopify store URL]/products/arduino-starter-kit
Display URL: ArduinoStarterCo.com/Kit
```

**Ad 3 — Gift intent**
```
Headline 1: Best Electronics Kit Gift 2026
Headline 2: Arduino Starter Kit — Ages 12+
Headline 3: Build Something Real in 30 Min
Description 1: The only Arduino kit with step-by-step video guides at every step. Perfect first STEM gift — works right out of the box.
Description 2: 5 hands-on projects, premium components, and US support. $59 with free shipping. Give a kit that actually teaches.
Final URL: [shopify store URL]/products/arduino-starter-kit
Display URL: ArduinoStarterCo.com/Kit
```

---

### Google Ads Budget & ROAS Targets

| Metric                   | Target                |
|--------------------------|-----------------------|
| Daily budget — launch month | $60/day (Shopping) + $40/day (Search) = **$100/day** |
| Monthly spend            | ~$3,000               |
| Target ROAS              | 3.3× (i.e., $196 revenue per $59 spend → ~3.3 units per $3,000 spend at 100% margin scenario) |
| Simplified target ROAS   | **3.0×** for first 30 days while collecting data; optimize to 4.0× in month 2 |
| Target CPA               | ≤$20 (Google, standalone) |
| Target CTR (Shopping)    | ≥0.8%                 |
| Target CTR (Search)      | ≥5%                   |
| Target conversion rate   | ≥3.5% (site), ≥2% (Shopping impression to click) |

**Bidding strategy:**
- Week 1–2: Manual CPC while gathering data. Shopping: $0.80 max CPC. Search: $1.20 max CPC.
- Week 3+: Transition to Target ROAS once 20+ conversions accumulated in the campaign.

---

## Channel 2 — Reddit Ads

### Target Subreddits & Audience Logic

| Subreddit              | Subscribers (approx.) | Audience fit                                       |
|------------------------|-----------------------|----------------------------------------------------|
| r/arduino              | 350K                  | Direct — makers and beginners researching Arduino  |
| r/learnprogramming     | 3.7M                  | Indirect — beginners who may pivot to hardware     |
| r/raspberry_pi         | 900K                  | Adjacent — hardware hobbyists, overlap with makers |
| r/electronics          | 1.2M                  | Adjacent — broader electronics DIY community       |
| r/DIY                  | 2.8M                  | Gift/project angle — "built a cool thing" culture  |
| r/Gifts                | 400K                  | Gift season targeting (Q4 — add this then)         |

**Interest targeting layer (in addition to subreddits):**
- Interest: Technology, DIY & Crafts, Education
- Device: Mobile + Desktop (desktop over-indexes for technical research)
- Age: 18–45 (note: ads target buyer, not always the end user — Gary and parents of Frannie)

---

### Ad Creative Brief — Reddit

**Format:** Promoted post (native feel — no hard sell, community-first voice)

**Ad Variant 1 — Problem-led**

```
Headline: I kept buying Arduino kits and never finishing them. This one's different.
Body:
Bought an Elegoo kit twice. Both times I got stuck on a wiring step the PDF didn't explain and gave up.

This time I tried the Arduino Starter Co kit — it has QR codes you scan right in the guide that take you to a short video of someone actually doing the step you're on.

Finished Project 1 (lit up my first LED circuit) in 22 minutes. Currently on Project 3.

[Image: First successful circuit on breadboard — warm lighting, real desk, slightly messy — authentic]
CTA: Check it out → [shopify store URL]
```

**Tone notes:** First-person voice, self-aware about past failure, specific detail (22 minutes, Project 3), no corporate language. Reddit rewards authenticity — this should read like a genuine recommendation post.

---

**Ad Variant 2 — Project-led**

```
Headline: My kid built a motion-sensing alarm with Arduino in one afternoon
Body:
We got her the Arduino Starter Co kit — she's 14, never done electronics before.

Day 1: Project 1 (LED circuit). Done in 30 minutes with the video tutorial.
Day 3: Project 4 (the distance sensor project). She set it up as a doorbell alarm for her room.

She's already asking if she can get a more advanced kit.

The kit has video walkthroughs for everything — no Googling, no asking me (I'm useless at this stuff). $59, ships from the US.

[Image: Young teen smiling at lit-up breadboard project]
CTA: Build something real → [shopify store URL]
```

**Tone notes:** Parent voice, specific timeline, specific outcome, relatable "I'm useless at this" self-deprecation. Targets Gary (gift buyer) and Frannie's parents.

---

### Reddit Ads Budget & KPIs

| Metric               | Target                  |
|----------------------|-------------------------|
| Daily budget         | $30/day                 |
| Monthly spend        | ~$900                   |
| Target CPM           | ≤$8 (Reddit CPMs are low — this is achievable) |
| Target CTR           | ≥0.4% (Reddit norm is 0.2–0.5%)              |
| Target CPA           | ≤$25 (Reddit traffic converts slower — expect longer attribution window) |
| Attribution window   | 7-day click, 1-day view                       |

**Pacing:** Start with r/arduino and r/learnprogramming at $15/day each. Add r/raspberry_pi and r/electronics in week 2 if CTR ≥0.3%.

---

## Channel 3 — Meta (Facebook & Instagram)

### Audience Targeting

**Core audience — interest-based:**

| Signal                              | Platform |
|-------------------------------------|----------|
| Interest: Arduino                   | FB + IG  |
| Interest: Electronics, DIY electronics | FB + IG |
| Interest: STEM education, coding for kids | FB    |
| Interest: Maker culture, Instructables, Hackaday | FB |
| Interest: Raspberry Pi              | FB + IG  |
| Behavior: Engaged shoppers (online purchases past 30 days) | FB |
| Age: 25–55 (gift buyers, parents, adult learners) | FB + IG |
| Placement: Facebook Feed, Instagram Feed, Instagram Reels, Stories | — |

**Lookalike audience (primary):**
- Seed: Waitlist email list (upload to Meta Custom Audiences)
- Build: 1% Lookalike (US) from waitlist — should perform best for cold acquisition
- Test: 2% Lookalike expansion in week 3 if 1% CPA ≤$20

**Retargeting audience (separate ad set — lower funnel):**
- Visited site but did not purchase (7-day window)
- Viewed product page but did not add to cart
- Added to cart but did not purchase
- Retargeting budget: $10/day (separate from prospecting)

---

### Creative Brief — Meta

**Ad Concept 1 — Unboxing (Reel / Story format)**

```
Format: 15–30 second Reel / vertical video
Hook (0–3 sec): Hands opening the Arduino Starter Co box — satisfying unboxing sounds, component reveal
Middle (3–20 sec): Fast-cut: QR code scan on guide → phone shows tutorial video → hands wiring breadboard → LED lights up → kid smiles
Closing (20–30 sec): Static frame: "Build your first circuit in 30 minutes." Logo + "Shop now" button
Music: Upbeat, curious, maker-feel instrumental (no lyrics)
Text overlay: "First Arduino kit that actually teaches you."
CTA button: Shop Now → [shopify store URL]
```

**Designer notes:** Shoot real kit unboxing. Don't use CGI. Warm desk lighting. Show the QR code scan clearly — this is the differentiator. The LED lighting up is the emotional payoff moment.

---

**Ad Concept 2 — First Project Success (Static image / carousel)**

```
Format: Single image or 3-frame carousel
Frame 1: Child/teen at desk looking proud next to lit-up LED breadboard circuit. Headline: "She built this in 25 minutes."
Frame 2: Close-up of the printed guide + QR code with phone showing the tutorial video. Headline: "Video guides at every step. No Googling required."
Frame 3: Product shot — full kit contents on white. Headline: "Everything included. $59. Ships free." + Shop Now CTA
Body copy:
Most Arduino kits ship you a PDF and wish you luck. Ours has video tutorials built into every step of the guide.

Scan the QR code → watch a short video of the exact step you're on.

200+ components, 5 structured projects, US-based support.

$59 • Free shipping • 30-day returns
CTA: Shop Now
```

---

**Ad Concept 3 — Beginner Testimonial (UGC-style video)**

```
Format: 30–60 second talking-head video, portrait/vertical
Script structure:
0–5 sec: "I'm someone who's failed at electronics three times before I found this kit."
5–20 sec: "The QR codes in the guide take you to a video for every single step. I built Project 1 in 22 minutes."
20–40 sec: Show breadboard project. "This is what it looks like. It works. I made this."
40–55 sec: "It's $59 and includes everything. If you've ever wanted to try Arduino but given up, this is the one."
55 sec: Title card: "$59 | ArduinoStarterCo.com | Free shipping"
Production: Authentic UGC feel — phone tripod, real background, not studio. If no real testimonial available at launch, use a team member or early beta tester.
```

---

### Meta Budget & KPIs

| Metric                     | Target                  |
|----------------------------|-------------------------|
| Daily budget — prospecting | $35/day                 |
| Daily budget — retargeting | $10/day                 |
| Monthly spend              | ~$1,350                 |
| Target CPM                 | $12–18 (US interest targeting range) |
| Target CTR (link click)    | ≥1.5%                   |
| Target CPC                 | ≤$1.20                  |
| Target conversion rate     | ≥3%                     |
| Target CPA                 | ≤$18 (prospecting), ≤$12 (retargeting) |
| Attribution window         | 7-day click, 1-day view  |

**Creative rotation rule:** Rotate all 3 concepts in a Dynamic Creative Test (DCT) for the first 2 weeks. Kill lowest-performing concept at $200 spend. Scale winner.

---

## Cross-Channel Strategy

### Total Launch Month Budget Allocation

| Channel             | Monthly Budget | % of Total | Expected Conversions (Est.) |
|---------------------|---------------|------------|------------------------------|
| Google Shopping     | $1,800        | 30%        | 90–110                       |
| Google Search       | $1,200        | 20%        | 50–70                        |
| Reddit Ads          | $900          | 15%        | 30–45                        |
| Meta Prospecting    | $1,050        | 17.5%      | 55–70                        |
| Meta Retargeting    | $300          | 5%         | 25–35                        |
| Creative/production | $750          | 12.5%      | —                            |
| **Total**           | **$6,000**    | **100%**   | **250–330 units (est.)**      |

**Revenue projection at $59 ASP:** $14,750–$19,470 gross revenue
**Blended estimated ROAS:** ~2.9–3.7× (target 3.0× floor, optimize toward 4.0×)

---

### Attribution Model

**UTM Naming Convention:**

```
utm_source     = google | reddit | facebook | instagram
utm_medium     = cpc | paid-social | shopping
utm_campaign   = [channel]-[audience]-[launch-month]
utm_content    = [ad-variant-id]
utm_term       = [keyword] (Search only)
```

**Example UTMs:**

| Channel          | Example UTM string                                                           |
|------------------|------------------------------------------------------------------------------|
| Google Shopping  | `?utm_source=google&utm_medium=shopping&utm_campaign=google-shopping-launch-2026-04&utm_content=feed-v1` |
| Google Search    | `?utm_source=google&utm_medium=cpc&utm_campaign=google-search-core-launch-2026-04&utm_content=ad-outcome&utm_term=arduino+starter+kit` |
| Reddit Ad V1     | `?utm_source=reddit&utm_medium=paid-social&utm_campaign=reddit-arduino-launch-2026-04&utm_content=problem-led-v1` |
| Reddit Ad V2     | `?utm_source=reddit&utm_medium=paid-social&utm_campaign=reddit-arduino-launch-2026-04&utm_content=project-led-v2` |
| Meta Prospecting | `?utm_source=facebook&utm_medium=paid-social&utm_campaign=meta-prospecting-interest-launch-2026-04&utm_content=unboxing-reel-v1` |
| Meta Retargeting | `?utm_source=facebook&utm_medium=paid-social&utm_campaign=meta-retargeting-launch-2026-04&utm_content=carousel-v1` |

**Attribution model:**
- **Primary:** Last-click (Shopify default) — use for CPA optimization decisions
- **Secondary:** Data-driven / 7-day assisted via Google Analytics 4 — use to evaluate Reddit and top-of-funnel Meta spend
- **Key caveat:** Reddit and Meta often appear in assisted paths (introduce intent), while Google captures the last click. Do NOT cut Reddit/Meta based solely on last-click CPA — review GA4 assisted conversion report weekly.

---

### KPI Dashboard — Weekly Tracking

| KPI                        | Week 1 Target | Month 1 Target | Optimization Trigger               |
|----------------------------|---------------|----------------|-------------------------------------|
| Total ad spend             | $1,500        | $6,000         | Pause if ROAS <1.5× for 7 days      |
| Total conversions          | 60–80         | 250–330        | —                                   |
| Blended CPA                | ≤$22          | ≤$18           | Pause channel if CPA >$30 sustained |
| Blended ROAS               | ≥2.5×         | ≥3.0×          | Scale spend if ROAS >4.0×           |
| Google CTR (Search)        | ≥4%           | ≥5%            | Pause ad if <2% after $50 spend     |
| Google CTR (Shopping)      | ≥0.7%         | ≥0.8%          | —                                   |
| Reddit CTR                 | ≥0.3%         | ≥0.4%          | Pause ad if <0.2% after $100 spend  |
| Meta CTR (link click)      | ≥1.2%         | ≥1.5%          | Kill creative if <0.8% after $100   |
| Site conversion rate       | ≥2.5%         | ≥3.5%          | Flag to CRO — may be landing page   |
| Cart abandonment rate      | —             | ≤70%           | Trigger retargeting flow            |

---

## Creative Production Checklist

**Assets needed before campaign launch:**

- [ ] Google Shopping: 4 product images (white bg + 3 lifestyle) at 1200×1200px
- [ ] Google Search: 3 ad headline/description sets (above) — text only, no production needed
- [ ] Reddit Ad V1: 1 authentic circuit photo (real desk, real build)
- [ ] Reddit Ad V2: 1 parent+child photo with kit
- [ ] Meta Concept 1: 15–30 sec Reel (unboxing + LED payoff)
- [ ] Meta Concept 2: 3-frame carousel (child success + QR close-up + product shot)
- [ ] Meta Concept 3: 30–60 sec UGC-style testimonial video
- [ ] All Meta assets: Vertical (9:16) AND square (1:1) versions

**Brand compliance reminders (from BRAND-IDENTITY.md):**
- Primary CTA color: Circuit Blue `#0D7ECD`
- Accent/highlight: Builder Orange `#FF6B2B`
- Headline font: Space Grotesk Bold
- No jargon, no prerequisites assumed in any copy
- Lead with outcome ("built something in 30 minutes"), not specs

---

## Pre-Launch Checklist

- [ ] GTIN/UPC barcode assigned and added to Shopping feed
- [ ] Shopify store conversion tracking pixel verified (Google Tag, Meta Pixel, Reddit Pixel)
- [ ] GA4 e-commerce tracking confirmed (purchase event firing)
- [ ] UTM builder doc shared with whoever is setting up campaigns
- [ ] Waitlist email list exported and uploaded to Meta Custom Audiences
- [ ] Lookalike audience built from waitlist in Meta (allow 24–48 hrs to populate)
- [ ] Google Merchant Center account created and product feed approved
- [ ] Reddit Ads account approved (can take 1–3 business days — start early)
- [ ] Meta Business Manager verified and ad account spending limit set
- [ ] Landing page CRO review completed before spend goes live
