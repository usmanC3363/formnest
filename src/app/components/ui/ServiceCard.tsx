"use client";

import React, { useEffect, useRef, useState } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { getCurrentScreenSize } from "../../utils/constants.js";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { ServiceCardData, ServiceCardProps } from "@/app/utils/lib.js";

const ServiceCard: React.FC<ServiceCardProps> = ({
  cardData,
  gridClass = "",
  cardClass = "",
  pagetype = "",
  serviceLink,
}) => {
  const [screenSize, setScreenSize] = useState(null);
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardRefs = useRef([]);
  const scrollTimeoutRef = useRef(null);

  const formattedCardData: ServiceCardData[] = cardData.map((item) => ({
    service_title: item.service_title,
    service_headline: item.service_headline,
    service_link: item.service_link,
    service_image: item.service_image,
    service_description: item?.service_description,
  }));

  const visibleCards =
    screenSize === "xxs" ||
    screenSize === "xs" ||
    screenSize === "sm" ||
    screenSize === "md" ||
    screenSize === "lg"
      ? formattedCardData.slice(0, 5)
      : screenSize === "xl"
        ? formattedCardData.slice(0, 6)
        : screenSize === "2xl" || screenSize === "3xl"
          ? formattedCardData.slice(0, 7)
          : formattedCardData.slice(0, 4);

  const dataToMap = pagetype === "homepage" ? visibleCards : cardData;

  // Reset card refs whenever dataToMap changes
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, dataToMap.length);
  }, [dataToMap]);

  useEffect(() => {
    const handleResize = () => setScreenSize(getCurrentScreenSize());
    handleResize();
    window.addEventListener("resize", handleResize);

    // Set up scroll snap detection
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const handleScroll = () => {
        // Only update activeIndex when not in a programmatic scroll
        if (!isScrolling) {
          // Find which card is most visible in the viewport
          const containerLeft = scrollContainer.scrollLeft;
          const containerWidth = scrollContainer.clientWidth;
          const containerCenter = containerLeft + containerWidth / 2;

          let closestCardIndex = 0;
          let closestDistance = Infinity;

          cardRefs.current.forEach((cardRef, index) => {
            if (!cardRef) return;

            const cardLeft = cardRef.offsetLeft;
            const cardWidth = cardRef.offsetWidth;
            const cardCenter = cardLeft + cardWidth / 2;

            const distance = Math.abs(containerCenter - cardCenter);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestCardIndex = index;
            }
          });

          setActiveIndex(closestCardIndex);
        }
      };

      scrollContainer.addEventListener("scroll", handleScroll);
      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, [isScrolling]);

  const scrollToCard = (index: number) => {
    const cardRef = cardRefs.current[index];
    if (!cardRef || !scrollContainerRef.current) return;

    // Mark that we're in a programmatic scroll
    setIsScrolling(true);

    // Calculate position to center the card in the container
    const container = scrollContainerRef.current;
    const containerWidth = container.clientWidth;
    const options =
      screenSize === "lg"
        ? 400
        : screenSize === "xl" || screenSize === "2xl"
          ? 600
          : 180;
    const cardLeft = cardRef.offsetLeft + options;
    const cardWidth = cardRef.offsetWidth;

    // Center the card in the view
    const scrollPosition = cardLeft - containerWidth / 2 + cardWidth / 2;

    // Set active index first
    setActiveIndex(index);

    // Then perform the scroll
    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Reset the scrolling flag after animation completes
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 500); // Approximate duration of smooth scroll
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % dataToMap.length;
    scrollToCard(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + dataToMap.length) % dataToMap.length;
    scrollToCard(newIndex);
  };

  const handleCardHover = (index) => {
    // Always update hoveredIndex for visual feedback
    setHoveredIndex(index);
  };

  if (pagetype !== "homePage" && pagetype !== "services") return null;

  return (
    <>
      <div className="hidden max-h-[4.5em] w-full max-w-32 items-center justify-between sm:gap-x-6 md:flex lg:h-20 xl:h-24">
        <button
          onClick={handlePrev}
          className="transition-transform hover:scale-110 focus:outline-none"
        >
          <GoArrowLeft className="fade-up w-12 text-4xl sm:text-5xl" />
        </button>
        <button
          onClick={handleNext}
          className="transition-transform hover:scale-110 focus:outline-none"
        >
          <GoArrowRight className="fade-up w-12 text-4xl sm:text-5xl" />
        </button>
      </div>

      <div
        ref={scrollContainerRef}
        className={`${gridClass} no-scrollbar flex max-w-full snap-x snap-mandatory place-items-center justify-self-center overflow-x-auto overflow-y-hidden scroll-smooth`}
      >
        {dataToMap.map((service, index) => {
          const isActive = index === activeIndex;
          const isHovered = index === hoveredIndex;
          const isActiveOrHovered = isActive || isHovered;
          return (
            <div
              style={{
                scale: isActiveOrHovered ? "1" : "1",
                transformOrigin: "right",
                transition: "scale 0.3s ease, translate 0.3s ease",
              }}
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group ${cardClass} z-0 min-w-[370px] snap-center transition-all duration-300 ease-in-out ${
                isActiveOrHovered
                  ? "shadow-lg shadow-neutral-400"
                  : "border-x border-neutral-300 bg-lilac-100/10"
              }`}
              onMouseEnter={() => {
                handleCardHover(index);
                setActiveIndex(index);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
            >
              <div
                className={`absolute bottom-0 z-0 min-h-full w-full transition-all duration-300 ease-in-out ${
                  isActiveOrHovered ? "" : ""
                } `}
                style={{
                  background: !isActiveOrHovered
                    ? // ? "linear-gradient(to bottom left, rgba(250, 250, 250, 0.5) -8%, rgba(35, 107, 254, 0.06) 40%, rgba(250, 250, 250, 0.3) 65%, rgba(35, 107, 254, 0.06) 78%, rgba(35, 107, 254, 0.1) 88%)"
                      ""
                    : "linear-gradient(to top, rgba(35, 107, 254, 0.275) 20%,  rgba(35, 107, 254, 0.15) 50%, rgba(0, 0, 0, 0.2) 100%",
                }}
              />
              <div className="relative flex min-h-[25rem] w-full items-end">
                <div className="flex flex-col gap-2.5 px-4 pb-6 text-myblack-150 sm:px-5">
                  <div
                    className={`${
                      isActiveOrHovered ? "translate-y-2" : ""
                    } flex items-center justify-between transition-all duration-300 ease-in-out`}
                  >
                    <h1
                      className={`${
                        isActiveOrHovered ? "font-normal text-mywhite-50" : ""
                      } pointer-events-none text-xl capitalize xl:text-xl 2xl:text-2xl`}
                      style={{
                        scale: isActiveOrHovered ? "1.15" : "1",
                        transformOrigin: "left",
                        transition: "scale 0.3s ease, text-shadow 0.1s ease",
                      }}
                    >
                      {service.service_title}
                    </h1>
                    <GoArrowRight
                      className={`w-12 text-2xl transition-all duration-300 ease-in-out ${
                        isActiveOrHovered
                          ? "text-mywhite-50"
                          : "text-mybrown-50"
                      }`}
                      style={
                        isActiveOrHovered
                          ? {
                              transform: "scale(1.3)",
                              transformOrigin: "left",
                              transition: "transform 0.3s ease",
                            }
                          : {
                              transform: "scale(1)",
                              transformOrigin: "top",
                              transition: "transform 0.3s ease",
                            }
                      }
                    />
                  </div>
                  {/* divideR */}
                  <div
                    className={`h-[1px] w-80 outline-0 transition-all duration-300 ease-in-out sm:w-full ${
                      isActiveOrHovered
                        ? "translate-y-2 bg-mywhite-100"
                        : "bg-myblack-100"
                    }`}
                  />
                  <p
                    className={`${
                      isActiveOrHovered
                        ? "translate-y-4 text-mywhite-50 opacity-0"
                        : ""
                    } pointer-events-none min-h-16 text-sm transition-all duration-300 ease-in-out 2xl:text-base`}
                  >
                    {service.service_headline}
                  </p>
                  <PrismicNextLink
                    field={service.service_link}
                    className={`absolute bottom-0 max-w-fit transition-all duration-300 ease-in-out ${
                      isActiveOrHovered
                        ? "-translate-y-12 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    <button
                      className={`flex w-fit min-w-32 items-center pl-1 text-mywhite-50 transition-all duration-300 ease-in-out`}
                    >
                      Read More
                    </button>
                  </PrismicNextLink>
                </div>
                <PrismicNextImage
                  field={service.service_image}
                  className={`absolute left-0 top-0 -z-50 transition-all duration-300 ease-in-out ${
                    isActiveOrHovered
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-5 opacity-0"
                  } h-[25rem] w-full object-cover object-center`}
                />
              </div>
            </div>
          );
        })}

        <div className="flex min-w-96 items-center justify-end text-2xl transition-all duration-300 ease-in-out hover:scale-105 xl:text-3xl">
          <button type="button" className={`w-fit rounded`}>
            <PrismicNextLink field={serviceLink}>
              <span className="">View All Services</span>
            </PrismicNextLink>
          </button>
          <GoArrowRight
            className={`w-12 transition-all duration-300 ease-in-out`}
          />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
