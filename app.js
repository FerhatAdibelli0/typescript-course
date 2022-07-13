"use strict";
//----- Intersection Types
const person = {
    name: "Ferhat",
    privileges: ["create-server"],
    startDate: new Date(),
};
//----- Type Guards == This is used union types it could be types such as object,class or basic property
// with typeof
function Add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function Test(emp) {
    if ("privileges" in emp) {
        return console.log(emp.name + " " + emp.privileges);
    }
    else {
        return console.log(emp.name + " " + emp.startDate);
    }
}
Test({ name: "Ferhat", startDate: new Date() });
// with instance of
class Car {
    define() {
        console.log("Driving Car...");
    }
}
class Truck {
    define() {
        console.log("defining Truck...");
    }
    loading(amount) {
        console.log("Driving Truck loading " + amount);
    }
}
function Vehicle(vec) {
    if (vec instanceof Truck) {
        vec.loading(4000);
        vec.define();
    }
    else {
        vec.define();
    }
}
const v1 = new Car();
const v2 = new Truck();
Vehicle(v2);
