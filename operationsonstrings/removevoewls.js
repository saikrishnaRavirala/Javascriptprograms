function removeVowels(str) {
    // Define a regular expression to match vowels (both uppercase and lowercase)
    const vowelRegex = /[aeiouAEIOU]/g;

    // Use the replace method with the regular expression to remove all occurrences of vowels in the string
    return str.replace(vowelRegex, '');
}

// Example usage:
const string = "Hello, World!";
console.log("String after removing vowels:", removeVowels(string));
