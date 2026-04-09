"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { audiences, whoThisIsForSection } from "@/lib/constants";
import InteractiveHoverButton from "./InteractiveHoverButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const codes = whoThisIsForSection.codes;

export default function WhoThisIsFor() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll("[data-who-item]");
    gsap.set(items, { x: -20, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: section, start: "top 72%", once: true },
    });

    tl.to(items, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
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
      className="w-full py-[var(--section-padding-y)] bg-[var(--bg-secondary)]"
      data-scroll-section
    >
      <div className="w-full max-w-[80rem] mx-auto px-[var(--container-padding-x)]">

        {/* ── Swiss-style header: asymmetric 2-col ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] border border-[var(--structural-border)] text-sm font-medium text-[var(--text)] mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--brand)]" />
              <span>{whoThisIsForSection.label}</span>
            </div>
            <h2 className="text-[clamp(1.75rem,1.4rem+1vw,2.75rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)]">
              {whoThisIsForSection.title}
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-6 flex items-end">
            <p className="text-[0.9375rem] leading-[1.7] text-[var(--text-secondary)]">
              {whoThisIsForSection.subtitle}
            </p>
          </div>
        </div>

        {/* ── Audience grid: editorial asymmetric layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-0">
          {audiences.map((audience, i) => {
            const isEven = i % 2 !== 0;

            return (
              <div
                key={i}
                data-who-item
                className={`group cursor-pointer md:col-span-10 ${
                  isEven ? "md:col-start-3" : "md:col-start-1"
                }`}
              >
                {/* Top rule */}
                <div className="h-px bg-[var(--structural-border)]" />

                <div className={`flex items-baseline gap-6 md:gap-10 py-8 md:py-10 transition-all duration-300 ${
                  isEven ? "flex-row-reverse text-right group-hover:pr-3" : "group-hover:pl-3"
                }`}>

                  {/* Index — large monospaced */}
                  <span
                    className="shrink-0 text-[2.5rem] md:text-[3.5rem] font-bold leading-none tracking-tighter tabular-nums text-[var(--structural-border)] transition-colors duration-300 group-hover:text-[var(--brand)] select-none"
                    style={{ fontFamily: "var(--font-accent)", fontVariantNumeric: "tabular-nums" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Code tag */}
                  <span className="shrink-0 hidden sm:block text-[0.625rem] font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] border border-[var(--structural-border)] rounded px-2 py-1 transition-all duration-300 group-hover:border-[var(--brand)] group-hover:text-[var(--brand)] group-hover:bg-[var(--brand-10)]">
                    {codes[i]}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[1.125rem] md:text-[1.375rem] font-bold text-[var(--text)] leading-tight mb-1 transition-colors duration-300 group-hover:text-[var(--brand)]">
                      {audience.title}
                    </h3>
                    <p className={`text-[0.8125rem] md:text-[0.875rem] leading-[1.65] text-[var(--text-secondary)] max-w-lg ${
                      isEven ? "ml-auto" : ""
                    }`}>
                      {audience.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg
                    className={`shrink-0 w-5 h-5 text-[var(--text-muted)] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-[var(--brand)] ${
                      isEven ? "translate-x-2 group-hover:translate-x-0 rotate-180" : "-translate-x-2 group-hover:translate-x-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </div>
              </div>
            );
          })}
          {/* Final rule */}
          <div className="md:col-span-12 h-px bg-[var(--structural-border)]" />
        </div>

        {/* ── CTA ── */}
        <div className="flex justify-center mt-14">
          <InteractiveHoverButton href={whoThisIsForSection.cta.href} variant="primary">
            {whoThisIsForSection.cta.text}
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
