'use strict';

const fs = require('fs');

let firstlink = '';
let secondlink = fs.readFileSync('path2.txt', 'utf-8');

function copyFiles(firstlink, secondlink) {
    try {
        let copiedfile = fs.appendFileSync(firstlink, secondlink);
        console.log('true');
    } catch (e) {
        console.log('false');
    }
}
console.log(copyFiles('path1.txt', secondlink));