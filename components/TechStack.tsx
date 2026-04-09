"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techStackSection, techStackCards } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import InteractiveHoverButton from "./InteractiveHoverButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Logo {
  src: string;
  alt: string;
}

interface BentoCardData {
  title: string;
  description: string;
  logos: Logo[];
  className: string;
}

const cards: BentoCardData[] = techStackCards;

function BentoCard({ title, description, logos, className }: BentoCardData) {
  const isFullWidth = className.includes("col-span-3");

  if (isFullWidth) {
    return (
      <div
        className={`group relative overflow-hidden rounded-[16px] border border-[var(--structural-border)] bg-[var(--bg-card)] transition-all duration-500 hover:border-black/[0.12] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] ${className}`}
      >
        <div className="flex flex-col sm:flex-row items-center gap-6 p-8">
          <div className="flex items-center gap-4 shrink-0 order-2 sm:order-1 sm:mr-auto">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center px-5 py-3 rounded-lg bg-black/[0.03]"
              >
                <img src={logo.src} alt={logo.alt} className="h-10 w-auto object-contain" />
              </div>
            ))}
          </div>
          <div className="text-center sm:text-right order-1 sm:order-2">
            <h3 className="text-lg font-bold text-[var(--text)] mb-1.5">{title}</h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)] max-w-md">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-[16px] border border-[var(--structural-border)] bg-[var(--bg-card)] transition-all duration-500 hover:border-black/[0.12] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] ${className}`}
    >
      <div className="absolute inset-0 flex flex-wrap items-start justify-center gap-3 p-6 pt-8 content-start [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.15)_55%,transparent_80%)] transition-all duration-500 group-hover:scale-105">
        {logos.map((logo) => (
          <div key={logo.alt} className="flex items-center justify-center px-4 py-2.5 rounded-lg bg-black/[0.03] shrink-0">
            <img src={logo.src} alt={logo.alt} className="h-8 w-auto object-contain" />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-end p-6">
        <h3 className="text-lg font-bold text-[var(--text)] mb-1.5">{title}</h3>
        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{description}</p>
      </div>
    </div>
  );
}

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const bentoCards = section.querySelectorAll("[data-bento-card]");
    if (bentoCards.length === 0) {
      const grid = section.querySelector("[data-bento-grid]");
      if (!grid) return;
      const children = grid.children;
      gsap.set(children, { y: 40, opacity: 0 });
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: "top 75%", once: true },
      });
      tl.to(children, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });
      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === section) t.kill();
        });
      };
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-[var(--section-padding-y)] bg-[var(--bg-body)] border-y border-[var(--structural-border)]"
    >
      <div className="w-full px-[var(--container-padding-x)]">
        <div className="text-center mb-14 max-w-[80rem] mx-auto">
          <SectionHeading
            label={techStackSection.label}
            title={techStackSection.title}
            subtitle={techStackSection.subtitle}
          />
        </div>

        <div data-bento-grid className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>

        <div className="flex justify-center mt-10 max-w-[80rem] mx-auto">
          <InteractiveHoverButton href={techStackSection.cta.href} variant="primary">
            {techStackSection.cta.text}
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
