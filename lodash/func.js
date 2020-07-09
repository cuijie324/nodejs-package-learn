let _ = require('lodash');

// let delay_func = _.delay((value)=> console.log('it is delayed', value), 300, 'cui');

// console.log(delay_func);
// console.log('start');

// var flipped = _.flip(function () {
//     console.log(arguments);
//     return _.toArray(arguments);
// });

// console.log(flipped(1, 2, 3, 4));

// let memo = _.memoize(function(a, b){
//     return a + b;
// }, function() {return new Date()});

// memo(1, 2);
// memo(3, 4);

// console.log(memo.cache);

// function isMoreThanThree(value) {
//     return value > 3;
// }

// let results = _.map([1, 2, 3, 4, 5, 6, 7], _.negate(isMoreThanThree));
// console.log(results);

// function getDate(){
//     return new Date();
// }

// let gt = _.once(getDate);

// console.log(gt());
// console.log(gt());
// setTimeout(function() {
//     console.log(gt());
// }, 1000);

function get(a, b) {
    return [a, b];
}

let newGet = _.overArgs(get);
console.log(newGet(1, 2));

let newGet2 = _.overArgs(get, function (x) { return x + 1 });
console.log(newGet2(1, 2));

let newGet3 = _.overArgs(get, [function (x) { return x + 1 }, function (x) { return x + 10 }]);
console.log(newGet3(1, 2));

