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
