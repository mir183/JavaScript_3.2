const fs = require('fs');

const filePath = 'hello_copy.txt';

if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log('hello_copy.txt deleted.');
} else {
    console.log('File does not exist.');
}
