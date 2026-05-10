// function factorial(num){
//     if(num == 0 || num == 1){
//         return 1;
//     }
//     else{
//          return num*factorial(num-1)
//     }
// }
// console.log(factorial(5))

function factorial(num) {
    let fact = 1;
    if (num == 0 || num == 1) {
        return fact;
    }
    while (num > 1) {
        fact = fact * num;
        num--;
    }
    return fact;
}
console.log(factorial(4))


function factorial(num){
  let result = num === 0 || num === 1 ? 1 : num * factorial(num-1);
  return result;
}

console.log(factorial(5));