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
    Image,
    List,
    Paragraph,
    SectionHeader,
    SectionLink,
    SubHeading,
} from "../components/common";

function SystemTomorrow() {
    const sections = [
        {
            to: "section1",
            title: "  Introduction  ",
        },
        {
            to: "section2",
            title: " Critical    ",
        },
        {
            to: "section3",
            title: "  Drivers of Change   ",
        },
        {
            to: "section4",
            title: "  Needs and Recommendations  ",
        },
        {
            to: "section5",
            title: "  Land Use and Transportation Integration   ",
        },
        {
            to: "section6",
            title: "  Roadways  ",
        },
        {
            to: "section7",
            title: "  Transportation System Management and Operations (TSMO) and Technology  ",
        },
        {
            to: "section8",
            title: "  VIEW MORE  ",
        },
    ];

    return (
        <>
            <PageHeader> Our System Tomorrow: 2050 </PageHeader>
            <PageDisplay>
                <TableOfContent sections={sections} />

                <SectionWrapper>
                    <PageSection id="section1">
                        <SectionHeader>Introduction</SectionHeader>
                        <Paragraph>
                            What will our transportation system look like in
                            2050? What critical issues and drivers of change
                            will shape how our transportation system grows and
                            evolves? How do we leverage transportation to
                            achieve our long-term vision for the region? This
                            chapter explores these issues, identifes the future
                            needs of our transportation system, and provides
                            recommendations and supporting actions to make the
                            vision a reality.
                        </Paragraph>
                        <Image />
                    </PageSection>

                    <PageSection id="section2">
                        <SectionHeader> Critical</SectionHeader>
                        <Paragraph>
                            As the greater Madison region’s transportation
                            system evolves, three critical issues that should
                            play an important role in planning and
                            decision-making are equity, climate change, and
                            health. Each is directly afected by the benefts and
                            burdens of the transportation system, and each
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
                            healthy, sustainable lives. To provide a framework
                            for this coordination, the Greater Madison MPO works
                            closely with the Capital Area Regional Planning
                            Commission (CARPC) to align the agencies’ regional
                            plans and implementation strategies that guide
                            communities. The goals, recommendations, and
                            performance measures in the Connect Greater Madison
                            Regional Transportation Plan (RTP) for 2050
                            reinforce the goals and objectives of CARPC’s
                            Regional Development Framework (RDF), together
                            promoting positive outcomes for equity, climate
                            action, and health. The following sections summarize
                            the signifcance of these three critical issues;
                            their relationship to our transportation system; and
                            how the RTP advances each.
                        </Paragraph>

                        <SubHeading>EQUITY</SubHeading>
                        <Paragraph>
                            Existing defnitions of “transportation equity”
                            include common themes, but vary based on the areas
                            to which they are applied and the perspectives of
                            those involved in the development process. A typical
                            defnition is something like:
                        </Paragraph>

                        <HighlightedText>
                            Transportation equity means that transportation
                            decisions are made with deep and meaningful
                            community input that leads to transportation
                            networks and land use structures that support health
                            and well-being, environmental sustainability, and
                            equitable access to resources and opportunities. –
                            Urban Institute
                        </HighlightedText>

                        <Paragraph>
                            The critical connections between equity, land use,
                            and transportation are clear in the long history of
                            racial and economic segregation in the U.S.,
                            perpetuated through policies, programs, and projects
                            such as urban renewal, urban freeways, exclusionary
                            zoning, and more. The 2020 Black Lives Matter
                            movement and nationwide reckoning with systemic and
                            institutional racism – sparked in part by the
                            killing of George Floyd in a Minneapolis bicycle
                            lane by a uniformed police ofcer – prompted a
                            necessary re-focusing in the planning profession on
                            undoing the harms caused over the last century.
                            Although the scale and pervasiveness of
                            institutional racism has only recently become
                            apparent to many planners, the American Planning
                            Association’s Code of Ethics2 is explicit that
                            planners must work to achieve economic, social and
                            racial equity, and center the voices and needs of
                            minority communities. The disparate impacts of the
                            COVID-19 pandemic on various demographic groups
                            further highlighted inequities at many levels of
                            society nationwide, including in transportation
                            access and transit dependence. When saferat-home
                            orders were issued in March 2020, many “choice”
                            transit riders who were either able to telework or
                            switch to a personal vehicle, stopped riding. Many
                            essential workers, however, including grocery and
                            healthcare staf, continued to rely on transit to
                            access their jobs. This pattern was clear in the
                            Madison area, where overall Metro Transit ridership
                            declined markedly with safer-athome orders, yet
                            decreased the least in areas with the largest
                            populations of transitdependent riders – primarily
                            people of color and those with low incomes.3 For
                            residents of these areas, the combined impacts of
                            spatially segregated land use policies; transit
                            service optimized for white-collar commuters; poor
                            sidewalk and bicycle network connectivity4 ; and the
                            high cost of owning and operating a private vehicle;
                            pose signifcant barriers to economic mobility and
                            access to basic needs. Exacerbating this situation,
                            undocumented immigrants in Wisconsin are not able to
                            obtain a driver’s license, restricting their legal
                            transportation options even if they are fnancially
                            capable of owning a private motor vehicle. 5 In
                            light of these extreme challenges, it is imperative
                            that planners and policymakers apply an equity lens
                            throughout transportation and land use
                            decision-making processes – from implementing public
                            engagement eforts, to creating plans and fnalizing
                            designs in consultation with those who will be most
                            impacted. To this end, the RTP and RDF use the same
                            socioeconomic forecasts and same forecast growth
                            scenario, and apply consistent goals and strategies
                            aimed at advancing equity and reducing racial
                            disparities. A critical shared focus is prioritizing
                            land use and transportation decisions that improve
                            access to afordable housing, transportation options,
                            jobs, and services for all. As part of the planning
                            process, the MPO and CARPC analyzed assumptions and
                            plans relative to the potential impacts on
                            Environmental Justice (EJ) Priority Areas, and
                            coordinated engagement with minority and low-income
                            populations to gather input; this engagement will
                            continue to be a priority in future planning eforts.
                        </Paragraph>

                        <Image />

                        <Paragraph>
                            To further advance equity in its policies and
                            processes, the MPO recently revised local scoring
                            criteria for the two federal funding programs for
                            which it selects projects (Surface Transportation
                            Block Grant-Urban and Transportation Alternatives),
                            increasing the proportion of points earned by
                            projects that improve transportation access to and
                            from MPO-identifed EJ areas.6 The MPO has also begun
                            to collect data for a number of new equity-based
                            performance measures and metrics that will help
                            monitor equity-related progress and setbacks in a
                            transparent and accountable way, and support eforts
                            to improve transportation equity with relevant data.
                            Finally, the MPO conducts an environmental justice
                            review of all projects in the Transportation
                            Improvement Program (TIP) on an annua basis. An
                            assessment of local conditions related to
                            transportation equity and environmental justice, and
                            an EJ analysis of projects in the RTP, can be found
                            in Appendix C.
                        </Paragraph>

                        <SubHeading> CLIMATE CHANGE </SubHeading>
                        <Paragraph>
                            Climate change is a defning critical issue of our
                            time that is causing unprecedented global efects on
                            our natural systems and built environments. Each
                            year brings new record-breaking weather extremes and
                            more frequent severe weather events including foods,
                            droughts, and heatwaves. Changes in temperature and
                            precipitation are intensifying storm damage and
                            accelerating infrastructure deterioration. Without
                            action to reduce the causes of climate change,
                            adapting to future impacts will become more difcult
                            and costly. Drastic reductions in greenhouse gas
                            (GHG) emissions from all sectors of the economy are
                            necessary in the coming decades to mitigate possible
                            catastrophic outcomes. Transportation systems both
                            contribute to and sufer from the impacts of climate
                            change. As of 2019, transportation accounts for the
                            largest share (29%) of all U.S. GHG emissions, of
                            which 58% come from light-duty vehicles.
                            Transportation infrastructure is increasingly
                            vulnerable to extreme weather events that degrade
                            system integrity and performance, resulting in more
                            frequent maintenance needs, increased repair costs,
                            and other economic costs. These climate
                            change-induced extremes pose serious threats by
                            making it more difcult to provide crucial
                            transportation services relied upon by individuals
                            and communities. Under these circumstances, ensuring
                            that transportation systems are resilient, or able
                            to withstand and recover rapidly from adverse
                            conditions and events, while also reducing the GHG
                            emissions of the transportation sector, is a vitally
                            important challenge. To mitigate the harmful efects
                            of climate change, transportation providers and
                            decision makers must prioritize strategies that
                            reduce the number and length of trips that are made
                            in personal vehicles. Well-planned public
                            transportation is a particularly efective tool, as a
                            typical trip on public transit emits 55% fewer GHG
                            emissions than driving or ride hailing alone; and if
                            the feet is electrifed, an electric bus emits 62%
                            fewer emissions than an average diesel bus.9
                            Designing communities to make it easier to take more
                            daily trips by walking and bicycling is also
                            essential, while broader adoption of telework
                            presents an additional opportunity to reduce
                            driving.
                        </Paragraph>
                        <Image />

                        <Paragraph>
                            To support this work, the MPO collaborates with
                            CARPC to prioritize regional planning strategies
                            that build climate change resiliency and reduce GHG
                            emissions from the built environment. A critical
                            shared goal is to promote compact, mixed-use
                            development that supports walking, bicycling, and
                            public transit. Other climate-related goals in
                            CARPC’s RDF that involve increasing tree canopy,
                            increasing water infltration, and decreasing the
                            urban heat island efect are further supported by RTP
                            2050 goals for environmental sustainability and
                            system performance, which speak to mitigating the
                            environmental impacts of the transportation system
                            and limiting demand for future roadway expansions.
                        </Paragraph>
                        <Image />

                        <Paragraph>
                            Transportation plans, policies, and projects
                            directly infuence public health by determining the
                            type and quality of transportation options available
                            to help people get where they need to go. As a core
                            element of the built environment, transportation is
                            a critical social determinant of health10 that often
                            disproportionately burdens low-income and minority
                            communities. In transportation planning, it is vital
                            to consider the health implications of decisions and
                            to involve afected communities in the
                            decision-making process, in order to achieve systems
                            that support health and a high quality of life for
                            all. Transportation afects public health in four key
                            areas:
                        </Paragraph>

                        <List>
                            <li>
                                <b>Physical Activity: </b>The ability of
                                individuals to easily integrate physical
                                activity into their daily routines through the
                                transportation choices available to them.
                            </li>
                            <li>
                                <b>Natural Environment: </b> The impact of
                                transportation on air and water quality, and the
                                ability of individuals to take action on climate
                                change through their transportation choices.
                            </li>
                            <li>
                                <b>Safety </b> The ability of users of all ages
                                and abilities to safely navigate the
                                transportation system.
                            </li>
                            <li>
                                <b> Access: </b> The ability of individuals to
                                access basic needs including jobs, healthcare,
                                healthy food, schools, social services,
                                community centers, and green space.
                            </li>
                        </List>

                        <Paragraph>
                            Healthy community design11, which makes it easier
                            for people to live healthy lives through the built
                            environment, uses a combination of land use and
                            transportation strategies to promote physical
                            activity, improve air quality, lower safety risks,
                            and strengthen social connections. This approach
                            relies on crosssector collaboration among urban
                            planners, engineers, public health professionals and
                            others to act on critical issues including obesity,
                            heart disease, asthma, and trafc injuries and
                            deaths. Key strategies include compact, mixed-use
                            development; quality public transit and active
                            transportation infrastructure; afordable housing;
                            and equitable access to resources such as
                            healthcare, healthy food, greenspace, and community
                            centers. As the framework for transportation
                            planning and investing in the greater Madison
                            region, the Connect Greater Madison RTP coordinates
                            closely with CARPC’s RDF, incorporating goals,
                            recommendations, and performance measures that
                            support healthy community design in numerous ways.
                            This includes through recommendations and supporting
                            actions detailed in this chapter that focus on
                            improving trafc safety; bicycle and pedestrian
                            infrastructure; public transit and specialized
                            transit services; and transportation demand
                            management (TDM). The MPO, local communities, and
                            partner agencies, including CARPC and Dane County,
                            must continue to work together to support positive
                            public health outcomes through coordinated
                            transportation and land use planning. Resources
                            provided by the MPO, including the recent
                            intersection safety analysis and safety optimization
                            tool; Low-Stress Bicycle Network report; and
                            Pedestrian/Bicycle Facility Requirements, Policies,
                            and Street Standards report, provide important tools
                            to identify gaps and opportunities, while new
                            resources such as Streetlight Data will further help
                            to visualize data, identify patterns, and guide
                            investments.
                        </Paragraph>
                    </PageSection>

                    <PageSection id="section3">
                        <SectionHeader>Drivers of Change </SectionHeader>
                        <Paragraph>
                            Transportation is currently experiencing a rapid
                            change not seen since the early 20th century. Some
                            of this change is due to paradigm shifts, such as
                            the growth of telework and the increase in freight
                            going directly to homes due to the rise of online
                            shopping, while other changes are due to the advent
                            of emerging technologies, including connected and
                            automated vehicles. While many of these technologies
                            on their own would be transformational, the
                            confuence of a number of them into and afecting the
                            transportation system at once poses more questions
                            than answers for manufacturers, consumers, and
                            planners. It will be important to determine
                            quantifable ways that the new technologies will
                            impact planning – be it newfound capacity, cost
                            savings, or a complete reimagining of the
                            transportation system. It will be important, now
                            more than ever, to recalibrate planning eforts based
                            on these and other emerging trends and technologies
                            and to remain fexible, nimble, and adaptable in the
                            coming years.
                        </Paragraph>

                        <SubHeading>TELEWORK</SubHeading>
                        <Paragraph>
                            According to a recent Gallup12 poll, 45% of fulltime
                            employees in the US were working partly or fully
                            remotely at the end of 2021, a seismic jump from 6%
                            prior to the start of the Covid-19 pandemic. While
                            telework is not an option for many occupations
                            (e.g., manufacturing, education, health care, and
                            the service industry), national and local surveys
                            indicate that telework is likely to be a common part
                            of workplace structures beyond the pandemic,
                            primarily as a hybrid/part-time option. Relative to
                            the long-term impact that telework may have on
                            vehicle miles traveled in the region, responses to a
                            recent MPO survey indicate that telework may have
                            the potential to help employees reduce their overall
                            weekly driving, and in some cases choose alternate
                            commute modes on their in-ofce days. Greater
                            adoption of fexible workplace models that include
                            both telework and fexible schedules ofers greater
                            opportunity to reduce driving and peak period
                            congestion, in turn reducing peak-period roadway
                            demand and expanding opportunities to prioritize
                            investments in other modes of transportation.
                        </Paragraph>

                        <Image />

                        <SubHeading>E-COMMERCE AND ONLINE SHOPPING</SubHeading>
                        <Paragraph>
                            Online shopping is more popular than ever. In fact,
                            in 2019 the total market share of online retail
                            sales exceeded that of bricksand-mortar retail
                            locations,13 with consumers expecting quick
                            turnaround, in many cases same-day delivery. One
                            study found that although e-commerce has generated
                            an increase in parcel delivery trips, the net efect
                            of e-commerce has been a reduction in VMT and fuel
                            consumption.14 The rise in e-commerce requires large
                            warehouse and distribution centers in urban
                            settings, particularly locations with prime
                            Interstate access. The recently proposed 3.4 million
                            square foot Amazon distribution center in the
                            Village of Cottage Grove just of the Interstate 94
                            and CTH N interchange is an example of this.
                            Transportation-related implications of e-commerce
                            include more daily truck trafc around warehouse and
                            distribution centers, and the increased need for
                            loading zone management practices.
                        </Paragraph>

                        <SubHeading>SHARED MOBILITY </SubHeading>
                        <Paragraph>
                            According to FHWA15, advancement in social
                            networking, location-based services, the Internet,
                            and mobile technologies have contributed to the
                            sharing economy. The sharing economy can improve
                            efciency, provide cost savings, monetize underused
                            resources, and ofer social and environmental
                            benefts. Benefts also include encouraging multimodal
                            travel by making it possible to move away from
                            automobile ownership when combined with other
                            transportation options such as walking, bike
                            sharing, and transit. One of the most popular shared
                            mobility models is on-demand ride services,
                            sometimes called ridesharing or transportation
                            network companies, which use smart phone
                            applications to connect passengers to drivers. In
                            many ways this is not very diferent than traditional
                            taxi services; however, the increased price
                            transparency and availability of travel information
                            (such as arrival times and GPS locations) have
                            caused these services to increase in popularity.
                            Examples of this type of service include Lyft and
                            Uber. Local taxi services, such as Green Cab, also
                            utilize similar functionality. The transportation
                            and environmental benefts of on-demand ride services
                            depend upon reaching sufcient demand to allow for
                            multi-occupant rides and on the use of electric
                            vehicles for such services. Carsharing is another
                            shared mobility model, where individuals have
                            temporary access to a vehicle without the cost and
                            responsibilities of ownership. Typically, the
                            carsharing operator provides insurance, gasoline,
                            parking and maintenance, and participants or members
                            pay a fee each time they use a vehicle. Local
                            examples include Zipcar. Bikesharing, such as BCycle
                            in Madison, allows users to access bicycles on an
                            as-needed basis for one-way mobility and/or round
                            trips. Station-based kiosks are unattended,
                            concentrated in urban settings, and allow for a
                            variety of pickup and drop-of locations. Trips are
                            generally less than 30 minutes. If applied to
                            transit, the technology could help agencies discover
                            new fxed-routes that may not have otherwise been
                            apparent and also address “frst mile, last mile”
                            connections to transit. According to the American
                            Public Transportation Association, shared modes
                            complement public transit, enhancing urban mobility;
                            further, the more people use shared modes, the more
                            likely they are to use public transit, own fewer
                            cars, and spend less on transportation overall. To
                            be a convenient, accessible, low cost option, shared
                            mobility services do require a critical mass of
                            population density to be successful.
                        </Paragraph>

                        <SubHeading>VEHICLE ELECTRIFICATION </SubHeading>
                        <Paragraph>
                            According to the Dane County Climate Action Plan,
                            electrifying the transportation sector is a key
                            strategy for achieving deep decarbonization. Even
                            though more than half of the electric generation in
                            Wisconsin today is from coal (55%), the average EV
                            purchased in Wisconsin today emits approximately 40%
                            less carbon dioxide emissions than the average
                            gasoline-fueled car. A federal Executive Order set
                            an ambitious target for 50% of all new vehicles sold
                            in 2030 to be zero-emissions vehicles, including
                            battery electric, plug-in hybrid electric, or fuel
                            cell electric vehicles. Since 2010, battery pack
                            costs dropped 85%, paving the way to sticker price
                            parity with gasoline-powered vehicles; average
                            vehicle range has increased dramatically as charging
                            times have shortened; and electric models available
                            to U.S. consumers has expanded to over 40 and
                            growing.
                        </Paragraph>

                        <SubHeading>
                            CONNECTED AND AUTONOMOUS VEHICLES
                        </SubHeading>
                        <Paragraph>
                            Connected and Autonomous vehicles (CV/AVs) are
                            vehicles in which at least some aspect of
                            safety-critical control functions occurs without
                            driver input. Over time, it is anticipated that
                            vehicles will gradually gain more autonomy. Because
                            of this continuum of automation, “levels of vehicle
                            automation” have been developed to determine how
                            driver-reliant a vehicle is. A vehicle with a rating
                            of 0 has no automation, while a rating of 5 is
                            completely automated (Figure 4-a).
                        </Paragraph>
                        <Image />
                        <Paragraph>
                            Examples of vehicle automation are becoming more
                            mainstream each year. Many higher-end vehicles
                            currently come with automated features such as
                            parking assist and crash avoidance. Examples of this
                            type of technology include advanced drive assistance
                            systems (ADAD) that alert drives to objects or
                            people nearby using radar, sonar, or infrared
                            signals; technologies that apply breaks to avoid
                            crashes; and technologies that avoid collisions by
                            cooperative communication between cell-phone
                            signals, vulnerable users, and vehicles to notify
                            both parties of potential issues. The future impact
                            of Level 5 (completely automated) CV/AVs on the
                            transportation system is still uncertain. It is
                            likely that feets and freight will be early
                            adopters. The potential benefts and challenges will
                            largely be dependent on which technology and service
                            models businesses and consumers embrace, and how
                            regulators and policy makers respond. Benefts of
                            this technology are likely to include a dramatic
                            reduction in crashes, reduced travel times, reduced
                            energy consumption, reduced vehicle emissions,
                            improved reliability, increased roadway capacity,
                            and increased transit accessibility. Shared mobility
                            options could become much more attractive since they
                            would be able to provide door-to-door service for
                            all riders. Transit service could be delivered at a
                            reasonable cost in lowerdensity communities. On the
                            other hand, completely automated vehicles are likely
                            to encourage more driving unless public policies are
                            implemented to make car travel less appealing and to
                            promote shared feets of such vehicles rather than
                            privately owned ones. For example, if people own
                            their vehicle they can send it on “zero-occupancy”
                            trips or errands. People may also be more inclined
                            to move further from their workplace. Policies to
                            make an automated transportation future more
                            environmentally sustainable will need to be adopted
                            before automated vehicles become widespread.
                        </Paragraph>
                        <Image />

                        <SubHeading>ITS ADVANCEMENTS </SubHeading>
                        <Paragraph>
                            Advanced analytics and machine learning is a
                            technology that provides computers with the ability
                            to learn without explicitly being programmed,
                            particularly when being inputted with “big data.”
                            Example programs are being created with the
                            capability of using big data to identify patterns
                            that can be used to make well-informed predictions
                            such as trafc models. Some trafc operations centers
                            have automated trafc operations systems that
                            automatically adapt signalization during periods of
                            high trafc or alert operators of potential trafc
                            accidents. An adaptive signal system was installed
                            in the McKee Road and Fish Hatchery Road corridors
                            as part of the Beltline/Verona Road construction
                            project and has recently been installed on the
                            University Avenue and East Washington Avenue
                            corridors. Benefts include increased efciency of
                            existing roadways through predictive analytics and
                            pre-trip guidance for travelers, and increased
                            safety due to automatic dispatching of 911 services
                            though a mixture of this technology and the
                            “internet of things.” The MPO plans to test the
                            potential range of impacts on trafc volumes and VMT
                            of some of these drivers of change using its
                            regional travel forecast model to inform current and
                            future planning eforts, including the Beltline and
                            Interstate corridor studies.
                        </Paragraph>
                    </PageSection>

                    <PageSection id="section4">
                        <SectionHeader>Needs and Recommendations</SectionHeader>

                        <Paragraph>
                            The MPO has synthesized transportation system needs
                            and developed a series of recommendations with
                            supporting actions for each mode of transportation,
                            May 2022 | 4-9 as well as transportation demand
                            management (TDM) and transportation system
                            management (TSM). Recommendations are largely
                            focused on optimizing the use and capacity of
                            existing facilities, and improving land use and
                            transportation integration. Recommendations are
                            based on: analysis of the existing transportation
                            network condition and performance; prior and ongoing
                            transportation planning eforts by the MPO and
                            implementing agencies; travel forecasts accounting
                            for future growth; and input received from
                            stakeholders and the public through public
                            engagement activities. Implementing agencies,
                            including WisDOT, Dane County, and local
                            governments, are encouraged to use the following
                            recommendations when undertaking planning eforts and
                            implementing specifc transportation projects to
                            ensure regional continuity of the transportation
                            system and support regional transportation plan
                            goals. The discussion of needs, recommendations, and
                            supporting actions are organized by topic area and
                            mode in the order listed below with the
                            recommendations and supporting actions/strategies
                            highlighted in the tables. Appendix A contains a
                            complete table of the recommendations and supporting
                            actions. Needs and recommendations are organized as
                            follows:
                        </Paragraph>

                        <List>
                            <li> Land use and Transportation Integration </li>
                            <li>Roadways </li>
                            <li>
                                Transportation System Management and Operations
                                (TSMO) and Technology
                            </li>
                            <li> Public Transit </li>
                            <li> Specialized Transit </li>
                            <li> Bicycles </li>
                            <li>Pedestrians </li>
                            <li> Travel Demand Management (TDM) </li>
                            <li>Parking </li>
                            <li> Inter-Regional Travel </li>
                            <li> Freight, Air, and Rail </li>
                        </List>

                        <Image />
                    </PageSection>

                    <PageSection id="section5">
                        <SectionHeader>
                            Land Use and Transportation Integration
                        </SectionHeader>
                        <Paragraph>
                            Though this is a transportation plan, land use and
                            transportation are intrinsically and inextricably
                            related. The role of transportation is to connect
                            people with opportunities, services, goods, and
                            other resources. In order for transportation
                            policies and investments to be successful in
                            achieving this, they must be coupled with land use
                            plans, policies, and implementing ordinances that
                            support the transportation system goals and plan,
                            and recognize the importance of spatial or
                            geographic proximity, layout, and design of land
                            uses. Dispersed, low-density land use patterns and
                            single use developments increase demand for
                            transportation because of greater travel distances.
                            This increases automobile dependency for accessing
                            economic opportunities and needs, thereby placing
                            other travel modes at a disadvantage.
                            Location-efcient development with a balance of mixed
                            uses and pedestrian oriented design provides easy
                            access to desired destinations and reduces people’s
                            transportation costs by making alternative travel
                            modes more convenient and economical. Increasing
                            access to jobs, housing, and services for all people
                            is one of the top priorities of the Capital Area
                            Regional Planning Commission’s (CARPC)
                            <SectionLink
                                link={
                                    "https://www.capitalarearpc.org/community-regional-development/regional-development-plan-update/"
                                }
                                title="  2050 Regional Development Framework."
                            />
                            (RDF) with supporting objectives of increasing the
                            percent of development that is compact, mixed-use,
                            walkable, and where feasible, transit supportive and
                            supporting job growth in identifed areas. Key RDF
                            strategies for achieving this goal are focusing
                            growth in centers and multimodal corridors connected
                            by transit and prioritizing growth in already
                            developed areas. See Figure 4-b for Land Use
                            Recommendations and Supporting Actions.
                        </Paragraph>

                        <SubHeading>
                            ADOPT AND IMPLEMENT LOCAL LAND USE PLANS AND
                            POLICIES THAT SUPPORT CARPC’S REGIONAL DEVELOPMENT
                            FRAMEWORK GOALS, OBJECTIVES, AND STRATEGIES
                        </SubHeading>
                        <Paragraph>
                            Because of the important relationships between land
                            use and transportation, planning for them must be
                            coordinated. This requires that local communities
                            evaluate how land use decisions will afect the
                            transportation system and travel options for people
                            to access jobs, services, and other destinations. It
                            also requires that transportation agencies and
                            communities consider the efects of transportation
                            investments on land use development demand, travel
                            choices, and regional land use patterns. A frst step
                            in this coordination is agreement on a vision for
                            how the region grows that supports regional goals
                            combined with transportation policies and planned
                            investments that support that vision. This Regional
                            Transportation Plan was developed in conjunction
                            with, and is designed to support, CARPC’s RDF.
                            Specifcally, the RTP supports the growth scenario
                            that was developed to accommodate projected new
                            population and jobs in a way that helps achieve RDF
                            goals, while also being consistent with local
                            comprehensive plans and recognizing the development
                            market. Local communities are encouraged to use the
                            RDF to serve as a foundation for decisions on where
                            and how to grow, adopting and implementing plans
                            that support the RDF. To a large degree, current
                            local plans do support the RDF. The challenge is in
                            realizing those plans through appropriate
                            development policies and ordinances and supporting
                            public investments.
                        </Paragraph>
                        <Image />
                        <Image />
                    </PageSection>

                    <PageSection id="section6">
                        <SectionHeader>Roadways</SectionHeader>
                        <Paragraph>
                            Streets and roadways provide mobility for the vast
                            majority of residents in the region, regardless of
                            whether they drive, take transit, or ride a bicycle.
                            Streets can also be considered the “living rooms” of
                            neighborhoods throughout the community, providing an
                            outdoor space to congregate, recreate, and
                            socialize. It is important to preserve this
                            infrastructure and make targeted enhancements, when
                            appropriate. The following highlights the major
                            needs and recommendations to address them to ensure
                            the efciency, safety, and cost efectiveness of the
                            roadway network. See Figure 4-c for Roadway
                            Recommendations and Supporting Actions.
                        </Paragraph>

                        <SubHeading>
                            PRESERVE EXISTING REGIONAL ROADWAY INFRASTRUCTURE
                        </SubHeading>

                        <Paragraph>
                            Preserving the condition of the regional roadway
                            system—including pavement, bridges, and other
                            associated infrastructure such as signals, lighting,
                            and storm water facilities—is critical for safe and
                            efcient travel. Well-maintained roads also reduce
                            vehicle operating costs, help retain and attract
                            businesses, and contribute to achieving a high
                            quality of life for the region’s residents. Roadways
                            and bridges can last a long time before they need to
                            be completely reconstructed or replaced (typically
                            50+ years for roads and 50-75 years for bridges).
                            However, motor vehicle use and changing weather
                            conditions, especially freeze/thaw cycle in winters,
                            deteriorate roads over time. Therefore, routine
                            maintenance, periodic rehabilitation, and eventually
                            reconstruction are necessary. The timing and choice
                            of treatment is important for achieving longterm
                            cost savings. Focusing on relatively small-scale
                            maintenance work (e.g., crack sealing, patching and
                            seal coating) prior to structural degradation can
                            avoid the need for costly premature pavement
                            reconstruction. The state highway system is in
                            better shape than the local roadway system with 100%
                            of the Interstates, 87% of U.S. Highways, and 67% of
                            State Trunk Highways in good condition. The recent
                            fve-year trend in state highway condition is mixed
                            with U.S. Highways improving, but State Trunk
                            Highways getting worse. A total of 11% of lane-miles
                            of U.S. Highways and 16% of State Trunk Highways
                            were in poor condition in 2019/’20. The overall
                            condition of county and local arterials has stayed
                            about the same in recent years, but the condition of
                            collectors and local streets has deteriorated.
                            Around 9-16% of these local streets is in poor
                            condition and another 32-38% in fair condition.
                            Additional funding will be needed in the future to
                            maintain the current roadway system, let alone begin
                            to reduce the percentage of the system in poor or
                            fair condition. For more information, see the
                            fnancial analysis of the plan in Chapter 5. Figures
                            A-a through A-e in Appendix A lists programmed,
                            planned, and other potential needed high cost, major
                            preservation projects during the plan period. This
                            includes both peripheral area arterial roadways that
                            will need to be reconstructed to urban standards to
                            accommodate planned development and arterial streets
                            within existing developed areas that will likely
                            require reconstruction due to their age and
                            condition.
                        </Paragraph>

                        <Image />

                        <SubHeading>
                            CONSTRUCT NEW ROADWAYS TO EFFICIENTLY ACCOMMODATE
                            FUTURE GROWTH
                        </SubHeading>
                        <Paragraph>
                            Planning for and building a well-connected roadway
                            network to serve developing areas is crucial for
                            efciently distributing trafc on the regional system
                            and providing multimodal connections between
                            neighborhoods. As connectivity of the system
                            increases, travel distances decrease and route
                            options increase, allowing more direct travel
                            between destinations, creating a more accessible and
                            resilient system. Dispersing trafc over more roads
                            is more efcient from a trafc circulation
                            perspective, and also better supports alternative
                            travel modes by providing more route options and by
                            limiting the need for overly-wide arterials and
                            intersections that serve as barriers to bicyclists
                            and pedestrians. Other benefts of a connected
                            network include improved emergency response and
                            increased efciency and safety of services such as
                            garbage collection, street sweeping, and school bus
                            service. The traditional roadway functional
                            classifcation system described in Chapter 3 provides
                            a good starting point for planning and managing a
                            roadway system that provides mobility for moving
                            trafc and goods while at the same balancing that
                            with the other functions streets provide such as
                            property access, parking, and safe, convenient, and
                            comfortable travel by nonmotorists. Trafc speeds,
                            access, and level of street connectivity should vary
                            depending on the function of the street. The design
                            of streets and the level of trafc congestion
                            tolerated must also consider the land use context,
                            community development goals, and the needs of all
                            modes of travel. The street typology concept
                            discussed in Chapter 3 addresses these tenets. See
                            the
                            <SectionLink
                                link="https://www.greatermadisonmpo.org/planning/documents/PedestrianFacilityRequirementsandPoliciesandStreetStandards_FINAL_5_25_21.pdf"
                                title="Pedestrian
and Bicycle Facility Requirements, Policies,
and Street Standards"
                            />
                            report for current metro-area community requirements
                            and standards, as well as national recommendations
                            for these standards. Map 4-a illustrates the planned
                            future roadway functional classifcation system,
                            including important planned collector streets to
                            serve (re)development. It also highlights roadways
                            that are likely to move up in classifcation –
                            existing collectors that will function as minor
                            arterials or minor arterials that will function as
                            principal arterials – due to increased trafc volumes
                            and new development served. Examples include the
                            Egre Rd. corridor (including planned extension to
                            USH 151) in Sun Prairie – forecast as a future minor
                            arterial – and the Grand Ave./Reiner Rd./Sprecher
                            Rd. corridor on the east side – forecast as a future
                            principal arterial.
                        </Paragraph>

                        <SubHeading>
                            EXPAND THE REGIONAL ROADWAY SYSTEM STRATEGICALLY TO
                            ADDRESS CRITICAL BOTTLENECKS AND ACCOMMODATE FUTURE
                            GROWTH
                        </SubHeading>
                        <Paragraph>
                            Household and employment growth and development and
                            travel trends such as increased suburb-to-suburb
                            travel have led to increasing trafc volumes and
                            congestion levels on some regional roadways. While
                            increased teleworking due to the pandemic has
                            resulted in fatter peaks in trafc and slightly less
                            trafc overall compared to preCOVID, anticipated
                            growth will continue to worsen congestion in the
                            future, eventually negatively afecting the region’s
                            economic competitiveness and quality of life. While
                            transportation demand management (TDM) and
                            transportation systems management and operations
                            strategies can mitigate this congestion – and are
                            the only practical and acceptable solutions in
                            central Madison and the downtown business districts
                            of suburban communities – strategic roadway capacity
                            increases will be necessary in the future to address
                            some current bottlenecks and handle projected trafc
                            from planned growth. In order to evaluate the future
                            performance of the roadway system from a capacity
                            standpoint, the MPO used a regional travel forecast
                            model to project future travel and trafc volumes on
                            the regional roadway system based on forecast
                            household and job growth and assumed land use
                            development to accommodate that growth. Consistent
                            with the MPO’s congestion management policy to
                            utilize transportation demand management (TDM) frst
                            in addressing congestion, travel forecasts were
                            based on a land use development scenario that
                            prioritizes growth in infll/redevelopment areas and
                            centers and multimodal corridors and with generally
                            higher densities consistent with CARPC’s Regional
                            Development Framework. Also consistent with that
                            policy, the ambitious planned regional transit and
                            bikeway network plans were assumed in the travel
                            model. This includes a full Bus Rapid Transit
                            vision. Finally, consistent with the policy to look
                            next to roadway system management strategies,
                            planned new two-lane collector streets and street
                            extensions to serve developing and redeveloping
                            areas were added to the model. These collector
                            streets help distribute trafc, allowing the regional
                            arterial system to more efciently handle that trafc.
                            Finally, roadway capacity projects that are
                            programmed for construction in the next fve years
                            were added to model. These include the Beltline Flex
                            Lane and County Trunk Highway (CTH) M (North)
                            projects. The travel model was run with these
                            transit, bikeway, and roadway projects to frst
                            determine their impacts prior to consideration of
                            recommending any new roadway capacity expansion
                            projects.
                        </Paragraph>
                        <Image />

                        <Paragraph>
                            Map 4-b shows the projected trafc volume increases
                            on the regional roadway system between 2016 (travel
                            model base year) and 2050 under this scenario
                            (called Scenario 1), while Map 4-c shows the
                            projected generalized levels of congestion in 2050.
                            Based on the results of this initial scenario, local
                            roadway capacity project needs were then identifed
                            to address corridors projected to be near or over
                            capacity, but only those deemed consistent with plan
                            goals. The two most signifcant of these are the CTH
                            K (CTH M to US Highway 12) and Reiner/Sprecher Road
                            (O’Keefe to Milwaukee Street and the section on new
                            alignment to CTH AB) corridors. The CTH K corridor
                            is part of the long studied “North Mendota Parkway”
                            concept. The preferred solution to capacity in this
                            corridor would be to build a roadway on new
                            alignment in the corridor to avoid splitting farms
                            and taking homes. If that proves too difcult and
                            costly, the default solution would be to expand CTH
                            K to four lanes. Either way, an interchange is
                            recommended at USH 12, the likely location of which
                            was identifed in the USH 12 freeway conversion
                            study. It is recommended that a study of the CTH K
                            corridor be resumed again, a specifc route
                            identifed, and the corridor ofcially mapped. This
                            would allow real estate acquisition to begin, a
                            necessary frst step for a construction project. See
                            Map 4-d for all of the planned local arterial
                            capacity expansion projects , also listed in Figure
                            A-b in Appendix A. It is recommended that arterial
                            roadways reconstructed with more than two travel
                            lanes generally include medians, with appropriate
                            openings for turning movements and turn lanes.
                            Access management strategies, such as restricting
                            driveway access, should also be used. These and
                            other design strategies provide for more efcient
                            operations and improve safety.
                        </Paragraph>

                        <Image />
                        <b>
                            Increase in Daily Volumes between 2016 and 2050
                            Scenario 1
                        </b>

                        <Image />
                        <b> 2050 Roadway Congestion Scenario 1 </b>

                        <Paragraph>
                            Map 4-d also identifes existing and planned new
                            peripheral roadways where a capacity expansion will
                            or may be required at some point in the future to
                            accommodate future development. Based on the planned
                            growth scenario, however, it is not clear that
                            expanded capacity will be needed within the plan
                            timeframe. Timing of reconstruction of these
                            roadways, with or without expanded capacity, is
                            dependent upon future development. In order to keep
                            options open, it is recommended that right-of-way be
                            reserved, if needed, access managed, and the
                            corridors ofcially mapped, where appropriate. Many
                            of these are county highways, including CTH Q, CTH
                            CV, CTH T, and CTH AB. Two state highway capacity
                            expansion projects are currently programmed. The
                            most signifcant is the Beltline Flex Lane project
                            from Whitney Way to the Interstate, which will be
                            completed in 2022. The other is the section of the
                            larger USH 51 (McFarland to Stoughton) project from
                            Jackson Street to CTH B, scheduled for construction
                            in 2025-’26. Additional major state highway projects
                            potentially involving capacity expansion are
                            expected to come out of the current major corridor
                            studies of the Beltline (USH 12/14/18/151) (USH 14
                            to CTH N), Stoughton Road/USH 51 (STH 19 to
                            Beltline), and the Interstate (39/90/94) (Beltline
                            to Portage). The Flex Lanes on the Beltline are
                            expected to provide the needed capacity for the next
                            ffteen years or so. The current study, which is in
                            its initial phase, is looking at possible long-term
                            solutions to improve trafc operations, including
                            extending the Flex Lanes or adding a general purpose
                            lane and further interchange improvements.
                            Multimodal improvements in the corridor are also
                            being studied, including street and bike/pedestrian
                            crossings of the Beltline and transit priority
                            through some interchanges. The capacity issues on
                            Stoughton Road are at the remaining at-grade
                            intersections. These intersections are also the
                            worst performing from a safety standpoint. The
                            Stoughton Road study is looking at solutions to
                            these issues along with multimodal improvements;
                            addition of travel lanes is unlikely. The Interstate
                            study is looking at long-term needs in that
                            corridor, which revolve around its heavy freight use
                            and summer tourist trafc peaks. As part of this
                            study, potential new interchanges at Hoepker Road
                            and I-90/94 and Milwaukee Street extension and I-94
                            will be studied for their impact on operations,
                            including other interchanges. This is being done at
                            the request of the City of Madison. A future study
                            is recommended for the STH 19/STH 113/CTH M (“North
                            Mendota Parkway”) corridor. The timing of this is
                            uncertain, but much of this corridor is anticipated
                            to be nearing or at capacity in the future.
                            Continuation of intersection and other small-scale
                            safety, operations, and multimodal improvements in
                            the corridor are recommended in the interim. Three
                            state highway corridors have been studied for
                            potential freeway conversions with environmental
                            studies completed and recommended alternatives
                            identifed. These are: USH 12/18 (Interstate to CTH
                            N); USH 12 (Parmenter Street to STH 19); and USH
                            18/151 west of Verona. The conversion of the segment
                            of USH 12/18 from I-39/90 to CTH AB with a new CTH
                            AB interchange is scheduled for construction in
                            2023-2024 to address safety issues in this corridor.
                            For the remainder of that highway and the other two,
                            the next step is to ofcially map the corridors with
                            potential future freeway conversion dependent on
                            real estate acquisition, funding, and other
                            priorities. Map 4-d illustrates recommended major
                            capacity expansion and intersection, interchange,
                            and bridge widening projects as well as the
                            aforementioned major state highway corridor studies,
                            also listed in Figure A-a and A-b in Appendix A.
                            Figure A-a lists programmed projects for 2022-2026
                            and Figure A-b lists additional planned projects
                            grouped into two time periods (2027-2035,
                            2036-2050). The actual timing of the planned
                            projects will depend on future development and trafc
                            growth, impacts of congestion management strategies,
                            system preservation needs, available funding, and
                            other factors. Figure A-e in Appendix A includes a
                            short list of “illustrative” major capacity
                            expansion projects that are not part of the fscally
                            constrained, federally recognized plan at this time.
                            These include projects that will come out of the
                            three ongoing major state highway corridor studies
                            of the Beltline, Stoughton Road, and Interstate
                            39/90/94. Inclusion of these projects in the
                            federally recognized plan is dependent upon
                            completion of the environmental studies,
                            identifcation of and regional agreement on the scope
                            and cost of recommended improvements, and
                            demonstration that funding is likely to be available
                            for them.
                        </Paragraph>

                        <SubHeading>
                            INCORPORATE COMPLETE STREETS AND GREEN STREETS
                            CONCEPTS FOR REGIONAL AND LOCAL ROADWAYS
                        </SubHeading>

                        <Paragraph>
                            Complete streets are streets that are designed to
                            help people get where they want to go, whatever
                            their mode of choice. Serving the needs of those who
                            have historically been marginalized in the
                            transportation planning process and underserved by
                            the transportation system—low-income people, elderly
                            and disabled people, and racial and ethnic minority
                            groups—is of particular importance. Integrating
                            community context into all planning, construction,
                            and operations activities can help ensure that the
                            goal of providing free-fowing thoroughfares for
                            motor vehicles does not crowd out safety, equity,
                            and other community priorities. While a complete
                            street may or may not be equipped with facilities
                            like sidewalks and bike lanes, the need for
                            facilities to accommodate travelers using
                            alternative modes should be thoroughly considered
                            prior to construction. Green streets are designed to
                            slow, flter, and cleanse stormwater runof through
                            the use of permeable pavement, rain gardens, trees,
                            and other features. Using these types of design
                            features can remove up to 90% of roadway pollutants
                            that would otherwise be washed into nearby water
                            bodies. Green streets also help to increase
                            groundwater supplies, improve air quality, and
                            provide green connections between areas of open
                            space. Some common features of green streets, such
                            as vegetated curb extensions, also serve to calm
                            trafc and improve safety for bicyclists and
                            pedestrians. MPO policy is to support the adoption
                            of green and complete streets policies by local
                            communities, and to require that streets funded
                            through the STBG-Urban program be designed and
                            constructed as complete streets. The City of Madison
                            is in the process of developing a Complete Green
                            Streets policy to improve livability, and as a way
                            to mitigate and adapt to the efects of climate
                            change.
                        </Paragraph>

                        <SubHeading>CONTINUE TO PRIORITIZE SAFETY </SubHeading>
                        <Paragraph>
                            The Safe System Approach defnes fve elements of a
                            safe transportation system— safe road users, safe
                            vehicles, safe speeds, safe roads, and post-crash
                            care—and considers them in an integrated and
                            holistic manner (Figure 4-c). To make meaningful
                            progress, changes are needed in how to think about
                            the trafc safety problem and approaches to solve the
                            problem. Principles of the Safe System Approach
                            include:
                        </Paragraph>

                        <List>
                            <li>
                                <b> Safe Road Users— </b>The safety of all road
                                users is equitably addressed, including those
                                who walk, bike, drive, ride transit, or travel
                                by other modes.
                            </li>
                            <li>
                                <b> Safe Vehicles— </b> Vehicles are designed
                                and regulated to minimize the frequency and
                                severity of collisions using safety measures
                                that incorporate the latest technology.
                            </li>
                            <li>
                                <b> Safe Speeds— </b> —Humans are less likely to
                                survive high-speed crashes. Reducing speeds can
                                accommodate human-injury tolerances in three
                                ways: reducing impact forces, providing
                                additional time for drivers to stop, and
                                improving visibility.
                            </li>
                            <li>
                                <b> Safe Roads— </b> Designing transportation
                                infrastructure to accommodate human mistakes and
                                injury tolerances can greatly reduce the
                                severity of crashes that do occur. Examples
                                include physically separating people traveling
                                at diferent speeds, providing dedicated times
                                for diferent users to move through a space, and
                                alerting users to hazards and other road users.
                            </li>
                            <li>
                                <b> Post-Crash Care— </b> People who are injured
                                in collisions rely on emergency frst responders
                                to quickly locate and stabilize their injuries
                                and transport them to medical facilities.
                                Post-crash care also includes forensic analysis
                                at the crash site, trafc incident management,
                                and other activities
                            </li>
                        </List>

                        <Paragraph>
                            Network screening is a systematic review of roadway
                            crashes to identify problematic locations. In 2021
                            the University of Wisconsin Trafc Operations and
                            Safety Lab (TOPS Lab) updated the MPO intersection
                            network screening report for 2017-2020 and developed
                            an optimization tool that is recommended to help
                            local agencies identify intersection locations and
                            cost efective safety countermeasure strategies that
                            can be used for prioritizing safety projects. The
                            MPO will also be partnering with the TOPS Lab to
                            develop a High Injury Network that can be used to
                            prioritize system-wide safety improvements to help
                            achieve zero deaths and serious injuries on Dane
                            County roadways.
                        </Paragraph>

                        <Image />
                        <b> The Safe System Approach</b>

                        <Paragraph>
                            Contributing factors to vehicle crashes may include
                            both roadway design and/ or behavioral factors such
                            as speeding, distraction, and impairment. It is
                            critical to continue supporting local eforts to
                            improve roadway safety. Both Madison and Sun Prairie
                            have adopted Vision Zero policies to achieve zero
                            roadway deaths and serious injuries. Strategies
                            include reducing speed limits, improving bike and
                            pedestrian accommodations, and outreach and
                            education eforts. The Dane County Trafc Safety
                            Commission is a multidisciplinary coalition of
                            public and private organizations, including public
                            health, law enforcement agencies, engineering,
                            judicial, education, and advocacy organizations
                            working together to monitor and improve trafc
                            safety. The Trafc Safety Commission meets quarterly
                            to review serious and fatal crashes, identify
                            possible contributing factors, and make trafc safety
                            recommendations. Current trafc safety emphasis areas
                            that the Commission is working on include: reducing
                            impaired driving; reducing risky driving behaviors;
                            improving pedestrian safety; and centering equity in
                            trafc safety.
                        </Paragraph>

                        <SubHeading>
                            ADDRESS SECURITY AND RESILIENCY NEEDS OF THE
                            REGIONAL ROADWAY SYSTEM
                        </SubHeading>
                        <Paragraph>
                            The regional roadway system must be able to
                            withstand natural and manmade threats, shocks, and
                            stressors. The region relies on a resilient
                            transportation system that can ensure the movement
                            of people and goods in the face of one or more major
                            obstacles to normal function, such as extreme
                            weather events, major accidents, or other
                            infrastructure failure. As technology plays an
                            increasingly integral role in the transportation
                            system, ensuring the cybersecurity of vital ITS
                            networks will become increasingly important in the
                            future.
                        </Paragraph>

                        <b>Roadway Recommendations and Supporting Actions </b>
                        <Image />
                        <Image />
                    </PageSection>

                    <PageSection id="section7">
                        <SectionHeader>
                            Transportation System Management and Operations
                            (TSMO) and Technology
                        </SectionHeader>

                        <Paragraph>
                            Adding travel lanes to a roadway or other major
                            capacity expansion is often not feasible or
                            desirable because of the cost and many negative
                            impacts to the environment, residents’ quality of
                            life, and other roadway users. However, actively
                            managing the transportation system to improve trafc
                            operations can increase the capacity of a roadway
                            without constructing new lanes. Transportation
                            system management and operations (TSMO) includes
                            strategies such as improved trafc signal operations,
                            management of roadway incidents, and traveler
                            information, as well as targeted roadway
                            modifcations (often at intersections where most
                            delay occurs) to provide bottleneck relief.
                            Intelligent Transportation Systems (ITS) –
                            technologies or systems (e.g., sensors, computers,
                            communications) that allow multiple agencies to work
                            together – can aid these TSM strategies. Even for
                            roadways that will eventually need to have travel
                            lanes added, TSM can delay the need for the capacity
                            expansion and should be utilized frst and in
                            conjunction with the new capacity. In short, TSM,
                            including ITS, is about actively managing the
                            operation of the transportation system using
                            technology and targeted infrastructure investments
                            to improve travel conditions and make the best use
                            of existing transportation infrastructure. See
                            Figure 4-e for TSMO and Technology Recommendations
                            and Supporting Actions.
                        </Paragraph>

                        <SubHeading>
                            IMPLEMENT THE CONGESTION MANAGEMENT PROCESS
                        </SubHeading>
                        <Paragraph>
                            To minimize congestion for all transportation modes
                            and reduce unexpected delay, the MPO has adopted a
                            comprehensive congestion management process (CMP)
                            (Appendix F). The CMP prescribes comprehensive
                            transportation system management and operations
                            strategies such as trafc signal coordination,
                            traveler information, and enhanced incident response
                            coupled with physical bottleneck relief through
                            targeted capacity expansion to ensure the most
                            efcient use of resources and minimize the
                            environmental impact of the transportation system.
                            The efcacy of this process is determined in part by
                            an annual performance measurement and monitoring
                            process.
                        </Paragraph>

                        <List>
                            <p>The CMP prioritizes: </p>
                            <li>
                                Strategies that eliminate vehicle trips through
                                land use changes or other actions that reduce
                                peak-period vehicle trips like fexible work
                                hours or telecommuting.
                            </li>
                            <li>
                                Strategies that eliminate peak period vehicle
                                trips by causing a mode change from auto to
                                transit, bicycle, or pedestrian.
                            </li>
                            <li>
                                Strategies that improve the operation of the
                                existing roadway system, making it more efcient
                                for all users.
                            </li>
                            <li>
                                Strategies that add roadway capacity, primarily
                                at bottlenecks or other strategic locations,
                                should only be considered when other strategies
                                prove inefective and doing so is consistent with
                                other goals and policies.
                            </li>
                        </List>

                        <Paragraph>
                            The development of a regional Transportation Systems
                            Management and Operations (TSMO) plan could help
                            achieve the goals and priorities of the CMP. A TSMO
                            plan is a set of strategies that focus on optimizing
                            operational improvements that can maintain and even
                            restore the performance of the existing
                            transportation system before extra capacity is
                            needed. TSMO solutions should be considered at any
                            location that experiences either recurring or
                            non-recurring congestion. TSMO improvements may
                            include trafc signal coordination, integrated
                            corridor management, work zone management, trafc
                            incident management, transit signal priority and
                            more.
                        </Paragraph>

                        <SubHeading>
                            IMPROVE THE OPERATION OF THE TRANSPORTATION NETWORK
                            BY MANAGING ROADWAY ACCESS
                        </SubHeading>

                        <Paragraph>
                            Access management is the control of the location,
                            spacing, design, and operation of driveways, median
                            opening, interchanges, and street connections to a
                            roadway. Access management is intended to provide
                            vehicular access to land and development in a manner
                            that preserves the safety and efciency of the
                            transportation system. Access management follows a
                            roadway hierarchy similar to functional
                            classifcation. Access management can help increase
                            roadway safety and reduce trafc congestion.
                            Multimodal benefts of access management includes
                            fewer trafc confict points for motorists, cyclists,
                            and pedestrians, a safer walking environment (e.g.,
                            through median refuges for crossing roadways), and
                            reduced delay and travel times for transit riders.
                        </Paragraph>

                        <SubHeading>
                            MODERNIZE THE TRANSPORTATION NETWORK THROUGH THE USE
                            OF TECHNOLOGIES THAT IMPROVE THE OPERATIONS OF
                            EXISTING INFRASTRUCTURE
                        </SubHeading>
                        <Paragraph>
                            The operation of the transportation system can be
                            impacted not only by roadway design, but also by
                            technologies that modify trafc fow and provide
                            information to infuence traveler behavior. In terms
                            of importance, neither method can be understated. To
                            plan for and coordinate future operational
                            improvements, the MPO adopted the frst Regional
                            Intelligent Transportation Systems Strategic Plan in
                            early 2016. This plan contains a prioritized list of
                            recommended projects, as well as strategies to guide
                            plan implementation. The plan should be implemented
                            and updated as needed.
                        </Paragraph>

                        <SubHeading>
                            PROMOTE THE TRANSITION TOWARDS ELECTRIC VEHICLES BY
                            DEVELOPING CHARGING INFRASTRUCTURE
                        </SubHeading>

                        <Paragraph>
                            Transitioning away from traditional fossil fuels
                            toward electric powered vehicles represents one way
                            in which Dane County can decrease emissions, slowing
                            global warming and reducing our reliance on imported
                            fossil fuels. A 2018 study conducted by Frontier
                            Group, Environment America and U.S. PIRG, estimates
                            that Madison would need 202 level 2 chargers in
                            workplaces, 126 level 2 chargers in public places
                            and 14 public DCFCs to accommodate 9,000 electric
                            vehicles within the city limits by 2030.18 These
                            numbers are based on a conservative city population
                            growth scenario; Madison, and the surrounding
                            communities, may well need more public and workplace
                            chargers than these recommendations. This same study
                            recommends the following to implement clean
                            transportation systems: expanding access to charging
                            infrastructure, increasing familiarity with electric
                            vehicles, and easing range anxiety. Local
                            governments can help speed the growth of charging
                            networks in collaboration with local energy
                            providers by allowing, incentivizing, or even
                            requiring property owners to make those
                            improvements.
                        </Paragraph>

                        <b>
                            TSMO and Technology Recommendations and Supporting
                            Actions
                        </b>
                        <Image />
                    </PageSection>

                    <PageSection id="section8">
                        <SectionHeader>
                            <SectionLink
                                title="VIEW MORE"
                                link={
                                    "https://www.greatermadisonmpo.org/planning/documents/Ch-04-ConnectRTP-web.pdf"
                                }
                            />
                        </SectionHeader>
                    </PageSection>
                </SectionWrapper>
            </PageDisplay>
        </>
    );
}

export default SystemTomorrow;
