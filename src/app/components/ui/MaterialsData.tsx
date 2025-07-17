"use client";

import { PrismicNextImage } from "@prismicio/next";
import React from "react";
import { MaterialsCardProps } from "@/app/utils/lib";

const MaterialsData: React.FC<MaterialsCardProps> = ({ gridData }) => {
  return (
    <div className="grid w-full grid-cols-[2fr_2fr_1fr_2fr_1fr] gap-x-5">
      {gridData.map((item, index) => {
        if (item.type === "material") {
          return (
            <div
              key={index}
              className="flex flex-col gap-y-2 transition-all duration-300 ease-in-out"
            >
              <span>0{item.order}</span>
              <div className="relative h-60 w-full">
                <PrismicNextImage
                  field={item.image}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <h2 className="w-fit flex-1 text-nowrap text-left text-[14px] leading-tight xl:text-[16px]">
                  {item.title}
                </h2>
                <span className="text-[10px] text-mybrown-50/30 xl:text-[12px] 2xl:text-[14px]">
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
              className="col-span-1 flex flex-col items-end justify-end px-4 py-[42px]"
            >
              <h2 className="text-[44px]">{item.materialTitle}</h2>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default MaterialsData;
