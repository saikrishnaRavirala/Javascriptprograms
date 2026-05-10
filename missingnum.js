let arr = [1, 2, 3, 5];
let n = 5;

function missingNumber(arr, n) {
  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}

console.log(missingNumber(arr, n));