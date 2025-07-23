"use client";
import React, { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { Arrows } from "@/app/utils/constants";
import { BsDot } from "react-icons/bs";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { GoArrowUpRight } from "react-icons/go";
import GSAPLineReveal from "@/app/components/ui/GSAPLineReveal";

/**
 * Props for `ServiceListingNavigation`.
 */
export type ServiceListingNavigationProps =
  SliceComponentProps<Content.ServiceListingNavigationSlice>;

/**
 * Component for "ServiceListingNavigation" Slices.
 */
const ServiceListingNavigation: FC<ServiceListingNavigationProps> = ({
  slice,
}) => {
  const [currentService, setCurrentService] = useState(0);
  const toggleImages = (index: number) => setCurrentService(index);
  return (
    <Bounded
      isSticky={slice.primary.issticky}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex h-full flex-col gap-y-14 bg-mywhite-50 py-20"
    >
      <div className="flex items-start gap-x-52 gap-y-8 lg:gap-x-60 max-sm:flex-col">
        {/* Section TITLE & Description */}
        <div className="flex items-center gap-x-3.5">
          <BsDot className="h-5 w-5 rounded-full bg-mybrown-50" />
          {/* Section TITLE */}
          <h1 className="text-[40px] uppercase md:text-[32px]">
            {slice.primary.section_title}
          </h1>
        </div>
        {/* Section Description */}
        <GSAPLineReveal
          text={slice.primary.section_description}
          textClass="text-[18px] lg:text-[28px] max-sm:pl-9"
        />
      </div>
      {/* Service Title and Images Main Grid */}
      <div className="grid h-[36em] w-full grid-cols-[1fr_2fr] items-center">
        {/* Button FLEX COl */}
        <div className="flex max-w-[20rem] flex-col">
          {slice.primary.services_data.map((service, index) => (
            <div
              key={index}
              className={`${index % 2 === 0 ? "justify-center" : ""} ${currentService === index ? "" : ""} flex w-full items-center transition-all duration-300 ease-in-out`}
            >
              <button
                className={`${currentService === index ? "w-[90%]" : "w-[80%]"} flex items-center gap-x-0 transition-all duration-300 ease-in-out`}
                onClick={() => toggleImages(index)}
              >
                <Arrows
                  styles={`${currentService === index ? "" : "opacity-0 scale-x-0"} transition-all w-fit duration-300 ease-in-out`}
                />
                <h2
                  className={`${currentService === index ? "translate-x-4" : "text-mybrown-50/30"} w-fit flex-1 text-nowrap text-left text-[36px] leading-tight transition-all duration-300 ease-in-out lg:text-[44px]`}
                >
                  {service.service_title}
                </h2>
              </button>
            </div>
          ))}
        </div>
        <div className="flex h-full w-full">
          <div className="relative grid h-full w-full grid-cols-3 items-center">
            {slice.primary.services_data.map((servImg, index) => (
              <React.Fragment key={index}>
                <div
                  className={`${currentService === index ? "left-0 top-1/3 w-72" : "h-0 w-0 opacity-0"} absolute h-fit transition-all duration-300 ease-in-out`}
                >
                  <PrismicNextImage
                    field={servImg.service_image_1}
                    className={``}
                  />
                </div>
                <div
                  className={`${currentService === index ? "right-0 top-1/3 w-72" : "h-0 w-0 opacity-0"} absolute h-fit transition-all duration-300 ease-in-out`}
                >
                  <PrismicNextImage
                    field={servImg.service_image_2}
                    className={``}
                  />
                </div>
                {servImg.service_image_3 && (
                  <div
                    className={`${currentService === index ? "bottom-1/3 w-72" : "h-0 w-0 opacity-0"} absolute h-fit transition-all duration-300 ease-in-out`}
                  >
                    <PrismicNextImage
                      field={servImg.service_image_3}
                      className={``}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="flex">
        <PrismicNextLink field={slice.primary.view_services} className="w-fit">
          <button className="flex items-center gap-2 border border-b-mybrown-50">
            <span>View All</span>
            <GoArrowUpRight className="text-xl" />
          </button>
        </PrismicNextLink>
      </div>
    </Bounded>
  );
};

export default ServiceListingNavigation;
