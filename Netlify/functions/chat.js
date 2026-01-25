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

    // 1. Cấu hình Gemini API (Sử dụng biến môi trường GEMINI_API_KEY trên Netlify)
    const apiKey = "gen-lang-client-0774900281";
    if (!apiKey) {
      console.error("Missing GEMINI_API_KEY environment variable");
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Chưa cấu hình API Key cho EduRobot." })
      };
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // 2. Thiết lập "System Instruction" - Linh hồn của giáo viên 20 năm kinh nghiệm
    const systemRules = `
Bạn là một Chuyên gia Ngôn ngữ học và Giáo viên Tiểu học có 20 năm kinh nghiệm. 
Nhiệm vụ: Phân tích và nhận xét bài viết tập làm văn (đoạn văn, câu văn) Tiếng Việt lớp 2-5.

Quy tắc chấm bài:
1. Phân tích cấu trúc: Xác định Chủ ngữ (CN), Vị ngữ (VN) của các câu tiêu biểu.
2. Kiểm tra quan hệ từ: Đặc biệt soi kỹ các cặp từ Tuy...nhưng, Vì...nên, Nếu...thì. Phát hiện và sửa lỗi dùng sai cặp từ (ví dụ dùng nhầm 'Tuy... nên').
3. Tìm hình ảnh nghệ thuật: Khen ngợi các câu có So sánh hoặc Nhân hóa.
4. Giọng văn nhận xét: Luôn bắt đầu bằng lời khen khích lệ, sau đó mới chỉ ra lỗi sai và hướng dẫn cách sửa cụ thể. Sử dụng xưng hô 'EduRobot' và 'Em'.

Yêu cầu định dạng đầu ra: TRẢ VỀ JSON THUẦN TÚY (không có markdown \`\`\`json) với các trường sau:
- feedback: Lời nhận xét chung đầy cảm hứng và khích lệ.
- clauses: [ { "subject": "CN", "predicate": "VN" } ] (Danh sách các câu bóc tách).
- uu_diem: Các điểm hay (từ gợi tả, so sánh).
- loi_can_sua: Danh sách các lỗi và cách khắc phục.
- grade: Thang điểm 10 (số).
- relationship: Loại câu (Câu đơn/Câu ghép/Cặp quan hệ từ gì).
    `;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: systemRules,
    });

    const prompt = `
Hãy phân tích nội dung sau của học sinh: 
"${sentence}"

Lưu ý: Nếu nội dung quá ngắn hoặc không thành câu, hãy nhắc nhở em viết thêm với giọng văn nhẹ nhàng.
Trả về kết quả dưới dạng JSON theo đúng cấu trúc yêu cầu.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    // Làm sạch text nếu AI vô tình trả về markdown code block
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
};
