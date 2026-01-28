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
