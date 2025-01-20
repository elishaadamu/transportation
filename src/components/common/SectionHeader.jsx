import React from "react";

function SectionHeader({ children }) {
  return (
    <h2 className="mb-4 text-3xl font-bold text-center text-primary-orange">
      {children}
    </h2>
  );
}

export default SectionHeader;

