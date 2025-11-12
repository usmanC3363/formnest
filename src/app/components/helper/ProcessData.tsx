import React from "react";
import { ProcessCardProps } from "@/app/utils/lib";
import CSSLineReveal from "./CSSLineReveal";

const ProcessData: React.FC<ProcessCardProps> = ({ cardData }) => {
  return (
    <>
      {cardData.map((item, index) => (
        <div
          key={index}
          className="grid min-h-60 w-full place-items-start items-start gap-x-10 gap-y-3 border-t border-mybrown-50 pb-8 pt-10 sm:gap-y-4 md:grid-cols-[1fr_3fr_2fr] xl:grid-cols-[1fr_3fr_1fr] xl:py-[5%] 2xl:py-20 xs-sm:py-6 max-md:grid-rows-[2em_1fr_auto]"
        >
          <span className="slide-in-left text-[18px] leading-[133%] max-sm:ml-0.5">
            Step {item.order}
          </span>
          <div className="md:-mt-[4%] xl:-mt-[3.15%] 2xl:-mt-[1.75%]">
            <CSSLineReveal textClass="leading-[105%] xs-sm:min-h-20 max-sm:-ml-0.5 md:leading-[100%] xl:leading-none sm:py-2 2xl:leading-none w-fit text-[4rem] lg:text-[5rem] xl:text-[6.25rem]">
              {item.title}
            </CSSLineReveal>
          </div>

          <CSSLineReveal textClass="max-sm:ml-0.5 text-[18px] max-w-[30rem] leading-[133%] md:text-right max-md:max-w-[27em] max-md:pt-0">
            {item.description}
          </CSSLineReveal>
        </div>
      ))}
    </>
  );
};

export default ProcessData;
