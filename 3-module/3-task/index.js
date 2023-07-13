function camelize(str) {
  let words = str.split('-');
  let camelized = words.map((words, index) => {
    return index === 0 ? words : words[0].toUpperCase() + words.slice(1);
  });
  return camelized.join('');
}
