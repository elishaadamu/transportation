#!/usr/bin/env python3
import os
import sys
import base64
import subprocess
import docx
from docx.text.paragraph import Paragraph
from docx.table import Table

def img_to_base64(path):
    if not os.path.exists(path):
        return ""
    ext = path.split('.')[-1].lower()
    mime = 'image/jpeg' if ext in ['jpg', 'jpeg'] else 'image/png'
    with open(path, 'rb') as f:
        data = base64.b64encode(f.read()).decode('utf-8')
    return f"data:{mime};base64,{data}"

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOGO_B64 = img_to_base64(os.path.join(BASE_DIR, "src/assets/logo.png"))
GOALS_B64 = img_to_base64(os.path.join(BASE_DIR, "src/assets/plan2050_cover_and_goals.png"))
IMG1_B64 = img_to_base64(os.path.join(BASE_DIR, "src/assets/doc_images/image1.jpeg"))
IMG2_B64 = img_to_base64(os.path.join(BASE_DIR, "src/assets/doc_images/image2.jpeg"))
IMG3_B64 = img_to_base64(os.path.join(BASE_DIR, "src/assets/doc_images/image3.jpeg"))
IMG4_B64 = img_to_base64(os.path.join(BASE_DIR, "src/assets/doc_images/image4.jpeg"))
IMG5_B64 = img_to_base64(os.path.join(BASE_DIR, "src/assets/doc_images/image5.png"))
IMG6_B64 = img_to_base64(os.path.join(BASE_DIR, "src/assets/doc_images/image6.jpeg"))
IMG7_B64 = img_to_base64(os.path.join(BASE_DIR, "src/assets/doc_images/image7.jpeg"))
IMG8_B64 = img_to_base64(os.path.join(BASE_DIR, "src/assets/doc_images/image8.jpeg"))

CSS_STYLES = """
@page {
    size: letter;
    margin: 20mm 15mm 20mm 15mm;
    @bottom-right {
        content: counter(page);
    }
}
* {
    box-sizing: border-box;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #1e293b;
    line-height: 1.6;
    font-size: 10.5pt;
    margin: 0;
    padding: 0;
    background: #fff;
}
.header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #1e3a8a;
    padding-bottom: 12px;
    margin-bottom: 24px;
}
.logo-container img {
    height: 48px;
    width: auto;
}
.header-meta {
    text-align: right;
    font-size: 8.5pt;
    color: #64748b;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
}
.header-meta .title {
    color: #1e3a8a;
    font-size: 11pt;
    font-weight: 800;
}
.hero-title-box {
    background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
    color: white;
    padding: 24px;
    border-radius: 8px;
    margin-bottom: 28px;
}
.hero-badge {
    display: inline-block;
    background: rgba(255, 255, 255, 0.15);
    color: #93c5fd;
    font-size: 8pt;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 4px;
    margin-bottom: 10px;
    border: 1px solid rgba(147, 197, 253, 0.3);
}
.hero-title-box h1 {
    margin: 0 0 8px 0;
    font-size: 22pt;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: #ffffff;
}
.hero-title-box p {
    margin: 0;
    font-size: 11pt;
    color: #cbd5e1;
}
h2 {
    color: #0f172a;
    font-size: 15pt;
    font-weight: 700;
    margin-top: 26px;
    margin-bottom: 12px;
    padding-bottom: 6px;
    border-bottom: 1.5px solid #e2e8f0;
}
h3 {
    color: #1e3a8a;
    font-size: 12.5pt;
    font-weight: 600;
    margin-top: 18px;
    margin-bottom: 8px;
}
h4 {
    color: #334155;
    font-size: 11pt;
    font-weight: 600;
    margin-top: 14px;
    margin-bottom: 6px;
}
p {
    margin: 0 0 12px 0;
    text-align: justify;
}
ul, ol {
    margin: 0 0 14px 0;
    padding-left: 24px;
}
li {
    margin-bottom: 6px;
}
.callout {
    background: #f8fafc;
    border-left: 4px solid #2563eb;
    padding: 14px 18px;
    border-radius: 0 6px 6px 0;
    margin: 18px 0;
    font-size: 10pt;
}
.callout h4 {
    margin-top: 0;
    color: #1e3a8a;
}
.figure-box {
    margin: 20px 0;
    text-align: center;
    page-break-inside: avoid;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 12px;
    background: #f8fafc;
}
.figure-box img {
    max-width: 96%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.figure-caption {
    font-size: 8.5pt;
    color: #475569;
    font-style: italic;
    margin-top: 8px;
    margin-bottom: 0;
    font-weight: 500;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin: 18px 0;
    font-size: 9pt;
    page-break-inside: avoid;
}
table th {
    background-color: #0f172a;
    color: #ffffff;
    font-weight: 600;
    text-align: left;
    padding: 8px 10px;
    border: 1px solid #0f172a;
}
table td {
    padding: 7px 10px;
    border: 1px solid #cbd5e1;
    color: #334155;
}
table tr:nth-child(even) {
    background-color: #f1f5f9;
}
.footer-note {
    margin-top: 36px;
    padding-top: 14px;
    border-top: 1px solid #e2e8f0;
    font-size: 8pt;
    color: #94a3b8;
    display: flex;
    justify-content: space-between;
}
.page-break {
    page-break-before: always;
}
.avoid-break {
    page-break-inside: avoid;
}
"""

def generate_html_wrapper(title, chapter_badge, subtitle, body_content):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>{title} - TCAMPO PLAN 2050</title>
<style>
{CSS_STYLES}
</style>
</head>
<body>

<div class="header-bar">
    <div class="logo-container">
        {f'<img src="{LOGO_B64}" alt="TCAMPO Logo">' if LOGO_B64 else '<span style="font-size:16pt;font-weight:bold;color:#1e3a8a;">Tri-Cities MPO</span>'}
    </div>
    <div class="header-meta">
        <div class="title">TCAMPO PLAN 2050</div>
        <div>Long-Range Transportation Plan</div>
    </div>
</div>

<div class="hero-title-box">
    <div class="hero-badge">{chapter_badge}</div>
    <h1>{title}</h1>
    <p>{subtitle}</p>
</div>

<div class="content-body">
{body_content}
</div>

<div class="footer-note">
    <div>Tri-Cities Area Metropolitan Planning Organization (TCAMPO)</div>
    <div>PLAN 2050 Long-Range Transportation Plan</div>
</div>

</body>
</html>"""

def build_chapter1_html():
    content = f"""
<h2>1. Regional Context</h2>
<p>
Located along the I-95, I-85, and I-295 corridors about 25 miles south of Richmond, the Tri-Cities region is situated at the confluence of the James and Appomattox Rivers. The Tri-Cities Area Metropolitan Planning Organization (TCAMPO) is the federally designated planning body responsible for transportation planning in south-central Virginia's Tri-Cities region. Contained within the Crater Planning District Commission (PDC), TCAMPO is composed of six member jurisdictions, including the independent cities of Colonial Heights, Hopewell, and Petersburg and portions of the adjoining Chesterfield, Dinwiddie, and Prince George Counties. The Tri-Cities region is part of the Greater Richmond Region, which is defined by the Office of Management and Budget (OMB) as the Richmond, Virginia Metropolitan Statistical Area (MSA).
</p>
<p>
Figure 1 depicts the TCAMPO planning area in the context of the Richmond MSA. According to the 2020 decennial census, the population of TCAMPO was 167,920. With a land area of approximately 324 square miles, the MPO has a population density of approximately 518 people per square mile. Among all MPOs in Virginia, TCAMPO is ranked fifth in terms of population, sixth in land area, and tenth in population density. Although the population of the Tri-Cities region grew by 24.4 percent between the last two decennial censuses, it lags behind the state (39.5 percent) and the nation (33.3 percent).
</p>

<div class="figure-box">
    <img src="{IMG1_B64}" alt="Figure 1: Greater Richmond Region and Metropolitan Planning Organization Boundaries">
    <p class="figure-caption">Figure 1. Greater Richmond Region and Metropolitan Planning Organization Boundaries</p>
</div>

<p>
Unincorporated communities located within the Tri-Cities region include portions of Chester, Enon, Ettrick, Fort Gregg-Adams (Fort Lee), Matoaca, and Prince George. These communities, which are defined as Census Designated Places (CDP) by the United States Census Bureau, are integral to the TCAMPO planning area. Ettrick is home to Virginia State University (VSU), the region’s largest university or college. Fort Lee is a large United States Army post and is one of the region’s largest employers. The Chester, Enon, Matoaca, and Prince George CDPs are additional clusters that contain large residential and commercial activity centers. Each of these communities have significant amounts of the region’s employment and housing and are major sources of trip generation. To carry out transportation planning activities for the region, TCAMPO coordinates with its six member jurisdictions, the Virginia Department of Transportation (VDOT), the Department of Rail and Public Transportation (DRPT), Crater PDC, Petersburg Area Transit (PAT), and other planning partners to guide investment in the region's transportation network.
</p>

<h2>2. TCAMPO Organization and Structure</h2>
<p>
TCAMPO consists of a Policy Committee and a Technical Advisory Committee (TAC), each playing a distinct role in the regional planning process. The Policy Committee serves as the primary decision-making body and is responsible for adopting all federally required planning products. Voting members include elected representatives from each of the member jurisdictions, appointed representatives from the Office of the Virginia Secretary of Transportation, the Crater Planning District Commission (CPDC), and Petersburg Area Transit (PAT). Representatives from the Federal Transit Administration (FTA), the Federal Highway Administration (FHWA), and DRPT participate as nonvoting members.
</p>
<p>
The TAC is composed of staff representatives from the member jurisdictions, Secretary of Transportation, PAT, and Crater PDC. It provides technical support and serves in an advisory capacity to the Policy Committee. Representatives from Fort Lee, RideFinders, and the National Park Service at Petersburg National Battlefield participate as advisory, nonvoting members given their importance to transportation in the Tri-Cities region.
</p>
<p>
Regional and state transportation and air quality planning agencies have executed Memoranda of Agreement pursuant to 23 CFR 450.310, defining the roles and responsibilities of each participating agency. During the long-range planning process, TCAMPO and Richmond Regional Transportation Planning Organization (RRTPO) develop an accompanying Conformity Report to comply with metropolitan transportation and air quality planning requirements.
</p>

<h2>3. Purpose of the Plan</h2>
<p>
Plan2050 is TCAMPO's Long Range Transportation Plan (LRTP). Also known as a Metropolitan Transportation Plan (MTP), Plan2050 is a federally required document that establishes the vision, goals, and multimodal investment priorities for the Tri-Cities region’s transportation system. As TCAMPO's core long-range planning document, Plan2050 creates a strategic framework for decision-making across the region, guiding investments that improve mobility, safety, equity, and economic development over the next 20 years.
</p>
<p>
Plan2050 provides the basis from which shorter-range programming documents, such as the Metropolitan Transportation Improvement Program (MTIP), will be developed. Consistent with federal requirements, projects must be in the MPO’s current approved LRTP to be eligible for federal transportation funding. Federal regulations also require that the LRTP address a planning horizon of at least 20 years and is fiscally constrained. This means that Plan2050 includes only projects and programs for which a reasonable funding source can be identified. Plan2050 ensures that investments in its transportation network are coordinated, strategic, and aligned with the goals of the communities it serves.
</p>

<h2>4. Role of TCAMPO</h2>
<p>
TCAMPO is responsible for carrying out the federally mandated continuing, comprehensive, and cooperative (3C) planning process on behalf of the region's member jurisdictions. In this role, TCAMPO coordinates regional transportation planning, prioritizes investments, and ensures that federal transportation funds are directed toward projects that reflect the needs and priorities of the Tri-Cities region. In addition to the LRTP, TCAMPO develops and maintains the following federally required planning products:
</p>
<ul>
    <li><strong>Unified Planning Work Program (UPWP)</strong> – updated annually</li>
    <li><strong>Metropolitan Transportation Plan (MTP)</strong> – updated every four years</li>
    <li><strong>Metropolitan Transportation Improvement Program (MTIP)</strong> – updated every four years</li>
    <li><strong>Congestion Management Process (CMP)</strong> – maintained on an ongoing basis</li>
</ul>
<p>
TCAMPO also maintains a Public Participation Plan and Title VI Compliance Plan in accordance with federal public involvement and civil rights requirements (23 CFR 450.316; 49 U.S.C. 5332). Together, these planning products establish the region's transportation priorities, which in turn guide TCAMPO's role in selecting and recommending projects for federal funding, including the Surface Transportation Block Grant (STBG), Congestion Mitigation and Air Quality (CMAQ), and Transportation Alternatives Program (TAP). Beyond federal allocations, TCAMPO also evaluates and recommends projects through Virginia's SMART SCALE prioritization process and provides technical assistance to its member jurisdictions in developing competitive applications.
</p>

<h2>5. Federal Regional Transportation Planning Requirements</h2>
<p>
Federal law requires that transportation plans in urbanized areas with a population of 50,000 or more be developed through the 3C planning process (23 U.S.C. 134; 49 U.S.C. 5303). MPOs must develop and maintain a Long-Range Transportation Plan and a Transportation Improvement Program, each updated every four years. MPOs serving urbanized areas with a population of 200,000 or more, designated as Transportation Management Areas (TMAs), are also required to maintain a Congestion Management Process (23 CFR 450.322).
</p>
<p>
Federal planning requirements also emphasize performance-driven, outcome based planning, first introduced under MAP-21 in 2012 and continued under the FAST Act and the Infrastructure Investment and Jobs Act (IIJA). This framework requires MPOs and states to establish measurable targets tied to national performance goals covering safety, infrastructure condition, system reliability, and freight movement (23 U.S.C. 150; 23 CFR 490), ensuring federal investments advance national transportation priorities.
</p>

<h2>6. National Transportation Planning Factors</h2>
<p>
Since the Intermodal Surface Transportation Efficiency Act of 1991 (ISTEA), Congress has identified key planning areas for MPOs and states to consider when developing multimodal transportation plans. MAP-21 established ten planning factors under 23 CFR 450.306 that remain in effect through the FAST Act and IIJA:
</p>
<ol>
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

<h2>7. Federal Performance Measures</h2>
<p>
Under MAP-21 and continued through the IIJA, MPOs and states must set targets tied to seven national goal areas:
</p>
<ul>
    <li><strong>Safety:</strong> To achieve a significant reduction in traffic fatalities and serious injuries on all public roads.</li>
    <li><strong>Infrastructure Condition:</strong> To maintain the highway infrastructure asset system in a state of good repair.</li>
    <li><strong>Congestion Reduction:</strong> To achieve a significant reduction in congestion on the National Highway System (NHS).</li>
    <li><strong>System Reliability:</strong> To improve the efficiency of the surface transportation system.</li>
    <li><strong>Freight Movement and Economic Vitality:</strong> To improve the national freight network, strengthen the ability of rural communities to access national and international trade markets, and support regional economic development.</li>
    <li><strong>Environmental Sustainability:</strong> To enhance the performance of the transportation system while protecting and enhancing the natural environment.</li>
    <li><strong>Reduced Project Delivery Delays:</strong> To reduce project costs, promote jobs and the economy, and expedite the movement of people and goods by accelerating project completion.</li>
</ul>

<h2>8. Plan2050 Goals, Objectives, and Performance Measures</h2>
<p>
Building on the federal planning factors and national goal areas, TCAMPO established seven regional goals to guide Plan2050:
</p>

<div class="callout">
    <h4>Goal 1: Safety</h4>
    <p>Significantly reduce fatal and serious injury crashes for all roadway users across the Tri-Cities region through targeted infrastructure improvements, complete streets design, and behavioral programs.</p>
</div>

<div class="callout">
    <h4>Goal 2: Infrastructure Condition & System Preservation</h4>
    <p>Maintain the region's highway pavements, bridges, and public transit assets in a state of good repair, prioritizing preservation over high-cost reconstruction.</p>
</div>

<div class="callout">
    <h4>Goal 3: Congestion Reduction & Operational Efficiency</h4>
    <p>Optimize the performance of key regional corridors through intelligent transportation systems (ITS), signal coordination, transit priority, and incident management.</p>
</div>

<div class="callout">
    <h4>Goal 4: Multimodal Mobility & Accessibility</h4>
    <p>Expand active transportation and transit networks to provide seamless, affordable, and safe connections to jobs, healthcare, education, and essential services for all residents.</p>
</div>

<div class="callout">
    <h4>Goal 5: Economic Vitality & Freight Movement</h4>
    <p>Support regional industry clusters, logistics hubs, and military installations (Fort Gregg-Adams) with resilient, reliable highway and rail freight infrastructure.</p>
</div>

<div class="callout">
    <h4>Goal 6: Environmental Sustainability & Resiliency</h4>
    <p>Protect regional water resources, reduce transportation-related emissions, promote clean energy fleet adoption, and fortify infrastructure against severe weather events.</p>
</div>

<div class="callout">
    <h4>Goal 7: Equity & Quality of Life</h4>
    <p>Ensure that transportation investments are distributed equitably, avoiding disproportionate burdens on historically underserved populations and enhancing overall quality of life.</p>
</div>

<h2>9. Planning Process</h2>
<p>
The development of Plan2050 was guided by a rigorous six-step planning methodology designed to align regional priorities with federal regulations:
</p>
<ol>
    <li><strong>Data Collection and Conditions Assessment:</strong> Establishing baseline demographic, land use, and travel pattern conditions.</li>
    <li><strong>Community and Stakeholder Engagement:</strong> Conducting broad public surveys, interactive workshops, and stakeholder roundtables across all six member jurisdictions.</li>
    <li><strong>Scenario Development and Evaluation:</strong> Modeling future travel demand under multiple land use and infrastructure investment scenarios.</li>
    <li><strong>Project Identification and Prioritization:</strong> Scoring projects based on federal performance metrics, cost-effectiveness, and equity impacts.</li>
    <li><strong>Fiscal Constraint Analysis:</strong> Reconciling anticipated 25-year revenue streams with planned capital investments.</li>
    <li><strong>Interagency and Regional Coordination:</strong> Working in close partnership with VDOT, DRPT, Crater PDC, RRTPO, and local governments.</li>
</ol>
"""
    return generate_html_wrapper("Chapter 1: Introduction", "TCAMPO PLAN 2050 | Chapter 1", "Regional Context, Governance Structure, and Strategic Framework", content)

def build_chapter2_html():
    content = f"""
<h2>1. Demographic and Economic Context</h2>
<p>
Understanding demographic shifts, economic trajectories, and development patterns is fundamental to forecasting future travel demand and planning transportation infrastructure. The Tri-Cities region—comprising the independent cities of Colonial Heights, Hopewell, and Petersburg, alongside portions of Chesterfield, Dinwiddie, and Prince George Counties—exhibits distinct socioeconomic trends that directly influence mobility requirements.
</p>

<h2>2. Density and Activity Distribution</h2>
<p>
Figure 2 shows population density across the Tri-Cities region by Census block group. High-density residential pockets are concentrated within the urban cores of Petersburg, Hopewell, and Colonial Heights, as well as suburban communities in northern Chesterfield County.
</p>

<div class="figure-box">
    <img src="{IMG2_B64}" alt="Figure 2: TCAMPO Population Density by Block Group">
    <p class="figure-caption">Figure 2. TCAMPO Population Density by Block Group (Residents per Square Mile)</p>
</div>

<p>
Figure 3 illustrates the region's employment density. Commercial and industrial jobs are heavily concentrated along the I-95 and Route 1 corridors, Fort Gregg-Adams, the Port of Richmond/James River industrial zones in Hopewell, and retail centers in Colonial Heights.
</p>

<div class="figure-box">
    <img src="{IMG3_B64}" alt="Figure 3: TCAMPO Employment Density by Block Group">
    <p class="figure-caption">Figure 3. TCAMPO Employment Density by Block Group (Jobs per Square Mile)</p>
</div>

<p>
Figure 4 combines population and employment density to illustrate activity density. This metric highlights prime corridors for multimodal investments, frequent transit service, and complete streets improvements.
</p>

<div class="figure-box">
    <img src="{IMG4_B64}" alt="Figure 4: TCAMPO Activity Density by Block Group">
    <p class="figure-caption">Figure 4. TCAMPO Activity Density by Block Group (Residents plus Jobs per Square Mile)</p>
</div>

<h2>3. Population, Household, and Employment Trends</h2>
<p>
Between 1990 and 2020, TCAMPO's total population increased by 24.4%, growing from 134,978 to 167,920 residents. While substantial, this growth rate trailed the Commonwealth of Virginia (39.5%) and the United States (33.3%). Substantial variation exists across member jurisdictions: Chesterfield and Prince George counties experienced robust suburban and exurban growth, while the cities of Petersburg and Hopewell saw modest population contractions before stabilizing in the late 2010s.
</p>

<h3>Industry Composition and Economic Shift-Share</h3>
<p>
The regional economic base is anchored by federal government and defense (Fort Gregg-Adams), manufacturing and chemical processing (Hopewell industrial complex), healthcare, logistics, and retail trade. Shift-share analysis compares regional employment performance against national growth benchmarks across industry supersectors.
</p>

<div class="figure-box">
    <img src="{IMG5_B64}" alt="Figure 5: TCAMPO Shift-Share by Supersector vs. National">
    <p class="figure-caption">Figure 5. TCAMPO Shift-Share Employment Analysis by Supersector vs. National Benchmarks (2019–2023)</p>
</div>

<h2>4. Demographic Profiles and Environmental Justice</h2>
<p>
In compliance with federal Title VI and Environmental Justice (EJ) mandates, TCAMPO identifies historically underserved communities, including minority, low-income, limited English proficiency (LEP), zero-vehicle households, elderly, and disabled populations. The Composite Environmental Justice Index identifies areas requiring focused public participation and equitable capital investments.
</p>

<div class="figure-box">
    <img src="{IMG6_B64}" alt="Figure 6: Composite EJ Index by Block Group">
    <p class="figure-caption">Figure 6. Composite Environmental Justice (EJ) Index by Census Block Group</p>
</div>

<h2>5. Socioeconomic Forecasts (2017–2045)</h2>
<p>
Travel demand modeling requires projections of future population, households, and employment. Table 1 summarizes the adopted socioeconomic forecasts for the TCAMPO planning area.
</p>

<table>
    <thead>
        <tr>
            <th>Jurisdiction</th>
            <th>2017 Population</th>
            <th>2045 Population</th>
            <th>Pop. Change (%)</th>
            <th>2017 Employment</th>
            <th>2045 Employment</th>
            <th>Emp. Change (%)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Colonial Heights</td>
            <td>17,731</td>
            <td>18,920</td>
            <td>+6.7%</td>
            <td>12,410</td>
            <td>14,100</td>
            <td>+13.6%</td>
        </tr>
        <tr>
            <td>Hopewell</td>
            <td>22,644</td>
            <td>24,150</td>
            <td>+6.7%</td>
            <td>10,230</td>
            <td>11,800</td>
            <td>+15.3%</td>
        </tr>
        <tr>
            <td>Petersburg</td>
            <td>31,644</td>
            <td>34,500</td>
            <td>+9.0%</td>
            <td>15,920</td>
            <td>18,450</td>
            <td>+15.9%</td>
        </tr>
        <tr>
            <td>Chesterfield (MPO Part)</td>
            <td>47,210</td>
            <td>64,800</td>
            <td>+37.3%</td>
            <td>18,340</td>
            <td>25,600</td>
            <td>+39.6%</td>
        </tr>
        <tr>
            <td>Dinwiddie (MPO Part)</td>
            <td>16,520</td>
            <td>19,800</td>
            <td>+19.9%</td>
            <td>4,850</td>
            <td>6,100</td>
            <td>+25.8%</td>
        </tr>
        <tr>
            <td>Prince George (MPO Part)</td>
            <td>32,171</td>
            <td>41,200</td>
            <td>+28.1%</td>
            <td>14,560</td>
            <td>19,300</td>
            <td>+32.6%</td>
        </tr>
        <tr style="font-weight: bold; background: #e2e8f0;">
            <td>TCAMPO Total</td>
            <td>167,920</td>
            <td>203,370</td>
            <td>+21.1%</td>
            <td>76,310</td>
            <td>95,350</td>
            <td>+24.9%</td>
        </tr>
    </tbody>
</table>

<h2>6. Land Use and Development</h2>
<p>
Figure 7 and Figure 8 demonstrate historical and contemporary land cover transformations across the Tri-Cities. Over the past three decades, thousands of acres of agricultural and forested land have transitioned to low-to-medium density residential and commercial developments.
</p>

<div class="figure-box">
    <img src="{IMG7_B64}" alt="Figure 7: Existing Land Cover and Transitions">
    <p class="figure-caption">Figure 7. Existing Land Cover and Transitions from Undeveloped to Developed Areas</p>
</div>

<div class="figure-box">
    <img src="{IMG8_B64}" alt="Figure 8: Percentage of Land Developed/Undeveloped">
    <p class="figure-caption">Figure 8. Percentage of Land that is Developed, Undeveloped, and Transitioned by Jurisdiction</p>
</div>

<h2>7. Travel Patterns and Commuter Flows</h2>
<p>
Transportation demand is largely governed by journey-to-work dynamics and interregional travel. Table 2 details household vehicle availability, highlighting communities where transit and non-motorized alternatives are vital necessities.
</p>

<table>
    <thead>
        <tr>
            <th>Jurisdiction</th>
            <th>Total Households</th>
            <th>No Vehicle (%)</th>
            <th>1 Vehicle (%)</th>
            <th>2+ Vehicles (%)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Colonial Heights</td>
            <td>7,340</td>
            <td>6.1%</td>
            <td>34.2%</td>
            <td>59.7%</td>
        </tr>
        <tr>
            <td>Hopewell</td>
            <td>9,120</td>
            <td>12.4%</td>
            <td>39.8%</td>
            <td>47.8%</td>
        </tr>
        <tr>
            <td>Petersburg</td>
            <td>13,580</td>
            <td>18.7%</td>
            <td>42.5%</td>
            <td>38.8%</td>
        </tr>
        <tr>
            <td>Chesterfield (MPO)</td>
            <td>16,950</td>
            <td>3.2%</td>
            <td>26.4%</td>
            <td>70.4%</td>
        </tr>
        <tr>
            <td>Dinwiddie (MPO)</td>
            <td>6,240</td>
            <td>4.5%</td>
            <td>28.1%</td>
            <td>67.4%</td>
        </tr>
        <tr>
            <td>Prince George (MPO)</td>
            <td>11,480</td>
            <td>4.1%</td>
            <td>27.9%</td>
            <td>68.0%</td>
        </tr>
        <tr style="font-weight: bold; background: #e2e8f0;">
            <td>TCAMPO Average</td>
            <td>64,710</td>
            <td>8.4%</td>
            <td>32.8%</td>
            <td>58.8%</td>
        </tr>
    </tbody>
</table>

<p>
According to commuter flow analysis, over 42% of employed Tri-Cities residents commute daily outside the MPO boundary, primarily north into the Richmond metropolitan area along I-95, Route 1, and I-295. Conversely, major employment centers within the Tri-Cities draw significant inbound commuters from Southside Virginia and the Richmond suburbs, underscoring the critical need for interregional corridor coordination and transit connectivity.
</p>
"""
    return generate_html_wrapper("Chapter 2: National and Regional Trends and Forecasts", "TCAMPO PLAN 2050 | Chapter 2", "Demographic, Economic, and Land Use Trends and Socioeconomic Forecasts", content)

def build_chapter3_html():
    content = """
<h2>Executive Summary: Existing Conditions Assessment</h2>
<p>
Chapter 3 evaluates the current physical condition and operational performance of the Tri-Cities region's multimodal transportation system. This comprehensive inventory provides the baseline data needed to identify congestion bottlenecks, safety hazards, asset deficiencies, and transit service gaps.
</p>

<div class="callout">
    <h4>Key Findings: Transportation System Today</h4>
    <ul>
        <li><strong>Roadway Network:</strong> The region encompasses over 1,200 centerline miles of roadway, anchored by major interstate corridors (I-95, I-85, I-295) and regional arterials (US 1, US 301, US 460, Route 10, Route 36).</li>
        <li><strong>Bridge Conditions:</strong> Over 92% of National Highway System (NHS) bridge deck area is in Good or Fair condition; however, several aging structures on secondary routes require priority rehabilitation.</li>
        <li><strong>Transit Service:</strong> Petersburg Area Transit (PAT) operates fixed-route bus services connecting Petersburg, Hopewell, Colonial Heights, and Fort Gregg-Adams. Express bus and vanpool options provide commuter connections to downtown Richmond.</li>
        <li><strong>Active Transportation:</strong> The Appomattox River Trail (ART) serves as the regional spine for bicycle and pedestrian travel, with critical connector segments currently under development.</li>
        <li><strong>Freight Corridors:</strong> Major rail lines operated by CSX and Norfolk Southern, alongside interstate highways, handle millions of tons of domestic and international cargo annually.</li>
    </ul>
</div>

<p>
The complete, detailed technical report for Chapter 3 is currently undergoing final interagency review. The full chapter will include comprehensive pavement condition ratings, level of service (LOS) analysis for all major intersections, transit ridership profiles, and freight bottleneck locations.
</p>
"""
    return generate_html_wrapper("Chapter 3: Our Transportation System Today", "TCAMPO PLAN 2050 | Chapter 3", "Baseline Multimodal Infrastructure, Asset Management, and Operational Performance", content)

def build_chapter4_html():
    content = """
<h2>Executive Summary: Future System Vision & Scenarios</h2>
<p>
Chapter 4 presents the regional transportation vision for 2050, identifying multimodal investments, policy strategies, and system enhancements designed to accommodate anticipated population and economic growth over the next 25 years.
</p>

<div class="callout">
    <h4>Core Focus Areas: System Tomorrow: 2050</h4>
    <ul>
        <li><strong>Congestion Management & Corridor Optimization:</strong> Deployment of advanced traffic management systems (ATMS), adaptive signal control along Route 1 and Route 36, and targeted intersection capacity improvements.</li>
        <li><strong>Multimodal Connectivity:</strong> Completion of the 25-mile Appomattox River Trail network, enhanced bicycle/pedestrian access to transit hubs, and ADA-compliant sidewalk networks throughout downtown commercial districts.</li>
        <li><strong>Transit Modernization:</strong> Microtransit and on-demand mobility pilot programs in lower-density communities, expanded frequency on core PAT trunk routes, and enhanced park-and-ride amenities along I-95 and I-85.</li>
        <li><strong>Resilient & Sustainable Infrastructure:</strong> Climate resiliency adaptations for flood-prone river crossings, infrastructure hardening, and electric vehicle (EV) charging corridors.</li>
        <li><strong>Smart Logistics & Freight Mobility:</strong> Grade-crossing safety enhancements, truck parking facilities along I-95/I-85, and direct intermodal connector improvements.</li>
    </ul>
</div>

<p>
The full Chapter 4 document is being finalized in conjunction with member jurisdiction feedback and regional travel demand model scenario runs.
</p>
"""
    return generate_html_wrapper("Chapter 4: Our System Tomorrow: 2050", "TCAMPO PLAN 2050 | Chapter 4", "Long-Range Vision, Multimodal Investments, and Scenario Evaluations", content)

def build_chapter5_html():
    content = """
<h2>Executive Summary: Financial Capacity and Fiscal Constraint</h2>
<p>
Federal regulations require that the Long-Range Transportation Plan be fiscally constrained, demonstrating that anticipated federal, state, and local revenues will be sufficient to construct, operate, and maintain all proposed projects and programs through the 2050 planning horizon.
</p>

<div class="callout">
    <h4>Funding Strategy Overview</h4>
    <ul>
        <li><strong>Revenue Forecasting:</strong> 25-year revenue projections based on historical allocations from the federal Highway Trust Fund, Commonwealth Transportation Fund, and regional funding programs.</li>
        <li><strong>Federal Program Allocations:</strong> Strategic programming of Surface Transportation Block Grant (STBG), Congestion Mitigation and Air Quality (CMAQ), and Transportation Alternatives (TA) funds administered directly by TCAMPO.</li>
        <li><strong>State Prioritization (SMART SCALE):</strong> Identifying high-scoring regional projects for Virginia's biennial SMART SCALE competitive funding process.</li>
        <li><strong>Operations & Maintenance:</strong> Ensuring adequate funding allocations for routine roadway maintenance, bridge repairs, and transit agency operating subsidies prior to allocating discretionary capital funds.</li>
    </ul>
</div>

<p>
The final Chapter 5 document will feature detailed financial tables, project cost estimates with year-of-expenditure (YOE) inflation adjustments, and programmatic revenue forecasts.
</p>
"""
    return generate_html_wrapper("Chapter 5: Funding the Plan", "TCAMPO PLAN 2050 | Chapter 5", "Financial Capacity Analysis, Revenue Forecasts, and Fiscally Constrained Plan", content)

def build_appendices_html():
    content = """
<h2>Executive Summary: Plan2050 Documentation & Appendices</h2>
<p>
The Appendices compile all supporting documentation, technical methodologies, public participation summaries, and statutory compliance checklists that validate the TCAMPO PLAN2050.
</p>

<div class="callout">
    <h4>Documentation Index</h4>
    <ul>
        <li><strong>Appendix A: Public Participation and Stakeholder Outreach:</strong> Complete documentation of public survey results, community meeting minutes, written comments received, and MPO response matrices.</li>
        <li><strong>Appendix B: Travel Demand Modeling Methodology:</strong> Calibration reports, socioeconomic data inputs, trip generation parameters, and network validation procedures.</li>
        <li><strong>Appendix C: Project Prioritization Scoring Methodology:</strong> Detailed scoring rubrics evaluating safety, congestion, economic development, equity, and environmental impacts.</li>
        <li><strong>Appendix D: Air Quality Conformity Determination:</strong> Joint regional conformity analysis prepared in coordination with the Richmond Regional TPO (RRTPO).</li>
        <li><strong>Appendix E: Environmental Justice and Title VI Documentation:</strong> Demographic mapping methodologies, vulnerable population analyses, and equity benefit-burden evaluations.</li>
        <li><strong>Appendix F: Federal Planning Regulations Checklist:</strong> Comprehensive cross-walk demonstrating compliance with 23 U.S.C. 134, 49 U.S.C. 5303, and 23 CFR 450.</li>
    </ul>
</div>

<p>
The full appendices compendium will be published alongside the adopted final plan.
</p>
"""
    return generate_html_wrapper("Appendices: Technical Documentation", "TCAMPO PLAN 2050 | Documentation", "Public Outreach Reports, Travel Demand Modeling, and Statutory Compliance", content)

def main():
    downloads_dir = os.path.join(BASE_DIR, "public/downloads")
    os.makedirs(downloads_dir, exist_ok=True)
    
    docs = [
        ("TCAMPO_Plan2050_Chapter1_Introduction", build_chapter1_html()),
        ("TCAMPO_Plan2050_Chapter2_National_and_Regional_Trends_and_Forecasts", build_chapter2_html()),
        ("TCAMPO_Plan2050_Chapter3_Transportation_System_Today", build_chapter3_html()),
        ("TCAMPO_Plan2050_Chapter4_System_Tomorrow_2050", build_chapter4_html()),
        ("TCAMPO_Plan2050_Chapter5_Funding_the_Plan", build_chapter5_html()),
        ("TCAMPO_Plan2050_Appendices", build_appendices_html())
    ]
    
    chrome_path = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    
    for filename, html_content in docs:
        html_path = os.path.join(downloads_dir, f"{filename}.html")
        pdf_path = os.path.join(downloads_dir, f"{filename}.pdf")
        
        with open(html_path, "w", encoding="utf-8") as f:
            f.write(html_content)
        print(f"Saved {html_path}")
        
        cmd = [
            chrome_path,
            "--headless",
            "--disable-gpu",
            "--run-all-compositor-stages-before-draw",
            f"--print-to-pdf={pdf_path}",
            f"file://{html_path}"
        ]
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode == 0 and os.path.exists(pdf_path):
            print(f"Successfully compiled {pdf_path} ({os.path.getsize(pdf_path)} bytes)")
        else:
            print(f"Error compiling {pdf_path}: {res.stderr}")

if __name__ == "__main__":
    main()
