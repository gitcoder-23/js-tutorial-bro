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

var x = 4;
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
