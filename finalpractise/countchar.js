function countChar(char) {
    var string = "string";
    let count = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] == char) {
            count++;
        }
    }
    return count;
}
console.log(countChar("s"))