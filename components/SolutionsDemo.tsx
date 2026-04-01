"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import gsap from "gsap";
import { demoTabs as demoTabsData, solutionsDemoSection } from "@/lib/constants";
import { Safari } from "./Safari";
import SectionHeading from "./SectionHeading";

interface DemoTab {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  mediaSrc?: string;        // image path (PNG/GIF)
  mediaType?: "image" | "video";
  safariUrl: string;
}

const iconMap: Record<string, React.ReactNode> = {
  "order-management": (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
    </svg>
  ),
  "production-tracking": (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
    </svg>
  ),
  "customer-portal": (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  invoicing: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
  website: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
};

const demoTabs: DemoTab[] = demoTabsData.map((tab) => ({
  ...tab,
  icon: iconMap[tab.id],
}));

/* ──────────────────────────────────────────────
   Placeholder component shown when no real
   image/GIF has been provided yet
   ────────────────────────────────────────────── */
function DemoPlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#151C2C] relative overflow-hidden select-none">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glowing orb */}
      <div
        className="absolute w-[280px] h-[280px] rounded-full opacity-20 blur-[80px]"
        style={{ background: "var(--brand)" }}
      />

      {/* Icon */}
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/[0.06] border border-[var(--border)] flex items-center justify-center mb-5">
        <svg className="w-7 h-7 text-[var(--brand)] opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25c0 .828.672 1.5 1.5 1.5z" />
        </svg>
      </div>

      {/* Label */}
      <span className="relative z-10 text-sm font-medium text-white/30 tracking-wide uppercase">
        {label}
      </span>
      <span className="relative z-10 text-xs text-white/15 mt-1.5">
        {solutionsDemoSection.placeholderText}
      </span>
    </div>
  );
}

export default function SolutionsDemo() {
  const [activeTab, setActiveTab] = useState(demoTabs[0].id);
  const safariRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const isAnimating = useRef(false);

  const activeDemo = demoTabs.find((t) => t.id === activeTab)!;

  const switchTab = useCallback(
    (tabId: string) => {
      if (tabId === activeTab || isAnimating.current) return;
      isAnimating.current = true;

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false;
        },
      });

      // Fade out Safari + description
      tl.to([safariRef.current, descRef.current], {
        opacity: 0,
        y: 12,
        duration: 0.25,
        ease: "power2.in",
        stagger: 0.04,
        onComplete: () => setActiveTab(tabId),
      });
    },
    [activeTab],
  );

  // Animate in after tab change
  useEffect(() => {
    if (!safariRef.current) return;

    gsap.fromTo(
      [safariRef.current, descRef.current],
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.06,
        onComplete: () => {
          isAnimating.current = false;
        },
      },
    );
  }, [activeTab]);

  return (
    <section
      id="demos"
      className="w-full bg-[var(--bg-body)]"
      data-scroll-section
    >
      <div
        className="w-full max-w-[80rem] mx-auto px-[var(--container-padding-x)] py-[var(--section-padding-y)]"
        data-scroll-content
      >
        {/* ── Heading ── */}
        <div data-animate="fade-up">
          <SectionHeading
            label={solutionsDemoSection.label}
            title={solutionsDemoSection.title}
            subtitle={solutionsDemoSection.subtitle}
          />
        </div>

        {/* ── Mobile tab strip (horizontal scroll) ── */}
        <div className="flex md:hidden gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide" data-animate="fade-up">
          {demoTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-[0.8125rem] font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap border"
                style={{
                  backgroundColor: isActive ? "var(--brand)" : "transparent",
                  borderColor: isActive ? "var(--brand)" : "rgba(255,255,255,0.08)",
                  color: isActive ? "white" : "rgba(255,255,255,0.45)",
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── Desktop: sidebar tabs + Safari ── */}
        <div className="flex gap-6 items-start" data-animate="fade-up">
          {/* Vertical tab list — desktop only */}
          <div className="hidden md:flex flex-col shrink-0 w-[220px]">
            {demoTabs.map((tab, i) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => switchTab(tab.id)}
                  className="group relative flex items-center gap-3 px-4 py-4 text-left cursor-pointer transition-all duration-300"
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full transition-all duration-400"
                    style={{
                      backgroundColor: isActive ? "var(--brand)" : "rgba(255,255,255,0.06)",
                      boxShadow: isActive ? "0 0 12px rgba(240,92,78,0.3)" : "none",
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? "var(--brand-10)" : "rgba(255,255,255,0.03)",
                      color: isActive ? "var(--brand)" : "rgba(255,255,255,0.3)",
                    }}
                  >
                    {tab.icon}
                  </div>

                  {/* Label + description */}
                  <div className="min-w-0">
                    <span
                      className="block text-[0.8125rem] font-semibold leading-tight transition-colors duration-300 truncate"
                      style={{
                        color: isActive ? "var(--text)" : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {tab.label}
                    </span>
                    {isActive && (
                      <span className="block text-[0.6875rem] leading-snug text-[var(--text-secondary)] mt-0.5 line-clamp-2">
                        {tab.description}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Safari mockup */}
          <div className="flex-1 min-w-0">
            {/* Mobile description */}
            <p
              ref={descRef}
              className="md:hidden text-[0.875rem] leading-relaxed text-[var(--text-secondary)] mb-5"
            >
              {activeDemo.description}
            </p>

            <div ref={safariRef} className="relative">
              <Safari
                key={activeTab}
                url={activeDemo.safariUrl}
                imageSrc={activeDemo.mediaSrc}
                mode="default"
              />

              {/* Placeholder overlay */}
              {!activeDemo.mediaSrc && (
                <div
                  className="absolute overflow-hidden pointer-events-none"
                  style={{
                    left: `${(1 / 1203) * 100}%`,
                    top: `${(52 / 753) * 100}%`,
                    width: `${(1200 / 1203) * 100}%`,
                    height: `${(700 / 753) * 100}%`,
                    borderRadius: "0 0 11px 11px",
                  }}
                >
                  <DemoPlaceholder label={activeDemo.label} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
