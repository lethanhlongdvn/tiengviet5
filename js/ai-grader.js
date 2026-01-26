async function askAI(id, prefix = "", mode = "single") {
    const feedback = document.getElementById('fb-' + id);
    let userInput = "";

    if (mode === "table") {
        const q1 = document.getElementById(`ai-${id}-q1`).value.trim();
        const q2 = document.getElementById(`ai-${id}-q2`).value.trim();
        const q3 = document.getElementById(`ai-${id}-q3`).value.trim();

        if (!q1 && !q2 && !q3) {
            alert("Em hãy điền thông tin vào bảng trước nhé!");
            return;
        }
        userInput = `1. Nhân vật: ${q1}\n2. Từ ngữ nổi bật: ${q2}\n3. Chi tiết ấn tượng: ${q3}`;
    } else {
        const input = document.getElementById('ai-' + id);
        userInput = input.value.trim();
        if (!userInput) {
            alert("Em hãy viết câu trước nhé!");
            return;
        }
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
            <span class="font-bold text-purple-800">🤖 EduRobot đang chấm bài với trí tuệ Groq...</span>
        </div>
    `;

    try {
        const response = await fetch('/.netlify/functions/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sentence })
        });

        if (!response.ok) {
            let errorMsg = `Lỗi ${response.status}`;
            try {
                const errorData = await response.json();
                errorMsg = errorData.error || errorMsg;
            } catch (e) { }
            throw new Error(errorMsg);
        }

        const data = await response.json();
        renderFeedback(feedback, data);

        const gradeStr = String(data.diem || "");
        const gradeNum = parseFloat(data.diem) || data.grade || 0;

        if (typeof celebrate === 'function' && (gradeNum >= 8 || gradeStr.includes('8') || gradeStr.includes('9') || gradeStr.includes('10'))) {
            celebrate();
        }
    } catch (error) {
        console.error('AI Grading Error:', error);
        feedback.innerHTML = `
            <div class="p-5 bg-red-50 text-red-700 rounded-2xl border-2 border-red-100 shadow-sm">
                <div class="flex items-center mb-3">
                    <span class="text-2xl mr-3">⚠️</span>
                    <h5 class="font-black uppercase text-[10px] tracking-widest">EduRobot gặp sự cố</h5>
                </div>
                <p class="text-sm font-bold leading-relaxed mb-3">Chi tiết: "${error.message}"</p>
                <div class="p-3 bg-white/50 rounded-xl text-[11px] leading-relaxed italic">
                    <b>💡 Gợi ý cho bạn:</b> Nếu bạn vừa thay đổi khóa trên Netlify, hãy vào mục <b>Deploys</b> và nhấn <b>Trigger deploy > Deploy site</b> để hệ thống cập nhật mã mới nhé!
                </div>
            </div>
        `;
    }
}

function renderFeedback(container, data) {
    let html = `
        <div class="space-y-4 animate-in fade-in duration-500">
            <!-- Lời nhắn yêu thương từ Cô giáo -->
            <div class="p-6 bg-gradient-to-br from-blue-50 to-white rounded-[32px] border-2 border-blue-100 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 p-2 opacity-5">
                    <span class="text-6xl">👩‍🏫</span>
                </div>
                <h5 class="font-black text-blue-700 uppercase text-[10px] mb-2 tracking-widest flex items-center">
                    <span class="mr-2">💌</span> Lời nhắn từ Cô giáo
                </h5>
                <p class="serif-font text-lg text-gray-800 italic font-bold leading-relaxed relative z-10">"${data.loi_nhan || "Cô rất khen ngợi tinh thần học tập của em!"}"</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Ưu điểm -->
                <div class="p-5 bg-green-50 rounded-2xl border border-green-100">
                    <h5 class="font-black text-green-700 uppercase text-[10px] mb-3 tracking-widest flex items-center">
                        <span class="mr-2 text-base">✨</span> Điểm sáng trong bài
                    </h5>
                    <p class="text-sm text-gray-700 font-bold leading-relaxed">${data.uu_diem || "Bài làm có nhiều hình ảnh sinh động."}</p>
                </div>

                <!-- Lỗi sai -->
                <div class="p-5 bg-orange-50 rounded-2xl border border-orange-100">
                    <h5 class="font-black text-orange-700 uppercase text-[10px] mb-3 tracking-widest flex items-center">
                        <span class="mr-2 text-base">🔧</span> Gợi ý hoàn thiện
                    </h5>
                    <p class="text-sm text-gray-700 font-bold leading-relaxed">${data.loi_sai || "Bài viết của em đã khá hoàn chỉnh rồi."}</p>
                </div>
            </div>

            <!-- Hướng dẫn chi tiết -->
            <div class="p-5 bg-purple-50 rounded-2xl border border-purple-100">
                <h5 class="font-black text-purple-700 uppercase text-[10px] mb-3 tracking-widest">💡 Cô hướng dẫn em viết hay hơn</h5>
                <p class="text-sm text-gray-700 font-bold italic leading-relaxed">"${data.huong_dan || "Em có thể thêm một vài hình ảnh so sánh để bài viết sinh động hơn nhé."}"</p>
            </div>

            <!-- Điểm số -->
            <div class="flex justify-end pt-2">
                <div class="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-xl shadow-blue-100 flex items-center space-x-4">
                    <span class="text-xs font-black uppercase tracking-widest opacity-80">Điểm số của em:</span>
                    <span class="text-3xl font-black">${data.diem || "8/10"}</span>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
}
