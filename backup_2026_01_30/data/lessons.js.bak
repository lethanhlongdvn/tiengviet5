/**
 * CƠ SỞ DỮ LIỆU BÀI HỌC (LESSON DATABASE)
 * ---------------------------------------
 * Để thêm bài học mới, hãy copy đoạn code mẫu bên dưới và dán vào bên trong đối tượng "lessons".
 * Đừng quên thay đổi ID (ví dụ: "211-ltvc") thành ID mới.
 *
 * --- MẪU BÀI HỌC (TEMPLATE) ---
 * "ID_MOI": {
 *     "title": "Tên bài học",
 *     "week": 22,
 *     "subject": "Tên môn học",
 *     "theme": "Tên chủ điểm",
 *     "audio": "",
 *     "tabs": {
 *         "lesson": {
 *             "title": "Bài học",
 *             "blocks": [
 *                 { "type": "header", "text": "Tiêu đề bài" },
 *                 { "type": "theory", "title": "Ghi nhớ", "content": "<p>Nội dung...</p>" }
 *             ]
 *         },
 *         "quiz": { "title": "Trắc nghiệm", "questions": [] }
 *     }
 * },
 * ------------------------------
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
                            "content": `<div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl mb-8">
                            <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content space-y-4">
                                    <img src="hinh_anh/illustration_tieng_hat.png" class="w-full md:w-2/5 float-none md:float-right ml-0 md:ml-6 mb-4 rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-500" alt="Tiếng hát của người đá">
                                    <p class="indent-8">Trên đỉnh núi cao ở vùng Chư Bô-đa, có một mỏm đá xanh giống hình một em bé cưỡi voi. Những tia nắng vàng dịu, những hạt mưa trong vắt thay nhau tắm gội, sưởi ấm cho mỏm đá. Gió rì rào kể cho mỏm đá nghe những câu chuyện về mọi miền. Chim hót cho mỏm đá nghe những điệu ca du dương. Cứ thế, năm này qua năm khác, những câu chuyện của gió, những bài ca của chim thấm sâu vào mỏm đá hình em bé.</p>
                                    <p class="indent-8">Một buổi sáng, mỏm đá khẽ cựa quậy, rồi từ từ biến thành một em bé xinh đẹp. Em bước xuống núi, thấy muông thú từng đàn kéo về phá nương rẫy, dân làng đuổi đằng đông, dồn đằng tây mà chẳng ăn thua gì. Em bé liền cất giọng hát. Tiếng hát của em vang khắp núi rừng. Muông thú quên cả phá lúa, nhảy múa theo tiếng hát. Dân làng vây quanh em bé, hỏi em từ đâu tới, tên em là gì, nhưng em chỉ cười. Mọi người đặt tên cho em là Nai Ngọc.</p>
                                    <p class="indent-8">Ngày nọ, giặc kéo đến đông như lá rừng, nhanh như chớp giật, giáo mác chĩa lên trời tua tủa như bông lách, bông lau. Dân làng không kể trẻ già, trai gái vội cầm tên nỏ, khiên đao đuổi giặc. Bốn phương lửa cháy rừng rực. Nai Ngọc trèo lên một mỏm núi, cất tiếng hát kêu gọi những kẻ xâm lược chớ đi ăn cướp, hãy trở về với vợ con, đi hái rau ngọt, cắt lúa vàng, tối ngủ bên lửa ấm, sáng thức dậy theo mặt trời,... Giọng hát của Nai Ngọc khiến giặc đứng sững như những pho tượng, vũ khí tuột khỏi tay.</p>
                                    <p class="indent-8">Giặc tan, nhưng không thấy Nai Ngọc đâu. Dân làng bảo nhau rằng sau khi giúp dân trừ giặc, Nai Ngọc đã trở lên núi cao, biến thành đá như trước. Ai cũng tin rằng nhất định Nai Ngọc sẽ trở về với dân làng, cất tiếng hát giữa cảnh núi rừng thanh bình, tươi đẹp.</p>
                                    <p class="text-right italic font-bold text-gray-600 mt-6">(Theo Truyện cổ Việt Nam, Ngọc Anh và Văn Lang kể)</p>
                                </div>
                            </div>
                        </div>
                        <div class="glass-card rounded-[24px] p-6 shadow-xl border-amber-100/50 mb-8">
                             <h2 class="text-2xl font-black text-gray-800 mb-6 flex items-center">
                                <span class="bg-amber-100 p-2 rounded-lg mr-3">💡</span> Tìm hiểu bài
                             </h2>
                             <div class="space-y-4">
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>1. Mỏm đá trên đỉnh núi cao có gì đặc biệt? Mỏm đá được mọi vật yêu quý như thế nào?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Đặc biệt ở chỗ hình dáng giống một em bé cưỡi voi. Mỏm đá được nắng sưởi ấm, mưa tắm gội, gió kể chuyện và chim hót cho nghe.</div>
                                </details>
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>2. Điều kì lạ gì xảy ra khi mỏm đá hoá thành em bé và cất tiếng hát?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Khi em bé cất tiếng hát, muông thú đang phá nương rẫy bỗng quên hết mọi việc và nhảy múa theo tiếng hát.</div>
                                </details>
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>3. Khi giặc kéo đến, Nai Ngọc đã làm gì để giúp dân làng?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Nai Ngọc trèo lên mỏm núi, hát kêu gọi những kẻ xâm lược chớ đi ăn cướp mà hãy trở về với gia đình, lao động sản xuất.</div>
                                </details>
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>4. Tiếng hát của Nai Ngọc thể hiện ước nguyện gì?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Thể hiện ước nguyện về một cuộc sống hòa bình, ấm no, nơi con người được chung sống hạnh phúc và lao động sản xuất.</div>
                                </details>
                             </div>
                        </div>
                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl">
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
                        </div>`
                        }
                    ]
                },
                "quiz": {
                    "setting": { "pick": 5 },
                    "questions": [
                        { "q": "Mỏm đá xanh hình em bé cưỡi voi nằm ở đâu?", "a": ["Trên đỉnh núi Ngự", "Trên đỉnh núi cao ở vùng Chư Bô-đa", "Trong một hang động sâu", "Bên cạnh bờ suối"], "c": 1 },
                        { "q": "Hình dáng của mỏm đá xanh được mô tả như thế nào?", "a": ["Giống hình một con voi khổng lồ", "Giống hình một người mẹ đang bồng con", "Giống hình một em bé cưỡi voi", "Giống hình một bông hoa đá"], "c": 2 },
                        { "q": "Những yếu tố thiên nhiên nào đã \"kể chuyện\" và \"hát\" cho mỏm đá nghe suốt nhiều năm?", "a": ["Mưa và nắng", "Gió và chim", "Suối và cây rừng", "Mây và sương mù"], "c": 1 },
                        { "q": "Điều kỳ diệu gì đã xảy ra vào một buổi sáng?", "a": ["Mỏm đá vỡ tan thành nhiều mảnh", "Mỏm đá khẽ cựa quậy, rồi biến thành một em bé xinh đẹp", "Mỏm đá bay lên trời", "Mỏm đá phát ra ánh sáng rực rỡ"], "c": 1 },
                        { "q": "Khi em bé bước xuống núi, chuyện gì đang xảy ra với dân làng?", "a": ["Giặc ngoại xâm đang tấn công", "Muông thú kéo về phá nương rẫy mà dân làng đuổi không được", "Dân làng đang tổ chức lễ hội", "Dân làng đang bị hạn hán"], "c": 1 },
                        { "q": "Em bé đã làm cách nào để muông thú ngừng phá hoại mùa màng?", "a": ["Dùng cung tên bắn đuổi", "Dùng phép thuật hóa phép", "Cất tiếng hát vang khắp núi rừng", "Nhờ sự giúp đỡ của thần núi"], "c": 2 },
                        { "q": "Dân làng đã đặt tên cho em bé là gì?", "a": ["Sơn Tinh", "Chư Bô-đa", "Nai Ngọc", "Hơ Bia"], "c": 2 },
                        { "q": "Khi giặc ngoại xâm kéo đến, quân giặc được miêu tả như thế nào?", "a": ["Đông như lá rừng, nhanh như chớp giật", "Đông như kiến cỏ, dữ như hổ báo", "Ít nhưng tinh nhuệ", "Chậm chạp nhưng trang bị vũ khí hiện đại"], "c": 0 },
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
        "192-khuc-hat-ru-nhung-em-be-tren-lung-me": {
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
                            "content": `<div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl mb-8">
                            <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                <p class="text-xl italic mb-6 text-center text-gray-600 font-bold">Nguyễn Khoa Điềm</p>
                                <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content space-y-6">
                                    <img src="hinh_anh/illustration_khuc_hat_ru.png" class="w-full md:w-2/5 float-none md:float-right ml-0 md:ml-6 mb-4 rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-500" alt="Khúc hát ru">
                                    <div class="space-y-1">
                                        <p>Em cu Tai ngủ trên lưng mẹ ơi</p>
                                        <p>Em ngủ cho ngoan đừng rời lưng mẹ</p>
                                        <p>Mẹ giã gạo mẹ nuôi bộ đội</p>
                                        <p>Nhịp chày nghiêng giấc ngủ em nghiêng</p>
                                        <p>Mồ hôi mẹ rơi má em nóng hổi</p>
                                        <p>Vai mẹ gầy nhấp nhô làm gối</p>
                                        <p>Lưng đưa nôi và tim hát thành lời:</p>
                                        <p class="italic">– Ngủ ngoan a-kay ơi, ngủ ngoan a-kay hỡi</p>
                                        <p class="italic">Mẹ thương a-kay, mẹ thương bộ đội</p>
                                        <p class="italic">Con mơ cho mẹ hạt gạo trắng ngần</p>
                                        <p class="italic">Mai sau con lớn vung chày lún sân...</p>
                                    </div>
                                    <div class="space-y-1 mt-6">
                                        <p>Em cu Tai ngủ trên lưng mẹ ơi</p>
                                        <p>Em ngủ cho ngoan đừng rời lưng mẹ</p>
                                        <p>Mẹ đang tỉa bắp trên núi Ka-lưi</p>
                                        <p>Lưng núi thì to mà lưng mẹ nhỏ</p>
                                        <p>Em ngủ ngoan em đừng làm mẹ mỏi</p>
                                        <p>Mặt trời của bắp thì nằm trên đồi</p>
                                        <p>Mặt trời của mẹ, em nằm trên lưng</p>
                                        <p class="italic">– Ngủ ngoan a-kay ơi, ngủ ngoan a-kay hỡi...</p>
                                    </div>
                                    <p class="text-right italic font-bold text-gray-600 mt-6">(Nguyễn Khoa Điềm)</p>
                                </div>
                            </div>
                        </div>
                        <div class="glass-card rounded-[24px] p-6 shadow-xl border-amber-100/50 mb-8">
                             <h2 class="text-2xl font-black text-gray-800 mb-6 flex items-center">
                                <span class="bg-amber-100 p-2 rounded-lg mr-3">💡</span> Tìm hiểu bài
                             </h2>
                             <div class="space-y-4">
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>1. Những từ ngữ nào cho thấy bài thơ là lời ru ngọt ngào?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Bài thơ như lời ru ngọt ngào của người mẹ qua các từ ngữ: "Em cu Tai ngủ trên lưng mẹ ơi", "ngủ ngoan a-kay ơi", "ngủ ngoan a-kay hỡi".</div>
                                </details>
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>2. Người mẹ làm những công việc gì và ý nghĩa của chúng?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Công việc: Giã gạo, trồng lúa, tỉa bắp trên núi. Ý nghĩa: Giúp tăng gia sản xuất, nuôi bộ đội kháng chiến để giành độc lập dân tộc.</div>
                                </details>
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>3. Mong ước của người mẹ trong khổ thơ thứ hai là gì?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Mẹ mong con ngủ ngoan, mong có hạt gạo trắng ngần và mong con mau lớn khỏe mạnh để tiếp bước cha ông lao động và chiến đấu.</div>
                                </details>
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>4. Ý nghĩa hai dòng thơ về "Mặt trời"?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Mặt trời của bắp là nguồn sống thiên nhiên. Con chính là "mặt trời của mẹ" - là nguồn sáng, niềm tin, hy vọng và lẽ sống quý giá nhất.</div>
                                </details>
                             </div>
                        </div>
                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl">
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
                        </div>`
                        }
                    ]
                },
                "quiz": {
                    "setting": { "pick": 5 },
                    "questions": [
                        { "q": "Tác giả của bài thơ \"Khúc hát ru những em bé lớn trên lưng mẹ\" là ai?", "a": ["Tố Hữu", "Trần Đăng Khoa", "Nguyễn Khoa Điềm", "Huy Cận"], "c": 2 },
                        { "q": "Em bé được nhắc đến trong bài thơ có tên là gì?", "a": ["A-lưi", "Cu Tai", "Ka-lưi", "A-kay (tên gọi thân mật của con)"], "c": 1 },
                        { "q": "Trong khổ thơ đầu, người mẹ làm công việc gì khi địu con trên lưng?", "a": ["Tỉa bắp", "Dệt vải", "Giã gạo", "Sàng sảy"], "c": 2 },
                        { "q": "Mục đích chính của việc mẹ giã gạo là gì?", "a": ["Để bán lấy tiền", "Để chuẩn bị cho bữa tối của gia đình", "Để nuôi bộ đội kháng chiến", "Để làm bánh chưng"], "c": 2 },
                        { "q": "Câu thơ \"Nhịp chày nghiêng giấc ngủ em nghiêng\" gợi tả hình ảnh gì?", "a": ["Cái chày bị cong", "Giấc ngủ của em bé chao đảo theo nhịp lao động của mẹ", "Em bé đang nằm võng", "Người mẹ đang ru con ngủ trên giường"], "c": 1 },
                        { "q": "Hình ảnh nào diễn tả sự gian khổ của mẹ tác động trực tiếp đến em bé đang ngủ?", "a": ["Lưng đưa nôi", "Tim hát thành lời", "Mồ hôi mẹ rơi má em nóng hổi", "Vai mẹ gầy"], "c": 2 },
                        { "q": "Trong lời ru ở khổ 1, mẹ mong ước con mơ thấy điều gì?", "a": ["Con mơ thấy mặt trời", "Con mơ cho mẹ hạt gạo trắng ngần", "Con mơ thấy núi Ka-lưi", "Con mơ thấy bộ đội về làng"], "c": 1 },
                        { "q": "Câu thơ \"Mai sau con lớn vung chày lún sân\" thể hiện mong muốn gì của người mẹ?", "a": ["Mong con trở thành người nông dân giỏi", "Mong con lớn lên khỏe mạnh cường tráng để giúp ích cho đất nước", "Mong con sửa lại cái sân nhà", "Mong con đi bộ đội ngay lập tức"], "c": 1 },
                        { "q": "Ở khổ thơ thứ hai, người mẹ làm công việc gì và ở đâu?", "a": ["Giã gạo bên suối", "Hái rau trong rừng", "Làm rẫy trên nương", "Tỉa bắp trên núi Ka-lưi"], "c": 3 },
                        { "q": "Hình ảnh đối lập nào được sử dụng để làm nổi bật sự nhỏ bé nhưng kiên cường của người mẹ?", "a": ["Mặt trời to - mặt trời nhỏ", "Lưng núi thì to mà lưng mẹ nhỏ", "Núi cao - suối sâu", "Rừng xanh - tóc mẹ bạc"], "c": 1 },
                        { "q": "Trong câu \"Mặt trời của bắp thì nằm trên đồi\", hình ảnh \"mặt trời\" được hiểu theo nghĩa nào?", "a": ["Mặt trời của thiên nhiên, mang ánh sáng và sự sống cho cây bắp", "Một loại bắp có màu đỏ", "Ngọn đèn trên đồi", "Người nông dân trồng bắp"], "c": 0 },
                        { "q": "Trong câu \"Mặt trời của mẹ, em nằm trên lưng\", tác giả sử dụng biện pháp nghệ thuật gì?", "a": ["So sánh", "Ẩn dụ", "Nhân hóa", "Hoán dụ"], "c": 1 },
                        { "q": "Vì sao tác giả gọi em bé là \"Mặt trời của mẹ\"?", "a": ["Vì em bé có khuôn mặt tròn trịa", "Vì em bé mặc áo màu đỏ", "Vì con là niềm tin, là nguồn sống và là động lực lao động của mẹ", "Vì em bé thức dậy sớm cùng mặt trời"], "c": 2 },
                        { "q": "Những công việc của mẹ như giã gạo, tỉa bắp có ý nghĩa gì đối với cuộc kháng chiến?", "a": ["Giúp mẹ quên đi nỗi buồn chiến tranh", "Góp phần nuôi quân, phục vụ kháng chiến giành độc lập dân tộc", "Để mẹ có sức khỏe tốt hơn", "Để dạy con cách lao động từ nhỏ"], "c": 1 },
                        { "q": "Chủ đề chính của bài thơ là gì?", "a": ["Ca ngợi vẻ đẹp của thiên nhiên miền núi", "Miêu tả quy trình trồng bắp và giã gạo", "Ca ngợi tình yêu con tha thiết gắn liền với tình yêu quê hương đất nước", "Kể về tuổi thơ gian khổ của em bé Cu Tai"], "c": 2 }
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
                            "content": `<div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl mb-8">
                            <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                <p class="text-xl italic mb-6 text-center text-gray-600 font-bold">Trần Đăng Khoa</p>
                                <div class="poem-container py-8 px-6 md:px-10 bg-blue-50/30 rounded-[40px] border border-blue-100/50 shadow-inner max-w-3xl mx-auto">
                                    <div class="poem-stanza mb-6">
                                        <p class="indent-0">Hạt gạo làng ta</p>
                                        <p class="indent-0">Có vị phù sa</p>
                                        <p class="indent-0">Của sông Kinh Thầy</p>
                                        <p class="indent-0">Có hương sen thơm</p>
                                        <p class="indent-0">Trong hồ nước đầy</p>
                                        <p class="indent-0">Có lời mẹ hát</p>
                                        <p class="indent-0">Ngọt bùi đắng cay...</p>
                                    </div>
                                    <div class="poem-stanza mb-6">
                                        <p class="indent-0">Hạt gạo làng ta</p>
                                        <p class="indent-0">Có bão tháng Bảy</p>
                                        <p class="indent-0">Có mưa tháng Ba</p>
                                        <p class="indent-0">Giọt mồ hôi sa</p>
                                        <p class="indent-0">Những trưa tháng Sáu</p>
                                        <p class="indent-0">Nước như ai nấu</p>
                                        <p class="indent-0">Chết cả cá cờ</p>
                                        <p class="indent-0">Cua ngoi lên bờ</p>
                                        <p class="indent-0">Mẹ em xuống cấy...</p>
                                    </div>
                                    <div class="poem-stanza mb-6">
                                        <p class="indent-0">Hạt gạo làng ta</p>
                                        <p class="indent-0">Những năm bom Mỹ</p>
                                        <p class="indent-0">Trút trên mái nhà</p>
                                        <p class="indent-0">Những năm băng đạn</p>
                                        <p class="indent-0">Bát cơm mùa gặt</p>
                                        <p class="indent-0">Thơm hào giao thông...</p>
                                    </div>
                                    <div class="poem-stanza mb-6">
                                        <p class="indent-0">Hạt gạo làng ta</p>
                                        <p class="indent-0">Có công các bạn</p>
                                        <p class="indent-0">Sớm nào chống hạn</p>
                                        <p class="indent-0">Vục mẻ miệng gàu</p>
                                        <p class="indent-0">Trưa nào bắt sâu</p>
                                        <p class="indent-0">Lúa cao rát mặt</p>
                                        <p class="indent-0">Chiều nào gánh phân</p>
                                        <p class="indent-0">Quang trành quét đất...</p>
                                    </div>
                                    <div class="poem-stanza">
                                        <p class="indent-0">Hạt gạo làng ta</p>
                                        <p class="indent-0">Gửi ra tiền tuyến</p>
                                        <p class="indent-0">Gửi về phương xa</p>
                                        <p class="indent-0">Em vui em hát</p>
                                        <p class="indent-0">Hạt vàng làng ta.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="glass-card rounded-[24px] p-6 shadow-xl border-amber-100/50 mb-8">
                             <h2 class="text-2xl font-black text-gray-800 mb-6 flex items-center">
                                <span class="bg-amber-100 p-2 rounded-lg mr-3">💡</span> Tìm hiểu bài
                             </h2>
                             <div class="space-y-4">
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>1. Trong khổ thơ đầu, hạt gạo được kết tinh từ những gì?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Hạt gạo được kết tinh từ vị phù sa của sông Kinh Thầy, hương sen thơm và lời mẹ hát ngọt bùi đắng cay.</div>
                                </details>
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>2. Những khó khăn của thiên nhiên được nhắc đến trong khổ thơ thứ hai?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Bão tháng Bảy, mưa tháng Ba, nắng nóng khắc nghiệt làm chết cá cờ, cua ngoi lên bờ mà mẹ vẫn phải xuống cấy.</div>
                                </details>
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>3. Các bạn nhỏ đã góp công gì để làm ra hạt gạo?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Các bạn nhỏ chống hạn, tát nước vục mẻ miệng gàu, bắt sâu, gánh phân với quang trành quét đất.</div>
                                </details>
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>4. Vì sao tác giả gọi hạt gạo là "hạt vàng"?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Vì hạt gạo rất quý giá, được làm nên từ mồ hôi công sức của bao người, từ sự vất vả, hy sinh của người nông dân và các bạn nhỏ.</div>
                                </details>
                             </div>
                        </div>
                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl">
                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                </div>
                                <div class="flex-grow">
                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                        Bài thơ ca ngợi sự cần cù, vất vả của người nông dân và các bạn nhỏ trong việc làm ra hạt gạo, nhắc nhở mọi người biết quý trọng hạt gạo và lòng biết ơn người lao động.
                                    </p>
                                </div>
                            </div>
                        </div>`
                        }
                    ]
                },
                "quiz": {
                    "setting": { "pick": 5 },
                    "questions": [
                        { "q": "Bài thơ \"Hạt gạo làng ta\" do nhà thơ nào sáng tác?", "a": ["Tố Hữu", "Trần Đăng Khoa", "Phạm Tiến Duật", "Nguyễn Duy"], "c": 1 },
                        { "q": "Dòng sông nào đã mang nặng phù sa bồi đắp cho hạt gạo làng ta?", "a": ["Sông Hồng", "Sông Đuống", "Sông Cửu Long", "Sông Kinh Thầy"], "c": 3 },
                        { "q": "Ngoài vị phù sa và hương sen thơm, trong khổ thơ đầu, hạt gạo còn chứa đựng điều gì sâu sắc từ người mẹ?", "a": ["Lời ru buồn", "Lời mẹ hát ngọt bùi đắng cay", "Những câu chuyện cổ tích", "Tiếng cười vui vẻ"], "c": 1 },
                        { "q": "Những khó khăn của thiên nhiên mà hạt gạo và người nông dân phải trải qua được nhắc đến trong khổ thơ thứ hai là gì?", "a": ["Bão tháng Bảy, mưa tháng Ba", "Lũ lụt miền Trung", "Hạn hán kéo dài quanh năm", "Gió rét mùa đông"], "c": 0 },
                        { "q": "Hình ảnh \"Nước như ai nấu / Chết cả cá cờ\" gợi tả điều gì?", "a": ["Nước sông bị ô nhiễm", "Người dân đang nấu nước sôi", "Cái nắng nóng khắc nghiệt của trưa tháng Sáu", "Cuộc sống ấm no, sung túc"], "c": 2 },
                        { "q": "Trước cái nắng nóng làm \"cua ngoi lên bờ\", hình ảnh người mẹ hiện lên như thế nào?", "a": ["Mẹ nghỉ ngơi dưới bóng cây", "Mẹ em xuống cấy", "Mẹ về nhà tránh nắng", "Mẹ ngồi quạt mát cho con"], "c": 1 },
                        { "q": "Khổ thơ thứ ba nhắc đến bối cảnh lịch sử nào của đất nước?", "a": ["Thời kỳ xây dựng chủ nghĩa xã hội", "Những năm kháng chiến chống Pháp", "Những năm bom Mỹ trút trên mái nhà", "Thời kỳ bao cấp"], "c": 2 },
                        { "q": "Trong những năm tháng chiến tranh, hạt gạo đã theo người đi xa như thế nào?", "a": ["Trong những năm băng đạn, bát cơm mùa gặt thơm hào giao thông", "Được chở bằng xe tải lớn ra chiến trường", "Được cất giấu kỹ trong kho", "Chỉ dùng để nuôi quân ở hậu phương"], "c": 0 },
                        { "q": "Các bạn nhỏ trong bài thơ đã góp công sức làm ra hạt gạo bằng những việc làm nào?", "a": ["Đi học và trông em", "Nấu cơm giúp mẹ", "Chống hạn, vục mẻ miệng gàu, bắt sâu, gánh phân", "Chăn trâu và cắt cỏ"], "c": 2 },
                        { "q": "Câu thơ \"Quang trành quết đất\" nói lên điều gì về sự đóng góp của các bạn nhỏ?", "a": ["Các bạn nhỏ rất ham chơi", "Sự vất vả, nỗ lực lao động của các bạn nhỏ dù tuổi còn nhỏ", "Các bạn nhỏ làm hỏng dụng cụ lao động", "Đất ngoài đồng rất dính"], "c": 1 },
                        { "q": "Hạt gạo làm ra được gửi đi đâu?", "a": ["Chỉ để ăn trong gia đình", "Xuất khẩu ra nước ngoài", "Gửi ra tiền tuyến, gửi về phương xa", "Đem ra chợ bán"], "c": 2 },
                        { "q": "Vì sao tác giả gọi hạt gạo là \"hạt vàng\"?", "a": ["Vì hạt gạo có màu vàng óng", "Vì hạt gạo bán được rất nhiều tiền", "Vì hạt gạo rất quý giá, được làm nên từ mồ hôi công sức của bao người", "Vì lúa chín trên đồng trông như vàng"], "c": 2 },
                        { "q": "Bài thơ ca ngợi phẩm chất tốt đẹp nào của người nông dân?", "a": ["Cần cù, chịu khó, không ngại gian khổ và yêu lao động", "Thông minh, sáng tạo trong sản xuất", "Vui vẻ, lạc quan yêu đời", "Dũng cảm trong chiến đấu"], "c": 0 },
                        { "q": "Hình ảnh nào dưới đây thể hiện sự kết tinh của đất trời trong hạt gạo?", "a": ["Giọt mồ hôi sa", "Vị phù sa, hương sen thơm", "Mẻ miệng gàu", "Hào giao thông"], "c": 1 },
                        { "q": "Qua bài thơ, tác giả muốn nhắc nhở chúng ta điều gì?", "a": ["Phải biết tiết kiệm nước", "Phải chăm chỉ học tập", "Phải biết quý trọng hạt gạo và công sức của những người lao động", "Phải yêu thiên nhiên, đất nước"], "c": 2 }
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
                            "content": `<div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl mb-8">
                            <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content space-y-4">
                                    <img src="hinh_anh/hop-qua-mau-thien-thanh.png" class="w-full md:w-2/5 float-none md:float-right ml-0 md:ml-6 mb-4 rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-500" alt="Hộp quà màu thiên thanh">
                                    <p class="indent-8">Tân vừa nấu cơm xong thì Quang và Huệ tới. Quang nói:</p>
                                    <p class="indent-8">– Ngày mai tổng kết năm học, mỗi bạn sẽ viết một lá thư như một món quà đặc biệt để tặng cô chủ nhiệm.</p>
                                    <p class="indent-8">Huệ cười:</p>
                                    <p class="indent-8">– Cậu nhớ viết nhé!</p>
                                    <p class="indent-8">Nói rồi, hai đứa phóng xe đi.</p>
                                    <p class="indent-8">Buổi tối, Tân ngồi vào bàn học chuẩn bị viết thư. Tân nhớ về kỉ niệm một lần đi học muộn vì mải bẻ ngô giúp mẹ. Khi cô hỏi lí do, Tân còn đang ấp úng thì Huệ nhanh nhảu:</p>
                                    <p class="indent-8">– Thưa cô, chắc Tân lại giúp mẹ làm vườn.</p>
                                    <p class="indent-8">Tân thấy mặt nóng ran. Cô nhìn Tân trìu mến:</p>
                                    <p class="indent-8">– Tân như thế là biết thương mẹ. Nhưng nếu em vừa biết giúp mẹ vừa đi học đúng giờ thì còn biết thương mẹ nhiều hơn!</p>
                                    <p class="indent-8">Tân thầm hứa sẽ không đi học muộn nữa...</p>
                                    <p class="indent-8">Cảm xúc dâng trào, Tân bèn cầm bút viết. Tân kể lại buổi đi học muộn hôm ấy và cả những cố gắng của Tân trong học tập: dậy sớm hơn để học bài, tranh thủ các buổi chiều nghỉ học, Tân giúp mẹ việc nhà,... Cuối năm, Tân được cô giáo khen vì có nhiều tiến bộ. Giờ sắp phải xa cô, xa trường lớp, Tân sẽ rất nhớ cô...</p>
                                    <p class="indent-8">Hôm sau, Tân đến lớp sớm. Huệ đang đón những lá thư của các bạn xếp vào chiếc hộp màu thiên thanh.</p>
                                    <p class="indent-8">– Cậu viết gì gửi cô đấy? – Quang vừa đi vào vừa hỏi.</p>
                                    <p class="indent-8">Tân mỉm cười:</p>
                                    <p class="indent-8">– Thư gửi cô, tớ phải giữ bí mật chứ!</p>
                                    <p class="indent-8">Nói xong, Tân đặt lá thư của mình vào chiếc hộp.</p>
                                    <p class="indent-8">Cô giáo mặc áo dài màu thiên thanh bước vào lớp trong tiếng vỗ tay giòn giã. Quang thay mặt lớp cảm ơn cô đã dạy dỗ. Đôi má cô ửng hồng khi nhận hộp quà với lời nhắn của Quang: "Chúng em gửi cô hết ở trong này, cô về đọc nhé!".</p>
                                    <p class="indent-8">Ba mươi lăm lá thư tạo thành một hộp quà đặc biệt tặng cô được giữ bí mật tuyệt đối. Chỉ cô giáo mới biết từng học trò đã viết gì trong những lá thư ấy.</p>
                                    <p class="text-right italic font-bold text-gray-600 mt-6">(Nguyễn Thu Hằng)</p>
                                </div>
                            </div>
                        </div>
                        <div class="glass-card rounded-[24px] p-6 shadow-xl border-amber-100/50 mb-8">
                             <h2 class="text-2xl font-black text-gray-800 mb-6 flex items-center">
                                <span class="bg-amber-100 p-2 rounded-lg mr-3">💡</span> Tìm hiểu bài
                             </h2>
                             <div class="space-y-4">
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>1. Dự định của lớp Tân là gì?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Trong buổi tổng kết năm học, lớp Tân có dự định tặng cô giáo một món quà bất ngờ bằng cách mỗi bạn viết một lá thư như một món quà đặc biệt để tặng cô chủ nhiệm.</div>
                                </details>
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>2. Tân đã nhớ lại kỉ niệm gì?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Tân nhớ về kỉ niệm một lần đi học muộn vì mải bẻ ngô giúp mẹ. Khi ấy, cô giáo đã không trách mắng mà còn ân cần khuyên bảo, khiến Tân rất xúc động và hứa sẽ sửa đổi.</div>
                                </details>
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>3. Vì sao Tân có nhiều tiến bộ trong học tập?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">
                                        <ul class="list-disc ml-4 space-y-1">
                                            <li>Tân thương mẹ, muốn gánh vác việc nhà.</li>
                                            <li>Tân có ý thức sửa chữa khuyết điểm sau lời khuyên của cô.</li>
                                            <li>Cô giáo rất yêu thương và biết cách động viên học trò.</li>
                                        </ul>
                                    </div>
                                </details>
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>4. Tình cảm cô trò trong buổi tổng kết?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Các chi tiết như: tiếng vỗ tay giòn giã, lời cảm ơn chân thành của Quang, đôi má cô ửng hồng xúc động khi nhận hộp quà... cho thấy sự gắn bó, yêu thương và trân trọng sâu sắc giữa cô giáo và học trò.</div>
                                </details>
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>5. Ý nghĩa "Hộp quà màu thiên thanh"?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Hộp quà thể hiện tình yêu thương, lòng biết ơn của học sinh đối với cô giáo. Màu thiên thanh (xanh da trời) tượng trưng cho những kỉ niệm đẹp đẽ, trong sáng của tuổi học trò.</div>
                                </details>
                             </div>
                        </div>
                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl">
                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                    <h3 class="text-2xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                </div>
                                <div class="flex-grow">
                                    <p class="text-lg font-bold leading-relaxed text-blue-50">
                                        Tình cảm thầy trò là tình cảm đẹp đẽ, vô cùng đáng quý. Câu chuyện nhắc nhở chúng ta cần biết trân trọng, giữ gìn và bồi đắp cho tình cảm thầy trò ngày càng tốt đẹp hơn.
                                    </p>
                                </div>
                            </div>
                        </div>`
                        }
                    ]
                },
                "quiz": {
                    "setting": { "pick": 5 },
                    "questions": [
                        { "q": "Các bạn lớp Tân có dự định gì đặc biệt cho buổi tổng kết năm học?", "a": ["Cùng nhau mua một bó hoa thật lớn tặng cô chủ nhiệm.", "Mỗi bạn viết một lá thư như một món quà đặc biệt tặng cô.", "Tổ chức một buổi liên hoan chia tay tại lớp.", "Vẽ một bức tranh tập thể về kỉ niệm trường lớp."], "c": 1 },
                        { "q": "Ai là người đã thông báo cho Tân về ý tưởng món quà tặng cô giáo?", "a": ["Cô chủ nhiệm.", "Bạn Quang và bạn Huệ.", "Cả lớp trong giờ sinh hoạt.", "Mẹ của Tân."], "c": 1 },
                        { "q": "Khi ngồi viết thư, Tân đã nhớ lại kỉ niệm buồn hay vui nào?", "a": ["Một lần được cô giáo khen vì đạt điểm cao.", "Một lần cùng các bạn đi cắm trại hè.", "Một lần đi học muộn vì mải bẻ ngô giúp mẹ.", "Một lần làm hỏng dụng cụ học tập của bạn."], "c": 2 },
                        { "q": "Khi cô giáo hỏi lí do đi học muộn, bạn Huệ đã làm gì để giúp Tân?", "a": ["Huệ giữ im lặng để Tân tự trả lời.", "Huệ nhanh nhảu đoán giúp: \"Chắc Tân lại giúp mẹ làm vườn\".", "Huệ xin lỗi cô thay cho Tân.", "Huệ giải thích rằng xe của Tân bị hỏng."], "c": 1 },
                        { "q": "Thái độ của cô giáo như thế nào khi nghe về lí do Tân đi học muộn?", "a": ["Cô nghiêm khắc nhắc nhở Tân trước lớp.", "Cô không nói gì và yêu cầu Tân vào chỗ.", "Cô nhìn Tân trìu mến và khen Tân biết thương mẹ.", "Cô yêu cầu Tân phải viết bản kiểm điểm."], "c": 2 },
                        { "q": "Lời khuyên nào của cô giáo đã khiến Tân thay đổi và tiến bộ hơn?", "a": ["Đi học đúng giờ quan trọng hơn việc giúp đỡ gia đình.", "Vừa biết giúp mẹ vừa đi học đúng giờ thì còn biết thương mẹ nhiều hơn.", "Em nên ưu tiên việc học tập lên hàng đầu.", "Hãy cố gắng thức dậy sớm để chuẩn bị bài thật tốt."], "c": 1 },
                        { "q": "Để không đi học muộn nữa, Tân đã thực hiện những thay đổi gì?", "a": ["Dậy sớm hơn để học bài.", "Tranh thủ các buổi chiều nghỉ để giúp mẹ việc nhà.", "Luôn cố gắng để có nhiều tiến bộ trong học tập.", "Tất cả các ý trên đều đúng."], "c": 3 },
                        { "q": "Tại sao Tân lại giữ bí mật nội dung lá thư khi Quang hỏi?", "a": ["Vì Tân sợ các bạn cười chê kỉ niệm đi học muộn.", "Vì Tân chưa viết xong lá thư của mình.", "Vì đó là tình cảm riêng tư, bí mật gửi cho cô giáo.", "Vì cô giáo yêu cầu không được cho ai xem thư."], "c": 2 },
                        { "q": "Chi tiết nào miêu tả sự xuất hiện của cô giáo trong buổi tổng kết?", "a": ["Cô mặc bộ áo dài màu trắng tinh khôi.", "Cô mặc áo dài màu thiên thanh bước vào lớp trong tiếng vỗ tay.", "Cô bước vào lớp với một nụ cười thật tươi và giỏ hoa trên tay.", "Cô xúc động đứng nhìn học trò từ cửa lớp."], "c": 1 },
                        { "q": "Hộp quà tặng cô giáo có bao nhiêu lá thư?", "a": ["33 lá thư.", "34 lá thư.", "35 lá thư.", "30 lá thư."], "c": 2 },
                        { "q": "Phản ứng của cô giáo khi nhận được hộp quà từ bạn Quang là gì?", "a": ["Cô cười thật lớn và mở quà ngay tại lớp.", "Đôi má cô ửng hồng vì xúc động khi nhận hộp quà.", "Cô đọc to một lá thư cho cả lớp cùng nghe.", "Cô hứa sẽ giữ hộp quà này mãi mãi bên mình."], "c": 1 },
                        { "q": "Tại sao câu chuyện lại có tên là \"Hộp quà màu thiên thanh\"?", "a": ["Vì đó là màu sắc yêu thích nhất của tất cả học sinh.", "Vì chiếc hộp và áo dài của cô giáo đều có màu xanh thiên thanh.", "Vì màu thiên thanh tượng trưng cho sự thuần khiết và tình cảm trong sáng.", "Cả B và C đều đúng."], "c": 3 },
                        { "q": "Qua bức thư của Tân, em thấy cô giáo là người như thế nào?", "a": ["Rất nghiêm khắc và cứng nhắc trong kỉ luật.", "Chỉ quan tâm đến kết quả học tập của học sinh.", "Yêu thương, thấu hiểu và biết cách động viên học trò.", "Luôn bao che cho những lỗi lầm của học sinh."], "c": 2 },
                        { "q": "Ý nghĩa sâu sắc nhất của hình ảnh \"Hộp quà màu thiên thanh\" là gì?", "a": ["Thể hiện lòng biết ơn, sự gắn bó và tình cảm chân thành giữa thầy và trò.", "Nhấn mạnh việc học sinh cần phải viết thư thật hay.", "Khuyên học sinh nên chọn những chiếc hộp màu xanh để tặng quà.", "Ca ngợi sự trưởng thành về ngoại hình của các bạn học sinh."], "c": 0 },
                        { "q": "Nhan đề nào dưới đây có thể thay thế cho câu chuyện này?", "a": ["Kỉ niệm đi học muộn.", "Món quà từ trái tim.", "Chiếc hộp màu xanh.", "Lá thư của Tân."], "c": 1 }
                    ]
                }
            }
        },
        "211-ltvc": {
            "title": "Giỏ hoa tháng Năm",
            "week": 21,
            "subject": "Luyện từ và câu",
            "theme": "Vẻ đẹp cuộc sống",
            "audio": "am_thanh/lesson.mp3",
            "tabs": {
                "lesson": {
                    "title": "Bài học và Luyện tập",
                    "blocks": [
                        {
                            "type": "header",
                            "text": "Giỏ hoa tháng Năm"
                        },
                        {
                            "type": "html",
                            "content": "<h2 class='text-2xl font-bold text-center text-blue-500 mb-8'>Cách nối các vế câu ghép (Tiếp theo)</h2>"
                        },
                        {
                            "type": "theory",
                            "title": "Ghi nhớ",
                            "icon": "memo",
                            "content": "<p>Các vế của câu ghép có thể nối với nhau bằng các cặp từ:</p><ul class='list-none space-y-3 pl-4'><li class='flex items-start'><span class='mr-2'>–</span><span>Các cặp kết từ: <em>vì ... nên ..., bởi ... nên ..., nhờ ... nên (mà) ..., nếu ... thì ..., hễ ... thì ..., giá ... thì ..., tuy ... nhưng ..., mặc dù ... nhưng ..., dù ... nhưng ..., chẳng những ... mà ..., không chỉ ... mà ...,...</em></span></li><li class='flex items-start'><span class='mr-2'>–</span><span>Các cặp từ hô ứng: <em>vừa ... đã ..., chưa ... đã ..., càng ... càng ..., đâu ... đó ..., bao nhiêu ... bấy nhiêu ...,...</em></span></li></ul>"
                        },
                        {
                            "type": "exercise_click_word",
                            "title": "Bài 1",
                            "subtitle": "Tìm cặp kết từ (Quan hệ từ)",
                            "instruction": "Em hãy bấm chọn vào các từ nối trong câu.",
                            "color": "blue",
                            "data": [
                                {
                                    "id": "q1a",
                                    "text": "<span>a.</span> <span class='word'>Bởi</span> <span class='word'>tôi</span> <span class='word'>ăn</span> <span class='word'>uống</span> <span class='word'>điều</span> <span class='word'>độ</span> <span class='word'>và</span> <span class='word'>làm</span> <span class='word'>việc</span> <span class='word'>có</span> <span class='word'>chừng</span> <span class='word'>mực</span> <span class='word'>nên</span> <span class='word'>tôi</span> <span class='word'>chóng</span> <span class='word'>lớn</span> <span class='word'>lắm.</span>",
                                    "targets": [
                                        "Bởi",
                                        "nên"
                                    ]
                                },
                                {
                                    "id": "q1b",
                                    "text": "<span>b.</span> <span class='word'>Mặc dù</span> <span class='word'>chúng</span> <span class='word'>tôi</span> <span class='word'>vẫn</span> <span class='word'>chơi</span> <span class='word'>với</span> <span class='word'>nhau</span> <span class='word'>nhưng</span> <span class='word'>thời</span> <span class='word'>gian</span> <span class='word'>Pam</span> <span class='word'>dành</span> <span class='word'>cho</span> <span class='word'>tôi</span> <span class='word'>không</span> <span class='word'>còn</span> <span class='word'>nhiều.</span>",
                                    "targets": [
                                        "Mặc dù",
                                        "nhưng"
                                    ]
                                },
                                {
                                    "id": "q1c",
                                    "text": "<span>c.</span> <span class='word'>Nếu</span> <span class='word'>hoa</span> <span class='word'>mua</span> <span class='word'>có</span> <span class='word'>màu</span> <span class='word'>tím</span> <span class='word'>hồng</span> <span class='word'>thì</span> <span class='word'>hoa</span> <span class='word'>sim</span> <span class='word'>tím</span> <span class='word'>nhạt,</span> <span class='word'>phơn</span> <span class='word'>phớt</span> <span class='word'>như</span> <span class='word'>má</span> <span class='word'>con</span> <span class='word'>gái.</span>",
                                    "targets": [
                                        "Nếu",
                                        "thì"
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "exercise_fill_blank",
                            "title": "Bài 2",
                            "subtitle": "Điền từ hô ứng",
                            "color": "orange",
                            "data": [
                                {
                                    "id": "q2a",
                                    "text": "a. Ngày <span class='slot mx-1'>...</span> tắt hẳn, trăng <span class='slot mx-1'>...</span> lên rồi.",
                                    "options": [
                                        {
                                            "value": "đâu-đó",
                                            "label": "đâu... đó"
                                        },
                                        {
                                            "value": "chưa-đã",
                                            "label": "chưa... đã"
                                        },
                                        {
                                            "value": "bao nhiêu-bấy nhiêu",
                                            "label": "bao nhiêu... bấy nhiêu"
                                        }
                                    ],
                                    "correct": "chưa-đã"
                                },
                                {
                                    "id": "q2b",
                                    "text": "b. Trăng đi đến <span class='slot mx-1'>...</span>, lũy tre được tắm đẫm màu sữa đến <span class='slot mx-1'>...</span>.",
                                    "options": [
                                        {
                                            "value": "đâu-đó",
                                            "label": "đâu... đó"
                                        },
                                        {
                                            "value": "chưa-đã",
                                            "label": "chưa... đã"
                                        },
                                        {
                                            "value": "bao nhiêu-bấy nhiêu",
                                            "label": "bao nhiêu... bấy nhiêu"
                                        }
                                    ],
                                    "correct": "đâu-đó"
                                },
                                {
                                    "id": "q2c",
                                    "text": "c. Nước dâng lên cao <span class='slot mx-1'>...</span>, Sơn Tinh lại làm cho đồi, núi mọc cao lên <span class='slot mx-1'>...</span>.",
                                    "options": [
                                        {
                                            "value": "đâu-đó",
                                            "label": "đâu... đó"
                                        },
                                        {
                                            "value": "chưa-đã",
                                            "label": "chưa... đã"
                                        },
                                        {
                                            "value": "bao nhiêu-bấy nhiêu",
                                            "label": "bao nhiêu... bấy nhiêu"
                                        }
                                    ],
                                    "correct": "bao nhiêu-bấy nhiêu"
                                }
                            ]
                        },
                        {
                            "type": "exercise_ai",
                            "title": "Bài 3",
                            "subtitle": "Viết tiếp vế câu",
                            "color": "purple",
                            "data": [
                                {
                                    "id": "3a",
                                    "text": "a. Vào dịp lễ Mừng xuân, chẳng những trẻ em được vui đùa thoả thích mà...",
                                    "placeholder": "Viết tiếp...",
                                    "context": "Vào dịp lễ Mừng xuân, chẳng những trẻ em được vui đùa thoả thích mà"
                                },
                                {
                                    "id": "3b",
                                    "text": "b. Mặc dù thiên nhiên khắc nghiệt nhưng...",
                                    "placeholder": "Viết tiếp...",
                                    "context": "Mặc dù thiên nhiên khắc nghiệt nhưng"
                                },
                                {
                                    "id": "3c",
                                    "text": "c. Nhờ bố kể những câu chuyện cổ tích mà...",
                                    "placeholder": "Viết tiếp...",
                                    "context": "Nhờ bố kể những câu chuyện cổ tích mà"
                                }
                            ]
                        },
                        {
                            "type": "exercise_ai",
                            "title": "Bài 4",
                            "subtitle": "Đặt câu ghép",
                            "color": "green",
                            "data": [
                                {
                                    "id": "4a",
                                    "text": "a. Sử dụng cặp kết từ: <b>Vì... nên...</b> (hoặc Bởi... nên..., Nhờ... mà...)",
                                    "placeholder": "Đặt câu...",
                                    "context": "Đặt câu ghép với cặp từ Vì... nên..."
                                },
                                {
                                    "id": "4b",
                                    "text": "b. Sử dụng cặp kết từ: <b>Nếu... thì...</b> (hoặc Hễ... thì..., Giá... thì...)",
                                    "placeholder": "Đặt câu...",
                                    "context": "Đặt câu ghép với cặp từ Nếu... thì..."
                                },
                                {
                                    "id": "4c",
                                    "text": "c. Sử dụng cặp từ hô ứng: <b>vừa... đã...</b>, <b>càng... càng...</b>",
                                    "placeholder": "Đặt câu...",
                                    "context": "Đặt câu ghép với cặp từ hô ứng"
                                }
                            ]
                        }
                    ]
                },
                "quiz": {
                    "title": "Trắc nghiệm",
                    "questions": [
                        {
                            "q": "Câu hỏi mẫu số 1?",
                            "a": [
                                "Đáp án A",
                                "Đáp án B",
                                "Đáp án C",
                                "Đáp án D"
                            ],
                            "c": 0
                        }
                    ]
                }
            }
        },
        "211-gio-hoa-thang-nam": {
            "title": "Giỏ hoa tháng Năm",
            "week": 21,
            "subject": "Tập đọc",
            "theme": "Vẻ đẹp cuộc sống",
            "audio": "am_thanh/giohoathangnam.mp3",
            "tabs": {
                "lesson": {
                    "blocks": [
                        { "type": "header", "text": "Giỏ hoa tháng Năm" },
                        {
                            "type": "html",
                            "content": `<div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl mb-8">
                            <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content space-y-4">
                                    <img src="hinh_anh/giohoathangnam.png" class="w-full md:w-2/5 float-none md:float-right ml-0 md:ml-6 mb-4 rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-500" alt="Giỏ hoa tháng Năm">
                                    <p class="indent-8">Với bọn trẻ chúng tôi, ngày lễ Mừng xuân vào tháng Năm luôn đáng mong chờ, bởi đó là dịp chúng tôi được vui đùa thoả thích. Chúng tôi thường bí mật làm những giỏ hoa rực rỡ, đặt lên bậc thềm nhà người quen hoặc bạn bè, gõ cửa rồi ba chân bốn cẳng chạy trốn thật nhanh. Từ xa, chúng tôi hồi hộp theo dõi chủ nhà mở cửa, cầm món quà lên với vẻ ngạc nhiên, thích thú.</p>
                                    <p class="indent-8">Tôi còn nhớ lễ Mừng xuân năm tôi học lớp Năm. Lúc đó, tôi đang giận Pam, cô bạn thân nhất của mình. Từ nhỏ Pam và tôi đã thân nhau như hình với bóng. Gần đây, một gia đình mới dọn đến thị trấn của chúng tôi và Pam đã kết thân với con gái của họ. Mặc dù chúng tôi vẫn chơi với nhau, nhưng thời gian Pam dành cho tôi không còn nhiều như trước. Tôi cảm thấy như bị bỏ rơi. Giận Pam, tôi không chơi với bạn mấy ngày. Khi mẹ hỏi tôi có mang hoa cho Pam không, tôi trả lời: "Không bao giờ, mẹ ạ!". Mẹ dừng tay làm bếp, ôm tôi và an ủi. Cơn tủi thân bỗng dâng lên và tôi oà khóc nức nở. Mẹ dịu dàng vuốt tóc và lau nước mắt cho tôi. Mẹ bảo càng lớn, chúng tôi sẽ càng có nhiều bạn. Những người bạn không thể chỉ chơi với một mình tôi. Và ngay cả tôi cũng không thể chỉ chơi với một người bạn.</p>
                                    <p class="indent-8">Cuối cùng, tôi cũng quyết định tặng Pam một giỏ hoa. Tôi chọn thật nhiều hoa màu vàng mà Pam yêu thích, rồi nhờ chị tôi đem đến nhà bạn. Từ chỗ nấp, tôi thấy Pam nâng giỏ hoa lên, dịu dàng áp mặt vào những bông hoa và nói to như để tôi nghe được: "Cảm ơn Xu-di, hi vọng cậu không còn giận mình!".</p>
                                    <p class="indent-8">Lần ấy tôi học được rằng là bạn bè đích thực, ta sẽ đặt bạn trong tim nhưng không buộc họ luôn ở bên mình.</p>
                                    <p class="text-right italic font-bold text-gray-600 mt-6">(Theo Minh Hương)</p>
                                </div>
                            </div>
                        </div>
                        <div class="glass-card rounded-[24px] p-6 shadow-xl border-amber-100/50 mb-8">
                             <h2 class="text-2xl font-black text-gray-800 mb-6 flex items-center">
                                <span class="bg-amber-100 p-2 rounded-lg mr-3">💡</span> Tìm hiểu bài
                             </h2>
                             <div class="space-y-4">
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>1. Ngày lễ nào trong năm được các bạn nhỏ mong chờ?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Ngày lễ được các bạn nhỏ mong chờ là ngày lễ mừng xuân vào tháng năm.</div>
                                </details>
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>2. Bạn thân của Xu-di là ai? Vì sao Xu-di giận bạn?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Bạn thân của Xu-di là Pam. Xu-di giận vì Pam có bạn mới và dành ít thời gian cho Xu-di hơn.</div>
                                </details>
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>3. Xu-di đã làm gì để làm lành với bạn?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Xu-di tặng Pam một giỏ hoa màu vàng mà Pam yêu thích.</div>
                                </details>
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>4. Người bạn của Xu-di đón nhận giỏ hoa như thế nào?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Pam nâng giỏ hoa lên, dịu dàng áp mặt vào những bông hoa và cảm ơn Xu-di.</div>
                                </details>
                                <details class="group bg-white/50 rounded-2xl border border-white shadow-sm">
                                    <summary class="flex justify-between items-center font-bold p-4 cursor-pointer list-none text-gray-700 hover:text-blue-600">
                                        <span>5. Đoạn kết của câu chuyện muốn nói điều gì?</span>
                                        <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                    </summary>
                                    <div class="text-gray-600 p-4 pt-0 group-open:animate-fadeIn">Đã là bạn bè đích thực luôn có sự gắn bó thân thiết, trân trọng nhau dù không ở cạnh nhau thường xuyên.</div>
                                </details>
                             </div>
                        </div>`
                        },
                        {
                            "type": "html",
                            "content": `<div class="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
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
                        </div>`
                        }
                    ]
                },
                "quiz": {
                    "settings": {
                        "pick": 5
                    },
                    "questions": [
                        { "q": "Ngày lễ Mừng xuân vào tháng Năm các bạn nhỏ thường làm gì?", "a": ["Làm những giỏ hoa rực rỡ mang tặng người thân, bạn bè", "Đi du xuân cùng bố mẹ", "Tổ chức cắm trại ở trường", "Đi mua sắm quần áo mới"], "c": 0 },
                        { "q": "Các bạn nhỏ tặng hoa cho người thân, bạn bè bằng cách nào?", "a": ["Gửi qua bưu điện", "Đưa tận tay chủ nhà", "Đặt lên bậc thềm, gõ cửa rồi ba chân bốn cẳng chạy trốn", "Nhờ bố mẹ mang đến tặng"], "c": 2 },
                        { "q": "Tại sao Xu-di lại giận Pam?", "a": ["Vì Pam không tặng hoa cho Xu-di", "Vì Pam có thêm bạn mới và không dành nhiều thời gian cho Xu-di", "Vì Pam làm hỏng đồ chơi của Xu-di", "Vì Pam chuyển nhà đi nơi khác"], "c": 1 },
                        { "q": "Khi thấy Xu-di buồn vì giận bạn, mẹ đã làm gì?", "a": ["Mắng Xu-di vì tính hay dỗi", "Khuyên Xu-di nên tìm bạn mới", "Ôm ấp, an ủi và khuyên nhủ Xu-di về tình bạn", "Bảo Xu-di không nên chơi với Pam nữa"], "c": 2 },
                        { "q": "Theo lời mẹ, Xu-di đã học được điều gì về tình bạn?", "a": ["Càng lớn sẽ càng có nhiều bạn, không thể chỉ chơi với một mình người", "Bạn bè phải luôn ở bên cạnh nhau mọi lúc mọi nơi", "Chỉ nên chơi với một người bạn thân duy nhất", "Không bao giờ được giận dỗi bạn bè lâu"], "c": 0 },
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
        "211-viet-doan-van-ta-nguoi": {
            "title": "Giỏ hoa tháng Năm",
            "week": 21,
            "subject": "Tập làm văn",
            "theme": "Vẻ đẹp cuộc sống",
            "audio": "",
            "tabs": {
                "lesson": {
                    "blocks": [
                        {
                            "type": "html",
                            "content": `<div class="glass-card rounded-[32px] p-6 shadow-xl border-t-8 border-blue-500 mb-8">
                            <h1 class="text-3xl font-black text-blue-800 mb-2 uppercase italic tracking-tight flex items-center">
                                <span class="bg-blue-600 text-white px-4 py-1 rounded-xl mr-4 not-italic text-lg">VIẾT</span>
                                Giỏ hoa tháng Năm
                            </h1>
                            <h2 class="text-xl font-bold text-blue-600 ml-16 mt-2 mb-2">Viết đoạn văn tả người</h2>
                            <p class="text-gray-500 font-bold ml-16">Hướng dẫn quan sát và chọn lọc chi tiết tiêu biểu.</p>
                        </div>

                        <!-- Paragraph A -->
                        <div class="glass-card rounded-[24px] p-6 shadow-lg border-l-8 border-orange-400 space-y-4 mb-4">
                            <div class="flex items-start gap-4">
                                <span class="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-black shrink-0">a</span>
                                <div class="serif-font text-xl leading-relaxed text-gray-800">
                                    <p>Ông nội của Nhụ đã tám mươi tuổi, nhưng vóc người vẫn gọn và chắc, dáng đi dứt khoát như một ngọn sóng. Ông có nước da nâu sẫm, ghi dấu ấn của cả một đời chèo thuyền trên mặt biển. Mỗi khi kết thúc một câu nói, ông thường dùng tiếng "hầy". Đó là tiếng hô chèo thuyền của người dân chài xưa lúc trời sắp có dông. Ông thường ra hiệu bằng mắt và bằng tay. Ở trên biển thì đó là một điều rất bình thường. Nhưng ở nhà, ông cũng "nói" theo cách đó. Dần dần, con cháu cũng quen.</p>
                                    <p class="text-right text-sm italic mt-2">(Theo Trần Nhuận Minh)</p>
                                </div>
                            </div>
                            <div class="bg-white/50 rounded-2xl p-4 space-y-3">
                                <table class="w-full border-collapse border border-orange-200 rounded-xl overflow-hidden shadow-sm">
                                    <thead class="bg-orange-100 text-orange-800 text-[10px] uppercase font-black">
                                        <tr><th class="p-3 text-left w-1/3 border border-orange-200">Yêu cầu phân tích</th><th class="p-3 text-left border border-orange-200">Câu trả lời của em</th></tr>
                                    </thead>
                                    <tbody class="text-sm font-bold text-gray-700">
                                        <tr class="bg-white hover:bg-orange-50/30 transition-colors"><td class="p-3 border border-orange-200 bg-orange-50/50">1. Nhân vật được tả là ai?</td><td class="p-1 border border-orange-200"><input type="text" id="ai-1a-q1" placeholder="..." class="w-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-200 rounded"></td></tr>
                                        <tr class="bg-white hover:bg-orange-50/30 transition-colors"><td class="p-3 border border-orange-200 bg-orange-50/50">2. Những từ ngữ tả ngoại hình/hoạt động nổi bật?</td><td class="p-1 border border-orange-200"><input type="text" id="ai-1a-q2" placeholder="..." class="w-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-200 rounded"></td></tr>
                                        <tr class="bg-white hover:bg-orange-50/30 transition-colors"><td class="p-3 border border-orange-200 bg-orange-50/50">3. Chi tiết em ấn tượng nhất? Vì sao?</td><td class="p-1 border border-orange-200"><textarea id="ai-1a-q3" placeholder="..." class="w-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-200 rounded min-h-[60px]"></textarea></td></tr>
                                    </tbody>
                                </table>
                                <button onclick="askAI('1a', '', 'table')" class="bg-orange-500 hover:bg-orange-600 text-white font-black px-6 py-2 rounded-xl shadow-lg transition-all flex items-center">🤖 EduRobot Kiểm tra</button>
                        <div id="fb-1a" class="hidden mt-4"></div>
                            </div>
                        </div>

                        <!-- Paragraph B -->
                        <div class="glass-card rounded-[24px] p-6 shadow-lg border-l-8 border-pink-400 space-y-4 mb-4">
                            <div class="flex items-start gap-4">
                                <span class="w-10 h-10 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-black shrink-0">b</span>
                                <div class="serif-font text-xl leading-relaxed text-gray-800">
                                    <p>Mẹ dẫn tôi về thăm ngoại. Nghe tiếng tôi từ ngoài ngõ, ngoại lập cập chạy ra cửa, dang hai tay đón tôi ngả vào. Ngoại mừng vui đến nỗi không ngăn được những giọt nước mắt rơi trên đôi má nhăn nheo. Ngoại ôm chặt tôi vào lòng, rồi ngoại dẫn tôi ra sau vườn, cho tôi tự tay hái những trái bưởi, trái xoài vàng ươm trên những cành chỉ la đà ngang mắt tôi. Tôi biết là ngoại để dành những trái cây sà thấp xuống như thế cho tôi về hái.</p>
                                    <p class="text-right text-sm italic mt-2">(Theo Lê Văn Trường)</p>
                                </div>
                            </div>
                            <div class="bg-white/50 rounded-2xl p-4 space-y-3">
                                <table class="w-full border-collapse border border-pink-200 rounded-xl overflow-hidden shadow-sm">
                                    <thead class="bg-pink-100 text-pink-800 text-[10px] uppercase font-black">
                                        <tr><th class="p-3 text-left w-1/3 border border-pink-200">Yêu cầu phân tích</th><th class="p-3 text-left border border-pink-200">Câu trả lời của em</th></tr>
                                    </thead>
                                    <tbody class="text-sm font-bold text-gray-700">
                                        <tr class="bg-white hover:bg-pink-50/30 transition-colors"><td class="p-3 border border-pink-200 bg-pink-50/50">1. Nhân vật được tả là ai?</td><td class="p-1 border border-pink-200"><input type="text" id="ai-1b-q1" placeholder="..." class="w-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-200 rounded"></td></tr>
                                        <tr class="bg-white hover:bg-pink-50/30 transition-colors"><td class="p-3 border border-pink-200 bg-pink-50/50">2. Những từ ngữ tả ngoại hình/hoạt động nổi bật?</td><td class="p-1 border border-pink-200"><input type="text" id="ai-1b-q2" placeholder="..." class="w-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-200 rounded"></td></tr>
                                        <tr class="bg-white hover:bg-pink-50/30 transition-colors"><td class="p-3 border border-pink-200 bg-pink-50/50">3. Chi tiết em ấn tượng nhất? Vì sao?</td><td class="p-1 border border-pink-200"><textarea id="ai-1b-q3" placeholder="..." class="w-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-200 rounded min-h-[60px]"></textarea></td></tr>
                                    </tbody>
                                </table>
                                <button onclick="askAI('1b', '', 'table')" class="bg-pink-500 hover:bg-pink-600 text-white font-black px-6 py-2 rounded-xl shadow-lg transition-all flex items-center">🤖 EduRobot Kiểm tra</button>
                                <div id="fb-1b" class="hidden mt-4"></div>
                            </div>
                        </div>

                        <!-- Paragraph C -->
                        <div class="glass-card rounded-[24px] p-6 shadow-lg border-l-8 border-green-400 space-y-4 mb-4">
                            <div class="flex items-start gap-4">
                                <span class="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-black shrink-0">c</span>
                                <div class="serif-font text-xl leading-relaxed text-gray-800">
                                    <p>Chị Hà là một thành viên trong đoàn thanh niên của huyện đến giúp xã tôi chống úng ở cánh đồng chuẩn bị cấy giống lúa mới. Trông chị thật xinh tươi: nước da trắng, môi hồng, tóc mai dài vắt cong lên như một dấu hỏi lộn ngược. Trên má chị có vài nốt tàn nhang. Mỗi khi chị cười, nốt tàn nhang lặn đi trên gò má đỏ ửng. Chị cười nói nhiều, chắc tính chị vốn sôi nổi, cũng có thể là vì hào hứng với chuyến đi giúp bà con xã tôi nên chị vui như thế.</p>
                                    <p class="text-right text-sm italic mt-2">(Theo Bùi Hiển)</p>
                                </div>
                            </div>
                            <div class="bg-white/50 rounded-2xl p-4 space-y-3">
                                <table class="w-full border-collapse border border-green-200 rounded-xl overflow-hidden shadow-sm">
                                    <thead class="bg-green-100 text-green-800 text-[10px] uppercase font-black">
                                        <tr><th class="p-3 text-left w-1/3 border border-green-200">Yêu cầu phân tích</th><th class="p-3 text-left border border-green-200">Câu trả lời của em</th></tr>
                                    </thead>
                                    <tbody class="text-sm font-bold text-gray-700">
                                        <tr class="bg-white hover:bg-green-50/30 transition-colors"><td class="p-3 border border-green-200 bg-green-50/50">1. Nhân vật được tả là ai?</td><td class="p-1 border border-green-200"><input type="text" id="ai-1c-q1" placeholder="..." class="w-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-200 rounded"></td></tr>
                                        <tr class="bg-white hover:bg-green-50/30 transition-colors"><td class="p-3 border border-green-200 bg-green-50/50">2. Những từ ngữ tả ngoại hình/hoạt động nổi bật?</td><td class="p-1 border border-green-200"><input type="text" id="ai-1c-q2" placeholder="..." class="w-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-200 rounded"></td></tr>
                                        <tr class="bg-white hover:bg-green-50/30 transition-colors"><td class="p-3 border border-green-200 bg-green-50/50">3. Chi tiết em ấn tượng nhất? Vì sao?</td><td class="p-1 border border-green-200"><textarea id="ai-1c-q3" placeholder="..." class="w-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-200 rounded min-h-[60px]"></textarea></td></tr>
                                    </tbody>
                                </table>
                                <button onclick="askAI('1c', '', 'table')" class="bg-green-500 hover:bg-green-600 text-white font-black px-6 py-2 rounded-xl shadow-lg transition-all flex items-center">🤖 EduRobot Kiểm tra</button>
                                <div id="fb-1c" class="hidden mt-4"></div>
                            </div>
                        </div>

                        <!-- Writing Instructions -->
                        <div class="glass-card rounded-[32px] p-8 shadow-2xl relative overflow-hidden bg-white/80 mt-8 mb-4">
                            <div class="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
                            <h2 class="text-2xl font-black text-purple-800 mb-6 flex items-center uppercase italic">
                                <span class="bg-purple-600 text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 not-italic shadow-lg shadow-purple-200">2</span>
                                Luyện tập viết đoạn văn
                            </h2>
                            <div class="bg-purple-50 p-6 rounded-2xl border-2 border-dashed border-purple-200 mb-6">
                                <h3 class="font-black text-purple-700 mb-4 flex items-center">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    Công thức 3 phần:
                                </h3>
                                <ul class="space-y-4 text-sm font-bold text-gray-600">
                                    <li class="flex gap-3"><span class="text-purple-600 shrink-0">❶</span><span><b>Mở đoạn:</b> Giới thiệu nhân vật (Ai? Quan hệ với em?).</span></li>
                                    <li class="flex gap-3"><span class="text-purple-600 shrink-0">❷</span><span><b>Thân đoạn:</b> Tả 1-2 nét ngoại hình & hoạt động đặc trưng.</span></li>
                                    <li class="flex gap-3"><span class="text-purple-600 shrink-0">❸</span><span><b>Kết đoạn:</b> Cảm xúc, ấn tượng của em.</span></li>
                                </ul>
                                <div class="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-200 text-xs text-orange-800 italic">
                                    💡 <b>Mẹo sư phạm:</b> Tránh liệt kê khô khan. Hãy dùng câu ghép: "Tuy ngoại đã già nhưng nụ cười ngoại vẫn ấm áp vô cùng."
                                </div>
                            </div>
                        </div>

                        <!-- Main Essay -->
                        <div class="glass-card p-6 md:p-10 rounded-[40px] relative overflow-hidden bg-white/90 shadow-2xl">
                            <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
                            <h3 class="text-2xl font-black text-gray-800 mb-6 flex items-center">
                                <span class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-3 text-xl shadow-inner">📝</span> Bài làm của em:
                            </h3>
                            <textarea id="ai-main-essay" class="paper-textarea w-full p-4 md:p-8 min-h-[500px] rounded-xl border-2 border-gray-100 focus:outline-none focus:border-blue-300" placeholder="Em hãy viết đoạn văn tả một người thân hoặc một người mà em yêu mến vào đây nhé..."></textarea>
                            <div class="mt-6 flex flex-col md:flex-row gap-4">
                                <button onclick="askAI('main-essay')" class="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black py-4 px-8 rounded-2xl shadow-xl transition-all">🤖 EduRobot Chấm Bài</button>
                                <button onclick="alert('Đã gửi bài cho thầy cô!')" class="flex-1 bg-white text-green-600 border-4 border-green-600 font-black py-4 px-8 rounded-2xl shadow-xl transition-all">🚀 Nộp Bài Cho Thầy/Cô</button>
                            </div>
                            <div id="fb-main-essay" class="hidden mt-8"></div>
                        </div>`
                        }
                    ]
                },
                "quiz": {
                    "html": `<div class="max-w-5xl mx-auto space-y-8">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="bg-white p-6 rounded-3xl border-2 border-purple-100 shadow-sm">
                                    <div class="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl mb-4 text-purple-600">📸</div>
                                    <h4 class="font-black text-gray-800 mb-2">1. Khoảnh khắc yêu thương</h4>
                                    <p class="text-sm text-gray-500 mb-4 font-bold leading-relaxed">Hãy chụp một bức ảnh hoặc quay video ngắn về một hoạt động giúp đỡ người thân và nộp cho Cô nhé.</p>
                                    <div class="space-y-3 mb-4">
                                        <textarea id="project-desc-1" placeholder="Em đã làm gì?" class="w-full text-sm p-3 bg-purple-50 rounded-xl border-none font-bold text-gray-700"></textarea>
                                        <input type="file" id="project-file-1" class="w-full text-xs text-gray-500">
                                    </div>
                                    <button onclick="alert('Đã gửi dự án!')" class="w-full bg-purple-600 text-white font-black py-3 rounded-xl shadow-lg">Gửi Dự Án</button>
                                </div>
                                <div class="bg-white p-6 rounded-3xl border-2 border-green-100 shadow-sm">
                                    <div class="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-2xl mb-4 text-green-600">📖</div>
                                    <h4 class="font-black text-gray-800 mb-2">2. Góc tìm đọc</h4>
                                    <p class="text-sm text-gray-500 mb-4 font-bold leading-relaxed">Tìm đọc một bài thơ tả người và chia sẻ cảm xúc của em.</p>
                                    <button onclick="alert('Đã gửi bài đọc!')" class="w-full bg-green-600 text-white font-black py-3 rounded-xl shadow-lg">Gửi Bài Đọc</button>
                                </div>
                            </div>
                        </div>`
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
                            "content": `
                                <div class="glass-card p-6 md:p-10 rounded-[40px] shadow-2xl mb-8">
                                    <h1 class="text-3xl font-black mb-8 text-blue-950 text-center uppercase tracking-tighter relative">
                                        <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                        Đoàn thuyền đánh cá
                                    </h1>
                                    <div class="flex flex-col md:flex-row gap-6">
                                        <div class="w-full md:w-2/3 serif-font text-gray-800 text-lg leading-relaxed space-y-6 italic text-left">
                                            <p>Mặt trời xuống biển như hòn lửa<br>Sóng đã cài then, đêm sập cửa<br>Đoàn thuyền đánh cá lại ra khơi<br>Câu hát căng buồm cùng gió khơi.</p>
                                            <p>Hát rằng: cá bạc Biển Đông lặng,<br>Cá thu Biển Đông như đoàn thoi<br>Đêm ngày dệt biển muôn luồng sáng<br>Đến dệt lưới ta, đoàn cá ơi!</p>
                                            <p>Ta hát bài ca gọi cá vào<br>Gõ thuyền đã có nhịp trăng cao<br>Biển cho ta cá như lòng mẹ<br>Nuôi lớn đời ta tự buổi nào.</p>
                                            <p>Sao mờ, kéo lưới kịp trời sáng<br>Ta kéo xoăn tay chùm cá nặng<br>Vảy bạc đuôi vàng loé rạng đông,<br>Lưới xếp buồm lên đón nắng hồng.</p>
                                            <p>Câu hát căng buồm với gió khơi,<br>Đoàn thuyền chạy đua cùng mặt trời<br>Mặt trời đội biển nhô màu mới,<br>Mắt cá huy hoàng muôn dặm phơi.</p>
                                            <p class="text-right font-black text-blue-900 uppercase tracking-widest text-sm not-italic mt-4">Huy Cận</p>
                                        </div>
                                        <div class="w-full md:w-1/3">
                                             <img src="hinh_anh/doanthuyendanhca.png" class="w-full rounded-3xl shadow-lg transform -rotate-2 hover:rotate-0 transition-all duration-500" alt="Đoàn thuyền đánh cá">
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="glass-card rounded-[24px] p-6 bg-blue-50/50 border-l-8 border-blue-600 mb-8">
                                    <h3 class="text-xl font-black text-blue-800 mb-2 uppercase">Ý NGHĨA</h3>
                                    <p class="text-lg text-gray-700 font-medium">Ca ngợi vẻ đẹp huy hoàng của biển cả và vẻ đẹp của người lao động hăng say, làm chủ thiên nhiên, làm giàu cho đất nước.</p>
                                </div>

                                <div class="glass-card rounded-[24px] p-6 shadow-lg">
                                    <h3 class="text-2xl font-black text-gray-800 mb-6 flex items-center">
                                        <span class="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mr-3">?</span>
                                        Tìm hiểu bài
                                    </h3>
                                    <div class="space-y-4">
                                        <details class="bg-white/60 p-4 rounded-2xl border border-white hover:shadow-md transition-all group">
                                            <summary class="font-bold text-blue-900 mb-2 cursor-pointer list-none flex justify-between items-center outline-none">
                                                <span>1. Khung cảnh thiên nhiên lúc đoàn thuyền ra khơi được miêu tả như thế nào?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <p class="text-gray-700 ml-4 border-l-4 border-green-400 pl-4 mt-2">Cảnh hoàng hôn huy hoàng: Mặt trời xuống biển như hòn lửa. Màn đêm buông xuống: Sóng đã cài then, đêm sập cửa.</p>
                                        </details>
                                        <details class="bg-white/60 p-4 rounded-2xl border border-white hover:shadow-md transition-all group">
                                            <summary class="font-bold text-blue-900 mb-2 cursor-pointer list-none flex justify-between items-center outline-none">
                                                <span>2. Những chi tiết nào thể hiện niềm vui và tình yêu biển cả của người lao động?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <p class="text-gray-700 ml-4 border-l-4 border-green-400 pl-4 mt-2">Tiếng hát theo suốt cuộc hành trình (hát lúc ra khơi, hát gọi cá, hát lúc trở về). Cách gọi biển là "lòng mẹ".</p>
                                        </details>
                                        <details class="bg-white/60 p-4 rounded-2xl border border-white hover:shadow-md transition-all group">
                                            <summary class="font-bold text-blue-900 mb-2 cursor-pointer list-none flex justify-between items-center outline-none">
                                                <span>3. Hình ảnh "đoàn thuyền chạy đua cùng mặt trời" nói lên điều gì?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <p class="text-gray-700 ml-4 border-l-4 border-green-400 pl-4 mt-2">Khí thế lao động khẩn trương, mạnh mẽ, hào hùng của đoàn thuyền để tranh thủ thời gian, thu về mẻ cá bội thu trước khi trời sáng.</p>
                                        </details>
                                    </div>
                                </div>
                            `
                        }
                    ]
                },
                "quiz": {
                    "setting": { "pick": 5 },
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
        "221-ltvc-luyen-tap-cau-ghep": {
            "title": "Luyện tập về câu ghép",
            "week": 22,
            "subject": "Luyện từ và câu",
            "theme": "Vẻ đẹp cuộc sống",
            "tabs": {
                "lesson": {
                    "title": "Bài tập",
                    "blocks": [
                        { "type": "header", "text": "Luyện tập về câu ghép" },
                        {
                            "type": "theory",
                            "title": "Kiến thức cần nhớ",
                            "content": "<p>Câu ghép là câu do nhiều vế câu ghép lại. Mỗi vế câu ghép thường có cấu tạo giống một câu đơn (có đủ Chủ ngữ - Vị ngữ) và thể hiện một ý có quan hệ chặt chẽ với ý của những vế câu khác.</p><br><p>Có hai cách nối các vế câu ghép:<br>1. Nối bằng những từ có tác dụng nối (quan hệ từ, cặp từ hô ứng).<br>2. Nối trực tiếp (không dùng từ nối, dùng dấu phẩy, dấu chấm phẩy, dấu hai chấm).</p>"
                        },
                        {
                            "type": "exercise_click_word",
                            "title": "Bài 1",
                            "subtitle": "Tìm từ nối trong câu ghép",
                            "instruction": "Em hãy bấm vào các quan hệ từ hoặc cặp từ hô ứng dùng để nối các vế câu trong những câu ghép dưới đây:",
                            "data": [
                                {
                                    "id": "e1-s1",
                                    "text": "<span class='word'>Làng</span> <span class='word'>Tày,</span> <span class='word'>làng</span> <span class='word'>Dao</span> <span class='word'>ven</span> <span class='word'>suối</span> <span class='word'>và</span> <span class='word'>trong</span> <span class='word'>rừng,</span> <span class='word'>nhưng</span> <span class='word'>làng</span> <span class='word'>người</span> <span class='word'>Mông</span> <span class='word'>ở</span> <span class='word'>chơ</span> <span class='word'>vơ</span> <span class='word'>đỉnh</span> <span class='word'>núi.</span>",
                                    "targets": ["nhưng"]
                                },
                                {
                                    "id": "e1-s2",
                                    "text": "<span class='word'>Thỏ</span> <span class='word'>tìm</span> <span class='word'>cách</span> <span class='word'>quấn</span> <span class='word'>tấm</span> <span class='word'>vải</span> <span class='word'>lên</span> <span class='word'>người</span> <span class='word'>cho</span> <span class='word'>đỡ</span> <span class='word'>rét,</span> <span class='word'>nhưng</span> <span class='word'>tấm</span> <span class='word'>vải</span> <span class='word'>bị</span> <span class='word'>gió</span> <span class='word'>lật</span> <span class='word'>tung.</span>",
                                    "targets": ["nhưng"]
                                },
                                {
                                    "id": "e1-s3",
                                    "text": "<span class='word'>Thỏ</span> <span class='word'>vừa</span> <span class='word'>đặt</span> <span class='word'>chân</span> <span class='word'>xuống</span> <span class='word'>nước</span> <span class='word'>đã</span> <span class='word'>vội</span> <span class='word'>co</span> <span class='word'>chân</span> <span class='word'>lên.</span>",
                                    "targets": ["vừa", "đã"]
                                },
                                {
                                    "id": "e1-s4",
                                    "text": "<span class='word'>Thỏ</span> <span class='word'>cố</span> <span class='word'>khều</span> <span class='word'>nhưng</span> <span class='word'>đưa</span> <span class='word'>chân</span> <span class='word'>không</span> <span class='word'>tới.</span>",
                                    "targets": ["nhưng"]
                                }
                            ]
                        },
                        {
                            "type": "exercise_fill_blank",
                            "title": "Bài 2",
                            "subtitle": "Điền cặp từ phù hợp",
                            "color": "orange",
                            "data": [
                                {
                                    "id": "e2-q1",
                                    "text": "a. <span class='slot'>...</span> em có một khu vườn rộng <span class='slot'>...</span> em sẽ trồng thật nhiều loại cây.",
                                    "correct": "Nếu-thì",
                                    "options": [
                                        { "value": "Nếu-thì", "label": "Nếu... thì..." },
                                        { "value": "Vì-nên", "label": "Vì... nên..." },
                                        { "value": "Tuy-nhưng", "label": "Tuy... nhưng..." }
                                    ]
                                },
                                {
                                    "id": "e2-q2",
                                    "text": "b. <span class='slot'>...</span> thành phố này không sầm uất, hiện đại <span class='slot'>...</span> nó rất hấp dẫn du khách.",
                                    "correct": "Mặc dù-nhưng",
                                    "options": [
                                        { "value": "Nếu-thì", "label": "Nếu... thì..." },
                                        { "value": "Mặc dù-nhưng", "label": "Mặc dù... nhưng..." },
                                        { "value": "Chẳng những-mà", "label": "Chẳng những... mà..." }
                                    ]
                                },
                                {
                                    "id": "e2-q3",
                                    "text": "c. Mọi người <span class='slot'>...</span> đối xử tốt với nhau thì cuộc sống <span class='slot'>...</span> tốt đẹp hơn.",
                                    "correct": "càng-càng",
                                    "options": [
                                        { "value": "vừa-đã", "label": "vừa... đã..." },
                                        { "value": "càng-càng", "label": "càng... càng..." },
                                        { "value": "đâu-đó", "label": "đâu... đó..." }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "exercise_ai",
                            "title": "Bài 3",
                            "subtitle": "Viết đoạn văn sáng tạo",
                            "color": "purple",
                            "data": [
                                {
                                    "id": "write-1",
                                    "text": "Em hãy viết một đoạn văn (từ 3 đến 5 câu) về bài thơ <b>Đoàn thuyền đánh cá</b>, trong đó có sử dụng ít nhất một <b>câu ghép</b> chứa kết từ để nối các vế câu.",
                                    "placeholder": "Nhập đoạn văn của em vào đây...",
                                    "context": "Viết đoạn văn về bài thơ Đoàn thuyền đánh cá có sử dụng câu ghép."
                                }
                            ]
                        }
                    ]
                },
                "quiz": {
                    "setting": { "pick": 5 },
                    "questions": [
                        { "q": "Cặp từ 'nhưng' dùng để làm gì trong câu ghép?", "a": ["Nối hai vế câu ghép", "Nối hai từ đơn", "Làm chủ ngữ", "Làm vị ngữ"], "c": 0 },
                        { "q": "Cách nối các vế câu ghép trong câu 'Mặt trời xuống biển, sóng cài then.' là gì?", "a": ["Dùng từ nối", "Nối trực tiếp (dấu phẩy)", "Dùng cặp từ hô ứng", "Không nối"], "c": 1 },
                        { "q": "Câu nào sau đây là câu ghép?", "a": ["Lan đi học.", "Trời mưa to, đường ngập nước.", "Bông hoa hồng đẹp quá!", "Bé ăn cơm."], "c": 1 },
                        { "q": "Điền cặp từ: '... trời mưa ... đường trơn.'", "a": ["Nếu... thì...", "Vì... nên...", "Tuy... nhưng...", "Hễ... là..."], "c": 1 },
                        { "q": "Cặp từ 'càng... càng...' biểu thị quan hệ gì?", "a": ["Tương phản", "Tăng tiến", "Nguyên nhân", "Điều kiện"], "c": 1 },
                        { "q": "Trong câu ghép 'Tuy nhà xa nhưng Lan vẫn đi học đúng giờ', cặp quan hệ từ là gì?", "a": ["Tuy... nhưng...", "Vì... nên...", "Nếu... thì...", "Không có"], "c": 0 },
                        { "q": "Tìm cặp từ hô ứng trong câu: 'Thủy Tinh dâng nước cao bao nhiêu, Sơn Tinh dâng núi cao bấy nhiêu.'", "a": ["cao-cao", "bao nhiêu-bấy nhiêu", "dâng-dâng", "nước-núi"], "c": 1 },
                        { "q": "Câu 'Gió thổi ào ào.' là câu gì?", "a": ["Câu đơn", "Câu ghép", "Câu đặc biệt", "Câu hỏi"], "c": 0 },
                        { "q": "Quan hệ từ 'và' biểu thị quan hệ gì?", "a": ["Tương phản", "Đẳng lập/Liệt kê", "Lựa chọn", "Nguyên nhân"], "c": 1 },
                        { "q": "Câu nào sử dụng cặp từ hô ứng?", "a": ["Mẹ về, bà cũng về.", "Trời vừa hửng sáng, nông dân đã ra đồng.", "Vì ốm nên nghỉ.", "Nếu học giỏi thì có thưởng."], "c": 1 }
                    ]
                }
            }
        },
        "221-viet-danh-gia-chinh-sua-bai-van-ta-nguoi": {
            "title": "Đánh giá, chỉnh sửa bài văn tả người",
            "week": 22,
            "subject": "Viết",
            "theme": "Vẻ đẹp cuộc sống",
            "tabs": {
                "lesson": {
                    "title": "Bài học",
                    "blocks": [
                        { "type": "header", "text": "Đánh giá, chỉnh sửa bài văn tả người" },
                        {
                            "type": "theory",
                            "title": "1. Nhận xét chung",
                            "content": "<div class=\"mb-6 text-gray-800 bg-blue-50/50 p-6 rounded-2xl border border-blue-100\">\n<p class=\"text-lg\"><span class=\"font-bold\">Nghe thầy cô giáo nhận xét về bài làm.</span></p>\n<p class=\"mt-2 text-gray-600 ml-8 italic\">Em hãy lắng nghe và ghi chép lại những nhận xét chung của thầy cô về bài văn của cả lớp nhé.</p>\n</div>"
                        },
                        {
                            "type": "theory",
                            "title": "2. Tự đánh giá",
                            "content": "<p>Đọc lại bài văn của em và tự đánh giá xem bài đã đạt được những yêu cầu nào dưới đây:</p><br><ul class='list-disc pl-6 space-y-2'><li>Có đủ mở bài, thân bài, kết bài.</li><li>Miêu tả ngoại hình, hoạt động,... làm nổi bật đặc điểm riêng của người được tả.</li><li>Thể hiện tình cảm đối với người được tả.</li><li>Trình bày bài sạch đẹp, không mắc lỗi chính tả, lỗi diễn đạt.</li></ul>"
                        },
                        {
                            "type": "exercise_ai",
                            "title": "3. Chỉnh sửa bài văn",
                            "subtitle": "Viết lại câu văn hay hơn",
                            "color": "purple",
                            "data": [
                                {
                                    "id": "write-3a",
                                    "text": "a. Sử dụng từ ngữ giàu sức gợi tả hoặc hình ảnh so sánh gây ấn tượng.",
                                    "placeholder": "Ví dụ: Giọng nói của bà trầm bổng như tiếng chuông...",
                                    "context": "Viết lại câu văn dùng hình ảnh so sánh hoặc từ gợi tả."
                                },
                                {
                                    "id": "write-3b",
                                    "text": "b. Bộc lộ suy nghĩ, cảm xúc với người được tả.",
                                    "placeholder": "Ví dụ: Em sẽ không bao giờ quên...",
                                    "context": "Viết câu văn bộc lộ suy nghĩ, cảm xúc về người được tả."
                                }
                            ]
                        }
                    ]
                }
            },
            "quiz": {
                "questions": [
                    // Note: 221 didn't have a quiz tab in viewing, it had 'exercise_ai'. Let me re-verify 221 structure.
                    // Ah, 221 is a WRITING lesson. It usually doesn't have a standard quiz tab.
                    // Let's look at 221 content again in view_file 639.
                    // It has 'tabs': { 'lesson': { ... } }. No 'quiz' tab visible in lines 700-740.
                    // But wait, line 741 closes 'lesson'.
                ]
                // Wait, I cannot invent a quiz tab for 221 if it didn't have one.
                // I should close 221 properly.
            } // Close tabs
        }, // Close 221
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
                            "content": `
                                <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl mb-8">
                                    <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50">
                                        <h1 class="text-3xl md:text-4xl font-black text-blue-800 mb-6 uppercase italic tracking-tight flex items-center justify-center text-center">
                                            <span class="bg-blue-600 text-white px-4 py-1 rounded-xl mr-4 not-italic text-lg shrink-0">ĐỌC</span>
                                            <span>Hội thổi cơm thi ở Đồng Vân</span>
                                        </h1>
                                        <div class="serif-font text-gray-800 text-justify text-lg leading-relaxed space-y-4">
                                            <p>Hội thổi cơm thi ở làng Đồng Vân bắt nguồn từ các cuộc trẩy quân đánh giặc của người Việt cổ bên bờ sông Đáy xưa.</p>
                                            <p>Hội thi bắt đầu bằng việc lấy lửa. Khi tiếng trống hiệu vừa dứt, bốn thanh niên của bốn đội nhanh như sóc, thoan thoắt leo lên bốn cây chuối bôi mỡ bóng nhẫy để lấy nén hương cắm ở trên ngọn. Có người leo lên, tụt xuống, lại leo lên,... Khi mang được nén hương xuống, người dự thi được phát ba que diêm để châm vào hương cho cháy thành ngọn lửa. Trong khi đó, những người trong đội, mỗi người một việc. Người thì ngồi vót những thanh tre già thành những chiếc đũa bông. Người thì nhanh tay giã thóc, giần sàng thành gạo, người thì lấy nước và bắt đầu thổi cơm.</p>
                                            <p>Mỗi người nấu cơm đều mang một cái cần tre được cắm rất khéo vào dây lưng, uốn cong hình cánh cung từ phía sau ra trước mặt, đầu cần treo cái nồi nho nhỏ. Người nấu cơm tay giữ cần, tay cầm đuốc đung đưa cho ánh lửa bập bùng. Các đội vừa thổi cơm vừa đan xen nhau uốn lượn trên sân đình trong sự cổ vũ nồng nhiệt của người xem hội.</p>
                                            <p>Sau độ một giờ rưỡi, các nồi cơm được lần lượt trình trước cửa đình. Mỗi nồi cơm được đánh một số để giữ bí mật. Ban giám khảo chấm theo ba tiêu chí: cơm trắng, dẻo và không có cháy. Cuộc thi nào cũng hồi hộp và việc giật giải đã trở thành niềm tự hào khó có gì sánh nổi đối với dân làng.</p>
                                            <p class="text-right italic font-bold text-gray-600 mt-6">(Theo Minh Nhương)</p>
                                        </div>
                                    </div>
                                    <div class="mt-8 bg-orange-50 rounded-3xl p-6 border border-orange-100 relative overflow-hidden">
                                        <div class="absolute -right-10 -top-10 w-40 h-40 bg-orange-100 rounded-full opacity-50"></div>
                                        <div class="flex flex-col md:flex-row items-center gap-6 relative z-10">
                                            <div class="bg-orange-600 p-6 rounded-2xl text-white shadow-lg shrink-0 text-center">
                                                <p class="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Thông điệp</p>
                                                <h3 class="text-xl font-black uppercase">Nội dung chính</h3>
                                            </div>
                                            <div>
                                                <p class="text-gray-700 font-bold leading-relaxed">Bài đọc giúp em hiểu rõ hơn về ý nghĩa của lễ hội ở mỗi vùng quê. Hội thi không chỉ là một hoạt động văn hóa giải trí mà còn là cách để kết nối quá khứ với hiện tại, thể hiện sự khéo léo, tài hoa và lòng tự hào về truyền thống dân tộc.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="glass-card rounded-[40px] p-6 shadow-xl border-yellow-100/50">
                                    <h3 class="text-2xl font-black text-gray-800 mb-6 flex items-center">
                                        <span class="w-10 h-10 bg-yellow-400 text-white rounded-xl flex items-center justify-center mr-3">?</span>
                                        Tìm hiểu bài
                                    </h3>
                                    <div class="space-y-4">
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-orange-600 transition-colors text-sm outline-none">
                                                <span>1. Hội thổi cơm thi ở Đồng Vân bắt nguồn từ đâu?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Bắt nguồn từ các cuộc trẩy quân đánh giặc của người Việt cổ bên bờ sông Đáy xưa.</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-orange-600 transition-colors text-sm outline-none">
                                                <span>2. Cách lấy lửa được miêu tả như thế nào?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Thanh niên leo lên cây chuối bôi mỡ bóng nhẫy để lấy nén hương trên ngọn, sau đó châm diêm vào hương cho cháy thành lửa.</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-orange-600 transition-colors text-sm outline-none">
                                                <span>3. Các thành viên phối hợp thế nào?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Mỗi người một việc: vót tre thành đũa bông, giã thóc, giần sàng gạo, lấy nước. Họ phối hợp chủ động và rất khéo léo.</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-orange-600 transition-colors text-sm outline-none">
                                                <span>4. Tác giả muốn nói điều gì qua bài đọc?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Ca ngợi, tự hào về nét đẹp văn hóa cổ truyền của dân tộc và khơi dậy ý thức giữ gìn các giá trị tốt đẹp đó.</p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            `
                        }
                    ]
                },
                "quiz": {
                    "setting": { "pick": 5 },
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
            },
            "251-dan-t'rung-tieng-ca-dai-ngan": {
                "title": "Đàn t'rưng - Tiếng ca đại ngàn",
                "week": 25,
                "subject": "Đọc",
                "theme": "Hương sắc trăm miền",
                "audio": "am_thanh/dantrungtiengcadainan.mp3",
                "tabs": {
                    "lesson": {
                        "title": "Bài học",
                        "blocks": [
                            { "type": "header", "text": "Đàn t'rưng - Tiếng ca đại ngàn" },
                            {
                                "type": "html",
                                "content": `
                                <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl mb-8">
                                    <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                        <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                        <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                        <h1 class="text-3xl md:text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                            <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                            ĐÀN T’RƯNG - TIẾNG CA ĐẠI NGÀN
                                        </h1>
                                        <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                            <p>Đến Tây Nguyên, ta thường được nghe tiếng đàn t’rưng ngân dài theo dòng suối, hoà
                                                cùng tiếng gió trên đèo núi hoang vu...</p>
                                            <p>Cùng với điệu hát ru, tiếng đàn t’rưng đã đi vào kí ức tuổi thơ của các bạn trẻ Tây
                                                Nguyên từ lúc còn được địu trên lưng mẹ. Lớn lên, mỗi bước chân của họ vào rừng kiếm
                                                củi, xuống suối lấy nước, ra nương trỉa lúa,... đều vấn vương nhịp điệu khi khoan
                                                khi nhặt, khi trầm hùng như tiếng thác đổ, khi thánh thót, róc rách như suối reo của
                                                đàn t’rưng.</p>
                                            <p>Dưới mỗi gầm chòi cao lêu nghêu ở sát bên chân rẫy, đều có một chiếc đàn t’rưng cong
                                                cong như chiếc võng đưa em. Mùa lúa chín, trai làng thay phiên nhau trực ở chòi
                                                canh. Chốc chốc, họ lại gõ trên chiếc đàn t’rưng, dạo một bản nhạc “đánh tiếng” đuổi
                                                chim muông và thú rừng mon men đến rẫy phá lúa. Tiếng đàn chẳng những rộn rã suốt
                                                ngày mà còn thánh thót thâu đêm, làm ấm lòng những chàng trai canh rẫy trong rừng
                                                khuya sương lạnh.</p>
                                            <p>Từ buôn này sang buôn khác, ta còn thấy những chiếc đàn t’rưng trên đỉnh dốc cao.
                                                Người đi qua đây sẽ gõ cho tiếng đàn vang lên để thêm yên tâm, vững bước vượt qua
                                                quãng đường rừng u tịch.</p>
                                            <p>Cùng với mái nhà rông thân thương, cao vút, tiếng đàn t’rưng rộn ràng, lưu luyến đã
                                                trở thành niềm thương, nỗi nhớ của người Tây Nguyên.</p>
                                            <p class="text-right italic font-bold text-gray-600 mt-6">(Theo Ay Dun và Lê Tấn)</p>
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
                                                    Bài đọc ca ngợi vẻ đẹp của tiếng đàn t'rưng và khẳng định sự gắn bó mật thiết
                                                    của loại nhạc cụ này với đời sống vật chất, tinh thần của người dân Tây Nguyên.
                                                    Qua đó, tác giả thể hiện sự trân trọng đối với bàn tay, khối óc và tâm hồn của
                                                    những con người đã tạo nên bản sắc văn hóa riêng biệt cho vùng đất đại ngàn.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="glass-card rounded-[40px] p-6 shadow-xl border-amber-100/50">
                                    <div class="mb-6 -mt-2 text-center">
                                        <img src="hinh_anh/dan-trung.png" alt="Đàn t'rưng" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500 max-w-[240px] mx-auto">
                                    </div>
                                    <div class="flex items-center space-x-4 mb-8">
                                        <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                            <span class="text-white font-black text-xl">?</span>
                                        </div>
                                        <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                    </div>
                                    <div class="space-y-4">
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>1. Bài đọc nói về điểm nổi bật nào của vùng đất Tây Nguyên?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Bài đọc nói về một nét đẹp văn hóa độc đáo, một âm thanh đặc trưng của vùng đất Tây Nguyên, đó là tiếng đàn t'rưng.</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>2. Tiếng đàn t’rưng gắn bó với người Tây Nguyên như thế nào?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Tiếng đàn gắn bó với họ từ lúc còn nhỏ (được địu trên lưng mẹ nghe cùng lời ru) cho đến khi lớn lên. Tiếng đàn theo họ trong mọi hoạt động lao động sản xuất: vào rừng kiếm củi, xuống suối lấy nước, ra nương trỉa lúa....</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>3. Những chi tiết nào cho thấy đàn t’rưng là nhạc cụ phổ biến?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Dưới mỗi gầm chòi canh rẫy đều có đàn t'rưng. Mùa lúa chín, trai làng dùng tiếng đàn đuổi chim thú và làm ấm lòng đêm khuya. Trên đỉnh dốc cao cũng có đàn t'rưng để người đi rừng gõ cho yên tâm.</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>4. Vì sao tiếng đàn t’rưng là niềm thương, nỗi nhớ?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Vì tiếng đàn hiện diện mọi mặt đời sống, từ tuổi thơ đến trưởng thành. Nó là người bạn tinh thần, giúp con người xua tan mệt mỏi, sợ hãi và gắn kết với buôn làng.</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>5. Bài đọc giúp em cảm nhận gì về con người Tây Nguyên?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Họ rất yêu âm nhạc, ca hát. Cuộc sống giản dị gắn liền với nương rẫy nhưng luôn sôi động, vui tươi và lạc quan, yêu đời.</p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            `
                            }
                        ]
                    },
                    "quiz": {
                        "setting": { "pick": 5 },
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
                                    "content": `
                                <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl mb-8">
                                    <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                        <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                        <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                        <h1 class="text-3xl md:text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                            <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                            ĐƯỜNG QUÊ ĐỒNG THÁP MƯỜI
                                        </h1>
                                        <p class="text-center font-black text-gray-500 mb-8 -mt-8">Trần Quốc Toàn</p>
                                        <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                            <div class="text-center italic">
                                                <p class="mb-6">
                                                    Bông súng thả lồng đèn<br>
                                                    Sáng bồng bềnh mặt nước<br>
                                                    Cá lòng tong chạy trước<br>
                                                    Dẫn đường về thăm ông.
                                                </p>
                                                <p class="mb-6">
                                                    Đường quê, sào vít cong<br>
                                                    Xuồng lướt như tên bắn<br>
                                                    Cò ở đâu giật mình<br>
                                                    Bay lẫn vào mây trắng.
                                                </p>
                                                <p class="mb-6">
                                                    Lấm lem con trâu đầm<br>
                                                    Chém cặp sừng loé nắng<br>
                                                    Xình xịch thuyền đuôi tôm<br>
                                                    Chở lúa vàng, rẽ sóng.
                                                </p>
                                                <p class="mb-6">
                                                    Kìa mấy búp sen hồng<br>
                                                    Nối đầu thu, cuối hạ<br>
                                                    Nước lớn sông Cửu Long<br>
                                                    Chơi với sen nghiêng ngả.
                                                </p>
                                                <p class="mb-6">
                                                    Về xứ mười tầng tháp<br>
                                                    Leo cầu trăm đốt tre<br>
                                                    Ông đứng như bụt hiện<br>
                                                    Chờ cháu cuối đường quê.
                                                </p>
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
                                                    Bài thơ ca ngợi vẻ đẹp riêng biệt của cảnh vật thiên nhiên, cuộc sống sinh hoạt
                                                    sôi động và tâm hồn đôn hậu, chất phác của con người vùng Đồng Tháp Mười - nơi
                                                    có hệ thống sông ngòi, kênh rạch chằng chịt.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="glass-card rounded-[40px] p-6 shadow-xl border-amber-100/50">
                                    <div class="mb-6 -mt-2 text-center">
                                        <img src="hinh_anh/dong-thap-muoi.png" alt="Đồng Tháp Mười" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500 max-w-[240px] mx-auto">
                                    </div>
                                    <div class="flex items-center space-x-4 mb-8">
                                        <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                            <span class="text-white font-black text-xl">?</span>
                                        </div>
                                        <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                    </div>
                                    <div class="space-y-4">
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>1. Ở khổ thơ đầu, đường về quê thú vị như thế nào?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Đường về quê rất thú vị với các hình ảnh: bông súng nở đẹp như đang "thả lồng đèn", sáng bồng bềnh; những chú cá lòng tong bơi lội tung tăng như đang dẫn đường về thăm ông.</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>2. Tìm những nét đẹp riêng của vùng Đồng Tháp Mười?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Về thiên nhiên: sông nước với sào vít cong, xuồng lướt nhanh, thuyền đuôi tôm, búp sen hồng, cầu trăm đốt tre. Về con người: người ông hiền hậu, đứng chờ cháu như "bụt hiện".</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>3. Những từ ngữ nào gợi tả nhịp sống sôi động, náo nức?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Những từ ngữ: lướt như tên bắn, giật mình, chém (cặp sừng), xình xịch, rẽ sóng, nước lớn, nghiêng ngả.</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>4. Bạn nhỏ muốn nói điều gì về quê hương mình?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Bạn nhỏ ca ngợi quê hương Đồng Tháp Mười đẹp đẽ, mộc mạc và chất phác. Thể hiện tình yêu quê hương, con người qua những hình ảnh hiền lành và tốt đẹp nhất.</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>5. Những chi tiết nào gợi nhớ truyện cổ tích?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Chi tiết: "Cầu trăm đốt tre" (gợi nhớ truyện Cây tre trăm đốt) và "Ông đứng như bụt hiện" (gợi nhớ hình ảnh ông Bụt trong cổ tích).</p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            `
                                }
                            ]
                        },
                        "quiz": {
                            "setting": { "pick": 5 },
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
                                        "content": `
                                <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl mb-8">
                                    <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                        <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                        <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                        <h1 class="text-3xl md:text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                            <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                            Xuồng ba lá quê tôi
                                        </h1>
                                        <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                            <p class="mb-4 first-letter:text-5xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
                                                Gọi là xuồng ba lá vì xuồng được ghép bởi ba tấm ván: hai tấm ván be và một tấm ván
                                                đáy. Để xuồng được vững chắc, người ta dùng những chiếc "cong" đóng vào bên trong
                                                lòng xuồng, tạo thành bộ khung hình xương cá.
                                            </p>
                                            <p class="mb-4">
                                                Xuồng ba lá là phương tiện di chuyển gắn liền với miền sông nước quê tôi. Tôi vẫn
                                                nhớ những sáng nội chèo xuồng mang cho tôi mấy cái bánh lá dừa, giỏ cua đồng mà nội
                                                vừa bắt được. Nhớ những chiều chị tôi chèo xuồng dọc triền sông, bẻ bông điên điển
                                                đầy rổ mang về cho má nấu canh chua. Những chuyến xuồng xuôi ngược đã in đậm trong
                                                tiềm thức mỗi người dân Nam Bộ.
                                            </p>
                                            <p class="mb-4">
                                                Từ độ cha ông đi mở cõi, xuồng là "đôi chân của người dân Nam Bộ". Những năm tháng
                                                quê hương bị bom cày, đạn xới, xuồng cùng nhân dân bám trụ, giữ xóm, giữ làng. Xuồng
                                                chở lương thực tiếp tế cho bộ đội. Xuồng đưa du kích qua sông, len sâu vào khu căn
                                                cứ kháng chiến…
                                            </p>
                                            <p class="mb-4">
                                                Đất nước thanh bình, xuồng ba lá lại trở về cuộc sống đời thường. Xuồng ngược xuôi
                                                miền chợ nổi. Xuồng lướt nhanh trên cánh đồng rì rào sóng lúa. Xuồng rộn ràng những
                                                đêm giăng câu, thả lưới. Và mỗi sớm mai, trên nhánh sông quê, những chiếc xuồng ba
                                                lá theo dòng nước toả đi, chở đầy ước mơ, khát vọng của tình đất, tình người phương
                                                Nam.
                                            </p>
                                            <p class="text-right italic text-sm text-gray-400 mt-8">(Theo Nguyễn Chí Ngoan)</p>
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
                                                    Chiếc xuồng là người bạn thân thiết của người dân Nam Bộ. Nó gắn bó với cuộc
                                                    sống chiến đấu và lao động sản xuất của người dân nơi đây, chở nặng tình đất,
                                                    tình người phương Nam.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="glass-card rounded-[40px] p-6 shadow-xl border-amber-100/50">
                                    <div class="mb-6 -mt-2 text-center">
                                        <img src="hinh_anh/xuongbala.png" alt="Xuồng ba lá" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500 max-w-[240px] mx-auto">
                                    </div>
                                    <div class="flex items-center space-x-4 mb-8">
                                        <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                            <span class="text-white font-black text-xl">?</span>
                                        </div>
                                        <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                    </div>
                                    <div class="space-y-4">
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>1. Tác giả đã giới thiệu thế nào về xuồng ba lá?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Tác giả giới thiệu về tên gọi của xuồng ba lá và giải thích vì sao vật dụng này có tên gọi như vậy: gọi là xuồng ba lá vì xuồng được ghép bởi ba tấm ván (hai tấm ván be và một tấm ván đáy). Người ta dùng những chiếc "cong" đóng vào bên trong lòng xuồng, tạo thành bộ khung hình xương cá.</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>2. Xuồng ba lá gợi nhớ những kỉ niệm nào của tác giả với người thân?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Xuồng ba lá gợi nhớ kỉ niệm của tác giả với bà nội (những sáng nội chèo xuồng mang cho bánh lá dừa, giỏ cua đồng) và với chị (những chiều chị chèo xuồng dọc triền sông, bẻ bông điên điển mang về cho má nấu canh chua).</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>3. Từ xưa, chiếc xuồng đã gắn bó thế nào với người dân vùng sông nước?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">• Từ thuở cha ông đi mở cõi: xuồng đã là "đôi chân của người dân Nam Bộ".<br>• Trong những năm tháng chiến tranh: xuồng cùng người dân bám trụ, giữ xóm làng, chở lương thực tiếp tế cho bộ đội, đưa du kích qua sông.</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>4. Hình ảnh xuồng ba lá hiện ra như thế nào trong cuộc sống thanh bình hiện nay?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Đất nước thanh bình, xuồng ba lá tiếp tục gắn bó với sinh hoạt hằng ngày và lao động sản xuất: ngược xuôi miền chợ nổi, lướt trên cánh đồng lúa, rộn ràng những đêm giăng câu thả lưới.</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>5. Bài đọc giúp em hiểu thêm điều gì về cảnh vật và con người phương Nam?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Bài đọc giúp em hiểu thêm về cảnh vật phương Nam đẹp và bình yên; con người phương Nam chăm chỉ, tình cảm, gắn bó, có tình có nghĩa cùng chung sống với nhau.</p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            `
                                    }
                                ]
                            },
                            "quiz": {
                                "setting": { "pick": 5 },
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
                                            "content": `
                                <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl mb-8">
                                    <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                        <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                        <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                        <h1 class="text-3xl md:text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                            <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                            Về thăm Đất Mũi
                                        </h1>
                                        <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                            <p class="mb-6">
                                                Về đây nghe đất thở<br>
                                                Phập phồng trước bình minh<br>
                                                Về đây trông đước chạy<br>
                                                Những bước chân ngập sình.
                                            </p>
                                            <p class="mb-6">
                                                Gặp ngọn gió châu thổ<br>
                                                Đang mở hội trên đồng<br>
                                                Ca bài ca mở cõi<br>
                                                Của bao đời cha ông.
                                            </p>
                                            <p class="mb-6">
                                                Ngút ngàn rừng mắm, đước<br>
                                                Xanh đến tận vô cùng<br>
                                                Phù sa như dòng sữa<br>
                                                Nuôi đất rừng Năm Căn.
                                            </p>
                                            <p class="mb-6">
                                                Rễ mắm thì ăn lên<br>
                                                Rễ đước thì cắm xuống<br>
                                                Bền bỉ suốt ngày đêm<br>
                                                Trong tình yêu của đất.
                                            </p>
                                            <p class="mb-6">
                                                Nơi đây biển gặp rừng<br>
                                                Đất và trời gắn lại<br>
                                                Cho bãi bồi vươn xa<br>
                                                Đất nước mình lớn mãi.
                                            </p>
                                            <p class="mb-6">
                                                Lần đầu về Đất Mũi<br>
                                                Như về với nhà mình<br>
                                                Nơi địa đầu Tổ quốc<br>
                                                Rạng ngời ánh bình minh!
                                            </p>
                                            <p class="text-right italic text-sm text-gray-400 mt-8">(Hoài Anh)</p>
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
                                                    Bài thơ ca ngợi vẻ đẹp thiên nhiên hùng vĩ và độc đáo (cây cối, đất, trời, rừng,
                                                    biển...) của Đất Mũi Cà Mau - vùng đất thiêng liêng nơi cực Nam của Tổ quốc. Qua
                                                    đó thể hiện tình yêu, niềm tự hào và sự gắn bó của tác giả đối với mảnh đất này.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="glass-card rounded-[40px] p-6 shadow-xl border-amber-100/50">
                                    <div class="mb-6 -mt-2 text-center">
                                        <img src="hinh_anh/datmui.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500 max-w-[240px] mx-auto">
                                    </div>
                                    <div class="flex items-center space-x-4 mb-8">
                                        <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                            <span class="text-white font-black text-xl">?</span>
                                        </div>
                                        <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                    </div>
                                    <div class="space-y-4">
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>1. Tìm những hình ảnh cho thấy vẻ đẹp độc đáo của cây cối ở Đất Mũi.</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Cây cối được miêu tả mang đặc trưng của vùng Đất Mũi sình lầy: cây mắm, cây đước mọc thành rừng ngút ngàn, xanh tận vô cùng. Đặc biệt là bộ rễ: "rễ mắm thì ăn lên, rễ đước thì cắm xuống", bền bỉ bám sâu vào đất ngập sình.</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>2. Những hình ảnh thiên nhiên ở Đất Mũi (gió, biển, đất trời,...) được miêu tả như thế nào?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Thiên nhiên ở Đất Mũi rất độc đáo và sống động:<br>• Đất: biết "thở", "phập phồng".<br>• Gió: gió châu thổ đang "mở hội" trên đồng, ca bài ca mở cổi.<br>• Biển và rừng: gặp nhau ("biển gặp rừng").<br>• Đất và trời: gắn lại, khiến bãi bồi vươn xa.</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>3. Hai dòng thơ "Nơi địa đầu Tổ quốc / Rạng ngời ánh bình minh" gợi cho em suy nghĩ gì về Đất Mũi?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Hai dòng thơ ca ngợi vẻ đẹp rạng rỡ của Đất Mũi. Đồng thời thể hiện niềm tin của nhà thơ vào sự phát triển tốt đẹp, tươi sáng của mảnh đất nơi địa đầu thiêng liêng của Tổ quốc.</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>4. Theo em, vì sao "lần đầu về Đất Mũi" tác giả lại có cảm giác "như về với nhà mình"?</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">Tác giả có cảm giác như vậy vì thấy Đất Mũi vô cùng thân thương, gần gũi và gắn bó; vì tác giả rất yêu cảnh vật thiên nhiên nơi đây và thấy bóng dáng quê hương chung của dân tộc mình ở đó.</p>
                                            </div>
                                        </details>
                                        <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                            <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                <span>5. Dựa vào bài đọc, em hãy giới thiệu Đất Mũi Cà Mau với bạn bè.</span>
                                                <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                            </summary>
                                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                <p class="text-sm font-medium">• Vị trí: Đất Mũi là mảnh đất nhô ra ở điểm cực Nam trên đất liền của Tổ quốc Việt Nam (thuộc huyện Ngọc Hiển, tỉnh Cà Mau).<br>• Vẻ đẹp tự nhiên: Có hệ sinh thái rừng ngập mặn độc đáo với cây mắm, cây đước mọc thành rừng (rễ mắm ăn lên, rễ đước cắm xuống). Đất đai là đất phù sa màu mỡ luôn được bồi đắp lấn ra biển ("đất nước mình lớn mãi").</p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            `
                                        }
                                    ]
                                },
                                "quiz": {
                                    "setting": { "pick": 5 },
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
                            },
                            "281-nghin-nam-van-hien": {
                                "title": "Nghìn năm văn hiến",
                                "week": 28,
                                "subject": "Đọc",
                                "theme": "Nhớ nguồn",
                                "audio": "am_thanh/nghinnamvanhien.mp3",
                                "tabs": {
                                    "lesson": {
                                        "title": "Bài học",
                                        "blocks": [
                                            { "type": "header", "text": "Nghìn năm văn hiến" },
                                            {
                                                "type": "html",
                                                "content": `
                            <div class="flex flex-col lg:flex-row gap-6">
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
                                                    Đến thăm Văn Miếu – Quốc Tử Giám ở Thủ đô Hà Nội, ngôi trường được coi là trường đại
                                                    học đầu tiên của Việt Nam, khách nước ngoài không khỏi ngạc nhiên khi biết rằng từ
                                                    năm 1075, nước ta đã mở khoa thi tiến sĩ. Ngót 10 thế kỉ, tính từ khoa thi năm 1075
                                                    đến khoa thi cuối cùng vào năm 1919, các triều vua Việt Nam đã tổ chức được 185 khoa
                                                    thi, lấy đỗ gần 3000 tiến sĩ, cụ thể như sau:
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
                                                            <tr class="bg-white hover:bg-gray-50">
                                                                <td class="px-6 py-3 font-bold text-gray-900">Lý</td>
                                                                <td class="px-6 py-3 text-center">6</td>
                                                                <td class="px-6 py-3 text-center">11</td>
                                                                <td class="px-6 py-3 text-center">0</td>
                                                            </tr>
                                                            <tr class="bg-gray-50/30 hover:bg-gray-50">
                                                                <td class="px-6 py-3 font-bold text-gray-900">Trần</td>
                                                                <td class="px-6 py-3 text-center">14</td>
                                                                <td class="px-6 py-3 text-center">51</td>
                                                                <td class="px-6 py-3 text-center">9</td>
                                                            </tr>
                                                            <tr class="bg-white hover:bg-gray-50">
                                                                <td class="px-6 py-3 font-bold text-gray-900">Hồ</td>
                                                                <td class="px-6 py-3 text-center">2</td>
                                                                <td class="px-6 py-3 text-center">12</td>
                                                                <td class="px-6 py-3 text-center">0</td>
                                                            </tr>
                                                            <tr class="bg-gray-50/30 hover:bg-gray-50">
                                                                <td class="px-6 py-3 font-bold text-gray-900">Lê</td>
                                                                <td class="px-6 py-3 text-center">104</td>
                                                                <td class="px-6 py-3 text-center">1780</td>
                                                                <td class="px-6 py-3 text-center">27</td>
                                                            </tr>
                                                            <tr class="bg-white hover:bg-gray-50">
                                                                <td class="px-6 py-3 font-bold text-gray-900">Mạc</td>
                                                                <td class="px-6 py-3 text-center">21</td>
                                                                <td class="px-6 py-3 text-center">484</td>
                                                                <td class="px-6 py-3 text-center">11</td>
                                                            </tr>
                                                            <tr class="bg-gray-50/30 hover:bg-gray-50">
                                                                <td class="px-6 py-3 font-bold text-gray-900">Nguyễn</td>
                                                                <td class="px-6 py-3 text-center">38</td>
                                                                <td class="px-6 py-3 text-center">558</td>
                                                                <td class="px-6 py-3 text-center">0</td>
                                                            </tr>
                                                            <tr class="bg-blue-100/50 font-black text-blue-900">
                                                                <td class="px-6 py-3">Tổng cộng</td>
                                                                <td class="px-6 py-3 text-center">185</td>
                                                                <td class="px-6 py-3 text-center">2896</td>
                                                                <td class="px-6 py-3 text-center">47</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <p>
                                                    Ngày nay, khách vào thăm Văn Miếu – Quốc Tử Giám còn thấy bên giếng Thiền Quang,
                                                    dưới những hàng muỗm già cổ kính, 82 tấm bia khắc tên tuổi 1306 vị tiến sĩ từ khoa
                                                    thi năm 1442 đến khoa thi năm 1779 như chứng tích về một nền văn hiến lâu đời.
                                                </p>
                                                <p class="text-right italic text-sm text-gray-400 mt-8">(Theo Nguyễn Hoàng)</p>
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
                                                        Việt Nam có truyền thống khoa cử lâu đời. Văn Miếu - Quốc Tử Giám là một chứng
                                                        tích hùng hồn cho nền văn hiến ngàn năm của dân tộc ta. Chúng ta cần tự hào và
                                                        có trách nhiệm giữ gìn, phát huy truyền thống hiếu học của cha ông.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <div class="mb-6 -mt-2">
                                            <img src="hinh_anh/nghinnamvanhien.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                                        </div>

                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                                <span class="text-white font-black text-xl">?</span>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div>

                                        <div class="space-y-4">
                                            <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                    <span>1. Vị vua nào đã cho xây dựng Văn Miếu Thăng Long? Công trình đó được xây dựng vào năm nào?</span>
                                                    <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                    <p class="text-sm font-medium">Vua Lý Thánh Tông là người đã cho xây dựng Văn Miếu Thăng Long. Công trình đó được xây dựng vào năm 1070.</p>
                                                </div>
                                            </details>
                                            
                                            <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                    <span>2. Ở Văn Miếu Thăng Long, vua còn cho xây Quốc Tử Giám để làm gì?</span>
                                                    <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                    <p class="text-sm font-medium">Vua cho xây Quốc Tử Giám để làm nơi dạy học cho các hoàng tử và con em quý tộc. Về sau học trò giỏi là con em dân thường cũng được học ở đây.</p>
                                                </div>
                                            </details>

                                            <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                    <span>3. Bảng thống kê cho biết những thông tin gì về các khoa thi từ năm 1075 đến năm 1919?</span>
                                                    <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                    <p class="text-sm font-medium">
                                                        • Bảng thống kê cho biết: tên các triều đại có tổ chức khoa thi, số lượng khoa thi, số lượng tiến sĩ và số lượng trạng nguyên của mỗi triều đại.<br>
                                                        • Triều đại Lê tổ chức nhiều khoa thi nhất (104 khoa) và có nhiều tiến sĩ nhất (1780 tiến sĩ).
                                                    </p>
                                                </div>
                                            </details>

                                            <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                    <span>4. Tìm những chi tiết trong bài cho biết ông cha ta luôn coi trọng việc đào tạo nhân tài.</span>
                                                    <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                    <p class="text-sm font-medium">
                                                        • Sau khi xây Văn Miếu, vua cho xây Quốc Tử Giám làm chỗ dạy họt cho hoàng tử, con em quý tộc và cả dân thường học giỏi.<br>
                                                        • Mở khoa thi tiến sĩ từ rất sớm (năm 1075).<br>
                                                        • Tổ chức đều đặn các khoa thi suốt ngót 10 thế kỉ (185 khoa thi).<br>
                                                        • Cho dựng bia đá khắc tên tuổi các vị tiến sĩ để lưu danh muôn đời.
                                                    </p>
                                                </div>
                                            </details>
                                            
                                            <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                    <span>5. Bài đọc giúp em hiểu điều gì về truyền thống khoa cử của Việt Nam?</span>
                                                    <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                    <p class="text-sm font-medium">Bài đọc cho thấy Việt Nam có truyền thống khoa cử lâu đời và nền văn hiến rực rỡ. Việc lựa chọn người tài được tổ chức bài bản qua thi cử. Không chỉ con vua quan mà cả con em dân thường nếu học giỏi cũng được trọng dụng.</p>
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
                                        "setting": { "pick": 5 },
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
                                "theme": "Nhớ nguồn",
                                "audio": "am_thanh/282-nguoi-thay-cua-muon-doi.mp3",
                                "tabs": {
                                    "lesson": {
                                        "title": "Bài học",
                                        "blocks": [
                                            { "type": "header", "text": "Người thầy của muôn đời" },
                                            {
                                                "type": "html",
                                                "content": `
                            <div class="flex flex-col lg:flex-row gap-6">
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
                                                <p class="first-letter:text-5xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
                                                    Chu Văn An là một nhà giáo nổi tiếng đời Trần. Cụ đỗ cao nhưng không làm quan mà mở
                                                    trường dạy học ở quê nhà nhằm truyền bá đạo lí và đào tạo nhân tài cho đất nước.
                                                    Trường của cụ rất đông học trò, có nhiều người trở thành những nhân vật nổi tiếng.
                                                </p>
                                                <p class="mb-4">
                                                    Năm ấy, đến ngày mừng thọ cụ giáo Chu tròn sáu mươi tuổi, từ sáng sớm, các môn sinh
                                                    đã tề tựu trước sân nhà cụ. Cụ Chu đội khăn ngay ngắn, mặc áo dài thâm ngồi trên
                                                    sập. Mấy học trò cũ từ xa về dâng biếu thầy những cuốn sách quý do chính họ sưu tầm
                                                    và chép lại. Cụ hỏi thăm công việc của từng người, bảo ban các học trò nhỏ, rồi đột
                                                    nhiên nói:
                                                </p>
                                                <p class="mb-4">
                                                    – Thầy cảm ơn các anh. Bây giờ, thấy muốn mời tất cả các anh theo thầy tới thăm một
                                                    người mà thấy mang ơn sâu nặng.
                                                </p>
                                                <p class="mb-4">
                                                    Các môn sinh đồng thanh dạ ran. Thế là thầy đi trước, trò theo sau. Các anh có tuổi
                                                    đi ngay sau thầy, người ít tuổi hơn nhường bước, mấy chú tóc để trái đào đi sau
                                                    cùng. Cụ dẫn học trò đi về cuối làng, đến một ngôi nhà tranh đơn sơ nhưng sáng sủa,
                                                    ấm cúng. Ở hiên trước, một cụ già trên tám mươi tuổi, râu tóc bạc phơ đang ngồi sưởi
                                                    nắng. Cụ giáo Chu bước vào sân, chắp tay cung kính vái và nói to:
                                                </p>
                                                <p class="mb-4">
                                                    – Lạy thầy! Hôm nay con đem tất cả môn sinh đến tạ ơn thầy.
                                                </p>
                                                <p class="mb-4">
                                                    Cụ già tóc bạc ngước lên, nghiêng đầu nghe. Cụ đã nặng tai. Thầy giáo Chu nói lại
                                                    thật to câu nói vừa rồi một lần nữa. Thì ra đây là cụ đồ xưa kia đã dạy vỡ lòng cho
                                                    cụ giáo Chu.
                                                </p>
                                                <p class="mb-4">
                                                    Tiếp sau cụ giáo Chu, các môn sinh lần lượt theo lứa tuổi vái tạ cụ đồ già. Ngày
                                                    mừng thọ thầy Chu năm ấy, họ được thêm một bài học thấm thía về nghĩa thầy trò.
                                                </p>
                                                <p class="text-right italic text-sm text-gray-400 mt-8">(Theo Hà Ân)</p>
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
                                                        Bài văn ca ngợi thầy giáo Chu Văn An – một nhà giáo tài cao, đức trọng, một tấm
                                                        gương sáng ngời về đạo đức tôn sư trọng đạo. Ông không chỉ dạy chữ, dạy người mà
                                                        còn dạy cho học trò bài học sâu sắc về lòng biết ơn đối với người thầy.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <div class="mb-6 -mt-2">
                                            <img src="hinh_anh/nguoithaycuamuondoi.png" alt="Minh họa" class="w-full h-auto rounded-3xl object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                                        </div>

                                        <div class="flex items-center space-x-4 mb-8">
                                            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                                                <span class="text-white font-black text-xl">?</span>
                                            </div>
                                            <h2 class="text-2xl font-black text-gray-800 tracking-tight">Tìm hiểu bài</h2>
                                        </div>

                                        <div class="space-y-4">
                                            <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                    <span>1. Đoạn mở đầu bài đọc giới thiệu những gì về thầy giáo Chu Văn An?</span>
                                                    <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                    <p class="text-sm font-medium">Chu Văn An là một nhà giáo nổi tiếng đời Trần. Cụ đỗ cao nhưng không làm quan mà mở trường dạy học ở quê nhằm truyền bá đạo lí và đào tạo nhân tài cho đất nước. Trường của cụ rất đông học trò và nhiều người đã trở thành những nhân vật nổi tiếng.</p>
                                                </div>
                                            </details>
                                            
                                            <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                    <span>2. Tìm những chi tiết cho thấy các môn sinh rất kính trọng cụ giáo Chu.</span>
                                                    <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                    <p class="text-sm font-medium">
                                                        - Ngay từ sáng sớm, các môn sinh đã tề tựu trước sân nhà cụ giáo Chu để mừng thọ thầy.<br>
                                                        - Họ dâng biếu cụ những cuốn sách quý do chính họ sưu tầm và chép lại.<br>
                                                        - Họ "dạ ran" khi cụ giáo Chu mời họ cùng tới thăm một người mà cụ mang ơn sâu nặng; họ kính cẩn đi theo sau cụ.
                                                    </p>
                                                </div>
                                            </details>

                                            <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                    <span>3. Hình ảnh cụ giáo Chu dẫn môn sinh tới thăm người thầy dạy vỡ lòng nói lên điều gì?</span>
                                                    <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                    <p class="text-sm font-medium">Hình ảnh này nói lên cụ Chu cũng là người rất tôn sư trọng đạo. Giống như những môn sinh đến thăm mình, cụ Chu cũng muốn đến thăm người thầy của chính mình. Cụ hiểu để có được thành công và dạy dỗ được nhiều người tài là nhờ người thầy đã dạy cho cụ ngày xưa. Cụ luôn biết ơn, ghi nhớ và mong muốn các môn sinh của mình cũng biết và tôn trọng người thầy vỡ lòng của cụ.</p>
                                                </div>
                                            </details>

                                            <details class="bg-white/50 rounded-[24px] border border-white shadow-sm transition-all hover:shadow-md overflow-hidden group">
                                                <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm outline-none">
                                                    <span>4. Nội dung chính của bài đọc là gì?</span>
                                                    <span class="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                                                </summary>
                                                <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30">
                                                    <p class="text-sm font-medium">Chu Văn An là một người thầy mẫu mực của nhiều thế hệ học trò. Ông đã dạy học trò biết trân trọng và nhớ ơn những người đã dạy mình. Vì thế, ông đã được các thế hệ học trò yêu mến, kính trọng và là tấm gương để các thế hệ học trò noi theo. Ông thực sự là người thầy của muôn đời.</p>
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
                                        "setting": { "pick": 5 },
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
                                "audio": "am_thanh/danh-y-tue-tinh.mp3",
                                "tabs": {
                                    "lesson": {
                                        "title": "Bài học",
                                        "blocks": [
                                            { "type": "header", "text": "Danh y Tuệ Tĩnh" },
                                            {
                                                "type": "html",
                                                "content": `
                            <div class="flex flex-col lg:flex-row gap-6">
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                                Danh y Tuệ Tĩnh
                                            </h1>
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                                <p>Nội dung đang cập nhật...</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <h2 class="text-2xl font-black text-gray-800 tracking-tight mb-4">Tìm hiểu bài</h2>
                                        <p>Nội dung câu hỏi đang cập nhật...</p>
                                    </div>
                                </aside>
                            </div>
                        `
                                            }
                                        ]
                                    },
                                    "quiz": {
                                        "setting": { "pick": 5 },
                                        "questions": [
                                            { "q": "Tuệ Tĩnh tên thật là gì?", "a": ["Nguyễn Bá Tĩnh", "Nguyễn Du", "Lê Lợi", "Trần Hưng Đạo"], "c": 0 },
                                            { "q": "Ông quê ở đâu?", "a": ["Tỉnh Hải Dương", "Hà Nội", "Huế", "Nam Định"], "c": 0 },
                                            { "q": "Ông được coi là ông tổ của ngành nào?", "a": ["Thuốc Nam", "Thuốc Bắc", "Thuốc Tây", "Châm cứu"], "c": 0 },
                                            { "q": "Câu nói nổi tiếng của ông là gì?", "a": ["Nam dược trị Nam nhân", "Lương y như từ mẫu", "Thầy thuốc như mẹ hiền", "Vì nước quên thân"], "c": 0 },
                                            { "q": "Ngoài làm thuốc, ông còn là gì?", "a": ["Nhà sư", "Nhà giáo", "Nhà thơ", "Nhà văn"], "c": 0 }
                                        ]
                                    }
                                }
                            },
                            "292-cu-do-chieu": {
                                "title": "Cụ Đồ Chiểu",
                                "week": 29,
                                "subject": "Đọc",
                                "theme": "Tiếp bước cha ông",
                                "audio": "am_thanh/cu-do-chieu.mp3",
                                "tabs": {
                                    "lesson": {
                                        "title": "Bài học",
                                        "blocks": [
                                            { "type": "header", "text": "Cụ Đồ Chiểu" },
                                            {
                                                "type": "html",
                                                "content": `
                            <div class="flex flex-col lg:flex-row gap-6">
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                                Cụ Đồ Chiểu
                                            </h1>
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                                <p>Nội dung đang cập nhật...</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <h2 class="text-2xl font-black text-gray-800 tracking-tight mb-4">Tìm hiểu bài</h2>
                                        <p>Nội dung câu hỏi đang cập nhật...</p>
                                    </div>
                                </aside>
                            </div>
                        `
                                            }
                                        ]
                                    },
                                    "quiz": {
                                        "setting": { "pick": 5 },
                                        "questions": [
                                            { "q": "Nguyễn Đình Chiểu sinh ra ở đâu?", "a": ["Hà Nội", "Gia Định (TP. Hồ Chí Minh)", "Huế", "Cần Thơ"], "c": 1 },
                                            { "q": "Biến cố nào khiến Nguyễn Đình Chiểu phải bỏ thi về Nam vào nam 1848?", "a": ["Ông bị ốm nặng", "Ông hết tiền", "Mẹ ông mất", "Chiến tranh nổ ra"], "c": 2 },
                                            { "q": "Điều bất hạnh xảy ra với ông trên đường về chịu tang mẹ là gì?", "a": ["Bị mất hành lý", "Bị mù cả hai mắt", "Bị lạc đường", "Bị giặc bắt"], "c": 1 },
                                            { "q": "Thái độ của ông trước thử thách số phận?", "a": ["Buông xuôi", "Sống ẩn dật", "Không gục ngã, kiên cường vươn lên giúp đời", "Than khóc"], "c": 2 },
                                            { "q": "Sau khi bị mù, ông đã làm gì?", "a": ["Làm ruộng", "Mở trường dạy học và làm thuốc", "Đi tu", "Làm quan"], "c": 1 }
                                        ]
                                    }
                                }
                            },
                            "301-tran-dai-nghia": {
                                "title": "Anh hùng Lao động Trần Đại Nghĩa",
                                "week": 30,
                                "subject": "Đọc",
                                "theme": "Tiếp bước cha ông",
                                "audio": "am_thanh/anh-hung-lao-dong-tran-dai-nghia.mp3",
                                "tabs": {
                                    "lesson": {
                                        "title": "Bài học",
                                        "blocks": [
                                            { "type": "header", "text": "Anh hùng Lao động Trần Đại Nghĩa" },
                                            {
                                                "type": "html",
                                                "content": `
                            <div class="flex flex-col lg:flex-row gap-6">
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
                                                <p>
                                                    Anh hùng Lao động Trần Đại Nghĩa tên khai sinh là Phạm Quang Lễ, quê ở tỉnh Vĩnh
                                                    Long. Sau khi học xong bậc trung học ở Sài Gòn, năm 1935, ông được cấp học bổng sang
                                                    Pháp học đại học. Ông đã theo học các ngành kĩ sư cầu cống, kĩ sư điện và kĩ sư hàng
                                                    không. Ngoài ra, ông còn miệt mài nghiên cứu kĩ thuật chế tạo vũ khí.
                                                </p>
                                                <p>
                                                    Năm 1946, nghe theo tiếng gọi thiêng liêng của Tổ quốc, Phạm Quang Lễ đã rời bỏ cuộc
                                                    sống đầy đủ tiện nghi ở nước ngoài, theo Bác Hồ về nước. Ông được Bác đặt tên mới là
                                                    Trần Đại Nghĩa và giao nhiệm vụ nghiên cứu chế tạo vũ khí phục vụ cuộc kháng chiến
                                                    chống thực dân Pháp. Ông đã cùng các đồng nghiệp chế tạo thành công những loại vũ
                                                    khí có sức công phá lớn như súng ba-dô-ca, súng không giật, bom bay để tiêu diệt xe
                                                    tăng và lô cốt của giặc. Bên cạnh những cống hiến xuất sắc cho sự nghiệp quốc phòng,
                                                    Trần Đại Nghĩa còn có công lớn trong việc xây dựng nền khoa học trẻ tuổi của nước
                                                    nhà.
                                                </p>
                                                <p>
                                                    Những cống hiến của Giáo sư Trần Đại Nghĩa được đánh giá cao. Năm 1948, ông được
                                                    phong quân hàm Thiếu tướng. Năm 1952, ông được tuyên dương Anh hùng Lao động. Ông
                                                    còn được Nhà nước tặng Giải thưởng Hồ Chí Minh và nhiều huân chương cao quý.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <h2 class="text-2xl font-black text-gray-800 tracking-tight mb-4">Tìm hiểu bài</h2>
                                        <p>Nội dung câu hỏi đang cập nhật...</p>
                                    </div>
                                </aside>
                            </div>
                        `
                                            }
                                        ]
                                    },
                                    "quiz": {
                                        "setting": { "pick": 5 },
                                        "questions": [
                                            { "q": "Tên thật của Anh hùng Lao động Trần Đại Nghĩa là gì?", "a": ["Trần Văn Giàu", "Phạm Quang Lễ", "Tôn Thất Tùng", "Đặng Văn Ngữ"], "c": 1 },
                                            { "q": "Ông theo Bác Hồ về nước vào năm nào?", "a": ["1945", "1946", "1954", "1975"], "c": 1 },
                                            { "q": "Trước khi về nước, cuộc sống của ông ở nước ngoài như thế nào?", "a": ["Rất khó khăn, thiếu thốn", "Bình thường như bao người khác", "Đầy đủ tiện nghi", "Bị quản thúc"], "c": 2 },
                                            { "q": "Động lực nào khiến ông từ bỏ tất cả để về nước?", "a": ["Muốn tìm cơ hội làm giàu", "Lòng yêu nước và mong muốn cống hiến cho sự nghiệp giải phóng dân tộc", "Bị trục xuất khỏi nước ngoài", "Muốn đi du lịch"], "c": 1 },
                                            { "q": "Ông đã cùng đồng nghiệp nghiên cứu và chế tạo thành công loại vũ khí nào dưới đây?", "a": ["Xe tăng", "Máy bay chiến đấu", "Súng ba-dô-ca", "Tàu ngầm"], "c": 2 },
                                            { "q": "Ngoài súng ba-dô-ca, loại súng nào khác được nhắc đến trong bài?", "a": ["Súng lục", "Súng không giật", "Súng trường", "Súng kíp"], "c": 1 },
                                            { "q": "Loại vũ khí nào do ông chế tạo có tên là 'bom bay'?", "a": ["Dùng để thả từ máy bay", "Là một trong những loại vũ khí có sức công phá lớn ông chế tạo", "Dùng để phá cầu cống", "Là tên gọi khác của lựu đạn"], "c": 1 },
                                            { "q": "Các loại vũ khí ông chế tạo dùng để tiêu diệt mục tiêu nào của giặc?", "a": ["Lính bộ binh", "Xe tăng và lô cốt", "Tàu chiến", "Máy bay"], "c": 1 },
                                            { "q": "Ngoài lĩnh vực quân sự, ông còn có công lớn trong việc xây dựng nền tảng nào?", "a": ["Nền văn hóa nghệ thuật", "Nền khoa học trẻ tuổi của nước nhà", "Nền kinh tế thị trường", "Nền giáo dục mầm non"], "c": 1 },
                                            { "q": "Danh hiệu cao quý nào gắn liền với tên tuổi Trần Đại Nghĩa trong bài?", "a": ["Nhà giáo Nhân dân", "Thầy thuốc Nhân dân", "Anh hùng Lao động", "Nghệ sĩ Nhân dân"], "c": 2 },
                                            { "q": "Bài đọc nhận định Trần Đại Nghĩa là một tấm gương lớn về điều gì?", "a": ["Về sự giàu có", "Về lòng yêu nước và tinh thần lao động vì đất nước", "Về khả năng ngoại ngữ", "Về sức khỏe phi thường"], "c": 1 },
                                            { "q": "Cụm từ 'cuộc sống đầy đủ tiện nghi' ở nước ngoài đối lập với điều gì khi ông về nước (theo bối cảnh lịch sử)?", "a": ["Sự gian khổ, thiếu thốn của cuộc kháng chiến trong nước", "Sự giàu có ở Việt Nam", "Cuộc sống an nhàn khi về hưu", "Sự tiện nghi hơn ở trong nước"], "c": 0 },
                                            { "q": "Việc ông chế tạo thành công vũ khí có ý nghĩa gì đối với cuộc kháng chiến?", "a": ["Giúp quân đội ta có thêm vũ khí hiện đại để chống lại kẻ thù mạnh", "Thể hiện trí tuệ của người Việt Nam", "Cả A và B đều đúng", "Chỉ để trưng bày"], "c": 2 },
                                            { "q": "Bài học mà thế hệ sau cần ghi nhớ qua tấm gương của ông là gì?", "a": ["Phải đi nước ngoài định cư", "Chỉ cần học giỏi là đủ", "Ghi nhớ công lao người đi trước và phát huy truyền thống tốt đẹp", "Phải làm việc trong ngành quân sự"], "c": 2 },
                                            { "q": "Nội dung chính của bài đọc là gì?", "a": ["Kể về quá trình đi học của Phạm Quang Lễ", "Ca ngợi tài năng, lòng yêu nước và những cống hiến to lớn của Anh hùng Lao động Trần Đại Nghĩa", "Giới thiệu cách chế tạo súng ba-dô-ca", "Miêu tả cuộc sống ở nước ngoài của ông"], "c": 1 }
                                        ]
                                    }
                                }
                            },
                            "302-bo-doi-ve-lang": {
                                "title": "Bộ đội về làng",
                                "week": 30,
                                "subject": "Đọc",
                                "theme": "Tiếp bước cha ông",
                                "audio": "am_thanh/bo-doi-ve-lang.mp3",
                                "tabs": {
                                    "lesson": {
                                        "title": "Bài học",
                                        "blocks": [
                                            { "type": "header", "text": "Bộ đội về làng" },
                                            {
                                                "type": "html",
                                                "content": `
                            <div class="flex flex-col lg:flex-row gap-6">
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
                                                    <p>Ngôi vui kể chuyện tâm tình bên nhau.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <h2 class="text-2xl font-black text-gray-800 tracking-tight mb-4">Tìm hiểu bài</h2>
                                        <p>Nội dung câu hỏi đang cập nhật...</p>
                                    </div>
                                </aside>
                            </div>
                        `
                                            }
                                        ]
                                    },
                                    "quiz": {
                                        "setting": { "pick": 5 },
                                        "questions": [
                                            { "q": "Tác giả của bài thơ 'Bộ đội về làng' là ai?", "a": ["Tố Hữu", "Chính Hữu", "Hoàng Trung Thông", "Phạm Tiến Duật"], "c": 2 },
                                            { "q": "Khi các anh bộ đội đi xa, thái độ của người dân xóm làng như thế nào?", "a": ["Lo lắng và sợ hãi", "Nhớ mãi và vẫn chờ mong", "Buồn bã và tuyệt vọng", "Thờ ơ, không quan tâm"], "c": 1 },
                                            { "q": "Các anh bộ đội trở về làng từ đâu?", "a": ["Từ thành phố lớn", "Từ miền biển xa", "Từ rừng sâu, lưng đèo, dốc núi mù che", "Từ nước ngoài"], "c": 2 },
                                            { "q": "Từ ngữ nào miêu tả không khí 'xóm nhỏ' khi bộ đội về?", "a": ["Vắng lặng", "Rộn ràng", "Ồn ào", "Hỗn loạn"], "c": 1 },
                                            { "q": "Khi thấy các anh bộ đội về, 'lớp lớp đàn em' đã có hành động gì?", "a": ["Đứng nghiêm chào", "Hớn hở theo sau", "Sợ hãi bỏ chạy", "Mang hoa ra tặng"], "c": 1 },
                                            { "q": "Hình ảnh 'Mẹ già bịn rịn áo nâu' gợi lên cảm xúc gì?", "a": ["Sự xúc động, quyến luyến và yêu thương của người mẹ", "Sự nghèo khó của người mẹ", "Sự vội vàng của người mẹ", "Sự lo âu của người mẹ"], "c": 0 },
                                            { "q": "Mẹ già coi các anh bộ đội như thế nào?", "a": ["Khách quý", "Đàn con ở rừng sâu mới về", "Những người hùng", "Những người lạ"], "c": 1 },
                                            { "q": "Cụm từ 'Dốc núi mù che' gợi tả điều gì về nơi các anh đóng quân?", "a": ["Nơi đó rất đẹp và thơ mộng", "Nơi đó xa xôi, hiểm trở và gian khổ", "Nơi đó rất đông vui", "Nơi đó gần ngay xóm làng"], "c": 1 },
                                            { "q": "Ngôi nhà đón các anh về được miêu tả ra sao?", "a": ["Nhà ngói đỏ tươi", "Nhà cao cửa rộng", "Nhà lá đơn sơ", "Biệt thự khang trang"], "c": 2 },
                                            { "q": "Hai hình ảnh 'Nồi cơm nấu dở / Bát nước chè xanh' nói lên điều gì?", "a": ["Sự thiếu thốn vật chất đến cùng cực", "Sự giản dị, mộc mạc, gần gũi trong sinh hoạt đời thường và sự tiếp đón chân tình", "Người dân chưa chuẩn bị kịp thức ăn", "Thức ăn không ngon"], "c": 1 },
                                            { "q": "Câu thơ 'Nhưng tấm lòng rộng mở' muốn nhấn mạnh điều gì?", "a": ["Người dân rất giàu có", "Tình cảm hào phóng, chân thành, bao dung của nhân dân dành cho bộ đội", "Cửa nhà luôn mở toang", "Người dân thích nói chuyện"], "c": 1 },
                                            { "q": "Bộ đội và dân làng đã làm gì khi gặp nhau bên bát nước chè xanh?", "a": ["Tổ chức liên hoan văn nghệ", "Bàn kế hoạch đánh giặc", "Ngồi vui kể chuyện tâm tình bên nhau", "Đi cày cấy giúp dân"], "c": 2 },
                                            { "q": "Từ 'xôn xao' trong câu 'Xôn xao làng tôi bé nhỏ' gợi tả điều gì?", "a": ["Tiếng gió thổi mạnh", "Tiếng súng nổ từ xa", "Tiếng nói cười, bàn tán phấn khởi, vui mừng của dân làng", "Tiếng suối chảy róc rách"], "c": 2 },
                                            { "q": "Chủ đề chính của bài thơ là gì?", "a": ["Ca ngợi vẻ đẹp của thiên nhiên miền núi", "Ca ngợi tình quân dân thắm thiết, sự gắn bó bền chặt giữa tiền tuyến và hậu phương", "Miêu tả sự vất vả của nghề nông", "Kể về chiến công oanh liệt của bộ đội"], "c": 1 },
                                            { "q": "Qua bài thơ, hình ảnh người dân quê hiện lên với phẩm chất gì?", "a": ["Giàu sang và quyền lực", "Khép kín và xa lạ", "Hiền hoà, tình cảm, dù nghèo khó nhưng giàu lòng nhân ái", "Nghiêm khắc và lạnh lùng"], "c": 2 }
                                        ]
                                    }
                                }
                            },
                            "311-ve-ngoi-nha-dang-xay": {
                                "title": "Về ngôi nhà đang xây",
                                "week": 31,
                                "subject": "Đọc",
                                "theme": "Thế giới của chúng ta",
                                "audio": "am_thanh/ve-ngoi-nha-dang-xay.mp3",
                                "tabs": {
                                    "lesson": {
                                        "title": "Bài học",
                                        "blocks": [
                                            { "type": "header", "text": "Về ngôi nhà đang xây" },
                                            {
                                                "type": "html",
                                                "content": `
                            <div class="flex flex-col lg:flex-row gap-6">
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                                Về ngôi nhà đang xây
                                            </h1>
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                                <p>Chiều đi học về<br>
                                                    Chúng em qua ngôi nhà xây dở<br>
                                                    Giàn giáo tựa cái lồng che chở<br>
                                                    Trụ bê tông nhú lên như một mầm cây<br>
                                                    Bác thợ nề ra vẻ còn huơ huơ cái bay:<br>
                                                    Tạm biệt!</p>
                                                <p>Ngôi nhà tựa vào nền trời sẫm biếc<br>
                                                    Thở ra mùi vôi vữa nồng hăng<br>
                                                    Ngôi nhà giống bài thơ sắp làm xong<br>
                                                    Là bức tranh còn nguyên màu vôi, gạch.</p>
                                                <p>Bầy chim đi ăn về<br>
                                                    Rót vào ô cửa chưa sơn vài nốt nhạc.<br>
                                                    Nắng đứng ngủ quên<br>
                                                    Trên những bức tường<br>
                                                    Làn gió nào về mang hương<br>
                                                    Ủ đầy những rãnh tường chưa trát vữa.<br>
                                                    Bao ngôi nhà đã hoàn thành<br>
                                                    Đều qua những ngày xây dở.</p>
                                                <p>Ngôi nhà như trẻ nhỏ<br>
                                                    Lớn lên với trời xanh...<br>
                                                    <span class="font-bold italic">(Đồng Xuân Lan)</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <h2 class="text-2xl font-black text-gray-800 tracking-tight mb-4">Tìm hiểu bài</h2>
                                        <p>Nội dung câu hỏi đang cập nhật...</p>
                                    </div>
                                </aside>
                            </div>
                        `
                                            }
                                        ]
                                    },
                                    "quiz": {
                                        "setting": { "pick": 5 },
                                        "questions": [
                                            { "q": "Tác giả của bài thơ \"Về ngôi nhà đang xây\" là ai?", "a": ["Trần Đăng Khoa", "Đồng Xuân Lan", "Nguyễn Khoa Điềm", "Xuân Quỳnh"], "c": 1 },
                                            { "q": "Hình ảnh \"giàn giáo\" được so sánh với vật gì?", "a": ["Cái thang khổng lồ", "Cái lồng che chở", "Rừng cây", "Bộ xương của ngôi nhà"], "c": 1 },
                                            { "q": "\"Trụ bê tông\" được ví von với hình ảnh nào đầy sức sống?", "a": ["Cây cột điện", "Ngón tay", "Mầm cây nhú lên", "Cây nấm"], "c": 2 },
                                            { "q": "Ngôi nhà đang xây dở được nhân hóa với hành động gì liên quan đến mùi hương?", "a": ["Tỏa hương thơm ngát", "Thở ra mùi vôi vữa nồng hăng", "Hít thở không khí trong lành", "Giữ mùi sơn mới"], "c": 1 },
                                            { "q": "Tác giả so sánh ngôi nhà đang xây với các tác phẩm nghệ thuật nào?", "a": ["Bản nhạc và vần thơ", "Bài thơ sắp làm xong và bức tranh còn nguyên màu vôi gạch", "Pho tượng và bức tranh", "Vở kịch và bài hát"], "c": 1 },
                                            { "q": "Biện pháp nghệ thuật nào được dùng trong câu \"Nắng đứng ngủ quên\"?", "a": ["So sánh", "Nhân hóa", "Ẩn dụ", "Điệp từ"], "c": 1 },
                                            { "q": "Bầy chim đi ăn về đã làm gì bên ô cửa?", "a": ["Làm tổ", "Đậu nghỉ ngơi", "Rót vào ô cửa vài nốt nhạc", "Tìm thức ăn"], "c": 2 },
                                            { "q": "Ở khổ thơ cuối, ngôi nhà được so sánh với hình ảnh nào?", "a": ["Người khổng lồ", "Trẻ nhỏ", "Cây cổ thụ", "Ngọn núi"], "c": 1 },
                                            { "q": "Câu thơ \"Lớn lên với trời xanh\" thể hiện điều gì?", "a": ["Ngôi nhà rất cao", "Sức sống mãnh liệt, sự vươn lên và niềm hy vọng", "Ngôi nhà được sơn màu xanh", "Bầu trời rất đẹp"], "c": 1 },
                                            { "q": "Tác dụng chính của biện pháp nhân hóa trong bài là gì?", "a": ["Làm cho ngôi nhà trở nên to lớn, vĩ đại", "Làm cho bài thơ khó hiểu hơn", "Làm cho ngôi nhà trở nên gần gũi, thân thiện, có hồn như con người", "Để miêu tả chính xác kỹ thuật xây dựng"], "c": 2 },
                                            { "q": "Hình ảnh \"Làn gió mang hương\" gợi cảm giác gì về không gian xung quanh ngôi nhà?", "a": ["Ngột ngạt, bụi bặm", "Thoáng đãng, dễ chịu và nên thơ", "Ồn ào, náo nhiệt", "Lạnh lẽo, vắng vẻ"], "c": 1 },
                                            { "q": "Vì sao nói ngôi nhà \"giống bài thơ sắp làm xong\"?", "a": ["Vì thợ xây hay làm thơ", "Vì ngôi nhà chưa hoàn thiện nhưng đã hé lộ vẻ đẹp hoàn chỉnh trong tương lai", "Vì cấu trúc ngôi nhà giống nhịp điệu bài thơ", "Cả B và C đều có ý đúng"], "c": 1 },
                                            { "q": "Nội dung chính của bài thơ là gì?", "a": ["Miêu tả sự vất vả của bác thợ nề", "Hình ảnh đẹp và sống động của ngôi nhà đang xây, thể hiện sự đổi mới của đất nước", "Kể về trò chơi của trẻ em bên công trường", "Giới thiệu quy trình xây dựng nhà"], "c": 1 },
                                            { "q": "Ý nghĩa câu \"Mỗi bạn nhỏ giống như một ngôi nhà đang xây\" là gì?", "a": ["Các bạn nhỏ cần ăn nhiều để lớn nhanh", "Các bạn nhỏ đang trong quá trình học tập, rèn luyện để dần hoàn thiện nhân cách và trí tuệ", "Các bạn nhỏ thích chơi xây nhà", "Các bạn nhỏ rất cứng cáp"], "c": 1 },
                                            { "q": "Cảm xúc của tác giả đối với ngôi nhà đang xây là gì?", "a": ["Thờ ơ, không quan tâm", "Khó chịu vì bụi bặm", "Yêu mến, thích thú và quan sát tinh tế", "Sợ hãi vì nguy hiểm"], "c": 2 }
                                        ]
                                    }
                                }
                            },
                            "312-viet-nam-que-huong-ta": {
                                "title": "Việt Nam quê hương ta",
                                "week": 31,
                                "subject": "Đọc",
                                "theme": "Thế giới của chúng ta",
                                "audio": "am_thanh/viet-nam-que-huong-ta.mp3",
                                "tabs": {
                                    "lesson": {
                                        "title": "Bài học",
                                        "blocks": [
                                            { "type": "header", "text": "Việt Nam quê hương ta" },
                                            {
                                                "type": "html",
                                                "content": `
                            <div class="flex flex-col lg:flex-row gap-6">
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                                Việt Nam quê hương ta
                                            </h1>
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                                <div class="space-y-4">
                                                    <p><span class="inline-block">Việt Nam đất nước ta ơi</span><br><span class="inline-block">Mênh mông biển lúa đâu trời đẹp hơn</span><br><span class="inline-block">Cánh cò bay lả rập rờn</span><br><span class="inline-block">Mây mờ che đỉnh Trường Sơn sớm chiều.</span></p>
                                                    <p><span class="inline-block">Quê hương biết mấy thân yêu</span><br><span class="inline-block">Bao nhiêu đời đã chịu nhiều thương đau</span><br><span class="inline-block">Mặt người vất vả in sâu</span><br><span class="inline-block">Gái trai cũng một áo nâu nhuộm bùn.</span></p>
                                                    <p><span class="inline-block">Đất nghèo nuôi những anh hùng</span><br><span class="inline-block">Chìm trong máu lửa lại vùng đứng lên</span><br><span class="inline-block">Đạp quân thù xuống đất đen</span><br><span class="inline-block">Súng gươm vứt bỏ lại hiền như xưa.</span></p>
                                                    <p><span class="inline-block">Việt Nam đất nắng chan hoà</span><br><span class="inline-block">Hoa thơm quả ngọt bốn mùa trời xanh</span><br><span class="inline-block">Mắt đen cô gái long lanh</span><br><span class="inline-block">Yêu ai yêu trọn tấm tình thuỷ chung.</span></p>
                                                    <p><span class="inline-block">Đất trăm nghề của trăm vùng</span><br><span class="inline-block">Khách phương xa tới lạ lùng bước chân</span><br><span class="inline-block">Tay người như có phép tiên</span><br><span class="inline-block">Trên tre lá cũng dệt nghìn bài thơ.</span></p>
                                                    <p class="text-right italic">(Nguyễn Đình Thi)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <h2 class="text-2xl font-black text-gray-800 tracking-tight mb-4">Tìm hiểu bài</h2>
                                        <p>Nội dung câu hỏi đang cập nhật...</p>
                                    </div>
                                </aside>
                            </div>
                        `
                                            }
                                        ]
                                    },
                                    "quiz": {
                                        "setting": { "pick": 5 },
                                        "questions": [
                                            { "q": "Bài thơ 'Việt Nam quê hương ta' được sáng tác bởi nhà thơ nào?", "a": ["Tố Hữu", "Trần Đăng Khoa", "Nguyễn Đình Thi", "Huy Cận"], "c": 2 },
                                            { "q": "Hình ảnh nào được dùng để miêu tả sự trù phú của cánh đồng lúa Việt Nam?", "a": ["Rừng vàng biển bạc", "Mênh mông biển lúa", "Cánh đồng thẳng cánh cò bay", "Lúa vàng trĩu hạt"], "c": 1 },
                                            { "q": "Dãy núi nào được nhắc đến trong câu 'Mây mờ che đỉnh... sớm chiều'?", "a": ["Hoàng Liên Sơn", "Ba Vì", "Trường Sơn", "Bạch Mã"], "c": 2 },
                                            { "q": "Hình ảnh 'Gái trai cũng một áo nâu nhuộm bùn' gợi lên phẩm chất gì của người dân Việt Nam?", "a": ["Sự giản dị và tiết kiệm", "Sự cần cù, chịu thương chịu khó, vất vả lam lũ trong lao động", "Sự mặc áo nâu", "Sự nghèo khó"], "c": 1 },
                                            { "q": "Câu thơ 'Đất nghèo nuôi những anh hùng' có ý nghĩa gì?", "a": ["Đất nước nghèo nên ai cũng phải đi đánh giặc", "Từ mảnh đất gian khó, đau thương đã sinh ra những con người quả cảm, kiên cường", "Anh hùng chỉ xuất thân từ nhà nghèo", "Đất nước không có tài nguyên"], "c": 1 },
                                            { "q": "Sau khi chiến thắng kẻ thù ('Đạp quân thù xuống đất đen'), người Việt Nam có thái độ như thế nào?", "a": ["Kiêu ngạo và hung hăng", "Tiếp tục gây chiến", "Súng gươm vứt bỏ lại hiền như xưa", "Lạnh lùng và xa cách"], "c": 2 },
                                            { "q": "Phẩm chất nào được nhắc đến trong câu 'Yêu ai yêu trọn tấm tình thủy chung'?", "a": ["Sự thông minh", "Sự dũng cảm", "Sự thủy chung, son sắt trong tình cảm", "Sự hiếu khách"], "c": 2 },
                                            { "q": "Câu thơ 'Tay người như có phép tiên' dùng biện pháp nghệ thuật gì?", "a": ["So sánh", "Nhân hóa", "Ẩn dụ", "Hoán dụ"], "c": 0 },
                                            { "q": "Hình ảnh 'Trên tre lá cũng dệt nghìn bài thơ' ca ngợi điều gì?", "a": ["Người Việt Nam rất thích làm thơ", "Sự khéo léo, tài hoa của đôi bàn tay người thợ thủ công làm ra sản phẩm đẹp như thơ", "Cây tre biết làm thơ", "Nghề dệt vải truyền thống"], "c": 1 },
                                            { "q": "Hai khổ thơ cuối muốn nhấn mạnh điều gì về đất nước và con người Việt Nam?", "a": ["Đất nước rộng lớn, người dân đông đúc", "Đất nước có nhiều tài nguyên khoáng sản", "Đất nước tươi đẹp, con người tài hoa, tình nghĩa và thủy chung", "Đất nước có nhiều lễ hội"], "c": 2 },
                                            { "q": "Cụm từ 'Mặt người vất vả in sâu' diễn tả điều gì?", "a": ["Những nỗi gian lao, vất vả của người dân đã hằn in lên dáng vẻ bề ngoài", "Khuôn mặt người dân rất nghiêm khắc", "Người dân hay lo lắng", "Người dân có khuôn mặt giống nhau"], "c": 0 },
                                            { "q": "Tác giả gọi đất nước là 'Việt Nam đất nước ta ơi' thể hiện tình cảm gì?", "a": ["Sự trang trọng, xa cách", "Sự tha thiết, gần gũi, yêu mến và tự hào", "Sự buồn bã", "Sự ngạc nhiên"], "c": 1 },
                                            { "q": " 'Mắt đen cô gái long lanh' gợi vẻ đẹp như thế nào?", "a": ["Vẻ đẹp sắc sảo", "Vẻ đẹp buồn", "Vẻ đẹp tươi sáng, tinh anh và tràn đầy sức sống", "Vẻ đẹp bí ẩn"], c: 2 },
                                            { "q": "Ý nào sau đây KHÔNG đúng khi nói về con người Việt Nam trong bài thơ?", "a": ["Cần cù trong lao động", "Anh hùng trong chiến đấu", "Khuất phục trước kẻ thù", "Hiền lành trong đời thường"], "c": 2 },
                                            { "q": "Bài thơ giúp em cảm nhận được điều gì sâu sắc nhất?", "a": ["Sự giàu có về tiền bạc của đất nước", "Niềm tự hào và tình yêu đối với vẻ đẹp của non sông và phẩm chất con người Việt Nam", "Sự khắc nghiệt của thiên nhiên", "Nỗi buồn về chiến tranh"], "c": 1 }
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
                                            { "type": "header", "text": "Bài ca Trái Đất" },
                                            {
                                                "type": "html",
                                                "content": `
                            <div class="flex flex-col lg:flex-row gap-6">
                                <section class="w-full lg:w-[70%]">
                                    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                                            <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                                Bài ca Trái Đất
                                            </h1>
                                            <div class="serif-font text-gray-800 text-lg leading-relaxed relative reading-content">
                                                <p><span class="inline-block">Trái đất này là của chúng mình</span><br>
                                                    <span class="inline-block">Quả bóng xanh bay giữa trời xanh</span><br>
                                                    <span class="inline-block">Bồ câu ơi, tiếng chim gù thương mến</span><br>
                                                    <span class="inline-block">Hải âu ơi, cánh chim vờn sóng biển</span><br>
                                                    <span class="inline-block">Cùng bay nào, cho trái đất quay!</span><br>
                                                    <span class="inline-block">Cùng bay nào, cho trái đất quay!</span>
                                                </p>

                                                <p><span class="inline-block" style="text-indent: 0; margin-left: 0;">Trái đất trẻ của bạn trẻ năm châu</span><br>
                                                    <span class="inline-block" style="text-indent: 0; margin-left: 0;">Vàng, trắng, đen... dù da khác màu</span><br>
                                                    <span class="inline-block" style="text-indent: 0; margin-left: 0;">Ta là nụ, là hoa của đất</span><br>
                                                    <span class="inline-block" style="text-indent: 0; margin-left: 0;">Gió đẫm hương thơm, nắng tô thắm sắc</span><br>
                                                    <span class="inline-block" style="text-indent: 0; margin-left: 0;">Màu hoa nào cũng quý, cũng thơm</span><br>
                                                    <span class="inline-block" style="text-indent: 0; margin-left: 0;">Màu hoa nào cũng quý, cũng thơm!</span>
                                                </p>

                                                <p><span class="inline-block" style="text-indent: 0; margin-left: 0;">Khói hình nấm là tai hoạ đấy</span><br>
                                                    <span class="inline-block" style="text-indent: 0; margin-left: 0;">Bom H, bom A không phải bạn ta</span><br>
                                                    <span class="inline-block" style="text-indent: 0; margin-left: 0;">Tiếng hát vui giữ bình yên trái đất</span><br>
                                                    <span class="inline-block" style="text-indent: 0; margin-left: 0;">Tiếng cười ran cho trái đất không già</span><br>
                                                    <span class="inline-block" style="text-indent: 0; margin-left: 0;">Hành tinh này là của chúng ta!</span><br>
                                                    <span class="inline-block" style="text-indent: 0; margin-left: 0;">Hành tinh này là của chúng ta!</span><br>
                                                    <span class="font-bold italic">(Định Hải)</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <h2 class="text-2xl font-black text-gray-800 tracking-tight mb-4">Tìm hiểu bài</h2>
                                        <div class="space-y-4">
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">1. Những hình ảnh ở khổ thơ đầu gợi lên một Trái đất như thế nào?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Các hình ảnh: quả bóng xanh bay giữa trời xanh, tiếng chim gù của chim bồ câu, cánh hải âu vờn sóng biển gợi lên một Trái đất hòa bình, yên vui và tươi đẹp.</p></div></div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">2. Khổ thơ thứ hai muốn nói lên điều gì?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Khổ thơ khẳng định Trái đất là của tất cả các bạn nhỏ trên thế giới, không phân biệt màu da. Các bạn nhỏ đều đáng quý và là những chủ nhân tương lai của hành tinh.</p></div></div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">3. Những hình ảnh nào có ý nghĩa đối lập với hoà bình?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Đó là những hình ảnh: "khói hình nấm", "bom H", "bom A". Đây là những hình ảnh tượng trưng cho chiến tranh và sự tàn phá, đối lập với sự bình yên và hạnh phúc.</p></div></div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">4. Bài thơ muốn gửi gắm thông điệp gì?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Bài thơ gửi gắm ước mơ của thiếu nhi về một thế giới hòa bình, đoàn kết và tình yêu thương, kêu gọi mọi người cùng chung tay giữ gìn và bảo vệ hành tinh xanh.</p></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        `
                                            }
                                        ]
                                    },
                                    "quiz": {
                                        "setting": { "pick": 5 },
                                        "questions": [
                                            { "q": "Bài thơ \"Bài ca Trái Đất\" do ai sáng tác?", "a": ["Trần Đăng Khoa", "Định Hải", "Tố Hữu", "Phạm Tiến Duật"], "c": 1 },
                                            { "q": "Trong khổ thơ đầu, Trái đất được so sánh với hình ảnh nào?", "a": ["Quả cam vàng", "Ngôi nhà lớn", "Quả bóng xanh bay giữa trời xanh", "Con tàu vũ trụ"], "c": 2 },
                                            { "q": "Loài chim nào được nhắc đến trong bài tượng trưng cho hòa bình với \"tiếng chim gù\"?", "a": ["Chim én", "Chim chích chòe", "Chim bồ câu", "Chim đại bàng"], "c": 2 },
                                            { "q": "Hình ảnh \"Cánh hải âu\" trong bài được miêu tả đang làm gì?", "a": ["Bay về tổ", "Vờn sóng biển", "Đậu trên bãi cát", "Bay trong bão"], "c": 1 },
                                            { "q": "Những hình ảnh ở khổ thơ đầu gợi lên một thế giới như thế nào?", "a": ["Ồn ào và náo nhiệt", "Lạnh lẽo và cô đơn", "Hòa bình, yên vui và tươi đẹp", "Hùng vĩ và dữ dội"], "c": 2 },
                                            { "q": "Câu thơ \"Hành tinh này là của chúng ta\" được lặp lại nhằm mục đích gì?", "a": ["Để bài thơ dài hơn", "Khẳng định quyền làm chủ và trách nhiệm của trẻ em đối với Trái đất", "Để khoe khoang", "Để hỏi mọi người"], "c": 1 },
                                            { "q": "Khổ thơ thứ hai muốn nói lên điều gì về vai trò của trẻ em?", "a": ["Trẻ em cần được vui chơi", "Trẻ em rất đáng yêu", "Trẻ em năm châu là những chủ nhân tương lai của thế giới", "Trẻ em thích ca hát"], "c": 2 },
                                            { "q": "Sự vật nào dưới đây có ý nghĩa \"đối lập với hòa bình\" thường được nhắc đến trong chủ đề này?", "a": ["Hoa thơm", "Nắng vàng", "Bom đạn, chiến tranh", "Tiếng chim hót"], "c": 2 },
                                            { "q": "Màu sắc chủ đạo của Trái đất được nhắc đến trong bài là màu gì?", "a": ["Màu đỏ", "Màu xanh", "Màu vàng", "Màu trắng"], "c": 1 },
                                            { "q": "Ước mơ lớn nhất của các bạn thiếu nhi trong bài thơ là gì?", "a": ["Được đi du lịch vòng quanh thế giới", "Được ăn nhiều bánh kẹo", "Một thế giới hòa bình, đoàn kết, không có chiến tranh", "Được làm phi hành gia"], "c": 2 },
                                            { "q": "Các bạn nhỏ trong bài mong muốn Trái đất tránh xa điều gì?", "a": ["Ánh nắng mặt trời", "Tiếng súng và bom đạn", "Những cơn mưa", "Những đàn chim"], "c": 1 },
                                            { "q": "Cụm từ \"Năm châu\" trong bài ý chỉ điều gì?", "a": ["Năm ngọn núi lớn", "Năm đại dương", "Toàn thể các châu lục trên thế giới", "Năm quốc gia lớn nhất"], "c": 2 },
            },
                                    "quiz": {
                                        "setting": { "pick": 5 },
                                        "questions": [
                                            { "q": "Bài thơ \"Bài ca Trái Đất\" do ai sáng tác?", "a": ["Trần Đăng Khoa", "Định Hải", "Tố Hữu", "Phạm Tiến Duật"], "c": 1 },
                                            { "q": "Trong khổ thơ đầu, Trái đất được so sánh với hình ảnh nào?", "a": ["Quả cam vàng", "Ngôi nhà lớn", "Quả bóng xanh bay giữa trời xanh", "Con tàu vũ trụ"], "c": 2 },
                                            { "q": "Loài chim nào được nhắc đến trong bài tượng trưng cho hòa bình với \"tiếng chim gù\"?", "a": ["Chim én", "Chim chích chòe", "Chim bồ câu", "Chim đại bàng"], "c": 2 },
                                            { "q": "Hình ảnh \"Cánh hải âu\" trong bài được miêu tả đang làm gì?", "a": ["Bay về tổ", "Vờn sóng biển", "Đậu trên bãi cát", "Bay trong bão"], "c": 1 },
                                            { "q": "Những hình ảnh ở khổ thơ đầu gợi lên một thế giới như thế nào?", "a": ["Ồn ào và náo nhiệt", "Lạnh lẽo và cô đơn", "Hòa bình, yên vui và tươi đẹp", "Hùng vĩ và dữ dội"], "c": 2 },
                                            { "q": "Câu thơ \"Hành tinh này là của chúng ta\" được lặp lại nhằm mục đích gì?", "a": ["Để bài thơ dài hơn", "Khẳng định quyền làm chủ và trách nhiệm của trẻ em đối với Trái đất", "Để khoe khoang", "Để hỏi mọi người"], "c": 1 },
                                            { "q": "Khổ thơ thứ hai muốn nói lên điều gì về vai trò của trẻ em?", "a": ["Trẻ em cần được vui chơi", "Trẻ em rất đáng yêu", "Trẻ em năm châu là những chủ nhân tương lai của thế giới", "Trẻ em thích ca hát"], "c": 2 },
                                            { "q": "Sự vật nào dưới đây có ý nghĩa \"đối lập với hòa bình\" thường được nhắc đến trong chủ đề này?", "a": ["Hoa thơm", "Nắng vàng", "Bom đạn, chiến tranh", "Tiếng chim hót"], "c": 2 },
                                            { "q": "Màu sắc chủ đạo của Trái đất được nhắc đến trong bài là màu gì?", "a": ["Màu đỏ", "Màu xanh", "Màu vàng", "Màu trắng"], "c": 1 },
                                            { "q": "Ước mơ lớn nhất của các bạn thiếu nhi trong bài thơ là gì?", "a": ["Được đi du lịch vòng quanh thế giới", "Được ăn nhiều bánh kẹo", "Một thế giới hòa bình, đoàn kết, không có chiến tranh", "Được làm phi hành gia"], "c": 2 },
                                            { "q": "Các bạn nhỏ trong bài mong muốn Trái đất tránh xa điều gì?", "a": ["Ánh nắng mặt trời", "Tiếng súng và bom đạn", "Những cơn mưa", "Những đàn chim"], "c": 1 },
                                            { "q": "Cụm từ \"Năm châu\" trong bài ý chỉ điều gì?", "a": ["Năm ngọn núi lớn", "Năm đại dương", "Toàn thể các châu lục trên thế giới", "Năm quốc gia lớn nhất"], "c": 2 },
                                            { "q": "Dòng nào dưới đây giải thích đúng từ \"Hành tinh\" trong ngữ cảnh bài thơ?", "a": ["Một ngôi sao sáng", "Chỉ Trái đất - nơi chúng ta đang sinh sống", "Một con tàu", "Một hòn đảo"], "c": 1 },
                                            { "q": "Bài thơ thuộc chủ điểm nào trong chương trình Tiếng Việt lớp 5?", "a": ["Cánh chim hòa bình", "Việt Nam - Tổ quốc em", "Người công dân", "Vì cuộc sống thanh bình"], "c": 0 },
                                            { "q": "Qua bài thơ, em thấy mình cần có trách nhiệm gì?", "a": ["Chỉ cần học giỏi là đủ", "Không quan tâm đến thế giới xung quanh", "Yêu quý, bảo vệ Trái đất và đoàn kết với bạn bè năm châu", "Giữ gìn vệ sinh cá nhân"], "c": 2 }
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
                                            { "type": "header", "text": "Những con hạc giấy" },
                                            {
                                                "type": "html",
                                                "content": `
                            <div class="flex flex-col lg:flex-row gap-6">
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
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <h2 class="text-2xl font-black text-gray-800 tracking-tight mb-4">Tìm hiểu bài</h2>
                                        <div class="space-y-4">
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">1. Hậu quả mà hai quả bom nguyên tử gây ra cho Nhật Bản là gì?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Hai quả bom nguyên tử đã cướp đi mạng sống của hàng trăm nghìn người. Tính đến cuối năm 1945, tổng số người chết và bị nhiễm phóng xạ đã lên đến nửa triệu người.</p></div></div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">2. Xa-đa-cô hi vọng kéo dài cuộc sống của mình bằng cách nào?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Xa-đa-cô tin vào truyền thuyết: nếu gấp đủ một nghìn con hạc giấy treo quanh phòng thì em sẽ khỏi bệnh. Vì thế, em đã lặng lẽ nén đau, miệt mài gấp hạc giấy.</p></div></div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">3. Các bạn nhỏ đã làm gì để bày tỏ ước vọng hòa bình?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Trẻ em toàn nước Nhật đã gửi hàng nghìn con hạc giấy đến cho Xa-đa-cô. Sau khi em mất, học sinh đã quyên góp xây dựng Tượng đài Hoà bình cho trẻ em để tưởng niệm các nạn nhân.</p></div></div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">4. Câu chuyện muốn nói với em điều gì?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Câu chuyện lên án tội ác chiến tranh hạt nhân, đồng thời ca ngợi khát vọng sống mãnh liệt và ước mơ hòa bình, tinh thần đoàn kết của trẻ em trên toàn thế giới.</p></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        `
                                            }
                                        ]
                                    },
                                    "quiz": {
                                        "setting": { "pick": 5 },
                                        "questions": [
                                            { "q": "Mỹ ném hai quả bom nguyên tử xuống Nhật Bản vào năm nào?", "a": ["1939", "1940", "1945", "1954"], "c": 2 },
                                            { "q": "Hai thành phố nào của Nhật Bản đã hứng chịu bom nguyên tử?", "a": ["Tô-ky-ô và Ô-sa-ka", "Hi-rô-si-ma và Na-ga-xa-ki", "Ky-ô-tô và Cô-bê", "Phư-cư-ô-ca và Na-gôi-a"], "c": 1 },
                                            { "q": "Tính đến cuối năm 1945, số người chết và nhiễm phóng xạ là bao nhiêu?", "a": ["Một trăm nghìn người", "Nửa triệu người", "Một triệu người", "Hai trăm nghìn người"], "c": 1 },
                                            { "q": "Khi bom nguyên tử ném xuống Hi-rô-si-ma, Xa-đa-cô bao nhiêu tuổi?", "a": ["10 tuổi", "5 tuổi", "2 tuổi", "12 tuổi"], "c": 2 },
                                            { "q": "Lý do sức khỏe của Xa-đa-cô bị giảm sút nhanh chóng sau 10 năm là gì?", "a": ["Do tai nạn", "Do làm việc quá sức", "Do bị nhiễm phóng xạ nguyên tử", "Do bẩm sinh"], "c": 2 },
                                            { "q": "Xa-đa-cô tin vào truyền thuyết nào để mong khỏi bệnh?", "a": ["Ăn 1000 quả táo", "Gấp đủ 1000 con hạc giấy", "Viết 1000 lá thư", "Đếm đủ 1000 ngôi sao"], "c": 1 },
                                            { "q": "Thái độ của Xa-đa-cô khi nằm viện gấp hạc như thế nào?", "a": ["Vừa gấp vừa khóc lớn", "Tức giận và tuyệt vọng", "Lặng lẽ nén đau, miệt mài gấp", "Chán nản và bỏ cuộc"], "c": 2 },
                                            { "q": "Trẻ em toàn nước Nhật đã làm gì khi biết tin về Xa-đa-cô?", "a": ["Gửi thuốc men đến cho em", " Đến bệnh viện thăm em mỗi ngày", "Tới tấp gửi hàng nghìn con hạc giấy đến cho em", "Viết thư phản đối chiến tranh"], "c": 2 },
                                            { "q": "Theo bài đọc, kết cục của Xa-đa-cô như thế nào?", "a": ["Em đã khỏi bệnh hoàn toàn", "Em vẫn không qua khỏi dù đã gấp được hơn một nghìn con hạc giấy", "Em vẫn sống nhưng sức khỏe yếu", "Em chưa kịp gấp đủ 1000 con hạc thì mất"], "c": 1 },
                                            { "q": "Sau khi Xa-đa-cô mất, học sinh thành phố Hi-rô-si-ma đã làm gì?", "a": ["Quyên góp tiền xây nhà cho em", "Quyên góp tiền xây đài tưởng niệm nạn nhân bom nguyên tử", "Trồng một rừng cây mang tên em", "Viết một cuốn sách về em"], "c": 1 },
                                            { "q": "Tượng đài Hoà bình cho trẻ em được khánh thành vào năm nào?", "a": ["Năm 1958", "Năm 1945", "Năm 1960", "Năm 1955"], "c": 0 },
                                            { "q": "Tượng đài Hoà bình cho trẻ em được đặt ở đâu?", "a": ["Tại trường học của Xa-đa-cô", "Tại bệnh viện nơi em nằm", "Tại công viên Hoà Bình ở thành phố Hi-rô-si-ma", "Tại thủ đô Tô-ky-ô"], "c": 2 },
                                            { "q": "Con hạc giấy trong câu chuyện là biểu tượng của điều gì?", "a": ["Sự giàu sang", "Sự thông minh", "Ước mơ, khát vọng sống và hòa bình", "Tình bạn đơn thuần"], "c": 2 },
                                            { "q": "Câu chuyện \"Những con hạc giấy\" muốn lên án điều gì?", "a": ["Sự nghèo đói", "Sự tàn bạo, tội ác của chiến tranh hạt nhân", "Sự ô nhiễm môi trường", "Sự lãng phí giấy"], "c": 1 },
                                            { "q": "Qua câu chuyện, em thấy trẻ em trên thế giới mong muốn điều gì nhất?", "a": ["Được đi du lịch", "Được ăn ngon mặc đẹp", "Được sống trong một thế giới hòa bình, không có chiến tranh", "Được nổi tiếng"], "c": 2 }
                                        ]
                                    }
                                }
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
                                            { "type": "header", "text": "Một người hùng thầm lặng" },
                                            {
                                                "type": "html",
                                                "content": `
                            <div class="flex flex-col lg:flex-row gap-6">
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
                                                <p>Năm 1988, một hãng truyền thông đã làm chương trình về Uyn-tơn. Khi người dẫn chương trình hỏi: "Trong số những người ngồi đây, ai đã được Uyn-tơn cứu sống?", cả hội trường đứng lên. Uyn-tơn nghẹn ngào, xúc động. Mọi người ở đó đều khóc vì nhớ ơn người đã mang lại sự sống lần thứ hai cho họ.</p>
                                                <p>Năm 2015, Uyn-tơn qua đời, hưởng thọ 106 tuổi. Người dân Tiệp Khắc đã dựng tượng ông trên sân ga thành phố Pra-ha và coi ông như một người hùng thầm lặng đáng kính.</p>
                                                <p class="text-right italic text-base">(Theo Hà Tiến)</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <h2 class="text-2xl font-black text-gray-800 tracking-tight mb-4">Tìm hiểu bài</h2>
                                        <div class="space-y-4">
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">1. Ông Uyn-tơn đã quyết định làm gì vào tháng 12 năm 1938?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Ông quyết định bay sang Tiệp Khắc để tìm cách đưa những đứa trẻ Do Thái từ Pra-ha sang Anh tị nạn trước khi chiến tranh nổ ra.</p></div></div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">2. Ông Uyn-tơn đã gặp những khó khăn gì và giải quyết ra sao?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Việc đưa trẻ đi tị nạn cần rất nhiều tiền. Ông đã cùng bạn bè đi quyên góp khắp nơi và kêu gọi các gia đình ở Anh nhận nuôi trẻ em Do Thái.</p></div></div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">3. Kết quả của hoạt động giải cứu đó như thế nào?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Từ tháng 3 đến tháng 8 năm 1939, ông tổ chức thành công 8 chuyến tàu, giải cứu được 669 đứa trẻ đưa về Luân Đôn an toàn.</p></div></div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">4. Vì sao gọi ông là "người hùng thầm lặng"?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Vì ông cứu sống hàng trăm người nhưng suốt 50 năm sau đó ông không kể với ai, ngay cả vợ mình cũng không biết cho đến khi bà tìm thấy cuốn sổ ghi chép.</p></div></div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">5. Câu chuyện muốn gửi gắm thông điệp gì?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Ca ngợi lòng dũng cảm, tình yêu thương con người và nhắc nhở chúng ta hãy luôn mở rộng tấm lòng giúp đỡ những người gặp khó khăn hoạn nạn.</p></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        `
                                            }
                                        ]
                                    },
                                    "quiz": {
                                        "setting": { "pick": 5 },
                                        "questions": [
                                            { "q": "Câu chuyện bắt đầu từ mốc thời gian nào?", "a": ["Tháng 12 năm 1945", "Tháng 12 năm 1938", "Tháng 3 năm 1939", "Tháng 9 năm 1945"], "c": 1 },
                                            { "q": "Ông Uyn-tơn đã thực hiện chiến dịch giải cứu trẻ em tại thành phố nào?", "a": ["Luân Đôn (Anh)", "Béc-lin (Đức)", "Pra-ha (Tiệp Khắc)", "Pa-ri (Pháp)"], "c": 2 },
                                            { "q": "Đối tượng mà ông Uyn-tơn muốn giải cứu là ai?", "a": ["Những người lính bị thương", "Những đứa trẻ người Do Thái", "Những người già neo đơn", "Những nghệ sĩ nổi tiếng"], "c": 1 },
                                            { "q": "Vì sao ông Uyn-tơn phải gấp rút thực hiện việc giải cứu?", "a": ["Vì ông sắp hết tiền", "Vì ông muốn nổi tiếng", "Vì chiến tranh sắp nổ ra, cơ hội trốn thoát rất mong manh", "Vì ông muốn đưa các em đi du lịch"], "c": 2 },
                                            { "q": "Ông Uyn-tơn đã làm gì để có kinh phí đưa trẻ em đi tị nạn?", "a": ["Ông tự bỏ tiền túi ra", "Ông xin tiền chính phủ", "Ông cùng bạn bè đi quyên góp khắp nơi", "Ông bán nhà của mình"], "c": 2 },
                                            { "q": "Ông Uyn-tơn đã tổ chức thành công bao nhiêu chuyến tàu giải cứu?", "a": ["5 chuyến", "10 chuyến", "8 chuyến", "6 chuyến"], "c": 2 },
                                            { "q": "Tổng số trẻ em được ông Uyn-tơn cứu sống là bao nhiêu?", "a": ["1000 em", "500 em", "669 em", "800 em"], "c": 2 },
                                            { "q": "Hoạt động giải cứu buộc phải kết thúc vào ngày 1/9/1939 vì lý do gì?", "a": ["Ông Uyn-tơn bị bắt", "Hết kinh phí", "Biên giới do phát xít Đức kiểm soát bị đóng cửa", "Không còn trẻ em nào cần cứu"], "c": 2 },
                                            { "q": "Sau chiến tranh, ông Uyn-tơn đã có thái độ như thế nào về chiến công của mình?", "a": ["Đi kể cho mọi người nghe", "Viết sách để bán", "Giữ kín bí mật, chưa một lần kể với ai trong suốt 50 năm", "Yêu cầu được khen thưởng"], "c": 2 },
                                            { "q": "Ai là người đã phát hiện ra bí mật về những đứa trẻ được giải cứu?", "a": ["Một nhà báo", "Vợ của ông Uyn-tơn", "Một đứa trẻ được cứu", "Một người bạn cũ"], "c": 1 },
                                            { "q": "Vật chứng nào đã giúp vợ ông biết được sự thật?", "a": ["Một tấm huy chương", "Một bức ảnh cũ", "Cuốn sổ ghi thông tin về những đứa trẻ", "Một bức thư cảm ơn"], "c": 2 },
                                            { "q": "Trong chương trình truyền hình năm 1988, điều gì khiến ông Uyn-tơn xúc động?", "a": ["Được tặng nhiều tiền", "Cả hội trường đứng lên nhận là người được ông cứu sống", "Được gặp lại vợ mình", "Được xem lại thước phim cũ"], "c": 1 },
                                            { "q": "Ông Uyn-tơn qua đời vào năm nào và hưởng thọ bao nhiêu tuổi?", "a": ["Năm 2000, thọ 90 tuổi", "Năm 2010, thọ 100 tuổi", "Năm 2015, thọ 106 tuổi", "Năm 2018, thọ 109 tuổi"], "c": 2 },
                                            { "q": "Người dân Tiệp Khắc đã làm gì để tưởng nhớ ông?", "a": ["Đặt tên ông cho một con đường", "Dựng tượng ông trên sân ga thành phố Pra-ha", "Xây một ngôi trường mang tên ông", "Viết một bài hát về ông"], "c": 1 },
                                            { "q": "Vì sao bài đọc gọi ông là \"Người hùng thầm lặng\"?", "a": ["Vì ông làm việc trong quân đội", "Vì ông làm việc nghĩa cứu người nhưng không khoe khoang, kể công", "Vì ông là người ít nói", "Vì ông hoạt động bí mật trong rừng"], "c": 1 }
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
                                            { "type": "header", "text": "Giờ Trái Đất" },
                                            {
                                                "type": "html",
                                                "content": `
                            <div class="flex flex-col lg:flex-row gap-6">
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
                                    </div>
                                </section>
                                <aside class="w-full lg:w-[30%]">
                                    <div class="glass-card rounded-[40px] p-6 sticky top-28 shadow-xl border-amber-100/50">
                                        <h2 class="text-2xl font-black text-gray-800 tracking-tight mb-4">Tìm hiểu bài</h2>
                                        <div class="space-y-4">
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">1. Sự kiện Giờ Trái Đất được tổ chức hằng năm nhằm mục đích gì?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Sự kiện được tổ chức nhằm nâng cao nhận thức về biến đổi khí hậu và khuyến khích mọi người hành động để bảo vệ Trái Đất.</p></div></div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">2. Sự kiện Giờ Trái Đất được tổ chức như thế nào?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Sự kiện được tổ chức hằng năm vào thứ Bảy cuối cùng của tháng Ba. Khi đó, các thành phố và thị trấn tắt đèn trong một giờ, từ 20 giờ 30 phút đến 21 giờ 30 phút (giờ địa phương).</p></div></div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">3. Những chi tiết nào cho thấy Giờ Trái Đất thu hút sự quan tâm của thế giới?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Năm 2007 khởi xướng tại Sydney; năm 2009 Việt Nam tham gia; đến năm 2022 đã có hơn 190 quốc gia và vùng lãnh thổ tham gia hưởng ứng.</p></div></div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">4. Giờ Trái Đất mang lại lợi ích gì cho môi trường?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Giúp tiết kiệm điện năng, giảm thiểu khí các-bô-níc và chống biến đổi khí hậu, làm cho môi trường sống của chúng ta tốt đẹp hơn.</p></div></div>
                                            </div>
                                            <div class="accordion-item bg-white/50 rounded-[24px] border border-white shadow-sm overflow-hidden">
                                                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group"><span class="font-bold text-gray-700">5. Những việc em có thể làm để bảo vệ Trái Đất là gì?</span><div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div></button>
                                                <div class="accordion-content"><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-white/50 pt-4 bg-blue-50/30"><p class="font-medium">Sử dụng sản phẩm tự nhiên, hạn chế nhựa, trồng cây xanh, phân loại và tái chế rác, tham gia tắt đèn hưởng ứng Giờ Trái Đất hằng năm.</p></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        `
                                            }
                                        ]
                                    },
                                    "quiz": {
                                        "setting": { "pick": 5 },
                                        "questions": [
                                            { "q": "Tổ chức nào đứng ra tổ chức sự kiện Giờ Trái Đất hằng năm?", "a": ["UNESCO", "WWF (Quỹ Quốc tế Bảo tồn Thiên nhiên)", "WHO", "UNICEF"], "c": 1 },
                                            { "q": "Sự kiện Giờ Trái Đất lần đầu tiên được tổ chức tại đâu?", "a": ["Luân Đôn, Anh", "Pa-ri, Pháp", "Xít-ni, Ô-xtrây-li-a", "Hà Nội, Việt Nam"], "c": 2 },
                                            { "q": "Giờ Trái Đất được tổ chức vào thời gian nào hằng năm?", "a": ["Ngày 1 tháng 1", "Thứ Bảy cuối cùng của tháng Ba", "Ngày 22 tháng 4", "Ngày 5 tháng 6"], "c": 1 },
                                            { "q": "Mục đích chính của Giờ Trái Đất là gì?", "a": ["Để tiết kiệm tiền điện", "Để mọi người đi ngủ sớm", "Nâng cao nhận thức về biến đổi khí hậu và bảo vệ môi trường", "Để tổ chức lễ hội"], "c": 2 },
                                            { "q": "Khung giờ thực hiện tắt đèn trong Giờ Trái Đất là khi nào?", "a": ["18:00 - 19:00", "19:30 - 20:30", "20:30 - 21:30", "21:00 - 22:00"], "c": 2 },
                                            { "q": "Việt Nam chính thức tham gia Giờ Trái Đất từ năm nào?", "a": ["2007", "2008", "2009", "2010"], "c": 2 },
                                            { "q": "Hành động nào được khuyến khích thực hiện trong 60 phút của Giờ Trái Đất?", "a": ["Bật thêm đèn", "Tắt các thiết bị điện không cần thiết", "Sử dụng máy điều hòa tối đa", "Đi xem phim"], "c": 1 },
                                            { "q": "Năm 2022 đã có bao nhiêu quốc gia và vùng lãnh thổ tham gia sự kiện này?", "a": ["Hơn 100", "Hơn 150", "Hơn 190", "Hơn 200"], "c": 2 },
                                            { "q": "Thông điệp chính mà Giờ Trái Đất muốn gửi gắm là gì?", "a": ["Mỗi hành động nhỏ sẽ làm cho môi trường tốt đẹp hơn", "Tắt đèn để giảm tiền điện", "Sử dụng điện càng nhiều càng tốt", "Chỉ tắt đèn ở các thành phố lớn"], "c": 0 },
                                            { "q": "Việc tắt đèn giúp giảm thiểu loại khí nào gây biến đổi khí hậu?", "a": ["Ô-xy", "Ni-tơ", "Các-bô-níc (CO2)", "Hi-đrô"], "c": 2 }
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
                                "image": "hinh_anh/dien_thoai_di_dong.png",
                                "tabs": {
                                    "lesson": {
                                        "content": `<p>Điện thoại di động là một vật dụng không thể thiếu trong cuộc sống của con người, nhất là trong cuộc sống hiện đại ngày nay. Thật khó hình dung khi thế giới này không có nó.</p>
<p>Ngày 3 tháng 4 năm 1973, nhà phát minh Mác-tin Cúp-pơ thực hiện cuộc gọi với phiên bản đầu tiên của điện thoại di động "cục gạch" vì nó nặng tới 1,1 ki-lô-gam. Chiếc điện thoại này có màn hình chỉ hiển thị chữ, pin thì dùng được có hai mươi phút. Hẳn là bạn không muốn đi khắp nơi với một cục gạch to tướng như thế.</p>
<p>Ngày nay, công nghệ cải tiến đã giúp kích thước của điện thoại di động nhỏ lại và nặng chưa đến 85 gam, bỏ vừa trong túi áo. Điện thoại di động có nhiều chức năng, chẳng khác gì một cái hộp chứa hàng loạt dụng cụ: chúng ta có thể gọi điện cho nhau bao gồm cả tiếng và hình ảnh, nhắn tin văn bản và nhắn tin thoại, chụp ảnh, nghe nhạc, chơi trò chơi điện tử, xem phim,...</p>
<p>Điện thoại di động ngày càng thông minh hơn. Nó giúp mọi người mua sắm, giao dịch trực tuyến, phát, nhận video,... Hệ thống định vị toàn cầu cho phép điện thoại di động có thể xác định vị trí của bạn ở bất cứ đâu trên hành tinh này. Thật tuyệt vời!</p>
<p class="text-right italic font-bold text-sm text-gray-500">(Theo Gim Píp, Nguyễn Hoàng dịch)</p>`,
                                        "meaning": "Điện thoại di động là một trong những phương tiện thông tin hiện đại mà con người đã phát minh được. Nhờ nó, con người có một cuộc sống tiện lợi, phát triển tinh thần, tiết kiệm sức lực và thời gian đi rất nhiều. Điện thoại ngày nay đã có nhiều cải tiến thông minh đáng kể so với những chiếc điện thoại phát minh từ đời đầu.",
                                        "questions": [
                                            { "q": "Ai là người thực hiện cuộc gọi đầu tiên bằng điện thoại di động và vào thời điểm nào?", "a": "Cuộc gọi đầu tiên bằng điện thoại di động do nhà phát minh Mác-tin Cúp-pơ thực hiện vào ngày 3 tháng 4 năm 1973." },
                                            { "q": "So sánh sự khác biệt về khối lượng và kích thước giữa chiếc điện thoại đầu tiên và điện thoại ngày nay.", "a": "• Điện thoại đầu tiên: Được gọi là \"cục gạch\" vì nặng tới 1,1 ki-lô-gam, rất to và nặng.<br>• Điện thoại ngày nay: Nhỏ gọn, bỏ vừa trong túi áo, nặng chưa đến 85 gam." },
                                            { "q": "Điện thoại di động ngày nay có những chức năng gì nổi bật?", "a": "Điện thoại ngày nay như một hộp dụng cụ đa năng: có thể gọi điện (cả tiếng và hình), nhắn tin (văn bản, thoại), chụp ảnh, nghe nhạc, chơi trò chơi, xem phim, mua sắm, giao dịch trực tuyến và định vị toàn cầu." },
                                            { "q": "Theo em, nếu không có điện thoại di động, con người ngày nay sẽ gặp khó khăn gì?", "a": "Nếu không có điện thoại di động, việc liên lạc, chia sẻ thông tin nhanh chóng sẽ rất khó khăn và tốn nhiều thời gian. Ngoài ra, các tiện ích như xác định vị trí, dẫn đường, cứu nạn hoặc làm việc từ xa cũng khó thực hiện được." }
                                        ]
                                    },
                                    "quiz": {
                                        "setting": { "pick": 5 },
                                        "questions": [
                                            { "q": "Cuộc gọi đầu tiên bằng điện thoại di động được thực hiện vào năm nào?", "a": ["1937", "1973", "1983", "2003"], "c": 1 },
                                            { "q": "Ai là người thực hiện cuộc gọi di động đầu tiên?", "a": ["A-lếch-xan-đơ Gra-ham Bell", "Xti-vơ Gióp", "Mác-tin Cúp-pơ", "Tô-mát Ê-đi-xơn"], "c": 2 },
                                            { "q": "Phiên bản đầu tiên của điện thoại di động có biệt danh là gì?", "a": ["Cục đá", "Cục gạch", "Hộp sắt", "Cái búa"], "c": 1 },
                                            { "q": "Khối lượng của chiếc điện thoại di động đầu tiên là bao nhiêu?", "a": ["0,5 kg", "85 gam", "1,1 kg", "2 kg"], "c": 2 },
                                            { "q": "Pin của chiếc điện thoại đầu tiên dùng được trong bao lâu?", "a": ["Một ngày", "Một giờ", "Hai mươi phút", "Mười phút"], "c": 2 },
                                            { "q": "Màn hình của chiếc điện thoại đầu tiên hiển thị được những gì?", "a": ["Hình ảnh màu", "Video", "Chỉ hiển thị chữ", "Bản đồ"], "c": 2 },
                                            { "q": "Điện thoại di động ngày nay thường có trọng lượng khoảng bao nhiêu?", "a": ["Chưa đến 85 gam", "Khoảng 500 gam", "Khoảng 1 kg", "Khoảng 200 gam"], "c": 0 },
                                            { "q": "Hình ảnh so sánh nào được dùng để nói về sự đa năng của điện thoại di động ngày nay?", "a": ["Như một người bạn", "Như một cái hộp chứa hàng loạt dụng cụ", "Như một cuốn bách khoa toàn thư", "Như một chiếc máy tính khổng lồ"], "c": 1 },
                                            { "q": "Chức năng nào sau đây KHÔNG được nhắc đến khi nói về điện thoại di động ngày nay trong bài?", "a": ["Chụp ảnh, nghe nhạc", "Mua sắm trực tuyến", "Nấu ăn", "Xác định vị trí"], "c": 2 },
                                            { "q": "Hệ thống định vị toàn cầu trên điện thoại giúp chúng ta làm gì?", "a": ["Xem phim nhanh hơn", "Nghe nhạc rõ hơn", "Xác định vị trí ở bất cứ đâu", "Sạc pin nhanh hơn"], "c": 2 },
                                            { "q": "Bài đọc nhận định vai trò của điện thoại di động trong cuộc sống hiện đại như thế nào?", "a": ["Là vật dụng xa xỉ", "Là vật dụng không thể thiếu", "Là vật dụng gây hại", "Là vật dụng ít người dùng"], "c": 1 },
                                            { "q": "Theo bài đọc, điện thoại di động giúp con người tiết kiệm điều gì?", "a": ["Tiền bạc", "Sức lực và thời gian", "Năng lượng điện", "Tài nguyên nước"], "c": 1 },
                                            { "q": "Ngoài nhắn tin văn bản, điện thoại ngày nay còn có thể nhắn tin dạng nào?", "a": ["Nhắn tin bằng mùi hương", "Nhắn tin thoại", "Nhắn tin bằng suy nghĩ", "Nhắn tin giấy"], "c": 1 },
                                            { "q": "Sự khác biệt lớn nhất về kích thước của điện thoại ngày nay so với trước kia là gì?", "a": ["To hơn để xem phim", "Nhỏ lại, bỏ vừa trong túi áo", "Dài hơn", "Hình tròn"], "c": 1 },
                                            { "q": "Nội dung chính của bài là gì?", "a": ["Hướng dẫn cách sử dụng điện thoại", "Kể chuyện về nhà phát minh Mác-tin Cúp-pơ", "Sự ra đời, cải tiến và vai trò quan trọng của điện thoại di động trong đời sống", "Quảng cáo các loại điện thoại mới"], "c": 2 }
                                        ]
                                    }
                                },
                                "342-thanh-pho-thong-minh-mat-xda": {
                                    "title": "Thành phố thông minh Mát-xđa",
                                    "week": 34,
                                    "subject": "Đọc",
                                    "theme": "Thế giới của chúng ta",
                                    "audio": "am_thanh/342-mat-xda.mp3",
                                    "image": "hinh_anh/342-mat-xda.png",
                                    "tabs": {
                                        "lesson": {
                                            "content": `<p>Mát-xđa là một ốc đảo nằm giữa sa mạc, thuộc Các Tiểu vương quốc Ả Rập Thống nhất (viết tắt là UAE). Năm 2008, UAE khởi công xây dựng dự án "Thành phố thông minh Mát-xđa" nhằm biến Mát-xđa trở thành thành phố không các-bô-níc đầu tiên trên thế giới.</p>
<p>Điểm nhấn trong thiết kế của thành phố là những chiếc ô hình hoa hướng dương. Ban ngày, những chiếc ô này vừa giúp lưu trữ năng lượng mặt trời vừa là những tấm che nắng khổng lồ. Ban đêm, chúng sẽ khép lại, toả nhiệt, cung cấp điện năng lượng mặt trời cho toàn thành phố.</p>
<p>Để đối phó với tình trạng nóng lên do biến đổi khí hậu, ở Mát-xđa, các toà nhà được thiết kế chụm lại với nhau, có lối đi ở giữa, giúp không khí lưu thông được dễ dàng và giúp giảm nhiệt độ mùa hè. Ngoài ra, một tháp gió được xây dựng nhằm lấy dòng không khí trên cao, mang làn gió mát mẻ vào thành phố, cũng góp phần làm giảm đáng kể nhiệt độ nơi đây so với vùng sa mạc ở xung quanh.</p>
<p>Các công viên và khu thương mại ở Mát-xđa được xây dựng theo mô hình khu vườn Ả Rập truyền thống, ngập tràn màu xanh, giúp giảm thiểu tối đa lượng khí thải. Chính quyền thành phố cũng khuyến khích người dân đi bộ, đi xe đạp hoặc sử dụng các phương tiện giao thông công cộng chạy bằng điện năng lượng mặt trời để bảo vệ môi trường.</p>
<p>Việc xây dựng thành công thành phố thông minh Mát-xđa đã truyền cảm hứng cho một số dự án phát triển nhà ở Anh, Bồ Đào Nha,.... Đây sẽ là những đô thị sinh thái tiếp theo giúp ngăn chặn ô nhiễm môi trường và biến đổi khí hậu.</p>
<p class="text-right italic font-bold text-sm text-gray-500">(Lâm Anh tổng hợp)</p>`,
                                            "meaning": "Thành phố thông minh Mát-xđa là giải pháp đối phó với tình trạng nóng lên do biến đổi khí hậu và giúp ngăn chặn ô nhiễm môi trường. Đây là hình mẫu về đô thị sinh thái hiện đại cho thế giới.",
                                            "questions": [
                                                { "q": "Địa điểm, thời gian khởi công, mục đích của dự án?", "a": "<b>Địa điểm:</b> Ốc đảo Mát-xđa (UAE). <b>Thời gian:</b> Năm 2008. <b>Mục đích:</b> Biến Mát-xđa trở thành thành phố không các-bô-níc đầu tiên trên thế giới." },
                                                { "q": "Thiết kế tự vận hành bằng năng lượng mặt trời?", "a": "Sử dụng những chiếc ô hình hoa hướng dương khổng lồ. Ban ngày mở ra lưu trữ năng lượng và che nắng, ban đêm khép lại toả nhiệt và cung cấp điện cho thành phố." },
                                                { "q": "Cách đối phó với tình trạng nóng lên?", "a": "Các tòa nhà chụm lại với nhau tạo lối đi giúp không khí lưu thông; xây tháp gió để lấy không khí mát trên cao mang vào thành phố." },
                                                { "q": "Chi tiết giúp ngăn chặn ô nhiễm môi trường?", "a": "Công viên, khu thương mại ngập tràn màu xanh; khuyến khích đi bộ, xe đạp, phương tiện công cộng chạy bằng điện mặt trời." },
                                                { "q": "Ý nghĩa của việc truyền cảm hứng cho nước khác?", "a": "Mát-xđa là mô hình kiểu mẫu tốt, cho thấy con người rất quan tâm đến việc xây dựng thành phố chống biến đổi khí hậu và bảo vệ môi trường." }
                                            ]
                                        },
                                        "quiz": {
                                            "setting": { "pick": 5 },
                                            "questions": [
                                                { "q": "Thành phố thông minh Mát-xđa thuộc quốc gia nào?", "a": ["Ả Rập Xê Út", "Các Tiểu vương quốc Ả Rập Thống nhất (UAE)", "Ca-ta", "I-ran"], "c": 1 },
                                                { "q": "Dự án thành phố Mát-xđa được khởi công vào năm nào?", "a": ["2000", "2005", "2008", "2010"], "c": 2 },
                                                { "q": "Mục tiêu chính của dự án Mát-xđa là gì?", "a": ["Trở thành thành phố giàu nhất thế giới", "Trở thành thành phố không các-bô-níc đầu tiên trên thế giới", "Trở thành thành phố lớn nhất thế giới", "Trở thành trung tâm du lịch của châu Á"], "c": 1 },
                                                { "q": "Điểm nhấn trong thiết kế của thành phố là công trình có hình dạng gì?", "a": ["Hình kim tự tháp", "Hình cánh buồm", "Những chiếc ô hình hoa hướng dương", "Hình những cây cọ"], "c": 2 },
                                                { "q": "Vào ban đêm, những chiếc ô khổng lồ có chức năng gì?", "a": ["Che mưa", "Chiếu sáng bằng đèn LED", "Khép lại, toả nhiệt và cung cấp điện năng lượng mặt trời", "Mở ra để hứng sương"], "c": 2 },
                                                { "q": "Để giảm nhiệt độ mùa hè, các tòa nhà ở Mát-xđa được bố trí như thế nào?", "a": ["Xây cách xa nhau", "Thiết kế chụm lại với nhau, có lối đi ở giữa", "Xây ngầm dưới lòng đất", "Xây rất cao để đón gió"], "c": 1 },
                                                { "q": "Chức năng của 'tháp gió' được xây dựng trong thành phố là gì?", "a": ["Để quan sát toàn cảnh thành phố", "Để phát sóng wifi", "Lấy dòng không khí mát mẻ trên cao mang vào thành phố", "Để trang trí"], "c": 2 },
                                                { "q": "Các công viên và khu thương mại ở đây được xây dựng theo mô hình nào?", "a": ["Khu vườn Châu Âu", "Khu vườn Ả Rập truyền thống", "Khu rừng nhiệt đới", "Công viên nước"], "c": 1 },
                                                { "q": "Phương tiện giao thông nào KHÔNG được khuyến khích sử dụng tại Mát-xđa?", "a": ["Xe đạp", "Đi bộ", "Xe ô tô chạy bằng xăng dầu", "Phương tiện công cộng chạy bằng điện mặt trời"], "c": 2 },
                                                { "q": "Thành phố Mát-xđa được ví như cái gì nằm giữa sa mạc?", "a": ["Một viên ngọc", "Một con tàu", "Một ốc đảo", "Một ngọn núi"], "c": 2 },
                                                { "q": "Mát-xđa đã truyền cảm hứng cho các dự án phát triển nhà ở những nước nào?", "a": ["Mỹ và Pháp", "Anh và Bồ Đào Nha", "Nhật Bản và Hàn Quốc", "Đức và Ý"], "c": 1 },
                                                { "q": "Vì sao gọi Mát-xđa là 'thành phố thông minh'?", "a": ["Vì cư dân ở đây rất thông minh", "Vì có nhiều trường đại học", "Sử dụng công nghệ tiên tiến để tự vận hành năng lượng và bảo vệ môi trường", "Vì có nhiều máy tính"], "c": 2 },
                                                { "q": "Việc các tòa nhà chụm lại với nhau có tác dụng gì về mặt không khí?", "a": ["Ngăn cản gió bão", "Giúp không khí lưu thông dễ dàng", "Giữ nhiệt độ ấm áp", "Tạo ra sương mù"], "c": 1 },
                                                { "q": "Năng lượng chính được sử dụng để vận hành thành phố là gì?", "a": ["Năng lượng gió", "Năng lượng mặt trời", "Năng lượng hạt nhân", "Năng lượng thủy điện"], "c": 1 },
                                                { "q": "Nội dung chính của bài đọc là gì?", "a": ["Giới thiệu về vẻ đẹp của sa mạc", "Quảng cáo du lịch cho UAE", "Giới thiệu về thành phố thông minh Mát-xđa - giải pháp chống biến đổi khí hậu", "Cách xây dựng nhà ở sa mạc"], "c": 2 }
                                            ]
                                        }
                                    }
                                }
                            };
