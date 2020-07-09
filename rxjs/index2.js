const Rx = require('rxjs/Rx');

let observable = Rx.Observable.create(function(observer){
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
        observer.next(4);
    }, 1000);
});

console.log('just before');
observable.subscribe({
    next: x => console.log('next' + x),
    error: err => console.err(err),
    complete: () => console.log('complete')
});
console.log('just after');