"use client";
import { PrismicNextLink } from "@prismicio/next";
import React, { useEffect, useState } from "react";
import { getCurrentScreenSize } from "../utils/constants.js";
import { Content } from "@prismicio/client";
import { GoArrowRight } from "react-icons/go";
import { StyledHeading } from "./ui/StyledHeading";

// Typing for individual link item
type MenuLink = Content.MenuDocument["data"]["menu_links"][number];

type Props = {
  menuLinks: MenuLink[];
};

export default function NewMenu({ menuLinks }: Props) {
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
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-mywhite-50 backdrop-blur-lg transition-all ${
          open
            ? "translate-y-8 duration-[1200ms] ease-[cubic-bezier(0.8,0,0.2,0.8)]"
            : "w-screen -translate-y-full duration-[1200ms] ease-[cubic-bezier(0.8,0,0.2,1)]"
        }`}
      >
        <div className="flex h-full w-[50%] flex-col justify-center gap-8">
          <div className="flex flex-col gap-y-4">
            {menuLinks?.map((item, index) => (
              <PrismicNextLink
                key={index}
                field={item.link_url}
                className={`flex h-20 w-fit items-center justify-between gap-x-0.5 transition-all duration-500 ease-in-out ${
                  open ? "opacity-100" : ""
                } ${index % 2 === 0 ? "" : ``}`}
                style={
                  index % 2 === 0
                    ? { translate: 10 + 45 * item.order }
                    : { translate: -10 - 10 * item.order }
                  //   {
                  //   transitionDelay: `${200 + index * 100}ms`,
                  // }
                }
                onClick={toggleMenu}
              >
                <span className="self-start text-xs">0{item.order}</span>
                <StyledHeading
                  text={item.link_title}
                  headingClass="text-[4.5rem] uppercase tracking-[-0.04em] leading-none"
                />
              </PrismicNextLink>
            ))}
          </div>
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
