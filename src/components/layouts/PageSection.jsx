import React from "react";

function PageSection({ children, id = ''}) {
    return (
        <div id={id} className="p-8 mx-4 md:mx-auto mt-[5rem] md:mt-[10rem] bg-opacity-75 rounded-lg md:rounded-3xl  max-w-[50rem] bg-bg">
            {children}
        </div>
    );
}

export default PageSection;
