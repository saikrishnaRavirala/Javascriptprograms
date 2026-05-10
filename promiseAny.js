const p1 = Promise.reject("Error 1");

const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Success"), 2000)
);

const p3 = Promise.reject("Error 2");

Promise.any([p1, p2, p3]).then((result) => {
  console.log(result);
});


// Promise.any() returns the first successful promise.

// It ignores rejected promises.