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
