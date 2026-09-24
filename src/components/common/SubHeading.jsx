import React from "react";

function SubHeading({ children }) {
  return (
    <h3 className="mt-6 mb-3 text-lg sm:text-xl font-bold text-blue-900 text-left">
      {children}
    </h3>
  );
}

export default SubHeading;

