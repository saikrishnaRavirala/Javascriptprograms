// string: The quick brown fox jumps over the lazy dog.
// output: 'eht kciuQ nworB xoF spmuJ revO ehT yzaL .goD'

function reverse(str) {
  let splittedString = str.split(" ");
  let final = "";

  for (let i = 0; i < splittedString.length; i++) {
    let result = splittedString[i];
    let value = result.split("").reverse().join("");
    value =  value.charAt(0)+ value.slice(1).toLowerCase();
    console.log(value)
    if (result[0] === result[0].toUpperCase()) {
      value = value.charAt(0)+ value.slice(1).toLowerCase();
    }

    final += value+" ";
  }

  return final;
}

console.log(reverse("The quick brown fox jumps over the lazy dog."));