import { CSSProperties } from "react";
import CSSLineReveal from "./CSSLineReveal";

type StyledHeadingProps = {
  text: string | null;
  headingClass: string | null;
  headingStyle?: CSSProperties | undefined;
};

export const StyledHeading = ({
  text,
  headingClass,
  headingStyle,
}: StyledHeadingProps) => {
  if (!text) return null;

  return (
    <h1 className={`${headingClass} flex flex-wrap`} style={headingStyle}>
      {text.split(" ").map((word, index) => (
        <CSSLineReveal
          divClass="w-fit"
          spanClass="w-fit"
          key={index}
          textStyle={{
            transitionDelay: `${0 + index * 130}ms`,
          }}
        >
          {word.split("").map((char, index) => (
            <span
              key={index}
              // className={char === "O" || char === "o" ? "" : ""}
              style={
                char === "O" || char === "o" ? { fontFamily: "Vonca" } : {}
              }
            >
              {char}
            </span>
          ))}
          &nbsp;
        </CSSLineReveal>
      ))}
      {/* {text.split("").map((char, index) => (
        <span
          key={index}
          // className={char === "O" ? "" : "font-vonca text-purple-500"}
          style={char === "O" || char === "o" ? { fontFamily: "Vonca" } : {}}
        >
          {char}
        </span>
      ))} */}
    </h1>
  );
};
