// Array Methods
console.log("=======Array Methods======");
const colors = ["red", "green", "blue"];
console.log(colors); // data
console.log(colors.length); // 3

// push => add one or more elements to the end of an array
const arrData1 = ["red", "green", "blue", "yellow"];
console.log("arrData1=>", arrData1);

const pushData = arrData1.push("black", "gray");
console.log("arrData1=>", arrData1);

// unshift => add one or more elements to the beginning of an array
const arrData2 = [1, "green", 5, "yellow"];
const unshiftData = arrData2.unshift("black", "gray");
console.log("arrData2=>", arrData2);

// pop() – remove an element from the end of an array
const arrData3 = [8, 10, 20, 22];
const popData = arrData3.pop();
console.log("arrData3=>", arrData3);

// shift() – remove the first element from an array
const arrData4 = [84, 100, 200, 220];
const shiftData = arrData4.shift();
console.log("arrData4=>", arrData4);

//splice(position/index, value) – manipulate elements in an array such as deleting, inserting, and replacing elements.
let scores = [1, 2, 10, 4, 5];
const spliceData = scores.splice(0, 3);
console.log("spliceData=>", spliceData);
console.log("scores=>", scores);

// slice(start, stop) – copy elements of an array
var numbers = [1, 2, 3, 4, 5];
var newNumbers = numbers.slice(0, 3);
console.log("newNumbers=>", newNumbers);

// Includes

const numbersData = ["1", "2", "3", 4, 5];
const includesData = numbersData.includes("3");

console.log("includesData=>", includesData);

const numbersValue = 12;
const data1 = numbersValue / 2;
console.log("data1=>", data1);

// Find Method
// Even
var numbersArr = [1, 2, 3, 4, 5];
const evenData = numbersArr.find((fData) => fData % 2 == 0);

console.log("evenData=>", evenData);

// Odd
var numbersArr2 = [1, 2, 3, 4, 5];
const oddData = numbersArr.find((fData) => fData % 2 == 1);

console.log("oddData=>", oddData);

// taken from object of an array

// Find the even credit value from the array
let customers = [
  {
    name: "ABC Inc",
    credit: 100,
  },
  {
    name: "ACME Corp",
    credit: 200,
  },
  {
    name: "IoT AG",
    credit: 300,
  },
  {
    name: "IoT AG",
    credit: 4000,
  },
];

const evenCredit = customers.find((eData) => console.log("eData=>", eData));

const evenCredit2 = customers.find((eData) => eData.credit % 2 == 0);
console.log("evenCredit2=>", evenCredit2);

// Find credit grater than 100
const oddCredit2 = customers.find(
  (eData) => eData.credit > 100 && eData.credit < 4000
);
console.log("oddCredit2=>", oddCredit2);

// Map

const arrDVAlue = [4, 9, 16, 25, 36];
console.log("arrDVAlue=>", arrDVAlue);

const mapArr = arrDVAlue.map((data, index) => {
  console.log("data=>", data * 2);
  // console.log("index=>", index);
  return data * 2;
});

console.log("mapArr=>", mapArr);

const mapSqrtArr = arrDVAlue.map((data, index) => {
  console.log("data=>", Math.sqrt(data));
  // console.log("index=>", index);
  return Math.sqrt(data);
});
console.log("mapSqrtArr=>", mapSqrtArr);

const mapSqrtArOneLiner = arrDVAlue.map((data, index) => Math.sqrt(data));
console.log("mapSqrtArOneLiner=>", mapSqrtArOneLiner);

// Filter

const filterSqrtArOneLiner = customers.filter(
  (data, index) => data.credit > 100
);
console.log("filterSqrtArOneLiner=>", filterSqrtArOneLiner);

// Reduce
// reduce()
const arrNewData = [4, 20, 16, 18, 70];
const reduceLeft = customers.reduce((previous, current) => {
  console.log("previous=>", previous);
  console.log("current=>", current);
  return previous + current.credit;
}, 0);

console.log("reduceLeft=>", reduceLeft);

// reduceRight()
const reduceRight = customers.reduceRight((previous, current) => {
  console.log("previous=>", previous);
  console.log("current=>", current);
  return previous + current.credit;
}, 0);

console.log("reduceRight=>", reduceRight);

// sort
const arrNewDVAlue = [20, 9, 12, 11, 40, 36];
const sortAscending = arrNewDVAlue.sort((a, b) => a - b);
console.log("sortAscending=>", sortAscending);
const sortDescending = arrNewDVAlue.sort((a, b) => b - a);
console.log("sortDescending=>", sortDescending);
