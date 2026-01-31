// JavaScript functions cho bài 231-LTVC: Luyện tập về câu ghép

// Đáp án đúng cho bài tập 1
const correctAnswers = {
    'b1': 'hop',        // Câu 1: Hỗn hợp (có cả "khi" và dấu phẩy)
    'b2': 'chinhphu',   // Câu 2: Chính-phụ (có "để")
    'b3': 'dongvi',     // Câu 3: Đồng vị (hai vế ngang hàng, dấu phẩy)
    'b4': 'dongvi',     // Câu 4: Đồng vị (hai vế ngang hàng, dấu phẩy)
    'b5': 'chinhphu'    // Câu 5: Chính-phụ (có "vì... nên")
};

// Đáp án đúng cho bài tập 2 (nối câu)
const correctConnections = {
    'a1': 'b3', // Các thanh niên leo lên cây chuối để lấy nén hương trên ngọn
    'a2': 'b1', // Người nấu cơm tay giữ cần, tay cầm đuốc đung đưa cho lửa bập bùng
    'a3': 'b2', // Các nồi cơm được trình ra, ban giám khảo chấm điểm rất kỹ
    'a4': 'b4'  // Hội thổi cơm thi rất sôi nổi nên thu hút rất đông người xem
};

// Kết quả nối của người dùng
let userConnections = {};

// Kiểm tra đáp án bài tập 1
function checkAnswer(questionId, answer) {
    const feedback = document.getElementById(`feedback-${questionId}`);
    const isCorrect = correctAnswers[questionId] === answer;
    
    // Disable tất cả buttons của câu này
    const buttons = document.querySelectorAll(`#${questionId}`).forEach(btn => {
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');
    });
    
    if (isCorrect) {
        feedback.className = 'mt-4 p-4 rounded-xl bg-green-100 border border-green-300 text-green-700 feedback-animation';
        feedback.innerHTML = `
            <div class="flex items-center">
                <span class="text-2xl mr-3">✅</span>
                <div>
                    <p class="font-bold">Chính xác!</p>
                    <p class="text-sm mt-1">${getExplanation(questionId)}</p>
                </div>
            </div>
        `;
    } else {
        feedback.className = 'mt-4 p-4 rounded-xl bg-red-100 border border-red-300 text-red-700 feedback-animation';
        feedback.innerHTML = `
            <div class="flex items-center">
                <span class="text-2xl mr-3">❌</span>
                <div>
                    <p class="font-bold">Chưa chính xác!</p>
                    <p class="text-sm mt-1">Đáp án đúng là: ${getCorrectAnswerText(questionId)}</p>
                    <p class="text-sm mt-1">${getExplanation(questionId)}</p>
                </div>
            </div>
        `;
    }
    feedback.classList.remove('hidden');
}

// Lấy giải thích cho từng câu
function getExplanation(questionId) {
    const explanations = {
        'b1': 'Câu này có cả quan hệ chính-phụ ("khi") và quan hệ đồng vị (dấu phẩy), nên là câu ghép hỗn hợp.',
        'b2': 'Câu này có từ nối "để" thể hiện quan hệ mục đích, vế phụ bổ sung cho vế chính.',
        'b3': 'Câu này có hai vế câu ngang hàng, không vế nào phụ thuộc vế nào, nối bằng dấu phẩy.',
        'b4': 'Câu này có hai vế câu ngang hàng, diễn ra theo trình tự thời gian, nối bằng dấu phẩy.',
        'b5': 'Câu này có cặp từ nối "vì... nên" thể hiện quan hệ nguyên nhân - kết quả.'
    };
    return explanations[questionId] || '';
}

// Lấy text đáp án đúng
function getCorrectAnswerText(questionId) {
    const correctAnswer = correctAnswers[questionId];
    const answerTexts = {
        'dongvi': 'A. Câu ghép đồng vị',
        'chinhphu': 'B. Câu ghép chính-phụ',
        'hop': 'C. Câu ghép hỗn hợp'
    };
    return answerTexts[correctAnswer] || '';
}

// Drag and drop cho bài tập 2
let draggedElement = null;

// Khởi tạo drag and drop
document.addEventListener('DOMContentLoaded', function() {
    // Thêm event listeners cho các element có thể kéo
    const draggables = document.querySelectorAll('[draggable="true"]');
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', handleDragStart);
        draggable.addEventListener('dragend', handleDragEnd);
    });
    
    // Thêm event listeners cho các drop zones
    const dropZones = document.querySelectorAll('#col-a, #col-b, #ketqua-noi');
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
    });
});

function handleDragStart(e) {
    draggedElement = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    
    if (draggedElement && draggedElement !== e.target) {
        // Xử lý việc nối câu
        const draggedId = draggedElement.getAttribute('data-id');
        const targetId = e.target.getAttribute('data-id');
        
        if (targetId && draggedId && draggedId !== targetId) {
            // Lưu kết quả nối
            userConnections[draggedId] = targetId;
            
            // Hiển thị kết quả nối
            updateConnectionDisplay();
            
            // Thêm hiệu ứng visual
            e.target.classList.add('ring-2', 'ring-teal-500');
            setTimeout(() => {
                e.target.classList.remove('ring-2', 'ring-teal-500');
            }, 1000);
        }
    }
    
    return false;
}

// Cập nhật hiển thị kết quả nối
function updateConnectionDisplay() {
    const display = document.getElementById('ketqua-noi');
    if (Object.keys(userConnections).length === 0) {
        display.innerHTML = '<p class="text-gray-500 italic">Kéo thả các câu ở trên để nối chúng lại...</p>';
        return;
    }
    
    let html = '';
    for (const [aId, bId] of Object.entries(userConnections)) {
        const aElement = document.querySelector(`[data-id="${aId}"]`);
        const bElement = document.querySelector(`[data-id="${bId}"]`);
        
        if (aElement && bElement) {
            const aText = aElement.querySelector('p').textContent;
            const bText = bElement.querySelector('p').textContent;
            html += `
                <div class="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <span class="font-bold text-teal-600">${aText}</span>
                    <span class="text-gray-500">↔</span>
                    <span class="font-bold text-orange-600">${bText}</span>
                </div>
            `;
        }
    }
    display.innerHTML = html;
}

// Kiểm tra kết quả nối câu
function checkConnections() {
    if (Object.keys(userConnections).length === 0) {
        alert('Vui lòng nối các câu trước khi kiểm tra!');
        return;
    }
    
    let correctCount = 0;
    const totalQuestions = Object.keys(correctConnections).length;
    
    // Kiểm tra từng kết nối
    for (const [aId, correctBId] of Object.entries(correctConnections)) {
        if (userConnections[aId] === correctBId) {
            correctCount++;
        }
    }
    
    // Hiển thị kết quả
    const score = Math.round((correctCount / totalQuestions) * 100);
    const display = document.getElementById('ketqua-noi');
    
    let resultHtml = `
        <div class="p-4 rounded-xl ${score >= 75 ? 'bg-green-100 border border-green-300' : 'bg-yellow-100 border border-yellow-300'}">
            <p class="font-bold text-lg mb-2">
                ${score >= 75 ? '🎉 Tốt!' : '💪 Cần cố gắng!'} 
                Đúng ${correctCount}/${totalQuestions} câu (${score}%)
            </p>
    `;
    
    if (score < totalQuestions) {
        resultHtml += '<p class="text-sm mt-2"><strong>Các đáp án đúng:</strong></p>';
        for (const [aId, bId] of Object.entries(correctConnections)) {
            const aElement = document.querySelector(`[data-id="${aId}"]`);
            const bElement = document.querySelector(`[data-id="${bId}"]`);
            if (aElement && bElement) {
                const aText = aElement.querySelector('p').textContent.replace(/[AB]\d+\.\s*/, '');
                const bText = bElement.querySelector('p').textContent.replace(/[AB]\d+\.\s*/, '');
                resultHtml += `<p class="text-sm">• ${aText} ↔ ${bText}</p>`;
            }
        }
    }
    
    resultHtml += '</div>';
    display.innerHTML = resultHtml;
}

// Reset kết quả nối
function resetConnections() {
    userConnections = {};
    updateConnectionDisplay();
    
    // Reset visual effects
    document.querySelectorAll('[data-id]').forEach(element => {
        element.classList.remove('ring-2', 'ring-teal-500', 'ring-green-500', 'ring-red-500');
    });
}

// Kiểm tra câu ghép viết
function checkCauGhep(yeuCau) {
    const input = document.getElementById(`cau-ghép-${yeuCau}`);
    const feedback = document.getElementById(`feedback-cau-${yeuCau}`);
    const cau = input.value.trim();
    
    if (!cau) {
        feedback.className = 'mt-3 p-4 rounded-xl bg-yellow-100 border border-yellow-300 text-yellow-700';
        feedback.innerHTML = '⚠️ Vui lòng nhập câu trước khi kiểm tra!';
        feedback.classList.remove('hidden');
        return;
    }
    
    let isCorrect = false;
    let explanation = '';
    
    switch(yeuCau) {
        case '1': // Nguyên nhân - kết quả
            isCorrect = cau.includes('vì') && cau.includes('nên');
            explanation = isCorrect ? 
                '✅ Chính xác! Bạn đã dùng đúng cặp từ nối "vì... nên" để thể hiện quan hệ nguyên nhân - kết quả.' :
                '❌ Chưa chính xác! Câu cần có cặp từ nối "vì... nên" để thể hiện quan hệ nguyên nhân - kết quả.';
            break;
            
        case '2': // Đối lập
            isCorrect = cau.includes('tuy nhiên');
            explanation = isCorrect ? 
                '✅ Chính xác! Bạn đã dùng đúng từ nối "tuy nhiên" để thể hiện quan hệ đối lập.' :
                '❌ Chưa chính xác! Câu cần có từ nối "tuy nhiên" để thể hiện quan hệ đối lập.';
            break;
            
        case '3': // Mục đích
            isCorrect = cau.includes('để');
            explanation = isCorrect ? 
                '✅ Chính xác! Bạn đã dùng đúng từ nối "để" để thể hiện quan hệ mục đích.' :
                '❌ Chưa chính xác! Câu cần có từ nối "để" để thể hiện quan hệ mục đích.';
            break;
    }
    
    feedback.className = `mt-3 p-4 rounded-xl ${isCorrect ? 'bg-green-100 border border-green-300 text-green-700' : 'bg-red-100 border border-red-300 text-red-700'} feedback-animation`;
    feedback.innerHTML = explanation;
    feedback.classList.remove('hidden');
}

// Nộp bài LTVC 231
function submitLTVC231() {
    // Kiểm tra xem học sinh đã làm bài chưa
    const baiTap1Done = document.querySelectorAll('[id^="feedback-b"].hidden').length === 0;
    const baiTap2Done = Object.keys(userConnections).length > 0;
    const baiTap3Inputs = ['cau-ghép-1', 'cau-ghép-2', 'cau-ghép-3'];
    const baiTap3Done = baiTap3Inputs.some(id => document.getElementById(id).value.trim() !== '');
    
    if (!baiTap1Done && !baiTap2Done && !baiTap3Done) {
        alert('Vui lòng làm ít nhất một bài tập trước khi nộp!');
        return;
    }
    
    // Tính điểm
    let score = 0;
    let maxScore = 100;
    
    // Điểm bài tập 1 (40 điểm)
    if (baiTap1Done) {
        let correctCount = 0;
        for (const [questionId, correctAnswer] of Object.entries(correctAnswers)) {
            const feedback = document.getElementById(`feedback-${questionId}`);
            if (feedback && !feedback.classList.contains('hidden')) {
                if (feedback.classList.contains('bg-green-100')) {
                    correctCount++;
                }
            }
        }
        score += (correctCount / Object.keys(correctAnswers).length) * 40;
    }
    
    // Điểm bài tập 2 (30 điểm)
    if (baiTap2Done) {
        let correctCount = 0;
        for (const [aId, correctBId] of Object.entries(correctConnections)) {
            if (userConnections[aId] === correctBId) {
                correctCount++;
            }
        }
        score += (correctCount / Object.keys(correctConnections).length) * 30;
    }
    
    // Điểm bài tập 3 (30 điểm)
    if (baiTap3Done) {
        let correctCount = 0;
        for (let i = 1; i <= 3; i++) {
            const input = document.getElementById(`cau-ghép-${i}`);
            if (input && input.value.trim()) {
                const feedback = document.getElementById(`feedback-cau-${i}`);
                if (feedback && feedback.classList.contains('bg-green-100')) {
                    correctCount++;
                }
            }
        }
        score += (correctCount / 3) * 30;
    }
    
    // Hiển thị kết quả
    const finalScore = Math.round(score);
    const resultMessage = finalScore >= 80 ? 'Xuất sắc!' : 
                         finalScore >= 60 ? 'Khá tốt!' : 
                         finalScore >= 40 ? 'Cần cố gắng!' : 'Hãy luyện tập thêm!';
    
    // Hiển thị modal kết quả
    showResultModal(finalScore, resultMessage);
    
    // Lưu kết quả vào Firebase (nếu có)
    saveToFirebase(finalScore);
}

// Hiển thị modal kết quả
function showResultModal(score, message) {
    // Tạo modal nếu chưa có
    let modal = document.getElementById('result-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'result-modal';
        modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4';
        modal.innerHTML = `
            <div class="bg-white rounded-[32px] p-8 max-w-md w-full text-center shadow-2xl">
                <div class="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6">
                    📝
                </div>
                <h2 class="text-3xl font-black text-gray-800 mb-2">Hoàn thành!</h2>
                <div class="text-5xl font-black text-purple-600 mb-4">${score}</div>
                <p class="text-gray-600 font-bold mb-6">${message}</p>
                <button onclick="closeResultModal()" class="bg-purple-600 hover:bg-purple-700 text-white font-black py-3 px-8 rounded-xl transition-all">
                    Đóng
                </button>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    modal.classList.remove('hidden');
}

// Đóng modal kết quả
function closeResultModal() {
    const modal = document.getElementById('result-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Lưu kết quả vào Firebase
function saveToFirebase(score) {
    // Kiểm tra xem Firebase có sẵn không
    if (typeof firebase !== 'undefined' && firebase.firestore) {
        const data = {
            lessonTitle: 'Luyện tập về câu ghép',
            score: score,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            week: 23,
            subject: 'LTVC'
        };
        
        // Lưu vào collection quiz_results
        firebase.firestore().collection('ltvc_results').add(data)
            .then(() => {
                console.log('Kết quả đã được lưu vào Firebase:', data);
            })
            .catch((error) => {
                console.error('Lỗi khi lưu kết quả:', error);
            });
    }
}

// Thêm CSS animation
const style = document.createElement('style');
style.textContent = `
    .feedback-animation {
        animation: slideIn 0.3s ease-out;
    }
    
    @keyframes slideIn {
        from { 
            opacity: 0; 
            transform: translateY(-10px); 
        }
        to { 
            opacity: 1; 
            transform: translateY(0); 
        }
    }
    
    .dragging {
        opacity: 0.5;
        transform: scale(1.05);
        cursor: grabbing !important;
    }
    
    [draggable="true"] {
        cursor: grab;
        transition: all 0.2s ease;
    }
    
    [draggable="true"]:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
`;
document.head.appendChild(style);
