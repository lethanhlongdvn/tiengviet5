/**
 * Firebase Manager for EduRobot
 * Handles Firestore data saving and Storage uploads
 */

// Placeholder Configuration - PLEASE UPDATE WITH REAL CREDENTIALS IN NETLIFY/LOCAL
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "projectId.firebaseapp.com",
    projectId: "projectId",
    storageBucket: "projectId.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const storage = firebase.storage();

/**
 * Submit main essay to Firestore
 */
async function submitEssay() {
    const name = document.getElementById('studentName').value.trim();
    const className = document.getElementById('studentClass').value.trim();
    const content = document.getElementById('ai-main-essay').value.trim();

    if (!name || !className || !content) {
        alert("Em hãy điền đủ Tên, Lớp và nội dung Bài làm trước khi nộp nhé!");
        return;
    }

    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = " đang gửi bài...";

    try {
        await db.collection("essays").add({
            studentName: name,
            studentClass: className,
            content: content,
            lessonTitle: "Viết đoạn văn tả người",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: "Chưa chấm", // Teacher status
            type: "essay"
        });

        alert("Tuyệt vời! Bài làm của em đã được gửi tới Cô thành công.");
        if (typeof celebrate === 'function') celebrate();
    } catch (error) {
        console.error("Error submitting essay:", error);
        alert("Có lỗi xảy ra khi nộp bài. Em hãy thử lại nhé!");
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalText;
    }
}

/**
 * Submit Project (Tab 2) to Firestore & Storage
 */
async function submitProject(projectId, projectTitle) {
    const name = document.getElementById('studentName').value.trim();
    const className = document.getElementById('studentClass').value.trim();
    const content = document.getElementById(`project-desc-${projectId}`).value.trim();
    const fileInput = document.getElementById(`project-file-${projectId}`);

    if (!name || !className) {
        alert("Em hãy điền Tên và Lớp trước nhé!");
        return;
    }

    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = "🚀 Đang tải lên...";

    let fileUrl = "";

    try {
        // Upload file if exists
        if (fileInput && fileInput.files[0]) {
            const file = fileInput.files[0];
            const storageRef = storage.ref(`projects/${Date.now()}_${file.name}`);
            const snapshot = await storageRef.put(file);
            fileUrl = await snapshot.ref.getDownloadURL();
        }

        await db.collection("projects").add({
            studentName: name,
            studentClass: className,
            content: content,
            fileUrl: fileUrl,
            projectType: projectTitle,
            lessonTitle: "Viết đoạn văn tả người",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: "Đã nộp"
        });

        alert("Dự án của em đã được gửi tới Cô thành công! Chờ Cô nhận xét nhé.");
        if (typeof celebrate === 'function') celebrate();
    } catch (error) {
        console.error("Error submitting project:", error);
        alert("Lỗi khi gửi dự án. Em hãy thử lại nhé!");
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalText;
    }
}

/**
 * Load Teacher Feedback
 * Checks periodically if there's a response for this student
 */
function checkTeacherFeedback() {
    const name = document.getElementById('studentName').value.trim();
    if (!name) return;

    db.collection("essays")
        .where("studentName", "==", name)
        .where("lessonTitle", "==", "Viết đoạn văn tả người")
        .orderBy("timestamp", "desc")
        .limit(1)
        .onSnapshot((snapshot) => {
            snapshot.forEach(doc => {
                const data = doc.data();
                if (data.teacherFeedback) {
                    displayTeacherFeedback(data.teacherFeedback, data.teacherGrade);
                }
            });
        });
}

function displayTeacherFeedback(message, grade) {
    const container = document.getElementById('teacher-feedback-box');
    if (!container) return;

    container.classList.remove('hidden');
    container.innerHTML = `
        <div class="p-6 bg-blue-50 border-2 border-blue-200 rounded-[32px] shadow-sm animate-bounce-subtle">
            <h4 class="text-blue-700 font-black text-sm uppercase mb-3 flex items-center">
                <span class="mr-2">👩‍🏫</span> Lời khen từ Cô giáo
            </h4>
            <p class="text-gray-700 font-bold serif-font italic text-lg leading-relaxed mb-4">"${message}"</p>
            <div class="flex justify-end">
                <span class="bg-blue-600 text-white px-4 py-2 rounded-xl font-black text-xl shadow-lg">
                    Điểm của Cô: ${grade}/10
                </span>
            </div>
        </div>
    `;
}
