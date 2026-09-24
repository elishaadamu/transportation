import React from "react";

function Paragraph({ children, className = "" }) {
    return (
        <p className={`mb-4 text-[.96rem] md:text-[1.02rem] text-slate-700 leading-relaxed font-normal ${className}`}>
            {children}
        </p>
    );
}

export default Paragraph;
