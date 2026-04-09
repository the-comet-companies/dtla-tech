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
function FeaturePanel({ feature }: { feature: DemoFeature }) {
  return (
    <motion.div
      key={feature.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start lg:items-start mb-12 md:mb-20 lg:mb-28"
    >
      {/* Left: Copy */}
      <div className="lg:w-4/12 flex flex-col gap-4 order-2 lg:order-1">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.06 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D1D1F] leading-tight"
        >
          {feature.title}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.12 }}
          className="relative p-4 border border-black/10 bg-white/40 backdrop-blur-md shadow-sm rounded-xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/50 blur-2xl rounded-full pointer-events-none" />
          <p className="text-xs font-bold uppercase tracking-widest text-rose-600 mb-1.5 relative z-10">
            {feature.painPoint.label}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed font-medium relative z-10">
            {feature.painPoint.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.18 }}
          className="relative p-4 border border-black/10 bg-white/40 backdrop-blur-md shadow-sm rounded-xl overflow-hidden"
        >
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/50 blur-2xl rounded-full pointer-events-none" />
          <p className="text-xs font-bold uppercase tracking-widest text-[#0066CC] mb-1.5 relative z-10">
            {feature.solution.label}
          </p>
          <p className="text-sm text-[#1D1D1F] leading-relaxed font-semibold relative z-10">
            {feature.solution.description}
          </p>
        </motion.div>
      </div>

      {/* Right: Device mockup */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.08 }}
        className="lg:w-8/12 w-full order-1 lg:order-2"
      >
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
    <div className="sticky top-0 z-20 bg-[var(--bg-secondary)]/80 backdrop-blur-md py-4 mb-10 md:mb-14 px-4 md:px-8">
      <LayoutGroup>
        <div className="relative">
          <div className="flex gap-1.5 overflow-x-auto pb-1 justify-center scrollbar-hide">
            {features.map((f, i) => (
              <button
                key={f.id}
                onClick={() => onSelect(i)}
                className={`relative flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors cursor-pointer ${
                  activeIndex === i
                    ? "text-white"
                    : "border border-gray-200 text-gray-500 hover:text-[#1D1D1F] hover:border-[#0066CC]/30"
                }`}
              >
                {activeIndex === i && (
                  <motion.div
                    layoutId={layoutId}
                    className="absolute inset-0 bg-[#0066CC] rounded-full"
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
            className="text-3xl md:text-5xl font-bold text-[#1D1D1F] tracking-tight leading-tight mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-lg md:text-xl text-[#6E6E73] max-w-2xl mx-auto leading-relaxed"
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
          <FeaturePanel key={activeFeature.id} feature={activeFeature} />
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
      className="w-full bg-[var(--bg-secondary)] relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,102,204,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,204,0.03) 1px, transparent 1px)",
        backgroundSize: "140px 140px",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section heading */}
        <div className="text-center pt-16 md:pt-20 mb-10 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-5xl font-bold text-[#1D1D1F] tracking-tight leading-tight mb-4"
          >
            {solutionsDemoSection.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-lg md:text-xl text-[#6E6E73] max-w-2xl mx-auto leading-relaxed"
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
              className={`relative flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#0066CC] text-white"
                  : "border border-gray-200 text-[#6E6E73] hover:text-[#1D1D1F] hover:border-[#0066CC]/30"
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
              badgeColor="bg-teal-500/10 text-teal-600"
              title="A Website That Works as Hard as You Do"
              subtitle="More than a website — a complete online storefront with custom ordering, product configuration, and seamless checkout built for print shops."
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
              badgeColor="bg-[#0066CC]/10 text-[#0066CC]"
              title="Your Back Office, Fully Automated"
              subtitle="A powerful FileMaker-based system that runs your entire operation — from quoting and orders to scheduling and analytics."
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
              className="px-8 py-3 min-h-[44px] text-base font-semibold text-[#1D1D1F] relative overflow-hidden group rounded-full inline-flex items-center gap-2 justify-center flex-shrink-0"
            >
              <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors rounded-full" />
              <div className="absolute inset-0 border-2 border-[#1D1D1F]/20 group-hover:border-[#1D1D1F]/30 transition-colors rounded-full" />
              <span className="relative z-10">
                Learn more about the Complete System
              </span>
              <span
                className="material-symbols-outlined text-lg relative z-10 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom padding for non-both tabs */}
      {activeTab !== "both" && <div className="pb-16 md:pb-20" />}
    </section>
  );
}
