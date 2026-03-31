# Arduino Starter Co

> Every curious beginner can unbox our kit and build their first working project in under 30 minutes.

A beginner-first Arduino starter kit — product website, e-commerce storefront, and curriculum content.

---

## Project Overview

**Goal:** Launch a validated Arduino Starter Kit targeting beginners (age 12+) with $2M revenue target in Year 1.

**Stack:**
- **Frontend:** Next.js 14 (React, TypeScript)
- **E-commerce:** Shopify (Storefront API)
- **Styling:** Tailwind CSS (brand design system)
- **Testing:** Jest + React Testing Library
- **CI/CD:** GitHub Actions

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Tests

```bash
npm test
```

### Build

```bash
npm run build
```

---

## Project Structure

```
arduino-starter-co/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable UI components
│   ├── lib/              # Utilities, Shopify client, helpers
│   └── styles/           # Global styles and Tailwind config
├── public/               # Static assets (images, fonts, icons)
├── tests/                # Unit and integration tests
└── docs/                 # Project documentation
    ├── VISION.md
    ├── ROADMAP.md
    ├── BRAND-IDENTITY.md
    ├── COMPETITIVE-LANDSCAPE.md
    └── TECH-STACK.md
```

---

## Brand Colors

| Token           | Hex       | Usage                             |
|-----------------|-----------|-----------------------------------|
| Circuit Blue    | `#0D7ECD` | Primary CTAs, links, headings     |
| Builder Orange  | `#FF6B2B` | Accents, highlights, badges       |
| Spark Green     | `#00C896` | Success, completion indicators    |
| Ink             | `#2D3748` | Body text                         |
| Midnight        | `#1A202C` | Headings, nav backgrounds         |

Full brand guidelines: [`docs/BRAND-IDENTITY.md`](docs/BRAND-IDENTITY.md)

---

## Documentation

- [Vision & Strategy](docs/VISION.md)
- [Product Roadmap](ROADMAP.md)
- [Brand Identity](docs/BRAND-IDENTITY.md)
- [Competitive Landscape](docs/COMPETITIVE-LANDSCAPE.md)

---

## Contributing

This project uses the Paperclip workflow. See task board at [ARD project](/ARD/issues) for open work.

---

*Arduino Starter Co — Making happens here.*
