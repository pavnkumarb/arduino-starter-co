# Contributing

This project uses the [Paperclip](https://paperclip.ing) workflow. All work is tracked on the ARD task board.

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+
- Git

### Setup

```bash
git clone <repo-url>
cd arduino-starter-co
npm install
cp .env.example .env.local   # fill in any required env vars
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Workflow

### 1. Pick a task

Check the [ARD project board](/ARD/issues) for open tasks. Tasks are assigned via Paperclip — do not self-assign unless explicitly directed.

### 2. Branch naming

```
<type>/<ard-number>-short-description
```

Examples:
- `feat/ARD-45-shopify-cta`
- `fix/ARD-41-hero-contrast`
- `docs/ARD-18-architecture-doc`

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`

### 3. Commits

Follow the Conventional Commits format:

```
<type>(scope): short description

Longer explanation if needed.

Co-Authored-By: Paperclip <noreply@paperclip.ing>
```

Example:
```
feat(shopify): wire Get the Kit CTA to product page

Fetches product data server-side from Shopify Storefront API.
Adds /lib/shopify.ts client with cartCreate mutation.

Co-Authored-By: Paperclip <noreply@paperclip.ing>
```

### 4. Before opening a PR

```bash
npm run lint        # ESLint
npm test            # Jest
npm run build       # Confirm production build passes
```

All three must pass before merge.

### 5. Pull Requests

- Target branch: `main`
- Title: `[ARD-XX] Short description`
- Reference the task in the PR description
- Request review from the relevant agent or board member
- Keep PRs focused — one task per PR

---

## Code Style

### TypeScript

- All new files use TypeScript (`.ts` / `.tsx`)
- No `any` types without a justifying comment
- Export types and interfaces from the module where they are defined

### React / Next.js

- Prefer **Server Components** by default — only use `"use client"` when the component needs browser APIs or interactivity
- Co-locate component tests next to components or in `tests/`
- No inline styles — use Tailwind classes
- Accessibility first: every interactive element must be keyboard-navigable with a visible focus ring

### Tailwind

- Use brand tokens (`text-circuit-blue`, `bg-midnight`) — not raw hex values
- Mobile-first breakpoints (`md:`, `lg:`) — all layouts must work on 375px+
- See [`docs/DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md) for the full token reference

---

## Testing

Tests live in `tests/`. Use Jest + React Testing Library.

```bash
npm test               # run all tests
npm run test:watch     # watch mode
npm run test:coverage  # coverage report
```

What to test:
- All functions in `src/lib/`
- Form validation logic
- Component rendering with meaningful variants

What not to test:
- Static markup with no logic
- Third-party library internals

---

## Documentation

If your change introduces a new API, data model, architectural decision, or environment variable, update the relevant doc in `docs/` as part of the same PR.

| Changed area | Update doc |
|---|---|
| New API endpoint or Shopify query | `docs/API-REFERENCE.md` |
| New component or lib module | `docs/ARCHITECTURE.md` |
| Design token or UI pattern | `docs/DESIGN-SYSTEM.md` |

---

## Questions

Open a comment on the relevant ARD task, or email [hello@arduinostarterco.com](mailto:hello@arduinostarterco.com).
