function ucFirst(str) {
  if (typeof str === "string") {
    if (str.length === 0) {
      return "";
    } else if (str.length === 1) {
      return str.toUpperCase();
    } else {
      return str[0].toUpperCase() + str.slice(1);
    }
  }
}

console.log(ucFirst(`вася`));
console.log(ucFirst(`ш`));
console.log(ucFirst(` `));
