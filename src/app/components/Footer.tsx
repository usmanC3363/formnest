import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { paddingClass } from "../utils/constants";
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
          <span className="fade-up max-w-80 text-sm sm:max-w-96 xl:text-base">
            {footer.data.description}
          </span>
        </div>
      </div>
    </footer>
  );
}
