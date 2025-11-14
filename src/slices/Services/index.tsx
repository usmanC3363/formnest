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
        className={`${gridClass} grid h-full w-full gap-y-9 bg-mywhite-50 py-10 lg:gap-y-14 2xl:py-16`}
      >
        {/* Section TITLE & Description */}
        <div className="flex items-start justify-between gap-y-8 2xl:max-w-[87.5rem] max-sm:flex-col max-xl:gap-x-[15%]">
          <div className="slide-in-left flex items-center gap-x-3.5">
            <BsDot className="h-5 w-5 rounded-full bg-mybrown-50" />
            {/* Section TITLE */}
            <h1 className="text-[40px] uppercase md:text-[32px]">
              {slice.primary.section_title}
            </h1>
          </div>

          {/* Section Description */}
          <CSSLineReveal textClass="text-[18px] lg:max-w-[60vw] 2xl:max-w-[55rem] lg:text-[28px] max-sm:pl-9">
            {slice.primary.section_description}
          </CSSLineReveal>
        </div>
        {/* Service Titles and Images Main Grid */}
        <div className="grid w-full max-w-[1550px] items-center md:grid-cols-[1fr_2fr] lg:min-h-[40rem] xl:grid-cols-[1fr_3fr] xl:gap-x-24 max-sm:gap-y-8 max-lg:h-full">
          {/* Button and view all FLEX  */}
          <div className="flex flex-col justify-between gap-x-3 gap-y-14 lg:max-w-[20rem]">
            {/* Button FLEX COl  */}
            <div className="md:flex md:flex-col s-sm:grid-cols-[auto_auto] sm-lg:grid-cols-[auto_auto_auto] max-md:grid max-md:min-w-full max-md:gap-y-1">
              {slice.primary.services_data.map((service, index) => (
                <div
                  key={index}
                  className={`${
                    service.service_id === 0 //furniture
                      ? "s-sm:order-1"
                      : service.service_id === 1 //lighting
                        ? "s-sm:order-3"
                        : service.service_id === 2 //tabletop
                          ? "s-sm:order-5"
                          : service.service_id === 3 //decor
                            ? "s-sm:order-7"
                            : service.service_id === 4 //textile
                              ? "s-sm:order-2"
                              : service.service_id === 5 //wallcovering
                                ? "s-sm:order-4"
                                : "s-sm:order-6"
                  } ${index % 2 === 0 ? "lg:justify-center" : "s-sm:place-self-end"} ${currentService === index ? "" : "opacity-30"} flex w-fit items-center transition-all duration-200 ease-linear lg:min-w-full`}
                >
                  <button
                    className={`${currentService === index ? "md:w-[100%] md:gap-x-5" : "md:w-[80%] lg:gap-x-0"} flex items-center transition-all duration-200 ease-linear max-lg:w-fit max-lg:gap-x-3`}
                    onClick={() => toggleImages(index)}
                  >
                    <Arrows
                      styles={`${currentService === index ? "" : "opacity-0 scale-x-0"} max-md:size-8 lg:min-w-fit transition-all duration-200 ease-linear`}
                    />
                    <h2
                      className={`${currentService === index ? "" : "-translate-x-[10%] lg:-translate-x-[20%]"} text-left text-[24px] leading-tight transition-all duration-200 ease-linear sm:text-[28px] md:text-[32px] lg:w-fit lg:text-nowrap lg:text-[44px]`}
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
          <div className="flex h-full w-fit place-self-end">
            <div className="relative grid h-full max-h-[25rem] w-full max-w-4xl grid-cols-9 grid-rows-[6%_6%_6%_6%_6%_6%_6%_6%] gap-x-2.5 gap-y-2.5 border-black md:max-h-[35rem] md:grid-rows-[10%_10%_10%_10%_10%_10%_10%_10%] lg:max-h-[40rem] 2xl:max-w-5xl">
              {slice.primary.services_data.map((servImg, index) => (
                <React.Fragment key={index}>
                  {/* FIRST IMAGE */}

                  <div
                    className={`${index === 0 && "row-start-4 md:col-end-3"} ${index === 1 && "col-start-2 row-start-2 md:col-start-3 md:row-start-1"} ${index === 2 && "col-start-2 row-start-3 md:col-end-4 md:row-start-3"} ${index === 3 && "col-start-1 row-start-3 md:col-end-4 md:row-end-3"} ${index === 4 && "col-start-1 row-start-3 md:col-start-4 md:row-start-2"} ${index === 5 && "col-start-1 row-start-1 md:row-start-2 md:row-end-4"} ${index === 6 && "col-start-1 row-start-1 md:col-start-4 md:row-end-3"} ${currentService === index ? "min-h-fit min-w-max" : "pointer-events-none opacity-0"} flex scale-100 flex-col gap-y-2.5 transition-all duration-200 ease-linear md-lg:scale-[0.7] lg-2xl:scale-[0.8]`}
                    style={{ transformOrigin: "top" }}
                  >
                    <PrismicNextImage
                      field={servImg.service_image_1}
                      className={`lg:min-h-max lg:min-w-max max-lg:h-fit max-lg:w-fit`}
                    />
                    <div className="">
                      <p className="md-2xl:text-lg w-fit text-sm uppercase lg:text-nowrap">
                        {servImg.image_1_title}
                      </p>
                      <p className="md-2xl:text-sm w-fit text-xs uppercase opacity-50">
                        {servImg.image_1_subtitle}
                      </p>
                    </div>
                  </div>
                  {/* SECOND IMAGE */}
                  <div
                    className={`${index === 0 && "col-start-5 row-start-3 md:col-start-6 max-lg:ml-3"} ${index === 1 && "col-start-5 row-start-8 md:col-start-6 md:row-start-5"} ${index === 2 && "col-start-6 row-start-3 md:col-end-8 md:row-start-3"} ${index === 3 && "col-start-4 row-start-5 md:col-start-4 md:row-end-4"} ${index === 4 && "col-start-4 row-start-3 ml-5 md:col-start-6 md:row-start-2"} ${index === 5 && "col-start-1 row-end-9 md:col-start-3 md:row-end-4"} ${index === 6 && "col-start-1 row-end-9 md:col-start-4 md:row-end-7"} ${currentService === index ? "min-h-max min-w-max" : "pointer-events-none opacity-0"} flex flex-col gap-y-2.5 transition-all duration-200 ease-linear md-lg:scale-[0.7] lg-2xl:scale-[0.8]`}
                    style={{ transformOrigin: "top" }}
                  >
                    <PrismicNextImage
                      field={servImg.service_image_2}
                      className={`lg:min-h-max lg:min-w-max max-lg:h-fit max-lg:w-fit`}
                    />
                    <div className="">
                      <p className="md-2xl:text-lg w-fit text-sm uppercase lg:text-nowrap">
                        {servImg.image_2_title}
                      </p>
                      <p className="md-2xl:text-sm w-fit text-xs uppercase opacity-50">
                        {servImg.image_2_subtitle}
                      </p>
                    </div>
                  </div>

                  {/* THIRD IMAGE */}
                  {servImg.service_image_3 && (
                    <div
                      className={`${index === 3 && "col-start-7 row-start-3 md:col-start-7 md:row-end-3"} ${index === 4 && "col-start-1 row-start-9 md:col-start-4 md:row-start-6 lg-2xl:-ml-[30px]"} ${index === 5 && "col-start-5 row-start-1 md:col-start-8 md:row-start-2"} ${index === 6 && "col-start-5 row-start-1 md:col-start-7 md:row-end-3"} ${currentService === index ? "min-h-max min-w-max" : "pointer-events-none opacity-0"} flex flex-col gap-y-2.5 transition-all duration-200 ease-linear md-lg:scale-[0.7] lg-2xl:scale-[0.8]`}
                      style={{ transformOrigin: "top" }}
                    >
                      <PrismicNextImage
                        field={servImg.service_image_3}
                        className={`lg:min-h-max lg:min-w-max max-lg:h-fit max-lg:w-fit`}
                      />
                      <div className="">
                        <p className="md-2xl:text-lg w-fit text-sm uppercase lg:text-nowrap">
                          {servImg.image_3_title}
                        </p>
                        <p className="md-2xl:text-sm w-fit text-xs uppercase opacity-50">
                          {servImg.image_3_subtitle}
                        </p>
                      </div>
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
