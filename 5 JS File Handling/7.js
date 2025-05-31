const fs = require('fs');

const filePath = 'students.csv';
const students = [
    'Name,Age,Address',
    'Badar,20,123 Street',
    'Pakhi,22,456 Avenue',
    'Mehjabin,19,789 Boulevard'
];

// Write data to the file
fs.writeFileSync(filePath, students.join('\n'));
console.log('Data written to students.csv');

// Read data from the file
const content = fs.readFileSync(filePath, 'utf8');
console.log('File Content:\n' + content);
