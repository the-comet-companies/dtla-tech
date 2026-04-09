"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aiPlatformSection, aiModels, aiCapabilities } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AIPlatform() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll("[data-ai-reveal]");
    gsap.set(items, { y: 24, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: section, start: "top 78%", once: true },
    });

    tl.to(items, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.06,
      ease: "power2.out",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-[var(--section-padding-y)]"
      data-scroll-section
    >
      <div className="w-full max-w-[80rem] mx-auto px-[var(--container-padding-x)]">
        {/* ── Header ── */}
        <div className="max-w-2xl mx-auto text-center mb-20" data-ai-reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] border border-[var(--structural-border)] text-sm font-medium text-[var(--text)] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand)] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand)]" />
            </span>
            <span>{aiPlatformSection.label}</span>
          </div>
          <h2 className="text-[clamp(1.75rem,1.4rem+1vw,2.5rem)] font-bold leading-[1.1] text-[var(--text)] mb-4">
            {aiPlatformSection.title}
          </h2>
          <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
            {aiPlatformSection.subtitle}
          </p>
        </div>

        {/* ── AI Models — horizontal strip ── */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-14 md:gap-24 mb-20"
          data-ai-reveal
        >
          {aiModels.map((model) => (
            <div
              key={model.name}
              className="group flex flex-col items-center gap-3 sm:gap-4 cursor-pointer"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl border border-transparent transition-all duration-200 group-hover:border-[var(--structural-border)] group-hover:bg-black/[0.02]">
                <img
                  src={model.logo}
                  alt={model.name}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-50 transition-opacity duration-200 group-hover:opacity-100"
                />
              </div>
              <span className="text-sm font-medium text-[var(--text-muted)] tracking-wide transition-colors duration-200 group-hover:text-[var(--text)]">
                {model.name}
              </span>
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-[var(--structural-border)] mb-20" data-ai-reveal />

        {/* ── Capabilities — clean 2-col with left accent ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {aiCapabilities.map((cap) => (
            <div
              key={cap.title}
              data-ai-reveal
              className="group flex gap-5"
            >
              {/* Accent line */}
              <div className="relative shrink-0 w-[2px] self-stretch rounded-full bg-[var(--structural-border)] overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-0 group-hover:h-full bg-[var(--brand)] transition-all duration-500 ease-out rounded-full" />
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-[var(--brand)] text-lg">
                    {cap.icon}
                  </span>
                  <h3 className="text-[0.9375rem] font-semibold text-[var(--text)] leading-tight">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-[0.875rem] leading-[1.7] text-[var(--text-secondary)] max-w-md">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
