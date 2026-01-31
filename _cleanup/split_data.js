
const fs = require('fs');
const path = require('path');

// Mock window object
global.window = {};

// Load the target file
// Note: We need to use absolute path or relative to CWD.
// w22.js uses `window.LESSON_DATA`, so loading it will populate that.
try {
    require('./data/weeks/w22.js');
} catch (e) {
    console.error("Error loading w22.js:", e);
    process.exit(1);
}

const lessons = window.LESSON_DATA?.lessons;

if (!lessons) {
    console.error("No lessons found in window.LESSON_DATA");
    process.exit(1);
}

const outputDir = './data/lessons';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Found ${Object.keys(lessons).length} lessons. Splitting...`);

for (const [id, data] of Object.entries(lessons)) {
    // Generate file content
    // We use JSON.stringify, which handles escaping correctly.
    // We wrap it in the same window assignment structure.
    const fileContent = `window.LESSON_DATA = window.LESSON_DATA || { lessons: {} };
window.LESSON_DATA.lessons["${id}"] = ${JSON.stringify(data, null, 4)};`;

    const filePath = path.join(outputDir, `${id}.js`);
    fs.writeFileSync(filePath, fileContent);
    console.log(`✅ Created: ${filePath}`);
}

console.log("Done.");
