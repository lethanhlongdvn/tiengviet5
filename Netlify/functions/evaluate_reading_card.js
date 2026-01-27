const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const { verses, feelings, poemName } = JSON.parse(event.body);

        // 1. Validate Input
        if (!verses || !feelings) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing required fields (verses or feelings)" })
            };
        }

        // 2. config Groq API
        const apiKey = process.env.GROQ_API_KEY;
        if (!apiKey) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Server Error: Missing API Key" })
            };
        }

        // 3. System Instruction
        const systemInstruction = `
      Bạn là một giáo viên Tiểu học ân cần và sâu sắc. Nhiệm vụ của bạn là đánh giá "Phiếu đọc sách" của học sinh lớp 5.
      
      Bài làm gồm:
      1. Câu thơ/hình ảnh đẹp (verses)
      2. Cảm xúc/suy nghĩ của em (feelings)
      
      Tiêu chí đánh giá:
      1. Câu thơ/hình ảnh: Có chọn lọc không? Có đúng logic bài thơ không?
      2. Cảm xúc: Có chân thành, tự nhiên không? Có thể hiện được sự hiểu biết về bài thơ không?
      
      Hãy trả về kết quả dưới dạng JSON (KHÔNG markdown) với cấu trúc sau:
      {
         "score": (số nguyên từ 1-10, chấm rộng rãi, khích lệ là chính),
         "feedback_verses": "Nhận xét ngắn gọn (1-2 câu) về phần chọn câu thơ.",
         "feedback_feelings": "Nhận xét ngắn gọn (1-2 câu) về phần cảm xúc.",
         "general_comment": "Lời khen hoặc động viên chung."
      }
      
      Lưu ý: Dùng ngôn từ nhẹ nhàng, sư phạm, phù hợp với học sinh lớp 5.
    `;

        // 4. Call Groq AI
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    { role: "system", content: systemInstruction },
                    {
                        role: "user",
                        content: `Bài thơ: "${poemName || 'Không rõ'}".\nHọc sinh chọn câu thơ: "${verses}".\nCảm xúc của học sinh: "${feelings}".`
                    }
                ],
                response_format: { type: "json_object" },
                temperature: 0.7
            })
        });

        if (!response.ok) {
            throw new Error(`Groq API Error: ${response.statusText}`);
        }

        const rawData = await response.json();
        let content = rawData.choices[0].message.content;

        // Clean up markdown if present
        const markdownMatch = content.match(/```json\n([\s\S]*?)\n```/) || content.match(/```([\s\S]*?)```/);
        if (markdownMatch) {
            content = markdownMatch[1];
        }

        const aiContent = JSON.parse(content);

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(aiContent)
        };

    } catch (error) {
        console.error("Evaluation Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
