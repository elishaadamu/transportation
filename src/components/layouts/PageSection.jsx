import React from "react";

function PageSection({ children }) {
    return (
        <div className="p-8 mx-4 md:mx-auto mt-[5rem] md:mt-[10rem] bg-opacity-75 rounded-lg md:rounded-3xl bg-primary-red max-w-[50rem]">
            {children}
        </div>
    );
}

export default PageSection;
