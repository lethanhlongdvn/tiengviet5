const fs = require('fs');
const content = fs.readFileSync('data/lessons.js', 'utf8');
// Mock window
const window = {};
eval(content);
console.log(Object.keys(window.LESSON_DATA.lessons));
