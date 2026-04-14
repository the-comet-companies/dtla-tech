"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { twoPathsSection, workflowSteps } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import Marquee from "./Marquee";
import CircuitAccent from "./CircuitAccent";
import { AnimatedList } from "./ui/AnimatedList";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TwoPaths() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const cardEls = cards.querySelectorAll("[data-path-card]");

    gsap.set(cardEls, {
      rotateX: 45,
      opacity: 0.4,
      y: 60,
      transformPerspective: 800,
      transformOrigin: "center bottom",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 20%",
        scrub: 0.8,
      },
    });

    tl.to(cardEls, {
      rotateX: 0,
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.12,
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
    <section ref={sectionRef} className="w-full py-[var(--section-padding-y)] bg-[var(--bg-secondary)] relative overflow-hidden" data-scroll-section>
      {/* Vertical circuit accents — left + right edges */}
      <CircuitAccent variant="left" opacity={0.3} />
      <CircuitAccent variant="right" opacity={0.3} />

      <div className="w-full px-[var(--container-padding-x)] relative" data-scroll-content>
        <div className="text-center mb-16 max-w-[80rem] mx-auto" data-scroll-heading>
          <SectionHeading
            label={twoPathsSection.label}
            title={twoPathsSection.title}
            subtitle={twoPathsSection.subtitle}
          />
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[80rem] mx-auto" style={{ perspective: "1000px" }}>
          {/* Left — What Your Customers See (Website) */}
          <div
            data-path-card
            className="group relative rounded-[16px] border border-[var(--structural-border)] bg-[var(--bg-card)] pt-16 pb-8 px-8 md:pt-18 md:pb-10 md:px-10 flex flex-col transition-all duration-300 hover:border-black/[0.12] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] overflow-visible will-change-transform"
          >
            {/* Overlapping icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[var(--bg-card)] border border-[var(--structural-border)] shadow-[var(--shadow)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg className="w-7 h-7 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>

            <div className="text-center mb-2">
              <p className="text-xs uppercase tracking-widest text-[var(--text-muted)]">{twoPathsSection.frontend.tag}</p>
              <h3 className="text-lg font-bold text-[var(--text)]">{twoPathsSection.frontend.title}</h3>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              {twoPathsSection.frontend.description}
            </p>

            <AnimatedList className="!gap-3 mb-8 flex-1" delay={1200} cycleDuration={10000}>
              {workflowSteps.filter(s => s.side === "both").map((step, i) => (
                <div key={step.label} className="flex items-center gap-3 p-3 rounded-lg bg-black/[0.02] border border-[var(--structural-border)]">
                  <span className="text-xs font-bold text-[var(--brand)] bg-[var(--brand-10)] px-2 py-1 rounded-md shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text)]">{step.label}</p>
                    <p className="text-xs text-[var(--text-muted)]">{step.description}</p>
                  </div>
                </div>
              ))}
            </AnimatedList>

            <div className="space-y-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
              <Marquee pauseOnHover className="[--duration:22s]">
                {twoPathsSection.frontend.marqueeItems.map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[var(--structural-border)] bg-black/[0.02] text-sm text-[var(--text-secondary)] whitespace-nowrap">
                    {item}
                  </span>
                ))}
              </Marquee>
            </div>
          </div>

          {/* Right — What You Control (Shop Titan) */}
          <div
            data-path-card
            className="group relative rounded-[16px] border-2 border-[var(--brand)]/30 bg-gradient-to-br from-[var(--brand-10)] to-[var(--bg-card)] pt-16 pb-8 px-8 md:pt-18 md:pb-10 md:px-10 flex flex-col transition-all duration-300 hover:border-[var(--brand)]/50 hover:shadow-[0_8px_32px_rgba(240,92,78,0.12)] overflow-visible will-change-transform"
          >
            {/* Primary badge */}
            <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--brand)] text-white text-[0.6875rem] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Where you live
            </div>

            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[var(--brand)] border-2 border-[var(--brand)] shadow-[0_8px_24px_rgba(240,92,78,0.25)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
              </svg>
            </div>

            <div className="text-center mb-2">
              <p className="text-xs uppercase tracking-widest text-[var(--text-muted)]">{twoPathsSection.backend.tag}</p>
              <h3 className="text-lg font-bold text-[var(--text)]">{twoPathsSection.backend.title}</h3>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              {twoPathsSection.backend.description}
            </p>

            <AnimatedList className="!gap-3 mb-8 flex-1" delay={1200} cycleDuration={10000}>
              {workflowSteps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-3 p-3 rounded-lg bg-black/[0.02] border border-[var(--structural-border)]">
                  <span className="text-xs font-bold text-[var(--brand)] bg-[var(--brand-10)] px-2 py-1 rounded-md shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text)]">{step.label}</p>
                    <p className="text-xs text-[var(--text-muted)]">{step.description}</p>
                  </div>
                </div>
              ))}
            </AnimatedList>

            <div className="space-y-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
              <Marquee pauseOnHover reverse className="[--duration:22s]">
                {twoPathsSection.backend.marqueeItems.map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[var(--structural-border)] bg-black/[0.02] text-sm text-[var(--text-secondary)] whitespace-nowrap">
                    {item}
                  </span>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
