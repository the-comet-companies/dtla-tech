"use client";

import { useState, useEffect, useCallback } from "react";
import { socialProofSection, testimonials } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string;
}

const AUTO_CYCLE_MS = 5000;

/* ── Background card (small, dimmed) ── */
function BackgroundCard({
  testimonial,
  isActive,
  onClick,
}: {
  testimonial: Testimonial;
  isActive: boolean;
  onClick: () => void;
}) {
  const isEmpty = !testimonial.quote;

  return (
    <button
      onClick={onClick}
      className="text-left rounded-[var(--radius-sm)] border bg-[var(--bg-card)] p-6 flex flex-col justify-between min-h-[180px] transition-all duration-500 cursor-pointer w-full"
      style={{
        borderColor: isActive
          ? "rgba(255,255,255,0.18)"
          : "rgba(255,255,255,0.08)",
        opacity: isActive ? 0.5 : 0.2,
      }}
    >
      {isEmpty ? (
        /* Skeleton lines */
        <div className="space-y-2.5 mb-6">
          <div className="h-2.5 rounded-full bg-white/[0.12] w-full" />
          <div className="h-2.5 rounded-full bg-white/[0.12] w-[85%]" />
          <div className="h-2.5 rounded-full bg-white/[0.10] w-[70%]" />
        </div>
      ) : (
        <p className="text-[0.8125rem] leading-relaxed text-[var(--text)] line-clamp-3 mb-6">
          {testimonial.quote}
        </p>
      )}

      {/* Avatar + name */}
      <div className="flex items-center gap-2.5 mt-auto">
        {testimonial.avatarSrc ? (
          <img
            src={testimonial.avatarSrc}
            alt={testimonial.name}
            className="w-8 h-8 rounded-full object-cover shrink-0"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-white/[0.12] shrink-0" />
        )}
        <div>
          <p className="text-xs font-semibold text-[var(--text)]">
            {testimonial.name}
          </p>
          <p className="text-[0.6875rem] text-[var(--text-secondary)]">
            {testimonial.role}
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
  const isEmpty = !active.quote;

  // Split cards into top row (0-2) and bottom row (3-5)
  const topRow = testimonials.slice(0, 3);
  const bottomRow = testimonials.slice(3, 6);

  return (
    <section
      id="social-proof"
      className="w-full bg-[var(--bg-secondary)] overflow-hidden"
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Top row */}
            {topRow.map((t, i) => (
              <BackgroundCard
                key={i}
                testimonial={t}
                isActive={i === activeIndex}
                onClick={() => setActiveIndex(i)}
              />
            ))}

            {/* Bottom row */}
            {bottomRow.map((t, i) => (
              <BackgroundCard
                key={i + 3}
                testimonial={t}
                isActive={i + 3 === activeIndex}
                onClick={() => setActiveIndex(i + 3)}
              />
            ))}
          </div>

          {/* ── Center spotlight overlay ── */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Dome / arc glow */}
            <div className="relative w-full max-w-[560px] flex flex-col items-center">
              {/* Radial dome shape */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[640px] h-[320px] rounded-t-full"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)",
                }}
              />
              {/* Hard edge line at dome base */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[640px] h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 30%, rgba(255,255,255,0.18) 70%, transparent 100%)",
                }}
              />

              {/* Avatar */}
              <div className="relative z-10 mb-6">
                {active.avatarSrc ? (
                  <img
                    src={active.avatarSrc}
                    alt={active.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[var(--bg-card)] border-2 border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Featured quote */}
              <div className="relative z-10 text-center px-4 mb-6">
                {isEmpty ? (
                  <p className="text-lg md:text-xl font-semibold leading-snug text-white/70 italic">
                    &ldquo;{socialProofSection.placeholderQuote}&rdquo;
                  </p>
                ) : (
                  <p className="text-lg md:text-xl font-semibold leading-snug text-white">
                    {active.quote}
                  </p>
                )}
              </div>

              {/* Sliding dot indicators — active always centered */}
              <div className="relative z-10 pointer-events-auto overflow-hidden w-full max-w-[480px]">
                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, var(--bg-secondary), transparent)" }} />
                <div className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(270deg, var(--bg-secondary), transparent)" }} />

                <div
                  className="flex items-center gap-8 transition-transform duration-500 ease-out py-2"
                  style={{
                    /* Shift so activeIndex is always centered:
                       each item is ~80px wide (gap-8 = 32px + ~48px content),
                       center = 50% of container minus half an item */
                    transform: `translateX(calc(50% - ${activeIndex * 80 + 40}px))`,
                  }}
                >
                  {testimonials.map((t, i) => {
                    const isActive = i === activeIndex;
                    const distance = Math.abs(i - activeIndex);
                    // Fade based on distance: 0 = full, 1 = 0.45, 2 = 0.2, 3+ = 0.1
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
                        {/* Name label — bigger when active */}
                        <span
                          className="font-semibold transition-all duration-500 whitespace-nowrap text-center"
                          style={{
                            fontSize: isActive ? "0.8125rem" : "0.6875rem",
                            color: isActive ? "rgba(255,255,255,1)" : `rgba(255,255,255,${opacity * 0.6})`,
                          }}
                        >
                          {t.name}
                        </span>

                        {/* Horizontal progress bar */}
                        <div className="w-full h-[2px] rounded-full overflow-hidden" style={{ backgroundColor: isActive ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.06)" }}>
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
