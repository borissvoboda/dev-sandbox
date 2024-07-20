console.info('NaN === NaN : ', NaN === NaN); // false
console.info('NaN == NaN : ', NaN == NaN); // false
console.info('typeof NaN : ', typeof NaN); // number :[
console.info(' "" == NaN : ', '' == NaN); // false
console.info('----------------------------------------');

console.info("isNaN('string') : ", isNaN('string')); // true - string is not a number

// isNaN(123); => false
console.info("isNaN('') : ", isNaN(''));
console.info("isNaN('123') : ", isNaN('123'));
console.info('isNaN([]) : ', isNaN([]));
console.info('----------------------------------------');
console.info('isNaN([1, 2]) : ', isNaN([1, 2]));
console.info('isNaN({}) : ', isNaN({}));
