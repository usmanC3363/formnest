import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { BsDot } from "react-icons/bs";

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
      className="grid grid-cols-[3fr_1fr] bg-white py-9 xl:grid-cols-[2fr_1fr]"
    >
      {/* Main DIV */}

      <div className="flex flex-col gap-y-8 uppercase">
        {/* Title and Heading Div */}

        <div className="flex w-full flex-col gap-2">
          {/* SECTION title */}

          <div className="flex items-center gap-3.5">
            <BsDot className="h-5 w-5 rounded-full bg-mybrown-50" />
            <h1 className="text-[40px] sm:text-[60px] md:text-[32px]">
              {slice.primary.section_title}
            </h1>
          </div>

          {/* Section Heading */}
          <h1 className="text-[40px] sm:text-[60px] md:text-[80px] xl:text-[6.25rem]">
            {slice.primary.heading}
          </h1>
        </div>

        {/* About Image */}
        <div className="relative h-[34.625rem] w-full xl:w-[63.45rem]">
          <PrismicNextImage
            field={slice.primary.about_image}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div></div>
    </Bounded>
  );
};

export default About;
