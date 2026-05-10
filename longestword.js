let str = "I love javascript programming";
let longest = str.split(" ").reduce((a, b) => a.length > b.length ? a : b);
console.log(longest);


// let str = 'I';

// let val = str.split(' ');
// let max = val[0];
// for (let i = 0; i < val.length; i++) {
//   if (val[i].length > max.length) {
//     max = val[i];
//   }
// }
// console.log(max);


// let str = "hello";
// let obj = {};

// for (let ch of str) {
//   obj[ch] = (obj[ch] || 0) + 1;
// }
// console.log(obj);