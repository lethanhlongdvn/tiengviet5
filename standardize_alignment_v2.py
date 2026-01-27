import os
import re

# Full list of HTML files to process (Reading lessons)
files = [
    "191-tieng-hat-nguoi-da.html",
    "192-khuc-hat-ru-nhung-em-be-tren-lung-me.html",
    "201-hat-gao-lang-ta.html",
    "202-hop-qua-mau-thien-thanh.html",
    "211-gio-hoa-thang-nam.html",
    "211-ltvc-gio-hoa-thang-nam.html",
    "211-viet-doan-van-ta-nguoi.html",
    "212-dmr-doc-mo-rong.html",
    "212-thu-cua-bo.html",
    "212-viet-bai-van-ta-nguoi.html",
    "221-doan-thuyen-danh-ca.html",
    "221-LTVC-Luyen-tap-cau-ghep.html",
    "221-viet-danh-gia-chinh-sua-bai-van-ta-nguoi.html",
    "222-khu-rung-cua-mat.html",
    "231-hoi-thoi-com-thi-o-dong-van.html",
    "232-nhung-bup-che-tren-cay-co-thu.html",
    "241-huong-com-mua-thu.html",
    "242-vu-dieu-tren-nen-tho-cam.html",
    "251-dan-t'rung-tieng-ca-dai-ngan.html",
    "252-duong-que-dong-thap-muoi.html",
    "261-xuong-ba-la-que-toi.html",
    "262-ve-tham-dat-mui.html",
    "281-nghin-nam-van-hien.html",
    "282-nguoi-thay-cua-muon-doi.html",
    "291-danh-y-tue-tinh.html",
    "292-cu-do-chieu.html",
    "301-tran-dai-nghia.html",
    "302-bo-doi-ve-lang.html",
    "311-ve-ngoi-nha-dang-xay.html",
    "312-viet-nam-que-huong-ta.html",
    "321-bai-ca-trai-dat.html",
    "322-nhung-con-hac-giay.html",
    "331-mot-nguoi-hung-tham-lang.html",
    "332-gio-trai-dat.html",
    "341-dien-thoai-di-dong.html",
    "342-thanh-pho-thong-minh-mat-xda.html"
]

project_dir = r"c:\Users\Admin\Desktop\tiengviet5"

for file_name in files:
    file_path = os.path.join(project_dir, file_name)
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Standardize container alignment (change text-justify to text-left)
    content = content.replace("text-justify", "text-left")
    
    # 2. Handle different CSS patterns: .reading-content p OR .serif-font p
    updated = False
    
    patterns = [
        r'\.reading-content\s+p\s*\{[^}]+\}',
        r'\.serif-font\s+p\s*\{[^}]+\}'
    ]
    
    for pattern in patterns:
        match = re.search(pattern, content, re.IGNORECASE | re.DOTALL)
        if match:
            style_block = match.group(0)
            
            # Decide if prose or poetry
            # If it contains center or text-indent: 0, it's poetry
            is_poetry = "text-align: center" in style_block.lower() or "text-indent: 0" in style_block.lower()
            
            # Determine indentation
            new_indent = "0" if is_poetry else "2rem"
            
            # Create new style block
            # We preserve the selector
            selector = re.match(r'([^{]+)', style_block).group(1).strip()
            new_style = f'''{selector} {{
            text-indent: {new_indent};
            margin-bottom: 1.5rem;
            text-align: left;
        }}'''
            
            content = content.replace(style_block, new_style)
            updated = True
    
    if updated:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file_name}")
    else:
        # If no CSS block found, check if it's 201 style (poem-stanza)
        if "poem-stanza" in content:
             # Already handled if text-left replace worked
             print(f"Skipping {file_name} (handled via text-left replace if needed)")
        else:
            print(f"Could not find style block in {file_name}")
