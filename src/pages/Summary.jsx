import React from "react";
import { PageDisplay, PageHeader, SectionContent } from "../components/layouts";
import { PAGE_SUBSECTIONS } from "../pagesData/summary";

function Summary() {
    return (
        <>
            <PageHeader />
            <PageDisplay>
                <SectionContent 
                    backgroundSrc="https://plus.unsplash.com/premium_photo-1664695368767-c42483a0bda1?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    subsections={PAGE_SUBSECTIONS}
                />
            </PageDisplay>
        </>
    );
}

export default Summary;

