// select el. we adding to
const body = document.body;

// appendChild - must be node, cannot be a string
// body.appendChild('Append Child'); // error

// append = can be also STRING
body.append('Hello World');

// With append we can append multiple things:
body.append('Hello World', document.createElement('span'), 'My name is Adam.');

// Create Element and append it
const div = document.createElement('div');
body.append(div);

// innerText in Div
// innerText - looks at the CSS - prints only visible text and no padding.
// innerText
const div1 = document.createElement('div');
div1.innerText = 'Inner Text!';

body.append(div1);

// Text Content - includes indentation, padding
const div2 = document.createElement('div');
div2.textContent = 'Text Content!';
body.append(div2);

const hr = document.createElement('hr');
body.append(hr);

// Modifying HTML elements
const div3 = document.createElement('div');
// will not work
div3.innerText = '<i>String inside of a tag</i>'; // tag treated as string!

body.append(div3);

const div4 = document.createElement('div');
// will work. InnerHTML is the only way to add HTML
// from a string to an element.
div4.innerHTML = '<i>String inside of a tag</i>'; // tag

const strong = document.createElement('strong');
strong.innerText = 'Text in strong';

div4.append(strong);

body.append(div4);

body.append(document.createElement('hr'));

///

// You can use append on any element.
