'use strict';

const fs = require('fs');


let path: string = '';
let word: string = '';
let number: number = 0;

function addLines(path,word,number) {
try{
    for(let i: number = 0; i < number; i++){
    let newline = fs.appendFileSync(path, word.concat('\n'));
    console.log(word);
    }
} catch (e) {
    console.log('');
}
}
console.log(addLines('multiple-lines.txt','apple',5));