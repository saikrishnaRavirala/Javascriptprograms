function isVowel(char) {
    // Convert the character to lowercase to handle both uppercase and lowercase vowels
    const lowerChar = char.toLowerCase();

    // Check if the character is a vowel
    return lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u';
}

// Example usage:
const character = 'A';
console.log("Is", character, "a vowel?", isVowel(character));
