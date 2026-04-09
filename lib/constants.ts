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
  desktop: "DTLA Print test staging",
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
  title: "Solutions That Scale With You",
  subtitle:
    "Start with what you need. Expand as your business grows.",
};

export const solutionsDemoTabs = [
  { id: "website", label: "Website", icon: "language" },
  { id: "filemaker", label: "FileMaker", icon: "database" },
  { id: "both", label: "Website + FileMaker", icon: "hub" },
];

export const websiteDemoFeatures = [
  {
    id: "storefront",
    tabLabel: "Storefront",
    tabIcon: "storefront",
    title: "Custom Storefront",
    painPoint: {
      label: "THE FRICTION",
      description:
        "Generic website templates that don't fit apparel decoration. No way to showcase your work, handle custom orders, or reflect your brand.",
    },
    solution: {
      label: "THE FIX",
      description:
        "A fully branded storefront built for print shops. Showcase your products, services, and portfolio — designed to convert visitors into customers.",
    },
    imageSrc: "/demos/website/StoreFront.png",
    browserUrl: "dtlaprint.com",
  },
  {
    id: "product-catalog",
    tabLabel: "Product Catalog",
    tabIcon: "grid_view",
    title: "Product Catalog",
    painPoint: {
      label: "THE FRICTION",
      description:
        "Your customers can't see what you carry. No browsable catalog, no color options, no way to compare styles — they call, email, or go somewhere else.",
    },
    solution: {
      label: "THE FIX",
      description:
        "A browsable, searchable product catalog that shows everything you offer — with real photos, color swatches, size breakdowns, and live pricing.",
    },
    imageSrc: "/demos/website/ProductCatalog.png",
    browserUrl: "dtlaprint.com/products",
  },
  {
    id: "brands",
    tabLabel: "Brands",
    tabIcon: "loyalty",
    title: "Brands",
    painPoint: {
      label: "THE FRICTION",
      description:
        "Customers don't know what blanks you carry. No way to browse by brand, compare quality, or see what's available.",
    },
    solution: {
      label: "THE FIX",
      description:
        "Showcase every brand you carry with dedicated brand pages. Customers browse by brand, see available styles, and order with confidence.",
    },
    imageSrc: "/demos/website/Brands.png",
    browserUrl: "dtlaprint.com/brands",
  },
  {
    id: "drag-and-drop",
    tabLabel: "Drag & Drop",
    tabIcon: "upload_file",
    title: "Drag & Drop Upload",
    painPoint: {
      label: "THE FRICTION",
      description:
        "Customers emailing artwork back and forth. Lost files, wrong formats, unclear placement instructions. Endless revision cycles.",
    },
    solution: {
      label: "THE FIX",
      description:
        "Drag-and-drop file upload right on your website. Customers attach their artwork directly to their order — no emails, no confusion.",
    },
    imageSrc: "/demos/website/DragAndDrop.png",
    browserUrl: "dtlaprint.com/upload",
  },
  {
    id: "services",
    tabLabel: "Services",
    tabIcon: "design_services",
    title: "Services",
    painPoint: {
      label: "THE FRICTION",
      description:
        "Customers don't know what decoration methods you offer. No clear breakdown of services — so they look elsewhere.",
    },
    solution: {
      label: "THE FIX",
      description:
        "Dedicated services pages that showcase every decoration method you offer. Customers understand your capabilities and order the right service.",
    },
    imageSrc: "/demos/website/Services.png",
    browserUrl: "dtlaprint.com/services",
  },
  {
    id: "customer-portal",
    tabLabel: "Customer Portal",
    tabIcon: "person",
    title: "Customer Portal",
    painPoint: {
      label: "THE FRICTION",
      description:
        '"Where\'s my order?" calls all day. Customers have no visibility into their order status, history, or account details.',
    },
    solution: {
      label: "THE FIX",
      description:
        "Self-service customer portal with order tracking, history, reorder capability, and saved designs. Fewer support calls, happier customers.",
    },
    imageSrc: "/demos/website/CustomerPortal.png",
    browserUrl: "dtlaprint.com/portal",
  },
  {
    id: "seo",
    tabLabel: "SEO & Analytics",
    tabIcon: "trending_up",
    title: "SEO & Analytics",
    painPoint: {
      label: "THE FRICTION",
      description:
        "No online presence. Competitors rank above you on Google. No data on who visits your site or what they're looking for.",
    },
    solution: {
      label: "THE FIX",
      description:
        "Built-in SEO optimization, Google Analytics integration, and conversion tracking. Know where your traffic comes from.",
    },
    imageSrc: "/demos/website/SEO.png",
    browserUrl: "dtlaprint.com/analytics",
  },
  {
    id: "mobile",
    tabLabel: "Mobile Responsive",
    tabIcon: "smartphone",
    title: "Mobile Responsive",
    painPoint: {
      label: "THE FRICTION",
      description:
        "Your website breaks on mobile. Over 60% of traffic is mobile, but your site was built for desktop only.",
    },
    solution: {
      label: "THE FIX",
      description:
        "Fully responsive design that looks and works perfectly on any device. Your customers can browse, configure, and order from their phone.",
    },
    imageSrc: "/demos/website/mobile.png",
    browserUrl: "dtlaprint.com",
    useMobileFrame: true,
  },
];

export const filemakerDemoFeatures = [
  {
    id: "quotes",
    tabLabel: "Quotes",
    tabIcon: "request_quote",
    title: "Quotes",
    painPoint: {
      label: "THE FRICTION",
      description:
        "Manual quote creation with spreadsheets. Inconsistent pricing. Hours spent calculating setup fees, per-piece costs, and rush charges.",
    },
    solution: {
      label: "THE FIX",
      description:
        "Automated quote generation with intelligent pricing matrices. Template library, auto-calculations, and one-click PDF generation.",
    },
    imageSrc: "/demos/filemaker/Quotes.png",
    browserUrl: "app.shoptitan.com/quotes",
  },
  {
    id: "orders",
    tabLabel: "Orders",
    tabIcon: "shopping_cart",
    title: "Orders",
    painPoint: {
      label: "THE FRICTION",
      description:
        '"Where is order #492?" Lost orders, unclear status, constant check-in calls. Job jackets getting lost between office and production floor.',
    },
    solution: {
      label: "THE FIX",
      description:
        "End-to-end order tracking with real-time status updates. Every order's journey is logged, visible, and searchable from anywhere.",
    },
    imageSrc: "/demos/filemaker/Orders.png",
    browserUrl: "app.shoptitan.com/orders",
  },
  {
    id: "email-template",
    tabLabel: "Email Templates",
    tabIcon: "mail",
    title: "Email Templates",
    painPoint: {
      label: "THE FRICTION",
      description:
        "Sending plain text emails or manually formatting every message. No consistency, no branding, no way to automate order confirmations.",
    },
    solution: {
      label: "THE FIX",
      description:
        "Professional, branded email templates for order confirmations, invoices, shipping updates, and more. Automated and consistent every time.",
    },
    imageSrc: "/demos/filemaker/EmailTemplate.png",
    browserUrl: "app.shoptitan.com/email",
  },
  {
    id: "support",
    tabLabel: "Support",
    tabIcon: "support_agent",
    title: "Support",
    painPoint: {
      label: "THE FRICTION",
      description:
        "Transfer requests and firm confirmations handled through scattered emails and phone calls. No tracking, no accountability, no audit trail.",
    },
    solution: {
      label: "THE FIX",
      description:
        "Built-in transfer and firm management. Track requests, confirmations, and status changes in one place — with full history and real-time updates.",
    },
    imageSrc: "/demos/filemaker/transfer&firm.gif",
    browserUrl: "app.shoptitan.com/support",
  },
  {
    id: "tasks",
    tabLabel: "Task Types",
    tabIcon: "tune",
    title: "Task Types",
    painPoint: {
      label: "THE FRICTION",
      description:
        "Rigid software that can't handle your custom workflows. Every shop does things differently, but you're stuck with one-size-fits-all.",
    },
    solution: {
      label: "THE FIX",
      description:
        "Fully configurable task types and decoration methods. Custom fields, workflow rules, and pricing formulas for ANY process you run.",
    },
    imageSrc: "/demos/filemaker/TaskTypes.png",
    browserUrl: "app.shoptitan.com/tasks",
  },
  {
    id: "pricing",
    tabLabel: "Service Pricing",
    tabIcon: "grid_on",
    title: "Service Pricing Grid",
    painPoint: {
      label: "THE FRICTION",
      description:
        "Underquoting complex jobs. No structured pricing for different decoration types. Sales team guessing at stitch counts or screen counts.",
    },
    solution: {
      label: "THE FIX",
      description:
        "Dynamic pricing matrices for all decoration types: embroidery (stitch count), screen printing (colors, screens), sewing, and any custom task.",
    },
    imageSrc: "/demos/filemaker/ServicePricingGrid.png",
    browserUrl: "app.shoptitan.com/pricing",
  },
  {
    id: "screen-pricing",
    tabLabel: "Screen Pricing",
    tabIcon: "grid_on",
    title: "Screen Pricing Grid",
    painPoint: {
      label: "THE FRICTION",
      description:
        "Screen printing pricing is a guessing game. Number of colors, screen counts, and setup fees vary per job — nobody quotes them consistently.",
    },
    solution: {
      label: "THE FIX",
      description:
        "Dedicated screen printing pricing matrix. Set rates by color count, quantity breaks, and screen fees — every quote is accurate.",
    },
    imageSrc: "/demos/filemaker/ScreenPricingGrid.png",
    browserUrl: "app.shoptitan.com/screen-pricing",
  },
  {
    id: "customers",
    tabLabel: "Customers / Vendors",
    tabIcon: "people",
    title: "Customers / Vendors",
    painPoint: {
      label: "THE FRICTION",
      description:
        "Contact info scattered across emails, sticky notes, and old spreadsheets. No relationship history. No visibility into customer lifetime value.",
    },
    solution: {
      label: "THE FIX",
      description:
        "Unified CRM and VRM with complete relationship tracking. Contact cards, order history, notes, and communication logs all in one place.",
    },
    imageSrc: "/demos/filemaker/Customers.png",
    browserUrl: "app.shoptitan.com/customers",
  },
  {
    id: "purchase-orders",
    tabLabel: "Purchase Orders",
    tabIcon: "receipt_long",
    title: "Purchase Orders",
    painPoint: {
      label: "THE FRICTION",
      description:
        "Manual PO creation, vendor emails flying back and forth. Stock running out mid-job because nobody tracked what was ordered.",
    },
    solution: {
      label: "THE FIX",
      description:
        "Automated PO generation with vendor integration. RFQ workflow for quotes, auto-reordering based on stock levels, and complete order tracking.",
    },
    imageSrc: "/demos/filemaker/PurchaseOrders.png",
    browserUrl: "app.shoptitan.com/purchase-orders",
  },
  {
    id: "reporting",
    tabLabel: "Reporting",
    tabIcon: "assessment",
    title: "Reporting",
    painPoint: {
      label: "THE FRICTION",
      description:
        "No visibility into your numbers. Revenue, costs, and margins buried in spreadsheets. You find out about problems weeks after they happen.",
    },
    solution: {
      label: "THE FIX",
      description:
        "Built-in reporting with real-time dashboards. Track revenue, production output, costs, and profitability — all from one place.",
    },
    imageSrc: "/demos/filemaker/Reporting.png",
    browserUrl: "app.shoptitan.com/reporting",
  },
  {
    id: "contractors",
    tabLabel: "Contractors",
    tabIcon: "handshake",
    title: "Contractor Work Orders",
    painPoint: {
      label: "THE FRICTION",
      description:
        "Subcontractor miscommunication. Work sent out with vague specs. Jobs coming back wrong or late with no accountability.",
    },
    solution: {
      label: "THE FIX",
      description:
        "Digital work order system for contractors. Send work out with detailed spec sheets, track deadlines, and get quality confirmation — all documented.",
    },
    imageSrc: "/demos/filemaker/Contractor.png",
    browserUrl: "app.shoptitan.com/contractors",
  },
];

// ── What's Available ──
// ── AI-Powered Platform ──
export const aiPlatformSection = {
  label: "AI-Powered",
  title: "AI-Powered Platform",
  subtitle:
    "Our website and FileMaker system are integrated with leading AI models. From smart product descriptions and automated customer responses to intelligent order processing and predictive analytics.",
};

export const aiModels = [
  { name: "OpenAI", logo: "/logos/ai/openai.svg", description: "GPT-4o for content generation, product descriptions, and customer communication." },
  { name: "Claude", logo: "/logos/ai/claude.png", description: "Advanced reasoning for complex order processing and business analytics." },
  { name: "Gemini", logo: "/logos/ai/gemini.svg", description: "Multimodal AI for image analysis, art file processing, and visual proofing." },
  { name: "Perplexity", logo: "/logos/ai/perplexity.png", description: "Real-time research for market insights, pricing intelligence, and trend analysis." },
];

export const aiCapabilities = [
  {
    icon: "auto_awesome",
    title: "Smart Product Descriptions",
    description: "AI generates SEO-optimized product descriptions, meta tags, and catalog copy — tailored to your brand voice.",
  },
  {
    icon: "support_agent",
    title: "Automated Customer Responses",
    description: "Instant replies to common inquiries — order status, quote requests, and turnaround times — 24/7.",
  },
  {
    icon: "conveyor_belt",
    title: "Intelligent Order Processing",
    description: "AI reads incoming orders, extracts specs, routes jobs to the right machines, and flags potential issues before production.",
  },
  {
    icon: "analytics",
    title: "Predictive Analytics",
    description: "Forecast demand, identify your most profitable services, and spot trends before your competitors do.",
  },
];

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
  title: "Real shops. Real results.",
  subtitle:
    "No demos. No cherry-picked screenshots. Just what print and embroidery shops say after using it.",
};

export const testimonials = [
  {
    quote:
      "Shop Titan transformed how we handle custom orders. What used to take our team hours now gets done in minutes. It's the single biggest upgrade we've made.",
    name: "Sarah Martinez",
    role: "Owner",
    company: "Premier Embroidery Co.",
  },
  {
    quote:
      "The single source of truth concept is revolutionary. No more hunting for information across spreadsheets — everything is exactly where you expect it.",
    name: "Michael Chen",
    role: "Production Manager",
    company: "Elite Screen Printing",
  },
  {
    quote:
      "We scaled from 5 to 20 employees without losing our minds. The system handles everything — orders, scheduling, QC. I can't imagine running the shop without it.",
    name: "Jessica Williams",
    role: "CEO",
    company: "Custom Apparel Solutions",
  },
  {
    quote:
      "Pricing matrices alone saved us from so many costly mistakes. Our quotes go out in seconds now, and customers love the turnaround.",
    name: "David Park",
    role: "Owner",
    company: "Park Print & Promo",
  },
  {
    quote:
      "Rush job coordination used to be pure chaos. Now it's a few clicks and everyone knows exactly what to do. Night and day difference.",
    name: "Tanya Rhodes",
    role: "Shop Manager",
    company: "FastTurn Apparel",
  },
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
