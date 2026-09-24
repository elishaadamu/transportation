import React from "react";

function SectionWrapper({ children, className = "" }) {
    return (
        <div className={`relative w-full bg-white text-slate-800 ${className}`}>
            {children}
        </div>
    );
}

export default SectionWrapper;

