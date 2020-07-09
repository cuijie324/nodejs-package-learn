let Benchmark = require('benchmark');
let suit = new Benchmark.Suite('my suit');

suit.add('splice', () => {
    let arr = [1, 2, 3, 4, 5];
    arr.splice(0, 3);
    return arr;
}).add('shift', () => {
    let arr = [1, 2, 3, 4, 5];
    let length = 3;
    while (length-- > 0) {
        arr.shift();
    }
    return arr;
}).on('cycle', (event) => {
    console.log('cycle', String(event.target));
}).on('complete', function () {
    console.log('the faster is', this.filter('fastest').map('name'));
}).run({ async: true });
