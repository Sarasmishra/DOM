// Title:
// L1 - Using bind() to Set this Context

// Problem Statement:
// Create an object car with a property brand and a method getBrand that returns the car's brand. Then, create another function reference using the bind() method that permanently sets the this context to the car object, and call the bound function.


// Define the object
let car = {
  brand: "Tesla",
  getBrand: function() {
    return this.brand;
  }
};

// Create a new function with `this` bound to the car object
let boundGetBrand = car.getBrand.bind(car);

// Call the bound function
console.log(boundGetBrand());  // Output: "Tesla"
