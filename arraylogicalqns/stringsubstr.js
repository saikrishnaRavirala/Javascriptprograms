function substr(){
    var val = "Hello world";
    const res = val.match(/Hello/g); 
    console.log(res);
    console.log(val.includes("Hello"))
}
substr()