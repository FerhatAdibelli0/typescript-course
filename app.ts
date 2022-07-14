// -----GENERICS
// Array and Promise are only built-in generics
const arr: Array<string> = ["deneme", "test"]; // arr:string[]  these are completely same
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello world");
  }, 5000);
});

promise.then((data) => {
  console.log(data.split(" "));
});

// Creating Generic Function

const merge = <T, U>(a: T, b: U) => {
  return Object.assign(a, b);
};

const mergedData = merge({ name: "ferhat", hobbies: ["sport"] }, { age: 30 });

// Constraint
// We extends generic types to constraint it
const multiply = <T extends object, U extends object>(a: T, b: U) => {
  return Object.assign(a, b);
};

const multipliedData = multiply(
  { name: "ferhat", hobbies: ["sport"] },
  { age: 30 }
);
console.log(multipliedData);
