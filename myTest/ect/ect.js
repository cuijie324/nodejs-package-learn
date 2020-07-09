let path = require('path');
let template = require('ect');
let renderer = template({
    root: path.resolve(__dirname)
});

function _xml (from, to, type, data) {
    if (['text', 'image', 'voice', 'video', 'news', 'music'].indexOf(type) !== -1) {
        var _ = require('lodash');
        var options = _.extend({
            from: from,
            to: to,
            time: new Date().getTime(),
            type: type
        }, data);
        return renderer.render(type + '.ect', options);
    }
}
//调用生成xml消息
let xml = _xml('from', 'to', 'image', { mediaId: 'media_is' });
console.log(xml);
