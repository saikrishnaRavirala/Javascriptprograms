// function swap(a,b){
//     let temp = a;
//     a = b;
//     b = temp;
//     console.log(a)
//     console.log(b)
// }
// swap(5,6)

// function swap(a,b){
//     a = a+b; 
//     b = a - b;
//     a = a - b;
//     console.log(a)
//     console.log(b)
// }
// swap(5,6)

function swapnums(a,b){
    [a,b]=[b,a];
    console.log(a)
    console.log(b)
}
swapnums(5,6)

 function swap(a,b){
  [a,b] = [b,a];
  return [a,b]
 }
 console.log(swap(1,2))