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

// logical operator
// || , && , !

// ? :

// DOM

// BOM
const alertFun = () => {
  // alert("Hi");
  console.log("arg=>", window.location.pathname);
};

alertFun();
var timesRun = 0;
const intervalData = setInterval(() => {
  // alert("Hi");

  console.log("arg=>");
  timesRun += 1;
  if (timesRun === 10) {
    clearInterval(intervalData);
  }
}, 1000);

console.log("intervalData=>", intervalData);
