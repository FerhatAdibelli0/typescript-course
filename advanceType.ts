//----- Intersection Types

type Admin = {
  name: string;
  privileges: string[];
};

type Employess = {
  name: string;
  startDate: Date;
};

type elevatedEmployee = Admin & Employess; // Can combine them

const person: elevatedEmployee = {
  name: "Ferhat",
  privileges: ["create-server"],
  startDate: new Date(),
};
// Using only intersected types when it is used in union types

type Combine = string | number;
type Numeric = number | boolean;
type Universal = Combine & Numeric;

//----- Type Guards == This is used union types it could be types such as object,class or basic property

// with typeof
function Add(a: Combine, b: Combine) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
// with "" in
type UnknownType = Admin | Employess;

function Test(emp: UnknownType) {
  if ("privileges" in emp) {
    return console.log(emp.name + " " + emp.privileges);
  } else {
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
  loading(amount: number) {
    console.log("Driving Truck loading " + amount);
  }
}

function Vehicle(vec: Truck | Car) {
  if (vec instanceof Truck) {
    vec.loading(4000);
    vec.define();
  } else {
    vec.define();
  }
}
const v1 = new Car();
const v2 = new Truck();

Vehicle(v2);

// Discriminated Unions

interface Bird {
  type: "bird"; // literal type
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Horse | Bird;

function findRightAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving speed at :" + speed);
}

findRightAnimal({ type: "bird", flyingSpeed: 152 });

// Type Casting

// const inputData = <HTMLInputElement>document.getElementById("input-data");
// const inputData = document.getElementById("input-data")! as HTMLInputElement;
const inputData = document.getElementById("input-data");
if (inputData) {
  const data = (inputData as HTMLInputElement).value;
  console.log(data);
}

// Indexed Type
// when you dont know what is there inside of object,use index type
interface indexedReq {
  id: string;
  [key: string]: string | number;
}

const req: indexedReq = {
  id: "345345sfgdsgdgdg",
  email: "test@hotmail.com",
  age: 25,
};

// Function Overloads
type Combined = string | number;

function Plus(a: number, b: number): number; // we use this overload functions to make sure TS what type will return
function Plus(a: string, b: string): string;
function Plus(a: string, b: number): string;
function Plus(a: number, b: string): string;

function Plus(a: Combined, b: Combined) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const a = Plus("ferhat", "adibelli").slice(-9);
console.log(a);

// Optional Chaining

interface Job {
  title?: string;
  description: string;
}

interface Data {
  name: string;
  age: number;
  job?: Job;
}

const fetchedData: Data = {
  name: "Ferhat",
  age: 30,
  job: {
    description: "This is reaaly hard job",
  },
};

console.log(fetchedData?.job?.title);

// Nullish Coalescing

const value = 0;

console.log(value || "Default");
console.log(value ?? "Default");

console.log("test")

