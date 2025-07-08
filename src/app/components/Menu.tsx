import React from "react";
import { createClient } from "@/prismicio";
import NewMenu from "./NewMenu";
import { Content } from "@prismicio/client";

type MenuDocument = Content.MenuDocument;
type MenuLink = MenuDocument["data"]["menu_links"][number];

type Props = {
  extraClass?: string;
  pageName: "header" | "footer";
};

export default async function Menu({ extraClass = "", pageName }: Props) {
  const client = createClient();
  const menu = await client.getSingle("menu");
  const menuLinks: MenuLink[] = menu.data.menu_links;

  if (pageName === "header") {
    return (
      <menu
        className={`${extraClass} flex h-[4.5rem] items-center justify-end px-4 md:sticky md:top-4 lg:justify-center lg:pl-10`}
      >
        <NewMenu menuLinks={menuLinks} />
      </menu>
    );
  }

  if (pageName === "footer") {
    return <nav className={`${extraClass}`}></nav>;
  }

  return null;
}
