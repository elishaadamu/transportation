import React from "react";
import { Link } from "react-router-dom";
import { PageDisplay, PageHeader } from "../components/layouts";
import { FiBookOpen, FiArrowRight, FiCheckCircle, FiClock, FiFileText, FiLayers } from "react-icons/fi";
import { img3 } from "../assets";

const CHAPTERS_DATA = [
    {
        number: "01",
        title: "Chapter 1: Introduction",
        navTitle: "Introduction",
        path: "/introduction",
        badge: "Complete & Interactive",
        badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
        downloadUrl: "/downloads/TCAMPO_Plan2050_Chapter1_Introduction.pdf",
        downloadFilename: "TCAMPO_Plan2050_Chapter1_Introduction.pdf",
        summary: "Establishes the federal planning mandates, regional vision, and overarching policy framework guiding transportation investments across the Tri-Cities region through 2050.",
        highlights: [
            "Federal and State Planning Requirements (23 CFR § 450)",
            "Regional Vision, 7 Guiding Goals & Planning Principles",
            "Performance-Based Planning and Programming (PBPP) Targets",
            "Public Participation and Stakeholder Engagement Process",
        ],
    },
    {
        number: "02",
        title: "Chapter 2: National and Regional Trends and Forecasts",
        navTitle: "Trends and Forecasts",
        path: "/trend_and_forecast",
        badge: "Complete & Interactive",
        badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
        downloadUrl: "/downloads/TCAMPO_Plan2050_Chapter2_National_and_Regional_Trends_and_Forecasts.pdf",
        downloadFilename: "TCAMPO_Plan2050_Chapter2_Trends_and_Forecasts.pdf",
        summary: "Analyzes regional population growth, employment dynamics, commuter travel patterns, freight freight corridors, and transformative emerging technologies affecting travel demand.",
        highlights: [
            "Demographic Projections: 2020–2050 Regional Population & Aging",
            "Employment Patterns, Activity Density & Industry Clusters",
            "Commuter Travel Flows across Petersburg, Hopewell & Colonial Heights",
            "Freight Logistics along I-95, I-295, Route 460 & Emerging Vehicle Tech",
        ],
    },
    {
        number: "03",
        title: "Chapter 3: System Today",
        navTitle: "System Today",
        path: "/system_today",
        badge: "Documentation Preview",
        badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
        summary: "Comprehensive assessment of the existing multimodal transportation infrastructure, analyzing roadway operations, public transit, bicycle and pedestrian facilities, freight, and safety.",
        highlights: [
            "Regional Roadway Network and Level of Service (LOS) Conditions",
            "Public Transportation: Fixed-Route Transit & Paratransit Services",
            "Bicycle and Pedestrian Network, Multi-Use Trails & Sidewalk Gaps",
            "Crash History, High-Injury Network & Safety Performance",
        ],
    },
    {
        number: "04",
        title: "Chapter 4: System Tomorrow",
        navTitle: "System Tomorrow",
        path: "/system_tomorrow",
        badge: "Documentation Preview",
        badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
        summary: "Identifies future regional mobility needs, vision corridor projects, system preservation strategies, and multimodal capital improvements prioritized for the 2050 horizon.",
        highlights: [
            "Future Travel Demand Modeling & Congestion Hotspot Projections",
            "Corridor Modernization, Interchange Upgrades & Capacity Projects",
            "Regional Active Transportation Connectivity & Complete Streets",
            "Transit Expansion Corridors & Microtransit Service Concepts",
        ],
    },
    {
        number: "05",
        title: "Chapter 5: Funding",
        navTitle: "Funding",
        path: "/funding",
        badge: "Documentation Preview",
        badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
        summary: "Presents the fiscally constrained financial plan, forecasting federal, state, and local revenue streams against projected capital, operations, and maintenance expenditures through 2050.",
        highlights: [
            "Fiscal Constraint Requirements & Revenue Forecast Methodology",
            "Federal (FHWA/FTA), SMART SCALE & State Funding Programs",
            "Local Capital Improvement Programs (CIP) & Maintenance Allocations",
            "Phased Project Expenditure Schedule (2026–2050)",
        ],
    },
    {
        number: "App",
        title: "Appendices: Documentation & Data",
        navTitle: "Appendices",
        path: "/appendices",
        badge: "Documentation Preview",
        badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
        summary: "Compiles technical methodologies, travel demand model documentation, environmental justice analyses, public survey records, and agency consultation documentation.",
        highlights: [
            "Appendix A: Public Participation Survey Results & Hearing Comments",
            "Appendix B: Regional Travel Demand Model Documentation",
            "Appendix C: Environmental Justice & Equity Assessment",
            "Appendix D: Project Scoring and Prioritization Methodology",
        ],
    },
];

function ExploreChapters() {
    return (
        <PageDisplay>
            <PageHeader
                subtitle="PLAN2050 Chapters"
                img={img3}
                showDownload={false}
            >
                Explore Plan Chapters
            </PageHeader>

            <div className="max-w-[94rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
                {/* Introduction & Architecture Banner */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-10 shadow-sm">
                    <div className="max-w-4xl">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1.5">
                            Tri-Cities MPO PLAN2050 Structure
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight mb-3">
                            Long-Range Transportation Plan Overview
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                            PLAN2050 is organized into six interconnected chapters and supporting technical appendices. Together, they articulate the regional vision, analyze current and emerging demand patterns, define future multimodal improvements, and establish a fiscally constrained financial strategy for the Tri-Cities area through 2050.
                        </p>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
                        <div className="p-3 bg-slate-50 rounded-xl">
                            <span className="text-xs text-slate-500 font-semibold block">Planning Horizon</span>
                            <span className="text-lg sm:text-xl font-extrabold text-blue-950">2026 – 2050</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl">
                            <span className="text-xs text-slate-500 font-semibold block">Plan Chapters</span>
                            <span className="text-lg sm:text-xl font-extrabold text-blue-950">6 Chapters + App</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl">
                            <span className="text-xs text-slate-500 font-semibold block">Member Jurisdictions</span>
                            <span className="text-lg sm:text-xl font-extrabold text-blue-950">6 Localities</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl">
                            <span className="text-xs text-slate-500 font-semibold block">Core Focus</span>
                            <span className="text-lg sm:text-xl font-extrabold text-blue-950">Multimodal</span>
                        </div>
                    </div>
                </div>

                {/* Chapter Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                    {CHAPTERS_DATA.map((chapter) => (
                        <div
                            key={chapter.path}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                        >
                            <div className="p-6">
                                {/* Card Header */}
                                <div className="flex items-start justify-between gap-3 mb-4">
                                    <div className="flex items-center gap-3">
                                        <span className="w-10 h-10 rounded-xl bg-blue-950 text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-xs">
                                            {chapter.number}
                                        </span>
                                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${chapter.badgeColor}`}>
                                            {chapter.badge}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-lg sm:text-xl font-extrabold text-blue-950 tracking-tight mb-2.5">
                                    {chapter.title}
                                </h3>

                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                                    {chapter.summary}
                                </p>

                                {/* Highlights */}
                                <div className="space-y-2 mb-6">
                                    <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block">
                                        Key Topics Included:
                                    </span>
                                    {chapter.highlights.map((h, i) => (
                                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                                            <span>{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Card Footer Actions */}
                            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                                <Link
                                    to={chapter.path}
                                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-950 hover:bg-blue-900 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors group"
                                >
                                    <span>Read Chapter Online</span>
                                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageDisplay>
    );
}

export default ExploreChapters;
