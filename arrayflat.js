const arr = [1, 2, [3, 4]];
console.log(arr.flat())


const arrone = [1, [2, [3, [4]]]];
console.log(arrone.flat(2));
// [1, 2, 3, [4]]


const arrtwo = [1, [2, [3, [4]]]];
console.log(arrtwo.flat(3));
// [1, 2, 3, [4]]


const arrthree = [1, [2, [3, [4]]]];

console.log(arrthree.flat(Infinity));
// [1, 2, 3, 4]



const arrfour = [1, 2, 3];
const result = arrfour.flatMap(x=>[x,x*2]);
console.log(result)