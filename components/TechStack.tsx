"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";
import InteractiveHoverButton from "./InteractiveHoverButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Logo {
  src: string;
  alt: string;
}

interface BentoCardData {
  title: string;
  description: string;
  logos: Logo[];
  className: string;
}

const cards: BentoCardData[] = [
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
      "Connect to any tool in your stack with pre-built workflow automations.",
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
    title: "Cloud Infrastructure",
    description:
      "Enterprise-grade hosting on AWS S3. Hourly backups, nightly save states, and 24/7 uptime monitoring.",
    logos: [
      { src: "/logos/storage/amazonS3.svg", alt: "Amazon S3" },
    ],
    className: "col-span-1 lg:col-span-3",
  },
];

function BentoCard({ title, description, logos, className }: BentoCardData) {
  const isFullWidth = className.includes("col-span-3");

  if (isFullWidth) {
    return (
      <div
        className={`group relative overflow-hidden rounded-[16px] border border-white/[0.06] bg-[var(--bg-card)] transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] ${className}`}
      >
        <div className="flex flex-col sm:flex-row items-center gap-6 p-8">
          {/* Logos on the right, faded */}
          <div className="flex items-center gap-4 shrink-0 order-2 sm:order-1 sm:mr-auto">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center px-5 py-3 rounded-lg bg-white/90"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          {/* Text */}
          <div className="text-center sm:text-right order-1 sm:order-2">
            <h3 className="text-lg font-bold text-white mb-1.5">{title}</h3>
            <p className="text-sm leading-relaxed text-white/50 max-w-md">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-[16px] border border-white/[0.06] bg-[var(--bg-card)] transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] ${className}`}
    >
      {/* Logo background — fades out toward bottom */}
      <div className="absolute inset-0 flex flex-wrap items-start justify-center gap-3 p-6 pt-8 content-start [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.15)_55%,transparent_80%)] transition-all duration-500 group-hover:scale-105">
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="flex items-center justify-center px-4 py-2.5 rounded-lg bg-white/90 shrink-0"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Card content — anchored to bottom */}
      <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-end p-6">
        <h3 className="text-lg font-bold text-white mb-1.5">{title}</h3>
        <p className="text-sm leading-relaxed text-white/50">{description}</p>
      </div>
    </div>
  );
}

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const bentoCards = section.querySelectorAll("[data-bento-card]");
    if (bentoCards.length === 0) {
      // fallback: animate the grid wrapper children
      const grid = section.querySelector("[data-bento-grid]");
      if (!grid) return;
      const children = grid.children;
      gsap.set(children, { y: 40, opacity: 0 });
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: "top 75%", once: true },
      });
      tl.to(children, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });
      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === section) t.kill();
        });
      };
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-[var(--section-padding-y)] bg-[var(--bg-secondary)] border-y border-white/[0.04]"
    >
      <div className="w-full px-[var(--container-padding-x)]">
        <div className="text-center mb-14 max-w-[80rem] mx-auto">
          <SectionHeading
            label="Integrations & Infrastructure"
            title="Powered by the tools you trust"
            subtitle="Every integration is pre-built and battle-tested. Plug in and go."
          />
        </div>

        {/* Bento Grid — 3 columns */}
        <div
          data-bento-grid
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>

        <div className="flex justify-center mt-10 max-w-[80rem] mx-auto">
          <InteractiveHoverButton href="#interest-form" variant="primary">
            Request Early Access
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
