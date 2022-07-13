// type AddFunc = (a: number, b: number) => number;
// interface also can be used for functions but custom type has a bit more common usage because of being shorter
interface AddFunc {
  (a: number, b: number): number;
}

const add: AddFunc = (a: number, b: number) => {
  return a + b;
};

interface Named {
  readonly name: string;
}
// You can extends interfaces not just restricted one but two or more
interface Grettable extends Named {
  gretting(phrase: string): void;
}

class Person implements Grettable {
  name: string;
  constructor(n: string, public age = 30) {
    this.name = n;
  }

  gretting(phrase: string) {
    console.log(phrase + this.name);
  }

  define() {
    console.log("Defining something");
  }
}
let user: Grettable; // or Person
user = new Person("Ferhat");
console.log(user);

const user1: Grettable = {
  name: "Ferhat",
  gretting(phrase: string) {
    console.log(phrase + this.name);
  },
};

user1.gretting("Hi there -- I am");
