// // array length without method
// method 1
var arr = [12,33,44];

function arrayLength(){
    var temp = 0;
    while(arr[temp]!==undefined){
        temp ++;
    }
    return temp;
}

// method 2

console.log(arr.length)

