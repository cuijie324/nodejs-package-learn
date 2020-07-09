let _ = require('lodash');

function test (){
    console.log(new Date());
    return new Date();
}

// let once = _.once(test);

// console.log(once());
// console.log(once());

// let after = _.after(2, test);
// console.log('1', after());
// console.log('2', after());
// console.log('3', after());