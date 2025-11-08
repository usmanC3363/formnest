"use client";

import { PrismicNextImage } from "@prismicio/next";
import React from "react";
import { MaterialsCardProps } from "@/app/utils/lib";
import CSSLineReveal from "./CSSLineReveal";

const MaterialsData: React.FC<MaterialsCardProps> = ({ gridData }) => {
  return (
    <div className="no-scrollbar z-40 grid min-w-full grid-cols-[auto_auto_auto_auto_1fr] gap-x-5 2xl:gap-x-14 max-md:overflow-x-auto">
      {gridData.map((item, index) => {
        if (item.type === "material") {
          return (
            <div
              key={index}
              className="flex w-fit flex-col gap-y-2 transition-all duration-300 ease-in-out"
            >
              <span className="slide-in-left">0{item.order}</span>
              <div className="relative h-60 w-full 2xl:h-80 max-md:min-w-max">
                <div className="expand-height absolute bottom-0 h-full w-full bg-white" />
                <PrismicNextImage
                  field={item.image}
                  className="h-full w-fit object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <h2 className="slide-in-left w-fit flex-1 text-nowrap text-left text-[14px] leading-tight xl:text-[16px]">
                  {item.title}
                </h2>
                <span className="slide-in-left text-[10px] text-mybrown-50/30 xl:text-[12px] 2xl:text-[14px]">
                  {item.subtitle}
                </span>
              </div>
            </div>
          );
        }

        if (item.type === "materialTitle") {
          return (
            <div
              key={index}
              className="col-span-1 flex max-w-[19.5rem] flex-col items-end justify-end px-4 py-[34px]"
            >
              <CSSLineReveal textClass="text-[44px] pb-1">
                {item.materialTitle}
              </CSSLineReveal>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default MaterialsData;
