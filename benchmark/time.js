let _ = require('lodash');
let times =
{
    cycle: 0.052856697780219786,//最后一次cycle花费的时间，秒
    elapsed: 6.075,//完成测试花费的时间，秒
    period: 7.939278267642159e-9,//执行一次测试函数花费的时间，秒
    timeStamp: 1543940988545//测试开始的时间，时间戳
}

let bench = {
    count: 6657620,//一个cycle执行测试函数的次数，但并不是所有cycle都是这个值
    cycles: 7,//分析阶段执行的cycle次数，采样阶段执行的cycle次数在sample数组里
    hz: 125956033.56991093 //每秒钟执行的操作数，根据样本数据计算出来的
}

console.log(1 / bench.hz === times.period);//true
console.log(bench.count * times.period === times.cycle);//true 怎么等于最后一次cycle的时间？
console.log(times.elapsed / bench.cycles)
