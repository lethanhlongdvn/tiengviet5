$path = "c:\Users\Admin\Desktop\tiengviet5"
$files = Get-ChildItem -Path $path -Filter "*.html"

foreach ($file in $files) {
    $name = $file.Name
    $themeName = ""

    if ($name -match "^(19|20|21|22)") { $themeName = "VẺ ĐẸP CUỘC SỐNG" }
    elseif ($name -match "^(23|24|25|26)") { $themeName = "HƯƠNG SẮC TRĂM MIỀN" }
    elseif ($name -match "^(28|29|30)") { $themeName = "TIẾP BƯỚC CHA ÔNG" }
    elseif ($name -match "^(31|32|33|34)") { $themeName = "THẾ GIỚI CỦA CHÚNG TA" }
    
    if ($themeName -ne "") {
        # Read content, define raw to preserve structure
        $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
        
        # New Nav Block
        $newNav = @"
        <nav class="container mx-auto glass-card rounded-xl px-5 py-2 flex justify-between items-center shadow-lg">
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
                        <span class="text-sm font-black uppercase tracking-wider text-blue-800 truncate max-w-[180px] md:max-w-none">$themeName</span>
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
        </nav>
"@
        
        # Perform Regex Replacement
        # (?s) enables single-line mode (dot matches newline)
        # We match <nav class="container mx-auto glass-card ... </nav>
        # We need to be careful about the regex pattern matching the existing content exactly
        # The existing content starts with <nav class="container mx-auto glass-card...
        
        $newContent = $content -replace '(?s)<nav class="container mx-auto glass-card.*?</nav>', $newNav
        
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
        Write-Host "Updated $($file.Name) with theme $themeName"
    } else {
        Write-Host "Skipped $($file.Name) (No theme match)"
    }
}
