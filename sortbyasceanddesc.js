function sortbyHalf(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middleIndex);
  const secondHalf = arr.slice(middleIndex);
  firstHalf.sort((a, b) => a - b);
  secondHalf.sort((a, b) => b - a);

  return {
    firstHalf,
    secondHalf
  }
}
let myArr = [1, 2, 3, 5, 6, 7];
console.log(sortbyHalf(myArr))