"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import gsap from "gsap";
import { Safari } from "./Safari";

const glass =
  "backdrop-blur-xl bg-white/[0.06] border border-white/[0.1] rounded-[12px]";

const BASE_RY = -18;
const BASE_RX = 8;
const MOUSE_RANGE = 12;

const cardMeta = [
  {
    title: "Production Queue",
    points: ["Track every order from art to shipping", "Color-coded status indicators", "Automatic notifications on changes", "Drag-and-drop priority reordering"],
  },
  {
    title: "Quick Quote",
    points: ["Built-in pricing matrices", "Auto-calculate quantity breaks", "One-click send for approval", "Convert quotes to orders instantly"],
  },
  {
    title: "Order Management",
    points: ["Centralized order dashboard", "Art file attachment & versioning", "Linked invoicing & payments", "Customer communication log"],
  },
  {
    title: "AI Agent Activity",
    points: ["Auto-generate proofs from art", "Send approval emails automatically", "Inventory alerts before stockout", "Smart production routing"],
  },
];

export default function HeroDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const inViewRef = useRef(true);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [inView, setInView] = useState(true);
  const closedAt = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouse.current.x = 0;
    mouse.current.y = 0;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const tilt = tiltRef.current;
    if (!container || !tilt) return;

    const cards = container.querySelectorAll("[data-float-card]");
    gsap.fromTo(cards, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.15, delay: 0.6, ease: "power2.out" });

    const bars = container.querySelectorAll("[data-progress]");
    bars.forEach((bar, i) => {
      gsap.fromTo(bar, { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 1.5, delay: 1.4 + i * 0.2, ease: "power1.out" });
    });

    const isMobile = () => window.innerWidth < 1024;

    const tick = () => {
      if (inViewRef.current) {
        if (isMobile()) {
          tilt.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
        } else {
          current.current.x += (mouse.current.x - current.current.x) * 0.08;
          current.current.y += (mouse.current.y - current.current.y) * 0.08;
          const ry = BASE_RY + current.current.x * MOUSE_RANGE;
          const rx = BASE_RX - current.current.y * MOUSE_RANGE;
          tilt.style.transform = `rotateY(${ry}deg) rotateX(${rx}deg) scale(1.08)`;
        }
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    // Pause animations when hero is out of viewport
    const heroSection = container.closest("section");
    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    if (heroSection) observer.observe(heroSection);

    const listenEl = heroSection || container;
    listenEl.addEventListener("mousemove", handleMouseMove as EventListener);
    listenEl.addEventListener("mouseleave", handleMouseLeave as EventListener);

    return () => {
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
      gsap.killTweensOf(cards);
      gsap.killTweensOf(bars);
      listenEl.removeEventListener("mousemove", handleMouseMove as EventListener);
      listenEl.removeEventListener("mouseleave", handleMouseLeave as EventListener);
    };
  }, [handleMouseMove, handleMouseLeave]);

  const isExpanded = expanded !== null;

  /* Expanded overlay that sits on top of the grid */
  const handleClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    closedAt.current = Date.now();
    setExpanded(null);
  }, []);

  const handleOpen = useCallback((index: number) => {
    // Ignore opens within 300ms of a close to prevent re-trigger
    if (Date.now() - closedAt.current < 300) return;
    setExpanded(index);
  }, []);

  const expandedOverlay = isExpanded && (
    <div
      className="absolute inset-0 z-30 p-1.5 sm:p-3 flex"
      onClick={handleClose}
    >
      <div
        className={`${glass} bg-white/[0.1] border-white/[0.18] w-full h-full p-3 sm:p-4 flex flex-col`}
        style={{ animation: "qvIn 0.3s cubic-bezier(0.16,1,0.3,1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
            <span className="text-[7px] sm:text-[9px] font-bold text-white/60 uppercase tracking-wider">
              {cardMeta[expanded!].title}
            </span>
          </div>
          <button
            onClick={handleClose}
            className="w-6 h-6 rounded-full bg-white/[0.1] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.2] transition-all duration-200 cursor-pointer"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Points */}
        <ul className="space-y-2.5 flex-1">
          {cardMeta[expanded!].points.map((point, i) => (
            <li
              key={point}
              className="flex items-start gap-2 text-[10px] text-white/60 leading-relaxed"
              style={{ animation: `qvItem 0.25s cubic-bezier(0.16,1,0.3,1) ${0.06 + i * 0.04}s both` }}
            >
              <svg className="w-3.5 h-3.5 shrink-0 mt-px text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {point}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[680px] mx-auto"
      style={{ perspective: "900px" }}
    >
      <div
        ref={tiltRef}
        onMouseLeave={() => { if (expanded !== null) setExpanded(null); }}
        style={{
          transform: `rotateY(${BASE_RY}deg) rotateX(${BASE_RX}deg) scale(1.08)`,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
      >
        <Safari
          url="dtlaprint.com/dashboard"
          mode="default"
          className="w-full [&_svg]:dark:opacity-100 pointer-events-none"
          style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.4))" }}
        />

        {/* Dashboard content — z-20 to sit above Safari SVG (z-10) */}
        <div
          className="absolute overflow-hidden z-20"
          style={{
            left: "0.08%",
            top: "6.9%",
            width: "99.75%",
            height: "93%",
            borderRadius: "0 0 11px 11px",
          }}
        >
          <div
            className="relative w-full h-full bg-[#0c1220] p-1.5 sm:p-3 grid grid-cols-2 gap-1 sm:gap-2.5 auto-rows-fr"
            style={{ animationPlayState: inView ? "running" : "paused" }}
          >
            {/* Card 1 — Production Queue */}
            <div
              data-float-card
              data-card-idx="0"
              onClick={() => handleOpen(0)}
              className={`${glass} p-2 sm:p-3.5 opacity-0 cursor-pointer transition-all duration-500 hover:bg-white/[0.1] hover:border-white/[0.2] hover:scale-[1.03] overflow-hidden ${isExpanded ? "opacity-30 pointer-events-none blur-[1px]" : ""}`}
              style={{ animation: "cardZoom0 12s ease-in-out infinite", animationPlayState: inView ? "running" : "paused" }}
            >
              <div className="flex items-center gap-1 sm:gap-1.5 mb-1 sm:mb-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                <span className="text-[6px] sm:text-[8px] font-bold text-white/50 uppercase tracking-wider">Production Queue</span>
              </div>
              {[
                { name: "Order #4521", status: "Printing", progress: 75, color: "var(--brand)", dot: "var(--brand)" },
                { name: "Order #4519", status: "Art Approved", progress: 40, color: "rgba(255,255,255,0.25)", dot: "var(--text-success)" },
              ].map((job, i) => (
                <div key={i} className="flex items-center gap-1 sm:gap-2 py-1 sm:py-1.5 border-b border-white/[0.06] last:border-0">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: job.dot }} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[7px] sm:text-[10px] font-semibold text-white/85 truncate">{job.name}</p>
                    <p className="text-[6px] sm:text-[8px] text-white/40">{job.status}</p>
                  </div>
                  <div className="w-8 sm:w-12 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                    <div data-progress className="h-full rounded-full" style={{ width: `${job.progress}%`, background: job.color }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Card 2 — Quick Quote */}
            <div
              data-float-card
              data-card-idx="1"
              onClick={() => handleOpen(1)}
              className={`${glass} p-2 sm:p-3.5 opacity-0 cursor-pointer transition-all duration-500 hover:bg-white/[0.1] hover:border-white/[0.2] hover:scale-[1.03] overflow-hidden ${isExpanded ? "opacity-30 pointer-events-none blur-[1px]" : ""}`}
              style={{ animation: "cardZoom1 12s ease-in-out infinite", animationPlayState: inView ? "running" : "paused" }}
            >
              <span className="text-[6px] sm:text-[8px] font-bold text-white/50 uppercase tracking-wider block mb-1 sm:mb-2.5">Quick Quote</span>
              <div className="space-y-0.5 sm:space-y-1.5">
                <div className="flex justify-between text-[7px] sm:text-[9px]"><span className="text-white/45">200x Gildan 5000</span><span className="font-semibold text-white/80">$1,240</span></div>
                <div className="flex justify-between text-[7px] sm:text-[9px]"><span className="text-white/45">3-color front print</span><span className="font-semibold text-white/80">$680</span></div>
                <div className="h-px bg-white/[0.06]" />
                <div className="flex justify-between text-[8px] sm:text-[10px]"><span className="font-bold text-white/85">Total</span><span className="font-bold text-[var(--brand)]">$1,920</span></div>
              </div>
            </div>

            {/* Card 3 — Order Management */}
            <div
              data-float-card
              data-card-idx="2"
              onClick={() => handleOpen(2)}
              className={`${glass} p-2 sm:p-3.5 opacity-0 cursor-pointer transition-all duration-500 hover:bg-white/[0.1] hover:border-white/[0.2] hover:scale-[1.03] overflow-hidden ${isExpanded ? "opacity-30 pointer-events-none blur-[1px]" : ""}`}
              style={{ animation: "cardZoom2 12s ease-in-out infinite", animationPlayState: inView ? "running" : "paused" }}
            >
              <div className="flex items-center gap-1 sm:gap-1.5 mb-1 sm:mb-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                <span className="text-[6px] sm:text-[8px] font-bold text-white/50 uppercase tracking-wider">Order Management</span>
              </div>
              {[
                { name: "Order #4520", status: "In Production", dot: "var(--brand)" },
                { name: "Order #4517", status: "Awaiting Art", dot: "rgba(255,255,255,0.3)" },
              ].map((order, i) => (
                <div key={i} className="flex items-center gap-1 sm:gap-2 py-1 sm:py-1.5 border-b border-white/[0.06] last:border-0">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: order.dot }} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[7px] sm:text-[10px] font-semibold text-white/85 truncate">{order.name}</p>
                    <p className="text-[6px] sm:text-[8px] text-white/40">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Card 4 — AI Agent Activity */}
            <div
              data-float-card
              data-card-idx="3"
              onClick={() => handleOpen(3)}
              className={`${glass} p-2 sm:p-3.5 opacity-0 cursor-pointer transition-all duration-500 hover:bg-white/[0.1] hover:border-white/[0.2] hover:scale-[1.03] overflow-hidden ${isExpanded ? "opacity-30 pointer-events-none blur-[1px]" : ""}`}
              style={{ animation: "cardZoom3 12s ease-in-out infinite", animationPlayState: inView ? "running" : "paused" }}
            >
              <span className="text-[6px] sm:text-[8px] font-bold text-white/50 uppercase tracking-wider block mb-1 sm:mb-2">AI Agent Activity</span>
              <div className="flex items-baseline gap-1 sm:gap-1.5 mb-1 sm:mb-2">
                <span className="text-sm sm:text-xl font-bold text-[var(--brand)]">78</span>
                <span className="text-[7px] sm:text-[9px] text-white/50">AI agents active</span>
              </div>
              <div className="space-y-1 sm:space-y-2 max-h-[30px] sm:max-h-[60px] overflow-hidden">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="flex items-start gap-1 sm:gap-1.5">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[var(--brand)] mt-0.5 shrink-0" />
                    <p className="text-[5px] sm:text-[8px] text-white/40 leading-tight sm:leading-relaxed truncate sm:whitespace-normal">AI Agent completed: Auto-generated proof for Order #4521...</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated fake cursor — desktop only */}
            {!isExpanded && (
              <div
                className="absolute z-10 pointer-events-none hidden lg:block"
                style={{ animation: "cursorMove 12s ease-in-out infinite", animationPlayState: inView ? "running" : "paused" }}
              >
                {/* Cursor pointer icon */}
                <svg width="18" height="22" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
                  <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.87a.5.5 0 00.35-.85L6.35 2.86a.5.5 0 00-.85.35z" fill="white" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
                </svg>
                {/* Click ripple */}
                <div
                  className="absolute top-3 left-2 w-4 h-4 rounded-full border border-white/40"
                  style={{ animation: "clickRipple 12s ease-in-out infinite", animationPlayState: inView ? "running" : "paused" }}
                />
              </div>
            )}

            {/* Expanded overlay */}
            {expandedOverlay}
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 blur-2xl pointer-events-none" />

      <style>{`
        @keyframes qvIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes qvItem {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cursorMove {
          0%   { left: 25%; top: 30%; }
          4%   { left: 30%; top: 32%; }
          8%, 20% { left: 30%; top: 32%; }
          24%  { left: 68%; top: 28%; }
          28%, 40% { left: 68%; top: 28%; }
          44%  { left: 28%; top: 68%; }
          48%, 60% { left: 28%; top: 68%; }
          64%  { left: 66%; top: 66%; }
          68%, 80% { left: 66%; top: 66%; }
          84%  { left: 30%; top: 32%; }
          88%, 100% { left: 25%; top: 30%; }
        }
        @keyframes clickRipple {
          0%, 7% { transform: scale(0); opacity: 0; }
          10% { transform: scale(1); opacity: 0.6; }
          14% { transform: scale(2); opacity: 0; }
          28%, 29% { transform: scale(0); opacity: 0; }
          32% { transform: scale(1); opacity: 0.6; }
          36% { transform: scale(2); opacity: 0; }
          48%, 49% { transform: scale(0); opacity: 0; }
          52% { transform: scale(1); opacity: 0.6; }
          56% { transform: scale(2); opacity: 0; }
          68%, 69% { transform: scale(0); opacity: 0; }
          72% { transform: scale(1); opacity: 0.6; }
          76% { transform: scale(2); opacity: 0; }
          80%, 100% { transform: scale(0); opacity: 0; }
        }
        /* Card zooms synced exactly with cursor positions */
        @keyframes cardZoom0 {
          0%, 4% { transform: scale(1); }
          6% { transform: scale(1.05); background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); }
          18% { transform: scale(1.05); background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); }
          22%, 100% { transform: scale(1); }
        }
        @keyframes cardZoom1 {
          0%, 24% { transform: scale(1); }
          26% { transform: scale(1.05); background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); }
          38% { transform: scale(1.05); background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); }
          42%, 100% { transform: scale(1); }
        }
        @keyframes cardZoom2 {
          0%, 44% { transform: scale(1); }
          46% { transform: scale(1.05); background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); }
          58% { transform: scale(1.05); background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); }
          62%, 100% { transform: scale(1); }
        }
        @keyframes cardZoom3 {
          0%, 64% { transform: scale(1); }
          66% { transform: scale(1.05); background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); }
          78% { transform: scale(1.05); background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); }
          82%, 100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
