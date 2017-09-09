"use strict";
function getValue(obj, propName) {
    return obj[propName];
}
var person = {
    name: "Chatii",
    age: 32,
};
var _name = getValue(person, "name"); // _name: any
// const _nane = getValue(person, "nane"); // human error
/* introduce generic */
function getValue2(obj, propName) {
    return obj[propName];
}
var person2 = {
    name: "Chatii",
    age: 32,
};
var _name2 = getValue2(person2, "name"); // _name2: string
