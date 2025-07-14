"use client";
import React, { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { Arrows } from "@/app/constants";
import { BsDot } from "react-icons/bs";
import { PrismicNextImage } from "@prismicio/next";

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
        <span className="text-[18px] lg:text-[28px] max-sm:pl-9">
          {slice.primary.section_description}
        </span>
      </div>
      {/* Service Title and Images Main Grid */}
      <div className="grid h-[80vh] w-full grid-cols-[1fr_2fr] items-end">
        {/* Button FLEX */}
        <div className="flex max-w-[20rem] flex-col">
          {slice.primary.Services.map((service, index) => (
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
        <div className="flex w-full">
          <div className="grid grid-cols-2">
            {slice.primary.service_images.map((serviceImg, index) => (
              <React.Fragment key={index}>
                <div
                  className={`${currentService === index ? "" : "hidden"} w-72`}
                >
                  <PrismicNextImage field={serviceImg.image_1} />
                </div>
                <div
                  className={`${currentService === index ? "" : "hidden"} w-72`}
                >
                  <PrismicNextImage field={serviceImg.image_2} />
                </div>
                {serviceImg.image_3 && (
                  <div
                    className={`${currentService === index ? "" : "hidden"} w-72`}
                  >
                    <PrismicNextImage field={serviceImg.image_3} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default ServiceListingNavigation;
