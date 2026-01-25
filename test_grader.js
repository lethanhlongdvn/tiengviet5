const fs = require('fs');
const path = require('path');

// Extract the logic from chat.js
const chatPath = path.join(__dirname, 'netlify/functions/chat.js');
const chatContent = fs.readFileSync(chatPath, 'utf8');

function mockHandler(sentence) {
    // --- START OF NEW LOGIC ---
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

    return analyzeSentence(sentence);

    function analyzeSentence(sentence) {
        const result = {
            original: sentence,
            clauses: [],
            relationship: "Unknown",
            grade: 0,
            feedback: ""
        };

        const patterns = [
            { type: "Nguyên nhân - Kết quả", pair: ["vì", "nên"], regex: /.*?vì\s+(.*?)\s+nên\s+(.*)/i },
            { type: "Nguyên nhân - Kết quả", pair: ["bởi vì", "nên"], regex: /.*?bởi vì\s+(.*?)\s+nên\s+(.*)/i },
            { type: "Nguyên nhân - Kết quả", pair: ["bởi", "nên"], regex: /.*?bởi\s+(.*?)\s+nên\s+(.*)/i },
            { type: "Nguyên nhân - Kết quả", pair: ["nhờ", "mà"], regex: /.*?nhờ\s+(.*?)\s+mà\s+(.*)/i },
            { type: "Tương phản", pair: ["tuy", "nhưng"], regex: /.*?tuy\s+(.*?)\s+nhưng\s+(.*)/i },
            { type: "Tương phản", pair: ["mặc dù", "nhưng"], regex: /.*?mặc dù\s+(.*?)\s+nhưng\s+(.*)/i },
            { type: "Giả thiết - Kết quả", pair: ["nếu", "thì"], regex: /.*?nếu\s+(.*?)\s+thì\s+(.*)/i },
            { type: "Giả thiết - Kết quả", pair: ["hễ", "thì"], regex: /.*?hễ\s+(.*?)\s+thì\s+(.*)/i },
            { type: "Giả thiết - Kết quả", pair: ["giá", "thì"], regex: /.*?giá\s+(.*?)\s+thì\s+(.*)/i },
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
        if (result.clauses.length >= 2) {
            result.grade = result.clauses.every(c => c.subject !== "Chưa xác định") ? 10 : 9;
        } else {
            result.grade = 5;
        }
        return result;
    }

    function deconstructClause(text) {
        if (!text) return { clause: "", subject: "Chưa xác định", predicate: "Chưa xác định" };
        const words = text.split(/\s+/);
        if (words.length <= 1) return { clause: text, subject: "Chưa xác định", predicate: text };
        const connectives = ["càng", "nhưng", "mà", "thì", "nên", "vì", "tuy", "còn", "vừa", "đã", "mới", "đâu", "nào", "ấy", "sao", "vậy", "mặc", "dù", "hễ", "giá", "nếu", "bởi", "tại", "do", "nhờ"];
        const predicateMarkers = ["là", "đang", "đi", "học", "mưa", "nắng", "làm", "chơi", "rất", "đã", "sẽ", "cũng", "đều", "vẫn", "được", "bị", "xinh", "đẹp", "giỏi", "ngoan", "chăm", "không", "chưa", "chẳng", "hừng", "gặt", "trồng", "ra", "vào", "lên", "xuống", "hãy", "đừng", "chớ", "lại", "thấy", "muốn", "biết", "đã", "có"];
        let splitIdx = -1;
        for (let i = 0; i < words.length; i++) {
            const w = words[i].toLowerCase().replace(/[.,!?;]$/, "");
            if (connectives.includes(w) || predicateMarkers.includes(w)) {
                splitIdx = i;
                break;
            }
        }
        if (splitIdx === -1) splitIdx = 1;
        let subject = words.slice(0, splitIdx).join(" ").trim();
        let predicate = words.slice(splitIdx).join(" ").trim();
        if (!subject && predicate) subject = "Ẩn (đối tượng ở vế 1)";
        return { clause: text, subject: subject || "Chưa xác định", predicate: predicate || "Chưa xác định" };
    }
    // --- END OF NEW LOGIC ---
}

const testCases = [
    { name: "Chẳng những... mà (Prefix + Input)", input: "Vào dịp lễ Mừng xuân, chẳng những trẻ em được vui đùa thoả thích mà các cụ già cũng thấy vui lây." },
    { name: "Mặc dù... nhưng (Prefix + Input)", input: "Mặc dù thiên nhiên khắc nghiệt nhưng cây cối vẫn xanh tươi." },
    { name: "Bởi... nên (Full - Added pattern)", input: "Bởi tôi ăn uống điều độ nên tôi chóng lớn." },
    { name: "Trời mưa nên em nghỉ (Single connective - Improved handling)", input: "Trời mưa nên em nghỉ học." },
    { name: "Giá... thì (Added pattern)", input: "Giá tôi biết trước thì tôi đã không làm vậy." }
];

testCases.forEach(tc => {
    const res = mockHandler(tc.input);
    console.log(`--- Test: ${tc.name} ---`);
    console.log(`Input: ${tc.input}`);
    console.log(`Relationship: ${res.relationship}`);
    console.log(`Grade: ${res.grade}`);
    res.clauses.forEach((c, i) => {
        console.log(`  Clause ${i + 1}: CN [${c.subject}] | VN [${c.predicate}]`);
    });
    console.log('');
});
