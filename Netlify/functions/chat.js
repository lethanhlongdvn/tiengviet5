const { GoogleGenerativeAI } = require("@google/generative-ai");

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
    const apiKey = "AIzaSyAXbN4-DsD-6-wOr-j2qcj5R5V2PAgqhaQ";
    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Chưa cấu hình API Key." })
      };
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // 2. Chế độ Chuyên gia (Dựa trên tư vấn từ Gemini)
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
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: systemInstruction
      });

      const prompt = `
        Phân tích bài tập làm văn sau của học sinh và trả về kết quả dưới định dạng JSON thuần túy (không bao gồm Markdown):
        "${sentence}"
        
        Yêu cầu cấu trúc JSON:
        {
          "diem": "điểm/10",
          "uu_diem": "Những lời khen về cách dùng từ, hình ảnh so sánh hoặc tình cảm trong bài",
          "loi_sai": "Chỉ ra lỗi ngữ pháp, lỗi logic cặp từ (nếu có) hoặc lỗi diễn đạt",
          "huong_dan": "Gợi ý cách viết lại câu đó cho hay hơn, tình cảm hơn",
          "loi_nhan": "Một lời nhắn gửi yêu thương, khích lệ từ Cô giáo dành cho em"
        }
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      let text = response.text();

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
          error: "EduRobot gặp sự cố khi kết nối bộ não. Em hãy thử lại sau nhé!",
          details: error.message
        })
      };
    }
  } catch (err) {
    return { statusCode: 400, body: "Invalid JSON" };
  }
};
