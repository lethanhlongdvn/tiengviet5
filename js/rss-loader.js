async function loadEduNews() {
    // RSS URL from Thanh Nien Newspaper (Parents Corner)
    const rssUrl = 'https://thanhnien.vn/rss/giao-duc/phu-huynh.rss';
    // Use rss2json API to convert RSS to JSON
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data.status === 'ok') {
            const grid = document.getElementById('news-grid');
            if (!grid) return;

            // Generate HTML string first to minimize re-renders
            let htmlContent = '';

            // Take top 3 items to fit the 3-column grid
            data.items.slice(0, 3).forEach(item => {
                // 1. Format Date (DD/MM/YYYY)
                const pubDate = new Date(item.pubDate);
                const formattedDate = pubDate.toLocaleDateString('vi-VN');

                // 2. Extract Thumbnail
                // Priority: item.thumbnail -> img tag in description -> Default Placeholder
                let thumb = item.thumbnail;
                if (!thumb) {
                    const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
                    thumb = imgMatch ? imgMatch[1] : 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80';
                }

                // 3. Clean Description (Remove HTML tags and truncate)
                // Create a temp div to strip HTML entities properly if needed, but regex is usually enough for simple RSS
                const cleanDesc = item.description.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...';

                // 4. Construct Card HTML using existing Tailwind & Glassmorphism classes
                htmlContent += `
                <article class="glass-card rounded-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
                    <div class="h-48 overflow-hidden relative">
                        <img src="${thumb}" alt="${item.title}" 
                             class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-black text-green-600 uppercase tracking-wider shadow-sm">
                            Góc phụ huynh
                        </div>
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <div class="flex items-center text-xs text-gray-500 font-bold mb-3 space-x-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                </path>
                            </svg>
                            <span>${formattedDate}</span>
                        </div>
                        <a href="${item.link}" target="_blank" 
                           class="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                           ${item.title}
                        </a>
                        <p class="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
                            ${cleanDesc}
                        </p>
                        <div class="mt-auto">
                            <a href="${item.link}" target="_blank" class="text-xs font-bold text-blue-500 hover:text-blue-700 uppercase tracking-wider flex items-center">
                                Xem chi tiết
                                <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>
                `;
            });

            grid.innerHTML = htmlContent;
        }
    } catch (e) {
        console.error("Lỗi cập nhật tin tức EduRobot:", e);
        // Optional: Keep static content or show error message if fetch fails
        // For now, we leave the static content as potential fallback if we don't clear it before success, 
        // but the plan is to replace it. 
        // Better strategy: Only clear innerHTML if fetch is successful. 
        // If we want to replace static content, we should do it on success.
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', loadEduNews); // Run immediately on load
