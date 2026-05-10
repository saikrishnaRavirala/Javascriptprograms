function armStronNum(num) {
    var temp = num;
    var sum = 0;
    var rem = 0;
    while (temp !== 0) {
        rem = temp % 10;
        sum += rem * rem * rem;
        temp = Math.floor(temp / 10); // Integer division to get the next digit
    }
    if (sum === num) {
        return "armstrongnum";
    } else {
        return "not armstrongnum";
    }
}

console.log(armStronNum(153)); // Output: not armstrongnum
