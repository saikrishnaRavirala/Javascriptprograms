function repeatedElements(arr) {
    let obj = {};
    for (const ele of arr) {
        obj[ele] = (obj[ele] || 0) + 1
    }
    return obj;
}
let myArr = [1, 2, 3, 4, 3, 4, 2];
console.log(repeatedElements(myArr))