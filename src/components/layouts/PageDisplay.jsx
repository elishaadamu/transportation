import React from "react";
import ScrollProgress from "react-scroll-progress-bar";
import Navbar from "./Navbar";

function PageDisplay({ children }) {
    return (
        <div className="bg-bg">
            <ScrollProgress height="2" />
            <Navbar />
            <div className="pt-10 md:pt-[5.1rem] min-h-screen">
                {children}
            </div>
        </div>
    );
}

export default PageDisplay;
