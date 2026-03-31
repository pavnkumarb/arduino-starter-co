# Arduino Starter Co — Technology Stack

**Project:** Arduino Kit Launch
**Last updated:** 2026-03-31
**Status:** Active

---

## Chosen Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Language | TypeScript | 5.4 |
| Framework | Next.js (App Router) | 14.2 |
| UI Library | React | 18.3 |
| Styling | Tailwind CSS | 3.4 |
| E-commerce | Shopify Storefront API | latest |
| Testing | Jest + React Testing Library | 29 / 15 |
| Linting | ESLint (next/core-web-vitals) | 8 |
| Runtime | Node.js | ≥20 |
| Fonts | Google Fonts via next/font | — |
| Hosting | Vercel (recommended) | — |

---

## Rationale

### TypeScript
Chosen for type safety across the full stack. The codebase includes complex data shapes (tutorial steps, wiring diagrams, product metadata) where runtime type errors would be hard to debug. TypeScript catches these at build time and improves IDE productivity for a small team.

**Trade-off considered:** Plain JavaScript is faster to start with, but the cost of untyped data bugs at scale outweighs the initial setup overhead.

### Next.js 14 (App Router)
The App Router enables server components and React Streaming out of the box, which keeps Time-to-First-Byte low for the product landing page (SEO-critical) while supporting interactive tutorial pages via client components.

**Trade-off considered:** Pages Router (Next.js legacy) is more familiar and has more community examples. App Router was chosen because the project's tutorial experience requires fine-grained streaming (step-by-step loading), and App Router's layouts/loading boundaries are a natural fit.

**Rejected:** Remix — comparable DX but smaller ecosystem and fewer Shopify integration examples. SvelteKit — team has no prior Svelte experience; switching cost not justified.

### React 18
Industry-standard for component-driven UIs. Required by Next.js 14. Concurrent features (transitions, Suspense) are used in the tutorial step navigation.

### Tailwind CSS 3.4
Design tokens (brand colors, type scale, spacing, elevation, radii) are fully encoded in `tailwind.config.ts`, making the design system enforceable at the class level. No separate CSS-in-JS runtime needed.

**Trade-off considered:** CSS Modules offer better scoping guarantees and no class-name collisions. Tailwind was chosen because the design system is token-based and the team prioritizes iteration speed over strict encapsulation.

**Rejected:** Styled Components / Emotion — runtime CSS-in-JS adds KB overhead and conflicts with Next.js server components.

### Shopify Storefront API
Shopify is the designated e-commerce platform (per roadmap Phase 4). The Storefront API provides a GraphQL interface for product listings, cart management, and checkout without requiring a full Shopify theme.

**Trade-off considered:** WooCommerce (WordPress) — lower monthly cost but requires self-hosted infrastructure and has a weaker developer experience. Shopify's hosted checkout, fraud protection, and Stripe integration justify the subscription cost at this stage.

**Note:** Shopify store setup is tracked in [ARD-29](/ARD/issues/ARD-29). API keys are not committed to the repository; they are provided via environment variables.

### Jest + React Testing Library
Jest is the standard test runner for Next.js projects. React Testing Library enforces user-centric test patterns (test behavior, not implementation). `jest-environment-jsdom` provides a DOM environment for component tests.

**Trade-off considered:** Playwright for end-to-end testing — valuable but higher maintenance overhead. Unit + integration tests with RTL are sufficient for the current codebase size. E2E tests can be added before production launch.

### Google Fonts via next/font
`next/font/google` self-hosts font files at build time, eliminating third-party font render-blocking requests and avoiding GDPR concerns around Google Fonts DNS lookups.

Fonts in use:
- **Space Grotesk** — headings (geometric, technical feel aligned with the Arduino brand)
- **Inter** — body text (high legibility at all sizes)
- **JetBrains Mono** — code blocks in tutorials

### Vercel (Recommended Hosting)
Next.js is developed by Vercel. Vercel provides zero-config deployments, edge CDN, automatic preview deployments per PR, and built-in analytics. No DevOps configuration required.

**Trade-off considered:** AWS Amplify or self-hosted (EC2/ECS) — more control but significantly more operational overhead for a small team at early stage. Revisit if cost becomes a concern at scale.

**Note:** Hosting is not yet provisioned. Deployment is blocked pending production readiness ([ARD-17](/ARD/issues/ARD-17)).

---

## Key Dependencies

| Package | Purpose |
|---------|---------|
| `next` | Framework, routing, SSR/SSG, Image/Font optimization |
| `react` / `react-dom` | UI component tree |
| `tailwindcss` | Utility-first CSS, design token enforcement |
| `@testing-library/react` | Component behavior tests |
| `@testing-library/jest-dom` | DOM matchers for Jest |
| `jest-environment-jsdom` | Browser-like test environment |
| `typescript` | Static type checking |
| `eslint-config-next` | Opinionated lint rules for Next.js |
| `autoprefixer` + `postcss` | Tailwind CSS processing pipeline |

---

## Environment Variables

The following env vars are required and must not be committed to the repository. Store them in `.env.local` locally and in the Vercel project dashboard for CI/CD.

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` | Shopify storefront domain (e.g. `mystore.myshopify.com`) |
| `NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN` | Shopify Storefront API public access token |
| `SHOPIFY_ADMIN_API_KEY` | Shopify Admin API key (server-side only, not public) |

---

## Considered and Rejected

| Technology | Reason Rejected |
|-----------|----------------|
| Remix | Smaller ecosystem; fewer Shopify integration resources |
| SvelteKit | No team experience; switching cost not justified |
| Styled Components / Emotion | Runtime CSS-in-JS incompatible with server components |
| WooCommerce | Self-hosted overhead; weaker developer experience |
| Plain JavaScript | Type safety benefits outweigh setup cost for this project |
| Webpack custom config | Next.js Turbopack/webpack defaults are sufficient |

---

## Architectural Constraints

1. **Server Components by default.** All pages and layouts are server components unless they require interactivity (event handlers, state, browser APIs). Interactive islands use `"use client"` explicitly.
2. **No third-party state management library.** React's built-in `useState`/`useContext`/`useReducer` is sufficient. Redux or Zustand would be premature abstraction.
3. **Static-first data.** Tutorial content is stored as TypeScript data files in `src/lib/tutorials.ts`. No CMS is needed until content volume justifies it.
4. **API secrets server-side only.** Shopify Admin API credentials are never exposed to the client. Storefront API uses the public token only.
