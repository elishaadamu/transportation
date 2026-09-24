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
} from "../components/common";
import {
    docImg2,
    docImg3,
    docImg4,
    docImg5,
    docImg6,
    docImg7,
    docImg8,
} from "../assets";

function TrendAndForcasts() {
    const sections = [
        {
            to: "introduction",
            title: "Introduction",
        },
        {
            to: "density",
            title: "Population, Employment, and Activity Density",
        },
        {
            to: "trends",
            title: "Population, Household, and Employment Trends",
        },
        {
            to: "shift-share",
            title: "Shift-Share Employment Growth by BLS Supersector",
        },
        {
            to: "demographics",
            title: "Demographic Profiles",
        },
        {
            to: "forecasts",
            title: "Socioeconomic Forecasts",
        },
        {
            to: "land-use",
            title: "Land Use and Development",
        },
        {
            to: "travel-patterns",
            title: "Travel Patterns",
        },
        {
            to: "commuter-flows",
            title: "County to County Commuter Flows",
        },
    ];

    return (
        <>
            <PageHeader img="https://plus.unsplash.com/premium_photo-1673971700988-346588461fa7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                Chapter 2: National and Regional Trends and Forecasts
            </PageHeader>
            <PageDisplay>
                <SectionWrapper backgroundImage="https://images.unsplash.com/photo-1541348263662-e068662d82af?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <div className="flex flex-col md:flex-row items-start justify-center gap-8 max-w-[94rem] mx-auto px-4 sm:px-6 py-6 relative">
                        {/* Left Tabs Sidebar */}
                        <TableOfContent sections={sections} title="Chapter 2 Tabs" />

                        {/* Content Area */}
                        <main className="flex-1 min-w-0 w-full flex flex-col items-center">
                            {/* 1. Introduction */}
                            <PageSection id="introduction">
                                <SectionHeader>Introduction</SectionHeader>
                                <Paragraph>
                                    This section examines the region’s population, employment, and activity density; evaluates socioeconomic growth trends and forecasts within TCAMPO, the Commonwealth of Virginia (Commonwealth), and the United States of America; and maps demographic patterns within the Tri-Cities. Understanding where the region’s existing residents and jobs are concentrated and where they are growing is critical for identifying the region’s current and emerging transportation needs.
                                </Paragraph>

                                <Paragraph>
                                    Additionally, Environmental Justice (EJ) analysis of the region’s demographic patterns provides insight into equity considerations, helping to identify areas that may face transportation disadvantages due to race, income, limited English proficiency, household vehicle availability, disability, or age, helping to ensure equitable access to multimodal transportation options throughout the region.
                                </Paragraph>

                                <Paragraph>
                                    Because Chesterfield, Dinwiddie, and Prince George extend beyond the TCAMPO boundary, block group, tract, and county-level data from various sources were adjusted using area-weighted interpolation to reflect only the portion of these jurisdictions within TCAMPO. Geographic units located entirely within the boundary, such as census blocks and Traffic Analysis Zones (TAZ), were included without adjustment.
                                </Paragraph>
                            </PageSection>

                            {/* 2. Population, Employment, and Activity Density */}
                            <PageSection id="density">
                                <SectionHeader>Population, Employment, and Activity Density</SectionHeader>
                                <Paragraph>
                                    The following maps illustrate existing population, employment, and activity density by block group in the Tri-Cities region and beyond. Population estimates are drawn from the American Community Survey (ACS) 2023 5-Year Estimates. Employment estimates are drawn from the 2023 Longitudinal Employer-Household Dynamics (LEHD) Origin-Destination Employment Statistics (LODES) Workplace Area Characteristics (WAC) dataset.
                                </Paragraph>

                                <div className="space-y-8 mt-6">
                                    {/* Population Density */}
                                    <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
                                        <div className="p-4 bg-white/5 border-b border-white/10">
                                            <SubHeading>Population Density</SubHeading>
                                            <Paragraph className="!text-sm text-text/80">
                                                Figure 3 shows population density (residents per square mile) across the region. Population density is highest in Petersburg, Colonial Heights, and Hopewell, with additional concentrations in Chesterfield, Dinwiddie, and Prince George Counties, particularly along the I-95 and I-85 corridors and near major institutions such as Virginia State University (VSU) and Fort Lee. Notable exceptions to this pattern exist within eastern Hopewell and southwestern Petersburg, where lower population densities are due to industrial, commercial, and park land uses rather than rural or undeveloped land.
                                            </Paragraph>
                                        </div>
                                        <img
                                            src={docImg2}
                                            alt="TCAMPO Population Density by Block Group"
                                            className="w-full h-auto object-cover max-h-[32rem]"
                                        />
                                        <p className="text-xs text-text/70 p-3 text-center italic bg-black/60">
                                            Figure 3. TCAMPO Population Density by Block Group (Source: 2023 ACS 5-Year)
                                        </p>
                                    </div>

                                    {/* Employment Density */}
                                    <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
                                        <div className="p-4 bg-white/5 border-b border-white/10">
                                            <SubHeading>Employment Density</SubHeading>
                                            <Paragraph className="!text-sm text-text/80">
                                                Figure 4 illustrates the region’s employment density (jobs per square mile). Employment is primarily concentrated along the I-95 and I-85 corridors through Dinwiddie, Colonial Heights, and Petersburg, with additional dense clusters just north of the TCAMPO boundary in Chester and Meadowville. Other areas of high employment density are evident in the historic downtown cores of Petersburg and Hopewell, near VSU in Ettrick, at Southpark Mall in Colonial Heights, and along arterial principal arterial corridors such as South Crater Road (US-301), Oaklawn Boulevard (VA-36), and East Hundred Road (SR-10). Rural portions of the region, particularly to the west, south, and east, show minimal employment density. Due to limitations in federal jobs reporting within the LEHD dataset, employment associated with Fort Lee is not captured in this map.
                                            </Paragraph>
                                        </div>
                                        <img
                                            src={docImg3}
                                            alt="TCAMPO Employment Density by Block Group"
                                            className="w-full h-auto object-cover max-h-[32rem]"
                                        />
                                        <p className="text-xs text-text/70 p-3 text-center italic bg-black/60">
                                            Figure 4. TCAMPO Employment Density by Block Group (Source: 2023 LEHD)
                                        </p>
                                    </div>

                                    {/* Activity Density */}
                                    <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
                                        <div className="p-4 bg-white/5 border-b border-white/10">
                                            <SubHeading>Activity Density</SubHeading>
                                            <Paragraph className="!text-sm text-text/80">
                                                Figure 5 combines the two measures above to show activity density (residents plus jobs per square mile) across the region. Activity density is highest where population and employment concentrations overlap, most notably in Colonial Heights, Hopewell, and Petersburg and along the I-95 and I-85 corridors. High activity is also illustrated near VSU and Fort Lee. As with population and employment densities individually, activity density is lowest in the rural portions of the region to the west, south, and east.
                                            </Paragraph>
                                        </div>
                                        <img
                                            src={docImg4}
                                            alt="TCAMPO Activity Density by Block Group"
                                            className="w-full h-auto object-cover max-h-[32rem]"
                                        />
                                        <p className="text-xs text-text/70 p-3 text-center italic bg-black/60">
                                            Figure 5. TCAMPO Activity Density by Block Group (Source: 2023 ACS 5-Year, 2023 LEHD)
                                        </p>
                                    </div>
                                </div>
                            </PageSection>

                            {/* 3. Population, Household, and Employment Trends */}
                            <PageSection id="trends">
                                <SectionHeader>Population, Household, and Employment Trends</SectionHeader>
                                <Paragraph>
                                    Historical population and household trends from 1990 to 2020 were analyzed using decennial census block-level data obtained from the Integrated Public Use Microdata Series (IPUMS) National Historical Geographic Information System (NHGIS). Employment trends for the Tri-Cities region were estimated using county-level annual averages from the Bureau of Labor Statistics (BLS) Quarterly Census of Employment and Wages (QCEW) during the same period.
                                </Paragraph>

                                <Paragraph>
                                    Population and employment growth supports economic development. It also directly affects travel demand, leading to increased congestion, emissions, and greater crash frequency due to higher traffic volumes. These factors indicate that as a region grows, there is a clear need for higher investment in a robust multimodal transportation system, including pedestrian and bicycle safety improvements, increased transit accessibility, and reductions in highway congestion, as well greater destination access for all modes of transportation.
                                </Paragraph>

                                <div className="space-y-4 mt-6">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                        <SubHeading>Population Growth (1990–2020)</SubHeading>
                                        <Paragraph className="!text-sm">
                                            The population of the Tri-Cities region grew steadily between 1990 and 2020, increasing by <strong>24.4 percent</strong> from 134,954 to 167,920. Over the same period, population growth in Virginia (39.5 percent) and the United States (33.3 percent) outpaced the region. The largest regional population growth has occurred in counties dominated by suburban and rural areas:
                                        </Paragraph>
                                        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-text/80">
                                            <li><strong>Chesterfield (TCAMPO portion):</strong> grew by 69.3% between 1990 and 2020.</li>
                                            <li><strong>Dinwiddie (TCAMPO portion):</strong> grew by 58.3%, though growth slowed after 2010.</li>
                                            <li><strong>Prince George (TCAMPO portion):</strong> grew by ~56%, with its largest surge occurring between 2010 and 2020.</li>
                                            <li><strong>Colonial Heights:</strong> experienced steady growth in each decade resulting in a 13.1% overall increase.</li>
                                            <li><strong>Petersburg:</strong> experienced a 12.8% decline between 1990 and 2020, with a modest 3% recovery since 2010.</li>
                                            <li><strong>Hopewell:</strong> remained stable with a 0.3% decline between 1990 and 2020, recovering slightly over the last two decades.</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                        <SubHeading>Household Growth and Size</SubHeading>
                                        <Paragraph className="!text-sm">
                                            The number of households in the region grew by <strong>28.4 percent</strong> between 1990 and 2020, increasing from 48,586 to 62,362. Chesterfield experienced the highest household growth (74.2%), followed by Dinwiddie (61.1%) and Prince George (46.9%). Colonial Heights grew by 20.0%, Hopewell by 4.2%, and Petersburg by 4.4%. Across all jurisdictions, average household size declined by 3.1% from 2.8 to 2.7 people per household, tracking broader trends toward smaller households across the Commonwealth (-3.7%) and nation (-3.4%).
                                        </Paragraph>
                                    </div>

                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                        <SubHeading>Employment Growth</SubHeading>
                                        <Paragraph className="!text-sm">
                                            Employment in the Tri-Cities region increased by approximately <strong>47.3 percent</strong>, expanding from 37,198 in 1990 to 54,780 in 2020. In contrast with population and households, regional employment is growing at a faster rate than both the Commonwealth of Virginia (32.3%) and the nation (28.1%).
                                        </Paragraph>
                                    </div>
                                </div>
                            </PageSection>

                            {/* 4. Shift-Share Employment Growth by BLS Supersector */}
                            <PageSection id="shift-share">
                                <SectionHeader>Shift-Share Employment Growth by BLS Supersector</SectionHeader>
                                <Paragraph>
                                    In this section, employment growth in the Tri-Cities region is evaluated across all BLS supersectors using shift-share analysis. Supersectors are high-level industry groupings used by BLS for the QCEW program, aggregating employment across related two-digit NAICS sectors to provide a wider view of economic activity in an area. These industries can be further grouped into the Goods-Producing and Service-Providing domains.
                                </Paragraph>

                                <Paragraph>
                                    Net employment in the Tri-Cities region increased across most major industry supersectors between 2019 and 2023, although the magnitude and causes of growth varied by sector. Shift-share analysis decomposes regional employment change into three components:
                                </Paragraph>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                        <h4 className="text-primary-orange font-bold text-sm">National Growth (NGC)</h4>
                                        <p className="text-xs text-text/80 mt-1">Measures growth attributable to overall national employment trends.</p>
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                        <h4 className="text-primary-orange font-bold text-sm">Industrial Mix (IMC)</h4>
                                        <p className="text-xs text-text/80 mt-1">Reflects industry-specific national growth patterns.</p>
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                        <h4 className="text-primary-orange font-bold text-sm">Local Share (LSC)</h4>
                                        <p className="text-xs text-text/80 mt-1">Captures competitive growth unique to the Tri-Cities region.</p>
                                    </div>
                                </div>

                                <Paragraph>
                                    The analysis revealed that <strong>Trade, Transportation & Utilities</strong> was the region's largest source of net employment growth between 2019 and 2023, adding 950 jobs (NGC: +585, IMC: +158, LSC: +208). The strong positive local growth in both Trade, Transportation & Utilities and Manufacturing aligns with the region's location along the I-95 and I-85 corridors and its growing role as a goods movement and freight logistics hub.
                                </Paragraph>

                                <div className="my-6 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
                                    <img
                                        src={docImg5}
                                        alt="TCAMPO Shift-Share by Supersector vs. National, 2019-2023"
                                        className="w-full h-auto object-contain max-h-[30rem]"
                                    />
                                    <p className="text-xs text-text/70 p-3 text-center italic bg-black/60">
                                        Figure 12. TCAMPO Shift-Share by Supersector vs. National, 2019-2023
                                    </p>
                                </div>
                            </PageSection>

                            {/* 5. Demographic Profiles */}
                            <PageSection id="demographics">
                                <SectionHeader>Demographic Profiles</SectionHeader>
                                <Paragraph>
                                    This section summarizes the Environmental Justice (EJ) analysis which is incorporated into TCAMPO’s prioritization process for projects considered for inclusion in Plan2050. The analysis designates EJ Areas of Concern, defined as census block groups having relatively higher concentrations of residents or households that may have limited access to viable transportation choices. Identifying areas where these populations are concentrated helps ensure that transportation investments are planned and prioritized in a way that promotes equitable access across the region.
                                </Paragraph>

                                <Paragraph>
                                    For this analysis, six EJ indicators are derived from 2023 ACS 5-Year Estimates: minority and low-income populations, persons with limited English proficiency, persons with disabilities, elderly persons, and households without access to a vehicle. Each indicator is reclassified into an ordinal vulnerability score (1–3) using tertile breaks. The scores are summed to produce a composite vulnerability index (ranging from 6 to 18), then classified into a final three-level Environmental Justice Composite Index.
                                </Paragraph>

                                <div className="my-6 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
                                    <img
                                        src={docImg6}
                                        alt="Composite EJ Index by Block Group"
                                        className="w-full h-auto object-cover max-h-[34rem]"
                                    />
                                    <p className="text-xs text-text/70 p-3 text-center italic bg-black/60">
                                        Figure 13. Composite EJ Index by Block Group (Source: 2023 ACS 5-Year Estimates)
                                    </p>
                                </div>
                            </PageSection>

                            {/* 6. Socioeconomic Forecasts */}
                            <PageSection id="forecasts">
                                <SectionHeader>Socioeconomic Forecasts</SectionHeader>
                                <Paragraph>
                                    The MPO developed 2017-2050 socioeconomic forecasts (population, housing, autos, school enrollment, and employment) by TAZ to support the Richmond/Tri-Cities (RTC) Travel Demand Model, which TCAMPO and RRTPO use for long-range planning and corridor studies. Across the six jurisdictions, total population is projected to grow by about <strong>20.0%</strong> from 191,300 to 229,600; households by about <strong>30.9%</strong> from 64,400 to 84,300; and total employment by about <strong>22.9%</strong> from about 62,400 to 76,800 by 2050.
                                </Paragraph>

                                {/* Table 1 */}
                                <div className="my-6 overflow-x-auto thin-scrollbar rounded-xl border border-white/15 bg-black/40 shadow-xl">
                                    <div className="p-3 bg-white/5 border-b border-white/10 text-xs font-semibold uppercase tracking-wider text-primary-orange">
                                        Table 1. 2017–2050 Socioeconomic Forecasts
                                    </div>
                                    <table className="w-full text-left text-xs sm:text-sm text-text border-collapse">
                                        <thead>
                                            <tr className="bg-primary-red/30 border-b border-white/15 text-text">
                                                <th className="py-2.5 px-3 font-semibold">Jurisdiction</th>
                                                <th className="py-2.5 px-3 font-semibold text-right">Population 2017</th>
                                                <th className="py-2.5 px-3 font-semibold text-right">Population 2050</th>
                                                <th className="py-2.5 px-3 font-semibold text-right">Households 2017</th>
                                                <th className="py-2.5 px-3 font-semibold text-right">Households 2050</th>
                                                <th className="py-2.5 px-3 font-semibold text-right">Employment 2017</th>
                                                <th className="py-2.5 px-3 font-semibold text-right">Employment 2050</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Chesterfield</td>
                                                <td className="py-2 px-3 text-right">43,683</td>
                                                <td className="py-2 px-3 text-right font-semibold text-primary-orange">61,806</td>
                                                <td className="py-2 px-3 text-right">14,909</td>
                                                <td className="py-2 px-3 text-right font-semibold text-primary-orange">21,403</td>
                                                <td className="py-2 px-3 text-right">10,384</td>
                                                <td className="py-2 px-3 text-right font-semibold text-primary-orange">16,645</td>
                                            </tr>
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Dinwiddie</td>
                                                <td className="py-2 px-3 text-right">28,504</td>
                                                <td className="py-2 px-3 text-right">30,477</td>
                                                <td className="py-2 px-3 text-right">9,980</td>
                                                <td className="py-2 px-3 text-right">10,500</td>
                                                <td className="py-2 px-3 text-right">8,647</td>
                                                <td className="py-2 px-3 text-right">10,438</td>
                                            </tr>
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Prince George</td>
                                                <td className="py-2 px-3 text-right">45,881</td>
                                                <td className="py-2 px-3 text-right font-semibold text-primary-orange">60,888</td>
                                                <td className="py-2 px-3 text-right">12,543</td>
                                                <td className="py-2 px-3 text-right font-semibold text-primary-orange">23,640</td>
                                                <td className="py-2 px-3 text-right">13,790</td>
                                                <td className="py-2 px-3 text-right font-semibold text-primary-orange">19,422</td>
                                            </tr>
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Colonial Heights</td>
                                                <td className="py-2 px-3 text-right">17,395</td>
                                                <td className="py-2 px-3 text-right">19,646</td>
                                                <td className="py-2 px-3 text-right">6,782</td>
                                                <td className="py-2 px-3 text-right">7,682</td>
                                                <td className="py-2 px-3 text-right">9,344</td>
                                                <td className="py-2 px-3 text-right">9,344</td>
                                            </tr>
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Hopewell</td>
                                                <td className="py-2 px-3 text-right">22,941</td>
                                                <td className="py-2 px-3 text-right">23,471</td>
                                                <td className="py-2 px-3 text-right">8,910</td>
                                                <td className="py-2 px-3 text-right">9,325</td>
                                                <td className="py-2 px-3 text-right">7,137</td>
                                                <td className="py-2 px-3 text-right">7,366</td>
                                            </tr>
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Petersburg</td>
                                                <td className="py-2 px-3 text-right">32,918</td>
                                                <td className="py-2 px-3 text-right">33,280</td>
                                                <td className="py-2 px-3 text-right">11,280</td>
                                                <td className="py-2 px-3 text-right">11,727</td>
                                                <td className="py-2 px-3 text-right">13,130</td>
                                                <td className="py-2 px-3 text-right">13,540</td>
                                            </tr>
                                            <tr className="bg-white/10 font-bold border-t border-white/20 text-white">
                                                <td className="py-2.5 px-3">TCAMPO Total</td>
                                                <td className="py-2.5 px-3 text-right">191,322</td>
                                                <td className="py-2.5 px-3 text-right text-primary-orange">229,568</td>
                                                <td className="py-2.5 px-3 text-right">64,404</td>
                                                <td className="py-2.5 px-3 text-right text-primary-orange">84,277</td>
                                                <td className="py-2.5 px-3 text-right">62,432</td>
                                                <td className="py-2.5 px-3 text-right text-primary-orange">76,755</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="my-6 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
                                    <img
                                        src={docImg7}
                                        alt="Employment Change per Acre by TAZ, 2017-2050"
                                        className="w-full h-auto object-cover max-h-[34rem]"
                                    />
                                    <p className="text-xs text-text/70 p-3 text-center italic bg-black/60">
                                        Figure 14. Employment Change per Acre by Traffic Analysis Zone (TAZ), 2017–2050
                                    </p>
                                </div>
                            </PageSection>

                            {/* 7. Land Use and Development */}
                            <PageSection id="land-use">
                                <SectionHeader>Land Use and Development</SectionHeader>
                                <Paragraph>
                                    Land use in the Tri-Cities region is characterized by a wide range of land cover classes, varying from densely developed urban cores in Petersburg, Colonial Heights, and Hopewell to rural and agricultural landscapes across Chesterfield, Dinwiddie, and Prince George Counties.
                                </Paragraph>

                                <Paragraph>
                                    The urban core jurisdictions—Colonial Heights, Hopewell, and Petersburg—each have more than 60 percent of total land developed, while Dinwiddie, Prince George, and Chesterfield each have less than 30 percent developed. Across the Tri-Cities MPO as a whole, about 28 percent of land is developed, presenting a region defined by a densely developed core surrounded by lower-density, largely undeveloped areas.
                                </Paragraph>

                                <div className="my-6 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
                                    <img
                                        src={docImg8}
                                        alt="Existing Land Cover and Transitions, 2014-2024"
                                        className="w-full h-auto object-cover max-h-[34rem]"
                                    />
                                    <p className="text-xs text-text/70 p-3 text-center italic bg-black/60">
                                        Figure 15. Existing Land Cover and Transitions from Undeveloped to Developed Areas, 2014–2024 (Source: USGS NLCD)
                                    </p>
                                </div>

                                <Paragraph>
                                    Petersburg’s comparatively high rate of land conversion reflects both its population growth during the last decade and its relatively small size and limited remaining undeveloped land. Transitioned lands are concentrated along Wells Road in south Petersburg, and along the US-301/I-95 corridor near the Bon Secours Medical Center and the Wagner Road interchange (Exit 48).
                                </Paragraph>
                            </PageSection>

                            {/* 8. Travel Patterns */}
                            <PageSection id="travel-patterns">
                                <SectionHeader>Travel Patterns</SectionHeader>
                                <Paragraph>
                                    Population and employment changes shape both development and travel patterns throughout the region. Understanding these existing patterns provides a basis for developing future transportation needs. Examining trip flows, household vehicle availability, mode share, and forecasted travel demand helps inform decision makers about the investments that are needed to support economic vitality, improve mobility, and enhance quality of life for residents and visitors alike.
                                </Paragraph>

                                <div className="p-3 my-4 bg-white/5 rounded-lg border border-dashed border-white/20 text-xs text-text/60 italic">
                                    Trips by Mode — Content under development (TBD)
                                </div>

                                <SubHeading>Household Vehicle Availability</SubHeading>
                                <Paragraph>
                                    Household vehicle availability is one of the biggest determinants of travel behavior and mode choice, shaping whether a trip is made by car, transit, walking, or not at all. Vehicle availability varies considerably across the region, generally tracking differences in population density and household income. Petersburg has the highest share of zero-vehicle households (14.84%) and the highest combined zero-and-one-vehicle share (63.27%). Hopewell also shows an above-average zero-vehicle share (11.66%). At the other end, Dinwiddie has the highest share of three-plus-vehicle households (46.34%).
                                </Paragraph>

                                {/* Table 2 */}
                                <div className="my-6 overflow-x-auto thin-scrollbar rounded-xl border border-white/15 bg-black/40 shadow-xl">
                                    <div className="p-3 bg-white/5 border-b border-white/10 text-xs font-semibold uppercase tracking-wider text-primary-orange">
                                        Table 2. Household Vehicle Availability by Jurisdiction (Source: 2024 ACS 5-Year)
                                    </div>
                                    <table className="w-full text-left text-xs sm:text-sm text-text border-collapse">
                                        <thead>
                                            <tr className="bg-primary-red/30 border-b border-white/15 text-text">
                                                <th className="py-2.5 px-3 font-semibold">Jurisdiction</th>
                                                <th className="py-2.5 px-3 font-semibold text-right">Households</th>
                                                <th className="py-2.5 px-3 font-semibold text-right">No Vehicle</th>
                                                <th className="py-2.5 px-3 font-semibold text-right">1 Vehicle</th>
                                                <th className="py-2.5 px-3 font-semibold text-right">2 Vehicles</th>
                                                <th className="py-2.5 px-3 font-semibold text-right">3+ Vehicles</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Chesterfield</td>
                                                <td className="py-2 px-3 text-right">16,017</td>
                                                <td className="py-2 px-3 text-right">4.22%</td>
                                                <td className="py-2 px-3 text-right">22.22%</td>
                                                <td className="py-2 px-3 text-right">40.93%</td>
                                                <td className="py-2 px-3 text-right">32.63%</td>
                                            </tr>
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Dinwiddie</td>
                                                <td className="py-2 px-3 text-right">4,409</td>
                                                <td className="py-2 px-3 text-right">5.90%</td>
                                                <td className="py-2 px-3 text-right">19.37%</td>
                                                <td className="py-2 px-3 text-right">28.42%</td>
                                                <td className="py-2 px-3 text-right font-semibold text-primary-orange">46.34%</td>
                                            </tr>
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Prince George</td>
                                                <td className="py-2 px-3 text-right">10,204</td>
                                                <td className="py-2 px-3 text-right">3.47%</td>
                                                <td className="py-2 px-3 text-right">22.95%</td>
                                                <td className="py-2 px-3 text-right">34.08%</td>
                                                <td className="py-2 px-3 text-right">39.50%</td>
                                            </tr>
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Colonial Heights</td>
                                                <td className="py-2 px-3 text-right">7,530</td>
                                                <td className="py-2 px-3 text-right">6.79%</td>
                                                <td className="py-2 px-3 text-right">33.73%</td>
                                                <td className="py-2 px-3 text-right">35.96%</td>
                                                <td className="py-2 px-3 text-right">23.52%</td>
                                            </tr>
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Hopewell</td>
                                                <td className="py-2 px-3 text-right">9,255</td>
                                                <td className="py-2 px-3 text-right font-semibold text-primary-red">11.66%</td>
                                                <td className="py-2 px-3 text-right">35.73%</td>
                                                <td className="py-2 px-3 text-right">26.12%</td>
                                                <td className="py-2 px-3 text-right">26.49%</td>
                                            </tr>
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Petersburg</td>
                                                <td className="py-2 px-3 text-right">15,138</td>
                                                <td className="py-2 px-3 text-right font-bold text-primary-red">14.84%</td>
                                                <td className="py-2 px-3 text-right font-semibold text-primary-orange">48.43%</td>
                                                <td className="py-2 px-3 text-right">25.84%</td>
                                                <td className="py-2 px-3 text-right">10.89%</td>
                                            </tr>
                                            <tr className="bg-white/10 font-bold border-t border-white/20 text-white">
                                                <td className="py-2.5 px-3">TCAMPO Region</td>
                                                <td className="py-2.5 px-3 text-right">62,553</td>
                                                <td className="py-2.5 px-3 text-right text-primary-red">8.20%</td>
                                                <td className="py-2.5 px-3 text-right">31.87%</td>
                                                <td className="py-2.5 px-3 text-right">32.49%</td>
                                                <td className="py-2.5 px-3 text-right">27.45%</td>
                                            </tr>
                                            <tr className="text-text/70 italic text-xs bg-black/40">
                                                <td className="py-2 px-3">Virginia Statewide</td>
                                                <td className="py-2 px-3 text-right">3,365,732</td>
                                                <td className="py-2 px-3 text-right">6.10%</td>
                                                <td className="py-2 px-3 text-right">31.13%</td>
                                                <td className="py-2 px-3 text-right">37.25%</td>
                                                <td className="py-2 px-3 text-right">25.52%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <SubHeading>Commute Mode Share by Travel Time</SubHeading>
                                <Paragraph>
                                    The majority of workers 16 years and over who did not work from home drove alone to work across all commute durations, accounting for <strong>82%</strong> of all commuters and more than 85% of commuters in travel times between 15 minutes to one hour. Walking was most prevalent among the shortest commutes, comprising nearly 24 percent of workers with travel times under 10 minutes. Carpooling accounted for 7 to 11 percent across all time intervals. Transit use was minimal overall but reached about 10 percent of workers with travel times of 60 minutes or more.
                                </Paragraph>

                                <div className="p-3 my-4 bg-white/5 rounded-lg border border-dashed border-white/20 text-xs text-text/60 italic">
                                    Changes in Traffic Congestion (2020–2025) — Content under development (TBD)
                                </div>
                            </PageSection>

                            {/* 9. County to County Commuter Flows */}
                            <PageSection id="commuter-flows">
                                <SectionHeader>County to County Commuter Flows</SectionHeader>
                                <Paragraph>
                                    The Tri-Cities region is part of an interconnected metropolitan area that extends beyond its borders. Examining commuting patterns both within the region and beyond provides insight into the interconnectedness of the region&apos;s economy and the role of the transportation network in supporting those connections.
                                </Paragraph>

                                <Paragraph>
                                    Table 3 summarizes county-to-county commuter flow data derived from 2025 StreetLight Origin-Destination traffic volumes (Average Daily Traffic) and Home-Based Work (HBW) trip purpose data. The share of Internal-Internal (I-I) trips that begin and end within TCAMPO varies considerably by jurisdiction, ranging from a high of <strong>71.7 percent</strong> in Prince George to a low of <strong>37.6 percent</strong> in Chesterfield.
                                </Paragraph>

                                <Paragraph>
                                    Prince George, Colonial Heights, Petersburg, and Hopewell have the greatest share of internal trips, with all but Hopewell retaining more than two-thirds of commute trips within the MPO. Prince George also has the highest proportion of trips that begin and end within the same jurisdiction (45.4 percent), reflecting the influence of Fort Gregg-Adams as a major local employer and trip generator.
                                </Paragraph>

                                <Paragraph>
                                    In contrast, nearly two-thirds of commute trips associated with the TCAMPO portion of Chesterfield travel outside the MPO, primarily toward the Richmond region (Richmond Regional TPO, Henrico, and City of Richmond). Among internal TCAMPO flows, the strongest connections are centered on Prince George and Petersburg: Prince George exchanges 2,203 trips with Petersburg and 2,086 trips with Hopewell.
                                </Paragraph>

                                {/* Table 3 */}
                                <div className="my-6 overflow-x-auto thin-scrollbar rounded-xl border border-white/15 bg-black/40 shadow-xl">
                                    <div className="p-3 bg-white/5 border-b border-white/10 text-xs font-semibold uppercase tracking-wider text-primary-orange">
                                        Table 3. Commute Flows within Tri-Cities Area MPO (Source: StreetLight, 2025)
                                    </div>
                                    <table className="w-full text-left text-xs sm:text-sm text-text border-collapse">
                                        <thead>
                                            <tr className="bg-primary-red/30 border-b border-white/15 text-text">
                                                <th className="py-2.5 px-3 font-semibold">Origin \ Destination</th>
                                                <th className="py-2.5 px-3 font-semibold text-right">Chesterfield</th>
                                                <th className="py-2.5 px-3 font-semibold text-right">Colonial Heights</th>
                                                <th className="py-2.5 px-3 font-semibold text-right">Dinwiddie</th>
                                                <th className="py-2.5 px-3 font-semibold text-right">Hopewell</th>
                                                <th className="py-2.5 px-3 font-semibold text-right">Petersburg</th>
                                                <th className="py-2.5 px-3 font-semibold text-right">Prince George</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Chesterfield</td>
                                                <td className="py-2 px-3 text-right bg-white/5 font-semibold text-primary-orange">1,562</td>
                                                <td className="py-2 px-3 text-right">654</td>
                                                <td className="py-2 px-3 text-right">312</td>
                                                <td className="py-2 px-3 text-right">319</td>
                                                <td className="py-2 px-3 text-right">618</td>
                                                <td className="py-2 px-3 text-right">733</td>
                                            </tr>
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Colonial Heights</td>
                                                <td className="py-2 px-3 text-right">606</td>
                                                <td className="py-2 px-3 text-right bg-white/5 font-semibold text-primary-orange">1,850</td>
                                                <td className="py-2 px-3 text-right">263</td>
                                                <td className="py-2 px-3 text-right">271</td>
                                                <td className="py-2 px-3 text-right">506</td>
                                                <td className="py-2 px-3 text-right">684</td>
                                            </tr>
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Dinwiddie</td>
                                                <td className="py-2 px-3 text-right">283</td>
                                                <td className="py-2 px-3 text-right">265</td>
                                                <td className="py-2 px-3 text-right bg-white/5 font-semibold text-primary-orange">427</td>
                                                <td className="py-2 px-3 text-right">91</td>
                                                <td className="py-2 px-3 text-right">535</td>
                                                <td className="py-2 px-3 text-right">326</td>
                                            </tr>
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Hopewell</td>
                                                <td className="py-2 px-3 text-right">312</td>
                                                <td className="py-2 px-3 text-right">321</td>
                                                <td className="py-2 px-3 text-right">101</td>
                                                <td className="py-2 px-3 text-right bg-white/5 font-semibold text-primary-orange">2,036</td>
                                                <td className="py-2 px-3 text-right">319</td>
                                                <td className="py-2 px-3 text-right font-semibold text-primary-red">1,052</td>
                                            </tr>
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Petersburg</td>
                                                <td className="py-2 px-3 text-right">628</td>
                                                <td className="py-2 px-3 text-right">507</td>
                                                <td className="py-2 px-3 text-right">586</td>
                                                <td className="py-2 px-3 text-right">301</td>
                                                <td className="py-2 px-3 text-right bg-white/5 font-semibold text-primary-orange">2,155</td>
                                                <td className="py-2 px-3 text-right font-semibold text-primary-red">1,106</td>
                                            </tr>
                                            <tr className="hover:bg-white/5">
                                                <td className="py-2 px-3 font-medium">Prince George</td>
                                                <td className="py-2 px-3 text-right">625</td>
                                                <td className="py-2 px-3 text-right">671</td>
                                                <td className="py-2 px-3 text-right">250</td>
                                                <td className="py-2 px-3 text-right font-semibold text-primary-red">1,034</td>
                                                <td className="py-2 px-3 text-right font-semibold text-primary-red">1,097</td>
                                                <td className="py-2 px-3 text-right bg-white/5 font-bold text-primary-orange">6,340</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </PageSection>
                        </main>
                    </div>
                </SectionWrapper>
            </PageDisplay>
        </>
    );
}

export default TrendAndForcasts;
