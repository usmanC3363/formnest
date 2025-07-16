"use client";

import { PrismicNextImage } from "@prismicio/next";
import React from "react";
import { MaterialsCardProps } from "@/app/utils/lib";

const MaterialsData: React.FC<MaterialsCardProps> = ({ gridData }) => {
  return (
    <div className="grid w-full grid-cols-[2fr_2fr_1fr_2fr_1fr] gap-x-5">
      {gridData.map((material, index) => (
        <div
          key={index}
          className={`flex flex-col gap-y-2 transition-all duration-300 ease-in-out`}
        >
          <span className="">0{material.order}</span>
          <div className="relative h-60 w-full">
            <PrismicNextImage
              field={material.image}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <h2
              className={`w-fit flex-1 text-nowrap text-left leading-tight transition-all duration-300 ease-in-out lg:text-[18px]`}
            >
              {material.title}
            </h2>
            <span className="text-sm text-mybrown-50/30">
              {material.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaterialsData;
