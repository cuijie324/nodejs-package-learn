let async = require('async');

// async.applyEach(
//     [
//         (arg1, arg2, arg3, callback) => {
//             setTimeout(() => {
//                 console.log(1, arg1);
//                 callback(null, 1)
//             }, 3000);
//         },
//         (arg1, arg2, arg3, callback) => {
//             setTimeout(() => {
//                 console.log(2, arg1);
//                 callback(null, 2)
//             }, 2000);
//         }
//     ],
//     1, 2, 3,
//     (err, result) => {
//         console.log("it's over");
//         console.log(err, result);
//     }
// );

// async.autoInject({
//     task1: cb => setTimeout(() => {
//         console.log('task 1', new Date());
//         cb(null, 1);
//     }, 1000),
//     task2: cb => setTimeout(() => {
//         console.log('task 2', new Date());
//         cb(null, 2);
//     }, 2000),
//     task3: ['task2', (res, cb) => setTimeout(() => {
//         console.log('task 3', new Date(), res);
//         cb(null, 3);
//     }, 1000)],
//     task4: cb => setTimeout(() => {
//         console.log('task 4', new Date());
//         cb(null, 4);
//     }, 1000)
// }, (err, results) => {
//     console.log(err, results);
// });

console.log(0.3 - 0.2 != 0.2 - 0.1);