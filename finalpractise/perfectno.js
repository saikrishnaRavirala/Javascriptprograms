// todo
function perfect(num) {
    var flag = num;
    let addition = 0;
    for (i = 1; i < num; i++) {
        if (num % i == 0) {
            addition += i;
        }
        else {
            return false
        }
    }
}
console.log(perfect(6))