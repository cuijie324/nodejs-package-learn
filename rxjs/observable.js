const { Observable, from } = require('rxjs');
const { Observer } = require('rx');

{
    const observable = new Observable(subscriber => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
            subscriber.next(4);
            subscriber.complete();
        }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
        next (x) {
            console.log('got value', x);
        },
        error (err) {
            console.error('something error', err);
        },
        complete () {
            console.log('done');
        }
    });
    console.log('just after subscribe');
}

{
    //Observables as generalizations of functions
    {
        function foo () {
            console.log('Hello');
            return 42;
        }

        const x = foo.call();
        console.log(x);
        const y = foo.call();
        console.log(y);
    }

    {
        const foo = new Observable(subscriber => {
            console.log('Hello');
            subscriber.next(42);
        });

        foo.subscribe(x => {
            console.log(x);
        })

        foo.subscribe(y => {
            console.log(y);
        })

        //promise定义后就开始执行了，Observable是订阅后才开始执行的
        let pro = new Promise((resolve, reject) => {
            console.log('hello promise');
            resolve(5);
        });
    }

    {
        const observable = new Observable(function subscribe (subscriber) {
            let i = 0;
            const id = setInterval(() => {
                subscriber.next('h1_' + i++);
                if (i > 5) subscriber.complete();
            }, 1000);
        });

        // observable.subscribe(value => console.log(value));
    }

    {
        //使用try...catch
        const observable = new Observable(function subscribe (subscriber) {
            try {
                subscriber.next(1);
                subscriber.next(2);
                subscriber.next(3);
                subscriber.complete();
            } catch (err) {
                subscriber.error(err);
            }
        });

        observable.subscribe(console.log);
    }

    {
        //停止
        const observable = from([10, 20, 30]);
        const subscription = observable.subscribe(console.log);

        subscription.unsubscribe();
    }

    {
        //自定义unsubscribe
        const observable = new Observable(function subscribe (subscriber) {
            const intervalId = setInterval(() => {
                console.log('interval');
                subscriber.next('hi');
            }, 1000);

            return function unscriber () {
                clearInterval(intervalId);
            }
        });

        const subscription = observable.subscribe({ next: console.log });
        setTimeout(() => {
            subscription.unsubscribe();
        }, 4000);
    }

    {
        //去掉外壳后
        function subscribe (subscriber) {
            const intervalId = setInterval(() => {
                subscriber.next('hi-handle');
            }, 1000);

            return function unscribe () {
                clearInterval(intervalId);
            }
        }

        const unsubscribe = subscribe({ next: console.log });
        setTimeout(() => {
            unsubscribe();//释放
        }, 5000);
    }
}
