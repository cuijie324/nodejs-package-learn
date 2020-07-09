const moment = require('moment-timezone');

let yesterday = moment('2018-04-15 18:20:10');
console.log('1', yesterday.format('YYYY-MM-DD HH:mm:ss'));

let res = yesterday.tz('America/Los_Angeles').format('YYYY-MM-DD HH:mm:ss');
console.log('2', res);
console.log('2.5', yesterday.tz('America/Los_Angeles').utcOffset());

console.log('3', moment().utcOffset());
