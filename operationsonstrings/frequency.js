function calculateCharacterFrequency(str) {
    const frequency = {};

    // Iterate through each character of the string
    for (let char of str) {
        // If the character is already in the frequency object, increment its count; otherwise, initialize its count to 1
        frequency[char] = (frequency[char] || 0) + 1;
    }

    return frequency;
}

// Example usage:
const string = "hello world";
console.log("Character frequency:", calculateCharacterFrequency(string));
