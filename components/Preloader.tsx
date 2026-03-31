"use client";

import { useEffect, useState } from "react";

const RADIUS = 48;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let frame: number;
    let current = 0;

    const tick = () => {
      const remaining = 100 - current;
      current += remaining * 0.035 * 1.2;

      if (current >= 99.5) {
        current = 100;
        setProgress(100);
        setTimeout(() => setDone(true), 400);
        setTimeout(() => setHidden(true), 1000);
        return;
      }

      setProgress(Math.floor(current));
      frame = requestAnimationFrame(tick);
    };

    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, 300);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (hidden) return null;

  const offset = CIRCUMFERENCE * (1 - progress / 100);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--bg-secondary)] transition-all duration-[600ms] ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo + circular progress */}
      <div className="relative w-32 h-32 mb-8">
        {/* Progress ring SVG */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 104 104">
          {/* Track */}
          <circle cx="52" cy="52" r={RADIUS} fill="none" stroke="var(--border)" strokeWidth="2" />
          {/* Progress arc */}
          <circle
            cx="52"
            cy="52"
            r={RADIUS}
            fill="none"
            stroke="var(--brand)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            className="transition-all duration-200 ease-out"
          />
        </svg>

        {/* Logo centered inside ring */}
        <div className="absolute inset-[14px] flex items-center justify-center">
          <img
            src="/header-logo-square-dark.svg"
            alt="DTLA Print"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
