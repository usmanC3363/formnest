import { ImageField } from "@prismicio/client";

export type Material = {
  title: string;
  subtitle?: string;
  image: ImageField;
  order: string | number;
};

export interface MaterialCardData {
  title: string;
  subtitle?: string;
  image: ImageField;
  order: string | number;
}

export interface MaterialsCardProps {
  gridData: Material[]; // allow flexible input with service__link
  //   serviceLink: LinkField | null;
}
