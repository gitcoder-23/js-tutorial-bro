// Array syntax
console.log(Array);
const colors = ['red', 'green', 'Yellow'];
console.log(colors);
console.log(colors.length);

const arrData1 = ['red', 'green', 'blue', 'yellow'];
console.log('arrData1=>', arrData1);

const arrData2 = [1, 2, 3, 4];
console.log('arrData2 =>', arrData2);

const pushdata = arrData2.push(5, 6, 7);
console.log('arrData2 =>', arrData2);

const arrData3 = [1, 'green', 5, 'yellow'];
const unshiftData = arrData3.unshift('black', 'gray');
console.log('arrData3=>', arrData3);

const arrData5 = [8, 10, 20, 22];
const popData = arrData5.pop();
console.log('arrData5=>', arrData5);

// Splice deletion operation
const arrData6 = [1, 2, 10, 4, 5];
const spliceData = arrData6.splice(0, 3);
console.log('spliceData=>', spliceData);
console.log('arrData6=>', arrData6);

// Splice insertion

let rColors = ['red', 'green', 'blue'];
const rColorsSplice = rColors.splice(3, 0, 'sink', 9);
console.log('rColors=>', rColors);

// Splice replacement

let lang = ['C', 'C++', 'Java', 'JavaScript', 7];
const langSplice = lang.splice(0, 2, 'flutter');
console.log('lang=>', lang);

const arrData7 = [1, 2, 3, 4, 5];
const sliceData = arrData7.slice(0, 4);
console.log('sliceData=>', sliceData);

// -------------------------------------------------------------------------

const B = [1, 2, 4];
const C = [20, 25, 40];
const D = [50, 250, 400];
const E = [204, 252, 404];

const concatArr1 = B.concat(C).concat(D).concat(E);
console.log('concatArr1=>', concatArr1);

const spreadArray = [...B, ...C, ...D, ...E];
console.log('spreadArray =>', spreadArray);

const value = [1, 2, 3, 4, [5, 6, 7, 8, [9, 10, 11, 12]]];
const newValue = value.flat();
console.log('newValue =>', newValue);

const arr1 = ['sabitry', 'bai'];
const joinArr = arr1.join('-');
console.log('joinArr=>', joinArr);
const makeLower = joinArr.toLowerCase();
const makeUpper = joinArr.toUpperCase();

console.log('makeLower=>', makeLower);
console.log('makeUpper=>', makeUpper);
