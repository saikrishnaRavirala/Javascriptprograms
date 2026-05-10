var arr = [1,2,34,40];


// shift and unshift at the begining
// push and pop at the end of array

console.log(arr.push(10));
// console.log(arr)
console.log(arr.pop());
// console.log(arr)
console.log(arr.shift());
console.log(arr.unshift(100,200))
// console.log(arr)

// indexOf()
console.log(arr.indexOf(1))
// lastIndexOf()
console.log(arr.lastIndexOf(40))
// join()
console.log(arr.join('*'))
// reverse()
console.log(arr.reverse())
// includes 
console.log(arr.includes(1)) 
// concat - it will creates new array instead of modifying the existing one
console.log(arr.concat(2303,40))
console.log(arr)