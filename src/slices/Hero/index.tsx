import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Bounded from "@/app/components/Bounded";

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
      className="flex h-full w-screen flex-col justify-center pb-16 pt-10 text-myblack-150 md:min-h-80 md:flex-row xl:items-center max-sm:gap-y-14 max-md:gap-20"
    >
      <div className="relative grid h-full w-full gap-y-16 md:min-h-80 md:grid-rows-[2fr_1fr_2fr] lg:grid-rows-[1fr_1fr_2fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 2xl:py-20 3xl:max-w-screen-3xl max-md:grid-rows-[1fr_1fr]">
        <div
          className={`flex h-auto w-fit flex-col justify-center gap-6 rounded-lg sm:gap-y-10 max-sm:w-96`}
        >
          <div className="flex flex-col gap-y-14">
            <h1 className="min-w-[40rem] text-3xl font-medium uppercase tracking-[-4%] text-mybrown-50 sm:max-w-[26rem] sm:text-[40px] sm:leading-[120%] md:max-w-[26rem] md:leading-[120%] lg:text-[56px] xl:text-[78px] 2xl:max-w-[52rem] 3xl:text-[80px] max-xs:pr-12 max-sm:w-[22rem] max-sm:leading-[1.35]">
              {slice.primary.heading}
            </h1>
          </div>
        </div>

        <div>
          <h2 className="w-full text-sm font-normal sm:max-w-md lg:max-w-xl lg:text-base 2xl:text-lg max-sm:max-w-80">
            {slice.primary.tagline1}
          </h2>
          <h2 className="w-full text-sm font-normal sm:max-w-md lg:max-w-xl lg:text-base 2xl:text-lg max-sm:max-w-80">
            {slice.primary.tagline2}
          </h2>
          <div className="flex w-fit items-center">
            <PrismicNextLink field={slice.primary.cta_link}>
              <button
                className={`flex h-10 w-fit items-center gap-1 rounded-full bg-blue-500 px-2.5`}
              >
                <span className="pl-1.5 font-semibold">
                  {slice.primary.cta_title}
                </span>
                {/* <GoArrowRight className="w-8 text-xl" /> */}
              </button>
            </PrismicNextLink>
          </div>
        </div>
        {/* Hero Image  */}
        <div className="relative flex min-h-80 w-full justify-end max-sm:min-h-[16rem] max-sm:items-end">
          <PrismicNextImage
            priority
            field={slice.primary.hero_image}
            className="absolute right-0 top-0 h-[19rem] w-[14.25rem] rounded-sm object-cover object-center sm:w-[22rem] lg:w-[14.25rem]"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
