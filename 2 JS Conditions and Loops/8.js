const prompt = require('prompt-sync')();

const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));
const op = prompt('Enter operation (+, -, *, /): ');

if (op === '+') {
    console.log(`Result: ${num1 + num2}`);
} else if (op === '-') {
    console.log(`Result: ${num1 - num2}`);
} else if (op === '*') {
    console.log(`Result: ${num1 * num2}`);
} else if (op === '/') {
    if (num2 !== 0) {
        console.log(`Result: ${num1 / num2}`);
    } else {
        console.log('Division by zero is not allowed');
    }
} else {
    console.log('Invalid operation');
}
