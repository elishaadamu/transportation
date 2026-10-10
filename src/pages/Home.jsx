import React from "react";
import { Link } from "react-router-dom";
import { PageDisplay } from "../components/layouts";
import { plan2050Cover } from "../assets";

function Home() {
    return (
        <PageDisplay>
            <div className="h-[calc(100vh-5.5rem)] max-h-[calc(100vh-5.5rem)] flex flex-col lg:flex-row items-stretch justify-center gap-4 xl:gap-6 max-w-[98rem] mx-auto px-4 sm:px-6 py-2 lg:py-3 bg-white overflow-hidden">
                {/* Executive Overview Panel on the Left - Scrollable Content */}
                <div className="w-full lg:w-[27rem] xl:w-[29rem] shrink-0 h-[calc(100vh-7rem)] bg-white border border-slate-200 border-t-4 border-t-blue-900 p-5 xl:p-6 rounded-2xl shadow-sm flex flex-col justify-between overflow-y-auto thin-scrollbar">
                    <div>
                        <h2 className="text-2xl sm:text-[26px] xl:text-3xl font-extrabold text-blue-950 tracking-tight mb-3">
                            PLAN2050 Overview
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed text-slate-700 mb-4">
                            Each Metropolitan Planning Organization (MPO) must prepare and adopt a long-range transportation plan (PLAN2050) in accordance with federal regulations. The plan aim at creating a coordinated, multimodal transportation system that addresses the needs and objectives of the MPO, state, and transit providers. It must consider transit, highways, bicycle and pedestrian facilities, accessibility, and freight; accommodate current and future travel demand; and support economic development, transportation, land use, and sustainability goals over a minimum 20-year planning horizon while remaining fiscally constrained.
                        </p>
                    </div>

                    {/* Chapter Navigation Links */}
                    <div className="space-y-2 xl:space-y-2.5 pt-2">
                        <Link
                            to="/explore_chapters"
                            className="flex items-center justify-between px-4 py-2.5 sm:py-3 rounded-xl bg-blue-950 hover:bg-blue-900 text-white text-sm sm:text-base font-semibold transition-colors shadow-xs group"
                        >
                            <span>Explore Chapters</span>
                            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                        <Link
                            to="/introduction"
                            className="flex items-center justify-between px-4 py-2.5 sm:py-3 rounded-xl bg-blue-50/80 hover:bg-blue-100 text-blue-950 border border-blue-200/80 text-sm sm:text-base font-semibold transition-colors group"
                        >
                            <span>Chapter 1: Introduction</span>
                            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                        <Link
                            to="/trend_and_forecast"
                            className="flex items-center justify-between px-4 py-2.5 sm:py-3 rounded-xl bg-blue-50/80 hover:bg-blue-100 text-blue-950 border border-blue-200/80 text-sm sm:text-base font-semibold transition-colors group"
                        >
                            <span>Chapter 2: Trends and Forecasts</span>
                            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                        <Link
                            to="/system_today"
                            className="flex items-center justify-between px-4 py-2.5 sm:py-3 rounded-xl bg-blue-50/80 hover:bg-blue-100 text-blue-950 border border-blue-200/80 text-sm sm:text-base font-semibold transition-colors group"
                        >
                            <span>Chapter 3: System Today</span>
                            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                        <Link
                            to="/system_tomorrow"
                            className="flex items-center justify-between px-4 py-2.5 sm:py-3 rounded-xl bg-blue-50/80 hover:bg-blue-100 text-blue-950 border border-blue-200/80 text-sm sm:text-base font-semibold transition-colors group"
                        >
                            <span>Chapter 4: System Tomorrow</span>
                            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                        <Link
                            to="/funding"
                            className="flex items-center justify-between px-4 py-2.5 sm:py-3 rounded-xl bg-blue-50/80 hover:bg-blue-100 text-blue-950 border border-blue-200/80 text-sm sm:text-base font-semibold transition-colors group"
                        >
                            <span>Chapter 5: Funding</span>
                            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                        <Link
                            to="/appendices"
                            className="flex items-center justify-between px-4 py-2.5 sm:py-3 rounded-xl bg-blue-50/80 hover:bg-blue-100 text-blue-950 border border-blue-200/80 text-sm sm:text-base font-semibold transition-colors group"
                        >
                            <span>Appendices</span>
                            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                    </div>
                </div>

                {/* Report Cover Image - Full Uncropped View */}
                <div className="w-full flex-1 h-[calc(100vh-7rem)] rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white flex items-center justify-center p-1 sm:p-2">
                    <img
                        src={plan2050Cover}
                        alt="PLAN2050 Cover and Goals"
                        className="w-full h-full object-contain block rounded-xl"
                    />
                </div>
            </div>
        </PageDisplay>
    );
}

export default Home;
