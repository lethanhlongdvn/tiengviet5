async function askAI(id, prefix = "") {
    const input = document.getElementById('ai-' + id);
    const feedback = document.getElementById('fb-' + id);
    const userInput = input.value.trim();

    if (!userInput) {
        alert("Em hãy viết câu trước nhé!");
        return;
    }

    const sentence = (prefix + " " + userInput).trim();

    // UI: Loading state
    feedback.classList.remove('hidden');
    feedback.innerHTML = `
        <div class="flex items-center space-x-2 p-4 bg-purple-50 rounded-xl border border-purple-200">
            <svg class="animate-spin h-5 w-5 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="font-bold text-purple-800">🤖 EduRobot đang chấm bài với trí tuệ Gemini...</span>
        </div>
    `;

    try {
        const response = await fetch('/.netlify/functions/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sentence })
        });

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        renderFeedback(feedback, data);

        if (typeof celebrate === 'function' && data.grade >= 8) {
            celebrate();
        }
    } catch (error) {
        console.error('AI Grading Error:', error);
        feedback.innerHTML = `
            <div class="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 font-bold">
                🤖 <b>Lỗi:</b> EduRobot gặp sự cố khi kết nối bộ não. Em hãy thử lại sau nhé!
            </div>
        `;
    }
}

function renderFeedback(container, data) {
    let html = `
        <div class="space-y-4 animate-in fade-in duration-500">
            <!-- Lời nhận xét chung -->
            <div class="p-5 bg-gradient-to-br from-purple-50 to-white rounded-2xl border-2 border-purple-100 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 p-2 opacity-10">
                    <svg class="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.45l8.28 14.1H3.72L12 5.45zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"/></svg>
                </div>
                <p class="serif-font text-lg text-gray-800 italic leading-relaxed relative z-10">"${data.feedback}"</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Ưu điểm & Điểm sáng -->
                <div class="p-4 bg-green-50 rounded-2xl border border-green-100">
                    <h5 class="font-black text-green-700 uppercase text-xs mb-3 flex items-center">
                        <span class="mr-2 text-base">✨</span> Ưu điểm & Điểm sáng
                    </h5>
                    <p class="text-sm text-gray-700 font-medium">${data.uu_diem || "Chưa có nhận xét cụ thể."}</p>
                </div>

                <!-- Lỗi cần sửa -->
                <div class="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                    <h5 class="font-black text-orange-700 uppercase text-xs mb-3 flex items-center">
                        <span class="mr-2 text-base">🔧</span> Gợi ý hoàn thiện
                    </h5>
                    <p class="text-sm text-gray-700 font-medium">${data.loi_can_sua || "Rất tuyệt! Không có lỗi gì đáng kể."}</p>
                </div>
            </div>

            <!-- Phân tích cú pháp (CN-VN) -->
            <div class="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <h5 class="font-black text-blue-700 uppercase text-xs mb-3">Phân tích cấu trúc câu</h5>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
    `;

    if (data.clauses && Array.isArray(data.clauses)) {
        data.clauses.forEach((clause, index) => {
            html += `
                <div class="p-3 bg-white/60 rounded-xl border border-blue-50">
                    <div class="font-black text-blue-600 text-[10px] uppercase mb-1">Vế ${index + 1}</div>
                    <div class="text-xs space-y-1">
                        <div><span class="font-bold text-gray-400 uppercase text-[9px]">Chủ ngữ:</span> ${clause.subject}</div>
                        <div><span class="font-bold text-gray-400 uppercase text-[9px]">Vị ngữ:</span> ${clause.predicate}</div>
                    </div>
                </div>
            `;
        });
    }

    html += `
                </div>
            </div>

            <!-- Phụ lục điểm số -->
            <div class="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-200">
                <div class="flex flex-col">
                    <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Kiểu câu</span>
                    <span class="text-xs font-black text-gray-600">${data.relationship || "Câu văn tự do"}</span>
                </div>
                <div class="flex items-center space-x-3">
                    <div class="text-right">
                        <span class="text-[9px] font-black text-gray-400 uppercase block leading-none mb-1">Điểm EduRobot</span>
                        <span class="text-2xl font-black text-purple-600">${data.grade}/10</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
}
