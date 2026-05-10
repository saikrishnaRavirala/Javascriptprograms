function sortByFrequency(arr) {
    // Step 1: Find the frequency of each element
    const frequencyMap = {};
    arr.forEach(element => {
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    });
console.log(frequencyMap)
    // Step 2: Sort the elements based on their frequency
    arr.sort((a, b) => {
        if (frequencyMap[a] === frequencyMap[b]) {
            return a - b; // If frequencies are equal, sort by element value
        }
        return frequencyMap[b] - frequencyMap[a]; // Sort by frequency in descending order
    });

    return arr;
}

// Example usage:
const array = [4, 2, 7, 1, 9, 5, 7, 7, 2, 4];
const sortedArray = sortByFrequency(array);
console.log("Sorted Array by Frequency:", sortedArray);
