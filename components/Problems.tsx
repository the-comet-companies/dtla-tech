"use client";

import { useState, useEffect } from "react";
import { painPoints, problemsSection } from "@/lib/constants";
import InteractiveHoverButton from "./InteractiveHoverButton";
import { TypingAnimation } from "./TypingAnimation";

const CYCLE_MS = 3000;

export default function Problems() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % painPoints.length);
    }, CYCLE_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="problem"
      className="relative w-full py-[var(--section-padding-y)] bg-[var(--bg-body)] overflow-hidden"
      data-scroll-section
    >
      {/* Watermark text */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 right-[var(--container-padding-x)] select-none pointer-events-none text-[clamp(4rem,8vw,7rem)] font-extrabold uppercase leading-none tracking-tight text-[var(--text)] opacity-[0.04]"
      >
        {problemsSection.watermark}
      </div>

      <div className="relative w-full max-w-[80rem] mx-auto px-[var(--container-padding-x)]" data-scroll-content>
        <div data-scroll-heading>
          <div className="mb-12 text-left">
            {/* Label badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] border border-[var(--structural-border)] text-sm font-medium text-[var(--text)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--brand)]" />
              <span>{problemsSection.label}</span>
            </div>

            {/* Typing animation title */}
            <h2 className="text-[clamp(1.75rem,1.4rem+1vw,2.5rem)] font-bold leading-[1.1] text-[var(--text)] mb-4">
              <TypingAnimation
                words={problemsSection.typingWords}
                loop
                typeSpeed={80}
                deleteSpeed={40}
                pauseDelay={2000}
                startOnView
                showCursor
                blinkCursor
                cursorStyle="line"
              />
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-[var(--border)] rounded-[14px] overflow-hidden">
          {painPoints.map((point, i) => {
            const isLast = i === painPoints.length - 1;
            const isActive = i === activeIndex;

            return (
              <div
                key={point.number}
                data-scroll-item
                className={`group relative p-6 overflow-hidden transition-colors duration-500 ${
                  isActive ? "bg-[var(--bg-card)]" : "bg-[var(--bg-card)]/60"
                } ${
                  isLast ? "sm:col-span-2 border-t border-[var(--border)]" : ""
                } ${
                  !isLast && i <= 1 ? "border-b border-[var(--border)]" : ""
                } ${
                  !isLast && i % 2 === 0
                    ? "sm:border-r sm:border-[var(--border)]"
                    : ""
                }`}
              >
                {/* Shimmer sweep — only on active card */}
                {isActive && (
                  <div
                    key={`shimmer-${activeIndex}`}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 40%, rgba(0,102,204,0.04) 45%, rgba(0,102,204,0.08) 50%, rgba(0,102,204,0.04) 55%, transparent 60%)",
                      backgroundSize: "200% 100%",
                      animation: "problemShimmer 2s ease-in-out forwards",
                    }}
                  />
                )}

                <div
                  className="relative flex items-start gap-5 transition-opacity duration-500"
                  style={{ opacity: isActive ? 1 : 0.4 }}
                >
                  {/* Number badge — pulses only when active */}
                  <span
                    className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-[0.75rem] bg-[var(--brand-10)] text-[var(--brand)] text-sm font-bold"
                    style={{
                      animation: isActive
                        ? "problemPulse 1.5s ease-in-out infinite"
                        : "none",
                    }}
                  >
                    {String(point.number).padStart(2, "0")}
                  </span>
                  <div>
                    {/* Title — glitches only when active */}
                    <h3
                      className="text-lg font-bold text-[var(--text)] leading-tight mb-1.5"
                      style={{
                        animation: isActive
                          ? "problemGlitch 2s ease-in-out 1"
                          : "none",
                      }}
                    >
                      {point.title}
                    </h3>
                    <p className="text-[0.9375rem] leading-relaxed text-[var(--text)] opacity-75">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10" data-scroll-item>
          <InteractiveHoverButton href={problemsSection.cta.href} variant="primary">
            {problemsSection.cta.text}
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
