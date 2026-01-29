/**
 * Lesson Loader Logic
 * Fetches data/lessons.json and renders content based on URL parameter ?id=...
 */

async function initLesson() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const lessonId = urlParams.get('id');

        if (!lessonId) {
            document.body.innerHTML = "<h1 class='text-center mt-10'>Không tìm thấy ID bài học!</h1>";
            return;
        }

        // Use global variable instead of fetch for local file support
        const data = window.LESSON_DATA;
        if (!data || !data.lessons) {
            throw new Error("Dữ liệu bài học chưa được tải (window.LESSON_DATA).");
        }

        const lesson = data.lessons[lessonId];

        if (!lesson) {
            document.body.innerHTML = `<h1 class='text-center mt-10 text-red-500'>Không tìm thấy dữ liệu cho bài học: ${lessonId}</h1>`;
            return;
        }

        renderLesson(lesson);
    } catch (error) {
        console.error("Lỗi tải bài học:", error);
        alert("Có lỗi xảy ra khi tải bài học!\\n" + error.message);
    }
}

function renderLesson(lesson) {
    // 1. Set Metadata
    document.title = `${lesson.title} - EduRobot`;
    document.querySelector('.lesson-week').innerText = `TUẦN ${lesson.week}`;
    document.querySelector('.lesson-subject').innerText = `BÀI: ${lesson.title.toUpperCase()}`;
    document.querySelector('.lesson-theme').innerText = lesson.theme.toUpperCase();

    // 2. Render Lesson Content (Tab 1)
    const blocks = lesson.tabs.lesson.blocks;
    const container = document.getElementById('dynamic-content');
    container.innerHTML = '';

    blocks.forEach(block => {
        container.appendChild(createBlock(block));
    });

    // 3. Audio
    if (lesson.audio) {
        document.getElementById('lessonAudio').src = lesson.audio;
    }

    // 4. Render Quiz (Tab 2)
    const quizTab = document.getElementById('tab-quiz');
    if (lesson.tabs.quiz && lesson.tabs.quiz.html) {
        quizTab.innerHTML = lesson.tabs.quiz.html;
    } else if (lesson.tabs.quiz && lesson.tabs.quiz.questions && lesson.tabs.quiz.questions.length > 0) {
        renderQuiz(lesson.tabs.quiz);
    } else {
        document.getElementById('tab-quiz').innerHTML = `
            <div class="glass-card p-10 text-center">
                <h2 class="text-2xl font-black text-gray-400">Không có bài trắc nghiệm cho bài học này.</h2>
            </div>`;
    }

    // 5. Trigger UI Inits (Accordion, Words)
    window.currentLesson = lesson;
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function renderQuiz(quizData) {
    const container = document.getElementById('tab-quiz');
    let questions = [...quizData.questions]; // Copy array

    // Handle Random Pick
    if (quizData.settings && quizData.settings.pick) {
        questions = shuffle(questions).slice(0, quizData.settings.pick);
    }
    // Save current questions for scoring
    window.currentQuizQuestions = questions;
    window.currentQuizIdx = 0;
    window.quizScore = 0;

    let html = `
        <div class="max-w-[95%] mx-auto space-y-2">
            <!-- Progress & Score -->
            <div class="glass-card p-2 rounded-xl border-white/50 shadow-sm flex flex-col gap-1">
                <div class="flex justify-between items-center px-2">
                    <span id="quiz-progress-text" class="text-xs font-black text-indigo-500 uppercase tracking-[0.2em]">CÂU 1 / ${questions.length}</span>
                    <span id="quiz-score-realtime" class="text-xs font-black text-green-600 uppercase tracking-[0.2em]">ĐÚNG: 0</span>
                </div>
                <div class="bg-gray-100 h-2 rounded-full overflow-hidden shadow-inner flex">
                    <div id="quiz-progress-bar" class="bg-gradient-to-r from-blue-500 to-indigo-600 h-full transition-all duration-500" style="width: ${100 / questions.length}%"></div>
                </div>
            </div>

            <div id="quiz-cards-container">
    `;

    questions.forEach((q, index) => {
        let optionsHtml = '';
        q.a.forEach((opt, i) => {
            optionsHtml += `
                <label class="flex items-center p-3 rounded-xl border-2 border-transparent bg-white/70 hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-all group relative h-full">
                    <div class="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 group-hover:border-blue-500 mr-3">
                        <input type="radio" name="q${index}" value="${i}" onclick="checkQuiz(${index}, ${i}, ${q.c})" class="appearance-none w-full h-full rounded-full checked:bg-blue-600 checked:border-transparent cursor-pointer">
                    </div>
                    <span class="text-2xl text-gray-800 font-medium group-hover:text-blue-900 leading-snug flex-1">${opt}</span>
                    <span class="ml-2 hidden status-icon status-${index}-${i} animate-bounce flex-shrink-0"></span>
                </label>
            `;
        });

        html += `
            <div class="glass-card p-4 rounded-[24px] shadow-lg border-l-[8px] border-indigo-500 relative overflow-hidden quiz-card ${index === 0 ? 'animate-in fade-in slide-in-from-bottom-4 duration-500' : 'hidden'}" id="quiz-card-${index}">
                 <div class="absolute -right-8 -top-8 w-32 h-32 bg-indigo-50 rounded-full opacity-50 blur-3xl"></div>
                 
                 <!-- Question -->
                 <div class="relative mb-3">
                     <span class="inline-block bg-indigo-100 text-indigo-700 rounded-lg px-2 py-1 text-sm font-black mb-1 uppercase tracking-wide border border-indigo-200">Câu ${index + 1}</span>
                     <h3 class="text-3xl font-bold text-gray-800 leading-tight">
                        ${q.q}
                     </h3>
                 </div>

                 <!-- Options Grid -->
                 <div class="space-y-0 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${optionsHtml}
                 </div>

                 <!-- Feedback -->
                 <div class="mt-2 hidden p-3 rounded-2xl text-xl font-bold shadow-sm transform transition-all text-center" id="quiz-feedback-${index}"></div>
                 
                 <!-- Navigation -->
                 <div class="mt-4 flex justify-center opacity-0 pointer-events-none transition-all duration-500" id="quiz-nav-${index}">
                    ${index === questions.length - 1
                ? `<button onclick="submitQuizResult()" class="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-3 rounded-2xl font-black shadow-lg shadow-blue-200/50 transform hover:-translate-y-1 active:scale-95 transition-all uppercase tracking-wider text-lg pointer-events-auto">
                             🚀 Nộp Bài
                           </button>`
                : ''
            }
                 </div>
            </div>
        `;
    });

    html += `
            </div>
            <div class="text-center pb-2">
                <button onclick="resetQuiz()" class="text-xs font-black text-gray-400 uppercase tracking-widest hover:text-red-500 transition-colors py-2">Thiết lập lại</button>
            </div>
        </div>`;

    container.innerHTML = html;
}

function updateQuizProgress() {
    const total = window.currentQuizQuestions.length;
    const current = window.currentQuizIdx + 1;
    const pct = (current / total) * 100;
    const progressBar = document.getElementById('quiz-progress-bar');
    const progressText = document.getElementById('quiz-progress-text');
    const scoreText = document.getElementById('quiz-score-realtime');

    if (progressBar) progressBar.style.width = pct + '%';
    if (progressText) progressText.innerText = `CÂU ${current} / ${total}`;
    if (scoreText) scoreText.innerText = `ĐÚNG: ${window.quizScore || 0}`;
}

function nextQuiz(currentIndex) {
    const currentCard = document.getElementById(`quiz-card-${currentIndex}`);
    const nextCard = document.getElementById(`quiz-card-${currentIndex + 1}`);

    currentCard.classList.add('hidden');
    nextCard.classList.remove('hidden');
    nextCard.classList.add('animate-in', 'fade-in', 'slide-in-from-right-8', 'duration-500');

    window.currentQuizIdx++;
    updateQuizProgress();
}

function checkQuiz(qIndex, selectedIndex, correctIndex) {
    const card = document.getElementById(`quiz-card-${qIndex}`);
    const feedback = document.getElementById(`quiz-feedback-${qIndex}`);
    const nav = document.getElementById(`quiz-nav-${qIndex}`);
    const inputs = card.querySelectorAll('input');

    // Disable all inputs
    inputs.forEach(input => input.disabled = true);

    const isCorrect = selectedIndex === correctIndex;
    const statusIcon = card.querySelector(`.status-${qIndex}-${selectedIndex}`);

    if (isCorrect) {
        window.quizScore = (window.quizScore || 0) + 1;
        statusIcon.classList.remove('hidden');
        statusIcon.innerHTML = '<svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>';
        statusIcon.parentElement.classList.add('bg-green-50', 'border-green-400', 'ring-4', 'ring-green-100');

        feedback.classList.remove('hidden');
        feedback.className = "mt-4 p-4 rounded-2xl bg-green-100 text-green-700 text-xl font-black text-center shadow-inner border border-green-200 animate-in zoom-in-95 duration-300";
        feedback.innerHTML = "✨ TUYỆT VỜI! ĐÁP ÁN CHÍNH XÁC 🎉";

        if (typeof confetti === 'function') {
            confetti({ particleCount: 40, spread: 70, origin: { y: 0.7 }, colors: ['#4f46e5', '#10b981', '#fbbf24'] });
        }
    } else {
        // WRONG ANSWER Logic
        statusIcon.classList.remove('hidden');
        statusIcon.innerHTML = '<span class="text-2xl">❌</span>';
        statusIcon.parentElement.classList.add('bg-red-50', 'border-red-300');

        // DO NOT SHOW CORRECT ANSWER
        // Just show feedback
        feedback.classList.remove('hidden');
        feedback.className = "mt-4 p-4 rounded-2xl bg-red-50 text-red-600 text-xl font-black text-center border border-red-100 animate-in shake duration-500";
        feedback.innerHTML = "😅 TIẾC QUÁ! SAI RỒI...";
    }

    // Auto-advance logic
    const total = window.currentQuizQuestions.length;
    if (qIndex < total - 1) {
        // Auto go to next question after 1.2s
        setTimeout(() => {
            nextQuiz(qIndex);
        }, 1200);
    } else {
        // Last question - AUTO SUBMIT after delay
        setTimeout(() => {
            submitQuizResult();
        }, 1500);
    }

    // Update score in progress bar immediately
    const scoreText = document.getElementById('quiz-score-realtime');
    if (scoreText) scoreText.innerText = `ĐÚNG: ${window.quizScore || 0}`;
}

async function submitQuizResult() {
    // Check for Practice Mode (Lesson 222)
    const currentQuizSettings = window.currentLesson?.tabs?.quiz?.settings;
    if (currentQuizSettings && currentQuizSettings.mode === 'practice') {
        const total = window.currentQuizQuestions.length;
        const correct = window.quizScore || 0;
        const score = Math.round((correct / total) * 10); // Scale to 10

        let advice = "";
        const advices = currentQuizSettings.advice;

        if (score >= 8) advice = advices.high;
        else if (score >= 5) advice = advices.medium;
        else advice = advices.low;

        // Custom Modal for Advice
        const msg = `
            <div class="text-center space-y-4">
                <div class="text-6xl mb-2">${score >= 8 ? '🌟' : (score >= 5 ? '⭐' : '🧸')}</div>
                <h3 class="text-2xl font-black text-gray-800">Kết quả: ${score}/10 điểm</h3>
                <p class="text-gray-600 text-lg leading-relaxed bg-blue-50 p-4 rounded-xl border border-blue-100">
                    "${advice}"
                </p>
                <button onclick="window.location.reload()" class="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition">Làm lại để rèn luyện thêm</button>
            </div>
        `;

        // Use a simple overlay or overwrite the quiz container
        const container = document.getElementById('tab-quiz');
        container.innerHTML = `<div class="glass-card p-8 max-w-lg mx-auto mt-10 shadow-2xl animate-in zoom-in-95">${msg}</div>`;
        return; // STOP HERE
    }

    // Standard Mode (Save to DB)
    window.currentSubmissionType = 'quiz';

    const modal = document.getElementById('studentInfoModal');
    const content = document.getElementById('studentInfoContent');
    if (modal) {
        modal.classList.remove('hidden');
        void modal.offsetWidth; // force reflow
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('flex', 'opacity-100', 'pointer-events-auto');
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
    }
}

async function confirmSubmitQuiz() {
    // Helper to get inputs
    const name = document.getElementById('studentName').value.trim();
    const cls = document.getElementById('studentClass').value;
    const schoolSel = document.getElementById('schoolSelect').value;
    const schoolOther = document.getElementById('otherSchool').value.trim();
    const school = schoolSel === 'Khác' ? schoolOther : schoolSel;

    if (!name) { alert("Em hãy nhập Họ và Tên của mình nhé!"); return; }
    if (schoolSel === 'Khác' && !schoolOther) { alert("Em hãy nhập tên Trường của mình nhé!"); return; }

    const btn = document.querySelector('#studentInfoContent button:last-child');
    if (btn) { btn.disabled = true; btn.innerHTML = "🚀 Đang gửi bài..."; }

    // --- CASE 1: ESSAY SUBMISSION ---
    if (window.currentSubmissionType === 'essay') {
        // Logic is now in interactive-exercises.js or handled here?
        // Since I defined handleSubmission in interactive-exercises.js, I should probably standardise.
        // But for robust code, I will call the logic here if it exists.
        if (window.handleSubmission) {
            await window.handleSubmission();
            if (btn) { btn.disabled = false; btn.innerHTML = "🚀 NỘP BÀI"; }
            return;
        }
    }

    // --- CASE 2: QUIZ SUBMISSION (DEFAULT) ---
    const totalQuestions = window.currentQuizQuestions ? window.currentQuizQuestions.length : 0;
    const correctCount = window.quizScore || 0;
    const finalScore = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const feedbackText = `Đúng ${correctCount}/${totalQuestions} câu`;

    // Local Storage Save (for Excel Export)
    if (!window.submissions) window.submissions = [];
    const sub = {
        studentName: name,
        studentClass: cls,
        studentSchool: school,
        lessonTitle: document.title.replace(' - EduRobot', ''),
        type: 'quiz',
        content: `Kết quả trắc nghiệm: ${correctCount}/${totalQuestions}`,
        feedback: feedbackText,
        score: finalScore,
        timestamp: new Date().toISOString()
    };
    window.submissions.push(sub);
    localStorage.setItem('eduRobotSubmissions', JSON.stringify(window.submissions));

    // Firebase (Optional - Keep existing logic if valid)
    const fireData = {
        studentName: name,
        studentClass: cls,
        studentSchool: school,
        lessonTitle: document.title.replace(' - EduRobot', ''),
        score: finalScore,
        correctCount: correctCount,
        totalQuestions: totalQuestions,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        type: 'quiz'
    };

    try {
        await db.collection("diem_tieng_viet_lop5").add(fireData);
        alert(`✨ Tuyệt vời! Em đạt ${finalScore} điểm. Kết quả đã gửi thành công.`);
        window.location.reload();
    } catch (error) {
        console.error("Error saving quiz:", error);
        // Fallback Success for Local
        alert(`✨ Tuyệt vời! Em đạt ${finalScore} điểm. (Đã lưu vào máy)`);
        window.location.reload();
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = "🚀 NỘP BÀI";
        }
    }
}

function closeStudentModal() {
    const modal = document.getElementById('studentInfoModal');
    const content = document.getElementById('studentInfoContent');
    if (modal) {
        modal.classList.remove('opacity-100', 'pointer-events-auto');
        modal.classList.add('opacity-0', 'pointer-events-none');
        content.classList.remove('scale-100');
        content.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
        }, 300);
    }
}

function resetQuiz() {
    if (confirm("Em muốn làm lại bài tập này đúng không?")) {
        window.location.reload();
    }
}

function createBlock(block) {
    const div = document.createElement('div');

    if (block.type === 'header') {
        div.innerHTML = `<h1 class="text-3xl md:text-4xl font-black text-center text-blue-800 mb-8 uppercase tracking-tight">${block.text}</h1>`;
    }
    else if (block.type === 'theory') {
        div.className = "glass-card rounded-[24px] p-6 bg-orange-50/50 border-l-8 border-orange-400 relative overflow-hidden shadow-lg mb-6";
        div.innerHTML = `
            <div class="absolute -top-2 left-4 text-gray-400">
                <svg class="w-10 h-10 transform rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
            </div>
            <h2 class="text-2xl font-black text-orange-700 mb-4 ml-8">${block.title}</h2>
            <div class="serif-font text-gray-800 text-lg leading-relaxed space-y-4">${block.content}</div>
        `;
    }
    else if (block.type === 'exercise_click_word') {
        div.className = "glass-card rounded-[24px] p-4 shadow-lg border-l-8 border-blue-500 mb-6";
        let itemsHtml = block.data.map(item => `
            <div class="p-4 bg-white/60 rounded-xl flex items-start sm:items-center justify-between gap-4" id="${item.id}" data-ans="${item.targets.join(',')}">
                <p class="text-lg leading-loose font-medium select-none sentence-content flex-1">${item.text}</p>
                <div class="flex gap-2 shrink-0">
                    <button onclick="check1('${item.id}')" class="btn btn-primary w-9 h-9 rounded-lg flex items-center justify-center shadow-md transition-all">✓</button>
                    <button onclick="reset1('${item.id}')" class="btn btn-outline w-9 h-9 rounded-lg flex items-center justify-center transition-all">↺</button>
                </div>
            </div>
        `).join('');

        div.innerHTML = `
            <h3 class="font-black text-xl text-gray-800 mb-2 flex items-center">
                <span class="bg-blue-100 text-blue-600 rounded-lg px-3 py-1 text-sm mr-3">${block.title}</span> ${block.subtitle}
            </h3>
            <p class="text-sm text-gray-500 mb-4 italic">${block.instruction}</p>
            <div class="space-y-2">${itemsHtml}</div>
        `;
    }
    else if (block.type === 'exercise_fill_blank') {
        div.className = `glass-card rounded-[24px] p-4 shadow-lg border-l-8 border-${block.color}-400 mb-6`;
        let itemsHtml = block.data.map(item => {
            const optionsHtml = item.options.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('');
            return `
            <div class="p-4 border border-${block.color}-100 rounded-xl bg-${block.color}-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" id="${item.id}" data-ans="${item.correct}">
                <p class="flex-1 text-lg">${item.text}</p>
                <div class="flex gap-2 shrink-0 w-full sm:w-auto">
                    <select class="flex-1 sm:w-48 p-3 rounded-lg border border-gray-200 text-base font-bold bg-white focus:ring-2 focus:ring-${block.color}-400 focus:outline-none" onchange="update2('${item.id}', this.value)">
                        <option value="">-- Chọn --</option>
                        ${optionsHtml}
                    </select>
                    <button onclick="check2('${item.id}')" class="btn btn-warning w-12 h-12 flex items-center justify-center rounded-lg font-black shadow transition-all">✓</button>
                </div>
            </div>`;
        }).join('');

        div.innerHTML = `
            <h3 class="font-black text-xl text-gray-800 mb-3 flex items-center">
                <span class="bg-${block.color}-100 text-${block.color}-600 rounded-lg px-3 py-1 text-sm mr-3">${block.title}</span> ${block.subtitle}
            </h3>
            <div class="space-y-3 text-gray-700">${itemsHtml}</div>
        `;
    }
    else if (block.type === 'exercise_ai') {
        div.className = `glass-card rounded-[24px] p-4 shadow-lg border-l-8 border-${block.color}-500 mb-6 API-box`;
        let itemsHtml = block.data.map(item => `
            <div class="p-4 bg-white/60 rounded-xl flex flex-col gap-4">
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p class="text-lg font-bold text-gray-700 flex-1">${item.text}</p>
                    <div class="flex gap-2 w-full sm:w-auto items-center">
                        <input type="text" id="ai-${item.id}" placeholder="${item.placeholder}" class="flex-1 sm:w-72 px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-${block.color}-500 focus:outline-none text-base">
                        <button onclick="askAI('${item.id}', '${item.context}')" class="btn btn-secondary w-12 h-12 flex items-center justify-center rounded-lg text-sm font-black shadow-md">✓</button>
                    </div>
                </div>
                <div class="ai-feedback hidden p-4 bg-${block.color}-50 text-${block.color}-800 text-base rounded-lg" id="fb-${item.id}"></div>
            </div>
        `).join('');

        div.innerHTML = `
            <h3 class="font-black text-xl text-gray-800 mb-3 flex items-center">
                <span class="bg-${block.color}-100 text-${block.color}-600 rounded-lg px-3 py-1 text-sm mr-3">${block.title}</span> ${block.subtitle}
            </h3>
            <div class="space-y-3">${itemsHtml}</div>
        `;
    }
    else if (block.type === 'html') {
        div.innerHTML = block.content;
    }
    else if (block.type === 'aside') {
        div.className = "glass-card rounded-[24px] p-6 bg-blue-50/50 border-l-8 border-blue-400 relative overflow-hidden shadow-lg mb-6";
        div.innerHTML = `
            <h2 class="text-2xl font-black text-blue-700 mb-4">${block.title}</h2>
            <div class="space-y-4">${block.content}</div>
        `;
    }

    return div;
}

// Logic for clicking words in Exercise 1
document.addEventListener('click', function (e) {
    // Conflict fix: Ignore if element has its own onclick handler (like LTVC lessons)
    if (e.target.classList.contains('word') && !e.target.hasAttribute('onclick')) {
        e.target.classList.toggle('selected');
        e.target.classList.toggle('text-blue-600');
        e.target.classList.toggle('font-black');
    }
});

function check1(id) {
    const container = document.getElementById(id);
    const correctWords = container.dataset.ans.split(',');
    const selected = Array.from(container.querySelectorAll('.word.selected'));

    // Reset View
    container.querySelectorAll('.word').forEach(w => {
        w.classList.remove('is-correct', 'is-wrong');
        w.classList.remove('selected', 'text-blue-600', 'font-black'); // Clear visually
    });

    let correctCount = 0;

    // Check selected
    selected.forEach(el => {
        const text = el.innerText.replace(/[.,]/g, '').trim();
        if (correctWords.includes(text)) {
            el.classList.add('is-correct');
            correctCount++;
        } else {
            el.classList.add('is-wrong');
        }
    });

    // Check missed (Highlight visually)
    if (correctCount < correctWords.length) {
        // Can add logic to hint
    }
}

function reset1(id) {
    const container = document.getElementById(id);
    container.querySelectorAll('.word').forEach(w => {
        w.className = 'word'; // Reset class
    });
}

function update2(id, val) {
    const container = document.getElementById(id);
    const slots = container.querySelectorAll('.slot');
    if (!val) {
        slots.forEach(s => { s.innerText = '...'; s.classList.remove('filled'); });
        return;
    }
    const parts = val.split('-');
    slots.forEach((s, idx) => {
        if (parts[idx]) {
            s.innerText = parts[idx];
            s.classList.add('filled');
        }
    });
}

function check2(id) {
    const container = document.getElementById(id);
    const correct = container.dataset.ans;
    const select = container.querySelector('select');
    const btn = container.querySelector('button');

    if (select.value === correct) {
        btn.innerHTML = "🎉";
        btn.classList.add('bg-green-500', 'text-white');
    } else {
        btn.innerHTML = "❌";
        btn.classList.add('bg-red-500', 'text-white');
        setTimeout(() => {
            btn.innerHTML = "✓";
            btn.classList.remove('bg-red-500', 'text-white');
        }, 1500);
    }
}

// Accordion Logic
function toggleAccordion(btn) {
    const item = btn.closest('.accordion-item');
    const isActive = item.classList.contains('active');

    // Close all other accordions
    document.querySelectorAll('.accordion-item').forEach(el => {
        el.classList.remove('active');
    });

    // Toggle current
    if (!isActive) {
        item.classList.add('active');
    }
}

// Initialize on Load
window.addEventListener('DOMContentLoaded', initLesson);
