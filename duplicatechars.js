function findDuplicates(str) {
  let map = {};
  let duplicates = [];

  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let key in map) {
    if (map[key] > 1) duplicates.push(key);
  }

  return duplicates;
}

console.log(findDuplicates("programming")); // ['r','g','m']