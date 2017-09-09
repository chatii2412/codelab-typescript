"use strict";
var Person = /** @class */ (function () {
    function Person() {
        this._name = "Chatii";
    }
    Person.prototype.hello = function () {
        console.log(this._name);
    };
    return Person;
}());
var p = new Person();
p.hello();
