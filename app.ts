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

// function Ferhat(a: number) {
//   return a;
// }

// function Add(num: number, num2: number) {
//   return Ferhat(num + num2);
// }

// let result = Add(36, 89);
// console.log(result);

class Department {
  // id: string;
  // name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department ID: ${this.id} -- Name: ${this.name}`);
  }

  addEmployess(employee: string) {
    // this.id="ID2" // You doesnt change it because it is readonly
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, "ITTech");
  }
}

const IT = new ITDepartment("D2", ["Ferhat"]);

class accountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "AccountingDep");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  getReport() {
    console.log(this.reports);
  }
}

const AccountingRep = new accountingDepartment("D3", []);

// const Diftesting = {
//   name: "FERHAT",
//   describe: test.describe,
// };

// test.name = "FERHAT"; // I reach name property from outside because it is public
IT.describe();
IT.addEmployess("Ferhat");
IT.addEmployess("Adibelli");
IT.printEmployeesInformation();
console.log(AccountingRep);
AccountingRep.addReport("There is something wrong");
AccountingRep.getReport(); 
// IT.employees[2] = "Test"; // Normally we dont want to react this property from outside so we use private keyword
