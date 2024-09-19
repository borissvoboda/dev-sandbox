// sorting as strings!!!

const numbers = [1, 20, 10, 2, 11, 3, 60];
const sorted = numbers.toSorted();

console.log(sorted);

// in order to sort as numbers:

const numbersInt = [10, 5, 1, 20];
const sortedNumbers = numbersInt.toSorted((a, b) => a - b);

console.log(sortedNumbers); // Output: [1, 5, 10, 20]
