# Quy trình chuẩn hóa bài đọc mới (Tiểu chuẩn 2026)

Quy trình này áp dụng để chuyển đổi các bài học từ file HTML cũ sang hệ thống mới (`lesson_viewer.html` + `data/lessons.js`) với giao diện 2 cột hiện đại.

### Bước 1: Trích xuất & Chuẩn bị nội dung
1.  **Âm thanh**: Lấy đường dẫn file trong `am_thanh/`.
2.  **Văn bản bài đọc**: Trích xuất từ file nguồn, giữ lại định dạng thơ (`<br>`) hoặc văn xuôi.
3.  **Hộp "Ý nghĩa"**: Lấy nội dung chính của bài.
4.  **Tìm hiểu bài**: Các câu hỏi/đáp án chuyển sang dạng `<details><summary>`.
5.  **Trắc nghiệm**: Danh sách câu hỏi và chỉ số đáp án đúng (0, 1, 2, 3).

### Bước 2: Cấu trúc hóa trong [lessons.js](file:///c:/Users/Admin/Desktop/tiengviet5/data/lessons.js)
Sử dụng cấu trúc 2 cột (70/30) bằng Tailwind CSS trong phần `tabs.lesson.blocks`:

```javascript
{
    "type": "html",
    "content": `
    <div class="flex flex-col lg:flex-row gap-8">
        <!-- CỘT TRÁI (70%): Nội dung bài đọc & Ý nghĩa -->
        <div class="w-full lg:w-[70%] space-y-6">
            <div class="bg-white rounded-[30px] p-8 shadow-sm border border-gray-100">
                <h1 class="text-3xl font-black text-blue-900 text-center mb-6">Tên Bài Học</h1>
                <div class="reading-area text-lg text-gray-800 leading-relaxed font-serif">
                    <!-- NỘI DUNG BÀI ĐỌC Ở ĐÂY -->
                    <!-- Nếu là thơ: dùng <p class="mb-4" style="text-indent: 0;"> -->
                </div>
            </div>
            
            <!-- Hộp Ý nghĩa (Luôn nằm ở cột trái) -->
            <div class="bg-blue-50 rounded-[24px] p-6 border-l-8 border-blue-400">
                <h3 class="text-blue-700 font-black mb-2 uppercase text-sm">Ý nghĩa / Nội dung chính</h3>
                <p class="italic text-gray-700 font-bold">...</p>
            </div>
        </div>

        <!-- CỘT PHẢI (30%): Tìm hiểu bài -->
        <aside class="w-full lg:w-[30%]">
            <div class="bg-yellow-50 rounded-[30px] p-6 border border-yellow-100 sticky top-20">
                <h3 class="text-yellow-700 font-black mb-4 uppercase text-sm">Câu hỏi tìm hiểu bài</h3>
                <div class="space-y-3">
                    <details class="group bg-white rounded-xl shadow-sm overflow-hidden">
                        <summary class="p-4 font-bold cursor-pointer hover:bg-yellow-100/50">1. Câu hỏi?</summary>
                        <div class="p-4 bg-gray-50 text-gray-700 border-t">Gợi ý trả lời...</div>
                    </details>
                </div>
            </div>
        </aside>
    </div>
    `
}
```

### Bước 3: Tiêu chuẩn trình bày (Styling Rules)
- **Thơ (Poem)**:
    - Văn bản căn lề trái (`text-left`).
    - Không thụt đầu dòng (`text-indent: 0;`).
    - Căn giữa khối thơ (`max-w-fit mx-auto`).
- **Bố cục**: Luôn là 70/30 trên màn hình lớn (`lg:row`).
- **Hộp Ý nghĩa**: Phải nằm dưới bài đọc ở cột bên trái (70%).

### Bước 4: Kiểm tra (Verification)
1. Mở `lesson_viewer.html?id=[ID_BÀI]`.
2. Kiểm tra giao diện 70/30.
3. Kiểm tra thơ không bị thụt đầu dòng.
4. Kiểm tra hộp "Ý nghĩa" nằm ở cột trái.
5. Chạy trắc nghiệm và nộp thử để kiểm tra Firestore.
