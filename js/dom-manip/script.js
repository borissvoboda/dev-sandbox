const body = document.body;

const div = document.querySelector('div');

const span1 = document.querySelector('#one');
// console.log(span1);
const span2 = document.querySelector('#two');

span1.classList.add('new-class');

// span1.classList.remove('why');

span1.classList.toggle('why');
span1.classList.toggle('why', true); // automatically removes if false, add if true

span1.style.color = 'red';
span1.style.backgroundColor = 'red';
span1.style.backgroundColor = 'red';
