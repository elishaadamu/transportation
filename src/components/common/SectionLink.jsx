import React from "react";

function SectionLink({ link, title }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block underline transition-all text-primary-red hover:font-semibold"
        >
            {!title ? link : title}
        </a>
    );
}

export default SectionLink;
