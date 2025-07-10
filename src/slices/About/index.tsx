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
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-20"
    >
      {/* Main DIV */}

      <div className="flex flex-col pr-40 uppercase">
        <div className="flex w-full flex-col gap-2">
          {/* SECTION title */}

          <div className="flex items-center gap-2">
            <BsDot className="h-8 w-8 rounded-full bg-mybrown-50" />
            <h1 className="text-[40px] sm:text-[60px] md:text-[32px]">
              {slice.primary.section_title}
            </h1>
          </div>
          {/* <div className='flex flex-col'>
        </div> */}
          <h1 className="text-[40px] sm:text-[60px] md:text-[72px]">
            {slice.primary.heading}
          </h1>
        </div>
        <div className="relative h-[34.625rem] w-full xl:w-[63.5rem]">
          <PrismicNextImage
            field={slice.primary.about_image}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default About;
