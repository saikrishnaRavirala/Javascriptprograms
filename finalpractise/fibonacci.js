function fibonacci(num) {
    var a = 0;
    var b = 1;
    console.log(a)
    console.log(b)
    for (i = 0; i <= num; i++) {
        var res = a + b;
        a = b;
        b = res;
        console.log(res)
    }
}
fibonacci(3)