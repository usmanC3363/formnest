import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/helper/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { BsDot } from "react-icons/bs";
import { gridClass } from "@/app/utils/constants";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About: FC<AboutProps> = ({ slice }) => {
  return (
    <Bounded
      isSticky={slice.primary.issticky}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="-top-[51rem] flex min-h-full w-screen justify-center bg-white py-16 xl:-top-[45.99rem] xl:items-center 2xl:-top-[65%] 2xl:h-[75rem]"
    >
      {/* Main DIV */}

      <div
        className={`${gridClass} w-full bg-white lg:grid lg:grid-cols-[3fr_1fr] xl:grid-cols-[2fr_1fr]`}
      >
        <div className="flex flex-col gap-y-8 uppercase">
          {/* Title and Heading Div */}

          <div className="flex w-full flex-col gap-y-4 md:gap-y-7">
            {/* SECTION title */}

            <div className="slide-in-left flex gap-x-5 sm:items-center md:gap-3.5">
              <BsDot className="h-5 w-5 rounded-full bg-mybrown-50 max-sm:mt-4" />
              <h1 className="text-[40px] leading-[120%] sm:leading-[100%] md:text-[32px]">
                {slice.primary.section_title}
              </h1>
            </div>

            {/* Section Heading */}
            <h1
              className="fade-up text-[48px] leading-[133%] tracking-[-0.04em] xs:text-[56px] sm:text-[60px] md:text-[80px] xl:text-[6.25rem] max-sm:pr-[5%]"
              style={{ wordSpacing: "0.125em" }}
            >
              {slice.primary.section_headline}
            </h1>
          </div>

          {/* About Image */}
          <div className="relative h-[34.625rem] w-full xl:w-[63.45rem]">
            <div className="expand-height absolute bottom-0 h-full w-full bg-white" />
            <PrismicNextImage
              field={slice.primary.about_image}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div />
      </div>
    </Bounded>
  );
};

export default About;
