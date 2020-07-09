var cron = require('cron');

let sendAt = cron.sendAt('10 * * * * *')

console.log(sendAt); //判断是否运行