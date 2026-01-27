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

header_template = r'''    <!-- Header -->
    <header class="sticky top-0 z-50 px-4 py-2">
        <nav class="container mx-auto glass-card rounded-xl px-5 py-2 flex justify-between items-center shadow-lg">
            <div class="flex items-center space-x-4">
                <div
                    class="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 shrink-0">
                    <span class="text-xl font-black">E</span>
                </div>
                <div class="flex flex-col md:flex-row md:items-center md:space-x-6">
                    <div class="flex items-center space-x-3">
                        <span class="text-2xl font-black text-blue-700">EduRobot</span>
                        <span
                            class="text-[11px] font-bold px-3 py-1 rounded-full bg-orange-500 text-white shadow-sm shadow-orange-200 tracking-wide whitespace-nowrap">TIẾNG
                            VIỆT 5</span>
                    </div>

                    <div class="flex items-center space-x-2 overflow-hidden">
                        <span
                            class="text-[11px] font-black uppercase tracking-widest text-gray-400 whitespace-nowrap">CHỦ
                            ĐIỂM:</span>
                        <span
                            class="text-sm font-black uppercase tracking-wider text-blue-800 truncate max-w-[180px] md:max-w-none">{theme_name}</span>
                    </div>
                </div>
            </div>
            <ul class="flex space-x-2 md:space-x-6 text-xs font-bold items-center relative">
                <!-- Home -->
                <li>
                    <a href="index.html"
                        class="flex items-center text-gray-500 hover:text-blue-600 transition-colors py-2">
                        Trang chủ
                    </a>
                </li>

                <!-- Lessons Dropdown -->
                <li class="relative group">
                    <button id="top-menu-lesson-btn"
                        class="flex items-center text-gray-500 hover:text-blue-600 transition-colors focus:outline-none py-2">
                        Bài học
                        <svg class="w-4 h-4 ml-1 transition-transform duration-200" id="top-menu-chevron" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                            </path>
                        </svg>
                    </button>
                    <!-- Dropdown Content (Hidden by default) -->
                    <div id="top-menu-lessons-dropdown"
                        class="absolute top-full right-[-100px] md:right-auto md:left-1/2 md:-translate-x-1/2 mt-4 w-[320px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 hidden max-h-[70vh] overflow-y-auto z-[60] p-2">
                        <!-- Content rendered by floating-menu.js -->
                    </div>
                </li>

                <!-- Teacher -->
                <li>
                    <button onclick="openTeacherStats()"
                        class="text-gray-500 hover:text-blue-600 transition-colors py-2">
                        Giáo viên
                    </button>
                </li>

                <!-- Contact -->
                <li>
                    <a href="#" class="text-gray-500 hover:text-blue-600 transition-colors py-2">
                        Liên hệ
                    </a>
                </li>
            </ul>
        </nav>
    </header>'''

for file_name in files:
    file_path = os.path.join(r"c:\Users\Admin\Desktop\tiengviet5", file_name)
    if not os.path.exists(file_path):
        print(f"Skipping {file_name} - not found")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract existing theme name
    theme_match = re.search(r'CHỦ\s+ĐIỂM:</span>\s*<span[^>]*>([^<]+)</span>', content, re.IGNORECASE)
    theme_name = theme_match.group(1).strip() if theme_match else "CHỦ ĐIỂM CHƯA XÁC ĐỊNH"
    
    # Replace Header
    content = re.sub(
        r'<!-- Header -->\s*<header.*?</header>',
        header_template.format(theme_name=theme_name),
        content,
        flags=re.DOTALL | re.IGNORECASE
    )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {file_name}")
