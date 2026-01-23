const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event) => {
  // 1. Ghi nhật ký khi có người bấm nút
  console.log("--- EduRobot đã nhận được bài làm ---");

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Chỉ chấp nhận POST" };
  }

  try {
    const { prompt, studentInput } = JSON.parse(event.body);
    console.log("Câu hỏi:", prompt);
    console.log("Học sinh làm:", studentInput);

    // 2. Kiểm tra API Key
    if (!process.env.GEMINI_API_KEY) {
      console.error("LỖI: Thầy chưa dán API Key vào Netlify rồi!");
      return { statusCode: 500, body: JSON.stringify({ feedback: "Thầy chưa cài khóa API!" }) };
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemInstruction = `Bạn là giáo viên dạy giỏi lớp 5. Chấm bài tập này: 
    Đề: ${prompt}. Trò làm: ${studentInput}. 
    Nhận xét ngắn gọn, khích lệ, đúng phong cách tiểu học Việt Nam.`;

    // 3. Gọi AI và ghi nhật ký
    console.log("Đang chờ Gemini trả lời...");
    const result = await model.generateContent(systemInstruction);
    const response = await result.response;
    const text = response.text();
    
    console.log("AI đã trả lời thành công!");

    return {
      statusCode: 200,
      body: JSON.stringify({ feedback: text }),
    };
  } catch (error) {
    console.error("LỖI HỆ THỐNG:", error.message);
    return { 
      statusCode: 500, 
      body: JSON.stringify({ feedback: "EduRobot đang bận, em thử lại sau nhé!" }) 
    };
  }
};
