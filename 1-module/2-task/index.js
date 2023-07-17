/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
function isValid(userName) {
  if (
    userName.length !== 0 &&
    userName.length >= 4 &&
    !userName.includes(" ")
  ) {
    return true;
  }
  return false;
}
 */
function isValid(name) {
  if (
    typeof name == "string" &&
    name.length >= 4 &&
    name.split(" ")[0] == name
  ) {
    return true;
  }

  return false;
}

function sayHello() {
  let userName = prompt("Введите ваше имя");
  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}
