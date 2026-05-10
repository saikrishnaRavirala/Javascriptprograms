const p1 = Promise.resolve("API 1");
const p2 = Promise.resolve("API 2");
const p3 = Promise.resolve("API 3");

Promise.all([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise.all() runs multiple promises in parallel and returns one result when all promises are resolved.

// If any promise fails → the whole Promise.all fails.

//   Promise.all([
//   fetch("/users"),
//   fetch("/orders"),
//   fetch("/products")
// ])
// .then((responses) => {
//   console.log("All APIs finished");
// });