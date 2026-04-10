"use client";

import { painPoints, problemsSection } from "@/lib/constants";
import InteractiveHoverButton from "./InteractiveHoverButton";
import { TypingAnimation } from "./TypingAnimation";

export default function Problems() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-[var(--structural-border)] rounded-[14px] overflow-hidden">
          {painPoints.map((point, i) => {
            const isLast = i === painPoints.length - 1;

            return (
              <div
                key={point.number}
                data-scroll-item
                className={`group relative p-6 overflow-hidden bg-[var(--bg-card)] transition-colors duration-300 ${
                  isLast ? "sm:col-span-2 border-t border-[var(--structural-border)]" : ""
                } ${
                  !isLast && i <= 1 ? "border-b border-[var(--structural-border)]" : ""
                } ${
                  !isLast && i % 2 === 0
                    ? "sm:border-r sm:border-[var(--structural-border)]"
                    : ""
                }`}
              >
                {/* Shimmer sweep — triggered on hover */}
                <div className="problem-shimmer absolute inset-0 pointer-events-none" />

                <div className="relative flex items-start gap-5">
                  {/* Number badge — pulses on hover */}
                  <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-[0.75rem] bg-[var(--brand-10)] text-[var(--brand)] text-sm font-bold problem-badge">
                    {String(point.number).padStart(2, "0")}
                  </span>
                  <div>
                    {/* Title — glitches on hover */}
                    <h3 className="text-lg font-bold text-[var(--text)] leading-tight mb-1.5 problem-title">
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
