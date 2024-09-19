const obj = { a: 1, b: 2, c: 3, d: 4 };
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj)); // key-val pairs as arrays

for (let key in obj) {
  console.log(key); // a, b, c
}
