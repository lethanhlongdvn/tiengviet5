// --- CONFIGURATION ---
window.AI_API_URL = window.AI_API_URL || 'https://tiengviet5.netlify.app/.netlify/functions/chat';
console.log('--- Interactive Exercises Script Starting (V20) ---');

// Global Submissions Store
window.submissions = window.submissions || JSON.parse(localStorage.getItem('eduRobotSubmissions') || '[]');

// --- CORE UTILITIES ---
window.celebrate = function () {
    console.log("CELEBRATE!");
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#2563eb', '#f59e0b', '#10b981', '#ef4444']
        });
    }
    const audio = document.getElementById('clapSound');
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => { });
    }
};

window.getSlug = function (str) {
    if (!str) return 'slug-' + Date.now();
    return str.toLowerCase()
        .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
        .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
        .replace(/ì|í|ị|ỉ|ĩ/g, "i")
        .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
        .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
        .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
        .replace(/đ/g, "d")
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-');
};

// --- TOGGLE & CHECK LOGIC ---
window.toggleSentence = function (el, e) {
    const evt = e || window.event;
    const targetWord = evt ? evt.target.closest('.word') : null;
    if (targetWord) {
        if (!el.classList.contains('sentence-locked')) {
            targetWord.classList.toggle('selected');
        }
        if (evt) {
            evt.stopPropagation();
            if (evt.preventDefault) evt.preventDefault();
        }
        return;
    }
    if (el.classList.contains('sentence-locked')) {
        el.classList.remove('sentence-locked');
        el.classList.add('bg-blue-50', 'ring-2', 'ring-blue-300');
    } else {
        const words = el.querySelectorAll('.word.selected');
        words.forEach(w => w.classList.remove('selected'));
        el.classList.remove('bg-blue-50', 'ring-2', 'ring-blue-300');
        el.classList.add('sentence-locked');
        el.querySelectorAll('.word.is-wrong, .word.is-correct').forEach(w => w.classList.remove('is-wrong', 'is-correct'));
        el.classList.remove('ring-green-400', 'bg-green-50', 'ring-red-200', 'ring-orange-200');
    }
};

window.checkParagraph = function (blockId) {
    const container = document.getElementById(blockId);
    const resultEl = document.getElementById('result-' + blockId);
    if (!container || !resultEl) return;

    const rows = container.querySelectorAll('.interactive-row');
    let totalCompound = 0, foundCompound = 0, errors = 0;

    rows.forEach(row => {
        const isCompound = row.getAttribute('data-compound') === 'true';
        const targets = (row.getAttribute('data-ans') || "").split(',').map(s => s.trim().toLowerCase()).filter(s => s !== "");
        const selectedWords = Array.from(row.querySelectorAll('.word.selected'));

        if (isCompound) {
            totalCompound++;
            if (row.classList.contains('sentence-locked')) {
                row.classList.add('ring-2', 'ring-red-200');
            } else {
                let rowCorrectWords = 0, rowHasError = false;
                selectedWords.forEach(w => {
                    const txt = w.innerText.replace(/[.,]/g, "").trim().toLowerCase();
                    if (targets.includes(txt)) {
                        w.classList.add('is-correct'); w.classList.remove('is-wrong');
                        rowCorrectWords++;
                    } else {
                        w.classList.add('is-wrong'); w.classList.remove('is-correct');
                        rowHasError = true; errors++;
                    }
                });
                if (!rowHasError && rowCorrectWords === targets.length) {
                    foundCompound++;
                    row.classList.remove('bg-blue-50', 'ring-blue-300');
                    row.classList.add('ring-2', 'ring-green-400', 'bg-green-50');
                } else {
                    row.classList.remove('ring-green-400', 'bg-green-50');
                    row.classList.add('ring-2', 'ring-red-200');
                }
            }
        } else if (selectedWords.length > 0) {
            selectedWords.forEach(w => { w.classList.add('is-wrong'); errors++; });
            row.classList.add('ring-2', 'ring-red-200');
        }
    });

    resultEl.classList.remove('hidden');
    if (errors === 0 && foundCompound === totalCompound) {
        window.celebrate();
        resultEl.innerHTML = `<div class="p-4 bg-green-50 border-2 border-green-200 rounded-2xl text-green-700 text-center animate-bounce">
            <p class="font-black text-xl mb-1">🎉 Xuất sắc!</p>
            <p class="font-medium">Em đã tìm đúng tất cả <b>${totalCompound}/${totalCompound}</b> câu ghép!</p>
        </div>`;
    } else {
        resultEl.innerHTML = `<div class="p-4 bg-red-50 border-2 border-red-100 rounded-2xl text-red-700">
            <p class="font-bold text-lg mb-2">❌ Kết quả chưa đúng: <b>${foundCompound}/${totalCompound}</b> câu ghép. Lỗi: <b>${errors}</b>.</p>
        </div>`;
    }
};

// --- LTVC LEGACY ---
window.ltvc21_reset1 = (id) => {
    const row = document.getElementById(id); if (!row) return;
    row.querySelectorAll('.word').forEach(w => w.classList.remove('selected', 'is-correct', 'is-wrong'));
};
window.ltvc21_update2 = (id, val) => {
    const row = document.getElementById(id); if (!row) return;
    const slots = row.querySelectorAll('.slot');
    if (!val) { slots.forEach(s => { s.innerText = "..."; s.classList.remove('filled'); }); return; }
    val.split('-').forEach((v, i) => { if (slots[i]) { slots[i].innerText = v; } });
};
window.ltvc21_check2 = (id) => {
    const row = document.getElementById(id); if (!row) return;
    if (row.querySelector('select').value === row.getAttribute('data-ans')) {
        row.querySelectorAll('.slot').forEach(s => { s.style.color = "#22c55e"; s.classList.add('filled'); });
        window.celebrate();
    } else {
        row.querySelectorAll('.slot').forEach(s => { s.style.color = "#ef4444"; });
    }
};
window.ltvc22_toggle = (el) => {
    const container = el.nextElementSibling;
    if (container) {
        container.classList.toggle('hidden');
        el.classList.toggle('opacity-50');
    }
};

window.checkLTVC222_Q2 = async () => {
    const input = document.getElementById('ai-222-q2');
    if (!input || !input.value.trim()) {
        alert("Em hãy nhập câu ghép của mình vào ô trống nhé!");
        return;
    }
    const feedback = document.getElementById('fb-222-q2');
    if (feedback) {
        feedback.classList.remove('hidden');
        feedback.innerHTML = `<div class="flex items-center gap-2 text-blue-600 animate-pulse"><span>🤖 Đợi Thầy xem câu của em nhé...</span></div>`;
    }

    if (typeof askAI === 'function') {
        // prefix cho prompt chuyên biệt
        const prefix = "Em hãy kiểm tra và nhận xét xem câu sau có phải là câu ghép có sử dụng kết từ (và, hay, nhưng, rồi, thì,...) không. Hãy khen nếu em làm đúng, hoặc góp ý nhẹ nhàng nếu còn thiếu kết từ: ";
        await askAI('222-q2', prefix, 'single', 'ltvc', 22);
    } else {
        if (feedback) feedback.innerHTML = "Lỗi: Hệ thống AI chưa sẵn sàng. Vui lòng thử lại sau.";
    }
};

// --- UNIFIED SUBMISSION SYSTEM ---
window.UnifiedSubmission = {
    getContext: function () {
        const quizTab = document.getElementById('tab-quiz');
        if (quizTab && quizTab.classList.contains('active')) return 'quiz_tab';
        if (window.currentSubmissionType === 'quiz') return 'quiz_tab';
        if (document.querySelector('.exercise-click-word-container') || document.querySelector('[id^="block-e1"]')) return 'ltvc_full';
        if (document.getElementById('viet222-mb')) return 'essay_222';
        if (document.getElementById('viet-inputA')) return 'lesson_221_viet';
        return 'basic_lesson';
    },

    collectData: function (passedId) {
        const type = this.getContext();
        let data = { type: type, score: 0, content: "", feedback: "" };

        if (type === 'quiz_tab') {
            const total = window.currentQuizQuestions ? window.currentQuizQuestions.length : 0;
            const correct = window.quizScore || 0;
            data.score = total > 0 ? ((correct / total) * 10).toFixed(1) : 0;
            data.content = `[TRẮC NGHIỆM] Đúng ${correct}/${total} câu.`;
            data.feedback = `Hệ thống tự động chấm điểm bài trắc nghiệm.`;
        }
        else if (type === 'ltvc_full') {
            let contentParts = [];
            let totalS = 0, totalT = 0;

            // Collect all interactive-row/sentence-box results
            document.querySelectorAll('.exercise-click-word-container').forEach(container => {
                const blockId = container.id;
                let s = 0, t = 0;
                container.querySelectorAll('.interactive-row, .sentence-box').forEach(row => {
                    const isComp = row.dataset.compound === 'true' || row.dataset.isCompound === 'true' || row.getAttribute('data-compound') === 'true';
                    if (isComp) {
                        t++;
                        const truth = (row.getAttribute('data-ans') || "").split(',').map(x => x.trim().toLowerCase()).filter(x => x);
                        const selected = Array.from(row.querySelectorAll('.word.selected')).map(w => w.innerText.replace(/[.,]/g, '').trim().toLowerCase());
                        if (truth.length > 0 && truth.length === selected.length && truth.every(val => selected.includes(val))) s++;
                    }
                });
                if (t > 0) {
                    contentParts.push(`${blockId}: ${s}/${t}`);
                    totalS += s; totalT += t;
                }
            });

            // Collect legacy select answers (like Ex 2)
            document.querySelectorAll('[id^="ex231-2-"]').forEach(sel => {
                // Special check for Lesson 231-Ex2
                if (sel.id.includes('ex231-2')) {
                    // This is handled manually for a specific grade if needed, 
                    // or we just trust the AI part for the rest
                }
            });

            const input3 = document.querySelector('textarea[id^="ai-"], textarea[id*="q4"]');
            data.content = `[LTVC] ${contentParts.join(', ')}\n[VIẾT] ${input3 ? input3.value : "(Trống)"}`;

            const feedbackEl = document.querySelector('[id^="fb-ai-"], [id^="fb-231-"], #fb-222-q2');
            if (feedbackEl && !feedbackEl.classList.contains('hidden') && feedbackEl.innerText.includes('/10')) {
                const m = feedbackEl.innerText.match(/(\d+\.?\d*)\/10/);
                data.score = m ? parseFloat(m[1]) : 0;
                data.feedback = feedbackEl.innerText;
            } else {
                const exScore = totalT > 0 ? (totalS / totalT) * 6 : 0;
                data.score = Math.min(10, (exScore + (input3 && input3.value.trim().length > 10 ? 4 : 0))).toFixed(1);
                data.feedback = `Tự động chấm: ${totalS}/${totalT} câu đúng.`;
            }
        }
        else if (type === 'essay_222') {
            data.content = `Đề: ${window.viet222_currentTopic || '?'}\nMB: ${document.getElementById('viet222-mb').value}\nTB: ${document.getElementById('viet222-tb').value}\nKB: ${document.getElementById('viet222-kb').value}`;
            data.score = window.viet222_aiGrade || 0;
            data.feedback = window.viet222_aiFeedback || "Chưa có nhận xét AI";
        }
        else if (type === 'lesson_221_viet') {
            const ratings = Array.from(document.querySelectorAll('.star-group')).map(g => {
                return Array.from(g.querySelectorAll('.star-btn')).filter(s => s.textContent === '★').length;
            });
            const avgRating = ratings.length ? (ratings.reduce((a, b) => a + b, 0) / (ratings.length * 5)) * 10 : 0;
            data.content = `A: ${document.getElementById('viet-inputA')?.value}\nB: ${document.getElementById('viet-inputB')?.value}`;
            data.score = avgRating.toFixed(1);
            data.feedback = `Tự đánh giá: ${avgRating}/10`;
        }
        return data;
    },

    startProcess: function (passedId) {
        window.tempSubmissionData = this.collectData(passedId);
        const modal = document.getElementById('studentInfoModal');
        if (modal) {
            modal.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
            modal.classList.add('flex', 'opacity-100', 'pointer-events-auto');
            document.getElementById('studentInfoContent')?.classList.add('scale-100');
        }
    },

    confirmSave: async function () {
        const name = document.getElementById('studentName').value.trim();
        const cls = document.getElementById('studentClass').value;
        const school = document.getElementById('schoolSelect')?.value === 'Khác' ? document.getElementById('otherSchool')?.value.trim() : document.getElementById('schoolSelect')?.value;

        if (!name) { alert("Em chưa nhập tên kìa!"); return; }
        const btn = document.querySelector('#studentInfoContent button:last-child') || document.querySelector('#submitFinalBtn');
        if (btn) {
            btn.innerHTML = "⏳ ĐANG LƯU...";
            btn.disabled = true;
        }

        try {
            const data = window.tempSubmissionData || this.collectData();
            const lessonTitle = document.title.replace(" - EduRobot", "");

            // --- NEW: ZERO-DEPENDENCY BASE64 UPLOAD (V31) ---
            let fileUrl = "";
            const fileInputs = Array.from(document.querySelectorAll('input[type="file"]'));
            const fileInput = fileInputs.find(input => input.files && input.files[0]);

            const prog = document.getElementById('uploadProgress');
            const bar = document.getElementById('uploadBar');
            const pct = document.getElementById('uploadPercent');
            const statusText = document.getElementById('uploadStatus');

            if (fileInput && fileInput.files[0]) {
                const file = fileInput.files[0];
                if (prog) prog.classList.remove('hidden');
                if (btn) btn.disabled = true;
                if (statusText) statusText.innerText = "ĐANG TỐI ƯU ẢNH (NÉN DUNG LƯỢNG)...";

                try {
                    // 1. COMPRESS IMAGE & CONVERT TO DATA URL
                    fileUrl = await new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = (e) => {
                            const img = new Image();
                            img.src = e.target.result;
                            img.onload = () => {
                                const canvas = document.createElement('canvas');
                                let width = img.width;
                                let height = img.height;
                                const MAX_SIZE = 1000; // Slightly smaller for safety in DB
                                if (width > height) {
                                    if (width > MAX_SIZE) { height *= MAX_SIZE / width; width = MAX_SIZE; }
                                } else {
                                    if (height > MAX_SIZE) { width *= MAX_SIZE / height; height = MAX_SIZE; }
                                }
                                canvas.width = width; canvas.height = height;
                                const ctx = canvas.getContext('2d');
                                ctx.drawImage(img, 0, 0, width, height);

                                // Export as high-compression JPEG
                                const dataUrl = canvas.toDataURL('image/jpeg', 0.6);

                                // Check size (Firestore limit 1MB, so we keep under 950KB)
                                if (dataUrl.length > 950000) {
                                    reject(new Error("Ảnh quá lớn sau khi nén. Vui lòng chụp lại gần hơn hoặc giảm độ phân giải."));
                                } else {
                                    resolve(dataUrl);
                                }
                            };
                            img.onerror = () => reject(new Error("Không thể đọc định dạng ảnh này."));
                        };
                        reader.onerror = () => reject(new Error("Lỗi đọc tệp tin."));
                    });

                    if (bar) bar.style.width = '100%';
                    if (pct) pct.innerText = 'OK';
                    if (statusText) statusText.innerText = "ĐANG LƯU BÀI LÀM TRỰC TIẾP...";

                } catch (error) {
                    console.error("Compression error:", error);
                    alert("Lỗi xử lý ảnh: " + error.message);
                    throw error;
                }
            } else {
                if (btn) btn.innerHTML = "⏳ ĐANG NỘP BÀI...";
            }

            // CHOOSE COLLECTION BASED ON TYPE
            const collectionName = data.type === 'quiz_tab' ? "diem_tieng_viet_lop5" : "essays_v2";

            let saveData = {
                studentName: name, studentClass: cls, studentSchool: school || "Tiểu học",
                content: data.content, lessonTitle: lessonTitle,
                aiFeedback: data.feedback,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                status: "Chưa chấm", type: data.type
            };

            if (data.type === 'quiz_tab') {
                // Compatibility for Teacher Dashboard (diem_tieng_viet_lop5)
                const total = window.currentQuizQuestions ? window.currentQuizQuestions.length : 0;
                const correct = window.quizScore || 0;
                saveData.score = total > 0 ? Math.round((correct / total) * 100) : 0;
                saveData.correctCount = correct;
                saveData.totalQuestions = total;
            } else {
                saveData.aiGrade = data.score; // 0-10 for essays
                saveData.fileUrl = fileUrl;
            }

            await db.collection(collectionName).doc(docId).set(saveData);

            if (data.type === 'quiz_tab') {
                alert(`✨ Tuyệt vời! Em đạt ${saveData.score} điểm. Kết quả đã gửi thành công.`);
            } else {
                alert("🎉 Tuyệt vời! Bài làm của em đã được gửi thành công.");
            }
            if (typeof closeStudentModal === 'function') closeStudentModal();
            window.celebrate();
        } catch (e) { alert("Lỗi nộp bài: " + e.message); }
        finally { if (btn) { btn.innerHTML = "🚀 NỘP BÀI"; btn.disabled = false; } }
    }
};

window.submitLTVCUnified = function (id) {
    if (window.UnifiedSubmission) {
        window.UnifiedSubmission.startProcess(id);
    } else {
        alert("Hệ thống nộp bài đang khởi tạo, vui lòng đợi 2 giây...");
    }
};

// --- AI HELPERS ---
window.checkVietAI = async (type) => {
    const inputId = type === 'a' ? 'viet-inputA' : 'viet-inputB';
    const el = document.getElementById(inputId);
    if (!el || !el.value.trim()) {
        alert("Em hãy viết bài trước khi xem nhận xét nhé!");
        if (el) el.focus();
        return;
    }
    const fb = document.getElementById('feedback-' + inputId);
    if (fb) {
        fb.classList.remove('hidden');
        fb.innerHTML = `<div class="flex items-center gap-2 text-blue-600 animate-pulse"><span>🤖 Thầy đang đọc bài của em...</span></div>`;
    }
    try {
        const res = await fetch(window.AI_API_URL, {
            method: 'POST',
            body: JSON.stringify({
                sentence: `Hãy đóng vai giáo viên Tiếng Việt lớp 5. 
                Đề bài: ${type === 'a' ? 'Sử dụng từ ngữ gợi tả hoặc so sánh' : 'Bộc lộ cảm xúc với người thân'}.
                Nhận xét ngắn gọn (tối đa 2 câu) bài làm sau của học sinh: "${el.value.trim()}". 
                Nếu hay thì khen, nếu chưa hay thì gợi ý nhẹ nhàng. Tuyệt đối không giải thích khoa học về sinh lý cơ thể hay lão hóa.`,
                mode: 'chat',
                persona: 'tlv'
            })
        });
        const data = await res.json();
        let reply = typeof data === 'string' ? data : (data.response || data.content || "Thầy chưa nghĩ ra nhận xét nào.");
        if (fb) fb.innerHTML = reply.replace(/\n/g, '<br>').replace(/\*\*/g, '<b>');
    } catch (e) { if (fb) fb.innerText = "Lỗi kết nối AI."; }
};

window.viet222_aiCheck = async () => {
    const mb = document.getElementById('viet222-mb').value.trim();
    const tb = document.getElementById('viet222-tb').value.trim();
    const kb = document.getElementById('viet222-kb').value.trim();
    if (!mb || !tb || !kb) {
        alert("Em hãy viết đủ 3 phần (Mở bài, Thân bài, Kết bài) để Thầy chấm thử nhé!");
        return;
    }

    const fb = document.getElementById('viet222-pre-feedback');
    const btn = document.getElementById('viet222-aicheck-btn');
    if (fb) {
        fb.classList.remove('hidden');
        fb.innerHTML = `<div class="p-6 bg-blue-50 border-2 border-blue-200 rounded-3xl text-blue-800 text-center animate-pulse font-bold">🤖 Thầy đang đọc và chấm thử bài cho em đây, đợi Thầy một chút nhé...</div>`;
        fb.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (btn) { btn.disabled = true; btn.innerText = "⏳ Đang xem bài..."; }

    try {
        const res = await fetch(window.AI_API_URL, {
            method: 'POST',
            body: JSON.stringify({
                sentence: `Hãy đóng vai giáo viên Tiếng Việt lớp 5 chuyên bồi dưỡng học sinh giỏi. 
                Đề bài: ${window.viet222_currentTopic === 1 ? 'Tả một người em mới gặp nhưng để lại ấn tượng sâu sắc' : 'Tả nhân vật chính trong phim/kịch em đã xem'}.
                Bài làm của học sinh:
                Mở bài: ${mb}
                Thân bài: ${tb}
                Kết bài: ${kb}
                
                Hãy chấm thử và nhận xét ngắn gọn (tối đa 4 câu) theo định dạng:
                1. Điểm mạnh (văn phong, hình ảnh so sánh...).
                2. Góp ý sửa đổi (chính tả, cách dùng từ, nội dung).
                3. Dự đoán điểm (trên thang 10).`,
                mode: 'chat',
                persona: 'tlv'
            })
        });
        const data = await res.json();
        let reply = typeof data === 'string' ? data : (data.response || data.content || "Thầy chưa đưa ra được nhận xét.");

        // Trích xuất điểm nếu không có sẵn trong data.diem
        let detectedScore = data.diem || data.grade;
        if (!detectedScore) {
            // Tìm số đứng sau các từ khóa "điểm", "dự kiến", "khoảng" hoặc số có /10
            const scoreMatch = reply.match(/Dự đoán điểm.*?(\d+(\.\d+)?)/i) || reply.match(/(\d+(\.\d+)?)\/10/);
            if (scoreMatch) detectedScore = scoreMatch[1];
        }

        if (fb) {
            fb.innerHTML = `
                <div class="p-6 bg-white border-4 border-teal-100 rounded-3xl shadow-xl space-y-3">
                    <h4 class="font-black text-teal-600 flex items-center gap-2 text-lg">
                        <span>👨‍🏫</span> NHẬN XÉT CỦA THẦY (DỰ THẢO)
                    </h4>
                    <div class="text-gray-800 leading-relaxed text-base">${reply.replace(/\n/g, '<br>').replace(/\*\*/g, '<b>')}</div>
                    <div class="mt-2 text-xs font-black text-teal-500 uppercase tracking-widest bg-teal-50 py-1 px-3 rounded-lg inline-block">Dự kiến: ${detectedScore || '...'}đ</div>
                    <p class="text-xs text-gray-400 italic mt-2">*Đây là nhận xét thử nghiệm giúp em cải thiện bài viết trước khi nộp chính thức.</p>
                </div>
            `;
            // Lưu lại điểm và feedback để nộp bài
            window.viet222_aiGrade = parseFloat(detectedScore) || 0;
            window.viet222_aiFeedback = reply;
        }
    } catch (e) {
        if (fb) fb.innerHTML = `<div class="p-4 bg-red-50 text-red-600 rounded-xl">Lỗi kết nối AI. Em thử lại sau nhé!</div>`;
    } finally {
        if (btn) { btn.disabled = false; btn.innerText = "🔍 NHẬN XÉT & GỢI Ý"; }
    }
};

window.startSubmitLesson221Viet = function () {
    window.UnifiedSubmission.startProcess();
};

// --- CHAT DEBATE ---
window.nvn222_state = { messages: [] };
window.nvn222_send = async () => {
    const input = document.getElementById('btn-nvn-input') || document.getElementById('nvn-chat-input');
    const msgContainer = document.getElementById('nvn-chat-history');
    if (!input || !input.value.trim() || !msgContainer) return;
    const text = input.value.trim(); input.value = '';

    addMsg('user', text);

    // Add "AI is thinking" indicator
    const typingId = 'ai-typing-' + Date.now();
    const typingDiv = document.createElement('div');
    typingDiv.id = typingId;
    typingDiv.className = "self-start bg-gray-100 p-3 rounded-xl mr-10 mb-2 border border-gray-200 animate-pulse text-gray-500 italic text-sm";
    typingDiv.innerText = "Minh Trí đang suy nghĩ...";
    msgContainer.appendChild(typingDiv);
    msgContainer.scrollTop = msgContainer.scrollHeight;

    try {
        const res = await fetch(window.AI_API_URL, {
            method: 'POST',
            body: JSON.stringify({
                sentence: `Bạn là Minh Trí, một học sinh lớp 5 cực kỳ thông minh, lém lỉnh và giỏi tranh biện. 
                Nhiệm vụ của bạn là tranh luận với người dùng về chủ đề "Học sinh có nên giữ tiền riêng?".
                
                PHONG CÁCH:
                - Xưng hô: "tớ" - "cậu".
                - Ngôn ngữ: Trẻ trung, thông minh, đôi khi dùng emoji phù hợp lứa tuổi lớp 5.
                - Thái độ: Tôn trọng nhưng sẵn sàng "vặn" lại các lập luận chưa chặt chẽ.
                
                CHIẾN THUẬT TRANH BIỆN:
                1. Nếu người dùng đưa ra ý kiến, hãy hỏi "Tại sao?".
                2. Yêu cầu dẫn chứng thực tế: "Cậu có ví dụ nào cho việc này không?".
                3. Chỉ ra mâu thuẫn: Nếu họ nói giữ tiền để tự lập, hãy hỏi về việc nếu tiêu xài hoang phí thì sao.
                4. Luôn giữ thế chủ động bằng cách kết thúc với một câu hỏi vặn lại.`,
                history: window.nvn222_state.messages.map(m => ({
                    role: m.role === 'Bạn' ? 'user' : 'assistant',
                    text: m.text
                })),
                mode: 'chat',
                persona: 'minhtri'
            })
        });
        const data = await res.json();

        // Remove typing indicator
        const indicator = document.getElementById(typingId);
        if (indicator) indicator.remove();

        addMsg('ai', data.response || data.content || data);
    } catch (e) {
        console.error("Chat Error:", e);
        const indicator = document.getElementById(typingId);
        if (indicator) indicator.remove();
        addMsg('ai', "Tớ đang mải nghĩ quá, cậu nói lại câu vừa nãy được không?");
    }
};

window.nvn222_summary = async () => {
    const msgContainer = document.getElementById('nvn-chat-history');
    if (!msgContainer || window.nvn222_state.messages.length < 2) {
        alert("Cậu và tớ chưa tranh luận gì mà, nói thêm vài câu đi!");
        return;
    }

    const summaryBtn = document.querySelector('button[onclick="nvn222_summary()"]');
    if (summaryBtn) {
        summaryBtn.disabled = true;
        summaryBtn.innerText = "⏳ ĐANG TỔNG KẾT...";
    }

    try {
        const res = await fetch(window.AI_API_URL, {
            method: 'POST',
            body: JSON.stringify({
                sentence: `Dựa trên lịch sử tranh luận này, hãy viết một bài tổng kết cực kỳ chuyên nghiệp nhưng vẫn đúng chất Minh Trí lớp 5.
                
                Yêu cầu tổng kết:
                1. Đánh giá khả năng lập luận của người dùng (Có sắc bén không? Có dẫn chứng không?).
                2. Nhận xét về thái độ (Có văn minh, tôn trọng sự khác biệt không?).
                3. Xếp hạng "Nhà Tranh Biện Nhí": Đồng, Bạc, Vàng hoặc Kim Cương.
                4. Một lời khuyên để cậu ấy giỏi hơn.
                
                Định dạng trả về: HTML đẹp mắt với các icon, chữ in đậm.`,
                history: window.nvn222_state.messages.map(m => ({
                    role: m.role === 'Bạn' ? 'user' : 'assistant',
                    text: m.text
                })),
                mode: 'chat',
                persona: 'minhtri'
            })
        });
        const data = await res.json();
        const reply = data.response || data.content || data;

        const summaryDiv = document.createElement('div');
        summaryDiv.className = "self-stretch bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-3xl border-2 border-amber-200 shadow-inner my-4 animate-in zoom-in duration-500";
        summaryDiv.innerHTML = `
            <div class="flex items-center gap-3 mb-4">
                <span class="text-3xl">🏆</span>
                <h3 class="text-xl font-black text-amber-700 uppercase">Kết quả cuộc tranh biện</h3>
            </div>
            <div class="text-gray-800 leading-relaxed">${reply.replace(/\n/g, '<br>')}</div>
            <div class="mt-4 pt-4 border-t border-amber-200 text-center">
                <button onclick="window.location.reload()" class="text-sm font-bold text-amber-600 hover:underline">Thử tranh luận lại từ đầu 🔄</button>
            </div>
        `;
        msgContainer.appendChild(summaryDiv);
        msgContainer.scrollTop = msgContainer.scrollHeight;
    } catch (e) {
        alert("Lỗi khi tổng kết, cậu thử lại nhé!");
    } finally {
        if (summaryBtn) {
            summaryBtn.disabled = false;
            summaryBtn.innerText = "🏁 TỔNG KẾT TRANH BIỆN";
        }
    }
};

function addMsg(role, text) {
    const container = document.getElementById('nvn-chat-history'); if (!container) return;
    const div = document.createElement('div');
    if (role === 'user') {
        div.className = "self-end max-w-[80%] animate-in slide-in-from-right-5 fade-in duration-500";
        div.innerHTML = `
            <div class="flex items-center justify-end gap-2 mb-2">
                <span class="text-xs font-black text-blue-600 uppercase bg-blue-100 px-2 py-1 rounded-lg">Cậu</span>
                <span class="text-2xl">👤</span>
            </div>
            <div class="bg-blue-600 text-white p-4 rounded-3xl rounded-tr-none shadow-md text-lg leading-relaxed">
                ${text}
            </div>
        `;
    } else {
        div.className = "self-start max-w-[80%] animate-in slide-in-from-left-5 fade-in duration-500";
        div.innerHTML = `
            <div class="flex items-center gap-2 mb-2">
                <span class="text-2xl">👦</span>
                <span class="text-xs font-black text-amber-600 uppercase bg-amber-100 px-2 py-1 rounded-lg">Minh Trí AI</span>
            </div>
            <div class="bg-white p-4 rounded-3xl rounded-tl-none border border-gray-100 shadow-sm text-gray-800 text-lg leading-relaxed">
                ${text.replace(/\n/g, '<br>').replace(/\*\*/g, '<b>')}
            </div>
        `;
    }
    container.appendChild(div); container.scrollTop = container.scrollHeight;
    window.nvn222_state.messages.push({ role: role === 'user' ? 'Bạn' : 'Minh Trí', text: text });
}

// --- BINDINGS ---
window.submitLTVCUnified = (id) => window.UnifiedSubmission.startProcess(id);
window.submitFullLessonLTVC = window.submitLTVCUnified;
window.viet222_submit = () => window.UnifiedSubmission.startProcess();
window.handleSubmission = () => window.UnifiedSubmission.confirmSave();
window.rateViet = (el, score) => {
    const g = el.closest('.star-group'); if (!g) return;
    g.querySelectorAll('.star-btn').forEach((s, i) => {
        if (i < score) {
            s.textContent = '★'; s.classList.add('text-yellow-400'); s.classList.remove('text-gray-300');
        } else {
            s.textContent = '☆'; s.classList.remove('text-yellow-400'); s.classList.add('text-gray-300');
        }
    });
};
window.viet222_selectTopic = (topicId) => {
    window.viet222_currentTopic = topicId;
    document.getElementById('viet222-p2')?.classList.remove('opacity-50', 'pointer-events-none', 'grayscale');
};

document.addEventListener('click', (e) => {
    if (e.target.closest('#viet222-submit-btn')) window.viet222_submit();
    const tBtn = e.target.closest('.viet222-topic-btn');
    if (tBtn) {
        const id = tBtn.id.includes('1') ? 1 : 2;
        window.viet222_selectTopic(id);
    }
}, true);

console.log("Interactive Exercises V31 Loaded Successfully.");
