import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/helper/Bounded";
import { BsDot } from "react-icons/bs";
import ProcessData from "@/app/components/helper/ProcessData";
import CSSLineReveal from "@/app/components/helper/CSSLineReveal";
import { gridClass } from "@/app/utils/constants";

/**
 * Props for `Process`.
 */
export type ProcessProps = SliceComponentProps<Content.ProcessSlice>;

/**
 * Component for "Process" Slices.
 */
const Process: FC<ProcessProps> = ({ slice }) => {
  return slice.variation === "withSectionTitle" ? (
    <Bounded
      isSticky={slice.primary.issticky}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="-top-48 flex h-[125vh] w-screen flex-col gap-y-14 bg-white pt-20 xl:items-center"
    >
      <div className={`${gridClass} grid w-full gap-y-14`}>
        <div className="flex items-start gap-x-52 gap-y-8 lg:gap-x-60 max-sm:flex-col">
          {/* Section TITLE & Description */}
          <div className="slide-in-left flex items-center gap-x-3.5">
            <BsDot className="h-5 w-5 rounded-full bg-mybrown-50" />
            {/* Section TITLE */}
            <h1 className="text-[40px] uppercase md:text-[32px]">
              {slice.primary.section_title}
            </h1>
          </div>
          {/* Section Description */}
          <CSSLineReveal textClass="text-[18px] lg:text-[28px] max-sm:pl-9">
            {slice.primary.section_description}
          </CSSLineReveal>
        </div>
        <div className="flex w-full flex-col items-center">
          <ProcessData
            cardData={[
              ...slice.primary.steps_data.slice(0, 1).map((item) => ({
                order: item.order ?? "",
                title: item.title ?? "",
                description: item.description ?? "",
              })),
            ]}
          />
        </div>
      </div>
    </Bounded>
  ) : (
    <Bounded
      isSticky={slice.primary.issticky}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex h-full flex-col justify-between gap-y-14 bg-white pb-20"
    >
      <div className={`${gridClass} grid w-full gap-y-14`}>
        <ProcessData
          cardData={slice.primary.steps_data.map((item) => ({
            order: item.order ?? "",
            title: item.title ?? "",
            description: item.description ?? "",
          }))}
        />
      </div>
    </Bounded>
  );
};

export default Process;
