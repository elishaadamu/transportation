import React from "react";

function HighlightedText({ children }) {
    return (
        <p className="mb-4 text-primary-orange text-[.94rem] md:text-[1rem] text-center">
            {children}
        </p>
    );
}

export default HighlightedText;
