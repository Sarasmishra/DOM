// Problem Statement:
// Write a function called multiplyNumbers that accepts
//  two numbers as arguments and uses the apply() method to multiply them. The function should return the product.


function multiply(a, b) {
  return a * b;
}

function multiplyNumbers(num1, num2) {
  return multiply.apply(null, [num1, num2]);
}

// Example usage
let result = multiplyNumbers(4, 5);
console.log(result); // Output: 20
