function largestSubArray(arr) {
  return arr.map(sub => Math.max(...sub));
}

console.log(largestSubArray([[20,30,40],[2,34]])); // [40, 34]

function largestSubArray(arr) {
  return arr.map(sub => Math.min(...sub));
}

console.log(largestSubArray([[20,30,40],[2,34]])); // [20,2]