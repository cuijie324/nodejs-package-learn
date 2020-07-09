let Reflect = require('reflect-metadata').Reflect;

class C {
    // @Reflect.metadata('name', 'cuijie')
    method () {

    }
}

console.log('>>>>', Reflect);

Reflect.defineMetadata('name2', 'zhangrui', C.prototype, "method");

let result = Reflect.getMetadata('name', C);
console.log(result);
