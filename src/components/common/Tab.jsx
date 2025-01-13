import React from "react";
import { NavLink } from "react-router-dom";

function Tab({ title, href }) {
    return (
        <NavLink
            to={href}
            className={({ isActive }) =>
                `py-2 px-3 rounded-tl-md  font-normal rounded-tr-md hover:text-text hover:bg-active-link -mb-12 capitalize text-nowrap ${
                    isActive ? "bg-active-link text-white" : "bg-primary-red"
                } bg-primary-red`
            }
        >
            {title}
        </NavLink>
    );
}

export default Tab;
