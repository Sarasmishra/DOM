// Q: 9
// Title : L1: Deep vs Shallow copy


// Write a function deepClone(obj) that creates a deep copy of a given object using JSON.stringify() and JSON.parse(). The function should ensure that modifying the cloned object does not affect the original object.

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Original object
const original = {
  name: "Alice",
  hobbies: ["reading", "traveling"]
};

// Create a deep clone
const cloned = deepClone(original);

// Modify the clone
cloned.hobbies.push("coding");

// Output both objects
console.log("Original:", original);
console.log("Clone:", cloned);
