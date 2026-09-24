import React from "react";
import { PageDisplay } from "../components/layouts";
import { plan2050Cover } from "../assets";

function Home() {
    return (
        <PageDisplay>
            <div className="grid min-h-[90vh] place-content-center p-4 md:p-8 md:relative">
                <div className="hidden md:block md:absolute w-[22rem] lg:w-[24rem] bg-active-link left-2 lg:left-6 top-6 p-6 rounded-br-3xl shadow-2xl z-10 border-r-2 border-b-2 border-primary-orange/30">
                    <p className="text-sm lg:text-[15px] leading-relaxed text-text font-normal">
                        Each Metropolitan Planning Organization (MPO) must prepare and adopt a long-range transportation plan (PLAN2050) in accordance with federal regulations. The plan aim at creating a coordinated, multimodal transportation system that addresses the needs and objectives of the MPO, state, and transit providers. It must consider transit, highways, bicycle and pedestrian facilities, accessibility, and freight; accommodate current and future travel demand; and support economic development, transportation, land use, and sustainability goals over a minimum 20-year planning horizon while remaining fiscally constrained.
                    </p>
                </div>

                <div className="w-full md:w-[65rem] lg:w-[75rem] mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10">
                    <img
                        src={plan2050Cover}
                        alt="PLAN2050 Cover and Goals"
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Mobile version of the description */}
                <div className="block md:hidden mt-6 bg-active-link p-5 rounded-2xl shadow-xl border border-primary-orange/30">
                    <p className="text-sm leading-relaxed text-text">
                        Each Metropolitan Planning Organization (MPO) must prepare and adopt a long-range transportation plan (PLAN2050) in accordance with federal regulations. The plan aim at creating a coordinated, multimodal transportation system that addresses the needs and objectives of the MPO, state, and transit providers. It must consider transit, highways, bicycle and pedestrian facilities, accessibility, and freight; accommodate current and future travel demand; and support economic development, transportation, land use, and sustainability goals over a minimum 20-year planning horizon while remaining fiscally constrained.
                    </p>
                </div>
            </div>
        </PageDisplay>
    );
}

export default Home;
