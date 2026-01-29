/**
 * Interactive Exercises Logic
 * Used by lesson_viewer.html for custom interactive content (LTVC, etc.)
 */
console.log('Interactive Exercises Loaded');
window.ltvc21_check1 = ltvc21_check1; // Ensure strict global scope
window.ltvc21_reset1 = ltvc21_reset1;
window.ltvc21_check2 = ltvc21_check2;
window.ltvc21_update2 = ltvc21_update2;
window.toggleWord = toggleWord;
window.askAI = askAI;
window.ltvc22_check1 = ltvc22_check1;
window.ltvc22_update2 = ltvc22_update2;
window.ltvc22_check2 = ltvc22_check2;
window.ltvc22_toggle = ltvc22_toggle;

// Global Celebrate Function (Confetti + Sound)
function celebrate() {
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
        audio.play().catch(e => { console.log('Audio play failed', e); });
    }
}

// UI: Global Word Selection Toggle (used in LTVC exercises)
function toggleWord(el) {
    if (!el.closest('.locked')) {
        el.classList.toggle('selected');
    }
}

// --- Week 21 LTVC Exercises ---

// Exercise 1: Click to select words
// Exercise 1: Click to select words
function ltvc21_check1(id) {
    try {
        // Check for duplicate IDs which completely breaks logic
        const duplicates = document.querySelectorAll('#' + id);
        if (duplicates.length > 1) {
            console.error('Duplicate IDs found:', duplicates);
            // Try to use the last one (which might be the visible one) or just fail gracefully?
            // Usually the first one is grabbed by getElementById.
            // If the first one is hidden, and user clicks second, we have a problem.
        }

        const row = document.getElementById(id);
        if (!row) {
            console.error('Không tìm thấy bài tập: ' + id);
            return;
        }

        // Visual debug: Flash the border to show which element is being checked
        const originalBorder = row.style.borderColor;
        row.style.borderColor = '#f59e0b'; // Orange flash
        setTimeout(() => { row.style.borderColor = originalBorder; }, 500);

        const ans = row.getAttribute('data-ans').split(',').map(s => s.trim());
        const words = row.querySelectorAll('.word');
        let right = 0, error = false;
        let selectedCount = 0;

        words.forEach(w => {
            if (w.classList.contains('selected')) {
                selectedCount++;
                const txt = w.innerText.replace(/[.,]/g, "").trim();
                if (ans.includes(txt)) {
                    w.classList.remove('is-wrong');
                    w.classList.add('is-correct');
                    right++;
                } else {
                    w.classList.remove('is-correct');
                    w.classList.add('is-wrong');
                    error = true;
                }
            } else {
                w.classList.remove('is-correct', 'is-wrong');
            }
        });

        if (selectedCount === 0) {
            alert('Em chưa chọn từ nào cả! Hãy bấm vào các từ để chọn nhé.');
            return;
        }

        if (!error && right === ans.length) {
            celebrate();
            row.classList.add('locked');
        } else if (!error && right < ans.length) {
            alert('Em chọn đúng nhưng chưa đủ! Tìm thêm nhé.');
        } else {
            // Wrong selection exists
        }

    } catch (e) {
        alert("Lỗi kiểm tra: " + e.message);
        console.error(e);
    }
}



function ltvc21_reset1(id) {
    const row = document.getElementById(id);
    if (!row) return;
    row.classList.remove('locked');
    row.querySelectorAll('.word').forEach(w => w.classList.remove('selected', 'is-correct', 'is-wrong'));
}

// Exercise 2: Dropdown fill in blank
function ltvc21_update2(id, val) {
    const row = document.getElementById(id);
    if (!row) return;

    const slots = row.querySelectorAll('.slot');
    if (!val) {
        slots[0].innerText = "...";
        slots[1].innerText = "...";
        slots.forEach(s => {
            s.style.color = "var(--accent)";
            s.style.borderBottomColor = "var(--accent)";
            s.classList.remove('filled');
        });
        return;
    }

    const p = val.split('-');
    if (p.length >= 2) {
        slots[0].innerText = p[0];
        slots[1].innerText = p[1];
        slots.forEach(s => {
            s.style.color = "#f59e0b";
            s.style.borderBottomColor = "#f59e0b";
            s.classList.remove('filled');
        });
    }
}

function ltvc21_check2(id) {
    const row = document.getElementById(id);
    if (!row) return;

    const select = row.querySelector('select');
    const val = select.value;
    const slots = row.querySelectorAll('.slot');

    if (val === row.getAttribute('data-ans')) {
        slots.forEach(s => {
            s.style.color = "#22c55e";
            s.style.borderBottomColor = "#22c55e";
            s.classList.add('filled');
        });
        celebrate();
    } else {
        slots.forEach(s => {
            s.style.color = "#ef4444";
            s.style.borderBottomColor = "#ef4444";
            s.classList.remove('filled');
        });
    }
}

// --- Week 22 LTVC Exercises ---

// Exercise 1: Compound sentence detection
function ltvc22_check1(id, btn) {
    const container = document.getElementById(id);
    if (!container) return;
    const items = container.querySelectorAll('.sentence-box');
    let totalCorrect = 0, totalCompound = 0;
    let error = false;

    items.forEach(item => {
        const isCompound = item.getAttribute('data-is-compound') === 'true';
        // Handle connectors - use pipe | as delimiter, but also handle comma-only case
        const connectorsStr = (item.getAttribute('data-connectors') || '').trim();
        let connectors;
        if (connectorsStr === ',') {
            connectors = [',']; // Special case: comma itself is the connector
        } else if (connectorsStr.includes('|')) {
            connectors = connectorsStr.split('|').filter(x => x.trim());
        } else {
            connectors = connectorsStr.split(',').filter(x => x.trim());
        }
        const words = item.querySelectorAll('.word');
        let foundConnectors = 0;

        if (isCompound) {
            totalCompound++;
            words.forEach(w => {
                // Get text - for comma check, keep the comma; for normal words, strip punctuation
                const rawText = w.innerText.trim();
                const txt = rawText === ',' ? ',' : rawText.replace(/[.,]/g, "").toLowerCase().trim();
                if (w.classList.contains('selected')) {
                    if (connectors.includes(txt)) {
                        w.classList.add('is-correct');
                        foundConnectors++;
                    } else {
                        w.classList.add('is-wrong');
                        error = true;
                    }
                }
            });


            // Nếu là câu không có connector (nối trực tiếp)
            if (connectors.length === 0) {
                const directMsg = item.querySelector('.direct-connect-msg');
                if (directMsg) directMsg.classList.remove('hidden');
                totalCorrect++;
            } else if (foundConnectors === connectors.length && foundConnectors > 0 && !error) {
                totalCorrect++;
            }
        } else {
            words.forEach(w => {
                if (w.classList.contains('selected')) {
                    w.classList.add('is-wrong');
                    error = true;
                }
            });
        }
    });

    if (!error && totalCorrect === totalCompound) {
        celebrate();
        items.forEach(item => item.classList.add('locked'));
        if (btn) {
            btn.innerHTML = "🎉";
            btn.classList.remove('btn-primary');
            btn.classList.add('bg-green-500', 'text-white', 'scale-110');
        }
    } else {
        if (btn) {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = "❌";
            btn.classList.add('bg-red-500', 'text-white', 'shake');
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.classList.remove('bg-red-500', 'text-white', 'shake');
            }, 1000);
        }
    }
}

// Exercise 2: Fill in blanks
function ltvc22_update2(id, val) {
    const row = document.getElementById(id);
    if (!row) return;
    const slots = row.querySelectorAll('.slot');
    if (!val) { slots[0].innerText = "🌸"; slots[1].innerText = "🌸"; return; }
    const p = val.split('-');
    if (p.length >= 2) {
        slots[0].innerText = p[0]; slots[1].innerText = p[1];
        slots.forEach(s => { s.style.color = "#f59e0b"; });
    }
}

function ltvc22_check2(id) {
    const row = document.getElementById(id);
    if (!row) return;
    const sel = row.querySelector('select').value;
    const slots = row.querySelectorAll('.slot');
    if (sel === row.getAttribute('data-ans')) {
        slots.forEach(s => { s.style.color = "#22c55e"; });
        celebrate();
    } else {
        slots.forEach(s => { s.style.color = "#ef4444"; });
    }

}
function ltvc22_toggle(el) {
    const container = el.nextElementSibling;
    if (container && container.classList.contains('words-container')) {
        const isHidden = container.classList.contains('hidden');
        container.classList.toggle('hidden');
        // Hide/show preview text when expanded/collapsed
        if (isHidden) {
            el.classList.add('hidden');
            // Add close button if not exists
            if (!container.querySelector('.ltvc-close-btn')) {
                const closeBtn = document.createElement('button');
                closeBtn.className = 'ltvc-close-btn absolute top-1 right-1 w-6 h-6 rounded-full bg-gray-200 hover:bg-red-400 hover:text-white flex items-center justify-center text-gray-500 text-xs font-bold transition-colors z-10';
                closeBtn.innerHTML = '✕';
                closeBtn.onclick = function (e) {
                    e.stopPropagation();
                    container.classList.add('hidden');
                    el.classList.remove('hidden');
                };
                container.style.position = 'relative';
                container.insertBefore(closeBtn, container.firstChild);

                // Add sentence number header
                const numSpan = el.querySelector('span');
                const sentenceNum = numSpan ? numSpan.textContent : '';
                const header = document.createElement('span');
                header.className = 'w-full text-xs font-black text-blue-500 mb-2 block';
                header.textContent = sentenceNum + ' Chọn từ nối:';
                container.insertBefore(header, container.firstChild);
            }
        } else {
            el.classList.remove('hidden');
        }
    }
}

// --- Lesson 221-viet Special Functions ---

function rateViet(starElement, count) {
    const parent = starElement.parentElement;
    const stars = parent.querySelectorAll('.star-btn');
    for (let i = 0; i < stars.length; i++) {
        if (i < count) {
            stars[i].textContent = '★';
            stars[i].style.color = '#facc15';
        } else {
            stars[i].textContent = '☆';
            stars[i].style.color = '#9ca3af';
        }
    }
    if (count === 5 && typeof confetti === 'function') {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 }, colors: ['#facc15', '#fbbf24', '#f59e0b'] });
    }
}

async function checkVietAI(inputId, questionPart) {
    const val = document.getElementById(inputId).value.trim();
    const feedbackBox = document.getElementById('feedback-' + inputId);

    if (!val) {
        alert("Em ơi, hãy viết câu văn của mình vào chỗ trống trước nhé!");
        return;
    }

    feedbackBox.classList.remove('hidden');
    feedbackBox.innerHTML = '<span class="flex items-center gap-2">⏳ Thầy AI đang đọc và nhận xét bài của em...</span>';

    var requirement = '';
    if (questionPart === 'a') {
        requirement = 'Câu 3a yêu cầu học sinh viết câu văn tả người sử dụng TỪ NGỮ GIÀU SỨC GỢI TẢ hoặc HÌNH ẢNH SO SÁNH gây ấn tượng (ví dụ: như, tựa như, giống như...)';
    } else if (questionPart === 'b') {
        requirement = 'Câu 3b yêu cầu học sinh viết câu văn tả người thể hiện SUY NGHĨ, CẢM XÚC, TÌNH CẢM của người viết đối với người được tả (ví dụ: yêu quý, kính trọng, nhớ thương, biết ơn...)';
    }

    try {
        const response = await fetch('/.netlify/functions/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sentence: val,
                mode: 'sentence_review',
                criteria: requirement,
                subject: 'Viết',
                weekNumber: 21
            })
        });

        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        var result;
        if (typeof data === 'string') {
            try { result = JSON.parse(data); } catch (e) { result = { is_good: true, feedback: data }; }
        } else if (data.response) {
            try { result = JSON.parse(data.response); } catch (e) { result = { is_good: true, feedback: data.response }; }
        } else {
            result = data;
        }

        var icon = result.is_good ? '🌟' : '💡';
        var bgClass = result.is_good ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200';
        var textClass = result.is_good ? 'text-green-800' : 'text-orange-800';

        feedbackBox.className = 'p-4 rounded-xl text-sm font-medium border ' + bgClass;
        feedbackBox.innerHTML = '<div class="flex flex-col gap-2"><div class="font-bold text-base ' + textClass + '">' + icon + ' ' + (result.feedback || 'Bài làm tốt lắm!') + '</div>' + (result.suggestion ? '<div class="text-xs italic text-gray-600 bg-white/50 p-2 rounded-lg">💡 Gợi ý: ' + result.suggestion + '</div>' : '') + '</div>';

        if (result.is_good && typeof confetti === 'function') {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#22c55e', '#10b981', '#34d399'] });
        }
    } catch (error) {
        console.error('Error:', error);

        // --- MOCK FALLBACK FOR LOCAL/OFFLINE TESTING ---
        if (window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            // Simulate AI Response if real API fails (likely due to local enf)
            console.warn('Running in Mock/Offline Mode');

            // Fake delay
            await new Promise(r => setTimeout(r, 2000));

            const isA = questionPart === 'a';
            const isGood = val.length > 20; // Simple check

            const mockResult = {
                is_good: isGood,
                feedback: isGood
                    ? "Câu văn của em rất hay và giàu hình ảnh! (Chế độ Thử nghiệm)"
                    : "Em viết hơi ngắn, hãy thử thêm các từ gợi tả nhé! (Chế độ Thử nghiệm)",
                suggestion: isGood ? "" : "Ví dụ: Thêm từ 'như', 'tựa như'..."
            };

            var bgClass = mockResult.is_good ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200';
            var textClass = mockResult.is_good ? 'text-green-800' : 'text-orange-800';
            var icon = mockResult.is_good ? '🌟' : '💡';

            feedbackBox.className = 'p-4 rounded-xl text-sm font-medium border ' + bgClass;
            feedbackBox.innerHTML = '<div class="flex flex-col gap-2"><div class="font-bold text-base ' + textClass + '">' + icon + ' ' + mockResult.feedback + '</div>' + (mockResult.suggestion ? '<div class="text-xs italic text-gray-600 bg-white/50 p-2 rounded-lg">💡 Gợi ý: ' + mockResult.suggestion + '</div>' : '') + '</div>';

            if (mockResult.is_good && typeof confetti === 'function') {
                confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#22c55e', '#10b981', '#34d399'] });
            }
            return; // Success handled by mock
        }
        // ------------------------------------------------

        feedbackBox.className = 'p-4 rounded-xl text-sm font-medium border bg-red-50 border-red-200';
        feedbackBox.innerHTML = '<span class="text-red-600">❌ Có lỗi xảy ra: ' + error.message + '</span>';
    }
}

// Expose to window
window.rateViet = rateViet;
window.checkVietAI = checkVietAI;
