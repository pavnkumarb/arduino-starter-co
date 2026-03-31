# Feedback Tracker — Arduino Starter Kit

**Owner:** Customer Success
**Tool:** Google Sheets (primary) or Airtable
**Update frequency:** Daily triage; weekly summary review

---

## Spreadsheet Schema

Create a Google Sheet titled: **"Arduino Starter Kit — Customer Feedback Tracker"**

### Tab 1: `Raw Feedback`

| Column | Field | Type | Notes |
|--------|-------|------|-------|
| A | Date Received | Date (YYYY-MM-DD) | When feedback arrived |
| B | Channel | Enum | NPS / Email / Drip Reply / Tutorial Widget |
| C | Customer ID | Text | Order number or email address |
| D | Category | Enum | See taxonomy below |
| E | Priority | Enum | P0 / P1 / P2 / P3 |
| F | Summary | Short text | 1–2 sentence summary |
| G | Verbatim | Long text | Full quote or email body |
| H | NPS Score | Number (0–10) | NPS responses only; leave blank otherwise |
| I | Project 1 Completed | Enum | Yes / No-Stuck / No-Not-Tried / N/A |
| J | Assigned To | Text | Agent name or role |
| K | Status | Enum | New / In Progress / Resolved / Won't Fix |
| L | Resolution | Text | How it was resolved |
| M | Resolution Date | Date | When it was closed |
| N | Notes | Text | Internal notes |

---

### Tab 2: `Weekly Summary`

Auto-populate from Tab 1 or fill manually each Monday.

| Field | Formula / Source |
|-------|-----------------|
| Week of | Manual |
| Total responses | `COUNTIF` on Date Received |
| NPS responses | `COUNTIF(Channel, "NPS")` |
| Running NPS | `(Promoters - Detractors) / Total * 100` |
| P0 items | `COUNTIF(Priority, "P0")` |
| P1 items | `COUNTIF(Priority, "P1")` |
| P2 items | `COUNTIF(Priority, "P2")` |
| P3 / Feature requests | `COUNTIF(Priority, "P3")` |
| Top category this week | Manual |
| Open P0/P1 | `COUNTIFS(Priority, "P0/P1", Status, "New/In Progress")` |
| SLA met (24h triage) | % of items triaged same day |
| Notable quotes | Manual — pick 1–2 for Voice of Customer |

---

### Tab 3: `NPS Tracking`

| Column | Field |
|--------|-------|
| A | Response Date |
| B | Customer ID |
| C | NPS Score |
| D | Segment (Promoter/Passive/Detractor) |
| E | Open text: Best Part |
| F | Open text: Frustration |
| G | Project 1 Status |
| H | Stuck Description |
| I | Follow-up done? |
| J | Testimonial flag (Y/N) |

---

## Categorization Taxonomy

| Category | Definition | Priority | Owner |
|----------|-----------|----------|-------|
| Critical Bug | Kit doesn't work, safety issue, data loss | P0 — route within 24h | Engineer |
| Hardware Issue | DOA component, wrong part, poor quality | P1 — investigate within 48h | CEO (supplier) |
| Tutorial Blocker | User stuck and cannot complete project | P1 — update within 48h | Engineer + UX Researcher |
| UX Friction | Confusing step, unclear wording | P2 — batch for next sprint | UI Designer |
| Shipping/Packaging | Damaged in transit, unclear unboxing | P2 — batch review | Customer Success |
| Feature Request | User wants something not in MVP | P3 — log for roadmap | Product Owner |
| Positive Signal | Praise, testimonial, WOM intent | Track — share with CMO | CMO |

---

## Daily Triage Checklist (Customer Success)

1. Open feedback tracker each morning
2. Review all items from the past 24 hours with Status = "New"
3. Assign Category and Priority
4. For P0: immediately notify Engineer via issue comment `@Engineer`
5. For P1: create a Paperclip subtask under the relevant parent issue
6. Set Status → "In Progress" and Assigned To
7. Update Tab 2 weekly summary on Mondays

---

## Access

| Role | Permission |
|------|-----------|
| Customer Success | Editor |
| CEO | Editor |
| Product Owner | Viewer |
| Engineer | Viewer |
| CMO | Viewer (Tab 3 testimonial column only) |

Share link: *(add Google Sheets URL once created)*
