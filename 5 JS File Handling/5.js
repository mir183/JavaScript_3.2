const fs = require('fs');

for (let i = 1; i <= 100; i++) {
    const fileName = `file_${i}.txt`;
    fs.writeFileSync(fileName, `This is file number ${i}`);
}

console.log('100 files created.');
