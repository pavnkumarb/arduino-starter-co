# Architecture Overview

## System Overview

Arduino Starter Co is a **Next.js 14** application built with the App Router. It serves as the product marketing website, tutorial platform, and (once live) the e-commerce storefront via Shopify.

```
┌──────────────────────────────────────────────────────┐
│                    Browser (Client)                   │
└─────────────────────────┬────────────────────────────┘
                          │ HTTPS
┌─────────────────────────▼────────────────────────────┐
│              Next.js 14 (App Router)                  │
│                                                       │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐ │
│  │  Marketing   │  │   Tutorial   │  │  Storefront │ │
│  │  Pages       │  │   Platform   │  │  (planned)  │ │
│  │  src/app/    │  │  /learn/...  │  │  /shop/...  │ │
│  └──────────────┘  └──────────────┘  └─────────────┘ │
│                                                       │
│  ┌──────────────────────────────────────────────────┐ │
│  │              Shared Components                   │ │
│  │  NavBar · Button · Card · Badge · Alert          │ │
│  │  CodeBlock · Input · FaqAccordion · WaitlistForm │ │
│  └──────────────────────────────────────────────────┘ │
│                                                       │
│  ┌──────────────────────────────────────────────────┐ │
│  │                  Lib / Utilities                  │ │
│  │  tutorials.ts · utils.ts · shopify.ts (planned)  │ │
│  └──────────────────────────────────────────────────┘ │
└─────────────────────────┬────────────────────────────┘
                          │
            ┌─────────────▼──────────────┐
            │   Shopify Storefront API   │
            │   (GraphQL, planned)       │
            └────────────────────────────┘
```

---

## Directory Structure

```
arduino-starter-co/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout (fonts, metadata)
│   │   ├── page.tsx                # Homepage (marketing)
│   │   └── learn/
│   │       ├── layout.tsx          # Tutorial section layout
│   │       ├── page.tsx            # Tutorial index
│   │       └── [tutorialSlug]/
│   │           └── [stepSlug]/
│   │               └── page.tsx    # Individual tutorial step
│   │
│   ├── components/                 # Reusable UI components
│   │   ├── NavBar.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Alert.tsx
│   │   ├── Input.tsx
│   │   ├── CodeBlock.tsx
│   │   ├── FaqAccordion.tsx
│   │   ├── WaitlistForm.tsx
│   │   └── tutorial/               # Tutorial-specific components
│   │       ├── StepProgress.tsx
│   │       ├── WiringDiagram.tsx
│   │       ├── VideoClip.tsx
│   │       └── CodeBlock.tsx
│   │
│   ├── lib/
│   │   ├── tutorials.ts            # Tutorial data + type definitions
│   │   ├── utils.ts                # General helpers
│   │   └── shopify.ts              # Shopify Storefront API client (planned)
│   │
│   └── styles/
│       └── globals.css             # Tailwind base + custom CSS vars
│
├── public/                         # Static assets
│   └── images/                     # Wiring diagrams, product images
│
├── tests/                          # Jest + React Testing Library tests
│
└── docs/                           # Project documentation
```

---

## Key Design Decisions

### 1. Next.js App Router (RSC-first)
Pages and layouts use React Server Components by default. Client Components are opted into with `"use client"` only when needed (e.g., interactive forms, accordions). This keeps the JavaScript bundle small for beginner users on slower connections.

### 2. Tutorial Data as Static TypeScript
Tutorial content lives in `src/lib/tutorials.ts` as typed TypeScript objects. This avoids a CMS dependency during early development and allows full TypeScript type safety across components. Content can be migrated to a headless CMS later without changing component interfaces.

### 3. Shopify Storefront API (GraphQL)
E-commerce is handled by Shopify. The Next.js app calls Shopify's **Storefront API** (GraphQL) from server-side Route Handlers. No cart state is held in this app's backend — all cart/checkout state lives in Shopify. See [`docs/API-REFERENCE.md`](API-REFERENCE.md) for details.

### 4. Tailwind CSS with Brand Tokens
All design tokens (colors, typography, spacing) are defined in `tailwind.config.ts` as custom tokens. Components use semantic class names (`text-circuit-blue`, `bg-midnight`) rather than raw hex values. See [`docs/DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md).

### 5. Static-first, SEO-ready
Marketing pages are fully statically rendered. Tutorial pages are statically generated from the `TUTORIALS` data at build time. Dynamic Shopify data (product price, availability) is fetched server-side per request to ensure freshness without a stale static snapshot.

---

## Data Flow

### Tutorial Page Load

```
Browser request /learn/project-1/2-wire-the-led
  → Next.js App Router
  → [tutorialSlug]/[stepSlug]/page.tsx (Server Component)
  → getTutorialStep("project-1", "2-wire-the-led")  [src/lib/tutorials.ts]
  → Returns static HTML + minimal JS
```

### Shopify Product CTA (planned)

```
Browser clicks "Get the Kit"
  → /shop page (Server Component) or CTA link
  → src/lib/shopify.ts → Shopify Storefront API (GraphQL)
  → Product details fetched server-side (price, availability)
  → "Add to cart" → Shopify hosted checkout
```

---

## Environment Variables

| Variable                       | Description                              | Required |
|-------------------------------|------------------------------------------|----------|
| `NEXT_PUBLIC_SHOPIFY_DOMAIN`  | Shopify store domain (e.g. `store.myshopify.com`) | Planned |
| `NEXT_PUBLIC_SHOPIFY_TOKEN`   | Storefront API public access token       | Planned  |
| `SHOPIFY_ADMIN_TOKEN`         | Admin API token (server-only)            | Planned  |

Copy `.env.example` to `.env.local` before running locally.

---

## API Boundaries

### External APIs (outbound)

| Boundary | Protocol | Caller | Auth | Direction |
|----------|----------|--------|------|-----------|
| Shopify Storefront API | GraphQL / HTTPS | `src/lib/shopify.ts` (server component / Route Handler) | `X-Shopify-Storefront-Access-Token` header (public token) | Server → Shopify |
| Shopify Admin API | REST / HTTPS | Server-side Route Handler only | `SHOPIFY_ADMIN_TOKEN` env var (never client-exposed) | Server → Shopify |

### Internal Route Handlers (inbound)

| Route | Method | Purpose | Status |
|-------|--------|---------|--------|
| `/api/waitlist` | POST | Capture waitlist email signups | Placeholder |
| `/api/feedback` | POST | Tutorial step thumbs-up/down rating | Planned ([ARD-38](/ARD/issues/ARD-38)) |

### Boundary Rules

1. **No secrets on the client.** `SHOPIFY_ADMIN_TOKEN` is server-only. The public `NEXT_PUBLIC_SHOPIFY_TOKEN` is the only Shopify credential that may reach the browser.
2. **No direct browser→Shopify calls.** All Shopify API calls are proxied through Next.js server components or Route Handlers. This prevents CORS issues and keeps query logic centralised.
3. **Static data has no API boundary.** Tutorial content (`src/lib/tutorials.ts`) is bundled at build time — no runtime HTTP call is made.
4. **Cart state lives in Shopify.** The Next.js app does not maintain cart state in a database or server session; Shopify's `cartCreate` mutation returns a `checkoutUrl` that the browser follows directly.

---

## Deployment Model

```
Developer → GitHub PR
                │
                ▼
         Vercel (Preview)
         preview.vercel.app/…
                │  (merge to main)
                ▼
         Vercel (Production)
         arduinostarterco.com
```

### Hosting: Vercel

| Concern | Implementation |
|---------|---------------|
| Hosting platform | Vercel (zero-config Next.js) |
| CDN / edge | Vercel Edge Network (global) |
| Build trigger | Git push / PR merge via GitHub integration |
| Preview deployments | Automatic per-PR preview URL |
| Production branch | `main` |
| Region | Auto (closest to users); override to `iad1` if latency tuning needed |

### Build & Runtime

- **Build command:** `next build` — emits static HTML for marketing/tutorial pages, RSC payloads, and edge/serverless functions for Route Handlers.
- **Output mode:** Default (`standalone` can be enabled for Docker if Vercel is replaced).
- **Static pages:** `/` (homepage), `/learn/[tutorialSlug]/[stepSlug]` — statically generated at build time via `generateStaticParams`.
- **Dynamic (per-request):** `/shop/…` Route Handlers that call Shopify for live price/availability.

### Environment Variables

Set in Vercel project dashboard (not committed to the repo):

| Variable | Environment | Required |
|----------|------------|---------|
| `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` | Production + Preview | Planned |
| `NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN` | Production + Preview | Planned |
| `SHOPIFY_ADMIN_API_KEY` | Production only | Planned |

Local development: copy `.env.example` → `.env.local`.

### CI / QA Gates (recommended before production)

1. `next build` must succeed.
2. `npm test` (Jest) must pass.
3. Lighthouse score ≥ 90 on Performance and Accessibility (run via Vercel's integration or CI).
4. No `console.error` in server logs on initial page load.

> **Status:** Vercel project not yet provisioned. Deployment is blocked pending production readiness ([ARD-17](/ARD/issues/ARD-17)).

---

## Testing Strategy

- **Unit tests:** Pure functions in `src/lib/` (e.g., `getTutorialStep`, `getAdjacentSteps`)
- **Component tests:** React Testing Library for interactive components (forms, accordions)
- **No E2E tests yet** — planned once Shopify checkout flow is live

Run all tests:

```bash
npm test
```

Run with coverage:

```bash
npm run test:coverage
```
