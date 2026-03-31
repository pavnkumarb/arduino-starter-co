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
