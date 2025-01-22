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
} from "../components/common";

function Summary() {
    const sections = [
        {
            to: "section1",
            title: "The Connect Greater Madison 2050 Regional Transportation Plan",
        },
        {
            to: "section2",
            title: " How Will the Region Grow",
        },
        {
            to: "section3",
            title: " Our Transportation System Tomorrow: 2050",
        },
    ];

    return (
        <>
            <PageHeader>
                The Connect Greater Madison 2050 Regional Transportation Plan
            </PageHeader>
            <PageDisplay>
                <TableOfContent sections={sections} />

                <SectionWrapper>
                    <PageSection id="section1">
                        <SectionHeader>
                            The Connect Greater Madison 2050 Regional
                            Transportation Plan
                        </SectionHeader>

                        <Paragraph>
                            The Madison region’s transportation system provides
                            critical connections to commerce, employment, health
                            care, education and recreation, and supports the
                            quick and efcient movement of goods and services. A
                            successfully integrated multi-modal transportation
                            system provides multiple options for commuting,
                            shopping, leisure, and regional travel.
                            Transportation afects the afordability of
                            neighborhoods and communities, as well as the
                            viability of community and economic development. The
                            transportation network also directly infuences
                            quality of life in the region. Safe and efcient
                            regional transportation facilities ensure convenient
                            business and leisure travel, while an integrated,
                            well-connected network makes traveling by all modes
                            convenient and enjoyable. Streets can foster
                            community by acting as community gathering and
                            meeting spaces, and high quality transit and
                            bicycling options are important for employers
                            wanting to attract young, educated, skilled workers.
                            The Connect Greater Madison 2050 Regional
                            Transportation Plan (RTP) sets the framework for the
                            future of transportation in the Madison region,
                            identifying how the region intends to invest in the
                            transportation system to accommodate current travel
                            demands and future growth, while setting priorities
                            that balance limited funds. The plan includes
                            strategies to begin addressing important trends such
                            as rapidly evolving transportation technology and
                            the rise of teleworking, as well as strategies to
                            take action on critical issues, including equity and
                            climate change. It articulates how the region
                            intends to build, manage, and operate its
                            multi-modal transportation system to meet important
                            regional economic, transportation,development, and
                            sustainability goals. Finally, the plan ties goals
                            to performance measures and sets targets to track
                            progress. The RTP is a federally required long-range
                            (20+ years) transportation plan that guides
                            federally funded transportation investments. It must
                            be updated every fve years in order for the Madison
                            metropolitan area to be eligible to receive federal
                            funding for transportation projects. The Connect
                            Greater Madison 2050 plan update builds upon recent
                            and ongoing MPO, WisDOT, and local government
                            projects, plans, and studies, including an MPO trafc
                            safety study, WisDOT’s Beltline fex lane and U.S.
                            Highway 51 Highway projects, and Metro’s Bus Rapid
                            Transit project and Transit Network Redesign study.
                            Federal rules require the plan to be fnancially
                            constrained. The plan complements and supports the
                            Capital Area Regional Planning Commission’s (CARPC)
                            Regional Development Framework (RDF), including the
                            future growth scenario built using the RDF goals and
                            strategies and local plans. Together with the RDF,
                            Connect Greater Madison 2050 establishes a regional
                            vision for the future, and roadmap to achieving
                            regional transportation and land use goals through
                            strategic, coordinated investments.
                        </Paragraph>

                        <SubHeading>
                            THE ROLE OF THE GREATER MADISON MPO
                        </SubHeading>

                        <Paragraph>
                            The Greater Madison MPO is the federally designated
                            metropolitan planning organization (MPO) responsible
                            for overseeing the transportation planning
                            decision-making process for the Madison Metropolitan
                            Planning Area (Map EX-a). The goal of the MPO’s
                            planning and programming processes is to build
                            regional agreement on transportation investments
                            that balance roadway, public transit, bicycle,
                            pedestrian, and other transportation needs to
                            support regional land use, economic development, and
                            environmental goals.
                        </Paragraph>
                    </PageSection>

                    <PageSection id="section2">
                        <SectionHeader>
                            How Will the Region Grow?{" "}
                        </SectionHeader>
                        <Paragraph>
                            Demographic changes, commuting patterns, economic
                            shifts, and land use development patterns all
                            infuence the type, location, and amount of demand on
                            transportation facilities and services. It is
                            particularly important to plan for these changes in
                            the greater Madison region—the fastest growing and
                            changing region in the state. The Madison area is
                            outpacing the rest of the state in all key economic
                            indicators, including job creation, business growth,
                            and construction activity. The area’s population is
                            also growing more rapidly than the rest of the state
                            and becoming increasingly diverse.
                        </Paragraph>

                        <HighlightedText>
                            Dane County is expected to grow 35% by 2050, adding
                            nearly 195,000 additional people
                        </HighlightedText>

                        <SubHeading>POPULATION</SubHeading>
                        <Paragraph>
                            Between 2010 and 2020, while the state population
                            grew just 4%, Dane County grew by 15%—accounting for
                            more than one-third of the state’s total population
                            growth. This rapid population growth is expected to
                            continue over the coming decades, as shown in Figure
                            EX-a. Dane County is expected to gain nearly 100,000
                            households by 2050, with about two-thirds of those
                            expected in the City of Madison and its inner ring
                            of adjacent suburban communities
                        </Paragraph>

                        <SubHeading>EMPLOYMENT AND THE ECONOMY</SubHeading>

                        <Paragraph>
                            Dane County’s thriving and diverse economy has led
                            to one of the lowest unemployment rates in
                            Wisconsin, and this trend is expected to continue in
                            the coming years. Employment in the City of Madison
                            is expected to grow by more than 80,000 by 2050,
                            with the remainder of Dane County’s job growth is
                            expected to occur in suburban communities, as shown
                            in Map EX-c.
                            <HighlightedText>
                                Dane County is expected to add approximately
                                140,000 jobs by 2050
                            </HighlightedText>
                        </Paragraph>
                    </PageSection>

                    <PageSection id="section3">
                        <SectionHeader>
                            Our Transportation System Tomorrow: 2050
                        </SectionHeader>

                        <Paragraph>
                            What will our transportation system look like in
                            2050? What critical issues and drivers of change
                            will shape how our transportation system grows and
                            evolves? How do we leverage transportation to
                            achieve our longterm vision for the region? The way
                            our transportation system will evolve over the next
                            three decades will be shaped by countless public and
                            private decisions at all levels. Connect Greater
                            Madison 2050 includes a detailed analysis of current
                            and future transportation needs in the region,
                            taking into account critical issues that will need
                            to be considered in all levels of planning and
                            decision-making. Connect Greater Madison 2050
                            provides the framework for prioritizing multimodal
                            investments in the transportation system and
                            includes recommendations necessary to meet the
                            region’s mobility needs now and in the future,
                            supporting the region’s vision and goals.
                        </Paragraph>

                        <SubHeading>CRITICAL ISSUES </SubHeading>
                        <Paragraph>
                            As the greater Madison region’s transportation
                            system evolves, three critical issues that play an
                            important role in planning and decision-making
                            include equity, EXECUTIVE SUMMARY climate change,
                            and health. Each is directly afected by the benefts
                            and burdens of the transportation system, and each
                            deeply afects quality of life. Central to local and
                            regional agencies’ ability to act on equity, climate
                            change, and health is the efective coordination of
                            transportation and land use strategies that
                            naturally support these goals. The foundation for
                            this is community design that provides access for
                            all to transportation options, afordable housing,
                            and other basic needs, thereby fostering equitable
                            access to opportunity, wise use of natural
                            resources, and the ability of individuals to live
                            healthy, sustainable lives. Connect Greater Madison
                            2050 centers these critical issues at the heart of
                            its analysis of needs, recommendations, and
                            identifcation of multimodal investments.
                        </Paragraph>

                        <SubHeading>DRIVERS OF CHANGE </SubHeading>
                        <Paragraph>
                            Drivers of change are the new technologies and
                            technology-enabled ways of doing things that are
                            changing the way people use the transportation
                            system. Telework, e-commerce, shared mobility,
                            vehicle electrifcation, connected autonomous
                            vehicles, and other recent advancements in
                            intelligent transportation systems (ITS) represent
                            major departures from the 20th century status quo.
                            As they become more prevalent, and increasingly
                            intertwined, their impact on the transportation
                            system will be profound in ways not easy to predict.
                            The region’s transportation system will need to be
                            resilient and adaptable to these evolutionary
                            changes. The MPO will continue to stay up to date on
                            these rapid changes, and will evaluate a range of
                            scenarios using its regional travel forecast model
                            to inform current and future planning eforts,
                            including major regional corridor studies.
                        </Paragraph>

                        <SubHeading>
                            CONNECT GREATER MADISON 2050 RECOMMENDATIONS
                        </SubHeading>
                        <Paragraph>
                            Connect Greater Madison 2050 includes a detailed
                            analysis of the region’s transportation system needs
                            and a series of project and policy recommendations
                            with supporting actions for each mode of
                            transportation, including:
                        </Paragraph>
                        <List>
                            <li>Land use and Transportation Integration </li>
                            <li>Roadways </li>
                            <li>
                                Transportation System Management and Operations
                                (TSMO) and Technology
                            </li>
                            <li>Public Transit </li>
                            <li> Specialized Transit </li>
                            <li>Bicycles </li>
                            <li> Pedestrians</li>
                            <li> Travel Demand Management (TDM)</li>
                            <li> Parking</li>
                            <li> Inter-Regional Travel</li>
                            <li>Freight, Air, and Rail</li>
                        </List>
                        <Paragraph>
                            Plan recommendations were developed based on
                            analyses of the existing transportation network
                            condition and performance; prior and ongoing
                            transportation planning eforts by the MPO and
                            implementing agencies; travel forecasts accounting
                            for future growth; and input received from
                            stakeholders through public engagement activities.
                            Plan recommendations are largely focused on
                            optimizing the use, capacity, and safety of existing
                            facilities, expanding transportation options, and
                            improving land use and transportation integration.
                            <br />
                            Implementing agencies, including local and county
                            governments as well as WisDOT, are encouraged to
                            consult the recommendations and supporting actions
                            identifed in Connect Greater Madison 2050 when
                            undertaking planning eforts and implementing specifc
                            transportation projects to ensure regional
                            continuity of the transportation system and support
                            regional transportation plan goals. The following
                            are an excerpt of key plan recommendations.
                        </Paragraph>

                        <SubHeading>
                            Land Use and Transportation Integration
                        </SubHeading>
                        <Paragraph>
                            Land use and transportation are inextricably linked.
                            The role of transportation is to connect people with
                            opportunities, services, goods, and other resources.
                            In order for transportation policies and investments
                            to be successful in achieving this, they must be
                            coupled with complementary land use plans, policies,
                            and implementing ordinances. Low-density land use
                            patterns increase demand for transportation while
                            reducing the feasibility of transit, biking, and
                            walking. Location-efcient development, that provides
                            dense clusters May 2022 | vii of development with a
                            variety of land uses in a pedestrian-oriented
                            environment, gives people easier access to key
                            destinations and reduces transportation costs by
                            making alternative travel modes more convenient and
                            economical.
                        </Paragraph>

                        <SubHeading>Key Recommendations</SubHeading>
                        <List>
                            <li>
                                Adopt local land use plans that support RTP
                                goals and policies.
                            </li>
                            <li>
                                Provide a mix of housing types with higher
                                densities in areas with multimodal access to
                                jobs and services in order to provide afordable
                                living options in less car dependent
                                neighborhoods.
                            </li>
                        </List>

                        <SubHeading>Roadways</SubHeading>
                        <Paragraph>
                            Streets and roadways provide mobility for the vast
                            majority of residents in the region, however they
                            travel, but they also make up the majority of our
                            public space, providing areas to walk, play, and
                            socialize with our friends. It is important to
                            preserve this infrastructure and manage it so that
                            it continues to serve our community efectively,
                            making targeted enhancements when appropriate.
                        </Paragraph>
                        <SubHeading>Key Recommendations </SubHeading>
                        <List>
                            <li>
                                Preserve and maintain the region’s street and
                                highway system in a manner that minimizes their
                                life cycle cost, maintains safety, and minimizes
                                driver costs while reducing their impact on the
                                environment.
                            </li>
                            <li>
                                Build a well-connected network of regional
                                roadways to accommodate future growth, efciently
                                distribute trafc to avoid bottlenecks on
                                overburdened routes, and providing multimodal
                                connections between neighborhoods.
                            </li>
                            <li>
                                Incorporate complete streets and green streets
                                concepts for regional and local roadways
                            </li>
                            <li>
                                Expand regional roadway system capacity to
                                address critical bottlenecks and accommodate
                                future planned growth consistent with RTP goals
                            </li>
                            <li>
                                Adopt a Safe System Approach for addressing
                                safety needs on the regional roadway system.
                            </li>
                            <li>
                                Address security and resiliency needs related to
                                the regional roadway system
                            </li>
                        </List>

                        <SubHeading>
                            Transportation System Management and Operations
                            (TSMO) and Technology
                        </SubHeading>
                        <Paragraph>
                            Transportation system management and operations
                            (TSMO) includes strategies such as improved trafc
                            signal operations, management of roadway incidents,
                            and traveler information, as well as targeted
                            roadway modifcations to provide bottleneck relief.
                            Intelligent Transportation Systems (ITS)
                            technologies, such as sensors and communications
                            devices that allow multiple agencies to work
                            together, can aid these TSMO strategies. TSMO
                            strategies are cost efective methods to improve
                            travel conditions and maximize the benefts of
                            existing transportation infrastructure.
                            Transitioning away from traditional fossil fuels
                            toward electric powered vehicle technology
                            represents one way in which Dane County can decrease
                            emissions, slowing global warming and reducing our
                            reliance on imported fossil fuels. Expanding access
                            to charging infrastructure, increasing familiarity
                            with electric vehicles, and easing range anxiety
                            will be key strategies to help the region shift
                            towards cleaner transportation options.
                        </Paragraph>

                        <SubHeading>Key Recommendations </SubHeading>
                        <List>
                            <li>
                                Develop a regional transportation systems
                                management and operations (TSMO) plan.
                            </li>
                            <li>
                                Promote electric vehicle charging infrastructure
                                to reduce greenhouse gas emissions.
                            </li>
                        </List>

                        <SubHeading>Public Transit </SubHeading>
                        <Paragraph>
                            With the goal to provide frequent and more direct
                            transit service, better access to jobs, and make the
                            system overall easier to use, the Metro Network
                            Redesign project is taking place concurrently with
                            the development of this Regional Transportation
                            Plan. The transit element of this plan builds upon
                            this network redesign efort and the initial BRT
                            project to identify a long-term vision for the
                            regional transit system. This vision includes an
                            expanded BRT system, addition of regional express
                            routes, and local service improvements and expansion
                            that together will greatly increase job
                            accessibility and also signifcantly expand the
                            “frequent transit network” (15 minute service or
                            better throughout the day), which allows people to
                            live “car light” or “car free.
                        </Paragraph>

                        <SubHeading> Key Recommendations </SubHeading>
                        <List>
                            <li>
                                {" "}
                                Implement a bus rapid transit (BRT) system.{" "}
                            </li>
                            <li>
                                Improve the local bus network by investing where
                                needs are greatest.
                            </li>
                            <li> Implement a regional express bus network. </li>
                        </List>

                        <SubHeading> Bicycles</SubHeading>
                        <Paragraph>
                            Although the region’s bikeway network is well
                            developed compared to peer metropolitan areas, gaps
                            in the network persist, particularly outside the
                            central Madison area. Top priorities over the coming
                            decades include connecting and increasing access to
                            lowstress bike routes, improving bicyclist safety,
                            and removing barriers that keep people from
                            bicycling. Map EX-f details the planned future
                            regional bicycle routes.
                        </Paragraph>

                        <SubHeading> Key Recommendations </SubHeading>
                        <List>
                            <li> Reduce barriers to bicycling. </li>
                            <li>
                                Expand the bikeway network with new shared-use
                                paths and on-street facilities.
                            </li>
                            <li>
                                Continue bike share, education, and bicyclist
                                supportive policies
                            </li>
                            <li> Improve bicyclist safety </li>
                        </List>

                        <SubHeading>Pedestrians</SubHeading>
                        <Paragraph>
                            All trips, regardless of mode used, begin and end
                            with a walk trip. Sidewalks provide many benefts,
                            including safety, mobility, and healthier
                            communities. Sidewalks, along with street crossing
                            facilities, such as curb ramps, crosswalks, signals,
                            and grade-separated crossings, are the building
                            blocks of the pedestrian transportation network.
                            Local communities should focus on maintaining and
                            improving these existing facilities, and expanding
                            the network to serve poorly connected neighborhoods
                            and new developments.
                        </Paragraph>

                        <SubHeading> Key Recommendations </SubHeading>

                        <List>
                            <li>
                                Provide sidewalks and appropriate pedestrian
                                amenities in developing neighborhoods, and
                                retroft regional streets with modern, safe, and
                                accessible pedestrian accommodations.
                            </li>
                            <li>
                                Improve safety and usability for pedestrians at
                                intersections and crossings.
                            </li>
                        </List>

                        <SubHeading>Travel Demand Management </SubHeading>
                        <Paragraph>
                            Transportation demand management (TDM) improves
                            transportation system efciency— reducing vehicle
                            miles traveled and peak period roadway congestion—by
                            maximizing the availability and use of alternatives
                            to driving alone. TDM is a low-cost way to improve
                            community health and livability by nudging travelers
                            to adjust how or when they travel.
                        </Paragraph>

                        <SubHeading> Key Recommendations </SubHeading>
                        <List>
                            <li>
                                Expand the availability and use of facilities
                                and services that support shared mobility
                            </li>
                            <li>
                                Work with employers, institutions, and
                                municipalities to implement and promote
                                strategies to reduce drive-alone vehicle trips.
                            </li>
                            <li>
                                Expand the availability, use, and funding of
                                fnancial incentives and encouragement programs,
                                and increase the funding available to market
                                these programs.
                            </li>
                        </List>

                        <SubHeading>Inter-Regional Travel</SubHeading>
                        <Paragraph>
                            In an increasingly connected world, inter-regional
                            travel opportunities must be maintained and
                            expanded. While the Madison area hosts several
                            intercity-bus options, they lack a common terminus
                            and often lack good connections to local bus routes.
                            While Madison’s passenger rail service ended decades
                            ago, there is growing interest in renewing it and a
                            funding opportunity through the recently passed
                            federal infrastructure bill.
                        </Paragraph>

                        <SubHeading> Key Recommendations </SubHeading>

                        <List>
                            <li>
                                Initiate planning for and build an inter-city
                                bus terminal.
                            </li>
                            <li>
                                Support new and improved inter-city bus service
                            </li>
                            <li>
                                Implement passenger rail service to and through
                                the Madison area
                            </li>
                        </List>
                    </PageSection>
                </SectionWrapper>
            </PageDisplay>
        </>
    );
}

export default Summary;
