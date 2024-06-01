const stringValue = ' My name is Pranab ';
const valu = stringValue.length;
console.log('valu=>', valu);
// ----------------------------
const valu1 = stringValue.lastIndexOf('e');
console.log('valu1=>', valu1);
// -----------------------------------
const valu2 = stringValue.lastIndexOf('My', 2);
console.log('valu2=>', valu2);
const valu3 = stringValue.indexOf('name');
console.log('valu3=>', valu3);
// ======================================
const valu4 = stringValue.trim();
console.log('valu4=>', valu4);
const valLength = valu4.length;
console.log('valLength=>', valLength);

// ============================
const val1 = stringValue.trimStart();
console.log('val1=>', val1);
const val2 = val1.length;
console.log('val2=>', val2);
// ================================
const stng = 'cde';
const padStng = stng.padStart(2, 0);
console.log('padStng=>', padStng);
// =======================
const val3 = stringValue.split(' ');
console.log('val3=>', val3);

const paragraph = 'Good Morning! How are you? This is John. John is my friend.';
let splitPara = paragraph.split(' ', 5);
console.log('splitPara=>', splitPara);
let joinSplitedData = splitPara.join(' ');
console.log('joinSplitedData=>', joinSplitedData);
// ======================
const substringRes = paragraph.substring(1, 13);
console.log('substringRes=>', substringRes);

const sliceParaPlus = paragraph.slice(+3);
console.log('sliceParaPlus=>', sliceParaPlus);

const sliceParaMinus = paragraph.slice(-3);
console.log('sliceParaMinus=>', sliceParaMinus);

const userName = 'John Doe';
const replacedName = userName.replace(' ', '-');
console.log('replacedName=>', replacedName);

const newStr4 = 'marathon';
const newStr5 = 'Australia';
const strTempLiteralData = `${newStr5} ${newStr4}`;
console.log('strTempLiteralData=>', strTempLiteralData);
