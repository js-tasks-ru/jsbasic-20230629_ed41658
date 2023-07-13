function getMinMax(str) {
  const result = {
    min: 0,
    max: 0,
  };
  let arr = str.split(" ")
  .filter(item => !isNaN(Number(item)))
  .map(item => Number(item))
  .sort((a, b) => a - b);
  result.min = arr[0];
  result.max = arr[arr.length - 1];
  return result;
}