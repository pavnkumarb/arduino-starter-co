# Arduino Starter Co — User Personas

> **Version 1.0** | Developed 2026-03-31 | Owned by UX Researcher
> Related issue: [ARD-24](/ARD/issues/ARD-24)

---

## Overview

This document defines the three primary user personas for the Arduino Starter Co beginner kit. Personas are grounded in secondary research across Amazon product reviews, Reddit (r/arduino, r/electronics, r/learnprogramming), YouTube comment sections, and maker forum discussions — synthesized from signals gathered Q3 2024 through Q1 2026.

These personas inform product design, tutorial structure, marketing copy, pricing decisions, and UX priorities. Every design decision should be evaluated against at least one of these three users.

> **Core tension to hold**: Our product must delight Frannie on her first day AND earn back Dave's trust. Gary must feel safe enough to buy confidently without ever seeing the inside of a resistor. These are very different jobs — the product has to do all three.

---

## Persona 1 — "First-Timer Frannie"

> *"I want to make something that actually does something — I just don't want to break anything."*

### Demographics

| Attribute        | Detail                                                            |
|------------------|-------------------------------------------------------------------|
| Age              | 13–16                                                             |
| Gender           | Any (skews female in this persona archetype; reflect inclusively) |
| Location         | Suburban US, Canada, or UK                                        |
| Household income | Middle-income; $75K–$120K household                               |
| Buyer            | Parent purchases on her behalf                                    |
| Discovery path   | YouTube "cool electronics projects for kids", school STEM club, or a friend's recommendation |

### Technical Skill Level

- Uses smartphone, tablet, and Chromebook daily — digitally fluent as a consumer
- Has never written code, soldered, or wired a circuit
- May have used Scratch or block-based coding in school (Grades 5–7 level)
- Comfortable following step-by-step instructions when they are visually clear
- Gets anxious when instructions assume knowledge she hasn't been taught

### Motivation for Learning Electronics

- **Primary**: Wants to make something physical that reacts to the world — lights, sounds, movement
- **Secondary**: Peer and school context — friends are doing it, STEM club is starting a project, or she saw a YouTube video that made it look achievable
- **Tertiary**: Long-term aspiration toward game design, app development, or "being good at tech" — electronics is a tangible first step
- She is motivated by **visible progress** and **quick wins**; abstract theory kills momentum

### Pain Points with Existing Kits

Sourced from Amazon 1–3 star reviews of Elegoo, Freenove, and Arduino Official kits, and Reddit r/arduino beginner threads:

1. **"I had no idea what these components even were."** — Kits include a resistor, capacitor, and transistor with no explanation of what they do or why. Frannie opens the box and feels lost before she starts.
2. **"The first project wasn't actually that cool."** — Many kits start with "blink an LED" presented as a raw code exercise. With no context or narrative, it feels meaningless. She wanted to make something impressive for her friends.
3. **"I wired it wrong and nothing happened. I didn't know if I broke it."** — No feedback when something goes wrong. She quietly closes the box and doesn't come back.
4. **"The PDF was just a list of steps, not actually teaching me."** — She can follow steps, but when a step doesn't work, she has nowhere to turn. No "why" is explained alongside the "what."
5. **"I had to ask my dad and he didn't know either."** — When stuck, she escalates to a parent who is equally lost, confirming the belief that this is "too hard."

### Preferred Learning Style

- **Visual first**: Needs diagrams, photos, and color-coded wiring — not schematics or text-heavy instructions
- **Narrative structure**: Learns better when there's a story ("We're going to make a light that reacts to sound") vs. a procedure ("Connect pin 9 to the anode")
- **Short loops**: Best retention in 5–10 minute segments with a visible outcome at the end of each one
- **Celebration moments**: Responds strongly to positive feedback — a checkmark, a congratulation, a "Project 1 complete!" screen
- **Non-punishing failure**: Needs to know failure is expected and reversible. "If your LED doesn't light up, that's normal — here's why" changes her relationship to mistakes

### Price Sensitivity

- **She is not the buyer.** Her parent (→ see Gary persona) makes the purchase decision.
- As the end-user, she will advocate for the kit if she saw it on YouTube or a friend has one — the ask is roughly equivalent to a video game or LEGO set ($40–$100)
- She will not advocate for it if she can't articulate "what you make with it" — the purchase pitch to her parent needs to be concrete ("you build a motion alarm, a thermostat, a music player")

### Jobs to Be Done

| When...                                 | I want to...                                     | So I can...                                    |
|-----------------------------------------|--------------------------------------------------|------------------------------------------------|
| I open the box for the first time       | understand immediately what I'm going to make    | feel excited instead of overwhelmed            |
| I get stuck on a wiring step            | find help without leaving the tutorial           | fix it myself and feel capable                 |
| I complete my first project             | see a clear signal that I succeeded              | feel proud and want to do the next one         |
| I want to show someone what I learned   | have something visible and working to demonstrate | validate that the time was worth it            |

### Design Implications

- Every tutorial step must have a **visual wiring diagram** (not just a schematic)
- Each project must open with a **"Here's what you're building"** preview — photo, short description, what it does
- Steps must end with a **"It should look/behave like this"** verification moment
- Include an expandable **"It's not working?"** section on every step with the 3 most common failure modes
- Success moments must be explicit — animate a completion badge, show a congratulation screen

---

## Persona 2 — "Gift-Giver Gary"

> *"I want to buy something educational that he'll actually use — not something that ends up in the closet."*

### Demographics

| Attribute        | Detail                                                              |
|------------------|---------------------------------------------------------------------|
| Age              | 38–50                                                               |
| Gender           | Any (archetype skews male gift-givers in this product category)     |
| Location         | US suburban or urban                                                |
| Household income | $90K–$160K; willing to spend on quality educational gifts            |
| Buyer            | He is the buyer — decision-maker and credit-card holder             |
| Discovery path   | Amazon search ("arduino kit for kids"), gift guide articles, or parent Facebook groups |

### Technical Skill Level

- Moderate consumer tech user — competent with smartphones, streaming, and home Wi-Fi troubleshooting
- No electronics background; may have done basic home repairs
- Can read product descriptions and follow bullet-point value propositions
- Will not open the tutorial himself — evaluates entirely from the product listing, box, and unboxing impression

### Motivation for Buying

- **Primary**: Buy a gift that has lasting educational value and won't be used once and forgotten
- **Secondary**: Support his child's growing interest in STEM or "coding" — this kit represents investment in a real skill, not just entertainment
- **Tertiary**: Avoid buyer's remorse. He's spent $40–$100 on toys that were unused within a week. He wants this to be different.
- His decision is driven by **trust signals**, not technical specifications — he cannot evaluate the quality of a resistor or a wiring diagram, but he can evaluate a 4.7-star review average and a "30-day no-questions return" policy

### Pain Points with Existing Kits

Sourced from Amazon gift-giver reviews ("Bought for my son", "Got this as a birthday gift") and parenting forum discussions:

1. **"My kid opened it, couldn't figure out the first step, and gave up."** — This is Gary's nightmare outcome. He can't evaluate this risk from a product listing. He buys on hope and returns on disappointment.
2. **"There was no indication of what level of knowledge was needed."** — Product listings say "beginner" but then assume the buyer knows what a breadboard is. He can't tell if this is right for his 12-year-old.
3. **"The components looked like garbage."** — Cheap-feeling packaging or clearly low-quality components undercut confidence immediately. The unboxing experience matters because he often watches/participates.
4. **"I didn't know if the kid needed me to help, and I couldn't."** — He wants to feel like this kit is self-sufficient. If his child needs parental guidance and he can't provide it, the product has failed.
5. **"I had no idea what they'd actually build with it."** — Abstract "65 components" listings don't tell him what the outputs are. He needs to see "you'll build a motion alarm, a theremin, a weather station" to understand the value.

### Preferred Learning Style

- Gary is not learning electronics — he is evaluating whether to buy something
- His "learning" is about the product: what's in the box, who it's for, what it costs, whether it's safe, whether it'll work
- He makes decisions based on:
  - **Social proof**: Reviews, star ratings, "Amazon's Choice" badges, testimonials
  - **Risk reduction**: Return policy, safety information, age suitability
  - **Outcome clarity**: Photos of completed projects, a "what you'll build" list
  - **Authority signals**: Press mentions, educator endorsements, parent testimonials
- He will spend 3–5 minutes on the product listing and make a decision — he will not read technical documentation

### Price Sensitivity

- **Moderate-to-low sensitivity** for a considered educational gift
- Comfortable spending $65–$110 if the value proposition is clear
- Will compare against Arduino Official ($95–$110) as a reference point — if we're at the same price, we need a clear reason to prefer us
- Price anchoring matters: "$95 for everything your child needs to build 5 complete projects" lands better than "$95 for an Arduino starter kit"
- A **30-day return policy** or **happiness guarantee** meaningfully reduces purchase anxiety at this price point

### Jobs to Be Done

| When...                                        | I want to...                                      | So I can...                                         |
|------------------------------------------------|---------------------------------------------------|-----------------------------------------------------|
| I land on the product page                     | see immediately what my child will make           | justify the purchase in concrete terms              |
| I'm deciding between this and a competitor     | understand what makes this different              | feel confident I'm buying the better option         |
| I'm at checkout                                | know returns are easy                             | remove the last friction to buying                  |
| My child is unboxing it                        | see that the first step is genuinely guided       | feel like my purchase decision was vindicated       |
| My child gets stuck                            | know there's help available without needing me    | feel like the product is self-sufficient            |

### Design Implications

- Product listing and homepage must lead with **what projects are built**, not component counts
- Add **age suitability** prominently ("Designed for ages 12 and up — no prior experience needed")
- Feature **parent testimonials** specifically — "I know nothing about electronics and my daughter built this without my help"
- Show the **unboxing experience** — clean, organized, labeled components reduce first-impression anxiety
- Place **trust signals** near the CTA: return policy, safety certification, star rating
- The **"Get the Kit" CTA** must not require prior knowledge to proceed — link to a page that answers Gary's questions, not a technical spec sheet

---

## Persona 3 — "Dropout Dave"

> *"I've been burned by a kit before. I'll try again, but this has to be actually different — not just another PDF manual."*

### Demographics

| Attribute        | Detail                                                                  |
|------------------|-------------------------------------------------------------------------|
| Age              | 24–35                                                                   |
| Gender           | Any (skews male in this archetype)                                      |
| Location         | US or Europe, urban or suburban                                         |
| Household income | $65K–$120K; discretionary income for hobby purchases                    |
| Buyer            | Self-purchasing; no approval needed                                     |
| Discovery path   | Reddit r/arduino or r/electronics, YouTube "best arduino kit 2025/2026," Google search for "arduino kit for programmers" or "arduino tutorial actually for beginners" |

### Technical Skill Level

- **High software literacy**: professional or hobbyist developer, likely in Python, JavaScript, or similar
- Understands loops, variables, functions, and conditionals — translating code concepts to Arduino C++ is accessible
- **Zero practical electronics experience**: knows what a resistor is in theory but has never successfully wired one in a circuit
- Previously bought a kit (Elegoo or similar), got through the first project, hit a confusing step, couldn't debug it, and quit
- Has opinions about documentation quality — he reads it critically and will notice if instructions are vague or inconsistent
- His most valuable skill is also his biggest trap: he thinks he can skip beginner steps because he's a programmer. He will try to shortcut and hit the same walls

### Motivation for Learning Electronics

- **Primary**: Bridge the gap between software and hardware — wants to build physical things, not just digital ones. Especially interested in home automation, robotics, or IoT projects.
- **Secondary**: Professional relevance — embedded systems, hardware-software integration, and IoT are increasingly important in his field. Wants to be conversant, not just theoretically aware.
- **Tertiary**: Personal satisfaction — he considers himself technically capable, and not being able to do something "basic" like electronics is a source of quiet frustration. Success here would feel meaningful beyond the project itself.
- He is motivated by **competence**, not just completion — he wants to understand why things work, not just follow steps

### Pain Points with Existing Kits

Sourced from Reddit "I tried an arduino kit and gave up" posts, 2–3 star Amazon reviews from self-identified programmers, and YouTube comment sections on Arduino tutorials:

1. **"The documentation assumes either too much or too little."** — Kits switch without warning between "here's how to wire this" (patronizing to a developer) and "adjust the capacitance as needed" (opaque to a non-EE). The cognitive load is inconsistent.
2. **"My LED didn't light up and I had no idea why. I checked the code five times — the problem was a wiring issue I couldn't diagnose."** — He is excellent at software debugging but has no tools or mental models for hardware debugging. When things go wrong, he's stuck.
3. **"The first 3 projects were trivial; the 4th had a massive difficulty spike."** — Poor progression design means he either bores out (projects are too easy for a developer) or hits a wall he can't climb.
4. **"The code was undocumented copy-paste garbage."** — He reads code critically. Seeing a tutorial say "copy this sketch" with no explanation of what it does is patronizing and unhelpful — he wants to understand the code, not execute it blindly.
5. **"There was no community to ask questions."** — When stuck, he turned to Reddit, Arduino Forum, or Stack Overflow and found beginner questions unwelcome or poorly answered in those spaces.

### Preferred Learning Style

- **Conceptual framing first**: Give him the mental model before the hands-on step — "here's why this resistor limits current to protect the LED, then here's how to wire it"
- **Code explanation, not just code**: Show the sketch and explain each section. He will read it; don't insult him by telling him to just copy-paste.
- **Debugging scaffolding**: Explicitly teach hardware debugging — multimeter use, checking continuity, common failure points. This is the competency gap that killed his last attempt.
- **Fast-track available**: Doesn't need to be told what electricity is, but does need to be told how to interpret a circuit diagram. Offer a "developer fast-track" that skips the most basic intro content while still covering the electronics-specific gaps.
- **Community access**: Benefits from a forum or Discord where his questions won't be dismissed as "too basic" — a curated beginner-friendly space matters to him

### Price Sensitivity

- **Low sensitivity** for the right product
- Has already spent $20–$40 on a kit that failed him — he's primed to spend more if he believes the experience will be meaningfully different
- **Price-to-promise ratio** is what matters: he'll pay $95 if "guided step-by-step with hardware debugging instructions" is credible, not if it's a marketing phrase
- He will read the negative reviews specifically — he wants to know what went wrong for other developers
- A **"Tried another kit and gave up? This is different"** message line would land with him; generic beginner messaging would not

### Jobs to Be Done

| When...                                           | I want to...                                        | So I can...                                              |
|---------------------------------------------------|-----------------------------------------------------|----------------------------------------------------------|
| I land on the homepage                            | see a signal that this is different from Elegoo     | believe this time will be different before I buy         |
| I'm reading the tutorial                          | understand why each step exists                     | learn electronics concepts, not just follow steps blindly |
| I wire something wrong and it doesn't work        | have a clear hardware debugging guide               | fix it myself without abandoning the project             |
| I understand the concept but the code is unclear  | read documented code with explanations              | actually understand what I just built                    |
| I want to go deeper after completing the projects | find a clear "what's next" path                     | keep progressing without starting over on a new platform |

### Design Implications

- Homepage must have a differentiation message targeting the "failed before" persona — not generic beginner language
- Tutorial structure should include a **"Why this step"** callout for each new concept introduced
- Code blocks must include **inline comments** explaining the purpose of non-obvious lines
- Each project should include a **hardware debugging checklist** — the "it's not working" section should specifically address Dave's gap (continuity checks, polarity verification, common wiring mistakes)
- Consider a **"Programmer's path"** section in tutorials: "If you code in Python/JS, Arduino C++ will feel familiar — here's how it maps"
- Post-kit graduation path: link to intermediate resources (SparkFun, Adafruit) to give Dave a clear next step after mastering our kit

---

## Persona Comparison Matrix

| Attribute             | Frannie (First-Timer)       | Gary (Gift-Giver)              | Dave (Dropout)                    |
|-----------------------|-----------------------------|--------------------------------|-----------------------------------|
| Age                   | 13–16                       | 38–50                          | 24–35                             |
| Buyer                 | No (parent buys)            | Yes                            | Yes (self-purchase)               |
| Electronics knowledge | None                        | None (not the end user)        | None practical / high theoretical |
| Software knowledge    | Minimal (Scratch-level)     | None (not relevant)            | High (professional dev)           |
| Motivation type       | Fun + visible wins          | Gift quality + peace of mind   | Competence + career relevance     |
| Primary fear          | "I'll break it"             | "It'll go unused"              | "It'll fail me again"             |
| Key decision driver   | Excitement, narrative       | Social proof, return policy    | Differentiation signal, reviews   |
| Price sensitivity     | N/A (parent pays)           | Low–medium ($65–$110)          | Low (will pay for quality)        |
| Learning style        | Visual, narrative, chunked  | None (evaluator, not learner)  | Conceptual, code-literate, deep   |
| Support need          | "Help me when I'm stuck"    | "Reassure me I picked right"   | "Teach me to debug hardware"      |
| Post-purchase risk    | Quits if first win takes >30min | Returns kit if child quits | Abandons at first unexplained failure |

---

## Secondary Research Signal Summary

The following themes emerged repeatedly across the secondary research sources and are reflected in the persona pain points above:

### Amazon Reviews (1–3 star) — Top Themes

| Theme                                         | Frequency | Persona Most Affected |
|-----------------------------------------------|-----------|-----------------------|
| Documentation too complex for true beginners  | Very high | Frannie, Dave         |
| No guidance when wiring goes wrong            | High      | Frannie, Dave         |
| Component quality inconsistent / DOA parts   | Medium    | Gary (unboxing anxiety) |
| "Bought for a child; child gave up"           | High      | Gary, Frannie         |
| No narrative — just a list of procedures      | High      | Frannie, Dave         |
| Price OK but experience not worth it          | Medium    | Dave                  |

### Reddit r/arduino — Beginner Threads

| Signal                                                                    | Persona |
|---------------------------------------------------------------------------|---------|
| "I'm a developer but can't figure out why my circuit isn't working"       | Dave    |
| "My kid wanted to learn arduino, what kit actually works for beginners?"  | Gary    |
| "Bought the Elegoo kit, first 3 projects fine, then completely lost"      | Dave    |
| "Is there a kit where I don't need to already know electronics?"          | Frannie |
| "Looking for something my daughter can do mostly independently"           | Gary    |

### YouTube Comments — Beginner Tutorial Videos

| Signal                                                                     | Persona |
|----------------------------------------------------------------------------|---------|
| "Finally a tutorial that explains WHY"                                     | Dave    |
| "My 14-year-old watched this and built it herself, thank you!"             | Gary/Frannie |
| "Tried 3 different kits, none of them explained this clearly"              | Dave    |
| "Where do I get the kit you used in this video?"                           | Frannie |
| "I wish the kit I bought had this explanation in it"                       | Dave    |

---

## Implications for ARD-24 Downstream Tasks

These personas should directly inform:

- **[ARD-30](/ARD/issues/ARD-30)** (beginner curriculum outline): Structure Projects 1–5 as a narrative arc that delivers Frannie's quick wins, Dave's conceptual depth, and Gary's "it stayed used" moment by Project 3
- **[ARD-39](/ARD/issues/ARD-39)** (user interviews): Recruit interviewees matching all three archetypes — especially "Dropout Dave" equivalents who can articulate exactly where prior kits failed
- Tutorial copy voice: Warm and encouraging for Frannie; technically honest and conceptually rich for Dave; accessible to Gary if he ever reads it
- Homepage copy: Lead with what you build (Frannie + Gary), include the differentiation line (Dave)
- Pricing page: Anchoring language matters for Gary; proof-of-difference matters for Dave

---

## Document Governance

| Field        | Value                              |
|--------------|------------------------------------|
| Owner        | UX Researcher                      |
| Reviewers    | CEO, Product                       |
| Version      | 1.0                                |
| Last Updated | 2026-03-31                         |
| Location     | `docs/USER-PERSONAS.md`            |
| Source task  | [ARD-24](/ARD/issues/ARD-24)       |

_Update personas after each round of user interviews (see [ARD-39](/ARD/issues/ARD-39)). Validate assumptions quantitatively once the first survey is live._
