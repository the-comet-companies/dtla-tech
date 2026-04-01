/* ================================================================
   CENTRALIZED CONTENT — edit all site copy here
   ================================================================ */

// ── Navigation ──
export const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solutions", href: "#solutions" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#interest-form" },
];

export const navBrand = {
  desktop: "DTLA",
  mobile: "DTLA Print",
  ctaText: "Request Early Access",
  ctaHref: "#interest-form",
};

// ── Hero ──
export const hero = {
  badge: "From the team at DTLA Print",
  headingLine1: "Run Your Shop",
  headingLine2: "With Our",
  morphingWords: ["Systems", "Back Office", "Storefront", "Automations", "Tools"],
  subtitle:
    "Get the same FileMaker backend and online storefront that powers DTLA Print — battle-tested on thousands of real orders.",
  ctaPrimary: { text: "Request Early Access", href: "#interest-form" },
  ctaSecondary: { text: "See How It Works", href: "#solutions" },
};

// ── Hero Bento ──
export const heroBentoCards = {
  features: [
    {
      title: "Production Queue",
      bullets: ["Track every order from art to shipping", "Color-coded status indicators", "Drag-and-drop priority reordering"],
      className: "col-span-2",
    },
    {
      title: "Quick Quote",
      bullets: ["Built-in pricing matrices", "Auto-calculate quantity breaks"],
      className: "col-span-1",
    },
    {
      title: "Order Management",
      bullets: ["Centralized order dashboard", "Art file versioning", "Linked invoicing & payments"],
      className: "col-span-2",
    },
    {
      title: "AI Agents",
      bullets: ["Auto-generate proofs", "Smart production routing"],
      className: "col-span-1",
    },
  ],
  logos: [
    {
      title: "Automations",
      description: "Connect to any tool with pre-built workflows.",
      logos: [
        { src: "/logos/tools/n8n.svg", alt: "n8n" },
        { src: "/logos/tools/zapier.svg", alt: "Zapier" },
        { src: "/logos/tools/make.svg", alt: "Make" },
      ],
      reverse: false,
      className: "col-span-1",
    },
    {
      title: "E-Commerce Platforms",
      description: "Sync orders and products across every major marketplace.",
      logos: [
        { src: "/logos/integrations/shopify.svg", alt: "Shopify" },
        { src: "/logos/integrations/woocommerce.svg", alt: "WooCommerce" },
        { src: "/logos/integrations/etsy.svg", alt: "Etsy" },
        { src: "/logos/integrations/ebay.svg", alt: "eBay" },
        { src: "/logos/integrations/amazon.svg", alt: "Amazon" },
        { src: "/logos/integrations/faire.svg", alt: "Faire" },
      ],
      className: "col-span-2",
    },
    {
      title: "Payments via Stripe",
      description: "Accept every major payment method.",
      logos: [
        { src: "/logos/payments/visa.svg", alt: "Visa" },
        { src: "/logos/payments/mastercard.svg", alt: "Mastercard" },
        { src: "/logos/payments/amex.svg", alt: "AMEX" },
        { src: "/logos/payments/paypal.svg", alt: "PayPal" },
        { src: "/logos/payments/apple-pay.svg", alt: "Apple Pay" },
        { src: "/logos/payments/google-pay.svg", alt: "Google Pay" },
      ],
      className: "col-span-1",
    },
    {
      title: "Shipping & Logistics",
      description: "Live rates and labels from every major carrier.",
      logos: [
        { src: "/logos/shipping/ups.svg", alt: "UPS" },
        { src: "/logos/shipping/fedex.svg", alt: "FedEx" },
        { src: "/logos/shipping/usps.svg", alt: "USPS" },
        { src: "/logos/shipping/dhl.svg", alt: "DHL" },
        { src: "/logos/shipping/amazon.svg", alt: "Amazon" },
      ],
      reverse: false,
      className: "col-span-2",
    },
  ],
};

// ── Problems ──
export const problemsSection = {
  label: "The Problem",
  watermark: "BROKEN SYSTEMS",
  typingWords: [
    "Sound familiar?",
    "Losing orders?",
    "Still using spreadsheets?",
    "Guessing where jobs are?",
    "Scaling feels impossible?",
  ],
  cta: { text: "See How We Solve This", href: "#interest-form" },
};

export const painPoints = [
  {
    number: 1,
    title: "Disconnected Systems",
    description:
      "Orders in one place, art files in another, production on a whiteboard, shipping in a spreadsheet. Nothing talks to each other.",
  },
  {
    number: 2,
    title: "No Real-Time Job Tracking",
    description:
      "You can't tell where a job is without walking the floor or calling someone. Customers ask for updates and you're guessing.",
  },
  {
    number: 3,
    title: "Manual Quoting Eating Up Time",
    description:
      "Every quote is built from scratch. Pricing is inconsistent, turnaround is slow, and you're losing deals to faster shops.",
  },
  {
    number: 4,
    title: "Art Approval Chaos",
    description:
      "Proofs sent via email, approvals lost in threads, revisions with no version control. Jobs go to production with the wrong art.",
  },
  {
    number: 5,
    title: "Scaling Requires More Staff, Not Better Systems",
    description:
      "Growing your shop means hiring more people to manage the chaos instead of investing in systems that scale with you.",
  },
];



// ── Two Paths ──
export const twoPathsSection = {
  label: "The Connected Workflow",
  title: "Every stage. One system.",
  subtitle:
    "From the first order to the final shipment — see how both sides of the platform work together.",
  frontend: {
    tag: "Front End",
    title: "What Your Customers See",
    description:
      "The storefront, configurator, and portal your customers interact with — ordering, approving art, and tracking shipments.",
    marqueeItems: [
      "Browse products",
      "Upload artwork",
      "Approve proofs",
      "Track orders",
      "Manage account",
      "Reorder",
    ],
  },
  backend: {
    tag: "Back Office",
    title: "What You Control",
    description:
      "The engine behind every order — quoting, scheduling, production tracking, invoicing, and shipping from a single dashboard.",
    marqueeItems: [
      "Route jobs",
      "Generate invoices",
      "Schedule machines",
      "Print labels",
      "Track production",
      "Manage vendors",
    ],
  },
};

export const workflowSteps = [
  {
    number: "01",
    label: "Intake",
    description: "Order arrives via website or manual entry",
    side: "both" as const,
  },
  {
    number: "02",
    label: "Proofing",
    description: "Art preview with approval / rejection workflow",
    side: "both" as const,
  },
  {
    number: "03",
    label: "Production",
    description: "Jobs routed to machines, tracked in real time",
    side: "backend" as const,
  },
  {
    number: "04",
    label: "Fulfillment",
    description: "Shipping labels generated, carriers integrated",
    side: "backend" as const,
  },
  {
    number: "05",
    label: "Updates",
    description: "Automated customer notifications & status updates",
    side: "both" as const,
  },
];

// ── Tabbed Features ──
export const tabbedFeaturesSection = {
  label: "What You Get",
  title: "See What's Inside",
  subtitle: "Switch between products to see what each one does for your shop.",
  tabs: {
    website: {
      label: "Online Storefront",
      mobileLabel: "Storefront",
      cta: "See the Storefront",
      href: "https://dtlaprint.com",
    },
    filemaker: {
      label: "Shop Titan (FileMaker)",
      mobileLabel: "Shop Titan",
      cta: "Explore Shop Titan",
      href: "https://shop-titan-ebon.vercel.app/",
    },
  },
};

export const websiteFeatures = [
  {
    title: "Product Catalog & Shopping Cart",
    description:
      "Customers browse your products, see pricing, and check out — just like any major online store, but built for decorated goods.",
  },
  {
    title: "Order Customizer",
    description:
      "Customers upload their art, pick decoration methods, position designs, and preview before ordering. Fewer back-and-forth emails.",
  },
  {
    title: "Art Approval Portal",
    description:
      "Send proofs and get approvals online. Customers approve, request changes, or reject — all tracked with version history.",
  },
  {
    title: "Customer Accounts",
    description:
      "Customers log in to see past orders, reorder favorites, manage their designs, and update their info. Fewer support calls for you.",
  },
  {
    title: "Works on Every Device",
    description:
      "Looks great on phones, tablets, and desktops. Your customers can order from anywhere.",
  },
  {
    title: "Promotions & Tracking",
    description:
      "Run coupon codes and promotions. Built-in analytics so you can see what's working and what's not.",
  },
];

export const filemakerFeatures = [
  {
    title: "Quotes & Pricing Matrices",
    description:
      "Set up pricing once — by stitch count, number of colors, quantity breaks, or however you price. Quotes generate automatically.",
  },
  {
    title: "Production Scheduler",
    description:
      "Drag and drop jobs onto your schedule. See who's working on what, which machines are open, and where the bottlenecks are.",
  },
  {
    title: "Customer & Vendor Management",
    description:
      "Every customer and vendor in one place — order history, notes, pricing tiers, and communication logs. No more digging through files.",
  },
  {
    title: "Purchase Orders & Work Orders",
    description:
      "Generate POs for blank goods and work orders for contractors automatically. Track deadlines and never miss a reorder.",
  },
  {
    title: "Product & Online Feed Management",
    description:
      "Manage your product catalog and automatically push updates to Google Shopping, Facebook, Pinterest, and more.",
  },
  {
    title: "Reports & Dashboards",
    description:
      "See your numbers at a glance — sales, production output, inventory levels, and profitability. Know exactly how your shop is performing.",
  },
];

// ── Solutions Demo ──
export const solutionsDemoSection = {
  label: "See It in Action",
  title: "Solutions at a Glance",
  subtitle:
    "Walk through each part of the system — from order intake to invoicing — and see exactly how it works.",
  placeholderText: "GIF or PNG coming soon",
};

export const demoTabs = [
  {
    id: "order-management",
    label: "Order Management",
    description:
      "Track every order from intake to delivery with real-time status updates and automated workflows.",
    safariUrl: "shop-titan.app/orders",
  },
  {
    id: "production-tracking",
    label: "Production",
    description:
      "Monitor production queues, track decorator assignments, and manage capacity across all stations.",
    safariUrl: "shop-titan.app/production",
  },
  {
    id: "customer-portal",
    label: "Customer Portal",
    description:
      "Give customers self-service access to approvals, order history, and real-time job tracking.",
    safariUrl: "dtlaprint.com/portal",
  },
  {
    id: "invoicing",
    label: "Invoicing",
    description:
      "Auto-generate invoices from completed jobs with line-item detail, tax calculations, and payment tracking.",
    safariUrl: "shop-titan.app/invoicing",
  },
  {
    id: "website",
    label: "Website",
    description:
      "A modern storefront with product customization, quoting, and seamless checkout — all connected to Shop Titan.",
    safariUrl: "dtlaprint.com",
  },
];

// ── What's Available ──
export const whatsAvailableSection = {
  label: "What You Get",
  title: "Choose what you need",
  subtitle:
    "License our FileMaker back end, our website technology, or get the full stack with automatic integrations.",
  cta: { text: "Request Early Access", href: "#interest-form" },
};

export const offerings = [
  {
    title: "FileMaker Business Management",
    description:
      "A complete back-office system purpose-built for decoration shops.",
    bullets: [
      "Order management & invoicing",
      "Production scheduling & tracking",
      "Customer & vendor databases",
      "Reporting & analytics dashboards",
    ],
  },
  {
    title: "Website & Customer Portal",
    description:
      "A clone of our production-tested e-commerce and customer-facing platform.",
    bullets: [
      "Online ordering & quoting",
      "Art approval portal",
      "Order status tracking",
      "Customer account management",
    ],
  },
  {
    title: "Automatic Integrations",
    description:
      "Pre-built connections that tie everything together out of the box.",
    bullets: [
      "N8N workflow automations",
      "78+ AI agents for task automation",
      "Shipping & fulfillment integrations",
      "Payment processing",
    ],
  },
];

// ── Features ──
export const featuresSection = {
  label: "Features",
  title: "Built for production shops",
  subtitle:
    "Every feature was built to solve a real problem we faced running DTLA Print.",
  cta: { text: "Get Started With These Features", href: "#interest-form" },
};

export const features = [
  {
    title: "Art Approval Workflows",
    description:
      "Automated proof delivery, customer approval tracking, and version control — no more lost emails.",
  },
  {
    title: "Real-Time Production Tracking",
    description:
      "Know exactly where every job is from art to shipping. Live dashboards your whole team can see.",
  },
  {
    title: "Integrated Quoting System",
    description:
      "Consistent pricing, fast turnaround. Build quotes in minutes with built-in pricing matrices.",
  },
  {
    title: "Customer Portal",
    description:
      "Give customers self-service access to orders, approvals, reorders, and invoices.",
  },
  {
    title: "78+ AI Agents",
    description:
      "Automate repetitive tasks — from art processing to customer communication to inventory alerts.",
  },
  {
    title: "N8N Workflow Integrations",
    description:
      "Connect to any tool in your stack. Pre-built workflows for common decoration shop operations.",
  },
];

// ── Built By Operators ──
export const builtByOperatorsSection = {
  badge: "Built by operators, for operators",
  titleLine1: "This isn't theory.",
  titleLine2: "It's battle-tested daily.",
  description:
    "Every feature was built on the production floor at DTLA Print — a real decoration shop running thousands of orders. We didn't build software and then look for a market. We built it because we needed it. We handle the tech so you can focus on what you do best — decorating.",
  cta: { text: "Get These Systems For Your Shop", href: "#interest-form" },
};

export const operatorStats = [
  { value: "1000", suffix: "s+", label: "Orders Processed" },
  { value: "78", suffix: "+", label: "AI Agents" },
  { value: "24", suffix: "/7", label: "System Uptime" },
  { value: "12", suffix: "+", label: "Years Battle-Tested" },
];

// ── Social Proof ──
export const socialProofSection = {
  label: "Trusted by Shops",
  title: "What Our Clients Say",
  subtitle:
    "Real feedback from decoration shops already running on our technology.",
  placeholderQuote: "Client testimonial placeholder — replace with a real quote.",
};

export const testimonials = [
  { quote: "", name: "Client 1", role: "Owner", avatarSrc: "" },
  { quote: "", name: "Client 2", role: "Production Manager", avatarSrc: "" },
  { quote: "", name: "Client 3", role: "Operations Director", avatarSrc: "" },
  { quote: "", name: "Client 4", role: "Shop Owner", avatarSrc: "" },
  { quote: "", name: "Client 5", role: "Creative Director", avatarSrc: "" },
  { quote: "", name: "Client 6", role: "Business Consultant", avatarSrc: "" },
];

// ── Who This Is For ──
export const whoThisIsForSection = {
  label: "Who This Is For",
  title: "Built for every decoration method",
  subtitle:
    "Whether you're running a single press or multiple facilities, our systems scale with you.",
  cta: { text: "Request Early Access", href: "#interest-form" },
  codes: ["SP", "EM", "DG", "PD", "ML"],
};

export const audiences = [
  {
    title: "Screen Printers",
    description: "High-volume shops managing complex multi-step production runs.",
  },
  {
    title: "Embroidery Shops",
    description: "Operations handling digitizing, stitch counts, and thread management.",
  },
  {
    title: "DTG/DTF Operations",
    description: "Digital decoration shops scaling direct-to-garment and film production.",
  },
  {
    title: "Promotional Product Distributors",
    description: "Distributors coordinating across multiple vendors and decoration methods.",
  },
  {
    title: "Multi-Location Operations",
    description: "Businesses needing unified systems across multiple production facilities.",
  },
];

// ── Tech Stack ──
export const techStackSection = {
  label: "Integrations & Connections",
  title: "Works with the tools you already use",
  subtitle:
    "Everything is pre-connected and ready to go — payments, shipping, marketplaces, and more.",
  cta: { text: "Request Early Access", href: "#interest-form" },
};

export const techStackCards = [
  {
    title: "Payments via Stripe",
    description:
      "Accept every major payment method. Credit cards, digital wallets, and buy-now-pay-later — all through one integration.",
    logos: [
      { src: "/logos/payments/visa.svg", alt: "Visa" },
      { src: "/logos/payments/mastercard.svg", alt: "Mastercard" },
      { src: "/logos/payments/amex.svg", alt: "AMEX" },
      { src: "/logos/payments/discover.svg", alt: "Discover" },
      { src: "/logos/payments/paypal.svg", alt: "PayPal" },
      { src: "/logos/payments/apple-pay.svg", alt: "Apple Pay" },
      { src: "/logos/payments/google-pay.svg", alt: "Google Pay" },
      { src: "/logos/payments/stripe-link.svg", alt: "Stripe Link" },
      { src: "/logos/payments/affirm.svg", alt: "Affirm" },
      { src: "/logos/payments/klarna.svg", alt: "Klarna" },
    ],
    className: "col-span-1 lg:col-span-2",
  },
  {
    title: "Shipping & Logistics",
    description:
      "Live rates, label generation, and tracking from every major carrier — powered by ShipStation.",
    logos: [
      { src: "/logos/shipping/ups.svg", alt: "UPS" },
      { src: "/logos/shipping/fedex.svg", alt: "FedEx" },
      { src: "/logos/shipping/usps.svg", alt: "USPS" },
      { src: "/logos/shipping/dhl.svg", alt: "DHL" },
      { src: "/logos/shipping/amazon.svg", alt: "Amazon" },
      { src: "/logos/shipping/shipwire.svg", alt: "ShipWire" },
    ],
    className: "col-span-1 lg:col-span-1",
  },
  {
    title: "Automations",
    description:
      "Automate the busywork — order routing, notifications, and follow-ups run on autopilot.",
    logos: [
      { src: "/logos/tools/n8n.svg", alt: "n8n" },
      { src: "/logos/tools/zapier.svg", alt: "Zapier" },
      { src: "/logos/tools/make.svg", alt: "Make" },
    ],
    className: "col-span-1 lg:col-span-1",
  },
  {
    title: "eCommerce Platforms",
    description:
      "Sync orders and products across every major marketplace and storefront.",
    logos: [
      { src: "/logos/integrations/shopify.svg", alt: "Shopify" },
      { src: "/logos/integrations/woocommerce.svg", alt: "WooCommerce" },
      { src: "/logos/integrations/amazon.svg", alt: "Amazon" },
      { src: "/logos/integrations/etsy.svg", alt: "Etsy" },
      { src: "/logos/integrations/ebay.svg", alt: "eBay" },
      { src: "/logos/integrations/faire.svg", alt: "Faire" },
      { src: "/logos/integrations/fashion-go.svg", alt: "Fashion Go" },
      { src: "/logos/integrations/google-merchant-center.svg", alt: "Google Merchant Center" },
    ],
    className: "col-span-1 lg:col-span-2",
  },
  {
    title: "Secure & Always Online",
    description:
      "Your data is backed up every hour, saved nightly, and monitored around the clock. You focus on printing — we keep the lights on.",
    logos: [{ src: "/logos/storage/amazonS3.svg", alt: "Amazon S3" }],
    className: "col-span-1 lg:col-span-3",
  },
];

// ── Interest Form ──
export const differenceSection = {
  label: "What We Offer",
  title: "The DTLA Print Difference",
  subtitle:
    "DTLA Print was created to provide helpful service, simple streamlined ordering & eco-friendly options. A company with transparent prices & ethics, a company who aims to create good things.",
};

export const differenceItems = [
  {
    title: "We Don\u2019t Cookie Cut",
    desc: "Each project is unique and requires its own process. Depending on the desired product we will customize the inks and process for each order.",
  },
  {
    title: "Innovative Ideas",
    desc: "DTLA Print is proud to be a leading partner in the promotional products + fashion industry. With unique ideas + out of the box printing methods.",
  },
  {
    title: "We Stand Behind Our Work",
    desc: "Our main goal is to provide peace of mind so you can relax and have confidence that your job will come out exactly as you had imagined.",
  },
  {
    title: "Quality Over Quantity",
    desc: "DTLA Print believes in quality over quantity and we want our customers to feel the same way.",
  },
  {
    title: "Dedicated Reps",
    desc: "Each account receives a dedicated rep who can be reached face to face by phone or via e-mail.",
  },
  {
    title: "Long Lasting Relationships",
    desc: "We value all of our clients and aim to solidify long lasting & mutually beneficial relationships.",
  },
];

export const interestFormSection = {
  label: "Get Started",
  title: "Request early access",
  subtitle:
    "Tell us about your shop and we'll show you how these systems can work for you — no tech knowledge required.",
  successTitle: "You're on the list",
  successMessage: "We'll be in touch within 24 hours to discuss next steps.",
};

export const interestOptions = [
  "Online Storefront",
  "Shop Titan (FileMaker Backend)",
  "Both",
];

export const shopTypeOptions = [
  "Screen Print",
  "Embroidery",
  "DTG",
  "DTF",
  "Promo",
  "Other",
];

export const orderVolumeOptions = [
  "<100",
  "100-500",
  "500-1000",
  "1000+",
];

// ── Footer ──
export const footer = {
  brand: "DTLA PRINT",
  siteUrl: "https://dtlaprint.com",
  siteLabel: "dtlaprint.com",
  ctaText: "Interested in our tech stack?",
  ctaHref: "#interest-form",
};
