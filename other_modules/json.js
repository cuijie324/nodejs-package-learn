const fs = require('fs');

let text = fs.readFileSync('./test.json'); 
console.log(text);
console.log(JSON.minify(text))
