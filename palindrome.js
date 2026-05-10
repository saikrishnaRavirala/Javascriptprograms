// function palindrome(str){
// let reverse = "";
// for(i= str.length-1 ; i>=0; i--){
//     reverse +=str[i]
// }
// if(reverse === str){
//     console.log(true)
// }
// else{
//     console.log(false)
// }
// }
// palindrome("malayalam")

function palindrome(num) {
    let val = num.toString();
    let res = '';
    for (i = val.length - 1; i >= 0; i--) {
        res += val[i];
    }
    const result = parseInt(res);
    if (result == num) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
palindrome(111)