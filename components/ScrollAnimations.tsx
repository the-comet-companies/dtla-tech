"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useEffect(() => {
    // ===== HERO ENTRANCE =====
    const heroTag = document.querySelector("[data-hero='tag']");
    const heroHeading = document.querySelector("[data-hero='heading']");
    const heroSub = document.querySelector("[data-hero='sub']");
    const heroCtas = document.querySelector("[data-hero='ctas']");
    const heroScroll = document.querySelector("[data-hero='scroll']");

    const heroDiagram = document.querySelector("[data-hero='diagram']");

    if (heroTag && heroHeading && heroSub && heroCtas) {
      const heroTl = gsap.timeline({ delay: 0.15 });
      heroTl
        .fromTo(heroTag, { y: 20, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" })
        .fromTo(heroHeading, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "expo.out" }, "-=0.35")
        .fromTo(heroSub, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, "-=0.45")
        .fromTo(heroCtas, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.35")
        .fromTo(heroDiagram || document.createElement("div"), { x: 60, opacity: 0, scale: 0.97 }, { x: 0, opacity: 1, scale: 1, duration: 1.1, ease: "expo.out" }, "-=0.7")
        .fromTo(heroScroll || document.createElement("div"), { opacity: 0 }, { opacity: 0.4, duration: 0.8 }, "-=0.3");
    }

    // ===== SECTION ANIMATIONS =====
    // Each [data-scroll-section] gets a one-time reveal when it enters viewport.
    // This works for both scrolling AND nav-click jumps — content is immediately
    // visible once you arrive at the section.
    const scrollSections = document.querySelectorAll("[data-scroll-section]");

    scrollSections.forEach((section) => {
      const heading = section.querySelector("[data-scroll-heading]");
      const items = section.querySelectorAll("[data-scroll-item]");
      const lines = section.querySelectorAll("[data-animate='line']");

      // Set initial hidden state
      if (heading) gsap.set(heading, { y: 50, opacity: 0 });
      if (items.length > 0) gsap.set(items, { y: 40, opacity: 0 });
      if (lines.length > 0) gsap.set(lines, { scaleX: 0, transformOrigin: "left center" });

      // Create timeline that plays once when section enters viewport
      const tl = gsap.timeline({
        paused: true,
      });

      if (heading) {
        tl.to(heading, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, 0);
      }

      if (items.length > 0) {
        tl.to(items, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out" }, 0.15);
      }

      if (lines.length > 0) {
        tl.to(lines, { scaleX: 1, duration: 0.8, ease: "power3.inOut" }, 0.25);
      }

      // Trigger: play the timeline once when section is in view
      ScrollTrigger.create({
        trigger: section,
        start: "top 75%",
        once: true,
        onEnter: () => tl.play(),
      });

      // Also check if section is already in view on load (e.g., page refreshed mid-scroll)
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        tl.progress(1);
      }
    });

    // ===== NUMBER COUNTERS =====
    const counters = document.querySelectorAll("[data-animate='counter']");
    counters.forEach((el) => {
      const target = el.getAttribute("data-value");
      if (!target) return;

      const isNumber = /^\d+$/.test(target);
      if (isNumber) {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: parseInt(target),
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toString();
          },
        });
      } else {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", once: true } }
        );
      }
    });

    // ===== STANDALONE fade-up =====
    const fadeUpElements = document.querySelectorAll("[data-animate='fade-up']");
    fadeUpElements.forEach((el) => {
      if (el.closest("[data-scroll-section]")) return;
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", once: true } }
      );
    });

    // ===== STANDALONE stagger =====
    const cardGroups = document.querySelectorAll("[data-animate='stagger']");
    cardGroups.forEach((group) => {
      if (group.closest("[data-scroll-section]")) return;
      gsap.fromTo(
        group.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: group, start: "top 80%", once: true } }
      );
    });

    // ===== SCALE-IN =====
    const scaleElements = document.querySelectorAll("[data-animate='scale']");
    scaleElements.forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", once: true } }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null;
}
