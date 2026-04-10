"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import {
  solutionsDemoSection,
  solutionsDemoTabs,
  websiteDemoFeatures,
  filemakerDemoFeatures,
} from "@/lib/constants";
import { Safari } from "./Safari";
import { Iphone } from "./Iphone";

// ── Types ──
interface DemoFeature {
  id: string;
  tabLabel: string;
  tabIcon: string;
  title: string;
  painPoint: { label: string; description: string };
  solution: { label: string; description: string };
  imageSrc: string;
  browserUrl: string;
  useMobileFrame?: boolean;
}

// ── Feature Panel ──
function FeaturePanel({
  feature,
  index,
  total,
}: {
  feature: DemoFeature;
  index: number;
  total: number;
}) {
  return (
    <motion.div
      key={feature.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mb-12 md:mb-20 lg:mb-24"
    >
      {/* Left: Copy */}
      <div className="lg:w-5/12 flex flex-col gap-5 order-2 lg:order-1">
        {/* Big serial number */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-baseline gap-3 mb-1"
        >
          <span
            className="text-[3rem] md:text-[4rem] font-bold leading-none tracking-tighter tabular-nums text-[var(--brand)] select-none"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)]">
            / {String(total).padStart(2, "0")}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.06 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text)] leading-[1.05] tracking-tight"
        >
          {feature.title}
        </motion.h3>

        {/* FRICTION → FIX flow */}
        <div className="relative mt-2">
          {/* FRICTION card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.12 }}
            className="relative p-5 rounded-2xl border-l-[3px] border-rose-500 bg-rose-50/60"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-rose-600">
                {feature.painPoint.label}
              </p>
            </div>
            <p className="text-[0.9375rem] text-[var(--text)] leading-snug font-medium">
              {feature.painPoint.description}
            </p>
          </motion.div>

          {/* Connecting arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.22 }}
            className="flex justify-center my-1"
          >
            <div className="flex flex-col items-center">
              <div className="w-px h-3 bg-[var(--structural-border)]" />
              <svg className="w-4 h-4 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>

          {/* FIX card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.28 }}
            className="relative p-5 rounded-2xl border-l-[3px] border-[var(--brand)] bg-[var(--brand-10)]"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-[var(--brand)]">
                {feature.solution.label}
              </p>
            </div>
            <p className="text-[0.9375rem] text-[var(--text)] leading-snug font-semibold">
              {feature.solution.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right: Device mockup */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.08 }}
        className="lg:w-7/12 w-full order-1 lg:order-2 relative"
      >
        {/* Subtle blue glow behind device */}
        <div
          aria-hidden="true"
          className="absolute -inset-4 rounded-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,102,204,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative">
          {feature.useMobileFrame ? (
            <div className="flex items-center justify-center">
              <div className="w-[220px] sm:w-[260px] md:w-[280px]">
                <Iphone src={feature.imageSrc} />
              </div>
            </div>
          ) : (
            <Safari
              url={feature.browserUrl}
              imageSrc={feature.imageSrc}
              mode="default"
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Sub-tab bar ──
function SubTabBar({
  features,
  activeIndex,
  onSelect,
  layoutId,
}: {
  features: DemoFeature[];
  activeIndex: number;
  onSelect: (i: number) => void;
  layoutId: string;
}) {
  return (
    <div className="sticky top-0 z-20 bg-[var(--bg-secondary)]/90 backdrop-blur-md py-4 mb-10 md:mb-14 border-y border-[var(--structural-border)]">
      <LayoutGroup>
        <div className="relative px-4 md:px-8">
          <div className="flex gap-1.5 overflow-x-auto pb-3 subtab-scroll mx-auto w-fit max-w-full">
            {features.map((f, i) => (
              <button
                key={f.id}
                onClick={() => onSelect(i)}
                className={`relative flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-semibold whitespace-nowrap flex-shrink-0 transition-colors cursor-pointer ${
                  activeIndex === i
                    ? "text-white"
                    : "border border-[var(--structural-border)] text-[var(--text-secondary)] hover:text-[var(--text)] hover:border-[var(--brand)]/30"
                }`}
              >
                {activeIndex === i && (
                  <motion.div
                    layoutId={layoutId}
                    className="absolute inset-0 bg-[var(--brand)] rounded-full shadow-[0_4px_12px_rgba(0,102,204,0.35)]"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
                <span className="material-symbols-outlined text-sm sm:text-base relative z-10 hidden sm:inline-block">
                  {f.tabIcon}
                </span>
                <span className="relative z-10">{f.tabLabel}</span>
              </button>
            ))}
          </div>
        </div>
      </LayoutGroup>
    </div>
  );
}

// ── Feature Section (Website or FileMaker) ──
function FeatureSection({
  badge,
  badgeColor,
  title,
  subtitle,
  features,
  layoutId,
}: {
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  features: DemoFeature[];
  layoutId: string;
}) {
  const [activeTab, setActiveTab] = useState(0);
  const activeFeature = features[activeTab];

  return (
    <div className="pt-12 md:pt-16 lg:pt-20 pb-0 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 ${badgeColor}`}
          >
            {badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[var(--text)] tracking-tight leading-tight mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base md:text-lg text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      {/* Sub-tabs */}
      <SubTabBar
        features={features}
        activeIndex={activeTab}
        onSelect={setActiveTab}
        layoutId={layoutId}
      />

      {/* Feature panel */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <AnimatePresence mode="wait">
          <FeaturePanel
            key={activeFeature.id}
            feature={activeFeature}
            index={activeTab}
            total={features.length}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── Main SolutionsDemo ──
export default function SolutionsDemo() {
  const [activeTab, setActiveTab] = useState("website");

  return (
    <section
      id="demos"
      className="w-full bg-[var(--bg-secondary)] relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,102,204,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,204,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    >
      {/* ── Top crop marks ── */}
      <div
        aria-hidden="true"
        className="absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-7xl px-5 md:px-8 pointer-events-none"
      >
        <div className="relative">
          <svg
            className="absolute top-0 left-0 w-4 h-4 text-[var(--brand)] opacity-40"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M0 0 L0 16 M0 0 L16 0" strokeLinecap="square" />
          </svg>
          <svg
            className="absolute top-0 right-0 w-4 h-4 text-[var(--brand)] opacity-40"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M16 0 L16 16 M0 0 L16 0" strokeLinecap="square" />
          </svg>
        </div>
      </div>

      {/* ── Section marker (top right) ── */}
      <div
        aria-hidden="true"
        className="absolute top-12 right-1/2 translate-x-[calc(50%-1.25rem)] md:translate-x-[calc(50%-2rem)] max-w-7xl pointer-events-none hidden md:block"
      >
      </div>

      {/* ── Floating registration cross ⊕ ── */}
      <svg
        aria-hidden="true"
        className="absolute top-1/3 left-[6%] w-10 h-10 text-[var(--brand)] opacity-[0.15] pointer-events-none hidden lg:block"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="16" cy="16" r="14" />
        <path d="M16 0 L16 32 M0 16 L32 16" strokeLinecap="square" />
      </svg>

      {/* ── Bottom crop marks ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-7xl px-5 md:px-8 pointer-events-none"
      >
        <div className="relative">
          <svg
            className="absolute bottom-0 left-0 w-4 h-4 text-[var(--brand)] opacity-40"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M0 0 L0 16 M0 16 L16 16" strokeLinecap="square" />
          </svg>
          <svg
            className="absolute bottom-0 right-0 w-4 h-4 text-[var(--brand)] opacity-40"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M16 0 L16 16 M0 16 L16 16" strokeLinecap="square" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        {/* Section heading */}
        <div className="text-center pt-16 md:pt-24 mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[var(--structural-border)] text-sm font-medium text-[var(--text)] mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand)] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand)]" />
            </span>
            <span>{solutionsDemoSection.label}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text)] tracking-tight leading-[1.05] mb-4"
          >
            {solutionsDemoSection.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-base md:text-lg text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed"
          >
            {solutionsDemoSection.subtitle}
          </motion.p>
        </div>

        {/* Primary tabs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-2">
          {solutionsDemoTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[var(--brand)] text-white shadow-[0_8px_24px_rgba(0,102,204,0.35)] scale-[1.02]"
                  : "bg-white border border-[var(--structural-border)] text-[var(--text-secondary)] hover:text-[var(--text)] hover:border-[var(--brand)]/40 hover:shadow-sm"
              }`}
            >
              <span className="material-symbols-outlined text-base">
                {tab.icon}
              </span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        {(activeTab === "website" || activeTab === "both") && (
          <motion.div
            key="website"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <FeatureSection
              badge="Your Storefront"
              badgeColor="bg-teal-500/10 text-teal-700 border border-teal-500/20"
              title="A Website That Works as Hard as You Do"
              subtitle="A complete online storefront with custom ordering and seamless checkout — built for print shops."
              features={websiteDemoFeatures}
              layoutId="activeWebsiteTab"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {(activeTab === "filemaker" || activeTab === "both") && (
          <motion.div
            key="filemaker"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <FeatureSection
              badge="FileMaker System"
              badgeColor="bg-[var(--brand)]/10 text-[var(--brand)] border border-[var(--brand)]/20"
              title="Your Back Office, Fully Automated"
              subtitle="Run your entire operation — quoting, orders, scheduling, and analytics — in one place."
              features={filemakerDemoFeatures}
              layoutId="activeFilemakerTab"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Combined CTA for "both" */}
      <AnimatePresence mode="wait">
        {activeTab === "both" && (
          <motion.div
            key="combined-cta"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center pt-8 pb-12"
          >
            <a
              href="#interest-form"
              className="px-8 py-3.5 text-base font-semibold text-white relative overflow-hidden group rounded-full inline-flex items-center gap-2 justify-center bg-[var(--brand)] shadow-[0_8px_24px_rgba(0,102,204,0.35)] hover:shadow-[0_12px_32px_rgba(0,102,204,0.45)] transition-shadow duration-200"
            >
              <span>Learn more about the Complete System</span>
              <span
                className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {activeTab !== "both" && <div className="pb-16 md:pb-20" />}
    </section>
  );
}
