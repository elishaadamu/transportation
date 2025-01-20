import React from "react";

function SubHeading({ children }) {
  return (
    <h3 className="mb-4 text-[1.1rem] font-semibold text-center text-primary-orange md:text-left">
      {children}
    </h3>
  );
}

export default SubHeading;

