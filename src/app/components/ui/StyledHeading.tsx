type StyledHeadingProps = {
  text: string | null;
};

export const StyledHeading = ({ text }: StyledHeadingProps) => {
  if (!text) return null;

  return (
    <h1
      className="min-w-fit text-[3em] uppercase tracking-[-0.04em] xs:text-[3.5rem] sm:text-[60px] md:text-[72px] lg:text-[6rem] xl:text-[6.25rem] 3xl:text-[7rem] max-xs:pr-12 max-sm:w-[22rem] max-md:leading-[133%]"
      style={{ wordSpacing: "0.1em" }}
    >
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
