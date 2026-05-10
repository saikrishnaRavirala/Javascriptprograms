function matchWithWildcard(str, pattern) {
    // If both strings are empty, they match
    if (str === '' && pattern === '') {
        return true;
    }

    // If pattern is empty and str is not, they don't match
    if (pattern === '') {
        return false;
    }

    // If pattern starts with '*', then it can match 0 or more characters
    if (pattern[0] === '*') {
        // Check if the remaining pattern matches the string with or without the current character
        return matchWithWildcard(str, pattern.slice(1)) || (str !== '' && matchWithWildcard(str.slice(1), pattern));
    }

    // If pattern starts with any other character, it must match the corresponding character in str
    if (str !== '' && (pattern[0] === '?' || str[0] === pattern[0])) {
        return matchWithWildcard(str.slice(1), pattern.slice(1));
    }

    // If none of the above conditions are met, the strings don't match
    return false;
}

// Example usage:
const string = "hello world";
const pattern = "h*o?d";
console.log("Do they match?", matchWithWildcard(string, pattern)); // Output: true
