import React from "react";
import { PageDisplay } from "../components/layouts";
import { plan2050Cover } from "../assets";

function Home() {
    return (
        <PageDisplay>
            <div className="flex flex-col xl:flex-row items-center justify-center gap-8 max-w-[96rem] mx-auto px-4 sm:px-6 py-8 md:py-12 min-h-[85vh]">
                {/* Blue Overview Card on the Left (positioned beside the cover, not covering it) */}
                <div className="w-full xl:w-[26rem] shrink-0 bg-blue-950/90 backdrop-blur-md p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-blue-500/30">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-orange animate-pulse"></span>
                        <span className="text-xs uppercase tracking-wider text-primary-orange font-bold">
                            PLAN2050 Overview
                        </span>
                    </div>
                    <p className="text-sm lg:text-[15px] leading-relaxed text-text font-normal">
                        Each Metropolitan Planning Organization (MPO) must prepare and adopt a long-range transportation plan (PLAN2050) in accordance with federal regulations. The plan aim at creating a coordinated, multimodal transportation system that addresses the needs and objectives of the MPO, state, and transit providers. It must consider transit, highways, bicycle and pedestrian facilities, accessibility, and freight; accommodate current and future travel demand; and support economic development, transportation, land use, and sustainability goals over a minimum 20-year planning horizon while remaining fiscally constrained.
                    </p>
                </div>

                {/* Report Cover Image - fully visible, not covered */}
                <div className="flex-1 w-full max-w-[65rem] xl:max-w-[70rem] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40">
                    <img
                        src={plan2050Cover}
                        alt="PLAN2050 Cover and Goals"
                        className="w-full h-auto object-contain block"
                    />
                </div>
            </div>
        </PageDisplay>
    );
}

export default Home;
