// Title:
// L1 - Using call() to Access Object Properties

// Problem Statement:
// Create a function personInfo that logs the name and age of a person. Using the call() method, call the function with a specific this context (an object with properties name and age).


function personInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

// Object with name and age properties
const person = {
  name: "John",
  age: 30
};

// Call the function with 'person' as the this context
personInfo.call(person);
