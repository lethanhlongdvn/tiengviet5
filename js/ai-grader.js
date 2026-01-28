async function askAI(id, prefix = "", mode = "single", persona = "auto") {
    const feedback = document.getElementById('fb-' + id);
    let userInput = "";

    // Determine persona based on checking context if "auto"
    if (persona === "auto") {
        const lowerPrefix = prefix.toLowerCase();
        if (lowerPrefix.includes("câu ghép") || lowerPrefix.includes("từ nối") ||
            lowerPrefix.includes("quan hệ từ") || lowerPrefix.includes("vế câu") ||
            lowerPrefix.includes("dấu câu") || lowerPrefix.includes("kết từ") ||
            lowerPrefix.includes("thay cho") || lowerPrefix.includes("điền") ||
            (lowerPrefix.includes("...") && lowerPrefix.length < 100)) {
            persona = "ltvc"; // Grammar Teacher
        } else {
            persona = "tlv";  // Creative Writing Teacher
        }
    }

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

    // UI: Loading state with Persona
    const teacherName = persona === "ltvc" ? "Thầy Giáo Ngữ Pháp" : "Thầy Giáo Văn";
    feedback.classList.remove('hidden');
    feedback.innerHTML = `
        <div class="flex items-center space-x-2 p-4 bg-purple-50 rounded-xl border border-purple-200">
            <svg class="animate-spin h-5 w-5 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="font-bold text-purple-800">🤖 ${teacherName} đang chấm bài...</span>
        </div>
    `;

    // SIMULATION MODE: If running locally without Netlify Functions
    // Check if we are in an exercise that can be checked locally OR if we just want to force simulation
    const isMockable = mode === "table" || id.includes('q') || id === '3';

    if (isMockable) {
        setTimeout(() => {
            const mockData = generateMockResponse(userInput, persona, prefix);
            renderFeedback(feedback, mockData);
            if (typeof celebrate === 'function' && mockData.grade >= 8) celebrate();
        }, 1500);
        return;
    }

    try {
        const response = await fetch('/.netlify/functions/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sentence })
        });

        if (!response.ok) {
            throw new Error(`Lỗi kết nối (${response.status})`);
        }

        const data = await response.json();
        renderFeedback(feedback, data);
        const gradeNum = parseFloat(data.diem) || data.grade || 0;
        if (typeof celebrate === 'function' && gradeNum >= 8) celebrate();

    } catch (error) {
        console.warn('AI API failed, falling back to simulation:', error);

        // FALLBACK SIMULATION using the SAME logic as the mock mode
        setTimeout(() => {
            const mockData = generateMockResponse(userInput, persona, prefix);
            renderFeedback(feedback, mockData);
            if (typeof celebrate === 'function' && mockData.grade >= 8) celebrate();
        }, 1000);
    }
}

function generateMockResponse(userInput, persona, prefix = "") {
    const lowerInput = userInput.toLowerCase();
    const length = userInput.length;
    const wordCount = userInput.split(' ').length;
    let mockData;

    if (persona === "ltvc") { // --- GRAMMAR TEACHER ---
        // Detect requirements from prefix
        const lowerPrefix = prefix.toLowerCase();
        let targetConnectors = [];
        let requirementDesc = "từ nối phù hợp";

        // Group 1: Cause-Effect (Vì, Bởi, Do, Nhờ)
        if (lowerPrefix.includes("vì") || lowerPrefix.includes("bởi") || lowerPrefix.includes("do") || lowerPrefix.includes("nhờ") || lowerPrefix.includes("nguyên nhân")) {
            targetConnectors.push('vì', 'bởi', 'do', 'nhờ', 'nên', 'mà');
            requirementDesc = "quan hệ Nguyên nhân - Kết quả (Vì... nên..., Nhờ... mà...)";
        }

        // Group 2: Condition-Result (Nếu, Hễ, Giá)
        if (lowerPrefix.includes("nếu") || lowerPrefix.includes("hễ") || lowerPrefix.includes("giá") || lowerPrefix.includes("điều kiện")) {
            targetConnectors.push('nếu', 'hễ', 'giá', 'thì');
            requirementDesc = "quan hệ Điều kiện - Kết quả (Nếu... thì..., Hễ... thì...)";
        }

        // Group 3: Contrast (Tuy, Dù, Mặc dù)
        if (lowerPrefix.includes("tuy") || lowerPrefix.includes("dù") || lowerPrefix.includes("mặc dù") || lowerPrefix.includes("nhưng") || lowerPrefix.includes("tương phản")) {
            targetConnectors.push('tuy', 'dù', 'mặc dù', 'nhưng');
            requirementDesc = "quan hệ Tương phản (Tuy... nhưng...)";
        }

        // Group 4: Progression (Chẳng những, Không những)
        if (lowerPrefix.includes("không những") || lowerPrefix.includes("chẳng những") || lowerPrefix.includes("tăng tiến")) {
            targetConnectors.push('không những', 'chẳng những', 'mà còn', 'lại còn');
            requirementDesc = "quan hệ Tăng tiến (Chẳng những... mà còn...)";
        }

        // Group 5: Correlative (Hô ứng: vừa... đã..., càng... càng...)
        if (lowerPrefix.includes("hô ứng") || lowerPrefix.includes("vừa") || lowerPrefix.includes("càng") || lowerPrefix.includes("bao nhiêu") || lowerPrefix.includes("bấy nhiêu")) {
            targetConnectors.push('vừa', 'đã', 'càng', 'bao nhiêu', 'bấy nhiêu', 'đâu', 'đấy', 'nào', 'nấy');
            requirementDesc = "cặp từ hô ứng (Vừa... đã..., Càng... càng...)";
        }

        // Fallback if no specific requirements detected
        if (targetConnectors.length === 0) {
            targetConnectors = ['vì', 'nên', 'tuy', 'nhưng', 'nếu', 'thì', 'chẳng những', 'mà còn', 'vừa', 'đã', 'bởi', 'do', 'nhờ', 'mà'];
            requirementDesc = "cặp quan hệ từ";
        }

        const foundConnectors = targetConnectors.filter(c => lowerInput.includes(c));
        const hasConnectors = foundConnectors.length >= 1;

        if (length < 20) {
            mockData = {
                status: "incomplete", diem: "Chưa đạt", grade: 4,
                uu_diem: "Em đã bắt đầu làm bài.",
                loi_sai: "Câu quá ngắn, chưa đủ thành phần.",
                huong_dan: "Em hãy viết câu ghép hoàn chỉnh (có 2 vế câu) nhé.",
                missing_parts: ["Vế câu"], word_count: wordCount,
                persona: "ltvc"
            };
        } else if (!hasConnectors) {
            mockData = {
                status: "incomplete", diem: "Sai yêu cầu", grade: 6,
                uu_diem: "Câu văn rõ nghĩa.",
                loi_sai: `Chưa đúng yêu cầu về ${requirementDesc}.`,
                huong_dan: `Đề bài yêu cầu dùng ${requirementDesc}. Em thử lại nhé!`,
                missing_parts: ["Từ nối đúng loại"], word_count: wordCount,
                persona: "ltvc"
            };
        } else {
            mockData = {
                status: "complete", diem: "10/10", grade: 10,
                uu_diem: `Chính xác! Em đã sử dụng đúng ${requirementDesc}.`,
                loi_sai: "Không có.",
                huong_dan: "Câu ghép của em rất chuẩn xác. Giỏi lắm!",
                word_count: wordCount,
                analysis: { mo_bai: "Đúng ngữ pháp", than_bai: "Đủ vế câu", ket_bai: "Đúng từ nối yêu cầu" },
                persona: "ltvc"
            };
        }
    } else { // --- CREATIVE WRITING TEACHER ---
        const adjectives = ['xanh', 'đẹp', 'cao', 'rộng', 'mênh mông', 'lung linh', 'rực rỡ', 'lấp lánh', 'vui', 'buồn', 'nhớ', 'thương'];
        const foundAdj = adjectives.filter(a => lowerInput.includes(a));
        const isShort = length < 50;

        if (isShort) {
            mockData = {
                status: "incomplete", diem: "Viết thêm nhé", grade: 5,
                uu_diem: "Em đã có ý tưởng.",
                loi_sai: "Đoạn văn hơi ngắn.",
                huong_dan: "Em hãy miêu tả kỹ hơn để bài văn sinh động hơn nhé (tối thiểu 50 ký tự).",
                missing_parts: ["Chi tiết miêu tả"], word_count: wordCount,
                persona: "tlv"
            };
        } else if (foundAdj.length < 1) {
            mockData = {
                status: "complete", diem: "8/10", grade: 8,
                uu_diem: "Bài viết mạch lạc, đủ ý.",
                loi_sai: "Hơi ít từ ngữ gợi tả.",
                huong_dan: "Thầy gợi ý em thêm các từ chỉ màu sắc, cảm xúc vào bài nhé.",
                word_count: wordCount,
                persona: "tlv"
            };
        } else {
            mockData = {
                status: "complete", diem: "9.5/10", grade: 9.5,
                uu_diem: "Bài viết giàu hình ảnh, cảm xúc.",
                loi_sai: "Không có lỗi lớn.",
                huong_dan: "Thầy rất thích cách em dùng từ ngữ miêu tả. Bài làm rất tốt!",
                word_count: wordCount,
                analysis: { mo_bai: "Hấp dẫn", than_bai: "Chi tiết", ket_bai: "Cảm xúc" },
                persona: "tlv"
            };
        }
    }

    // Default analysis if missing
    if (!mockData.analysis) {
        mockData.analysis = {
            mo_bai: persona === "ltvc" ? "Đúng chủ đề" : "Mở bài",
            than_bai: persona === "ltvc" ? "Đúng cấu trúc" : "Thân bài",
            ket_bai: persona === "ltvc" ? "Hoàn chỉnh" : "Kết bài"
        };
    }

    return mockData;
}

function renderFeedback(container, data) {
    const isComplete = data.status === "complete";
    const missingParts = data.missing_parts || [];
    const wordCount = data.word_count || 0;
    const persona = data.persona || "tlv";

    let labels = {
        mo_bai: "Mở bài",
        than_bai: "Thân bài",
        ket_bai: "Kết bài"
    };

    if (persona === "ltvc") {
        labels = {
            mo_bai: "Ngữ pháp",
            than_bai: "Thành phần",
            ket_bai: "Kết nối"
        };
    }

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
        const partLabel = labels[part];
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
                    <h5 class="font-black uppercase text-[10px] mb-3 tracking-widest opacity-80">💡 Hướng dẫn từ Thầy</h5>
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
            hintBox.innerHTML = `🌟 <b>Gợi ý của Thầy:</b> ${hint}`;
        }
    }, 500);
}
