let str = "I love javascript programming";
let longest = str.split(" ").reduce((a, b) => a.length > b.length ? a : b);
console.log(longest);
