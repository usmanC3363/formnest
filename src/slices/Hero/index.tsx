import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Bounded from "@/app/components/Bounded";
import { GoArrowUpRight } from "react-icons/go";
import { StyledHeading } from "@/app/components/ui/StyledHeading";

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
      isSticky={slice.primary.issticky}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`flex h-full w-screen flex-col justify-center xl:items-center`}
    >
      {/* Main Grid with Rows */}
      <div className="relative grid h-full w-full gap-y-3 md:grid-rows-[1fr_1fr_3fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 2xl:py-20 3xl:max-w-screen-3xl max-md:grid-rows-[9.5em_2fr_2fr]">
        {/* Hero Heading DIV */}

        <div
          className={`flex h-auto min-w-full flex-col justify-end gap-y-2 rounded-lg sm:gap-y-6 max-sm:w-96`}
        >
          {/* Hero Heading */}

          <StyledHeading
            text={slice.primary.heading}
            headingClass="min-w-fit text-[3em] uppercase tracking-[-0.04em] xs:text-[3.5rem] sm:text-[60px] md:text-[72px] lg:text-[6rem] xl:text-[6.25rem] 3xl:text-[7rem] max-xs:pr-12 max-sm:w-[22rem] max-md:leading-[133%]"
            headingStyle={{ wordSpacing: "0.1em" }}
          />
          <hr className="h-[2.45px] w-full min-w-full bg-mybrown-50" />
        </div>

        {/* Taglines and CTA */}
        <div className="grid w-full justify-between gap-x-20 place-self-center sm:grid-cols-[1fr_1fr] md:grid-cols-[3fr_3fr_1fr] md:items-end lg:h-fit max-sm:grid-rows-[1fr_1fr_3em] max-md:gap-y-4">
          {/* Taglines */}

          <span className="w-full text-[16px] leading-[24px] lg:text-[18px] xl:max-w-[24.25em] 2xl:text-[20px] max-sm:max-w-80">
            {slice.primary.tagline1}
          </span>
          <span className="w-full text-[16px] leading-[24px] lg:text-[18px] xl:max-w-[24.25em] 2xl:text-[20px] max-sm:max-w-80">
            {slice.primary.tagline2}
          </span>

          {/* CTA Button */}
          <div className="flex w-fit items-end border border-b-mybrown-50 md:place-self-end max-md:place-self-start">
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
            className="absolute h-full w-full rounded-sm object-cover object-center pt-6"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
