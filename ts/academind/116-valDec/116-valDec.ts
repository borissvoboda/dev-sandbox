// Decorators for validation

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

// Common scenario: You fetch data from web and you get data but you are not sure.
// You want to use the data form user and you want to validate the data

// const price = +priceEl.value;  // + converts to number

// --------------------------------------------------

// Creating a new course with data...
// This, I guess is the validation? I guess not yet
// const createdCourse = new Course(title, price);

// But if I don't set anything, than it loooks like 0 is submitted.

// VALIDATION:

function Required() {}

function PositiveNumber() {}

function validate(obj: object) {}

// ...
// after we creata a course, we can call val. func.

const createdCourse = new Course(title, price);

if (!validate(createdCourse)) {
  alert('Inavalid input');
  return;
}
