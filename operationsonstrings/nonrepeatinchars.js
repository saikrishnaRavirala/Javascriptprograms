function findNonRepeatingCharacters(str) {
    const frequency = {};

    // Iterate through each character of the string and count its occurrences
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    // Filter out characters with a count of 1
    const nonRepeatingCharacters = Object.keys(frequency).filter(char => frequency[char] === 1);

    return nonRepeatingCharacters;
}

// Example usage:
const string = "hello world";
console.log("Non-repeating characters:", findNonRepeatingCharacters(string));
