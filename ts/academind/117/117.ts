interface ValidatorConfig {
  [property: string]: {
    [validatableProperty: string]: string[]; //['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    [propName]: ['required'],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    [propName]: ['positive'],
  };
}

function validate(obj: object) {
  
}

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


const createdCourse = new Course(title, price);

if (!validate(createdCourse)) {
  alert('Inavalid input');
  return;
}
