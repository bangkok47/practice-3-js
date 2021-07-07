export default function filterTable(tbody, filters) {
  function filterRow(row, filter) {
    for (let [key, value] of Object.entries(filter)) {
      let td = row.querySelector(`[data-field-name='${key}']`);
      if (!td.textContent.includes(value)) {
        return false;
      }
    }
    return true;
  }

  let rowNumber = 1;

  for (let row of tbody.rows) {
    if (filterRow(row, filters)) {
      row.classList.remove('d-none');
      row.firstElementChild.innerHTML = String(rowNumber++);
      if (rowNumber % 2) {
        row.classList.add('table-row-even');
      } else {
        row.classList.remove('table-row-even');
      }
    } else {
      row.classList.add('d-none');
    }
  }
}
