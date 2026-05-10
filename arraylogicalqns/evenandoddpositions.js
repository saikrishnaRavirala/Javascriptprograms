var arr = [1, 3, 4, 5, 6, 9, 7];
let count = 0;
for (i = 0; i < arr.length - 1; i++) {
    // conditon i%2==0 and i%2!==0
    if (arr[i] % 2 != 0) {
        count++
    }

}
console.log(count)