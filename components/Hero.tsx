"use client";

import { hero } from "@/lib/constants";
import HeroBento from "./HeroBento";
import StripedPattern from "./StripedPattern";
import CircuitLines from "./CircuitLines";
import InteractiveHoverButton from "./InteractiveHoverButton";
import MorphingText from "./MorphingText";

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-[var(--bg-secondary)] min-h-screen">
      {/* Striped pattern background — fades out from all corners */}
      <StripedPattern />

      {/* Circuit board lines on left and right edges */}
      <CircuitLines />

      {/* Subtle radial glow behind diagram */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,102,204,0.06) 0%, rgba(0,102,204,0.02) 40%, transparent 70%)",
        }}
      />

      {/* Concentric rings */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-[var(--brand)] opacity-[0.06] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-[var(--brand)] opacity-[0.03] pointer-events-none"
      />

      {/* Scattered dots */}
      <div aria-hidden="true" className="absolute top-[18%] right-[8%] w-1.5 h-1.5 rounded-full bg-[var(--text)]/10 pointer-events-none" />
      <div aria-hidden="true" className="absolute top-[75%] right-[12%] w-1 h-1 rounded-full bg-[var(--text)]/8 pointer-events-none" />
      <div aria-hidden="true" className="absolute top-[30%] right-[42%] w-1 h-1 rounded-full bg-[var(--brand)] opacity-15 pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-[20%] right-[38%] w-1.5 h-1.5 rounded-full bg-[var(--text)]/6 pointer-events-none" />
      <div aria-hidden="true" className="absolute top-[12%] right-[28%] w-1 h-1 rounded-full bg-[var(--text)]/8 pointer-events-none" />

      <div className="w-full max-w-[90rem] mx-auto px-[var(--container-padding-x)] relative z-10 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-12 items-center">
          {/* Left — Text content */}
          <div>
            <div className="mb-8" data-hero="tag" style={{ opacity: 0 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand)] text-sm font-medium text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                {hero.badge}
              </span>
            </div>

            <h1
              className="text-[clamp(2.25rem,2rem+2.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)] mb-6"
              style={{ opacity: 0 }}
              data-hero="heading"
            >
              {hero.headingLine1}
              <br />
              {hero.headingLine2}{" "}
              <MorphingText
                texts={hero.morphingWords}
                className="text-[var(--brand)]"
              />
            </h1>

            <p
              className="text-[1.0625rem] leading-relaxed text-[var(--text-secondary)] max-w-[28rem]"
              data-hero="sub"
              style={{ opacity: 0 }}
            >
              {hero.subtitle}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3" data-hero="ctas" style={{ opacity: 0 }}>
              <InteractiveHoverButton href={hero.ctaPrimary.href} variant="primary">
                {hero.ctaPrimary.text}
              </InteractiveHoverButton>
              <InteractiveHoverButton href={hero.ctaSecondary.href} variant="outline">
                {hero.ctaSecondary.text}
              </InteractiveHoverButton>
            </div>
          </div>

          {/* Right — Bento grid preview */}
          <div className="relative flex items-center justify-center lg:min-h-[90vh] overflow-hidden" data-hero="diagram" style={{ opacity: 0 }}>
            <HeroBento />
          </div>
        </div>
      </div>
    </section>
  );
}
