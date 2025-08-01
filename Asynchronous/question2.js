// Title:
// L1- Simulating Asynchronous Data Fetching with Error Handling Using Async/Await

// Problem Statement:
// You are tasked with simulating a data fetching function that occasionally fails. The goal is to:

// Write a function fetchData that simulates data fetching using a Promise with a 50% chance of success or failure.
// So we know that above logic seems to be a bit tricky but think about a way in JS where you can randomly generate a number between 1 and 0 and based on that you assign truthy and falsy values . (Now it should be easier , if not then you should go and learn about truthy and falsy values along with how to generate random numbers in JS)
// Write an async function fetchDataHandler to:
// Use async/await to handle the result of the fetchData function.
// Log "Fetched data successfully!" if the fetch is successful.
// Log "Error fetching data" along with the error message if the fetch fails.



function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Generate a random number between 0 and 1
      const success = Math.random() > 0.5;

      if (success) {
        resolve("Data payload");  // Simulated successful response
      } else {
        reject("Network error");  // Simulated error
      }
    }, 1000); // simulate 1 second delay
  });
}


async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log("Fetched data successfully!", result);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}


fetchDataHandler();
