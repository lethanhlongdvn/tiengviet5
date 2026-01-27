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
    r"c:\Users\Admin\Desktop\tiengviet5\221-doan-thuyen-danh-ca.html",
    r"c:\Users\Admin\Desktop\tiengviet5\212-thu-cua-bo.html",
    r"c:\Users\Admin\Desktop\tiengviet5\211-gio-hoa-thang-nam.html",
    r"c:\Users\Admin\Desktop\tiengviet5\202-hop-qua-mau-thien-thanh.html",
    r"c:\Users\Admin\Desktop\tiengviet5\201-hat-gao-lang-ta.html",
    r"c:\Users\Admin\Desktop\tiengviet5\191-tieng-hat-nguoi-da.html",
    r"c:\Users\Admin\Desktop\tiengviet5\192-khuc-hat-ru-nhung-em-be-tren-lung-me.html"
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

tab_bar_template = r'''        <!-- Tab & Audio Header -->
        <div class="glass-card mb-4 rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch shadow-lg">
            <div class="flex-1 flex bg-white/40">
                <button onclick="switchTab('lesson')" id="btn-lesson"
                    class="tab-btn active flex-1 py-4 text-center font-black text-base text-gray-400 transition-all border-r border-gray-100/50 uppercase tracking-wider">
                    1. Đọc và tìm hiểu bài
                </button>
                <button onclick="switchTab('quiz')" id="btn-quiz"
                    class="tab-btn flex-1 py-4 text-center font-black text-base text-gray-400 transition-all uppercase tracking-wider">
                    2. Luyện tập
                </button>
            </div>

            <div id="audio-container"
                class="p-2 md:px-4 flex items-center bg-blue-50/20 border-t md:border-t-0 md:border-l border-gray-100/50">
                <div
                    class="flex items-center space-x-3 bg-white/60 backdrop-blur-md rounded-xl p-1.5 pr-4 border border-white shadow-inner">
                    <button id="audioControl" onclick="toggleAudio()"
                        class="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all shadow-md shadow-blue-200">
                        <svg id="playIcon" class="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6 4l10 6-10 6V4z"></path>
                        </svg>
                        <svg id="pauseIcon" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16H6zm8 0h4v16h-4z"></path>
                        </svg>
                    </button>
                    <div class="flex flex-col">
                        <span
                            class="text-[9px] font-black text-blue-600 uppercase tracking-widest leading-none mb-0.5 whitespace-nowrap">ĐỌC
                            MẪU</span>
                        <span id="audioStatus"
                            class="text-[10px] text-gray-400 font-bold italic leading-none whitespace-nowrap">Đang
                            dừng...</span>
                    </div>
                </div>
                <audio id="lessonAudio">
                    <source src="am_thanh/{audio_file}" type="audio/mpeg">
                </audio>
            </div>
        </div>'''

for file_path in files:
    if not os.path.exists(file_path):
        print(f"Skipping {file_path} - not found")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract existing theme name
    theme_match = re.search(r'CHỦ\s+ĐIỂM:</span>\s*<span[^>]*>([^<]+)</span>', content, re.IGNORECASE)
    theme_name = theme_match.group(1).strip() if theme_match else "CHỦ ĐIỂM CHƯA XÁC ĐỊNH"
    
    # Extract existing audio file
    audio_match = re.search(r'<source src="am_thanh/([^"]+)"', content)
    audio_file = audio_match.group(1) if audio_match else "audio.mp3"
    
    # Replace Header
    content = re.sub(
        r'<!-- Header -->\s*<header.*?</header>',
        header_template.format(theme_name=theme_name),
        content,
        flags=re.DOTALL | re.IGNORECASE
    )
    
    # Replace Tab Bar
    content = re.sub(
        r'<!-- Tab & Audio Header -->\s*<div.*?<!-- TAB 1:',
        tab_bar_template.format(audio_file=audio_file) + '\n        <!-- TAB 1:',
        content,
        flags=re.DOTALL | re.IGNORECASE
    )

    # Replace specific tab comment if it exists as old version
    content = re.sub(
        r'<!-- TAB 1: BÀI HỌC -->',
        r'<!-- TAB 1: 1. Đọc và tìm hiểu bài -->',
        content,
        flags=re.IGNORECASE
    )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {file_path}")
