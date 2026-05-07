// SEO + metadata constants — shared by app/layout.tsx, app/robots.ts, app/sitemap.ts.
// Set NEXT_PUBLIC_SITE_URL at deploy time to override the fallback without touching code.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dtla-tech.com"; // TODO: confirm the actual deployed URL with whoever owns DNS

export const SITE_NAME = "Shop Titan";

export const SITE_TITLE =
  "Shop Titan Case Study: DTLA Print | Software for Decoration Shops";

export const SITE_DESCRIPTION =
  "How DTLA Print runs their operation on Shop Titan — FileMaker back office, e-commerce storefront, automated workflows, and 78+ AI agents stress-tested daily across thousands of orders.";

export const SITE_OG_DESCRIPTION =
  "How a real high-volume decoration shop runs their operation on Shop Titan — battle-tested across thousands of orders.";

export const SITE_KEYWORDS = [
  "shop titan",
  "shop titan case study",
  "dtla print",
  "print shop management system",
  "filemaker for print shops",
  "screen printing software",
  "apparel decorator management",
  "print shop ecommerce",
  "order management for printers",
  "production automation",
  "custom apparel online store",
  "print shop CRM",
];

// OG + Twitter images are generated dynamically by app/opengraph-image.tsx
// and app/twitter-image.tsx (next/og). Static fallback at public/og-image.png
// is kept for environments that can't run edge-rendered images.

export const TWITTER_HANDLE = "@shoptitan";
