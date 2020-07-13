const { Subject, from, interval } = require('rxjs');
const { multicast, refCount } = require('rxjs/operators');

{
    console.log('\nEvery Subject is a Observerable');
    const subject = new Subject();

    subject.subscribe({
        next: (v) => console.log(`observerA: ${v}`)
    });
    subject.subscribe({
        next: (v) => console.log(`observerB: ${v}`)
    });

    subject.next(1);
    subject.next(2);

    //定义一个observable
    let observable = from([11, 22, 33]);
    observable.subscribe(subject);
}

{
    console.log('\nMulticasted Observabels');
    const source = from([12, 13, 14]);
    const subject = new Subject();
    const multicasted = source.pipe(multicast(subject));

    multicasted.subscribe({
        next: v => console.log(`observerA: ${v}`)
    });
    multicasted.subscribe({
        next: v => console.log(`observerB: ${v}`)
    });

    multicasted.connect();
}

{
    console.log('\nReference counting');
    const souce = interval(500);
    const subject = new Subject();
    const refCounted = souce.pipe(multicast(subject), refCount());

    let subscription1, subscription2;
    console.log('oberverA subscribed');
    subscription1 = refCounted.subscribe({
        next: v => console.log(`observerA: ${v}`)
    });

    setTimeout(() => {
        console.log('oberverB subscribed');
        subscription2 = refCounted.subscribe({
            next: v => console.log(`observerB: ${v}`)
        });
    }, 1000);

    setTimeout(() => {
        console.log('oberverA unsubscribed');
        subscription1.unsubscribe();
    }, 2000);

    setTimeout(() => {
        console.log('oberverB unsubscribed');
        subscription2.unsubscribe();
    }, 3000);
}
