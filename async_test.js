const EventEmitter = require('events');
class Test extends EventEmitter {
    constructor() {
        super();
        this.flag = false;
        this.on('evt', (data) => {
            let d = new Date().getTime() + 10000;
            while (d > new Date().getTime()) { }
            console.info(data);
            this.flag = true;
        });
    }
    async excute () {
        console.info('excute start');
        let a = await new Promise((resolve) => {
            setTimeout(() => {
                resolve('setTimeout');
            }, 5000);
        });
        console.info(a);
        this.emit('evt', 'send evt');
        console.info('this flag=%s', this.flag);
    }
}
const test = new Test;
test.excute();