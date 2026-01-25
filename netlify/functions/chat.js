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

  // Các cặp quan hệ từ phổ biến lớp 5 - Linh hoạt hơn với text ở đầu
  const patterns = [
    { type: "Nguyên nhân - Kết quả", pair: ["vì", "nên"], regex: /.*?vì\s+(.*?)\s+nên\s+(.*)/i },
    { type: "Nguyên nhân - Kết quả", pair: ["bởi vì", "nên"], regex: /.*?bởi vì\s+(.*?)\s+nên\s+(.*)/i },
    { type: "Nguyên nhân - Kết quả", pair: ["nhờ", "mà"], regex: /.*?nhờ\s+(.*?)\s+mà\s+(.*)/i },
    { type: "Tương phản", pair: ["tuy", "nhưng"], regex: /.*?tuy\s+(.*?)\s+nhưng\s+(.*)/i },
    { type: "Tương phản", pair: ["mặc dù", "nhưng"], regex: /.*?mặc dù\s+(.*?)\s+nhưng\s+(.*)/i },
    { type: "Giả thiết - Kết quả", pair: ["nếu", "thì"], regex: /.*?nếu\s+(.*?)\s+thì\s+(.*)/i },
    { type: "Giả thiết - Kết quả", pair: ["hễ", "thì"], regex: /.*?hễ\s+(.*?)\s+thì\s+(.*)/i },
    { type: "Tăng tiến", pair: ["chẳng những", "mà"], regex: /.*?chẳng những\s+(.*?)\s+mà\s+(.*)/i },
    { type: "Tăng tiến", pair: ["không những", "mà"], regex: /.*?không những\s+(.*?)\s+mà\s+(.*)/i },
    { type: "Tăng tiến", pair: ["không chỉ", "mà"], regex: /.*?không chỉ\s+(.*?)\s+mà\s+(.*)/i },
    { type: "Tăng tiến", pair: ["càng", "càng"], regex: /(.*?)\s+càng\s+(.*?)[,;\s]+càng\s+(.*)/i }
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
        if (v1 && v2) {
          result.clauses.push(deconstructClause(v1));
          result.clauses.push(deconstructClause(v2));
        } else {
          matched = false; // Một vế bị trống -> coi như không khớp pattern
        }
      }
      if (matched) break;
    }
  }

  if (!matched) {
    // Thử tách theo quan hệ từ đơn: và, nhưng, rồi, thì... hoặc dấu phẩy
    const singleConnectives = [" và ", " nhưng ", " rồi ", " thì ", " hay ", " hoặc ", " mà còn ", " mà "];
    let splitWord = "";
    for (const conn of singleConnectives) {
      if (sentence.toLowerCase().includes(conn)) {
        splitWord = conn;
        break;
      }
    }

    if (splitWord) {
      result.relationship = `Nối bằng quan hệ từ '${splitWord.trim()}'`;
      const parts = sentence.split(new RegExp(splitWord, "i"));
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
  const validClauses = result.clauses.filter(c => c.subject !== "Chưa xác định" && c.subject.length > 1);

  if (result.clauses.length >= 2) {
    result.grade = validClauses.length >= 2 ? 10 : 8;
    result.feedback = "Câu văn của em có cấu trúc tốt, thầy cô đã nhận ra các vế câu và quan hệ từ em sử dụng. Em chú ý diễn đạt gãy gọn hơn nhé!";
    if (result.grade === 10) result.feedback = `Chào em! EduRobot rất thích câu này. Em đã sử dụng đúng quan hệ "${result.relationship}" và chia vế câu rất chuẩn xác.`;
  } else {
    result.grade = 5;
    result.feedback = "Câu này dường như vẫn thiếu một vế hoặc chưa rõ các thành phần em ạ. Em hãy thử sử dụng 'Vì... nên...', 'Tuy... nhưng...' hoặc ghép hai vế bằng các từ như 'và', 'mà' xem sao.";
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
