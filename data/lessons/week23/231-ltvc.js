window.LESSON_DATA = window.LESSON_DATA || { lessons: {} };
window.LESSON_DATA.lessons["231-ltvc"] = {
    "title": "Luyện tập về câu ghép",
    "week": 23,
    "subject": "LTVC",
    "theme": "Hương sắc trăm miền",
    "tabs": {
        "lesson": {
            "title": "Bài học",
            "blocks": [
                { "type": "header", "text": "Luyện tập về câu ghép" },
                {
                    "type": "theory",
                    "title": "1. Nhận biết câu ghép",
                    "content": `
                    <div class="mb-8">
                        <div class="glass-card rounded-[32px] p-8 shadow-xl mb-6 border-l-8 border-blue-500">
                            <h3 class="font-black text-2xl text-gray-800 mb-6 flex items-center">
                                <span class="bg-blue-100 text-blue-600 rounded-lg px-4 py-2 text-lg mr-4">1.1</span>
                                Câu ghép là gì?
                            </h3>
                            <div class="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                                <p class="text-lg font-bold text-gray-800 mb-3">Câu ghép là câu có từ hai vế câu trở lên.</p>
                                <p class="text-gray-700 leading-relaxed">Các vế câu có thể có quan hệ đồng vị hoặc quan hệ chính-phụ.</p>
                            </div>
                        </div>
                        
                        <div class="glass-card rounded-[32px] p-8 shadow-xl border-l-8 border-green-500">
                            <h3 class="font-black text-2xl text-gray-800 mb-6 flex items-center">
                                <span class="bg-green-100 text-green-600 rounded-lg px-4 py-2 text-lg mr-4">1.2</span>
                                Các loại câu ghép
                            </h3>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <!-- Câu ghép đồng vị -->
                                <div class="bg-green-50/50 rounded-2xl p-6 border border-green-100">
                                    <h4 class="font-bold text-lg text-green-700 mb-3">🔗 Câu ghép đồng vị</h4>
                                    <p class="text-gray-700 mb-3">Các vế câu có quan hệ ngang hàng, không vế nào phụ thuộc vế nào.</p>
                                    <div class="bg-white rounded-xl p-4 border border-green-200">
                                        <p class="font-bold text-gray-800 mb-2">Ví dụ:</p>
                                        <p class="text-gray-700 italic">"Tiếng trống vừa dứt, bốn thanh niên nhanh như sóc leo lên cây chuối."</p>
                                    </div>
                                </div>
                                
                                <!-- Câu ghép chính-phụ -->
                                <div class="bg-purple-50/50 rounded-2xl p-6 border border-purple-100">
                                    <h4 class="font-bold text-lg text-purple-700 mb-3">🎯 Câu ghép chính-phụ</h4>
                                    <p class="text-gray-700 mb-3">Có vế chính và vế phụ, vế phụ bổ sung ý nghĩa cho vế chính.</p>
                                    <div class="bg-white rounded-xl p-4 border border-purple-200">
                                        <p class="font-bold text-gray-800 mb-2">Ví dụ:</p>
                                        <p class="text-gray-700 italic">"Khi tiếng trống hiệu vừa dứt, bốn thanh niên nhanh như sóc leo lên cây chuối."</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="mt-6 bg-yellow-50/50 rounded-2xl p-6 border border-yellow-100">
                                <h4 class="font-bold text-lg text-yellow-700 mb-3">🔄 Các quan hệ trong câu ghép:</h4>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div class="bg-white rounded-xl p-3 border border-yellow-200">
                                        <p class="font-bold text-gray-800">• Nguyên nhân - Kết quả:</p>
                                        <p class="text-gray-700 italic text-sm">"Vì hội thi rất sôi nổi nên đông người tham gia."</p>
                                    </div>
                                    <div class="bg-white rounded-xl p-3 border border-yellow-200">
                                        <p class="font-bold text-gray-800">• Điều kiện - Kết quả:</p>
                                        <p class="text-gray-700 italic text-sm">"Khi có lửa, các đội bắt đầu thổi cơm."</p>
                                    </div>
                                    <div class="bg-white rounded-xl p-3 border border-yellow-200">
                                        <p class="font-bold text-gray-800">• Chuyển tiếp:</p>
                                        <p class="text-gray-700 italic text-sm">"Các thanh niên leo lên cây, sau đó lấy được nén hương."</p>
                                    </div>
                                    <div class="bg-white rounded-xl p-3 border border-yellow-200">
                                        <p class="font-bold text-gray-800">• Đối lập:</p>
                                        <p class="text-gray-700 italic text-sm">"Cây chuối rất cao tuy nhiên các thanh niên vẫn leo lên được."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                },
                {
                    "type": "html",
                    "content": `
                    <div class="glass-card rounded-[32px] p-8 shadow-xl mb-8 border-l-8 border-orange-500">
                        <h3 class="font-black text-2xl text-gray-800 mb-6 flex items-center">
                            <span class="bg-orange-100 text-orange-600 rounded-lg px-4 py-2 text-lg mr-4">2</span>
                            Bài tập 1: Phân loại câu ghép
                        </h3>
                        <p class="text-gray-700 mb-6 italic">Đọc các câu sau và chọn loại câu ghép tương ứng:</p>
                        
                        <div class="space-y-4" id="baitap1-container">
                            <!-- Câu 1 -->
                            <div class="bg-white/60 rounded-2xl p-6 border border-orange-200">
                                <p class="font-bold text-gray-800 mb-4">Câu 1: "Hội thi bắt đầu bằng việc lấy lửa, khi tiếng trống hiệu vừa dứt, các thanh niên nhanh chóng leo lên cây chuối."</p>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    <button onclick="checkAnswer('b1', 'dongvi')" class="answer-btn bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold py-3 px-4 rounded-xl transition-all">
                                        A. Câu ghép đồng vị
                                    </button>
                                    <button onclick="checkAnswer('b1', 'chinhphu')" class="answer-btn bg-green-100 hover:bg-green-200 text-green-700 font-bold py-3 px-4 rounded-xl transition-all">
                                        B. Câu ghép chính-phụ
                                    </button>
                                    <button onclick="checkAnswer('b1', 'hop')" class="answer-btn bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold py-3 px-4 rounded-xl transition-all">
                                        C. Câu ghép hỗn hợp
                                    </button>
                                </div>
                                <div id="feedback-b1" class="mt-4 hidden p-4 rounded-xl"></div>
                            </div>
                            
                            <!-- Câu 2 -->
                            <div class="bg-white/60 rounded-2xl p-6 border border-orange-200">
                                <p class="font-bold text-gray-800 mb-4">Câu 2: "Các thanh niên leo lên cây chuối để lấy nén hương trên ngọn."</p>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    <button onclick="checkAnswer('b2', 'dongvi')" class="answer-btn bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold py-3 px-4 rounded-xl transition-all">
                                        A. Câu ghép đồng vị
                                    </button>
                                    <button onclick="checkAnswer('b2', 'chinhphu')" class="answer-btn bg-green-100 hover:bg-green-200 text-green-700 font-bold py-3 px-4 rounded-xl transition-all">
                                        B. Câu ghép chính-phụ
                                    </button>
                                    <button onclick="checkAnswer('b2', 'hop')" class="answer-btn bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold py-3 px-4 rounded-xl transition-all">
                                        C. Câu ghép hỗn hợp
                                    </button>
                                </div>
                                <div id="feedback-b2" class="mt-4 hidden p-4 rounded-xl"></div>
                            </div>
                            
                            <!-- Câu 3 -->
                            <div class="bg-white/60 rounded-2xl p-6 border border-orange-200">
                                <p class="font-bold text-gray-800 mb-4">Câu 3: "Người nấu cơm tay giữ cần, tay cầm đuốc đung đưa cho ánh lửa bập bùng."</p>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    <button onclick="checkAnswer('b3', 'dongvi')" class="answer-btn bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold py-3 px-4 rounded-xl transition-all">
                                        A. Câu ghép đồng vị
                                    </button>
                                    <button onclick="checkAnswer('b3', 'chinhphu')" class="answer-btn bg-green-100 hover:bg-green-200 text-green-700 font-bold py-3 px-4 rounded-xl transition-all">
                                        B. Câu ghép chính-phụ
                                    </button>
                                    <button onclick="checkAnswer('b3', 'hop')" class="answer-btn bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold py-3 px-4 rounded-xl transition-all">
                                        C. Câu ghép hỗn hợp
                                    </button>
                                </div>
                                <div id="feedback-b3" class="mt-4 hidden p-4 rounded-xl"></div>
                            </div>
                            
                            <!-- Câu 4 -->
                            <div class="bg-white/60 rounded-2xl p-6 border border-orange-200">
                                <p class="font-bold text-gray-800 mb-4">Câu 4: "Các nồi cơm được trình ra, ban giám khảo chấm điểm rất kỹ."</p>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    <button onclick="checkAnswer('b4', 'dongvi')" class="answer-btn bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold py-3 px-4 rounded-xl transition-all">
                                        A. Câu ghép đồng vị
                                    </button>
                                    <button onclick="checkAnswer('b4', 'chinhphu')" class="answer-btn bg-green-100 hover:bg-green-200 text-green-700 font-bold py-3 px-4 rounded-xl transition-all">
                                        B. Câu ghép chính-phụ
                                    </button>
                                    <button onclick="checkAnswer('b4', 'hop')" class="answer-btn bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold py-3 px-4 rounded-xl transition-all">
                                        C. Câu ghép hỗn hợp
                                    </button>
                                </div>
                                <div id="feedback-b4" class="mt-4 hidden p-4 rounded-xl"></div>
                            </div>
                            
                            <!-- Câu 5 -->
                            <div class="bg-white/60 rounded-2xl p-6 border border-orange-200">
                                <p class="font-bold text-gray-800 mb-4">Câu 5: "Vì hội thi rất ý nghĩa nên các thanh niên đều hăng hái tham gia."</p>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    <button onclick="checkAnswer('b5', 'dongvi')" class="answer-btn bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold py-3 px-4 rounded-xl transition-all">
                                        A. Câu ghép đồng vị
                                    </button>
                                    <button onclick="checkAnswer('b5', 'chinhphu')" class="answer-btn bg-green-100 hover:bg-green-200 text-green-700 font-bold py-3 px-4 rounded-xl transition-all">
                                        B. Câu ghép chính-phụ
                                    </button>
                                    <button onclick="checkAnswer('b5', 'hop')" class="answer-btn bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold py-3 px-4 rounded-xl transition-all">
                                        C. Câu ghép hỗn hợp
                                    </button>
                                </div>
                                <div id="feedback-b5" class="mt-4 hidden p-4 rounded-xl"></div>
                            </div>
                        </div>
                    </div>
                    `
                },
                {
                    "type": "html",
                    "content": `
                    <div class="glass-card rounded-[32px] p-8 shadow-xl mb-8 border-l-8 border-teal-500">
                        <h3 class="font-black text-2xl text-gray-800 mb-6 flex items-center">
                            <span class="bg-teal-100 text-teal-600 rounded-lg px-4 py-2 text-lg mr-4">3</span>
                            Bài tập 2: Nối các vế câu hợp lý
                        </h3>
                        <p class="text-gray-700 mb-6 italic">Nối vế câu ở cột A với vế câu phù hợp ở cột B để tạo thành câu ghép hoàn chỉnh:</p>
                        
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <!-- Cột A -->
                            <div class="bg-teal-50/50 rounded-2xl p-6 border border-teal-100">
                                <h4 class="font-bold text-lg text-teal-700 mb-4">📝 Cột A</h4>
                                <div class="space-y-3" id="col-a">
                                    <div class="bg-white rounded-xl p-4 border-2 border-teal-200 cursor-move hover:shadow-lg transition-all" draggable="true" data-id="a1">
                                        <p class="font-bold text-gray-800">A1. Các thanh niên leo lên cây chuối</p>
                                    </div>
                                    <div class="bg-white rounded-xl p-4 border-2 border-teal-200 cursor-move hover:shadow-lg transition-all" draggable="true" data-id="a2">
                                        <p class="font-bold text-gray-800">A2. Người nấu cơm tay giữ cần</p>
                                    </div>
                                    <div class="bg-white rounded-xl p-4 border-2 border-teal-200 cursor-move hover:shadow-lg transition-all" draggable="true" data-id="a3">
                                        <p class="font-bold text-gray-800">A3. Các nồi cơm được trình ra</p>
                                    </div>
                                    <div class="bg-white rounded-xl p-4 border-2 border-teal-200 cursor-move hover:shadow-lg transition-all" draggable="true" data-id="a4">
                                        <p class="font-bold text-gray-800">A4. Hội thổi cơm thi rất sôi nổi</p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Cột B -->
                            <div class="bg-orange-50/50 rounded-2xl p-6 border border-orange-100">
                                <h4 class="font-bold text-lg text-orange-700 mb-4">📌 Cột B</h4>
                                <div class="space-y-3" id="col-b">
                                    <div class="bg-white rounded-xl p-4 border-2 border-orange-200 cursor-move hover:shadow-lg transition-all" draggable="true" data-id="b1">
                                        <p class="font-bold text-gray-800">B1. tay cầm đuốc đung đưa cho lửa bập bùng</p>
                                    </div>
                                    <div class="bg-white rounded-xl p-4 border-2 border-orange-200 cursor-move hover:shadow-lg transition-all" draggable="true" data-id="b2">
                                        <p class="font-bold text-gray-800">B2. ban giám khảo chấm điểm rất kỹ</p>
                                    </div>
                                    <div class="bg-white rounded-xl p-4 border-2 border-orange-200 cursor-move hover:shadow-lg transition-all" draggable="true" data-id="b3">
                                        <p class="font-bold text-gray-800">B3. để lấy nén hương trên ngọn</p>
                                    </div>
                                    <div class="bg-white rounded-xl p-4 border-2 border-orange-200 cursor-move hover:shadow-lg transition-all" draggable="true" data-id="b4">
                                        <p class="font-bold text-gray-800">B4. nên thu hút rất đông người xem</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Kết quả nối -->
                        <div class="mt-6 bg-white/60 rounded-2xl p-6 border border-gray-200">
                            <h4 class="font-bold text-lg text-gray-800 mb-4">✅ Kết quả nối:</h4>
                            <div id="ketqua-noi" class="space-y-2 mb-4">
                                <p class="text-gray-500 italic">Kéo thả các câu ở trên để nối chúng lại...</p>
                            </div>
                            <div class="flex gap-3">
                                <button onclick="checkConnections()" class="bg-teal-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-teal-700 transition-all">
                                    Kiểm tra kết quả
                                </button>
                                <button onclick="resetConnections()" class="bg-gray-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-gray-600 transition-all">
                                    Làm lại
                                </button>
                            </div>
                        </div>
                    </div>
                    `
                },
                {
                    "type": "html",
                    "content": `
                    <div class="glass-card rounded-[32px] p-8 shadow-xl border-l-8 border-pink-500">
                        <h3 class="font-black text-2xl text-gray-800 mb-6 flex items-center">
                            <span class="bg-pink-100 text-pink-600 rounded-lg px-4 py-2 text-lg mr-4">4</span>
                            Bài tập 3: Viết câu ghép theo yêu cầu
                        </h3>
                        
                        <div class="space-y-6">
                            <!-- Yêu cầu 1 -->
                            <div class="bg-pink-50/50 rounded-2xl p-6 border border-pink-100">
                                <p class="font-bold text-gray-800 mb-3">Yêu cầu 1: Viết câu ghép có quan hệ nguyên nhân - kết quả (dùng từ "vì... nên...")</p>
                                <div class="flex gap-3">
                                    <input type="text" id="cau-ghép-1" placeholder="Ví dụ: Vì hội thi rất sôi nổi nên đông người tham gia..." 
                                           class="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none">
                                    <button onclick="checkCauGhep('1')" class="bg-pink-600 text-white font-bold px-6 rounded-xl hover:bg-pink-700 transition-all">
                                        Kiểm tra
                                    </button>
                                </div>
                                <div id="feedback-cau-1" class="mt-3 hidden p-4 rounded-xl"></div>
                            </div>
                            
                            <!-- Yêu cầu 2 -->
                            <div class="bg-purple-50/50 rounded-2xl p-6 border border-purple-100">
                                <p class="font-bold text-gray-800 mb-3">Yêu cầu 2: Viết câu ghép có quan hệ đối lập (dùng từ "tuy nhiên...")</p>
                                <div class="flex gap-3">
                                    <input type="text" id="cau-ghép-2" placeholder="Ví dụ: Các thanh niên leo lên rất nhanh tuy nhiên cây chuối trơn nên nhiều người bị ngã..." 
                                           class="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none">
                                    <button onclick="checkCauGhep('2')" class="bg-purple-600 text-white font-bold px-6 rounded-xl hover:bg-purple-700 transition-all">
                                        Kiểm tra
                                    </button>
                                </div>
                                <div id="feedback-cau-2" class="mt-3 hidden p-4 rounded-xl"></div>
                            </div>
                            
                            <!-- Yêu cầu 3 -->
                            <div class="bg-green-50/50 rounded-2xl p-6 border border-green-100">
                                <p class="font-bold text-gray-800 mb-3">Yêu cầu 3: Viết câu ghép có quan hệ mục đích (dùng từ "để...")</p>
                                <div class="flex gap-3">
                                    <input type="text" id="cau-ghép-3" placeholder="Ví dụ: Các thanh niên leo lên cây chuối để lấy nén hương..." 
                                           class="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none">
                                    <button onclick="checkCauGhep('3')" class="bg-green-600 text-white font-bold px-6 rounded-xl hover:bg-green-700 transition-all">
                                        Kiểm tra
                                    </button>
                                </div>
                                <div id="feedback-cau-3" class="mt-3 hidden p-4 rounded-xl"></div>
                            </div>
                        </div>
                        
                        <!-- Nút nộp bài -->
                        <div class="text-center mt-8">
                            <button onclick="submitLTVC231()" class="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black text-lg py-4 px-10 rounded-full shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 mx-auto">
                                <span>📝</span> NỘP BÀI LUYỆN TẬP
                            </button>
                        </div>
                    </div>
                    `
                }
            ]
        },
        "quiz": {
            "settings": { "pick": 10 },
            "questions": [
                {
                    "q": "Câu nào sau đây là câu ghép?",
                    "a": [
                        "Hội thổi cơm thi ở Đồng Vân là một lễ hội truyền thống.",
                        "Tiếng trống vừa dứt, bốn thanh niên nhanh như sóc leo lên cây chuối.",
                        "Các thanh niên rất nhanh nhẹn.",
                        "Lễ hội diễn ra vào mùa thu."
                    ],
                    "c": 1
                },
                {
                    "q": "Trong câu 'Khi tiếng trống hiệu vừa dứt, các thanh niên nhanh chóng leo lên cây chuối', đây là loại câu ghép nào?",
                    "a": [
                        "Câu ghép đồng vị",
                        "Câu ghép chính-phụ",
                        "Câu đơn",
                        "Câu ghép hỗn hợp"
                    ],
                    "c": 1
                },
                {
                    "q": "Câu 'Các thanh niên leo lên cây chuối để lấy nén hương trên ngọn' có quan hệ gì giữa hai vế câu?",
                    "a": [
                        "Nguyên nhân - kết quả",
                        "Điều kiện - kết quả",
                        "Mục đích",
                        "Đối lập"
                    ],
                    "c": 2
                },
                {
                    "q": "Dấu câu nào thường dùng để nối các vế câu trong câu ghép đồng vị?",
                    "a": [
                        "Dấu phẩy (,)",
                        "Dấu chấm (.)",
                        "Dấu chấm phẩy (;)",
                        "Dấu hai chấm (:)"
                    ],
                    "c": 0
                },
                {
                    "q": "Trong câu ghép chính-phụ, vế phụ thường được nối với vế chính bằng:",
                    "a": [
                        "Dấu phẩy",
                        "Các từ nối như 'khi', 'vì', 'để'",
                        "Dấu chấm",
                        "Không cần dấu câu"
                    ],
                    "c": 1
                },
                {
                    "q": "Câu 'Vì hội thi rất ý nghĩa nên các thanh niên đều hăng hái tham gia' có quan hệ:",
                    "a": [
                        "Nguyên nhân - kết quả",
                        "Điều kiện - kết quả",
                        "Chuyển tiếp",
                        "Đối lập"
                    ],
                    "c": 0
                },
                {
                    "q": "Câu nào sau đây là câu ghép đồng vị?",
                    "a": [
                        "Khi có lửa, các đội bắt đầu thổi cơm.",
                        "Các thanh niên leo lên cây, sau đó lấy được nén hương.",
                        "Các thanh niên rất nhanh nhẹn.",
                        "Hội thi diễn ra vào buổi sáng."
                    ],
                    "c": 1
                },
                {
                    "q": "Trong câu 'Cây chuối rất cao tuy nhiên các thanh niên vẫn leo lên được', từ 'tuy nhiên' thể hiện quan hệ:",
                    "a": [
                        "Nguyên nhân - kết quả",
                        "Điều kiện - kết quả",
                        "Đối lập",
                        "Mục đích"
                    ],
                    "c": 2
                },
                {
                    "q": "Câu 'Người nấu cơm tay giữ cần, tay cầm đuốc đung đưa cho ánh lửa bập bùng' có bao nhiêu vế câu?",
                    "a": [
                        "1 vế câu",
                        "2 vế câu",
                        "3 vế câu",
                        "4 vế câu"
                    ],
                    "c": 1
                },
                {
                    "q": "Câu nào sau đây không phải là câu ghép?",
                    "a": [
                        "Tiếng trống vừa dứt, các thanh niên bắt đầu thi.",
                        "Các thanh niên leo lên cây chuối rất nhanh.",
                        "Khi có lửa, các đội bắt đầu thổi cơm.",
                        "Hội thi rất sôi nổi nên đông người tham gia."
                    ],
                    "c": 1
                },
                {
                    "q": "Trong câu ghép, các vế câu có thể được nối bằng:",
                    "a": [
                        "Dấu phẩy và dấu chấm phẩy",
                        "Các từ nối",
                        "Dấu hai chấm",
                        "Cả A và B đều đúng"
                    ],
                    "c": 3
                },
                {
                    "q": "Câu 'Các nồi cơm được trình ra, ban giám khảo chấm điểm rất kỹ' có quan hệ:",
                    "a": [
                        "Nguyên nhân - kết quả",
                        "Chuyển tiếp",
                        "Điều kiện - kết quả",
                        "Đối lập"
                    ],
                    "c": 1
                },
                {
                    "q": "Từ nào sau đây không phải là từ nối trong câu ghép?",
                    "a": [
                        "khi",
                        "vì",
                        "nên",
                        "rất"
                    ],
                    "c": 3
                },
                {
                    "q": "Câu 'Các thanh niên vừa leo lên cây vừa lấy được nén hương' có quan hệ:",
                    "a": [
                        "Đồng thời",
                        "Nguyên nhân - kết quả",
                        "Điều kiện - kết quả",
                        "Đối lập"
                    ],
                    "c": 0
                },
                {
                    "q": "Khi viết câu ghép, cần chú ý điều gì sau đây?",
                    "a": [
                        "Dùng đúng dấu câu",
                        "Các vế câu có quan hệ logic với nhau",
                        "Dùng từ nối phù hợp",
                        "Cả ba điều trên đều đúng"
                    ],
                    "c": 3
                }
            ]
        }
    }
};
