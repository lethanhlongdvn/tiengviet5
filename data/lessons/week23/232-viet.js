window.LESSON_DATA = window.LESSON_DATA || { lessons: {} };
window.LESSON_DATA.lessons["232-viet"] = {
    "title": "Viết: Luyện tập viết đoạn văn thể hiện tình cảm, cảm xúc về một sự việc",
    "week": 23,
    "subject": "Viết",
    "theme": "Hương sắc trăm miền",
    "tabs": {
        "lesson": {
            "title": "Bài học",
            "blocks": [
                { "type": "header", "text": "Luyện tập viết đoạn văn thể hiện tình cảm, cảm xúc về một sự việc" },
                {
                    "type": "html",
                    "id": "block-232-v1",
                    "content": `<div class="space-y-8 animate-in fade-in duration-700">
                        <!-- 1. CHUẨN BỊ -->
                        <section class="w-full">
                            <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl relative overflow-hidden ring-1 ring-blue-100">
                                <div class="flex items-center space-x-4 mb-8">
                                    <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg text-white">
                                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                    </div>
                                    <h2 class="text-3xl font-black text-gray-800 uppercase tracking-tight">I. Chuẩn bị</h2>
                                </div>

                                <div class="mb-10">
                                    <h3 class="text-lg font-bold text-blue-700 mb-4 italic leading-relaxed">
                                        Đề bài: Viết đoạn văn thể hiện tình cảm, cảm xúc về một sự việc đã mang lại niềm vui cho em và người thân.
                                    </h3>
                                    
                                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        <div class="p-6 bg-blue-50 rounded-2xl border-2 border-blue-100 shadow-sm flex flex-col items-center text-center">
                                            <div class="text-3xl mb-3">🏠</div>
                                            <p class="font-bold text-blue-900">Sự việc gia đình</p>
                                            <p class="text-sm text-gray-500">Bữa cơm sum họp, cùng dọn dẹp nhà cửa...</p>
                                        </div>
                                        <div class="p-6 bg-green-50 rounded-2xl border-2 border-green-100 shadow-sm flex flex-col items-center text-center">
                                            <div class="text-3xl mb-3">🎁</div>
                                            <p class="font-bold text-green-900">Sự việc bất ngờ</p>
                                            <p class="text-sm text-gray-500">Được tặng quà, đạt điểm tốt...</p>
                                        </div>
                                        <div class="p-6 bg-amber-50 rounded-2xl border-2 border-amber-100 shadow-sm flex flex-col items-center text-center">
                                            <div class="text-3xl mb-3">🌱</div>
                                            <p class="font-bold text-amber-900">Gợi ý khác</p>
                                            <p class="text-sm text-gray-500">Giúp đỡ người khác, trồng cây cùng bố...</p>
                                        </div>
                                    </div>

                                    <div class="bg-white rounded-3xl p-6 border-2 border-dashed border-blue-200">
                                        <p class="font-bold text-blue-800 mb-4">Em hãy lập dàn ý nhanh cho đoạn văn của mình:</p>
                                        <div class="space-y-4">
                                            <div class="flex flex-col md:flex-row gap-4">
                                                <span class="w-full md:w-40 font-black text-xs uppercase text-blue-500 pt-3">Mở đầu:</span>
                                                <input type="text" id="v232-v-md" class="flex-1 p-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white outline-none focus:border-blue-400" placeholder="Tên sự việc, hoàn cảnh xảy ra...">
                                            </div>
                                            <div class="flex flex-col md:flex-row gap-4">
                                                <span class="w-full md:w-40 font-black text-xs uppercase text-blue-500 pt-3">Triển khai:</span>
                                                <textarea id="v232-v-tk" rows="2" class="flex-1 p-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white outline-none focus:border-blue-400" placeholder="Các chi tiết nổi bật khiến em vui sướng, hạnh phúc..."></textarea>
                                            </div>
                                            <div class="flex flex-col md:flex-row gap-4">
                                                <span class="w-full md:w-40 font-black text-xs uppercase text-blue-500 pt-3">Kết thúc:</span>
                                                <input type="text" id="v232-v-kt" class="flex-1 p-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white outline-none focus:border-blue-400" placeholder="Ý nghĩa sự việc và tình cảm dành cho người thân."></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- II. THỰC HÀNH VIẾT -->
                        <section class="w-full pb-8">
                            <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl border-t-8 border-indigo-500 bg-indigo-50/20">
                                <div class="flex items-center space-x-4 mb-8">
                                    <div class="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg text-white">
                                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </div>
                                    <h2 class="text-3xl font-black text-gray-800 uppercase tracking-tight">II. Thực hành viết</h2>
                                </div>

                                <div class="bg-white rounded-3xl p-8 shadow-xl border border-indigo-100 relative overflow-hidden" id="block-232-viet-final">
                                    <div class="absolute right-0 top-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
                                    <p class="text-xl font-bold text-gray-800 mb-6 relative z-10">Dựa trên dàn ý đã lập, em hãy viết đoạn văn hoàn chỉnh:</p>
                                    
                                    <textarea id="ai-v232-viet" rows="8" class="w-full p-8 serif-font text-2xl rounded-2xl border-2 border-indigo-50 focus:border-indigo-400 outline-none bg-indigo-50/10 shadow-inner mb-6 transition-all duration-300" placeholder="Viết đoạn văn của em vào đây..."></textarea>
                                    
                                    <div class="flex flex-wrap gap-4 items-center">
                                        <button onclick="checkParagraphV232AI()" class="px-10 py-4 bg-indigo-600 text-white font-black text-xl rounded-2xl shadow-lg hover:bg-indigo-700 active:scale-95 transition-all flex items-center gap-3">
                                            <span>🤖 THẦY CHẤM BÀI</span>
                                        </button>
                                        <button onclick="resetLTVC('ai-v232-viet'); document.getElementById('fb-v232-viet').classList.add('hidden');" class="px-6 py-4 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all">VIẾT LẠI</button>
                                        
                                        <button onclick="submitV232Viet()" class="px-8 py-4 bg-gray-800 text-white font-black rounded-2xl shadow-lg hover:bg-black transition-all ml-auto">🚀 NỘP BÀI</button>
                                    </div>
                                    
                                    <div id="fb-v232-viet" class="hidden mt-8 p-8 bg-indigo-900 text-white rounded-[28px] shadow-2xl animate-in slide-in-from-top-10 duration-500">
                                        <!-- AI result -->
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>`
                }
            ]
        },
        "quiz": {
            "settings": { "pick": 5 },
            "questions": [
                { "q": "Khi viết đoạn văn thể hiện tình cảm, cảm xúc, em nên dùng ngôi kể nào?", "a": ["Ngôi thứ nhất (tôi, em)", "Ngôi thứ ba (gọi tên)", "Không cần xưng hô", "Ngôi thứ hai (bạn)"], "c": 0 },
                { "q": "Từ ngữ nào dưới đây chỉ tình cảm, cảm xúc?", "a": ["Vui sướng", "Đi lại", "Học tập", "Cái bàn"], "c": 0 },
                { "q": "Phần mở đầu của đoạn văn biểu cảm cần giới thiệu điều gì?", "a": ["Sự việc và ấn tượng chung", "Kết quả của sự việc", "Tất cả các nhân vật", "Lịch sử vùng đất"], "c": 0 },
                { "q": "Nên kết hợp các biện pháp tu từ nào để đoạn văn thêm sinh động?", "a": ["So sánh, nhân hóa", "Con số thống kê", "Thuật ngữ khoa học", "Câu hỏi tu từ"], "c": 0 },
                { "q": "Phần kết thúc đoạn văn thường dùng để làm gì?", "a": ["Khẳng định tình cảm và nêu ý nghĩa", "Bắt đầu kể một sự việc mới", "Tả lại ngoại hình", "Cảm ơn người đọc"], "c": 0 }
            ]
        }
    }
};

// --- Logic functions for 232 Viet ---
window.checkParagraphV232AI = async function () {
    const input = document.getElementById('ai-v232-viet');
    if (!input || !input.value.trim()) { alert("Em hãy viết đoạn văn trước nhé!"); return; }
    const fb = document.getElementById('fb-v232-viet');
    fb.classList.remove('hidden');
    fb.innerHTML = `<div class="flex items-center gap-4"><div class="animate-spin rounded-full h-8 w-8 border-4 border-white border-t-transparent"></div><p class="text-xl font-bold italic">Thầy đang đọc bài văn của em...</p></div>`;

    if (typeof askAI === 'function') {
        const prompt = `Em hãy nhận xét đoạn văn biểu cảm của học sinh. 
        Đề bài: Viết đoạn văn thể hiện tình cảm, cảm xúc về một sự việc mang lại niềm vui.
        Yêu cầu nhận xét:
        1. Cấu trúc (Mở - Triển khai - Kết): Đã đủ 3 phần chưa?
        2. Nội dung: Có tập trung vào NIỀM VUI không? Cảm xúc có chân thực không?
        3. Cách dùng từ: Có các từ ngữ gợi tả cảm xúc không?
        4. Góp ý sửa lỗi và khen ngợi.
        
        Bài của học sinh: ${input.value}`;
        await askAI('v232-viet-final', prompt, 'single', 'writing', 232);
    } else {
        fb.innerHTML = "Lỗi: Hệ thống chấm điểm AI chưa sẵn sàng.";
    }
};

window.submitV232Viet = function () {
    if (typeof submitLTVCUnified === 'function') {
        submitLTVCUnified('232-viet');
    } else {
        alert("Hệ thống nộp bài đang bận!");
    }
};
