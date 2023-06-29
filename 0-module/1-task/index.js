function sum(m, n) {
  return typeof m === `number` && typeof n === `number`
    ? m + n
    : `Введите числа`;
}
console.log(sum(3, 4));
console.log(sum(3, `Ivan`));
