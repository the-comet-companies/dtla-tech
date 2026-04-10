"use client";

import { useState, useEffect, useRef } from "react";
import { features, featuresSection } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import InteractiveHoverButton from "./InteractiveHoverButton";

const FEATURE_ICONS = [
  "/art-approval.svg",     // Art Approval Workflows
  "/real-time.svg",        // Real-Time Production Tracking
  "/quoting.svg",          // Integrated Quoting System
  "/customer.svg",         // Customer Portal
  "/ai-agents.svg",        // 78+ AI Agents
  "/n8n.svg",              // N8N Workflow Integrations
];

const AUTO_CYCLE_MS = 4000;

export default function FeatureCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  // Pause when out of viewport for performance
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (isPaused || !inView) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, AUTO_CYCLE_MS);
    return () => clearInterval(timer);
  }, [isPaused, inView]);

  const activeFeature = features[activeIndex];
  const activeIcon = FEATURE_ICONS[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="w-full py-[var(--section-padding-y)] bg-[var(--bg-body)]"
      data-scroll-section
    >
      <div className="w-full px-[var(--container-padding-x)]" data-scroll-content>
        <div className="max-w-[80rem] mx-auto" data-scroll-heading>
          <SectionHeading
            label={featuresSection.label}
            title={featuresSection.title}
            subtitle={featuresSection.subtitle}
          />
        </div>

        <div
          className="max-w-[80rem] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* ── Left: Tile list (auto-scrolling indicator) ── */}
          <div className="flex flex-col">
            {features.map((feature, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={feature.title}
                  className="group relative cursor-pointer py-5 border-b border-[var(--structural-border)] last:border-b-0 transition-all duration-300"
                  onClick={() => setActiveIndex(i)}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--brand)] origin-top transition-transform duration-500 ease-out"
                    style={{
                      transform: isActive ? "scaleY(1)" : "scaleY(0)",
                    }}
                  />

                  <div className={`pl-5 transition-all duration-300 ${isActive ? "translate-x-1" : ""}`}>
                    <h3
                      className={`text-[1.0625rem] font-bold leading-tight transition-colors duration-300 ${
                        isActive ? "text-[var(--brand)]" : "text-[var(--text)]"
                      }`}
                    >
                      {feature.title}
                    </h3>

                    {/* Description — only visible when active */}
                    <div
                      className="grid transition-all duration-500 ease-out"
                      style={{
                        gridTemplateRows: isActive ? "1fr" : "0fr",
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? "0.5rem" : "0",
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[0.875rem] leading-relaxed text-[var(--text-secondary)] max-w-md">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Auto-cycle progress bar (only on active) */}
                    {isActive && !isPaused && inView && (
                      <div className="mt-3 h-[2px] w-full bg-[var(--structural-border)] rounded-full overflow-hidden">
                        <div
                          key={activeIndex}
                          className="h-full bg-[var(--brand)] rounded-full"
                          style={{
                            animation: `progressBar ${AUTO_CYCLE_MS}ms linear forwards`,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Right: Spotlight tile ── */}
          <div className="relative rounded-[24px] border border-[var(--structural-border)] bg-[var(--bg-card)] overflow-hidden min-h-[440px] flex items-center justify-center p-10 lg:p-14">
            {/* ── Decorative background: subtle blueprint grid ── */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,102,204,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,204,0.04) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
                maskImage:
                  "radial-gradient(ellipse 60% 70% at center, black 30%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 60% 70% at center, black 30%, transparent 100%)",
              }}
            />

            {/* ── Decorative corner traces ── */}
            <svg
              aria-hidden="true"
              className="absolute top-5 left-5 w-12 h-12 text-[var(--brand)] opacity-30 pointer-events-none"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M0 24 L0 8 Q0 0 8 0 L24 0" strokeLinecap="round" />
              <circle cx="0" cy="24" r="1.5" fill="currentColor" />
              <circle cx="24" cy="0" r="1.5" fill="currentColor" />
            </svg>
            <svg
              aria-hidden="true"
              className="absolute top-5 right-5 w-12 h-12 text-[var(--brand)] opacity-30 pointer-events-none"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M48 24 L48 8 Q48 0 40 0 L24 0" strokeLinecap="round" />
              <circle cx="48" cy="24" r="1.5" fill="currentColor" />
              <circle cx="24" cy="0" r="1.5" fill="currentColor" />
            </svg>
            <svg
              aria-hidden="true"
              className="absolute bottom-5 left-5 w-12 h-12 text-[var(--brand)] opacity-30 pointer-events-none"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M0 24 L0 40 Q0 48 8 48 L24 48" strokeLinecap="round" />
              <circle cx="0" cy="24" r="1.5" fill="currentColor" />
              <circle cx="24" cy="48" r="1.5" fill="currentColor" />
            </svg>
            <svg
              aria-hidden="true"
              className="absolute bottom-5 right-5 w-12 h-12 text-[var(--brand)] opacity-30 pointer-events-none"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M48 24 L48 40 Q48 48 40 48 L24 48" strokeLinecap="round" />
              <circle cx="48" cy="24" r="1.5" fill="currentColor" />
              <circle cx="24" cy="48" r="1.5" fill="currentColor" />
            </svg>

            {/* ── Animated horizontal scanning line ── */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 h-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(0,102,204,0.5) 50%, transparent 100%)",
                animation: "scanLineVertical 6s ease-in-out infinite",
              }}
            />

            {/* Spotlight content — animated key swap */}
            <div
              key={activeIndex}
              className="relative text-center max-w-md z-10"
              style={{
                animation: "featureFadeIn 0.6s ease-out",
              }}
            >
              {/* Icon with pulsing rings */}
              <div className="relative inline-flex items-center justify-center mb-6">
                {/* Pulsing rings behind icon */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <span
                    className="absolute w-32 h-32 rounded-full border border-[var(--brand)]/30"
                    style={{ animation: "iconPulse 3s ease-out infinite" }}
                  />
                  <span
                    className="absolute w-32 h-32 rounded-full border border-[var(--brand)]/20"
                    style={{
                      animation: "iconPulse 3s ease-out infinite",
                      animationDelay: "1s",
                    }}
                  />
                  <span
                    className="absolute w-32 h-32 rounded-full border border-[var(--brand)]/15"
                    style={{
                      animation: "iconPulse 3s ease-out infinite",
                      animationDelay: "2s",
                    }}
                  />
                </div>

                <img
                  src={activeIcon}
                  alt={activeFeature.title}
                  width={96}
                  height={96}
                  className="icon-to-blue relative z-10"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] leading-tight mb-3">
                {activeFeature.title}
              </h3>

              <p className="text-[1rem] leading-relaxed text-[var(--text-secondary)]">
                {activeFeature.description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12" data-scroll-item>
          <InteractiveHoverButton href={featuresSection.cta.href} variant="outline">
            {featuresSection.cta.text}
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
