var Rx = require('rxjs/Rx');

let obs = Rx.Observable.of(1, 2, 3);
obs.subscribe(value => console.log(value));

// var button = document.querySelector('button');
// Rx.Observable.fromEvent(button, 'click')
// .subscribe(() => console.log('click'));
