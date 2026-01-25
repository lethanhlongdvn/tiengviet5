const { GoogleGenAI } = require("@google/genai");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { sentence } = JSON.parse(event.body);
    if (!sentence) {
      return { statusCode: 400, body: JSON.stringify({ error: "No sentence or content provided" }) };
    }

    // 1. Cấu hình Gemini API
    const apiKey = process.env.API_KEY_TIENGVIET;
    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Chưa cấu hình API Key." })
      };
    }

    const ai = new GoogleGenAI({ apiKey });

    // 2. Chế độ Chuyên gia
    const systemInstruction = `
      Bạn là Chuyên gia Ngôn ngữ học và Giáo viên Tiểu học tâm huyết với 20 năm kinh nghiệm. 
      Nhiệm vụ: Chấm bài viết đoạn văn tả người cho học sinh lớp 5 (Bài 21).

      Kiến thức trọng tâm Bài 21:
      - Tả ngoại hình: vóc người gọn chắc, dáng đi dứt khoát, da nâu sẫm, má nhăn nheo, tóc mai vắt cong...
      - Tả hoạt động: đưa chổi thoăn thoắt, nhịp nhàng, chạy ra cửa đón cháu, cười phúc hậu...
      - Nghệ thuật: Ưu tiên phát hiện và khen ngợi phép So sánh (như một ngọn sóng, như dấu hỏi lộn ngược).

      Quy tắc chấm:
      - Khen ngợi sự sáng tạo và tình cảm chân thành của học sinh.
      - Kiểm tra lỗi logic cặp từ quan hệ đặc trưng (Ví dụ: Tuy...nhưng, Vì...nên).
      - Gợi ý sửa lỗi nhẹ nhàng, dễ hiểu, không dùng thuật ngữ quá khó.
    `;

    try {
      // 3. Gọi Gemini 1.5 Flash theo yêu cầu mới
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        systemInstruction: systemInstruction,
        contents: [{ role: 'user', parts: [{ text: `Phân tích bài tập sau và trả về JSON: "${sentence}"\n\nYêu cầu cấu trúc JSON:\n{\n  "diem": "điểm/10",\n  "uu_diem": "...",\n  "loi_sai": "...",\n  "huong_dan": "...",\n  "loi_nhan": "..."\n}` }] }]
      });

      let text = response.text;

      // Làm sạch text nếu AI trả về markdown code block
      text = text.replace(/```json/g, "").replace(/```/g, "").trim();

      const analysis = JSON.parse(text);

      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(analysis)
      };
    } catch (error) {
      console.error("AI Grading Error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: `Lỗi kết nối AI: ${error.message}`
        })
      };
    }
  } catch (err) {
    return { statusCode: 400, body: "Invalid JSON" };
  }
};
