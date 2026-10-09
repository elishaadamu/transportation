import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FiChevronDown, FiBookOpen, FiFileText, FiCheck, FiArrowRight } from "react-icons/fi";
import { mpoLogo } from "../../assets";

const CHAPTERS = [
    {
        number: "01",
        title: "Introduction",
        subtitle: "Vision, goals & planning framework",
        path: "/introduction",
    },
    {
        number: "02",
        title: "Trends & Forecast",
        fullTitle: "National and Regional Trends and Forecasts",
        subtitle: "Demographics, freight & emerging trends",
        path: "/trend_and_forecast",
    },
];

function Navbar() {
    const location = useLocation();
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openChaptersDropdown, setOpenChaptersDropdown] = useState(false);
    const [mobileChaptersExpanded, setMobileChaptersExpanded] = useState(true);
    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Check active states
    const isChapterActive = CHAPTERS.some((ch) => ch.path === location.pathname);
    const isReportActive = location.pathname === "/" || location.pathname === "/summary";

    // Close dropdown on outside click or escape key
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenChaptersDropdown(false);
            }
        }
        function handleKeyDown(e) {
            if (e.key === "Escape") {
                setOpenChaptersDropdown(false);
                setOpenMobileMenu(false);
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
        setOpenChaptersDropdown(false);
        setOpenMobileMenu(false);
    }, [location.pathname]);

    return (
        <header className="fixed top-0 left-0 right-0 z-[500] bg-white border-b border-slate-200/90 shadow-xs h-[4.25rem] transition-all">
            <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Brand & Logo on Left */}
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        aria-label="Toggle navigation menu"
                        onClick={() => setOpenMobileMenu((prev) => !prev)}
                        className="p-2 -ml-2 rounded-lg text-blue-950 hover:bg-slate-100 md:hidden focus:outline-none focus:ring-2 focus:ring-blue-900 transition-colors"
                    >
                        {openMobileMenu ? (
                            <FaXmark className="text-xl" />
                        ) : (
                            <FaBars className="text-xl" />
                        )}
                    </button>

                    <Link
                        to="/"
                        className="flex items-center gap-2.5 group focus:outline-none"
                    >
                        <img
                            src={mpoLogo}
                            alt="Tri-Cities MPO Logo"
                            className="h-9 w-auto object-contain rounded p-0.5 group-hover:opacity-90 transition-opacity"
                        />
                        <div className="flex flex-col">
                            <span className="font-extrabold text-base sm:text-lg md:text-xl text-blue-950 tracking-tight group-hover:text-blue-800 transition-colors leading-tight">
                                Tri-Cities MPO PLAN2050
                            </span>
                            <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest text-slate-500">
                                Long-Range Transportation Plan
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation Links: Report and Explore Chapters only */}
                <nav className="hidden md:flex items-center gap-2 lg:gap-3">
                    {/* 1. Report */}
                    <NavLink
                        to="/"
                        className={() =>
                            `px-4 py-2 rounded-lg text-xs lg:text-sm font-bold transition-all flex items-center gap-1.5 ${
                                isReportActive
                                    ? "bg-blue-950 text-white shadow-xs"
                                    : "text-slate-700 hover:text-blue-950 hover:bg-slate-100"
                            }`
                        }
                    >
                        <FiFileText className="w-4 h-4" />
                        <span>Report</span>
                    </NavLink>

                    {/* 2. Explore Chapters (Dropdown) */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            onClick={() => setOpenChaptersDropdown((prev) => !prev)}
                            aria-expanded={openChaptersDropdown}
                            className={`px-4 py-2 rounded-lg text-xs lg:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                                isChapterActive
                                    ? "bg-blue-950 text-white shadow-xs"
                                    : openChaptersDropdown
                                    ? "bg-slate-100 text-blue-950"
                                    : "text-slate-700 hover:text-blue-950 hover:bg-slate-100"
                            }`}
                        >
                            <FiBookOpen className="w-4 h-4" />
                            <span>Explore Chapters</span>
                            <FiChevronDown
                                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                    openChaptersDropdown ? "rotate-180" : ""
                                }`}
                            />
                        </button>

                        {/* Dropdown Menu Panel */}
                        {openChaptersDropdown && (
                            <div className="absolute right-0 mt-2 w-80 lg:w-96 bg-white rounded-2xl border border-slate-200 shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                                <div className="px-4 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                        PLAN2050 Chapters
                                    </span>
                                    <span className="text-[10px] font-semibold text-blue-900 bg-blue-50 px-2 py-0.5 rounded-full">
                                        {CHAPTERS.length} Chapters
                                    </span>
                                </div>

                                <div className="max-h-[70vh] overflow-y-auto thin-scrollbar px-2 space-y-1">
                                    {CHAPTERS.map((chapter) => {
                                        const isCurrent = location.pathname === chapter.path;
                                        return (
                                            <Link
                                                key={chapter.path}
                                                to={chapter.path}
                                                onClick={() => setOpenChaptersDropdown(false)}
                                                className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                                                    isCurrent
                                                        ? "bg-blue-50 border border-blue-200/80"
                                                        : "hover:bg-slate-50 border border-transparent"
                                                }`}
                                            >
                                                <span
                                                    className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
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
                                                            className={`text-xs lg:text-sm font-bold truncate ${
                                                                isCurrent
                                                                    ? "text-blue-950"
                                                                    : "text-slate-800 group-hover:text-blue-950"
                                                            }`}
                                                        >
                                                            {chapter.title}
                                                        </span>
                                                        {isCurrent && (
                                                            <FiCheck className="w-4 h-4 text-blue-900 shrink-0" />
                                                        )}
                                                    </div>
                                                    <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                                        {chapter.subtitle}
                                                    </p>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>

            {/* Mobile Navigation Drawer */}
            {openMobileMenu && (
                <div
                    ref={mobileMenuRef}
                    className="md:hidden fixed inset-x-0 top-[4.25rem] bottom-0 bg-slate-900/40 backdrop-blur-xs z-40"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setOpenMobileMenu(false);
                        }
                    }}
                >
                    <div className="bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto thin-scrollbar p-4 space-y-3">
                        {/* 1. Report Link */}
                        <NavLink
                            to="/"
                            onClick={() => setOpenMobileMenu(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                                isReportActive
                                    ? "bg-blue-950 text-white"
                                    : "bg-slate-50 text-slate-800 hover:bg-slate-100"
                            }`}
                        >
                            <FiFileText className="w-4 h-4" />
                            <span>Report (Overview)</span>
                        </NavLink>

                        {/* 2. Explore Chapters (Accordion) */}
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                            <button
                                type="button"
                                onClick={() => setMobileChaptersExpanded((prev) => !prev)}
                                className="w-full flex items-center justify-between text-sm font-bold text-blue-950 pb-2 border-b border-slate-200"
                            >
                                <span className="flex items-center gap-2">
                                    <FiBookOpen className="w-4 h-4 text-blue-900" />
                                    <span>Explore Chapters</span>
                                </span>
                                <FiChevronDown
                                    className={`w-4 h-4 text-slate-500 transition-transform ${
                                        mobileChaptersExpanded ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {mobileChaptersExpanded && (
                                <div className="mt-2.5 space-y-1.5 pt-1">
                                    {CHAPTERS.map((chapter) => {
                                        const isCurrent = location.pathname === chapter.path;
                                        return (
                                            <Link
                                                key={chapter.path}
                                                to={chapter.path}
                                                onClick={() => setOpenMobileMenu(false)}
                                                className={`flex items-center justify-between p-2.5 rounded-lg text-xs font-semibold transition-colors ${
                                                    isCurrent
                                                        ? "bg-blue-900 text-white font-bold"
                                                        : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-900 border border-slate-200/80"
                                                }`}
                                            >
                                                <div className="flex items-center gap-2.5 min-w-0">
                                                    <span
                                                        className={`shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                                                            isCurrent
                                                                ? "bg-white/20 text-white"
                                                                : "bg-slate-100 text-slate-600"
                                                        }`}
                                                    >
                                                        {chapter.number}
                                                    </span>
                                                    <span className="truncate">{chapter.title}</span>
                                                </div>
                                                <FiArrowRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
