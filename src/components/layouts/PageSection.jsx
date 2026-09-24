import React from "react";

function PageSection({ children, id = "", className = "" }) {
    return (
        <section
            id={id}
            className={`p-6 sm:p-8 my-6 bg-white rounded-xl border border-slate-200 shadow-sm max-w-[58rem] w-full mx-auto scroll-mt-24 ${className}`}
        >
            {children}
        </section>
    );
}

export default PageSection;
