import React from "react";

function PageSection({ children, id = "", className = "" }) {
    return (
        <div
            id={id}
            className={`p-6 sm:p-8 my-6 md:my-8 bg-bg/90 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-white/10 shadow-xl max-w-[56rem] w-full mx-auto scroll-mt-24 ${className}`}
        >
            {children}
        </div>
    );
}

export default PageSection;
