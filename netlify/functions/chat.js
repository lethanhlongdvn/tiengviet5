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
    { type: "Tăng tiến", pair: ["càng", "càng"], regex: /(.*?)\s+càng\s+(.*?)[,;\s]+càng\s+(.*)/i },
    { type: "Cặp từ hô ứng", pair: ["vừa", "đã"], regex: /(.*?)\s+vừa\s+(.*?)[,;\s]+đã\s+(.*)/i },
    { type: "Cặp từ hô ứng", pair: ["mới", "đã"], regex: /(.*?)\s+mới\s+(.*?)[,;\s]+đã\s+(.*)/i },
    { type: "Cặp từ hô ứng", pair: ["đâu", "đấy"], regex: /(.*?)\s+đâu\s+(.*?)[,;\s]+đấy\s+(.*)/i },
    { type: "Cặp từ hô ứng", pair: ["bao nhiêu", "bấy nhiêu"], regex: /(.*?)\s+bao nhiêu\s+(.*?)[,;\s]+bấy nhiêu\s+(.*)/i }
  ];

  let matched = false;
  for (const p of patterns) {
    const match = sentence.match(p.regex);
    if (match) {
      result.relationship = p.type;
      matched = true;

      if (p.pair[0] === "càng" || p.type === "Cặp từ hô ứng") {
        // match[1]: text trước từ thứ 1, match[2]: text giữa, match[3]: text sau từ thứ 2
        const v1_raw = (match[1].trim() + " " + p.pair[0] + " " + match[2].trim()).trim();
        const v2_raw = (p.pair[1] + " " + match[3].trim().replace(/[.!?]$/, "")).trim();
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

  // Tính điểm và Feedback
  const validClauses = result.clauses.filter(c => c.subject !== "Chưa xác định" && c.subject.length > 1);

  if (result.clauses.length >= 2) {
    result.grade = validClauses.length >= 2 ? 10 : 9; // Tối thiểu 9 nếu đã tách đúng vế theo Quy tắc mới
    result.feedback = `Tuyệt vời! EduRobot đã chấm bài của em. Câu văn của em đã thể hiện rất tốt cấu trúc của một câu ghép với quan hệ "${result.relationship}". Vế câu rành mạch, CN-VN rõ ràng.`;

    if (validClauses.length < 2) {
      result.feedback = `Chào em! Câu văn của em rất hay và đúng cấu trúc câu ghép. Tuy nhiên, em chú ý hơn một chút ở phần bóc tách Chủ - Vị để câu văn hoàn hảo hơn nhé!`;
    }
  } else {
    result.grade = 5;
    result.feedback = "Câu này dường như vẫn chưa đủ 2 vế của một câu ghép hoàn chỉnh em ạ. Hãy thử sử dụng các cặp từ như 'Vì... nên...', 'Tuy... nhưng...' để câu văn rõ nghĩa hơn nhé!";
  }

  return result;
}

/**
 * Bóc tách CN - VN cơ bản (Rule-based)
 * @param {string} text 
 */
function deconstructClause(text) {
  const words = text.split(/\s+/);

  // Danh sách từ nối/động từ/tính từ làm mốc phân chia VN
  // Bổ sung từ phủ định và các động từ phổ biến lớp 5
  const commonVerbs = [
    "là", "đang", "đi", "học", "mưa", "nắng", "làm", "chơi",
    "rất", "đã", "sẽ", "cũng", "đều", "vẫn", "được", "bị",
    "xinh", "đẹp", "giỏi", "ngoan", "chăm", "không", "chưa",
    "chẳng", "hừng", "gặt", "trồng", "ra", "vào", "lên", "xuống",
    "vừa", "mới", "hãy", "đừng", "chớ", "còn", "lại", "thì", "mà"
  ];

  let splitIdx = -1;
  // Ưu tiên tìm mốc phân chia (động từ/tính từ/trạng từ)
  for (let i = 0; i < words.length; i++) {
    // Nếu gặp từ phủ định (chưa, không, chẳng) đứng cạnh một từ trong list thì ưu tiên tách tại đó
    if (commonVerbs.includes(words[i].toLowerCase())) {
      // Trường hợp đặc biệt: "Lan chưa chăm chỉ" -> splitIdx nên là vị trí "chưa"
      splitIdx = i;
      break;
    }
  }

  // Nếu không thấy mốc, mặc định tách ở giữa (nhưng tránh tách ngay từ đầu)
  if (splitIdx === -1) {
    splitIdx = Math.max(1, Math.floor(words.length / 2));
  }

  return {
    clause: text,
    subject: words.slice(0, splitIdx).join(" ").trim() || "Chưa xác định",
    predicate: words.slice(splitIdx).join(" ").trim() || "Chưa xác định"
  };
}
