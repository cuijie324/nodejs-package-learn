let _ = require('lodash');

let arr = [{ name: 'a', num: 1 }, { name: 'b', num: 3 }];
let item = _.find(arr, t => t.name === 'a');
console.log(arr);
_.remove(arr, item);

console.log(arr);