import os
import re

# Logic to synchronize design across all lesson pages
# 1. Update CSS variables
# 2. Update/Insert Header (preserving specific text)
# 3. Update/Insert Footer
# 4. Remove old buttons and ensure floating-menu.js

DIR_PATH = r"C:\Users\Admin\Desktop\tiengviet5"

NEW_CSS_VARS = """        :root {
            --primary: #2563eb;
            --primary-light: #eff6ff;
            --accent: #f59e0b;
            --glass: rgba(255, 255, 255, 0.75);
            --glass-border: rgba(255, 255, 255, 0.5);
        }
"""

NEW_BOX_SHADOW = """        .glass-card {
            background: var(--glass);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid var(--glass-border);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        }"""

# Template for the new header. We will format it with the specific Theme Name.
HEADER_TEMPLATE = """    <!-- Header -->
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
                <li><a href="index.html"
                        class="flex items-center text-gray-500 hover:text-blue-600 transition-colors py-2">Trang chủ</a>
                </li>
                <li class="relative group">
                    <button id="top-menu-lesson-btn"
                        class="flex items-center text-gray-500 hover:text-blue-600 transition-colors py-2">
                        Bài học
                        <svg class="w-4 h-4 ml-1 transition-transform duration-200" id="top-menu-chevron" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                            </path>
                        </svg>
                    </button>
                    <div id="top-menu-lessons-dropdown"
                        class="absolute top-full right-[-100px] md:right-auto md:left-1/2 md:-translate-x-1/2 mt-4 w-[320px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 hidden max-h-[70vh] overflow-y-auto z-[60] p-2">
                    </div>
                </li>
                <li><button onclick="openTeacherStats()"
                        class="text-gray-500 hover:text-blue-600 transition-colors py-2">Giáo viên</button></li>
                <li><a href="#" class="text-gray-500 hover:text-blue-600 transition-colors py-2">Liên hệ</a></li>
            </ul>
        </nav>
    </header>"""

NEW_FOOTER = """    <footer class="py-5 px-4 mt-12 bg-white/30 backdrop-blur-md border-t border-white/50">
        <div class="container mx-auto text-center">
            <p class="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">@ 2026 EduRobot - Hệ thống học
                tập thông minh</p>
            <p class="text-xs font-bold text-blue-600 mt-2">Phát triển bởi Lê Thành Long</p>
        </div>
    </footer>"""

SCRIPT_TAG = '    <script src="js/floating-menu.js"></script>'

def get_theme_name(content, filename):
    # Try to extract existing theme name
    match = re.search(r'CHỦ\s+ĐIỂM:.*?<span.*?>(.*?)</span>', content, re.DOTALL | re.IGNORECASE)
    if match:
        return match.group(1).strip()
    
    # Fallback based on filename ranges (approximate)
    num_part = re.match(r'^(\d+)', filename)
    if num_part:
        num = int(num_part.group(1))
        # Logic from floating-menu.js roughly
        if 191 <= num <= 222: return "VẺ ĐẸP CUỘC SỐNG"
        if 231 <= num <= 262: return "HƯƠNG SẮC TRĂM MIỀN"
        if 281 <= num <= 312: return "TIẾP BƯỚC CHA ÔNG"
        if 321 <= num <= 342: return "THẾ GIỚI CỦA CHÚNG TA"
    
    return "TIẾNG VIỆT 5"

def process_file(filepath):
    filename = os.path.basename(filepath)
    print(f"Processing {filename}...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # 1. Update CSS
    if "--glass:" not in content:
        # Inject :root vars
        content = re.sub(r'<style>\s*:root\s*{[^}]*}', '<style>\n' + NEW_CSS_VARS.strip(), content)
        if ":root" not in content: # If regex failed or didn't exist
             content = content.replace('<style>', '<style>\n' + NEW_CSS_VARS)
    
    if ".glass-card" not in content:
         content = content.replace('</style>', NEW_BOX_SHADOW + '\n    </style>')

    # 2. Update Header
    # Check if it has the old header or needs update
    # We'll just replace the whole <header>...</header> block if we find one
    theme_name = get_theme_name(content, filename)
    new_header = HEADER_TEMPLATE.replace("{theme_name}", theme_name)
    
    # robust regex for header replacement
    header_pattern = re.compile(r'<header.*?>.*?</header>', re.DOTALL)
    if header_pattern.search(content):
        # Only replace if it doesn't look like the new one (simple check: glass-card in nav)
        if 'glass-card' not in header_pattern.search(content).group(0):
             content = header_pattern.sub(new_header, content)
        # Actually, even if it has glass-card, we might want to ensure it has the dropdown container
        elif 'top-menu-lessons-dropdown' not in header_pattern.search(content).group(0):
             content = header_pattern.sub(new_header, content)
    else:
        # Insert header after body open
        content = re.sub(r'<body.*?>', lambda m: m.group(0) + '\n' + new_header, content)

    # 3. Update Footer
    footer_pattern = re.compile(r'<footer.*?>.*?</footer>', re.DOTALL)
    if footer_pattern.search(content):
        # Replace existing footer
        content = footer_pattern.sub(NEW_FOOTER, content)
    else:
        # Append footer before closing body or before scripts
        # Try finding the script tag to insert before
        script_pattern = re.compile(r'<script src="js/floating-menu.js"></script>')
        if script_pattern.search(content):
             content = script_pattern.sub(NEW_FOOTER + '\n\n' + SCRIPT_TAG, content)
        else:
             content = content.replace('</body>', NEW_FOOTER + '\n</body>')

    # 4. Floating Menu & Cleanup
    # Remove old "Trở về" text link/button if it exists (specific old pattern)
    content = re.sub(r'<div class="fixed bottom-4 right-4.*?</div>', '', content, flags=re.DOTALL)
    
    # Ensure floating-menu.js is present
    if 'js/floating-menu.js' not in content:
        content = content.replace('</body>', SCRIPT_TAG + '\n</body>')

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filename}")
    else:
        print(f"No changes needed for {filename}")

def main():
    files = [f for f in os.listdir(DIR_PATH) if re.match(r'^\d+.*\.html$', f)]
    for f in files:
        process_file(os.path.join(DIR_PATH, f))

if __name__ == "__main__":
    main()
