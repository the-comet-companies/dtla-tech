"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aiPlatformSection, aiModels, aiCapabilities } from "@/lib/constants";
import CircuitAccent from "./CircuitAccent";
import MorphingText from "./MorphingText";
import { AnimatedBeam, Circle } from "./ui/AIPowered";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/Tooltip";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AIPlatform() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll("[data-ai-reveal]");
    // We use opacity-0 in the classes to prevent FOUC, so we only need to set Y here
    gsap.set(items, { y: 24 });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: section, start: "top 78%", once: true },
    });

    tl.to(items, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.06,
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
      className="w-full py-[var(--section-padding-y)] relative overflow-hidden"
      data-scroll-section
    >
      {/* Animated circuit accents — left + right edges */}
      <CircuitAccent variant="left" opacity={0.35} />
      <CircuitAccent variant="right" opacity={0.35} />

      <div className="w-full max-w-[80rem] mx-auto px-[var(--container-padding-x)] relative">
        {/* ── Header ── */}
        <div className="max-w-2xl mx-auto text-center mb-20 opacity-0" data-ai-reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] border border-[var(--structural-border)] text-sm font-medium text-[var(--text)] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand)] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand)]" />
            </span>
            <span>{aiPlatformSection.label}</span>
          </div>
          <h2 className="text-[clamp(1.75rem,1.4rem+1vw,2.5rem)] font-bold leading-[1.1] text-[var(--text)] mb-4">
            Powered by{" "}
            <MorphingText
              texts={["OpenAI", "Claude", "Gemini", "Perplexity"]}
              className="text-[var(--brand)]"
            />
          </h2>
          <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
            {aiPlatformSection.subtitle}
          </p>
        </div>

        <TooltipProvider>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 items-center">
            {/* ── Left: AI Models — Animated Beam Visualization ── */}
            <div
              ref={containerRef}
              className="relative flex w-full items-center justify-center overflow-hidden p-3 md:p-10 opacity-0"
              data-ai-reveal
            >
              <div className="flex size-full flex-col max-w-lg items-stretch justify-between gap-10">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col gap-14">
                    {/* OpenAI */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Circle ref={div1Ref} className="size-20 border-[var(--structural-border)] bg-white/50 backdrop-blur-sm">
                          <img src={aiModels[0].logo} alt={aiModels[0].name} className="w-10 h-10 object-contain" />
                        </Circle>
                      </TooltipTrigger>
                      <TooltipContent side="left">
                        <p>{aiModels[0].name}</p>
                      </TooltipContent>
                    </Tooltip>
                    {/* Claude */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Circle ref={div2Ref} className="size-20 border-[var(--structural-border)] bg-white/50 backdrop-blur-sm">
                          <img src={aiModels[1].logo} alt={aiModels[1].name} className="w-10 h-10 object-contain" />
                        </Circle>
                      </TooltipTrigger>
                      <TooltipContent side="left">
                        <p>{aiModels[1].name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>

                  <div className="flex flex-col gap-16">
                    {/* Website Brain */}
                    <a href="https://www.dtlaprint.com/" target="_blank" rel="noopener noreferrer" className="z-20">
                      <Circle ref={div5Ref} className="size-28 border-[var(--brand)] bg-white shadow-sm p-5 cursor-pointer hover:border-[var(--brand)]/60 transition-colors">
                        <img src="/logos/website.png" alt="Website" className="w-16 h-16 object-contain" />
                      </Circle>
                    </a>
                    {/* FileMaker Brain */}
                    <a href="https://shoptitan.app/" target="_blank" rel="noopener noreferrer" className="z-20">
                      <Circle ref={div6Ref} className="size-28 border-[var(--brand)] bg-white shadow-sm p-5 cursor-pointer hover:border-[var(--brand)]/60 transition-colors">
                        <img src="/logos/filemaker.png" alt="FileMaker" className="w-16 h-16 object-contain" />
                      </Circle>
                    </a>
                  </div>

                  <div className="flex flex-col gap-14">
                    {/* Gemini */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Circle ref={div3Ref} className="size-20 border-[var(--structural-border)] bg-white/50 backdrop-blur-sm">
                          <img src={aiModels[2].logo} alt={aiModels[2].name} className="w-10 h-10 object-contain" />
                        </Circle>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>{aiModels[2].name}</p>
                      </TooltipContent>
                    </Tooltip>
                    {/* Perplexity */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Circle ref={div4Ref} className="size-20 border-[var(--structural-border)] bg-white/50 backdrop-blur-sm">
                          <img src={aiModels[3].logo} alt={aiModels[3].name} className="w-10 h-10 object-contain" />
                        </Circle>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>{aiModels[3].name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>

              {/* Beams to Website */}
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div5Ref}
                duration={3}
                gradientStartColor="var(--brand)"
                gradientStopColor="var(--brand)"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div5Ref}
                duration={3}
                delay={1}
                gradientStartColor="var(--brand)"
                gradientStopColor="var(--brand)"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div5Ref}
                duration={3}
                delay={0.5}
                gradientStartColor="var(--brand)"
                gradientStopColor="var(--brand)"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div5Ref}
                duration={3}
                delay={1.5}
                gradientStartColor="var(--brand)"
                gradientStopColor="var(--brand)"
              />

              {/* Beams to FileMaker */}
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div6Ref}
                duration={4}
                delay={2}
                gradientStartColor="var(--brand)"
                gradientStopColor="var(--brand)"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div6Ref}
                duration={4}
                delay={0.5}
                gradientStartColor="var(--brand)"
                gradientStopColor="var(--brand)"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div6Ref}
                duration={4}
                delay={1.2}
                gradientStartColor="var(--brand)"
                gradientStopColor="var(--brand)"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div6Ref}
                duration={4}
                delay={0.8}
                gradientStartColor="var(--brand)"
                gradientStopColor="var(--brand)"
              />

              {/* Connection between systems */}
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div6Ref}
                duration={5}
                curvature={20}
                reverse
                gradientStartColor="var(--brand)"
                gradientStopColor="var(--brand)"
              />
            </div>

            {/* ── Right: Capabilities — 4 Individual Cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-fit">
              {aiCapabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="bg-white/40 backdrop-blur-md border border-[var(--structural-border)] rounded-2xl p-6 shadow-sm hover:border-[var(--brand)]/20 hover:shadow-md transition-all duration-300 group opacity-0"
                  data-ai-reveal
                >
                  {/* Icon Container */}
                  <div className="flex items-center justify-center size-11 rounded-xl bg-white border border-[var(--structural-border)] text-[var(--brand)] mb-4 shadow-sm group-hover:bg-[var(--brand)] group-hover:text-white group-hover:border-[var(--brand)] transition-all duration-300">
                    <span className="material-symbols-outlined text-xl">
                      {cap.icon}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-[0.9375rem] font-bold text-[var(--text)] mb-2 group-hover:text-[var(--brand)] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-[0.8125rem] leading-[1.6] text-[var(--text-secondary)]">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
