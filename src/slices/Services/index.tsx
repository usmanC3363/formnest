"use client";
import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { GoArrowRight } from "react-icons/go";

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
      className="flex h-screen bg-mywhite-50 py-9"
    >
      {/* Main Grid */}
      <div className="grid w-full grid-cols-[1fr_2fr]">
        <div className="flex flex-col">
          {slice.primary.Services.map((service, index) => (
            <div key={index} className="">
              <button
                className="flex w-full items-center gap-2"
                onClick={() => toggleImages(index)}
              >
                <GoArrowRight
                  className={`${currentService === index ? "" : "opacity-0"} h-8 w-20 text-2xl transition-all duration-500 ease-in-out`}
                />
                <h2
                  className={`${currentService === index ? "ml-4" : "-ml-4 text-mybrown-50/60"} flex-1 text-[44px] transition-all duration-300 ease-in-out`}
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
