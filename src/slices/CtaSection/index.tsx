import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/helper/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import CSSLineReveal from "@/app/components/helper/CSSLineReveal";
import { gridClass } from "@/app/utils/constants";

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
      <div
        className={`${gridClass} grid w-full gap-x-0 gap-y-10 lg:grid-cols-[1fr_1fr] lg:gap-x-4 xl:grid-cols-[4fr_5fr] xl:gap-x-12 2xl:gap-x-28 max-lg:grid-rows-[1fr_1fr]`}
      >
        <div className="relative grid grid-rows-[1fr_3em]">
          <div className="flex max-w-[30em] flex-col gap-y-1 lg:w-[30em] xl:min-w-[34em]">
            {slice.primary.heading1_words.map((word, index) => (
              <div
                key={index}
                className={`${index % 2 === 0 ? "" : "self-end"} flex`}
              >
                <CSSLineReveal
                  textClass="w-fit text-[4rem] uppercase leading-none tracking-[-0.04em]
                xs:text-[4.5rem] sm:text-[5rem] xl:text-[6.25rem]"
                >
                  {word.word1_label}
                </CSSLineReveal>
              </div>
            ))}
          </div>
          <PrismicNextImage
            field={slice.primary.cta_image}
            className="absolute left-0 top-[22%] h-[304px] w-[13.125rem] object-cover object-center lg:top-[19%] lg:h-fit"
          />
          <div className="slide-in-left w-fit max-w-52">
            <span className="">{slice.primary.cta_tagline}</span>
          </div>
        </div>
        <div className="grid grid-rows-[1fr_1fr] gap-y-12 sm:min-w-[34em] sm:justify-self-end lg:justify-self-auto lg:pl-[7%] lg:pt-[16.25%]">
          <div className="flex w-full min-w-full flex-col gap-y-1 place-self-end">
            {slice.primary.heading2_words.map((word, index) => (
              <div
                key={index}
                className={`flex ${index % 2 === 0 ? "self-end" : "max-w-full self-end xs:max-w-[88%] xs:self-start sm:max-w-[24.5em] xl:max-w-[32em]"}`}
              >
                <CSSLineReveal
                  textClass={`${index % 2 === 0 ? "leading-none" : "leading-[120%]"} w-fit text-right text-[4rem] uppercase tracking-[-0.04em] xs:text-[4.5rem] sm:text-[5rem] xl:text-[6.25rem]`}
                >
                  {word.word2_label}
                </CSSLineReveal>
              </div>
            ))}
          </div>
          <div className="grid h-fit w-full grid-cols-[1fr_1fr] grid-rows-[6em_6em] gap-8">
            <div className="flex h-fit w-fit flex-col gap-y-0.5">
              <span className="fade-up">{slice.primary.person_name}</span>
              <span className="fade-up">Formnest</span>
            </div>
            <div className="flex h-fit w-fit flex-col gap-y-3">
              <span className="fade-up">Reach out to us:</span>
              <span className="fade-up text-[18px]">
                {slice.primary.email_address}
              </span>
            </div>
            <div className="flex h-fit w-fit flex-col gap-y-0.5">
              <span className="fade-up">{slice.primary.address_details}</span>
              <span className="fade-up">{slice.primary.address_city}</span>
              <span className="fade-up">{slice.primary.address_country}</span>
              <span className="fade-up">{slice.primary.address_number}</span>
            </div>
            <div className="flex h-fit w-fit flex-col gap-y-3 self-end">
              <span className="fade-up">Call us:</span>
              <span className="fade-up text-[18px]">
                {slice.primary.mobile_number}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default CtaSection;
