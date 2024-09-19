// const user = undefined;

// if (user && user.name && user.name.firstName) {
//   // console.log(user.name.firstName);
// }
// =>

// but the user needs to be declared
// console.log(user?.name?.firstName);

// Or if not declared
console.log(typeof user !== 'undefined' ? user?.name?.firstName : undefined);
