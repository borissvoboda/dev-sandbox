// You can declare a variable without a keyword,
// using just:
// userAge = 12;

// But you may want to avoid this practice
// Using STRICT MODE, writing in the beginning of the file:
// 'use strict';
'use strict';

// userAge = 12; // this will return error: ReferenceError: userAge is not defined

let userAge = 12; // this will not return error
console.log(userAge);

// UNDEFINED is a reserved word! Wont work in browser! Only var w/o strict!
// let - never!
// let undefined = 5;

// -------------------------------
