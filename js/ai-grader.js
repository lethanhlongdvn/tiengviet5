/**
 * EduRobot AI Grader Integration
 * Handles communication between the frontend and the Netlify grading function.
 */

async function askAI(id, prefix = "") {
    const input = document.getElementById('ai-' + id);
    const feedback = document.getElementById('fb-' + id);
    const userInput = input.value.trim();

    if (!userInput) {
        alert("Em hãy viết câu trước nhé!");
        return;
    }

    // Auto-detect prefix if possible (more robust against cache)
    if (!prefix) {
        // Find the p tag in the same exercise box (p-4)
        const box = input.closest('.p-4');
        const questionText = box?.querySelector('p')?.innerText || "";

        if (questionText.includes('...') || questionText.endsWith('mà') || questionText.endsWith('nhưng')) {
            // Remove lesson index like "a. " or "b. ", remove dots, then trim
            prefix = questionText
                .replace(/^[a-z]\.\s+/i, "")
                .replace(/\.\.\.*$/, "")
                .trim();
        }
    }

    const sentence = (prefix + " " + userInput).trim();

    // UI: Loading state
    feedback.classList.remove('hidden');
    feedback.innerHTML = `
        <div class="flex items-center space-x-2">
            <svg class="animate-spin h-4 w-4 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="font-bold">🤖 EduRobot đang chấm bài...</span>
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
        feedback.innerHTML = `🤖 <b>Lỗi:</b> Không thể kết nối với EduRobot. Em hãy thử lại sau nhé!`;
    }
}

function renderFeedback(container, data) {
    let html = `
        <div class="space-y-3">
            <div class="p-3 bg-white/50 rounded-lg border border-purple-100 italic text-gray-700">
                "${data.feedback}"
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
    `;

    data.clauses.forEach((clause, index) => {
        html += `
            <div class="p-2 bg-purple-100/50 rounded-lg text-xs">
                <div class="font-black text-purple-700 mb-1">Vế ${index + 1}:</div>
                <div class="flex flex-col space-y-1">
                    <div><span class="font-bold text-gray-500 uppercase text-[9px]">Chủ ngữ:</span> ${clause.subject}</div>
                    <div><span class="font-bold text-gray-500 uppercase text-[9px]">Vị ngữ:</span> ${clause.predicate}</div>
                </div>
            </div>
        `;
    });

    html += `
            </div>
            <div class="flex justify-between items-center pt-2 border-t border-purple-200">
                <span class="text-[10px] font-black uppercase text-purple-400">Quan hệ: ${data.relationship}</span>
                <span class="px-2 py-1 bg-purple-600 text-white text-xs font-black rounded-md">ĐIỂM: ${data.grade}/10</span>
            </div>
        </div>
    `;

    container.innerHTML = html;
}
