/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = this.render(rows);
  }

  render(rows) {
    // const table = document.querySelector('table');
    const table = document.createElement("table");
    const list = rows.reduce(function (resultList, currentRow) {
      return (
        resultList +
        `
        <tr>
          <td>${currentRow.name}</td>
          <td>${currentRow.age}</td>
          <td>${currentRow.salary}</td>
          <td>${currentRow.city}</td>
          <td><button>X</button></td>
         </tr>
      `
      );
    }, "");

    table.innerHTML = `
          <table>
            <thead>
              <tr>
                <td>Имя</td>
                <td>Возраст</td>
                <td>Зарплата</td>
                <td>Город</td>
                <td></td>
              </tr>
            </thead>
            <tbody>${list}</tbody>
          </table>
        `;

    let btn = table.querySelectorAll("button");

    for (let k of btn) {
      k.addEventListener("click", this.deleteTR);
    }

    return table;
  }

  deleteTR(event) {
    event.target.closest("tr").remove();
  }
}
