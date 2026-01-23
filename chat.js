const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Chỉ chấp nhận phương thức POST" };
  }

  try {
    const { prompt, studentInput } = JSON.parse(event.body);
    
    // Sử dụng biến môi trường đã cài đặt trên Netlify
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemInstruction = `Bạn là một giáo viên tiểu học vui tính, dạy giỏi lớp 5. 
    Hãy nhận xét bài tập Tiếng Việt sau. 
    Yêu cầu đề bài: "${prompt}". 
    Học sinh làm: "${studentInput}".
    Hãy nhận xét ngắn gọn, khích lệ, chỉ ra lỗi sai nếu có và khen ngợi nếu làm tốt. Trả lời dưới 60 từ.`;

    const result = await model.generateContent(systemInstruction);
    const response = await result.response;
    
    return {
      statusCode: 200,
      body: JSON.stringify({ feedback: response.text() }),
    };
  } catch (error) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: "Lỗi kết nối AI: " + error.message }) 
    };
  }
};