const _ = require('lodash');
const fenci = require('nodejieba');

const str = '我爱的人不爱我，爱我的人我不爱，想爱一个人真难';
let result = fenci.cut(str);
console.log('分词结果', result);
if (!result || !_.isArray(result)) return '分词不成功';

let res = _.map(_.countBy(result), (value, key) =>
    ({
        word: key,
        count: value
    })
);

console.log('统计结果：', _.sortBy(res, o => -o.count));