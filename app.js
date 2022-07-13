"use strict";
const user1 = {
    name: "Ferhat",
    age: 30,
    gretting(phrase) {
        console.log(phrase + this.name);
    },
};
user1.gretting("Hi there -- I am");
