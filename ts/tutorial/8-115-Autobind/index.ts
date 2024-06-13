// This is decorator
// target- prototype in this casem
// methodName - string, symbol, number...
//
function Autobind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
}

class Printer {
  message = 'This works!';

  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage.bind(p));

// if p.shwoMessage ->
// console: undefined, because:
// With the event listener, if we point to the function that should be executed
// p.showMessage refers to the target of the event;
// ----
// Comon workaround, default JS:
// p.showMessage.bind(p)
// ----
// But TS:
//
