const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { sentence } = JSON.parse(event.body);
    if (!sentence) {
      return { statusCode: 400, body: JSON.stringify({ error: "No sentence or content provided" }) };
    }

    // 1. Cấu hình Groq API
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Chưa cấu hình GROQ_API_KEY trên Netlify." })
      };
    }

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


    // 3. Chế độ Chấm bài (Essay vs Sentence) vs Chat
    const body = JSON.parse(event.body);
    const mode = body.mode || 'essay'; // Mặc định là chấm bài văn
    const criteria = body.criteria || ''; // Tiêu chí chấm câu (nếu có)
    const history = body.history || []; // Lịch sử chat (cho mode 'chat')

    let systemInstruction = "";
    let messagesForApi = [];

    if (mode === 'chat') {
      // Chế độ Chat (Debate / Trò chuyện tự do)
      const baseSystemPrompt = `
          Bạn là Minh Trí, học sinh lớp 5.
          Nhiệm vụ: Thảo luận với bạn học về các chủ đề trong trường lớp.
          Phong cách: Thân thiện, dùng ngôn ngữ học sinh (tớ/cậu), ngắn gọn (2-3 câu).
          Luôn đặt câu hỏi ngược lại để duy trì hội thoại.
      `;

      systemInstruction = processedSentence || baseSystemPrompt;

      // Build messages strictly for chat mode API
      messagesForApi = [{ role: "system", content: systemInstruction }];

      if (Array.isArray(history) && history.length > 0) {
        history.forEach(h => {
          messagesForApi.push({
            role: (h.role === 'ai' || h.role === 'model' || h.role === 'assistant') ? 'assistant' : 'user',
            content: h.text || h.content || ''
          });
        });
      }

    } else if (mode === 'sentence_review') {
      // Chế độ chấm câu văn ngắn
      systemInstruction = `
            Bạn là Trợ lý Ngôn ngữ Tiếng Việt cho học sinh tiểu học.
            Nhiệm vụ: Nhận xét và đánh giá MỘT câu văn hoặc đoạn văn ngắn dựa trên tiêu chí cụ thể.
            
            TIÊU CHÍ ĐÁNH GIÁ: "${criteria}"

            Trả về JSON:
            - feedback: Lời nhận xét ngắn gọn, thân thiện, chỉ ra điểm tốt hoặc điểm cần sửa theo tiêu chí.
            - is_good: true (nếu đạt tiêu chí) hoặc false (nếu chưa đạt).
            - suggestion: Gợi ý sửa lại (nếu chưa đạt).
        `;
      messagesForApi = [
        { role: "system", content: systemInstruction },
        { role: "user", content: `Đánh giá câu văn: "${processedSentence}" theo tiêu chí: "${criteria}"` }
      ];

    } else {
      // Chế độ chấm bài văn (Mặc định - V4)
      systemInstruction = `
          Bạn là Chuyên gia Ngôn ngữ học và Giáo viên Tiểu học tâm huyết. 
          Nhiệm vụ: Chấm bài văn tả người cho học sinh lớp 5.
    
          SIÊU QUY TẮC PHÂN TÍCH (EDUROBOT V4):
          1. KIỂM TRA CẤU TRÚC 3 PHẦN:
             - Mở bài: Dẫn dắt, giới thiệu người định tả.
             - Thân bài: Tả ngoại hình (vóc dáng, khuôn mặt, trang phục...) và hoạt động (tính cách, thói quen...).
             - Kết bài: Nêu cảm nghĩ, tình cảm với người đó.
          2. KIỂM TRA ĐỘ DÀI: Bài văn phải đạt trên 100 từ mới coi là hoàn thành.
          3. PHÂN LOẠI TRẠNG THÁI (status):
             - "incomplete": Nếu bài thiếu ít nhất 1 trong 3 phần HOẶC dưới 100 từ.
             - "complete": Nếu đủ 3 phần VÀ từ 100 từ trở lên.
          4. PHẢN HỒI (loi_nhan, huong_dan): 
             - Nếu "incomplete": Chỉ rõ phần nào thiếu, cần viết thêm gì, động viên học sinh bấm nút "Tiếp tục".
             - Nếu "complete": Khen ngợi, chấm điểm cao nếu viết hay.
    
          Trả về JSON với các trường:
          - diem: (Ví dụ: "8/10")
          - status: "complete" hoặc "incomplete"
          - missing_parts: Mảng các phần còn thiếu (ví dụ: ["Kết bài"])
          - uu_diem: Các điểm hay trong bài
          - loi_sai: Các lỗi diễn đạt, chính tả (nếu có)
          - huong_dan: Lời khuyên cụ thể để bài hay hơn hoặc để hoàn thiện phần thiếu
          - loi_nhan: Lời nhắn tình cảm từ Thầy/Cô
          - analysis: { "mo_bai": "...", "than_bai": "...", "ket_bai": "..." } (Phân tích nội dung từng phần)
        `;
      messagesForApi = [
        { role: "system", content: systemInstruction },
        { role: "user", content: `Hãy phân tích bài văn sau của học sinh lớp 5: "${processedSentence}"` }
      ];
    }

    try {
      // 4. Gọi Groq Cloud (Llama 3.3 70B)
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: messagesForApi,
          response_format: mode === 'chat' ? { type: "text" } : { type: "json_object" }, // Chat mode returns text usually, unless summary
          temperature: 0.7
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `API Error: ${response.status}`);
      }

      const rawData = await response.json();
      let content = rawData.choices[0].message.content;

      // Clean up markdown if present
      const markdownMatch = content.match(/```json\n([\s\S]*?)\n```/) || content.match(/```([\s\S]*?)```/);
      if (markdownMatch) {
        content = markdownMatch[1];
      }

      const analysis = JSON.parse(content);

      // Thêm đếm từ phía server để chắc chắn
      const wordCount = processedSentence.split(/\s+/).filter(word => word.length > 0).length;
      analysis.word_count = wordCount;

      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(analysis)
      };
    } catch (error) {
      console.error("Groq Grading Error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: `Lỗi kết nối AI (Groq): ${error.message}`
        })
      };
    }
  } catch (err) {
    return { statusCode: 400, body: "Invalid JSON" };
  }
};
