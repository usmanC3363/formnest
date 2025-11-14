"use client";

import React, { useEffect, useRef, useState } from "react";

type CSSLineRevealProps = {
  textStyle?: React.CSSProperties;
  children: string | React.ReactNode;
  textClass?: string;
  divClass?: string;
  spanClass?: string;
  delay?: number; // global start delay
  lineDelay?: number; // per-line stagger delay
  duration?: number; // animation duration per line
  threshold?: number; // intersection visibility threshold
};

export default function CSSLineReveal({
  textStyle,
  children,
  textClass = "",
  divClass = "",
  spanClass = "",
  delay = 0,
  lineDelay = 1, // smoother stagger — not too slow
  duration = 1.25,
  threshold = 0.25, // earlier trigger
}: CSSLineRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  // Split string into multiple lines (<br/> or newline)
  const lines =
    typeof children === "string"
      ? children
          .split(/\n|<br\s*\/?>/g)
          .map((line) => line.trim())
          .filter(Boolean)
      : [children];

  return (
    <div ref={containerRef} className={`overflow-hidden ${divClass}`}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={`block overflow-hidden will-change-transform ${spanClass}`}
          style={{
            transform: "translateZ(0)",
          }}
        >
          <span
            className={`inline-block will-change-transform ${textClass}`}
            style={{
              transform: isVisible ? "translateY(0%)" : "translateY(110%)",
              opacity: isVisible ? 1 : 0,
              transitionProperty: "transform, opacity",
              transitionDuration: `${duration}s`,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              transitionDelay: `${delay + i * lineDelay}s`,
              ...textStyle,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </div>
  );
}
