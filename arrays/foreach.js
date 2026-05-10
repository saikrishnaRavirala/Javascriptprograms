var arr = [12, 30, 40];
// foreach
arr.forEach((e) => {
    console.log(e)
})
// every
console.log(
    arr.every((e) => {
        return e > 10;

    }))
// some
console.log(arr.some((e) => {
    return e > 20;
}))
// filter

console.log(arr.filter((e)=>{
    return e % 4 == 0;
}))

// slice
console.log(arr.slice(0,1))
console.log(arr.slice(1))
console.log(arr.slice(-1))

// splice
console.log(arr.splice(0,1,100))

// reduce
console.log(arr.reduce((prev ,index)=>{
    return prev+index
}))