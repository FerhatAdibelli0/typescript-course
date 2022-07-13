interface Person {
  name: string;
  age: number;
  gretting(phrase: string): void;
}

const user1: Person = {
  name: "Ferhat",
  age: 30,
  gretting(phrase: string) {
    console.log(phrase + this.name);
  },
};

user1.gretting("Hi there -- I am")