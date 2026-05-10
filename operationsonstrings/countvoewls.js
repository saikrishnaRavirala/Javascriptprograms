function countVowels(str) {
    // Define a regular expression to match vowels (both uppercase and lowercase)
    const vowelRegex = /[aeiouAEIOU]/g;

    // Use the match method with the regular expression to find all occurrences of vowels in the string
    const matches = str.match(vowelRegex);

    // If matches are found, return the count of matches; otherwise, return 0
    return matches ? matches.length : 0;
}

// Example usage:
const string = "Hello, World!";
console.log("Number of vowels in the string:", countVowels(string));
