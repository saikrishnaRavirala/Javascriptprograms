//program to count the vowels in string
function vowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(vowels("saikrishna"));


//program to count the vowels in string
function vowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = [];

    for (let char of str) {
        if (vowels.includes(char)) {
            result.push(char)
        }
    }

    return result;
}

console.log(vowels("sai"));



//program to count the vowels in string
function vowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';

    for (let char of str) {
        if (vowels.includes(char)) {
            result+=char;
        }
    }

    return result;
}

console.log(vowels("sai"));

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(countVowels("hello")); // 2