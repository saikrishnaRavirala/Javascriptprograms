var arr = [12,3,4];

for(i = 0 ;i<arr.length;i++){
    console.log(arr[i])
    console.log(i)
}
// it will prints the values directly
for(let a of arr){
    console.log(arr[a])
}
for(let a of arr){
    console.log(a)
}
// it will gives the indexes and values also
for(let a in arr){
    console.log(arr[a])
}
// array constructor new Array()