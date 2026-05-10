var arr = [1, 2, 34];

console.log(arr.reverse())

function reverse(arr) {
    let res = [];
    for (i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i])
    }
    return res;
}
console.log(reverse([1, 2, 4, 77]))