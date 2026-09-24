import React from "react";
import { NavLink } from "react-router-dom";

function Tab({ title, href }) {
    return (
        <div className="border-b border-slate-100 md:border-none">
            <NavLink
                to={href}
                className={({ isActive }) =>
                    `text-xs lg:text-sm capitalize block py-2 md:py-1.5 px-3 md:px-2.5 lg:px-3.5 w-full md:text-nowrap rounded-md md:rounded-tl-md md:rounded-tr-md md:rounded-b-none transition-all ${
                        isActive
                            ? "font-bold bg-blue-950 text-white shadow-sm md:bg-blue-950 md:text-white"
                            : "text-slate-700 hover:text-blue-900 hover:bg-blue-50 md:bg-blue-600 md:text-white md:hover:bg-blue-700 font-medium"
                    }`
                }
            >
                {title}
            </NavLink>
        </div>
    );
}

export default Tab;
