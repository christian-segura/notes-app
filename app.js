const getNotes = require('./notes.js');
const fs = require('fs');

// fs.writeFileSync('notes.txt', 'This file was created by Node.js. ');
fs.appendFileSync('notes.txt',' This is some new text I added with a different method.');

console.log(getNotes());

