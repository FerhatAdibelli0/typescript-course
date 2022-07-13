"use strict";
class Person {
    constructor(n, age = 30) {
        this.age = age;
        this.name = n;
    }
    gretting(phrase) {
        console.log(phrase + this.name);
    }
    define() {
        console.log("Defining something");
    }
}
let user; // or Person
user = new Person("Ferhat");
console.log(user);
const user1 = {
    name: "Ferhat",
    gretting(phrase) {
        console.log(phrase + this.name);
    },
};
user1.gretting("Hi there -- I am");
