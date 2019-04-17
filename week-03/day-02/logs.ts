'use strict';

const fs = require('fs');


function IPaddress(){
let IPList = fs.readFileSync('log.txt', 'UTF-8');
const IPindex = IPList.split("   ");
for( let i= 0; i < IPindex.length(); i++){
    let IP = IPList[i + 2];
    return IP;
}
return IPList;
}
console.log(IPaddress());