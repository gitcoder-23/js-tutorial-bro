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

// padEnd (count, value)
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

//  substring(index, counted str data)
const substringRes = paragraph.substring(1, 12);
console.log('substringRes=>', substringRes);

// slice + count
const sliceParaPlus = paragraph.slice(+3);
console.log('sliceParaPlus=>', sliceParaPlus);
// slice - count
const sliceParaMinus = paragraph.slice(-3);
console.log('sliceParaMinus=>', sliceParaMinus);

// concat
const str1 = 'java';
const str2 = 'golang';
const str3 = 'python';
console.log('strlength=>', str2, str2.length);
const padRightStr2 = str2.padStart(7);
console.log('padRightStr2=>', padRightStr2, padRightStr2.length);

const concatStr = str1.concat(padRightStr2).concat(str3);
console.log('concatStr=>', concatStr);

// Template Literals ${}
const newStr4 = 'marathon';
const newStr5 = 'Australia';
const strTempLiteralData = `${newStr5} ${newStr4}`;
console.log('strTempLiteralData=>', strTempLiteralData);

// replace(replace the place or character, replaced character)
const userName = 'John Doe';
const replacedName = userName.replace(' ', '-');
console.log('replacedName=>', replacedName);

// replaceAll(replace the place or character, replaced character)
const userName2 = 'John Vogan Doms Wiill';
const replacedAllName = userName2
  .replaceAll(' ', '-')
  .toUpperCase()
  .toLowerCase();
console.log('replacedAllName=>', replacedAllName);
