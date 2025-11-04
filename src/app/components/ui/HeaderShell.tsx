"use client";
import { useEffect, useState } from "react";

// You can't directly import HeaderContent because it's async
export default function HeaderShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollUp(currentY < lastScrollY || currentY < 880);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed left-0 top-0 z-50 w-full translate-y-0 transition-all duration-500 ease-in-out ${
        scrollUp ? "bg-mywhite-50/30 backdrop-blur-[8px]" : ""
      }`}
    >
      {children}
    </div>
  );
}
