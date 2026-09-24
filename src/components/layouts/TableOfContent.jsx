import React from "react";
import { Link } from "react-scroll";

function TableOfContent({ sections, title = "TABLE OF CONTENTS" }) {
    return (
        <>
            {/* Desktop Left Tabs Sidebar */}
            <aside className="hidden md:flex flex-col md:sticky top-[6.5rem] w-72 lg:w-80 shrink-0 max-h-[calc(100vh-7.5rem)] bg-bg/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-4 overflow-hidden z-30">
                <div className="pb-3 mb-3 border-b border-white/10 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-primary-orange font-bold">
                        {title}
                    </span>
                    <span className="text-[11px] text-text/50 font-medium">
                        {sections.length} tabs
                    </span>
                </div>
                <nav className="flex flex-col gap-1.5 overflow-y-auto thin-scrollbar pr-1">
                    {sections.map((section, idx) => (
                        <Link
                            key={section.to}
                            to={section.to}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={400}
                            activeClass="!bg-active-link !text-white font-semibold shadow-md border-l-4 border-primary-orange pl-3.5"
                            className="group flex items-center gap-2.5 py-2.5 px-3 rounded-lg text-xs lg:text-sm text-text/75 hover:text-white hover:bg-white/10 transition-all cursor-pointer text-left"
                        >
                            <span className="shrink-0 w-5 h-5 rounded-full bg-white/10 group-hover:bg-primary-orange/20 text-primary-orange text-[10px] font-bold flex items-center justify-center">
                                {idx + 1}
                            </span>
                            <span className="truncate leading-tight">
                                {section.title}
                            </span>
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Mobile Horizontal Tabs */}
            <div className="md:hidden sticky top-[3.6rem] z-40 bg-bg/95 backdrop-blur-md py-2.5 px-3 border-b border-white/10 overflow-x-auto thin-scrollbar w-full shadow-lg">
                <div className="flex items-center gap-2 w-max">
                    {sections.map((section, idx) => (
                        <Link
                            key={section.to}
                            to={section.to}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={400}
                            activeClass="!bg-active-link !text-white font-semibold ring-2 ring-primary-orange"
                            className="whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium bg-primary-red/80 text-white shrink-0 hover:bg-active-link transition-colors cursor-pointer"
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
