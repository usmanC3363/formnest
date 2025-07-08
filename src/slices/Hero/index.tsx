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
      <div className="relative grid h-full w-full gap-y-16 md:min-h-80 md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 2xl:py-20 3xl:max-w-screen-3xl max-md:grid-rows-[1fr_1fr]">
        {/* Content */}
        {/* className={`absolute left-2 top-1/3 -z-10 mr-20 flex h-auto w-fit max-w-[30rem] -translate-y-1/2 flex-col justify-center gap-2 rounded-lg bg-gradient-to-br from-blue-100/50 via-blue-300/10 to-blue-300/10 p-6 shadow-lg backdrop-blur-[6px] sm:gap-4 lg:left-16 lg:mr-0 lg:max-w-[36rem] xl:max-w-[45rem] 2xl:max-w-[52rem]`} */}
        <div
          className={`flex h-auto w-fit flex-col justify-center gap-6 rounded-lg sm:gap-y-10 max-sm:w-96`}
        >
          <div className="flex flex-col gap-y-14">
            <h1 className="text-3xl tracking-[-4%] sm:max-w-[26rem] sm:text-[40px] sm:leading-[120%] md:max-w-[26rem] md:leading-[120%] lg:max-w-[36rem] lg:text-[56px] lg:font-light xl:max-w-[40rem] xl:text-[62px] 2xl:max-w-[52rem] 3xl:text-[80px] max-xs:pr-12 max-sm:w-[22rem] max-sm:leading-[1.35]">
              {slice.primary.heading}
            </h1>
            <h2 className="w-full text-sm font-normal sm:max-w-md lg:max-w-xl lg:text-base 2xl:text-lg max-sm:max-w-80">
              {slice.primary.tagline1}
            </h2>
          </div>
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

        {/* Hero Images  */}
        <div className="relative flex min-h-80 w-full justify-end max-sm:min-h-[16rem] max-sm:items-end">
          {/* <div className="absolute inset-0 z-0 bg-gradient-to-l from-mywhite-200/5 via-mywhite-200/10 to-mywhite-200/20 bg-blend-screen"></div> */}

          <div className="relative min-h-full w-full max-w-[30rem]">
            <PrismicNextImage
              priority
              field={slice.primary.hero_image}
              className="absolute right-0 top-0 h-[19rem] w-[14.25rem] rounded-sm object-cover object-center sm:w-[22rem] lg:w-[14.25rem]"
            />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
