"use client";
import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { HiArrowLongRight } from "react-icons/hi2";
import { Arrows } from "@/app/constants";
import { BsDot } from "react-icons/bs";

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
      className="flex h-screen flex-col bg-mywhite-50 py-9"
    >
      <div className="flex items-start gap-x-52 gap-y-8 lg:gap-x-60 max-sm:flex-col">
        <div className="flex items-center gap-x-3.5">
          <BsDot className="h-5 w-5 rounded-full bg-mybrown-50" />
          <h1 className="text-[40px] uppercase md:text-[32px]">
            {slice.primary.section_title}
          </h1>
        </div>
        <span className="text-[18px] lg:text-[28px] max-sm:pl-9">
          {slice.primary.section_description}
        </span>
      </div>
      {/* Main Grid */}
      <div className="grid w-full grid-cols-[1fr_2fr]">
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
        <div className="flex flex-col"></div>
      </div>
    </Bounded>
  );
};

export default ServiceListingNavigation;
