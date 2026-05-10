function primeNumber(num) {
  let value = 'not a prime number';
  if (num <= 1) {
    return value;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return value;
    }
  }
  return "primenumber"
}
console.log(primeNumber(7))