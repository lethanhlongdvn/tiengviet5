/**
 * Firebase Manager for EduRobot
 * Handles Firestore data saving and Storage uploads
 */

// Placeholder Configuration - PLEASE UPDATE WITH REAL CREDENTIALS IN NETLIFY/LOCAL
const firebaseConfig = {
    apiKey: "AIzaSyC6zlWn8BKYU7P6A2-PYq6IIWOzaqJWFhc",
    authDomain: "gamhoctap.firebaseapp.com",
    projectId: "gamhoctap",
    storageBucket: "gamhoctap.firebasestorage.app",
    messagingSenderId: "833329613932",
    appId: "1:833329613932:web:0d8574827bcfe50b535c49"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
window.db = firebase.firestore();
window.storage = null;
try {
    if (firebase.storage) {
        window.storage = firebase.storage();
    } else {
        console.warn("Firebase Storage SDK not loaded.");
    }
} catch (e) {
    console.warn("Storage init skipped:", e);
}

/**
 * Global helper to get common student data
 */
function getStudentInfo() {
    const name = document.getElementById('studentName')?.value.trim();
    const cls = document.getElementById('studentClass')?.value;
    const schoolSelect = document.getElementById('schoolSelect')?.value;
    const otherSchool = document.getElementById('otherSchool')?.value.trim();
    const school = schoolSelect === 'Khác' ? otherSchool : (schoolSelect || "");

    return { name, cls, school };
}

/**
 * Submit main essay to Firestore (essays_v2)
 */
async function submitEssay(event) {
    const { name, cls, school } = getStudentInfo();
    const content = document.getElementById('ai-main-essay')?.value.trim();
    const lessonTitle = document.title.replace(" - EduRobot", "");

    if (!name || !cls) {
        alert("Em hãy điền Tên và Lớp trước khi nộp nhé!");
        return;
    }

    if (!content) {
        alert("Em hãy viết bài làm trước khi nộp nhé!");
        return;
    }

    const btn = event ? (event.currentTarget || event.target) : null;
    let originalText = "";
    if (btn) {
        originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = "🚀 Đang gửi bài...";
    }

    try {
        await db.collection("essays_v2").add({
            studentName: name,
            studentClass: cls,
            studentSchool: school,
            content: content,
            lessonTitle: lessonTitle,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: "Chưa chấm",
            type: "essay"
        });

        alert("Tuyệt vời! Bài làm của em đã được gửi tới Thầy/Cô thành công.");
        if (typeof celebrate === 'function') celebrate();
        else if (typeof confetti === 'function') confetti();
    } catch (error) {
        console.error("Error submitting essay:", error);
        alert("Có lỗi xảy ra khi nộp bài. Em hãy thử lại nhé!\nChi tiết: " + error.message);
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = originalText;
        }
    }
}

/**
 * Submit Project (Tab 2) to Firestore & Storage
 */
async function submitProject(projectId, projectTitle) {
    const { name, cls, school } = getStudentInfo();
    const content = document.getElementById(`project-desc-${projectId}`)?.value.trim() || "";
    const fileInput = document.getElementById(`project-file-${projectId}`);
    const lessonTitle = document.title.replace(" - EduRobot", "");

    if (!name || !cls) {
        alert("Em hãy điền Tên và Lớp trước nhé!");
        return;
    }

    const btn = event ? (event.currentTarget || event.target) : null;
    let originalText = "";
    if (btn) {
        originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = "🚀 Đang tải lên...";
    }

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
            studentClass: cls,
            studentSchool: school,
            content: content,
            fileUrl: fileUrl,
            projectType: projectTitle,
            lessonTitle: lessonTitle,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: "Đã nộp"
        });

        alert("Dự án của em đã được gửi tới Thầy/Cô thành công! Chờ Thầy/Cô nhận xét nhé.");
        if (typeof celebrate === 'function') celebrate();
        else if (typeof confetti === 'function') confetti();
    } catch (error) {
        console.error("Error submitting project:", error);
        alert("Lỗi khi gửi dự án. Em hãy thử lại nhé!\nChi tiết: " + error.message);
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = originalText;
        }
    }
}

/**
 * Load Teacher Feedback
 */
function checkTeacherFeedback() {
    const { name } = getStudentInfo();
    const lessonTitle = document.title.replace(" - EduRobot", "");
    if (!name) return;

    db.collection("essays_v2")
        .where("studentName", "==", name)
        .where("lessonTitle", "==", lessonTitle)
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
                <span class="mr-2">👩‍🏫</span> Lời khen từ Thầy/Cô
            </h4>
            <p class="text-gray-700 font-bold serif-font italic text-lg leading-relaxed mb-4">"${message}"</p>
            <div class="flex justify-end">
                <span class="bg-blue-600 text-white px-4 py-2 rounded-xl font-black text-xl shadow-lg">
                    Điểm của Thầy/Cô: ${grade}/10
                </span>
            </div>
        </div>
    `;
}

// Global functions for UI interaction (if not inline)
window.checkSchool = function () {
    const select = document.getElementById('schoolSelect');
    const otherInput = document.getElementById('otherSchool');
    if (select && otherInput) {
        if (select.value === 'Khác') {
            otherInput.classList.remove('hidden');
        } else {
            otherInput.classList.add('hidden');
        }
    }
};
