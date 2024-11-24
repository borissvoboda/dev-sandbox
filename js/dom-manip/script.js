const body = document.body;

const div = document.querySelector('div');

const span1 = document.querySelector('#one');
const span2 = document.querySelector('#two');

// How to get attributes and so?

// Modify attributes

console.log(span1.getAttribute('title'));

// or dotted
console.log(span1.id);

// setAttr
console.log(span1.setAttribute('title', 'sdfasdf'));

span1.id = 'aaa1';

span1.removeAttribute('title');

// data attr / start with data-
// console.log(span1.dataset);

console.log(span1.dataset.mydataNameOne);

span1.dataset.newName = 'hi';

//
