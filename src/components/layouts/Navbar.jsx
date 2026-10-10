import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FiChevronDown, FiBookOpen, FiArrowRight, FiCheck } from "react-icons/fi";
import { Tab } from "../common";
import { mpoLogo } from "../../assets";

const ALL_CHAPTERS = [
    {
        number: "01",
        title: "Introduction",
        fullTitle: "Chapter 1: Introduction",
        subtitle: "Vision, goals & planning framework",
        path: "/introduction",
    },
    {
        number: "02",
        title: "Trends & Forecast",
        fullTitle: "Chapter 2: Trends and Forecasts",
        subtitle: "Demographics, freight & emerging trends",
        path: "/trend_and_forecast",
    },
    {
        number: "03",
        title: "System Today",
        fullTitle: "Chapter 3: System Today",
        subtitle: "Existing multimodal transportation network",
        path: "/system_today",
    },
    {
        number: "04",
        title: "System Tomorrow",
        fullTitle: "Chapter 4: System Tomorrow",
        subtitle: "Future needs, corridors & vision projects",
        path: "/system_tomorrow",
    },
    {
        number: "05",
        title: "Funding",
        fullTitle: "Chapter 5: Funding",
        subtitle: "Revenue forecasts & fiscal constraint",
        path: "/funding",
    },
    {
        number: "App",
        title: "Appendices",
        fullTitle: "Appendices & Documentation",
        subtitle: "Technical documentation & methodology",
        path: "/appendices",
    },
];

function Navbar() {
    const location = useLocation();
    const [openMenu, setOpenMenu] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [mobileChaptersOpen, setMobileChaptersOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Is current location the Explore Chapters page or a chapter
    const isExploreActive = location.pathname === "/explore_chapters";
    const isAnyChapterActive = ALL_CHAPTERS.some((ch) => ch.path === location.pathname);

    // Handle outside clicks to close the dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(false);
            }
        }
        function handleKeyDown(e) {
            if (e.key === "Escape") {
                setOpenDropdown(false);
                setOpenMenu(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // Close menus upon route change
    useEffect(() => {
        setOpenDropdown(false);
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

                {/* Tabs Row: Report, Explore Chapters (Dropdown), Introduction, Trends & Forecast, System Today, System Tomorrow, Funding, Appendices */}
                <div className="items-center gap-1.5 lg:gap-2 px-4 md:flex md:justify-center md:mt-2 md:min-w-max pb-1 space-y-1.5 md:space-y-0">
                    {/* 1. Former Nav: Report */}
                    <Tab title="Report" href="/" />

                    {/* 2. Added: Explore Chapters with Dropdown */}
                    <div className="relative border-b border-slate-100 md:border-none" ref={dropdownRef}>
                        <div className="flex items-center">
                            <NavLink
                                to="/explore_chapters"
                                className={({ isActive }) =>
                                    `text-xs lg:text-[13px] flex items-center justify-between gap-1.5 py-2 md:py-1.5 pl-3 pr-2 md:pl-3 md:pr-2.5 w-full md:text-nowrap rounded-md font-semibold transition-colors cursor-pointer ${
                                        isActive || isExploreActive
                                            ? "bg-blue-950 text-white shadow-sm"
                                            : "text-blue-950 bg-blue-50/80 hover:bg-blue-900 hover:text-white border border-blue-200/70"
                                    }`
                                }
                            >
                                <span className="flex items-center gap-1.5">
                                    <FiBookOpen className="w-3.5 h-3.5 opacity-80" />
                                    <span>Explore Chapters</span>
                                </span>
                                <button
                                    type="button"
                                    aria-label="Toggle chapters dropdown"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setOpenDropdown((prev) => !prev);
                                    }}
                                    className="p-0.5 hover:bg-black/10 rounded transition-colors"
                                >
                                    <FiChevronDown
                                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                            openDropdown ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                            </NavLink>
                        </div>

                        {/* Desktop Dropdown Panel */}
                        {openDropdown && (
                            <div className="hidden md:block absolute left-0 mt-1.5 w-80 lg:w-96 bg-white rounded-xl border border-slate-200 shadow-xl py-2.5 z-[600] animate-in fade-in slide-in-from-top-1 duration-150">
                                <div className="px-3.5 pb-2 mb-1.5 border-b border-slate-100 flex items-center justify-between">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                        PLAN2050 Chapters
                                    </span>
                                    <Link
                                        to="/explore_chapters"
                                        onClick={() => setOpenDropdown(false)}
                                        className="text-[11px] font-bold text-blue-900 hover:underline flex items-center gap-1"
                                    >
                                        <span>Overview Page</span>
                                        <FiArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>

                                <div className="max-h-[60vh] overflow-y-auto thin-scrollbar px-2 space-y-1">
                                    {ALL_CHAPTERS.map((chapter) => {
                                        const isCurrent = location.pathname === chapter.path;
                                        return (
                                            <Link
                                                key={chapter.path}
                                                to={chapter.path}
                                                onClick={() => setOpenDropdown(false)}
                                                className={`group flex items-start gap-3 p-2 rounded-lg transition-all ${
                                                    isCurrent
                                                        ? "bg-blue-50 border border-blue-200/80"
                                                        : "hover:bg-slate-50 border border-transparent"
                                                }`}
                                            >
                                                <span
                                                    className={`shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold transition-colors ${
                                                        isCurrent
                                                            ? "bg-blue-900 text-white shadow-xs"
                                                            : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-900"
                                                    }`}
                                                >
                                                    {chapter.number}
                                                </span>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between gap-1">
                                                        <span
                                                            className={`text-xs font-bold truncate ${
                                                                isCurrent
                                                                    ? "text-blue-950"
                                                                    : "text-slate-800 group-hover:text-blue-950"
                                                            }`}
                                                        >
                                                            {chapter.title}
                                                        </span>
                                                        {isCurrent && (
                                                            <FiCheck className="w-3.5 h-3.5 text-blue-900 shrink-0" />
                                                        )}
                                                    </div>
                                                    <p className="text-[11px] text-slate-500 truncate">
                                                        {chapter.subtitle}
                                                    </p>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Mobile Accordion for Chapters inside Mobile Menu */}
                        {openDropdown && (
                            <div className="md:hidden mt-2 ml-3 pl-3 border-l-2 border-blue-200 space-y-1 py-1">
                                <Link
                                    to="/explore_chapters"
                                    onClick={() => setOpenMenu(false)}
                                    className="block py-1.5 text-xs font-bold text-blue-950 hover:underline"
                                >
                                    &rarr; View Explore Chapters Overview
                                </Link>
                                {ALL_CHAPTERS.map((ch) => (
                                    <Link
                                        key={ch.path}
                                        to={ch.path}
                                        onClick={() => setOpenMenu(false)}
                                        className={`flex items-center gap-2 py-1.5 text-xs ${
                                            location.pathname === ch.path
                                                ? "text-blue-900 font-bold"
                                                : "text-slate-600 hover:text-blue-900"
                                        }`}
                                    >
                                        <span className="font-mono text-[10px] bg-slate-100 px-1 py-0.5 rounded">
                                            {ch.number}
                                        </span>
                                        <span>{ch.title}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>


                    {/* 3. Former Nav: Introduction */}
                    <Tab title="Introduction" href="/introduction" />

                    {/* 4. Former Nav: Trends and Forecasts */}
                    <Tab
                        title="Trends and Forecasts"
                        href="/trend_and_forecast"
                    />

                    {/* 5. Former Nav: System Today */}
                    <Tab title="System Today" href="/system_today" />

                    {/* 6. Former Nav: System Tomorrow */}
                    <Tab title="System Tomorrow" href="/system_tomorrow" />

                    {/* 7. Former Nav: Funding */}
                    <Tab title="Funding" href="/funding" />

                    {/* 8. Former Nav: Appendices */}
                    <Tab title="Appendices" href="/appendices" />
                </div>
            </div>
        </header>
    );
}

export default Navbar;
