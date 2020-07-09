const jwt = require('jsonwebtoken');

let token = jwt.sign({ foo: 'bar' }, 'shhhhh');
let older_token = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');

console.log(token);
console.log(older_token);

var verified = jwt.verify(token, 'shhhhh');
console.log('verified', verified) // bar

var old_verified = jwt.verify(older_token, 'shhhhh');
console.log('old_verified', old_verified) // bar

//decode
let decoded = jwt.decode(token);
console.log('decoded', decoded);

let secret = 'cha123';
//指定过期时间
let expiredToken = jwt.sign({ name: 'cuijie' }, secret, { expiresIn: 1 });
console.log('decoded expiredToken', jwt.decode(expiredToken));
console.log('verified expiredToken', jwt.verify(expiredToken, secret));

setTimeout(() => {
    console.log('it should expired');
    console.log('verified expiredToken', jwt.verify(expiredToken, secret));
}, 1500 * 60);