import React from "react";
import { PageDisplay, PageHeader } from "../components/layouts";

function Summary() {
    return (
        <>
            <PageHeader>Executive Summary</PageHeader>
            <PageDisplay>
                <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 py-16 text-center">
                    <div className="p-8 md:p-14 max-w-xl w-full bg-bg/90 backdrop-blur-md rounded-2xl md:rounded-3xl border border-primary-orange/30 shadow-2xl">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary-orange uppercase bg-primary-orange/10 rounded-full border border-primary-orange/20">
                            Status Update
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-text mb-4">
                            Coming Soon!
                        </h2>
                        <p className="text-base md:text-lg text-text/80 leading-relaxed">
                            The Tri-Cities MPO PLAN2050 Executive Summary content is coming soon. Please check back for updates.
                        </p>
                    </div>
                </div>
            </PageDisplay>
        </>
    );
}

export default Summary;
