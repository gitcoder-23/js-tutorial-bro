// String method
const strValue = ' javascript oops ';
// to know length
const pranabLength = strValue.length;
console.log('pranabLength=>', pranabLength);

// to know last index
const lastIndexStr = strValue.lastIndexOf('o', 2);
console.log('lastIndexStr=>', lastIndexStr);

// Includes
const includesStr = strValue.includes('p');
console.log('includesStr=>', includesStr);

// trim
const trimStr = strValue.trim();
console.log('trimStr=>', trimStr);

// trimStart
const trimStartStr = strValue.trimStart();
console.log('trimStartStr=>', trimStartStr);

// trimStart
const trimEndStr = strValue.trimEnd();
console.log('trimEndStr=>', trimEndStr);

// padStart
const strData = 'abc';
const padStartStr = strData.padStart(7, 4);
console.log('padStartStr=>', padStartStr);

// padEnd
const padEndStr = strData.padEnd(7, 4);
console.log('padEndStr=>', padEndStr);

// split
let newStr = 'j ava python flutter';

const splitRes1 = newStr.split();
console.log('splitRes1=>', splitRes1);

const splitRes2 = newStr.split('');
console.log('splitRes2=>', splitRes2);
const splitRes3 = newStr.split(' ');
console.log('splitRes3=>', splitRes3);
// count split
const splitCountRes = newStr.split(' ', 2);
console.log('splitCountRes=>', splitCountRes);

const paragraph = 'Good Morning! How are you? This is John. John is my friend.';
let splitPara = paragraph.split(' ', 5);
console.log('splitPara=>', splitPara);
let joinSplitedData = splitPara.join(' ');
console.log('joinSplitedData=>', joinSplitedData);
