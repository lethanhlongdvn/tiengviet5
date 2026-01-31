window.LESSON_DATA = window.LESSON_DATA || { lessons: {} };
window.LESSON_DATA.lessons["221-viet"] = {
    "title": "Đánh giá, chỉnh sửa bài văn tả người",
    "week": 21,
    "subject": "Viết",
    "theme": "Vẻ đẹp cuộc sống",
    "tabs": {
        "lesson": {
            "blocks": [
                {
                    "type": "html",
                    "content": `<style>
                                .label-viet { color: #ef4444; font-weight: 800; border: 2px solid #ef4444; padding: 2px 16px; display: inline-block; border-top-right-radius: 20px; border-bottom-right-radius: 20px; margin-bottom: 24px; letter-spacing: 0.05em; background: rgba(254, 226, 226, 0.3); }
                                .criteria-box { border: 2px solid #06b6d4; border-radius: 16px; display: flex; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
                                .criteria-icon { background-color: #06b6d4; width: 80px; display: flex; align-items: center; justify-content: center; color: white; font-size: 50px; font-weight: 900; }
                                .star-rating { color: #d1d5db; cursor: pointer; font-size: 1.2rem; transition: 0.2s; }
                                .star-rating.active { color: #facc15; transform: scale(1.2); }
                                .input-line { border: none; border-bottom: 2px dashed #9ca3af; width: 100%; padding: 8px 0; outline: none; font-style: italic; color: #374151; background: transparent; transition: border-bottom-color 0.3s; }
                                .input-line:focus { border-bottom: 2px solid #3b82f6; }
                            </style>
                            <div class="max-w-4xl mx-auto">
                                <div class="label-viet">VIẾT</div>
                                <h1 class="text-3xl md:text-4xl font-black text-center text-blue-800 mb-8 uppercase tracking-tight">ĐÁNH GIÁ, CHỈNH SỬA BÀI VĂN TẢ NGƯỜI</h1>

                                <!-- Section 1 -->
                                <div class="mb-10 text-gray-800 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                    <p class="text-lg"><span class="text-red-500 font-extrabold mr-2 text-2xl">1.</span> <span class="font-bold">Nghe thầy cô giáo nhận xét về bài làm.</span></p>
                                    <p class="mt-2 text-gray-600 ml-8 italic">Em hãy lắng nghe và ghi chép lại những nhận xét chung của thầy cô về bài văn của cả lớp nhé.</p>
                                </div>

                                <!-- Section 2 -->
                                <div class="mb-12">
                                    <p class="text-lg font-bold text-gray-800 mb-6 flex items-baseline">
                                        <span class="text-red-500 font-extrabold mr-2 text-2xl">2.</span>
                                        <span>Đọc lại bài văn của em để biết bài đã đạt được những yêu cầu nào dưới đây:</span>
                                    </p>
                                    <div class="overflow-hidden rounded-2xl border-2 border-cyan-400 shadow-lg">
                                        <table class="w-full">
                                            <thead>
                                                <tr class="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">
                                                    <th class="p-4 text-left font-bold text-lg">📋 Tiêu chí tự đánh giá</th>
                                                    <th class="p-4 text-center font-bold text-lg w-48">⭐ Tự đánh giá</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-cyan-50">
                                                <tr class="border-b border-cyan-200 hover:bg-cyan-100 transition-colors">
                                                    <td class="p-4 text-gray-700 font-medium text-base">– Có đủ mở bài, thân bài, kết bài.</td>
                                                    <td class="p-4 text-center">
                                                        <div class="star-group flex gap-2 justify-center" data-row="1">
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 1)">☆</span>
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 2)">☆</span>
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 3)">☆</span>
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 4)">☆</span>
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 5)">☆</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr class="border-b border-cyan-200 hover:bg-cyan-100 transition-colors">
                                                    <td class="p-4 text-gray-700 font-medium text-base">– Miêu tả ngoại hình, hoạt động,... làm nổi bật đặc điểm riêng của người được tả.</td>
                                                    <td class="p-4 text-center">
                                                        <div class="star-group flex gap-2 justify-center" data-row="2">
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 1)">☆</span>
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 2)">☆</span>
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 3)">☆</span>
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 4)">☆</span>
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 5)">☆</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr class="border-b border-cyan-200 hover:bg-cyan-100 transition-colors">
                                                    <td class="p-4 text-gray-700 font-medium text-base">– Thể hiện tình cảm đối với người được tả.</td>
                                                    <td class="p-4 text-center">
                                                        <div class="star-group flex gap-2 justify-center" data-row="3">
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 1)">☆</span>
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 2)">☆</span>
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 3)">☆</span>
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 4)">☆</span>
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 5)">☆</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr class="hover:bg-cyan-100 transition-colors">
                                                    <td class="p-4 text-gray-700 font-medium text-base">– Trình bày bài sạch đẹp, không mắc lỗi chính tả, lỗi diễn đạt.</td>
                                                    <td class="p-4 text-center">
                                                        <div class="star-group flex gap-2 justify-center" data-row="4">
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 1)">☆</span>
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 2)">☆</span>
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 3)">☆</span>
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 4)">☆</span>
                                                            <span class="star-btn text-2xl cursor-pointer transition-all hover:scale-125" onclick="rateViet(this, 5)">☆</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <!-- Section 3 -->
                                <div class="mb-12">
                                    <p class="text-lg font-bold text-gray-800 mb-8 flex items-baseline">
                                        <span class="text-red-500 font-extrabold mr-2 text-2xl">3.</span>
                                        <span>Viết lại một số câu văn hoặc đoạn văn trong bài làm của em cho hay hơn theo gợi ý dưới đây:</span>
                                    </p>
                                    <div class="space-y-10 pl-4 border-l-4 border-blue-100 ml-3">
                                        <!-- 3a -->
                                        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                            <p class="text-gray-800 font-bold mb-4 text-lg">a. Sử dụng từ ngữ giàu sức gợi tả hoặc hình ảnh so sánh gây ấn tượng.</p>
                                            <div class="bg-blue-50/50 p-4 rounded-xl mb-4 text-sm text-gray-600 italic">
                                                <p class="mb-2">Ví dụ: <br>"- Giọng nói của bà tôi đặc biệt trầm bổng, nghe <b>như</b> tiếng chuông đồng..."</p>
                                                <p>"- A Cháng đẹp người thật... ngực nở vòng cung, da đỏ <b>như</b> lim..."</p>
                                            </div>
                                            <div class="flex flex-col gap-3">
                                                <label class="text-sm font-bold text-blue-600">📝 Bài làm của em:</label>
                                                <textarea id="viet-inputA" rows="3" class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-base font-medium transition-all resize-none bg-gray-50 focus:bg-white" placeholder="Nhập câu văn em đã chỉnh sửa..."></textarea>
                                                <div class="flex justify-end">
                                                    <button onclick="checkVietAI('viet-inputA', 'a')" class="px-5 py-2.5 rounded-xl bg-gradient-to-tr from-green-400 to-green-600 text-white shadow-lg shadow-green-200 flex items-center gap-2 hover:scale-105 transition-transform font-bold" title="Nhờ AI nhận xét">
                                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                                        Xem nhận xét
                                                    </button>
                                                </div>
                                                <div id="feedback-viet-inputA" class="hidden p-4 rounded-xl bg-green-50 text-green-800 text-sm font-medium border border-green-200"></div>
                                            </div>
                                        </div>

                                        <!-- 3b -->
                                        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                            <p class="text-gray-800 font-bold mb-4 text-lg">b. Bộc lộ suy nghĩ, cảm xúc với người được tả.</p>
                                            <div class="bg-blue-50/50 p-4 rounded-xl mb-4 text-sm text-gray-600 italic">
                                                <p>Ví dụ: "...tôi sẽ <b>không bao giờ quên</b> đôi mắt của cô giáo nhìn tôi lúc ấy. Ánh mắt cô cũng <b>âu yếm, trìu mến</b> như ánh mắt bà nhìn tôi."</p>
                                            </div>
                                            <div class="flex flex-col gap-3">
                                                <label class="text-sm font-bold text-purple-600">📝 Bài làm của em:</label>
                                                <textarea id="viet-inputB" rows="3" class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 text-base font-medium transition-all resize-none bg-gray-50 focus:bg-white" placeholder="Nhập câu văn em đã chỉnh sửa..."></textarea>
                                                <div class="flex justify-end">
                                                    <button onclick="checkVietAI('viet-inputB', 'b')" class="px-5 py-2.5 rounded-xl bg-gradient-to-tr from-purple-400 to-purple-600 text-white shadow-lg shadow-purple-200 flex items-center gap-2 hover:scale-105 transition-transform font-bold" title="Nhờ AI nhận xét">
                                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                                        Xem nhận xét
                                                    </button>
                                                </div>
                                                <div id="feedback-viet-inputB" class="hidden p-4 rounded-xl bg-purple-50 text-purple-800 text-sm font-medium border border-purple-200"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Image Upload for Mobile Students -->
                                <div class="bg-indigo-50 p-6 rounded-[24px] border border-indigo-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                                    <div class="flex-1">
                                        <label class="block text-indigo-800 font-bold text-base mb-1">📷 Nộp ảnh chụp bài làm (nếu không nhập máy)</label>
                                        <p class="text-sm text-indigo-600">Em có thể viết ra giấy rồi chụp ảnh nộp cho thầy nhé!</p>
                                    </div>
                                    <div class="relative">
                                        <input type="file" id="viet221-w21-file" accept="image/*" capture="environment" class="hidden" 
                                            onchange="const s = document.getElementById('file-status-221-w21'); if(s) { s.innerText = '✅ Đã chọn ảnh: ' + this.files[0].name; s.classList.remove('hidden'); }">
                                        <label for="viet221-w21-file" class="cursor-pointer bg-white text-indigo-600 font-bold py-3 px-6 rounded-xl border-2 border-indigo-300 hover:bg-indigo-50 transition-all flex items-center gap-2 shadow-sm">
                                            <span class="text-2xl">📸</span> Chọn / Chụp Ảnh
                                        </label>
                                    </div>
                                </div>
                                <div id="file-status-221-w21" class="hidden text-center text-green-600 font-bold bg-green-50 p-2 rounded-lg border border-green-200 mb-8"></div>

                                <!-- Submit All Button -->
                                <div class="flex justify-center my-12 pt-8 border-t border-gray-100">
                                    <div class="text-center">
                                        <p class="text-gray-500 font-bold mb-4 uppercase tracking-widest text-xs">Sau khi hoàn thành bài 2 và bài 3, em hãy nộp bài nhé:</p>
                                        <button onclick="startSubmitLesson221Viet()" class="bg-gradient-to-r from-red-500 to-pink-600 text-white px-10 py-5 rounded-3xl font-black text-2xl shadow-2xl hover:scale-110 transition-all flex items-center gap-4 animate-bounce shadow-pink-200 border-4 border-white">
                                            <span class="text-3xl">🚀</span>
                                            <span>NỘP CẢ BÀI CHO GIÁO VIÊN</span>
                                        </button>
                                    </div>
                                </div>

                                <!-- Footer Section -->
                                <div class="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center gap-6 bg-orange-50/30 p-6 rounded-2xl">
                                    <div class="bg-orange-100 p-4 rounded-2xl shadow-sm text-orange-500">
                                        <i class="fas fa-home text-2xl"></i>
                                    </div>
                                    <p class="text-gray-700 italic font-medium text-lg text-center md:text-left">Đọc bài văn tả người của em cho người thân nghe, chia sẻ những điều thầy cô nhận xét về bài làm của em và các bạn.</p>
                                </div>
                            </div>
                            
`
                }
            ]
        },
        "quiz": {
            "settings": { "pick": 10 },
            "questions": [
                { "q": "Bài văn tả người cần có những phần nào?", "a": ["Chỉ mở bài", "Mở bài, thân bài, kết bài", "Chỉ thân bài", "Mở bài và kết bài"], "c": 1 },
                { "q": "Khi miêu tả người, ta cần làm nổi bật điều gì?", "a": ["Đặc điểm chung", "Đặc điểm riêng của người được tả", "Giống mọi người", "Không cần nổi bật"], "c": 1 },
                { "q": "Phần nào giúp bài văn thể hiện tình cảm với người được tả?", "a": ["Chỉ mở bài", "Chỉ kết bài", "Cả bài văn", "Không cần thể hiện"], "c": 2 },
                { "q": "Câu văn nào sử dụng hình ảnh so sánh?", "a": ["Bà tôi rất hiền.", "Giọng bà như tiếng chuông đồng.", "Bà hay kể chuyện.", "Bà thích đọc sách."], "c": 1 },
                { "q": "Từ nào là từ ngữ giàu sức gợi tả?", "a": ["Đẹp", "Cao", "Trầm bổng", "Tốt"], "c": 2 },
                { "q": "Bài văn tả người nên tránh điều gì?", "a": ["Dùng từ ngữ sinh động", "Mắc lỗi chính tả", "Thể hiện tình cảm", "Miêu tả chi tiết"], "c": 1 },
                { "q": "Câu nào bộc lộ cảm xúc với người được tả?", "a": ["Mẹ tôi 40 tuổi.", "Tôi yêu mẹ vô cùng.", "Mẹ làm giáo viên.", "Mẹ cao 1m60."], "c": 1 },
                { "q": "Khi chỉnh sửa bài văn, ta cần làm gì?", "a": ["Viết lại toàn bộ", "Sửa những câu chưa hay", "Xóa hết", "Không cần sửa"], "c": 1 },
                { "q": "Hình ảnh so sánh giúp bài văn như thế nào?", "a": ["Ngắn hơn", "Sinh động, gợi cảm hơn", "Khô khan hơn", "Dài hơn"], "c": 1 },
                { "q": "Sau khi viết xong, em nên làm gì?", "a": ["Nộp ngay", "Đọc lại và chỉnh sửa", "Xé bỏ", "Không làm gì"], "c": 1 }
            ]
        }
    }
};