// Q: 15
// Title
// L1 - Chaining Promises for Sequential Tasks

// Problem Statement
// Simulate a workflow where:

// Task A (startTask): Resolves after 1s with "Task A completed"
// Task B (processTask): Takes Task A's output, resolves after 1.5s with "Task B processed: <Task A's output>"
// Task C (finalizeTask): Takes Task B's output, resolves after 0.5s with "Final result: <Task B's output>"
// Requirements:

// Use promise chaining (.then())
// Log each step's output
// Handle errors if any task fails
// Expected Output
// "Task A completed"  
// (1 second delay)  
// "Task B processed: Task A completed"  
// (1.5 second delay)  
// "Final result: Task B processed: Task A completed" 


function startTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task A completed");
    }, 1000); // 1s delay
  });
}

function processTask(taskAResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task B processed: ${taskAResult}`);
    }, 1500); // 1.5s delay
  });
}

function finalizeTask(taskBResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Final result: ${taskBResult}`);
    }, 500); // 0.5s delay
  });
}

startTask()
  .then((taskAResult) => {
    console.log(taskAResult);
    return processTask(taskAResult);
  })
  .then((taskBResult) => {
    console.log(taskBResult);
    return finalizeTask(taskBResult);
  })
  .then((finalResult) => {
    console.log(finalResult);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
