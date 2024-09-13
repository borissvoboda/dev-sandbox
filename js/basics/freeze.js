obj = {
  name: 'Tom',
  age: 37,
};

obj.department = 'DevOps';

console.dir(obj);

Object.freeze(obj);

obj.title = 'Bc.';

console.dir(obj);
