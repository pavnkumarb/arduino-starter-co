# Day 7 NPS Survey — Arduino Starter Kit

**Owner:** Customer Success
**Trigger:** Day 7 post-purchase drip email (#5)
**Tool:** Google Forms (primary) or Typeform
**Target response rate:** ≥10% of first 100 customers

---

## Survey Title

> How's your Arduino Starter Kit experience going?

**Intro text:**
> Thanks for being one of our first customers! This 2-minute survey helps us make the kit better for everyone. Your honest feedback shapes what we fix and build next.

---

## Questions

### Q1 — NPS Score (required)
**Type:** Linear scale 0–10
**Question:** How likely are you to recommend the Arduino Starter Kit to a friend or fellow maker?
**Label left (0):** Not at all likely
**Label right (10):** Extremely likely

---

### Q2 — Best Part (required)
**Type:** Long text (open)
**Question:** What was the best part of your experience so far?
**Placeholder:** e.g. "The step-by-step tutorial was really clear" or "Components arrived well-packaged"

---

### Q3 — Frustration (required)
**Type:** Long text (open)
**Question:** What was the most frustrating part of your experience?
**Placeholder:** e.g. "Couldn't figure out step 4" or "The wire labels were hard to read"

---

### Q4 — Project Completion (required)
**Type:** Multiple choice (single)
**Question:** Did you complete Project 1 (LED Blink + Sensor)?
**Options:**
- Yes — I completed it!
- No — I got stuck
- No — I haven't tried it yet

---

### Q5 — Stuck Location (conditional — show if Q4 = "No — I got stuck")
**Type:** Long text (open)
**Question:** Where did you get stuck? What were you trying to do when it stopped working?
**Placeholder:** e.g. "Step 3 — the code didn't upload and I got an error"

---

### Q6 — Overall Rating (optional)
**Type:** Linear scale 1–5 stars
**Question:** Overall, how would you rate the Arduino Starter Kit?

---

## Form Settings

| Setting | Value |
|---------|-------|
| Collect email addresses | Yes (pre-fill from drip email link) |
| Limit to 1 response | Yes |
| Confirmation message | "Thank you! We read every response and use your feedback to improve. If you need help, email support@arduinostarterco.com." |
| Progress bar | Show |
| Shuffle question order | No |

---

## Drip Email Integration

- Embed survey link in drip email #5 (Day 7 post-purchase)
- Pre-fill `email` parameter in URL: `?prefill_email={{customer_email}}`
- Subject line: "Quick question — how's your Arduino kit going? (2 min)"
- CTA button text: "Share My Feedback"

---

## NPS Scoring Reference

| Score | Segment |
|-------|---------|
| 9–10 | Promoter |
| 7–8 | Passive |
| 0–6 | Detractor |
| **NPS** | **% Promoters − % Detractors** |

Target NPS baseline: ≥40 from first 100 customers.

---

## Response Routing

After each submission:
1. Log in feedback tracker (see `FEEDBACK-TRACKER.md`)
2. Score 0–6: flag for Customer Success follow-up within 48 hours
3. Score 9–10 + positive open text: flag for CMO (testimonial candidate)
4. "Stuck" on Project 1: flag for Engineer + UX Researcher (tutorial blocker)
