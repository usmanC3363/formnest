import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/helper/Bounded";
import { BsDot } from "react-icons/bs";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Works`.
 */
export type WorksProps = SliceComponentProps<Content.WorksSlice>;

/**
 * Component for "Works" Slices.
 */
const Works: FC<WorksProps> = ({ slice }) => {
  return (
    <Bounded
      isSticky={slice.primary.issticky}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col gap-y-14 bg-mywhite-50 py-24 uppercase"
    >
      <div className="flex flex-col gap-y-7">
        {/* Section Title and DOT */}
        <div className="slide-in-left flex items-center gap-x-3.5">
          <BsDot className="h-5 w-5 rounded-full bg-mybrown-50" />
          <h1 className="text-[40px] md:text-[32px]">
            {slice.primary.section_title}
          </h1>
        </div>

        {/* Section Heading */}
        <h1 className="fade-up text-[40px] leading-none tracking-[-0.04em] sm:text-[60px] md:text-[80px] xl:text-[6.25rem]">
          {slice.primary.section_headline}
        </h1>
      </div>
      <div className="relative flex h-[70vh] flex-col gap-y-7">
        <div className="absolute -left-[3%] top-10 flex items-center gap-x-4">
          {slice.primary.galleryimages.map((Img, index) => (
            // <div
            //   key={index}
            //   className={`${index % 2 === 0 ? "h-[26.25rem] w-80" : "h-[17rem] w-[13.125rem]"} relative`}
            // >
            <PrismicNextImage
              key={index}
              field={Img.image_src}
              className={`${index % 2 === 0 ? "h-[26.25rem] w-80" : "h-[17rem] w-[13.125rem]"} object-contain object-center`}
            />
            // </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Works;
