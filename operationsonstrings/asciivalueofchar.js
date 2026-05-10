function getAsciiValue(char) {
    // Get the ASCII value of the character
    return char.charCodeAt(0);
}

// Example usage:
const character = 'A';
console.log("ASCII value of", character, "is", getAsciiValue(character));
