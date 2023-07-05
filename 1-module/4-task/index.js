function checkSpam(str) {
  if (
    str.toLowerCase().includes("1xbet") ||
    str.toLowerCase().includes("xxx")
  ) {
    return true;
  }
  return false;
}
console.log(checkSpam("1XbeT now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
