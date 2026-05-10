function sumOfNumbers(str) {
    let currentNumber = 0;
    let sum = 0;

    // Iterate through each character of the string
    for (let char of str) {
        // If the character is a digit, accumulate it to form a number
        if (/\d/.test(char)) {
            currentNumber = currentNumber * 10 + parseInt(char);
        }
        // If the character is not a digit and a number has been accumulated, add it to the sum and reset the current number
        else if (currentNumber > 0) {
            sum += currentNumber;
            currentNumber = 0;
        }
    }

    // Add the last accumulated number to the sum
    sum += currentNumber;

    return sum;
}

// Example usage:
const string = "Hello 123 World 456!";
console.log("Sum of numbers in the string:", sumOfNumbers(string)); // Output: 579
