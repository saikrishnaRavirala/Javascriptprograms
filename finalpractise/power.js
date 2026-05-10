function power(base, exponent){
    let result = 1;
    for(i=1;i<=exponent;i++){
        result = result*base;
    }
    return result
}
console.log(power(3,3))