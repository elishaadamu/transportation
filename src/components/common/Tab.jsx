import React from "react";
import { NavLink } from "react-router-dom";

function Tab({ title, href }) {
    return (
        <div className="border-b border-slate-100 md:border-none">
            <NavLink
                to={href}
                className={({ isActive }) =>
                    `text-xs lg:text-[13px] block py-2 md:py-1.5 px-3 md:px-3 lg:px-3.5 w-full md:text-nowrap rounded-md font-semibold transition-colors ${
                        isActive
                            ? "bg-blue-950 text-white shadow-sm"
                            : "text-blue-950 bg-blue-50/80 hover:bg-blue-900 hover:text-white border border-blue-200/70"
                    }`
                }
            >
                {title}
            </NavLink>
        </div>
    );
}

export default Tab;
