"use strict";
const add = (a, b) => {
    return a + b;
};
class Person {
    constructor(n) {
        if (this.name) {
            this.name = n;
        }
        else {
            console.log("Hi there");
        }
    }
    gretting(phrase) {
        console.log(phrase + this.name);
    }
    define() {
        console.log("Defining something");
    }
}
let user; // or Person
user = new Person();
console.log(user);
const user1 = {
    name: "Ferhat",
    gretting(phrase) {
        console.log(phrase + this.name);
    },
};
console.log("den");
user1.gretting("Hi there -- I am");
