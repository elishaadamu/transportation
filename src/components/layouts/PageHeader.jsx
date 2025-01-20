import React from "react";
import { img3 } from "../../assets";

function PageHeader({children}) {
    return (
        <div className="text-[3rem] md:text-[4.2rem]  text-center min-h-screen mb-[6rem] grid place-content-center ">
            <div
                style={{ backgroundImage: `url(${img3})` }}
                className="fixed w-full h-full bg-center bg-no-repeat bg-cover opacity-20 -z-[999]"
            ></div>
            <h1 className="lg:px-[6rem] font-[700]">
               {children}
            </h1>
        </div>
    );
}

export default PageHeader;
