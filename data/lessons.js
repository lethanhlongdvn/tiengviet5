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
                                                        <div class="flex items-center space-x-2 mb-2">
                                                            <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                            <span class="text-[11px] font-black uppercase tracking-widest text-green-600">Gợi ý trả lời</span>
                                                        </div>
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
                                                        <div class="flex items-center space-x-2 mb-2">
                                                            <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                            <span class="text-[11px] font-black uppercase tracking-widest text-green-600">Gợi ý trả lời</span>
                                                        </div>
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
                                                        <div class="flex items-center space-x-2 mb-2">
                                                            <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                            <span class="text-[11px] font-black uppercase tracking-widest text-green-600">Gợi ý trả lời</span>
                                                        </div>
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
                                                        <div class="flex items-center space-x-2 mb-2">
                                                            <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                            <span class="text-[11px] font-black uppercase tracking-widest text-green-600">Gợi ý trả lời</span>
                                                        </div>
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
                                                        <div class="flex items-center space-x-2 mb-2">
                                                            <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                            <span class="text-[11px] font-black uppercase tracking-widest text-green-600">Gợi ý trả lời</span>
                                                        </div>
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
                                                        <div class="flex items-center space-x-2 mb-2">
                                                            <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                            <span class="text-[11px] font-black uppercase tracking-widest text-green-600">Gợi ý trả lời</span>
                                                        </div>
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
                                                        <div class="flex items-center space-x-2 mb-2">
                                                            <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                            <span class="text-[11px] font-black uppercase tracking-widest text-green-600">Gợi ý trả lời</span>
                                                        </div>
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
                                                        <div class="flex items-center space-x-2 mb-2">
                                                            <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                            <span class="text-[11px] font-black uppercase tracking-widest text-green-600">Gợi ý trả lời</span>
                                                        </div>
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
                                                        <div class="flex items-center space-x-2 mb-2">
                                                            <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                            <span class="text-[11px] font-black uppercase tracking-widest text-green-600">Gợi ý trả lời</span>
                                                        </div>
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
        }
    }
};
