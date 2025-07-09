import React from "react";
import { paddingClass } from "../../constants";
import Link from "next/link";
// import CTAButton from "./CTAButton";
import Menu from "../Menu";
import { HeaderDocumentData } from "../../../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";

type Props = {
  newdata: HeaderDocumentData;
};

export default async function HeaderContent({ newdata }: Props) {
  return (
    <header
      className={`${paddingClass} grid h-[6.25rem] min-w-full grid-cols-[1fr_1fr] items-center justify-between backdrop-blur-[20px] sm:grid-cols-[1fr_4fr_1fr] lg:grid-cols-[1fr_7fr_1fr]`}
    >
      <div className="flex h-full w-full flex-col justify-center">
        <span className="flex h-9 w-fit items-center text-sm font-normal">
          En&nbsp; | &nbsp;Fr&nbsp; | &nbsp;Es
        </span>
      </div>

      {/* LOGO or HomePage Link */}
      <div className="relative hidden h-9 items-center justify-center sm:flex">
        <Link
          href="/"
          aria-label="Home Button"
          className="flex h-[1.2rem] w-fit flex-col justify-center gap-[3px]"
        >
          <PrismicNextImage
            field={newdata.logo_image}
            className="h-full w-full object-contain object-center"
          />
        </Link>
      </div>

      {/* <CTAButton
        text="Contact Us"
        url="/contact"
        buttonClass="px-2.5 py-1 lg:py-1.5 lg:px-3.5 bg-myblack-50 rounded-full text-mywhite-50 cursor-pointer w-fit justify-self-end max-md:hidden"
      /> */}

      <Menu extraClass="" pageName="header" />
    </header>
  );
}
