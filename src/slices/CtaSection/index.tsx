import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `CtaSection`.
 */
export type CtaSectionProps = SliceComponentProps<Content.CtaSectionSlice>;

/**
 * Component for "CtaSection" Slices.
 */
const CtaSection: FC<CtaSectionProps> = ({ slice }) => {
  return (
    <Bounded
      isSticky={slice.primary.issticky}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex h-full flex-col justify-between gap-y-14 bg-mywhite-50 py-20"
    >
      <div className="grid w-full gap-x-10 lg:grid-cols-[1fr_1fr] max-lg:grid-rows-[1fr_1fr]">
        <div className="grid grid-rows-[1fr_4em]">
          <div className="flex max-w-[30em] flex-col lg:max-w-[34.25em]">
            {slice.primary.heading1_words.map((word, index) => (
              <div
                key={index}
                className={`${index % 2 === 0 ? "" : "self-end"} flex`}
              >
                <h1 className="w-fit text-[5rem] uppercase leading-none tracking-[-0.04em] xl:text-[6.25rem]">
                  {word.word1_label}
                </h1>
              </div>
            ))}
            <PrismicNextImage
              field={slice.primary.cta_image}
              className="h-full w-[13rem] object-cover object-center lg:-translate-y-[22%] xl:-translate-y-[28%]"
            />
          </div>
          <div className="w-fit">
            <span>{slice.primary.cta_tagline}</span>
          </div>
        </div>
        <div className="grid grid-rows-[2fr_1fr] lg:pt-[16.25%]">
          <div className="flex w-[35em] flex-col place-self-end">
            {slice.primary.heading2_words.map((word, index) => (
              <div
                key={index}
                className={`flex ${index % 2 === 0 ? "self-end" : "max-w-[24.5em] self-start xl:max-w-[32em]"}`}
              >
                <h1
                  className={`${index % 2 === 0 ? "leading-none" : "text-right leading-[133%]"} w-fit text-[5rem] uppercase tracking-[-0.04em] xl:text-[6.25rem]`}
                >
                  {word.word2_label}
                </h1>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </Bounded>
  );
};

export default CtaSection;
