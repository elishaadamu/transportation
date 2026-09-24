import React from "react";
import { NavLink } from "react-router-dom";

function Tab({ title, href }) {
    return (
        <div className="border-b md:border-none">
            <NavLink
                to={href}
                className={({ isActive }) =>
                    `text-xs lg:text-sm capitalize block py-1.5 md:py-1.5 px-3 md:px-2.5 lg:px-3.5 w-full md:text-nowrap rounded-tl-md rounded-tr-md transition-all ${
                        isActive
                            ? "font-semibold bg-blue-900 text-white shadow-inner md:bg-blue-900 md:text-white ring-1 ring-white/20"
                            : "text-text/90 md:bg-blue-600 md:text-white hover:bg-blue-700 md:hover:bg-blue-700 md:hover:text-white"
                    }`
                }
            >
                {title}
            </NavLink>
        </div>
    );
}

export default Tab;
