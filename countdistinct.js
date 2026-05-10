//one
function countDistinctElements(arr){
  return new Set(arr).size;
}

let array = [4,2,7,1,9,5,7,7,2,4];

console.log(countDistinctElements(array));


// two
function countDistinctElements(arr){
  let unique = [...new Set(arr)];
  return unique.length;
}

console.log(countDistinctElements([4,2,7,1,9,5,7,7,2,4]));




// three
function countDistinctElements(arr){
  return arr.filter((v,i)=>arr.indexOf(v)===i).length;
}

console.log(countDistinctElements([4,2,7,1,9,5,7,7,2,4]));