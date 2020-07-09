let Benchmark = require('benchmark');

//创建一个benchmark实例
let bench = new Benchmark('hello', function () {
    'My name is '.concat(this.name); // "My name is foo"
}, {
        id: 111,
        onStart: function (event) {
            // console.log('onStart', event);
        },
        onCycle: function (event) {
            console.log('onCycle', String(event.target));
        },
        onReset: function (event) {
            console.log('onReset', event);
        },
        onAbort: function (event) {
            console.log('onAbort', event);
        },
        onComplete: function (event) {
            console.log(event.target);
            console.log(event.target == event.currentTarget);
            // console.log('onComplete', this.hz, this.stats.moe, this.stats.variance);
        },
        onError: function (event) {
            console.log('onError', event);
        },
    }
);
// bench.run({ async: true });
bench.run();

// console.log('version', Benchmark.version);//版本号
// console.log('formatNumber', Benchmark.formatNumber(5123233));//用逗号表示法格式化数字
// console.log('platform', Benchmark.platform.description);//当前Benchmark运行的平台：操作系统、Node版本
// console.log('support', Benchmark.support);//当前环境/特性的一些标志 { browser: false, timeout: true, decompilation: true }

// let object = {
//     province: 'guangdong',
//     city: 'guangzhou'
// }
// console.log('join', Benchmark.join(object));//拼接对象
