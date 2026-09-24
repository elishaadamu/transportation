import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { FaBars } from "react-icons/fa6";
import { FaShareFromSquare, FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Tab } from "../common";
import { mpoLogo } from "../../assets";

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setOpenMenu((prev) => {
            const newState = !prev;

            // Use GSAP timeline for better control and smoothness
            const tl = gsap.timeline({
                defaults: { duration: 0.5, ease: "power3.inOut" },
            });

            if (newState) {
                // Open menu animation
                tl.to(menuRef.current, { height: "100vh" }).fromTo(
                    menuRef.current.querySelectorAll("div, ul, li"),
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, stagger: 0.1 },
                    "<"
                );
            } else {
                // Close menu animation
                tl.to(menuRef.current.querySelectorAll("div, ul, li"), {
                    opacity: 0,
                    y: -20,
                    stagger: 0.1,
                }).to(menuRef.current, { height: "0" }, "<");
            }

            return newState;
        });
    };

    return (
        <header className="pt-2 md:pt-2 h-[3.6rem] md:h-[5.5rem] fixed z-[500] top-0 left-0 bg-white border-b border-slate-200 shadow-sm w-screen">
            <div className="flex items-center justify-between px-4 sm:px-6">
                <div className="flex items-center gap-3">
                    <FaBars
                        className="text-2xl cursor-pointer text-blue-900 hover:text-blue-700 md:hidden"
                        onClick={toggleMenu}
                    />
                    <Link to="/" className="truncate font-extrabold text-base sm:text-xl md:text-2xl text-blue-950 tracking-tight hover:text-blue-800 transition-colors">
                        Tri-Cities MPO PLAN2050
                    </Link>
                </div>

                <div className="justify-center gap-1 mr-20 text-xl items-center md:flex">
                    <Link to="/">
                        <img
                            src={mpoLogo}
                            alt="Tri-Cities MPO logo"
                            className="w-[4.2rem] md:w-[4.8rem] h-[2.2rem] md:h-[2.5rem] object-contain rounded p-0.5 absolute right-4 md:right-8 top-1.5 md:top-2 hover:opacity-90 transition-opacity"
                        />
                    </Link>
                </div>
            </div>

            {/* Mobile menu Div */}
            <div
                ref={menuRef}
                className="h-0 md:h-[3.2rem] md:relative bottom-[.1rem] overflow-hidden md:overflow-x-auto thin-scrollbar bg-white md:bg-transparent shadow-xl md:shadow-none border-b md:border-none border-slate-200 transition-all mt-[.6rem] md:mt-0"
            >
                <div className="flex items-center justify-between w-full px-4 py-4 md:hidden border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Navigation Menu</span>
                    <Link to="/" className="w-[6rem] h-auto">
                        <img src={mpoLogo} alt="Tri-Cities MPO logo" className="w-full h-auto object-contain" />
                    </Link>
                </div>

                <div className="items-center gap-1 lg:gap-1.5 px-4 md:flex md:justify-center md:mt-2.5 md:min-w-max pb-1">
                    <Tab title="report" href="/" />
                    <Tab title="Introduction" href="/introduction" />
                    <Tab
                        title="National and Regional Trends and Forecasts"
                        href="/trend_and_forecast"
                    />
                    <Tab title="System Today" href="/system_today" />
                    <Tab title="System Tomorrow" href="/system_tomorrow" />
                    <Tab title="Funding" href="/funding" />
                    <Tab title="Appendices" href="/appendices" />
                </div>
            </div>
        </header>
    );
}

export default Navbar;
