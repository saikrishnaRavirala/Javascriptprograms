function isAlphabet(char) {
    // Regular expression to match lowercase or uppercase letters
    const alphabetRegex = /[a-zA-Z]/;

    // Test if the character matches the regular expression
    return alphabetRegex.test(char);
}

// Example usage:
const character1 = 'A';
const character2 = '3';
console.log("Is", character1, "an alphabet?", isAlphabet(character1)); // true
console.log("Is", character2, "an alphabet?", isAlphabet(character2)); // false
