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
                    "settings": { "pick": 10 },
                    "questions": [
                        { "q": "Bài thơ 'Hương cốm mùa thu' của tác giả nào?", "a": ["Trần Đăng Khoa", "Bảo Ngọc", "Huy Cận", "Xuân Quỳnh"], "c": 1 },
                        { "q": "Mùa cốm bắt đầu vào tháng mấy?", "a": ["Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một"], "c": 1 },
                        { "q": "Gió gì thổi về phố mang theo hương cốm?", "a": ["Gió mùa đông bắc", "Gió Lào", "Gió heo may", "Gió nam"], "c": 2 },
                        { "q": "Trong bài thơ, hạt lúa lúc còn non được ví với điều gì?", "a": ["Hạt ngọc", "Tròn căng hơi sữa", "Màu vàng nắng", "Màu xanh trời"], "c": 1 },
                        { "q": "Để có hạt cốm, ba và mẹ đã phải làm gì?", "a": ["Gieo hạt", "Cày cấy", "Sàng sẩy", "Tưới nước"], "c": 2 },
                        { "q": "Hạt cốm được ví mang 'hồn' của những gì?", "a": ["Của nắng và gió", "Của đất và người", "Của trời và mây", "Của hoa và lá"], "c": 1 },
                        { "q": "Bạn nhỏ thấy màu sắc nào 'ủ trong hạt cốm'?", "a": ["Vàng của nắng, xanh của trời, nâu của đất", "Đỏ của hoa, vàng của lá", "Tím của mây, hồng của nắng", "Trắng của mây, đen của đất"], "c": 0 },
                        { "q": "Địa danh nào ở Hà Nội được nhắc tới trong bài?", "a": ["Chùa Một Cột", "Hồ Gươm", "Lăng Bác", "Văn Miếu"], "c": 1 },
                        { "q": "Hình ảnh nào sau đây nói về vẻ đẹp của Hồ Gươm?", "a": ["Mặt nước phẳng lặng", "Chớp đôi mắt biếc", "Lá vàng rơi", "Tháp Rùa rêu phong"], "c": 1 },
                        { "q": "Hạt cốm là sản phẩm của sự kết hợp giữa điều gì?", "a": ["Chỉ do thiên nhiên ban tặng", "Chỉ do bàn tay con người làm ra", "Tinh túy đất trời và bàn tay lao động cần cù", "Sự may mắn của nhà nông"], "c": 2 },
                        { "q": "Từ nào mô tả âm thanh xôn xao bên ô cửa?", "a": ["Lặng lẽ", "Xôn xao", "Ồn ào", "Im lìm"], "c": 1 },
                        { "q": "Câu 'Hạt lúa tròn căng hơi sữa' sử dụng biện pháp nghệ thuật gì?", "a": ["So sánh", "Nhân hóa", "Ẩn dụ", "Điệp từ"], "c": 2 },
                        { "q": "Khổ thơ cuối bài nhắc nhở chúng ta điều gì về mùa hương cốm?", "a": ["Sắp hết mùa thu", "Mùa hương cốm vừa lên", "Nên đi mua cốm", "Hồ Gươm rất đẹp"], "c": 1 },
                        { "q": "Cảm xúc chủ đạo của bạn nhỏ trong bài thơ là gì?", "a": ["Buồn bã", "Sợ hãi", "Vui tươi, trân trọng", "Lo lắng"], "c": 2 },
                        { "q": "Bài thơ nhắc nhở chúng ta cần có thái độ gì với công sức lao động?", "a": ["Quên đi", "Bình thường", "Biết ơn và trân trọng", "Chê bai"], "c": 2 }
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
                                <section class="w-full lg:w-[70%]">
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
                                <aside class="w-full lg:w-[30%]">
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
        }
    }
};
