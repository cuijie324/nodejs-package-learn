const util = require('util');
const setImmediatePromise = util.promisify(setImmediate);

// setImmediatePromise('foobar').then(value => {
//     console.log(value)
// })

// async function timerExample () {
//     console.log('Before I/O callbacks');
//     let module = await setImmediatePromise('node.js Timers');
//     console.log('After I/O callbacks', module);
// }
// timerExample();

console.log('begin');

let timeout = setTimeout(() => {
    console.log('time out');
}, 1000);

console.log('end');