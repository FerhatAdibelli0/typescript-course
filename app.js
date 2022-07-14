"use strict";
// -----GENERICS
// Array and Promise are only built-in generics
const arr = ["deneme", "test"]; // arr:string[]  these are completely same
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello world");
    }, 5000);
});
promise.then((data) => {
    console.log(data.split(" "));
});
// Creating Generic Function
const merge = (a, b) => {
    return Object.assign(a, b);
};
const mergedData = merge({ name: "ferhat", hobbies: ["sport"] }, { age: 30 });
//Constraint
// We extends generic types to constraint it
const multiply = (a, b) => {
    return Object.assign(a, b);
};
const multipliedData = multiply({ name: "ferhat", hobbies: ["sport"] }, { age: 30 });
const countAndDescribe = (express) => {
    let describtion = "Hello world";
    if (express.length == 1) {
        describtion = `there is ${express.length} item`;
    }
    else if (express.length > 1) {
        describtion = `there are ${express.length} items`;
    }
    return [express, describtion];
};
const first = countAndDescribe("Ferhat");
console.log(first);
