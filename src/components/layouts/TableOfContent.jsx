import React from "react";
import { Link } from "react-scroll";

function TableOfContent({ sections, title = "CHAPTER CONTENTS" }) {
    return (
        <>
            {/* Desktop Left Tabs Sidebar */}
            <aside className="hidden md:flex flex-col md:sticky top-[6.2rem] w-72 lg:w-80 shrink-0 max-h-[calc(100vh-7.5rem)] bg-white rounded-xl border border-slate-200 shadow-sm p-3.5 overflow-hidden z-30">
                <div className="pb-2.5 mb-2 border-b border-slate-200 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-blue-950 font-extrabold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        {title}
                    </span>
                    <span className="text-[11px] text-slate-500 font-semibold bg-slate-100 px-2 py-0.5 rounded-full">
                        {sections.length} tabs
                    </span>
                </div>
                <nav className="flex flex-col gap-1 overflow-y-auto thin-scrollbar pr-1">
                    {sections.map((section, idx) => (
                        <Link
                            key={section.to}
                            to={section.to}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={400}
                            activeClass="!bg-blue-50 !text-blue-950 !font-bold !border-l-4 !border-blue-700 shadow-sm"
                            className="group flex items-center gap-2.5 py-2 px-2.5 rounded-md text-xs lg:text-[13px] text-slate-600 hover:text-blue-900 hover:bg-blue-50/50 transition-all cursor-pointer text-left border-l-4 border-transparent"
                        >
                            <span className="shrink-0 w-5 h-5 rounded-full bg-slate-100 group-hover:bg-blue-100 text-slate-600 group-hover:text-blue-800 text-[10px] font-bold flex items-center justify-center transition-colors">
                                {idx + 1}
                            </span>
                            <span className="truncate leading-snug">
                                {section.title}
                            </span>
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Mobile Horizontal Tabs */}
            <div className="md:hidden sticky top-[3.6rem] z-40 bg-white py-2 px-3 border-b border-slate-200 overflow-x-auto thin-scrollbar w-full shadow-sm">
                <div className="flex items-center gap-2 w-max">
                    {sections.map((section, idx) => (
                        <Link
                            key={section.to}
                            to={section.to}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={400}
                            activeClass="!bg-blue-900 !text-white !font-bold shadow-sm"
                            className="whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-900 shrink-0 transition-colors cursor-pointer"
                        >
                            {idx + 1}. {section.title}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default TableOfContent;
