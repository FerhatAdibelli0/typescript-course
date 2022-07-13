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
