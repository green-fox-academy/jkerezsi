'use strict';

const fs = require('fs');


let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
console.log(fileContent);


try {
    if (fileContent === null) {
        throw new Error('Unable to read file: my-file.txt');
    }
} catch (e) {
        console.log(e.message);
    }

