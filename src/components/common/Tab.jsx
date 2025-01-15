import React from "react";
import { NavLink } from "react-router-dom";

function Tab({ title, href }) {
    return (
        <div className="border-b md:border-none">
            <NavLink
                to={href}
                className={({ isActive }) =>
                    `md:text-sm capitalize text-text md:text-primary-black block py-1 w-full hover:font-semibold md:hover:bg-active-link md:hover:font-normal md:p-2 md:capitalize md:text-nowrap rounded-tl-md rounded-tr-md  ${
                        isActive
                            ? " font-semibold md:font-normal  md:bg-active-link md:text-text"
                            : "md:bg-primary-red"
                    }
                        } `
                }
            >
                {title}
            </NavLink>
        </div>
    );
}

export default Tab;
