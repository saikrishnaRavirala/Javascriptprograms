function perfectNum(num) {
    var temp = num;
    var count = 0;
    for (var i = 1; i < num; i++) {
        if (num % i == 0) {
            count += i;
        }
    }
    if (count == temp) {
        return "perfect";
    }
    else {
        return "node"
    }
    // return count === temp;
}

console.log(perfectNum(6)); // Output: true
