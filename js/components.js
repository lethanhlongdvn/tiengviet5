/**
 * Components.js
 * Thư viện chứa các thành phần giao diện dùng chung (Header, Footer)
 * Giúp giảm lặp lại code HTML và dễ dàng bảo trì.
 */

const UI = {
    /**
     * Render Footer chung cho toàn bộ ứng dụng
     * @param {string} targetSelector - Selector của phần tử muốn thay thế hoặc chèn vào (mặc định là chèn cuối body)
     */
    renderFooter: (targetSelector = null) => {
        const footerHTML = `
        <footer class="py-6 px-4 mt-8 bg-white/40 backdrop-blur-md border-t border-white/50 w-full z-10 flex-none print:hidden">
            <div class="container mx-auto text-center">
                <p class="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2">© 2026 EduRobot - Hệ thống học tập thông minh</p>
                <p class="text-sm font-bold text-blue-600 flex items-center justify-center gap-1">
                    Phát triển bởi Lê Thành Long
                </p>
            </div>
        </footer>`;

        if (targetSelector) {
            const element = document.querySelector(targetSelector);
            if (element) {
                element.outerHTML = footerHTML;
            }
        } else {
            // Nếu không có target, tìm thẻ footer cũ để thay thế hoặc thêm vào cuối
            const oldFooter = document.querySelector('footer');
            if (oldFooter) {
                oldFooter.outerHTML = footerHTML;
            } else {
                document.body.insertAdjacentHTML('beforeend', footerHTML);
            }
        }
    },

    /**
     * Render Header (Navbar)
     * @param {Object} options - Cấu hình: { type: 'home' | 'lesson' | 'teacher', activePage: string, ... }
     */
    renderNavbar: (options = {}) => {
        const { type = 'home', activeLinks = {} } = options;

        let headerContent = '';
        let headerClass = "w-full z-50 glass-header shadow-sm transition-all duration-300 flex-none print:hidden";
        let containerClass = "container mx-auto px-4 py-3 flex justify-between items-center";

        // DOM Elements for Dynamic Content
        const logoHTML = `
            <a href="index.html" class="flex items-center gap-3 group">
                <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">E</div>
                <div class="flex flex-col">
                    <span class="text-xl font-black text-gray-800 leading-none">EduRobot</span>
                    <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tiếng Việt Lớp 5</span>
                </div>
            </a>`;

        // Right Menu Items (Standard)
        const standardMenuHTML = `
            <div class="flex items-center gap-4">
                <a href="index.html" class="hidden md:block px-4 py-2 rounded-xl text-sm font-bold ${activeLinks.home ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'} transition-colors">Trang chủ</a>
                
                <div class="relative group" id="top-menu-lesson-container">
                    <button id="top-menu-lesson-btn" class="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-bold text-gray-500 hover:text-gray-800 hover:bg-gray-50 transition-colors">
                        Bài học
                        <svg id="top-menu-chevron" class="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <!-- Dropdown Content (Populated by JS) -->
                    <div id="top-menu-lessons-dropdown" class="hidden absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 max-h-[80vh] overflow-y-auto custom-scrollbar z-[60]"></div>
                </div>

                <a href="teacher.html" class="px-4 py-2 rounded-xl text-sm font-bold ${activeLinks.teacher ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'} transition-colors">Giáo viên</a>
                
                ${type === 'home' ? `<a href="contact.html" class="bg-orange-500 hover:bg-orange-600 text-white font-black px-5 py-2.5 rounded-xl shadow-lg shadow-orange-200 transition-all active:scale-95 text-xs uppercase tracking-wider">Góp ý</a>` : ''}
            </div>`;

        if (type === 'home') {
            headerContent = `
                <div class="${containerClass}">
                    ${logoHTML}
                    ${standardMenuHTML}
                </div>`;
        }
        else if (type === 'lesson') {
            // Lesson Viewer Header (Breadcrumbs + Menu)
            headerClass = "sticky top-0 z-50 px-4 py-2 print:hidden";
            containerClass = "container mx-auto glass-card rounded-xl px-5 py-2 flex justify-between items-center shadow-lg";

            headerContent = `
                <nav class="${containerClass}">
                    <div class="flex items-center space-x-4">
                        <div class="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 shrink-0">
                            <span class="text-xl font-black">E</span>
                        </div>
                        <div class="flex flex-col md:flex-row md:items-center md:space-x-6">
                            <div class="flex items-center space-x-3">
                                <span class="text-2xl font-black text-blue-700">EduRobot</span>
                                <span class="text-[11px] font-bold px-3 py-1 rounded-full bg-orange-500 text-white shadow-sm shadow-orange-200 tracking-wide">TV5</span>
                            </div>
                            <div class="hidden md:flex items-center space-x-3 border-l-2 border-gray-100 pl-6">
                                <div class="flex items-center space-x-2">
                                    <span class="text-[10px] font-black uppercase text-gray-400">CHỦ ĐIỂM:</span>
                                    <span class="text-[11px] font-black uppercase text-blue-800 lesson-theme">...</span>
                                </div>
                                <div class="h-4 w-px bg-gray-200"></div>
                                <div class="flex items-center space-x-2">
                                    <span class="text-[10px] font-black uppercase text-gray-400 lesson-week">TUẦN ...</span>
                                    <span class="text-[11px] font-black uppercase text-blue-800 lesson-subject">BÀI: ...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="flex space-x-4 text-xs font-bold items-center">
                        <li class="relative group">
                            <button id="top-menu-lesson-btn" class="flex items-center space-x-1 text-gray-500 hover:text-blue-600 py-2 transition-colors">
                                <span>Bài học</span>
                                <svg id="top-menu-chevron" class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div id="top-menu-lessons-dropdown" class="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-blue-100 hidden overflow-hidden max-h-[80vh] overflow-y-auto z-[60]"></div>
                        </li>
                        <li><a href="index.html" class="text-gray-500 hover:text-blue-600 py-2">Trang chủ</a></li>
                        <li><a href="teacher.html" class="px-3 py-1.5 rounded-lg text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors">Giáo viên</a></li>
                    </ul>
                </nav>`;
        }
        else if (type === 'teacher') {
            // Teacher Header
            headerContent = `
                <div class="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-200">E</div>
                        <div>
                            <h1 class="text-3xl font-black text-gray-800">Báo cáo Tiến độ</h1>
                            <p class="text-blue-600 font-bold uppercase text-[10px] tracking-[0.3em]">Hệ thống quản lý EduRobot</p>
                        </div>
                    </div>
                    ${options.customButtons || ''}
                </div>`;
            // Teacher page wrapper is unique, so we might just inject inner content if container mismatch
            containerClass = ""; // Handled by caller or specific wrap
            headerClass = "flex flex-col md:flex-row justify-between items-center gap-6 mb-8"; // Specific to teacher layout
        }

        // Render logic
        const targetSelector = options.target || 'header';
        const element = document.querySelector(targetSelector);

        if (element) {
            // Special handling for Lesson Viewer which wraps nav in header
            if (type === 'lesson') {
                element.className = headerClass;
                element.innerHTML = headerContent;
            }
            else if (type === 'teacher') {
                element.className = headerClass;
                // Preserve custom buttons if passed, or rebuild
                element.innerHTML = headerContent;
            }
            else {
                element.className = headerClass;
                element.innerHTML = headerContent;
            }
        }
    }
};

// Auto-init nếu có thuộc tính data-init-ui
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.dataset.autoUi) {
        UI.renderFooter();
    }
});

// Export global
window.UI = UI;
