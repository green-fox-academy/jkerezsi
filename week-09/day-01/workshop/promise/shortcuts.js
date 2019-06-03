'use strict';

require('es6-promise');


// var promise = new Promise(function (fulfill, reject) {
//     fulfill('Done')
//     reject(new Error('Not Done'));
// });

function onReject(err) {
    console.log(err.message)
}

var promise = Promise.resolve("done")

var reject = Promise.reject('not done')

promise.catch(onReject);