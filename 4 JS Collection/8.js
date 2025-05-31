const prompt = require('prompt-sync')();

function main() {
    const tasks = [];
    while (true) {
        console.log('\nTo-Do Application');
        console.log('1. Add Task');
        console.log('2. Remove Task');
        console.log('3. View Tasks');
        console.log('4. Exit');
        const choice = prompt('Enter your choice: ');

        if (choice === '1') {
            const task = prompt('Enter task to add: ');
            tasks.push(task);
            console.log('Task added.');
        } else if (choice === '2') {
            const task = prompt('Enter task to remove: ');
            const index = tasks.indexOf(task);
            if (index !== -1) {
                tasks.splice(index, 1);
                console.log('Task removed.');
            } else {
                console.log('Task not found.');
            }
        } else if (choice === '3') {
            console.log('Your Tasks:');
            tasks.forEach((task, i) => {
                console.log(`${i + 1}. ${task}`);
            });
        } else if (choice === '4') {
            console.log('Exiting...');
            break;
        } else {
            console.log('Invalid choice. Try again.');
        }
    }
}

main();
