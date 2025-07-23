"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type GsapLineProps = {
  text: string | null;
  textClass: string;
};

gsap.registerPlugin(ScrollTrigger);

export default function GSAPLineReveal({ text, textClass }: GsapLineProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, {
      types: "lines",
      lineClass: "line-child",
    });

    const lines = textRef.current.querySelectorAll(".line-child");

    // Animate the lines
    gsap.fromTo(
      lines,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        ease: "power3.out",
        duration: 1,
        stagger: 0.12,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 95%",
          once: true,
        },
        onStart: () => {
          // Reveal container just before animating
          if (textRef.current) textRef.current.style.opacity = "1";
        },
      },
    );

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={textRef}
        className={`${textClass}`}
        style={{ opacity: 0 }} // Hide initially to prevent flashing
      >
        {text}
      </div>

      <style jsx global>{`
        .line-child {
          display: block;
          overflow: hidden;
        }
        .line-child > * {
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
