function capitalizeFirstAndLast(str) {
    // Split the string into words
    const words = str.split(' ');

    // Capitalize the first and last character of each word
    const capitalizedWords = words.map(word => {
        if (word.length === 1) {
            return word.toUpperCase(); // If the word has only one character, capitalize it
        } else {
            return word[0].toUpperCase() + word.slice(1, -1) + word[word.length - 1].toUpperCase();
        }
    });

    // Join the words back together to form the modified string
    return capitalizedWords.join(' ');
}

// Example usage:
const string = "hello world";
console.log("String with first and last characters of each word capitalized:", capitalizeFirstAndLast(string)); // Output: "HellO WorlD"
