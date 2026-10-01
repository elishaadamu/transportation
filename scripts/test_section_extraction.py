import os
import shutil
import subprocess
import docx

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORIGINAL_DOCX = os.path.join(BASE_DIR, "items to use/TCAMPO_Plan2050_Ch1-Ch2_20260916-zak.docx")
SECTIONS_DIR = os.path.join(BASE_DIR, "public/downloads/sections")
TMP_DIR = "/tmp/tcampo_sections_test"

os.makedirs(SECTIONS_DIR, exist_ok=True)
os.makedirs(TMP_DIR, exist_ok=True)

CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

def docx_to_pdf_via_ql(docx_path, output_pdf_path):
    preview_dir = docx_path + ".qlpreview"
    if os.path.exists(preview_dir):
        shutil.rmtree(preview_dir)
    
    subprocess.run(["qlmanage", "-p", "-o", os.path.dirname(docx_path), docx_path], capture_output=True)
    preview_html = os.path.join(preview_dir, "Preview.html")
    
    if not os.path.exists(preview_html):
        raise RuntimeError(f"QuickLook failed to produce Preview.html for {docx_path}")
    
    cmd = [
        CHROME_PATH,
        "--headless",
        "--disable-gpu",
        "--run-all-compositor-stages-before-draw",
        "--no-pdf-header-footer",
        f"--print-to-pdf={output_pdf_path}",
        f"file://{preview_html}"
    ]
    subprocess.run(cmd, capture_output=True)
    if not os.path.exists(output_pdf_path) or os.path.getsize(output_pdf_path) == 0:
        raise RuntimeError(f"Chrome failed to create PDF at {output_pdf_path}")

SECTIONS_MAP = [
    # Chapter 1 (Parent Header index 0)
    ("TCAMPO_Plan2050_Sec1_1_Regional_Context", 0, 1, 7),
    ("TCAMPO_Plan2050_Sec1_2_TCAMPO_Organization_and_Structure", 0, 7, 11),
    ("TCAMPO_Plan2050_Sec1_3_Purpose_of_the_Plan", 0, 11, 13),
    ("TCAMPO_Plan2050_Sec1_4_Role_of_TCAMPO", 0, 13, 20),
    ("TCAMPO_Plan2050_Sec1_5_Federal_Requirements", 0, 20, 23),
    ("TCAMPO_Plan2050_Sec1_6_National_Planning_Factors", 0, 23, 35),
    ("TCAMPO_Plan2050_Sec1_7_Federal_Performance_Measures", 0, 35, 45),
    ("TCAMPO_Plan2050_Sec1_8_Goals_Objectives_Performance_Measures", 0, 45, 77),
    ("TCAMPO_Plan2050_Sec1_9_Planning_Process", 0, 77, 91),
    ("TCAMPO_Plan2050_Sec1_10_Relationship_to_Other_Plans", 0, 91, 93),
    ("TCAMPO_Plan2050_Sec1_11_What_We_Heard_Public_Outreach", 0, 93, 96),

    # Chapter 2 (Parent Header index 96)
    ("TCAMPO_Plan2050_Sec2_1_Trends_Introduction", None, 96, 101),
    ("TCAMPO_Plan2050_Sec2_2_Activity_Density", 96, 101, 118),
    ("TCAMPO_Plan2050_Sec2_3_Population_Employment_Trends", 96, 118, 150),
    ("TCAMPO_Plan2050_Sec2_4_Shift_Share_Employment", 96, 150, 161),
    ("TCAMPO_Plan2050_Sec2_5_Demographic_Profiles_EJ", 96, 161, 166),
    ("TCAMPO_Plan2050_Sec2_6_Socioeconomic_Forecasts", 96, 166, 172),
    ("TCAMPO_Plan2050_Sec2_7_Land_Use_and_Development", 96, 172, 184),
    ("TCAMPO_Plan2050_Sec2_8_Travel_Patterns", 96, 184, 196),
    ("TCAMPO_Plan2050_Sec2_9_Commuter_Flows", 96, 196, 212),
]

print(f"Testing extraction of {len(SECTIONS_MAP)} sections...")
for filename, parent_idx, start_idx, end_idx in SECTIONS_MAP:
    sec_docx = os.path.join(TMP_DIR, f"{filename}.docx")
    sec_pdf = os.path.join(SECTIONS_DIR, f"{filename}.pdf")
    
    doc = docx.Document(ORIGINAL_DOCX)
    body = doc.element.body
    sectPr = body.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}sectPr')
    
    elements = []
    if parent_idx is not None:
        elements.append(body[parent_idx])
    for i in range(start_idx, end_idx):
        elements.append(body[i])
        
    for child in list(body):
        if child != sectPr:
            body.remove(child)
            
    for el in elements:
        if sectPr is not None:
            sectPr.addprevious(el)
        else:
            body.append(el)
            
    doc.save(sec_docx)
    # Copy docx to public/downloads/sections as well
    shutil.copy(sec_docx, os.path.join(SECTIONS_DIR, f"{filename}.docx"))
    
    docx_to_pdf_via_ql(sec_docx, sec_pdf)
    size = os.path.getsize(sec_pdf)
    print(f"  [OK] {filename}.pdf ({size:,} bytes)")

print("All sections extracted and converted successfully!")
