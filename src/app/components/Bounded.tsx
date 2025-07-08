import React from "react";
import clsx from "clsx";
import { paddingClass } from "../constants";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx(`${paddingClass}`, className)}
        // className={clsx(` px-4 py-10 md:px-6 md:py-14 lg:py-16`, className)}
        {...restProps}
      >
        {children}
      </Comp>
    );
  },
);

Bounded.displayName = "Bounded";
export default Bounded;
