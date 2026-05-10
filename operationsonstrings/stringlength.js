function getStringLength(str) {
    let length = 0;

    // Iterate through each character of the string until the end is reached
    for (let char of str) {
        length++;
    }

    return length;
}

// Example usage:
const string = "Hello, World!";
console.log("Length of string:", getStringLength(string));
