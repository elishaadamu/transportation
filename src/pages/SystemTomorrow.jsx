import React from "react";
import { PageDisplay, PageHeader } from "../components/layouts";

function SystemTomorrow() {
    return (
        <PageDisplay>
            <PageHeader
                img="https://images.unsplash.com/photo-1498374084266-8fbbbd6ac90b?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subtitle="Chapter 4"
            >
                Chapter 4: Our System Tomorrow: 2050
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
                        The Tri-Cities MPO PLAN2050 Chapter 4: Our System Tomorrow: 2050 content is currently being finalized. Please check back soon.
                    </p>
                </div>
            </div>
        </PageDisplay>
    );
}

export default SystemTomorrow;
