exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    let { sentence } = JSON.parse(event.body);
    if (!sentence) {
      return { statusCode: 400, body: JSON.stringify({ error: "No sentence provided" }) };
    }

    // Quy tắc 1 (Isolation - V3): Loại bỏ triệt để các đoạn text hướng dẫn
    const noise = [
      /bài\s+\d+[:.]?/gi,
      /sử\s+dụng\s+cặp\s+(kết\s+từ|từ\s+hô\s+ứng)[:.]?/gi,
      /viết\s+tiếp\s+vế\s+câu[:.]?/gi,
      /đặt\s+câu\s+ghép[:.]?/gi,
      /viết\s+tiếp\s+vào\s+đây[:.]?/gi,
      /^[a-z]\.?\s+/i,
      /\(hoặc\s+.*?\)/gi
    ];
    noise.forEach(n => sentence = sentence.replace(n, ""));
    sentence = sentence.trim().replace(/^[:.]\s*/, "");

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
    { type: "Tăng tiến", pair: ["càng", "càng"], regex: /(.*?)\s*càng\s*(.*?)[,;\s]+(.*?)\s*càng\s*(.*)/i },
    { type: "Cặp từ hô ứng", pair: ["vừa", "đã"], regex: /(.*?)\s*vừa\s*(.*?)[,;\s]+(.*?)\s*đã\s+(.*)/i },
    { type: "Cặp từ hô ứng", pair: ["chưa", "đã"], regex: /(.*?)\s+chưa\s+(.*?)[,;\s]+đã\s+(.*)/i },
    { type: "Cặp từ hô ứng", pair: ["mới", "đã"], regex: /(.*?)\s+mới\s+(.*?)[,;\s]+đã\s+(.*)/i },
    { type: "Cặp từ hô ứng", pair: ["đâu", "đấy"], regex: /(.*?)\s+đâu\s+(.*?)[,;\s]+đấy\s+(.*)/i },
    { type: "Cặp từ hô ứng", pair: ["nào", "ấy"], regex: /(.*?)\s+nào\s+(.*?)[,;\s]+ấy\s+(.*)/i },
    { type: "Cặp từ hô ứng", pair: ["sao", "vậy"], regex: /(.*?)\s+sao\s+(.*?)[,;\s]+vậy\s+(.*)/i },
    { type: "Cặp từ hô ứng", pair: ["bao nhiêu", "bấy nhiêu"], regex: /(.*?)\s+bao nhiêu\s+(.*?)[,;\s]+bấy nhiêu\s+(.*)/i }
  ];

  let matched = false;
  for (const p of patterns) {
    const match = sentence.match(p.regex);
    if (match) {
      result.relationship = p.type;
      matched = true;

      if (p.pair[0] === "càng" || p.type === "Cặp từ hô ứng") {
        // match[1]: CN1, match[2]: VN1, match[3]: CN2, match[4]: VN2
        // Theo Quy tắc V2: "càng", "vừa", "đã" thuộc về Vị ngữ
        const v1_raw = (match[1].trim() + " " + p.pair[0] + " " + match[2].trim()).trim();
        const v2_raw = (match[3].trim() + " " + p.pair[1] + " " + match[4].trim().replace(/[.!?]$/, "")).trim();
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

  // Kiểm tra lỗi "Râu ông nọ cắm cằm bà kia"
  const mismatched = [
    { start: "vì", wrong: "nhưng", correct: "nên" },
    { start: "tuy", wrong: "nên", correct: "nhưng" },
    { start: "mặc", wrong: "nên", correct: "nhưng" }
  ];

  if (matched) {
    const sLow = sentence.toLowerCase();
    for (const m of mismatched) {
      if (sLow.includes(m.start) && sLow.includes(m.wrong)) {
        result.grade = 6;
        result.feedback = `Em đã bóc tách được các vế câu, nhưng cặp từ "${m.start}... ${m.wrong}" chưa đúng quan hệ ngữ pháp. Em nên dùng "${m.start}... ${m.correct}" nhé!`;
        return result;
      }
    }
  }

  // Chấm điểm tuyệt đối (Quy tắc V3)
  const validClauses = result.clauses.filter(c => c.subject !== "Ẩn (đối tượng ở vế 1)" && c.subject !== "Chưa xác định" && c.subject.length > 1);

  if (result.clauses.length >= 2) {
    // Nếu bóc tách chuẩn CN-VN và đúng cặp từ
    result.grade = 10;
    result.feedback = `Tuyệt vời! EduRobot đánh giá rất cao câu ghép này. Em đã sử dụng đúng quan hệ "${result.relationship}", bóc tách Chủ ngữ - Vị ngữ cực kỳ chính xác.`;

    // Nếu có vế bị "Chưa xác định" hoặc quá ngắn
    const hasError = result.clauses.some(c => c.subject === "Chưa xác định" || (c.subject !== "Ẩn (đối tượng ở vế 1)" && c.subject.length < 2));
    if (hasError) {
      result.grade = 9;
      result.feedback = `Câu văn của em rất tốt và đúng cấu trúc. Em hãy lưu ý hơn cách trình bày để phần bóc tách Chủ - Vị trở nên hoàn hảo hơn nữa nhé!`;
    }
  } else {
    result.grade = 5;
    result.feedback = "Câu này dường như vẫn chưa đủ 2 vế của một câu ghép hoàn chỉnh lớp 5 em ạ. Em hãy thử ghép thêm một vế nữa bằng các cặp từ nối nhé!";
  }

  return result;
}

/**
 * Bóc tách CN - VN (EduRobot V3 - Strict Connective Safety)
 * @param {string} text 
 */
function deconstructClause(text) {
  const words = text.split(/\s+/);

  // V3: TUYỆT ĐỐI các từ này không được là Chủ ngữ
  const connectives = [
    "càng", "nhưng", "mà", "thì", "nên", "vì", "tuy", "còn",
    "vừa", "đã", "mới", "đâu", "nào", "ấy", "sao", "vậy",
    "mặc", "dù", "hễ", "giá", "nếu", "bởi"
  ];

  // Danh sách động từ/tính từ mốc
  const commonVerbs = [
    "là", "đang", "đi", "học", "mưa", "nắng", "làm", "chơi",
    "rất", "đã", "sẽ", "cũng", "đều", "vẫn", "được", "bị",
    "xinh", "đẹp", "giỏi", "ngoan", "chăm", "không", "chưa",
    "chẳng", "hừng", "gặt", "trồng", "ra", "vào", "lên", "xuống",
    "hãy", "đừng", "chớ", "lại"
  ];

  let splitIdx = -1;

  for (let i = 0; i < words.length; i++) {
    const w = words[i].toLowerCase();
    // Quy tắc V3: Nếu gặp từ nối -> đây chắc chắn là điểm bắt đầu của VN
    if (connectives.includes(w)) {
      splitIdx = i;
      break;
    }
    // Nếu gặp động từ/tính từ mốc
    if (commonVerbs.includes(w)) {
      splitIdx = i;
      break;
    }
  }

  // Default split logic
  if (splitIdx === -1) {
    splitIdx = words.length > 1 ? 1 : 0;
  }

  let subject = words.slice(0, splitIdx).join(" ").trim();
  let predicate = words.slice(splitIdx).join(" ").trim();

  // Quy tắc 3 (V3): Xử lý chủ ngữ ẩn (Chỉ dùng khi vế câu thực sự khuyết)
  if (!subject && predicate) {
    subject = "Ẩn (đối tượng ở vế 1)";
  }

  return {
    clause: text,
    subject: subject || "Chưa xác định",
    predicate: predicate || "Chưa xác định"
  };
}
