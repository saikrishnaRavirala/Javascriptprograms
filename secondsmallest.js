function secondLargest(arr){
  let sortedArray = arr.sort((a,b)=>b-a);
  console.log(sortedArray[1]);
}
secondLargest([1, 2, 6, 7, 8, 9])

// ascending
function secondLargest(arr){
  let sortedArray = arr.sort((a,b)=>a-b);
  console.log(sortedArray[1]);
}
secondLargest([1, 2, 6, 7, 8, 9])