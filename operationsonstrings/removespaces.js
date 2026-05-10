function removeSpaces(str) {
    let result = '';

    // Iterate through each character of the string
    for (let i = 0; i < str.length; i++) {
        // If the character is not a space, append it to the result string
        if (str[i] !== ' ') {
            result += str[i];
        }
    }

    return result;
}

// Example usage:
const string = "Hello, World!";
console.log("String after removing spaces:", removeSpaces(string)); // Output: "Hello,World!"
