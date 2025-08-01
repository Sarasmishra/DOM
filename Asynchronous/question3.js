// Q: 14
// Title
// L0 - Basic Promise Implementation

// Problem Statement
// Create a function checkEvenNumber that takes a number and returns a Promise:

// If the number is even, resolve with: "<number> is even"
// If odd or not a number, reject with: "<number> is odd or invalid"
// Requirements:

// Use Promise constructor
// Handle both resolution and rejection
// Test with:
// checkEvenNumber(4).then(console.log).catch(console.error);  // Expected: "4 is even"  
// checkEvenNumber(5).then(console.log).catch(console.error);  // Expected: "5 is odd or in

function checkEvenNumber(number) {
  return new Promise((resolve, reject) => {
    if (typeof number === "number" && number % 2 === 0) {
      resolve(`${number} is even`);
    } else {
      reject(`${number} is odd or invalid`);
    }
  });
}


checkEvenNumber(4)
  .then(console.log)       // Expected: "4 is even"
  .catch(console.error);

checkEvenNumber(5)
  .then(console.log)
  .catch(console.error);   // Expected: "5 is odd or invalid"

checkEvenNumber("test")
  .then(console.log)
  .catch(console.error);   // Expected: "test is odd or invalid"
