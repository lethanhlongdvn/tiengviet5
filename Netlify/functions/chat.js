exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { sentence } = JSON.parse(event.body);
    if (!sentence) {
      return { statusCode: 400, body: JSON.stringify({ error: "No sentence provided" }) };
    }

    const analysis = analyzeSentence(sentence);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(analysis)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};

/**
 * Phân tích câu ghép Tiếng Việt 5 (Chủ ngữ - Vị ngữ)
 * @param {string} sentence 
 */
function analyzeSentence(sentence) {
  const result = {
    original: sentence,
    clauses: [],
    relationship: "Unknown",
    grade: 0,
    feedback: ""
  };

  // Các cặp quan hệ từ phổ biến lớp 5
  const patterns = [
    { type: "Nguyên nhân - Kết quả", pair: ["vì", "nên"], regex: /vì\s+(.*?)\s+nên\s+(.*)/i },
    { type: "Nguyên nhân - Kết quả", pair: ["bởi vì", "nên"], regex: /bởi vì\s+(.*?)\s+nên\s+(.*)/i },
    { type: "Tương phản", pair: ["tuy", "nhưng"], regex: /tuy\s+(.*?)\s+nhưng\s+(.*)/i },
    { type: "Tương phản", pair: ["mặc dù", "nhưng"], regex: /mặc dù\s+(.*?)\s+nhưng\s+(.*)/i },
    { type: "Giả thiết - Kết quả", pair: ["nếu", "thì"], regex: /nếu\s+(.*?)\s+thì\s+(.*)/i },
    { type: "Tăng tiến", pair: ["càng", "càng"], regex: /(.*?)\s+càng\s+(.*?)\s+càng\s+(.*)/i }
  ];

  let matched = false;
  for (const p of patterns) {
    const match = sentence.match(p.regex);
    if (match) {
      result.relationship = p.type;

      if (p.pair[0] === "càng") {
        // Xử lý riêng cho cấu trúc càng... càng...
        // Tạm thời đơn giản hóa
      } else {
        const v1 = match[1].trim();
        const v2 = match[2].trim().replace(/[.!?]$/, "");

        result.clauses.push(deconstructClause(v1));
        result.clauses.push(deconstructClause(v2));
      }
      matched = true;
      break;
    }
  }

  if (!matched) {
    // Nếu không khớp pattern, thử tách theo dấu phẩy
    const parts = sentence.split(/[,;]/);
    if (parts.length >= 2) {
      result.relationship = "Nối trực tiếp hoặc từ đơn";
      parts.forEach(p => {
        if (p.trim()) result.clauses.push(deconstructClause(p.trim()));
      });
    } else {
      result.clauses.push(deconstructClause(sentence));
    }
  }

  // Tính điểm và Feedback theo phong cách giáo viên 20 năm kinh nghiệm
  if (result.clauses.length >= 2) {
    result.grade = 10;
    result.feedback = `Chào em! Thầy/Cô đã xem bài của em. Câu ghép của em sử dụng rất tốt cặp quan hệ từ "${result.relationship}". ` +
      `Em đã bóc tách các vế câu rất rõ ràng. Cố gắng phát huy tinh thần học tập này nhé!`;
  } else {
    result.grade = 5;
    result.feedback = "Câu này dường như chưa phải là một câu ghép hoàn chỉnh có đủ hai vế em ạ. Em hãy thử sử dụng thêm các cặp từ nối như 'Vì... nên...' hay 'Tuy... nhưng...' để câu văn hay hơn nhé!";
  }

  return result;
}

/**
 * Bóc tách CN - VN cơ bản (Rule-based)
 * @param {string} text 
 */
function deconstructClause(text) {
  const words = text.split(" ");

  // Danh sách từ nối/động từ/tính từ làm mốc phân chia VN
  const commonVerbs = [
    "là", "đang", "đi", "học", "mưa", "nắng", "làm", "chơi",
    "rất", "đã", "sẽ", "cũng", "đều", "vẫn", "được", "bị",
    "xinh", "đẹp", "giỏi", "ngoan", "chăm"
  ];

  let splitIdx = -1;
  // Ưu tiên tìm từ làm mốc phân chia đầu tiên
  for (let i = 0; i < words.length; i++) {
    if (commonVerbs.includes(words[i].toLowerCase())) {
      // Nếu từ đó là "rất", "đang", "đã", "sẽ" thì chắc chắn là bắt đầu VN
      splitIdx = i;
      break;
    }
  }

  // Nếu không thấy mốc, thử tìm động từ/tính từ khác (giả định đơn giản cho Grade 5)
  if (splitIdx === -1) {
    splitIdx = Math.max(1, Math.floor(words.length / 2));
  }

  return {
    clause: text,
    subject: words.slice(0, splitIdx).join(" ").trim() || "Chưa xác định",
    predicate: words.slice(splitIdx).join(" ").trim() || "Chưa xác định"
  };
}
