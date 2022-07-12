// let a:number;
// let b:string;
// a = 45;
// b = "ferhat";
// console.log(a + b);
// const add = (one: number, two: number) => {
//   return one + two;
// };
// let result = add(25, 36);
// console.log(result);
// const person: {
//   name: string;
//   age: number;
//   desc: string;
//   successed?: boolean;
//   hobbies: string[];
// } = {
//   name: "ferhat",
//   age: 34,
//   desc: "HELLO",
//   hobbies: ["ferhat", "hey"],
// };
// console.log(person.desc.toLowerCase());
// const person: {
//   name: string;
//   age: number;
//   desc: string;
//   successed?: boolean;
//   hobbies: [string, number];
// } = {
//   name: "ferhat",
//   age: 34,
//   desc: "HELLO",
//   hobbies: ["ferhat", 23],
// };
// person.hobbies = ["ferhat", 23, "deneme"];
// console.log(person.hobbies[1]);
// const admin = 0;
// const solver = 1;
// const cluster = 2;
// enum Role {
//   admin=7,
//   solver,
//   cluster,
// }
// let person = {
//   name: "Ferhat",
//   age: 30,
//   role: Role.admin,
// };
// if (person.role === Role.admin) {
//   console.log("it is worked");
// }
// TYPE LITERAL
// type Combine = number | string;
// type CombinedDescription = "as-math" | "as-text";
// const add = (
//   number1: Combine,
//   number2: Combine,
//   resultConvertion: CombinedDescription
// ) => {
//   let result;
//   if (
//     (typeof number1 === "number" && typeof number2 === "number") ||
//     resultConvertion === "as-math"
//   ) {
//     return (result = +number1 + +number2);
//   } else {
//     return (result = number1.toString() + number2.toString());
//   }
// };
// Type Assign
// const result = add(25, "85", "as-text");
// const result2 = add(25, "85", "as-math");
// console.log(result);
// console.log(result2);
// type INFO = {
//   name: string;
//   age: number;
// };
// let person = {
//   name: "Ferhat",
//   age: 30,
// };
// function Ferhat({ name, age }: INFO) {
//   return `${name} is ${age} years old`;
// }
// let res = Ferhat(person);
// console.log(res)
function Ferhat(a) {
    return a;
}
function Add(num, num2) {
    return Ferhat(num + num2);
}
var result = Add(12, 25);
console.log(result);
