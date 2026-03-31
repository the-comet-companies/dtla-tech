"use client";

import { useId } from "react";

export default function StripedPattern({
  width = 10,
  height = 10,
}: {
  width?: number;
  height?: number;
}) {
  const id = useId();
  const maskId = useId();

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full text-white/[0.07] stroke-[0.5]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Diagonal lines pattern */}
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1={height} x2={width} y2="0" stroke="currentColor" />
          <line x1={-width} y1={height} x2="0" y2="0" stroke="currentColor" />
          <line x1={width} y1={height} x2={width * 2} y2="0" stroke="currentColor" />
        </pattern>

        {/* Radial gradient mask — fades from all edges/corners */}
        <radialGradient id={maskId} cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="60%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        <mask id={`${maskId}-mask`}>
          <rect width="100%" height="100%" fill={`url(#${maskId})`} />
        </mask>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill={`url(#${id})`}
        mask={`url(#${maskId}-mask)`}
      />
    </svg>
  );
}
