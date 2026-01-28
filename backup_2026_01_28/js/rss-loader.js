// Global functions for Modal Control
function openNewsModal() {
    const modal = document.getElementById('newsModal');
    const content = document.getElementById('newsModalContent');
    if (modal) {
        modal.classList.remove('hidden');
        // Trigger reflow
        void modal.offsetWidth;
        modal.classList.remove('opacity-0', 'pointer-events-none');

        if (content) {
            content.classList.remove('scale-95');
            content.classList.add('scale-100');
        }

        // Fetch news when opened (lazy load)
        loadEduNews();
    }
}

function closeNewsModal() {
    const modal = document.getElementById('newsModal');
    const content = document.getElementById('newsModalContent');
    if (modal) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        if (content) {
            content.classList.remove('scale-100');
            content.classList.add('scale-95');
        }

        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

// Close on click outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('newsModal');
    const content = document.getElementById('newsModalContent');
    if (modal && !modal.classList.contains('hidden') && !content.contains(e.target) && !e.target.closest('[onclick="openNewsModal()"]')) {
        closeNewsModal();
    }
});

let isNewsLoaded = false;

async function loadEduNews() {
    if (isNewsLoaded) return; // Prevent re-fetching if already loaded in this session

    const rssUrl = 'https://thanhnien.vn/rss/giao-duc/phu-huynh.rss';
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    const listContainer = document.getElementById('rss-feed-list');

    try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data.status === 'ok') {
            if (!listContainer) return;

            let htmlContent = '';

            // Render simple list of titles (max 5 items)
            data.items.slice(0, 5).forEach(item => {
                const pubDate = new Date(item.pubDate);
                const formattedDate = pubDate.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });

                htmlContent += `
                <a href="${item.link}" target="_blank" class="block p-4 hover:bg-green-50 transition-colors group">
                    <div class="flex items-start">
                        <span class="text-[10px] font-bold text-gray-400 mt-1 min-w-[60px] flex items-center">
                            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            ${formattedDate}
                        </span>
                        <div>
                            <h4 class="text-sm font-bold text-gray-700 group-hover:text-green-700 transition-colors mb-1 leading-snug">
                                ${item.title}
                            </h4>
                            <div class="text-xs text-green-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                                Đọc bài viết <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>
                    </div>
                </a>
                `;
            });

            listContainer.innerHTML = htmlContent;
            isNewsLoaded = true; // Mark as loaded
        }
    } catch (e) {
        console.error("Lỗi cập nhật tin tức EduRobot:", e);
        if (listContainer) {
            listContainer.innerHTML = '<div class="text-center py-6 text-red-400 text-sm">Không thể tải tin tức lúc này.</div>';
        }
    }
}
