import React from "react";
import { ProcessCardProps } from "@/app/utils/lib";
import GSAPLineReveal from "./GSAPLineReveal";

const ProcessData: React.FC<ProcessCardProps> = ({ cardData }) => {
  return (
    <>
      {cardData.map((item, index) => (
        <div
          key={index}
          className="grid min-h-60 w-full place-items-start items-start gap-x-10 gap-y-4 border-y border-mybrown-50 py-[5%] md:grid-cols-[1fr_3fr_2fr] xl:grid-cols-[1fr_2fr_1fr] max-md:grid-rows-[2em_1fr_1fr]"
        >
          <span className="text-[18px] leading-[133%]">Step {item.order}</span>
          <h2 className="text-[5rem] leading-[88%] xl:text-[6.25rem]">
            {item.title}
          </h2>
          <GSAPLineReveal
            text={item.description}
            textClass="text-[18px] leading-[133%] lg:pr-8 xl:pr-28 max-md:max-w-[27em] max-md:pt-5"
          />
        </div>
      ))}
    </>
  );
};

export default ProcessData;
