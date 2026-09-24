import React from "react";
import ScrollProgress from "react-scroll-progress-bar";
import Navbar from "./Navbar";

function PageDisplay({ children }) {
    return (
        <div className="bg-white min-h-screen text-slate-800 flex flex-col">
            <ScrollProgress height="3" bgcolor="#1d4ed8" />
            <Navbar />
            <div className="pt-[3.6rem] md:pt-[5.5rem] flex-1 flex flex-col">
                {children}
            </div>
        </div>
    );
}

export default PageDisplay;
