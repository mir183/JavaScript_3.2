const prompt = require('prompt-sync')();

const input = prompt('Enter a number: ');
const n = parseInt(input, 10);
console.log(`Square: ${n * n}`);
