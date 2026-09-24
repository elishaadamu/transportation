import React from "react";

function SectionHeader({ children }) {
  return (
    <h2 className="mb-6 text-2xl sm:text-3xl font-extrabold text-blue-950 pb-3 border-b border-slate-200 text-left">
      {children}
    </h2>
  );
}

export default SectionHeader;

