// import { type Metadata } from "next";

// import { asText } from "@prismicio/client";
// import { SliceZone } from "@prismicio/react";

// import { createClient } from "@/prismicio";
// import { components } from "@/slices";

// export default async function Home() {
//   const client = createClient();
//   const home = await client.getByUID("page", "home");

//   // <SliceZone> renders the page's slices.
//   return <SliceZone slices={home.data.slices} components={components} />;
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const client = createClient();
//   const home = await client.getByUID("page", "home");

//   return {
//     title: asText(home.data.title),
//     description: home.data.meta_description,
//     openGraph: {
//       title: home.data.meta_title ?? undefined,
//       images: [{ url: home.data.meta_image.url ?? "" }],
//     },
//   };
// }

import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home").catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home").catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}
