import Link from "next/link";
import React from "react";

const CTAButton = ({
  text = "",
  url = "/contact",
  // buttonType = "button",
  buttonClass = "",
}) => {
  return (
    <button type="button" className={`${buttonClass}`}>
      <Link href={url}>
        {/* Button text */}
        <span className="font-space relative z-10 transition-all duration-300 ease-[cubic-bezier(0.3,1,0.3,1)] group-hover:text-black">
          {text}
        </span>
        {/* Background effect yes*/}
      </Link>
    </button>
  );
};

export default CTAButton;
