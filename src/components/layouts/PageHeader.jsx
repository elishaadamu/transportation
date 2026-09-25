import React from "react";
import { img3 } from "../../assets";
import { FiDownload } from "react-icons/fi";

const DEFAULT_CHAPTER_DOWNLOADS = {
    "chapter 1": {
        url: "/downloads/TCAMPO_Plan2050_Chapter1_Introduction.pdf",
        filename: "TCAMPO_Plan2050_Chapter1_Introduction.pdf",
        label: "Download PDF",
    },
    "chapter 2": {
        url: "/downloads/TCAMPO_Plan2050_Chapter2_National_and_Regional_Trends_and_Forecasts.pdf",
        filename: "TCAMPO_Plan2050_Chapter2_Trends_and_Forecasts.pdf",
        label: "Download PDF",
    },
    "chapter 3": {
        url: "/downloads/TCAMPO_Plan2050_Chapter3_Transportation_System_Today.pdf",
        filename: "TCAMPO_Plan2050_Chapter3_Transportation_System_Today.pdf",
        label: "Download PDF",
    },
    "chapter 4": {
        url: "/downloads/TCAMPO_Plan2050_Chapter4_System_Tomorrow_2050.pdf",
        filename: "TCAMPO_Plan2050_Chapter4_System_Tomorrow_2050.pdf",
        label: "Download PDF",
    },
    "chapter 5": {
        url: "/downloads/TCAMPO_Plan2050_Chapter5_Funding_the_Plan.pdf",
        filename: "TCAMPO_Plan2050_Chapter5_Funding_the_Plan.pdf",
        label: "Download PDF",
    },
    "documentation": {
        url: "/downloads/TCAMPO_Plan2050_Appendices.pdf",
        filename: "TCAMPO_Plan2050_Appendices.pdf",
        label: "Download PDF",
    },
    "appendices": {
        url: "/downloads/TCAMPO_Plan2050_Appendices.pdf",
        filename: "TCAMPO_Plan2050_Appendices.pdf",
        label: "Download PDF",
    },
};

function PageHeader({
    children,
    img = img3,
    subtitle = "Long-Range Transportation Plan 2050",
    downloadUrl,
    downloadFilename,
    showDownload = true,
}) {
    // Resolve download metadata automatically if not explicitly provided
    const subtitleKey = typeof subtitle === "string" ? subtitle.toLowerCase().trim() : "";
    const autoResolved = DEFAULT_CHAPTER_DOWNLOADS[subtitleKey];

    const finalDownloadUrl = downloadUrl || autoResolved?.url;
    const finalFilename = downloadFilename || autoResolved?.filename;

    return (
        <section className="relative w-full py-8 md:py-12 px-4 sm:px-8 bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white border-b border-slate-200 overflow-hidden shadow-sm">
            {/* Subtle background image overlay strictly contained */}
            <div
                style={{ backgroundImage: `url(${img})` }}
                className="absolute inset-0 bg-center bg-cover opacity-25 mix-blend-overlay pointer-events-none"
            />
            <div className="relative max-w-[94rem] mx-auto flex flex-row items-end justify-between gap-3 flex-wrap">
                <div className="flex-1 min-w-[200px]">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-2.5 text-xs font-bold uppercase tracking-wider bg-blue-800/80 text-blue-200 rounded border border-blue-700/60 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        <span>TCAMPO PLAN2050</span>
                        <span className="text-blue-400">|</span>
                        <span className="text-blue-300 font-medium lowercase tracking-normal">{subtitle}</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        {children}
                    </h1>
                </div>

                {showDownload && finalDownloadUrl && (
                    <div className="flex-shrink-0 self-end mb-1">
                        <a
                            href={finalDownloadUrl}
                            download={finalFilename || true}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 bg-white hover:bg-blue-50 text-blue-950 font-bold text-xs sm:text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group border border-white/20 whitespace-nowrap"
                            title={`Download ${finalFilename || "Chapter PDF"}`}
                        >
                            <span className="p-1 rounded bg-blue-100 text-blue-900 group-hover:bg-blue-200 transition-colors">
                                <FiDownload className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-900 group-hover:translate-y-0.5 transition-transform duration-200" />
                            </span>
                            <span className="hidden sm:inline">Download Chapter (PDF)</span>
                            <span className="sm:hidden">Download PDF</span>
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}

export default PageHeader;

