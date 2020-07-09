let _ = require('lodash');

let arr = [11, 22, 3, 55, 6];
// console.log(_.countBy(arr, item => item % 2 == 0));

// _.forEach(arr, item => console.log(item * 2));

// console.log(_.every(arr, (value, index, coll) => {
//     console.log(value, index, coll);
//     return value > 0;
// }))

// console.log(_.find(arr, value => value > 3));

// function iter(item){
//     return [item, [item*2], item];
// }

// console.log(_.flatMap(arr, iter));
// console.log(_.flatMapDeep(arr, iter));
// console.log(_.flatMapDepth(arr, iter, 1));

// console.log(_.invokeMap(arr, String.prototype.split, ''));

// let result = _.keyBy(arr, item => item % 2);
// let result = _.shuffle(arr);

// let result = _.unzip([1, 2], [3, 6]);
// var zipped = _.zip([1, 2, 3], [10, 20, 30], [100, 200, 300]);
// result = [ [ 1, 10, 100 ], [ 2, 20, 200 ], [ 3, 30, 300 ] ];

// zipped = _.unzipWith(result, (i, j, k) => i + j - k);

// console.log(zipped);

// function greet(greeting, punctuation){
//     return greeting + ' ' + this.user + punctuation;
// }

// let object = { user: 'cuijie'};
// let bound = _.bind(greet, object, 'Hello');
// let bound2 = _.bind(greet, object, _, '&&&&&');

// console.log(bound('~~~~'));
// console.log(bound2('Hi'));

let obj = {
    a: 1, 
    b: 2, 
    func: (arg1, arg2) => {
        console.log(this.a, this.b, arg1, arg2);
    }
}

obj.func();

// let bound = _.bindKey(obj, 'func', 'cui');
// bound('jie');

// let bound2 = _.bindKey(obj, 'func', _, 'rui');
// bound2('zhang');