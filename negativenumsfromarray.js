function negativenumsfromarray(arr){
    let res = [];
    for(let val of arr){
      if(val>=0){
        console.log(val);
        res.push(val);
      }
    }
    console.log(res);

}
negativenumsfromarray([1,2,3,-3])