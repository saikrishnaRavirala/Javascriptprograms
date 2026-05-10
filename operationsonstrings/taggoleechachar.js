function toggleString(str) {
    let toggledString = '';

    // Iterate through each character of the string
    for (let char of str) {
        // Toggle the character and append it to the result string
        toggledString += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }

    return toggledString;
}

// Example usage:
const string = "Hello, World!";
console.log("Toggled string:", toggleString(string));
