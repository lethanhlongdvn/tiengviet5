import os
import re

apikey = "AIzaSyC6zlWn8BKYU7P6A2-PYq6IIWOzaqJWFhc"

def find_function_end(content, start_index):
    brace_count = 0
    in_function = False
    for i in range(start_index, len(content)):
        if content[i] == '{':
            brace_count += 1
            in_function = True
        elif content[i] == '}':
            brace_count -= 1
        
        if in_function and brace_count == 0:
            return i + 1
    return -1

def update_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        with open(filepath, 'r', encoding='latin-1') as f:
            content = f.read()

    if 'selectOption' not in content:
        return False

    # 1. Update Firebase API Key
    content = re.sub(r'apiKey:\s*"[^"]*"', f'apiKey: "{apikey}"', content)

    # 2. Add Audio Element
    if 'id="clapSound"' not in content:
        audio_tag = '\n    <!-- Audio Celebration -->\n    <audio id="clapSound" src="https://www.soundjay.com/human/applause-01.mp3" preload="auto"></audio>\n'
        if '<script src="js/floating-menu.js"></script>' in content:
            content = content.replace('<script src="js/floating-menu.js"></script>', audio_tag + '<script src="js/floating-menu.js"></script>')
        else:
            content = content.replace('</body>', audio_tag + '</body>')

    # 3. Update celebrate function
    m_celeb = re.search(r'function celebrate\(\) \s*\{', content)
    new_celeb = '''function celebrate() { 
            confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: ['#2563eb', '#f59e0b', '#10b981', '#ef4444'] }); 
            const audio = document.getElementById('clapSound');
            if (audio) { audio.currentTime = 0; audio.play().catch(e => {}); }
        }'''
    if m_celeb:
        end = find_function_end(content, m_celeb.start())
        if end != -1:
            content = content[:m_celeb.start()] + new_celeb + content[end:]
    else:
        # If no celebrate function, add one at the start of script
        m_script = re.search(r'<script>', content)
        if m_script:
            content = content[:m_script.end()] + '\n        ' + new_celeb + content[m_script.end():]

    # 4. Add quiz-feedback
    if 'id="quiz-feedback"' not in content:
        feedback_div = '<div id="quiz-feedback" class="text-sm font-black transition-all opacity-0"></div>'
        content = content.replace('* Chọn đáp án đúng nhất</span>', '* Chọn đáp án đúng nhất để tiếp tục</span>\n                        ' + feedback_div)
        content = content.replace('* Chọn đáp án đúng nhất để tiếp tục</span>\n                        ' + feedback_div, '* Chọn đáp án đúng nhất để tiếp tục</span>\n                        ' + feedback_div) # prevent double

    # 5. Add countdown
    if 'id="countdown"' not in content:
        countdown_html = '\n            <div class="mb-8 text-blue-600 font-black text-sm uppercase tracking-widest">Tự động quay lại sau <span id="countdown">5</span> giây</div>'
        content = re.sub(r'(<p class="text-gray-500 mb-10 font-bold leading-relaxed">[^<]*</p>)', r'\1' + countdown_html, content)

    # 6. Refactor selectOption
    total_q = "5"
    m_prog = re.search(r'CÂU TRẮC NGHIỆM: 1/(\d+)', content)
    if m_prog: total_q = m_prog.group(1)
    score_inc = str(100 // int(total_q)) if int(total_q) > 0 else "20"
    if total_q == "8": score_inc = "12.5"

    new_sel_opt = f'''function selectOption(i, btn) {{
            const currentQ = selectedQuestions[currentIdx];
            const isCorrect = i === currentQ.c;
            const feedback = document.getElementById('quiz-feedback');
            document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
            if (isCorrect) {{
                btn.classList.add('bg-green-50', 'border-green-500');
                btn.querySelector('div').classList.add('bg-green-600', 'text-white');
                if (feedback) {{ feedback.innerText = "CHÍNH XÁC! 🎉"; feedback.classList.add('text-green-600'); }}
                score += {score_inc};
            }} else {{
                btn.classList.add('bg-red-50', 'border-red-500');
                btn.querySelector('div').classList.add('bg-red-600', 'text-white');
                if (feedback) {{ feedback.innerText = "SAI RỒI! ❌"; feedback.classList.add('text-red-600'); }}
                const correctBtn = document.querySelectorAll('.option-btn')[currentQ.c];
                if (correctBtn) correctBtn.classList.add('bg-green-50', 'border-green-500');
            }}
            if (feedback) feedback.style.opacity = '1';
            setTimeout(() => {{
                currentIdx++;
                (currentIdx < {total_q}) ? showQuestion() : showResults();
            }}, 1000);
        }}'''
    m_sel = re.search(r'function selectOption\([^)]*\)\s*\{', content)
    if m_sel:
        end = find_function_end(content, m_sel.start())
        if end != -1:
            content = content[:m_sel.start()] + new_sel_opt + content[end:]

    # 7. Update showQuestion
    if "document.getElementById('quiz-feedback').style.opacity = '0';" not in content:
        content = content.replace('showQuestion() {', "showQuestion() {\n            if(document.getElementById('quiz-feedback')) document.getElementById('quiz-feedback').style.opacity = '0';")

    # 8. Update submitResults
    tab_name = 'exercises'
    if "switchTab('lesson')" in content: tab_name = 'lesson'
    new_submit = f'''function submitResults(e) {{
            if (e) e.preventDefault();
            const btn = document.querySelector('#quiz-results button:last-child');
            if (btn) {{ btn.innerHTML = "Đang nộp..."; btn.disabled = true; }}
            const data = {{
                studentName: document.getElementById('studentName').value,
                studentClass: document.getElementById('studentClass').value,
                school: document.getElementById('schoolSelect').value === 'Khác' ? document.getElementById('otherSchool').value : document.getElementById('schoolSelect').value,
                lessonTitle: document.title.replace(' - EduRobot', ''),
                score: score,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }};
            let successShown = false;
            const showSuccess = () => {{
                if (successShown) return;
                successShown = true;
                document.getElementById('successModal').classList.add('active');
                document.getElementById('successModal').classList.remove('hidden');
                celebrate();
                if (btn) {{ btn.innerHTML = "NỘP KẾT QUẢ"; btn.disabled = false; }}
                let timeLeft = 5;
                const countdownEl = document.getElementById('countdown');
                const timer = setInterval(() => {{
                    timeLeft--;
                    if (countdownEl) countdownEl.innerText = timeLeft;
                    if (timeLeft <= 0) {{ clearInterval(timer); closeSuccessModal(); }}
                }}, 1000);
            }};
            const dbTimeout = setTimeout(() => {{ if (!successShown) showSuccess(); }}, 3000);
            if (window.db || firebase.apps.length) {{
                const database = window.db || firebase.firestore();
                database.collection("quiz_results").add(data).then(() => {{ clearTimeout(dbTimeout); showSuccess(); }}).catch((err) => {{ console.error(err); clearTimeout(dbTimeout); showSuccess(); }});
            }} else {{ clearTimeout(dbTimeout); showSuccess(); }}
        }}'''
    m_sub = re.search(r'(async\s+)?function submitResults\(e\)\s*\{', content)
    if m_sub:
        end = find_function_end(content, m_sub.start())
        if end != -1:
            content = content[:m_sub.start()] + new_submit + content[end:]

    # 9. Update closeSuccessModal
    new_close = f'''function closeSuccessModal() {{
            document.getElementById('successModal').classList.remove('active');
            document.getElementById('successModal').classList.add('hidden');
            restartQuiz();
            if (typeof switchTab === 'function') switchTab('{tab_name}');
        }}'''
    m_close = re.search(r'function closeSuccessModal\(\)\s*\{', content)
    if m_close:
        end = find_function_end(content, m_close.start())
        if end != -1:
            content = content[:m_close.start()] + new_close + content[end:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    return True

target_dir = r"c:\Users\Admin\Desktop\tiengviet5"
count = 0
for filename in os.listdir(target_dir):
    if filename.endswith(".html"):
        if filename == "221-LTVC-Luyen-tap-cau-ghep.html": continue
        if update_file(os.path.join(target_dir, filename)):
            print(f"Updated: {filename}")
            count += 1
print(f"Total updated: {count}")
