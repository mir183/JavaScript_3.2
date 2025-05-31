function calculateArea({length = 1, width = 1} = {}) {
    return length * width;
}

console.log(`Area: ${calculateArea({length: 5, width: 3})}`);
console.log(`Default Area: ${calculateArea()}`);