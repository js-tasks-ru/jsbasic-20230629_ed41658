function factorial(n) {
  return n === 0 || n === 1
    ? 1
    : (() => {
        let result = 1;
        for (let i = 2; i <= n; i++) {
          result *= i;
        }
        return result;
      })();
}

console.log(factorial(4));
console.log(factorial(1));
