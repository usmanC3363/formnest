import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { paddingClass } from "../constants";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

// import { PrismicLink } from "@prismicio/react";

export default async function Footer({ extraClass }: { extraClass?: string }) {
  const client = createClient();
  const footer = await client.getSingle("footer");
  return (
    <footer
      className={`${extraClass} ${paddingClass} flex h-[23em] min-w-fit flex-col items-center justify-center bg-myblack-150 px-4 pb-10 pt-8 font-light sm:py-8 max-sm:h-[46em]`}
    >
      <div className="grid h-full w-full max-w-full gap-x-10 gap-y-7 md:grid-cols-[1fr_2fr] lg:h-[17em] lg:grid-cols-[2fr_3fr] lg:justify-between xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 2xl:py-10 3xl:max-w-screen-2xl max-sm:h-full">
        <div className="flex flex-col gap-5 place-self-start">
          <PrismicNextLink field={footer.data.home_link}>
            <h1 className="fade-up text-mybrown-50 text-3xl font-semibold -tracking-[0.05em] sm:text-4xl">
              {footer.data.home_title}
            </h1>
          </PrismicNextLink>
          <span className="fade-up max-w-80 text-sm sm:max-w-96 xl:text-base">
            {footer.data.description}
          </span>
        </div>
        <div className="flex w-full max-w-4xl lg:justify-between lg:gap-x-6 max-xs:flex-col max-xs:gap-y-10 max-lg:gap-x-6">
          <div className="flex h-fit flex-1 flex-col gap-y-4 xs:flex-row lg:justify-between lg:gap-x-8">
            <SliceZone slices={footer.data.slices} components={components} />
          </div>
          <div className="flex h-fit max-w-56 flex-col gap-y-3 lg:max-w-56 xl:min-w-60 max-md:hidden">
            <h2 className="fade-up text-xl font-medium md:text-2xl 2xl:text-3xl">
              Contact
            </h2>
            <div className="flex flex-col gap-y-1 opacity-80">
              <span className="fade-up px-0.5 py-1 text-sm delay-100 xl:text-base">
                {footer.data.email_address}
              </span>
              <span className="fade-up px-0.5 py-1 text-sm delay-200 xl:text-base">
                {footer.data.address}
              </span>
            </div>
          </div>
        </div>
        <div className="flex max-w-56 flex-1 flex-col gap-y-5 md:hidden lg:max-w-72">
          <h2 className="text-xl font-medium opacity-50 md:text-2xl 2xl:text-3xl">
            Contact
          </h2>
          <div className="flex flex-col gap-y-1 opacity-80">
            <span className="fade-up px-0.5 py-1 text-sm delay-100 xl:text-base">
              {footer.data.email_address}
            </span>
            <span className="fade-up px-0.5 py-1 text-sm delay-200 xl:text-base">
              {footer.data.address}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
