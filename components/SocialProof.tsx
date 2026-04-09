"use client";

import { useState, useEffect, useCallback } from "react";
import { socialProofSection, testimonials } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const AUTO_CYCLE_MS = 5000;

/* ── Background card (small, uniform opacity — no active state) ── */
function BackgroundCard({
  testimonial,
  onClick,
}: {
  testimonial: Testimonial;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="text-left rounded-[var(--radius-sm)] border border-[var(--structural-border)] bg-[var(--bg-card)] p-6 flex flex-col justify-between min-h-[180px] transition-all duration-500 cursor-pointer w-full opacity-30 blur-[2px]"
    >
      <p className="text-[0.8125rem] leading-relaxed text-[var(--text)] line-clamp-3 mb-6">
        {testimonial.quote}
      </p>

      <div className="flex items-center gap-2.5 mt-auto">
        <div className="w-8 h-8 rounded-full bg-black/[0.06] shrink-0" />
        <div>
          <p className="text-xs font-semibold text-[var(--text)]">
            {testimonial.name}
          </p>
          <p className="text-[0.6875rem] text-[var(--text-secondary)]">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  // Auto-cycle
  useEffect(() => {
    const timer = setInterval(next, AUTO_CYCLE_MS);
    return () => clearInterval(timer);
  }, [next]);

  const active = testimonials[activeIndex];

  // Split cards: top row 3, bottom row 2
  const topRow = testimonials.slice(0, 3);
  const bottomRow = testimonials.slice(3, 5);

  return (
    <section
      id="social-proof"
      className="w-full bg-[var(--bg-body)] overflow-hidden"
      data-scroll-section
    >
      <div
        className="w-full max-w-[80rem] mx-auto px-[var(--container-padding-x)] py-[var(--section-padding-y)]"
        data-scroll-content
      >
        {/* Heading */}
        <div data-animate="fade-up">
          <SectionHeading
            label={socialProofSection.label}
            title={socialProofSection.title}
            subtitle={socialProofSection.subtitle}
          />
        </div>

        {/* Main layout: cards grid with centered spotlight overlay */}
        <div className="relative" data-animate="fade-up">
          {/* ── Background card grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
            {/* Top row — 3 cards spanning 2 cols each */}
            {topRow.map((t, i) => (
              <div key={i} className="sm:col-span-2">
                <BackgroundCard
                  testimonial={t}
                  onClick={() => setActiveIndex(i)}
                />
              </div>
            ))}

            {/* Bottom row — 2 cards centered (offset by 1 col each side) */}
            {bottomRow.map((t, i) => (
              <div key={i + 3} className={`sm:col-span-2 ${i === 0 ? "sm:col-start-2" : ""}`}>
                <BackgroundCard
                  testimonial={t}
                  onClick={() => setActiveIndex(i + 3)}
                />
              </div>
            ))}
          </div>

          {/* ── Center spotlight overlay ── */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-full max-w-[640px] flex flex-col items-center">
              {/* Radial dome shape */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-t-full"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.02) 40%, transparent 70%)",
                }}
              />
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 30%, rgba(0,0,0,0.08) 70%, transparent 100%)",
                }}
              />

              {/* Avatar */}
              <div className="relative z-10 mb-8">
                <div className="w-16 h-16 rounded-full bg-[var(--bg-card)] border-2 border-[var(--structural-border)] shadow-[0_0_40px_rgba(0,0,0,0.08)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
              </div>

              {/* Featured quote — bigger text */}
              <div className="relative z-10 text-center px-4 mb-8">
                <p className="text-xl md:text-2xl lg:text-[1.75rem] font-semibold leading-[1.4] text-[var(--text)]">
                  &ldquo;{active.quote}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="relative z-10 text-center mb-8">
                <p className="text-sm font-semibold text-[var(--text)]">{active.name}</p>
                <p className="text-xs text-[var(--text-secondary)]">{active.role}, {active.company}</p>
              </div>

              {/* Sliding dot indicators */}
              <div className="relative z-10 pointer-events-auto overflow-hidden w-full max-w-[480px]">
                <div className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, var(--bg-body), transparent)" }} />
                <div className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(270deg, var(--bg-body), transparent)" }} />

                <div
                  className="flex items-center gap-8 transition-transform duration-500 ease-out py-2"
                  style={{
                    transform: `translateX(calc(50% - ${activeIndex * 80 + 40}px))`,
                  }}
                >
                  {testimonials.map((t, i) => {
                    const isActive = i === activeIndex;
                    const distance = Math.abs(i - activeIndex);
                    const opacity = isActive ? 1 : Math.max(0.1, 0.55 - distance * 0.2);
                    const scale = isActive ? 1 : Math.max(0.75, 1 - distance * 0.1);

                    return (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className="flex flex-col items-center gap-2.5 cursor-pointer shrink-0 transition-all duration-500"
                        style={{
                          opacity,
                          transform: `scale(${scale})`,
                          width: 48,
                        }}
                      >
                        {/* <span
                          className="font-semibold transition-all duration-500 whitespace-nowrap text-center"
                          style={{
                            fontSize: isActive ? "0.8125rem" : "0.6875rem",
                            color: isActive ? "var(--text)" : `rgba(0,0,0,${opacity * 0.4})`,
                          }}
                        >
                          {t.name.split(" ")[0]}
                        </span> */}

                        <div className="w-full h-[2px] rounded-full overflow-hidden" style={{ backgroundColor: isActive ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.04)" }}>
                          {isActive && (
                            <div
                              key={activeIndex}
                              className="h-full rounded-full"
                              style={{
                                backgroundColor: "var(--brand)",
                                animation: `progressBar ${AUTO_CYCLE_MS}ms linear forwards`,
                              }}
                            />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
