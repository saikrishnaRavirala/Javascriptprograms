function replaceWord(str, targetWord, newWord) {
    // Split the string into an array of words
    const words = str.split(' ');

    // Iterate over each word in the array
    for (let i = 0; i < words.length; i++) {
        // If the current word matches the target word, replace it with the new word
        if (words[i] === targetWord) {
            words[i] = newWord;
        }
    }

    // Join the array of words back into a string
    return words.join(' ');
}

// Example usage:
const string = "Hello world, hello universe!";
const targetWord = "hello";
const newWord = "goodbye";
console.log("Modified string:", replaceWord(string, targetWord, newWord)); // Output: "Hello world, goodbye universe!"
