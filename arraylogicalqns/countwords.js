function countwords(str){
    let result = str.split(" ");
    return result.length;
}
// console.log(countwords("hello world"))

// This is for counting chars in string

function countstr(str){
    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] !== ' '){
            count++;
        }
    }

    return count;
}

console.log(countstr("ehhh wkkkk whhwh"));

// this is for counting spaces
function countstr(str){
    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] == ' '){
            count++;
        }
    }

    return count;
}

console.log(countstr("ehhh wkkkk whhwh"));