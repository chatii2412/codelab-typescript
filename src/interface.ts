function Hello(p: { name: string; age: number; }): void {
  console.log(p.name);
  console.log(p.age);
}

const chatii = {
  name: "Chatii",
  age: 32,
};

const chatii2: { name: string; age: number; } = {
  name: "Chatii2",
  age: 32,
};

/* interface */
interface Person {
  name: string;
  age: number;
  company?: string;
}

function Hello2(p: Person): void {
  console.log(p.name);
  console.log(p.age);

  console.log(p.company); // exception(optional) handling needed
}

const mark: Person = {
  name: "Mark",
  age: 35,
};

const anna: Person = {
  name: "Anna",
  age: 35,
  company: "The Good Company",
};

Hello2(mark);
Hello2(anna);
