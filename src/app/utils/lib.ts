import { ImageField } from "@prismicio/client";

export type Process = {
  order: string | number;
  title: string;
  description: string;
};

export interface ProcessCardProps {
  cardData: Process[]; // allow flexible input with service__link
  //   serviceLink: LinkField | null;
}

export type Material =
  | {
      type: "material";
      title: string;
      subtitle?: string | undefined;
      image: ImageField;
      order: string | number;
    }
  | {
      type: "materialTitle";
      materialTitle: string;
    };

export interface MaterialsCardProps {
  gridData: Material[];
}

// export interface MaterialCardData {
//   title: string;
//   subtitle?: string;
//   image: ImageField;
//   order: string | number;
// }
