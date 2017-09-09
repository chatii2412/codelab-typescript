/* let vs const */
let a: string = "aaa";
const b: string = "bbb";

let c = "ccc";
const d = "ddd"; // type inference failed

const e = {
  f: "fff",
};

e.f = "f2f2f2";
e.f = 555;
e.g = "ggg";
