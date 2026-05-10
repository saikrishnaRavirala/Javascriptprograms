let obj = {
    name: "sai krishna",
    country: {
        state: "TS"
    }
};

// shallow copy
const result = Object.assign({}, obj);
result.country.state = "andra";
console.log(result);
console.log(obj);

// deep copy
const final = JSON.parse(JSON.stringify(obj))
final.country.state = "andra";
console.log(final)
console.log(obj)