"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function InViewObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const animationClasses = [
      ".fade-up",
      ".slide-in-up",
      ".slide-in-down",
      ".slide-in-right",
      ".slide-in-left",
      ".grow-in",
      ".expand-width",
      ".expand-height",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
          }
        });
      },
      {
        // once: false,
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    const elements = document.querySelectorAll(animationClasses.join(", "));
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [pathname]); // re-run observer when route changes

  return null;
}
