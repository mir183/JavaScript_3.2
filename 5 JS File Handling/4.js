const fs = require('fs');

const source = 'hello.txt';
const destination = 'hello_copy.txt';

fs.copyFileSync(source, destination);
console.log('File copied to hello_copy.txt');
