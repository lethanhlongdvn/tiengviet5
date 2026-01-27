import os
import re

# Full list of HTML files to process
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
    "342-thanh-pho-thong-minh-mat-xda.html",
    "template-lesson.html",
    "template-lesson1.html"
]

project_dir = r"c:\Users\Admin\Desktop\tiengviet5"

for file_name in files:
    file_path = os.path.join(project_dir, file_name)
    if not os.path.exists(file_path):
        print(f"Skipping {file_name} - not found")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check current alignment to decide if it's poetry or prose
    # We look for the .reading-content p block in <style>
    style_match = re.search(r'\.reading-content\s+p\s*\{([^}]+)\}', content, re.IGNORECASE | re.DOTALL)
    
    if style_match:
        style_block = style_match.group(1)
        
        is_poetry = "text-align: center" in style_block.lower() or "text-indent: 0" in style_block.lower()
        
        new_indent = "0" if is_poetry else "2rem"
        
        # Replace the entire block or individual properties
        # For simplicity and standardization, we'll replace the whole inner content of the block
        # consistent with the user's request: text-align: left, text-indent: 0 or 2rem
        
        new_style_inner = f'''
            text-indent: {new_indent};
            margin-bottom: 1.5rem;
            text-align: left;
        '''
        
        content = re.sub(
            r'(\.reading-content\s+p\s*\{)[^}]+(\})',
            f'\\1{new_style_inner}\\2',
            content,
            flags=re.IGNORECASE | re.DOTALL
        )
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file_name} ({'Poetry' if is_poetry else 'Prose'})")
    else:
        print(f"Could not find .reading-content p style in {file_name}")
