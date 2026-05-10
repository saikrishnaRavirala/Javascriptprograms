var a = [1, 2, 3, 4];
let res = [];
for (i = 0; i < a.length; i++) {
    res.push(a[i] * a.length)
}
console.log(res)
// 2
var a = [1, 2, 3, 4];
let resp = a.map(num => num * a.length);
console.log(resp);
// 3
var a = [1, 2, 3, 4];
let res1 = [];
a.forEach(num => res1.push(num * a.length));
console.log(res1);

// 4
var a = [1, 2, 3, 4];
let res4 = a.reduce((acc, num) => {
    acc.push(num * a.length);
    return acc;
}, []);
console.log(res4);
