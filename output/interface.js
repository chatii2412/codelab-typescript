"use strict";
function Hello(p) {
    console.log(p.name);
    console.log(p.age);
}
var chatii = {
    name: "Chatii",
    age: 32,
};
var chatii2 = {
    name: "Chatii2",
    age: 32,
};
function Hello2(p) {
    console.log(p.name);
    console.log(p.age);
    console.log(p.company); // exception(optional) handling needed
}
var mark = {
    name: "Mark",
    age: 35,
};
var anna = {
    name: "Anna",
    age: 35,
    company: "The Good Company",
};
Hello2(mark);
Hello2(anna);
