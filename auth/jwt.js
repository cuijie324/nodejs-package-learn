let jwt = require('jsonwebtoken');
let token = jwt.sign({ foo: 'bar' }, 'shhhhh');
console.log(token);

let decoded = jwt.verify(token, 'shhhhh');
console.log(decoded);

// decoded = jwt.decode(token);
// console.log(decoded);

// decoded = jwt.decode(token, { complete: true });
// console.log(decoded);
