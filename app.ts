export {};

let age: number;
age = 50;

let name: string;
name = "Max";

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callback: (param1: number) => number;
callback = (a) => {
  return 100 + a;
};

let anything: any;
anything = -20;
anything = "Text";
anything = {};

let some: unknown;
some = "Text";
if (typeof some === "string") {
  let str: string;
  str = some;
}

let person: [string, number];
person = ["Max", 21];

enum Toggle {
  LOADING,
  READY,
}
const page = {
  status: Toggle.LOADING,
};
if (page.status === Toggle.LOADING) {
  console.log("Page is loading");
}

let union: string | number;
union = 1;
union = "Hello";

let literal: "enable" | "disable";
literal = "disable";
literal = "enable";

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

type Page = {
  readonly title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt?: Date;
    updateAt?: Date;
  };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
