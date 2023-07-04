/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так, || name.length >= 4 || !name.includes(" ")
 * чтобы функция sayHello работала корректно
 * Необходимо, чтобы на сайте можно было поприветствовать только пользователей, которые удовлетворяют следующему условию – имя не пустое, без пробелов, минимум 4 символа.
 */
function isValid(name) {
  if (name === null) {
    return false;
  } else if (name.length < 4) {
    return false;
  } else if (name.includes(" ")) {
    return false;
  } else return true;
}

function sayHello(userName) {
  let userName = prompt("Введите ваше имя");

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}
