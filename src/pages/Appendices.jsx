import React from "react";
import { PageDisplay, PageHeader } from "../components/layouts";

function Appendices() {
    return (
        <PageDisplay>
            <PageHeader subtitle="Documentation">
                Appendices
            </PageHeader>
            <div className="flex flex-col items-center justify-center flex-1 px-4 py-16 text-center bg-white">
                <div className="p-8 md:p-12 max-w-xl w-full bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <span className="inline-block px-3.5 py-1 mb-4 text-xs font-bold tracking-wider text-blue-900 uppercase bg-blue-50 rounded-full border border-blue-200">
                        Status Update
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-3">
                        Coming Soon!
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                        The Tri-Cities MPO PLAN2050 Appendices documentation and reports are currently being compiled. Please check back soon.
                    </p>
                </div>
            </div>
        </PageDisplay>
    );
}

export default Appendices;
