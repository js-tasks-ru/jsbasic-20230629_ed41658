function makeDiagonalRed(table) {
  let diagonal = table.rows;
  for (let i = 0; i < diagonal.length; i++) {
    let colored = diagonal[i];
    let cell = colored.cells[i];
    cell.style.backgroundColor = "red";
  }
}
