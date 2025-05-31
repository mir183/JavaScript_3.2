function calculatePower(base, exp) {
    if (base === 0) {
        return 0;
    }
    return Math.pow(base, exp);
}

console.log(`5^3=${calculatePower(5, 3)}`);
