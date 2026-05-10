function countDuplicates(arr){
    let freq = {};
    let count = 0;
    let duplicates = [];

    for(let num of arr){
        freq[num] = (freq[num] || 0) + 1;
    }

    for(let key in freq){
        if(freq[key] > 1){
            count++;
            duplicates.push(Number(key))
        }
    }
    return duplicates;
    // return count;
}

console.log(countDuplicates([1,2,3,4,3,4,2]));


// counting duplicate elements and printing as well