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
    const isComplete = data.status === "complete";
    const missingParts = data.missing_parts || [];
    const wordCount = data.word_count || 0;

    let html = `
        <div class="space-y-4 animate-in fade-in duration-500">
            <!-- Summary Header -->
            <div class="p-6 ${isComplete ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'} rounded-[32px] border-2 shadow-sm relative overflow-hidden">
                <div class="flex justify-between items-start">
                    <div>
                        <h5 class="font-black ${isComplete ? 'text-green-700' : 'text-orange-700'} uppercase text-[10px] mb-2 tracking-widest flex items-center">
                            <span class="mr-2">${isComplete ? '✅' : '⚠️'}</span> Trạng thái bài làm
                        </h5>
                        <p class="text-xl font-black ${isComplete ? 'text-green-900' : 'text-orange-900'}">
                            ${isComplete ? 'Chúc mừng! Bài làm đã đạt yêu cầu.' : 'Bài làm cần hoàn thiện thêm.'}
                        </p>
                        <p class="text-sm font-bold opacity-70 mt-1">Độ dài: ${wordCount} từ (Yêu cầu: >100 từ)</p>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] font-black uppercase opacity-40 block mb-1">Điểm AI tạm tính</span>
                        <span class="text-4xl font-black ${isComplete ? 'text-green-600' : 'text-orange-600'}">${data.diem || "?/10"}</span>
                    </div>
                </div>
                ${!isComplete && missingParts.length > 0 ? `
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="text-xs font-bold text-orange-800">Cần bổ sung:</span>
                        ${missingParts.map(p => `<span class="px-3 py-1 bg-white/50 rounded-full text-[10px] font-black text-orange-600 border border-orange-200">${p}</span>`).join('')}
                    </div>
                ` : ''}
            </div>

            <!-- Detailed Analysis parts -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                ${['mo_bai', 'than_bai', 'ket_bai'].map(part => {
        const partLabel = part === 'mo_bai' ? 'Mở bài' : part === 'than_bai' ? 'Thân bài' : 'Kết bài';
        const partContent = data.analysis ? data.analysis[part] : null;
        const isMissing = missingParts.includes(partLabel);
        return `
                        <div class="p-4 rounded-2xl border ${isMissing ? 'bg-gray-50 border-gray-100 opacity-50' : 'bg-white border-blue-100 shadow-sm'}">
                            <h6 class="text-[10px] font-black ${isMissing ? 'text-gray-400' : 'text-blue-500'} uppercase tracking-widest mb-2">${partLabel}</h6>
                            <p class="text-xs font-bold leading-relaxed text-gray-600">
                                ${isMissing ? '<i>Chưa có nội dung...</i>' : partContent || 'Đã ghi nhận.'}
                            </p>
                        </div>
                    `;
    }).join('')}
            </div>

            <!-- Feedback Sections -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
                    <h5 class="font-black text-blue-700 uppercase text-[10px] mb-3 tracking-widest">✨ Điểm sáng</h5>
                    <p class="text-sm text-gray-700 font-bold leading-relaxed">${data.uu_diem || "Bài làm có cố gắng."}</p>
                </div>
                <div class="p-5 bg-amber-50/50 rounded-2xl border border-amber-100">
                    <h5 class="font-black text-amber-700 uppercase text-[10px] mb-3 tracking-widest">🔧 Cần cải thiện</h5>
                    <p class="text-sm text-gray-700 font-bold leading-relaxed">${data.loi_sai || "Chú ý diễn đạt mạch lạc hơn."}</p>
                </div>
            </div>

            <!-- Teacher Note & Action -->
            <div class="p-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[32px] text-white shadow-xl relative overflow-hidden">
                <div class="relative z-10">
                    <h5 class="font-black uppercase text-[10px] mb-3 tracking-widest opacity-80">💡 Hướng dẫn từ Thầy/Cô</h5>
                    <p class="serif-font text-lg italic font-bold leading-relaxed mb-6">"${data.huong_dan || data.loi_nhan || "Cố gắng lên em nhé!"}"</p>
                    
                    ${!isComplete ? `
                        <button onclick="continueWriting('${data.huong_dan || ''}')" 
                                class="w-full bg-white text-blue-700 font-black py-4 rounded-2xl shadow-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-3">
                            <span>✍️</span> TIẾP TỤC LÀM BÀI
                        </button>
                    ` : `
                        <div class="flex items-center gap-3 text-green-300 font-black uppercase text-xs">
                            <span class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">✓</span>
                            Bài làm đã hoàn thành, em có thể nộp bài ngay!
                        </div>
                    `}
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

function continueWriting(hint) {
    const textarea = document.getElementById('ai-main-essay') || document.getElementById('ai-final');
    if (!textarea) return;

    // Scroll to textarea
    textarea.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Set focus
    setTimeout(() => {
        textarea.focus();
        // Add a visual hint if needed
        if (hint) {
            const hintBoxId = 'ai-writing-hint';
            let hintBox = document.getElementById(hintBoxId);
            if (!hintBox) {
                hintBox = document.createElement('div');
                hintBox.id = hintBoxId;
                hintBox.className = "mt-2 p-3 bg-blue-50 border-2 border-blue-200 rounded-xl text-blue-700 text-xs font-bold animate-pulse";
                textarea.parentNode.appendChild(hintBox);
            }
            hintBox.innerHTML = `🌟 <b>Gợi ý của Thầy/Cô:</b> ${hint}`;
        }
    }, 500);
}
