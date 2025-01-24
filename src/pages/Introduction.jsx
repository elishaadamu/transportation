import React from "react";
import {
    PageDisplay,
    PageHeader,
    PageSection,
    SectionWrapper,
    TableOfContent,
} from "../components/layouts";
import {
    HighlightedText,
    Paragraph,
    SectionHeader,
    SubHeading,
    List,
    Image,
    SectionLink,
} from "../components/common";

function Introduction() {
    const sections = [
        {
            to: "section1",
            title: "  Purpose of the Plan",
        },
        {
            to: "section2",
            title: " What is the Regional Transportation Plan?   ",
        },
        {
            to: "section3",
            title: "  Plan Goals   ",
        },
        {
            to: "section4",
            title: "   The Role of the Greater Madison MPO  ",
        },
        {
            to: "section5",
            title: "  Federal Regional Transportation Planning Requirements   ",
        },
        {
            to: "section6",
            title: "  The Infrastructure Investment and Jobs Act (IIJA)   ",
        },
        {
            to: "section7",
            title: "   The Planning Process  ",
        },
        {
            to: "section8",
            title: "  Relationship to Other Plans, Reports, and Studies   ",
        },
        {
            to: "section9",
            title: "  What We Heard: Stakeholder Involvement and Public Outreach   ",
        },
    ];
    return (
        <>
            <PageHeader img={"https://images.unsplash.com/photo-1617886322168-72b886573c35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>INTRODUCTION </PageHeader>
            <PageDisplay>
                <TableOfContent sections={sections} />

                <SectionWrapper backgroundImage="https://images.unsplash.com/photo-1591866605101-67aa6d498cce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <PageSection id="section1">
                        <SectionHeader>Purpose of the Plan</SectionHeader>
                        <SubHeading>THE MADISON REGION IS GROWING</SubHeading>
                        <Paragraph>
                            The Greater Madison Area is growing. From 2000-2020
                            the Dane County population grew by 32% - adding
                            almost 135,000 people. Between 2020 and 2050, the
                            population is forecast to grow by another 178,000 to
                            739,000. By 2050 the county is also expected to add
                            around 96,000 jobs. To accommodate that growth, the
                            region must have an integrated, well-planned
                            transportation network that meets the needs of all
                            who live, work, or play here.
                        </Paragraph>

                        <SubHeading>
                            THE TRANSPORTATION SYSTEM IS THE REGION’S BACKBONE
                        </SubHeading>
                        <Paragraph>
                            The region’s transportation system provides critical
                            connections to commerce, employment, health care,
                            education, and recreation, as well as quick and
                            efcient movement of goods and services. An
                            integrated multi-modal transportation system
                            provides multiple options for commuting, shopping,
                            leisure, and regional travel. Transportation can
                            have an impact on the afordability of neighborhoods
                            and communities and have an impact on the viability
                            of community development. The transportation network
                            also has a direct impact on the quality of life in
                            the region. Safe and efcient regional transportation
                            facilities ensure convenient business and leisure
                            travel. An integrated, wellconnected network makes
                            traveling by all modes convenient and enjoyable. The
                            network can also help to foster community with
                            streets acting as community gathering and meeting
                            spaces. A high quality transportation system with
                            transit and bicycling options is also important for
                            businesses in attracting young, educated, and
                            skilled workers. National surveys have shown this is
                            one of the top criteria of Millennials in choosing
                            where to live. Finally, the transportation system
                            afects the environment both directly and indirectly,
                            including being the second largest source of
                            greenhouse gas emissions in Dane County. The
                            Regional Transportation Plan provides an opportunity
                            to carefully consider how we can leverage
                            transportation investments to achieve our regional
                            goals in all of these areas: community development;
                            the economy; the environment; equity; and quality of
                            life.
                        </Paragraph>

                        <Image />

                        <SubHeading>
                            THE TRANSPORTATION SYSTEM IS EVOLVING
                        </SubHeading>
                        <Paragraph>
                            The purpose of the Connect Greater Madison Regional
                            Transportation Plan (RTP) for 2050 is to identify
                            how the region intends to invest in the
                            transportation system to accommodate current travel
                            demands and future growth, while setting investment
                            priorities balancing limited funds. The plan will
                            also include strategies to begin to address
                            important trends such as rapidly evolving
                            transportation technology and the rise of
                            teleworking, as well as addressing critical issues,
                            including equity and climate change.
                        </Paragraph>
                    </PageSection>

                    <PageSection id="section2">
                        <SectionHeader>
                            What is the Regional Transportation Plan?
                        </SectionHeader>
                        <Paragraph>
                            The RTP sets the framework for the future of
                            transportation in the Madison region. The RTP is an
                            integrated, multi-modal plan that articulates how
                            the region intends to build, manage, and operate a
                            multimodal transportation system (including transit,
                            highway, bicycle, pedestrian, and other modes) to
                            meet the region’s economic, transportation,
                            development, and sustainability goals. The RTP
                            defnes the transportation goals for the region and
                            specifes the policies, projects, and strategies that
                            will achieve these goals. Additionally, the plan
                            ties goals to performance measures and sets
                            performance goals to track the region’s progress in
                            meeting plan goals. Further, a board approved and
                            USDOT accepted RTP is required for a metropolitan
                            area to be eligible to receive federal funding for
                            transportation projects. The RTP acts as a
                            transportation investment guide that the MPO, local
                            jurisdictions, and the Wisconsin Department of
                            Transportation use to ensure a unifed regional
                            transportation network. As a “fscally constrained1 ”
                            plan, the RTP must demonstrate that the projects
                            listed in the plan can be implemented using
                            committed, available, or reasonably available
                            revenue sources. The RTP must be updated every fve
                            years and provide a plan that covers a minimum of 20
                            years. Finally, the plan will ensure eligibility of
                            projects for federal transportation funding as the
                            plan serves as the framework for guiding federally
                            funded transportation investments.
                            <SectionLink
                                link="https://www.transit.dot.gov/regulations-and-guidance/transportation-planning/financial-planning-fiscal-constraint"
                                title=""
                            />
                        </Paragraph>
                    </PageSection>

                    {/* WORK ON THE PAGE SECTION BELLOW LETER */}
                    <PageSection id="section3">
                        <SectionHeader>Plan Goals</SectionHeader>
                        <Paragraph>
                            In 2015 the MPO teamed up with the Capital Area
                            Regional Planning Commission (CARPC) to conduct the
                            Greater Madison Region Values and Priorities Survey
                            to determine the values and priorities of area
                            residents to ensure that planning decisions speak to
                            and correspond with the desires of the region’s
                            residents. This extensive public engagement process
                            informed the development of a set of goals that
                            represent overarching aspirational statements about
                            desired vision for the region that was established
                            in preceding regional transportation plan, The
                            Regional Transportation Plan 2050: Charting Our
                            Course. A public survey conducted in spring 2021
                            showed continued support for the existing goals2 ,
                            which form the foundation for the remainder of this
                            plan.
                        </Paragraph>

                        <List>
                            <li>
                                <SubHeading>
                                    GOAL 1: LIVABLE COMMUNITIES
                                </SubHeading>
                                <Paragraph>
                                    Create connected livable places linked to
                                    jobs, services, education, retail, and
                                    recreation through a multimodal
                                    transportation system that supports compact
                                    development patterns, increasing the
                                    viability of walking, bicycling, and public
                                    transit.
                                </Paragraph>
                            </li>
                            <li>
                                <SubHeading>GOAL 2: SAFETY</SubHeading>
                                <Paragraph>
                                    Ensure that the transportation system
                                    enables all people to get to where they need
                                    to go safely with an emphasis on enhanced
                                    protection for vulnerable roadway users
                                    through use of a safe systems approach,
                                    thereby helping to achieve the long-term
                                    goal of eliminating fatal and serious trafc
                                    injuries
                                </Paragraph>
                            </li>
                            <li>
                                <SubHeading>GOAL 3: PROSPERITY </SubHeading>
                                <Paragraph>
                                    Build and maintain a transportation system
                                    that provides people with afordable access
                                    to jobs, enables the efcient movement of
                                    goods and services within the region and
                                    beyond, and supports and attracts diverse
                                    residents and businesses, creating a shared
                                    prosperity that provides economic
                                    opportunities for all.
                                </Paragraph>
                            </li>
                            <li>
                                <SubHeading>GOAL 4: EQUITY </SubHeading>
                                <Paragraph>
                                    Provide convenient, afordable transportation
                                    options that enable all people, regardless
                                    of age, ability, race, ethnicity, or income,
                                    to access jobs, services, and other
                                    destinations to meet their daily needs;
                                    engage traditionally underrepresented
                                    groups; and ensure that the benefts of the
                                    regional transportation system are fairly
                                    distributed, taking into consideration
                                    current inequities resulting from past
                                    decisions, and that environmental justice
                                    populations are not disproportionately
                                    impacted.
                                </Paragraph>
                            </li>
                            <li>
                                <SubHeading>
                                    GOAL 5: ENVIRONMENTAL SUSTAINABILITY
                                </SubHeading>
                                <Paragraph>
                                    Minimize transportation-related greenhouse
                                    gas emissions that contribute to global
                                    climate change; avoid, minimize, and
                                    mitigate the environmental impacts of the
                                    transportation system on the natural
                                    environment and historic and cultural
                                    resources; and design and maintain a
                                    transportation system that is resilient in
                                    the face of climate change.
                                </Paragraph>
                            </li>
                            <li>
                                <SubHeading>
                                    GOAL 6: SYSTEM PERFORMANCE{" "}
                                </SubHeading>
                                <Paragraph>
                                    Maximize the investment made in the existing
                                    transportation system by maintaining it in a
                                    state of good repair and harnessing
                                    technological advances; promote compact
                                    development and travel demand management to
                                    minimize the need for new roadway lane-miles
                                    and maximize mobility options; and manage
                                    the system to maximize efciency and
                                    reliability.
                                </Paragraph>
                            </li>
                        </List>
                    </PageSection>

                    <PageSection id="section4">
                        <SectionHeader>
                            The Role of the Greater Madison MPO
                        </SectionHeader>
                        <Paragraph>
                            The Greater Madison MPO is the designated
                            metropolitan planning organization (MPO) responsible
                            for overseeing the continuous, comprehensive, and
                            cooperative (3-C) transportation planning
                            decision-making process for the Madison Metropolitan
                            Planning Area (Map 1-a). MPOs are federally
                            designated decision-making bodies for metropolitan
                            areas with populations greater than 50,000, which
                            guide decisions about how federal transportation
                            funds for planning studies, capital projects, and
                            services will be programed in the region. MPOs help
                            facilitate implementing agencies (including local
                            municipalities, transit providers, and state
                            departments of transportation) in the planning and
                            prioritization of their transportation investments
                            in a continuing, comprehensive, and cooperative
                            (3-C) process consistent with regional goals,
                            policies, and needs, as outlined in a long-range
                            regional transportation plan.
                        </Paragraph>
                        <Paragraph>
                            The goal of the MPO planning and programming
                            processes is to build regional agreement on
                            transportation investments that balance roadway,
                            public transit, bicycle, pedestrian, and other
                            transportation needs and support regional land use,
                            economic development, and environmental goals.
                        </Paragraph>

                        <Paragraph>
                            The MPO is a regional transportation planning agency
                            and approves use of federal transportation funding;
                            the MPO is not an implementing agency that builds
                            facilities or operates transit service. The
                            following outlines the key responsibilities of the
                            MPO and those that fall with other agencies and
                            local communities.
                        </Paragraph>

                        <Image />

                        <Paragraph>What the MPO does: </Paragraph>
                        <List>
                            <li>
                                Prepare a long range (20+ year) regional
                                transportation plan for all modes of travel,
                                which is updated every 5 years
                            </li>
                            <li>
                                This involves:
                                <ul className="list-disc">
                                    <li>asdl</li>
                                    <li>sdl</li>
                                </ul>
                            </li>
                            <li>
                                Provide a forum for regional transportation
                                decision making
                            </li>
                            <li>
                                Approve Federal funding for projects in the
                                region3
                            </li>
                            <li>Conduct public engagement </li>
                            <li>
                                Administer the RoundTrip Travel Demand
                                Management (TDM) program
                            </li>
                        </List>

                        <Paragraph>What the MPO does not do:</Paragraph>
                        <List>
                            <li>
                                Design, construct or maintain roadways or
                                multi-use paths
                            </li>
                            <li>
                                Trafc control (e.g., signs and signals) and
                                enforcement
                            </li>
                            <li>
                                Operate public transit service or design and
                                construct transit capital facilities
                            </li>
                            <li> Land use planning and zoning </li>
                        </List>
                    </PageSection>

                    <PageSection id="section5">
                        <SectionHeader>
                            Federal Regional Transportation Planning
                            Requirements
                        </SectionHeader>

                        <Paragraph>
                            The metropolitan transportation planning process is
                            directed by the most recent federal transportation
                            authorization legislation, statutes codifed in the
                            United States Code of Laws (U.S.C), and regulations
                            in the Code of Federal Regulations (CFR). 23 U.S.C
                            and 49 U.S.C establish the continuing, cooperative,
                            and comprehensive (3-C) metropolitan planning
                            process that the MPO follows to ensure regional
                            cooperation in transportation planning.
                        </Paragraph>

                        <SubHeading>
                            REGIONAL TRANSPORTATION PLAN REQUIREMENTS
                        </SubHeading>

                        <Paragraph>
                            The MPO is required to develop a regional
                            transportation plan4 with no less than a 20-year
                            planning horizon, which must be updated every 5
                            years. The plan shall include both long-range and
                            short-range strategies and actions that provide for
                            the development of an integrated multimodal
                            transportation system. The plan must include:
                        </Paragraph>

                        <List>
                            <li>
                                Analysis of the current and future
                                transportation demand of persons and goods in
                                the region
                            </li>
                            <li>
                                Inventory of existing and proposed
                                transportation facilities (including roadways,
                                public transit facilities, pedestrian walkways,
                                and bicycle facilities)
                            </li>
                            <li>
                                Performance measures and targets used in
                                assessing the performance of the transportation
                                system
                            </li>
                            <li>
                                A system performance report evaluation the
                                condition and performance of the transportation
                                system
                            </li>
                            <li>
                                Operational and management strategies to improve
                                the performance of existing transportation
                                facilities to relieve vehicular congestion and
                                maximize the safety and mobility of people and
                                goods
                            </li>
                            <li>
                                Assessment of capital investment and other
                                strategies to preserve the existing and
                                projected future metropolitan transportation
                                infrastructure, prove for multimodal capacity
                                increase based on regional priorities and need,
                                and reduce the vulnerability of the existing
                                transportation infrastructure to natural
                                disasters.
                            </li>
                            <li>
                                Transportation and transit enhancement
                                activities
                            </li>
                            <li>
                                A discussion of types of potential environmental
                                mitigation activities and potential areas to
                                carry out these activities, including activities
                                that may have the greatest potential to restore
                                and maintain the environmental functions afected
                                by the transportation plan
                            </li>
                            <li>
                                A fscally constrained fnancial plan that
                                demonstrates how the adopted transportation plan
                                can be implemented
                            </li>
                        </List>
                    </PageSection>

                    <PageSection id="section6">
                        <SectionHeader>
                            The Infrastructure Investment and Jobs Act (IIJA)
                        </SectionHeader>
                        <Paragraph>
                            The Infrastructure Investment and Jobs Act (IIJA,
                            also known as the Bipartisan Infrastructure Law),
                            signed into law on November 6, 2021, is the most
                            recent surface transportation infrastructure
                            planning and investment legislation. The IIJA
                            represents a historic investment in the nation’s
                            infrastructure, adding around $550 billion in new
                            Federal infrastructure investment, including $350.8
                            billion for highway programs and $89.9 billion for
                            public transit. Priorities include focusing on
                            climate change mitigation, resilience, equity, and
                            safety for all users, as well as ensuring every
                            American has access to reliable high-speed broadband
                            internet. The IIJA maintains the same requirements
                            for MPOs from previous authorizations, including the
                            FAST- Act most recently and Moving Ahead for
                            Progress in the 21st Century (MAP21), while adding
                            an increased emphasis in coordinating transportation
                            planning with housing, complete streets, and
                            encouraging MPOs to use social media and other
                            webbased tools to drive public participation.
                        </Paragraph>

                        <SubHeading>
                            HOW TRANSPORTATION PROJECTS GET FUNDED
                        </SubHeading>
                        <Paragraph>
                            Most major transportation projects are funded
                            through a mix of federal, state, and ocal funding.
                            Likewise, projects can have a variety of lead
                            agencies that are responsible for planning,
                            construction, and maintenance, including
                            communities, counties, and states. To ensure a
                            unifed metropolitan transportation planning process,
                            FHWA’s Metropolitan Planning Program provides
                            funding for MPOs to act as a coordinating agency.
                            The MPO works with all stakeholders involved on
                            projects to ensure a seamless transportation network
                            and logical timing of project construction, and to
                            eliminate duplicity between communities. Agreed upon
                            projects must frst be identifed in the RTP and are
                            then added to the Transportation Improvement Program
                            (TIP). Projects that are not in the TIP cannot
                            receive federal transportation funding.
                        </Paragraph>

                        <Image />

                        <SubHeading>A PERFORMANCE-BASED APPROACH</SubHeading>
                        <Paragraph>
                            In 2012, MAP-21 introduced a requirement for MPOs to
                            take a performancebased approach to planning and
                            programming to address challenges facing the
                            national transportation system, including safety,
                            infrastructure condition, and system reliability.
                            The IIJA continues this transition towards a
                            performancebased, outcome-driven approach. This
                            performance-based approach will produce measurable
                            outcomes that can infuence future funding decisions.
                            Figure 1-b illustrates the MPO’s performance-based
                            planning and programming framework. The MPO began
                            tracking performance INTRODUCTION measures in 2016
                            in an annual Performance Measures Report, which the
                            MPO will be transitioning into an interactive online
                            data dashboard. The measures include all federal
                            performance measures as well as additional measures
                            aligned to the RTP goals. The federal measures are
                            tracked in the RTP System Performance Report in
                            Appendix B, as well as in in the TIP along with an
                            evaluation of projects that will help achieve the
                            MPO federal measure targets.
                        </Paragraph>
                    </PageSection>

                    <PageSection id="section7">
                        <SectionHeader>The Planning Process </SectionHeader>
                        <Paragraph>
                            The Connect Greater Madison 2050 Regional
                            Transportation Plan was developed over a two-year
                            time period beginning in late 2020. Work to prepare
                            for the planning process started well before this,
                            including a household travel survey conducted in
                            2017 and development of an updated, improved
                            regional travel forecast model in 2019-’21. The
                            planning process concluded in the spring of 2022
                            following a phased approach, with the public
                            engagement process occurring concurrently. MPO staf
                            regularly consulted the Policy Board and TCC on plan
                            development activities throughout the whole process.
                        </Paragraph>

                        <SubHeading>
                            PHASE 1: EXISTING CONDITIONS ANALYSIS, GROWTH
                            FORECASTS, AND GOAL DEVELOPMENT
                        </SubHeading>

                        <Paragraph>
                            In late 2020 MPO staf began to collect data and
                            analyze existing conditions. Data trends related to
                            demographics, the economy, land use development,
                            travel, and transportation system performance were
                            examined and their relationship to plan goals and
                            performance measures established. These baseline
                            conditions formed the foundation for the rest of the
                            RTP. Local municipal staf completed a survey to
                            identify their community’s top short- and long-term
                            transportation priorities, future planning
                            activities, and biggest transportation challenges or
                            concerns. MPO staf worked with Capital Area Regional
                            Planning Commission (CARPC) staf to prepare county
                            and municipal population, household, and employment
                            forecasts. The MPO then coordinated the work of
                            CARPC and City of Madison planning staf in preparing
                            future year 2035 and 2050 growth scenarios, which
                            were used to forecast future trafc zone level
                            households and employment by general type used in
                            the regional travel model. The frst round of public
                            involvement activities during this phase included a
                            public survey, focus group discussions with
                            traditionally underrepresented populations, and
                            online public involvement meetings which in turn
                            helped refne the plan goals and begin identifying
                            critical needs. A dedicated RTP website was launched
                            during this time to publish data and other fndings,
                            as well as to provide opportunities for public
                            comment.
                        </Paragraph>

                        <SubHeading>
                            PHASE 2: DEVELOPMENT AND PRIORITIZATION OF
                            IMPROVEMENT PROJECTS AND STRATEGIES
                        </SubHeading>

                        <Paragraph>
                            Beginning in late summer of 2021, MPO staf analyzed
                            the existing conditions in combination with trafc
                            forecasts to conduct gap and need analyses. These
                            analyses were used to develop improvement strategies
                            and projects consistent with plan goals, and
                            determine the capital requirements, operational
                            strategies, and land use policy changes that may be
                            needed in combination with these strategies and
                            projects. An online interactive map commenting tool
                            was launched to allow the public to identify specifc
                            needs, barriers or concerns, as well as aspects of
                            the current transportation system that they thought
                            were doing well, followed by a second round of
                            online public involvement meetings presenting draft
                            facility recommendations. The public involvement
                            meetings sought feedback on the recommendations that
                            MPO staf developed, as well as suggestions for
                            additional projects. Feedback from these activities
                            helped inform the prioritization of projects and
                            strategies.
                        </Paragraph>

                        <SubHeading>
                            PHASE 3: FINANCIAL CAPACITY ANALYSIS AND DRAFT PLAN
                        </SubHeading>

                        <Paragraph>
                            In early 2022 staf completed a fnancial capacity
                            analysis. This analysis determined which projects
                            and strategies from the prioritized list would be
                            included in the plan based on available funding,
                            ensuring that any recommendations made in the RTP
                            could be completed between now and 2050 using cost
                            and revenue estimates. Once prioritized, the draft
                            RTP was completed. During this same period
                            environmental justice and environmental analyses of
                            the draft RTP were completed to evaluate the impacts
                            of the RTP on minority, low-income, and autoless
                            households and screen major projects for potential
                            environmental impacts. It should be noted that
                            environmental justice (EJ) analysis was conducted
                            and equity considered throughout the planning
                            process with projects identifed and prioritized
                            based on their importance in serving the Tier 1 and
                            2 EJ areas identifed at the beginning of the
                            process. A fnal round of online public meetings was
                            held. The draft RTP was presented to the TCC and the
                            MPO board and made available for public comment.
                            Feedback from the TCC, board, and public was
                            incorporated into the fnal RTP, which was approved
                            by the MPO board on May 11, 2022 following an ofcial
                            public hearing.
                        </Paragraph>

                        <SubHeading> PHASE 4: PLAN IMPLEMENTATION</SubHeading>
                        <Paragraph>
                            The MPO adoption of the RTP demonstrates regional
                            agreement on the transportation vision for the
                            metropolitan area. Upon adoption, the RTP
                            implementation and performance measurement will
                            begin. Implementation can include building new
                            facilities, adding transit service, implementing
                            trafc and transit operational improvements, adding
                            new trails, adopting policies, and completing
                            further studies to refne improvements or strategies
                            recommended in the plan.
                        </Paragraph>

                        <Image />

                        <SubHeading>
                            A COORDINATED APPROACH TO TRANSPORTATION AND LAND
                            USE PLANNING
                        </SubHeading>

                        <Paragraph>
                            One of the greater Madison region’s key challenges
                            is growth. With Dane County’s population projected
                            to grow by 178,000 between 2020 and 2050, our
                            choices about how and where people live, work, and
                            travel set the stage for future quality of life and
                            achievement of other regional goals. This requires
                            the coordination and integration of transportation
                            and land use planning. The Capital Area Regional
                            Planning Commission (CARPC) is the MPO’s partner
                            INTRODUCTION agency charged with regional land use
                            and areawide water quality management planning.
                            CARPC developed a Regional Development Framework
                            (RDF) is to serve as an advisory resource and guide
                            for local planning and development. The framework
                            addresses regional challenges and aligns local plans
                            and policies with shared regional goals. It also
                            fulflls statutory requirements for RPCs to prepare
                            and adopt a master plan for the physical development
                            of the region. This framework was developed in
                            coordination with the RTP process, with the
                            recommended growth scenario taking into
                            consideration RTP goals and policies along with
                            local comprehensive plans. The recommended growth
                            scenario developed for the RDF informed the travel
                            forecasts the RTP relies on for the facility,
                            service, and other recommendations to accommodate
                            that future travel demand. As a result, the RDF and
                            RTP are mutually supportive.
                        </Paragraph>

                        <SubHeading>
                            THE COVID-19 GLOBAL PANDEMIC AND ITS POTENTIAL
                            LONG-TERM IMPACT ON TRAVEL TRENDS
                        </SubHeading>
                        <Paragraph>
                            The outbreak of the COVID-19 global pandemic began
                            just prior to the ofcial start of the RTP planning
                            process. The pandemic has introduced much
                            uncertainty due to its potential long-term impact on
                            land use development and travel trends. While
                            nationally vehicle miles of travel (VMT) has almost
                            returned to pre-pandemic levels, trafc volumes on
                            many major roadways in the Madison area are still
                            down around 10%. In addition, travel has become more
                            spread out throughout the day with weekday peak
                            period volumes down to 60%-70% of prepandemic levels
                            on some roadways. A major factor in this is the
                            continued high level of part-time and full-time
                            teleworking, which employers expect to continue
                            according to a survey conducted by the MPO in 2021.
                            Because roadways are designed to meet peak demand,
                            this could impact capacity needs in the future. At
                            the same time, transit service demand may be more
                            spread out through the day. In addition, there are
                            new technologies such as connected, autonomous
                            vehicles and shared mobility services that are
                            likely to have signifcant impacts on travel and the
                            transportation system in the future. This highlights
                            the importance of updating the RTP every fve years
                            and conducting scenario planning to take into
                            account the uncertainty regarding the future. The
                            MPO intends to use its regional travel forecast
                            model, which was developed based on pre-pandemic
                            household travel characteristics and regional travel
                            patterns, to modify inputs to test the potential
                            impacts of scenarios such as continued high levels
                            of teleworking, more online shopping, shared
                            mobility services, and driverless vehicles.
                        </Paragraph>
                        <Image />
                    </PageSection>

                    <PageSection id="section8">
                        <SectionHeader>
                            Relationship to Other Plans, Reports, and Studies
                        </SectionHeader>

                        <Paragraph>
                            Transportation planning is a continuous process. The
                            Regional Transportation Plan 2050 (RTP) builds upon
                            a number of prior and current planning eforts,
                            studies, reports, and already programmed
                            transportation projects. Where applicable,
                            recommendations and policies are incorporated from
                            current plans including (but not limited to):
                        </Paragraph>

                        <SubHeading> MPO PLANS </SubHeading>

                        <b>2050 Regional Transportation Plan (2017) </b>
                        <Paragraph>
                            The MPO’s previous RTP. The 2050 Regional
                            Transportation Plan was a major update to the 2035
                            RTP update, extending the planning horizon to 2050
                            and accounting for new and modifed land use plans,
                            growth and development, new household, employment
                            and trafc forecasts, and other changes and trends
                            afecting the system since the RTP 2035 Update was
                            adopted in 2012. As with all RTPs, it is an
                            integrated, multi-modal system plan that provides
                            the overall framework for transportation planning
                            and investment decision making in the region. The
                            2050 RTP was amended three times to add the Beltline
                            Flex Lanes project, the East-West Bus Rapid Transit
                            (BRT) project, and the reconstruction of U.S.H. 51
                            between Stoughton and McFarland to the ofcial,
                            fnancially constrained plan.
                        </Paragraph>

                        <b>Bicycle Transportation Plan (2015) </b>
                        <Paragraph>
                            The Bicycle Transportation Plan for the Madison
                            Metropolitan Area and Dane County is a comprehensive
                            bicycle plan to serve as a blueprint for continuing
                            to improve bicycling conditions and increase
                            bicycling levels throughout Dane County. The
                            planning horizon is 2050. It provides a framework
                            for cooperation between state agencies, Dane County,
                            and local governments in planning for and developing
                            bicycle facilities and programs. It is intended to
                            educate citizens and policy makers on bicycle
                            transportation issues and the needs of bicyclists as
                            well as present resources for planning, designing,
                            and maintaining bicycle facilities. The plan is a
                            component of the the MPO’s RTP. The facility plans
                            have been updated as part of the RTPs
                        </Paragraph>
                        <b>
                            2022-2026 Transportation Improvement Program (2021){" "}
                        </b>
                        <Paragraph>
                            The Transportation Improvement Program (TIP), which
                            the MPO updates annually, is a coordinated listing
                            of short-range transportation improvement projects
                            anticipated to be undertaken in the next fve-year
                            period. The TIP is the mechanism by which the
                            long-range RTP is implemented, and represents the
                            transportation improvement priorities of the region.
                            Projects within the MPO Planning Area must be
                            included in the TIP in order to be eligible to
                            receive federal funding assistance. Outer county
                            area projects are also listed for information and
                            coordination purposes. The list is multi-modal. In
                            addition to streets/ roadways, it includes transit,
                            pedestrian and bicycle, parking, and
                            rideshare/transportation demand management projects.
                        </Paragraph>

                        <b> The MPO Performance Measures Report (2019) </b>
                        <Paragraph>
                            The Performance Measures Report (PMR) analyzes
                            progress towards meeting regional transportation
                            goals by assigning measures to RTP goals. The
                            report, which is released annually, is used along
                            with the TIP and RTP in the new performance-based
                            planning process. The annual performance measures
                            report was temporarily paused in 2020 due to the
                            disruption of the COVID-19 pandemic; monitoring will
                            resume in 2022 and be moved to an online platform.
                        </Paragraph>

                        <b> 2013-2017 Transit Development Plan (2013) </b>
                        <Paragraph>
                            The Transit Development Plan (TDP) for the Madison
                            Urban Area is a short- to mediumrange strategic plan
                            intended to identify transit needs and proposed
                            improvements and studies over a fve-year planning
                            horizon. The MPO is responsible for developing and
                            maintaining the TDP. The MPO works in close
                            cooperation with Metro Transit and other transit
                            providers, funding partners, and jurisdictions in
                            the Madison area to develop the plan. The TDP is
                            developed within the overall framework of the
                            long-range RTP. An update to the TDP was put on hold
                            due to the Metro Transit Network Redesign Study, but
                            work on an update will resume in late 2022.
                        </Paragraph>

                        <b> Congestion Management Process (2022) </b>
                        <Paragraph>
                            Metropolitan Planning Organizations with planning
                            area populations over 200,000 are designated as
                            Transportation Management Areas (TMA) by FHWA. In
                            these areas, a Congestion Management Process (CMP)
                            is required to be developed and implemented as an
                            integral part of the metropolitan planning process.
                            The CMP is an 8-step process, as follows:
                        </Paragraph>

                        <List>
                            <li> Develop Congestion Management Objectives; </li>
                            <li>Identify Area of Application; </li>
                            <li> Defne System or Network of Interest; </li>
                            <li> Develop Performance Measures; </li>
                            <li>
                                {" "}
                                Institute System Performance Monitoring Plan;{" "}
                            </li>
                            <li> Identify and Evaluate Strategies; </li>
                            <li>
                                Implement Selected Strategies and Manage
                                Transportation System; and
                            </li>
                            <li> Monitor Strategy Efectiveness. </li>
                        </List>

                        <Paragraph>
                            The MPO developed its frst CMP in 2011 with the
                            intent to address congestion based on a
                            cooperatively developed and implemented
                            metropolitan-wide strategy that provides for the
                            safe and efective management and operation of the
                            multimodal transportation system. Strategies from
                            the CMP are incorporated into the RTP and TIP.
                            Strategies that manage travel demand, reduce single
                            occupant vehicle (SOV) travel, and improve
                            transportation system management and operations are
                            all to be considered, as well as those that
                            explicitly address bicycling and walking.
                        </Paragraph>

                        <b>Madison Bus Rapid Transit </b>
                        <Paragraph>
                            The City of Madison is working to implement a Bus
                            Rapid Transit (BRT) system (Metro Rapid) as part of
                            an efort to improve its existing transit system and
                            reduce travel times across the region. The frst
                            phase of Metro Rapid will consist of corridor that
                            will operate east/west through Madison’s downtown
                            and the University of Wisconsin campus areas
                            connecting the West and East Towne areas; a
                            north/south second phase is planned to follow the
                            implementation of phase 1 in 2023-24.
                        </Paragraph>

                        <b>
                            Metro Transit Network Redesign (Anticipated plan
                            completion 2022)
                        </b>
                        <Paragraph>
                            The Metro Transit Network Redesign will design a
                            route system that will better meet the needs of
                            Madison area residents and businesses by increasing
                            access and frequency, decreasing travel times, and
                            improving the quality of transit riders’ experience.
                            The Network Redesign will also eliminate routes that
                            will become redundant with the implementation of
                            Metro Rapid, and is planned for implementation in
                            summer 2023.
                        </Paragraph>

                        <Image />

                        <b>Public Participation Plan (2021) </b>
                        <Paragraph>
                            This plan outlines the public participation goals
                            and techniques to be used in the Greater Madison
                            MPO’s transportation planning and programming
                            processes. This plan refects the MPO’s ongoing
                            commitment to actively evaluate and improve the
                            public involvement process and to ensure compliance
                            with updated Federal requirements
                        </Paragraph>

                        <SubHeading>
                            STATE DOT PLANS AND STUDIES{" "}
                        </SubHeading>
                        <b> Connect 2050 (2022) </b>
                        <Paragraph>
                            Connect 2050 is WisDOT’s long-range transportation
                            policy plan for the state of Wisconsin, which will
                            guide WisDOT’s decision-making about changes to and
                            investments in our statewide system for the next 30
                            years. It sets goals and objectives that apply to
                            all the modes and means of transportation in
                            Wisconsin including roads, transit, biking, walking,
                            rail, aviation and water transport. Connect 2050 is
                            intended to set the long-range vision for the
                            state’s transportation system, while WisDOT’s other
                            plans (as partially listed below) and technical
                            reports will identify how Connect 2050’s goals will
                            be met.
                        </Paragraph>

                        <b> Wisconsin State Freight Plan (2018) </b>
                        <Paragraph>
                            The State Freight Plan provides a vision for
                            multimodal freight transportation and positions the
                            state to remain competitive in the global
                            marketplace. The Freight Plan links transportation
                            investments to economic development activities,
                            places Wisconsin within the national and global
                            context, and guides implementation.
                        </Paragraph>

                        <b>
                            Wisconsin Rail Plan 2050 (Anticipated Early 2022){" "}
                        </b>
                        <Paragraph>
                            The Wisconsin State Rail Plan 2050 will include
                            policies for railroad crossings, freight rail,
                            Wisconsin’s state-owned rail system, long distance
                            passenger rail, intercity rail, and commuter rail.
                            The plan will specifcally discuss rail data trends,
                            existing and possible future service levels, rail
                            system conditions, and commodity freight movements.
                        </Paragraph>

                        <b>Transportation Asset Management Plan (2019) </b>
                        <Paragraph>
                            The TAMP outlines WisDOT’s investment strategy over
                            the next ten years (to 2029) to keep the National
                            Highway System safe, efcient and in a state of good
                            repair.
                        </Paragraph>

                        <b>
                            {" "}
                            WisDOT SW Region Park-and-Ride System Study (2015){" "}
                        </b>

                        <Paragraph>
                            The Wisconsin Department of Transportation (WisDOT)
                            Southwest Region initiated the Southwest Region
                            Park-and-Ride System Study to create more efcient
                            and sustainable commuting choices and reduce trafc
                            volumes on the state highway system. Parkand-ride
                            system planning work begins with a location
                            evaluation tool. The frst step in the location
                            selection process is identifying areas where
                            park-and-ride lots may be practical, with potential
                            to attract users and meet WisDOT’s park-and-ride
                            program goals. The purpose of this report is to
                            present the screening methodology for assessing the
                            most efcient locations for future park-andride
                            facilities in the sixteen county study area of the
                            Southwest Region.
                        </Paragraph>

                        <b>Major Corridor Studies </b>
                        <Paragraph>
                            Major highway development projects are generally the
                            most complex and costly projects initiated by the
                            Wisconsin Department of Transportation (WisDOT).
                            They are intended to identify long-term solutions to
                            the most serious defciencies on highly traveled
                            segments of the highway system. They are currently
                            shown in the RTP as studies, however when the fnal
                            design concepts and construction funding is approved
                            they will be amended into the RTP.
                        </Paragraph>

                        <List>
                            <li>
                                <b>I-39/90 Study - </b> The Interstate study
                                will analyze the existing and future conditions
                                of the I-39/90/94 corridor, testing several
                                possible transportation improvements and their
                                impact on future corridor conditions.
                            </li>
                            <li>
                                <b>Madison Beltline Study (ongoing) -</b> The
                                Madison Beltline Planning and Environmental
                                Linkages (PEL) Study is a planning-level
                                analysis of the efectiveness of all possible
                                solutions to the Madison Beltline’s current and
                                long-term needs; in particular, determining to
                                what extent possible solutions would address the
                                existing safety, capacity and geometric issues
                                as well as meet identifed study objectives. In
                                addition to improvements to the physical
                                Beltline or crossings of the Beltline, changes
                                or improvements to alternate modes of travel,
                                other area transportation corridors, and
                                existing Beltline connections to the adjacent
                                road network are being analyzed. Following the
                                completion of the PEL Study in 2023 the
                                environmental study process under NEPA will be
                                initiated to further analyze and refne the
                                highest priority improvement concepts selected
                                as part of the preferred strategy package.
                                Following selection of a preferred alternative
                                project and approval of funding fnal design will
                                begin
                            </li>
                            <li>
                                <b>
                                    US 51 Stoughton Road Corridor Study
                                    (ongoing) -
                                </b>
                                - The study limits extend from Terminal
                                Drive/Voges Road in the village of McFarland to
                                the State Trunk Highway (STH) 19 interchange in
                                the village of DeForest. The study passes
                                through the city of Madison, the city of Monona,
                                and the town of Blooming Grove in Dane County.
                                This study will develop and evaluate long-term
                                alternatives to address the safety, congestion,
                                and gaps in the bicycle and pedestrian facility
                                network along this corridor.
                            </li>
                        </List>
                        <SubHeading>REGIONAL PLANS </SubHeading>
                        <b> CARPC Regional Development Framework </b>
                        <Paragraph>
                            CARPC has prepared an update, known as the Regional
                            Development Framework (RDF), to the Vision 2020:
                            Dane County Land Use and Transportation Plan. The
                            Framework draws on public priorities, local
                            government input, and growth projections to
                            establish goals, objectives, and strategies for
                            accommodating future growth in the Dane County
                            region. The Framework is designed to serve as a
                            guide for incorporating big picture goals into
                            individual decisions about where and how to grow.
                            The strategies outlined in the Framework will
                            promote growth that:
                        </Paragraph>

                        <List>
                            <li>
                                Reduces greenhouse gas emissions and fosters
                                community resilience to climate change
                            </li>
                            <li>
                                Increases access to jobs, housing and services
                                for all people
                            </li>
                            <li>
                                Conserves farmland, water resources, natural
                                areas, and fscal resources
                            </li>
                        </List>

                        <Paragraph>
                            <b>
                                Conserves farmland, water resources, natural
                                areas, and fscal resources
                            </b>
                        </Paragraph>
                        <List>
                            <li>
                                An Eastern Corridor Area between County Trunk
                                Highway (CTH) M and CTH Q;
                            </li>
                            <li>
                                A broader Western Corridor Area between the Town
                                of Westport / Town of Springfeld line and U.S.
                                Highway 12, and;
                            </li>
                            <li>
                                A transition area to connect the Eastern
                                Corridor and Western Corridor areas.
                            </li>
                        </List>
                        <Paragraph>
                            Additionally, the study recommended a natural
                            resource area boundary to protect the environmental,
                            water, scenic, and recreation resources in the North
                            Mendota area. The plan was adopted and incorporated
                            into the Dane County Parks and Open Space Plan. The
                            county has moved forward with the eastern corridor
                            on existing alignment with a project to reconstruct
                            and expand that section of CTH M to a four-lane
                            divided crosssection with associated
                            bicycle/pedestrian improvements. That project,
                            funded by the MPO, is scheduled for construction in
                            2023- ‘24. No further work has been completed on the
                            western corridor on new alignment due in part to the
                            very large cost and difcult issues for such a
                            project.
                        </Paragraph>

                        <b>Dane County Climate Action Plan (2020) </b>
                        <Paragraph>
                            Dane County has created a sciencebased plan to
                            achieve “deep decarbonization” that is consistent
                            with the latest recommendations from the
                            <SectionLink
                                link="https://www.ipcc.ch/sr15/"
                                title="Intergovernmental Panel on Climate
Change (IPCC). "
                            />
                            Under the CAP Dane County aims to reduce greenhouse
                            gas emissions (GHG) 50% county-wide by 2030 and put
                            the county on a path to be carbon-neutral by 2050.
                            Visit the Climate Action Plan web page
                            <SectionLink
                                link="https://daneclimateaction.org/climate-action-plan"
                                title={"Here"}
                            />
                        </Paragraph>

                        <b>
                            Dane County Natural Hazard Mitigation Plan (2017;
                            currently being updated)
                        </b>
                        <Paragraph>
                            The plan outlines a strategy with specifc programs
                            and policies that can be implemented by Dane County
                            and local units of government within Dane County to
                            reduce the impact of natural hazards on people,
                            structures and infrastructure, and the natural
                            environment. A wide range of hazard mitigation
                            projects are being considered, from small individual
                            actions to large-scale community projects. This plan
                            is recognized by the Federal Emergency Management
                            Agency (FEMA) as the County’s ofcial plan, enabling
                            the County to apply for grants to implement projects
                            and programs identifed in the plan.
                        </Paragraph>

                        <b>
                            Madison Region Economic Partnership (MadREP) Advance
                            Now 2.0 (2019)
                        </b>
                        <Paragraph>
                            The Advance Now 2.0 strategy represents a refreshed
                            blueprint to ensure that the Madison Region
                            continues its trajectory as a national community of
                            choice. The process will also serve as MadREP’s
                            fve-year update to the Comprehensive Economic
                            Development Strategy (CEDS) process as required by
                            the U.S. Economic Development Administration (EDA).
                            The report notes “when asked to name the Madison
                            Region’s top competitive issue, a surprising number
                            of top leaders identifed the need for regional
                            transit as their number one concern.”
                        </Paragraph>
                        <Image />

                        <SubHeading>LOCAL PLANS </SubHeading>
                        <Paragraph>
                            Local reports, documents, and other studies relevant
                            to transportation, land use, and economic
                            development in the region were also reviewed during
                            the development of the RTP. These documents include
                            community comprehensive plans, land use plans,
                            corridor plans, and more.
                        </Paragraph>

                        <b>
                            Madison in Motion – Sustainable Madison
                            Transportation Master Plan (2017)
                        </b>
                        <Paragraph>
                            Madison in Motion, the City of Madison’s Sustainable
                            Madison Transportation Master Plan, is intended to
                            guide future transportation decisions in Madison, in
                            order to help make Madison a more walkable, bikeable
                            and transit-oriented city. Madison in Motion builds
                            on adopted transportation and land use plans to
                            improve coordination, connectivity and
                            transportation choice while establishing a framework
                            to strengthen neighborhoods with context-appropriate
                            future development.
                        </Paragraph>
                    </PageSection>

                    <PageSection id="section9">
                        <SectionHeader>
                            What We Heard: Stakeholder Involvement and Public
                            Outreach
                        </SectionHeader>
                        <Paragraph>
                            The intent of the RTP is to ofer a vision and
                            blueprint for the future of the transportation
                            network in the Madison area. To develop this vision
                            and fnd consensus between competing interests, it is
                            important to have a robust dialogue between the
                            community, stakeholders, and local ofcials. The MPO
                            staf worked to facilitate opportunities for all
                            interested parties to participate in the planning
                            process and attempted to make that process more
                            inclusive for those that may not feel comfortable or
                            have the time for traditional forms of
                            participation. The public involvement process was
                            broken down into three phases
                        </Paragraph>

                        <List>
                            <li>
                                Phase One: Introduction to the Planning Process
                            </li>
                            <li> Phase Two: Review of Existing Conditions </li>
                            <li>
                                Phase Three: Presentation of the Draft Plan and
                                Recommendations
                            </li>
                        </List>

                        <Paragraph>
                            Due to Covid-19 safety precautions, all public
                            involvement was conducted virtually. Key public
                            involvement activities are summarized below. In
                            addition to the activities described below, the MPO
                            posted RTP updates frequently through social media,
                            in the MPO Newsletter, as well as press releases at
                            key RTP development stages. Specifc materials
                            delivered during the involvement process can be
                            found in Appendix E.
                        </Paragraph>
                        <Image />

                        <SubHeading>
                            CONNECT GREATER MADISON RTP WEBSITE
                        </SubHeading>
                        <Paragraph>
                            At the start of the planning process, the MPO worked
                            with a consultant to create an interactive website
                            for the RTP in an efort to increase public
                            participation and interest in the planning process.
                            The website
                            <SectionLink
                                link="https://greatermadisonmpo.konveio.com/"
                                title="greatermadisonmpo.konveio.
com"
                            />
                            provided project news, descriptions of the plan
                            development process, a listing of RTP related boards
                            and committees and corresponding membership, a
                            timeline of public engagement activities and
                            meetings, links to related plans and studies,
                            information about the MPO, and interactive tools at
                            specifc points in the planning process. The website
                            also included Spanish translation of key plan
                            information.
                        </Paragraph>

                        <SubHeading>ONLINE SURVEY </SubHeading>
                        <Paragraph>
                            An online public survey was launched in June of 2021
                            to kick of Phase One of public involvement for the
                            RTP. The survey asked participants to rate current
                            conditions of the transportation system, identify
                            improvement needs, important transportation issue
                            faction the region, and support for diferent
                            policies and funding options. A total of 274
                            participants completed the survey, which was
                            available in both English and Spanish. Key themes
                            from the responses include:
                        </Paragraph>

                        <List>
                            <li>
                                A need for greater connectivity; the region is
                                well accessed by automobile, but responses
                                indicated a need for expanding public transit
                                service and additional the bike and pedestrian
                                infrastructure.
                            </li>
                            <li>
                                Prioritize maintaining and improving existing
                                infrastructure.
                            </li>
                            <li>
                                Improve safety for all users of the
                                transportation system.
                            </li>
                            <li> Reduce the impact of climate change. </li>
                        </List>

                        <SubHeading>FOCUS GROUPS </SubHeading>
                        <Paragraph>
                            The MPO partnered with area community organizations,
                            including the Bayview Community Foundation, Latino
                            Academy of Workforce Development, and Sun Prairie’s
                            Neighborhood Navigators to identify focus group
                            participants from demographic groups that are
                            typically under-represented in public participation
                            on plan development. MPO staf heard a lot about the
                            afordability, convenience, and reliability of
                            transportation options during these focus group
                            discussions, including:
                        </Paragraph>

                        <List>
                            <li>
                                The trade-of between greater accessibility by
                                personal vehicle and the high expense of car
                                ownership
                                <HighlightedText>
                                    “My car payment is my biggest expense.
                                    Having a car for regular use means that I
                                    have to sacrifce a lot of things in the rest
                                    of my life. The money we spend to have that
                                    car so that we can have fexibility means
                                    that we do not have money to spend on other
                                    things. For example, we can’t go on trips,
                                    spend money on meals, or do fun extra
                                    activities.”
                                </HighlightedText>
                            </li>
                            <li>
                                The need for more frequent, accessible, and
                                convenient public transit
                                <HighlightedText>
                                    “The bus is not much available at night and
                                    during the weekends. [The Latino community]
                                    does not work from 9 am to 5 pm. Our
                                    community works from 4 am to 1 pm, 1 pm to 8
                                    pm, 8 pm to 3 am and there is no public
                                    transportation to meet those diferent
                                    schedules.”
                                </HighlightedText>
                            </li>
                            <li>
                                Transportation barriers make it difcult to
                                meaningfully engage with family and community.
                                <HighlightedText>
                                    “It is hard to be involved with kids’ after
                                    school activities and things like
                                    parentteacher conferences due to
                                    transportation limitations.”
                                </HighlightedText>
                                <HighlightedText>
                                    “I would like to be a part of the community
                                    and go to farmers markets, make trips to
                                    Madison and go to other events, but I cannot
                                    due to limited bus service.”
                                </HighlightedText>
                            </li>
                            <li>
                                Focus group participants with mobility
                                limitations expressed challenges to accessing
                                public transit and using sidewalk networks due
                                to physical challenges or discomfort/lack of
                                knowledge about options.
                            </li>
                        </List>

                        <SubHeading>INTERACTIVE ONLINE MAPS </SubHeading>
                        <Paragraph>
                            As part of Phase Two of public participation for the
                            RTP update, the MPO invited the public to provide
                            feedback through interactive maps on the existing
                            transportation system in the greater Madison area.
                            The interactive mapping tool allowed participants to
                            post comments on the network, identifying specifc
                            needs, barriers, or concerns, as well as facilities
                            that work particularly well that should be
                            duplicated elsewhere. Over 1,300 map comments were
                            received, identifying connectivity, safety,
                            operational, and maintenance comments and concerns
                            for all modes of transportation. As part of Phase
                            Three an interactive map including all recommended
                            future transportation improvements was made
                            available for public comment. The public was invited
                            to comment on how well the proposed future
                            transportation network would serve their needs and
                            the needs of future growth as we work toward
                            regional livability goals. Over 160 comments were
                            submitted on the future network.
                        </Paragraph>

                        <Image />

                        <SubHeading>PUBLIC INVOLVEMENT MEETINGS </SubHeading>
                        <Paragraph>
                            A series of three Public Involvement Meetings (PIMs)
                            were held at key points in the RTP development
                            process. The PIMs allowed MPO staf to present and
                            illustrate information, alternatives, and plan
                            recommendations, answer questions, and are a key
                            method for receiving public comment. Each PIM series
                            included a lunchtime and evening presentation. The
                            meetings were recorded and posted on the RTP website
                            along with all meeting materials so anyone who could
                            not attend the live meetings could watch later.
                            Press releases were developed to announce each PIM,
                            notice was emailed out to the entire MPO contact
                            list and with a request that community organizations
                            share the announcement with their members, and the
                            PIMs were posted through social media.
                        </Paragraph>

                        <List>
                            <li>
                                Phase One: Introduction to the Planning Process-
                                June 17th and 24th, 2021
                            </li>
                            <li>
                                The June 17th meeting included a joint
                                presentation on the CARPC Regional Development
                                Framework planning process to emphasis the
                                regional transportation and land use planning
                                connections
                            </li>
                            <li>
                                Phase Two: Existing Conditions- November 11th
                                and 16, 2021
                            </li>
                            <li>
                                Phase Three: Recommendations- April 7th and
                                12th, 2022
                            </li>
                            <li>
                                {" "}
                                Public Hearing on Draft RTP- May 11th, 2022{" "}
                            </li>
                        </List>

                        <Image />
                    </PageSection>
                </SectionWrapper>
            </PageDisplay>
        </>
    );
}

export default Introduction;
