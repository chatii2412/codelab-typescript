function getValue(obj, propName) {
  return obj[propName];
}

const person = {
  name: "Chatii",
  age: 32,
};

const _name = getValue(person, "name"); // _name: any
// const _nane = getValue(person, "nane"); // human error

/* introduce generic */
function getValue2<T, K extends keyof T>(obj: T, propName: K): T[K] {
  return obj[propName];
}

const person2 = {
  name: "Chatii",
  age: 32,
};

const _name2 = getValue2(person2, "name"); // _name2: string
