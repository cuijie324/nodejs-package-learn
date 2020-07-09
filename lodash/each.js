let _ = require('lodash');

let online = [
    { tagid: 1, tagname: '系统管理员', isDeleted: false },
    { tagid: 2, tagname: '标签审核员' }
];

_.each(online, t => t.isDeleted = false);
console.log('>>>>', online);

_.each(online, t => {
    t.isDeleted = false;
});
console.log('>>>>', online);
