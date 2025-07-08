"use client";

import { PrismicNextImage } from "@prismicio/next";
import React from "react";
import { BenefitCardProps } from "@/app/utils/lib";

const BenefitCard: React.FC<BenefitCardProps> = ({ cardData }) => {
  return (
    <div className="grid max-w-full gap-x-4 gap-y-4 lg:gap-y-10 xl:grid-cols-3 xl:justify-items-center xl:place-self-center 2xl:max-w-screen-xl 3xl:max-w-screen-2xl">
      {cardData.map((benefit, id) => (
        <div
          key={id}
          style={{
            transitionDelay: `${150 + id * 120}ms`,
            background:
              "linear-gradient(to bottom right, rgba(250, 250, 250, 0.2) 5%, rgba(35, 107, 254, 0.07) 20%, rgba(35, 107, 254, 0.1) 40%, rgba(250, 250, 250, 0.5) 65%, rgba(35, 107, 254, 0.07) 78%, rgba(35, 107, 254, 0.1) 88%)",
          }}
          className="slide-in-up 0 grid min-h-52 max-w-full grid-cols-[1fr_1fr] gap-4 rounded px-4 py-2 shadow-lg sm:p-4 2xl:max-w-xl 2xl:py-5 max-sm:max-w-sm"
        >
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-lg font-medium xl:text-xl">
              {benefit.benefit_title}
            </h1>
            <span className="min-h-20 w-full text-sm sm:w-60 2xl:text-base">
              {benefit.benefit_headline}
            </span>
          </div>
          <div className="relative h-[8rem] w-fit place-self-end self-center rounded lg:h-[13rem] 2xl:h-[15rem] max-sm:w-32">
            <PrismicNextImage
              field={benefit.benefit_image}
              className="h-full w-full object-contain object-center"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitCard;
