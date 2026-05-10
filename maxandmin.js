function maxandmin(arr) {
    let max = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;

}
console.log(maxandmin([-3, 20, 1, 2, 3, 4, 5, -1, -2]))