// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isEven(num) {
  return num % 2 === 0;
}

function factorial(num) {
  // define a result variable
  var result = 1;
  // calculate factorial and store value in result
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  // return the result variable
  return result;
}

function factorial2(num) {
  // define a result variable
  if (num === 0) {
    return 1;
  }
  var result = num;
  // calculate factorial and store value in result
  for (var i = num - 1; i >= 1; i--) {
    result *= i;
  }
  // return the result variable
  return result;
}

function kebabToSnake(str) {
  var newStr = str.replace(/-/, "_");
  return newStr;
}

var phrase = "hi there!";

function doSomething() {
  phrase = "goodbye!";
  console.log(phrase);
}
