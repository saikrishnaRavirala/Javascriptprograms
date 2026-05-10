function removeNonAlphabetic(str) {
    // Define a regular expression to match non-alphabetic characters
    const nonAlphabeticRegex = /[^a-zA-Z]/g;

    // Use the replace method with the regular expression to remove all non-alphabetic characters from the string
    return str.replace(nonAlphabeticRegex, '');
}

// Example usage:
const string = "Hello, 123 World!";
console.log("String after removing non-alphabetic characters:", removeNonAlphabetic(string)); // Output: "HelloWorld"
