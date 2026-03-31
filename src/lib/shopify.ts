import { createStorefrontApiClient } from "@shopify/storefront-api-client";

if (!process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN) {
  throw new Error("Missing env: NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN");
}
if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
  throw new Error("Missing env: NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN");
}

export const shopifyClient = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
  apiVersion: "2025-01",
  publicAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

// ── Types ──────────────────────────────────────────────────────────────────

export interface ShopifyImage {
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

export interface ShopifyPrice {
  amount: string;
  currencyCode: string;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: ShopifyPrice;
  compareAtPrice: ShopifyPrice | null;
}

export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  featuredImage: ShopifyImage | null;
  images: ShopifyImage[];
  variants: ShopifyVariant[];
  priceRange: {
    minVariantPrice: ShopifyPrice;
    maxVariantPrice: ShopifyPrice;
  };
  tags: string[];
  availableForSale: boolean;
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  lines: CartLine[];
  cost: {
    subtotalAmount: ShopifyPrice;
    totalAmount: ShopifyPrice;
  };
}

export interface CartLine {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    product: { title: string; handle: string };
    image: ShopifyImage | null;
  };
  cost: {
    totalAmount: ShopifyPrice;
  };
}

// ── Queries ────────────────────────────────────────────────────────────────

const PRODUCT_FIELDS = /* GraphQL */ `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    descriptionHtml
    availableForSale
    tags
    featuredImage { url altText width height }
    images(first: 10) { nodes { url altText width height } }
    priceRange {
      minVariantPrice { amount currencyCode }
      maxVariantPrice { amount currencyCode }
    }
    variants(first: 20) {
      nodes {
        id
        title
        availableForSale
        price { amount currencyCode }
        compareAtPrice { amount currencyCode }
      }
    }
  }
`;

export async function getProductByHandle(
  handle: string
): Promise<ShopifyProduct | null> {
  const query = /* GraphQL */ `
    ${PRODUCT_FIELDS}
    query GetProduct($handle: String!) {
      product(handle: $handle) {
        ...ProductFields
      }
    }
  `;

  const { data, errors } = await shopifyClient.request(query, {
    variables: { handle },
  });

  if (errors) {
    console.error("Shopify getProductByHandle error:", errors);
    return null;
  }

  const raw = (data as { product: unknown }).product;
  if (!raw) return null;
  return normalizeProduct(raw as Record<string, unknown>);
}

export async function getAllProducts(): Promise<ShopifyProduct[]> {
  const query = /* GraphQL */ `
    ${PRODUCT_FIELDS}
    query GetAllProducts {
      products(first: 50) {
        nodes {
          ...ProductFields
        }
      }
    }
  `;

  const { data, errors } = await shopifyClient.request(query);

  if (errors) {
    console.error("Shopify getAllProducts error:", errors);
    return [];
  }

  const nodes = ((data as { products: { nodes: unknown[] } }).products?.nodes) ?? [];
  return nodes.map((n) => normalizeProduct(n as Record<string, unknown>));
}

// ── Cart mutations ─────────────────────────────────────────────────────────

export async function createCart(): Promise<ShopifyCart | null> {
  const mutation = /* GraphQL */ `
    mutation CartCreate {
      cartCreate {
        cart {
          ...CartFields
        }
      }
    }
    ${CART_FIELDS}
  `;

  const { data, errors } = await shopifyClient.request(mutation);
  if (errors) { console.error("cartCreate error:", errors); return null; }
  return normalizeCart((data as { cartCreate: { cart: unknown } }).cartCreate.cart as Record<string, unknown>);
}

export async function addToCart(
  cartId: string,
  merchandiseId: string,
  quantity = 1
): Promise<ShopifyCart | null> {
  const mutation = /* GraphQL */ `
    mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          ...CartFields
        }
      }
    }
    ${CART_FIELDS}
  `;

  const { data, errors } = await shopifyClient.request(mutation, {
    variables: { cartId, lines: [{ merchandiseId, quantity }] },
  });
  if (errors) { console.error("cartLinesAdd error:", errors); return null; }
  return normalizeCart((data as { cartLinesAdd: { cart: unknown } }).cartLinesAdd.cart as Record<string, unknown>);
}

const CART_FIELDS = /* GraphQL */ `
  fragment CartFields on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount { amount currencyCode }
      totalAmount { amount currencyCode }
    }
    lines(first: 100) {
      nodes {
        id
        quantity
        cost { totalAmount { amount currencyCode } }
        merchandise {
          ... on ProductVariant {
            id
            title
            image { url altText width height }
            product { title handle }
          }
        }
      }
    }
  }
`;

// ── Normalizers ────────────────────────────────────────────────────────────

function normalizeProduct(raw: Record<string, unknown>): ShopifyProduct {
  const images =
    ((raw.images as { nodes: Record<string, unknown>[] })?.nodes ?? []).map(
      normalizeImage
    );
  const variants =
    ((raw.variants as { nodes: Record<string, unknown>[] })?.nodes ?? []).map(
      (v) => ({
        id: v.id as string,
        title: v.title as string,
        availableForSale: v.availableForSale as boolean,
        price: v.price as ShopifyPrice,
        compareAtPrice: (v.compareAtPrice as ShopifyPrice) ?? null,
      })
    );

  return {
    id: raw.id as string,
    handle: raw.handle as string,
    title: raw.title as string,
    description: raw.description as string,
    descriptionHtml: raw.descriptionHtml as string,
    featuredImage: raw.featuredImage
      ? normalizeImage(raw.featuredImage as Record<string, unknown>)
      : null,
    images,
    variants,
    priceRange: raw.priceRange as ShopifyProduct["priceRange"],
    tags: (raw.tags as string[]) ?? [],
    availableForSale: raw.availableForSale as boolean,
  };
}

function normalizeImage(raw: Record<string, unknown>): ShopifyImage {
  return {
    url: raw.url as string,
    altText: (raw.altText as string) ?? null,
    width: (raw.width as number) ?? 0,
    height: (raw.height as number) ?? 0,
  };
}

function normalizeCart(raw: Record<string, unknown>): ShopifyCart {
  const lines =
    ((raw.lines as { nodes: Record<string, unknown>[] })?.nodes ?? []).map(
      (l) => ({
        id: l.id as string,
        quantity: l.quantity as number,
        merchandise: l.merchandise as CartLine["merchandise"],
        cost: l.cost as CartLine["cost"],
      })
    );

  return {
    id: raw.id as string,
    checkoutUrl: raw.checkoutUrl as string,
    totalQuantity: raw.totalQuantity as number,
    lines,
    cost: raw.cost as ShopifyCart["cost"],
  };
}
