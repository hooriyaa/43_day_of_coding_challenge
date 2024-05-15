// QUESTION 129
//Convert a traditional function expression to an arrow function:
const traditionalFunction = function (num1: number, num2: number) {
  return num1 + num2;
};

const arrowFunction = (num1: number, num2: number) => num1 + num2;

console.log(traditionalFunction(8, 9));
console.log(arrowFunction(8, 9));



// QUESTION 128:
// Arrow function that takes multiple parameters:
const multiplearameter = (...numbers: number[]) => {
  return numbers.reduce((total, currentElement) => total * currentElement, 1);
};
let result = multiplearameter(3, 6, 7);
console.log(result);



// QUESTION 129: 
// traditionalVsArrowFunction
const traditionalVsArrowFunction = {
  fname: "hooriya",
  traditionalFunction: function () {
    console.log("Traditional function:", this.fname);
  },
  arrowFunction: () => {
    console.log(`Arrow Function: ${this.fname}`);
  },
};

traditionalVsArrowFunction.traditionalFunction();
traditionalVsArrowFunction.arrowFunction();
