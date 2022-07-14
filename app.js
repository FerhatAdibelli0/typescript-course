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
// Keyof Constraints
const extractAndConvert = (obj, key) => {
    return "Value :" + obj[key];
};
const data = extractAndConvert({ name: "Ferhat" }, "name");
console.log(data);
// Usage Generics in Class
// objects are not used in this kind situations because they are referance type
class DataStorage {
    constructor() {
        this.array = [];
    }
    addItem(item) {
        this.array.push(item);
    }
    removeItem(item) {
        if (this.array.indexOf(item) === -1) {
            return;
        }
        this.array.splice(this.array.indexOf(item), 1);
    }
    getItems() {
        return [...this.array];
    }
}
const valStr = new DataStorage();
const valNumber = new DataStorage();
valStr.addItem("Deneme");
valStr.addItem("test");
valStr.removeItem("test");
valNumber.addItem(456);
valNumber.addItem(424);
valNumber.addItem(356);
valNumber.removeItem(424);
const stringStorage = valStr.getItems();
const numberStorage = valNumber.getItems();
console.log(stringStorage);
console.log(numberStorage);
const createCourse = (title, description, date) => {
    let course = {};
    course.title = title;
    course.description = description;
    course.completeUntil = date;
    return course;
};
let array = ["Ferhat"];
//array.push() you can just read but not modify
