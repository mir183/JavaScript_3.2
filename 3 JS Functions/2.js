function printEvenNumbers(s, e) {
    for (let i = s; i <= e; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

printEvenNumbers(1,100);