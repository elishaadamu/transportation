import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Tab } from "../common";
import { mpoLogo } from "../../assets";

function Navbar() {
    const location = useLocation();
    const [openMenu, setOpenMenu] = useState(false);

    // Close menu upon route change
    useEffect(() => {
        setOpenMenu(false);
    }, [location.pathname]);

    return (
        <header className="pt-2 md:pt-2 h-[3.6rem] md:h-[5.5rem] fixed z-[500] top-0 left-0 bg-white border-b border-slate-200 shadow-sm w-screen">
            {/* Top row: Brand & Logo */}
            <div className="flex items-center justify-between px-4 sm:px-6">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        aria-label="Toggle navigation menu"
                        onClick={() => setOpenMenu((prev) => !prev)}
                        className="text-2xl text-blue-900 hover:text-blue-700 md:hidden p-1 focus:outline-none"
                    >
                        {openMenu ? <FaXmark /> : <FaBars />}
                    </button>
                    <Link
                        to="/"
                        className="truncate font-extrabold text-base sm:text-xl md:text-2xl text-blue-950 tracking-tight hover:text-blue-800 transition-colors"
                    >
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

            {/* Desktop Navigation Row & Mobile Drawer */}
            <div
                className={`${
                    openMenu
                        ? "h-[calc(100vh-3.6rem)] bg-white overflow-y-auto"
                        : "h-0 md:h-[3.2rem] overflow-hidden"
                } md:relative bottom-[.1rem] md:overflow-x-auto thin-scrollbar bg-white md:bg-transparent shadow-xl md:shadow-none border-b md:border-none border-slate-200 transition-all mt-[.6rem] md:mt-0`}
            >
                {/* Mobile Drawer Header */}
                <div className="flex items-center justify-between w-full px-4 py-4 md:hidden border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                        Navigation Menu
                    </span>
                    <Link to="/" className="w-[6rem] h-auto">
                        <img src={mpoLogo} alt="Tri-Cities MPO logo" className="w-full h-auto object-contain" />
                    </Link>
                </div>

                {/* Tabs Row: Report, Introduction, Trends & Forecast, System Today, System Tomorrow, Funding, Appendices */}
                <div className="items-center gap-1.5 lg:gap-2 px-4 md:flex md:justify-center md:mt-2 md:min-w-max pb-1 space-y-1.5 md:space-y-0">
                    <Tab title="Report" href="/" />
                    <Tab title="Introduction" href="/introduction" />
                    <Tab title="Trends and Forecasts" href="/trend_and_forecast" />
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
