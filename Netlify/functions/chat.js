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

    // 2. Tiền xử lý dữ liệu (Loại bỏ nhiễu từ đề bài)
    let processedSentence = sentence;
    const noisePatterns = [
      /bài\s+\d+[:.]?/gi,
      /sử\s+dụng\s+cặp\s+(kết\s+từ|từ\s+hô\s+ứng)[:.]?/gi,
      /viết\s+tiếp\s+vế\s+câu[:.]?/gi,
      /đặt\s+câu\s+ghép[:.]?/gi,
      /viết\s+tiếp\s+vào\s+đây[:.]?/gi,
      /^[a-z]\.?\s+/i,
      /\(hoặc\s+.*?\)/gi
    ];
    noisePatterns.forEach(p => processedSentence = processedSentence.replace(p, ""));
    processedSentence = processedSentence.trim().replace(/^[:.]\s*/, "").trim();

    // 3. Chế độ Chuyên gia + Quy tắc nghiêm ngặt
    const systemInstruction = `
      Bạn là Chuyên gia Ngôn ngữ học và Giáo viên Tiểu học tâm huyết với 20 năm kinh nghiệm. 
      Nhiệm vụ: Chấm bài viết (câu ghép hoặc đoạn văn) cho học sinh lớp 5.

      SIÊU QUY TẮC PHÂN TÍCH (EDUROBOT V3):
      1. KHÔNG ĐƯA ĐỀ BÀI VÀO PHÂN TÍCH: Chỉ phân tích nội dung học sinh viết.
      2. KHÔNG NHẦM TỪ NỐI LÀ CHỦ NGỮ: CẤM "càng, nhưng, mà, thì, nên, vì, tuy, còn" làm Chủ ngữ.
         Ví dụ: "gió càng lớn" -> CN: gió, VN: càng lớn.
      3. KHÔNG BÁO "ẨN" SAI NGỮ CẢNH: Chỉ báo "Ẩn" khi vế thực sự khuyết (Ví dụ: "Tuy mệt nhưng (em) vẫn đi học").

      Nội dung cần chú trọng:
      - Tả người (nếu là đoạn văn): ngoại hình, hoạt động, so sánh.
      - Câu ghép: cặp từ quan hệ, logic vế câu.

      Quy tắc chấm:
      - Khen ngợi sự sáng tạo. Gợi ý sửa lỗi nhẹ nhàng.
      - Trả về JSON sạch sẽ.
    `;

    try {
      // 4. Gọi Gemini 1.5 Flash
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        systemInstruction: systemInstruction,
        contents: [{
          role: 'user',
          parts: [{
            text: `Phân tích bài tập sau: "${processedSentence}"\n\nTrả về JSON:\n{\n  "diem": "điểm/10",\n  "uu_diem": "...",\n  "loi_sai": "...",\n  "huong_dan": "...",\n  "loi_nhan": "...",\n  "analysis": { "ve1": {"CN": "...", "VN": "..."}, "ve2": {"CN": "...", "VN": "..."} }\n}`
          }]
        }]
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
