import React from "react";
import { paddingClass } from "../../constants";
import Link from "next/link";
import CTAButton from "./CTAButton";
// import Menu from "../Menu";
import { HeaderDocumentData } from "../../../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";

type Props = {
  newdata: HeaderDocumentData;
};

export default async function HeaderContent({ newdata }: Props) {
  return (
    <header
      className={`${paddingClass} grid h-[5rem] min-w-full grid-cols-[1fr_1fr] items-center justify-between border-b-2 border-gray-200/80 bg-mywhite-100 bg-opacity-90 backdrop-blur-[5px] md:grid-cols-[1fr_2fr_1fr]`}
    >
      <span className="w-fit text-sm">En | Fr | Es</span>
      {/* <Menu extraClass="" pageName="header" /> */}

      {/* LOGO or HomePage Link */}
      <div className="relative flex items-center justify-center">
        <Link
          href="/"
          aria-label="Home Button"
          className="flex h-8 w-fit flex-col justify-center gap-[3px]"
        >
          <PrismicNextImage
            field={newdata.logo_image}
            className="h-full w-full object-contain object-center"
          />
        </Link>
      </div>

      <CTAButton
        text="Contact Us"
        url="/contact"
        buttonClass="px-2.5 py-1 lg:py-1.5 lg:px-3.5 bg-myblack-50 rounded-full text-mywhite-50 cursor-pointer w-fit justify-self-end max-md:hidden"
      />
    </header>
  );
}
