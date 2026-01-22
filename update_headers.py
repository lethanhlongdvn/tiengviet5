import glob
import re
import os

files = glob.glob("*.html")
# Filter out index and templates if needed, though regex might just skip them if not matching theme or nav
target_files = []
for f in files:
    if "template" in f or f == "index.html":
        continue
    target_files.append(f)

count = 0

for filename in target_files:
    theme_name = ""
    # Simple prefix matching
    base = os.path.basename(filename)
    
    if re.match(r'^(19|20|21|22)', base):
        theme_name = "VẺ ĐẸP CUỘC SỐNG"
    elif re.match(r'^(23|24|25|26)', base):
        theme_name = "HƯƠNG SẮC TRĂM MIỀN"
    elif re.match(r'^(28|29|30)', base):
        theme_name = "TIẾP BƯỚC CHA ÔNG"
    elif re.match(r'^(31|32|33|34)', base):
        theme_name = "THẾ GIỚI CỦA CHÚNG TA"
    
    if theme_name:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_nav = f'''        <nav class="container mx-auto glass-card rounded-xl px-5 py-2 flex justify-between items-center shadow-lg">
            <div class="flex items-center space-x-4">
                <div class="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 shrink-0">
                    <span class="text-xl font-black">E</span>
                </div>
                <div class="flex flex-col md:flex-row md:items-center md:space-x-6">
                    <div class="flex items-center space-x-3">
                        <span class="text-2xl font-black text-blue-700">EduRobot</span>
                        <span class="text-[11px] font-bold px-3 py-1 rounded-full bg-orange-500 text-white shadow-sm shadow-orange-200 tracking-wide whitespace-nowrap">TIẾNG VIỆT 5</span>
                    </div>
                
                    <div class="flex items-center space-x-2 overflow-hidden">
                        <span class="text-[11px] font-black uppercase tracking-widest text-gray-400 whitespace-nowrap">CHỦ ĐIỂM:</span>
                        <span class="text-sm font-black uppercase tracking-wider text-blue-800 truncate max-w-[180px] md:max-w-none">{theme_name}</span>
                    </div>
                </div>
            </div>
            <ul class="flex space-x-2 md:space-x-6 text-xs font-bold items-center relative">
                <!-- Home -->
                <li>
                    <a href="index.html" class="flex items-center text-gray-500 hover:text-blue-600 transition-colors py-2">
                        Trang chủ
                    </a>
                </li>
                
                <!-- Lessons Dropdown -->
                <li class="relative group">
                    <button id="top-menu-lesson-btn" class="flex items-center text-gray-500 hover:text-blue-600 transition-colors focus:outline-none py-2">
                        Bài học
                        <svg class="w-4 h-4 ml-1 transition-transform duration-200" id="top-menu-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <!-- Dropdown Content (Hidden by default) -->
                     <div id="top-menu-lessons-dropdown" class="absolute top-full right-[-100px] md:right-auto md:left-1/2 md:-translate-x-1/2 mt-4 w-[320px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 hidden max-h-[70vh] overflow-y-auto z-[60] p-2">
                        <!-- Content rendered by floating-menu.js -->
                    </div>
                </li>

                <!-- Teacher -->
                <li>
                    <button onclick="openTeacherStats()" class="text-gray-500 hover:text-blue-600 transition-colors py-2">
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
        </nav>'''
        
        # Regex replacement
        # Note: We need to match precisely. The old nav has <nav class="container mx-auto glass-card...
        # and ends with </nav>.
        # We use re.DOTALL to match newlines.
        
        pattern = r'<nav class="container mx-auto glass-card.*?</nav>'
        
        if re.search(pattern, content, re.DOTALL):
            new_content = re.sub(pattern, new_nav, content, flags=re.DOTALL)
            
            # Additional cleanup: Remove floating back button if present
            back_btn_pattern = r'<a href="[^"]+"[^>]*class="fixed bottom-8.*?</a>'
            if re.search(back_btn_pattern, new_content, re.DOTALL):
                new_content = re.sub(back_btn_pattern, '', new_content, flags=re.DOTALL)
                print(f"Removed back button from {filename}")
            
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
            count += 1
        else:
            print(f"Skipped {filename} (Pattern not found)")
    else:
        print(f"Skipped {filename} (No matching theme)")

print(f"Total files updated: {count}")
