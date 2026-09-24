import React from "react";
import { img3 } from "../../assets";

function PageHeader({ children, img = img3, subtitle = "Long-Range Transportation Plan 2050" }) {
    return (
        <section className="relative w-full py-10 md:py-14 px-4 sm:px-8 bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white border-b border-slate-200 overflow-hidden shadow-sm">
            {/* Subtle background image overlay strictly contained */}
            <div
                style={{ backgroundImage: `url(${img})` }}
                className="absolute inset-0 bg-center bg-cover opacity-25 mix-blend-overlay pointer-events-none"
            />
            <div className="relative max-w-[94rem] mx-auto flex flex-col items-start justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider bg-blue-800/80 text-blue-200 rounded border border-blue-700/60 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    <span>TCAMPO PLAN2050</span>
                    <span className="text-blue-400">|</span>
                    <span className="text-blue-300 font-medium lowercase tracking-normal">{subtitle}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                    {children}
                </h1>
            </div>
        </section>
    );
}

export default PageHeader;
