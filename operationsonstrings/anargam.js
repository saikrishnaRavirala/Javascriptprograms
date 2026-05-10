function areAnagrams(str1, str2) {
    // If the lengths of the strings are different, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Initialize frequency objects for both strings
    const frequency1 = {};
    const frequency2 = {};

    // Count the frequency of characters in the first string
    for (let char of str1) {
        frequency1[char] = (frequency1[char] || 0) + 1;
    }

    // Count the frequency of characters in the second string
    for (let char of str2) {
        frequency2[char] = (frequency2[char] || 0) + 1;
    }

    // Compare the frequency of characters in both strings
    for (let char in frequency1) {
        if (frequency1[char] !== frequency2[char]) {
            return false;
        }
    }

    // If all characters have the same frequency in both strings, they are anagrams
    return true;
}

// Example usage:
const string1 = "listen";
const string2 = "silent";
console.log("Are the strings anagrams?", areAnagrams(string1, string2)); // Output: true
