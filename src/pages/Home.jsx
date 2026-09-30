import React from "react";
import { Link } from "react-router-dom";
import { PageDisplay } from "../components/layouts";
import { plan2050Cover } from "../assets";

function Home() {
    return (
        <PageDisplay>
            <div className="flex flex-col xl:flex-row items-center justify-center gap-8 max-w-[96rem] mx-auto px-4 sm:px-6 py-8 md:py-12 min-h-[82vh] bg-white">
                {/* Executive Overview Panel on the Left */}
                <div className="w-full xl:w-[26rem] shrink-0 bg-white border border-slate-200 border-t-4 border-t-blue-900 p-6 lg:p-8 rounded-xl shadow-sm">
                    <div className="mb-4">
                        <span className="text-xs uppercase tracking-wider text-blue-900 font-extrabold block mb-1">
                            Tri-Cities Area MPO
                        </span>
                        <h2 className="text-2xl font-extrabold text-blue-950 tracking-tight">
                            PLAN2050 Overview
                        </h2>
                    </div>
                    <p className="text-sm lg:text-[15px] leading-relaxed text-slate-600 mb-6">
                        Each Metropolitan Planning Organization (MPO) must prepare and adopt a long-range transportation plan (PLAN2050) in accordance with federal regulations. The plan aim at creating a coordinated, multimodal transportation system that addresses the needs and objectives of the MPO, state, and transit providers. It must consider transit, highways, bicycle and pedestrian facilities, accessibility, and freight; accommodate current and future travel demand; and support economic development, transportation, land use, and sustainability goals over a minimum 20-year planning horizon while remaining fiscally constrained.
                    </p>

                    <div className="space-y-2 mb-6">
                        <Link
                            to="/introduction"
                            className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-blue-950 hover:bg-blue-900 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm group"
                        >
                            <span>Explore Chapter 1: Introduction</span>
                            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                        <Link
                            to="/trend_and_forecast"
                            className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-blue-50/80 hover:bg-blue-100 text-blue-950 border border-blue-200/80 text-xs sm:text-sm font-semibold transition-colors"
                        >
                            <span>Chapter 2: Trends and Forecasts</span>
                            <span>&rarr;</span>
                        </Link>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
                        <span>Planning Horizon: <strong className="text-slate-700">2050</strong></span>
                        <span>Agency: <strong className="text-slate-700">TCAMPO MPO</strong></span>
                    </div>
                </div>

                {/* Report Cover Image - fully visible, cleanly framed on white background */}
                <div className="flex-1 w-full max-w-[65rem] xl:max-w-[70rem] rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white p-2 sm:p-3">
                    <img
                        src={plan2050Cover}
                        alt="PLAN2050 Cover and Goals"
                        className="w-full h-auto object-contain block rounded-lg"
                    />
                </div>
            </div>
        </PageDisplay>
    );
}

export default Home;
