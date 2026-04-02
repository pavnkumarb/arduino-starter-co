# Arduino Starter Co — Discord Community Setup Guide

> **Version 1.0** | Created 2026-04-02 | Owned by Customer Success
> Related issue: [ARD-106](/ARD/issues/ARD-106)

---

## Overview

This document is the complete setup specification for the Arduino Starter Co Discord community. The server must be live and fully configured by **May 8, 2026** (one week before launch) to allow beta testing with the first 50 waitlist members.

**Server Purpose:** A welcoming, helpful community where beginner makers can get support on their projects, share builds, and feel part of something bigger than a box of components.

---

## 1. Server Information

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Server Name     | Arduino Starter Co                           |
| Server Icon     | Brand logo (Circuit Blue background, white logo mark) |
| Banner          | Hero gradient (Circuit Blue → Spark Green) with tagline: "Build something that works." |
| Invite URL      | Vanity URL: `discord.gg/arduinostarterco`    |
| Region          | Automatic (global CDN)                       |
| Verification Level | Medium (verified email required to participate) |
| Default Notifications | Only @mentions (prevents new member overwhelm) |

---

## 2. Roles

### Role Hierarchy (top to bottom)

| Role Name      | Color           | Who Gets It               | Permissions            |
|----------------|-----------------|---------------------------|------------------------|
| 🛠️ Mod Team    | `#0D7ECD` Circuit Blue | Staff / Customer Success | All standard mod perms |
| ⚡ Kit Owner   | `#FF6B2B` Builder Orange | Purchase-verified members | Standard + showcase pin |
| 🔩 Maker       | `#00C896` Spark Green | Every verified member (auto-assigned on join) | Read/Write all public channels |
| 🌱 Newcomer    | `#718096` Slate | Brand new member (first 10 min) | Read-only, can DM |
| 🤖 Bot         | `#E2E8F0` Mist | MEE6 / bots only | Bot-specific |

**Note:** `Newcomer` is a transitional role assigned immediately on join and auto-promoted to `Maker` after 10 minutes (MEE6 timer) or after completing the welcome flow. This prevents bot spam while maintaining a frictionless experience.

---

## 3. Channel Structure

### Category: 🏠 START HERE

| Channel           | Type | Who Can Post     | Pinned Content                      |
|-------------------|------|------------------|-------------------------------------|
| `#welcome`        | Text | Mods only (read-only for members) | Server rules, kit link, tutorial site link, how to get help |
| `#announcements`  | Text | Mods only (read-only for members) | Product launches, new tutorials, updates |
| `#introduce-yourself` | Text | All Makers | Welcome prompt (see Section 5)   |

### Category: 🔧 GET HELP

| Channel           | Type | Description                                |
|-------------------|----|----------------------------------------------|
| `#help-project-1` | Text | Project 1 troubleshooting (Blinking LED)    |
| `#help-project-2` | Text | Project 2 troubleshooting (Push Button)     |
| `#help-project-3` | Text | Project 3 troubleshooting (Servo Motor)     |
| `#help-project-4` | Text | Project 4 troubleshooting (LCD Display)     |
| `#help-project-5` | Text | Project 5 troubleshooting (Mini Weather Station) |

**Slow-mode:** Each help channel has a 30-second slow-mode to prevent rapid question spam and keep threads readable.

**Auto-thread creation:** Enable Discord's built-in auto-thread creation in each help channel so each question becomes its own thread. This keeps channels clean and makes Q&A searchable.

### Category: 🚀 COMMUNITY

| Channel               | Type  | Description                              |
|-----------------------|-------|------------------------------------------|
| `#project-showcase`   | Text  | Photos and videos of completed builds — images/video required to post |
| `#feedback`           | Text  | Product suggestions, bug reports — Mods react with ✅ when reviewed |
| `#off-topic`          | Text  | General maker chat, memes, other projects |

### Category: 🎙️ VOICE

| Channel            | Type  | Description                              |
|--------------------|-------|------------------------------------------|
| `#build-together`  | Voice | Always-on casual build hangout           |
| `#help-live`       | Voice | Real-time troubleshooting (Mods monitor launch week) |
| `#launch-event`    | Stage | Launch-day Q&A event (May 15, 2026)     |

---

## 4. Channel Permission Matrix

### Default Everyone Role (@everyone)
- Read Messages: ❌ (access controlled via Maker role)
- Send Messages: ❌

### Newcomer Role
- All public channels: Read ✅, Write ❌ (except `#introduce-yourself`)
- `#introduce-yourself`: Read ✅, Write ✅

### Maker Role
- All public channels: Read ✅, Write ✅
- `#announcements`, `#welcome`: Read ✅, Write ❌

### Kit Owner Role
- All Maker permissions +
- Can pin messages in `#project-showcase`

### Mod Team Role
- Full access to all channels including mod-only category

---

## 5. Welcome Flow

### 5a. Automated Welcome DM (MEE6 or Carl-bot)

Trigger: Member joins server
Delay: Immediate

```
Welcome to Arduino Starter Co! 🎉

We're so glad you're here. Whether your kit just arrived or you're still waiting — this is your community of fellow makers.

Here's how to get started:

🔗 Your Kit: https://arduinostarterco.com/kit
📖 Tutorial Site: https://learn.arduinostarterco.com
💬 Community: Jump into #introduce-yourself and say hi!
❓ Get Help: Each project has its own help channel — just pick the one you're working on.

If you ever get stuck: post your question in the right help channel with a photo of your setup. Our community (and the team!) checks in daily.

Happy building! ⚡
— The Arduino Starter Co Team
```

### 5b. Welcome Message in `#welcome` (pinned)

```markdown
# Welcome to Arduino Starter Co! ⚡

This is the official community for everyone using the Arduino Starter Co beginner kit.

## Our promise
You can build something that works. We're here to make sure of it.

## How this server is organized
- **#introduce-yourself** — Your first stop. Say hi!
- **#announcements** — Important news from the team
- **#help-project-1 through #5** — Stuck on a step? Post your question here
- **#project-showcase** — Finished something? Show us!
- **#feedback** — Tell us what we can improve

## Community Rules
1. **Be kind.** Everyone here is learning. Celebrate wins, encourage stumbles.
2. **No spoilers.** Post project outcomes in #project-showcase, not in help channels.
3. **Post photos.** When asking for help, include a photo of your circuit. It helps 10x.
4. **Stay on topic.** Use the right channel so others can find answers later.
5. **No spam or self-promotion** without Mod approval.
6. **Have fun.** Making things is supposed to be exciting.

## Get your kit
→ https://arduinostarterco.com/kit

## Tutorial site
→ https://learn.arduinostarterco.com

_Moderated by the Arduino Starter Co Customer Success team._
```

### 5c. Introduce Yourself Prompt (pinned in `#introduce-yourself`)

```markdown
**Welcome! Tell us about yourself 👋**

Copy and fill this in:

**Name/Nickname:**
**Location (optional):**
**Kit arrived yet?** Yes / On its way / Just browsing
**What made you want to try electronics?**
**What project are you most excited about?**

We read every intro — you're not shouting into a void here!
```

---

## 6. Bot Configuration (MEE6 Recommended)

### Installation
1. Visit https://mee6.xyz
2. Add MEE6 to the server with `Administrator` permissions (scoped, not full admin)
3. Enable Premium (required for welcome DM feature) — ~$11/month

### MEE6 Module Configuration

**Welcome Module:**
- Welcome DM: Enabled (use text from Section 5a)
- Welcome message in channel: `#welcome` (brief "say hi in #introduce-yourself" ping)
- Auto-role on join: Assign `Newcomer`

**Auto-Moderator Module:**
- Anti-spam: Enabled (5 messages / 5 seconds threshold)
- Anti-mention spam: Enabled (max 5 mentions per message)
- Anti-link: Enabled in all channels except `#feedback` (allow kit/tutorial links to whitelist)
- Whitelisted domains: `arduinostarterco.com`, `learn.arduinostarterco.com`, `arduino.cc`, `github.com`
- Action: Timeout 1 hour for first offense, kick for third offense

**Leveling Module:**
- Enabled with custom XP roles
- Level 5 → "Regular Maker" (cosmetic)
- Level 10 → "Expert Maker" (cosmetic + color accent)
- Announce level-ups in `#off-topic` to keep noise out of help channels

**Role Module (Reaction Roles — optional pre-launch):**
- Post reaction role message in `#welcome` so members can self-assign project channels to reduce noise:
  - 1️⃣ → Project 1 notifications
  - 2️⃣ → Project 2 notifications
  - *(etc.)*

### Timed Auto-Promotion (Newcomer → Maker)
If MEE6 Premium is unavailable, use Carl-bot:
- Command: `!autorole add @Maker 10m`
- Removes `@Newcomer` and adds `@Maker` after 10 minutes membership

---

## 7. Kit Owner Verification Flow

**Goal:** Verify purchase so Kit Owners get their elevated role.

**Method (Manual MVP for launch):**
1. Customer emails support@arduinostarterco.com with order number
2. CS team verifies against Shopify/Amazon order history
3. CS team manually assigns `Kit Owner` role in Discord
4. (Future automation): Klaviyo post-purchase flow sends Discord verification link

**Verification template reply:**
```
Hi [Name],

Verified! You've been granted Kit Owner status in our Discord server.

Your Kit Owner badge unlocks:
- Pin permission in #project-showcase
- Priority response in help channels during launch week

Happy building!
— Arduino Starter Co Support
```

---

## 8. Launch-Day Plan

### Pre-Launch (April 15 – May 14, 2026)

| Date        | Action                                                                      |
|-------------|-----------------------------------------------------------------------------|
| April 15    | Server fully built and bot configured                                       |
| April 15–16 | Internal team test: walk through full welcome flow end-to-end               |
| April 17    | Invite first 10 team/beta testers, gather feedback                         |
| April 20    | Invite 50 waitlist members (beta community cohort) via email invite link    |
| April 20–May 7 | Beta period: monitor friction, fix channel structure, tune bot         |
| May 1       | Post "coming soon" teaser in `#announcements` with launch countdown         |
| May 8       | Final check: all channels, permissions, bots, welcome flow verified         |
| May 12      | Share invite link in post-purchase email flow (Klaviyo setup in [ARD-103](/ARD/issues/ARD-103)) |
| May 14      | Prep `#launch-event` Stage channel, schedule announcement post              |

### Launch Day (May 15, 2026)

| Time (EST)  | Action                                                              |
|-------------|---------------------------------------------------------------------|
| 9:00 AM     | Post launch announcement in `#announcements` (see template below)  |
| 9:00 AM     | Enable QR code on packaging pointing to `discord.gg/arduinostarterco` |
| All day     | Mod Team monitors `#help-project-1` through `#5` for spikes        |
| 7:00 PM     | Host live Q&A session in `#launch-event` Stage (60 min)            |
| 7:00 PM     | Promote Q&A in `#announcements` 30 min before                      |
| 9:00 PM     | Post recap thread in `#announcements`, share recording link        |

### Launch Announcement Template (`#announcements`)

```markdown
# 🚀 We're live!

The Arduino Starter Co kit is officially available!

If you're holding your kit right now: **welcome.** You're in the right place.

📦 [Get your kit](https://arduinostarterco.com/kit)
📖 [Start the tutorials](https://learn.arduinostarterco.com)
🎙️ [Join tonight's live Q&A — 7PM EST in #launch-event](#launch-event)

Post your unboxing in #project-showcase. We're watching. 👀

— The Arduino Starter Co Team ⚡
```

---

## 9. Moderation Guidelines

### Response Time Targets

| Channel Type           | Target Response (Launch Week) | Ongoing Target |
|------------------------|-------------------------------|----------------|
| `#help-project-*`      | 2 hours                       | 24 hours       |
| `#feedback`            | 4 hours (react ✅ to acknowledge) | 48 hours  |
| DMs to Mod Team        | 4 hours                       | 48 hours       |

### Escalation Path
1. Bot handles spam/abuse automatically
2. Mod Team handles warnings and timeouts
3. Bans escalated to CS Manager with documentation

### Content Policy Summary
- Remove: spam, self-promotion, hate speech, NSFW, off-platform kit resales
- Warn: repeated off-topic posting, minor spam
- Ban: harassment, repeated violations after 2 warnings

---

## 10. Invite Link for Packaging and Email

**Primary invite link (permanent, no expiry):**
```
https://discord.gg/arduinostarterco
```

**Usage locations:**
1. Post-purchase email (Klaviyo flow per [ARD-103](/ARD/issues/ARD-103))
2. Packaging QR code (per QR code spec — see [ARD-84](/ARD/issues/ARD-84) or packaging docs)
3. Tutorial site footer
4. Kit welcome card insert

---

## 11. Pre-Launch Checklist

- [ ] Server created with correct name and branding
- [ ] All channels created with correct permissions
- [ ] All roles created and color-coded
- [ ] MEE6 installed and configured (welcome DM, auto-role, anti-spam)
- [ ] Welcome message pinned in `#welcome`
- [ ] Introduce-yourself prompt pinned
- [ ] Welcome DM tested (join with alt account)
- [ ] Auto-role tested (Newcomer → Maker after 10 min)
- [ ] Invite link vanity URL claimed: `discord.gg/arduinostarterco`
- [ ] Invite link permanent (no expiry, no join limit)
- [ ] Mod Team accounts added with correct role
- [ ] Beta invite sent to 50 waitlist members
- [ ] Welcome flow end-to-end tested with beta cohort
- [ ] Launch-event Stage channel scheduled for May 15 7PM EST
- [ ] Invite link handed off to Klaviyo email team
- [ ] Invite link handed off to packaging team for QR code

---

## 12. Success Metrics (First 30 Days Post-Launch)

| Metric                              | Target         |
|-------------------------------------|----------------|
| Members joined                      | 200+           |
| Members posting in #introduce-yourself | 60%+       |
| Help channel response time (avg)    | < 4 hours      |
| Help threads marked resolved        | 80%+           |
| #project-showcase posts             | 50+            |
| #feedback posts actioned            | 100%           |
| 30-day retention (still in server)  | 70%+           |

---

*Document maintained by Customer Success. Update after each launch milestone.*
