import React from "react";
import {
    PageDisplay,
    PageHeader,
    PageSection,
    SectionWrapper,
    TableOfContent,
} from "../components/layouts";
import {
    Paragraph,
    SectionHeader,
    SubHeading,
    List,
} from "../components/common";
import { docImg1 } from "../assets";

function Introduction() {
    const sections = [
        {
            to: "regional-context",
            title: "Regional Context",
        },
        {
            to: "tcampo-structure",
            title: "TCAMPO Organization and Structure",
        },
        {
            to: "purpose-of-plan",
            title: "Purpose of the Plan",
        },
        {
            to: "role-of-tcampo",
            title: "Role of TCAMPO",
        },
        {
            to: "federal-requirements",
            title: "Federal Regional Transportation Planning Requirements",
        },
        {
            to: "national-factors",
            title: "National Transportation Planning Factors",
        },
        {
            to: "federal-measures",
            title: "Federal Performance Measures",
        },
        {
            to: "goals-objectives",
            title: "Plan2050 Goals, Objectives, Performance Measures",
        },
        {
            to: "planning-process",
            title: "Planning Process",
        },
        {
            to: "relationship-other-plans",
            title: "Relationship to Other Plans, Reports, and Studies",
        },
        {
            to: "what-we-heard",
            title: "What We Heard: Stakeholder Involvement and Public Outreach",
        },
    ];

    return (
        <>
            <PageHeader img="https://images.unsplash.com/photo-1617886322168-72b886573c35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                Chapter 1: Introduction
            </PageHeader>
            <PageDisplay>
                <SectionWrapper backgroundImage="https://images.unsplash.com/photo-1591866605101-67aa6d498cce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <div className="flex flex-col md:flex-row items-start justify-center gap-8 max-w-[94rem] mx-auto px-4 sm:px-6 py-6 relative">
                        {/* Left Tabs Sidebar */}
                        <TableOfContent sections={sections} title="Introduction Tabs" />

                        {/* Content Area */}
                        <main className="flex-1 min-w-0 w-full flex flex-col items-center">
                            {/* 1. Regional Context */}
                            <PageSection id="regional-context">
                                <SectionHeader>Regional Context</SectionHeader>
                                <Paragraph>
                                    Located along the I-95, I-85, and I-295 corridors about 25 miles south of Richmond, the Tri-Cities region is situated at the confluence of the James and Appomattox Rivers. The Tri-Cities Area Metropolitan Planning Organization (TCAMPO) is the federally designated planning body responsible for transportation planning in south-central Virginia&apos;s Tri-Cities region. Contained within the Crater Planning District Commission (PDC), TCAMPO is composed of six member jurisdictions, including the independent cities of Colonial Heights, Hopewell, and Petersburg and portions of the adjoining Chesterfield, Dinwiddie, and Prince George Counties. The Tri-Cities region is part of the Greater Richmond Region, which is defined by the Office of Management and Budget (OMB) as the Richmond, Virginia Metropolitan Statistical Area (MSA).
                                </Paragraph>

                                <Paragraph>
                                    Figure 1 depicts the TCAMPO planning area in the context of the Richmond MSA. According to the 2020 decennial census, the population of TCAMPO was 167,920. With a land area of approximately 324 square miles, the MPO has a population density of approximately 518 people per square mile. Among all MPOs in Virginia, TCAMPO is ranked fifth in terms of population, sixth in land area, and tenth in population density. Although the population of the Tri-Cities region grew by 24.4 percent between the last two decennial censuses, it lags behind the state (39.5 percent) and the nation (33.3 percent).
                                </Paragraph>

                                <div className="my-6 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
                                    <img
                                        src={docImg1}
                                        alt="Greater Richmond Region and Metropolitan Planning Organization Boundaries"
                                        className="w-full h-auto object-cover max-h-[34rem]"
                                    />
                                    <p className="text-xs text-text/70 p-3 text-center italic bg-black/60">
                                        Figure 1. Greater Richmond Region and Metropolitan Planning Organization Boundaries
                                    </p>
                                </div>

                                <Paragraph>
                                    Unincorporated communities located within the Tri-Cities region include portions of Chester, Enon, Ettrick, Fort Gregg-Adams (Fort Lee), Matoaca, and Prince George. These communities, which are defined as Census Designated Places (CDP) by the United States Census Bureau, are integral to the TCAMPO planning area. Ettrick is home to Virginia State University (VSU), the region’s largest university or college. Fort Lee is a large United States Army post and is one of the region’s largest employers. The Chester, Enon, Matoaca, and Prince George CDPs are additional clusters that contain large residential and commercial activity centers. Each of these communities have significant amounts of the region’s employment and housing and are major sources of trip generation. To carry out transportation planning activities for the region, TCAMPO coordinates with its six member jurisdictions, the Virginia Department of Transportation (VDOT), the Department of Rail and Public Transportation (DRPT), Crater PDC, Petersburg Area Transit (PAT), and other planning partners to guide investment in the region&apos;s transportation network.
                                </Paragraph>
                            </PageSection>

                            {/* 2. TCAMPO Organization and Structure */}
                            <PageSection id="tcampo-structure">
                                <SectionHeader>TCAMPO Organization and Structure</SectionHeader>
                                <Paragraph>
                                    TCAMPO consists of a Policy Committee and a Technical Advisory Committee (TAC), each playing a distinct role in the regional planning process. The Policy Committee serves as the primary decision-making body and is responsible for adopting all federally required planning products. Voting members include elected representatives from each of the member jurisdictions, appointed representatives from the Office of the Virginia Secretary of Transportation, the Crater Planning District Commission (CPDC), and Petersburg Area Transit (PAT). Representatives from the Federal Transit Administration (FTA), the Federal Highway Administration (FHWA), and DRPT participate as nonvoting members.
                                </Paragraph>

                                <Paragraph>
                                    The TAC is composed of staff representatives from the member jurisdictions, Secretary of Transportation, PAT, and Crater PDC. It provides technical support and serves in an advisory capacity to the Policy Committee. Representatives from Fort Lee, RideFinders, and the National Park Service at Petersburg National Battlefield participate as advisory, nonvoting members given their importance to transportation in the Tri-Cities region.
                                </Paragraph>

                                <Paragraph>
                                    Regional and state transportation and air quality planning agencies have executed Memoranda of Agreement pursuant to 23 CFR 450.310, defining the roles and responsibilities of each participating agency. During the long-range planning process, TCAMPO and Richmond Regional Transportation Planning Organization (RRTPO) develop an accompanying Conformity Report to comply with metropolitan transportation and air quality planning requirements.
                                </Paragraph>
                            </PageSection>

                            {/* 3. Purpose of the Plan */}
                            <PageSection id="purpose-of-plan">
                                <SectionHeader>Purpose of the Plan</SectionHeader>
                                <Paragraph>
                                    Plan2050 is TCAMPO's Long Range Transportation Plan (LRTP). Also known as a Metropolitan Transportation Plan (MTP), Plan2050 is a federally required document that establishes the vision, goals, and multimodal investment priorities for the Tri-Cities region’s transportation system. As TCAMPO's core long-range planning document, Plan2050 creates a strategic framework for decision-making across the region, guiding investments that improve mobility, safety, equity, and economic development over the next 20 years.
                                </Paragraph>

                                <Paragraph>
                                    Plan2050 provides the basis from which shorter-range programming documents, such as the Metropolitan Transportation Improvement Program (MTIP), will be developed. Consistent with federal requirements, projects must be in the MPO’s current approved LRTP to be eligible for federal transportation funding. Federal regulations also require that the LRTP address a planning horizon of at least 20 years and is fiscally constrained. This means that Plan2050 includes only projects and programs for which a reasonable funding source can be identified. Plan2050 ensures that investments in its transportation network are coordinated, strategic, and aligned with the goals of the communities it serves.
                                </Paragraph>
                            </PageSection>

                            {/* 4. Role of TCAMPO */}
                            <PageSection id="role-of-tcampo">
                                <SectionHeader>Role of TCAMPO</SectionHeader>
                                <Paragraph>
                                    TCAMPO is responsible for carrying out the federally mandated continuing, comprehensive, and cooperative (3C) planning process on behalf of the region&apos;s member jurisdictions. In this role, TCAMPO coordinates regional transportation planning, prioritizes investments, and ensures that federal transportation funds are directed toward projects that reflect the needs and priorities of the Tri-Cities region. In addition to the LRTP, TCAMPO develops and maintains the following federally required planning products:
                                </Paragraph>

                                <List>
                                    <li className="text-text/90">
                                        <strong className="text-primary-orange">Unified Planning Work Program (UPWP)</strong> – updated annually
                                    </li>
                                    <li className="text-text/90">
                                        <strong className="text-primary-orange">Metropolitan Transportation Plan (MTP)</strong> – updated every four years
                                    </li>
                                    <li className="text-text/90">
                                        <strong className="text-primary-orange">Metropolitan Transportation Improvement Program (MTIP)</strong> – updated every four years
                                    </li>
                                    <li className="text-text/90">
                                        <strong className="text-primary-orange">Congestion Management Process (CMP)</strong> – maintained on an ongoing basis
                                    </li>
                                </List>

                                <Paragraph>
                                    TCAMPO also maintains a Public Participation Plan and Title VI Compliance Plan in accordance with federal public involvement and civil rights requirements (23 CFR 450.316; 49 U.S.C. 5332). Together, these planning products establish the region's transportation priorities, which in turn guide TCAMPO's role in selecting and recommending projects for federal funding, including the Surface Transportation Block Grant (STBG), Congestion Mitigation and Air Quality (CMAQ), and Transportation Alternatives Program (TAP). Beyond federal allocations, TCAMPO also evaluates and recommends projects through Virginia&apos;s SMART SCALE prioritization process and provides technical assistance to its member jurisdictions in developing competitive applications.
                                </Paragraph>
                            </PageSection>

                            {/* 5. Federal Regional Transportation Planning Requirements */}
                            <PageSection id="federal-requirements">
                                <SectionHeader>Federal Regional Transportation Planning Requirements</SectionHeader>
                                <Paragraph>
                                    Federal law requires that transportation plans in urbanized areas with a population of 50,000 or more be developed through the 3C planning process (23 U.S.C. 134; 49 U.S.C. 5303). MPOs must develop and maintain a Long-Range Transportation Plan and a Transportation Improvement Program, each updated every four years. MPOs serving urbanized areas with a population of 200,000 or more, designated as Transportation Management Areas (TMAs), are also required to maintain a Congestion Management Process (23 CFR 450.322).
                                </Paragraph>

                                <Paragraph>
                                    Federal planning requirements also emphasize performance-driven, outcome based planning, first introduced under MAP-21 in 2012 and continued under the FAST Act and the Infrastructure Investment and Jobs Act (IIJA). This framework requires MPOs and states to establish measurable targets tied to national performance goals covering safety, infrastructure condition, system reliability, and freight movement (23 U.S.C. 150; 23 CFR 490), ensuring federal investments advance national transportation priorities.
                                </Paragraph>
                            </PageSection>

                            {/* 6. National Transportation Planning Factors */}
                            <PageSection id="national-factors">
                                <SectionHeader>National Transportation Planning Factors</SectionHeader>
                                <Paragraph>
                                    Since the Intermodal Surface Transportation Efficiency Act of 1991 (ISTEA), Congress has identified key planning areas for MPOs and states to consider when developing multimodal transportation plans. MAP-21 established ten planning factors under 23 CFR 450.306 that remain in effect through the FAST Act and IIJA:
                                </Paragraph>

                                <ol className="list-decimal pl-6 space-y-2 text-text/90 text-sm md:text-base leading-relaxed">
                                    <li>Support the economic vitality of the metropolitan area, especially by enabling global competitiveness, productivity, and efficiency</li>
                                    <li>Increase the safety of the transportation system for motorized and non-motorized users</li>
                                    <li>Increase the security of the transportation system for motorized and non-motorized users</li>
                                    <li>Increase the accessibility and mobility of people and freight</li>
                                    <li>Protect and enhance the environment, promote energy conservation, improve quality of life, and promote consistency between transportation improvements and planned growth and economic development</li>
                                    <li>Enhance the integration and connectivity of the transportation system across and between modes for people and freight</li>
                                    <li>Promote efficient system management and operation</li>
                                    <li>Emphasize the preservation of the existing transportation system</li>
                                    <li>Improve the resiliency and reliability of the transportation system and reduce or mitigate stormwater impacts of surface transportation</li>
                                    <li>Enhance travel and tourism</li>
                                </ol>
                            </PageSection>

                            {/* 7. Federal Performance Measures */}
                            <PageSection id="federal-measures">
                                <SectionHeader>Federal Performance Measures</SectionHeader>
                                <Paragraph>
                                    Under MAP-21 and continued through the IIJA, MPOs and states must set targets tied to seven national goal areas:
                                </Paragraph>

                                <List>
                                    <li><strong className="text-primary-orange">Safety</strong> — reducing fatalities and serious injuries</li>
                                    <li><strong className="text-primary-orange">Infrastructure condition</strong> — pavement and bridge condition ratings</li>
                                    <li><strong className="text-primary-orange">System reliability</strong> — travel time consistency on highways and freight corridors</li>
                                    <li><strong className="text-primary-orange">Freight movement</strong> — truck travel time reliability</li>
                                    <li><strong className="text-primary-orange">CMAQ</strong> — traffic congestion and on-road mobile source emissions</li>
                                    <li><strong className="text-primary-orange">Transit asset management</strong> — state of good repair for transit systems</li>
                                    <li><strong className="text-primary-orange">Transit safety</strong> — fatalities, injuries, and safety events on transit</li>
                                </List>

                                <Paragraph>
                                    These are governed primarily under 23 CFR 490 and require states and MPOs to establish measurable targets and report progress regularly to FHWA and FTA.
                                </Paragraph>
                            </PageSection>

                            {/* 8. Plan2050 Goals, Objectives, Performance Measures */}
                            <PageSection id="goals-objectives">
                                <SectionHeader>Plan2050 Goals, Objectives, Performance Measures</SectionHeader>
                                <Paragraph>
                                    The goals and objectives for Plan2050 build on the framework established for the region’s previously adopted LRTP, Plan2045, and were affirmed through the MPO’s Multimodal Mobility Plan in 2025. Rather than beginning from scratch, TCAMPO used the multimodal planning process as an opportunity to validate that the existing goals remained relevant to the region&apos;s evolving conditions, community priorities, and federal performance requirements. Guided by the previous public survey developed for the region’s previous LRTP (Plan2045) and subsequent planning efforts, TCAMPO adopted the following goals and objectives:
                                </Paragraph>

                                <div className="space-y-6 mt-4">
                                    <div className="p-4 rounded-xl bg-white/5 border-l-4 border-primary-red">
                                        <SubHeading>1. Safety</SubHeading>
                                        <p className="font-medium text-text mb-2">Improve the safety of the transportation system for all people.</p>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-text/80">
                                            <li>Enhance safety and comfort of bicycle and pedestrian facilities</li>
                                            <li>Work to eliminate all serious injuries and fatalities resulting from crashes</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 rounded-xl bg-white/5 border-l-4 border-primary-orange">
                                        <SubHeading>2. Environment / Land Use</SubHeading>
                                        <p className="font-medium text-text mb-2">Reduce the negative impact the transportation system has on the natural and built environment.</p>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-text/80">
                                            <li>Address roadways prone to flooding and consider climate impacts in transportation planning prioritization and funding decisions.</li>
                                            <li>Reduce transportation related pollutants.</li>
                                            <li>Increase number and share of trips taken by shared and active transportation modes.</li>
                                            <li>Assist and support localities as they perform land use planning regarding transportation investments that encourage walkable and transit-oriented communities.</li>
                                            <li>Minimize impacts of transportation system on natural resources and communities with a particular emphasis on Environmental Justice (EJ) populations.</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 rounded-xl bg-white/5 border-l-4 border-yellow-500">
                                        <SubHeading>3. Equity / Accessibility</SubHeading>
                                        <p className="font-medium text-text mb-2">Improve equitable access through greater availability of mode choices that are affordable and efficient.</p>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-text/80">
                                            <li>Reduce trip lengths for all people with a focus on Environmental Justice (EJ) populations.</li>
                                            <li>Increase access to jobs and community services via transit, walking, and biking for all people with a focus on EJ populations.</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 rounded-xl bg-white/5 border-l-4 border-emerald-500">
                                        <SubHeading>4. Economic Development</SubHeading>
                                        <p className="font-medium text-text mb-2">Improve connectivity and mobility for strong economic vitality.</p>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-text/80">
                                            <li>Reduce peak period travel times.</li>
                                            <li>Increase transportation investment which focuses on economic vitality.</li>
                                            <li>Improve reliability and accessibility of travel to and within the regional activity centers.</li>
                                            <li>Reduce freight bottlenecks.</li>
                                            <li>Increase multimodal access to tourist destinations.</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 rounded-xl bg-white/5 border-l-4 border-blue-500">
                                        <SubHeading>5. Mobility</SubHeading>
                                        <p className="font-medium text-text mb-2">Increase travel efficiency and mode choices by maintaining the transportation system in a state of good repair.</p>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-text/80">
                                            <li>Increase the percent of complete streets across the highway network to maximize use of available capacity.</li>
                                            <li>Increase system efficiency through operational, transportation demand management (TDM), and technology-based solutions.</li>
                                            <li>Improve system reliability across all modes.</li>
                                        </ul>
                                    </div>
                                </div>

                                <Paragraph className="mt-6">
                                    Each goal in Plan2050 is supported by objectives that define what the region is working toward, including reducing highway congestion, improving system reliability, expanding equitable access to transit, and reducing fatalities and serious injuries. As shown in the Congestion Management Plan, Plan2050 performance measures such as Travel Time Index (TTI), Peak Hours of Excessive Delay (PHED), and percent of person-miles traveled on Interstate and non-Interstate roadways provide a quantitative basis for evaluating plan outcomes in alignment with federal requirements under 23 CFR 490.
                                </Paragraph>
                            </PageSection>

                            {/* 9. Planning Process */}
                            <PageSection id="planning-process">
                                <SectionHeader>Planning Process</SectionHeader>
                                <Paragraph>
                                    The development of Plan2050 followed a process designed to meet federal requirements while remaining grounded on the region’s priorities. The process followed multiple phases including data collection and existing conditions assessment, community and stakeholder engagement, scenario development and evaluation, project prioritization, and fiscal constraint analysis.
                                </Paragraph>

                                <div className="space-y-4 mt-6">
                                    <div>
                                        <SubHeading>Data Collection and Conditions Assessment</SubHeading>
                                        <Paragraph>
                                            TCAMPO began the planning process by establishing a comprehensive understanding of national and regional trends and forecasts (see Chapter 2: National and Regional Trends and Forecasts). This was followed by an assessment of existing transportation conditions across the region, including an inventory of roadway network performance, bridge and pavement conditions, transit service coverage and ridership patterns, bicycle and pedestrian infrastructure, interregional travel, and freight movement corridors (see Chapter 3: Our Transportation System Today). Travel demand modeling, drawing on current and projected demographic and land use data from member jurisdictions and the Crater Planning District Commission, was used to forecast future conditions under a no-build scenario. This baseline served as the foundation against which future investment scenarios were evaluated.
                                        </Paragraph>
                                    </div>

                                    <div>
                                        <SubHeading>Community and Stakeholder Engagement</SubHeading>
                                        <Paragraph>
                                            Public and stakeholder engagement was conducted during the planning process in accordance with TCAMPO's Public Participation Plan and Title VI requirements. Outreach efforts were designed to reach a broad cross-section of the region's residents, including populations that are traditionally underserved or underrepresented in transportation planning processes. Engagement activities included public meetings, online surveys, and coordination with local jurisdiction staff. Input gathered through these efforts informed the development of plan goals, the identification of transportation needs, and the evaluation of investment priorities.
                                        </Paragraph>
                                    </div>

                                    <div>
                                        <SubHeading>Scenario Development and Evaluation</SubHeading>
                                        <div className="p-3 bg-white/5 rounded-lg border border-dashed border-white/20 text-xs text-text/60 italic">
                                            Content under development (TBD)
                                        </div>
                                    </div>

                                    <div>
                                        <SubHeading>Project Identification and Prioritization</SubHeading>
                                        <Paragraph>
                                            Transportation needs and candidate projects were identified through a combination of local jurisdiction input, travel demand modeling outputs, and asset management data. Projects were evaluated using factors related to safety, mobility and congestion, accessibility and equity, environment, and economic development. This evaluation informed how projects were ranked and advanced for potential inclusion in the financially constrained plan.
                                        </Paragraph>
                                    </div>

                                    <div>
                                        <SubHeading>Fiscal Constraint</SubHeading>
                                        <Paragraph>
                                            Federal regulations require that the LRTP be fiscally constrained, meaning the total cost of projects and programs included in the Plan must not exceed the funding reasonably expected to be available over the planning horizon. TCAMPO developed revenue projections based on historical federal, state, and regional funding allocations, anticipated formula program apportionments, and guidance from VDOT, DRPT, and the Central Virginia Transportation Authority (CVTA) on projected funding levels. Projects were organized into funding tiers reflecting the degree of certainty associated with available revenues, ensuring that the Plan presents a realistic and implementable program of investments rather than an unconstrained wish list.
                                        </Paragraph>
                                    </div>

                                    <div>
                                        <SubHeading>Interagency and Regional Coordination</SubHeading>
                                        <Paragraph>
                                            Throughout the planning process, TCAMPO coordinated with VDOT, DRPT, PAT, and RRTPO. This coordination ensured consistency with statewide transportation plans and investment programs, addressed cross-boundary travel needs, and fulfilled the consultation procedures established under the Memoranda of Agreement executed pursuant to 23 CFR 450.310. Fort Gregg-Adams, RideFinders, and the National Park Service at Petersburg National Battlefield also contributed perspectives relevant to their roles in the regional transportation system.
                                        </Paragraph>
                                    </div>
                                </div>
                            </PageSection>

                            {/* 10. Relationship to Other Plans, Reports, and Studies */}
                            <PageSection id="relationship-other-plans">
                                <SectionHeader>Relationship to Other Plans, Reports, and Studies</SectionHeader>
                                <div className="p-6 rounded-2xl bg-white/5 border border-dashed border-white/20 text-center">
                                    <p className="text-text/70 text-sm">
                                        Content under development (TBD). Details on alignments with regional, state, and local plans will be incorporated here.
                                    </p>
                                </div>
                            </PageSection>

                            {/* 11. What We Heard: Stakeholder Involvement and Public Outreach */}
                            <PageSection id="what-we-heard">
                                <SectionHeader>What We Heard: Stakeholder Involvement and Public Outreach</SectionHeader>
                                <div className="p-6 rounded-2xl bg-white/5 border border-dashed border-white/20 text-center">
                                    <p className="text-text/70 text-sm">
                                        Content under development (TBD). Summary of public engagement feedback, stakeholder surveys, and open houses will appear here.
                                    </p>
                                </div>
                            </PageSection>
                        </main>
                    </div>
                </SectionWrapper>
            </PageDisplay>
        </>
    );
}

export default Introduction;
