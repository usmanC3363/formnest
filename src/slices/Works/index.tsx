// Works.tsx
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/helper/Bounded";
import { BsDot } from "react-icons/bs";
import { PrismicNextImage } from "@prismicio/next";
import { gridClass } from "@/app/utils/constants";

/**
 * Props for `Works`.
 */
export type WorksProps = SliceComponentProps<Content.WorksSlice>;

/**
 * Component for "Works" Slices.
 */
const Works: FC<WorksProps> = ({ slice }) => {
  // images array
  return (
    <Bounded
      isSticky={slice.primary.issticky}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative flex h-[820px] w-screen flex-col gap-y-14 bg-mywhite-50 py-24 xl:items-center 1.5xl:h-[1000px] 2xl:h-[65rem]"
      // className=""
    >
      <div
        className={`${gridClass} grid h-full w-full gap-y-14 uppercase 2xl:h-[65rem]`}
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

        {/* ---------- Gallery wrapper: constrains visual width ---------- */}
        {/* ---------- Full-bleed Gallery Section ---------- */}
        <div className="no-scrollbar max-w-screen absolute bottom-0 left-0 h-[70vh] w-full overflow-x-auto overflow-y-hidden scroll-smooth">
          <div className="absolute bottom-[10%] left-8 flex min-w-full items-center gap-x-4 py-6 pr-20 xs:left-[6%] sm:left-[8%] lg:left-[6%] 2xl:left-[9%] 3xl:left-[12.5%]">
            {slice.primary.galleryimages.map((Img, index) => (
              <div
                key={index}
                className={`flex-shrink-0 ${
                  index % 2 === 0
                    ? "h-[26.25rem] w-80"
                    : "h-[17rem] w-[13.125rem]"
                }`}
              >
                <PrismicNextImage
                  field={Img.image_src}
                  className={`h-full w-full object-cover object-center`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Works;
