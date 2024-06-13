var Printer = /** @class */ (function () {
    function Printer() {
        this.message = 'This works!';
    }
    Printer.prototype.showMessage = function () {
        console.log(this.message);
    };
    return Printer;
}());
var p = new Printer();
var button = document.querySelector('button');
button.addEventListener('click', p.showMessage.bind(p));
// if p.shwoMessage ->
// console: undefined, because:
// With the event listener, if we point to the function that should be executed
// p.showMessage refers to the target of the event;
// ----
// Comon workaround:
// p.showMessage.
