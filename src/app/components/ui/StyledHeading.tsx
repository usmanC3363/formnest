import { CSSProperties } from "react";

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
    <h1 className={`${headingClass}`} style={headingStyle}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          // className={char === "O" ? "" : "font-vonca text-purple-500"}
          style={char === "O" || char === "o" ? { fontFamily: "Vonca" } : {}}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};
