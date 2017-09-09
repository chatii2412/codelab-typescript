interface IPerson {
  hello(): void;
}

class Person implements IPerson {
  private _name: string = "Chatii";

  public hello(): void {
    console.log(this._name);
  }
}

const p: IPerson = new Person();

p.hello();
