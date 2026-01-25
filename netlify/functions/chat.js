exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    let { sentence } = JSON.parse(event.body);
    if (!sentence) {
      return { statusCode: 400, body: JSON.stringify({ error: "No sentence provided" }) };
    }

    // Quy tắc 1 (Isolation - V4): Loại bỏ triệt để các đoạn text hướng dẫn
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

  // Các cặp quan hệ từ phổ biến lớp 5 - Linh hoạt hơn
  const patterns = [
    { type: "Nguyên nhân - Kết quả", pair: ["vì", "nên"], regex: /.*?vì\s+(.*?)\s+nên\s+(.*)/i },
    { type: "Nguyên nhân - Kết quả", pair: ["bởi vì", "nên"], regex: /.*?bởi vì\s+(.*?)\s+nên\s+(.*)/i },
    { type: "Nguyên nhân - Kết quả", pair: ["bởi", "nên"], regex: /.*?bởi\s+(.*?)\s+nên\s+(.*)/i }, // Added "Bởi... nên..."
    { type: "Nguyên nhân - Kết quả", pair: ["nhờ", "mà"], regex: /.*?nhờ\s+(.*?)\s+mà\s+(.*)/i },
    { type: "Tương phản", pair: ["tuy", "nhưng"], regex: /.*?tuy\s+(.*?)\s+nhưng\s+(.*)/i },
    { type: "Tương phản", pair: ["mặc dù", "nhưng"], regex: /.*?mặc dù\s+(.*?)\s+nhưng\s+(.*)/i },
    { type: "Giả thiết - Kết quả", pair: ["nếu", "thì"], regex: /.*?nếu\s+(.*?)\s+thì\s+(.*)/i },
    { type: "Giả thiết - Kết quả", pair: ["hễ", "thì"], regex: /.*?hễ\s+(.*?)\s+thì\s+(.*)/i },
    { type: "Giả thiết - Kết quả", pair: ["giá", "thì"], regex: /.*?giá\s+(.*?)\s+thì\s+(.*)/i }, // Added "Giá... thì..."
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
          matched = false;
        }
      }
      if (matched) break;
    }
  }

  // Nếu không khớp pattern cặp, thử tách theo từ nối đơn hoặc dấu phẩy
  if (!matched) {
    const singleConnectives = [" và ", " nhưng ", " rồi ", " thì ", " nên ", " hay ", " hoặc ", " mà còn ", " mà "];
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
      if (parts.length >= 2) {
        result.clauses.push(deconstructClause(parts[0].trim()));
        // Đối với từ nối đơn, từ nối thường thuộc về vế sau
        result.clauses.push(deconstructClause((splitWord.trim() + " " + parts.slice(1).join(splitWord).trim()).trim()));
        matched = true;
      }
    } else {
      const parts = sentence.split(/[,;]/);
      if (parts.length >= 2) {
        result.relationship = "Nối trực tiếp";
        parts.forEach(p => {
          if (p.trim()) result.clauses.push(deconstructClause(p.trim()));
        });
        matched = true;
      } else {
        result.clauses.push(deconstructClause(sentence));
      }
    }
  }

  // Kiểm tra lỗi cặp từ nối sai logic
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

  // Chấm điểm tuyệt đối (Quy tắc V4)
  if (result.clauses.length >= 2) {
    const sub1 = result.clauses[0].subject;
    const sub2 = result.clauses[1].subject;

    // Nếu cả 2 vế đều bóc tách được CN-VN ổn định
    if (sub1 !== "Chưa xác định" && sub2 !== "Chưa xác định" && sub1.length > 1) {
      result.grade = 10;
      result.feedback = `Tuyệt vời! EduRobot đánh giá rất cao câu ghép này. Em đã sử dụng đúng quan hệ "${result.relationship}", bóc tách Chủ ngữ - Vị ngữ cực kỳ chính xác.`;
    } else {
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
 * Bóc tách CN - VN (EduRobot V4 - Strict Logic)
 * @param {string} text 
 */
function deconstructClause(text) {
  if (!text) return { clause: "", subject: "Chưa xác định", predicate: "Chưa xác định" };

  const words = text.split(/\s+/);
  if (words.length <= 1) return { clause: text, subject: "Chưa xác định", predicate: text };

  // V4: Danh sách từ nối CẤM làm Chủ ngữ
  const connectives = [
    "càng", "nhưng", "mà", "thì", "nên", "vì", "tuy", "còn",
    "vừa", "đã", "mới", "đâu", "nào", "ấy", "sao", "vậy",
    "mặc", "dù", "hễ", "giá", "nếu", "bởi", "tại", "do", "nhờ"
  ];

  // Danh sách mốc bắt đầu Vị ngữ (Động từ, Tính từ, Quan hệ từ, ...)
  const predicateMarkers = [
    "là", "đang", "đi", "học", "mưa", "nắng", "làm", "chơi",
    "rất", "đã", "sẽ", "cũng", "đều", "vẫn", "được", "bị",
    "xinh", "đẹp", "giỏi", "ngoan", "chăm", "không", "chưa",
    "chẳng", "hừng", "gặt", "trồng", "ra", "vào", "lên", "xuống",
    "hãy", "đừng", "chớ", "lại", "thấy", "muốn", "biết", "đã", "có"
  ];

  let splitIdx = -1;

  for (let i = 0; i < words.length; i++) {
    const w = words[i].toLowerCase().replace(/[.,!?;]$/, "");
    // Nếu là từ nối hoặc mốc VN -> Cắt tại đây
    if (connectives.includes(w) || predicateMarkers.includes(w)) {
      splitIdx = i;
      break;
    }
  }

  // Trường hợp đặc biệt: Nếu từ đầu tiên là từ nối (vd: "nên tôi..."), VN bắt đầu từ đó
  // Nếu không tìm thấy splitIdx, mặc định coi từ đầu là CN
  if (splitIdx === -1) {
    splitIdx = 1;
  }

  let subject = words.slice(0, splitIdx).join(" ").trim();
  let predicate = words.slice(splitIdx).join(" ").trim();

  // Xử lý chủ ngữ ẩn
  if (!subject && predicate) {
    subject = "Ẩn (đối tượng ở vế 1)";
  }

  return {
    clause: text,
    subject: subject || "Chưa xác định",
    predicate: predicate || "Chưa xác định"
  };
}
