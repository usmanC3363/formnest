// ./src/components/RichText.tsx

import { RichTextField } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  PrismicLink,
} from "@prismicio/react";

export const richTextComponents: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
  heading1: ({ children }) => (
    <h1 className="text-4xl font-normal xl:text-6xl 2xl:text-7xl">
      {children}
    </h1>
  ),
  heading2: ({ children }) => <h2 className="text-xl">{children}</h2>,
  heading3: ({ children }) => <h3 className="text-lg">{children}</h3>,
  paragraph: ({ children }) => (
    <p className="text-sm leading-relaxed md:text-base 2xl:text-lg">
      {children}
    </p>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink field={node.data} className="underline">
      {children}
    </PrismicLink>
  ),
  list: ({ children, node }) => {
    if (node.type === "group-list-item") {
      return <ul className="list-disc pl-8">{children}</ul>;
    } else {
      return <ol className="list-decimal pl-8">{children}</ol>;
    }
  },
  listItem: ({ children }) => <li className="my-1.5">{children}</li>,
};

interface RichTextProps {
  field: RichTextField;
}

export const RichText = ({ field }: RichTextProps) => {
  return <PrismicRichText field={field} components={richTextComponents} />;
};
