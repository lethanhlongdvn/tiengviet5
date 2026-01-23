const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event) => {
  // Chỉ cho phép phương thức POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { prompt, studentInput } = JSON.parse(event.body);
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemInstruction = `Bạn là một giáo viên tiểu học vui tính, dạy giỏi lớp 5. 
    Hãy chấm bài tập: "${prompt}". Học sinh viết: "${studentInput}".
    Nhận xét ngắn gọn (dưới 50 từ), khen ngợi sự cố gắng và sửa lỗi nhẹ nhàng.`;

    const result = await model.generateContent(systemInstruction);
    const response = await result.response;
    
    return {
      statusCode: 200,
      body: JSON.stringify({ feedback: response.text() }),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};