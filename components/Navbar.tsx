"use client";

import { useState, useEffect, useCallback } from "react";
import { navLinks, navBrand } from "@/lib/constants";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks
        .map((link) => ({
          id: link.href.slice(1),
          el: document.getElementById(link.href.slice(1)),
        }))
        .filter((s) => s.el);

      let found = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].el!.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
          setActive(sections[i].id);
          found = true;
          break;
        }
      }
      if (!found) setActive("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      {/* ===== DESKTOP NAV ===== */}
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 hidden md:block ${
          scrolled ? "top-4" : "top-6"
        }`}
      >
        <div
          className={`flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl border-[var(--structural-border)] shadow-sm"
              : "bg-white/60 backdrop-blur-md border-gray-200/60"
          }`}
        >
          <a href="#" className="px-4 py-2 text-sm font-bold tracking-tight text-[var(--text)] uppercase">
            {navBrand.desktop}
          </a>

          <div className="w-px h-4 bg-[var(--structural-border)] mx-1" />

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
                active === link.href.slice(1)
                  ? "bg-black/[0.06] text-[var(--text)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-black/[0.04]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ===== MOBILE NAV ===== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-white/95 backdrop-blur-xl border-b border-[var(--structural-border)] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-14">
          <a
            href="#"
            className="text-base font-bold tracking-tight text-[var(--text)]"
            onClick={handleLinkClick}
          >
            {navBrand.mobile}
          </a>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative w-8 h-8 flex items-center justify-center"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className="absolute w-5 h-[1.5px] bg-[var(--text)] rounded-full transition-all duration-300"
              style={{
                transform: menuOpen
                  ? "translateY(0) rotate(45deg)"
                  : "translateY(-4px) rotate(0deg)",
              }}
            />
            <span
              className="absolute w-5 h-[1.5px] bg-[var(--text)] rounded-full transition-all duration-300"
              style={{
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
              }}
            />
            <span
              className="absolute w-5 h-[1.5px] bg-[var(--text)] rounded-full transition-all duration-300"
              style={{
                transform: menuOpen
                  ? "translateY(0) rotate(-45deg)"
                  : "translateY(4px) rotate(0deg)",
              }}
            />
          </button>
        </div>
      </nav>

      {/* ===== MOBILE MENU OVERLAY ===== */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-white/95 backdrop-blur-lg"
          onClick={handleLinkClick}
        />

        <div className="relative flex flex-col items-center justify-center h-full gap-2 px-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-2xl font-semibold tracking-tight transition-all duration-300 py-3 ${
                active === link.href.slice(1)
                  ? "text-[var(--brand)]"
                  : "text-[var(--text)]"
              }`}
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: menuOpen ? 1 : 0,
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href={navBrand.ctaHref}
            onClick={handleLinkClick}
            className="group/btn mt-6 relative overflow-hidden inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[var(--brand)] text-white font-semibold text-[0.9375rem] border-2 border-[var(--brand)] transition-all duration-300"
            style={{
              transitionDelay: menuOpen ? `${navLinks.length * 60}ms` : "0ms",
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
            }}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[var(--bg-body)] opacity-0 transition-all duration-500 group-hover/btn:scale-[100] group-hover/btn:opacity-100" />
            <div className="flex items-center justify-center">
              <span className="inline-block transition-all duration-300 group-hover/btn:translate-x-12 group-hover/btn:opacity-0">
                {navBrand.ctaText}
              </span>
            </div>
            <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-[var(--brand)] opacity-0 transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
              <span>{navBrand.ctaText}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
