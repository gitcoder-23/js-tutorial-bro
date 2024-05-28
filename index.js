console.log('Hi');

var name = 'suman';
var name = 'suman Jana';

// Global Scope
function globalScp() {
  console.log('name=>', name);
}
globalScp();

// block Scope
function blockScp() {
  let subject = 'Math';

  console.log('subject=>', subject);
}
blockScp();
function blockScp1() {
  const subject1 = 'Phy';
  console.log('subject1=>', subject1);
}
blockScp1();

// Array
let arr1 = ['math', 'phy', 'chem'];
console.log('arr1-length=>', arr1.length);

// Array of Object
let arr2 = [
  {
    id: '1',
    name: 'John',
  },
  {
    id: '2',
    name: 'John Vogan',
  },
];

// ==
let data1 = 16;
let data2 = '16';

console.log('==', data1 == data2);

// ===
let data3 = 16;
let data4 = '16';

console.log('===', data3 === data4);

// number to string
console.log('string=>', typeof data3.toString());
// string to number
console.log('number=>', typeof parseInt(data4));

// push()
let arr4 = ['math', 'phy', 'chem'];
let newArr = arr4.push('geo');
console.log('push=>', arr4);

// unshift()
let arr5 = ['math', 'phy', 'chem'];
let newArr5 = arr5.unshift('Bio');
console.log('unshift=>', arr5);

// String to array
let newString = 'Rahul Sharma Das';
console.log('newString=>', newString.split(' ').join('-'));

// replace => .replace(' ', '_')
let replacedData = newString.replace(' ', '_');
console.log('replace=>', replacedData);

// replaceAll => .replaceAll(' ', '_')
let replacedAllData = newString.replaceAll(' ', '_');
console.log('replacedAllData=>', replacedAllData);

// concat()
const cArr1 = [1, 2, 3];
const cArr2 = [4, 5, 6];
const cArr3 = [7, 8, 9];

const concatArr = cArr1.concat(cArr2).concat(cArr3);
console.log('concatArr=>', concatArr);

/// sprade operator(...)
const newSprade = [...cArr1, ...cArr2, ...cArr3];
console.log('newSprade=>', newSprade);

// map()

arr5.map((data, index) => {
  console.log('data=>', data, index);
  return data;
});

arr5.filter((data, index) => {
  console.log('data=>', data, index);
  return data;
});
// multi dimention array
let multiArr = [
  [1, 2, 3],
  [5, 5, 7],
  [5, 5, 7],
];

// flat operation
let depthOps = [1, 2, 3, [4, 5, 6, [8, 9, 10]]];

let flatArr = depthOps.flat(Infinity);
console.log('flatArr=>', flatArr);

// Custom flat
let flatArr2 = depthOps.flat(1, 2);
console.log('flatArr2=>', flatArr2);
// generic function

const genericFun = (data, type) => {
  console.log('genericFun-data=>', data, type);
  if (type == 'arrObj') {
    console.log('Object Data');
  } else if (type == 'newRedArr') {
    console.log('newRedArr Data');
  } else {
    return;
  }
  return data;
};

const obfArr = [
  {
    id: '1',
    pname: 'John',
  },

  {
    id: '2',
    pname: 'Rohan',
  },

  {
    id: '3',
    pname: 'Mohan',
  },
];
genericFun(obfArr, 'arrObj');

obfArr.map((data, index) => {
  console.log('dataObjArr=>', data);
  // Destructuring
  const { id, pname } = data;
  return data;
});

// Reduce

function reduceFun() {
  const newRedArr = [1, 2, 3, 4, 5];
  // genericFun(newRedArr, 'newRedArr');
  let result = newRedArr.reduceRight((prev, next) => {
    console.log('prev + next=>', prev + next);
    return prev + next;
  }, 0);
  console.log('result=>', result);
}
reduceFun();

// Template Litaral
console.log('result=>', `result${'hi'}`);
