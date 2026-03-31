"use client";

import { useState, useRef, useCallback, useEffect, type JSX } from "react";
import gsap from "gsap";
import { websiteFeatures, filemakerFeatures } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import InteractiveHoverButton from "./InteractiveHoverButton";

type Tab = "website" | "filemaker";

const tabMeta: Record<Tab, { label: string; icon: JSX.Element; cta: string; href: string }> = {
  website: {
    label: "Website Technology",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    cta: "Explore Website Tech",
    href: "https://dtlaprint.com",
  },
  filemaker: {
    label: "Shop Titan (FileMaker)",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    cta: "Explore Shop Titan",
    href: "https://shop-titan-ebon.vercel.app/",
  },
};

export default function TabbedFeatures() {
  const [activeTab, setActiveTab] = useState<Tab>("website");
  const gridRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isAnimating = useRef(false);
  const prevTab = useRef<Tab>("website");

  const features = activeTab === "website" ? websiteFeatures : filemakerFeatures;
  const meta = tabMeta[activeTab];

  const switchTab = useCallback(
    (tab: Tab) => {
      if (tab === activeTab || isAnimating.current) return;
      isAnimating.current = true;

      const grid = gridRef.current;
      if (!grid) {
        setActiveTab(tab);
        return;
      }

      // Slide out: website exits left, filemaker exits right
      const exitX = tab === "filemaker" ? -80 : 80;

      gsap.to(grid, {
        x: exitX,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          prevTab.current = tab;
          setActiveTab(tab);
        },
      });
    },
    [activeTab]
  );

  // Slide in after tab updates
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Slide in: website enters from left, filemaker enters from right
    const enterX = activeTab === "filemaker" ? 80 : -80;

    gsap.fromTo(
      grid,
      { x: enterX, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        onComplete: () => {
          isAnimating.current = false;
        },
      }
    );
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="w-full bg-[var(--bg-secondary)]"
    >
      <div className="w-full px-[var(--container-padding-x)] py-[var(--section-padding-y)]">
        {/* Heading */}
        <div className="text-center mb-12 max-w-[80rem] mx-auto" data-animate="fade-up">
          <SectionHeading
            label="What You Get"
            title="Explore the Stack"
            subtitle="Toggle between products to explore what each brings to your shop."
          />
        </div>

        {/* Tab toggle */}
        <div className="flex justify-center mb-14">
          <div
            className="relative inline-flex rounded-full p-1 bg-white/[0.06] border border-[var(--border)]"
          >
            {(["website", "filemaker"] as Tab[]).map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  onClick={() => switchTab(tab)}
                  className="relative z-10 flex items-center gap-2 px-6 py-3 rounded-full text-[0.9375rem] font-semibold transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: isActive ? "var(--brand)" : "transparent",
                    color: isActive ? "white" : "rgba(255,255,255,0.5)",
                  }}
                >
                  {tabMeta[tab].icon}
                  <span className="hidden sm:inline">{tabMeta[tab].label}</span>
                  <span className="sm:hidden">
                    {tab === "website" ? "Website" : "Shop Titan"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, i) => (
            <div
              key={`${activeTab}-${i}`}
              data-tab-card
              className="group rounded-[16px] p-7 flex flex-col transition-all duration-300 bg-[var(--bg-card)] border border-[var(--border)] hover:border-white/[0.15] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              {/* Number badge */}
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold mb-5 shrink-0 bg-[var(--brand-10)] text-[var(--brand)]"
              >
                {i + 1}
              </div>

              <h3 className="text-[1.0625rem] font-bold leading-tight mb-2 text-[var(--text)]">
                {feature.title}
              </h3>
              <p className="text-[0.875rem] leading-relaxed text-[var(--text-secondary)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className="flex justify-center mt-10">
          <InteractiveHoverButton
            href={meta.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            {meta.cta}
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
