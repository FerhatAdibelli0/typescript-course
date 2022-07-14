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
