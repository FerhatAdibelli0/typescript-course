// -----GENERICS
// Array and Promise are only built-in generics
const arr: Array<string> = ["deneme", "test"]; // arr:string[]  these are completely same
const promise: Promise<Array<string>> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["Hello world"]);
  }, 5000);
});

promise.then((data) => {
  data.forEach((item) => {
    console.log(item);
  });
});

// Creating Generic Function

const merge = <T, U>(a: T, b: U) => {
  return Object.assign(a, b);
};

const mergedData = merge(
  { name: "ferhat", hobbies: ["sport", "swiming", "diving"] },
  { age: 38 }
);

//Constraint

// We extends generic types to constraint it
const multiply = <T extends object, U extends object>(a: T, b: U) => {
  return Object.assign(a, b);
};

const multipliedData = multiply(
  { name: "ferhat", hobbies: ["sport", "diving", "hikinig"] },
  { age: 30 }
);

// An other example about constraints

interface MoreInfo {
  length: number;
}

const countAndDescribe = <T extends MoreInfo>(express: T): [T, string] => {
  let describtion = "Hello world";
  if (express.length == 1) {
    describtion = `there is ${express.length} item`;
  } else if (express.length > 1) {
    describtion = `there are ${express.length} items`;
  }
  return [express, describtion];
};

const first = countAndDescribe("Ferhat");
console.log(first);
console.log("testing");

// Keyof Constraints

const extractAndConvert = <T, U extends keyof T>(obj: T, key: U) => {
  return "Value :" + obj[key];
};

const data = extractAndConvert({ name: "Ferhat" }, "name");
console.log(data);

// Usage Generics in Class
// objects are not used in this kind situations because they are referance type
class DataStorage<T extends string | number | boolean> {
  private array: T[] = [];

  addItem(item: T) {
    this.array.push(item);
  }

  removeItem(item: T) {
    if (this.array.indexOf(item) === -1) {
      return;
    }
    this.array.splice(this.array.indexOf(item), 1);
  }

  getItems() {
    return [...this.array];
  }
}

const valStr = new DataStorage<string>();
const valNumber = new DataStorage<number>();

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

// Generic Utility Types
// Partial makes all properties optional
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

const createCourse = (
  title: string,
  description: string,
  date: Date
): CourseGoal => {
  let course: Partial<CourseGoal> = {};

  course.title = title;
  course.description = description;
  course.completeUntil = date;

  return course as CourseGoal;
};

let array: Readonly<string[]> = ["Ferhat"];
//array.push() you can just read but not modify

export type BaseQueryFn<
  Args = any,
  Result = unknown,
  Error = unknown,
  DefinitionExtraOptions = {},
  Meta = {}
> = (
  args: Args,
  api: BaseQueryApi,
  extraOptions: DefinitionExtraOptions
) => Promise<QueryReturnValue<Result, Error, Meta>>;

export interface BaseQueryApi {
  signal: AbortSignal;
  dispatch: any;
  getState: () => unknown;
}

export type QueryReturnValue<T = unknown, E = unknown, M = unknown> =
  | {
      error: E;
      data?: undefined;
      meta?: M;
    }
  | {
      error?: undefined;
      data: T;
      meta?: M;
    };
console.log("test")