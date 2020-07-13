const { Subject, BehaviorSubject, ReplaySubject, AsyncSubject, from, interval } = require('rxjs');
const { multicast, refCount } = require('rxjs/operators');

{
    console.log('\nBehaviorSubject');
    const subject = new BehaviorSubject(0);

    subject.subscribe({
        next: v => console.log(`observerA: ${v}`)
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe(v => console.log(`observerB: ${v}`));
    subject.next(3);
}

{
    console.log('\nReplaySubject');
    const subject = new ReplaySubject(3);

    subject.subscribe({
        next: v => console.log(`observerA: ${v}`)
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe(v => console.log(`observerB: ${v}`));
    subject.next(5);
}

{
    console.log('\nAsyncSubject');
    const subject = new AsyncSubject();

    subject.subscribe({
        next: v => console.log(`observerA: ${v}`)
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe(v => console.log(`observerB: ${v}`));
    subject.next(5);
    subject.subscribe(v => console.log(`observerC: ${v}`));
    subject.complete();
    subject.subscribe(v => console.log(`observerD: ${v}`));
}