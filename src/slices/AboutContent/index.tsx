import React, { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `IconTextHighlights`.
 */
export type IconTextHighlightsProps =
  SliceComponentProps<Content.IconTextHighlightsSlice>;

/**
 * Component for "IconTextHighlights" Slices.
 */
const IconTextHighlights: FC<IconTextHighlightsProps> = ({ slice }) => {
  return (
    <Bounded
      isSticky={slice.primary.issticky}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="grid h-full w-screen grid-cols-[1fr_3fr] gap-x-14 bg-white py-16 xl:grid-cols-[1fr_4fr]"
    >
      <div className="order-2 flex flex-col gap-y-24 pl-2">
        <div className="flex max-w-[42em]">
          <span className="text-[18px] leading-[133%]">
            {slice.primary.mission}
          </span>
        </div>
        {/* SubGrid */}
        <div className="grid grid-cols-[1fr_3fr] gap-x-[6.25rem]">
          {/* Images */}
          <div className="flex flex-col gap-y-10">
            {slice.primary.about_images &&
              slice.primary.about_images.map((abtImg, index) => (
                <div
                  key={index}
                  className={`${index === 0 ? "h-[260px] w-[210px]" : "h-[127px] w-[210px]"} relative`}
                >
                  <PrismicNextImage
                    field={abtImg.image}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
          </div>

          {/* Highlights text */}
          <div className="flex flex-col gap-y-14">
            {slice.primary.highlights.map((highlight, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col gap-2">
                  <span className="text-[28px]">{highlight.title}</span>
                  <span className="text-[18px]">{highlight.description}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="order-1"></div>
    </Bounded>
  );
};

export default IconTextHighlights;
