"use strict";
// src/exports.ts
var App;
(function (App) {
    App.exportedConst = 'value';
})(App || (App = {}));
/// <reference path="exports.ts"/>
var App;
(function (App) {
    console.log(App.exportedConst);
})(App || (App = {}));
