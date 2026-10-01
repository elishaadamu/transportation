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
        <section className="relative w-full py-8 md:py-11 px-4 sm:px-8 bg-blue-950 text-white border-b border-blue-900/60 overflow-hidden shadow-sm">
            {/* Subtle background image overlay without harsh mix-blend gradient artifacts */}
            <div
                style={{ backgroundImage: `url(${img})` }}
                className="absolute inset-0 bg-center bg-cover opacity-15 pointer-events-none"
            />
            <div className="relative max-w-[94rem] mx-auto flex flex-row items-end justify-between gap-3 flex-wrap">
                <div className="flex-1 min-w-[200px]">
                    <div className="mb-2.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
                        <span>TCAMPO PLAN2050</span>
                        <span className="text-blue-400 font-normal">&rsaquo;</span>
                        <span className="text-white font-bold capitalize">{subtitle}</span>
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
                            className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 bg-white hover:bg-slate-100 text-blue-950 font-bold text-xs sm:text-sm rounded-md shadow-sm border border-slate-200 transition-colors whitespace-nowrap active:scale-95"
                            title={`Download ${finalFilename || "Chapter PDF"}`}
                        >
                            <FiDownload className="w-4 h-4 text-blue-900" />
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

