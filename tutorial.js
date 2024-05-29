// Type of Case
// camelCase
//sanke_case
// PascalCase

// comment
console.log("higf");
// variable assign ES5

// Global Scope
var x = 2;
var x = 4;
var y = x;
console.log("x-value=>", x);
console.log("y-value=>", y);

var x = 9;
//console.log("x-value=>", x);

// ES6 let, const
let a = 8;
console.log("a-value=>", a);

const z = 8;
console.log("z-value>>>>>", z);

// Syncronous
console.log("Ram");
console.log("Mohan");
console.log("Sayam");

// Asyncronous

console.log("India");

setTimeout(() => {
  console.log("America");
}, 4000);

console.log("Zurich");

// Types
// Premtive= Number, Boolean, float, double, String
// Non Premitive = Object, Array, Regex

let m = true; // Boolean

console.log("m-value=>", typeof m);
let n = 3; // Number
let b = 3.4; // float
let d = 40; // double
const str = "Raju"; // String

// Object
const objData = {
  // key: value
  name: "Subham",
  class: "v",
  isPresent: true,
  marks: 90,
};
console.log("objData=>", objData);

// Array
const numArr = [1, 2, 3, 2];
console.log("numArr=>", numArr);
console.log("numArr=>", numArr[2]);
console.log("numArr-2=>", numArr.indexOf(2));

const strArr = ["1", "2", "3", "2", "5"];
console.log("strArr=>", strArr.length);

// Array of object
const objArr = [
  {
    id: 1,
    stuName: "Rahul",
    className: "VII",
    marks: 40,
  },
  {
    id: 2,
    stuName: "Rahul",
    className: "VII",
    marks: 40,
  },
  {
    id: 3,
    stuName: "Rahul",
    className: "VII",
    marks: 40,
  },
];

console.log("objArr=>", objArr, "objArr-length===>", objArr.length);

// FUNCTION
// vanilla Function ES5
function newFun() {
  console.log("vanilla newFun");
}

newFun();

// Arrow Function ES6
const arrowFun = () => {
  const vrrName = "Suman";
  console.log("vrrName=>", vrrName);
};

arrowFun();

// Global Scope
var title;
function globalScopeFn() {
  var title = 20;
  console.log("title=>", title);
}

globalScopeFn();

// Block Scope
let subTitle = 20;
function blockScopeFn() {
  let subTitle = 20;
  console.log("subTitle=>", subTitle);
}

blockScopeFn();

// = use to assign any value in a variable
const newData = 4;

// == it returns only boolean value, it checks the data not type.
const data1 = 4;
const data2 = "4";
const result = data1 == data2;

console.log("resunt==>", result);

// === it returns only boolean value, it checks the data as well as data type.
const data3 = 4;
const data4 = 4;
const result2 = data3 === data4;

console.log("resunt2==>", result2);
