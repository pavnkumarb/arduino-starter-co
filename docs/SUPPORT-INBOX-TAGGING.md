# Support Inbox Tagging Rules — Arduino Starter Kit

**Inbox:** support@arduinostarterco.com
**Tool:** Gmail (primary) with filters, or Helpscout
**Owner:** Customer Success

---

## Tagging Structure

Every inbound email receives:
- **1 primary category tag** (required)
- **1 priority tag** (required)
- **1 status tag** (updated as resolved)

---

## Primary Category Tags

| Tag | Color | Trigger Keywords / Criteria |
|-----|-------|-----------------------------|
| `bug` | Red | "doesn't work", "error", "broken", "not working", "crash", "smoke", "hot", "burned" |
| `hardware` | Orange | "missing part", "wrong component", "dead on arrival", "DOA", "resistor", "LED", "broken wire", "arrived damaged" |
| `tutorial-blocker` | Yellow | "stuck", "can't complete", "step [number]", "upload failed", "code error", "won't compile" |
| `ux-friction` | Blue | "confusing", "unclear", "hard to read", "instructions say", "diagram", "label" |
| `shipping` | Purple | "package", "box", "damaged", "transit", "never arrived", "tracking", "delivery" |
| `feature-request` | Green | "would love", "wish it had", "can you add", "suggestion", "next version" |
| `positive` | Teal | "love it", "great", "amazing", "thank you", "works perfectly", "five stars" |
| `refund-return` | Dark Red | "refund", "return", "exchange", "money back" |
| `account-order` | Gray | "order number", "confirmation", "receipt", "invoice", "where is my order" |

---

## Priority Tags

| Tag | Criteria | SLA |
|-----|----------|-----|
| `P0-critical` | Safety issue, total kit failure, data loss | Respond within 4 hours |
| `P1-urgent` | DOA component, tutorial completely blocked | Respond within 24 hours |
| `P2-standard` | UX friction, shipping complaint, general confusion | Respond within 48 hours |
| `P3-low` | Feature requests, general praise, account questions | Respond within 72 hours |

---

## Status Tags

| Tag | Meaning |
|-----|---------|
| `new` | Received, not yet triaged |
| `in-progress` | Being handled |
| `awaiting-customer` | Waiting for customer reply |
| `escalated` | Routed to Engineer/CEO |
| `resolved` | Closed with resolution |
| `wont-fix` | Acknowledged, no action taken |

---

## Gmail Auto-Filter Rules

Set up the following Gmail filters (Settings → Filters and Blocked Addresses → Create New Filter):

### Filter 1 — Tutorial Blockers
- **From:** any
- **To:** support@arduinostarterco.com
- **Has words:** stuck OR "upload failed" OR "won't compile" OR "step 3" OR "step 4" OR "code error"
- **Apply label:** `tutorial-blocker`, `P1-urgent`
- **Star it:** Yes

### Filter 2 — Safety / Critical
- **Has words:** smoke OR burning OR hot OR shock OR spark OR fire OR "doesn't turn on"
- **Apply label:** `bug`, `P0-critical`
- **Star it:** Yes
- **Mark as important:** Yes

### Filter 3 — Hardware Issues
- **Has words:** "missing" OR "wrong part" OR "dead" OR "DOA" OR "broken wire" OR "arrived damaged"
- **Apply label:** `hardware`, `P1-urgent`
- **Star it:** Yes

### Filter 4 — Refunds
- **Has words:** refund OR return OR "money back" OR exchange
- **Apply label:** `refund-return`, `P1-urgent`

### Filter 5 — Positive Feedback
- **Has words:** "love it" OR "love the" OR "amazing" OR "five stars" OR "great kit" OR "recommend"
- **Apply label:** `positive`, `P3-low`

---

## Helpscout Setup (If Used Instead of Gmail)

### Tags (create in Settings → Tags)
Create all tags listed above with matching colors.

### Saved Replies
Create the following saved reply templates:

#### Template: Tutorial Blocker Acknowledgment
> Subject: Re: [original subject]
>
> Hi [Name],
>
> Thanks for reaching out! Getting stuck is totally normal when learning Arduino — let's get you unblocked.
>
> Can you share:
> 1. Which step you're on (screenshot if possible)
> 2. The exact error message you're seeing
> 3. What you've already tried
>
> I'll get back to you within 24 hours with a fix.
>
> — [Your name], Arduino Starter Kit Support

#### Template: P0 Critical Acknowledgment
> Subject: Re: [original subject]
>
> Hi [Name],
>
> Thank you for letting us know right away. I'm escalating this to our engineering team immediately and will follow up within 4 hours.
>
> If there's any safety concern, please disconnect the kit from power and set it aside.
>
> — [Your name], Arduino Starter Kit Support

#### Template: Positive Feedback + Testimonial Request
> Subject: Re: [original subject]
>
> Hi [Name],
>
> This made our day — thank you so much for sharing!
>
> Would you be open to us featuring your experience on our website or social channels? Just let me know if that's okay.
>
> — [Your name], Arduino Starter Kit Support

---

## Routing Rules

| Tag | Route To | Action |
|-----|----------|--------|
| `P0-critical` | Engineer + CEO | Create P0 Paperclip issue immediately |
| `P1-urgent` + `tutorial-blocker` | Engineer | Create P1 Paperclip issue within 24h |
| `P1-urgent` + `hardware` | CEO | Escalate to supplier contact |
| `refund-return` | Customer Success | Handle per return policy |
| `positive` | CMO | Forward testimonial candidates weekly |
| `feature-request` | Product Owner | Log in feedback tracker |

---

## Weekly Inbox Review

Every Monday, Customer Success reviews:
1. All `resolved` tickets from the previous week — confirm resolution quality
2. All `in-progress` tickets older than 72 hours — escalate if stalled
3. Tag distribution — spot trends (rising `tutorial-blocker` = content gap)
4. Pull 1–2 verbatim quotes for the Voice of Customer weekly summary
