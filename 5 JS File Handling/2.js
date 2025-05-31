const fs = require('fs');

fs.appendFileSync('hello.txt', '\nMy friend\'s name is Asifbarakat');
console.log('Friend\'s name appended to hello.txt');