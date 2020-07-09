var a = function (val, index) {
    console.log(index);
    return {
        fn: function (name) {
            return a(name, val);
        }
    }
}

var b = a(0); // underfined
b.fn(1); // 0
b.fn(2); // 0
b.fn(3); // 0