import os
import re

files = [
    r"c:\Users\Admin\Desktop\tiengviet5\template-lesson1.html",
    r"c:\Users\Admin\Desktop\tiengviet5\template-lesson.html",
    r"c:\Users\Admin\Desktop\tiengviet5\342-thanh-pho-thong-minh-mat-xda.html",
    r"c:\Users\Admin\Desktop\tiengviet5\341-dien-thoai-di-dong.html",
    r"c:\Users\Admin\Desktop\tiengviet5\332-gio-trai-dat.html",
    r"c:\Users\Admin\Desktop\tiengviet5\331-mot-nguoi-hung-tham-lang.html",
    r"c:\Users\Admin\Desktop\tiengviet5\322-nhung-con-hac-giay.html",
    r"c:\Users\Admin\Desktop\tiengviet5\312-viet-nam-que-huong-ta.html",
    r"c:\Users\Admin\Desktop\tiengviet5\311-ve-ngoi-nha-dang-xay.html",
    r"c:\Users\Admin\Desktop\tiengviet5\302-bo-doi-ve-lang.html",
    r"c:\Users\Admin\Desktop\tiengviet5\301-tran-dai-nghia.html",
    r"c:\Users\Admin\Desktop\tiengviet5\292-cu-do-chieu.html",
    r"c:\Users\Admin\Desktop\tiengviet5\291-danh-y-tue-tinh.html",
    r"c:\Users\Admin\Desktop\tiengviet5\282-nguoi-thay-cua-muon-doi.html",
    r"c:\Users\Admin\Desktop\tiengviet5\281-nghin-nam-van-hien.html",
    r"c:\Users\Admin\Desktop\tiengviet5\262-ve-tham-dat-mui.html",
    r"c:\Users\Admin\Desktop\tiengviet5\261-xuong-ba-la-que-toi.html",
    r"c:\Users\Admin\Desktop\tiengviet5\252-duong-que-dong-thap-muoi.html",
    r"c:\Users\Admin\Desktop\tiengviet5\251-dan-t'rung-tieng-ca-dai-ngan.html",
    r"c:\Users\Admin\Desktop\tiengviet5\242-vu-dieu-tren-nen-tho-cam.html",
    r"c:\Users\Admin\Desktop\tiengviet5\241-huong-com-mua-thu.html",
    r"c:\Users\Admin\Desktop\tiengviet5\232-nhung-bup-che-tren-cay-co-thu.html",
    r"c:\Users\Admin\Desktop\tiengviet5\231-hoi-thoi-com-thi-o-dong-van.html",
    r"c:\Users\Admin\Desktop\tiengviet5\222-khu-rung-cua-mat.html",
    r"c:\Users\Admin\Desktop\tiengviet5\221-viet-danh-gia-chinh-sua-bai-van-ta-nguoi.html",
    r"c:\Users\Admin\Desktop\tiengviet5\221-LTVC-Luyen-tap-cau-ghep.html",
    r"c:\Users\Admin\Desktop\tiengviet5\221-doan-thuyen-danh-ca.html",
    r"c:\Users\Admin\Desktop\tiengviet5\212-thu-cua-bo.html",
    r"c:\Users\Admin\Desktop\tiengviet5\211-ltvc-gio-hoa-thang-nam.html",
    r"c:\Users\Admin\Desktop\tiengviet5\211-viet-doan-van-ta-nguoi.html",
    r"c:\Users\Admin\Desktop\tiengviet5\211-gio-hoa-thang-nam.html",
    r"c:\Users\Admin\Desktop\tiengviet5\202-hop-qua-mau-thien-thanh.html",
    r"c:\Users\Admin\Desktop\tiengviet5\201-hat-gao-lang-ta.html",
    r"c:\Users\Admin\Desktop\tiengviet5\191-tieng-hat-nguoi-da.html",
    r"c:\Users\Admin\Desktop\tiengviet5\192-khuc-hat-ru-nhung-em-be-tren-lung-me.html"
]

for file_path in files:
    if not os.path.exists(file_path):
        print(f"Skipping {file_path} - not found")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace button text
    # <button onclick="switchTab('lesson')" id="btn-lesson" ... >\s*1. Bài học\s*</button>
    content = re.sub(
        r'(<button\s+[^>]*id=["\']btn-lesson["\'][^>]*>)\s*1\. Bài học\s*(</button>)',
        r'\1\n                    1. Đọc và tìm hiểu bài\n                \2',
        content,
        flags=re.IGNORECASE
    )
    
    # Replace comment
    content = re.sub(
        r'<!--\s*TAB 1: BÀI HỌC\s*-->',
        r'<!-- TAB 1: 1. Đọc và tìm hiểu bài -->',
        content,
        flags=re.IGNORECASE
    )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {file_path}")
