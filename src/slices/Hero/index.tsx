import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Bounded from "@/app/components/Bounded";
import { GoArrowUpRight } from "react-icons/go";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex h-full w-screen flex-col justify-center xl:items-center max-md:gap-10"
    >
      {/* Main Grid with Rows */}
      <div className="relative grid h-full w-full gap-y-6 sm:grid-rows-[7em_1fr_2fr] md:min-h-80 md:grid-rows-[1fr_8em_3fr] lg:grid-rows-[1fr_1fr_3fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 2xl:py-20 3xl:max-w-screen-3xl max-md:grid-rows-[1fr_1fr]">
        {/* Hero Heading DIV */}

        <div
          className={`flex h-auto w-full flex-col justify-end gap-6 rounded-lg sm:gap-y-5 max-sm:w-96`}
        >
          <div className="flex flex-col gap-y-14">
            {/* Hero Heading */}

            <h1
              className="min-w-fit text-3xl uppercase leading-none tracking-tighter sm:text-[60px] md:text-[72px] lg:text-[6rem] xl:text-[6.25rem] 3xl:text-[7rem] max-xs:pr-12 max-sm:w-[22rem]"
              style={{ wordSpacing: "0.05em" }}
            >
              {slice.primary.heading}
            </h1>
          </div>
          <hr className="h-[2.45px] w-full min-w-full bg-mybrown-50" />
        </div>

        {/* Taglines */}
        <div className="grid w-full justify-between gap-x-8 sm:grid-cols-[1fr_1fr] md:grid-cols-[2fr_2fr_1fr] max-sm:grid-rows-[5rem_5rem_5rem] max-md:gap-y-4">
          <span className="w-full text-[16px] leading-[124%] lg:text-[18px] xl:max-w-[24.25em] 2xl:text-[20px] max-sm:max-w-80">
            {slice.primary.tagline1}
          </span>
          <span className="w-full text-[16px] leading-[124%] lg:text-[18px] xl:max-w-[24.25em] 2xl:text-[20px] max-sm:max-w-80">
            {slice.primary.tagline2}
          </span>

          {/* CTA Button */}
          <div className="flex w-fit items-end border border-b-mybrown-50">
            <PrismicNextLink field={slice.primary.cta_link}>
              <button
                className={`flex h-10 w-fit items-center gap-1 rounded-full`}
              >
                <span className="font-medium">{slice.primary.cta_title}</span>
                <GoArrowUpRight className="w-8 text-xl" />
              </button>
            </PrismicNextLink>
          </div>
        </div>

        {/* Hero Image  */}
        <div className="relative flex min-h-[20em] w-full justify-end lg:min-h-[30em]">
          <PrismicNextImage
            priority
            field={slice.primary.hero_image}
            className="absolute h-full w-full rounded-sm object-cover object-center"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
