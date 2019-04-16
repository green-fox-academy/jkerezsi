'use strict';

const fs = require('fs');


try {
        let fileContent = 'Janii';
        fs.writeFileSync('my-file.txt', fileContent);
        }
    
 catch (e) {
        console.log('Unable to write file: my-file.txt');
    }

