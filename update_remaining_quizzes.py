
import os
import re

files_to_update = [
    r'c:\Users\Admin\Desktop\tiengviet5\201-hat-gao-lang-ta.html',
    r'c:\Users\Admin\Desktop\tiengviet5\202-hop-qua-mau-thien-thanh.html',
    r'c:\Users\Admin\Desktop\tiengviet5\232-nhung-bup-che-tren-cay-co-thu.html',
    r"c:\Users\Admin\Desktop\tiengviet5\251-dan-t'rung-tieng-ca-dai-ngan.html",
    r'c:\Users\Admin\Desktop\tiengviet5\252-duong-que-dong-thap-muoi.html',
    r'c:\Users\Admin\Desktop\tiengviet5\342-thanh-pho-thong-minh-mat-xda.html'
]

def find_brace_end(content, start_index):
    count = 0
    for i in range(start_index, len(content)):
        if content[i] == '{':
            count += 1
        elif content[i] == '}':
            count -= 1
            if count == 0:
                return i
    return -1

def update_file(filepath):
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return False
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add quiz-feedback div if missing
    if 'id="quiz-feedback"' not in content:
        # Try to insert it after progressText parent or similar
        content = content.replace('<p class="font-black text-blue-900 uppercase tracking-wider text-sm" id="progressText">', 
                                 '<div id="quiz-feedback" class="text-sm font-black transition-all opacity-0 ml-4"></div><p class="font-black text-blue-900 uppercase tracking-wider text-sm" id="progressText">')
        # For orange version
        content = content.replace('<p class="font-black text-orange-900 uppercase tracking-wider text-sm" id="progressText">', 
                                 '<div id="quiz-feedback" class="text-sm font-black transition-all opacity-0 ml-4"></div><p class="font-black text-orange-900 uppercase tracking-wider text-sm" id="progressText">')

    # 2. Add celebrate function and audio if missing
    if 'function celebrate()' not in content:
        celebrate_js = """
        function celebrate() { 
            confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: ['#2563eb', '#f59e0b', '#10b981', '#ef4444'] }); 
            const audio = document.getElementById('clapSound');
            if (audio) { audio.currentTime = 0; audio.play().catch(e => {}); }
        }
        """
        content = content.replace('<script>', f'<script>\n{celebrate_js}')
        
    if 'id="clapSound"' not in content:
        content = content.replace('<script src="js/floating-menu.js"></script>', 
                                 '<audio id="clapSound" src="https://www.soundjay.com/human/applause-01.mp3" preload="auto"></audio>\n<script src="js/floating-menu.js"></script>')

    # 3. Update showQuestion/selectOption logic
    # Different files have different ways of handling click.
    # We look for btn.onclick = () => { ... } inside showQuestion
    
    # Try to find the onclick assignment for options
    onclick_pattern = r'btn\.onclick\s*=\s*\(\)\s*=>\s*\{'
    match = re.search(onclick_pattern, content)
    if match:
        start_idx = match.end() - 1
        end_idx = find_brace_end(content, start_idx)
        if end_idx != -1:
            # We found the block. Replace it with the instant feedback logic.
            # We need to detect if it's using currentQuestionIdx or currentIdx
            idx_var = "currentIdx"
            if "currentQuestionIdx" in content:
                idx_var = "currentQuestionIdx"
            
            q_var = "selectedQuestions"
            if "currentQuizQuestions" in content:
                q_var = "currentQuizQuestions"
            
            new_onclick = f"""btn.onclick = () => {{
                    const currentQ = {q_var}[{idx_var}];
                    const isCorrect = i === currentQ.c;
                    const feedback = document.getElementById('quiz-feedback');
                    document.querySelectorAll('#optionsArea button').forEach(b => b.disabled = true);
                    if (isCorrect) {{
                        btn.classList.add('bg-green-50', 'border-green-500');
                        btn.querySelector('div, span').classList.add('bg-green-600', 'text-white');
                        if (feedback) {{ feedback.innerText = "CHÍNH XÁC! 🎉"; feedback.classList.add('text-green-600'); }}
                        score += 20;
                    }} else {{
                        btn.classList.add('bg-red-50', 'border-red-500');
                        btn.querySelector('div, span').classList.add('bg-red-600', 'text-white');
                        if (feedback) {{ feedback.innerText = "SAI RỒI! ❌"; feedback.classList.add('text-red-600'); }}
                        const correctBtn = document.querySelectorAll('#optionsArea button')[currentQ.c];
                        if (correctBtn) correctBtn.classList.add('bg-green-50', 'border-green-500');
                    }}
                    if (feedback) feedback.style.opacity = '1';
                    setTimeout(() => {{
                        {idx_var}++;
                        ({idx_var} < 5) ? showQuestion() : showResults();
                    }}, 1000);
                }};"""
            content = content[:match.start()] + new_onclick + content[end_idx+1:]

    # 4. Success Modal Countdown in submitResults
    if 'showSuccess' not in content and 'submitResults' in content:
        # Inject countdown logic into submitResults
        # Identify the success result logic
        content = re.sub(r'alert\(`Chúc mừng \$\{studentData\.studentName\} đã hoàn thành bài tập!`\);\s*restartQuiz\(\);\s*switchTab\(\'lesson\'\);',
                        r'showSuccess();', content)
        
        # Add showSuccess function if missing
        if 'function showSuccess' not in content:
            lesson_title_match = re.search(r'lessonTitle:\s*"([^"]+)"', content)
            lesson_title = lesson_title_match.group(1) if lesson_title_match else "Bài học"
            
            show_success_js = f"""
            function closeSuccessModal() {{
                document.getElementById('successModal').classList.remove('active');
                document.getElementById('successModal').classList.add('hidden');
                restartQuiz();
                switchTab('lesson');
            }}

            function submitResults(e) {{
                if (e) e.preventDefault();
                const btn = e.target || document.querySelector('#quiz-results button:last-child');
                if (btn) {{ btn.innerHTML = "Đang nộp..."; btn.disabled = true; }}
                const data = {{
                    studentName: document.getElementById('studentName').value,
                    studentClass: document.getElementById('studentClass').value || studentData.studentClass || studentData.className,
                    school: document.getElementById('schoolSelect').value === 'Khác' || document.getElementById('schoolSelect').value === 'other' ? document.getElementById('otherSchool').value : document.getElementById('schoolSelect').value,
                    lessonTitle: "{lesson_title}",
                    score: score,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                }};
                let successShown = false;
                const showSuccess = () => {{
                    if (successShown) return;
                    successShown = true;
                    const modal = document.getElementById('successModal');
                    if(modal) {{
                        modal.classList.add('active');
                        modal.classList.remove('hidden');
                    }}
                    celebrate();
                    let timeLeft = 5;
                    const countdownEl = document.getElementById('countdown');
                    const timer = setInterval(() => {{
                        timeLeft--;
                        if (countdownEl) countdownEl.innerText = timeLeft;
                        if (timeLeft <= 0) {{ clearInterval(timer); closeSuccessModal(); }}
                    }}, 1000);
                }};
                const dbTimeout = setTimeout(() => {{ if (!successShown) showSuccess(); }}, 3000);
                db.collection("diem_tieng_viet_lop5").add(data).then(() => {{ clearTimeout(dbTimeout); showSuccess(); }}).catch(e => {{ console.error(e); clearTimeout(dbTimeout); showSuccess(); }});
            }}
            """
            # Replace old submitResults
            content = re.sub(r'async function submitResults\(e\)\s*\{.*?\}', show_success_js, content, flags=re.DOTALL)
            content = re.sub(r'function submitResults\(e\)\s*\{.*?\}', show_success_js, content, flags=re.DOTALL)

    # 5. Countdown placeholder in resultMsg
    if 'id="countdown"' not in content:
        content = content.replace(' id="resultMsg">', ' id="resultMsg">\n<div class="mb-8 text-blue-600 font-black text-sm uppercase tracking-widest mt-4">Tự động quay lại sau <span id="countdown">5</span> giây</div>')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated: {os.path.basename(filepath)}")
    return True

for f in files_to_update:
    update_file(f)
