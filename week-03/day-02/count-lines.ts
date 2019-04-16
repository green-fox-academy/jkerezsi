'use strict';

const fs = require('fs');

function countLines (path: string) {
    try { 
        let fileContent = fs.readFileSync('count-lines.txt', 'utf-8');
        let content = fileContent.split('\n');
        return content.length
} catch(e) {
    console.log('0');
}
}
console.log(countLines('count-lines.txt'));