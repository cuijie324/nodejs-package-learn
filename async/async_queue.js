let async = require('async');

let queue = async.queue(
    (task, callback) => {
        console.log(task);
        process.nextTick(() => callback('some err', 'end'));
    },
    1
);

queue.push({
    name: 'cuijie'
});

queue.push({
    name: 'zhangrui'
}, (err, result) => console.log(err, result));

queue.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
    console.log('finished processing item');
});

queue.drain = (err, result) => console.log('all over', err, result);