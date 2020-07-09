function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
}

var bar = obj.foo;
var a = 'opps, global';
obj.foo();

bar();

console.log('this', global);

function getStrLength(str) {
    var cArr = str.match(/[^\x00-\xff]/ig);
    return str.length + (cArr == null ? 0 : cArr.length);
}

console.log(getStrLength('sssss'));