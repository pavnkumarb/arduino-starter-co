# API Reference

## Overview

This app integrates with one external API: **Shopify Storefront API** (GraphQL). The integration is currently in development (tracked in [ARD-45](/ARD/issues/ARD-45) and [ARD-29](/ARD/issues/ARD-29)).

No custom REST or GraphQL API is exposed by this Next.js app. Server interactions happen via:
- **Next.js Route Handlers** (`src/app/api/`) — for internal form submissions (waitlist, feedback)
- **Shopify Storefront API** — for product data and cart/checkout

---

## Shopify Storefront API

### Base URL

```
https://{NEXT_PUBLIC_SHOPIFY_DOMAIN}/api/2024-01/graphql.json
```

### Authentication

All requests include a public Storefront access token in the header:

```
X-Shopify-Storefront-Access-Token: {NEXT_PUBLIC_SHOPIFY_TOKEN}
Content-Type: application/json
```

The `NEXT_PUBLIC_SHOPIFY_TOKEN` is the **Storefront API public access token** — safe to expose in client-side code. It is distinct from the Admin API token, which must remain server-side only.

---

### Planned Queries

#### Get Product by Handle

Fetches the Arduino Starter Kit product for the "Get the Kit" CTA and product page.

```graphql
query GetProduct($handle: String!) {
  product(handle: $handle) {
    id
    title
    description
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 10) {
      edges {
        node {
          id
          title
          availableForSale
          price {
            amount
            currencyCode
          }
        }
      }
    }
    images(first: 5) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
  }
}
```

Variables:
```json
{ "handle": "arduino-starter-kit" }
```

#### Create Cart

Creates a Shopify cart with a product variant.

```graphql
mutation CartCreate($input: CartInput!) {
  cartCreate(input: $input) {
    cart {
      id
      checkoutUrl
      lines(first: 10) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
    userErrors {
      field
      message
    }
  }
}
```

Variables:
```json
{
  "input": {
    "lines": [
      {
        "merchandiseId": "gid://shopify/ProductVariant/{variantId}",
        "quantity": 1
      }
    ]
  }
}
```

---

## Internal Route Handlers

### Waitlist Signup

> **Status:** Placeholder — form currently shows a client-side confirmation. Backend submission to be implemented.

```
POST /api/waitlist
Content-Type: application/json

{ "email": "user@example.com" }
```

**Response:**
```json
{ "ok": true }
```

**Errors:**
| Status | Reason |
|--------|--------|
| 400 | Missing or invalid email |
| 429 | Rate limited |
| 500 | Server error |

### Tutorial Feedback Widget

> **Status:** Planned (tracked in [ARD-38](/ARD/issues/ARD-38))

```
POST /api/feedback
Content-Type: application/json

{
  "tutorialSlug": "project-1",
  "stepSlug": "2-wire-the-led",
  "rating": "thumbs_up" | "thumbs_down",
  "comment": "optional free-text"
}
```

---

## Tutorial Data (Static, TypeScript)

Tutorial content is **not** served via API — it is statically embedded in `src/lib/tutorials.ts`. The helper functions are:

| Function | Signature | Description |
|----------|-----------|-------------|
| `getTutorial` | `(slug: string) => Tutorial \| undefined` | Fetch a tutorial by slug |
| `getTutorialStep` | `(tutorialSlug, stepSlug) => { tutorial, step, index } \| undefined` | Fetch a step within a tutorial |
| `getAdjacentSteps` | `(tutorial, currentIndex) => { prev, next }` | Navigation helpers for prev/next step |

### Type Definitions

```typescript
interface Tutorial {
  slug: string;
  title: string;
  tagline: string;
  totalDuration: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  components: string[];
  steps: TutorialStep[];
}

interface TutorialStep {
  slug: string;
  title: string;
  duration: string;
  description: string;
  wiringDiagram?: WiringDiagram;
  videoClip?: VideoClip;
  codeSnippet?: CodeSnippet;
  tips?: string[];
  checkpoints?: string[];
  troubleshooting?: TroubleshootingItem[];
}
```

Full type definitions: [`src/lib/tutorials.ts`](../src/lib/tutorials.ts)
