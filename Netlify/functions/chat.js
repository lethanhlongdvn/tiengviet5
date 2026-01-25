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
    { type: "Giả thiết - Kết quả", pair: ["hễ", "thì"], regex: /hễ\s+(.*?)\s+thì\s+(.*)/i },
    { type: "Tăng tiến", pair: ["chẳng những", "mà"], regex: /chẳng những\s+(.*?)\s+mà\s+(.*)/i },
    { type: "Tăng tiến", pair: ["không những", "mà"], regex: /không những\s+(.*?)\s+mà\s+(.*)/i },
    { type: "Tăng tiến", pair: ["càng", "càng"], regex: /(.*?)\s+càng\s+(.*?)\s+càng\s+(.*)/i }
  ];

  let matched = false;
  for (const p of patterns) {
    const match = sentence.match(p.regex);
    if (match) {
      result.relationship = p.type;
      matched = true;

      if (p.pair[0] === "càng") {
        const v1_raw = match[1].trim() + " càng " + match[2].trim();
        const v2_raw = "càng " + match[3].trim().replace(/[.!?]$/, "");
        result.clauses.push(deconstructClause(v1_raw));
        result.clauses.push(deconstructClause(v2_raw));
      } else {
        const v1 = match[1].trim();
        const v2 = match[2].trim().replace(/[.!?]$/, "");
        result.clauses.push(deconstructClause(v1));
        result.clauses.push(deconstructClause(v2));
      }
      break;
    }
  }

  if (!matched) {
    // Thử tách theo quan hệ từ đơn: và, nhưng, rồi, thì... hoặc dấu phẩy
    const singleConnectives = [" và ", " nhưng ", " rồi ", " thì ", " hay ", " hoặc "];
    let splitWord = "";
    for (const conn of singleConnectives) {
      if (sentence.includes(conn)) {
        splitWord = conn;
        break;
      }
    }

    if (splitWord) {
      result.relationship = `Nối bằng quan hệ từ '${splitWord.trim()}'`;
      const parts = sentence.split(splitWord);
      parts.forEach(p => {
        if (p.trim()) result.clauses.push(deconstructClause(p.trim()));
      });
    } else {
      const parts = sentence.split(/[,;]/);
      if (parts.length >= 2) {
        result.relationship = "Nối trực tiếp";
        parts.forEach(p => {
          if (p.trim()) result.clauses.push(deconstructClause(p.trim()));
        });
      } else {
        result.clauses.push(deconstructClause(sentence));
      }
    }
  }

  // Tính điểm và Feedback
  const validClauses = result.clauses.filter(c => c.subject !== "Chưa xác định" && c.predicate !== "Chưa xác định");

  if (result.clauses.length >= 2) {
    result.grade = validClauses.length >= 1 ? 10 : 8; // Cho phép linh hoạt hơn cho HS lớp 5
    result.feedback = `Chào em! EduRobot đã xem bài làm của em. Câu văn của em đã thể hiện rõ cấu trúc của một câu ghép với quan hệ "${result.relationship}". Em đã bóc tách được các vế câu rất tốt, hãy tiếp tục phát huy nhé!`;
  } else {
    result.grade = 5;
    result.feedback = "Câu này dường như chưa đủ các vế của một câu ghép hoàn chỉnh em ạ. Hãy thử thêm một vế câu nữa bằng cách sử dụng các từ nối như 'và', 'nên', 'nhưng' để câu văn hay hơn nhé!";
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
