/**
 * Logic xử lý cho trang chủ (index.html)
 * Bao gồm: Menu tuần, Modal, và tạo giao diện động
 */

// Hàm mở modal menu tuần
function openWeekMenuModal(weekId) {
    const modal = document.getElementById('weekMenuModal');
    const content = document.getElementById('weekMenuContent');
    const weekTitle = document.getElementById('week-title-display').querySelector('h3');
    const semesterDisplay = document.getElementById('semester-display');
    const lessonsList = document.getElementById('week-lessons-list');

    // Tìm dữ liệu tuần từ curriculumData
    // Lưu ý: curriculumData cần được load từ data/lessons.js hoặc lessons/index.js (kiểm tra lại nguồn này)
    let weekData = null;
    let currentSemester = "";

    // Kiểm tra xem curriculumData có tồn tại không
    if (typeof curriculumData !== 'undefined') {
        for (const sem in curriculumData) {
            for (const theme of curriculumData[sem]) {
                weekData = theme.weeks.find(w => w.id === weekId);
                if (weekData) {
                    currentSemester = sem;
                    break;
                }
            }
            if (weekData) break;
        }
    } else {
        console.warn("curriculumData chưa được định nghĩa hoặc chưa tải xong.");
    }

    if (!weekData) {
        // Xử lý khi không có dữ liệu hoặc nút Dự phòng
        weekTitle.innerText = weekId === 36 ? "Dự phòng" : `Tuần ${weekId}`;
        semesterDisplay.innerText = "Đang cập nhật";
        lessonsList.innerHTML = `<p class="text-center text-gray-400 py-4 italic">Nội dung đang được soạn thảo...</p>`;
    } else {
        weekTitle.innerText = `Tuần ${weekId}`;
        semesterDisplay.innerText = currentSemester;
        lessonsList.innerHTML = '';

        weekData.lessons.forEach(lesson => {
            const lessonContainer = document.createElement('div');
            lessonContainer.className = "flex flex-col gap-2 p-4 rounded-2xl bg-blue-50/50 border-2 border-blue-100";

            const lessonHeader = document.createElement('div');
            lessonHeader.className = "font-black text-blue-900 text-sm mb-2 pb-2 border-b border-blue-100 flex items-center gap-2";
            lessonHeader.innerHTML = `<span>📖</span> ${lesson.title}`;
            lessonContainer.appendChild(lessonHeader);

            const sections = lesson.sections || [{ title: "Vào bài học", url: lesson.url || "#" }];
            sections.forEach(section => {
                const sectionLink = document.createElement('a');
                sectionLink.href = section.url;
                sectionLink.className = "flex items-center justify-between p-2 rounded-xl bg-white border border-blue-50 hover:border-blue-300 hover:shadow-sm transition-all text-xs font-bold text-gray-700 group";

                // Tách tiêu đề để làm nổi bật phần trước dấu ':'
                const parts = section.title.split(':');
                const displayTitle = parts.length > 1
                    ? `<span class="text-blue-600 mr-1">${parts[0]}:</span><span>${parts.slice(1).join(':')}</span>`
                    : section.title;

                sectionLink.innerHTML = `
                    <span class="flex-1">${displayTitle}</span>
                    <span class="text-blue-300 group-hover:translate-x-1 transition-transform ml-2">→</span>
                `;

                if (section.url === "#") {
                    sectionLink.classList.add('opacity-50', 'cursor-not-allowed');
                    sectionLink.onclick = (e) => e.preventDefault();
                }

                lessonContainer.appendChild(sectionLink);
            });

            lessonsList.appendChild(lessonContainer);
        });
    }

    modal.classList.remove('hidden');
    // Force reflow
    void modal.offsetWidth;
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('flex', 'opacity-100', 'pointer-events-auto');
    content.classList.remove('scale-95');
    content.classList.add('scale-100');
}

// Hàm đóng modal menu tuần
function closeWeekMenuModal() {
    const modal = document.getElementById('weekMenuModal');
    const content = document.getElementById('weekMenuContent');
    modal.classList.remove('opacity-100', 'pointer-events-auto');
    modal.classList.add('opacity-0', 'pointer-events-none');
    content.classList.remove('scale-100');
    content.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    }, 300);
}

// Hàm tạo bàn phím số cho tuần
function generateNumpad() {
    const grid = document.getElementById('week-numpad-grid');
    if (!grid) return;

    // Xóa nội dung cũ nếu có để tránh trùng lặp
    grid.innerHTML = '';

    // Kiểm tra quyền Admin (Chế độ soạn thảo - Ghi nhớ trên máy tính)
    const isAdmin = localStorage.getItem('edu_admin') === 'true';
    console.log("Current Admin Status:", isAdmin);
    const activeWeek = 22;

    for (let i = 1; i <= 36; i++) {
        const btn = document.createElement('button');
        const label = i === 36 ? "DP" : i;

        // Style based on semester (1-18: Sem 1, 19-35: Sem 2)
        let bgColor = "from-blue-500 to-blue-600 shadow-blue-200";
        if (i > 18 && i < 36) bgColor = "from-orange-500 to-orange-600 shadow-orange-200";
        if (i === 36) bgColor = "from-gray-500 to-gray-600 shadow-gray-200";

        btn.className = `aspect-square rounded-xl bg-gradient-to-br ${bgColor} text-white font-black text-sm shadow-md transition-all active:scale-90 hover:-translate-y-0.5 hover:brightness-110`;

        // Logic khóa tuần nếu không phải Admin và không phải tuần Active
        if (!isAdmin && i !== activeWeek) {
            btn.classList.add('opacity-30', 'grayscale', 'cursor-not-allowed', 'pointer-events-none');
            btn.title = "Đang soạn thảo...";
        }

        btn.innerText = label;
        btn.onclick = () => openWeekMenuModal(i);
        grid.appendChild(btn);
    }
}

// Stats Modal Logic (Mock)
function openTeacherStats() {
    const modal = document.getElementById('statsModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

// Khởi tạo
document.addEventListener('DOMContentLoaded', () => {
    generateNumpad();

    // Event listener đóng modal khi click ra ngoài
    const weekModal = document.getElementById('weekMenuModal');
    if (weekModal) {
        weekModal.addEventListener('click', function (e) {
            if (e.target === this) closeWeekMenuModal();
        });
    }
});

// Export globally if needed for inline onclick handlers in HTML
window.openWeekMenuModal = openWeekMenuModal;
window.closeWeekMenuModal = closeWeekMenuModal;
window.openTeacherStats = openTeacherStats;
