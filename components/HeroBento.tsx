import Marquee from "./Marquee";

interface LogoItem {
  src: string;
  alt: string;
}

interface FeatureCard {
  type: "feature";
  title: string;
  icon: React.ReactNode;
  bullets: string[];
  className: string;
}

interface LogoCard {
  type: "logos";
  title: string;
  description: string;
  logos: LogoItem[];
  reverse?: boolean;
  className: string;
}

type Card = FeatureCard | LogoCard;

const cards: Card[] = [
  // Row 1 — feature cards
  {
    type: "feature",
    title: "Production Queue",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
    bullets: ["Track every order from art to shipping", "Color-coded status indicators", "Drag-and-drop priority reordering"],
    className: "col-span-2",
  },
  {
    type: "feature",
    title: "Quick Quote",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bullets: ["Built-in pricing matrices", "Auto-calculate quantity breaks"],
    className: "col-span-1",
  },

  // Row 2 — logo cards (same layout as TechStack bento row 1)
  
  {
    type: "logos",
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
    type: "logos",
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

  // Row 3 — feature cards
  {
    type: "feature",
    title: "Order Management",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    bullets: ["Centralized order dashboard", "Art file versioning", "Linked invoicing & payments"],
    className: "col-span-2",
  },
  {
    type: "feature",
    title: "AI Agents",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    bullets: ["Auto-generate proofs", "Smart production routing"],
    className: "col-span-1",
  },

  // Row 4 — logo cards (same layout as TechStack bento row 2)
  {
    type: "logos",
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
    type: "logos",
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
];

function LogoPill({ src, alt }: LogoItem) {
  return (
    <div className="flex items-center justify-center px-3 py-2 rounded-md bg-white/90 shrink-0">
      <img src={src} alt={alt} className="h-6 w-auto object-contain" />
    </div>
  );
}

export default function HeroBento() {
  return (
    <div className="w-full grid grid-cols-3 gap-3 [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_92%,transparent_100%)]">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`group relative overflow-hidden rounded-[14px] border border-white/[0.06] bg-[var(--bg-card)] transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] ${card.className}`}
        >
          {card.type === "logos" ? (
            <>
              {/* Marquee logos as animated background */}
              <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.12)_50%,transparent_75%)]">
                <Marquee
                  pauseOnHover
                  reverse={card.reverse}
                  className="pt-4 [--duration:25s]"
                >
                  {card.logos.map((logo) => (
                    <LogoPill key={logo.alt} {...logo} />
                  ))}
                </Marquee>
              </div>

              {/* Text anchored to bottom */}
              <div className="relative z-10 flex h-full min-h-[140px] flex-col justify-end p-5">
                <h3 className="text-sm font-bold text-white mb-0.5">{card.title}</h3>
                <p className="text-[11px] leading-relaxed text-white/35">{card.description}</p>
              </div>
            </>
          ) : (
            <div className="flex h-full min-h-[140px] flex-col justify-between p-5">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[var(--brand-10)] text-[var(--brand)] flex items-center justify-center mb-3">
                  {card.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{card.title}</h3>
              </div>
              {card.bullets && (
                <ul className="mt-2 space-y-1">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-1.5 text-[11px] text-white/30">
                      <svg className="w-3 h-3 shrink-0 text-[var(--brand)] opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
