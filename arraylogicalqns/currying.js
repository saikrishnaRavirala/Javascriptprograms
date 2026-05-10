function currying(a){
    return (b)=>{
        return(c)=>{
            return a+b+c;
        }
    }
}
console.log(currying(1)(2)(3))