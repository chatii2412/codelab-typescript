/* let vs const */
let a: string = "aaa";
const b: string = "bbb";

let c = "ccc"; // c: string
const d = "ddd"; // d: 'ddd'(literal). See chapter 11.

const e = {
  f: "fff",
};

e.f = "f2f2f2";
e.f = 555;
e.g = "ggg";
