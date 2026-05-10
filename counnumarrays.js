// count duplicate element with key index
function countnumarrays(arr,k){
  let count = 0;
  for(let val of arr){
    if(val === k){
      count++;
    }
  }
  return count;
}

console.log(countnumarrays([1,2,3,4,4,4],4))


// correct one 
let arr = [1,2,3,3,3,4];
let result = [...new Set(arr)];
console.log(result)


// remove duplicate nums from array
function duplicatnums(arr){
    let result = [];
    for(i=0;i<arr.length;i++){
        const exists = arr[i] in result;
        if(!exists){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(duplicatnums([1,2,3,4,3,5,4]))