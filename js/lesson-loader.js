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

    let html = `<div class="max-w-3xl mx-auto space-y-6" id="quiz-list">`;

    questions.forEach((q, index) => {
        let optionsHtml = '';
        q.a.forEach((opt, i) => {
            optionsHtml += `
                <label class="flex items-center p-4 rounded-xl border-2 border-transparent bg-white/60 hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-all group">
                    <input type="radio" name="q${index}" value="${i}" onclick="checkQuiz(${index}, ${i}, ${q.c})" class="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300">
                    <span class="ml-3 text-lg text-gray-700 font-medium group-hover:text-blue-800">${opt}</span>
                    <span class="ml-auto hidden status-icon status-${index}-${i}"></span>
                </label>
            `;
        });

        html += `
            <div class="glass-card p-6 rounded-[24px] shadow-lg border-l-8 border-indigo-400 relative overflow-hidden quiz-card" id="quiz-card-${index}">
                 <div class="absolute -right-4 -top-4 w-24 h-24 bg-indigo-100 rounded-full opacity-50 blur-xl"></div>
                 <h3 class="relative text-xl font-bold text-gray-800 mb-4 flex items-start">
                    <span class="bg-indigo-100 text-indigo-600 rounded-lg px-3 py-1 text-sm mr-3 shrink-0 mt-0.5">Câu ${index + 1}</span>
                    ${q.q}
                 </h3>
                 <div class="space-y-3 relative z-10 grid grid-cols-1 gap-2">
                    ${optionsHtml}
                 </div>
                 <div class="mt-4 hidden p-3 rounded-lg bg-green-100/50 text-green-700 text-sm font-bold" id="quiz-feedback-${index}"></div>
            </div>
        `;
    });

    html += `
        <div class="text-center pt-8 pb-12 flex justify-center gap-4">
            <button onclick="resetQuiz()" class="btn btn-outline px-8 py-3 rounded-xl bg-white hover:bg-gray-50 text-gray-500 font-bold shadow-sm">Làm lại</button>
            <button onclick="submitQuizResult()" class="btn btn-success px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">🚀 NỘP BÀI</button>
        </div>
    </div>`;

    container.innerHTML = html;
}

// Track score state
window.quizScore = 0;
window.quizTotal = 0;

function checkQuiz(qIndex, selectedIndex, correctIndex) {
    const card = document.getElementById(`quiz-card-${qIndex}`);
    const feedback = document.getElementById(`quiz-feedback-${qIndex}`);
    const inputs = card.querySelectorAll('input');

    // Disable all inputs in this question
    inputs.forEach(input => input.disabled = true);

    const isCorrect = selectedIndex === correctIndex;
    const statusIcon = card.querySelector(`.status-${qIndex}-${selectedIndex}`);

    // Update score
    if (typeof window.quizScore === 'undefined') window.quizScore = 0;
    if (isCorrect) window.quizScore++;

    if (isCorrect) {
        statusIcon.classList.remove('hidden');
        statusIcon.innerHTML = '<svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>';
        statusIcon.parentElement.classList.add('bg-green-50', 'border-green-400');
        statusIcon.parentElement.classList.remove('bg-white/60');

        feedback.classList.remove('hidden');
        feedback.className = "mt-4 p-3 rounded-lg bg-green-100 text-green-700 text-base font-bold animate-pulse";
        feedback.innerHTML = "🎉 Chính xác! Bạn giỏi quá!";

        // Confetti effect
        if (typeof confetti === 'function') {
            confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 }, colors: ['#22c55e', '#86efac'] });
        }

    } else {
        statusIcon.classList.remove('hidden');
        statusIcon.innerHTML = '❌';
        statusIcon.parentElement.classList.add('bg-red-50', 'border-red-300');
        statusIcon.parentElement.classList.remove('bg-white/60');

        // Highlight correct answer
        const correctInput = card.querySelector(`input[value="${correctIndex}"]`);
        if (correctInput) {
            correctInput.parentElement.classList.add('bg-green-50', 'border-green-300', 'ring-2', 'ring-green-200');
        }

        feedback.classList.remove('hidden');
        feedback.className = "mt-4 p-3 rounded-lg bg-red-100 text-red-700 text-base font-bold";
        feedback.innerHTML = "😅 Tiếc quá, chưa đúng rồi.";
    }
}

async function submitQuizResult() {
    // Calculate final score
    const totalQuestions = window.currentQuizQuestions ? window.currentQuizQuestions.length : 0;
    const correctCount = window.quizScore || 0;
    const score10 = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 10) : 0;
    const score100 = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    // Get Student Info
    const name = document.getElementById('studentName')?.value || 'Học sinh'; // Fallback if input missing
    const cls = document.getElementById('studentClass')?.value || '5/1';

    // Check if we have student info inputs available (might be in a modal or hidden)
    // For now, let's assume we prompt if missing or use defaults for demo
    // Ideally, we should have a "Start Quiz" screen that asks for name first, like the original.
    // But since renderQuiz replaced everything, we might have lost the inputs if they were in the previous view.
    // We'll rely on global getStudentInfo() if available or prompt.

    let studentData = { name, cls, school: 'Tiểu học Đỗ Văn Nại' };

    // Attempt to find inputs if they exist elsewhere or prompt
    if (name === 'Học sinh' && typeof prompt === 'function') {
        const pName = prompt("Chúc mừng em đã hoàn thành! Hãy nhập tên của em để nộp bài:");
        if (pName) studentData.name = pName;
    }

    const data = {
        studentName: studentData.name,
        studentClass: studentData.cls,
        studentSchool: studentData.school,
        lessonTitle: document.title.replace(' - EduRobot', ''),
        score: score100, // Store as 0-100
        correctCount: correctCount,
        totalQuestions: totalQuestions,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        type: 'quiz'
    };

    try {
        await db.collection("quiz_results").add(data);
        alert(`Nộp bài thành công!\nĐiểm của em: ${score10}/10 (${correctCount}/${totalQuestions} câu đúng)`);
        if (typeof celebrate === 'function') celebrate();
    } catch (error) {
        console.error("Error saving quiz:", error);
        alert("Lỗi khi nộp bài. Vui lòng thử lại!");
    }
}

function resetQuiz() {
    window.location.reload();
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

    return div;
}

// Logic for clicking words in Exercise 1
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('word')) {
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

// Initialize on Load
window.addEventListener('DOMContentLoaded', initLesson);
