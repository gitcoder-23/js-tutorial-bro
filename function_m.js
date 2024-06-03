// Function
// vanilla

function funName() {
  let x = 20;
  console.log("x=>", x);
}
funName();

// Arrow function
const funArrowNAme = () => {
  let x = 30;
  console.log("x=>", x);
};

funArrowNAme();

// Generic Function
const newFnGen = (newArg) => {
  console.log("newArg=>", newArg);
};
const genFun = (arg) => {
  console.log("arg=>", arg);
  newFnGen(arg);
};

genFun(90);
