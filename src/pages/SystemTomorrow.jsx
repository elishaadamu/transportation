import React from "react";
import { PageDisplay, PageHeader } from "../components/layouts";

function SystemTomorrow() {
    return (
        <>
            <PageHeader img="https://images.unsplash.com/photo-1498374084266-8fbbbd6ac90b?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                Chapter 4: Our System Tomorrow: 2050
            </PageHeader>
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
                            The Tri-Cities MPO PLAN2050 Chapter 4: Our System Tomorrow: 2050 content is currently being finalized. Please check back soon.
                        </p>
                    </div>
                </div>
            </PageDisplay>
        </>
    );
}

export default SystemTomorrow;
