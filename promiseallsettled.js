const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Failed");

Promise.allSettled([p1, p2]).then((results) => {
  console.log(results);
});


// Promise.allSettled() waits for all promises to finish (success or failure).

// It returns status of each promise.

// [
//  { status: "fulfilled", value: "Success" },
//  { status: "rejected", reason: "Failed" }
// ]