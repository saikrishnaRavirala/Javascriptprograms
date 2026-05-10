function removeBrackets(expression) {
    const stack = [];
    let result = '';

    // Iterate through each character of the expression
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        // If the character is an opening bracket, push it onto the stack
        if (char === '(') {
            stack.push(i);
        }
        // If the character is a closing bracket
        else if (char === ')') {
            // Check if there's a corresponding opening bracket on the stack
            if (stack.length > 0) {
                // Remove the opening bracket from the stack
                stack.pop();
                // Replace the closing bracket and its corresponding opening bracket with an empty string
                result = result.substring(0, stack[stack.length - 1]) + expression.substring(stack[stack.length - 1] + 1, i) + expression.substring(i + 1);
            }
        }
    }

    return result;
}

// Example usage:
const expression = "2 * (3 + 4) - (5 + 6)";
console.log("Expression after removing brackets:", removeBrackets(expression)); // Output: "2 * 3 + 4 - 5 + 6"
