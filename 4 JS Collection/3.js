const prompt = require('prompt-sync')();

const expenses = [];
console.log('Enter expenses (type "done" to finish):');

while (true) {
    const input = prompt('Enter expense (type "done" to finish): ');
    if (input.toLowerCase() === 'done') break;
    expenses.push(Number(input));
}

const total = expenses.reduce((sum, expense) => sum + expense, 0);
console.log(`Total Expenses: ${total}`);
