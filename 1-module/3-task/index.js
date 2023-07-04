function ucFirst(str) {
  if (typeof str === "string") {
    return str.length === 1
      ? str.toUpperCase()
      : str[0].toUpperCase() + str.slice(1);
  }
}

console.log(ucFirst(`вася`));
console.log(ucFirst(`ш`));
console.log(ucFirst(` `));
