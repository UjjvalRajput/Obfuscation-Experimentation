const math = require('mathjs');

// Example usage
console.log(math.add(2, 3)); // Output: 5
console.log(math.subtract(2, 3)); // Output: -1
console.log(math.multiply(2, 3)); // Output: 6
console.log(math.divide(2, 3)); // Output: 0.6666666666666666
console.log(math.pow(2, 3)); // Output: 8
console.log(math.sqrt(16)); // Output: 4
console.log(math.log(16, 2)); // Output: 4
console.log(math.sin(math.pi / 2)); // Output: 1
console.log(math.cos(math.pi)); // Output: -1
console.log(math.tan(math.pi / 4)); // Output: 1
console.log(math.factorial(5)); // Output: 120
console.log(math.combinations(5, 3)); // Output: 10

// Repeat the computations multiple times
for (let i = 0; i < 100000; i++) {
    math.add(2, 3);
    math.subtract(2, 3);
    math.multiply(2, 3);
    math.divide(2, 3);
    math.pow(2, 3);
    math.sqrt(16);
    math.log(16, 2);
    math.sin(math.pi / 2);
    math.cos(math.pi);
    math.tan(math.pi / 4);
    math.factorial(5);
    math.combinations(5, 3);
}