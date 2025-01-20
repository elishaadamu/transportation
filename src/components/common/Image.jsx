import React from "react";
import { img3 } from "../../assets";
function Image({ className = "" }) {
    return (
        <div className="mb-4">
            <img
                src={img3}
                className={`object-cover w-full mx-auto ${className}`}
                alt="subsection image"
            />
        </div>
    );
}

export default Image;
