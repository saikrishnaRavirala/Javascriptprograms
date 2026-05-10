function permuteString(str) {
    // Convert the string to an array to make it mutable
    const chars = str.split('');

    // Sort the array to generate permutations in lexicographically sorted order
    chars.sort();

    // Helper function to generate permutations recursively
    function generatePermutations(prefix, remainingChars) {
        // If there are no remaining characters, print the prefix
        if (remainingChars.length === 0) {
            console.log(prefix);
            return;
        }

        // Iterate through each character in the remaining characters
        for (let i = 0; i < remainingChars.length; i++) {
            // Exclude adjacent duplicate characters to avoid duplicates in permutations
            if (i === 0 || remainingChars[i] !== remainingChars[i - 1]) {
                // Generate permutations recursively by appending the current character to the prefix
                generatePermutations(prefix + remainingChars[i], remainingChars.slice(0, i) + remainingChars.slice(i + 1));
            }
        }
    }

    // Start with an empty prefix and the array of characters
    generatePermutations('', chars.join(''));
}

// Example usage:
const string = "abc";
console.log("Permutations in lexicographically sorted order:");
permuteString(string);
