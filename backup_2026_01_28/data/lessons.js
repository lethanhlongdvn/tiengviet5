/**
 * CƠ SỞ DỮ LIỆU BÀI HỌC (LESSON DATABASE)
 * ---------------------------------------
 * Dữ liệu đã được đặt lại.
 * Sử dụng format mẫu dưới đây để thêm bài học mới.
 */
window.LESSON_DATA = {
    "lessons": {
        "191-tieng-hat-nguoi-da": {
            "title": "Tiếng hát của người đá",
            "week": 19,
            "subject": "Đọc",
            "theme": "Vẻ đẹp cuộc sống",
            "audio": "am_thanh/tienghatcuanguoida.wav",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Tiếng hát của người đá" },
                        {
                            "type": "html",
                            "content": `
                            <div class="flex flex-col lg:flex-row gap-6">
                                <!-- Cột trái (70%) - Bài đọc -->
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl mb-8">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative text-left reading-content">
                                                <p class="mb-4">
                                                    Trên đỉnh núi cao ở vùng Chư Bô-đa, có một mỏm đá xanh giống hình một em bé cưỡi voi. Những tia nắng vàng dịu, những hạt mưa trong vắt thay nhau tắm gội, sưởi ấm cho mỏm đá. Gió rì rào kể cho mỏm đá nghe những câu chuyện về mọi miền. Chim hót cho mỏm đá nghe những điệu ca du dương. Cứ thế, năm này qua năm khác, những câu chuyện của gió, những bài ca của chim thấm sâu vào mỏm đá hình em bé.
                                                </p>
                                                <p class="mb-4">
                                                    Một buổi sáng, mỏm đá khẽ cựa quậy, rồi từ từ biến thành một em bé xinh đẹp. Em bước xuống núi, thấy muông thú từng đàn kéo về phá nương rẫy, dân làng đuổi đằng đông, dồn đằng tây mà chẳng ăn thua gì. Em bé liền cất giọng hát. Tiếng hát của em vang khắp núi rừng. Muông thú quên cả phá lúa, nhảy múa theo tiếng hát. Dân làng vây quanh em bé, hỏi em từ đâu tới, tên em là gì, nhưng em chỉ cười. Mọi người đặt tên cho em là Nai Ngọc.
                                                </p>
                                                <p class="mb-4">
                                                    Ngày nọ, giặc kéo đến đông như lá rừng, nhanh như chớp giật, giáo mác chĩa lên trời tua tủa như bông lách, bông lau. Dân làng không kể trẻ già, trai gái vội cầm tên nỏ, khiên đao đuổi giặc. Bốn phương lửa cháy rừng rực. Nai Ngọc trèo lên một mỏm núi, cất tiếng hát kêu gọi những kẻ xâm lược chớ đi ăn cướp, hãy trở về với vợ con, đi hái rau ngọt, cắt lúa vàng, tối ngủ bên lửa ấm, sáng thức dậy theo mặt trời,... Giọng hát của Nai Ngọc khiến giặc đứng sững như những pho tượng, vũ khí tuột khỏi tay.
                                                </p>
                                                <p class="mb-4">
                                                    Giặc tan, nhưng không thấy Nai Ngọc đâu. Dân làng bảo nhau rằng sau khi giúp dân trừ giặc, Nai Ngọc đã trở lên núi cao, biến thành đá như trước. Ai cũng tin rằng nhất định Nai Ngọc sẽ trở về với dân làng, cất tiếng hát giữa cảnh núi rừng thanh bình, tươi đẹp.
                                                </p>
                                                <p class="text-right italic font-bold text-gray-600 mt-6">(Theo Truyện cổ Việt Nam, Ngọc Anh và Văn Lang kể)</p>
                                            </div>
                                        </div>

                                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                                </div>
                                                <div class="flex-grow">
                                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                                        Câu chuyện ca ngợi lòng yêu chuộng hòa bình, sự gắn kết giữa thiên nhiên và con người, đồng thời khẳng định sức mạnh của tiếng hát và lòng nhân hậu có thể cảm hóa cả kẻ thù.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <!-- Cột phải (30%) - Tìm hiểu bài -->
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <!-- Ảnh minh họa -->
                                        <div class="mb-6 -mt-2">
                                            <img src="hinh_anh/illustration_tieng_hat.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                                        </div>

                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div>

                                        <div class="space-y-4">
                                            <!-- Câu 1 -->
                                            <details class="group bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">
                                                        1. Mỏm đá trên đỉnh núi cao có gì đặc biệt? Mỏm đá được mọi vật yêu quý như thế nào?
                                                    </span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                    <div class="flex items-center space-x-2 mb-2">
                                                        <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                        <span class="text-[11px] font-black uppercase tracking-widest text-green-600">Gợi ý trả lời</span>
                                                    </div>
                                                    <p class="font-medium text-sm">Đặc biệt ở chỗ hình dáng giống một em bé cưỡi voi. Mỏm đá được nắng sưởi ấm, mưa tắm gội, gió kể chuyện và chim hót cho nghe.</p>
                                                </div>
                                            </details>

                                            <!-- Câu 2 -->
                                            <details class="group bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">
                                                        2. Điều kì lạ gì xảy ra khi mỏm đá hoá thành em bé và cất tiếng hát?
                                                    </span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                    <div class="flex items-center space-x-2 mb-2">
                                                        <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                        <span class="text-[11px] font-black uppercase tracking-widest text-green-600">Gợi ý trả lời</span>
                                                    </div>
                                                    <p class="font-medium text-sm">Khi em bé cất tiếng hát, muông thú đang phá nương rẫy bỗng quên hết mọi việc và nhảy múa theo tiếng hát.</p>
                                                </div>
                                            </details>

                                            <!-- Câu 3 -->
                                            <details class="group bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">
                                                        3. Khi giặc kéo đến, Nai Ngọc đã làm gì để giúp dân làng?
                                                    </span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                    <div class="flex items-center space-x-2 mb-2">
                                                        <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                        <span class="text-[11px] font-black uppercase tracking-widest text-green-600">Gợi ý trả lời</span>
                                                    </div>
                                                    <p class="font-medium text-sm">Nai Ngọc trèo lên mỏm núi, hát kêu gọi những kẻ xâm lược chớ đi ăn cướp mà hãy trở về với gia đình, lao động sản xuất.</p>
                                                </div>
                                            </details>

                                            <!-- Câu 4 -->
                                            <details class="group bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">
                                                        4. Tiếng hát của Nai Ngọc thể hiện ước nguyện gì?
                                                    </span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                    <div class="flex items-center space-x-2 mb-2">
                                                        <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                        <span class="text-[11px] font-black uppercase tracking-widest text-green-600">Gợi ý trả lời</span>
                                                    </div>
                                                    <p class="font-medium text-sm">Thể hiện ước nguyện về một cuộc sống hòa bình, ấm no, nơi con người được chung sống hạnh phúc và lao động sản xuất.</p>
                                                </div>
                                            </details>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            `
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Mỏm đá xanh hình em bé cưỡi voi nằm ở đâu?", "a": ["Trên đỉnh núi Ngự", "Trên đỉnh núi cao ở vùng Chư Bô-đa", "Trong một hang động sâu", "Bên cạnh bờ suối"], "c": 1 },
                        { "q": "Hình dáng của mỏm đá xanh được mô tả như thế nào?", "a": ["Giống hình một con voi khổng lồ", "Giống hình một người mẹ đang bồng con", "Giống hình một em bé cưỡi voi", "Giống hình một bông hoa đá"], "c": 2 },
                        { "q": "Những yếu tố thiên nhiên nào đã \"kể chuyện\" và \"hát\" cho mỏm đá nghe suốt nhiều năm?", "a": ["Mưa và nắng", "Gió và chim", "Suối và cây rừng", "Mây và sương mù"], "c": 1 },
                        { "q": "Điều kỳ diệu gì đã xảy ra vào một buổi sáng?", "a": ["Mỏm đá vỡ tan thành nhiều mảnh", "Mỏm đá khẽ cựa quậy, rồi biến thành một em bé xinh đẹp", "Mỏm đá bay lên trời", "Mỏm đá phát ra ánh sáng rực rỡ"], "c": 1 },
                        { "q": "Khi em bé bước xuống núi, chuyện gì đang xảy ra với dân làng?", "a": ["Giặc ngoại xâm đang tấn công", "Muông thú kéo về phá nương rẫy mà dân làng đuổi không được", "Dân làng đang tổ chức lễ hội", "Dân làng đang bị hạn hán"], "c": 1 },
                        { "q": "Em bé đã làm cách nào để muông thú ngừng phá hoại mùa màng?", "a": ["Dùng cung tên bắn đuổi", "Dùng phép thuật hóa phép", "Cất tiếng hát vang khắp núi rừng", "Nhờ sự giúp đỡ của thần núi"], "c": 2 },
                        { "q": "Dân làng đã đặt tên cho em bé là gì?", "a": ["Sơn Tinh", "Chư Bô-đa", "Nai Ngọc", "Hơ Bia"], "c": 2 },
                        { "q": "Khi giặc ngoại xâm kéo đến, quân giặc được miêu tả như thế nào?", "a": ["Đông như lá rừng, nhanh như chớp giật", "Đông như kiến cỏ, dữ như hổ báo", "Ít nhưng tinh nhuệ", "Châm chạp nhưng trang bị vũ khí hiện đại"], "c": 0 },
                        { "q": "Thái độ của dân làng khi giặc đến xâm lược là gì?", "a": ["Sợ hãi bỏ chạy vào rừng sâu", "Không kể trẻ già trai gái vội cầm vũ khí đuổi giặc", "Đầu hàng ngay lập tức", "Cầu xin thần linh giúp đỡ"], "c": 1 },
                        { "q": "Nai Ngọc đã làm gì để giúp dân làng chống giặc?", "a": ["Cầm gươm xông pha ra trận", "Biến thành người khổng lồ dẫm nát quân giặc", "Trèo lên mỏm núi và cất tiếng hát kêu gọi quân giặc", "Dùng voi thần đuổi giặc"], "c": 2 },
                        { "q": "Nội dung tiếng hát của Nai Ngọc khuyên quân giặc điều gì?", "a": ["Hãy đầu hàng sẽ được tha chết", "Chớ đi ăn cướp, hãy trở về với vợ con, làm ruộng và sống thanh bình", "Hãy chiến đấu dũng cảm hơn nữa", "Hãy đi xâm lược vùng đất khác"], "c": 1 },
                        { "q": "Tiếng hát của Nai Ngọc đã tác động đến quân giặc như thế nào?", "a": ["Làm quân giặc tức giận hơn", "Làm quân giặc lăn ra ngủ say", "Khiến giặc đứng sững như tượng, vũ khí tuột khỏi tay", "Làm quân giặc hoảng sợ bỏ chạy tán loạn"], "c": 2 },
                        { "q": "Sau khi giặc tan, Nai Ngọc đã đi đâu?", "a": ["Ở lại làm tù trưởng của buôn làng", "Đi chu du thiên hạ", "Về trời", "Trở lên núi cao, biến thành đá như trước"], "c": 3 },
                        { "q": "Người dân tin rằng Nai Ngọc sẽ trở về khi nào?", "a": ["Khi có giặc ngoại xâm lần nữa", "Khi dân làng gặp thiên tai", "Khi cảnh núi rừng thanh bình, tươi đẹp", "Vào ngày hội mùa xuân"], "c": 2 },
                        { "q": "Câu chuyện ca ngợi sức mạnh của điều gì?", "a": ["Sức mạnh quân sự", "Sức mạnh của thiên nhiên hùng vĩ", "Sức mạnh của tiếng hát, lòng yêu chuộng hòa bình và cuộc sống ấm no", "Sức mạnh của những tảng đá thần"], "c": 2 }
                    ]
                }
            }
        },
        "192-khuc-hat-ru": {
            "title": "Khúc hát ru những em bé lớn trên lưng mẹ",
            "week": 19,
            "subject": "Đọc",
            "theme": "Vẻ đẹp cuộc sống",
            "audio": "am_thanh/khuchatrunhungemlontrenlungme.wav",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Khúc hát ru những em bé lớn trên lưng mẹ" },
                        {
                            "type": "html",
                            "content": `
                            <div class="flex flex-col lg:flex-row gap-6">
                                <!-- Cột trái (70%) - Bài đọc -->
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl mb-8">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative text-left">
                                                <p class="mb-6" style="text-indent: 0;">
                                                    Em cu Tai ngủ trên lưng mẹ ơi<br>
                                                    Em ngủ cho ngoan đừng rời lưng mẹ<br>
                                                    Mẹ giã gạo mẹ nuôi bộ đội<br>
                                                    Nhịp chày nghiêng giấc ngủ em nghiêng<br>
                                                    Mồ hôi mẹ rơi má em nóng hổi<br>
                                                    Vai mẹ gầy nhấp nhô làm gối<br>
                                                    Lưng đưa nôi và tim hát thành lời:
                                                </p>
                                                <p class="mb-6 italic text-blue-700" style="text-indent: 0;">
                                                    – Ngủ ngoan a-kay ơi, ngủ ngoan a-kay hỡi<br>
                                                    Mẹ thương a-kay, mẹ thương bộ đội<br>
                                                    Con mơ cho mẹ hạt gạo trắng ngần<br>
                                                    Mai sau con lớn vung chày lún sân...
                                                </p>
                                                <p class="mb-6" style="text-indent: 0;">
                                                    Em cu Tai ngủ trên lưng mẹ ơi<br>
                                                    Em ngủ cho ngoan đừng rời lưng mẹ<br>
                                                    Mẹ đang tỉa bắp trên núi Ka-lưi<br>
                                                    Lưng núi thì to mà lưng mẹ nhỏ<br>
                                                    Em ngủ ngoan em đừng làm mẹ mỏi<br>
                                                    Mặt trời của bắp thì nằm trên đồi<br>
                                                    Mặt trời của mẹ, em nằm trên lưng
                                                </p>
                                                <p class="mb-6" style="text-indent: 0;">
                                                    – Ngủ ngoan a-kay ơi, ngủ ngoan a-kay hỡi...
                                                </p>
                                                <p class="text-right italic font-bold text-gray-400 mt-6" style="text-indent: 0;">
                                                    (Nguyễn Khoa Điềm)
                                                </p>
                                            </div>
                                        </div>

                                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                                </div>
                                                <div class="flex-grow">
                                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                                        Bài thơ ca ngợi tình cảm thắm thiết của người mẹ dành cho con, hòa quyện với lòng yêu nước và ý chí chiến đấu trong cuộc kháng chiến chống Mỹ cứu nước của nhân dân ta.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <!-- Cột phải (30%) - Tìm hiểu bài -->
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div>

                                        <div class="space-y-4">
                                            <!-- Câu 1 -->
                                            <details class="group bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">
                                                        1. Những từ ngữ nào cho thấy bài thơ là lời ru?
                                                    </span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                    <div class="flex items-center space-x-2 mb-2">
                                                        <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                        <span class="text-[11px] font-black uppercase tracking-widest text-green-600">Gợi ý trả lời</span>
                                                    </div>
                                                    <p class="font-medium text-sm">Bài thơ như lời ru qua các từ ngữ: "Em cu Tai ngủ trên lưng mẹ ơi", "ngủ ngoan a-kay ơi", "ngủ ngoan a-kay hỡi".</p>
                                                </div>
                                            </details>

                                            <!-- Câu 2 -->
                                            <details class="group bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">
                                                        2. Người mẹ làm những công việc gì và ý nghĩa?
                                                    </span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                    <div class="flex items-center space-x-2 mb-2">
                                                        <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                        <span class="text-[11px] font-black uppercase tracking-widest text-green-600">Gợi ý trả lời</span>
                                                    </div>
                                                    <p class="font-medium text-sm">Mẹ giã gạo, tỉa bắp trên nương rẫy để nuôi bộ đội, góp phần vào cuộc kháng chiến giành độc lập.</p>
                                                </div>
                                            </details>

                                            <!-- Câu 3 -->
                                            <details class="group bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">
                                                        3. Mong ước của người mẹ là gì?
                                                    </span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                    <div class="flex items-center space-x-2 mb-2">
                                                        <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                        <span class="text-[11px] font-black uppercase tracking-widest text-green-600">Gợi ý trả lời</span>
                                                    </div>
                                                    <p class="font-medium text-sm">Mẹ mong con ngủ ngoan, lớn lên khỏe mạnh ("vung chày lún sân") để tiếp bước cha ông lao động và chiến đấu.</p>
                                                </div>
                                            </details>

                                            <!-- Câu 4 -->
                                            <details class="group bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">
                                                        4. Ý nghĩa hai dòng thơ về "Mặt trời"?
                                                    </span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                    <div class="flex items-center space-x-2 mb-2">
                                                        <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                        <span class="text-[11px] font-black uppercase tracking-widest text-green-600">Gợi ý trả lời</span>
                                                    </div>
                                                    <p class="font-medium text-sm">"Mặt trời của bắp" là thiên nhiên, còn "Mặt trời của mẹ" chính là đứa con - nguồn hạnh phúc và hy vọng lớn nhất của mẹ.</p>
                                                </div>
                                            </details>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            `
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Tác giả của bài thơ \"Khúc hát ru những em bé lớn trên lưng mẹ\" là ai?", "a": ["Tố Hữu", "Trần Đăng Khoa", "Nguyễn Khoa Điềm", "Huy Cận"], "c": 2 },
                        { "q": "Em bé được nhắc đến trong bài thơ có tên là gì?", "a": ["A-lưi", "Cu Tai", "Ka-lưi", "A-kay"], "c": 1 },
                        { "q": "Trong khổ thơ đầu, người mẹ làm công việc gì?", "a": ["Tỉa bắp", "Dệt vải", "Giã gạo", "Sàng sảy"], "c": 2 },
                        { "q": "Mục đích chính của việc mẹ giã gạo là gì?", "a": ["Để bán lấy tiền", "Chuẩn bị bữa tối", "Nuôi bộ đội kháng chiến", "Làm bánh"], "c": 2 },
                        { "q": "Câu thơ \"Nhịp chày nghiêng giấc ngủ em nghiêng\" gợi tả điều gì?", "a": ["Cái chày bị cong", "Giấc ngủ của em bé theo nhịp lao động của mẹ", "Em bé đang nằm võng", "Mẹ đang ru trên giường"], "c": 1 },
                        { "q": "Hình ảnh nào diễn tả sự gian khổ của mẹ tác động đến em bé?", "a": ["Lưng đưa nôi", "Tim hát thành lời", "Mồ hôi mẹ rơi má em nóng hổi", "Vai mẹ gầy"], "c": 2 },
                        { "q": "Trong lời ru ở khổ 1, mẹ mong ước con mơ thấy điều gì?", "a": ["Mặt trời", "Hạt gạo trắng ngần", "Núi Ka-lưi", "Bộ đội về làng"], "c": 1 },
                        { "q": "Câu thơ \"Mai sau con lớn vung chày lún sân\" thể hiện mong muốn gì?", "a": ["Con là nông dân giỏi", "Con lớn lên khỏe mạnh giúp ích nước nhà", "Con sửa lại cái sân", "Con đi bộ đội ngay"], "c": 1 },
                        { "q": "Ở khổ thơ thứ hai, người mẹ làm công việc gì?", "a": ["Giã gạo bên suối", "Hái rau trong rừng", "Làm rẫy trên nương", "Tỉa bắp trên núi"], "c": 3 },
                        { "q": "Hình ảnh đối lập nào làm nổi bật sự nhỏ bé nhưng kiên cường của mẹ?", "a": ["Mặt trời to - nhỏ", "Lưng núi thì to mà lưng mẹ nhỏ", "Núi cao - suối sâu", "Rừng xanh - tóc bạc"], "c": 1 },
                        { "q": "Trong câu \"Mặt trời của bắp thì nằm trên đồi\", hình ảnh \"mặt trời\" có nghĩa là gì?", "a": ["Mặt trời thiên nhiên", "Một loại bắp màu đỏ", "Ngọn đèn", "Người nông dân"], "c": 0 },
                        { "q": "Câu \"Mặt trời của mẹ, em nằm trên lưng\" sử dụng BPNT gì?", "a": ["So sánh", "Ẩn dụ", "Nhân hóa", "Hoán dụ"], "c": 1 },
                        { "q": "Vì sao tác giả gọi em bé là \"Mặt trời của mẹ\"?", "a": ["Mặt em tròn", "Em mặc áo đỏ", "Em là niềm tin, nguồn sống của mẹ", "Em thức dậy sớm"], "c": 2 },
                        { "q": "Công việc giã gạo, tỉa bắp của mẹ có ý nghĩa gì?", "a": ["Quên nỗi buồn", "Góp phần nuôi quân kháng chiến", "Rèn luyện sức khỏe", "Dạy con lao động"], "c": 1 },
                        { "q": "Chủ đề chính của bài thơ là gì?", "a": ["Vẻ đẹp thiên nhiên", "Quy trình lao động", "Tình yêu con hòa quyện tình yêu đất nước", "Tuổi thơ gian khổ"], "c": 2 }
                    ]
                }
            }
        },
        "201-hat-gao-lang-ta": {
            "title": "Hạt gạo làng ta",
            "week": 20,
            "subject": "Đọc",
            "theme": "Vẻ đẹp cuộc sống",
            "audio": "am_thanh/hatgaolangta.wav",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Hạt gạo làng ta" },
                        {
                            "type": "html",
                            "content": `
                            <div class="flex flex-col lg:flex-row gap-8">
                                <div class="w-full lg:w-[70%] space-y-6">
                                    <div class="bg-white rounded-[30px] p-8 shadow-sm border border-gray-100">
                                        <h1 class="text-3xl font-black text-blue-900 text-center mb-2">Hạt gạo làng ta</h1>
                                        <p class="text-lg italic mb-8 text-gray-600 font-bold text-center">Trần Đăng Khoa</p>
                                        <div class="reading-area text-lg text-gray-800 leading-relaxed font-serif text-left max-w-fit mx-auto" style="text-indent: 0;">
                                            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                                                <div class="space-y-6">
                                                    <p>Hạt gạo làng ta<br>Có vị phù sa<br>Của sông Kinh Thầy<br>Có hương sen thơm<br>Trong hồ nước đầy<br>Có lời mẹ hát<br>Ngọt bùi đắng cay...</p>
                                                    <p>Hạt gạo làng ta<br>Có bão tháng Bảy<br>Có mưa tháng Ba<br>Giọt mồ hôi sa<br>Những trưa tháng Sáu<br>Nước như ai nấu<br>Chết cả cá cờ<br>Cua ngoi lên bờ<br>Mẹ em xuống cấy...</p>
                                                </div>
                                                <div class="space-y-6">
                                                    <p>Hạt gạo làng ta<br>Những năm bom Mỹ<br>Trút trên mái nhà<br>Những năm cây súng<br>Theo người đi xa<br>Những năm băng đạn<br>Vàng như lúa đồng<br>Bát cơm mùa gặt<br>Thơm hào giao thông...</p>
                                                    <p>Hạt gạo làng ta<br>Có công các bạn<br>Sớm nào chống hạn<br>Vục mẻ miệng gàu<br>Trưa nào bắt sâu<br>Lúa cao rát mặt<br>Chiều nào gánh phân<br>Quang trành quết đất</p>
                                                </div>
                                            </div>
                                            <div class="mt-6 text-center w-full">
                                                <p>Hạt gạo làng ta<br>Gửi ra tiền tuyến<br>Gửi về phương xa<br>Em vui em hát<br>Hạt vàng làng ta.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform font-nunito">
                                        <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                        <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                            <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                                <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                                <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                            </div>
                                            <div class="flex-grow">
                                                <p class="text-lg font-bold leading-relaxed text-blue-50">
                                                    Bài thơ ca ngợi giá trị của hạt gạo được làm nên từ mồ hôi, công sức của con người và những tinh túy của đất trời. Đồng thời nhắc nhở chúng ta lòng biết ơn đối với người nông dân, trân trọng từng hạt gạo quý giá.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="bg-yellow-50 rounded-[30px] p-6 border border-yellow-100 sticky top-20 font-nunito">
                                        <h3 class="text-yellow-700 font-black mb-4 uppercase text-sm">Tìm hiểu bài</h3>
                                        <div class="space-y-3">
                                            <details class="group bg-white rounded-xl shadow-sm overflow-hidden">
                                                <summary class="p-4 font-bold cursor-pointer hover:bg-yellow-100/50 flex justify-between items-center whitespace-normal">
                                                    <span>1. Hạt gạo kết tinh từ những tinh túy nào?</span>
                                                    <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </summary>
                                                <div class="p-4 bg-gray-50 text-gray-700 border-t text-sm leading-relaxed">Kết tinh từ phù sa của sông Kinh Thầy, hương sen thơm trong hồ nước đầy và cả lời hát ngọt bùi đắng cay của mẹ.</div>
                                            </details>
                                            <details class="group bg-white rounded-xl shadow-sm overflow-hidden">
                                                <summary class="p-4 font-bold cursor-pointer hover:bg-yellow-100/50 flex justify-between items-center whitespace-normal">
                                                    <span>2. Hạt gạo mang nét đẹp gì của người nông dân?</span>
                                                    <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </summary>
                                                <div class="p-4 bg-gray-50 text-gray-700 border-t text-sm leading-relaxed">Sự cần cù, chịu khó qua hình ảnh vượt bão tháng Bảy, mưa tháng Ba, giọt mồ hôi dưới nắng hè tháng Sáu "nước như ai nấu".</div>
                                            </details>
                                            <details class="group bg-white rounded-xl shadow-sm overflow-hidden">
                                                <summary class="p-4 font-bold cursor-pointer hover:bg-yellow-100/50 flex justify-between items-center whitespace-normal">
                                                    <span>3. Ý nghĩa "Bát cơm mùa gặt / Thơm hào giao thông"?</span>
                                                    <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </summary>
                                                <div class="p-4 bg-gray-50 text-gray-700 border-t text-sm leading-relaxed">Gợi lên tình nghĩa hậu phương gửi ra tiền tuyến trong những năm bom Mỹ, hạt gạo thơm mùi của tinh thần kháng chiến.</div>
                                            </details>
                                            <details class="group bg-white rounded-xl shadow-sm overflow-hidden">
                                                <summary class="p-4 font-bold cursor-pointer hover:bg-yellow-100/50 flex justify-between items-center whitespace-normal">
                                                    <span>4. Đóng góp của các bạn nhỏ là gì?</span>
                                                    <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </summary>
                                                <div class="p-4 bg-gray-50 text-gray-700 border-t text-sm leading-relaxed">Các bạn nhỏ đã tham gia chống hạn (vục mẻ miệng gàu), bắt sâu (lúa cao rát mặt), gánh phân (quang trành quết đất).</div>
                                            </details>
                                            <details class="group bg-white rounded-xl shadow-sm overflow-hidden">
                                                <summary class="p-4 font-bold cursor-pointer hover:bg-yellow-100/50 flex justify-between items-center whitespace-normal">
                                                    <span>5. Vì sao hạt gạo được gọi là "hạt vàng"?</span>
                                                    <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </summary>
                                                <div class="p-4 bg-gray-50 text-gray-700 border-t text-sm leading-relaxed">Vì nó vô cùng quý giá, chứa đựng bao mồ hôi, công sức lao động vất vả của con người mới làm ra được.</div>
                                            </details>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            `
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Bài thơ \"Hạt gạo làng ta\" do nhà thơ nào sáng tác?", "a": ["Tố Hữu", "Trần Đăng Khoa", "Phạm Tiến Duật", "Nguyễn Duy"], "c": 1 },
                        { "q": "Dòng sông nào đã mang nặng phù sa bồi đắp cho hạt gạo làng ta?", "a": ["Sông Hồng", "Sông Đuống", "Sông Cửu Long", "Sông Kinh Thầy"], "c": 3 },
                        { "q": "Ngoài vị phù sa và hương sen thơm, hạt gạo còn chứa đựng điều gì từ người mẹ?", "a": ["Lời ru buồn", "Lời mẹ hát ngọt bùi đắng cay", "Những câu chuyện cổ tích", "Tiếng cười vui vẻ"], "c": 1 },
                        { "q": "Khó khăn thiên nhiên nào được nhắc đến trong khổ thơ thứ hai?", "a": ["Bão tháng Bảy, mưa tháng Ba", "Lũ lụt miền Trung", "Hạn hán kéo dài quanh năm", "Gió rét mùa đông"], "c": 0 },
                        { "q": "Hình ảnh \"Nước như ai nấu / Chết cả cá cờ\" gợi tả điều gì?", "a": ["Nước sông bị ô nhiễm", "Người dân đang nấu nước sôi", "Cái nắng nóng khắc nghiệt của trưa tháng Sáu", "Cuộc sống ấm no, sung túc"], "c": 2 },
                        { "q": "Trước nắng nóng làm \"cua ngoi lên bờ\", hình ảnh người mẹ hiện lên như thế nào?", "a": ["Mẹ nghỉ ngơi dưới bóng cây", "Mẹ em xuống cấy", "Mẹ về nhà tránh nắng", "Mẹ ngồi quạt mát cho con"], "c": 1 },
                        { "q": "Khổ thơ thứ ba nhắc đến bối cảnh lịch sử nào?", "a": ["Thời kỳ xây dựng chủ nghĩa xã hội", "Những năm kháng chiến chống Pháp", "Những năm bom Mỹ trút trên mái nhà", "Thời kỳ bao cấp"], "c": 2 },
                        { "q": "Trong chiến tranh, hạt gạo đã theo người đi xa như thế nào?", "a": ["Bát cơm mùa gặt thơm hào giao thông", "Được chở bằng xe tải lớn", "Được cất giấu kỹ trong kho", "Chỉ dùng nuôi quân ở hậu phương"], "c": 0 },
                        { "q": "Các bạn nhỏ đã góp công làm ra hạt gạo bằng việc gì?", "a": ["Đi học và trông em", "Nấu cơm giúp mẹ", "Chống hạn, bắt sâu, gánh phân", "Chăn trâu và cắt cỏ"], "c": 2 },
                        { "q": "Câu thơ \"Quang trành quết đất\" nói lên điều gì về các bạn nhỏ?", "a": ["Các bạn nhỏ rất ham chơi", "Sự vất vả, nỗ lực lao động dù tuổi còn nhỏ", "Làm hỏng dụng cụ lao động", "Đất ngoài đồng rất dính"], "c": 1 },
                        { "q": "Hạt gạo làm ra được gửi đi đâu?", "a": ["Chỉ để ăn trong gia đình", "Xuất khẩu ra nước ngoài", "Gửi ra tiền tuyến, gửi về phương xa", "Đem ra chợ bán"], "c": 2 },
                        { "q": "Vì sao tác giả gọi hạt gạo là \"hạt vàng\"?", "a": ["Vì hạt gạo màu vàng óng", "Vì hạt gạo bán rất nhiều tiền", "Vì nó rất quý giá, chứa đựng mồ hôi công sức", "Vì lúa chín trông như vàng"], "c": 2 },
                        { "q": "Bài thơ ca ngợi phẩm chất nào của người nông dân?", "a": ["Cần cù, chịu khó, yêu lao động", "Thông minh, sáng tạo", "Vui vẻ, lạc quan", "Dũng cảm chiến đấu"], "c": 0 },
                        { "q": "Hình ảnh thể hiện sự kết tinh của đất trời trong hạt gạo?", "a": ["Giọt mồ hôi sa", "Vị phù sa, hương sen thơm", "Mẻ miệng gàu", "Hào giao thông"], "c": 1 },
                        { "q": "Qua bài thơ, tác giả muốn nhắc nhở chúng ta lòng gì?", "a": ["Tiết kiệm nước", "Chăm chỉ học tập", "Biết ơn nông dân và trân trọng hạt gạo", "Yêu thiên nhiên"], "c": 2 }
                    ]
                }
            }
        },
        "202-hop-qua-mau-thien-thanh": {
            "title": "Hộp quà màu thiên thanh",
            "week": 20,
            "subject": "Đọc",
            "theme": "Vẻ đẹp cuộc sống",
            "audio": "am_thanh/hopquamauthienthanh.wav",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Hộp quà màu thiên thanh" },
                        {
                            "type": "html",
                            "content": `
                            <div class="flex flex-col lg:flex-row gap-6">
                                <!-- Cột trái (70%) - Bài đọc -->
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl mb-8">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative text-left reading-content">
                                                <p>Tân vừa nấu cơm xong thì Quang và Huệ tới. Quang nói:</p>
                                                <p>– Ngày mai tổng kết năm học, mỗi bạn sẽ viết một lá thư như một món quà đặc biệt để tặng cô chủ nhiệm.</p>
                                                <p>Huệ cười:</p>
                                                <p>– Cậu nhớ viết nhé!</p>
                                                <p>Nói rồi, hai đứa phóng xe đi.</p>
                                                <p>Buổi tối, Tân ngồi vào bàn học chuẩn bị viết thư. Tân nhớ về kỉ niệm một lần đi học muộn vì mải bẻ ngô giúp mẹ. Khi cô hỏi lí do, Tân còn đang ấp úng thì Huệ nhanh nhảu:</p>
                                                <p>– Thưa cô, chắc Tân lại giúp mẹ làm vườn.</p>
                                                <p>Tân thấy mặt nóng ran. Cô nhìn Tân trìu mến:</p>
                                                <p>– Tân như thế là biết thương mẹ. Nhưng nếu em vừa biết giúp mẹ vừa đi học đúng giờ thì còn biết thương mẹ nhiều hơn!</p>
                                                <p>Tân thầm hứa sẽ không đi học muộn nữa...</p>
                                                <p>Cảm xúc dâng trào, Tân bèn cầm bút viết. Tân kể lại buổi đi học muộn hôm ấy và cả những cố gắng của Tân trong học tập: dậy sớm hơn để học bài, tranh thủ các buổi chiều nghỉ học, Tân giúp mẹ việc nhà,... Cuối năm, Tân được cô giáo khen vì có nhiều tiến bộ. Giờ sắp phải xa cô, xa trường lớp, Tân sẽ rất nhớ cô...</p>
                                                <p>Hôm sau, Tân đến lớp sớm. Huệ đang đón những lá thư của các bạn xếp vào chiếc hộp màu thiên thanh.</p>
                                                <p>– Cậu viết gì gửi cô đấy? – Quang vừa đi vào vừa hỏi.</p>
                                                <p>Tân mỉm cười:</p>
                                                <p>– Thư gửi cô, tớ phải giữ bí mật chứ!</p>
                                                <p>Nói xong, Tân đặt lá thư của mình vào chiếc hộp.</p>
                                                <p>Cô giáo mặc áo dài màu thiên thanh bước vào lớp trong tiếng vỗ tay giòn giã. Quang thay mặt lớp cảm ơn cô đã dạy dỗ. Đôi má cô ửng hồng khi nhận hộp quà với lời nhắn của Quang: “Chúng em gửi cô hết ở trong này, cô về đọc nhé!".</p>
                                                <p>Ba mươi lăm lá thư tạo thành một hộp quà đặc biệt tặng cô được giữ bí mật tuyệt đối. Chỉ cô giáo mới biết từng học trò đã viết gì trong những lá thư ấy.</p>
                                                <p class="text-right italic font-bold text-gray-600 mt-6">(Nguyễn Thu Hằng)</p>
                                            </div>
                                        </div>

                                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                                </div>
                                                <div class="flex-grow">
                                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                                        Tình cảm thầy trò là tình cảm đẹp đẽ, vô cùng đáng quý. Hãy biết trân trọng và thể hiện lòng biết ơn chân thành đối với thầy cô giáo của mình.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <!-- Cột phải (30%) - Tìm hiểu bài -->
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <div class="mb-6 -mt-2">
                                            <img src="hinh_anh/hop-qua-mau-thien-thanh.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                                        </div>

                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div>

                                        <div class="space-y-4">
                                            <details class="group bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">1. Dự định của lớp Tân là gì?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30 text-sm">
                                                    Mỗi bạn sẽ viết một lá thư như một món quà đặc biệt để tặng cô chủ nhiệm vào ngày tổng kết năm học.
                                                </div>
                                            </details>

                                            <details class="group bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">2. Tân đã nhớ lại kỉ niệm gì?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30 text-sm">
                                                    Tân nhớ về một lần đi học muộn vì mải bẻ ngô giúp mẹ. Khi đó cô giáo đã rất trìu mến khuyên bảo Tân.
                                                </div>
                                            </details>

                                            <details class="group bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">3. Vì sao Tân có nhiều tiến bộ?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30 text-sm">
                                                    Vì Tân thương mẹ và muốn thực hiện lời hứa với cô giáo. Tân đã dậy sớm học bài và chăm chỉ giúp việc nhà.
                                                </div>
                                            </details>

                                            <details class="group bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">4. Ý nghĩa chiếc hộp màu thiên thanh?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30 text-sm">
                                                    Nó chứa đựng tình cảm bí mật và chân thành của 35 học sinh dành cho cô giáo, thể hiện sự kính trọng và biết ơn sâu sắc.
                                                </div>
                                            </details>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            `
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Dự định đặc biệt của lớp Tân là gì?", "a": ["Tặng cô một bó hoa", "Tặng cô một chiếc hộp quà chứa 35 lá thư", "Tổ chức tiệc liên hoan", "Vẽ tranh tặng cô"], "c": 1 },
                        { "q": "Ai là người thông báo ý tưởng quà tặng cho Tân?", "a": ["Cô chủ nhiệm", "Quang và Huệ", "Cả lớp", "Mẹ Tân"], "c": 1 },
                        { "q": "Tân đi học muộn một lần vì lí do gì?", "a": ["Ngủ quên", "Mải bẻ ngô giúp mẹ", "Hỏng xe", "Mải chơi game"], "c": 1 },
                        { "q": "Bạn Huệ đã giải thích giúp Tân như thế nào?", "a": ["Tân bị ốm", "Chắc Tân lại giúp mẹ làm vườn", "Tân hỏng xe", "Tân không cố ý"], "c": 1 },
                        { "q": "Cô giáo đã nói gì khi biết Tân giúp mẹ?", "a": ["Phạt Tân vì đi học muộn", "Khen Tân thương mẹ và khuyên đi học đúng giờ", "Không nói gì", "Yêu cầu Tân xin lỗi"], "c": 1 },
                        { "q": "Tân đã thay đổi như thế nào sau lời khuyên của cô?", "a": ["Dậy sớm hơn để học bài", "Cố gắng đạt nhiều tiến bộ", "Chăm chỉ giúp mẹ việc nhà", "Tất cả các ý trên"], "c": 3 },
                        { "q": "Chiếc hộp màu thiên thanh dùng để làm gì?", "a": ["Để đựng phấn", "Đựng 35 lá thư bí mật tặng cô giáo", "Đựng đồ dùng học tập", "Đựng bánh kẹo"], "c": 1 },
                        { "q": "Cô giáo đã mặc gì vào buổi tổng kết?", "a": ["Áo sơ mi trắng", "Áo dài màu thiên thanh", "Váy hoa", "Đồng phục trường"], "c": 1 },
                        { "q": "Có bao nhiêu lá thư trong hộp quà?", "a": ["30 lá", "35 lá", "40 lá", "45 lá"], "c": 1 },
                        { "q": "Phản ứng của cô giáo khi nhận quà như thế nào?", "a": ["Cô rất giận", "Cô mỉm cười và cảm ơn", "Đôi má cô ửng hồng vì xúc động", "Cô mở quà ra đọc ngay"], "c": 2 },
                        { "q": "Tại sao thư được giữ bí mật tuyệt đối?", "a": ["Vì đó là tình cảm riêng tư của mỗi học sinh", "Vì chiếc hộp bị khóa", "Vì các bạn không muốn cô biết", "Vì thư viết chưa xong"], "c": 0 },
                        { "q": "Nhan đề nào khác phù hợp với câu chuyện?", "a": ["Chiếc hộp màu xanh", "Món quà từ trái tim", "Lá thư của Tân", "Cô giáo của em"], "c": 1 },
                        { "q": "Tác giả của câu chuyện là ai?", "a": ["Nguyễn Thu Hằng", "Trần Đăng Khoa", "Tô Hoài", "Võ Quảng"], "c": 0 },
                        { "q": "Màu thiên thanh là màu gì?", "a": ["Màu xanh lá", "Màu xanh da trời", "Màu đỏ thắm", "Màu vàng nhạt"], "c": 1 },
                        { "q": "Câu chuyện ca ngợi điều gì?", "a": ["Lao động là vinh quang", "Tình cảm thầy trò thân thiết, biết ơn", "Tình bạn gắn bó", "Sự chăm chỉ học tập"], "c": 1 }
                    ]
                }
            }
        },
        "211-gio-hoa-thang-nam": {
            "title": "Giỏ hoa tháng Năm",
            "week": 21,
            "subject": "Đọc",
            "theme": "Vẻ đẹp cuộc sống",
            "audio": "am_thanh/giohoathangnam.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Giỏ hoa tháng Năm" },
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                                <!-- Cột trái (70%) - Bài đọc -->
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                                <p class="mb-4">Với bọn trẻ chúng tôi, ngày lễ Mừng xuân vào tháng Năm luôn đáng mong chờ, bởi đó là dịp chúng tôi được vui đùa thoả thích. Chúng tôi thường bí mật làm những giỏ hoa rực rỡ, đặt lên bậc thềm nhà người quen hoặc bạn bè, gõ cửa rồi ba chân bốn cẳng chạy trốn thật nhanh. Từ xa, chúng tôi hồi hộp theo dõi chủ nhà mở cửa, cầm món quà lên với vẻ ngạc nhiên, thích thú.</p>
                                                <p>Tôi còn nhớ lễ Mừng xuân năm tôi học lớp Năm. Lúc đó, tôi đang giận Pam, cô bạn thân nhất của mình. Từ nhỏ Pam và tôi đã thân nhau như hình với bóng. Gần đây, một gia đình mới dọn đến thị trấn của chúng tôi và Pam đã kết thân với con gái của họ. Mặc dù chúng tôi vẫn chơi với nhau, nhưng thời gian Pam dành cho tôi không còn nhiều như trước. Tôi cảm thấy như bị bỏ rơi. Giận Pam, tôi không chơi với bạn mấy ngày. Khi mẹ hỏi tôi có mang hoa cho Pam không, tôi trả lời: "Không bao giờ, mẹ ạ!". Mẹ dừng tay làm bếp, ôm tôi và an ủi. Cơn tủi thân bỗng dâng lên và tôi oà khóc nức nở. Mẹ dịu dàng vuốt tóc và lau nước mắt cho tôi. Mẹ bảo càng lớn, chúng tôi sẽ càng có nhiều bạn. Những người bạn không thể chỉ chơi với một mình tôi. Và ngay cả tôi cũng không thể chỉ chơi với một người bạn.</p>
                                                <p>Cuối cùng, tôi cũng quyết định tặng Pam một giỏ hoa. Tôi chọn thật nhiều hoa màu vàng mà Pam yêu thích, rồi nhờ chị tôi đem đến nhà bạn. Từ chỗ nấp, tôi thấy Pam nâng giỏ hoa lên, dịu dàng áp mặt vào những bông hoa và nói to như để tôi nghe được: "Cảm ơn Xu-di, hi vọng cậu không còn giận mình!".</p>
                                                <p>Lần ấy tôi học được rằng là bạn bè đích thực, ta sẽ đặt bạn trong tim nhưng không buộc họ luôn ở bên mình.</p>
                                                <p class="text-right italic font-bold text-gray-600 mt-6">(Theo Minh Hương)</p>
                                            </div>
                                        </div>
                                        
                                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                                </div>
                                                <div class="flex-grow">
                                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                                        Đã là bạn bè đích thực luôn có sự gắn bó thân thiết, chân thành, luôn ở bên nhau, quan tâm đến nhau dù không ở cạnh nhau thường xuyên nhưng tấm lòng luôn hướng về nhau, luôn trân trọng và có vị trí nhất định trong lòng mỗi người.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <!-- Cột phải (30%) - Tìm hiểu bài -->
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <div class="mb-6 -mt-2">
                                            <img src="hinh_anh/giohoathangnam.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                                        </div>

                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div>

                                        <div class="space-y-4">
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Ngày lễ nào trong năm được các bạn nhỏ mong chờ? Việc làm nào trong ngày đó khiến các bạn thấy thú vị?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Ngày lễ được các bạn nhỏ mong chờ là ngày lễ mừng xuân vào tháng năm. Các bạn thường bí mật làm những giỏ hoa rực rỡ, đặt lên bậc thềm nhà người quen hoặc bạn bè, gõ cửa rồi ba chân bốn cẳng chạy trốn thật nhanh, hồi hộp theo dõi chủ nhà có cảm xúc như thế nào trước món quà đó.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Bạn thân của Xu-di là ai? Vì sao Xu-di lại giận người bạn thân của mình?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Bạn thân của Xu-di là Pam. Xu-di giận người bạn thân của mình vì có một gia đình mới dọn đến thị trấn của hai người và Pam đã kết thân với con gái của gia đình đó, thời gian Pam dành cho Xu-di không còn nhiều như trước, Xu-di cảm thấy như bị bỏ rơi.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Việc Xu-di vẫn quyết định tặng bạn giỏ hoa với nhiều bông màu vàng mà bạn yêu thích thể hiện điều gì?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Việc đó cho thấy Xu-di rất yêu quý Pam và hiểu sở thích của bạn.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Người bạn của Xu-di đón nhận giỏ hoa như thế nào? Theo em, Xu-di có cảm nghĩ gì trước cử chỉ, lời nói của bạn lúc nhận giỏ hoa?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Pam nâng giỏ hoa lên, dịu dàng áp mặt vào những bông hoa và nói to như để Xu-di nghe được: "Cảm ơn Xu-di, hi vọng cậu không còn giận mình!". Chắc hẳn là Xu-di rất cảm động trước cử chỉ, lời nói của Pam lúc nhận hoa.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">5. Đoạn kết của câu chuyện muốn nói điều gì?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Đã là bạn bè đích thực luôn có sự gắn bó thân thiết, chân thành, luôn ở bên nhau, quan tâm đến nhau dù không ở cạnh nhau thường xuyên nhưng tấm lòng luôn hướng về nhau, luôn trân trọng và có vị trí nhất định trong lòng mỗi người.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Ngày lễ Mừng xuân vào tháng Năm các bạn nhỏ thường làm gì?", "a": ["Làm những giỏ hoa rực rỡ mang tặng người thân, bạn bè", "Đi du xuân cùng bố mẹ", "Tổ chức cắm trại ở trường", "Đi mua sắm quần áo mới"], "c": 0 },
                        { "q": "Các bạn nhỏ tặng hoa cho người thân, bạn bè bằng cách nào?", "a": ["Gửi qua bưu điện", "Đưa tận tay chủ nhà", "Đặt lên bậc thềm, gõ cửa rồi ba chân bốn cẳng chạy trốn", "Nhờ bố mẹ mang đến tặng"], "c": 2 },
                        { "q": "Tại sao Xu-di lại giận Pam?", "a": ["Vì Pam không tặng hoa cho Xu-di", "Vì Pam có thêm bạn mới và không dành nhiều thời gian cho Xu-di", "Vì Pam làm hỏng đồ chơi của Xu-di", "Vì Pam chuyển nhà đi nơi khác"], "c": 1 },
                        { "q": "Khi thấy Xu-di buồn vì giận bạn, mẹ đã làm gì?", "a": ["Mắng Xu-di vì tính hay dỗi", "Khuyên Xu-di nên tìm bạn mới", "Ôm ấp, an ủi và khuyên nhủ Xu-di về tình bạn", "Bảo Xu-di không nên chơi với Pam nữa"], "c": 2 },
                        { "q": "Theo lời mẹ, Xu-di đã học được điều gì về tình bạn?", "a": ["Càng lớn sẽ càng có nhiều bạn, không thể chỉ chơi với một người", "Bạn bè phải luôn ở bên cạnh nhau mọi lúc mợi nơi", "Chỉ nên chơi với một người bạn thân duy nhất", "Không nên giận dỗi bạn bè lâu"], "c": 0 },
                        { "q": "Xu-di đã tặng Pam giỏ hoa có màu gì?", "a": ["Màu đỏ", "Màu xanh", "Màu vàng", "Màu tím"], "c": 2 },
                        { "q": "Tại sao Xu-di lại chọn hoa màu đó để tặng Pam?", "a": ["Vì đó là màu hoa mẹ Xu-di thích", "Vì đó là màu hoa Pam yêu thích", "Vì trong vườn chỉ có duy nhất loại hoa đó", "Vì hoa đó rẻ nhất"], "c": 1 },
                        { "q": "Pam đã làm gì khi nhận được giỏ hoa của Xu-di?", "a": ["Mang vào nhà cất ngay", "Nâng giỏ hoa lên, áp mặt vào hoa và nói lời cảm ơn", "Chia cho người bạn mới cùng ngắm", "Cất vào một góc vì vẫn còn giận Xu-di"], "c": 1 },
                        { "q": "Câu nói: 'hi vọng cậu không còn giận mình' của Pam cho thấy điều gì?", "a": ["Pam không biết Xu-di đang giận", "Pam rất trân trọng tình bạn với Xu-di và mong muốn làm hòa", "Pam muốn Xu-di phải xin lỗi mình", "Pam đang trêu chọc Xu-di"], "c": 1 },
                        { "q": "Bài học quan trọng nhất về tình bạn mà Xu-di rút ra ở cuối truyện là gì?", "a": ["Phải luôn tặng quà cho bạn vào các ngày lễ", "Bạn bè đích thực là đặt bạn trong tim nhưng không buộc họ luôn ở bên mình", "Chỉ nên chơi với những người bạn thích hoa màu vàng", "Không bao giờ được giận bạn thân"], "c": 1 },
                        { "q": "Từ 'bí mật' trong câu 'Chúng tôi thường bí mật làm những giỏ hoa rực rỡ' thuộc từ loại nào?", "a": ["Danh từ", "Động từ", "Tính từ", "Trạng từ"], "c": 2 },
                        { "q": "Từ 'rực rỡ' trong bài có nghĩa là gì?", "a": ["Có màu sắc tươi sáng, đẹp mắt và nổi bật", "Có mùi thơm ngào ngạt", "Rất to lớn", "Rất đắt tiền"], "c": 0 },
                        { "q": "Trong câu 'Tôi và Pam thân nhau như hình với bóng', tác giả sử dụng biện pháp nghệ thuật gì?", "a": ["Nhân hóa", "So sánh", "Điệp ngữ", "Đảo ngữ"], "c": 1 },
                        { "q": "Từ nào đồng nghĩa với từ 'đích thực'?", "a": ["Giả tạo", "Chân thực", "Hờ hững", "Tạm thời"], "c": 1 },
                        { "q": "Câu văn 'Mẹ dịu dàng vuốt tóc và lau nước mắt cho tôi' thuộc kiểu câu nào?", "a": ["Câu kể", "Câu hỏi", "Câu cảm", "Câu khiến"], "c": 0 }
                    ]
                }
            }
        },
        "212-thu-cua-bo": {
            "title": "Thư của bố",
            "week": 21,
            "subject": "Đọc",
            "theme": "Vẻ đẹp cuộc sống",
            "audio": "am_thanh/thuguibo.wav",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Thư của bố" },
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                                <!-- Cột trái (70%) - Bài đọc -->
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            
                                            <div class="serif-font text-gray-800 text-xl leading-relaxed relative text-left max-w-4xl mx-auto px-4 md:px-10">
                                                <p class="text-center italic text-gray-600 mb-8">Tác giả: Thuỵ Anh</p>
                                                <div class="space-y-8">
                                                    <div>
                                                        Con lớn lên, quen vắng bố trong nhà<br>
                                                        Hai mẹ con, nhà một phòng cũng trống<br>
                                                        Chỉ mong đợi những lá thư gió lộng<br>
                                                        Và mặn mòi hương biển xa xôi...<br>
                                                        Nghe êm đềm sóng lặng lững lờ trôi,<br>
                                                        Thấy đàn cá heo giỡn đùa mặt nước.
                                                    </div>
                                                    <div>
                                                        Thư không kể về cơn bão chờ phía trước,<br>
                                                        Dải đá ngầm, thăm thẳm nước đen.<br>
                                                        Nhịp bước khẩn trương khi khẩu lệnh vang lên,<br>
                                                        Mắt dõi theo vật ra-đa rà quét,<br>
                                                        Áo đọng muối khô, da nhận mùi nắng khét,...<br>
                                                        Thư chỉ nói về nỗi nhớ với thương yêu..
                                                    </div>
                                                    <div>
                                                        Con đã lớn khôn, đọc được cả những điều<br>
                                                        Chưa được viết trong thư người lính biển<br>
                                                        Nơi đầu sóng, sẵn sàng nghênh chiến<br>
                                                        Vẫn dịu dàng, êm ái lá thư xanh...
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                                </div>
                                                <div class="flex-grow">
                                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                                        Bài thơ là lời của người bố đang đi công tác ở đảo xa gửi về cho con, thể hiện tình yêu thương sâu nặng, nỗi nhớ da diết và niềm tin tưởng, hy vọng vào con ở nơi quê nhà.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <!-- Cột phải (30%) - Tìm hiểu bài -->
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <div class="mb-6 -mt-2">
                                            <img src="hinh_anh/thuguibo_minhhoa.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                                        </div>

                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div>

                                        <div class="space-y-4">
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Chiếc thư của bố có những đặc điểm gì?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Thế thư của bố gửi về rất nhanh, chắc nhờ "gió biển thổi mái chèo". Trong thư không chỉ có lời lẽ mà còn có cả "mùi nắng", "mùi muối" của biển đảo xa xôi.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Quà của bố gửi về cho con có những gì?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Bố gửi về cho con cả "nghìn dặm khơi xa", kèm theo một con sò và viên đá cuội lạ.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Vì sao bố lại gửi những món quà đó cho con?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Bố muốn con cảm nhận được vẻ đẹp của biển đảo quê hương, nơi bố đang ngày đêm canh giữ, đồng thời gửi gắm tình yêu thương bao la từ nơi xa gửi về.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Tình cảm của bố dành cho con thể hiện qua những từ ngữ, hình ảnh nào?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Tình cảm thể hiện qua việc bố viết thư gửi về rất nhanh, bố gửi những món quà đặc biệt của biển cả, bố kể về nơi bố ở với muôn loài chim và quan trọng nhất là những lời dặn dò con chăm ngoan, học giỏi.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">5. Khổ thơ cuối bài muốn nói điều gì?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Khổ thơ cuối khẳng định tình yêu thương vô bờ bến và sự hy vọng, tin tưởng của bố dành cho con. Bố mong con ở nhà ngoan ngoãn, học tốt để làm bố yên tâm công tác.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Người con trong bài thơ đã quen với điều gì?", "a": ["Quen với việc bố luôn ở nhà", "Quen với việc vắng bố trong nhà", "Quen với việc đi biển cùng bố", "Quen với việc viết thư cho bố"], "c": 1 },
                        { "q": "Hai mẹ con mong đợi điều gì từ bố?", "a": ["Những món quà từ biển", "Những lá thư gió lộng", "Những cuộc gọi điện thoại", "Những bức ảnh đẹp"], "c": 1 },
                        { "q": "Trong thư, bố kể về điều gì?", "a": ["Những cơn bão nguy hiểm", "Những khó khăn trong công việc", "Sóng êm đềm, cá heo giỡn đùa và nỗi nhớ thương", "Những trận chiến ác liệt"], "c": 2 },
                        { "q": "Bố không kể trong thư về điều gì?", "a": ["Cơn bão, dải đá ngầm, công việc khẩn trương", "Nỗi nhớ và thương yêu", "Hương biển xa xôi", "Đàn cá heo giỡn đùa"], "c": 0 },
                        { "q": "Tại sao bố không kể về những khó khăn trong thư?", "a": ["Vì bố quên mất", "Vì bố không muốn con lo lắng", "Vì những khó khăn đó không quan trọng", "Vì bố không gặp khó khăn gì"], "c": 1 },
                        { "q": "Người con đã 'đọc được cả những điều chưa được viết' nghĩa là gì?", "a": ["Con đã biết đọc thư rất giỏi", "Con đã hiểu được những khó khăn mà bố không nói ra", "Con đã tự viết thư thay bố", "Con đã đoán được nội dung thư"], "c": 1 },
                        { "q": "Nghề nghiệp của bố trong bài thơ là gì?", "a": ["Ngư dân", "Lính biển", "Thuyền trưởng", "Thợ lặn"], "c": 1 },
                        { "q": "Bài thơ thể hiện tình cảm gì của bố dành cho con?", "a": ["Sự nghiêm khắc", "Tình yêu thương sâu nặng và nỗi nhớ", "Sự thờ ơ", "Sự lo lắng quá mức"], "c": 1 },
                        { "q": "Cụm từ 'lá thư xanh' trong bài thơ ám chỉ điều gì?", "a": ["Thư được viết bằng mực xanh", "Thư được gửi qua bưu điện", "Thư của người lính biển gửi từ biển cả", "Thư được viết trên giấy màu xanh"], "c": 2 },
                        { "q": "Thông điệp chính của bài thơ là gì?", "a": ["Cuộc sống của người lính biển rất vất vả", "Tình yêu thương và sự hy sinh thầm lặng của người bố", "Biển cả rất đẹp và thơ mộng", "Con cái cần hiểu và thương yêu bố mẹ"], "c": 1 }
                    ]
                }
            }
        },
        "221-doan-thuyen-danh-ca": {
            "title": "Đoàn thuyền đánh cá",
            "week": 22,
            "subject": "Đọc",
            "theme": "Vẻ đẹp cuộc sống",
            "audio": "am_thanh/doanthuyendanhca.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Đoàn thuyền đánh cá" },
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            <div class="serif-font text-gray-800 text-xl leading-relaxed relative text-left max-w-4xl mx-auto px-4 md:px-10">
                                                <div class="space-y-8">
                                                    <div>Mặt trời xuống biển như hòn lửa<br>Sóng đã cài then, đêm sập cửa<br>Đoàn thuyền đánh cá lại ra khơi<br>Câu hát căng buồm cùng gió khơi.</div>
                                                    <div>Hát rằng: cá bạc Biển Đông lặng,<br>Cá thu Biển Đông như đoàn thoi<br>Đêm ngày dệt biển muôn luồng sáng<br>Đến dệt lưới ta, đoàn cá ơi!</div>
                                                    <div>Ta hát bài ca gọi cá vào<br>Gõ thuyền đã có nhịp trăng cao<br>Biển cho ta cá như lòng mẹ<br>Nuôi lớn đời ta tự buổi nào.</div>
                                                    <div>Sao mờ, kéo lưới kịp trời sáng<br>Ta kéo xoăn tay chùm cá nặng<br>Vảy bạc đuôi vàng loé rạng đông,<br>Lưới xếp buồm lên đón nắng hồng.</div>
                                                    <div>Câu hát căng buồm với gió khơi,<br>Đoàn thuyền chạy đua cùng mặt trời<br>Mặt trời đội biển nhô màu mới,<br>Mắt cá huy hoàng muôn dặm phơi.</div>
                                                </div>
                                                <p class="text-right font-black text-blue-900 uppercase tracking-widest text-sm mt-8">Huy Cận</p>
                                            </div>
                                        </div>
                                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                                </div>
                                                <div class="flex-grow">
                                                    <p class="text-lg font-bold leading-relaxed text-blue-50">Niềm vui lao động và tình yêu biển cả quê hương. Bài thơ thể hiện niềm vui của người lao động hòa với cảm xúc trước khung cảnh huy hoàng của biển cả.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <div class="mb-6 -mt-2">
                                            <img src="hinh_anh/doanthuyendanhca.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                                        </div>
                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div>
                                        <div class="space-y-4">
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Khung cảnh thiên nhiên lúc đoàn thuyền ra khơi được miêu tả như thế nào?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Đoàn thuyền ra khơi lúc mặt trời đang lặn, chuyển sang đêm. Tác giả dùng hình ảnh so sánh "như hòn lửa" và nhân hóa "sóng cài then, đêm sập cửa" để miêu tả biển cả gần gũi như ngôi nhà.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Những chi tiết nào thể hiện niềm vui và tình yêu biển cả của người lao động?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">• Tiếng hát căng buồm, xua tan mệt nhọc ("Ta hát bài ca gọi cá vào").<br>• Lòng biết ơn: Ví biển như "lòng mẹ" nuôi lớn đời ta tự bao đời.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Hình ảnh "đoàn thuyền chạy đua cùng mặt trời" ở khổ thơ cuối nói lên điều gì?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Hình ảnh này thể hiện sự hòa quyện giữa vẻ đẹp thiên nhiên rực rỡ và tư thế lao động khỏe khoắn, đầy hào khí, khẩn trương của người ngư dân khi trở về.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Tác giả của bài thơ \"Đoàn thuyền đánh cá\" là ai?", "a": ["Tố Hữu", "Trần Đăng Khoa", "Huy Cận", "Xuân Diệu"], "c": 2 },
                        { "q": "Đoàn thuyền đánh cá ra khơi vào thời điểm nào trong ngày?", "a": ["Bình minh", "Giữa trưa", "Hoàng hôn", "Nửa đêm"], "c": 2 },
                        { "q": "Trong khổ thơ đầu, \"Mặt trời xuống biển\" được so sánh với gì?", "a": ["Quả cầu lửa", "Hòn lửa", "Hòn than", "Ngọn đèn"], "c": 1 },
                        { "q": "Biện pháp nghệ thuật nào được sử dụng trong câu \"Sóng đã cài then, đêm sập cửa\"?", "a": ["So sánh", "Nhân hóa", "Điệp từ", "Đảo ngữ"], "c": 1 },
                        { "q": "Âm thanh nào cùng đoàn thuyền căng buồm ra khơi?", "a": ["Tiếng sóng vỗ", "Tiếng còi tàu", "Câu hát", "Tiếng gõ thuyền"], "c": 2 },
                        { "q": "Trong câu \"Cá thu Biển Đông như đoàn thoi\", tác giả tả loài cá nào?", "a": ["Cá bạc", "Cá nục", "Cá chim", "Cá thu"], "c": 3 },
                        { "q": "Ngư dân \"hát bài ca gọi cá vào\" với ý nghĩa gì?", "a": ["Xua đuổi thú dữ", "Xua tan mệt nhọc và cầu mong bội thu", "Thông báo vị trí", "Ru ngủ biển"], "c": 1 },
                        { "q": "Hình ảnh \"Biển cho ta cá như lòng mẹ\" thể hiện điều gì?", "a": ["Sợ hãi thiên nhiên", "Chinh phục thiên nhiên", "Lòng biết ơn gắn bó", "Thờ ơ với biển"], "c": 2 },
                        { "q": "Âm thanh nào đóng vai trò giữ nhịp cho bài ca gọi cá vào?", "a": ["Sóng vỗ", "Gió thổi", "Nhịp trăng cao gõ thuyền", "Mái chèo"], "c": 2 },
                        { "q": "Đoàn thuyền đánh cá trở về vào thời điểm nào?", "a": ["Giữa trưa", "Trăng lên", "Sao mờ, rạng đông", "Màn đêm"], "c": 2 },
                        { "q": "Hình ảnh \"Ta kéo xoăn tay chùm cá nặng\" gợi tả điều gì?", "a": ["Đang tập thể dục", "Vẻ đẹp khỏe khoắn và mẻ lưới nặng", "Vất vả đau đớn", "Sợ bão"], "c": 1 },
                        { "q": "Màu sắc nào mô tả cảnh rạng đông trong khổ 4?", "a": ["Vảy bạc", "Đuôi vàng", "Nắng hồng", "Tất cả các ý trên"], "c": 3 },
                        { "q": "Ý nghĩa của câu thơ \"Đoàn thuyền chạy đua cùng mặt trời\" là gì?", "a": ["Chạy trốn nắng", "Khí thế hào hùng, khẩn trương lao động", "Thi thể thao", "Bị đuổi"], "c": 1 },
                        { "q": "Bài thơ \"Đoàn thuyền đánh cá\" ca ngợi vẻ đẹp nào?", "a": ["Thuyền hiện đại", "Con người yêu lao động và biển khơi huy hoàng", "Biển đêm đáng sợ", "Bầu trời sao"], "c": 1 },
                        { "q": "Cảm hứng chủ đạo xuyên suốt bài thơ là gì?", "a": ["Buồn man mác", "Lo lắng hiểm nguy", "Vui tươi, lạc quan, hăng say lao động", "Cô đơn"], "c": 2 }
                    ]
                }
            }
        },
        "222-khu-rung-cua-mat": {
            "title": "Khu rừng của Mát",
            "week": 22,
            "subject": "Đọc",
            "theme": "Vẻ đẹp cuộc sống",
            "audio": "am_thanh/khu-rung-cua-mat.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Khu rừng của Mát" },
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                                <p class="mb-4">Mát sống với ông nội ở "Trang trại rừng" – một trang trại rộng lớn, nổi tiếng trong vùng. Đây là cơ nghiệp của tổ tiên để lại. Trang trại trồng nhiều loại cây, trong đó có những giống cây quý hiếm.</p>
                                                <p class="mb-4">Hằng ngày, Mát cùng ông chăm sóc rừng cây. Dưới sự chỉ dạy của ông, Mát nhớ được tên và đặc tính của nhiều loại cây. Năm Mát tròn mười tám tuổi, ông nội qua đời. Trước khi mất, ông gửi gắm trang trại cho Mát. Mát cũng hứa với ông sẽ bảo vệ trang trại thật tốt và gìn giữ hồi ức đẹp đã có cùng ông tại nơi này.</p>
                                                <p class="mb-4">Đáng tiếc, một đêm nọ, sấm chớp đùng đùng nổi lên. Một tia sét đánh trúng ngọn cây cao nhất trong trang trại. Cây bốc cháy, ngọn lửa mau chóng lan khắp rừng. Mọi người hô hào, cùng nhau dập lửa, nhưng đành bất lực trước ngọn lửa cao cả chục mét. Trang trại cháy suốt một ngày và một đêm mới dần tắt.</p>
                                                <p class="mb-4">Nhìn cảnh hoang tàn của trang trại, Mát đau xót và kiệt sức, ngất lịm đi. Mọi người vội đưa anh vào bệnh viện. Lúc tỉnh dậy, anh buồn bã và tuyệt vọng. Bà lão cạnh giường của Mát thấy vậy, liền hỏi:</p>
                                                <p class="mb-4 pl-8 italic text-gray-600">– Chàng trai trẻ, sao trông cậu ủ rũ vậy?</p>
                                                <p class="mb-4 pl-8 italic text-gray-600">– Cây cối trong trang trại nhà cháu bị cháy sạch rồi bà ạ! – Mát buồn rầu đáp.</p>
                                                <p class="mb-4 pl-8 italic text-gray-600">– Cây bị thiêu cháy thì trồng lại là được. Cậu còn trẻ mà!</p>
                                                <p class="mb-4">Nghe bà cụ nói, Mát bừng tỉnh.</p>
                                                <p class="mb-4">Xuất viện trở về, Mát thuê người đến, biến những thân cây bị đốt cháy thành than củi, đem bán để có tiền mua cây giống. Mát mua cây giống, trồng trong trang trại.</p>
                                                <p class="mb-4">Nhiều năm sau, trang trại lại được phủ một màu xanh mướt.</p>
                                                <p class="text-right font-black text-blue-900 uppercase tracking-widest text-sm mt-8">(Theo Truyện đọc lớp 5)</p>
                                            </div>
                                        </div>
                                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                                </div>
                                                <div class="flex-grow">
                                                    <p class="text-lg font-bold leading-relaxed text-blue-50">Ý chí vươn lên và tình yêu thiên nhiên. Mát không bỏ cuộc trước khó khăn mà tìm cách khôi phục trang trại, giữ trọn lời hứa với ông nội.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <div class="mb-6 -mt-2">
                                            <img src="hinh_anh/khurungcuamat.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                                        </div>
                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div>
                                        <div class="space-y-4">
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Chuyện gì đã xảy ra với trang trại của Mát trong một đêm nọ?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Một đêm nọ, sấm sét đánh trúng cây cao nhất, gây cháy lan khắp trang trại. Dù mọi người cố gắng dập lửa nhưng trang trại vẫn bị thiêu rụi suốt một ngày một đêm.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Lời khuyên của bà cụ ở bệnh viện đã giúp Mát thay đổi suy nghĩ như thế nào?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Bà cụ khuyên: "Cây bị thiêu cháy thì trồng lại là được. Cậu còn trẻ mà!". Lời này giúp Mát bừng tỉnh, nhận ra mình vẫn còn cơ hội để bắt đầu lại thay vì tuyệt vọng.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Mát đã làm gì để khôi phục lại trang trại rừng của mình?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Mát cho biến những thân cây cháy thành than củi để bán lấy tiền mua cây giống mới, sau đó kiên trì trồng lại trang trại cho đến khi nó xanh tươi trở lại.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Trang trại của Mát tên gọi là gì?", "a": ["Trang trại cây", "Trang trại rừng", "Trang trại xanh", "Trang trại ông nội"], "c": 1 },
                        { "q": "Mát thừa kế trang trại khi bao nhiêu tuổi?", "a": ["16 tuổi", "17 tuổi", "18 tuổi", "19 tuổi"], "c": 2 },
                        { "q": "Nguyên nhân gây cháy trang trại là gì?", "a": ["Do người đốt rừng", "Do sét đánh trúng cây cao nhất", "Do lửa từ nhà bếp lan ra", "Do trẻ em nghịch lửa"], "c": 1 },
                        { "q": "Đám cháy trang trại kéo dài trong bao lâu?", "a": ["Một ngày", "Một đêm", "Một ngày một đêm", "Hai ngày"], "c": 2 },
                        { "q": "Khi thấy trang trại bị thiêu rụi, phản ứng của Mát như thế nào?", "a": ["Bình tĩnh tìm cách dập lửa", "Đau xót, kiệt sức và ngất lịm", "Bỏ chạy khỏi trang trại", "Lập tức lên kế hoạch trồng lại"], "c": 1 },
                        { "q": "Ai đã đưa ra lời khuyên giúp Mát bừng tỉnh khi ở bệnh viện?", "a": ["Ông nội hiện về", "Bác sĩ điều trị", "Bà lão cạnh giường bệnh", "Bạn thân của Mát"], "c": 2 },
                        { "q": "Lời khuyên \"Cây bị thiêu cháy thì trồng lại là được\" có ý nghĩa gì?", "a": ["Khuyên Mát nên đi mua cây khác", "Nhắc Mát vẫn còn trẻ và có thể bắt đầu lại", "Chê bai sự yếu đuối của Mát", "Xúi giục Mát đi làm nghề khác"], "c": 1 },
                        { "q": "Mát đã làm gì để có tiền mua cây giống trồng lại rừng?", "a": ["Vay tiền ngân hàng", "Biến thân cây cháy thành than củi để bán", "Bán đất trang trại", "Xin sự trợ giúp của chính phủ"], "c": 1 },
                        { "q": "Trang trại của Mát nổi tiếng trong vùng vì điều gì?", "a": ["Có nhiều thú dữ", "Gần trung tâm thành phố", "Cơ nghiệp tổ tiên và có nhiều giống cây quý", "Có nhiều vàng bạc"], "c": 2 },
                        { "q": "Mát hứa với ông nội điều gì trước khi ông mất?", "a": ["Sẽ trở nên thật giàu có", "Bảo vệ trang trại và gìn giữ hồi ức về ông", "Sẽ đi du học nước ngoài", "Sẽ bán trang trại lấy tiền chia cho mọi người"], "c": 1 },
                        { "q": "Nhiều năm sau khi trồng lại, trang trại của Mát ra sao?", "a": ["Vẫn là một đống tro tàn", "Được chuyển đổi thành khu công nghiệp", "Lại được phủ một màu xanh mướt", "Bị bỏ hoang vì Mát đi xa"], "c": 2 },
                        { "q": "Qua câu chuyện, em thấy Mát là người như thế nào?", "a": ["Yếu đuối và dễ bỏ cuộc", "Có ý chí vươn lên và yêu thiên nhiên", "Chỉ biết nghe lời người khác", "Hay mơ mộng hão huyền"], "c": 1 },
                        { "q": "Biện pháp nào giúp Mát khôi phục rừng nhanh nhất?", "a": ["Chờ đợi rừng tự tái sinh", "Mua cây giống và trồng lại trên đất cũ", "Thuê thợ về xây tường bao quanh", "Đốt sạch phần còn lại"], "c": 1 },
                        { "q": "Thông điệp chính của câu chuyện là gì?", "a": ["Luôn cẩn thận với sấm sét", "Không bỏ cuộc trước khó khăn, nghịch cảnh", "Trồng rừng rất tốn kém", "Than củi là mặt hàng dễ bán"], "c": 1 },
                        { "q": "Cảm hứng chủ đạo của bài đọc \"Khu rừng của Mát\" là gì?", "a": ["Sự hoang tàn, u tối", "Ca ngợi nghị lực sống và niềm tin vào tương lai", "Sự hối tiếc về quá khứ", "Sự sợ hãi trước thiên nhiên"], "c": 1 }
                    ]
                }
            }
        },
        "231-hoi-thoi-com-thi-o-dong-van": {
            "title": "Hội thổi cơm thi ở Đồng Vân",
            "week": 23,
            "subject": "Đọc",
            "theme": "Hương sắc trăm miền",
            "audio": "am_thanh/hoithoicomthi.wav",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Hội thổi cơm thi ở Đồng Vân" },
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                                <p class="mb-4">Hội thổi cơm thi ở làng Đồng Vân bắt nguồn từ các cuộc trẩy quân đánh giặc của người Việt cổ bên bờ sông Đáy xưa.</p>
                                                <p class="mb-4">Hội thi bắt đầu bằng việc lấy lửa. Khi tiếng trống hiệu vừa dứt, bốn thanh niên của bốn đội nhanh như sóc, thoan thoắt leo lên bốn cây chuối bôi mỡ bóng nhẫy để lấy nén hương cắm ở trên ngọn. Có người leo lên, tụt xuống, lại leo lên,... Khi mang được nén hương xuống, người dự thi được phát ba que diêm để châm vào hương cho cháy thành ngọn lửa. Trong khi đó, những người trong đội, mỗi người một việc. Người thì ngồi vót những thanh tre già thành những chiếc đũa bông. Người thì nhanh tay giã thóc, giần sàng thành gạo, người thì lấy nước và bắt đầu thổi cơm.</p>
                                                <p class="mb-4">Mỗi người nấu cơm đều mang một cái cần tre được cắm rất khéo vào dây lưng, uốn cong hình cánh cung từ phía sau ra trước mặt, đầu cần treo cái nồi nho nhỏ. Người nấu cơm tay giữ cần, tay cầm đuốc đung đưa cho ánh lửa bập bùng. Các đội vừa thổi cơm vừa đan xen nhau uốn lượn trên sân đình trong sự cổ vũ nồng nhiệt của người xem hội.</p>
                                                <p class="mb-4">Sau độ một giờ rưỡi, các nồi cơm được lần lượt trình trước cửa đình. Mỗi nồi cơm được đánh một số để giữ bí mật. Ban giám khảo chấm theo ba tiêu chí: cơm trắng, dẻo và không có cháy. Cuộc thi nào cũng hồi hộp và việc giật giải đã trở thành niềm tự hào khó có gì sánh nổi đối với dân làng.</p>
                                                <p class="text-right italic font-bold text-gray-600 mt-6">(Theo Minh Nhương)</p>
                                            </div>
                                        </div>
                                        <div class="mt-8 bg-orange-50 rounded-[32px] p-8 relative overflow-hidden shadow-xl border border-orange-100 transform hover:scale-[1.01] transition-transform">
                                            <div class="absolute -right-10 -top-10 w-40 h-40 bg-orange-100 rounded-full opacity-50"></div>
                                            <div class="flex flex-col md:flex-row items-center gap-6 relative z-10">
                                                <div class="bg-orange-600 p-6 rounded-2xl text-white shadow-lg shrink-0 text-center min-w-[160px]">
                                                    <p class="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Thông điệp</p>
                                                    <h3 class="text-xl font-black uppercase">Nội dung chính</h3>
                                                </div>
                                                <div class="flex-grow">
                                                    <p class="text-gray-700 font-bold leading-relaxed text-lg">Bài đọc giúp em hiểu rõ hơn về ý nghĩa của lễ hội ở mỗi vùng quê. Hội thi không chỉ là một hoạt động văn hóa giải trí mà còn là cách để kết nối quá khứ với hiện tại, thể hiện sự khéo léo, tài hoa và lòng tự hào về truyền thống dân tộc.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <div class="mb-6 -mt-2">
                                            <img src="hinh_anh/hoithoicomthi.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                                        </div>
                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-200">
                                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div>
                                        <div class="space-y-4">
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Hội thổi cơm thi ở Đồng Vân bắt nguồn từ đâu?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Bắt nguồn từ các cuộc trẩy quân đánh giặc của người Việt cổ bên bờ sông Đáy xưa.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Cách lấy lửa được miêu tả như thế nào?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Thanh niên leo lên cây chuối bôi mỡ bóng nhẫy để lấy nén hương trên ngọn, sau đó châm diêm vào hương cho cháy thành lửa.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Các thành viên phối hợp thế nào?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Mỗi người một việc: vót tre thành đũa bông, giã thóc, giần sàng gạo, lấy nước. Họ phối hợp chủ động và rất khéo léo.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Tác giả muốn nói điều gì qua bài đọc?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Ca ngợi, tự hào về nét đẹp văn hóa cổ truyền của dân tộc và khơi dậy ý thức giữ gìn các giá trị tốt đẹp đó.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Hội thổi cơm thi ở làng Đồng Vân bắt nguồn từ sự kiện lịch sử nào?", "a": ["Lễ hội mừng lúa mới của người nông dân", "Các cuộc trẩy quân đánh giặc của người Việt cổ bên bờ sông Đáy xưa", "Cuộc thi kén rể của vua Hùng", "Lễ hội cầu mưa thuận gió hòa"], "c": 1 },
                        { "q": "Thử thách đầu tiên để lấy lửa nấu cơm trong cuộc thi là gì?", "a": ["Chạy thi đi lấy lửa từ đình làng", "Dùng đá đánh lửa", "Leo lên cây chuối bôi mỡ bóng nhẫy để lấy nén hương", "Giải câu đố để nhận đuốc"], "c": 2 },
                        { "q": "Hình ảnh \"nhanh như sóc, thoăn thoắt leo lên\" dùng để miêu tả hành động của ai?", "a": ["Những người đi xem hội", "Ban giám khảo cuộc thi", "Bốn thanh niên của bốn đội leo cây chuối lấy lửa", "Những người đang vo gạo"], "c": 2 },
                        { "q": "Dụng cụ nấu cơm trong hội thi được thiết kế đặc biệt như thế nào?", "a": ["Nồi cơm được đặt trên kiềng ba chân cố định", "Cần tre cắm vào dây lưng, uốn cong hình cánh cung, đầu treo cái nồi nhỏ", "Nồi cơm được đội trên đầu người nấu", "Nồi cơm được treo trên một cành cây cao"], "c": 1 },
                        { "q": "Trong quá trình nấu cơm, người dự thi di chuyển như thế nào?", "a": ["Đứng yên một chỗ để giữ lửa", "Ngồi xổm để chắn gió", "Vừa thổi cơm vừa đan xen nhau uốn lượn trên sân đình", "Chạy vòng quanh sân đình"], "c": 2 },
                        { "q": "Ngoài việc lấy lửa và nấu cơm, các đội thi còn phải thực hiện những công việc nào khác xen kẽ?", "a": ["Múa hát và đánh trống", "Vót tre thành đũa, giã thóc, giần sàng gạo, lấy nước", "Đi chợ mua thức ăn và bày biện mâm cỗ", "May quần áo và trang trí trại"], "c": 1 },
                        { "q": "Sự phối hợp giữa các thành viên trong đội thi được nhận xét như thế nào?", "a": ["Rời rạc, thiếu thống nhất", "Căng thẳng, hay tranh cãi", "Phối hợp với nhau nhịp nhàng, chủ động và rất khéo léo", "Chậm chạp nhưng chắc chắn"], "c": 2 },
                        { "q": "Người nấu cơm giữ lửa bằng cách nào khi di chuyển?", "a": ["Nhờ người khác cầm hộ đuốc", "Đặt đuốc xuống đất", "Tay giữ cần, tay cầm đuốc đung đưa cho ánh lửa bập bùng", "Dùng đèn dầu thay cho đuốc"], "c": 2 },
                        { "q": "Thời gian dành cho việc thổi cơm là bao lâu?", "a": ["Độ một giờ rưỡi", "Nửa ngày", "Ba mươi phút", "Đến khi trời tối"], "c": 0 },
                        { "q": "Ban giám khảo chấm điểm nồi cơm dựa trên những tiêu chí nào?", "a": ["Cơm chín đều, có nhiều cháy giòn", "Cơm có màu sắc đẹp mắt", "Cơm trắng, dẻo và không có cháy", "Cơm nấu được số lượng nhiều nhất"], "c": 2 },
                        { "q": "Để đảm bảo công bằng, các nồi cơm trước khi chấm được xử lý ra sao?", "a": ["Giấu tên đội thi", "Đánh số để giữ bí mật", "Đảo lộn vị trí các nồi", "Cho tất cả cơm vào một nồi lớn"], "c": 1 },
                        { "q": "Việc giật giải trong cuộc thi có ý nghĩa gì đối với dân làng?", "a": ["Nhận được nhiều tiền thưởng", "Được miễn làm việc đồng áng", "Là niềm tự hào khó có gì sánh nổi", "Được làm trưởng làng"], "c": 2 },
                        { "q": "Không khí của hội thi được miêu tả qua chi tiết nào?", "a": ["Mọi người im lặng theo dõi", "Sự cổ vũ nồng nhiệt của người xem hội, tiếng trống hiệu", "Tiếng cãi vã ồn òa", "Mọi người lo lắng, hồi hộp không dám nhìn"], "c": 1 },
                        { "q": "Tác giả muốn ca ngợi điều gì qua bài đọc này?", "a": ["Ca ngợi sức khỏe phi thường của thanh niên trai tráng", "Ca ngợi nét đẹp văn hóa cổ truyền và sự tài hoa, khéo léo của người dân", "Ca ngợi sự giàu có của làng Đồng Vân", "Ca ngợi kĩ thuật trồng lúa nước"], "c": 1 },
                        { "q": "Qua bài đọc, em hiểu ý nghĩa sâu xa của các lễ hội dân gian là gì?", "a": ["Chỉ để vui chơi giải trí", "Để tụ tập ăn uống linh đình", "Giúp kết nối quá khứ với hiện tại, giữ gìn và tôn vinh bản sắc dân tộc", "Để thi thố xem ai giỏi nhất làng"], "c": 2 }
                    ]
                }
            }
        },
        "232-nhung-bup-che-tren-cay-co-thu": {
            "title": "Những búp chè trên cây cổ thụ",
            "week": 23,
            "subject": "Đọc",
            "theme": "Hương sắc trăm miền",
            "audio": "am_thanh/nhungbupche.wav",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Những búp chè trên cây cổ thụ" },
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                                <p class="mb-4">Tôi có một cậu bạn người Mông tên là Thào A Sùng. Mỗi lần gặp cậu, tôi lại được nghe cậu kể về bản làng Tà Xùa quê hương cậu, về những cây chè cổ thụ cao lớn ở đó với giọng tự hào. Cậu luôn trăn trở vì còn ít người biết đến chè Tà Xùa.</p>
                                                <p class="mb-4">Một lần, huyện tôi tổ chức cuộc thi "Bảy sắc cầu vồng" giữa các trường. Chúng tôi gặp nhau trong một trận đấu. Chỉ còn câu hỏi cuối cùng khi tỉ số đang nghiêng về trường tôi.</p>
                                                <p class="mb-4 italic">– Quê hương Bắc Yên của chúng ta có loại chè rất ngon. Em biết gì về loại chè ấy?</p>
                                                <p class="mb-4">Tim tôi đập mạnh. Đèn bên đội Thào A Sùng loé sáng. Cậu từ từ đứng lên.</p>
                                                <p class="mb-4">– Thưa cô,... Đó là chè ở Tà Xùa quê em ạ.</p>
                                                <p class="mb-4 italic text-blue-700">– Đúng rồi! Em biết những gì về chè Tà Xùa?</p>
                                                <p class="mb-4">– Chè Tà Xùa được làm từ những búp chè to, dưới lá có lớp lông tơ mịn, trắng như tuyết, mọc trên những cây cổ thụ cao lớn. Nước chè khi pha có màu vàng ánh xanh, thơm ngan ngát. Mẹ em bảo khi uống, vị ban đầu sẽ hơi chát, sau đó đọng lại là vị ngọt. Chè ngon, nhưng cây chè còn ít, nên không được nhiều người biết đến ạ.</p>
                                                <p class="mb-4 italic text-blue-700">– Em có ước mơ nào cho chè Tà Xùa không?</p>
                                                <p class="mb-4">Cậu cười, ánh mắt tràn ngập khát khao.</p>
                                                <p class="mb-4 font-bold">– Em ước làm kĩ sư nông nghiệp để giúp bản trồng được nhiều chè hơn. Em sẽ mang chè Tà Xùa đi khắp thế giới.</p>
                                                <p class="mb-4">Hội trường rộ tiếng vỗ tay. Trong phút chốc, chúng tôi như quên mất cuộc thi, chỉ xôn xao hỏi nhau về cây chè quê hương.</p>
                                                <p class="mb-4">Buổi tối, Thào A Sùng đến nhà tôi chơi. Mẹ tôi nói ngày mai sẽ đến Tà Xùa để mua chè. Mẹ bảo cứ nghĩ đến chén nước chè trong veo, hương thiên nhiên nồng nàn, nóng đến sưởi ấm bàn tay là muốn đến Tà Xùa ngay.</p>
                                                <p class="mb-4">Thào A Sùng cười thật tươi. Trong mắt cậu, tôi như thấy những đồi chè bạt ngàn, thân cây đẫm sương còn ngọn vươn cao đón nắng.</p>
                                                <p class="text-right italic font-bold text-gray-600 mt-6">(Theo Nguyễn Hương)</p>
                                            </div>
                                        </div>
                                        <div class="mt-8 bg-blue-50 rounded-[32px] p-8 relative overflow-hidden shadow-xl border border-blue-100 transform hover:scale-[1.01] transition-transform">
                                            <div class="absolute -right-10 -top-10 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
                                            <div class="flex flex-col md:flex-row items-center gap-6 relative z-10">
                                                <div class="bg-blue-600 p-6 rounded-2xl text-white shadow-lg shrink-0 text-center min-w-[160px]">
                                                    <p class="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Thông điệp</p>
                                                    <h3 class="text-xl font-black uppercase">Nội dung chính</h3>
                                                </div>
                                                <div class="flex-grow">
                                                    <p class="text-gray-700 font-bold leading-relaxed text-lg">Bài đọc ca ngợi vẻ đẹp độc đáo của những búp chè trên cây cổ thụ ở Tà Xùa với những nét đặc trưng về búp, lá và vị chè. Qua đó, tác giả khắc họa tình yêu quê hương tha thiết và ước mơ đẹp đẽ của bạn nhỏ Thào A Sùng: mong muốn lan tỏa và giới thiệu sản vật quý giá của quê hương đến với mọi người khắp thế giới.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <div class="mb-6 -mt-2">
                                            <img src="hinh_anh/nhungbupche.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                                        </div>
                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-200">
                                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div>
                                        <div class="space-y-4">
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Thào A Sùng kể những gì về quê hương?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Thào A Sùng kể về bản làng Tà Xùa quê hương cậu, về những cây chè cổ thụ cao lớn ở đó với giọng tự hào. Cậu luôn trăn trở vì còn ít người biết đến chè Tà Xùa.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Sùng giới thiệu thế nào về chè Tà Xùa?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <ul class="list-disc ml-4 space-y-1 font-medium">
                                                            <li><b>Cây chè:</b> Mọc trên những cây cổ thụ cao lớn.</li>
                                                            <li><b>Búp chè:</b> Búp chè to, dưới lá có lớp lông tơ mịn, trắng như tuyết.</li>
                                                            <li><b>Nước chè:</b> Có màu vàng ánh xanh, thơm ngan ngát; ban đầu hơi chát, sau đọng vị ngọt.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Thào A Sùng mơ ước điều gì?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Mơ ước làm kĩ sư nông nghiệp để giúp bản trồng nhiều chè hơn và mang chè Tà Xùa đi khắp thế giới. Chi tiết: cậu cười, ánh mắt tràn ngập khát khao khi trả lời.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Vì sao các bạn quên mất cuộc thi?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Vì các bạn bị cuốn hút bởi lời giới thiệu đầy tự hào và hấp dẫn của Sùng, nhận ra mình còn biết ít về sản vật quê hương và muốn tìm hiểu thêm.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Nhân vật Thào A Sùng trong bài là người dân tộc nào?", "a": ["Dân tộc Thái", "Dân tộc Mông", "Dân tộc Dao", "Dân tộc Mường"], "c": 1 },
                        { "q": "Quê hương của Thào A Sùng ở đâu?", "a": ["Mộc Châu, Sơn La", "Bản Tà Xùa, huyện Bắc Yên", "Sa Pa, Lào Cai", "Đồng Văn, Hà Giang"], "c": 1 },
                        { "q": "Thái độ của Sùng khi kể về những cây chè cổ thụ quê mình là gì?", "a": ["Buồn bã", "Lo lắng", "Tự hào", "Ngại ngùng"], "c": 2 },
                        { "q": "Điều gì khiến Sùng luôn cảm thấy trăn trở về đặc sản quê hương?", "a": ["Vì chè bị sâu bệnh", "Vì còn ít người biết đến chè Tà Xùa", "Vì giá chè quá rẻ", "Vì không ai biết trồng chè"], "c": 1 },
                        { "q": "Cuộc thi mà các bạn học sinh tham gia có tên là gì?", "a": ["Bảy sắc cầu vồng", "Rung chuông vàng", "Đường lên đỉnh Olympia", "Em yêu Tiếng Việt"], "c": 0 },
                        { "q": "Câu hỏi quyết định trong cuộc thi hỏi về sản vật nào?", "a": ["Một loại bánh đặc sản", "Một loài hoa quý", "Một loại chè rất ngon của quê hương Bắc Yên", "Một loại gạo nếp nương"], "c": 2 },
                        { "q": "Búp chè Tà Xùa được miêu tả có đặc điểm gì đặc biệt?", "a": ["Búp nhỏ, màu tím ngắt", "Búp to, dưới lá có lớp lông tơ mịn, trắng như tuyết", "Búp dài, nhọn và không có lông", "Búp màu đỏ tía, lá dày"], "c": 1 },
                        { "q": "Cây chè ở Tà Xùa có hình dáng như thế nào?", "a": ["Là những bụi cây thấp ngang lưng người", "Là những cây cổ thụ cao lớn", "Là những dây leo trên giàn", "Là những cây thân cỏ mọc sát đất"], "c": 1 },
                        { "q": "Nước chè Tà Xùa khi pha ra có màu sắc và hương thơm như thế nào?", a: ["Màu đỏ đậm, không mùi", "Màu vàng ánh xanh, thơm ngan ngát", "Màu nâu nhạt, mùi hắc", "Màu xanh ngắt, thơm mùi hoa nhài"], c: 1 },
                        { "q": "Vị của chè Tà Xùa được Sùng miêu tả ra sao?", "a": ["Ngọt lịm ngay từ đầu", "Ban đầu hơi chát, sau đó đọng lại là vị ngọt", "Rất đắng, khó uống", "Chua thanh và mát"], "c": 1 },
                        { "q": "Ước mơ nghề nghiệp trong tương lai của Thào A Sùng là gì?", "a": ["Trở thành hướng dẫn viên du lịch", "Trở thành thầy giáo", "Trở thành kĩ sư nông nghiệp", "Trở thành nhà kinh doanh"], "c": 2 },
                        { "q": "Mục đích chính trong ước mơ của Sùng là gì?", "a": ["Để làm giàu cho bản thân", "Giúp bản trồng nhiều chè hơn và mang chè đi khắp thế giới", "Để được đi du lịch nhiều nơi", "Để chiến thắng trong cuộc thi"], "c": 1 },
                        { "q": "Phản ứng của mọi người trong hội trường sau câu trả lời của Sùng là gì?", "a": ["Im lặng lắng nghe", "Cười chê ước mơ của Sùng", "Vỗ tay rộ lên, quên mất cuộc thi và xôn xao hỏi về cây chè", "Yêu cầu ban giám khảo chấm điểm ngay"], "c": 2 },
                        { "q": "Mẹ của nhân vật \"tôi\" đã quyết định làm gì sau khi nghe chuyện?", "a": ["Mời Sùng đến nhà ăn cơm", "Đặt mua chè qua mạng", "Ngày mai sẽ đến Tà Xùa ngay để mua chè", "Đi học cách pha chè"], "c": 2 },
                        { "q": "Nội dung chính của bài đọc muốn ca ngợi điều gì?", "a": ["Ca ngợi tài năng hùng biện của bạn Sùng", "Ca ngợi vẻ đẹp của chè Tà Xùa và tình yêu, khát vọng lan tỏa sản vật quê hương của bạn nhỏ", "Ca ngợi cảnh đẹp hùng vĩ của núi rừng Tây Bắc", "Ca ngợi sự kịch tính của cuộc thi kiến thức"], "c": 1 }
                    ]
                }
            }
        },
        "241-huong-com-mua-thu": {
            "title": "Hương cốm mùa thu",
            "week": 24,
            "subject": "Đọc",
            "theme": "Hương sắc trăm miền",
            "audio": "am_thanh/huongcommuathu.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Hương cốm mùa thu" },
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative">
                                                <div class="md:pl-12 pl-4">
                                                    <p class="mb-4 italic">
                                                        Tháng Chín heo may về phố<br>
                                                        Dắt theo hương cốm vào thu<br>
                                                        Sớm nay xôn xao ô cửa<br>
                                                        Gió thơm vừa ghé – ô kìa!
                                                    </p>
                                                    <p class="mb-4 italic">
                                                        Gió kể: Ngày xưa hạt thóc<br>
                                                        Trời đem gieo tặng nhà nông<br>
                                                        Sớm khuya mồ hôi đổ xuống<br>
                                                        Đợi mùa cây lúa trĩu bông!
                                                    </p>
                                                    <p class="mb-4 italic">
                                                        Hạt lúa tròn căng hơi sữa<br>
                                                        Thảo thơm dâng tặng cho đời<br>
                                                        Tay me, tay ba sàng sẩy<br>
                                                        Cốm mang hồn đất, hồn người.
                                                    </p>
                                                    <p class="mb-4 italic">
                                                        Em thấy màu vàng của nắng<br>
                                                        Em thấy màu xanh của trời<br>
                                                        Em thấy màu nâu của đất<br>
                                                        Ủ trong hạt cốm xanh ngời!
                                                    </p>
                                                    <p class="mb-4 italic">
                                                        Tháng Chín bước chân ra phố<br>
                                                        Tay lùa từng ngón gió thơm<br>
                                                        Hồ Gươm chớp đôi mắt biếc<br>
                                                        Nhắc mùa hương cốm vừa lên!
                                                    </p>
                                                    <p class="text-right italic font-bold text-gray-600 mt-6">(Bảo Ngọc)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                                </div>
                                                <div class="flex-grow">
                                                    <p class="text-lg font-bold leading-relaxed text-blue-50">Cốm là một đặc sản tiêu biểu của Hà Nội, là một thức quà ngon. Cốm được làm từ những tinh túy của đất trời và bàn tay khéo léo, cần cù của người làm cốm, nhắc nhở chúng ta biết trân trọng công sức lao động của người nông dân.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <div class="mb-6 -mt-2 text-center">
                                            <img src="hinh_anh/huong-com-mua-thu.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500 max-w-[240px] mx-auto">
                                        </div>
                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div>
                                        <div class="space-y-4">
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">1. Tìm trong khổ thơ thứ nhất những chi tiết nói về khung cảnh thiên nhiên và cảm xúc của con người khi mùa cốm đến.</span>
                                                    <div class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors shrink-0 ml-2"><svg class="w-3 h-3 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="text-sm font-medium"><strong>Thiên nhiên:</strong> Tháng Chín, mùa thu, gió heo may thổi về phố.<br><strong>Cảm xúc:</strong> Xôn xao, ngỡ ngàng, vui mừng (Sớm nay xôn xao ô cửa, ô kìa!).</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">2. Dựa vào lời của gió, hãy kể lại hành trình làm ra hạt cốm.</span>
                                                    <div class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors shrink-0 ml-2"><svg class="w-3 h-3 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="text-sm font-medium">Trời gieo hạt thóc -> Người nông dân vất vả chăm sóc -> Lúa trĩu bông -> Thu hoạch khi hạt tròn căng hơi sữa -> Qua bàn tay mẹ, ba sàng sẩy mới thành cốm.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">3. Cách tả màu sắc cho thấy bạn nhỏ cảm nhận thế nào về món quà kì diệu của mùa thu?</span>
                                                    <div class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors shrink-0 ml-2"><svg class="w-3 h-3 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="text-sm font-medium">Bạn nhỏ nhận thấy cốm là sự góp sức của thiên nhiên (nắng vàng, trời xanh, đất nâu). Tất cả ủ trong hạt cốm xanh ngời kì diệu.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">4. Chi tiết nào cho thấy cốm là thức quà đặc trưng của Hà Nội?</span>
                                                    <div class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors shrink-0 ml-2"><svg class="w-3 h-3 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="text-sm font-medium">Chi tiết nhắc đến "Hồ Gươm" - địa danh nổi tiếng của Thủ đô Hà Nội.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">5. Em cảm nhận được điều gì về tình cảm của tác giả đối với hương cốm?</span>
                                                    <div class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors shrink-0 ml-2"><svg class="w-3 h-3 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="text-sm font-medium">Tác giả yêu tha thiết hương cốm và mùa thu Hà Nội; trân trọng, biết ơn thiên nhiên và người lao động; tự hào về thức quà quê hương.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 5 },
                    "questions": [
                        { "q": "Bài thơ 'Hương cốm mùa thu' của tác giả nào?", "a": ["Trần Đăng Khoa", "Bảo Ngọc", "Huy Cận", "Xuân Quỳnh"], "c": 1 },
                        { "q": "Mùa cốm bắt đầu vào tháng mấy?", "a": ["Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một"], "c": 1 },
                        { "q": "Gió gì thổi về phố mang theo hương cốm?", "a": ["Gió mùa đông bắc", "Gió Lào", "Gió heo may", "Gió nam"], "c": 2 },
                        { "q": "Trong bài thơ, hạt lúa lúc còn non được ví với điều gì?", "a": ["Hạt ngọc", "Tròn căng hơi sữa", "Màu vàng nắng", "Màu xanh trời"], "c": 1 },
                        { "q": "Để có hạt cốm, ba và mẹ đã phải làm gì?", "a": ["Gieo hạt", "Cày cấy", "Sàng sẩy", "Tưới nước"], "c": 2 }
                    ]
                }
            }
        },
        "242-vu-dieu-tren-nen-tho-cam": {
            "title": "Vũ điệu trên nền thổ cẩm",
            "week": 24,
            "subject": "Đọc",
            "theme": "Hương sắc trăm miền",
            "audio": "am_thanh/vudieuthocam.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Vũ điệu trên nền thổ cẩm" },
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                                <p class="mb-4">Dân tộc Cơ-tu cư trú ở núi rừng Trường Sơn còn bảo lưu nhiều di sản văn hóa độc đáo. Một trong những di sản đó là nghề dệt thổ cẩm. Bộ trang phục cổ truyền của dân tộc Cơ-tu được làm từ thổ cẩm luôn rực rỡ bởi những hoa văn dệt bằng hạt cườm. Trong đó, nổi bật nhất là hoa văn da dá, mô phỏng điệu múa Da dá.</p>
                                                <p class="mb-4">Điệu múa Da dá là một trong những điệu múa cổ xưa nhất của phụ nữ Cơ-tu. Đây là điệu múa cầu mùa, thường được thực hiện trong các lễ hội cộng đồng của người Cơ-tu. Khi múa, đôi tay của người phụ nữ xoè lên trời như để cầu xin và đón nhận hạt lúa từ thần linh.</p>
                                                <p class="mb-4">Điệu múa Da dá đã được thợ dệt Cơ-tu khắc hoạ một cách sống động thành hoa văn trên nền thổ cẩm truyền thống. Bằng đôi tay khéo léo, người thợ dệt đã đính những hạt cườm trắng vào nền vải thô rám, tạo thành hoa văn da dá, trang trí trên váy, áo của phụ nữ.</p>
                                                <p class="mb-4">Với vẻ đẹp mang đậm sắc thái tộc người, hoa văn da dá thực sự góp phần làm cho di sản trang phục của đồng bào Cơ-tu thêm giá trị.</p>
                                                <p class="text-right italic text-sm text-gray-400 mt-8">(Theo Trần Tấn Vịnh)</p>
                                            </div>
                                        </div>
                                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white shadow-xl">
                                                <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                                    <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                                        <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                                        <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                                    </div>
                                                    <div class="flex-grow">
                                                        <p class="text-lg font-bold leading-relaxed text-blue-50">Mỗi dân tộc trên đất nước ta đều có những di sản văn hoá độc đáo. Chúng ta cần trân trọng và biết lưu giữ những giá trị văn hoá độc đáo của đồng bào các dân tộc sống trên đất nước ta.</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl">
                                        <div class="mb-6"><img src="hinh_anh/vudieuthocam.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl"></div>
                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div>
                                        <div class="space-y-4">
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Hoa văn trên bộ trang phục cổ truyền của người Cơ-tu có những điểm gì độc đáo?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Những điểm độc đáo của hoa văn là được dệt bằng hạt cườm và mô phỏng điệu múa Da dá.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Phụ nữ Cơ-tu múa điệu Da dá như thế nào và để làm gì?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Điệu múa Da dá là điệu múa cầu mùa của người Cơ-tu. Khi múa, đôi tay người phụ nữ xoè lên trời như để cầu xin và đón nhận hạt lúa từ thần linh.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Hoa văn Da dá trên váy, áo đã được những người thợ dệt Cơ-tu thực hiện như thế nào?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Những người thợ đã đính những hạt cườm trắng vào nền vải thô rám một cách khéo léo để tạo thành hoa văn da dá.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Vì sao nói hoa văn da dá mang đậm sắc thái tộc người Cơ-tu?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Vì hoa văn này khắc họa điệu múa cầu mùa cổ xưa của phụ nữ Cơ-tu, được trang trí trên trang phục truyền thống và là sản phẩm thủ công độc đáo của người thợ dệt Cơ-tu.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">5. Theo em, tác giả muốn nói điều gì qua bài đọc?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Mỗi dân tộc cần biết tự tôn về sản vật, trang phục, văn hoá, truyền thống của dân tộc mình. Mỗi dân tộc là một sắc màu. Cần chan hoà và hiểu về văn hoá lẫn nhau, giúp văn hoá cộng đồng chung thêm phong phú, đa giá trị.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Bài đọc \"Vũ điệu trên nền thổ cẩm\" viết về nét văn hóa độc đáo của dân tộc nào?", "a": ["Dân tộc Thái", "Dân tộc Mường", "Dân tộc Cơ-tu", "Dân tộc Ê-đê"], "c": 2 },
                        { "q": "Dân tộc Cơ-tu cư trú chủ yếu ở vùng nào?", "a": ["Vùng núi Tây Bắc", "Núi rừng Trường Sơn", "Vùng Tây Nguyên", "Đồng bằng sông Cửu Long"], "c": 1 },
                        { "q": "Di sản văn hóa độc đáo nào của người Cơ-tu được nhắc đến trong bài?", "a": ["Nghề làm gốm", "Nghề đan lát", "Nghề dệt thổ cẩm", "Nghề rèn đúc"], "c": 2 },
                        { "q": "Hoa văn trên trang phục cổ truyền của người Cơ-tu được tạo nên từ vật liệu gì?", "a": ["Chỉ thêu ngũ sắc", "Những hạt cườm", "Những viên đá nhỏ", "Những mảnh kim loại"], "c": 1 },
                        { "q": "Hoa văn nổi bật nhất trên trang phục của người Cơ-tu có tên là gì?", "a": ["Hoa văn mặt trời", "Hoa văn chim hạc", "Hoa văn da dá", "Hoa văn ngọn lửa"], "c": 2 },
                        { "q": "Hoa văn da dá mô phỏng điều gì trong đời sống của người Cơ-tu?", "a": ["Hình ảnh con thú rừng", "Hình ảnh ngọn núi cao", "Điệu múa Da dá", "Hình ảnh dòng suối"], "c": 2 },
                        { "q": "Điệu múa Da dá là điệu múa mang ý nghĩa gì?", "a": ["Múa cầu mưa", "Múa cầu mùa", "Múa mừng chiến thắng", "Múa đám cưới"], "c": 1 },
                        { "q": "Khi múa điệu Da dá, động tác tay của người phụ nữ được miêu tả như thế nào?", "a": ["Đôi tay vỗ vào nhau", "Đôi tay nắm chặt đặt trước ngực", "Đôi tay múa lượn như cánh chim", "Đôi tay xoè lên trời"], "c": 3 },
                        { "q": "Động tác xoè tay lên trời trong điệu múa thể hiện mong ước gì?", "a": ["Cầu xin mưa thuận gió hòa", "Cầu xin và đón nhận hạt lúa từ thần linh", "Cầu xin sức khỏe cho buôn làng", "Cầu xin bình an, không có thú dữ"], "c": 1 },
                        { "q": "Người thợ dệt đã tạo ra hoa văn da dá trên chất liệu vải gì?", "a": ["Vải lụa mềm mại", "Nền vải thô rám", "Vải nhung sang trọng", "Vải lanh mỏng"], "c": 1 },
                        { "q": "Màu sắc của hạt cườm được sử dụng để đính lên nền vải là màu gì?", "a": ["Màu đỏ", "Màu vàng", "Màu xanh", "Màu trắng"], "c": 3 },
                        { "q": "Hoa văn da dá thường được trang trí trên loại trang phục nào?", "a": ["Khăn đội đầu", "Váy, áo của phụ nữ", "Áo khố của đàn ông", "Túi đeo vai"], "c": 1 },
                        { "q": "Cụm từ \"Vũ điệu trên nền thổ cẩm\" trong tên bài muốn nói đến điều gì?", "a": ["Người phụ nữ múa trên tấm thảm thổ cẩm", "Một lễ hội múa hát của người Cơ-tu", "Điệu múa Da dá được khắc họa sống động thành hoa văn trên vải thổ cẩm", "Tên một bài hát của người Cơ-tu"], "c": 2 },
                        { "q": "Theo bài đọc, hoa văn da dá góp phần làm điều gì cho trang phục của người Cơ-tu?", "a": ["Làm cho trang phục bền hơn", "Giúp trang phục bán được giá cao", "Làm cho di sản trang phục thêm giá trị và mang đậm sắc thái tộc người", "Giúp trang phục nhẹ hơn"], "c": 2 },
                        { "q": "Qua bài đọc, tác giả muốn gửi gắm thông điệp gì?", "a": ["Cần phải học cách múa điệu Da dá", "Nên mua trang phục thổ cẩm để ủng hộ người dân", "Cần trân trọng và lưu giữ những giá trị văn hóa độc đáo của các dân tộc", "Cần phải đi du lịch đến núi rừng Trường Sơn"], "c": 2 }
                    ]
                }
            }
        },
        "251-dan-t'rung-tieng-ca-dai-ngan": {
            "title": "Đàn t'rưng, tiếng ca đại ngàn",
            "week": 25,
            "subject": "Đọc",
            "theme": "Hương sắc trăm miền",
            "audio": "am_thanh/dantrungtiengcadainan.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Đàn t'rưng, tiếng ca đại ngàn" },
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                                <p class="mb-4">Đến Tây Nguyên, ta thường được nghe tiếng đàn t’rưng ngân dài theo dòng suối, hoà cùng tiếng gió trên đèo núi hoang vu...</p>
                                                <p class="mb-4">Cùng với điệu hát ru, tiếng đàn t’rưng đã đi vào kí ức tuổi thơ của các bạn trẻ Tây Nguyên từ lúc còn được địu trên lưng mẹ. Lớn lên, mỗi bước chân của họ vào rừng kiếm củi, xuống suối lấy nước, ra nương trỉa lúa,... đều vấn vương nhịp điệu khi khoan khi nhặt, khi trầm hùng như tiếng thác đổ, khi thánh thót, róc rách như suối reo của đàn t’rưng.</p>
                                                <p class="mb-4">Dưới mỗi gầm chòi cao lêu nghêu ở sát bên chân rẫy, đều có một chiếc đàn t’rưng cong cong như chiếc võng đưa em. Mùa lúa chín, trai làng thay phiên nhau trực ở chòi canh. Chốc chốc, họ lại gõ trên chiếc đàn t’rưng, dạo một bản nhạc “đánh tiếng” đuổi chim muông và thú rừng mon men đến rẫy phá lúa. Tiếng đàn chẳng những rộn rã suốt ngày mà còn thánh thót thâu đêm, làm ấm lòng những chàng trai canh rẫy trong rừng khuya sương lạnh.</p>
                                                <p class="mb-4">Từ buôn này sang buôn khác, ta còn thấy những chiếc đàn t’rưng trên đỉnh dốc cao. Người đi qua đây sẽ gõ cho tiếng đàn vang lên để thêm yên tâm, vững bước vượt qua quãng đường rừng u tịch.</p>
                                                <p class="mb-4">Cùng với mái nhà rông thân thương, cao vút, tiếng đàn t’rưng rộn ràng, lưu luyến đã trở thành niềm thương, nỗi nhớ của người Tây Nguyên.</p>
                                                <p class="text-right italic text-sm text-gray-400 mt-8">(Theo Ay Dun và Lê Tấn)</p>
                                            </div>
                                        </div>
                                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white shadow-xl">
                                                <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                                    <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                                        <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                                        <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                                    </div>
                                                    <div class="flex-grow">
                                                        <p class="text-lg font-bold leading-relaxed text-blue-50">Bài đọc ca ngợi vẻ đẹp của tiếng đàn t'rưng và khẳng định sự gắn bó mật thiết của loại nhạc cụ này với đời sống vật chất, tinh thần của người dân Tây Nguyên. Qua đó, tác giả thể hiện sự trân trọng đối với bàn tay, khối óc và tâm hồn của những con người đã tạo nên bản sắc văn hóa riêng biệt cho vùng đất đại ngàn.</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl">
                                        <div class="mb-6"><img src="hinh_anh/dan-trung.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl"></div>
                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div>
                                        <div class="space-y-4">
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Bài đọc nói về điểm nổi bật nào của vùng đất Tây Nguyên?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Bài đọc nói về một nét đẹp văn hóa độc đáo, một âm thanh đặc trưng của vùng đất Tây Nguyên, đó là tiếng đàn t'rưng.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Tiếng đàn t’rưng gắn bó với người Tây Nguyên như thế nào?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Tiếng đàn gắn bó với họ từ lúc còn nhỏ (được địu trên lưng mẹ nghe cùng điệu hát ru) cho đến khi lớn lên. Tiếng đàn theo họ trong mọi hoạt động lao động sản xuất: vào rừng kiếm củi, xuống suối lấy nước, ra nương trỉa lúa....</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Những chi tiết nào cho thấy đàn t’rưng là nhạc cụ phổ biến?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Dưới mỗi gầm chòi canh rẫy đều có đàn t'rưng. Mùa lúa chín, trai làng dùng tiếng đàn đuổi chim thú và làm ấm lòng đêm khuya. Trên đỉnh dốc cao cũng có đàn t'rưng để người đi rừng gõ cho yên tâm.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Vì sao tiếng đàn t’rưng là niềm thương, nỗi nhớ?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Vì tiếng đàn hiện diện mọi mặt đời sống, từ tuổi thơ đến trưởng thành. Nó là người bạn tinh thần, giúp con người xua tan mệt mỏi, sợ hãi và gắn kết với buôn làng.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">5. Bài đọc giúp em cảm nhận gì về con người Tây Nguyên?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Họ rất yêu âm nhạc, ca hát. Cuộc sống giản dị gắn liền với nương rẫy nhưng luôn sôi động, vui tươi và lạc quan, yêu đời.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Bài đọc \"Đàn t'rưng - tiếng ca đại ngàn\" viết về vùng đất nào của nước ta?", "a": ["Tây Bắc", "Tây Nguyên", "Đồng bằng sông Cửu Long", "Duyên hải Nam Trung Bộ"], "c": 1 },
                        { "q": "Tiếng đàn t'rưng thường được nghe thấy ở những không gian nào trong bài?", "a": ["Trong các nhà hát lớn", "Ngân dài theo dòng suối, trên đèo núi, trên nương rẫy", "Trong các trường học", "Trên những con thuyền ngoài biển"], "c": 1 },
                        { "q": "Âm thanh của đàn t'rưng được so sánh với những âm thanh nào của thiên nhiên?", "a": ["Tiếng sấm và tiếng mưa", "Tiếng chim hót và tiếng lá rơi", "Tiếng thác đổ trầm hùng và tiếng suối reo róc rách", "Tiếng gió thổi và tiếng sóng biển"], "c": 2 },
                        { "q": "Ngay từ khi còn nhỏ, những đứa trẻ Tây Nguyên đã làm quen với tiếng đàn t'rưng trong hoàn cảnh nào?", "a": ["Khi đi học đánh đàn", "Khi xem tivi", "Khi được địu trên lưng mẹ, nghe cùng điệu hát ru", "Khi tham gia lễ hội"], "c": 2 },
                        { "q": "Hình dáng của chiếc đàn t'rưng dưới gầm chòi canh được miêu tả như thế nào?", "a": ["Thẳng tắp như cây tre", "Tròn như cái mâm", "Cong cong như chiếc võng đưa em", "Vuông vức như cái hộp"], "c": 2 },
                        { "q": "Vào mùa lúa chín, đàn t'rưng có tác dụng thực tế gì đối với việc canh tác?", "a": ["Để gọi mưa về tưới lúa", "Để cầu mùa màng bội thu", "Dạo bản nhạc “đánh tiếng” phát đuổi chim muông, thú rừng", "Để báo hiệu giờ nghỉ trưa"], "c": 2 },
                        { "q": "Tiếng đàn t'rưng trong đêm khuya còn làm gì với các chàng trai canh rẫy?", "a": ["Làm ấm lòng họ trong rừng khuya sương lạnh", "Giúp họ không buồn ngủ", "Giúp họ gọi bạn bè đến chơi", "Giúp họ quên đi cơn đói"], "c": 0 },
                        { "q": "Trên đỉnh dốc cao, người ta đặt đàn t'rưng để làm gì?", "a": ["Để trang trí", "Để bán", "Để người đi qua gõ vang lên cho thêm yên tâm, vững bước", "Để đánh dấu ranh giới"], "c": 2 },
                        { "q": "Từ \"u tịch\" trong câu \"quãng đường rừng u tịch\" có nghĩa là gì?", "a": ["Ồn ào náo nhiệt", "Vắng vẻ, yên lặng và có vẻ hơi tối tăm, bí ẩn", "Rực rỡ sắc màu", "Đông đúc người qua"], "c": 1 },
                        { "q": "Tiếng đàn t'rưng gắn bó với người Tây Nguyên trong hoạt động nào?", "a": ["Chỉ các lễ hội", "Chỉ đi đánh giặc", "Chỉ khi nghỉ ngơi", "Mọi hoạt động: kiếm củi, lấy nước, trỉa lúa, canh rẫy..."], "c": 3 },
                        { "q": "Cùng với đàn t'rưng, hình ảnh nào khác là biểu tượng thân thương của Tây Nguyên?", "a": ["Con voi", "Cây kơ-nia", "Mái nhà rông cao vút", "Cồng chiêng"], "c": 2 },
                        { "q": "Biện pháp nghệ thuật nào được sử dụng: \"đàn t’rưng cong cong như chiếc võng\"?", "a": ["So sánh", "Nhân hóa", "Điệp ngữ", "Ẩn dụ"], "c": 0 },
                        { "q": "Nội dung bài đọc muốn khẳng định điều gì về tiếng đàn t'rưng?", "a": ["Đàn t'rưng là nhạc cụ đắt tiền", "Tiếng đàn t'rưng là niềm thương, nỗi nhớ của người Tây Nguyên", "Đàn t'rưng rất khó sử dụng", "Chỉ dành cho người già"], "c": 1 },
                        { "q": "Qua bài đọc, em thấy người dân Tây Nguyên có tinh thần như thế nào?", "a": ["Lo lắng và sợ hãi", "Lạc quan, yêu đời, yêu ca hát và gắn bó với thiên nhiên", "Thích cuộc sống hiện đại", "Sống khép kín"], "c": 1 },
                        { "q": "Cụm từ \"tiếng ca đại ngàn\" trong nhan đề muốn nói điều gì?", "a": ["Tiếng hát người khổng lồ", "Tiếng hót của chim", "Tiếng đàn đại diện cho vẻ đẹp và tâm hồn núi rừng Tây Nguyên", "Tiếng gió thổi qua khe núi"], "c": 2 }
                    ]
                }
            }
        },
        "252-duong-que-dong-thap-muoi": {
            "title": "Đường quê Đồng Tháp Mười",
            "week": 25,
            "subject": "Đọc",
            "theme": "Hương sắc trăm miền",
            "audio": "am_thanh/duongquedongthapmuoi.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Đường quê Đồng Tháp Mười" },
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                                <section class="w-full lg:w-[75%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative md:pl-12 pl-4">
                                                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                                    <div>
                                                        <p class="mb-4">Bông súng thả lồng đèn<br>Sáng bồng bềnh mặt nước<br>Cá lòng tong chạy trước<br>Dẫn đường về thăm ông.</p>
                                                        <p class="mb-4">Đường quê, sào vít cong<br>Xuồng lướt như tên bắn<br>Cò ở đâu giật mình<br>Bay lẫn vào mây trắng.</p>
                                                        <p class="mb-4">Lấm lem con trâu đầm<br>Chém cặp sừng loé nắng<br>Xình xịch thuyền đuôi tôm<br>Chở lúa vàng, rẽ sóng.</p>
                                                    </div>
                                                    <div>
                                                        <p class="mb-4">Kìa mấy búp sen hồng<br>Nối đầu thu, cuối hạ<br>Nước lớn sông Cửu Long<br>Chơi với sen nghiêng ngả.</p>
                                                        <p class="mb-4">Về xứ mười tầng tháp<br>Leo cầu trăm đốt tre<br>Ông đứng như bụt hiện<br>Chờ cháu cuối đường quê.</p>
                                                    </div>
                                                </div>
                                                <p class="text-right italic text-sm text-gray-400 mt-8">Trần Quốc Toàn</p>
                                            </div>
                                        </div>
                                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white shadow-xl">
                                                <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                                    <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                                        <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                                        <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                                    </div>
                                                    <div class="flex-grow">
                                                        <p class="text-lg font-bold leading-relaxed text-blue-50">Bài thơ ca ngợi vẻ đẹp riêng biệt của cảnh vật thiên nhiên, cuộc sống sinh hoạt sôi động và tâm hồn đôn hậu, chất phác của con người vùng Đồng Tháp Mười - nơi có hệ thống sông ngòi, kênh rạch chằng chịt.</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[25%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl">
                                        <div class="mb-6"><img src="hinh_anh/dong-thap-muoi.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl"></div>
                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div>
                                        <div class="space-y-4">
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Ở khổ thơ đầu, đường về quê thú vị như thế nào?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Đường về quê rất thú vị với các hình ảnh: bông súng nở đẹp như đang "thả lồng đèn", sáng bồng bềnh; những chú cá lòng tong bơi lội tung tăng như đang dẫn đường về thăm ông.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Tìm những nét đẹp riêng của vùng Đồng Tháp Mười?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Về thiên nhiên: sông nước với sào vít cong, xuồng lướt nhanh, thuyền đuôi tôm, búp sen hồng, cầu trăm đốt tre. Về con người: người ông hiền hậu, đứng chờ cháu như "bụt hiện".</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Những từ ngữ nào gợi tả nhịp sống sôi động, náo nức?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Những từ ngữ: lướt như tên bắn, giật mình, chém (cặp sừng), xình xịch, rẽ sóng, nước lớn, nghiêng ngả.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Bạn nhỏ muốn nói điều gì về quê hương mình?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Bạn nhỏ ca ngợi quê hương Đồng Tháp Mười đẹp đẽ, mộc mạc và chất phác. Thể hiện tình yêu quê hương, con người qua những hình ảnh hiền lành và tốt đẹp nhất.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">5. Những chi tiết nào gợi nhớ truyện cổ tích?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Chi tiết: "Cầu trăm đốt tre" (gợi nhớ truyện Cây tre trăm đốt) và "Ông đứng như bụt hiện" (gợi nhớ hình ảnh ông Bụt trong cổ tích).</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Loài hoa nào được ví như những chiếc 'lồng đèn' thả trên mặt nước trong khổ thơ đầu?", "a": ["Hoa sen", "Hoa phượng", "Bông súng", "Hoa mai"], "c": 2 },
                        { "q": "Con vật nào được nhân hóa với hành động 'chạy trước dẫn đường' về thăm ông?", "a": ["Con chó mực", "Con trâu", "Cá lòng tong", "Con cò trắng"], "c": 2 },
                        { "q": "Hình ảnh 'Xuồng lướt như tên bắn' sử dụng biện pháp nghệ thuật gì?", "a": ["Nhân hóa", "So sánh", "Điệp ngữ", "Ẩn dụ"], "c": 1 },
                        { "q": "Khi chiếc xuồng lướt nhanh, con vật nào đã 'giật mình' bay lẫn vào mây trắng?", "a": ["Con chim sẻ", "Con bướm", "Con cò", "Con chuồn chuồn"], "c": 2 },
                        { "q": "Trong khổ 3, hình ảnh con trâu đầm được miêu tả với hành động mạnh mẽ nào?", "a": ["Gõ cặp sừng", "Chém cặp sừng loé nắng", "Húc cặp sừng", "Lắc cặp sừng"], "c": 1 },
                        { "q": "Phương tiện nào phát ra tiếng kêu 'xình xịch' và chở lúa vàng rẽ sóng?", "a": ["Xuồng ba lá", "Ghe bầu", "Thuyền đuôi tôm", "Phà máy"], "c": 2 },
                        { "q": "Búp sen hồng ở Đồng Tháp Mười nở vào khoảng thời gian nào?", "a": ["Mùa xuân", "Mùa đông", "Nối đầu thu, cuối hạ", "Quanh năm"], "c": 2 },
                        { "q": "Dòng sông nào được nhắc đến trong câu 'Chơi với sen nghiêng ngả'?", "a": ["Sông Hồng", "Sông Hương", "Sông Cửu Long", "Sông Đồng Nai"], "c": 2 },
                        { "q": "Cụm từ 'Xứ mười tầng tháp' dùng để chỉ vùng đất nào?", "a": ["Mũi Cà Mau", "Tây Nguyên", "Đồng Tháp Mười", "Thành phố Hồ Chí Minh"], "c": 2 },
                        { "q": "Chi tiết 'Leo cầu trăm đốt tre' gợi nhớ đến câu chuyện cổ tích nào?", "a": ["Thánh Gióng", "Thạch Sanh", "Cây tre trăm đốt", "Tấm Cám"], "c": 2 },
                        { "q": "Hình ảnh người ông đứng chờ cháu được so sánh với nhân vật nào?", "a": ["Ông Tiên", "Ông Bụt", "Ông đồ", "Ông lão đánh cá"], "c": 1 },
                        { "q": "Các từ ngữ: 'lướt như tên bắn', 'xình xịch', 'rẽ sóng' gợi tả điều gì về nhịp sống nơi đây?", "a": ["Nhịp sống chậm rãi, buồn tẻ", "Nhịp sống sôi động, náo nức và khẩn trương", "Nhịp sống yên tĩnh, vắng vẻ", "Nhịp sống lo âu, vất vả"], "c": 1 },
                        { "q": "Biện pháp nhân hóa được sử dụng trong câu thơ nào dưới đây?", "a": ["Xuồng lướt như tên bắn", "Ông đứng như bụt hiện", "Nước lớn sông Cửu Long / Chơi với sen nghiêng ngả", "Lấm lem con trâu đầm"], "c": 2 },
                        { "q": "Qua bài thơ, em thấy con người Đồng Tháp Mười hiện lên như thế nào?", "a": ["Giàu sang và xa cách", "Hiền lành, chất phác và đôn hậu (như Bụt)", "Khó tính và nghiêm khắc", "Thích phiêu lưu mạo hiểm"], "c": 1 },
                        { "q": "Nội dung chính của bài thơ là gì?", "a": ["Miêu tả quy trình thu hoạch lúa", "Kể về chuyến đi thăm ông của bạn nhỏ", "Ca ngợi vẻ đẹp thiên nhiên độc đáo, cuộc sống sôi động và con người đôn hậu của Đồng Tháp Mười", "Giới thiệu các loại phương tiện giao thông đường thủy"], "c": 2 }
                    ]
                }
            }
        },
        "261-xuong-ba-la-que-toi": {
            "title": "Xuồng ba lá quê tôi",
            "week": 26,
            "subject": "Đọc",
            "theme": "Hương sắc trăm miền",
            "audio": "am_thanh/xuongbala.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Xuồng ba lá quê tôi" },
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative"><span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>Xuồng ba lá quê tôi</h1>
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                                <p class="mb-4">Gọi là xuồng ba lá vì xuồng được ghép bởi ba tấm ván: hai tấm ván be và một tấm ván đáy. Để xuồng được vững chắc, người ta dùng những chiếc "cong" đóng vào bên trong lòng xuồng, tạo thành bộ khung hình xương cá.</p>
                                                <p class="mb-4">Xuồng ba lá là phương tiện di chuyển gắn liền với miền sông nước quê tôi. Tôi vẫn nhớ những sáng nội chèo xuồng mang cho tôi mấy cái bánh lá dừa, giỏ cua đồng mà nội vừa bắt được. Nhớ những chiều chị tôi chèo xuồng dọc triền sông, bẻ bông điên điển đầy rổ mang về cho má nấu canh chua. Những chuyến xuồng xuôi ngược đã in đậm trong tiềm thức mỗi người dân Nam Bộ.</p>
                                                <p class="mb-4">Từ độ cha ông đi mở cõi, xuồng là "đôi chân của người dân Nam Bộ". Những năm tháng quê hương bị bom cày, đạn xới, xuồng cùng nhân dân bám trụ, giữ xóm, giữ làng. Xuồng chở lương thực tiếp tế cho bộ đội. Xuồng đưa du kích qua sông, len sâu vào khu căn cứ kháng chiến…</p>
                                                <p class="mb-4">Đất nước thanh bình, xuồng ba lá lại trở về cuộc sống đời thường. Xuồng ngược xuôi miền chợ nổi. Xuồng lướt nhanh trên cánh đồng rì rào sóng lúa. Xuồng rộn ràng những đêm giăng câu, thả lưới. Và mỗi sớm mai, trên nhánh sông quê, những chiếc xuồng ba lá theo dòng nước toả đi, chở đầy ước mơ, khát vọng của tình đất, tình người phương Nam.</p>
                                                <p class="text-right italic text-sm text-gray-400 mt-8">(Theo Nguyễn Chí Ngoan)</p>
                                            </div>
                                        </div>
                                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white shadow-xl">
                                                <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                                    <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                                        <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                                        <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                                    </div>
                                                    <div class="flex-grow">
                                                        <p class="text-lg font-bold leading-relaxed text-blue-50">Chiếc xuồng là người bạn thân thiết của người dân Nam Bộ. Nó gắn bó với cuộc sống chiến đấu và lao động sản xuất của người dân nơi đây, chở nặng tình đất, tình người phương Nam.</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl">
                                        <div class="mb-6"><img src="hinh_anh/xuongbala.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl"></div>
                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div>
                                        <div class="space-y-4">
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Tác giả đã giới thiệu thế nào về xuồng ba lá?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Tác giả giới thiệu về tên gọi của xuồng ba lá và giải thích vì sao vật dụng này có tên gọi như vậy: gọi là xuồng ba lá vì xuồng được ghép bởi ba tấm ván (hai tấm ván be và một tấm ván đáy). Người ta dùng những chiếc "cong" đóng vào bên trong lòng xuồng, tạo thành bộ khung hình xương cá.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Xuồng ba lá gợi nhớ những kỉ niệm nào của tác giả với người thân?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Xuồng ba lá gợi nhớ kỉ niệm của tác giả với bà nội (những sáng nội chèo xuồng mang cho bánh lá dừa, giỏ cua đồng) và với chị (những chiều chị chèo xuồng dọc triền sông, bẻ bông điên điển mang về cho má nấu canh chua).</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Từ xưa, chiếc xuồng đã gắn bó thế nào với người dân vùng sông nước?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">• Từ thuở cha ông đi mở cõi: xuồng đã là "đôi chân của người dân Nam Bộ", là phương tiện đi lại rất thiết thân.<br>• Trong những năm tháng chiến tranh: xuồng cùng người dân bám trụ, giữ xóm làng, chở lương thực tiếp tế cho bộ đội, đưa du kích qua sông.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Hình ảnh xuồng ba lá hiện ra như thế nào trong cuộc sống thanh bình hiện nay?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Đất nước thanh bình, xuồng ba lá tiếp tục gắn bó với sinh hoạt hằng ngày và lao động sản xuất: ngược xuôi miền chợ nổi, lướt trên cánh đồng lúa, rộn ràng những đêm giăng câu thả lưới. Xuồng chở đầy ước mơ, khát vọng của tình đất, tình người phương Nam.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">5. Bài đọc giúp em hiểu thêm điều gì về cảnh vật và con người phương Nam?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Bài đọc giúp em hiểu thêm về cảnh vật phương Nam đẹp và bình yên; con người phương Nam chăm chỉ, tình cảm, gắn bó, có tình có nghĩa cùng chung sống với nhau.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Tác giả của bài văn \"Xuồng ba lá quê tôi\" là ai?", "a": ["Sơn Nam", "Nguyễn Chí Ngoan", "Đoàn Giỏi", "Trần Đăng Khoa"], "c": 1 },
                        { "q": "Vì sao loại xuồng này được gọi là \"xuồng ba lá\"?", "a": ["Vì nó nhẹ như ba chiếc lá", "Vì nó thường chở lá dừa", "Vì nó được ghép bởi ba tấm ván (2 ván be, 1 ván đáy)", "Vì nó có hình dáng giống chiếc lá"], "c": 2 },
                        { "q": "Bộ khung bên trong lòng xuồng được tạo hình giống cái gì?", "a": ["Hình con thoi", "Hình xương cá", "Hình cánh cung", "Hình chiếc lá"], "c": 1 },
                        { "q": "Chiếc \"cong\" được đóng vào lòng xuồng có tác dụng gì?", "a": ["Để trang trí cho đẹp", "Để làm chỗ ngồi", "Để giúp xuồng được vững chắc", "Để gác mái chèo"], "c": 2 },
                        { "q": "Hình ảnh người nội chèo xuồng gắn liền với những món quà quê nào?", "a": ["Bánh lá dừa, giỏ cua đồng", "Bánh tét, con cá lóc", "Bông súng, mớ tép", "Trái cây chín, bó rau"], "c": 0 },
                        { "q": "Người chị trong kỉ niệm của tác giả thường chèo xuồng đi hái loại hoa nào?", "a": ["Bông súng", "Bông sen", "Bông điên điển", "Bông lục bình"], "c": 2 },
                        { "q": "Bông điên điển mang về thường được má dùng để nấu món gì?", "a": ["Kho cá", "Xào tỏi", "Nấu canh chua", "Làm gỏi"], "c": 2 },
                        { "q": "Tác giả ví von chiếc xuồng là gì của người dân Nam Bộ từ thuở mở cõi?", "a": ["Ngôi nhà di động", "Đôi chân của người dân Nam Bộ", "Cánh tay phải đắc lực", "Người bạn đường tin cậy"], "c": 1 },
                        { "q": "Trong những năm tháng chiến tranh, chiếc xuồng đã thực hiện nhiệm vụ gì?", "a": ["Chở vũ khí hạng nặng", "Chở lương thực tiếp tế, đưa du kích qua sông", "Làm lá chắn đạn", "Chở quân đi xâm lược"], "c": 1 },
                        { "q": "Khi đất nước thanh bình, xuồng ba lá xuất hiện ở những hoạt động nào?", "a": ["Chỉ nằm im ở bến sông", "Ngược xuôi miền chợ nổi, lướt trên đồng lúa, đi giăng câu thả lưới", "Được đưa vào bảo tàng", "Chỉ dùng để chở khách du lịch"], "c": 1 },
                        { "q": "Bài đọc nhắc đến vùng đất nào của nước ta?", "a": ["Tây Bắc", "Tây Nguyên", "Nam Bộ", "Bắc Bộ"], "c": 2 },
                        { "q": "Câu văn \"Xuồng lướt nhanh trên cánh đồng rì rào sóng lúa\" gợi tả cảnh gì?", "a": ["Mùa gặt lúa", "Mùa nước nổi (nước ngập đồng ruộng)", "Mùa cấy lúa", "Mùa hạn hán"], "c": 1 },
                        { "q": "Theo bài đọc, mỗi sớm mai, những chiếc xuồng tỏa đi chở theo điều gì mang ý nghĩa tinh thần?", "a": ["Chở đầy tôm cá", "Chở đầy hoa trái", "Chở đầy ước mơ, khát vọng của tình đất, tình người phương Nam", "Chở đầy ánh nắng ban mai"], "c": 2 },
                        { "q": "Nhận định nào sau đây đúng nhất về vai trò của xuồng ba lá?", "a": ["Là phương tiện giải trí cuối tuần", "Là vật dụng trang trí trong nhà", "Là phương tiện di chuyển thiết thân, gắn bó với đời sống, chiến đấu và lao động", "Là phương tiện chỉ dùng trong chiến tranh"], "c": 2 },
                        { "q": "Qua bài đọc, em cảm nhận được tình cảm gì của tác giả?", "a": ["Nỗi sợ hãi sông nước", "Tình yêu tha thiết, niềm tự hào và sự gắn bó sâu sắc với quê hương miền sông nước", "Sự tiếc nuối về quá khứ", "Mong muốn rời xa quê hương"], "c": 1 }
                    ]
                }
            }
        },
        "262-ve-tham-dat-mui": {
            "title": "Về thăm Đất Mũi",
            "week": 26,
            "subject": "Đọc",
            "theme": "Hương sắc trăm miền",
            "audio": "am_thanh/vethamdatmui.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Về thăm Đất Mũi" },
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                                <section class="w-full lg:w-[75%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative md:pl-6 pl-4">
                                                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                                    <div>
                                                        <p class="mb-4">Về đây nghe đất thở<br>Phập phồng trước bình minh<br>Về đây trông đước chạy<br>Những bước chân ngập sình.</p>
                                                        <p class="mb-4">Gặp ngọn gió châu thổ<br>Đang mở hội trên đồng<br>Ca bài ca mở cõi<br>Của bao đời cha ông.</p>
                                                        <p class="mb-4">Ngút ngàn rừng mắm, đước<br>Xanh đến tận vô cùng<br>Phù sa như dòng sữa<br>Nuôi đất rừng Năm Căn.</p>
                                                    </div>
                                                    <div>
                                                        <p class="mb-4">Rễ mắm thì ăn lên<br>Rễ đước thì cắm xuống<br>Bền bỉ suốt ngày đêm<br>Trong tình yêu của đất.</p>
                                                        <p class="mb-4">Nơi đây biển gặp rừng<br>Đất và trời gắn lại<br>Cho bãi bồi vươn xa<br>Đất nước mình lớn mãi.</p>
                                                        <p class="mb-4">Lần đầu về Đất Mũi<br>Như về với nhà mình<br>Nơi địa đầu Tổ quốc<br>Rạng ngời ánh bình minh!</p>
                                                    </div>
                                                </div>
                                                <p class="text-right italic text-sm text-gray-400 mt-8">(Hoài Anh)</p>
                                            </div>
                                        </div>
                                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white shadow-xl">
                                                <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                                    <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                                        <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                                        <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                                    </div>
                                                    <div class="flex-grow">
                                                        <p class="text-lg font-bold leading-relaxed text-blue-50">Bài thơ ca ngợi vẻ đẹp thiên nhiên hùng vĩ và độc đáo (cây cối, đất, trời, rừng, biển...) của Đất Mũi Cà Mau - vùng đất thiêng liêng nơi cực Nam của Tổ quốc. Qua đó thể hiện tình yêu, niềm tự hào và sự gắn bó của tác giả đối với mảnh đất này.</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[25%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl">
                                        <div class="mb-6"><img src="hinh_anh/datmui.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl"></div>
                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div>
                                        <div class="space-y-4">
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Tìm những hình ảnh cho thấy vẻ đẹp độc đáo của cây cối ở Đất Mũi.</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Cây cối được miêu tả mang đặc trưng của vùng Đất Mũi sình lầy: cây mắm, cây đước mọc thành rừng ngút ngàn, xanh tận vô cùng. Đặc biệt là bộ rễ: "rễ mắm thì ăn lên, rễ đước thì cắm xuống", bền bỉ bám sâu vào đất ngập sình.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Những hình ảnh thiên nhiên ở Đất Mũi (gió, biển, đất trời,...) được miêu tả như thế nào?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Thiên nhiên ở Đất Mũi rất độc đáo và sống động:<br>• Đất: biết "thở", "phập phồng".<br>• Gió: gió châu thổ đang "mở hội" trên đồng, ca bài ca mở cổi.<br>• Biển và rừng: gặp nhau ("biển gặp rừng").<br>• Đất và trời: gắn lại, khiến bãi bồi vươn xa.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Hai dòng thơ "Nơi địa đầu Tổ quốc / Rạng ngời ánh bình minh" gợi cho em suy nghĩ gì về Đất Mũi?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Hai dòng thơ ca ngợi vẻ đẹp rạng rỡ của Đất Mũi. Đồng thời thể hiện niềm tin của nhà thơ vào sự phát triển tốt đẹp, tươi sáng của mảnh đất nơi địa đầu thiêng liêng của Tổ quốc.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Theo em, vì sao "lần đầu về Đất Mũi" tác giả lại có cảm giác "như về với nhà mình"?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Tác giả có cảm giác như vậy vì thấy Đất Mũi vô cùng thân thương, gần gũi và gắn bó; vì tác giả rất yêu cảnh vật thiên nhiên nơi đây và thấy bóng dáng quê hương chung của dân tộc mình ở đó.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">5. Dựa vào bài đọc, em hãy giới thiệu Đất Mũi Cà Mau với bạn bè.</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">• Vị trí: Đất Mũi là mảnh đất nhô ra ở điểm cực Nam trên đất liền của Tổ quốc Việt Nam (thuộc huyện Ngọc Hiển, tỉnh Cà Mau).<br>• Vẻ đẹp tự nhiên: Có hệ sinh thái rừng ngập mặn độc đáo với cây mắm, cây đước mọc thành rừng (rễ mắm ăn lên, rễ đước cắm xuống). Đất đai là đất phù sa màu mỡ luôn được bồi đắp lấn ra biển ("đất nước mình lớn mãi").</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Bài thơ \"Về thăm Đất Mũi\" viết về vùng đất thuộc tỉnh nào của nước ta?", "a": ["Kiên Giang", "Bạc Liêu", "Cà Mau", "Sóc Trăng"], "c": 2 },
                        { "q": "Trong khổ thơ đầu, tác giả nghe thấy đất có hoạt động gì?", "a": ["Đất hát", "Đất thở", "Đất ngủ", "Đất rung chuyển"], "c": 1 },
                        { "q": "Hình ảnh \"đước chạy\" được miêu tả gắn liền với đặc điểm địa hình nào?", "a": ["Những đồi núi cao", "Những bãi cát trắng", "Những bước chân ngập sình", "Những cánh đồng lúa chín"], "c": 2 },
                        { "q": "Ngọn gió châu thổ đang làm gì trên cánh đồng?", "a": ["Đang ngủ yên", "Đang thổi mạnh gây bão", "Đang mở hội và ca bài ca mở cõi", "Đang đuổi chim"], "c": 2 },
                        { "q": " \"Bài ca mở cõi\" được nhắc đến là của ai?", "a": ["Của những người lính biên phòng", "Của bao đời cha ông", "Của những người nông dân", "Của sóng biển"], "c": 1 },
                        { "q": "Hai loài cây đặc trưng nào của rừng ngập mặn được nhắc đến trong bài?", "a": ["Cây tràm và cây dừa", "Cây sú và cây vẹt", "Cây mắm và cây đước", "Cây tre và cây lúa"], "c": 2 },
                        { "q": "Tác giả so sánh \"phù sa\" với hình ảnh nào?", "a": ["Dòng máu", "Dòng sữa", "Dòng mật", "Dòng sông"], "c": 1 },
                        { "q": "Đặc điểm sinh trưởng độc đáo của rễ cây mắm là gì?", "a": ["Cắm sâu xuống lòng đất", "Ăn lên (mọc ngược lên mặt đất)", "Mọc lan ra mặt nước", "Quấn quanh thân cây khác"], "c": 1 },
                        { "q": "Ngược lại với rễ mắm, rễ cây đước có đặc điểm gì?", "a": ["Ăn lên", "Cắm xuống", "Bay trong gió", "Nổi trên mặt nước"], "c": 1 },
                        { "q": "Sự sinh trưởng bền bỉ của cây cối diễn ra trong điều kiện tình cảm nào?", "a": ["Trong sự khắc nghiệt của bão tố", "Trong tình yêu của đất", "Trong nỗi nhớ của biển", "Trong sự cô đơn của rừng"], "c": 1 },
                        { "q": "Nơi Đất Mũi được miêu tả là điểm gặp gỡ của hai yếu tố thiên nhiên nào?", "a": ["Sông và suối", "Núi và đồi", "Biển và rừng", "Mây và gió"], "c": 2 },
                        { "q": "Hình ảnh \"Bãi bồi vươn xa\" mang ý nghĩa gì về địa lý của Đất Mũi?", "a": ["Đất đai đang bị biển xâm thực", "Diện tích đất liền đang ngày càng mở rộng ra biển (Đất nước mình lớn mãi)", "Bãi biển rất dài và đẹp", "Người dân đang lấn biển xây nhà"], "c": 1 },
                        { "q": "Cảm xúc của tác giả trong lần đầu về Đất Mũi là gì?", "a": ["Xa lạ và bỡ ngỡ", "Thân thương, gần gũi như về với nhà mình", "Lo lắng vì đường xa", "Ngạc nhiên vì cảnh lạ"], "c": 1 },
                        { "q": "Cụm từ \"Nơi địa đầu Tổ quốc\" dùng để chỉ vị trí nào của Đất Mũi?", "a": ["Điểm cực Bắc", "Điểm cực Đông", "Điểm cực Nam trên đất liền", "Điểm cực Tây"], "c": 2 },
                        { "q": "Nội dung chính của bài thơ là gì?", "a": ["Kể lại chuyến đi du lịch của tác giả", "Miêu tả quy trình trồng rừng ngập mặn", "Ca ngợi vẻ đẹp thiên nhiên độc đáo, sức sống mãnh liệt và ý nghĩa thiêng liêng của vùng Đất Mũi", "Giới thiệu các món ăn đặc sản của Cà Mau"], "c": 2 }
                    ]
                }
            }
        },
        "281-nghin-nam-van-hien": {
            "title": "Nghìn năm văn hiến",
            "week": 28,
            "subject": "Đọc",
            "theme": "Tiếp bước cha ông",
            "audio": "am_thanh/nghinnamvanhien.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Nghìn năm văn hiến" },
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6"> 
                                <section class="w-full lg:w-[70%]"> 
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl"> 
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden"> 
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div> 
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div> 
                                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                                Nghìn năm văn hiến
                                            </h1> 
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content"> 
                                                <p class="first-letter:text-5xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
                                                    Đến thăm Văn Miếu – Quốc Tử Giám ở Thủ đô Hà Nội, ngôi trường được coi là trường đại học đầu tiên của Việt Nam, khách nước ngoài không khỏi ngạc nhiên khi biết rằng từ năm 1075, nước ta đã mở khoa thi tiến sĩ. Ngót 10 thế kỉ, tính từ khoa thi năm 1075 đến khoa thi cuối cùng vào năm 1919, các triều vua Việt Nam đã tổ chức được 185 khoa thi, lấy đỗ gần 3000 tiến sĩ, cụ thể như sau:
                                                </p> 
                                                <div class="overflow-x-auto my-6 rounded-xl border border-gray-200 shadow-sm"> 
                                                    <table class="w-full text-sm text-left text-gray-500"> 
                                                        <thead class="text-xs text-gray-700 uppercase bg-blue-50/50">
                                                            <tr>
                                                                <th class="px-6 py-3 font-black text-blue-800">Triều đại</th>
                                                                <th class="px-6 py-3 font-black text-center text-blue-800">Số khoa thi</th>
                                                                <th class="px-6 py-3 font-black text-center text-blue-800">Số tiến sĩ</th>
                                                                <th class="px-6 py-3 font-black text-center text-blue-800">Số trạng nguyên</th>
                                                            </tr>
                                                        </thead> 
                                                        <tbody class="divide-y divide-gray-100"> 
                                                            <tr class="bg-white hover:bg-gray-50"><td class="px-6 py-3 font-bold text-gray-900">Lý</td><td class="px-6 py-3 text-center">6</td><td class="px-6 py-3 text-center">11</td><td class="px-6 py-3 text-center">0</td></tr> 
                                                            <tr class="bg-gray-50/30 hover:bg-gray-50"><td class="px-6 py-3 font-bold text-gray-900">Trần</td><td class="px-6 py-3 text-center">14</td><td class="px-6 py-3 text-center">51</td><td class="px-6 py-3 text-center">9</td></tr> 
                                                            <tr class="bg-white hover:bg-gray-50"><td class="px-6 py-3 font-bold text-gray-900">Hồ</td><td class="px-6 py-3 text-center">2</td><td class="px-6 py-3 text-center">12</td><td class="px-6 py-3 text-center">0</td></tr> 
                                                            <tr class="bg-gray-50/30 hover:bg-gray-50"><td class="px-6 py-3 font-bold text-gray-900">Lê</td><td class="px-6 py-3 text-center">104</td><td class="px-6 py-3 text-center">1780</td><td class="px-6 py-3 text-center">27</td></tr> 
                                                            <tr class="bg-white hover:bg-gray-50"><td class="px-6 py-3 font-bold text-gray-900">Mạc</td><td class="px-6 py-3 text-center">21</td><td class="px-6 py-3 text-center">484</td><td class="px-6 py-3 text-center">11</td></tr> 
                                                            <tr class="bg-gray-50/30 hover:bg-gray-50"><td class="px-6 py-3 font-bold text-gray-900">Nguyễn</td><td class="px-6 py-3 text-center">38</td><td class="px-6 py-3 text-center">558</td><td class="px-6 py-3 text-center">0</td></tr> 
                                                            <tr class="bg-blue-100/50 font-black text-blue-900"><td class="px-6 py-3">Tổng cộng</td><td class="px-6 py-3 text-center">185</td><td class="px-6 py-3 text-center">2896</td><td class="px-6 py-3 text-center">47</td></tr> 
                                                        </tbody> 
                                                    </table> 
                                                </div> 
                                                <p>
                                                    Ngày nay, khách vào thăm Văn Miếu – Quốc Tử Giám còn thấy bên giếng Thiền Quang, dưới những hàng muỗm già cổ kính, 82 tấm bia khắc tên tuổi 1306 vị tiến sĩ từ khoa thi năm 1442 đến khoa thi năm 1779 như chứng tích về một nền văn hiến lâu đời.
                                                </p> 
                                                <p class="text-right italic text-sm text-gray-400 mt-8">(Theo Nguyễn Hoàng)</p> 
                                            </div> 
                                        </div> 
                                    </div> 
                                </section> 
                                <aside class="w-full lg:w-[30%]"> 
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl">
                                        <div class="mb-6">
                                            <img src="hinh_anh/nghinnamvanhien.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl">
                                        </div>
                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div> 
                                        <div class="space-y-4"> 
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Đến thăm Văn Miếu - Quốc Tử Giám, khách nước ngoài ngạc nhiên vì điều gì?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Khách nước ngoài ngạc nhiên khi biết rằng từ năm 1075, nước ta đã mở khoa thi tiến sĩ. Ngót 10 thế kỉ, các triều vua Việt Nam đã tổ chức được 185 khoa thi, lấy đỗ gần 3000 tiến sĩ.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden mt-4">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Triều đại nào tổ chức nhiều khoa thi nhất? Triều đại nào có nhiều tiến sĩ nhất?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Triều Lê tổ chức nhiều khoa thi nhất (104 khoa) và cũng là triều đại có nhiều tiến sĩ nhất (1780 tiến sĩ).</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden mt-4">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Bài văn giúp em hiểu điều gì về truyền thống văn hóa Việt Nam?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Bài văn cho thấy người Việt Nam có truyền thống khoa cử lâu đời. Dân tộc ta luôn hiếu học và coi trọng nhân tài.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div> 
                                </aside> 
                            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Văn Miếu - Quốc Tử Giám được xem là công trình gì đầu tiên của Việt Nam?", "a": ["Thư viện đầu tiên", "Trường đại học đầu tiên", "Bảo tàng đầu tiên", "Cung điện đầu tiên"], "c": 1 },
                        { "q": "Khoa thi tiến sĩ đầu tiên của nước ta được tổ chức vào năm nào?", "a": ["Năm 1010", "Năm 1070", "Năm 1075", "Năm 1442"], "c": 2 },
                        { "q": "Tính đến năm 1919, nước ta đã tổ chức được tổng cộng bao nhiêu khoa thi?", "a": ["104 khoa", "185 khoa", "82 khoa", "38 khoa"], "c": 1 },
                        { "q": "Theo bảng thống kê, triều đại nào tổ chức ít khoa thi nhất?", "a": ["Triều Lý", "Triều Trần", "Triều Hồ (2 khoa)", "Triều Mạc"], "c": 2 },
                        { "q": "Tổng số tiến sĩ đỗ đạt qua các triều đại là bao nhiêu người?", "a": ["1306 người", "1780 người", "2896 người", "3000 người"], "c": 2 },
                        { "q": "Triều đại nào dưới đây KHÔNG có trạng nguyên theo bảng thống kê?", "a": ["Triều Lê và Triều Mạc", "Triều Lý, Triều Hồ và Triều Nguyễn", "Triều Trần và Triều Lê", "Triều Nguyễn và Triều Mạc"], "c": 1 },
                        { "q": "Triều đại nào có số lượng trạng nguyên nhiều nhất?", "a": ["Triều Trần (9 người)", "Triều Mạc (11 người)", "Triều Lê (27 người)", "Triều Lý (0 người)"], "c": 2 },
                        { "q": "Hiện nay tại Văn Miếu - Quốc Tử Giám còn lưu giữ bao nhiêu tấm bia tiến sĩ?", "a": ["185 tấm", "82 tấm", "104 tấm", "38 tấm"], "c": 1 },
                        { "q": "Các tấm bia đá tại Văn Miếu khắc tên tuổi của bao nhiêu vị tiến sĩ?", "a": ["2896 vị", "1780 vị", "1306 vị", "484 vị"], "c": 2 },
                        { "q": "Các tấm bia tiến sĩ tại Văn Miếu ghi danh các tiến sĩ đỗ đạt trong khoảng thời gian nào?", "a": ["Từ năm 1075 đến 1919", "Từ khoa thi năm 1442 đến khoa thi năm 1779", "Từ năm 1010 đến 1442", "Chỉ trong triều đại nhà Lê"], "c": 1 },
                        { "q": "Khu vực nào trong Văn Miếu là nơi đặt các bia tiến sĩ?", "a": ["Khuê Văn Các", "Nhà Thái Học", "Bên giếng Thiền Quang", "Cổng Đại Trung"], "c": 2 },
                        { "q": "Chi tiết nào cho thấy nền giáo dục xưa cũng mở rộng cửa cho người dân thường?", "a": ["Quốc Tử Giám chỉ dành cho con vua", "Chỉ có người giàu mới được đi thi", "Về sau học trò giỏi là con em dân thường cũng được học ở Quốc Tử Giám", "Các khoa thi chỉ tổ chức trong hoàng cung"], "c": 2 },
                        { "q": "Bảng số liệu thống kê trong bài có tác dụng gì?", "a": ["Giúp bài văn dài hơn", "Cung cấp thông tin cụ thể, rõ ràng, có sức thuyết phục cao về truyền thống khoa cử", "Để trang trí cho đẹp", "Để thay thế hình ảnh minh họa"], "c": 1 },
                        { "q": "Cụm từ \"Nghìn năm văn hiến\" muốn nói đến điều gì?", "a": ["Đất nước có nhiều vua chúa", "Đất nước có nhiều tài nguyên khoáng sản", "Đất nước có truyền thống văn hóa, giáo dục lâu đời và tốt đẹp", "Đất nước có nghìn năm tuổi"], "c": 2 },
                        { "q": "Qua bài đọc, em cảm thấy như thế nào về lịch sử khoa cử của nước nhà?", "a": ["Thấy bình thường", "Thấy lo lắng vì phải học nhiều", "Tự hào về truyền thống hiếu học và trọng nhân tài của cha ông", "Thấy ngạc nhiên về số lượng trạng nguyên"], "c": 2 }
                    ]
                }
            }
        },
        "282-nguoi-thay-cua-muon-doi": {
            "title": "Người thầy của muôn đời",
            "week": 28,
            "subject": "Đọc",
            "theme": "Tiếp bước cha ông",
            "audio": "am_thanh/282-nguoi-thay-cua-muon-doi.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Người thầy của muôn đời" },
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6"> 
                                <section class="w-full lg:w-[70%]"> 
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl"> 
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden"> 
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div> 
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div> 
                                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                                Người thầy của muôn đời
                                            </h1> 
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content"> 
                                                <p class="!indent-0 first-letter:text-5xl first-letter:font-black first-letter:text-blue-600 first-letter:float-left first-letter:-mr-0.5">
                                                    Chu Văn An là một nhà giáo nổi tiếng đời Trần. Cụ đỗ cao nhưng không làm quan mà mở trường dạy học ở quê nhà nhằm truyền bá đạo lí và đào tạo nhân tài cho đất nước. Trường của cụ rất đông học trò, có nhiều người trở thành những nhân vật nổi tiếng.
                                                </p> 
                                                <p>
                                                    Năm ấy, đến ngày mừng thọ cụ giáo Chu tròn sáu mươi tuổi, từ sáng sớm, các môn sinh đã tề tựu trước sân nhà cụ. Cụ Chu đội khăn ngay ngắn, mặc áo dài thâm ngồi trên sập. Mấy học trò cũ từ xa về dâng biếu thầy những cuốn sách quý do chính họ sưu tầm và chép lại. Cụ hỏi thăm công việc của từng người, bảo ban các học trò nhỏ, rồi đột nhiên nói:
                                                </p> 
                                                <p>
                                                    – Thầy cảm ơn các anh. Bây giờ, thấy muốn mời tất cả các anh theo thầy tới thăm một người mà thấy mang ơn sâu nặng.
                                                </p> 
                                                <p>
                                                    Các môn sinh đồng thanh dạ ran. Thế là thầy đi trước, trò theo sau. Các anh có tuổi đi ngay sau thầy, người ít tuổi hơn nhường bước, mấy chú tóc để trái đào đi sau cùng. Cụ dẫn học trò đi về cuối làng, đến một ngôi nhà tranh đơn sơ nhưng sáng sủa, ấm cúng. Ở hiên trước, một cụ già trên tám mươi tuổi, râu tóc bạc phơ đang ngồi sưởi nắng. Cụ giáo Chu bước vào sân, chắp tay cung kính vái và nói to:
                                                </p> 
                                                <p>
                                                    – Lạy thầy! Hôm nay con đem tất cả môn sinh đến tạ ơn thầy.
                                                </p> 
                                                <p>
                                                    Cụ già tóc bạc ngước lên, nghiêng đầu nghe. Cụ đã nặng tai. Thầy giáo Chu nói lại thật to câu nói vừa rồi một lần nữa. Thì ra đây là cụ đồ xưa kia đã dạy vỡ lòng cho cụ giáo Chu.
                                                </p> 
                                                <p>
                                                    Tiếp sau cụ giáo Chu, các môn sinh lần lượt theo lứa tuổi vái tạ cụ đồ già. Ngày mừng thọ thầy Chu năm ấy, họ được thêm một bài học thấm thía về nghĩa thầy trò.
                                                </p> 
                                                <p class="text-right italic font-bold text-gray-600">(Theo Hà Ân)</p> 
                                            </div> 
                                        </div> 
                                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                                </div>
                                                <div class="flex-grow">
                                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                                        Bài văn ca ngợi thầy giáo Chu Văn An – một nhà giáo tài cao, đức trọng, một tấm gương sáng ngời về đạo đức tôn sư trọng đạo. Ông không chỉ dạy chữ, dạy người mà còn dạy cho học trò bài học sâu sắc về lòng biết ơn đối với người thầy.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </section> 
                                <aside class="w-full lg:w-[30%]"> 
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl">
                                        <div class="mb-6">
                                            <img src="hinh_anh/nguoithaycuamuondoi.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl">
                                        </div>
                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div> 
                                        <div class="space-y-4"> 
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Các môn sinh đến nhà cụ giáo Chu để làm gì?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Các môn sinh đến nhà cụ giáo Chu để mừng thọ cụ tròn sáu mươi tuổi. Họ dâng biếu thầy những cuốn sách quý.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden mt-4">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Chi tiết nào cho thấy học trò rất tôn trọng cụ giáo Chu?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Từ sáng sớm đã tề tựu đông đủ. Cung kính dâng biếu quà. Khi nghe thầy nói muốn đi thăm người thầy cũ, tất cả đồng thanh dạ ran và kính cẩn đi theo thầy. Các anh có tuổi đi ngay sau thầy, người ít tuổi hơn nhường bước.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden mt-4">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Tình cảm của cụ giáo Chu đối với người thầy cũ như thế nào?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">Cụ giáo Chu rất tôn trọng và biết ơn người thầy cũ. Cụ mời học trò cùng đến thăm. Khi gặp thầy, cụ chắp tay cung kính vái và nói to: "Lạy thầy! Hôm nay con đem tất cả môn sinh đến tạ ơn thầy."</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden mt-4">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Những thành ngữ, tục ngữ nào dưới đây nói lên bài học mà các môn sinh nhận được trong ngày mừng thọ thầy giáo Chu?</span>
                                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </button>
                                                <div class="accordion-content">
                                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                        <p class="font-medium">a) Uống nước nhớ nguồn. <br> b) Tôn sư trọng đạo. <br> c) Nhất tự vi sư, bán tự vi sư. <br> -> Tất cả các câu trên đều phù hợp.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div> 
                                </aside> 
                            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Thầy giáo Chu Văn An sống vào triều đại nào?", "a": ["Triều Lý", "Triều Trần", "Triều Lê", "Triều Nguyễn"], "c": 1 },
                        { "q": "Sau khi thi đỗ cao, Chu Văn An đã lựa chọn con đường nào?", "a": ["Ra làm quan to trong triều đình ngay lập tức", "Đi du ngoạn khắp nơi", "Không làm quan mà mở trường dạy học ở quê", "Ở ẩn và không gặp gỡ ai"], "c": 2 },
                        { "q": "Mục đích mở trường dạy học của Chu Văn An là gì?", "a": ["Để kiếm sống", "Nhằm truyền bá đạo lí và đào tạo nhân tài cho đất nước", "Để được nổi tiếng", "Để chuẩn bị thi tiếp"], "c": 1 },
                        { "q": "Các môn sinh đến nhà cụ giáo Chu để làm gì?", "a": ["Để học bài", "Để xin chữ", "Để mừng thọ thầy", "Để bàn việc nước"], "c": 2 },
                        { "q": "Món quà mà các môn sinh dâng biếu thầy là gì?", "a": ["Vàng bạc, châu báu", "Lụa là, gấm vóc", "Những cuốn sách quý do họ tự sưu tầm và chép lại", "Những bức tranh quý"], "c": 2 },
                        { "q": "Thái độ của các môn sinh đối với cụ giáo Chu như thế nào?", "a": ["Sợ hãi và xa lánh", "Kính trọng, yêu mến và biết ơn", "Thờ ơ, không quan tâm", "Coi thường vì thầy không làm quan"], "c": 1 },
                        { "q": "Chi tiết nào thể hiện sự đồng lòng và lễ phép của các học trò khi nghe thầy đề nghị?", "a": ["Họ im lặng nhìn nhau", "Họ bàn tán xôn xao", "Họ dạ ran và kính cẩn đi theo sau cụ", "Họ xin phép ra về"], "c": 2 },
                        { "q": "Người mà cụ giáo Chu mời học trò cùng đến thăm là ai?", "a": ["Một người bạn cũ của cụ", "Một vị quan to trong triều", "Người thầy dạy vỡ lòng cho cụ ngày xưa", "Một người học trò giỏi nhất của cụ"], "c": 2 },
                        { "q": "Hành động dẫn học trò đi thăm thầy cũ của cụ giáo Chu thể hiện truyền thống đạo đức nào?", "a": ["Lá lành đùm lá rách", "Thương người như thể thương thân", "Tôn sư trọng đạo (uống nước nhớ nguồn)", "Đoàn kết tương thân tương ái"], "c": 2 },
                        { "q": "Vì sao tác giả gọi Chu Văn An là \"Người thầy của muôn đời\"?", "a": ["Vì cụ sống rất lâu", "Vì cụ có rất nhiều học trò", "Vì cụ là tấm gương mẫu mực về đạo đức và nhân cách cho mọi thế hệ học trò noi theo", "Vì cụ dạy học ở nhiều nơi"], "c": 2 },
                        { "q": "Cụm từ \"dạy vỡ lòng\" có nghĩa là gì?", "a": ["Dạy những kiến thức đầu tiên, cơ bản nhất cho người mới bắt đầu học", "Dạy những kiến thức cao siêu, khó hiểu", "Dạy võ thuật", "Dạy cách làm thơ"], "c": 0 },
                        { "q": "Theo bài đọc, yếu tố nào giúp cụ Chu Văn An có được thành công và dạy dỗ được nhiều học trò giỏi?", "a": ["Nhờ cụ có nhiều tiền", "Nhờ cụ có quyền lực", "Nhờ công ơn dạy dỗ của người thầy cũ và sự nỗ lực của bản thân", "Nhờ sự may mắn"], "c": 2 },
                        { "q": "Bài học sâu sắc nhất mà cụ giáo Chu muốn dạy cho các học trò qua buổi mừng thọ là gì?", "a": ["Phải học thật giỏi để làm quan", "Phải tặng quà đắt tiền cho thầy", "Phải biết trân trọng, nhớ ơn và kính trọng những người thầy đã dạy dỗ mình", "Phải giữ gìn sức khỏe"], "c": 2 },
                        { "q": "Tình cảm của các thế hệ học trò dành cho Chu Văn An được miêu tả như thế nào trong phần kết?", "a": ["Chỉ kính trọng khi thầy còn sống", "Yêu mến, kính trọng và coi ông là tấm gương sáng mãi", "Bình thường như những người thầy khác", "Kính sợ vì thầy rất nghiêm khắc"], "c": 1 },
                        { "q": "Dòng nào dưới đây nêu đúng nghĩa của từ \"tề tựu\"?", "a": ["Đi lại lộn xộn", "Đứng xếp hàng ngay ngắn", "Tụ họp lại đông đủ tại một nơi", "Giải tán đi nhiều nơi"], "c": 2 }
                    ]
                }
            }
        },
        "291-danh-y-tue-tinh": {
            "title": "Danh y Tuệ Tĩnh",
            "week": 29,
            "subject": "Đọc",
            "theme": "Tiếp bước cha ông",
            "audio": "am_thanh/291-danh-y-tue-tinh.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                <!-- Cột trái (70%) - Bài đọc -->
                <section class="w-full lg:w-[70%]">
                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                            <!-- Trang trí góc -->
                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>

                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                Danh y Tuệ Tĩnh
                            </h1>

                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                <div class="mb-8">
                                    <img src="hinh_anh/2911-danhytuetinh.jpg" alt="Danh y Tuệ Tĩnh và học trò" class="w-full h-auto rounded-3xl shadow-lg border-4 border-white">
                                </div>

                                <div class="mb-8">
                                    <img src="hinh_anh/2912-danhytuetinh.jpg" alt="Vườn thuốc Nam" class="w-full h-auto rounded-3xl shadow-lg border-4 border-white">
                                </div>
                            </div>
                        </div>

                        <!-- Nội dung chính -->
                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                </div>
                                <div class="flex-grow">
                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                        Bài đọc ca ngợi danh y Tuệ Tĩnh – người đã có công lớn trong việc khai sáng và xây dựng nền y học cổ truyền Việt Nam. Ông là tấm gương sáng về lòng yêu nước, tinh thần tự lực tự cường và lòng tự hào dân tộc với chủ trương "Nam dược trị Nam nhân".
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Cột phải (30%) - Tìm hiểu bài -->
                <aside class="w-full lg:w-[30%]">
                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                        <!-- Ảnh minh họa -->
                        <div class="mb-6 -mt-2">
                            <img src="hinh_anh/291-tue-tinh-digital.png" alt="Danh y Tuệ Tĩnh" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                        </div>

                        <div class="flex items-center space-x-4 mb-8">
                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                        </div>

                        <div class="space-y-4">
                            <!-- Câu 1 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Danh y Tuệ Tĩnh dẫn học trò lên núi để làm gì?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Ông dẫn học trò lên núi Nam Tào, Bắc Đẩu để nói về tâm nguyện ấp ủ bấy lâu của mình, đó là việc xây dựng nền y học dân tộc tự chủ.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 2 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Vì sao vua quan nhà Trần lại lo lắng về vấn đề thuốc men khi có giặc ngoại xâm?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Vì giặc phương Bắc đã cấm vận, ngăn cản việc vận chuyển thuốc men từ Trung Quốc sang nước ta. Nếu chiến tranh xảy ra, binh sĩ bị thương hoặc đau ốm sẽ không có thuốc chữa trị.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 3 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Quân dân nhà Trần đã giải quyết khó khăn về thuốc men như thế nào?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Các thái y đã toả đi khắp các miền quê để học cách chữa bệnh bằng cây cỏ dân gian. Nhờ đó, các vườn thuốc Nam mọc lên khắp nơi, giúp quân dân có thuốc chữa bệnh và bồi bổ sức khỏe.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 4 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Câu nói nổi tiếng nào thể hiện tư tưởng y học của Tuệ Tĩnh?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Đó là câu: "Nam dược trị Nam nhân" (nghĩa là: Dùng thuốc Nam để chữa bệnh cho người Nam).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Danh y Tuệ Tĩnh sống vào triều đại nào trong lịch sử Việt Nam?", "a": ["Nhà Lý", "Nhà Trần", "Nhà Lê", "Nhà Nguyễn"], "c": 1 },
                        { "q": "Địa điểm ông dẫn học trò lên là đâu?", "a": ["Núi Tản Viên", "Núi Yên Tử", "Núi Nam Tào, Bắc Đẩu", "Núi Ngự Bình"], "c": 2 },
                        { "q": "Khó khăn lớn nhất về y tế mà nước ta gặp phải khi giặc ngoại xâm đe dọa là gì?", "a": ["Thiếu thầy thuốc giỏi", "Dân số quá đông", "Thuốc men từ phương Bắc bị cấm vận chuyển sang", "Không có bệnh viện"], "c": 2 },
                        { "q": "Để khắc phục tình trạng thiếu thuốc, các thái y đời Trần đã làm gì?", "a": ["Đầu hàng giặc để xin thuốc", "Tìm tòi, học hỏi cách chữa bệnh bằng cây cỏ dân gian (thuốc Nam)", "Mua thuốc từ các nước phương Tây", "Cầu khấn thần linh"], "c": 1 },
                        { "q": "Theo lời Tuệ Tĩnh, yếu tố nào đã góp phần giúp quân dân nhà Trần chiến thắng kẻ thù?", "a": ["Vũ khí hiện đại", "Cây cỏ nước Nam giúp quân đội hùng mạnh, can trường", "Sự giúp đỡ của nước ngoài", "Thời tiết thuận lợi"], "c": 1 },
                        { "q": "'Thuốc Nam' được hiểu là gì?", "a": ["Thuốc do người tên Nam chế tạo", "Thuốc nhập khẩu từ phía Nam", "Thuốc được chế biến từ cây cỏ, dược liệu có sẵn tại nước Nam (Việt Nam)", "Thuốc chỉ dành cho nam giới"], "c": 2 },
                        { "q": "Tư tưởng chủ đạo của Tuệ Tĩnh qua câu 'Nam dược trị Nam nhân' là gì?", "a": ["Bài trừ thuốc nước ngoài hoàn toàn", "Đề cao tinh thần tự chủ, dùng thuốc của nước mình chữa bệnh cho người mình", "Chỉ chữa bệnh cho người nghèo", "Khuyên mọi người không nên uống thuốc"], "c": 1 },
                        { "q": "Thái độ của Tuệ Tĩnh đối với cây cỏ nước nhà như thế nào?", "a": ["Coi thường, cho là cỏ dại", "Thờ ơ, không quan tâm", "Trân trọng, tin tưởng vào giá trị chữa bệnh của chúng", "Lo lắng vì cây cỏ có độc"], "c": 2 },
                        { "q": "Việc phát triển vườn thuốc Nam thể hiện truyền thống gì của dân tộc?", "a": ["Truyền thống hiếu học", "Truyền thống tự lực, tự cường và sáng tạo trong lao động", "Truyền thống ngoại giao", "Truyền thống văn nghệ"], "c": 1 },
                        { "q": "Danh y Tuệ Tĩnh được hậu thế tôn vinh là gì?", "a": ["Ông tổ nghề mộc", "Ông tổ ngành thuốc Nam (Thánh thuốc Nam)", "Trạng nguyên trẻ nhất", "Nhà thơ lớn nhất"], "c": 1 },
                        { "q": "Ý nguyện của Tuệ Tĩnh nhắn nhủ học trò là gì?", "a": ["Phải đi du học nước ngoài", "Phải làm quan to", "Tiếp nối việc dùng thuốc Nam chữa bệnh cho dân ta", "Viết sách lịch sử"], "c": 2 },
                        { "q": "Trong câu chuyện, cây cỏ thiên nhiên Việt Nam được ví như điều gì đối với quân đội?", "a": ["Vũ khí sát thương", "Nguồn sức mạnh bảo vệ sức khỏe", "Lương thực dự trữ", "Vật trang trí"], "c": 1 },
                        { "q": "Bài đọc thuộc chủ điểm nào?", "a": ["Cánh chim hòa bình", "Tiếp bước cha ông", "Vẻ đẹp muôn màu", "Những người quả cảm"], "c": 1 },
                        { "q": "Qua bài đọc, em học được điều gì từ danh y Tuệ Tĩnh?", "a": ["Cách leo núi giỏi", "Lòng yêu nước và ý thức trân trọng nguồn tài nguyên sẵn có của quê hương", "Cách trồng cây cảnh", "Cách đối phó với người lạ"], "c": 1 },
                        { "q": "Dòng nào dưới đây giải thích đúng từ 'can trường'?", "a": ["Sợ hãi, bỏ chạy", "Gan dạ, không sợ nguy hiểm, khó khăn", "Yếu đuối, mệt mỏi", "Thông minh, nhanh trí"], "c": 1 }
                    ]
                }
            }
        },
        "292-cu-do-chieu": {
            "title": "Cụ Đồ Chiểu",
            "week": 29,
            "subject": "Đọc",
            "theme": "Tiếp bước cha ông",
            "audio": "am_thanh/292-cu-do-chieu.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                <!-- Cột trái (70%) - Bài đọc -->
                <section class="w-full lg:w-[70%]">
                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                            <!-- Trang trí góc -->
                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>

                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                Cụ Đồ Chiểu
                            </h1>

                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                <p>Nguyễn Đình Chiểu (1822 – 1888) sinh ra trong một gia đình nhà nho ở làng Tân Thới, huyện Bình Dương, phủ Tân Bình, tỉnh Gia Định (nay là Thành phố Hồ Chí Minh).</p>
                                <p>Năm 1833, do cuộc binh biến trong triều đình, cha bị mất chức, gia đình li tán, cậu bé Chiểu mới mười hai tuổi đã phải xa cha mẹ, ra Huế ở nhờ nhà một người bạn của cha để ăn học.</p>
                                <p>Năm 1843, Nguyễn Đình Chiểu trở về quê mẹ, đỗ tú tài tại trường thi Gia Định. Hai năm sau, ông lại trở ra Huế học tập, chờ kì thi năm Kỷ Dậu, 1849. Nhưng cuối năm 1848, mẹ mất, Nguyễn Đình Chiểu phải bỏ thi về Nam chịu tang mẹ. Trên đường về, ông bị ốm nặng, mù cả hai mắt, chạy chữa mãi không khỏi. Cuối năm 1849, Nguyễn Đình Chiểu mới về đến Gia Định “lỡ bề báo hiếu, lỡ đường lập thân”.</p>
                                <p>Không gục ngã trước những thử thách nặng nề liên tiếp của số phận, sau thời gian chịu tang mẹ, ông mở trường dạy học và làm thuốc chữa bệnh cho dân. Học trò gần xa nghe danh, mến đức xin học rất đông. Tiếng thơ chan chứa tinh thần nghĩa hiệp của Đồ Chiểu cũng bắt đầu vang khắp miền Lục tỉnh.</p>
                                <p>Năm 1858, giặc Pháp xâm lược nước ta. Nguyễn Đình Chiểu cùng các lãnh tụ nghĩa quân bàn mưu tính kế đánh giặc. Ông sáng tác thơ văn bày tỏ niềm tiếc thương, cảm phục đối với những người đã hi sinh vì đất nước; khích lệ mạnh mẽ tinh thần chiến đấu của nhân dân. Trái tim nhân hậu của ông luôn gắn bó sắt son với vận mệnh của đất nước. Ông được nhân dân Lục tỉnh gọi bằng cái tên trìu mến “cụ Đỗ Chiểu” như một cách tri ân với người thầy đáng kính của “lòng dân”.</p>
                                <p class="text-right italic mt-4">(Theo Trần Thị Hoa Lê)</p>
                            </div>
                        </div>

                        <!-- Nội dung chính -->
                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                </div>
                                <div class="flex-grow">
                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                        Bài đọc ca ngợi cụ Nguyễn Đình Chiểu – người đã nêu cao nghị lực phi thường vượt lên số phận. Đồng thời bày tỏ niềm khâm phục trước tấm lòng nhân hậu, hết lòng bảo vệ chính nghĩa, tinh thần yêu nước và sự gắn bó sắt son với dân, với nước của cụ Đồ Chiểu.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Cột phải (30%) - Tìm hiểu bài -->
                <aside class="w-full lg:w-[30%]">
                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                        <!-- Ảnh minh họa -->
                        <div class="mb-6 -mt-2">
                            <img src="hinh_anh/292-dochieu-digital.png" alt="Cụ Đồ Chiểu" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                        </div>

                        <div class="flex items-center space-x-4 mb-8">
                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                        </div>

                        <div class="space-y-4">
                            <!-- Câu 1 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Hãy giới thiệu đôi nét về tiểu sử Nguyễn Đình Chiểu.</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Nguyễn Đình Chiểu (1822 – 1888) sinh ra trong một gia đình nhà nho ở làng Tân Thới, tỉnh Gia Định. Ông có chặng đường học hành gian nan: năm 12 tuổi phải xa cha mẹ ra Huế ăn học; năm 1843 đỗ Tú tài; năm 1849 chuẩn bị thi tiếp thì phải bỏ dở về chịu tang mẹ.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 2 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Nguyễn Đình Chiểu đã gặp những biến cố đau thương nào trong cuộc đời?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Biến cố lớn nhất là khi đang chờ thi thì mẹ mất. Trên đường về chịu tang, ông bị ốm nặng dẫn đến mù cả hai mắt, công danh dở dang ("lỡ bề báo hiếu, lỡ đường lập thân").</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 3 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Nguyễn Đình Chiểu đã làm gì để sống có ích cho đời sau khi gặp hoạn nạn?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Không gục ngã trước số phận, ông đã mở trường dạy học, làm thuốc chữa bệnh cho dân và sáng tác thơ văn khích lệ tinh thần nghĩa hiệp.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 4 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Cuộc chiến đấu chống giặc Pháp của cụ Đồ Chiểu diễn ra như thế nào?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Khi giặc Pháp xâm lược (1858), ông cùng các lãnh tụ nghĩa quân bàn mưu tính kế đánh giặc. Ông dùng thơ văn làm vũ khí để ca ngợi người hi sinh vì nước và khích lệ tinh thần chiến đấu của nhân dân.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 5 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">5. Vì sao Nguyễn Đình Chiểu được gọi là “cụ Đồ Chiểu”?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Vì ông có những phẩm chất cao quý: nghị lực phi thường vượt lên số phận bất hạnh, tấm lòng nhân hậu, yêu nước thương dân, hết lòng bảo vệ chính nghĩa. Ông là người thầy giáo, thầy thuốc đáng kính của "lòng dân".</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Nguyễn Đình Chiểu sinh ra ở đâu?", "a": ["Hà Nội", "Gia Định (TP. Hồ Chí Minh ngày nay)", "Huế", "Cần Thơ"], "c": 1 },
                        { "q": "Biến cố nào khiến Nguyễn Đình Chiểu phải bỏ thi về Nam vào năm 1848?", "a": ["Ông bị ốm nặng", "Ông hết tiền ăn học", "Mẹ ông mất", "Chiến tranh nổ ra"], "c": 2 },
                        { "q": "Điều bất hạnh lớn nhất xảy ra với ông trên đường về chịu tang mẹ là gì?", "a": ["Bị mất hết hành lý", "Bị ốm nặng và mù cả hai mắt", "Bị lạc đường", "Bị giặc bắt giam"], "c": 1 },
                        { "q": "Cụm từ \"Lỡ bề báo hiếu, lỡ đường lập thân\" nói về hoàn cảnh nào của ông?", "a": ["Khi ông đỗ Tú tài", "Khi ông bị mù và mẹ mất, chưa kịp đền đáp công ơn cha mẹ và chưa thành danh", "Khi ông tham gia đánh giặc", "Khi ông về già"], "c": 1 },
                        { "q": "Trước những thử thách nghiệt ngã của số phận, thái độ của ông thế nào?", "a": ["Buông xuôi và tuyệt vọng", "Sống ẩn dật không gặp ai", "Không gục ngã, kiên cường vươn lên giúp đời", "Chỉ biết than khóc"], "c": 2 },
                        { "q": "Sau khi bị mù, Nguyễn Đình Chiểu đã làm những công việc gì?", "a": ["Làm ruộng và buôn bán", "Mở trường dạy học và làm thuốc chữa bệnh", "Đi tu hành", "Làm quan trong triều đình"], "c": 1 },
                        { "q": "Sự kiện lịch sử nào diễn ra vào năm 1858 được nhắc đến trong bài?", "a": ["Giặc Pháp xâm lược nước ta", "Nguyễn Đình Chiểu qua đời", "Khởi nghĩa Tây Sơn nổ ra", "Nguyễn Đình Chiểu đỗ đạt"], "c": 0 },
                        { "q": "Nguyễn Đình Chiểu đã tham gia đánh giặc bằng cách nào?", "a": ["Trực tiếp cầm súng ra trận", "Bàn mưu tính kế cùng nghĩa quân và dùng thơ văn để cổ vũ tinh thần", "Đi quyên góp lương thực", "Làm gián điệp"], "c": 1 },
                        { "q": "Nội dung chính trong thơ văn của Nguyễn Đình Chiểu thời kỳ này là gì?", "a": ["Ca ngợi vẻ đẹp thiên nhiên", "Bày tỏ niềm tiếc thương người hi sinh và khích lệ tinh thần chiến đấu", "Than thân trách phận", "Viết chuyện vui"], "c": 1 },
                        { "q": "Tình cảm của học trò đối với thầy giáo Nguyễn Đình Chiểu như thế nào?", "a": ["Sợ hãi sự nghiêm khắc của thầy", "Nghe danh, mến đức xin học rất đông", "Ít người theo học", "Coi thường vì thầy bị mù"], "c": 1 },
                        { "q": "Nhân dân Lục tỉnh gọi ông với cái tên trìu mến là gì?", "a": ["Thầy giáo Chiểu", "Ông lang Nguyễn", "Cụ Đồ Chiểu", "Nhà thơ mù"], "c": 2 },
                        { "q": "Trái tim của Nguyễn Đình Chiểu được miêu tả gắn bó với điều gì?", "a": ["Với danh vọng và tiền tài", "Với thiên nhiên cây cỏ", "Gắn bó sắt son với vận mệnh của đất nước", "Với gia đình và dòng họ"], "c": 2 },
                        { "q": "Vì sao nói ông là người thầy đáng kính của \"lòng dân\"?", "a": ["Vì ông rất giàu có", "Vì ông sống trọn tình nghĩa, yêu nước thương dân và được nhân dân tin yêu", "Vì ông có phép thuật cao cường", "Vì ông làm quan to"], "c": 1 },
                        { "q": "Nghị lực sống của Nguyễn Đình Chiểu thể hiện rõ nhất qua chi tiết nào?", "a": ["Mù cả hai mắt nhưng vẫn dạy học, bốc thuốc và làm thơ đánh giặc", "Đi thi và đỗ Tú tài", "Chịu tang mẹ", "Đi học xa nhà từ nhỏ"], "c": 0 },
                        { "q": "Chủ đề chính của bài đọc là gì?", "a": ["Kể về lịch sử y học Việt Nam", "Miêu tả cuộc kháng chiến chống Pháp", "Ca ngợi nghị lực phi thường, lòng yêu nước và nhân cách cao đẹp của Nguyễn Đình Chiểu", "Giới thiệu các tác phẩm văn học"], "c": 2 }
                    ]
                }
            }
        },
        "301-tran-dai-nghia": {
            "title": "Anh hùng Lao động Trần Đại Nghĩa",
            "week": 30,
            "subject": "Đọc",
            "theme": "Tiếp bước cha ông",
            "audio": "am_thanh/301-tran-dai-nghia.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                <!-- Cột trái (70%) - Bài đọc -->
                <section class="w-full lg:w-[70%]">
                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                Anh hùng Lao động Trần Đại Nghĩa
                            </h1>
                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                <p>Anh hùng Lao động Trần Đại Nghĩa tên khai sinh là Phạm Quang Lễ, quê ở tỉnh Vĩnh Long. Sau khi học xong bậc trung học ở Sài Gòn, năm 1935, ông được cấp học bổng sang Pháp học đại học. Ông đã theo học các ngành kĩ sư cầu cống, kĩ sư điện và kĩ sư hàng không. Ngoài ra, ông còn miệt mài nghiên cứu kĩ thuật chế tạo vũ khí.</p>
                                <p>Năm 1946, nghe theo tiếng gọi thiêng liêng của Tổ quốc, Phạm Quang Lễ đã rời bỏ cuộc sống đầy đủ tiện nghi ở nước ngoài, theo Bác Hồ về nước. Ông được Bác đặt tên mới là Trần Đại Nghĩa và giao nhiệm vụ nghiên cứu chế tạo vũ khí phục vụ cuộc kháng chiến chống thực dân Pháp. Ông đã cùng các đồng nghiệp chế tạo thành công những loại vũ khí có sức công phá lớn như súng ba-dô-ca, súng không giật, bom bay để tiêu diệt xe tăng và lô cốt của giặc. Bên cạnh những cống hiến xuất sắc cho sự nghiệp quốc phòng, Trần Đại Nghĩa còn có công lớn trong việc xây dựng nền khoa học trẻ tuổi của nước nhà.</p>
                                <p>Những cống hiến của Giáo sư Trần Đại Nghĩa được đánh giá cao. Năm 1948, ông được phong quân hàm Thiếu tướng. Năm 1952, ông được tuyên dương Anh hùng Lao động. Ông còn được Nhà nước tặng Giải thưởng Hồ Chí Minh và nhiều huân chương cao quý.</p>
                            </div>
                        </div>

                        <!-- Nội dung chính -->
                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                </div>
                                <div class="flex-grow">
                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                        Bài đọc ca ngợi Anh hùng Lao động Trần Đại Nghĩa là một nhà khoa học lớn, đã có những đóng góp xuất sắc cho sự nghiệp quốc phòng và xây dựng nền khoa học nước nhà. Ông là tấm gương sáng về lòng yêu nước, tài năng và tinh thần cống hiến quên mình vì Tổ quốc.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <!-- Cột phải (30%) - Tìm hiểu bài -->
                <aside class="w-full lg:w-[30%]">
                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                        <div class="mb-6 -mt-2">
                            <img src="hinh_anh/tran-dai-nghia.png" alt="Anh hùng Lao động Trần Đại Nghĩa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                        </div>

                        <div class="flex items-center space-x-4 mb-8">
                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                        </div>

                        <div class="space-y-4">
                            <!-- Câu 1 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Vì sao ông Phạm Quang Lễ lại theo Bác Hồ về nước vào năm 1946?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Năm 1946, ông Phạm Quang Lễ đã rời bỏ cuộc sống đầy đủ tiện nghi ở nước ngoài để theo Bác Hồ về nước vì lòng yêu nước and mong muốn được cống hiến công sức cho sự nghiệp giải phóng đất nước.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 2 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Giáo sư Trần Đại Nghĩa đã có những đóng góp gì to lớn trong quân sự?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Ông đã cùng các đồng nghiệp chế tạo thành công những loại vũ khí có sức công phá lớn như súng ba-dô-ca, súng không giật, bom bay để tiêu diệt xe tăng and lô cốt của giặc.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 3 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Ngoài chế tạo vũ khí, ông còn có công lao gì đối với khoa học nước nhà?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Bên cạnh những cống hiến cho sự nghiệp quốc phòng, ông còn có công lớn trong việc xây dựng nền khoa học trẻ tuổi của nước nhà.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 4 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Những huân chương, danh hiệu cao quý nào mà ông đã được nhận?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap ="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Năm 1948, ông được phong Thiếu tướng. Năm 1952, ông được tuyên dương Anh hùng Lao động. Ngoài ra, ông còn được tặng Giải thưởng Hồ Chí Minh and nhiều huân chương cao quý khác.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Tên thật của Anh hùng Lao động Trần Đại Nghĩa là gì?", "a": ["Trần Văn Giàu", "Phạm Quang Lễ", "Tôn Thất Tùng", "Đặng Văn Ngữ"], "c": 1 },
                        { "q": "Ông theo Bác Hồ về nước vào năm nào?", "a": ["1945", "1946", "1954", "1975"], "c": 1 },
                        { "q": "Trước khi về nước, cuộc sống của ông ở nước ngoài như thế nào?", "a": ["Rất khó khăn, thiếu thốn", "Bình thường như bao người khác", "Đầy đủ tiện nghi", "Bị quản thúc"], "c": 2 },
                        { "q": "Động lực nào khiến ông từ bỏ tất cả để về nước?", "a": ["Muốn tìm cơ hội làm giàu", "Lòng yêu nước and mong muốn cống hiến for sự nghiệp giải phóng dân tộc", "Bị trục xuất khỏi nước ngoài", "Muốn đi du lịch"], "c": 1 },
                        { "q": "Ông đã cùng đồng nghiệp nghiên cứu and chế tạo thành công loại vũ khí nào dưới đây?", "a": ["Xe tăng", "Máy bay chiến đấu", "Súng ba-dô-ca", "Tàu ngầm"], "c": 2 },
                        { "q": "Ngoài súng ba-dô-ca, loại súng nào khác được nhắc đến trong bài?", "a": ["Súng lục", "Súng không giật", "Súng trường", "Súng kíp"], "c": 1 },
                        { "q": "Bài đọc nhận định Trần Đại Nghĩa là một tấm gương lớn về điều gì?", "a": ["Về sự giàu có", "Về lòng yêu nước and tinh thần lao động vì đất nước", "Về khả năng ngoại ngữ", "Về sức khỏe phi thường"], "c": 1 },
                        { "q": "Nội dung chính của bài đọc là gì?", "a": ["Kể về quá trình đi học của Phạm Quang Lễ", "Ca ngợi tài năng, lòng yêu nước and những cống hiến to lớn của Anh hùng Lao động Trần Đại Nghĩa", "Giới thiệu cách chế tạo súng ba-dô-ca", "Miêu tả cuộc sống ở nước ngoài của ông"], "c": 1 },
                        { "q": "Quê của Trần Đại Nghĩa ở tỉnh nào?", "a": ["Bến Tre", "Vĩnh Long", "Trà Vinh", "Tiền Giang"], "c": 1 },
                        { "q": "Ông được cấp học bổng đi du học tại nước nào vào năm 1935?", "a": ["Anh", "Pháp", "Đức", "Mỹ"], "c": 1 },
                        { "q": "Tại Pháp, ông đã theo học những ngành kỹ sư nào?", "a": ["Xây dựng, Kiến trúc", "Cầu cống, Điện, Hàng không", "Hóa chất, Dệt may", "Khai thác mỏ"], "c": 1 },
                        { "q": "Năm 1948, ông được phong quân hàm gì?", "a": ["Đại tá", "Thiếu tướng", "Trung tướng", "Đại tướng"], "c": 1 },
                        { "q": "Năm 1952, ông được tuyên dương danh hiệu gì?", "a": ["Chiến sĩ thi đua", "Anh hùng Lao động", "Nhà giáo Ưu tú", "Anh hùng Lực lượng vũ trang"], "c": 1 },
                        { "q": "Giải thưởng danh giá nào do Nhà nước tặng ông được nhắc đến trong bài?", "a": ["Giải thưởng Lê-nin", "Giải thưởng Hồ Chí Minh", "Giải thưởng Tôn Đức Thắng", "Giải thưởng Nobel"], "c": 1 },
                        { "q": "Trần Đại Nghĩa có đóng góp gì trong việc xây dựng nền khoa học nước nhà?", "a": ["Ông viết sách giáo khoa", "Ông xây dựng nền khoa học trẻ tuổi của nước nhà", "Ông phát minh ra động cơ hơi nước", "Ông tìm ra nhiều loài cây mới"], "c": 1 }
                    ]
                }
            },
        },
        "302-bo-doi-ve-lang": {
            "title": "Bộ đội về làng",
            "week": 30,
            "subject": "Đọc",
            "theme": "Tiếp bước cha ông",
            "audio": "am_thanh/302-bo-doi-ve-lang.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                <!-- Cột trái (70%) - Bài đọc -->
                <section class="w-full lg:w-[70%]">
                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                Bộ đội về làng
                            </h1>
                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                <div class="space-y-4">
                                    <p>Các anh đi</p>
                                    <p>Ngày ấy đã lâu rồi</p>
                                    <p>Xóm làng tôi còn nhớ mãi.</p>
                                    <p>Các anh đi</p>
                                    <p>Bao giờ trở lại</p>
                                    <p>Xóm làng tôi trai gái vẫn chờ mong...</p>
                                    <p>Các anh về mái ấm nhà vui</p>
                                    <p>Tiếng hát câu cười</p>
                                    <p>Rộn ràng xóm nhỏ</p>
                                    <p>Các anh về tưng bừng trước ngõ,</p>
                                    <p>Lớp lớp đàn em hớn hở theo sau</p>
                                    <p>Mẹ già bịn rịn áo nâu</p>
                                    <p>Vui đàn con ở rừng sâu mới về.</p>
                                    <p>Từ lưng đèo</p>
                                    <p>Dốc núi mù che,</p>
                                    <p>Các anh về</p>
                                    <p>Xôn xao làng tôi bé nhỏ.</p>
                                    <p>Nhà lá đơn sơ,</p>
                                    <p>Nhưng tấm lòng rộng mở,</p>
                                    <p>Nồi cơm nấu dở</p>
                                    <p>Bát nước chè xanh</p>
                                    <p>Ngồi vui kể chuyện tâm tình bên nhau.</p>
                                </div>
                                <p class="text-right italic mt-4">HOÀNG TRUNG THÔNG</p>
                            </div>
                        </div>

                        <!-- Nội dung chính -->
                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                </div>
                                <div class="flex-grow">
                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                        Bài thơ ca ngợi tình quân dân thắm thiết trong kháng chiến chống thực dân Pháp. Qua đó thể hiện sự gắn bó bền chặt giữa tiền tuyến and hậu phương, tạo nên sức mạnh chiến thắng kẻ thù.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Cột phải (30%) - Tìm hiểu bài -->
                <aside class="w-full lg:w-[30%]">
                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                        <div class="mb-6 -mt-2">
                            <img src="hinh_anh/bo-doi-ve-lang.png" alt="Bộ đội về làng" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                        </div>

                        <div class="flex items-center space-x-4 mb-8">
                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                        </div>

                        <div class="space-y-4">
                            <!-- Câu 1 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Tìm những từ ngữ thể hiện nỗi niềm mong nhớ bộ đội của dân làng.</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Đó là những từ ngữ: "còn nhớ mãi", "bao giờ trở lại", "vẫn chờ mong".</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 2 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Không khí xóm làng thay đổi thế nào khi các anh bộ đội trở về?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Không khí trở nên rộn ràng, tưng bừng: tiếng hát câu cười rộn rã xóm nhỏ, đàn em hớn hở theo sau, người mẹ già xúc động bịn rịn đón đàn con từ rừng sâu về.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 3 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Những dòng thơ cuối gợi cho em cảm xúc, suy nghĩ gì?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap ="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Gợi lên sự ấm áp của tình người; dù nhà lá đơn sơ, nồi cơm nấu dở nhưng tấm lòng dân làng luôn rộng mở, chân thành and yêu quý bộ đội như người thân trong gia đình.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 4 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Người dân dành tình cảm gì for bộ đội?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Người dân dành for bộ đội tình cảm yêu thương nồng hậu, sự tin cậy and gắn bó máu thịt, coi bộ đội như con em ruột thịt của mình.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 5 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">5. Chủ đề của bài thơ là gì?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Bài thơ ca ngợi tình quân dân thắm thiết, sự gắn bó bền chặt giữa tiền tuyến and hậu phương trong cuộc kháng chiến của dân tộc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Tác giả của bài thơ 'Bộ đội về làng' là ai?", "a": ["Tố Hữu", "Chính Hữu", "Hoàng Trung Thông", "Phạm Tiến Duật"], "c": 2 },
                        { "q": "Khi các anh bộ đội đi xa, thái độ của người dân xóm làng như thế nào?", "a": ["Lo lắng and sợ hãi", "Nhớ mãi and vẫn chờ mong", "Buồn bã and tuyệt vọng", "Thờ ơ, không quan tâm"], "c": 1 },
                        { "q": "Các anh bộ đội trở về làng từ đâu?", "a": ["Từ thành phố lớn", "Từ miền biển xa", "Từ rừng sâu, lưng đèo, dốc núi mù che", "Từ nước ngoài"], "c": 2 },
                        { "q": "Từ ngữ nào miêu tả không khí 'xóm nhỏ' khi bộ đội về?", "a": ["Vắng lặng", "Rộn ràng", "Ồn ào", "Hỗn loạn"], "c": 1 },
                        { "q": "Mẹ già coi các anh bộ đội như thế nào?", "a": ["Khách quý", "Đàn con ở rừng sâu mới về", "Những người hùng", "Những người lạ"], "c": 1 },
                        { "q": "Ngôi nhà đón các anh về được miêu tả ra sao?", "a": ["Nhà ngói đỏ tươi", "Nhà cao cửa rộng", "Nhà lá đơn sơ", "Biệt thự khang trang"], "c": 2 },
                        { "q": "Bộ đội and dân làng đã làm gì khi gặp nhau bên bát nước chè xanh?", "a": ["Tổ chức liên hoan văn nghệ", "Bàn kế hoạch đánh giặc", "Ngồi vui kể chuyện tâm tình bên nhau", "Đi cày cấy giúp dân"], "c": 2 },
                        { "q": "Chủ đề chính của bài thơ là gì?", "a": ["Ca ngợi vẻ đẹp của thiên nhiên miền núi", "Ca ngợi tình quân dân thắm thiết, sự gắn bó bền chặt giữa tiền tuyến and hậu phương", "Miêu tả sự vất vả của nghề nông", "Kể về chiến công oanh liệt của bộ đội"], "c": 1 },
                        { "q": "Hình ảnh 'đàn em hớn hở theo sau' thể hiện điều gì?", "a": ["Sự sợ hãi của trẻ em", "Sự yêu mến, vui mừng của trẻ em khi bộ đội về", "Trẻ em đang đi học", "Trẻ em đang đi chơi"], "c": 1 },
                        { "q": "Từ 'bịn rịn' trong câu 'Mẹ già bịn rịn áo nâu' thể hiện tình cảm gì?", "a": ["Sự tức giận", "Sự thờ ơ", "Sự xúc động, yêu thương, không muốn rời xa", "Sự lo lắng"], "c": 2 },
                        { "q": "'Bát nước chè xanh' trong bài thơ tượng trưng for điều gì?", "a": ["Sự giàu sang", "Sự giản dị, chân thành and ấm áp của tình quân dân", "Sự mệt mỏi", "Sự cầu kỳ"], "c": 1 },
                        { "q": "Bài thơ được viết theo thể thơ nào?", "a": ["Thơ lục bát", "Thơ bốn chữ", "Thơ tự do", "Thơ thất ngôn"], "c": 2 },
                        { "q": "Khổ thơ đầu tiên nhắc đến điều gì?", "a": ["Cảnh đẹp của làng quê", "Nỗi nhớ and sự chờ mong của dân làng đối với bộ đội", "Các trận đánh ác liệt", "Việc tăng gia sản xuất"], "c": 1 },
                        { "q": "Cảnh bộ đội về làng được miêu tác với không khí như thế nào?", "a": ["Vắng lặng, buồn bã", "Tưng bừng, rộn ràng như ngày hội", "Căng thẳng, lo âu", "Bình thường như mọi ngày"], "c": 1 },
                        { "q": "Tình cảm giữa bộ đội and dân làng được ví như tình cảm gì?", "a": ["Tình bạn xã giao", "Tình cảm ruột thịt trong gia đình", "Tình dồng nghiệp", "Tình hàng xóm"], "c": 1 }
                    ]
                }
            }
        },
        "311-ve-ngoi-nha-dang-xay": {
            "title": "Về ngôi nhà đang xây",
            "week": 31,
            "subject": "Đọc",
            "theme": "Tiếp bước cha ông",
            "audio": "am_thanh/ve-ngoi-nha-dang-xay.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                <!-- Cột trái (70%) - Bài đọc -->
                <section class="w-full lg:w-[70%]">
                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                Về ngôi nhà đang xây
                            </h1>
                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content" style="text-align: left; text-indent: 0;">
                                <p style="text-indent: 0;">Chiều đi học về<br>
                                    Chúng em qua ngôi nhà xây dở<br>
                                    Giàn giáo tựa cái lồng che chở<br>
                                    Trụ bê tông nhú lên như một mầm cây<br>
                                    Bác thợ nề ra vẻ còn huơ huơ cái bay:<br>
                                    Tạm biệt!</p>

                                <p style="text-indent: 0;">Ngôi nhà tựa vào nền trời sẫm biếc<br>
                                    Thở ra mùi vôi vữa nồng hăng<br>
                                    Ngôi nhà giống bài thơ sắp làm xong<br>
                                    Là bức tranh còn nguyên màu vôi, gạch.</p>

                                <p style="text-indent: 0;">Bầy chim đi ăn về<br>
                                    Rót vào ô cửa chưa sơn vài nốt nhạc.<br>
                                    Nắng đứng ngủ quên<br>
                                    Trên những bức tường<br>
                                    Làn gió nào về mang hương<br>
                                    Ủ đầy những rãnh tường chưa trát vữa.<br>
                                    Bao ngôi nhà đã hoàn thành<br>
                                    Đều qua những ngày xây dở.</p>

                                <p style="text-indent: 0;">Ngôi nhà như trẻ nhỏ<br>
                                    Lớn lên với trời xanh...<br>
                                    <span class="font-bold italic">(Đồng Xuân Lan)</span>
                                </p>
                            </div>
                        </div>

                        <!-- Nội dung chính -->
                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                </div>
                                <div class="flex-grow">
                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                        Bài thơ vẽ nên bức tranh đẹp, mộng mơ và sống động về ngôi nhà đang xây. Qua đó ca ngợi sự đổi mới, phát triển hằng ngày của đất nước và gửi gắm niềm tin yêu vào tương lai tươi sáng.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Cột phải (30%) - Tìm hiểu bài -->
                <aside class="w-full lg:w-[30%]">
                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                        <div class="mb-6 -mt-2">
                            <img src="hinh_anh/ve-ngoi-nha-dang-xay.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                        </div>

                        <div class="flex items-center space-x-4 mb-8">
                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                        </div>

                        <div class="space-y-4">
                            <!-- Câu 1 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Theo cảm nhận của các bạn nhỏ, ngôi nhà đang xây hiện ra như thế nào?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Ngôi nhà hiện ra rất sống động: Giàn giáo giống cái lồng che chở; trụ bê tông nhú lên như một mầm cây; ngôi nhà tựa nền trời, thở ra mùi vôi vữa, giống bài thơ sắp xong, bức tranh còn nguyên màu vôi gạch.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 2 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Những hình ảnh so sánh, nhân hoá và tác dụng của chúng?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium"><strong>So sánh:</strong> Giàn giáo - cái lồng; trụ bê tông - mầm cây; ngôi nhà - bài thơ/bức tranh/trẻ nhỏ. <strong>Nhân hoá:</strong> Ngôi nhà thở; bầy chim rót nhạc; nắng ngủ quên; gió mang hương; ngôi nhà lớn lên. <strong>Tác dụng:</strong> Giúp ngôi nhà trở nên gần gũi, có hồn như một người bạn.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 3 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Ý nghĩa hình ảnh "Ngôi nhà như trẻ nhỏ / Lớn lên với trời xanh"?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Hình ảnh thể hiện sức sống mãnh liệt và niềm hy vọng. Ngôi nhà lớn lên cùng đất nước, giống như trẻ em là tương lai của tổ quốc.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 4 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Bài đọc muốn nói với em điều gì?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Những ngôi nhà mới chính là hy vọng về sự phát triển của quê hương. Mỗi bạn nhỏ cũng cần nỗ lực hoàn thiện mình mỗi ngày để trở nên đẹp đẽ hơn.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Tác giả của bài thơ 'Về ngôi nhà đang xây' là ai?", "a": ["Trần Đăng Khoa", "Lâm Thị Mỹ Dạ", "Đồng Xuân Lan", "Xuân Quỳnh"], "c": 2 },
                        { "q": "Các bạn nhỏ đi qua ngôi nhà xây dở vào thời điểm nào?", "a": ["Sáng sớm đi học", "Chiều đi học về", "Buổi trưa hè", "Đêm khuya"], "c": 1 },
                        { "q": "Giàn giáo được so sánh với hình ảnh nào?", "a": ["Cái lồng che chở", "Khu rừng rậm", "Mạng nhện khổng lồ", "Cái thang cao"], "c": 0 },
                        { "q": "Trụ bê tông nhú lên được ví như cái gì?", "a": ["Cây nấm", "Mầm cây", "Ngọn tháp", "Cột cờ"], "c": 1 },
                        { "q": "Bác thợ nề làm hành động gì với các bạn nhỏ?", "a": ["Vẫy tay chào", "Huơ huơ cái bay chào tạm biệt", "Gọi các bạn lại chơi", "La mắng các bạn"], "c": 1 },
                        { "q": "Ngôi nhà được miêu tả 'thở' ra mùi gì?", "a": ["Mùi hoa sữa", "Mùi vôi vữa nồng hăng", "Mùi gỗ mới", "Mùi sơn"], "c": 1 },
                        { "q": "Ngôi nhà đang xây được so sánh với một tác phẩm nghệ thuật nào sắp làm xong?", "a": ["Bức tượng", "Bài thơ", "Khúc nhạc", "Vở kịch"], "c": 1 },
                        { "q": "Ngôi nhà là bức tranh còn nguyên màu gì?", "a": ["Màu xanh đỏ", "Màu vôi, gạch", "Màu vàng", "Màu đen trắng"], "c": 1 },
                        { "q": "Bầy chim mang đến điều gì cho ngôi nhà?", "a": ["Rác", "Vài nốt nhạc (tiếng hót)", "Hạt giống", "Lông chim"], "c": 1 },
                        { "q": "Nắng được nhân hóa đang làm gì trên những bức tường?", "a": ["Nhảy múa", "Ngủ quên", "Chạy trốn", "Soi gương"], "c": 1 },
                        { "q": "Làn gió mang hương ủ đầy vào đâu?", "a": ["Vào cửa sổ", "Vào rãnh tường chưa trát vữa", "Vào mái nhà", "Vào sân"], "c": 1 },
                        { "q": "Câu thơ 'Bao ngôi nhà đã hoàn thành / Đều qua những ngày xây dở' có ý nghĩa gì?", "a": ["Mọi thành công đều phải trải qua quá trình lao động vất vả, rèn luyện", "Xây nhà rất lâu", "Không nên xây nhà dở dang", "Nhà nào cũng giống nhau"], "c": 0 },
                        { "q": "Ở khổ cuối, ngôi nhà được so sánh với hình ảnh nào?", "a": ["Người khổng lồ", "Trẻ nhỏ", "Cây cổ thụ", "Ngọn núi"], "c": 1 },
                        { "q": "Ngôi nhà 'lớn lên' với điều gì?", "a": ["Với đất nâu", "Với trời xanh", "Với mây trắng", "Với nắng vàng"], "c": 1 },
                        { "q": "Bài thơ ca ngợi điều gì?", "a": ["Vẻ đẹp của thiên nhiên", "Sự đổi mới, phát triển hằng ngày của đất nước", "Công việc của bác thợ nề", "Sự nghịch ngợm của trẻ em"], "c": 1 }
                    ]
                }
            }
        },
        "312-viet-nam-que-huong-ta": {
            "title": "Việt Nam quê hương ta",
            "week": 31,
            "subject": "Đọc",
            "theme": "Tiếp bước cha ông",
            "audio": "am_thanh/viet-nam-que-huong-ta.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                <!-- Cột trái (70%) - Bài đọc -->
                <section class="w-full lg:w-[70%]">
                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                Việt Nam quê hương ta
                            </h1>
                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content" style="text-align: left; text-indent: 0;">
                                <div class="space-y-4">
                                    <p style="text-indent: 0;"><span class="inline-block">Việt Nam đất nước ta ơi</span><br><span class="inline-block">Mênh mông biển lúa đâu trời đẹp hơn</span><br><span class="inline-block">Cánh cò bay lả rập rờn</span><br><span class="inline-block">Mây mờ che đỉnh Trường Sơn sớm chiều.</span></p>
                                    <p style="text-indent: 0;"><span class="inline-block">Quê hương biết mấy thân yêu</span><br><span class="inline-block">Bao nhiêu đời đã chịu nhiều thương đau</span><br><span class="inline-block">Mặt người vất vả in sâu</span><br><span class="inline-block">Gái trai cũng một áo nâu nhuộm bùn.</span></p>
                                    <p style="text-indent: 0;"><span class="inline-block">Đất nghèo nuôi những anh hùng</span><br><span class="inline-block">Chìm trong máu lửa lại vùng đứng lên</span><br><span class="inline-block">Đạp quân thù xuống đất đen</span><br><span class="inline-block">Súng gươm vứt bỏ lại hiền như xưa.</span></p>
                                    <p style="text-indent: 0;"><span class="inline-block">Việt Nam đất nắng chan hoà</span><br><span class="inline-block">Hoa thơm quả ngọt bốn mùa trời xanh</span><br><span class="inline-block">Mắt đen cô gái long lanh</span><br><span class="inline-block">Yêu ai yêu trọn tấm tình thuỷ chung.</span></p>
                                    <p style="text-indent: 0;"><span class="inline-block">Đất trăm nghề của trăm vùng</span><br><span class="inline-block">Khách phương xa tới lạ lùng bước chân</span><br><span class="inline-block">Tay người như có phép tiên</span><br><span class="inline-block">Trên tre lá cũng dệt nghìn bài thơ.</span></p>
                                    <p class="text-right italic" style="text-indent: 0;">(Nguyễn Đình Thi)</p>
                                </div>
                            </div>
                        </div>

                        <!-- Nội dung chính -->
                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                </div>
                                <div class="flex-grow">
                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                        Bài thơ ca ngợi vẻ đẹp của đất nước Việt Nam với thiên nhiên tươi đẹp, trù phú. Đồng thời ca ngợi con người Việt Nam vất vả, cần cù trong lao động; anh hùng, bất khuất trong chiến đấu; hiền lành, thủy chung trong đời sống tình cảm và rất khéo léo, tài hoa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Cột phải (30%) - Tìm hiểu bài -->
                <aside class="w-full lg:w-[30%]">
                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                        <div class="mb-6 -mt-2">
                            <img src="hinh_anh/viet-nam-que-huong-ta.png" alt="Việt Nam quê hương ta" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                        </div>

                        <div class="flex items-center space-x-4 mb-8">
                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                        </div>

                        <div class="space-y-4">
                            <!-- Câu 1 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Những hình ảnh nào cho thấy vẻ đẹp của thiên nhiên Việt Nam?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Vẻ đẹp thiên nhiên Việt Nam hiện lên qua những hình ảnh: Biển lúa mênh mông, cánh cò bay lả rập rờn, mây mờ che đỉnh Trường Sơn sớm chiều, đất nắng chan hòa, hoa thơm quả ngọt bốn mùa trời xanh,...</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 2 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Tác giả đã làm nổi bật những phẩm chất đáng quý nào của con người Việt Nam trong lao động và chiến đấu?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <ul class="list-disc pl-5 space-y-2 font-medium">
                                            <li><strong>Trong lao động:</strong> Cần cù, chịu thương chịu khó, gắn bó với ruộng đồng. Điều này thể hiện qua từ ngữ “vất vả in sâu” và hình ảnh “Gái trai cũng một áo nâu nhuộm bùn” – hình ảnh chân lấm tay bùn của người nông dân,...</li>
                                            <li><strong>Trong chiến đấu:</strong> Mạnh mẽ, kiên cường, anh hùng, bất khuất. Dù “đất nghèo”, dù phải “chìm trong máu lửa” và chịu nhiều thương đau qua bao nhiêu đời, nhưng người Việt Nam vẫn “vùng đứng lên”, “đạp quân thù xuống đất đen”.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 3 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Vẻ đẹp tâm hồn và tài năng của con người Việt Nam được miêu tả như thế nào?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <ul class="list-disc pl-5 space-y-2 font-medium">
                                            <li><strong>Tâm hồn:</strong> Hiền lành, yêu chuộng hòa bình (Súng gươm vứt bỏ lại hiền như xưa); sống tình nghĩa, thủy chung son sắt (Yêu ai yêu trọn tấm tình thủy chung),...</li>
                                            <li><strong>Tài năng:</strong> Khéo léo, tài hoa, sáng tạo. Đôi bàn tay người lao động được ví "như có phép tiên", có thể tạo ra những sản phẩm thủ công mĩ nghệ tinh xảo từ những vật liệu đơn sơ như tre lá ("Trên tre lá cũng dệt nghìn bài thơ").</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 4 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Bài thơ thể hiện tình cảm gì của tác giả đối với quê hương, đất nước?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Bài thơ thể hiện tình cảm tha thiết, gắn bó, niềm tự hào về cảnh đẹp quê hương (qua cách gọi "Việt Nam đất nước ta ơi"). Tác giả cũng bộc lộ lòng yêu thương, sự đồng cảm sâu sắc với những vất vả, hi sinh của người dân và sự khâm phục, ngưỡng mộ đối với những phẩm chất cao đẹp của con người Việt Nam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Tác giả của bài thơ 'Việt Nam quê hương ta' là ai?", "a": ["Tố Hữu", "Nguyễn Khoa Điềm", "Nguyễn Đình Thi", "Huy Cận"], "c": 2 },
                        { "q": "Hình ảnh 'Mênh mông biển lúa' gợi lên điều gì?", "a": ["Sự giàu có, trù phú của đồng bằng Việt Nam", "Biển có màu vàng", "Nông dân trồng nhiều lúa", "Cảnh thiếu nước"], "c": 0 },
                        { "q": "Điền từ còn thiếu: 'Cánh cò bay ____ rập rờn'?", "a": ["cao", "thấp", "lả", "vút"], "c": 2 },
                        { "q": "Đỉnh núi nào được nhắc đến trong câu 'Mây mờ che đỉnh ____ sớm chiều'?", "a": ["Hoàng Liên Sơn", "Trường Sơn", "Ba Vì", "Bạch Mã"], "c": 1 },
                        { "q": "Hình ảnh 'Mặt người vất vả in sâu' nói lên phẩm chất gì?", "a": ["Lười biếng", "Cần cù, chịu thương chịu khó", "Vui vẻ", "Giàu sang"], "c": 1 },
                        { "q": "Trang phục truyền thống của người nông dân được nhắc đến là gì?", "a": ["Áo lụa", "Áo dài", "Áo nâu", "Áo tứ thân"], "c": 2 },
                        { "q": "'Đất nghèo nuôi những anh hùng' thể hiện truyền thống gì?", "a": ["Truyền thống đánh giặc ngoại xâm", "Truyền thống hiếu học", "Truyền thống tôn sư trọng đạo", "Truyền thống văn hóa"], "c": 0 },
                        { "q": "Hành động 'Đạp quân thù xuống đất đen' thể hiện điều gì?", "a": ["Sự tàn bạo", "Sức mạnh và ý chí kiên cường chống giặc", "Tập thể dục", "Làm đồng"], "c": 1 },
                        { "q": "Sau khi chiến tranh kết thúc ('Súng gươm vứt bỏ'), con người Việt Nam trở nên như thế nào?", "a": ["Hung dữ", "Lại hiền như xưa", "Kiêu ngạo", "Buồn bã"], "c": 1 },
                        { "q": "'Đất nắng chan hòa' gợi tả khí hậu như thế nào?", "a": ["Lạnh giá quanh năm", "Mưa dầm dề", "Nhiều nắng, ấm áp", "Nhiều sương mù"], "c": 2 },
                        { "q": "Đất nước ta có hoa thơm quả ngọt vào lúc nào?", "a": ["Chỉ mùa xuân", "Chỉ mùa hè", "Bốn mùa", "Khi tết đến"], "c": 2 },
                        { "q": "Vẻ đẹp của cô gái Việt Nam được miêu tả qua chi tiết nào?", "a": ["Tóc dài", "Da trắng", "Mắt đen long lanh", "Dáng cao"], "c": 2 },
                        { "q": "Phẩm chất tình cảm nào của người Việt Nam được ca ngợi trong câu 'Yêu ai yêu trọn tấm tình thủy chung'?", "a": ["Hay thay đổi", "Thủy chung, son sắt", "Lạnh lùng", "Dễ dãi"], "c": 1 },
                        { "q": "Câu 'Tay người như có phép tiên' ca ngợi điều gì?", "a": ["Người Việt Nam biết làm ảo thuật", "Sự khéo léo, tài hoa của đôi bàn tay người lao động", "Người Việt Nam có sức mạnh siêu nhiên", "Tay người rất đẹp"], "c": 1 },
                        { "q": "Nghệ thuật nổi bật được sử dụng trong bài thơ là gì?", "a": ["So sánh, nhân hóa, thể thơ lục bát uyển chuyển", "Kể chuyện", "Văn xuôi", "Phỏng vấn"], "c": 0 }
                    ]
                }
            },
        },
        "331-mot-nguoi-hung-tham-lang": {
            "title": "Một người hùng thầm lặng",
            "week": 33,
            "subject": "Đọc",
            "theme": "Thế giới của chúng ta",
            "audio": "am_thanh/mot-nguoi-hung-tham-lang.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                <!-- Cột trái (70%) - Bài đọc -->
                <section class="w-full lg:w-[70%]">
                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                Một người hùng thầm lặng
                            </h1>
                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                <p>Câu chuyện bắt đầu vào một ngày của tháng 12 năm 1938 tại nước Anh. Ông Uyn-tơn quyết định bay sang Tiệp Khắc khi một người bạn nhờ ông tìm cách đưa những đứa trẻ Do Thái từ Pra-ha (Tiệp Khắc) sang Anh. Vì chiến tranh chắc chắn sẽ nổ ra, cơ hội cho những người Do Thái trốn thoát khỏi thành phố hầu như không có, đặc biệt là với trẻ em.</p>
                                <p>Việc đưa trẻ em đi tị nạn cần rất nhiều tiền. Uyn-tơn đã cùng bạn bè đi quyên góp khắp nơi, kêu gọi các gia đình ở Anh nhận nuôi trẻ em Do Thái. Từ tháng 3 đến tháng 8 năm 1939, Uyn-tơn tổ chức thành công tám chuyến tàu, đưa 669 đứa trẻ rời Pra-ha, đi qua Đức, Hà Lan,... rồi đến Luân Đôn. Ngày 16 tháng 9 năm 1939, tất cả biên giới do phát xít Đức kiểm soát bị đóng cửa, Uyn-tơn đành kết thúc hoạt động giải cứu.</p>
                                <p>Sau này, Uyn-tơn còn làm việc trong hội từ thiện hỗ trợ người già và nhận được nhiều khen thưởng. Nhưng việc giải cứu 669 đứa trẻ năm xưa ông chưa một lần kể với ai. 50 năm sau, vợ ông vô tình tìm thấy cuốn sổ ghi thông tin về những đứa trẻ ấy và đưa cho một nhà sử học. Thế là câu chuyện về tình thương, lòng dũng cảm của Uyn-tơn mới được mọi người biết đến.</p>
                                <p>Năm 1988, một hãng truyền thông đã làm chương trình về Uyn-tơn. Khi người dẫn chương trình hỏi: “Trong số những người ngồi đây, ai đã được Uyn-tơn cứu sống?”, cả hội trường đứng lên. Uyn-tơn nghẹn ngào, xúc động. Mọi người ở đó đều khóc vì nhớ ơn người đã mang lại sự sống lần thứ hai cho họ.</p>
                                <p>Năm 2015, Uyn-tơn qua đời, hưởng thọ 106 tuổi. Người dân Tiệp Khắc đã dựng tượng ông trên sân ga thành phố Pra-ha và coi ông như một người hùng thầm lặng đáng kính.</p>
                                <p class="text-right italic text-base">(Theo Hà Tiến)</p>
                            </div>
                        </div>

                        <!-- Nội dung chính -->
                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                </div>
                                <div class="flex-grow">
                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                        Bài đọc ca ngợi ông Uyn-tơn – một người hùng thầm lặng với lòng dũng cảm và trái tim nhân hậu đã giải cứu 669 trẻ em Do Thái thoát khỏi sự tàn khốc của chiến tranh.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Cột phải (30%) - Tìm hiểu bài -->
                <aside class="w-full lg:w-[30%]">
                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                        <div class="mb-6 -mt-2">
                            <img src="hinh_anh/mot-nguoi-hung-tham-lang.png" alt="Một người hùng thầm lặng" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                        </div>

                        <div class="flex items-center space-x-4 mb-8">
                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                        </div>

                        <div class="space-y-4">
                            <!-- Câu 1 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Ông Uyn-tơn đã quyết định làm gì vào tháng 12 năm 1938?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Ông quyết định bay sang Tiệp Khắc để tìm cách đưa những đứa trẻ Do Thái từ Pra-ha sang Anh tị nạn trước khi chiến tranh nổ ra.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 2 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Ông Uyn-tơn đã gặp những khó khăn gì và giải quyết ra sao?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Việc đưa trẻ đi tị nạn cần rất nhiều tiền. Ông đã cùng bạn bè đi quyên góp khắp nơi và kêu gọi các gia đình ở Anh nhận nuôi trẻ em Do Thái.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 3 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Kết quả của hoạt động giải cứu đó như thế nào?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Từ tháng 3 đến tháng 8 năm 1939, ông tổ chức thành công 8 chuyến tàu, giải cứu được 669 đứa trẻ đưa về Luân Đôn an toàn.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 4 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Vì sao gọi ông là "người hùng thầm lặng"?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Vì ông cứu sống hàng trăm người nhưng suốt 50 năm sau đó ông không kể với ai, ngay cả vợ mình cũng không biết cho đến khi bà tìm thấy cuốn sổ ghi chép.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 5 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">5. Câu chuyện muốn gửi gắm thông điệp gì?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Ca ngợi lòng dũng cảm, tình yêu thương con người và nhắc nhở chúng ta hãy luôn mở rộng tấm lòng giúp đỡ những người gặp khó khăn hoạn nạn.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Ông Uyn-tơn là người nước nào?", "a": ["Anh", "Tiệp Khắc", "Mỹ", "Đức"], "c": 0 },
                        { "q": "Ông Uyn-tơn thực hiện công việc giải cứu vào thời gian nào?", "a": ["Những năm 1938 - 1939", "Năm 1945", "Năm 1988", "Năm 2015"], "c": 0 },
                        { "q": "Đối tượng mà ông Uyn-tơn muốn cứu là ai?", "a": ["Những đứa trẻ Do Thái", "Những người lính", "Những người già", "Những nghệ sĩ"], "c": 0 },
                        { "q": "Địa điểm giải cứu những đứa trẻ là từ đâu?", "a": ["Luân Đôn", "Pra-ha (Tiệp Khắc)", "Hà Lan", "Béc-lin"], "c": 1 },
                        { "q": "Ông Uyn-tơn đã tổ chức bao nhiêu chuyến tàu giải cứu?", "a": ["5 chuyến", "6 chuyến", "8 chuyến", "10 chuyến"], "c": 2 },
                        { "q": "Số lượng trẻ em được ông Uyn-tơn cứu sống là bao nhiêu?", "a": ["500 em", "669 em", "1000 em", "Nhiều vô kể"], "c": 1 },
                        { "q": "Vì sao hoạt động giải cứu phải kết thúc vào tháng 9 năm 1939?", "a": ["Hết tiền", "Chiến tranh nổ ra, biên giới bị đóng cửa", "Ông bị bắt", "Ông bị ốm"], "c": 1 },
                        { "q": "Ông Uyn-tơn đã giữ bí mật về việc làm của mình trong bao lâu?", "a": ["10 năm", "20 năm", "50 năm", "Mãi mãi"], "c": 2 },
                        { "q": "Ai là người đã phát hiện ra bí mật của ông Uyn-tơn?", "a": ["Một nhà báo", "Vợ của ông", "Một đứa trẻ được cứu", "Một người bạn"], "c": 1 },
                        { "q": "Ông Uyn-tơn được mọi người biết đến rộng rãi nhờ sự kiện gì năm 1988?", "a": ["Một chương trình truyền hình", "Ông viết sách", "Ông nhận giải thưởng Nobel", "Ông trả lời phỏng vấn báo chí"], "c": 0 },
                        { "q": "Khi gặp lại những người mình đã cứu, ông Uyn-tơn có cảm xúc gì?", "a": ["Bình thản", "Tự hào", "Nghẹn ngào, xúc động", "Sợ hãi"], "c": 2 },
                        { "q": "Người dân Tiệp Khắc đã làm gì để tưởng nhớ ông?", "a": ["Đặt tên đường", "Dựng tượng ông trên sân ga Pra-ha", "Xây trường học", "Làm phim"], "c": 1 },
                        { "q": "Ông Uyn-tơn qua đời năm bao nhiêu tuổi?", "a": ["90 tuổi", "100 tuổi", "106 tuổi", "88 tuổi"], "c": 2 },
                        { "q": "Vì sao gọi ông Uyn-tơn là 'người hùng thầm lặng'?", "a": ["Vì ông làm việc tốt mà không khoe khoang", "Vì ông ít nói", "Vì ông làm việc ban đêm", "Vì ông thích sự yên tĩnh"], "c": 0 },
                        { "q": "Thông điệp chính của câu chuyện là gì?", "a": ["Ca ngợi lòng dũng cảm và nhân hậu", "Thông tin về chiến tranh thế giới", "Kể về lịch sử nước Anh", "Tuyên truyền du lịch Tiệp Khắc"], "c": 0 }
                    ]
                }
            }
        },
        "332-gio-trai-dat": {
            "title": "Giờ Trái Đất",
            "week": 33,
            "subject": "Đọc",
            "theme": "Thế giới của chúng ta",
            "audio": "am_thanh/gio-trai-dat.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                <!-- Cột trái (70%) - Bài đọc -->
                <section class="w-full lg:w-[70%]">
                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                Giờ Trái Đất
                            </h1>
                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                <p>Giờ Trái Đất là một sự kiện được Quỹ Quốc tế Bảo tồn Thiên nhiên tổ chức hằng năm nhằm nâng cao nhận thức về biến đổi khí hậu và khuyến khích mọi người hành động để bảo vệ Trái Đất. Sự kiện này được tổ chức vào thứ Bảy cuối cùng của tháng Ba, khi các thành phố và thị trấn trên toàn cầu tắt đèn trong một giờ, từ 20 giờ 30 phút đến 21 giờ 30 phút giờ địa phương.</p>
                                <p>Sự kiện Giờ Trái Đất được khởi xướng lần đầu tiên tại Xít-ni (Sydney), Ô-xtrây-li-a (Australia) vào năm 2007. Nhờ các phương tiện truyền thông và sự kêu gọi của các tổ chức quốc tế, sự kiện đã thu hút sự quan tâm của thế giới những năm sau đó. Năm 2022, sự kiện đã ghi nhận sự tham gia của hơn 190 quốc gia và vùng lãnh thổ. Việt Nam chính thức tham gia hưởng ứng Giờ Trái Đất từ năm 2009.</p>
                                <p>Sự kiện Giờ Trái Đất đã khẳng định mỗi hành động nhỏ của từng cá nhân khi được nhân lên trên diện rộng sẽ lan toả và có thể làm cho môi trường sống tốt hơn. Hành động tắt các thiết bị điện không cần thiết trong 60 phút góp phần không nhỏ vào việc tiết kiệm điện năng, giúp giảm thiểu khí các-bô-níc và chống biến đổi khí hậu.</p>
                                <p class="text-right italic text-base">(Theo Nguyễn Liêm)</p>
                            </div>
                        </div>

                        <!-- Nội dung chính -->
                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                </div>
                                <div class="flex-grow">
                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                        Bài đọc cung cấp thông tin về nguồn gốc, ý nghĩa và thông điệp mà chiến dịch Giờ Trái Đất mang lại, nhắc nhở chúng ta cần nâng cao nhận thức và hành động để bảo vệ môi trường.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Cột phải (30%) - Tìm hiểu bài -->
                <aside class="w-full lg:w-[30%]">
                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                        <div class="mb-6 -mt-2">
                            <img src="hinh_anh/gio-trai-dat.png" alt="Giờ Trái Đất" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                        </div>

                        <div class="flex items-center space-x-4 mb-8">
                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                        </div>

                        <div class="space-y-4">
                            <!-- Câu 1 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Sự kiện Giờ Trái Đất được tổ chức hằng năm nhằm mục đích gì?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Sự kiện được tổ chức nhằm nâng cao nhận thức về biến đổi khí hậu và khuyến khích mọi người hành động để bảo vệ Trái Đất.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 2 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Sự kiện Giờ Trái Đất được tổ chức như thế nào?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Sự kiện được tổ chức hằng năm vào thứ Bảy cuối cùng của tháng Ba. Khi đó, các thành phố và thị trấn tắt đèn trong một giờ, từ 20 giờ 30 phút đến 21 giờ 30 phút (giờ địa phương).</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 3 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Những chi tiết nào cho thấy Giờ Trái Đất thu hút sự quan tâm của thế giới?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Năm 2007 khởi xướng tại Sydney; năm 2009 Việt Nam tham gia; đến năm 2022 đã có hơn 190 quốc gia và vùng lãnh thổ tham gia hưởng ứng.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 4 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Giờ Trái Đất mang lại lợi ích gì cho môi trường?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Giúp tiết kiệm điện năng, giảm thiểu khí các-bô-níc và chống biến đổi khí hậu, làm cho môi trường sống của chúng ta tốt đẹp hơn.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 5 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">5. Những việc em có thể làm để bảo vệ Trái Đất là gì?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Sử dụng sản phẩm tự nhiên, hạn chế nhựa, trồng cây xanh, phân loại và tái chế rác, tham gia tắt đèn hưởng ứng Giờ Trái Đất hằng năm.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Giờ Trái Đất là sự kiện được tổ chức bởi tổ chức nào?", "a": ["Liên Hợp Quốc", "Quỹ Quốc tế Bảo tồn Thiên nhiên (WWF)", "UNESCO", "Tổ chức Y tế Thế giới (WHO)"], "c": 1 },
                        { "q": "Sự kiện được tổ chức vào thời gian nào hàng năm?", "a": ["Thứ Bảy cuối cùng của tháng Ba", "Chủ nhật đầu tiên của tháng Tư", "Ngày 1 tháng 1", "Ngày 22 tháng 4"], "c": 0 },
                        { "q": "Khung giờ tắt đèn của Giờ Trái Đất là khi nào?", "a": ["19:00 - 20:00", "20:00 - 21:00", "20:30 - 21:30", "21:00 - 22:00"], "c": 2 },
                        { "q": "Sự kiện Giờ Trái Đất được khởi xướng lần đầu tiên tại đâu?", "a": ["Niu-y-oóc (Mỹ)", "Luân Đôn (Anh)", "Xít-ni (Ô-xtrây-li-a)", "Pa-ri (Pháp)"], "c": 2 },
                        { "q": "Sự kiện diễn ra lần đầu tiên vào năm nào?", "a": ["2005", "2007", "2009", "2010"], "c": 1 },
                        { "q": "Việt Nam tham gia hưởng ứng Giờ Trái Đất từ năm nào?", "a": ["2007", "2008", "2009", "2010"], "c": 2 },
                        { "q": "Mục đích chính của Giờ Trái Đất là gì?", "a": ["Tiết kiệm tiền", "Vui chơi giải trí", "Nâng cao nhận thức về biến đổi khí hậu", "Để ngắm sao"], "c": 2 },
                        { "q": "Hành động chính của mọi người trong Giờ Trái Đất là gì?", "a": ["Đốt lửa trại", "Tắt các thiết bị điện không cần thiết", "Chạy bộ", "Trồng cây"], "c": 1 },
                        { "q": "Năm 2022, có khoảng bao nhiêu quốc gia và vùng lãnh thổ tham gia?", "a": ["100", "150", "Hơn 190", "200"], "c": 2 },
                        { "q": "Việc tắt điên trong 60 phút giúp giảm thiểu loại khí nào?", "a": ["Khí Ô-xi", "Khí Các-bô-níc", "Khí Ni-tơ", "Khí Hi-đrô"], "c": 1 },
                        { "q": "Ngoài tiết kiệm điện, Giờ Trái Đất còn giúp gì?", "a": ["Chống biến đổi khí hậu", "Tăng nhiệt độ Trái Đất", "Làm ô nhiễm môi trường", "Gây lãng phí"], "c": 0 },
                        { "q": "Thông điệp của Giờ Trái Đất là gì?", "a": ["Hành động nhỏ của cá nhân tạo nên thay đổi lớn", "Không cần làm gì cả", "Chỉ cần tắt đèn là đủ", "Điện là vô tận"], "c": 0 },
                        { "q": "Để bảo vệ Trái Đất, ngoài việc tắt đèn, chúng ta có thể làm gì?", "a": ["Trồng cây xanh, hạn chế rác thải nhựa", "Xả rác bừa bãi", "Sử dụng nhiều túi ni lông", "Lãng phí nước"], "c": 0 },
                        { "q": "Tại sao lại chọn tắt đèn vào buổi tối?", "a": ["Vì buổi tối mọi người đi ngủ", "Vì lúc đó nhu cầu sử dụng điện chiếu sáng cao", "Vì buổi tối mát mẻ", "Thích thì tắt"], "c": 1 },
                        { "q": "Em cảm thấy thế nào khi tham gia Giờ Trái Đất?", "a": ["Thấy phiền phức", "Thấy tự hào vì góp phần bảo vệ môi trường", "Không quan tâm", "Sợ bóng tối"], "c": 1 }
                    ]
                }
            }
        },
        "321-bai-ca-trai-dat": {
            "title": "Bài ca Trái Đất",
            "week": 32,
            "subject": "Đọc",
            "theme": "Thế giới của chúng ta",
            "audio": "am_thanh/bai-ca-trai-dat.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                <!-- Cột trái (70%) - Bài đọc -->
                <section class="w-full lg:w-[70%]">
                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                Bài ca Trái Đất
                            </h1>
                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content" style="text-align: left; text-indent: 0;">
                                <p style="text-indent: 0;"><span class="inline-block">Trái đất này là của chúng mình</span><br>
                                    <span class="inline-block">Quả bóng xanh bay giữa trời xanh</span><br>
                                    <span class="inline-block">Bồ câu ơi, tiếng chim gù thương mến</span><br>
                                    <span class="inline-block">Hải âu ơi, cánh chim vờn sóng biển</span><br>
                                    <span class="inline-block">Cùng bay nào, cho trái đất quay!</span><br>
                                    <span class="inline-block">Cùng bay nào, cho trái đất quay!</span>
                                </p>

                                <p style="text-indent: 0;">Trái đất trẻ của bạn trẻ năm châu<br>
                                    Vàng, trắng, đen... dù da khác màu<br>
                                    Ta là nụ, là hoa của đất<br>
                                    Gió đẫm hương thơm, nắng tô thắm sắc<br>
                                    Màu hoa nào cũng quý, cũng thơm<br>
                                    Màu hoa nào cũng quý, cũng thơm!
                                </p>

                                <p style="text-indent: 0;">Khói hình nấm là tai hoạ đấy<br>
                                    Bom H, bom A không phải bạn ta<br>
                                    Tiếng hát vui giữ bình yên trái đất<br>
                                    Tiếng cười ran cho trái đất không già<br>
                                    Hành tinh này là của chúng ta!<br>
                                    Hành tinh này là của chúng ta!<br>
                                    <span class="font-bold italic">(Định Hải)</span>
                                </p>
                            </div>
                        </div>

                        <!-- Nội dung chính -->
                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                </div>
                                <div class="flex-grow">
                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                        Bài thơ gửi gắm ước mơ của các bạn thiếu nhi về một thế giới hòa bình, đoàn kết, không có chiến tranh. Trái đất là ngôi nhà chung của tất cả trẻ em trên thế giới.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Cột phải (30%) - Tìm hiểu bài -->
                <aside class="w-full lg:w-[30%]">
                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                        <div class="mb-6 -mt-2">
                            <img src="hinh_anh/bai-ca-trai-dat.png" alt="Bài ca Trái Đất" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                        </div>

                        <div class="flex items-center space-x-4 mb-8">
                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                        </div>

                        <div class="space-y-4">
                            <!-- Câu 1 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Những hình ảnh ở khổ thơ đầu gợi lên một Trái đất như thế nào?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Các hình ảnh: quả bóng xanh bay giữa trời xanh, tiếng chim gù của chim bồ câu, cánh hải âu vờn sóng biển gợi lên một Trái đất hòa bình, yên vui và tươi đẹp.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 2 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Khổ thơ thứ hai muốn nói lên điều gì?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Khổ thơ khẳng định Trái đất là của tất cả các bạn nhỏ trên thế giới, không phân biệt màu da. Các bạn nhỏ đều đáng quý và là những chủ nhân tương lai của hành tinh.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 3 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Những hình ảnh nào có ý nghĩa đối lập với hoà bình?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Đó là những hình ảnh: "khói hình nấm", "bom H", "bom A". Đây là những hình ảnh tượng trưng cho chiến tranh và sự tàn phá, đối lập với sự bình yên và hạnh phúc.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 4 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Bài thơ muốn gửi gắm thông điệp gì?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Bài thơ gửi gắm ước mơ của thiếu nhi về một thế giới hòa bình, đoàn kết và tình yêu thương, kêu gọi mọi người cùng chung tay giữ gìn và bảo vệ hành tinh xanh.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Bài thơ 'Bài ca Trái Đất' được viết bởi tác giả nào?", "a": ["Trần Đăng Khoa", "Định Hải", "Lâm Thị Mỹ Dạ", "Tố Hữu"], "c": 1 },
                        { "q": "Trái đất được so sánh với hình ảnh nào trong khổ thơ đầu?", "a": ["Đĩa bay", "Quả cam", "Quả bóng xanh", "Ngôi nhà"], "c": 2 },
                        { "q": "Những loài chim nào được nhắc đến trong bài thơ?", "a": ["Bồ câu, Hải âu", "Đại bàng, Sẻ", "Vàng anh, Chào mào", "Cò, Vạc"], "c": 0 },
                        { "q": "Tiếng chim bồ câu gù gợi lên điều gì?", "a": ["Sự ồn ào", "Thương mến", "Sự sợ hãi", "Cảnh báo nguy hiểm"], "c": 1 },
                        { "q": "Màu da của các bạn trẻ năm châu được kể tên là gì?", "a": ["Hồng, xanh, tím", "Vàng, trắng, đen", "Đỏ, cam, vàng", "Xám, nâu, đen"], "c": 1 },
                        { "q": "Tác giả gọi các bạn nhỏ là gì của đất?", "a": ["Là nụ, là hoa", "Là lá, là cành", "Là rễ, là thân", "Là quả ngọt"], "c": 0 },
                        { "q": "Nắng được nhân hóa để làm gì cho các loài hoa?", "a": ["Tưới nước", "Tô thắm sắc", "Che chở", "Nhổ cỏ"], "c": 1 },
                        { "q": "Hình ảnh nào được coi là tai họa?", "a": ["Mây ngũ sắc", "Khói hình nấm", "Cầu vồng", "Sương mù"], "c": 1 },
                        { "q": "Bom H, bom A được bài thơ nhận định như thế nào?", "a": ["Là bạn tốt", "Là đồ chơi", "Không phải bạn ta", "Là công cụ lao động"], "c": 2 },
                        { "q": "Tiếng hát có vai trò gì?", "a": ["Làm ồn", "Giữ bình yên trái đất", "Dọa chim", "Gọi mưa"], "c": 1 },
                        { "q": "Tiếng cười có tác dụng gì?", "a": ["Làm mọi người vui", "Cho trái đất không già", "Giải trí", "Chữa bệnh"], "c": 1 },
                        { "q": "Câu 'Cùng bay nào, cho trái đất quay' thể hiện điều gì?", "a": ["Sức mạnh đoàn kết và khát vọng hòa bình", "Muốn bay lên trời", "Muốn đi du lịch", "Thích tập thể dục"], "c": 0 },
                        { "q": "Thông điệp chính của bài thơ là gì?", "a": ["Bảo vệ môi trường", "Yêu hòa bình, chống chiến tranh", "Khám phá vũ trụ", "Trồng nhiều hoa"], "c": 1 },
                        { "q": "Hành tinh này là của ai?", "a": ["Của người lớn", "Của chúng ta (trẻ em)", "Của người ngoài hành tinh", "Của riêng nước Mỹ"], "c": 1 },
                        { "q": "Câu thơ nào khẳng định sự bình đẳng giữa các dân tộc?", "a": ["Trái đất này là của chúng mình", "Vàng, trắng, đen... dù da khác màu", "Hải âu ơi, cánh chim vờn sóng biển", "Khói hình nấm là tai họa đấy"], "c": 1 }
                    ]
                }
            }
        },
        "322-nhung-con-hac-giay": {
            "title": "Những con hạc giấy",
            "week": 32,
            "subject": "Đọc",
            "theme": "Thế giới của chúng ta",
            "audio": "am_thanh/nhung-con-hac-giay.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                <!-- Cột trái (70%) - Bài đọc -->
                <section class="w-full lg:w-[70%]">
                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                Những con hạc giấy
                            </h1>
                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                <p>Ngày 16 tháng 7 năm 1945, nước Mỹ chế tạo được bom nguyên tử. Hơn nửa tháng sau, chính phủ Mỹ quyết định ném cả hai quả bom mới chế tạo xuống Nhật Bản. Hai quả bom lần lượt ném xuống các thành phố Hi-rô-si-ma và Na-ga-xa-ki đã cướp đi mạng sống của hàng trăm nghìn người. Tính đến cuối năm 1945, tổng số người chết vì hai quả bom và bị nhiễm phóng xạ nguyên tử đã lên đến nửa triệu.</p>
                                <p>Khi Hi-rô-si-ma bị ném bom, cô bé Xa-xa-ki Xa-đa-cô mới hai tuổi đã may mắn thoát nạn. Nhưng em bị nhiễm phóng xạ. Mười năm sau, từ một cô bé khoẻ mạnh, nhanh nhẹn, sức khoẻ của em bị giảm sút nhanh chóng, phải nằm viện để chữa trị.</p>
                                <p>Nằm trong bệnh viện nhẩm đếm từng ngày còn lại của đời mình, cô bé ngây thơ tin vào một truyền thuyết nói rằng nếu gấp đủ một nghìn con hạc bằng giấy treo quanh phòng, em sẽ khỏi bệnh. Em liền lặng lẽ nén đau, miệt mài gấp hạc. Biết chuyện, trẻ em toàn nước Nhật đã tới tấp gửi hàng nghìn con hạc giấy đến cho Xa-đa-cô. Nhưng Xa-đa-cô vẫn không qua khỏi, mặc dù em đã gấp được hơn một nghìn con hạc giấy.</p>
                                <p>Xúc động trước cái chết của Xa-đa-cô, học sinh thành phố Hi-rô-si-ma đã quyên góp tiền xây một đài tưởng niệm những nạn nhân bị bom nguyên tử sát hại. Năm 1958, tượng đài Hoà bình cho trẻ em được khánh thành tại công viên Hoà Bình ở Hi-rô-si-ma.</p>
                                <p class="text-right italic text-base">(Theo Những mẩu chuyện lịch sử thế giới)</p>
                            </div>
                        </div>

                        <!-- Nội dung chính -->
                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                </div>
                                <div class="flex-grow">
                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                        Bài đọc tố cáo tội ác của chiến tranh hạt nhân đã cướp đi sinh mạng của bao người dân vô tội, đồng thời thể hiện khát vọng sống và ước vọng hòa bình của trẻ em toàn thế giới.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Cột phải (30%) - Tìm hiểu bài -->
                <aside class="w-full lg:w-[30%]">
                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                        <div class="mb-6 -mt-2">
                            <img src="hinh_anh/nhung-con-hac-giay.png" alt="Những con hạc giấy" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                        </div>

                        <div class="flex items-center space-x-4 mb-8">
                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                        </div>

                        <div class="space-y-4">
                            <!-- Câu 1 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Hậu quả mà hai quả bom nguyên tử gây ra cho Nhật Bản là gì?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Hai quả bom nguyên tử đã cướp đi mạng sống của hàng trăm nghìn người. Tính đến cuối năm 1945, tổng số người chết và bị nhiễm phóng xạ đã lên đến nửa triệu người.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 2 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Xa-đa-cô hi vọng kéo dài cuộc sống của mình bằng cách nào?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Xa-đa-cô tin vào truyền thuyết: nếu gấp đủ một nghìn con hạc giấy treo quanh phòng thì em sẽ khỏi bệnh. Vì thế, em đã lặng lẽ nén đau, miệt mài gấp hạc giấy.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 3 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Các bạn nhỏ đã làm gì để bày tỏ ước vọng hòa bình?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Trẻ em toàn nước Nhật đã gửi hàng nghìn con hạc giấy đến cho Xa-đa-cô. Sau khi em mất, học sinh đã quyên góp xây dựng Tượng đài Hoà bình cho trẻ em để tưởng niệm các nạn nhân.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Câu 4 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Câu chuyện muốn nói với em điều gì?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Câu chuyện lên án tội ác chiến tranh hạt nhân, đồng thời ca ngợi khát vọng sống mãnh liệt và ước mơ hòa bình, tinh thần đoàn kết của trẻ em trên toàn thế giới.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Nước Mỹ ném hai quả bom nguyên tử xuống Nhật Bản vào năm nào?", "a": ["1944", "1945", "1954", "1975"], "c": 1 },
                        { "q": "Hai thành phố nào của Nhật Bản bị ném bom?", "a": ["Tô-ky-ô và Ô-xa-ca", "Hi-rô-si-ma và Na-ga-xa-ki", "Ki-ô-tô và Cô-bê", "Na-gô-ya và Phú Sĩ"], "c": 1 },
                        { "q": "Hậu quả nặng nề nhất của hai quả bom là gì?", "a": ["Phá hủy nhà cửa", "Cướp đi mạng sống hàng trăm nghìn người và gây nhiễm phóng xạ", "Làm ô nhiễm môi trường", "Gây cháy rừng"], "c": 1 },
                        { "q": "Cô bé Xa-đa-cô bao nhiêu tuổi khi bom rơi xuống?", "a": ["1 tuổi", "2 tuổi", "5 tuổi", "10 tuổi"], "c": 1 },
                        { "q": "Xa-đa-cô bị nhiễm chất độc gì?", "a": ["Chất độc màu da cam", "Phóng xạ nguyên tử", "Khí độc", "Thuốc súng"], "c": 1 },
                        { "q": "Xa-đa-cô tin vào truyền thuyết nào để mong khỏi bệnh?", "a": ["Gấp 1000 ngôi sao giấy", "Gấp 1000 con hạc giấy", "Gấp 1000 chiếc thuyền giấy", "Gấp 1000 bông hoa giấy"], "c": 1 },
                        { "q": "Trẻ em Nhật Bản đã làm gì để giúp đỡ Xa-đa-cô?", "a": ["Gửi tiền", "Gửi hạc giấy", "Gửi thuốc", "Đến thăm"], "c": 1 },
                        { "q": "Câu chuyện về Xa-đa-cô có kết thúc như thế nào?", "a": ["Em khỏi bệnh", "Em qua đời dù đã gấp hơn 1000 con hạc", "Em trở thành bác sĩ", "Em đi du học"], "c": 1 },
                        { "q": "Sau khi Xa-đa-cô mất, học sinh Hi-rô-si-ma đã làm gì?", "a": ["Quyên góp xây đài tưởng niệm nạn nhân bom nguyên tử", "Trồng cây", "Viết sách", "Vẽ tranh"], "c": 0 },
                        { "q": "Tượng đài Hoà bình cho trẻ em được đặt ở đâu?", "a": ["Công viên Hoà Bình ở Na-ga-xa-ki", "Công viên Hoà Bình ở Hi-rô-si-ma", "Thủ đô Tô-ky-ô", "Trong bệnh viện"], "c": 1 },
                        { "q": "Nội dung chính của bài đọc là gì?", "a": ["Kể về cuộc đời Xa-đa-cô", "Tố cáo tội ác chiến tranh hạt nhân và ca ngợi khát vọng hòa bình", "Hướng dẫn gấp hạc giấy", "Tả cảnh nước Nhật"], "c": 1 },
                        { "q": "Con hạc giấy trong bài là biểu tượng của điều gì?", "a": ["Sự giàu có", "Ước vọng hòa bình và sự sống", "Sự thông minh", "Sức mạnh quân sự"], "c": 1 },
                        { "q": "Tổng số người chết và nhiễm phóng xạ tính đến cuối năm 1945 là bao nhiêu?", "a": ["Một trăm nghìn", "Nửa triệu", "Một triệu", "Hai trăm nghìn"], "c": 1 },
                        { "q": "Cảm xúc của em khi đọc câu chuyện này là gì?", "a": ["Vui vẻ", "Xúc động, xót xa", "Bình thường", "Sợ hãi"], "c": 1 },
                        { "q": "Để thế giới không còn chiến tranh, chúng ta cần làm gì?", "a": ["Đoàn kết, yêu thương, bảo vệ hòa bình", "Chế tạo vũ khí", "Gây gổ với nhau", "Không quan tâm"], "c": 0 }
                    ]
                }
            }
        },
        "341-dien-thoai-di-dong": {
            "title": "Điện thoại di động",
            "week": 34,
            "subject": "Đọc",
            "theme": "Thế giới của chúng ta",
            "audio": "am_thanh/341-dien-thoai-di-dong.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                <!-- Cột trái (70%) - Bài đọc -->
                <section class="w-full lg:w-[70%]">
                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                            <!-- Trang trí góc -->
                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>

                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                Điện thoại di động
                            </h1>

                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                <p>Điện thoại di động là một vật dụng không thể thiếu trong cuộc sống của con người, nhất là trong cuộc sống hiện đại ngày nay. Thật khó hình dung khi thế giới này không có nó.</p>
                                <p>Ngày 3 tháng 4 năm 1973, nhà phát minh Mác-tin Cúp-pơ thực hiện cuộc gọi với phiên bản đầu tiên của điện thoại di động “cục gạch” vì nó nặng tới 1,1 ki-lô-gam. Chiếc điện thoại này có màn hình chỉ hiển thị chữ, pin thì dùng được có hai mươi phút. Hẳn là bạn không muốn đi khắp nơi với một cục gạch to tướng như thế.</p>
                                <p>Ngày nay, công nghệ cải tiến đã giúp kích thước của điện thoại di động nhỏ lại và nặng chưa đến 85 gam, bỏ vừa trong túi áo. Điện thoại di động có nhiều chức năng, chẳng khác gì một cái hộp chứa hàng loạt dụng cụ: chúng ta có thể gọi điện cho nhau bao gồm cả tiếng và hình ảnh, nhắn tin văn bản và nhắn tin thoại, chụp ảnh, nghe nhạc, chơi trò chơi điện tử, xem phim,...</p>
                                <p>Điện thoại di động ngày càng thông minh hơn. Nó giúp mọi người mua sắm, giao dịch trực tuyến, phát, nhận video,... Hệ thống định vị toàn cầu cho phép điện thoại di động có thể xác định vị trí của bạn ở bất cứ đâu trên hành tinh này. Thật tuyệt vời!</p>
                                <p class="text-right italic text-base">(Theo Gim Píp, Nguyễn Hoàng dịch)</p>
                            </div>
                        </div>

                        <!-- Nội dung chính -->
                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                </div>
                                <div class="flex-grow">
                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                        Điện thoại di động là một trong những phương tiện thông tin hiện đại mà con người đã phát minh được. Nhờ nó, con người có một cuộc sống tiện lợi, phát triển tinh thần, tiết kiệm sức lực và thời gian đi rất nhiều.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Cột phải (30%) - Tìm hiểu bài -->
                <aside class="w-full lg:w-[30%]">
                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                        <!-- Ảnh minh họa -->
                        <div class="mb-6 -mt-2">
                            <img src="hinh_anh/dien_thoai_di_dong.png" alt="Minh họa Điện thoại di động" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                        </div>

                        <div class="flex items-center space-x-4 mb-8">
                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                        </div>

                        <div class="space-y-4">
                            <!-- Câu 1 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                                        1. Ai là người thực hiện cuộc gọi đầu tiên bằng điện thoại di động và vào thời điểm nào?
                                    </span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Cuộc gọi đầu tiên bằng điện thoại di động do nhà phát minh Mác-tin Cúp-pơ thực hiện vào ngày 3 tháng 4 năm 1973.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Câu 2 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                                        2. So sánh sự khác biệt về khối lượng và kích thước giữa chiếc điện thoại đầu tiên và điện thoại ngày nay.
                                    </span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">
                                            • Điện thoại đầu tiên: Được gọi là "cục gạch" vì nặng tới 1,1 ki-lô-gam, rất to và nặng.<br>
                                            • Điện thoại ngày nay: Nhỏ gọn, bỏ vừa trong túi áo, nặng chưa đến 85 gam.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Câu 3 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                                        3. Điện thoại di động ngày nay có những chức năng gì nổi bật?
                                    </span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Điện thoại ngày nay như một hộp dụng cụ đa năng: có thể gọi điện (cả tiếng và hình), nhắn tin (văn bản, thoại), chụp ảnh, nghe nhạc, chơi trò chơi, xem phim, mua sắm, giao dịch trực tuyến và định vị toàn cầu.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Câu 4 -->
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                                        4. Theo em, nếu không có điện thoại di động, con người ngày nay sẽ gặp khó khăn gì?
                                    </span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Nếu không có điện thoại di động, việc liên lạc, chia sẻ thông tin nhanh chóng sẽ rất khó khăn và tốn nhiều thời gian. Ngoài ra, các tiện ích như xác định vị trí, dẫn đường, cứu nạn hoặc làm việc từ xa cũng khó thực hiện được.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Ai là người thực hiện cuộc gọi di động đầu tiên?", "a": ["Mác-tin Cúp-pơ", "A-lếch-xan-đơ Gra-ham Bell", "Xti-vờ Gióp", "Tô-mát Ê-đi-xơn"], "c": 0 },
                        { "q": "Cuộc gọi đầu tiên được thực hiện vào năm nào?", "a": ["1950", "1960", "1973", "1980"], "c": 2 },
                        { "q": "Chiếc điện thoại đầu tiên nặng bao nhiêu?", "a": ["0,5 ki-lô-gam", "1,1 ki-lô-gam", "2 ki-lô-gam", "5 ki-lô-gam"], "c": 1 },
                        { "q": "Vì sao chiếc điện thoại đầu tiên được gọi là 'cục gạch'?", "a": ["Vì nó rất cứng", "Vì nó hình vuông", "Vì nó to và nặng như cục gạch", "Vì nó màu đỏ"], "c": 2 },
                        { "q": "Pin của chiếc điện thoại đầu tiên dùng được bao lâu?", "a": ["1 tiếng", "20 phút", "5 phút", "10 phút"], "c": 1 },
                        { "q": "Điện thoại ngày nay nặng khoảng bao nhiêu?", "a": ["Chưa đến 85 gam", "100 gam", "200 gam", "500 gam"], "c": 0 },
                        { "q": "Điện thoại di động ngày nay được ví với vật dụng gì?", "a": ["Cái máy tính", "Hộp dụng cụ đa năng", "Cái ti vi", "Cái máy ảnh"], "c": 1 },
                        { "q": "Ngoài nghe gọi, điện thoại ngày nay làm được gì?", "a": ["Nấu cơm", "Giặt đồ", "Chụp ảnh, xem phim, định vị...", "Quét nhà"], "c": 2 },
                        { "q": "Hệ thống nào giúp điện thoại xác định vị trí?", "a": ["Hệ thống định vị toàn cầu (GPS)", "Hệ thống phát thanh", "Hệ thống cấp nước", "Hệ thống điện lưới"], "c": 0 },
                        { "q": "Lợi ích chính của điện thoại di động là gì?", "a": ["Làm đồ chơi", "Liên lạc nhanh chóng, tiện lợi", "Để trang trí", "Để chặn giấy"], "c": 1 },
                        { "q": "Nếu không có điện thoại, điều gì sẽ khó khăn nhất?", "a": ["Xem giờ", "Nghe nhạc", "Liên lạc khẩn cấp/tức thời", "Chơi game"], "c": 2 },
                        { "q": "Điện thoại di động giúp con người tiết kiệm điều gì?", "a": ["Tiền bạc", "Sức lực và thời gian", "Thức ăn", "Nước uống"], "c": 1 },
                        { "q": "Màn hình của chiếc thoại đầu tiên hiển thị được gì?", "a": ["Hình ảnh màu", "Video", "Chỉ hiển thị chữ", "Bản đồ"], "c": 2 },
                        { "q": "Tác giả bài đọc là ai?", "a": ["Gim Píp", "Nam Cao", "Tô Hoài", "Trần Đăng Khoa"], "c": 0 },
                        { "q": "Chủ điểm của bài học là gì?", "a": ["Thế giới tuổi thơ", "Vẻ đẹp cuộc sống", "Thế giới của chúng ta", "Tiếp bước cha ông"], "c": 2 }
                    ]
                }
            }
        },
        "342-thanh-pho-thong-minh-mat-xda": {
            "title": "Thành phố thông minh Mát-xđa",
            "week": 34,
            "subject": "Đọc",
            "theme": "Thế giới của chúng ta",
            "audio": "am_thanh/342-mat-xda.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        {
                            "type": "html",
                            "content": `<div class="flex flex-col lg:flex-row gap-6">
                <!-- Cột trái (70%) - Bài đọc -->
                <section class="w-full lg:w-[70%]">
                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                             <!-- Trang trí góc -->
                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>

                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                THÀNH PHỐ THÔNG MINH MÁT-XĐA
                            </h1>
                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                <p>Mát-xđa là một ốc đảo nằm giữa sa mạc, thuộc Các Tiểu vương quốc Ả Rập Thống nhất (viết tắt là UAE). Năm 2008, UAE khởi công xây dựng dự án “Thành phố thông minh Mát-xđa" nhằm biến Mát-xđa trở thành thành phố không các-bô-níc đầu tiên trên thế giới.</p>
                                <p>Điểm nhấn trong thiết kế của thành phố là những chiếc ô hình hoa hướng dương. Ban ngày, những chiếc ô này vừa giúp lưu trữ năng lượng mặt trời vừa là những tấm che nắng khổng lồ. Ban đêm, chúng sẽ khép lại, toả nhiệt, cung cấp điện năng lượng mặt trời cho toàn thành phố.</p>
                                <p>Để đối phó với tình trạng nóng lên do biến đổi khí hậu, ở Mát-xđa, các toà nhà được thiết kế chụm lại với nhau, có lối đi ở giữa, giúp không khí lưu thông được dễ dàng và giúp giảm nhiệt độ mùa hè. Ngoài ra, một tháp gió được xây dựng nhằm lấy dòng không khí trên cao, mang làn gió mát mẻ vào thành phố, cũng góp phần làm giảm đáng kể nhiệt độ nơi đây so với vùng sa mạc ở xung quanh.</p>
                                <p>Các công viên và khu thương mại ở Mát-xđa được xây dựng theo mô hình khu vườn Ả Rập truyền thống, ngập tràn màu xanh, giúp giảm thiểu tối đa lượng khí thải. Chính quyền thành phố cũng khuyến khích người dân đi bộ, đi xe đạp hoặc sử dụng các phương tiện giao thông công cộng chạy bằng điện năng lượng mặt trời để bảo vệ môi trường.</p>
                                <p>Việc xây dựng thành công thành phố thông minh Mát-xđa đã truyền cảm hứng cho một số dự án phát triển nhà ở Anh, Bồ Đào Nha,.... Đây sẽ là những đô thị sinh thái tiếp theo giúp ngăn chặn ô nhiễm môi trường và biến đổi khí hậu.</p>
                                <p class="text-right italic text-base">(Lâm Anh tổng hợp)</p>
                            </div>
                        </div>
                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl">
                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                </div>
                                <div class="flex-grow">
                                    <p class="text-lg font-bold leading-relaxed text-blue-50">Thành phố thông minh Mát-xđa là giải pháp đối phó với tình trạng nóng lên do biến đổi khí hậu và giúp ngăn chặn ô nhiễm môi trường. Đây là hình mẫu về đô thị sinh thái hiện đại cho thế giới.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <aside class="w-full lg:w-[30%]">
                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                        <div class="mb-6 -mt-2">
                            <img src="hinh_anh/342-mat-xda.png" alt="Minh họa Mát-xđa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                        </div>
                        <div class="flex items-center space-x-4 mb-8">
                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                        </div>
                        <div class="space-y-4">
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">1. Địa điểm, thời gian khởi công, mục đích của dự án?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium"><b>Địa điểm:</b> Ốc đảo Mát-xđa (UAE). <b>Thời gian:</b> Năm 2008. <b>Mục đích:</b> Biến Mát-xđa trở thành thành phố không các-bô-níc đầu tiên trên thế giới.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">2. Thiết kế tự vận hành bằng năng lượng mặt trời?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Sử dụng những chiếc ô hình hoa hướng dương khổng lồ. Ban ngày mở ra lưu trữ năng lượng và che nắng, ban đêm khép lại toả nhiệt và cung cấp điện cho thành phố.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">3. Cách đối phó với tình trạng nóng lên?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Các tòa nhà chụm lại với nhau tạo lối đi giúp không khí lưu thông; xây tháp gió để lấy không khí mát trên cao mang vào thành phố.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">4. Chi tiết giúp ngăn chặn ô nhiễm môi trường?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Công viên, khu thương mại ngập tràn màu xanh; khuyến khích đi bộ, xe đạp, phương tiện công cộng chạy bằng điện mặt trời.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                                    <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">5. Ý nghĩa của việc truyền cảm hứng cho nước khác?</span>
                                    <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div class="accordion-content">
                                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                        <p class="font-medium">Mát-xđa là mô hình kiểu mẫu tốt, cho thấy con người rất quan tâm đến việc xây dựng thành phố chống biến đổi khí hậu và bảo vệ môi trường.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Thành phố thông minh Mát-xđa thuộc quốc gia nào?", "a": ["Ả Rập Xê Út", "Các Tiểu vương quốc Ả Rập Thống nhất (UAE)", "Ca-ta", "I-ran"], "c": 1 },
                        { "q": "Mát-xđa được xây dựng ở đâu?", "a": ["Trên núi cao", "Dưới lòng đất", "Giữa sa mạc", "Ven biển"], "c": 2 },
                        { "q": "Dự án khởi công năm nào?", "a": ["2000", "2005", "2008", "2010"], "c": 2 },
                        { "q": "Mục tiêu của Mát-xđa là gì?", "a": ["Thành phố giàu nhất", "Thành phố không các-bô-níc đầu tiên", "Thành phố lớn nhất", "Thành phố du lịch"], "c": 1 },
                        { "q": "Điểm nhấn thiết kế của thành phố là gì?", "a": ["Kim tự tháp", "Những chiếc ô hình hoa hướng dương", "Tòa nhà cao tầng", "Công viên nước"], "c": 1 },
                        { "q": "Những chiếc ô khổng lồ làm gì vào ban ngày?", "a": ["Tạo mưa", "Lưu trữ năng lượng và che nắng", "Phát sáng", "Quay theo chiều gió"], "c": 1 },
                        { "q": "Những chiếc ô khổng lồ làm gì vào ban đêm?", "a": ["Ngủ đông", "Khép lại, tỏa nhiệt, cung cấp điện", "Biến mất", "Chiếu phim"], "c": 1 },
                        { "q": "Các tòa nhà được thiết kế như thế nào để giảm nóng?", "a": ["Xây cách xa nhau", "Chụm lại, có lối đi ở giữa", "Sơn màu đen", "Không có cửa sổ"], "c": 1 },
                        { "q": "Tháp gió có tác dụng gì?", "a": ["Trang trí", "Lấy gió mát trên cao thổi vào thành phố", "Phát sóng điện thoại", "Ngắm cảnh"], "c": 1 },
                        { "q": "Công viên ở đây xây theo mô hình nào?", "a": ["Vườn Châu Âu", "Vườn Ả Rập truyền thống", "Rừng nguyên sinh", "Vườn Nhật Bản"], "c": 1 },
                        { "q": "Phương tiện giao thông nào được khuyến khích?", "a": ["Ô tô chạy xăng", "Xe buýt chạy dầu", "Xe đạp, đi bộ, xe điện", "Xe máy"], "c": 2 },
                        { "q": "Mát-xđa đã truyền cảm hứng cho những nước nào?", "a": ["Mỹ và Pháp", "Anh, Bồ Đào Nha...", "Trung Quốc và Nga", "Việt Nam và Lào"], "c": 1 },
                        { "q": "Mát-xđa là hình mẫu cho loại đô thị nào?", "a": ["Đô thị cổ", "Đô thị sinh thái", "Đô thị công nghiệp", "Đô thị biển"], "c": 1 },
                        { "q": "Vì sao Mát-xđa được gọi là thành phố thông minh?", "a": ["Vì người dân thông minh", "Sử dụng công nghệ để bảo vệ môi trường", "Có nhiều robot", "Có trường đại học lớn"], "c": 1 },
                        { "q": "Bài đọc thuộc chủ điểm nào?", "a": ["Thế giới tuổi thơ", "Thế giới của chúng ta", "Chủ điểm tự chọn", "Đất nước ngàn năm"], "c": 1 }
                    ]
                }
            }
        }
    }
};

