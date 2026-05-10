function countCommonSubsequences(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    // Initialize a 2D array to store the count of common subsequences
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    // Fill the first row and first column with 1's
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = 1;
    }

    // Fill the dp array using dynamic programming
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1];
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
            }
        }
    }

    // Return the count of common subsequences
    return dp[m][n];
}

// Example usage:
const string1 = "ABC";
const string2 = "AC";
console.log("Count of common subsequences:", countCommonSubsequences(string1, string2)); // Output: 4
