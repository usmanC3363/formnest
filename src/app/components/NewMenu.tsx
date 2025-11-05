"use client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import React, { useEffect, useState } from "react";
import { getCurrentScreenSize } from "../utils/constants.js";
import { Content } from "@prismicio/client";
import { StyledHeading } from "./helper/StyledHeading";

// Typing for individual link item
type MenuLink = Content.MenuDocument["data"]["menu_links"][number];

type Props = {
  menuLinks: MenuLink[];
};

export default function NewMenu({ menuLinks }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [screenSize, setScreenSize] = useState<string | null>(null);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleResize = () => setScreenSize(getCurrentScreenSize());
    handleResize(); // Initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Main Overlay */}
      <div
        className={`fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-mywhite-50 backdrop-blur-lg transition-all ${
          open
            ? "translate-y-[4%] duration-[1200ms] ease-[cubic-bezier(0.8,0,0.2,0.8)]"
            : "w-screen -translate-y-full duration-[1200ms] ease-[cubic-bezier(0.8,0,0.2,1)]"
        }`}
      >
        <div className="flex h-full w-[60%] flex-col items-center justify-center gap-y-4">
          {menuLinks?.map((item, index) => {
            const isActive = hoveredIndex === index;
            // const isAnyHovered = hoveredIndex !== null;
            return (
              <div
                className={` ${index % 2 === 0 ? "justify-center" : "justify-end"} flex w-full max-w-[32rem]`}
                key={index}
                style={
                  index % 2 === 0
                    ? { translate: 0 + 45 * index }
                    : { translate: 0 - 200 / index / 1.5 }
                }
              >
                <PrismicNextLink
                  field={item.link_url}
                  className={`flex h-20 w-fit items-center justify-between gap-x-2 transition-all duration-500 ease-in-out ${
                    open ? "opacity-100" : ""
                  } ${index % 2 === 0 ? "" : ``}`}
                  onClick={toggleMenu}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span
                    className={`self-start text-xs transition-all duration-500 ease-in-out ${
                      isActive ? "text-mybrown-50" : "text-mybrown-50/30"
                    }`}
                  >
                    0{item.order}
                  </span>
                  <StyledHeading
                    text={item.link_title}
                    headingClass={`text-[4.5rem] min-w-fit uppercase tracking-[-0.04em] leading-none transition-all duration-500 ease-in-out ${
                      isActive ? "text-mybrown-50" : "text-mybrown-50/30"
                    }`}
                  />
                  <PrismicNextImage
                    field={item.link_image}
                    className={`h-[3.8125rem] w-[6.8125rem] translate-x-3 object-contain object-center transition-all duration-500 ease-in-out ${
                      isActive ? "" : "translate-x-10 opacity-0"
                    }`}
                  />
                </PrismicNextLink>
              </div>
            );
          })}
        </div>
      </div>

      {/* Menu Toggle Button */}
      <button
        title="Menu"
        type="button"
        onClick={toggleMenu}
        className="group z-50 h-10 w-10 cursor-pointer outline-none transition-all duration-300 ease-in-out max-sm:h-8 max-sm:w-8"
      >
        <div
          className={`group flex scale-x-110 items-center justify-center transition-all duration-300 ease-in-out ${
            open ? "scale-x-150" : "hover:scale-125"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
            className={`transition-all duration-200 ease-linear ${
              open ? "-rotate-180" : ""
            }`}
          >
            {[6, 12, 18].map((y, idx) => (
              <line
                key={idx}
                x1="4"
                y1={y}
                x2="20"
                y2={y}
                className={`stroke-mybrown-50 stroke-1 transition-all duration-200 ease-linear ${
                  open ? "rotate-[40deg]" : ""
                }`}
              />
            ))}
          </svg>
        </div>
      </button>
    </>
  );
}
