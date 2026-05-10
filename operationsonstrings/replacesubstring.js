function replaceSubstring(str, oldSubstring, newSubstring) {
    return str.replace(new RegExp(oldSubstring, 'g'), newSubstring);
}

// Example usage:
const string = "Hello, World!";
const oldSubstring = "World";
const newSubstring = "Universe";
console.log("Modified string:", replaceSubstring(string, oldSubstring, newSubstring)); // Output: "Hello, Universe!"
