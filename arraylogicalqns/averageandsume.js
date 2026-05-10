var arr = [1, 2, 3, 4];
// average of a nums

let sum = 0;
// let n = arr.length;
for (i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
// console.log(sum/2);     

// using reduce method
console.log(arr.reduce((prev, cur) => {
    return prev + cur;
}))

