import React, { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/helper/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import CSSLineReveal from "@/app/components/helper/CSSLineReveal";
import { gridClass } from "@/app/utils/constants";

/**
 * Props for `IconTextHighlights`.
 */
export type IconTextHighlightsProps =
  SliceComponentProps<Content.IconTextHighlightsSlice>;

/**
 * Component for "IconTextHighlights" Slices.
 */
const IconTextHighlights: FC<IconTextHighlightsProps> = ({ slice }) => {
  // const highlightCount = slice.primary.highlights.length;

  // Automatically manages the sequence
  // useSequentialReveal(highlightCount, true);
  return (
    <Bounded
      isSticky={slice.primary.issticky}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex w-screen justify-center bg-white py-16 lg:h-[100vh] xl:items-center 2xl:h-[75rem]"
    >
      <div
        className={`grid h-full ${gridClass} w-screen gap-x-14 bg-white py-16 lg:grid-cols-[1fr_3fr] xl:grid-cols-[1fr_4fr]`}
      >
        {/* className="" */}
        <div className="order-2 flex flex-col gap-y-20 pl-2 lg:gap-y-24">
          {/* MISSION DIV */}

          <div className="flex max-w-[42em]">
            <CSSLineReveal textClass="text-[18px] leading-[133%]">
              {slice.primary.mission}
            </CSSLineReveal>
          </div>
          {/* SubGrid */}
          <div className="grid gap-x-[6.25rem] gap-y-14 lg:grid-cols-[1fr_3fr]">
            {/* Images */}
            <div className="flex gap-x-6 gap-y-10 lg:flex-col">
              {slice.primary.about_images &&
                slice.primary.about_images.map((abtImg, index) => (
                  <div
                    key={index}
                    className={`${index === 0 ? "h-[260px] w-[180px] sm:w-[210px]" : "h-[127px] w-[180px] sm:w-[210px]"} relative`}
                  >
                    <div
                      className="expand-height absolute bottom-0 h-full w-full bg-white"
                      style={{ transformOrigin: "top" }}
                    />
                    <PrismicNextImage
                      field={abtImg.image}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
            </div>

            {/* Highlights text */}
            <div className="flex flex-col gap-y-12 lg:gap-y-14">
              {slice.primary.highlights.map((highlight, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col gap-y-2.5 lg:gap-y-2">
                    <span className="slide-in-left text-[28px]">
                      {highlight.title}
                    </span>
                    <CSSLineReveal textClass="text-[18px]">
                      {highlight.description}
                    </CSSLineReveal>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="order-1 max-md:hidden" />
      </div>
    </Bounded>
  );
};

export default IconTextHighlights;
