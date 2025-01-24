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

function SystemToday() {
    const sections = [
        {
            to: "section1",
            title: " Our Transportation System Today",
        },
        {
            to: "section2",
            title: "   Roadways   ",
        },
        {
            to: "section3",
            title: "View More",
        },
    ];

    return (
        <>
            <PageHeader img="https://images.unsplash.com/photo-1514395629347-41e19e338c6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">Our Transportation System Today </PageHeader>
            <PageDisplay>
                <TableOfContent sections={sections} />

                <SectionWrapper>
                    <PageSection id="section1">
                        <SectionHeader>
                            Our Transportation System Today
                        </SectionHeader>
                        <Paragraph>
                            The following sections describe the existing
                            conditions of the greater Madison region
                            transportation system. To view the region’s progress
                            towards achieving the adopted targets of the
                            federally required transportation performance
                            measures please see Appendix B.
                        </Paragraph>
                    </PageSection>

                    <PageSection id="section2">
                        <SectionHeader> Roadways</SectionHeader>
                        <Paragraph>
                            Streets and highways form the foundation of the
                            transportation system. Aside from limited-access
                            freeways, roadways must be designed to accommodate
                            safe, convenient travel by buses, bicyclists, and
                            pedestrians, as well as motorists. In addition to
                            travel, streets play a role in public life and the
                            way we experience cities. As the National
                            Association of City Transportation Ofcials (NACTO)
                            notes, they are the lifeblood of our communities and
                            the foundation of our urban economies. With streets
                            making up 80% of all public space in cities, they
                            have the potential to foster economic activity,
                            serve as an attractive front yard space for
                            residents, and provide a safe place for all people,
                            including those moving on foot, by bike or via
                            transit. There are over 2,900 miles of public
                            roadways in the MPO Planning Area and 380 bridges.
                            Roads are critical to virtually all freight moving
                            to and from locations in Dane County. In 2019, 98%
                            of Dane County’s freight tonnage and 90% of its
                            freight value moved exclusively by truck. The
                            remainder, which moves by other modes for part of
                            its trip, needs to travel by truck on the frst or
                            last legs of its journey. Countywide in 2019, the
                            roadway system carried an estimated 14.4 million
                            vehicle miles of travel each day. Roadways also have
                            both direct and indirect impacts on the natural
                            environment that must be considered in planning
                            eforts and facility design.
                        </Paragraph>
                        <Paragraph>
                            Streets and highways provide connectivity to jobs,
                            homes, shops, parks, and other opportunities. The
                            physical design characteristics of each roadway play
                            a signifcant role in its safety, operational
                            performance, and ability to accommodate diferent
                            transportation modes. As an infrastructure asset,
                            the roadway system requires maintenance to remain in
                            acceptable condition. The Madison area has a
                            uniquely constrained roadway system due to the
                            natural geography of the area, with the City of
                            Madison’s downtown sitting on an isthmus. The City
                            of Madison, founded in 1848, is a master planned
                            community built on a tight grid of streets around
                            what we now know as the Capitol Square. High-volume
                            arterial streets radiate from the square and connect
                            to a number of State and Interstate Highways,
                            including the Beltline (U.S. Highways (USH) 12, 14,
                            18, and 151), Stoughton Road (USH 51), and
                            I-39/90/94. Unlike many urban areas, downtown
                            Madison is located of the freeway and expressway
                            network. This has greatly contributed to the
                            livability of the downtown, but also made trafc
                            circulation more challenging, increasing the
                            importance of travel demand management and
                            operational strategies for mitigating congestion.
                            Many suburban communities surrounding Madison were
                            founded in the late 1800s, and contain a similarly
                            dense street grid in their historic cores.
                        </Paragraph>
                        <Paragraph>
                            Roadway development patterns changed across the
                            United States after World War II. America built most
                            of its early highway and freeway infrastructure
                            during this time, leading to the rise of
                            suburbanization. Terms like roadway hierarchy became
                            part of the planning lexicon, and curvilinear
                            streets and cul-de-sacs became the norm for new
                            neighborhood design. The Madison area was no
                            exception to national trends. The construction of
                            the Beltline Highway facilitated growth in areas
                            further from the urban core, including the suburbs.
                            Conceived and approved in 1944, the Beltline opened
                            as a 2-lane highway in 1949. In the 1950s,
                            intersections with the Beltline were steadily
                            converted into interchanges and portions of the road
                            widened to four lanes. In the 1970s, portions of the
                            roadway were expanded to six lanes. In 2022, WisDOT
                            will complete work on the Flex Lane project on the
                            Beltline, which will allow peak-period use of the
                            Beltline Highway’s interior shoulders, thereby
                            providing an extra travel lane in each direction.
                            The COVID-19 pandemic has changed driving behavior.
                            Prior to the pandemic, travel demand during the AM
                            and PM peak periods was signifcantly higher than
                            midday travel. With the increase in telework, those
                            peaks have fattened somewhat, especially the AM peak
                            with trafc now distributed more evenly throughout
                            the day. The reduced peak trafc volumes as a result
                            of increased teleworking could help to reduce the
                            need for capacity expansion in the future.
                        </Paragraph>

                        <SubHeading>
                            ROADWAY FUNCTIONAL CLASSIFICATION SYSTEM
                        </SubHeading>

                        <Paragraph>
                            The Federal-Aid Highway Act of 1973, as amended,
                            requires the use of a functional highway
                            classifcation to update and modify the Federal-aid
                            highway system. Functional classifcation defnes the
                            role the roadway plays (mobility, connectivity,
                            accessibility) in serving motor vehicle travel needs
                            through the regional roadway network. Functional
                            classifcation carries with it some expectations
                            about roadway design, including its speed, capacity
                            and relationship to existing and future land use
                            development. However, the land use context for
                            roadways and the priority and needs for transit,
                            bicyclists, and pedestrians must also be considered
                            in designing roadways and their operations. The
                            Federal Functional Classifcation system divides
                            roadways into two groups – urban and rural – based
                            upon whether or not the roadway is located within
                            the urban area boundary of a metropolitan area. The
                            system classifes roadways into the following main
                            categories:
                        </Paragraph>

                        <List>
                            <li>
                                <b>Principal Arterials, </b> which include the
                                Interstate, other access restricted freeways and
                                expressways, and other high trafc volume
                                roadways serving the longest trips and the major
                                regional centers and facilities;
                            </li>
                            <li>
                                <b>Minor Arterials,</b> which connect and
                                augment the principal arterials, serve moderate
                                distance trips and community land uses;
                            </li>
                            <li>
                                <b>Collectors,</b> s, which connect
                                neighborhoods to the arterials, serving more of
                                an access function and shorter trips connecting
                                to neighborhood facilities; and
                            </li>
                            <li>
                                <b>Local Roads,</b> , which serve primarily an
                                access function for homes and businesses
                            </li>
                        </List>

                        <Paragraph>
                            Federal legislation uses functional classifcation in
                            determining eligibility for funding under the
                            Federal-aid program. All roadways classifed as a
                            rural major or urban collector or higher are
                            eligible for federal funding. The MPO coordinates
                            with WisDOT to assign functional classifcations to
                            roadways in the urban area, while WisDOT assigns
                            functional classes to roadways in the rural area.
                            Roadways are classifed according to average daily
                            trafc (ADT) volume, population of the area, land
                            uses served, spacing criteria, and supplemental
                            criteria (e.g., whether bus or truck route and trafc
                            control). In addition, rural-urban interface is
                            considered, which ensures the connectivity of routes
                            from rural areas into urban areas. Map 3-a shows the
                            functionally classifed roadway system in Dane County
                            as approved in 2015. The map is updated every ten
                            years.
                        </Paragraph>

                        <SubHeading>STREET TYPOLOGY </SubHeading>
                        <Image />
                        <Paragraph>
                            The functional classifcation system only addresses
                            how roadways are being used by motor vehicle trafc.
                            Street typology goes beyond that to look at land use
                            and community context and considers multimodal
                            travel. In 2021, the City of Madison hired a
                            consultant to assist the city in developing a
                            process and tools to assist in designing new and
                            reconstructed streets that balance all competing
                            street uses consistent with its Complete Green
                            Streets policy. The policy is based on putting
                            people frst, supporting community, fostering
                            sustainability, and achieving equity. A draft street
                            typology was developed, which classifes streets by
                            the land use context, target speeds, and equity
                            issues and relates those to functional class. The
                            project also includes identifying a modal (transit,
                            bike, auto) priority network as a tool for balancing
                            needs when (re) designing streets. For more
                            information, see the project website at this link:
                            <SectionLink link="https://www.cityofmadison.com/transportation/initiatives/complete-green-streets" />
                        </Paragraph>
                        <Image />

                        <SubHeading>NATIONAL HIGHWAY SYSTEM </SubHeading>
                        <Paragraph>
                            The National Highway System consists of roadways
                            important to the nation’s economy, defense, and
                            mobility. The NHS was developed by the Department of
                            Transportation (DOT) in cooperation with the states,
                            local ofcials, and metropolitan planning
                            organizations (MPOs). The National Highway System
                            (NHS) includes the following subsystems of roadways:
                        </Paragraph>
                        <List>
                            <li>
                                <b>Interstate</b>
                            </li>
                            <li>
                                <b> Other Principal Arterials</b>
                            </li>
                            <li>
                                <b>Strategic Highway Network (STRAHNET),</b>{" "}
                                which includes highways important to the United
                                States’ strategic defense, providing access,
                                continuity and emergency capabilities for
                                defense purposes.
                            </li>
                            <li>
                                <b>Intermodal Connectors,</b> which provide
                                access between major intermodal facilities and
                                the other subsystems making up the NHS.
                            </li>
                        </List>

                        <Paragraph>
                            The MPO Planning Area contains a total of 158 NHS
                            Interstate Highway lane miles, 463 non-Interstate
                            NHS US/State highway lane miles, and 88 local road
                            NHS lane miles. The National Highway System is shown
                            in Map 3-b
                        </Paragraph>

                        <SubHeading>ROADWAY JURISDICTION </SubHeading>
                        <Paragraph>
                            Roadway jurisdiction indicates which agency or
                            community owns the road and is responsible for
                            construction, maintenance, and operations. Roadway
                            jurisdiction of the regional roadway network,
                            including all arterials and collectors, is generally
                            categorized in the following systems:
                        </Paragraph>

                        <List>
                            <li>
                                <b>State Highway System: </b> The state highway
                                system consists of all highways under the
                                jurisdiction of the Wisconsin Department of
                                Transportation (WisDOT), including Interstate
                                highways, U.S. Highways, and all other state
                                highways, referred to as State Trunk Highways.
                                36% of the regional roadway system centerline
                                miles are under WisDOT jurisdiction.
                            </li>

                            <li>
                                <b> Connecting Highway System:</b> Connecting
                                highways are technically local roads that run
                                through developed portions of cities and
                                villages and connect to and are signed as state
                                highways. The state maintains responsibility for
                                their reconstruction, when needed, but ongoing
                                maintenance is the responsibility of the
                                municipality. Municipalities receive connecting
                                highway aids to ofset this maintenance cost. 1%
                                of the regional roadway network are connecting
                                highways, including East Washington Ave.,
                                Northport Dr. and Packers Ave., and S. Park
                                Street.
                            </li>
                            <li>
                                <b>County Trunk Highway System: </b> The county
                                trunk highway system contains public roads under
                                the jurisdiction of and maintained by Dane
                                County. 29% of the regional roadway system
                                centerline miles are under Dane County
                                jurisdiction. That percentage has been
                                decreasing as segments of county highways in
                                cities and villages have been transferred to the
                                municipality following reconstruction per
                                agreement with the county.
                            </li>
                            <li>
                                <b> Municipal Street System:</b> The municipal
                                street system includes public roads and streets
                                within the limits of municipalities, except
                                those on the federal, state, and county systems
                                and connecting highways. 34% of the regional
                                roadway system centerline miles are under the
                                jurisdiction of local municipalities.
                            </li>
                            <Paragraph>
                                In some instances, an entity with roadway
                                jurisdiction may enter into an agreement to have
                                another agency perform maintenance, manage
                                operations, or provide snow removal services;
                                however, the agency with jurisdiction over the
                                roadway is ultimately responsible for ensuring
                                the maintenance is performed in a satisfactory
                                manner. For example, Dane County performs all
                                snow removal on the Beltline and Interstate per
                                contract with the state, which are both under
                                WisDOT jurisdiction.
                            </Paragraph>
                        </List>
                    </PageSection>

                    <PageSection id="section3">
                        <SectionHeader>
                            <SectionLink
                                link="https://www.greatermadisonmpo.org/planning/documents/Ch-03-ConnectRTP-web.pdf"
                                title="CLICK TO VIEW MORE"
                            />
                        </SectionHeader>
                    </PageSection>
                </SectionWrapper>
            </PageDisplay>
        </>
    );
}

export default SystemToday;
