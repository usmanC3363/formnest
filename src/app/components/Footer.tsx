import React from "react";
import { createClient } from "@/prismicio";
import { paddingClass } from "../utils/constants";
import { PrismicNextLink } from "@prismicio/next";
import GSAPLineReveal from "./ui/GSAPLineReveal";

// import { PrismicLink } from "@prismicio/react";

export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");
  return (
    // Flex Container
    <footer
      className={` ${paddingClass} flex h-full max-h-[40rem] flex-col items-center justify-end bg-mybrown-50 px-4 py-8 text-mywhite-50 md:max-h-[32rem]`}
    >
      {/* Main Grid */}

      <div className="grid h-fit w-full max-w-full gap-y-7 md:grid-cols-[1fr_1fr] md:gap-x-[10%] lg:h-[80%] lg:justify-between lg:gap-x-[8%] xl:grid-cols-[4fr_5fr] xl:justify-items-center xl:gap-x-[15%] xl:place-self-center 2xl:max-w-screen-2xl 2xl:py-10 3xl:max-w-screen-2xl max-sm:h-full max-md:grid-rows-[2fr_3fr]">
        {/* Description Flex */}

        <div className="flex h-full w-full flex-col justify-between">
          <div className="flex flex-col gap-5 place-self-start">
            {/* DESCRIPTION */}
            <GSAPLineReveal
              text={footer.data.description}
              textClass="max-w-[34.75rem] text-[20px] leading-[114%] sm:text-[24px] lg:text-[28px]"
            />
          </div>
          <div></div>
          <span className="text-[18px]">
            © Formnest 2025, all rights are reserved.
            {/* {footer.data.} */}
          </span>
        </div>

        {/* Second column Container */}
        <div className="flex flex-col justify-between max-lg:gap-y-10">
          <div className="grid gap-x-10 gap-y-14 lg:grid-cols-[1fr_1fr_3fr] xl:gap-x-14 max-lg:grid-cols-2">
            {/* First Inner Page loop 1-3 */}
            <div className="flex w-fit flex-col gap-y-2">
              {footer.data.inner_pages.slice(0, 3).map((innerPage, index) => (
                <PrismicNextLink
                  className=""
                  field={innerPage.page_link}
                  key={index}
                >
                  <span className="text-nowrap text-[18px] leading-[133%]">
                    {innerPage.page_title}
                  </span>
                </PrismicNextLink>
              ))}
            </div>
            {/* Second Inner Page loop 4-6 */}
            <div className="flex w-fit flex-col gap-y-2">
              {footer.data.inner_pages.slice(3, 6).map((innerPage, index) => (
                <PrismicNextLink
                  className=""
                  field={innerPage.page_link}
                  key={index}
                >
                  <span className="text-nowrap text-[18px] leading-[133%]">
                    {innerPage.page_title}
                  </span>
                </PrismicNextLink>
              ))}
            </div>
            {/* Social Links loop */}

            <div className="flex w-fit flex-col gap-2">
              {footer.data.social_links.map((social, index) => (
                <PrismicNextLink
                  className=""
                  field={social.social_url}
                  key={index}
                >
                  <span className="text-nowrap text-[18px] leading-[133%]">
                    {social.social_title}
                  </span>
                </PrismicNextLink>
              ))}
            </div>
          </div>
          {/* NewsLetter */}

          <div className="flex flex-col gap-y-3">
            <span className="text-[18px]">Sign up for our newsletter</span>
            <div className="flex items-center border-b border-[#ccc]">
              <input
                type="email"
                placeholder="Type Your Email Address"
                className="flex-1 bg-transparent py-2 text-sm placeholder-mywhite-50/30 focus:outline-none"
              />
              <button className="text-sm text-mywhite-50">SEND</button>
            </div>

            <span className="py-1 text-[18px]">
              You can unsubscribe from our newsletter at anytime for free.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
