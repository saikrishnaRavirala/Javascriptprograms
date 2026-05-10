function element(num) {
    var arr = [1, 2, 3, 4, 5];
    let flag = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            flag = 1
        }
    }
    if (flag == 1) {
        return "found"
    }
    else {
        return "not found";
    }
}
console.log(element(1))