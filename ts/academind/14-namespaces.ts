// see crockford / best parts / JS one global object

// namespace DDInterfaces {}

// Namespaces are not JS feature. TS will compile namespace into object.
// you can put interfaces, classes, const - anything into namespaces
// those objects are only available in this namespace
// you can add EXPORT keyboard to interfaces, meaning that they are available outsade namespace
// if we import namespace

// HOW TO IMPORT NAMESPACE

// THREE slashes are NOT comments!

/// <reference path="14-exports.ts"/>
// namespace App {
console.log(exportedConst);
// }
