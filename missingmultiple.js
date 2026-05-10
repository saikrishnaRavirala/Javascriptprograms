function missing(arr) {
  let obj = {};
  let result = [];

  for (let val of arr) {
    obj[val] = val;
  }

  for (let i = 1; i <= arr.length; i++) {
    if (obj[i] === undefined) {
      result.push(i);
    }
  }

  return result;
}

console.log(missing([5, 3, 8, 10, 14, 5, 7, 15, 17, 12]));