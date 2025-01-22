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
} from "../components/common";

function Funding() {
    const sections = [
        {
            to: "section1",
            title: " Introduction  ",
        },
        {
            to: "section2",
            title: "  Funding Trends in the Metropolitan Planning Area ",
        },
        {
            to: "section3",
            title: " Projected Revenues through 2050   ",
        },{
            to: "section4",
            title: " Projected Expenses through 2050  ",
        },
        {
            to: "section5",
            title: " Conclusion  ",
        },
        
    ];
    
    return (
        <>
            <PageHeader>
                Funding the Plan: Financial Capacity Analysis
            </PageHeader>
            <PageDisplay>

                <TableOfContent sections={sections}/>

                <SectionWrapper>
                    <PageSection id="section1">
                        <SectionHeader> Introduction </SectionHeader>

                        <Paragraph>
                            Federal transportation planning rules require that
                            regional transportation plans include a fnancial
                            capacity analysis to demonstrate that the plan is
                            fscally constrained. That is, it must be
                            demonstrated that the estimated costs of recommended
                            capital projects in the federally recognized,
                            fscally constrained plan and maintenance of the
                            transportation system can be covered using available
                            and projected revenue sources. If projected funding
                            shortfalls exist, new sources of revenue must be
                            identifed. While projecting revenue and project
                            costs out for such a long period is very difcult,
                            the purpose of the analysis is to ensure the plan
                            doesn’t just include a wish list of projects.
                            Rather, potential projects need to be prioritized,
                            realistically assessing the ability to fund them,
                            and balancing the needs of new facilities or
                            capacity expansion projects with system preservation
                            needs.
                        </Paragraph>

                        <Paragraph>
                            The plan may identify recommended or needed
                            projects, but if it cannot be demonstrated that
                            funding is reasonably likely to be available for the
                            projects or the scope and cost of projects is
                            uncertain, they cannot be included in the federally
                            recognized plan. For example, later phases of the
                            planned Bus Rapid Transit (BRT) system are not part
                            of the fscally constrained plan. The currently
                            budgeted East-West Route and the planned North/South
                            route are included. The major state highway projects
                            that will come out of the current Beltline and
                            Stoughton Road studies are also not included due to
                            the uncertain scope and cost of those projects. The
                            same is true of project(s) to come out of the
                            Interstate study, although as an inter-city project
                            it would not need to be part of the MPO’s fscally
                            constrained plan. The fnancial capacity analysis
                            takes into account recent trends in sources and uses
                            of funds and currently programmed projects, and
                            estimates the ability of anticipated funding sources
                            to meet the maintenance, preservation, and capacity
                            expansion needs of the transportation system.
                            Average annual program funding amounts were
                            estimated based on recent trends. The analysis also
                            accounts for the large increase in federal
                            transportation formula program funding in federal
                            fscal years (FFY) 2022-2026 under the recently
                            passed Infrastructure Investment & Jobs Act (IIJA),
                            also known as the Bipartisan Infrastructure Law
                            (BIL). The IIJA included the reauthorization of the
                            federal surface transportation legislation. The law
                            maintains the same basic formula funding programs,
                            but also includes some new formula and discretionary
                            grant programs that allow states, MPOs, and local
                            governments to apply directly to USDOT for funding.
                            The Federal Highway Administration (FHWA) recently
                            released the state and MPO federal formula program
                            allocations for FFY 2022. For the two existing
                            programs for which the MPO receives a suballocation
                            of funding – Surface Transportation Block Grant
                            (STBG) Urban and Transportation Alternatives Program
                            (TAP) — those FFY 2022 amounts were assumed as
                            average annual funding moving forward. For the two
                            programs allocated to states — National Highway
                            Performance Program (NHPP) and Highway Safety
                            Improvement Program (HSIP) — the same percentage
                            increase in program funding for Wisconsin was
                            assumed for the Madison Metropolitan Area. A 2.0%
                            annual infationary increase in these funding amounts
                            was assumed into the future. No additional funding
                            was assumed from the new discretionary program
                            funding.
                        </Paragraph>

                        <Image />
                        <Paragraph>
                            The IIJA provides the federal transportation funding
                            program and planning framework for the next fve
                            years. While the IIJA and other recent
                            transportation bills have made some changes in
                            programs, the current basic formula program
                            framework has been in place since 1991 when the
                            landmark ISTEA legislation was passed. Therefore, it
                            is safe to assume that this basic framework will
                            continue. As noted, IIJA added numerous
                            discretionary grant programs. While it is safe to
                            assume at least some of those will continue in the
                            future and the greater Madison region will be able
                            to secure some of those funds, this hasn’t been
                            factored into the analysis. While short-term funding
                            methods using general revenue were employed to
                            provide the necessary funding for the IIJA, it is
                            assumed that a long-term solution will be developed
                            to maintain those funding levels with the assumed
                            infationary increases. The fnancial capacity
                            analysis assumes that state funding will increase
                            around 2% annually. This has not been the trend for
                            highway construction funding. From 2006 — the last
                            year the state gas tax was increased — to 2021
                            highway construction funding (including state
                            highways and local road and bridge assistance)
                            actually decreased 15% or an average of 1% per year
                            in constant dollars. In contrast, highway operations
                            (maintenance) funding increased 32% or 2.1% per
                            year. Transit aids decreased almost 24% or 1.6% per
                            year.1 This plan assumes that in the long term, the
                            state transportation funding situation will be
                            addressed and that infationary increases to recent
                            spending levels in the Metropolitan Planning Area
                            will be provided. In the long run, additional or
                            alternative transportation funding source(s) to the
                            gas tax will be needed at both the state and federal
                            levels with the electrifcation of the feet. The most
                            logical is some sort of road user charge. While the
                            future source(s) of revenue is uncertain, an assumed
                            continuation of current federal funding levels under
                            the IIJA and recent state funding levels with future
                            infationary increases to both is reasonable.
                            Estimated project costs must be in
                            year-ofexpenditure dollars, refecting an assumed
                            infationary factor. An infationary factor of 1.74%
                            was used for project costs. As noted, a 2.0%
                            infationary factor was used for program funding in
                            accordance with WisDOT and USDOT guidance.
                        </Paragraph>

                        <Image />
                    </PageSection>

                    <PageSection id="section2">
                        <SectionHeader>
                            Funding Trends in the Metropolitan Planning Area
                        </SectionHeader>

                        <SubHeading>
                            COUNTY AND MUNICIPAL STREETS/ ROADWAYS
                        </SubHeading>
                        <Paragraph>
                            Municipal streets are mostly fnanced by local
                            funding sources. These include general revenues
                            (mostly from the property tax) and bonds and, in the
                            case of municipalities, also special assessments,
                            impact fees, and tax increment fnancing. Counties
                            cost share with municipalities on some projects.
                            WisDOT distributes state funding to counties and
                            municipalities through the state’s General
                            Transportation Aids and Connecting Highway Aids
                            programs, and through other local programs such as
                            the Local Road Improvement Program. Figure 5-a,
                            Historical County and Local Street/ Roadway
                            Expenses, shows the expenditures for operations and
                            maintenance, construction, and other street related
                            facilities (e.g., lighting, sidewalks, storm sewers)
                            by municipalities in the Metropolitan Planning Area
                            from 2015 to 2019, the last year for which data was
                            available.2 The expenses include those from local
                            revenues as well as state and federal programs.
                            Total annual costs for Dane County and all
                            municipalities within the Metropolitan Planning Area
                            increased signifcantly over this 5-year period from
                            $117.9 million in 2015 to $181.4 million in 2019
                            with the largest increases in 2018-‘19. This was due
                            in part to sharp increases in the cost of roadway
                            construction materials. The annual average over the
                            5-year period was $149.5 million. This includes an
                            average of $88.1 million for construction and $61.4
                            million for operations and maintenance.
                        </Paragraph>

                        <SubHeading>
                            FEDERAL AND STATE FUNDING FOR STREETS/ROADWAYS
                        </SubHeading>

                        <Paragraph>
                            Federal and state funding accounts for 25.5% and
                            64.7% of revenues, respectively, in the WisDOT
                            2021-‘23 biennial budget with bond funds (3.6%) and
                            other funds (3.5%) accounting for the remainder.
                            Federal funding is derived primarily from the
                            federal motor fuel tax and then allocated to the
                            states and large urban areas. Federal program
                            funding sources under the current surface
                            transportation legislation, the IIJA, that are used
                            for roadway improvements include the following:
                        </Paragraph>
                        <List>
                            <li>
                                {" "}
                                National Highway Performance Program (NHPP);{" "}
                            </li>
                            <li>
                                Surface Transportation Program Block Grant
                                (STBG) Program (formerly Surface Transportation
                                Program) – includes three categories of funding
                                (Urban, Rural/Small Urban, and State
                                Flexibility); and
                            </li>
                            <li>
                                Highway Safety Improvement Program (HSIP) – also
                                includes three categories.
                            </li>
                        </List>

                        <Paragraph>
                            The NHPP and STBG – State Flexibility programs have
                            been used exclusively for state highway projects,
                            while the HSIP program is available for funding both
                            state and local projects. The STBG – Urban and
                            Rural/Small Urban programs are for county and local
                            roadway projects. For the Metropolitan Planning
                            Area, the STBG Urban Program is the most signifcant
                            of these federal programs for local projects. Most
                            of the funding has been used for county and local
                            road projects, but the program has also been used
                            for other capital projects such Metro Transit bus
                            purchases and an ITS project. A bicycle/pedestrian
                            project was approved in the last application cycle.
                            The MPO also funds its Transportation Demand
                            Management (TDM) program primarily with this
                            funding. The Greater Madison MPO receives an
                            allocation of STBG – Urban Program funding and
                            selects county and local projects for funding based
                            on approved policies and project evaluation
                            criteria. The MPO’s annual allocation had been $6.86
                            million in the recent past, but will increase to
                            $8.99 million in FFY 2022 under the IIJA. A further
                            small increase is expected in FFY 2023 and beyond
                            once 2020 Census urban area population data is
                            factored into the funding allocations. That has not
                            been factored into the revenue estimate. The higher
                            STBG – Urban program funding level in FFY 2022 under
                            the IIJA is assumed to continue into the future with
                            infationary adjustments as with other programs.
                            State transportation funding is derived primarily
                            from the state motor fuel tax, driver license fees,
                            and vehicle registration fees. Funding for state
                            highways is distributed through several programs,
                            including the following:
                        </Paragraph>

                        <Image />
                        <List>
                            <li>
                                State Highway Rehabilitation (SHR) program,
                                which funds maintenance work on existing state
                                highways along with safety and minor capacity
                                improvements;
                            </li>
                            <li>
                                Highway System Management and Operations (HSMO)
                                program, which funds activities to ensure the
                                proper functioning and safety of the state
                                highway system, including trafc operations and
                                management of the State Trafc Operations Center;
                                and
                            </li>
                            <li>
                                Majors program, which funds the most complex and
                                costly projects, often involving capacity
                                expansion, to address the most serious
                                defciencies on the most important state highways
                            </li>
                        </List>

                        <Image />

                        <Paragraph>
                            Figure 5-b shows the annual federal and state
                            funding program revenue estimates (in current
                            dollars), in most cases based on recent funding
                            levels over the past 5-6 years (2016-2021), but
                            modifed by the federal program funding increases
                            provided by the IIJA, which are assumed to continue
                            moving forward. WisDOT provided the data on recent
                            federal and state program funding. For state highway
                            construction, estimated annual funding for Majors
                            program, backbone and non-backbone highway projects,
                            and bridge projects is $52.7 million, while
                            estimated funding for state highway maintenance and
                            operations is $9.1 million, for a total of $61.8
                            million. Estimated annual federal funding for local
                            roadway and bridge construction projects is $13
                            million, including $9 million in STBG Urban funding
                            through the MPO Estimated annual state funding is
                            $19.8 million with the vast majority of this coming
                            from the General Transportation Aids program.
                            Estimated annual local funding is $59 million for a
                            grand total of $91.8 million. Estimated annual
                            funding for local roadway maintenance and operations
                            is $61.4 million, including $8.2 million in state
                            funding and the rest local. Estimated local funding
                            for local roadway construction and operations and
                            maintenance was estimated by subtracting past
                            federal/state funding from total average revenues
                            from 2015-2019, the latest years for which data was
                            available.
                        </Paragraph>

                        <SubHeading>PUBLIC TRANSIT FUNDING </SubHeading>
                        <Paragraph>
                            The major transit operator in the Madison area is
                            Metro Transit, which is owned by the City of Madison
                            and operates within the oversight of the Mayor,
                            Common Council, and the City’s Transportation
                            Commission. Metro contracts with other
                            municipalities and public institutions (including
                            UW-Madison, UW Health, and the Madison Metropolitan
                            School District) to provide service for their
                            constituents. Metro ‘s capital and operating costs
                            are funded through a combination of federal funding,
                            state operating assistance, passenger fares, and
                            local funds primarily derived from the property tax.
                            Federal funding may be used for capital project
                            expenses, preventive maintenance costs, and a
                            portion may be used for complementary paratransit
                            service for persons unable to use fxed-route transit
                            The majority of Metro’s federal funding comes from
                            the Section 5307 Urbanized Area Formula Program
                            (UAFP), which is apportioned based on revenue
                            vehiclemiles, population, and population density.
                            Metro’s FFY 2021 apportionment of Section 5307 UAFP
                            funding was $7.2 million. Metro also receives
                            Federal Section 5337 State of Good Repair and
                            Section 5339 Bus and Bus Facilities Formula Program
                            funding. Funding for the Section 5337 program is
                            based on the miles of bus lanes and other dedicated
                            transit facilities, such as the State Street
                            pedestrian and transit mall, while funding for the
                            Section 5339 program is based on urbanized area
                            population and bus passenger-miles traveled divided
                            by operating costs. Metro’s FFY 2021 apportionment
                            for these two programs combined was $1.7 million.
                            Two discretionary components to the Section 5339
                            program were added under the FAST Act: a bus and bus
                            facilities program based on asset age and condition
                            and a low or no emissions bus deployment program.
                            The Infrastructure Investment and Jobs Act (IIJA)
                            adds 27% to Metro’s 5307 program allocation and 24%
                            to the 5339 program allocation beginning in FFY
                            2022. Infationary increases to these higher program
                            allocations are assumed moving forward. Funding, in
                            particular operating funds, has been and continues
                            to be a major challenge for Metro. At one time in
                            the mid-1990s state operating assistance covered 45%
                            of Metro’s operating budget; however, state funding
                            has been relatively fat and in 2019 state assistance
                            covered just 31.5% of operating expenses for the
                            system. Figure 5-c shows the distribution of Metro’s
                            operating revenue from 2016-2020. In the 2016-2019
                            period, the percent covered by local funding
                            decreased slightly from 33.2% to 29.8%, and the
                            percent covered by fares increased from 23.8% to
                            27.0%. The COVID-19 pandemic resulted in very
                            diferent 2020 operational funding, with fares and
                            directly generated funding decreasing to 16.3%,
                            local funding decreased to 17.9%, and federal
                            support increased to 33.0%. Given fat state funding
                            and tight local budgets, in part due to the state
                            expenditure restraint program, and the many other
                            competing demands for property taxes, it will become
                            increasingly difcult for Metro to cover infationary
                            operating cost increases in the future let alone
                            meet the service improvement and expansion needs of
                            the growing metro area and address its capital
                            needs, including bus replacements. Because Metro has
                            had to use the majority of its federal funding for
                            eligible operating expenses, this has put a squeeze
                            on its capital budget. A regional transit governance
                            structure with a dedicated local source of transit
                            funding will be required in order to make major
                            regional service improvements such as building out
                            the full BRT system, initiating express commuter
                            service to outlying communities, and increasing
                            service frequency in the core area. The state
                            legislature adopted legislation in 2009 authorizing
                            the creation of the Dane County Regional Transit
                            Authority (DCRTA) with the authority to implement a
                            local sales tax of up to ½ percent. The DCRTA was
                            formed in 2010 and, with the help of City of
                            Madison, Metro, and MPO staf, developed a draft
                            short-term plan for improved transit service to
                            support a referendum on a ¼ percent sales tax.
                            However, Assembly Bill 40 (Act 32) was passed in
                            2011, eliminating the RTA authorizing legislation
                            and dissolving the DCRTA.
                        </Paragraph>
                        <Image />

                        <Paragraph>
                            Lacking enabling legislation for a regional transit
                            authority, in 2020 the City of Madison adopted a new
                            motor vehicle registration fee (VRF), which replaces
                            $3.6 million/year in Metro funding that had
                            previously come from property tax revenue, adds $2.7
                            million to address increasing operational costs, and
                            provides $1.5 million for expanded transit service
                            including BRT.3 Dane County also collects a VRF, a
                            portion of which could conceivably be used to
                            support the provision of transit service to areas
                            and communities outside the current Metro service
                            area. While regressive, VRFs have the potential to
                            close the funding gap for incremental system growth
                            while a long-term funding solution to regional
                            transportation needs is secured. Figure 5-d shows
                            Metro Transit’s average annual capital and operating
                            revenue estimates based on 2016-2019 funding taken
                            from the agency’s National Transit Database (NTD)
                            reports and an adjustment to federal formula program
                            funding (Section 5307, 5337, and 5339) to refect
                            IIJA increases, which are assumed to carry forward
                            into the future. Between 2016 and 2019, capital
                            revenues fuctuated considerably year-to-year,
                            ranging from a low of $6.8 million in 2016 to a high
                            of $14.4 million in 2019, averaging $9.4 million
                            annually. Operating revenues were held relatively
                            fat year-to-year, ranging from $54.2 million in 2018
                            to $55.8 million in 2017, with a 4-year average of
                            $55 million. This mirrored relatively small changes
                            in service hours between 2016 and 2019, with a high
                            of 406,400 in 2018 and a low of 403,600 in 2019. The
                            four-year average for capital and operating revenues
                            combined was $64.4 million. Including increased
                            formula funding under the IIJA, which will increase
                            24-27%, the average annual combined capital and
                            operating revenues are estimated to increase to
                            $67.2 million.
                        </Paragraph>

                        <Image />

                        <SubHeading></SubHeading>
                        <Paragraph>
                            Local sources provide most of the funding used for
                            of-street bicycle and pedestrian facilities. This
                            includes Dane County’s PARC & Ride grant program,
                            which has provided a total of over $2 million in
                            three of the past six years4 for grants to local
                            communities for bicycle trail projects or an average
                            of $333,000 per year. Federal funding for ofstreet
                            bicycle and pedestrian facilities is provided
                            primarily through the Transportation Alternatives
                            Program (TAP). The MPO receives an allocation of TAP
                            funds, which it directs towards projects it selects.
                            The MPO’s annual allocation of funding has been
                            $617,000, but will double to $1.24 million under the
                            IIJA. WisDOT also receives a TAP funding allocation,
                            which it uses to fund projects throughout the state.
                            Madison area projects are also eligible for this
                            statewide pool of funds, and at least one Madison
                            area prFigure 5-f shows the projected total
                            transportation revenues for state highway, local
                            roadway, transit, and bicycle/pedestrian facility
                            projects for the next 28-year period from 2022 to
                            2050. The estimated revenues are based on the
                            average annual estimates in Figures 5-b, 5-d, and
                            5-e, which, as noted, are based on recent and
                            programmed funding levels, as well as the federal
                            funding program increases in IIJA. Infationary
                            increases to the revenue sources are assumed. It is
                            estimated that a total of almost oject has been
                            awarded statewide funding in each of the past two
                            program cycles, with total TAP funding for area
                            projects averaging approximately $200,Figure 5-f
                            shows the projected total transportation revenues
                            for state highway, local roadway, transit, and
                            bicycle/pedestrian facility projects for the next
                            28-year period from 2022 to 2050. The estimated
                            revenues are based on the average annual estimates
                            in Figures 5-b, 5-d, and 5-e, which, as noted, are
                            based on recent and programmed funding levels, as
                            well as the federal funding program increases in
                            IIJA. Infationary increases to the revenue sources
                            are assumed. It is estimated that a total of almost
                            000 in each of the last four years. The state’s
                            allocation of TAP funding will also double under
                            IIJA. Factoring in the increases in IIJA funding for
                            the MPO and state, it is estimated that the average
                            annual TAP funding will be around $1.64 million.
                            Of-street bicycle facilities, such as gradeseparated
                            crossings and side paths, have also been included in
                            recent years as part of street construction projects
                            funded by the MPO through the federal STBG (formerly
                            STP) Urban program. However, this funding through
                            street or highway projects has not been included as
                            part of the revenue estimate.
                        </Paragraph>

                        <b>
                            Annual Of-Street Bicycle and Pedestrian Facilities
                            Funding Estimates ($1,000s) for the Metropolitan
                            Planning Area
                        </b>
                        <Image />
                        <Paragraph>
                            Figure 5-e shows the estimated annual revenue for
                            of-street bicycle facility projects based on the
                            average annual amount of local, state, and other
                            funding for new path projects programmed in the TIP
                            from 2018 to 2022 and the expected TAP funding with
                            the increase in funding under IIJA.
                        </Paragraph>
                    </PageSection>

                    <PageSection id="section3">
                        <SectionHeader>
                            Projected Revenues through 2050
                        </SectionHeader>
                        <Paragraph>
                            Figure 5-f shows the projected total transportation
                            revenues for state highway, local roadway, transit,
                            and bicycle/pedestrian facility projects for the
                            next 28-year period from 2022 to 2050. The estimated
                            revenues are based on the average annual estimates
                            in Figures 5-b, 5-d, and 5-e, which, as noted, are
                            based on recent and programmed funding levels, as
                            well as the federal funding program increases in
                            IIJA. Infationary increases to the revenue sources
                            are assumed. It is estimated that a total of almost
                            $13 billion will available to fnance projects over
                            the 28-year planning period. This includes $6.4
                            billion for roadway construction, $3.3 billion for
                            roadway operations and maintenance, $2.9 billion for
                            transit, and $343 million for multi-use path
                            construction. The average annual federal and state
                            roadway revenue estimates are based on a 6-year
                            rolling average5 of expended funds between 2016 and
                            2021 obtained from WisDOT. A percentage increase in
                            the federal funding was applied based on the
                            percentage increase in federal programs (NHPP, HSIP)
                            funding under the IIJA. Local roadway revenue
                            estimates are based on the 5-year average of
                            expended funds from 2015-2019 obtained from State
                            Department of Revenue reports, subtracting out
                            federal and state funding received. An additional 2%
                            annual increase beyond the 2% infationary factor (4%
                            total) was assumed for local construction funding
                            and 1.5% for operations and maintenance funding,
                            refecting additional property tax revenue from new
                            growth. The increases were necessary to provide
                            sufcient revenues to cover estimated expenses
                            accounting for the growth in street lane miles.
                            Metro Transit capital (federal and local) and
                            operating (federal, state, local) revenues are based
                            on programmed expenditures for years 2022- 2026 due
                            to the unique nature of these years with the
                            East-West BRT project. Revenues are based on the
                            4-year average from 2015-2019 in the agency’s
                            National Transit Database (NTD) reports for
                            remaining years, with an adjustment to the federal
                            funding to account for increases under IIJA.6 As
                            noted above, federal funding for of-street bicycle
                            and pedestrian facilities is based on the MPO’s FY
                            2022 allocation of TAP funding under IIJA and
                            estimated amount of statewide TAP funding the region
                            will receive with the increase under IIJA and recent
                            experience with local projects receiving grants.
                            State, local, and other funding is based on the
                            average funding programmed from 2018-2022 for
                            bicycle path projects. Average annual funding levels
                            were extrapolated to 2050 using an infation rate of
                            two percent. Funds were then divided into three time
                            periods (2022-2026, 2027-2035, and 2036- 2050)
                            refecting programmed projects over the next fve
                            years, the following eight (8) years to 2035, and
                            the fnal ffteen (15) years to 2050. A larger
                            increment was used for the fnal 15 years due to the
                            greater uncertainty that far out into the future.
                        </Paragraph>
                        <Image />
                    </PageSection>

                    <PageSection id="section4">
                        <SectionHeader>
                            Projected Expenses through 2050
                        </SectionHeader>
                        <Paragraph>
                            Figure 5-g shows projected transportation expenses.
                            Expenses are estimated at $12.5 billion for the
                            planning period. Separate methodologies, detailed
                            below, were developed to determine future expenses
                            for roadway construction, maintenance, and
                            operations; Metro Transit capital and operating
                            costs; and of-street multi-use path and
                            grade-separated bicycle/pedestrian crossing
                            facilities.
                        </Paragraph>

                        <SubHeading>
                            ROADWAY CONSTRUCTION, MAINTENANCE, AND OPERATIONS
                        </SubHeading>
                        <Paragraph>
                            To begin the process of projecting expenses for
                            construction and maintenance and operations of the
                            roadway network in the region, the revenue analysis
                            was coupled with a pavement condition analysis to
                            compare funding levels from 2015 to 2019 with the
                            trend in pavement conditions over that same time
                            period for all roadways by jurisdiction (state,
                            local) and functional classifcation (arterial,
                            collector, local). For the state highway system,
                            Interstate and U.S. Highway pavement conditions in
                            the Metropolitan Planning Area improved over this
                            time period, while State Trunk Highway pavement
                            conditions got worse. The measure used to assess the
                            condition of state highways is Pavement Condition
                            Index (PCI), which refects the structural integrity
                            of the roadway. PCI was developed by the US Army
                            Corps of Engineers, and is based on a visual survey
                            of the number and types of distresses in the
                            pavement.
                        </Paragraph>

                        <b>
                            Estimated Transportation Expenses, 2022 - 2050
                            ($1,000s)for the Metropolitan Planning Area
                        </b>
                        <Image />
                        <Paragraph>
                            Local roadway pavement conditions — as measured by a
                            similar rating system as PCI called Pavement Surface
                            Evaluation and Rating or PASER—got worse overall
                            from 2015 to 2019. There was a small improvement for
                            arterial roadways, but the percentage of collectors
                            and local roadways — which make up the vast majority
                            of mileage — in fair and poor condition increased.
                            In 2019 the percentage of the local roadway system
                            in poor condition ranged from 5% for arterials to
                            16% for local roads. The percentage of the local
                            system in fair condition ranged from 31% for
                            arterials to 38% for local roads. The overall much
                            better condition of state highways can be tied to
                            state funding priorities and local funding
                            challenges. The state has just recently increased
                            the percent of the state transportation budget going
                            to local roadway programs. Figure 5-h shows the
                            pavement condition of state highways by type and
                            local roadways by functional classifcation in 2015
                            and 2019. Next, average per lane mile roadway
                            construction and maintenance and operations costs
                            were calculated for local roadways within the City
                            of Madison, other metropolitan area cities and
                            villages, area towns, and county highways by taking
                            the total lane miles and dividing that by the annual
                            costs in 2015, 2017, and 2019 and then averaging the
                            cost per mile for those years. Average construction
                            cost was highest for Dane County at $29,360 per lane
                            mile. City of Madison and suburban city/village
                            costs were similar at $20,750 and $22,290
                            respectively while town costs were much cheaper at
                            $3,800. Dane County also spent the most per lane
                            mile on maintenance and operations at $19,020
                            followed by Madison at $16,160, suburban cities and
                            villages at $12,170, and towns at $5,940. The much
                            lower town costs refect the rural nature of those
                            roads without pedestrian and bicycle facilities,
                            street lights, etc.
                        </Paragraph>

                        <Image />

                        <Paragraph>
                            A lane mileage growth factor was calculated by
                            comparing year-over-year growth of the ocal roadway
                            network (arterials, collectors, local streets) for
                            Dane County, City of Madison, suburban cities and
                            villages, and towns. The mileage in towns actually
                            showed a declining trend due to annexations. The
                            number of lane-miles grew at a rate of 0.88% in the
                            City of Madison and 2.99% in suburban cities and
                            villages, refecting the faster percentage growth in
                            the suburbs and in particular peripheral growth with
                            new street construction. The growth rates, lane
                            mileage costs, and infation factor of 2 percent were
                            applied for construction and operations and
                            maintenance and extrapolated out to 2050.
                        </Paragraph>

                        <Paragraph>
                            Using these assumptions, it is projected that $4.4
                            billion will be needed for local roadway
                            construction over the 28-year planning period to
                            2050, while $2.9 billion will be needed for
                            maintenance and operations. As noted, local roadway
                            revenue will need to increase 4% annually (including
                            a 2% infationary factor) for construction and 3.5%
                            annually for operations and maintenance from the
                            recent annual average in order to provide sufcient
                            revenue to cover expenses. With this assumption,
                            projected local roadway revenues are $4.4 billion
                            for construction and $2.9 billion for maintenance
                            and operations. However, this would result in a
                            continued slow deterioration of local roadway
                            conditions based on recent trends. Revenue and
                            spending would need to be increased in order to
                            improve or even maintain current roadway conditions.
                            That increased spending would help ensure that
                            roadways receive preventive maintenance before
                            signifcant deterioration, which can add 15-20 years
                            of useful life at a substantial cost savings over
                            reconstruction. Even with timely maintenance,
                            streets eventually need to be reconstructed and
                            utilities replaced. Figures A-c and A-d in Appendix
                            A include lists of programmed, planned, and other
                            potential needed future local arterial
                            reconstruction projects based on current roadway
                            condition, the year a roadway was originally
                            constructed (where that data was available), and
                            assumed future development. The fgures also include
                            some programmed and planned projects to improve
                            trafc operations and safety. The total infation
                            adjusted cost of these local roadway projects over
                            the planning period is $441 million. This includes
                            some programmed and planned intersection and bridge
                            projects. Some of the identifed potential roadway
                            reconstruction projects are in peripheral developing
                            or planned development areas that will need to be
                            reconstructed to urban standards, but many are in
                            existing older already developed areas. Figures A-a
                            and A-b include lists of programmed and planned
                            local arterial capacity expansion projects. The cost
                            of these projects totals $232 million in infation
                            adjusted dollars over the planning period. The
                            estimated expenses for local roadway construction
                            accounts for growth in lane miles so the cost of
                            these capacity projects as well as the preservation
                            projects should be accounted for in the estimated
                            expenses. The major source of funding for local
                            arterial reconstruction projects is the Surface
                            Transportation Block Grant (STBG) (formerly STP)
                            Urban program for which the MPO receives an
                            allocation of funding for each multi-year program
                            cycle. The total amount of STBG Urban funding
                            projected to be available over the 28-year planning
                            period is $349 million, assuming 2% annual
                            infationary increases in funding. Using the current
                            60/40 cost share policy of the MPO, this would fund
                            projects totaling $582 million. This would cover 89%
                            of the local arterial reconstruction projects (both
                            capacity expansion and preservation) identifed. Some
                            of the projects listed will be funded locally and so
                            even though some STBG Urban funding has been and
                            will be used for other types of projects, this
                            demonstrates the feasibility of funding the major
                            regional local arterial reconstruction project
                            needs. Recent trends demonstrate excellent pavement
                            conditions on the Interstate system and improving
                            conditions on U.S. Highways, but declining
                            conditions on the State Trunk Highway System. This
                            analysis assumes that construction and maintenance
                            and operations will continue at recent expenditure
                            levels, but with an increase in federal funding as
                            included in the IIJA and with a 2% infationary
                            growth factor. As previously noted, state funding
                            for roadway
                        </Paragraph>

                        <Image />

                        <Paragraph>
                            Figures A-a through A-d in Appendix A. The
                            programmed major projects include the Beltline Flex
                            Lane project, which is almost completed, the U.S.
                            Highway (USH) 51 (McFarland to Stoughton) project
                            which is scheduled for construction in phases in
                            2025-2028, and the USH 12/18 and CTH AB interchange.
                            A major planned project is the reconstruction of
                            Park Street (USH 151), a state connecting highway,
                            which will need to be coordinated with the planned
                            North/South BRT project. Future Major Highway
                            Development program projects, which often involve a
                            capacity expansion and must be recommended for
                            enumeration by the state Transportation Projects
                            Commission (TPC) and enumerated by the Legislature
                            and Governor, are not known at this time. Studies
                            are currently ongoing for the Beltline, Stoughton
                            Road (USH 51), and the Interstate north of the
                            Beltline. The recommended scope of improvements for
                            these corridors have not been determined. Once the
                            studies are completed, the specifc improvements
                            identifed, costs estimated, and Major Highway
                            Development program funding either secured or
                            determined to be reasonably likely to be available,
                            the plan will be amended to add the project(s) with
                            an updated fnancial analysis. The plan does
                            recommend one additional major corridor study for
                            the STH 19/STH 113/CTH M/CTH K corridor at some
                            point in the future, likely after 2035. The plan
                            does include a capacity expansion in the CTH K
                            corridor, potentially of alignment, with an
                            interchange at USH 12, which is part of this longer
                            corridor. Based on the funding for the Madison area
                            projects enumerated in the Major Highway Development
                            program for FYs 2022- 2026 for the USH 51 and
                            Interstate, if averaged out over fve years, a total
                            of $928 million in infation adjusted funding could
                            be expected to be available during the planning
                            period. Depending upon the scope of improvements,
                            this could potentially cover some or all of the
                            costs of two major projects, but probably not
                            projects in all three corridors currently being
                            studied. However, Majors funding is awarded on a
                            competitive basis statewide and both the Interstate
                            and Beltline projects would rate high in terms of
                            importance. Given the needs in the rest of the
                            state, including the southeast area freeway system,
                            it is probably safe to say additional state funding
                            would be needed to cover the cost of major projects
                            in all three corridors, not to mention any major
                            improvements in the STH 19 corridor while at the
                            same time addressing preservation needs on the state
                            highway system. It is estimated that a total of
                            $2.04 billion in funding will be available for state
                            highway construction over the planning period and
                            another $351 million for maintenance and operations.
                            The total cost of programmed state highway projects
                            and studies for 2022-2026 is $181 million. The cost
                            of other near-term planned projects is another $158
                            million. Because the list of Major Highway
                            Development program projects and other state highway
                            construction projects
                        </Paragraph>

                        <SubHeading>PUBLIC TRANSPORTATION </SubHeading>
                        <HighlightedText> Capital Costs </HighlightedText>
                        <Paragraph>
                            The single largest recurring capital expense for
                            Metro Transit is for the purchase of replacement
                            buses. Metro typically replaces buses on a cycle of
                            about 15 years. With a feet of just over 200, it
                            purchases about 15 new buses per typical year. The
                            usual 2021 bus procurement was deferred to support
                            the purchase of 43 60-foot articulated buses for the
                            BRT system in 2022. Metro currently “retires” older
                            buses from all-day service to peak-only or other
                            limited services, allowing them to minimize new bus
                            purchases. The draft plan in the Metro Network
                            Redesign dramatically reduces peak-only service and
                            expands the number of buses that will be in service
                            all day, which will result in Metro’s needing to
                            replace vehicles more frequently than is currently
                            the practice. Although the number of buses in
                            service for the full service day will increase, the
                            total number of buses required to provide peak
                            period service will be reduced by fattening service
                            levels throughout the day. This will reduce Metro’s
                            required feet size, ofsetting the higher cost to
                            replace buses more frequently. Other major capital
                            costs include: the ongoing renovation of Metro’s
                            East Washington Ave. maintenance facility; the
                            remodeling of Metro’s new satellite facility on
                            Hanson Road; the construction of East/West Bus Rapid
                            Transit (BRT) facilities; the planning, design, and
                            construction of North/South BRT; and, implementation
                            of new feet technology and fare collection systems.
                            Maintaining Metro’s feet replacement schedule,
                            facility renovation and remodeling, both the East/
                            West and North/South BRT routes, technology
                            upgrades, and other usual capital expenses can be
                            covered with projected revenues based on recent
                            funding trends and the adopted 2022-2026 TIP.8 This
                            assumes that Metro is successful in obtaining
                            another Small Starts grant to cover an assumed 50%
                            of the North/South BRT project. FTA awarded Metro a
                            $6.4 million Buses and Bus Facilities grant for East
                            Washington Ave. maintenance and administrative
                            facility renovations in March 2022.9 There are some
                            major new capital costs that will require signifcant
                            additional funding in order to fully implement the
                            recommended transit system improvements. New buses
                            in the future will be predominantly electric, and
                            will require the construction of charging
                            infrastructure in strategic locations to support the
                            use of these vehicles throughout the system. With
                            more buses in service throughout the day, keeping
                            electric buses charged may require the operation of
                            additional vehicles to provide service during
                            charging periods.The extent to which charging
                            requirements drive future feet needs will depend
                            greatly on charging and battery technology, as well
                            as the provision of adequate charging facilities at
                            strategic locations in the network. The frst phase
                            of the planned BRT system, the East/West corridor,
                            is currently in environmental review and design,
                            with funding for roadway improvements including
                            Transit Signal Priority (TSP), the construction of
                            stations, the frst order of 60-foot articulated
                            buses obligated in 2022, and the Hanson Rd
                            renovation project ($160.8 million total).
                            Additional articulated buses will be ordered in 2023
                            and 2024 ($18.1 million), and planning and design
                            for the North/South corridor will begin in 2023 ($4
                            million). Capital funding for East/West BRT is
                            anticipated to be provided in part through a federal
                            Small Starts program grant covering 50% of project
                            costs, which in combination with Metro’s formula
                            funding bring the federal share to $107 million,
                            with a local share of $53 million. For the
                            North/South BRT corridor, the city is seeking an
                            Areas of Persistent Poverty planning grant, and
                            anticipates construction funding through a federal
                            Small Starts program grant. The City of Madison has
                            included required local match funding for East/West
                            BRT project and required facilities in its
                            multi-year capital budget. Cost estimates for the
                            East/West corridor were used to estimate costs for
                            the North/South corridor, which is part of the
                            fscally constrained, federally recognized plan. The
                            new Hanson Rd. facility is necessary for Metro to be
                            able to efciently service the feet, and to house and
                            maintain articulated buses, which will be needed for
                            the BRT system. As part of the BRT system, funding
                            of the Hanson Rd. project ($21.1 million) is
                            considered part of the local 50% match for Small
                            Starts funding of the East/West BRT. New articulated
                            and electric buses, as recommended in the plan, are
                            more expensive than the standard 40-foot diesel
                            buses and hybrid-electric buses currently in use.
                            Electric buses have become more common as the
                            technology improves and the price drops. Articulated
                            buses have been in use in the industry for many
                            years. With the new service planned (bus rapid
                            transit, new all-day service, frequency
                            improvements, and regional express service), the
                            feet size would generally be expected to grow by
                            2050; however, the Network Redesign draft plan
                            (2022) calls for signifcantly fattening service
                            levels throughout the day, and reallocating much of
                            the “extra” 2019 peak service hours to all-day
                            service. This results in a smaller number of
                            vehicles being required to operate peak period
                            service, and accordingly the number of service
                            vehicles in Metro’s feet is not expected to need to
                            grow substantially by 2050. Where 183 buses were in
                            service during peak periods in 2019, only 190 are
                            anticipated to be required for planned 2050 service;
                            many of these will be larger 60-foot articulated
                            vehicles with increased capacity over the standard
                            40-foot vehicles that currently compose the feet.
                            Figure 5-i lists the major capital expenses —
                            including buses — necessary to fully implement the
                            recommended transit improvements. The projected
                            revenue vehicle (bus) replacement cycle will not
                            meet the TAMP Useful Life Benchmark (ULB)
                            performance measure target of no more than 11% of
                            the revenue feet being beyond the ULB of 14 years in
                            2024-2027; however, the percentage of the feet past
                            the ULB generally declines through the rest of the
                            planning horizon and is not projected to exceed the
                            adopted performance measure after 2027. The recent
                            average annual spending on capital needs is about
                            $10 million,10 which is generally sufcient for
                            meeting Metro’s bus replacement needs, but not for
                            expanding or upgrading the feet. Some expansion of
                            the feet for new service and/or upgrading of the
                            feet to electric buses has been made feasible with
                            other federal funding and increased local funding,
                            but implementation of the full suite of planned
                            improvements will not be possible given currently
                            available funding. Metro will need to continue its
                            phased renovation of the East Washington facility
                            and the remodel of the Hanson Road facility in order
                            to meet PTASP and TAM goals, regardless of whether
                            or not North/South BRT or other system expansions
                            are implemented. While Metro has been able to secure
                            discretionary federal grants for the EastWest BRT,
                            and is leveraging the Hanson Rd facility’s purchase
                            and renovation expenses as part of the local match
                            for Small Starts funding, funding the complete list
                            of capital needs identifed in the plan —
                            particularly the Southwest/East and Middleton BRT
                            routes — will require a regional funding mechanism.
                        </Paragraph>
                        <b>
                            Estimated Expenses for Major Transit Capital
                            Projects to Fully Implement the Regional Transit
                            Plan
                        </b>
                        <Image />
                        <b>
                            Estimated Annual Service Hours for Recommended
                            Future Regional Transit System
                        </b>
                        <Image />

                        <HighlightedText>Operating Costs </HighlightedText>
                        <Paragraph>
                            Implementing the service improvements recommended in
                            this plan will require an estimated additional
                            393,000 annual service hours, a 127% increase over
                            the current 309,000 annual service hours. See Figure
                            5-j. This planning-level estimate includes expansion
                            of BRT service, new all-day service, frequency
                            improvements in developing areas, and the network of
                            regional express bus routes. Assuming the service
                            improvements are phased in over the approximately
                            28-year plan timeframe, the increase translates to
                            about 4.5% per year. This 4.5% growth rate is
                            considerably higher than Metro’s historical service
                            hour growth rate of about 0.8% per year 2010 - 2019.
                            During that time, Metro Transit’s operating funding
                            increased an average of 2.4% per year. This increase
                            allowed for some increased service, such as new
                            express service to Sun Prairie, but was only
                            slightly higher than the rate of infation. Between
                            2015 and 2019, service hours fuctuated slightly but
                            remained essentially fat; beginning in 2020, the
                            COVID-19 pandemic resulted in a service hour
                            reduction to 77% of the 2019 service level, but this
                            is considered a short-term reduction and Metro
                            anticipates returning to 2019 service levels in the
                            summer 2023. Historical levels of annual funding
                            increases will not provide the resources necessary
                            to support the transit service recommendations in
                            this plan. If the number of service hours was to
                            increase at the same rate as operating funding has
                            risen — 2.4% per year — Metro would be able to
                            operate about 69,500 additional annual service hours
                            by 2050, about 18% of the new service hours
                            recommended in this plan. The remaining unfunded
                            314,500 annual service hours will require a new
                            funding source. Figure 5-k identifes the types of
                            potential revenue generation mechanisms that might
                            be used to fund the expansion of the transit system
                            as well as the estimated annual revenue generation
                            of these sources. An increased vehicle registration
                            fee alone would not be enough to fund the planned
                            transit system, but would allow Metro to make
                            targeted service expansions and pursue needed
                            capital improvements. A 1/4 percent sales tax would
                            likely be sufcient to fund steady increases in
                            service, while a 1/2 percent sales tax would act as
                            a safeguard against future state and federal funding
                            reductions, and allow faster expansion of service.
                            Neither a ¼ nor a ½-percent sales tax would raise
                            the required amount of funding over a 15-year period
                            for full implementation of the planned system. It is
                            important to note that an RTA could be used to fund
                            transit alone or all modes of transportation
                            depending on the statutory language in the enabling
                            legislation. The recommendations above assume all
                            funds are allocated to transit. If funds are divided
                            between modes, additional funding may be required to
                            implement the planned transit system.
                        </Paragraph>

                        <SubHeading>BICYCLE PROJECTS </SubHeading>
                        <Paragraph>
                            New urban arterial streets and high-volume collector
                            streets are almost universally built with bicycle
                            facilities. Urban arterial street reconstruction
                            projects generally include bicycle facilities, where
                            feasible, given right of way constraints and
                            competing demands for the space. The cost of these
                            facilities is included in the budget for street
                            projects. Therefore, no additional need for funding
                            is anticipated for on-street bicycle facilities
                            beyond that projected for the roadway system. Major
                            regional of-street facilities, such as shared-use
                            paths, are generally stand-alone projects, although
                            some side paths and grade-separated crossings are
                            now being funded as part of roadway projects. Recent
                            examples include the S Pleasant View Rd/CTH M
                            (West), McKee Road/CTH PD, and Johnson Street
                            projects.
                        </Paragraph>
                        <b></b>
                        <Image />

                        <Paragraph>
                            The RTP identifes a network of planned regional
                            priority paths. See Figure 4-l on page 4-44. Figure
                            A-e in Appendix A lists these projects and the
                            planning level cost estimate for them. There are
                            also some major shared-use path and grade-separated
                            crossing recommendations that have been identifed as
                            part of major state highway corridor studies, most
                            notably the Beltline and Stoughton Road. It is
                            expected that at least some of those projects would
                            be funded as part of those projects. Bicycle project
                            costs for programmed projects were taken from the
                            current TIP with an infationary factor applied.
                            Planned project costs were estimated based on
                            planninglevel cost assumptions, taking into account
                            the length of the path, character of the corridor,
                            and presence of bridges and underpasses. Planned
                            projects beyond the 5-year TIP were assigned to one
                            of two time periods – 2027 to 2035 and 2036 to 2050.
                            Project costs include a 1.74% per year infationary
                            factor. The total cost of these regional priority
                            projects is $128 million in infation adjusted
                            dollars. This includes $27 million in programmed
                            projects in 2022–2026, $34 million in 2027-2035, and
                            $67 million in 2036-2050. The total cost of the
                            projects and the cost within the diferent time
                            periods is well within the funds projected to be
                            available. Total estimated funding is $342 million,
                            including $95 million in 2027-2035 and $202 million
                            in 2036-2050. The additional funding would allow
                            other path projects beyond the regional priority
                            path projects listed to be completed. Thus, path
                            expenses in the two later time periods in Figure 5-g
                            have been set to equal revenues.
                        </Paragraph>
                    </PageSection>

                    <PageSection id="section5">
                        <SectionHeader>Conclusion</SectionHeader>
                        <Paragraph>
                            The fnancial capacity analysis for the RTP assumes a
                            2% annual infationary increase in federal, state,
                            and local funding. However, the state gasoline tax
                            rate will need to be increased and eventually other
                            new revenue sources (e.g., mileage based
                            registration fee) created in order to ofset lost gas
                            tax revenue from electrifcation of the feet and
                            infationary increases in project costs and address
                            long-term system preservation needs. The state gas
                            tax hasn’t been increased since 2006 when the
                            automatic indexing of the gas tax and vehicle
                            registration fees to the infation rate was
                            eliminated. The State Commission on Transportation
                            Finance and Policy’s report, Keep Wisconsin Moving —
                            Smart Investments, Measurable Results, published
                            back in 2013, provided recommendations for
                            generating additional revenue, but thus far the
                            state legislature has not addressed the long-term
                            solvency of the state transportation fund. While the
                            IIJA provided historic levels of new federal
                            transportation program funding for the next fve
                            years, the bill is being funded with general
                            revenues, which is neither wise nor sustainable. An
                            increase in funding levels is necessary to maintain
                            and gradually improve the existing condition of the
                            region’s roadway system, which based on recent
                            trends has been declining. Increased funding is also
                            needed to fully implement the planned regional
                            transit system, in particular the latter two phases
                            of the BRT system and most of the additional service
                            hours from frequency improvements, new service to
                            developing areas, and commuter express service to
                            suburban communities. The fnancial analysis
                            indicates that projected revenues will be sufcient
                            to implement the local arterial roadway capacity
                            expansion projects identifed in Figure 4-d in
                            Chapter 4 and listed in Figures A-a and A-b in
                            Appendix A while at the same time funding identifed
                            potential arterial street reconstruction needs
                            identifed in Figures A-c and A-d in Appendix A and
                            addressing other roadway preservation needs in a
                            manner similar to recent trends. However, this means
                            that local roadway conditions will continue to
                            slowly deteriorate. Major capacity improvements in
                            two state highway corridors (Stoughton Road,
                            Beltline) may or may not be able to be fully funded
                            based on the funding for currently programmed Major
                            Program projects carried forward into the future.
                            This would depend upon the scope of those projects.
                            It is forecast that $1 billion would be available
                            for those projects beyond the needs for other state
                            highway construction projects, if currently
                            programmed spending was carried forward into the
                            future. Signifcant new transit funding will be
                            needed to implement the recommended regional transit
                            plan, including the latter two phases of BRT, new
                            regional commuter service, and increased local
                            service frequencies. The largest gap is in operating
                            funding. Based on recent trends from 2010-2019 in
                            terms of service hour increases, only about 18% of
                            the recommended service hours in the regional plan
                            could be funded. Implementation of the plan would
                            require a new regional funding mechanism, such as a
                            regional transit authority, with the ability to levy
                            a sales tax. Increases in the current City of
                            Madison vehicle registration fee would not be
                            sufcient. Estimated future revenues for multi-use
                            path projects based on recent funding levels would
                            be more than sufcient to fund the major regional
                            priority path projects illustrated in Map 4-l in
                            Chapter 4 and listed in Figure A-e in Appendix A.
                            These projects were identifed as needed to address
                            key missing links and complete key segments of the
                            planned regional bikeway network illustrated in Map
                            4-j in Chapter 4. On-street facilities are assumed
                            to be included as part of roadway projects.
                        </Paragraph>
                    </PageSection>
                </SectionWrapper>
            </PageDisplay>
        </>
    );
}

export default Funding;
