const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 },
];

// const totalAge = people.reduce((accumulator, person) => {
//   return accumulator + person.age;
// }, 0);

// console.log(totalAge); // 130

// 1. The reduce method thakes a callback function and an initial value (0 in this case).
// 2. The callback function receives two arguments:
// __1) accumulator: The total accumulated value so far.
// __2) person: the singular object in the array.
// 3. In each iteration, we add the value of the age property of the current person to the overal
// accumulator.
// 4. After looping through the array, totalAge will hold the sum of all age values.
// Inside the accumulator there is the anonymous callback function.

// ----------------------------------------------------------------

// NAMED CALLBACK FUNCTION
// It is also possible to name the callback function:

const accumulateAge = (accumulator, person) => {
  return accumulator + person.age;
};

const totalAge = people.reduce(accumulateAge, 0);

console.log(totalAge); // 130

// In this example the reduce function will pass TWO values into the acculuateAge.
// That be accumulator and the person object.
