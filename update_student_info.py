import os
import re

# The new student registration block to inject
NEW_STUDENT_INFO = """        <!-- Student Info -->
        <div class="mb-8 bg-white border-2 border-blue-100 rounded-3xl p-6 shadow-sm flex flex-col items-center gap-4">
            <div class="flex items-center space-x-4 w-full">
                <div class="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <span>👤</span>
                </div>
                <div class="flex-1">
                    <label class="block text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Họ tên của em</label>
                    <input type="text" id="studentName" placeholder="Nhập tên em..." class="w-full text-lg font-black text-gray-800 bg-transparent border-none focus:outline-none focus:ring-0 p-0">
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div class="flex items-center space-x-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 focus-within:border-blue-300 transition-all">
                    <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest px-2">Lớp:</label>
                    <select id="studentClass" class="flex-1 bg-transparent border-none focus:outline-none font-black text-gray-700 text-sm cursor-pointer">
                        <option value="">Chọn Lớp</option>
                        <option value="5/1">5/1</option>
                        <option value="5/2">5/2</option>
                        <option value="5/3">5/3</option>
                        <option value="5/4">5/4</option>
                        <option value="5/5">5/5</option>
                    </select>
                </div>

                <div class="flex items-center space-x-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 focus-within:border-blue-300 transition-all">
                    <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest px-2">Trường:</label>
                    <select id="schoolSelect" onchange="checkSchool()" class="flex-1 bg-transparent border-none focus:outline-none font-black text-gray-700 text-sm cursor-pointer">
                        <option value="Tiểu học Đỗ Văn Nại">Tiểu học Đỗ Văn Nại</option>
                        <option value="Khác">Trường khác...</option>
                    </select>
                </div>
            </div>

            <input type="text" id="otherSchool" placeholder="Nhập tên trường của em..." class="hidden w-full p-4 rounded-2xl bg-orange-50 border-2 border-orange-100 focus:border-orange-300 focus:outline-none font-black text-sm transition-all">
        </div>"""

# Registration block for quiz (used in some files)
NEW_QUIZ_REGISTRATION = """                <!-- Registration -->
                <div id="quiz-registration" class="p-8 md:p-12 flex flex-col items-center justify-center flex-grow text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-200 transform -rotate-3">
                        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                    </div>
                    <h2 class="text-3xl font-black text-gray-800 mb-3 tracking-tight">Đăng ký luyện tập</h2>
                    <p class="text-gray-500 mb-10 max-w-sm font-bold">Hãy điền thông tin để bắt đầu thử thách kiến thức nhé!</p>

                    <form onsubmit="startQuiz(event)" class="w-full max-w-sm space-y-5">
                        <div class="relative group">
                            <input type="text" id="studentName" required placeholder="Họ và tên của em" class="w-full px-6 py-4 rounded-2xl bg-white/50 border-2 border-transparent focus:border-blue-500 focus:bg-white focus:outline-none transition-all font-bold placeholder:text-gray-300 shadow-sm">
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <select id="studentClass" required class="px-6 py-4 rounded-2xl bg-white/50 border-2 border-transparent focus:border-blue-500 focus:bg-white focus:outline-none transition-all font-bold text-gray-700 shadow-sm appearance-none">
                                <option value="">Chọn Lớp</option>
                                <option value="5/1">5/1</option>
                                <option value="5/2">5/2</option>
                                <option value="5/3">5/3</option>
                                <option value="5/4">5/4</option>
                                <option value="5/5">5/5</option>
                            </select>

                            <select id="schoolSelect" required onchange="checkSchool()" class="px-6 py-4 rounded-2xl bg-white/50 border-2 border-transparent focus:border-blue-500 focus:bg-white focus:outline-none transition-all font-bold text-gray-700 shadow-sm appearance-none">
                                <option value="Tiểu học Đỗ Văn Nại">TH Đỗ Văn Nại</option>
                                <option value="Khác">Trường khác...</option>
                            </select>
                        </div>

                        <input type="text" id="otherSchool" placeholder="Tên trường của em" class="hidden w-full px-6 py-4 rounded-2xl bg-white/50 border-2 border-transparent focus:border-blue-500 focus:bg-white transition-all font-bold shadow-sm">

                        <button type="submit" class="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-200 transition-all active:scale-95 text-lg uppercase tracking-wider">
                            Bắt đầu ngay
                        </button>
                    </form>
                </div>"""

def update_file(filepath):
    content = None
    encodings = ['utf-8', 'latin-1', 'utf-16']
    
    for enc in encodings:
        try:
            with open(filepath, 'r', encoding=enc) as f:
                content = f.read()
            break
        except UnicodeDecodeError:
            continue
            
    if content is None:
        print(f"Skipping {filepath}: Could not decode with any encoding.")
        return

    # 1. Update general registration bar (if exists)
    # Match various versions of student registration bar
    content = re.sub(r'<!-- Student Registration Bar -->.*?</div>(?=\s*<!-- Header -->)', NEW_STUDENT_INFO, content, flags=re.DOTALL)
    content = re.sub(r'<!-- Student Info -->.*?</div>(?=\s*<!-- Title -->)', NEW_STUDENT_INFO, content, flags=re.DOTALL)
    content = re.sub(r'<!-- Student Info -->.*?</div>(?=\s*<!-- Header -->)', NEW_STUDENT_INFO, content, flags=re.DOTALL)

    # 2. Update quiz registration (if exists)
    content = re.sub(r'<!-- Registration -->.*?</div>(?=\s*<!-- Quiz Engine)', NEW_QUIZ_REGISTRATION, content, flags=re.DOTALL)

    # 3. Fix onclick="submitEssay()" to onclick="submitEssay(event)"
    content = content.replace('onclick="submitEssay()"', 'onclick="submitEssay(event)"')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    root = "."
    for filename in os.listdir(root):
        if filename.endswith(".html") and filename not in ["index.html", "index1.html", "teacher-dashboard.html", "hieuungphaohoa.html"]:
            print(f"Updating {filename}...")
            update_file(os.path.join(root, filename))

if __name__ == "__main__":
    main()
