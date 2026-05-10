// Creates a rejected promise immediately.
Promise.reject("Something went wrong")
  .catch((error) => {
    console.log(error);
  });



  | Method             | Behavior                         |
| ------------------ | -------------------------------- |
| Promise.all        | Waits for all promises           |
| Promise.race       | Returns first finished promise   |
| Promise.allSettled | Returns results of all promises  |
| Promise.any        | Returns first successful promise |
| Promise.resolve    | Creates resolved promise         |
| Promise.reject     | Creates rejected promise         |
