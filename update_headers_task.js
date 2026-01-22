const fs = require('fs');
const path = require('path');

const directory = 'c:\\Users\\Admin\\Desktop\\tiengviet5';
const files = fs.readdirSync(directory).filter(file => file.endsWith('.html') && !file.includes('template') && file !== 'index.html');

// Template for the new nav
const getNewNav = (themeName) => `        <nav class="container mx-auto glass-card rounded-xl px-5 py-2 flex justify-between items-center shadow-lg">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <span class="text-xl font-black">E</span>
                </div>
                <div class="flex flex-col md:flex-row md:items-center md:space-x-4">
                    <div class="flex items-center space-x-2">
                        <span class="text-lg font-black text-blue-700 hidden md:block">EduRobot</span>
                        <span class="text-[11px] font-black px-3 py-1 rounded-full bg-orange-500 text-white shadow-sm shadow-orange-200">TIẾNG VIỆT 5</span>
                    </div>
                    <div class="h-5 w-px bg-gray-300 hidden md:block"></div>
                    <div class="flex items-center space-x-2 overflow-hidden">
                        <span class="text-[11px] font-black uppercase tracking-widest text-gray-400">CHỦ ĐIỂM:</span>
                        <span class="text-sm font-black uppercase tracking-wider text-blue-800 truncate max-w-[180px] md:max-w-none">${themeName.toUpperCase()}</span>
                    </div>
                </div>
            </div>
            <ul class="flex space-x-2 md:space-x-6 text-xs font-bold items-center relative">
                <!-- Home -->
                <li>
                    <a href="index.html" class="flex items-center text-gray-500 hover:text-blue-600 transition-colors py-2">
                        Trang chủ
                    </a>
                </li>
                
                <!-- Lessons Dropdown -->
                <li class="relative group">
                    <button id="top-menu-lesson-btn" class="flex items-center text-gray-500 hover:text-blue-600 transition-colors focus:outline-none py-2">
                        Bài học
                        <svg class="w-4 h-4 ml-1 transition-transform duration-200" id="top-menu-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <!-- Dropdown Content (Hidden by default) -->
                     <div id="top-menu-lessons-dropdown" class="absolute top-full right-[-100px] md:right-auto md:left-1/2 md:-translate-x-1/2 mt-4 w-[320px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 hidden max-h-[70vh] overflow-y-auto z-[60] p-2">
                        <!-- Content rendered by floating-menu.js -->
                    </div>
                </li>

                <!-- Teacher -->
                <li>
                    <button onclick="openTeacherStats()" class="text-gray-500 hover:text-blue-600 transition-colors py-2">
                        Giáo viên
                    </button>
                </li>
                
                <!-- Contact -->
                <li>
                    <a href="#" class="text-gray-500 hover:text-blue-600 transition-colors py-2">
                        Liên hệ
                    </a>
                </li>
            </ul>
        </nav>`;

console.log(`Found ${files.length} files to process.`);

files.forEach(file => {
    const filePath = path.join(directory, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Extract Theme Name
    // Regex matches the span that contains the theme name. 
    // Usually: <span class="... text-blue-800 ...">Theme Name</span>
    const themeNameMatch = content.match(/class="[^"]*text-blue-800 truncate[^"]*">\s*(.*?)\s*<\/span>/);

    if (themeNameMatch && themeNameMatch[1]) {
        const themeName = themeNameMatch[1].trim();
        const newNavHtml = getNewNav(themeName);

        // Replace the entire <nav> block
        // Regex matches <nav ...> ... </nav> across lines
        const navRegex = /<nav class="container mx-auto glass-card.*?<\/nav>/s;

        if (navRegex.test(content)) {
            const newContent = content.replace(navRegex, newNavHtml);
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated ${file} (Theme: ${themeName})`);
        } else {
            console.log(`Skipped ${file} - Could not find <nav> block`);
        }
    } else {
        console.log(`Skipped ${file} - Could not extract theme name`);
    }
});
