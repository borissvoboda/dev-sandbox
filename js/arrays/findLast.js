const arr = [
  1, 2, 3, 1, 2, 10, 12, 15, 48, 78, 2, 6, 2, 4, 5, 4, 22, 21, 2, 4, 8, 7, 9,
  14, 2, 0, 1, 2,
];

const lastNumber = arr.findLast((x) => x > 21);

console.log(lastNumber);
