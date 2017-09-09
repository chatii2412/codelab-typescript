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
}

function Hello2(p: Person): void {
  console.log(p.name);
  console.log(p.age);
}

const mark: Person = {
  name: "Mark",
  age: 35,
};

Hello2(mark);
