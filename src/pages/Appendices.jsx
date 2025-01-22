import React from "react";
import { PageDisplay, PageSection } from "../components/layouts";
import { List, SectionHeader, SectionLink } from "../components/common";
function Appendices() {
    return (
        <>
            <PageDisplay>
                <PageSection>
                    <SectionHeader> Appendices </SectionHeader>

                    <List>
                        <li>
                            <SectionLink
                                link="https://www.greatermadisonmpo.org/planning/documents/Appendix-A-ConnectRTP-web.pdf"
                                title="Appendix A: Project and Policy recommendations"
                            />
                        </li>
                        <li>
                            <SectionLink
                                link="https://www.greatermadisonmpo.org/planning/documents/appendixb_systemperformancereport.pdf"
                                title={"Appendix B: System Performance Report"}
                            />
                        </li>
                        <li>
                            <SectionLink
                                link="https://www.greatermadisonmpo.org/planning/documents/Appendix-C-RTP-EJ.pdf"
                                title={
                                    "Appendix C: Environmental Justice Analysis"
                                }
                            />
                        </li>
                        <li>
                            <SectionLink
                                link="https://www.greatermadisonmpo.org/planning/documents/Appendix-D-RTP-EnvironmentalAssessment.pdf"
                                title={"Appendix D: Environmental Assessment"}
                            />
                        </li>
                        <li>
                            <SectionLink
                                title={
                                    "Appendix E: Public Participation and Response to Comments"
                                }
                                link="https://www.greatermadisonmpo.org/planning/documents/AppendixE_PIRevised.pdf"
                            />
                        </li>
                        <li>
                            <SectionLink
                                title={
                                    " Appendix F: Congestion Management Process"
                                }
                                link="https://www.greatermadisonmpo.org/planning/documents/Appendix-F-RTP-CMP.pdf"
                            />
                        </li>
                        <li>
                            <SectionLink
                                title={
                                    "Appendix G: Pedestrian Facilities Toolbox"
                                }
                                link="https://www.greatermadisonmpo.org/planning/documents/Appendix-G-RTP-PedFacilities.pdf"
                            />
                        </li>
                    </List>
                </PageSection>
            </PageDisplay>
        </>
    );
}

export default Appendices;
