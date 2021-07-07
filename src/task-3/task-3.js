export default function filterTable(tbody, filters) {
  function filterRow(row, filter) {
    //console.log('row', row, 'filter', filter);
    for (let [key, value] of Object.entries(filter)) {
      //console.log(Object.entries(filter));
      let td = row.querySelector(`[data-field-name='${key}']`);
      console.log(td);
      if (!td.textContent.includes(value)) {
        //console.log(td.textContent.includes(value));
        return false;
      }
    }
    return true;
  }

  let rowNumber = 1;

  for (let row of tbody.rows) {
    //console.log('row', row, 'tbody.rows', tbody.rows);
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

/* 
1. вспомагательная функ filterRow(row, filter), где row - это все DOM-элем <tr>(которые в tbody?), filter - {obj где свойства которые мы фильтруем};

- в цикле - Object.entries(filter) - это массив массивов, который зависит от обьекта с данными, которые мы ищем. Где с помощью деструктуризации мы вытягиваем key, value.

- переменная td - это каждая строка td.(в виде<td data-field-name='...'>...</td>) 

- далее проверяем, (textContent - текст внутри элем) если в td тексте - нету value

2. rowNumber - это переменная для порядковой нумерации зебры.

3. в цикле row -это кадая строка (tr>td), tbody.rows - HTMLCollection - массив tr.

- проверка в которой результат функ filterRow на каждой итерации будет
 - присвоивать номер по порядку(с помощью %)
 - либо добавлять либо удалять классы 'd-none', 'table-row-even'

*/
