import React from "react";
import { ProcessCardProps } from "@/app/utils/lib";
import CSSLineReveal from "./CSSLineReveal";

const ProcessData: React.FC<ProcessCardProps> = ({ cardData }) => {
  return (
    <>
      {cardData.map((item, index) => (
        <div
          key={index}
          className="grid min-h-60 w-full place-items-start items-start gap-x-10 gap-y-4 border-t border-mybrown-50 py-[5%] md:grid-cols-[1fr_3fr_2fr] xl:grid-cols-[1fr_2fr_1fr] max-md:grid-rows-[2em_1fr_1fr]"
        >
          <span className="slide-in-left text-[18px] leading-[133%]">
            Step {item.order}
          </span>
          <div className="-mt-[4%] xl:-mt-[3%]">
            <CSSLineReveal
              // divClass="w-fit"
              // spanClass="w-fit"
              textClass="md:leading-[100%] xl:leading-none py-2 2xl:leading-none w-fit text-[4rem] lg:text-[5rem] xl:text-[6.25rem]"
            >
              {item.title}
            </CSSLineReveal>
          </div>

          <CSSLineReveal textClass="text-[18px] max-w-[30rem] leading-[133%] text-right  max-md:max-w-[27em] max-md:pt-5">
            {item.description}
          </CSSLineReveal>
        </div>
      ))}
    </>
  );
};

export default ProcessData;
