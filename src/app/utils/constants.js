export const getCurrentScreenSize = () => {
  const width = window.innerWidth;
  if (width < 395) return "xxs";
  if (width >= 395 && width < 640) return "xs";
  if (width >= 640 && width < 768) return "sm";
  if (width >= 768 && width < 1024) return "md";
  if (width >= 1024 && width < 1280) return "lg";
  if (width >= 1280 && width < 1536) return "xl";
  if (width >= 1536 && width < 2000) return "2xl";
  return "3xl";
};

export const handleCopy = (
  color,
  setCopiedColor,
  setShowMessage,
  showMessage,
) => {
  navigator.clipboard.writeText(color);
  setShowMessage(!showMessage); // Trigger the showMessage state in the child
  setCopiedColor(color);

  setTimeout(() => {
    setCopiedColor(null);
    setShowMessage(false);
  }, 2500);
};

export const isDarkColor = (bgColor) => {
  const hex = bgColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance <= 0.5;
};

export const paddingClass = "px-[24px] lg:px-[44px] xl:px-[80px] 2xl:px-8";
// export const paddingClass = "px-2 md:px-3 lg:px-9 xl:px-[2.5rem] 2xl:px-8";
export const gridClass =
  "xl:place-self-center  2xl:max-w-screen-2xl 3xl:max-w-screen-3xl";

export const secHeading =
  "text-5xl sm:text-6xl -tracking-[0.03em] lg:text-7xl font-light capitalize";

export const Arrows = ({ styles }) => {
  return (
    <svg
      className={styles}
      width="41"
      height="21"
      viewBox="0 0 41 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.729 9.84323L31.4111 0.525186C31.0763 0.134332 30.4881 0.0887683 30.0972 0.423569C29.7064 0.75829 29.6608 1.34653 29.9956 1.73739C30.0268 1.77382 30.0608 1.80785 30.0972 1.839L37.8218 9.57297H0.931773C0.4172 9.57297 0 9.99017 0 10.5048C0 11.0195 0.4172 11.4366 0.931773 11.4366H37.8218L30.0972 19.1612C29.7064 19.4959 29.6608 20.0842 29.9956 20.475C30.3304 20.8659 30.9186 20.9114 31.3094 20.5766C31.3459 20.5454 31.3799 20.5115 31.4111 20.475L40.7291 11.157C41.0903 10.7937 41.0903 10.2067 40.729 9.84323Z"
        fill="#3F2B24"
      />
    </svg>
  );
};
