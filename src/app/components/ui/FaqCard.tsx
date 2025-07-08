"use client";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCardProps = {
  cardData: FaqItem[];
};

const FaqCard: React.FC<FaqCardProps> = ({ cardData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-4 pl-2 sm:px-2 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl max-sm:max-w-[26em] max-md:pr-8">
      {cardData.map((faq, index) => (
        <div
          key={index}
          className="fade-up border-b border-gray-300 py-2 lg:-mt-3"
          style={{
            transitionDelay: `${100 + index * 150}ms`,
          }}
        >
          <button
            type="button"
            onClick={() => toggleItem(index)}
            className="flex w-[23em] items-center justify-between py-3 text-left sm:w-full"
          >
            <span
              className={`max-w-80 font-normal sm:max-w-full sm:text-lg lg:text-xl 2xl:text-[26px] ${openIndex === index ? "text-mybrown-50" : ""}`}
            >
              {faq.question}
            </span>
            <span
              className={`${openIndex === index ? "text-mybrown-50" : ""} transition-all duration-300 ease-in-out`}
            >
              <GoArrowRight
                className={`${openIndex === index ? "rotate-90" : ""} transition-all duration-300 ease-in-out`}
              />
            </span>
          </button>

          <div
            className={`max-w-[38em] overflow-hidden transition-all duration-300 ease-in-out lg:max-w-full ${
              openIndex === index
                ? "mt-2 max-h-40 text-base leading-normal opacity-100"
                : "mt-0 max-h-0 text-sm leading-tight opacity-0"
            }`}
          >
            <p className="pr-8 text-sm sm:text-base xl:text-lg 2xl:text-xl">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqCard;
