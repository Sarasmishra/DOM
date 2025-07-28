// Title:
// L1 - this Inside a Method vs Regular Function

// Problem Statement:
// Create an object user with a property username and a method showUsername that logs this.username. Also, create a regular function outside the object that tries to log this.username. Use both to demonstrate the difference in this context between a method and a standalone function.

// Object with a method
let user = {
  username: "john_doe",
  showUsername: function() {
    console.log("Method:", this.username);
  }
};

// Regular standalone function
function displayUsername() {
  console.log("Function:", this.username);
}

// Call the method from the object
user.showUsername();  // Method: john_doe

// Call the regular function
displayUsername();    // Function: undefined (in strict mode)
