"use client";
import React, { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/helper/Bounded";
import { Arrows, gridClass } from "@/app/utils/constants";
import { BsDot } from "react-icons/bs";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { GoArrowUpRight } from "react-icons/go";
import CSSLineReveal from "@/app/components/helper/CSSLineReveal";

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
      className="flex h-full flex-col gap-y-14 bg-mywhite-50 py-10 2xl:py-16"
    >
      <div
        className={`${gridClass} grid h-full w-full gap-y-14 bg-mywhite-50 py-10 2xl:py-16`}
      >
        <div className="flex items-start gap-x-52 gap-y-8 lg:gap-x-80 max-sm:flex-col">
          {/* Section TITLE & Description */}
          <div className="slide-in-left flex items-center gap-x-3.5">
            <BsDot className="h-5 w-5 rounded-full bg-mybrown-50" />
            {/* Section TITLE */}
            <h1 className="text-[40px] uppercase md:text-[32px]">
              {slice.primary.section_title}
            </h1>
          </div>
          {/* Section Description */}
          <CSSLineReveal textClass="text-[18px] lg:max-w-[50vw] 2xl:max-w-[30vw] lg:text-[28px] max-sm:pl-9">
            {slice.primary.section_description}
          </CSSLineReveal>
        </div>
        {/* Service Title and Images Main Grid */}
        <div className="grid min-h-[40rem] w-full items-center md:grid-cols-[1fr_2fr] max-md:min-h-[60rem]">
          {/* Button FLEX COl */}
          <div className="flex max-w-[20rem] flex-col gap-y-14">
            <div className="flex flex-col">
              {slice.primary.services_data.map((service, index) => (
                <div
                  key={index}
                  className={`${index % 2 === 0 ? "slide-in-left justify-center" : "slide-in-right"} ${currentService === index ? "" : ""} flex w-full items-center transition-all duration-300 ease-in-out`}
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

            {/* VIEW ALL BUTTON */}
            <PrismicNextLink
              field={slice.primary.view_services}
              className="slide-in-left flex w-fit items-center gap-2 border border-b-mybrown-50"
            >
              <span>View All</span>
              <GoArrowUpRight className="text-xl" />
            </PrismicNextLink>
          </div>

          {/* Images GRID */}
          <div className="flex h-full w-full">
            <div className="relative grid h-full w-full grid-cols-8 grid-rows-8 items-center gap-x-2 gap-y-2 border-black">
              {slice.primary.services_data.map((servImg, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`${index === 0 && "col-start-2 row-start-3"} ${index === 1 && "col-start-4 row-start-1"} ${currentService === index ? "h-full w-full" : "h-0 w-0 opacity-0"} h-fit transition-all duration-300 ease-in-out`}
                  >
                    <PrismicNextImage
                      field={servImg.service_image_1}
                      className={`absolute object-cover object-center`}
                    />
                  </div>
                  <div
                    className={`${index === 0 && "col-start-6 row-start-2"} ${index === 1 && "col-start-6 row-start-4"} ${currentService === index ? "h-full w-full" : "h-0 w-0 opacity-0"} h-fit transition-all duration-300 ease-in-out`}
                  >
                    <PrismicNextImage
                      field={servImg.service_image_2}
                      className={`absolute object-cover object-center`}
                    />
                  </div>
                  {servImg.service_image_3 && (
                    <div
                      className={`${currentService === index ? "col-start-7 w-72" : "h-0 w-0 opacity-0"} h-fit transition-all duration-300 ease-in-out`}
                    >
                      <PrismicNextImage
                        field={servImg.service_image_3}
                        className={`absolute object-cover object-center`}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default ServiceListingNavigation;
